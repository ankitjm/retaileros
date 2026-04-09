import { Router } from 'express';
import jwt from 'jsonwebtoken';
import db from '../db/client.js';
import { otpRateLimit } from '../middleware/ratelimit.js';

const router = Router();

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

// Issue JWT for a retailer
function issueToken(retailerId, retailerName) {
    return jwt.sign(
        { retailer_id: retailerId, retailer_name: retailerName },
        process.env.JWT_SECRET,
        { expiresIn: '30d' }
    );
}

/**
 * POST /api/auth/otp
 * { mobile: "9876543210" }
 * Checks if mobile is in approved_retailers, generates OTP, sends via WATI
 */
router.post('/otp', otpRateLimit, async (req, res) => {
    const { mobile } = req.body;

    if (!mobile || !/^\d{10,12}$/.test(mobile.replace(/\D/g, ''))) {
        return res.status(400).json({ error: 'Invalid mobile number' });
    }

    const normalised = mobile.replace(/\D/g, '');
    const short = normalised.length === 12 ? normalised.slice(2) : normalised;

    // Check approved_retailers table
    const approved = await db.prepare(
        `SELECT * FROM approved_retailers WHERE mobile_number IN (?, ?, ?) LIMIT 1`
    ).get(normalised, short, '91' + short);

    if (!approved) {
        return res.status(403).json({ error: 'Mobile number not approved for RetailerOS access' });
    }

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
 * { mobile: "9876543210", otp: "123456" }
 * Verifies OTP, creates/finds retailer, returns JWT
 */
router.post('/verify', async (req, res) => {
    const { mobile, otp } = req.body;

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
        // Pull from approved_retailers to seed retailer record
        const approved = await db.prepare(
            `SELECT * FROM approved_retailers WHERE mobile_number IN (?, ?, ?) LIMIT 1`
        ).get(normalised, short, '91' + short);

        const date = new Date();
        const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
        const countRow = await db.prepare(
            `SELECT COUNT(*) as c FROM retailers WHERE retailer_code LIKE ?`
        ).get(`ROS-${dateStr}-%`);
        const seq = (parseInt(countRow.c) + 1).toString().padStart(4, '0');
        const retailerCode = `ROS-${dateStr}-${seq}`;
        const retailerId = `retailer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        await db.prepare(
            `INSERT INTO retailers (id, retailer_code, retailer_name, contact_person, email, mobile_number, status, onboarded_at)
             VALUES (?, ?, ?, ?, ?, ?, 'active', CURRENT_TIMESTAMP)`
        ).run(
            retailerId,
            retailerCode,
            approved?.retailer_name || 'RetailerOS User',
            approved?.contact_person || null,
            approved?.email || null,
            normalised
        );

        retailer = await db.prepare(`SELECT * FROM retailers WHERE id = ?`).get(retailerId);
    }

    const token = issueToken(retailer.id, retailer.retailer_name || retailer.contact_person || 'Retailer');

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
router.post('/login', async (req, res) => {
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

    const token = issueToken(retailer.id, retailer.retailer_name || retailer.contact_person || 'Retailer');

    res.json({
        token,
        retailer_id: retailer.id,
        retailer_code: retailer.retailer_code,
        retailer_name: retailer.retailer_name || retailer.contact_person || 'Retailer'
    });
});

/**
 * POST /api/auth/register
 * Self-service registration request (goes to pending queue for admin review)
 */
router.post('/register', async (req, res) => {
    const { mobile_number, retailer_name, contact_person, email, city_name, state_name, business_type } = req.body;

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

    // Check if already approved
    const approved = await db.prepare(
        `SELECT id FROM approved_retailers WHERE mobile_number IN (?, ?, ?) LIMIT 1`
    ).get(normalised, '91' + normalised, normalised);
    if (approved) {
        return res.status(409).json({ error: 'This mobile is already approved. Please login with OTP.' });
    }

    // Check if pending request exists
    const pending = await db.prepare(
        `SELECT id FROM registration_requests WHERE mobile_number = ? AND status = 'pending' LIMIT 1`
    ).get(normalised);
    if (pending) {
        return res.status(409).json({ error: 'A registration request for this number is already pending review.' });
    }

    await db.prepare(
        `INSERT INTO registration_requests (mobile_number, retailer_name, contact_person, email, city_name, state_name, business_type) VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(normalised, retailer_name.trim(), contact_person.trim(), email?.trim() || null, city_name?.trim() || null, state_name?.trim() || null, business_type?.trim() || null);

    res.json({ success: true, message: "Registration submitted! We'll review and activate your account within 24 hours." });
});

/**
 * POST /api/auth/demo
 * Auto-login to demo retailer (no credentials required)
 */
router.post('/demo', async (req, res) => {
    const retailer = await db.prepare(
        `SELECT * FROM retailers WHERE retailer_code = 'ROS-20260225-0001' AND status = 'active' LIMIT 1`
    ).get();

    if (!retailer) {
        return res.status(404).json({ error: 'Demo retailer not found. Please seed the database.' });
    }

    const token = issueToken(retailer.id, retailer.retailer_name || 'Demo Store');

    res.json({
        token,
        retailer_id: retailer.id,
        retailer_code: retailer.retailer_code,
        retailer_name: retailer.retailer_name || 'Demo Store'
    });
});

export { router as authRouter };
