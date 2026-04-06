import { verifyToken } from '../utils/tokens.js'

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' })
  }

  const token = authHeader.slice(7)
  try {
    req.user = verifyToken(token)
    req.token = token
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
