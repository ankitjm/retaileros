/**
 * API Key Management — for the RetailerOS Settings > API screen.
 * These endpoints are for the retailer to manage their own keys.
 * Auth: retailer JWT (same as the rest of the app)
 *
 * Routes:
 *   GET    /api/api-keys          List all keys for this retailer
 *   POST   /api/api-keys          Create a new key (returns raw key ONCE)
 *   PATCH  /api/api-keys/:id      Update name / scopes / rate_limit
 *   DELETE /api/api-keys/:id      Revoke (soft delete — sets is_active = 0)
 */
import { Router } from 'express';
import crypto from 'crypto';
import { pool } from '../db/client.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// All routes require a logged-in retailer
router.use(requireAuth);

// ─── Allowed scopes (whitelist) ───────────────────────────────────────────────
const VALID_SCOPES = new Set([
    'sales:read',
    'customers:read',
    'inventory:read',
    'repairs:read',
    'reports:read',
    'devices:read',
]);

function validateScopes(scopes) {
    if (!Array.isArray(scopes)) return false;
    return scopes.every(s => VALID_SCOPES.has(s));
}

// ─── GET /api/api-keys ────────────────────────────────────────────────────────
router.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query(
            `SELECT id, name, key_prefix, scopes, rate_limit,
                    requests_today, last_used_at, is_active, created_at, expires_at
             FROM api_keys
             WHERE retailer_id = $1
             ORDER BY created_at DESC`,
            [req.retailer_id]
        );
        res.json({ keys: rows });
    } catch (err) {
        console.error('[API Keys] list error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── POST /api/api-keys ───────────────────────────────────────────────────────
router.post('/', async (req, res) => {
    const { name, scopes = [], rate_limit = 1000, expires_at = null } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return res.status(400).json({ error: 'Key name must be at least 2 characters' });
    }
    if (!validateScopes(scopes)) {
        return res.status(400).json({
            error: 'Invalid scopes',
            valid_scopes: [...VALID_SCOPES]
        });
    }
    if (scopes.length === 0) {
        return res.status(400).json({ error: 'At least one scope is required' });
    }

    const rl = parseInt(rate_limit, 10);
    if (isNaN(rl) || rl < 10 || rl > 100000) {
        return res.status(400).json({ error: 'rate_limit must be between 10 and 100000' });
    }

    // Check max keys per retailer (prevent abuse)
    const { rows: existing } = await pool.query(
        'SELECT COUNT(*) AS cnt FROM api_keys WHERE retailer_id = $1 AND is_active = 1',
        [req.retailer_id]
    );
    if (parseInt(existing[0]?.cnt || 0, 10) >= 10) {
        return res.status(400).json({ error: 'Maximum 10 active API keys per retailer' });
    }

    // Generate the raw key — shown ONCE, never stored
    const rawSecret = crypto.randomBytes(20).digest('hex'); // 40 hex chars
    const rawKey = `ros_live_${rawSecret}`;
    const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');
    const keyPrefix = `ros_live_${rawSecret.slice(0, 8)}`;

    const id = `akey_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    const now = new Date().toISOString();

    try {
        await pool.query(
            `INSERT INTO api_keys
                (id, retailer_id, name, key_hash, key_prefix, scopes,
                 rate_limit, requests_today, is_active, created_at, expires_at)
             VALUES ($1,$2,$3,$4,$5,$6,$7,0,1,$8,$9)`,
            [id, req.retailer_id, name.trim(), keyHash, keyPrefix,
             JSON.stringify(scopes), rl, now, expires_at || null]
        );
    } catch (err) {
        console.error('[API Keys] create error:', err.message);
        return res.status(500).json({ error: 'Internal error' });
    }

    // Return the raw key — this is the ONLY time it is returned
    res.status(201).json({
        success: true,
        key: rawKey,           // ← raw key, shown once
        key_prefix: keyPrefix,
        id,
        name: name.trim(),
        scopes,
        rate_limit: rl,
        created_at: now,
        warning: 'Copy this key now — it will never be shown again'
    });
});

// ─── PATCH /api/api-keys/:id ──────────────────────────────────────────────────
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, scopes, rate_limit } = req.body;

    // Fetch existing key — enforce tenant ownership
    const { rows } = await pool.query(
        'SELECT id, retailer_id, is_active FROM api_keys WHERE id = $1 LIMIT 1',
        [id]
    );
    const key = rows[0];

    if (!key || key.retailer_id !== req.retailer_id) {
        return res.status(404).json({ error: 'API key not found' });
    }
    if (!key.is_active) {
        return res.status(400).json({ error: 'Cannot update a revoked key' });
    }

    const updates = [];
    const vals = [];
    let idx = 1;

    if (name !== undefined) {
        if (typeof name !== 'string' || name.trim().length < 2) {
            return res.status(400).json({ error: 'Name must be at least 2 characters' });
        }
        updates.push(`name = $${idx++}`); vals.push(name.trim());
    }
    if (scopes !== undefined) {
        if (!validateScopes(scopes) || scopes.length === 0) {
            return res.status(400).json({ error: 'Invalid scopes', valid_scopes: [...VALID_SCOPES] });
        }
        updates.push(`scopes = $${idx++}`); vals.push(JSON.stringify(scopes));
    }
    if (rate_limit !== undefined) {
        const rl = parseInt(rate_limit, 10);
        if (isNaN(rl) || rl < 10 || rl > 100000) {
            return res.status(400).json({ error: 'rate_limit must be between 10 and 100000' });
        }
        updates.push(`rate_limit = $${idx++}`); vals.push(rl);
    }

    if (updates.length === 0) {
        return res.status(400).json({ error: 'Nothing to update' });
    }

    vals.push(id);
    try {
        await pool.query(
            `UPDATE api_keys SET ${updates.join(', ')} WHERE id = $${idx}`,
            vals
        );
        res.json({ success: true });
    } catch (err) {
        console.error('[API Keys] update error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── DELETE /api/api-keys/:id ─────────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const { rows } = await pool.query(
        'SELECT id, retailer_id FROM api_keys WHERE id = $1 LIMIT 1',
        [id]
    );
    const key = rows[0];

    if (!key || key.retailer_id !== req.retailer_id) {
        return res.status(404).json({ error: 'API key not found' });
    }

    try {
        // Soft revoke — keep audit trail, just deactivate
        await pool.query(
            'UPDATE api_keys SET is_active = 0 WHERE id = $1',
            [id]
        );
        res.json({ success: true, message: 'Key revoked' });
    } catch (err) {
        console.error('[API Keys] revoke error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

export { router as apiKeysRouter };
