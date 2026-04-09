import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import db from '../db/client.js';
import { otpRateLimit, verifyRateLimit, loginRateLimit } from '../middleware/ratelimit.js';
import { requireAuth } from '../middleware/auth.js';
import { revokeToken } from '../lib/token-revocation.js';

const router = Router();

// JWT expiry — 7 days (down from 30d; balances usability with security)
const JWT_EXPIRY = '7d';
const JWT_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000;

// Generate a 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Format phone for WATI (10-digit → 91XXXXXXXXXX)
function formatPhone(mobile) {
    const digits = mobile.replace(/\D/g, '');
    return digits.length === 10 ? '91' + digits : digits;
}

// Send OTP via WATI template message
async function sendOtpViaWati(mobile, otp) {
    const endpoint = process.env.WATI_ENDPOINT;
    const token = process.env.WATI_TOKEN;

    if (!endpoint || !token) {
        console.warn('[OTP] WATI not configured — OTP for', mobile, ':', otp);
        return { sent: true, dev: true };
    }

    const phone = formatPhone(mobile);
    const url = `${endpoint}/api/v1/sendTemplateMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            whatsappNumber: phone,
            templateName: 'retaileros_otp',
            broadcast_name: 'RetailerOS OTP',
            parameters: [
                { name: '1', value: otp }
            ]
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'WATI send failed');
    }

    return { sent: true, data };
}

// Issue JWT for a retailer — includes jti for revocation support
function issueToken(retailerId, retailerName) {
    const jti = randomUUID();
    const token = jwt.sign(
        { retailer_id: retailerId, retailer_name: retailerName, jti },
        process.env.JWT_SECRET,
        { expiresIn: JWT_EXPIRY }
    );
    return { token, jti };
}

/**
 * POST /api/auth/otp
 * { mobile: "9876543210" }
 * Generates OTP and sends via WATI — open to any valid mobile (no approval gate)
 */
router.post('/otp', otpRateLimit, async (req, res) => {
    const { mobile } = req.body;

    if (!mobile || !/^\d{10,12}$/.test(mobile.replace(/\D/g, ''))) {
        return res.status(400).json({ error: 'Invalid mobile number' });
    }

    const normalised = mobile.replace(/\D/g, '');

    // Admin-approval gate removed — any valid mobile can register or log in via OTP

    const otp = generateOtp();
    const expires = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    // Upsert OTP session
    await db.prepare(
        `INSERT OR REPLACE INTO otp_sessions (mobile, otp, expires, attempts) VALUES (?, ?, ?, 0)`
    ).run(normalised, otp, expires);

    try {
        await sendOtpViaWati(normalised, otp);
        res.json({ sent: true });
    } catch (err) {
        console.error('[OTP] WATI error:', err.message);
        // Still return success in dev if WATI misconfigured — OTP is in logs
        if (!process.env.WATI_ENDPOINT) {
            return res.json({ sent: true, dev: true });
        }
        res.status(502).json({ error: 'Failed to send OTP. Please try again.' });
    }
});

/**
 * POST /api/auth/verify
 * { mobile, otp, store_name?, owner_name?, email?, gst_number?, store_type? }
 * Verifies OTP; creates retailer using wizard fields if new, or issues token if existing
 */
router.post('/verify', verifyRateLimit, async (req, res) => {
    const { mobile, otp, store_name, owner_name, email, gst_number, store_type } = req.body;

    if (!mobile || !otp) {
        return res.status(400).json({ error: 'mobile and otp are required' });
    }

    const normalised = mobile.replace(/\D/g, '');
    const short = normalised.length === 12 ? normalised.slice(2) : normalised;

    // Find OTP session (try both formats)
    const session = await db.prepare(
        `SELECT * FROM otp_sessions WHERE mobile IN (?, ?) LIMIT 1`
    ).get(normalised, short);

    if (!session) {
        return res.status(400).json({ error: 'No OTP found. Please request a new one.' });
    }

    if (new Date(session.expires) < new Date()) {
        await db.prepare(`DELETE FROM otp_sessions WHERE mobile = ?`).run(session.mobile);
        return res.status(400).json({ error: 'OTP has expired. Please request a new one.' });
    }

    // Enforce max 5 attempts
    if (session.attempts >= 5) {
        await db.prepare(`DELETE FROM otp_sessions WHERE mobile = ?`).run(session.mobile);
        return res.status(429).json({ error: 'Too many attempts. Please request a new OTP.' });
    }

    if (session.otp !== otp) {
        // Increment attempts
        await db.prepare(`UPDATE otp_sessions SET attempts = attempts + 1 WHERE mobile = ?`).run(session.mobile);
        const remaining = 4 - session.attempts;
        return res.status(400).json({ error: `Invalid OTP. ${remaining > 0 ? remaining + ' attempts remaining.' : 'Last attempt.'}` });
    }

    // Valid — delete session (single-use)
    await db.prepare(`DELETE FROM otp_sessions WHERE mobile = ?`).run(session.mobile);

    // Find or create retailer
    let retailer = await db.prepare(
        `SELECT * FROM retailers WHERE mobile_number IN (?, ?) LIMIT 1`
    ).get(normalised, short);

    if (!retailer) {
        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
        const countRow = await db.prepare(
            `SELECT COUNT(*) as c FROM retailers WHERE retailer_code LIKE ?`
        ).get(`ROS-${dateStr}-%`);
        const seq = (parseInt(countRow.c) + 1).toString().padStart(4, '0');
        const retailerCode = `ROS-${dateStr}-${seq}`;
        const retailerId = `retailer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Use wizard-provided fields if present, otherwise set safe defaults
        await db.prepare(
            `INSERT INTO retailers (id, retailer_code, retailer_name, contact_person, email, mobile_number, vat_number, retailer_category, status, onboarded_at)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`
        ).run(
            retailerId,
            retailerCode,
            store_name?.trim() || 'RetailerOS User',
            owner_name?.trim() || null,
            email?.trim() || null,
            normalised,
            gst_number?.trim() || null,
            store_type?.trim() || null
        );

        retailer = await db.prepare(`SELECT * FROM retailers WHERE id = ?`).get(retailerId);
    }

    const { token } = issueToken(retailer.id, retailer.retailer_name || retailer.contact_person || 'Retailer');

    res.json({
        token,
        retailer_id: retailer.id,
        retailer_code: retailer.retailer_code,
        retailer_name: retailer.retailer_name || retailer.contact_person || 'Retailer'
    });
});

