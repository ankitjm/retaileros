/**
 * requireRole(...roles) — gate a route to specific roles.
 * Always apply AFTER requireAuth so req.user is populated.
 */
export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' })
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    next()
  }
}

/**
 * requireSameRetailer — enforce tenant isolation.
 * Verifies that the :retailerId param (or body.retailerId) matches
 * the authenticated user's own retailer. Admins bypass this check.
 */
export function requireSameRetailer(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentication required' })
  }
  if (req.user.role === 'admin') {
    return next()
  }
  const requestedId = req.params.retailerId ?? req.body?.retailerId
  if (requestedId && requestedId !== String(req.user.retailerId)) {
    return res.status(403).json({ error: 'Access denied to this retailer' })
  }
  next()
}
