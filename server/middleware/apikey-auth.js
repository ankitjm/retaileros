import crypto from 'crypto';
import { pool } from '../db/client.js';

/**
 * API key middleware for the public /v1/* endpoints.
 *
 * Key format:  ros_live_<40 hex chars>
 * Storage:     SHA-256 hash stored in api_keys.key_hash — raw key never stored.
 * Rate limit:  api_keys.rate_limit requests per day per key (resets at midnight UTC).
 *
 * Sets on req:
 *   req.retailer_id       — from the key's owner
 *   req.api_key_id        — row id in api_keys
 *   req.api_key_scopes    — string[] e.g. ["sales:read","customers:read"]
 */
export async function requireApiKey(req, res, next) {
    // Accept key from header (preferred) or query param (webhooks/simple integrations)
    const raw = req.headers['x-api-key'] || req.query.api_key;

    if (!raw) {
        return res.status(401).json({
            error: 'API key required',
            hint: 'Pass your key in the X-Api-Key header'
        });
    }

    // Validate format before hitting DB
    if (!/^ros_(live|test)_[a-f0-9]{40}$/.test(raw)) {
        return res.status(401).json({ error: 'Invalid API key format' });
    }

    const keyHash = crypto.createHash('sha256').update(raw).digest('hex');

    let key;
    try {
        const { rows } = await pool.query(
            `SELECT id, retailer_id, name, scopes, rate_limit,
                    requests_today, requests_reset_at, is_active, expires_at
             FROM api_keys
             WHERE key_hash = $1
             LIMIT 1`,
            [keyHash]
        );
        key = rows[0];
    } catch (err) {
        console.error('[ApiKey] DB lookup error:', err.message);
        return res.status(500).json({ error: 'Internal error' });
    }

    if (!key || !key.is_active) {
        return res.status(401).json({ error: 'Invalid or revoked API key' });
    }

    // Expiry check
    if (key.expires_at && new Date(key.expires_at) < new Date()) {
        return res.status(401).json({ error: 'API key expired' });
    }

    // Rate limit — reset counter when the reset timestamp has passed
    const now = new Date();
    const resetAt = key.requests_reset_at ? new Date(key.requests_reset_at) : null;
    let requestsToday = key.requests_today || 0;

    if (!resetAt || now >= resetAt) {
        requestsToday = 0; // New day — counter resets
    }

    if (requestsToday >= key.rate_limit) {
        const resetISO = resetAt ? resetAt.toISOString() : null;
        return res.status(429).json({
            error: 'Daily rate limit exceeded',
            limit: key.rate_limit,
            reset_at: resetISO
        });
    }

    // Compute next midnight UTC for reset timestamp
    const nextMidnight = new Date(now);
    nextMidnight.setUTCDate(nextMidnight.getUTCDate() + 1);
    nextMidnight.setUTCHours(0, 0, 0, 0);

    // Update usage counter asynchronously — don't block the request
    pool.query(
        `UPDATE api_keys
         SET requests_today   = $1,
             requests_reset_at = $2,
             last_used_at      = $3
         WHERE id = $4`,
        [requestsToday + 1, nextMidnight.toISOString(), now.toISOString(), key.id]
    ).catch(e => console.error('[ApiKey] Usage update error:', e.message));

    // Attach to request for downstream handlers
    req.retailer_id = key.retailer_id;
    req.api_key_id = key.id;
    req.api_key_scopes = JSON.parse(key.scopes || '[]');

    next();
}

/**
 * Scope guard — use after requireApiKey.
 * Usage:  router.get('/sales', requireApiKey, requireScope('sales:read'), handler)
 */
export function requireScope(scope) {
    return (req, res, next) => {
        if (!Array.isArray(req.api_key_scopes) || !req.api_key_scopes.includes(scope)) {
            return res.status(403).json({
                error: `Permission denied`,
                required_scope: scope,
                hint: 'Regenerate your API key with this scope enabled'
            });
        }
        next();
    };
}
