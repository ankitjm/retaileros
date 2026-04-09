/**
 * WhatsApp Own-Number Session Manager
 * Uses Baileys (pure Node.js, no Puppeteer) to connect each retailer's
 * own WhatsApp number via QR code.
 *
 * Each retailer gets an isolated session stored in:
 *   server/whatsapp-sessions/{retailer_id}/
 *
 * States: 'idle' | 'connecting' | 'connected' | 'disconnected'
 */

import {
    makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    makeCacheableSignalKeyStore,
    Browsers
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import qrcode from 'qrcode';
import { mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import P from 'pino';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SESSIONS_DIR = join(__dirname, '../whatsapp-sessions');

// Ensure sessions directory exists
mkdirSync(SESSIONS_DIR, { recursive: true });

// In-memory session registry
// retailer_id → { socket, status, qr, qr_base64, phone, connectedAt }
const sessions = new Map();

// Suppress Baileys noisy logging in production
const logger = P({ level: 'silent' });

function getSessionDir(retailerId) {
    return join(SESSIONS_DIR, retailerId);
}

/**
 * Get current session state for a retailer
 */
export function getSessionState(retailerId) {
    const s = sessions.get(retailerId);
    if (!s) return { status: 'idle', qr_base64: null, phone: null };
    return {
        status: s.status,
        qr_base64: s.qr_base64 || null,
        phone: s.phone || null,
        connectedAt: s.connectedAt || null
    };
}

/**
 * Start WhatsApp connection for a retailer.
 * Generates QR code — poll getSessionState() every 2s to get it.
 */
export async function startSession(retailerId) {
    // If already connected, return current state
    const existing = sessions.get(retailerId);
    if (existing?.status === 'connected') {
        return getSessionState(retailerId);
    }

    // If already connecting, don't restart
    if (existing?.status === 'connecting') {
        return getSessionState(retailerId);
    }

    // Close any stale socket
    if (existing?.socket) {
        try { existing.socket.end(undefined); } catch {}
    }

    const sessionDir = getSessionDir(retailerId);
    mkdirSync(sessionDir, { recursive: true });

    // Set state to connecting
    sessions.set(retailerId, { status: 'connecting', qr_base64: null, phone: null });

    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version } = await fetchLatestBaileysVersion();

        const socket = makeWASocket({
            version,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, logger)
            },
            logger,
            browser: Browsers.macOS('RetailerOS'),
            printQRInTerminal: false,
            syncFullHistory: false
        });

        // Update session with socket reference
        const session = sessions.get(retailerId);
        session.socket = socket;

        // Handle QR code events
        socket.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect, qr } = update;
            const sess = sessions.get(retailerId);
            if (!sess) return;

            if (qr) {
                // Generate base64 QR image
                try {
                    sess.qr_base64 = await qrcode.toDataURL(qr, { margin: 2, width: 300 });
                    sess.status = 'connecting';
                } catch (e) {
                    console.error('[WA Manager] QR generation error:', e.message);
                }
            }

            if (connection === 'open') {
                sess.status = 'connected';
                sess.qr_base64 = null;
                sess.phone = socket.user?.id?.split(':')[0] || null;
                sess.connectedAt = new Date().toISOString();
                console.log(`[WA Manager] ${retailerId} connected as ${sess.phone}`);
            }

            if (connection === 'close') {
                const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
                const shouldReconnect = reason !== DisconnectReason.loggedOut;

                console.log(`[WA Manager] ${retailerId} disconnected, reason: ${reason}, reconnect: ${shouldReconnect}`);

                if (shouldReconnect && sess.status === 'connected') {
                    // Auto-reconnect on non-logout disconnections
                    setTimeout(() => startSession(retailerId), 3000);
                } else {
                    sess.status = 'disconnected';
                    sess.qr_base64 = null;
                    // If logged out, clear the session files
                    if (reason === DisconnectReason.loggedOut) {
                        try { rmSync(sessionDir, { recursive: true, force: true }); } catch {}
                        sessions.delete(retailerId);
                    }
                }
            }
        });

        // Save credentials whenever they update
        socket.ev.on('creds.update', saveCreds);

        return getSessionState(retailerId);

    } catch (err) {
        console.error(`[WA Manager] Failed to start session for ${retailerId}:`, err.message);
        const sess = sessions.get(retailerId);
        if (sess) { sess.status = 'disconnected'; sess.qr_base64 = null; }
        throw err;
    }
}

/**
 * Send a text message via the retailer's own WhatsApp.
 * Phone should be in format: "919876543210" (no + or spaces)
 */
export async function sendOwnMessage(retailerId, phone, message) {
    const sess = sessions.get(retailerId);
    if (!sess || sess.status !== 'connected') {
        throw new Error('WhatsApp not connected for this retailer');
    }

    // Ensure phone has @s.whatsapp.net suffix
    const jid = phone.includes('@') ? phone : `${phone}@s.whatsapp.net`;

    await sess.socket.sendMessage(jid, { text: message });
    return { sent: true, to: phone };
}

/**
 * Disconnect and clean up session
 */
export async function disconnectSession(retailerId) {
    const sess = sessions.get(retailerId);
    if (!sess) return;

    try {
        if (sess.socket) {
            await sess.socket.logout();
        }
    } catch {}

    const sessionDir = getSessionDir(retailerId);
    try { rmSync(sessionDir, { recursive: true, force: true }); } catch {}
    sessions.delete(retailerId);
}

/**
 * Restore sessions for all retailers that have saved auth state
 * Call this on server startup
 */
export async function restoreAllSessions() {
    if (!existsSync(SESSIONS_DIR)) return;

    const { readdirSync } = await import('fs');
    const dirs = readdirSync(SESSIONS_DIR);

    for (const retailerId of dirs) {
        const dir = join(SESSIONS_DIR, retailerId);
        const credsFile = join(dir, 'creds.json');
        if (existsSync(credsFile)) {
            console.log(`[WA Manager] Restoring session for retailer: ${retailerId}`);
            try {
                await startSession(retailerId);
            } catch (e) {
                console.warn(`[WA Manager] Failed to restore ${retailerId}:`, e.message);
            }
        }
    }
}
