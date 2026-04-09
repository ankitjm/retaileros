// Simple in-memory rate limiter for OTP requests
// Key: mobile number, Value: { count, resetAt }
const store = new Map();

/**
 * Rate limit OTP requests: max 3 per mobile per 10 minutes
 */
export function otpRateLimit(req, res, next) {
    const mobile = req.body?.mobile;
    if (!mobile) return next();

    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    const maxAttempts = 3;

    const entry = store.get(mobile);

    if (!entry || now > entry.resetAt) {
        store.set(mobile, { count: 1, resetAt: now + windowMs });
        return next();
    }

    if (entry.count >= maxAttempts) {
        const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000);
        return res.status(429).json({
            error: 'Too many OTP requests. Please wait before trying again.',
            retryAfter: retryAfterSec
        });
    }

    entry.count += 1;
    next();
}

// Cleanup old entries every 15 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, val] of store.entries()) {
        if (now > val.resetAt) store.delete(key);
    }
}, 15 * 60 * 1000);
