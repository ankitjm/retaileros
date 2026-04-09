import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.retailer_id = payload.retailer_id;
        req.retailer_name = payload.retailer_name;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}
