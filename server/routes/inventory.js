import { Router } from 'express'
import { db } from '../db/client.js'
import { requireAuth } from '../middleware/auth.js'

export const inventoryRouter = Router()

inventoryRouter.use(requireAuth)

// GET /api/inventory — scoped to the authenticated retailer
inventoryRouter.get('/', async (req, res) => {
  try {
    const result = await db.query(
      `SELECT id, name, sku, quantity, unit_price, category, updated_at
       FROM inventory
       WHERE retailer_id = $1
       ORDER BY name`,
      [req.user.retailerId]
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// PATCH /api/inventory/:id — update stock, always scoped to retailer
inventoryRouter.patch('/:id', async (req, res) => {
  const { quantity } = req.body ?? {}
  if (quantity == null || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'quantity must be a number' })
  }

  try {
    const result = await db.query(
      `UPDATE inventory
       SET quantity = $1, updated_at = NOW()
       WHERE id = $2 AND retailer_id = $3
       RETURNING id, name, sku, quantity`,
      [quantity, req.params.id, req.user.retailerId]
    )
    if (!result.rows[0]) return res.status(404).json({ error: 'Item not found' })
    res.json(result.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: 'Internal server error' })
  }
})
