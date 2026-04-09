import jwt from 'jsonwebtoken';
import { isRevoked } from '../lib/token-revocation.js';

export function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        // Check explicit revocation (logout, admin-forced signout)
        if (payload.jti && isRevoked(payload.jti)) {
            return res.status(401).json({ error: 'Token has been revoked' });
        }

        req.retailer_id = payload.retailer_id;
        req.retailer_name = payload.retailer_name;
        req.token_jti = payload.jti;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}
