/**
 * Rate limiters for auth endpoints.
 *
 * All limiters use in-memory stores with automatic cleanup.
 * Keys are IP addresses (for login/verify) or mobile numbers (for OTP).
 *
 * In production behind Nginx, Express must have `trust proxy` set so
 * req.ip returns the real client IP from X-Forwarded-For.
 */

// ── Generic in-memory rate limiter ────────────────────────────────────────────

function createRateLimiter({ windowMs, maxAttempts, keyFn }) {
    const store = new Map();

    // Cleanup expired entries periodically
    setInterval(() => {
        const now = Date.now();
        for (const [key, val] of store.entries()) {
            if (now > val.resetAt) store.delete(key);
        }
    }, windowMs);

    return function rateLimitMiddleware(req, res, next) {
        const key = keyFn(req);
        if (!key) return next();

        const now = Date.now();
        const entry = store.get(key);

        if (!entry || now > entry.resetAt) {
            store.set(key, { count: 1, resetAt: now + windowMs });
            return next();
        }

        if (entry.count >= maxAttempts) {
            const retryAfterSec = Math.ceil((entry.resetAt - now) / 1000);
            return res.status(429).json({
                error: 'Too many attempts. Please wait before trying again.',
                retryAfter: retryAfterSec
            });
        }

        entry.count += 1;
        next();
    };
}

// ── OTP request — keyed by mobile number ──────────────────────────────────────
// Max 3 OTP sends per mobile per 10 minutes
export const otpRateLimit = createRateLimiter({
    windowMs: 10 * 60 * 1000,
    maxAttempts: 3,
    keyFn: (req) => req.body?.mobile,
});

// ── OTP verify — keyed by IP ───────────────────────────────────────────────────
// Max 10 verify attempts per IP per 10 minutes
export const verifyRateLimit = createRateLimiter({
    windowMs: 10 * 60 * 1000,
    maxAttempts: 10,
    keyFn: (req) => req.ip,
});

// ── Store-code login — keyed by IP ────────────────────────────────────────────
// Max 10 login attempts per IP per 15 minutes
export const loginRateLimit = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    maxAttempts: 10,
    keyFn: (req) => req.ip,
});
