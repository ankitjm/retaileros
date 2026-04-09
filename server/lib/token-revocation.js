/**
 * In-memory JWT revocation store.
 *
 * Stores revoked JTIs (JWT IDs) with their expiry timestamps so we can
 * clean up expired entries automatically. On server restart, the store is
 * cleared — tokens must be re-revoked. For a persistent store, swap the
 * Map for a Redis SET.
 *
 * Usage:
 *   revokeToken(jti, expiresAt)   — mark a token as revoked
 *   isRevoked(jti)                — returns true if the token is revoked
 */

// Map<jti: string, expiresAt: number (ms epoch)>
const revokedTokens = new Map();

/**
 * Revoke a token by its JTI.
 * @param {string} jti - The JWT ID to revoke.
 * @param {number} expiresAt - Unix epoch in milliseconds when the JWT naturally expires.
 */
export function revokeToken(jti, expiresAt) {
    revokedTokens.set(jti, expiresAt);
}

/**
 * Check if a token has been explicitly revoked.
 * Automatically removes entries whose JWT has already expired naturally.
 * @param {string} jti
 * @returns {boolean}
 */
export function isRevoked(jti) {
    if (!revokedTokens.has(jti)) return false;
    const expAt = revokedTokens.get(jti);
    if (expAt && Date.now() > expAt) {
        // Token has expired naturally anyway — clean up
        revokedTokens.delete(jti);
        return false;
    }
    return true;
}

// Prune expired entries every hour to prevent unbounded memory growth
setInterval(() => {
    const now = Date.now();
    for (const [jti, expAt] of revokedTokens) {
        if (expAt && now > expAt) revokedTokens.delete(jti);
    }
}, 60 * 60 * 1000);