/**
 * POST /api/auth/login
 * { store_code: "ROS-20260224-0001" }
 * Code-based login (alternative to OTP)
 */
router.post('/login', loginRateLimit, async (req, res) => {
    const { store_code } = req.body;

    if (!store_code) {
        return res.status(400).json({ error: 'store_code is required' });
    }

    const retailer = await db.prepare(
        `SELECT * FROM retailers WHERE retailer_code = ? AND status = 'active' LIMIT 1`
    ).get(store_code.trim().toUpperCase());

    if (!retailer) {
        return res.status(403).json({ error: 'Invalid store code' });
    }

    const { token } = issueToken(retailer.id, retailer.retailer_name || retailer.contact_person || 'Retailer');

    res.json({
        token,
        retailer_id: retailer.id,
        retailer_code: retailer.retailer_code,
        retailer_name: retailer.retailer_name || retailer.contact_person || 'Retailer'
    });
});

/**
 * POST /api/auth/logout
 * Revokes the current JWT so it cannot be reused even before natural expiry.
 * Requires a valid JWT in the Authorization header.
 */
router.post('/logout', requireAuth, (req, res) => {
    const jti = req.token_jti;
    if (jti) {
        const expiresAt = Date.now() + JWT_EXPIRY_MS;
        revokeToken(jti, expiresAt);
    }
    res.json({ ok: true });
});

/**
 * POST /api/auth/register
 * Direct self-service registration — creates active retailer account immediately.
 * Board directive: no approval queue; let retailers start using the app right away.
 * { mobile_number, retailer_name, contact_person, email?, city_name?, state_name?, business_type?, gst_number? }
 */
router.post('/register', async (req, res) => {
    const { mobile_number, retailer_name, contact_person, email, city_name, state_name, business_type, gst_number } = req.body;

    if (!mobile_number || !retailer_name || !contact_person) {
        return res.status(400).json({ error: 'Store name, owner name, and mobile number are required' });
    }

    const digits = mobile_number.replace(/\D/g, '');
    if (!/^\d{10,12}$/.test(digits)) {
        return res.status(400).json({ error: 'Invalid mobile number' });
    }

    const normalised = digits.length === 12 ? digits.slice(2) : digits;

    // Check if already registered
    const existing = await db.prepare(
        `SELECT id FROM retailers WHERE mobile_number IN (?, ?) LIMIT 1`
    ).get(normalised, '91' + normalised);
    if (existing) {
        return res.status(409).json({ error: 'This mobile is already registered. Please login instead.' });
    }

    // Create active retailer account immediately — no pending queue
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
    const countRow = await db.prepare(
        `SELECT COUNT(*) as c FROM retailers WHERE retailer_code LIKE ?`
    ).get(`ROS-${dateStr}-%`);
    const seq = (parseInt(countRow.c) + 1).toString().padStart(4, '0');
    const retailerCode = `ROS-${dateStr}-${seq}`;
    const retailerId = `retailer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    await db.prepare(
        `INSERT INTO retailers (id, retailer_code, retailer_name, contact_person, email, mobile_number, vat_number, retailer_category, city_name, state_name, status, onboarded_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`
    ).run(
        retailerId,
        retailerCode,
        retailer_name.trim(),
        contact_person.trim(),
        email?.trim() || null,
        normalised,
        gst_number?.trim() || null,
        business_type?.trim() || null,
        city_name?.trim() || null,
        state_name?.trim() || null
    );

    const { token } = issueToken(retailerId, retailer_name.trim());

    res.json({
        success: true,
        token,
        retailer_id: retailerId,
        retailer_code: retailerCode,
        retailer_name: retailer_name.trim(),
        message: 'Account created successfully. Welcome to RetailerOS!'
    });
});


export { router as authRouter };
