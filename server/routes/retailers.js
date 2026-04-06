import { Router } from 'express'
import { db } from '../db/client.js'
import { requireAuth } from '../middleware/auth.js'
import { requireRole, requireSameRetailer } from '../middleware/rbac.js'

export const retailerRouter = Router()

// All routes require authentication
retailerRouter.use(requireAuth)

// GET /api/retailers/:retailerId/profile
// A retailer can only read their own profile; admins can read any.
retailerRouter.get('/:retailerId/profile', requireSameRetailer, async (req, res) => {
  try {
    // P0 fix: never SELECT * — only safe non-sensitive fields.
    // Bank details and PAN numbers are never returned.
    const result = await db.query(
      `SELECT id, name, business_name, email, plan, created_at
       FROM retailers
       WHERE id = $1`,
      [req.user.retailerId]
    )
    if (!result.rows[0]) return res.status(404).json({ error: 'Retailer not found' })
    res.json(result.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET /api/retailers — admin-only summary list, no sensitive fields
retailerRouter.get('/', requireRole('admin'), async (req, res) => {
  try {
    const result = await db.query(
      // P0 fix: explicitly list only safe columns — never bank/PAN data
      `SELECT id, name, business_name, email, plan, created_at
       FROM retailers
       ORDER BY created_at DESC`
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})
