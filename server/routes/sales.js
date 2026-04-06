import { Router } from 'express'
import { db } from '../db/client.js'
import { requireAuth } from '../middleware/auth.js'

export const salesRouter = Router()

salesRouter.use(requireAuth)

// GET /api/sales?from=YYYY-MM-DD&to=YYYY-MM-DD — scoped to retailer
salesRouter.get('/', async (req, res) => {
  const { from, to } = req.query

  try {
    const result = await db.query(
      `SELECT id, amount, customer_id, items_count, created_at
       FROM sales
       WHERE retailer_id = $1
         AND ($2::date IS NULL OR created_at >= $2::date)
         AND ($3::date IS NULL OR created_at <= $3::date)
       ORDER BY created_at DESC
       LIMIT 500`,
      [req.user.retailerId, from ?? null, to ?? null]
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})
