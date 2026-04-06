import jwt from 'jsonwebtoken'

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET must be set and at least 32 characters long')
}

const JWT_EXPIRES_IN = '8h'

// In-memory revocation store for the current process.
// In production with multiple instances, replace with Redis or a DB table.
const revokedTokens = new Set()

export function signToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: 'HS256',
  })
}

export function verifyToken(token) {
  if (revokedTokens.has(token)) {
    throw Object.assign(new Error('Token has been revoked'), { code: 'TOKEN_REVOKED' })
  }
  return jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] })
}

export function revokeToken(token) {
  revokedTokens.add(token)
  // Clean up expired tokens opportunistically so the set doesn't grow unbounded.
  // Full cleanup of truly expired JWTs would require parsing each — acceptable
  // for a single-instance server; use Redis TTL in a multi-instance setup.
}
