/**
 * RetailerOS Admin Routes
 *
 * Public analytics endpoints (no auth — fire-and-forget from landing page):
 *   POST /api/analytics/cta     — log a CTA click event
 *   POST /api/analytics/waitlist — add a waitlist entry
 *
 * Protected admin endpoints (ADMIN_PASSWORD env var):
 *   GET  /api/admin/stats       — headline stats
 *   GET  /api/admin/signups     — all retailer signups
 *   GET  /api/admin/waitlist    — all waitlist entries
 *   GET  /api/admin/cta-stats   — CTA event breakdown
 *   GET  /api/admin/export      — CSV export of signups
 */

import { Router } from 'express';
import { pool } from '../db/client.js';

const router = Router();

// ── Admin auth middleware ───────────────────────────────────────────────────
function requireAdmin(req, res, next) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        return res.status(503).json({ error: 'Admin not configured' });
    }
    const auth = req.headers['x-admin-password'] || req.query.adminPassword;
    if (auth !== adminPassword) {
        return res.status(401).json({ error: 'Unauthorised' });
    }
    next();
}

// ── Public: log CTA click ──────────────────────────────────────────────────
router.post('/analytics/cta', async (req, res) => {
    try {
        const { cta_id, page } = req.body;
        if (!cta_id) return res.status(400).json({ error: 'cta_id required' });

        const ip = (req.headers['x-forwarded-for'] || req.ip || '').toString().split(',')[0].trim();
        const ua = (req.headers['user-agent'] || '').slice(0, 500);

        await pool.query(
            `INSERT INTO cta_events (cta_id, page, ip, user_agent) VALUES ($1, $2, $3, $4)`,
            [cta_id, page || 'landing', ip, ua]
        );
        res.json({ ok: true });
    } catch (err) {
        // Silent fail — analytics should never break the page
        console.error('[Admin] CTA event error:', err.message);
        res.json({ ok: true });
    }
});

// ── Public: add waitlist entry ─────────────────────────────────────────────
router.post('/analytics/waitlist', async (req, res) => {
    try {
        const { name, phone, email, store_type, city, source } = req.body;
        if (!phone && !email) {
            return res.status(400).json({ error: 'phone or email required' });
        }
        await pool.query(
            `INSERT INTO waitlist_entries (name, phone, email, store_type, city, source) VALUES ($1, $2, $3, $4, $5, $6)`,
            [name || null, phone || null, email || null, store_type || null, city || null, source || 'landing']
        );
        res.json({ ok: true });
    } catch (err) {
        console.error('[Admin] Waitlist error:', err.message);
        res.status(500).json({ error: 'Failed to save' });
    }
});

// ── Protected: headline stats ──────────────────────────────────────────────
router.get('/admin/stats', requireAdmin, async (req, res) => {
    const [signupRows, todayRows, waitlistRows, ctaTotalRows, ctaTodayRows] = await Promise.all([
        pool.query(`SELECT COUNT(*) AS total FROM retailers`),
        pool.query(`SELECT COUNT(*) AS total FROM retailers WHERE onboarded_at::date = CURRENT_DATE`),
        pool.query(`SELECT COUNT(*) AS total FROM waitlist_entries`),
        pool.query(`SELECT COUNT(*) AS total FROM cta_events WHERE page = 'landing'`),
        pool.query(`SELECT COUNT(*) AS total FROM cta_events WHERE page = 'landing' AND created_at::date = CURRENT_DATE`),
    ]);

    const totalSignups = parseInt(signupRows.rows[0].total, 10);
    const signupsToday = parseInt(todayRows.rows[0].total, 10);
    const waitlistTotal = parseInt(waitlistRows.rows[0].total, 10);
    const ctaTotal = parseInt(ctaTotalRows.rows[0].total, 10);

    // Conversion rate: signups / total landing CTA impressions (demo + get-started clicks)
    const conversionRate = ctaTotal > 0 ? ((totalSignups / ctaTotal) * 100).toFixed(1) : null;

    res.json({
        total_signups: totalSignups,
        signups_today: signupsToday,
        waitlist_total: waitlistTotal,
        cta_clicks_total: ctaTotal,
        cta_clicks_today: parseInt(ctaTodayRows.rows[0].total, 10),
        conversion_rate: conversionRate,
    });
});

// ── Protected: all signups ─────────────────────────────────────────────────
router.get('/admin/signups', requireAdmin, async (req, res) => {
    const limit = Math.min(parseInt(req.query.limit, 10) || 200, 1000);
    const offset = parseInt(req.query.offset, 10) || 0;

    const result = await pool.query(
        `SELECT id, retailer_code, retailer_name, contact_person, email, mobile_number,
                retailer_category, city_name, state_name, gst_number, status, onboarded_at
         FROM retailers
         ORDER BY onboarded_at DESC NULLS LAST
         LIMIT $1 OFFSET $2`,
        [limit, offset]
    );
    const countResult = await pool.query(`SELECT COUNT(*) AS total FROM retailers`);
    res.json({
        data: result.rows,
        total: parseInt(countResult.rows[0].total, 10),
        limit,
        offset,
    });
});

// ── Protected: waitlist entries ────────────────────────────────────────────
router.get('/admin/waitlist', requireAdmin, async (req, res) => {
    const result = await pool.query(
        `SELECT id, name, phone, email, store_type, city, source, created_at
         FROM waitlist_entries
         ORDER BY created_at DESC`
    );
    res.json({ data: result.rows, total: result.rowCount });
});

// ── Protected: CTA event breakdown ────────────────────────────────────────
router.get('/admin/cta-stats', requireAdmin, async (req, res) => {
    const [byType, byDay] = await Promise.all([
        pool.query(
            `SELECT cta_id, COUNT(*) AS count
             FROM cta_events
             GROUP BY cta_id
             ORDER BY count DESC`
        ),
        pool.query(
            `SELECT created_at::date AS day, COUNT(*) AS count
             FROM cta_events
             GROUP BY day
             ORDER BY day DESC
             LIMIT 30`
        ),
    ]);
    res.json({ by_type: byType.rows, by_day: byDay.rows });
});

// ── Protected: CSV export of signups ──────────────────────────────────────
router.get('/admin/export', requireAdmin, async (req, res) => {
    const result = await pool.query(
        `SELECT retailer_code, retailer_name, contact_person, email, mobile_number,
                retailer_category, city_name, state_name, gst_number, status, onboarded_at
         FROM retailers
         ORDER BY onboarded_at DESC NULLS LAST`
    );

    const header = 'Code,Store Name,Owner,Email,Phone,Type,City,State,GST,Status,Signed Up\n';
    const rows = result.rows.map(r => [
        r.retailer_code,
        r.retailer_name,
        r.contact_person,
        r.email,
        r.mobile_number,
        r.retailer_category,
        r.city_name,
        r.state_name,
        r.gst_number,
        r.status,
        r.onboarded_at,
    ].map(v => `"${(v || '').toString().replace(/"/g, '""')}"`).join(',')).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="retaileros-signups-${new Date().toISOString().slice(0, 10)}.csv"`);
    res.send(header + rows);
});

export { router as adminRouter };
