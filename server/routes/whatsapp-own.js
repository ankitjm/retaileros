/**
 * Own WhatsApp routes — per-retailer QR-based connection
 * Uses Baileys via whatsapp-manager.js
 */

import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import {
    getSessionState,
    startSession,
    sendOwnMessage,
    disconnectSession
} from '../lib/whatsapp-manager.js';
import db from '../db/client.js';

const router = Router();

// All routes require JWT auth
router.use(requireAuth);

/**
 * POST /api/whatsapp/own/connect
 * Start QR generation for the authenticated retailer.
 * Frontend should then poll /qr every 2 seconds.
 */
router.post('/connect', async (req, res) => {
    const retailerId = req.retailer_id;

    try {
        await startSession(retailerId);

        // Mark as pending in retailer_plugins
        await upsertPlugin(retailerId, 'whatsapp_own', 'pending');

        res.json({ status: 'connecting', message: 'QR generation started — poll /api/whatsapp/own/qr' });
    } catch (err) {
        console.error('[WA Own] connect error:', err.message);
        res.status(500).json({ error: 'Failed to start WhatsApp session' });
    }
});

/**
 * GET /api/whatsapp/own/qr
 * Returns current session state + QR code base64 if available.
 * Frontend polls this every 2s while status is 'connecting'.
 */
router.get('/qr', async (req, res) => {
    const retailerId = req.retailer_id;
    const state = getSessionState(retailerId);

    // If now connected, update plugin record
    if (state.status === 'connected') {
        await upsertPlugin(retailerId, 'whatsapp_own', 'connected', { phone: state.phone });
    }

    res.json(state);
});

/**
 * GET /api/whatsapp/own/status
 * Returns just the status (no QR image) — lighter than /qr
 */
router.get('/status', (req, res) => {
    const retailerId = req.retailer_id;
    const state = getSessionState(retailerId);
    res.json({
        status: state.status,
        phone: state.phone,
        connectedAt: state.connectedAt
    });
});

/**
 * POST /api/whatsapp/own/send
 * { phone: "919876543210", message: "Hello!" }
 * Send message via retailer's own WhatsApp.
 */
router.post('/send', async (req, res) => {
    const retailerId = req.retailer_id;
    const { phone, message } = req.body;

    if (!phone || !message) {
        return res.status(400).json({ error: 'phone and message are required' });
    }

    const formatted = phone.replace(/\D/g, '');

    try {
        const result = await sendOwnMessage(retailerId, formatted, message);
        res.json(result);
    } catch (err) {
        // Return a clear error so caller can fall back to WATI
        res.status(503).json({ error: err.message, fallback: true });
    }
});

/**
 * DELETE /api/whatsapp/own/session
 * Disconnect and delete session for the authenticated retailer.
 */
router.delete('/session', async (req, res) => {
    const retailerId = req.retailer_id;

    try {
        await disconnectSession(retailerId);
        await upsertPlugin(retailerId, 'whatsapp_own', 'disconnected');
        res.json({ disconnected: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Helper: upsert retailer_plugins row
async function upsertPlugin(retailerId, key, status, config = null) {
    try {
        const id = `plugin_${retailerId}_${key}`;
        const now = new Date().toISOString();
        await db.prepare(`
            INSERT OR REPLACE INTO retailer_plugins (id, retailer_id, plugin_key, status, config, connected_at, updated_at)
            VALUES (?, ?, ?, ?, ?,
                CASE WHEN ? = 'connected' THEN ?
                     ELSE (SELECT connected_at FROM retailer_plugins WHERE id = ?)
                END, ?)
        `).run(id, retailerId, key, status, config ? JSON.stringify(config) : null, status, now, id, now);
    } catch (e) {
        console.warn('[WA Own] upsertPlugin error:', e.message);
    }
}

export { router as whatsappOwnRouter };
