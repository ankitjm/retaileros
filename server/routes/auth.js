import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import bcrypt from 'bcryptjs'
import { db } from '../db/client.js'
import { signToken, revokeToken } from '../utils/tokens.js'
import { requireAuth } from '../middleware/auth.js'

export const authRouter = Router()

// P0 fix: 5 attempts per 15 min per IP — brute-force protection on login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many login attempts. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,
})

authRouter.post('/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body ?? {}

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  try {
    // Only fetch the single user row — never SELECT * FROM retailers
    const result = await db.query(
      'SELECT id, retailer_id, email, password_hash, role FROM retailer_users WHERE email = $1 LIMIT 1',
      [email.toLowerCase().trim()]
    )

    const user = result.rows[0]

    // Always run bcrypt.compare to prevent timing attacks that reveal valid emails
    const valid = user
      ? await bcrypt.compare(password, user.password_hash)
      : await bcrypt.compare(password, '$2b$10$invalidhashfortimingggggggggggggggggggggggggg')

    if (!valid || !user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = signToken({
      userId: user.id,
      retailerId: user.retailer_id,
      role: user.role,
    })

    res.json({ token, role: user.role })
  } catch (err) {
    console.error('Login error:', err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// P0 fix (JWT revocation): explicit logout invalidates the token immediately
authRouter.post('/logout', requireAuth, (req, res) => {
  revokeToken(req.token)
  res.json({ message: 'Logged out successfully' })
})
