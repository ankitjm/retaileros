/**
 * requireSubscription middleware
 *
 * Enforces the board-directed "pay before use" model.
 * Must run AFTER requireAuth (which sets req.retailer_id).
 *
 * Passes if:
 *   - BYPASS_SUBSCRIPTION_CHECK=true (development only)
 *   - retailer has an active, non-expired subscription in retailer_subscriptions
 *   - retailer is the demo account (retailer_code = 'ROS-20260225-0001')
 *
 * Returns 402 Payment Required otherwise.
 */

import { pool } from '../db/client.js';

// Cache the demo retailer ID after first lookup to avoid repeated DB hits
let _demoRetailerId = null;

async function getDemoRetailerId() {
    if (_demoRetailerId) return _demoRetailerId;
    const result = await pool.query(
        `SELECT id FROM retailers WHERE retailer_code = 'ROS-20260225-0001' LIMIT 1`
    );
    _demoRetailerId = result.rows[0]?.id || null;
    return _demoRetailerId;
}

export async function requireSubscription(req, res, next) {
    // Dev bypass — never enable in production
    if (process.env.BYPASS_SUBSCRIPTION_CHECK === 'true') {
        return next();
    }

    const retailer_id = req.retailer_id;
    if (!retailer_id) {
        // requireAuth should have caught this, but guard defensively
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        // Check for active, non-expired subscription
        const subResult = await pool.query(
            `SELECT id FROM retailer_subscriptions
             WHERE retailer_id = $1
               AND status = 'active'
               AND billing_end > NOW()::text
             LIMIT 1`,
            [retailer_id]
        );

        if (subResult.rows.length > 0) return next();

        // Allow demo retailer through without a subscription
        const demoId = await getDemoRetailerId();
        if (demoId && retailer_id === demoId) return next();

        // No active subscription — require payment
        return res.status(402).json({
            error: 'Subscription required',
            message: 'Please subscribe to access RetailerOS.',
            redirect: '/pay',
        });
    } catch (err) {
        console.error('[Subscription check error]', err.message);
        // Fail open on DB errors to avoid locking out users during outages
        return next();
    }
}
