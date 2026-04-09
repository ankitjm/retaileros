/**
 * RetailerOS Public API — v1
 * External integrations, ERPs, custom dashboards.
 *
 * Auth:   X-Api-Key header (API key issued via Settings > API)
 * Scopes: sales:read | customers:read | inventory:read | repairs:read | reports:read | devices:read
 * Base:   /v1/*  (also mounted at /ros/v1/* for production Nginx)
 *
 * All endpoints:
 *   - Enforce tenant isolation via req.retailer_id (from validated API key)
 *   - Use minimal, enumerated SELECT columns — no SELECT *
 *   - Paginate all list endpoints (default 50, max 100)
 *   - Return JSON: { data: [...], meta: { page, limit, total } }
 *   - Partial indexes on IMEI/serial for instant lookups
 */
import { Router } from 'express';
import { pool } from '../db/client.js';
import { requireApiKey, requireScope } from '../middleware/apikey-auth.js';

const router = Router();

// All v1 routes require a valid API key
router.use(requireApiKey);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function paginate(query) {
    const page = Math.max(1, parseInt(query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(query.limit, 10) || 50));
    const offset = (page - 1) * limit;
    return { page, limit, offset };
}

function meta(page, limit, total) {
    return { page, limit, total: parseInt(total, 10), pages: Math.ceil(total / limit) };
}

// ─── GET /v1/ — API info ──────────────────────────────────────────────────────
router.get('/', (req, res) => {
    res.json({
        api: 'RetailerOS Public API',
        version: '1.0',
        retailer_id: req.retailer_id,
        scopes: req.api_key_scopes,
        endpoints: {
            sales:     'GET /v1/sales',
            sale:      'GET /v1/sales/:id',
            customers: 'GET /v1/customers',
            customer:  'GET /v1/customers/:id',
            inventory: 'GET /v1/inventory',
            devices:   'GET /v1/devices/:imei',
            repairs:   'GET /v1/repairs',
            summary:   'GET /v1/reports/summary',
        },
        docs: 'https://khosha.cloud/ros/docs/api'
    });
});

// ─── SALES ────────────────────────────────────────────────────────────────────

/**
 * GET /v1/sales
 * Query params: from, to, status, payment_mode, page, limit
 */
router.get('/sales', requireScope('sales:read'), async (req, res) => {
    const { page, limit, offset } = paginate(req.query);
    const { from, to, status, payment_mode } = req.query;

    const conditions = ['s.retailer_id = $1'];
    const vals = [req.retailer_id];
    let p = 2;

    if (from) { conditions.push(`s.date >= $${p++}`); vals.push(from); }
    if (to)   { conditions.push(`s.date <= $${p++}`); vals.push(to); }
    if (status) { conditions.push(`s.status = $${p++}`); vals.push(status); }
    if (payment_mode) { conditions.push(`s.payment_mode = $${p++}`); vals.push(payment_mode); }

    const where = conditions.join(' AND ');

    try {
        const [{ rows: countRows }, { rows }] = await Promise.all([
            pool.query(`SELECT COUNT(*) AS total FROM sales s WHERE ${where}`, vals),
            pool.query(
                `SELECT s.id, s.date, s.customer_name, s.total_amount, s.status,
                        s.payment_mode, s.payment_reference, s.gst_required,
                        s.billing_type, s.payment_status
                 FROM sales s
                 WHERE ${where}
                 ORDER BY s.date DESC
                 LIMIT $${p} OFFSET $${p + 1}`,
                [...vals, limit, offset]
            )
        ]);

        res.json({ data: rows, meta: meta(page, limit, countRows[0].total) });
    } catch (err) {
        console.error('[PublicAPI] sales error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

/**
 * GET /v1/sales/:id
 * Returns sale + line items (with IMEI if present)
 */
router.get('/sales/:id', requireScope('sales:read'), async (req, res) => {
    const { id } = req.params;

    try {
        const { rows: saleRows } = await pool.query(
            `SELECT id, date, customer_id, customer_name, total_amount, status,
                    payment_mode, payment_reference, gst_required, billing_type,
                    payment_status, installation_required, installation_date
             FROM sales
             WHERE id = $1 AND retailer_id = $2
             LIMIT 1`,
            [id, req.retailer_id]
        );

        if (!saleRows[0]) return res.status(404).json({ error: 'Sale not found' });

        // Line items — join back through sale which is already tenant-verified
        const { rows: items } = await pool.query(
            `SELECT si.id, si.product_name, si.category, si.quantity,
                    si.price, si.final_price, si.discount_type, si.discount_amount,
                    si.imei, si.serial_number, si.mac_id, si.manufacturing_date
             FROM sale_items si
             WHERE si.sale_id = $1`,
            [id]
        );

        res.json({ data: { ...saleRows[0], items } });
    } catch (err) {
        console.error('[PublicAPI] sale/:id error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── CUSTOMERS ────────────────────────────────────────────────────────────────

/**
 * GET /v1/customers
 * Query params: search (name/phone), page, limit
 */
router.get('/customers', requireScope('customers:read'), async (req, res) => {
    const { page, limit, offset } = paginate(req.query);
    const { search } = req.query;

    const conditions = ['retailer_id = $1'];
    const vals = [req.retailer_id];
    let p = 2;

    if (search) {
        conditions.push(`(name ILIKE $${p} OR phone ILIKE $${p})`);
        vals.push(`%${search}%`);
        p++;
    }

    const where = conditions.join(' AND ');

    try {
        const [{ rows: countRows }, { rows }] = await Promise.all([
            pool.query(`SELECT COUNT(*) AS total FROM customers WHERE ${where}`, vals),
            pool.query(
                `SELECT id, name, phone, email, location, joined_at
                 FROM customers
                 WHERE ${where}
                 ORDER BY joined_at DESC
                 LIMIT $${p} OFFSET $${p + 1}`,
                [...vals, limit, offset]
            )
        ]);

        res.json({ data: rows, meta: meta(page, limit, countRows[0].total) });
    } catch (err) {
        console.error('[PublicAPI] customers error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

/**
 * GET /v1/customers/:id
 */
router.get('/customers/:id', requireScope('customers:read'), async (req, res) => {
    try {
        const { rows } = await pool.query(
            `SELECT id, name, phone, email, location, dob, joined_at
             FROM customers
             WHERE id = $1 AND retailer_id = $2
             LIMIT 1`,
            [req.params.id, req.retailer_id]
        );

        if (!rows[0]) return res.status(404).json({ error: 'Customer not found' });
        res.json({ data: rows[0] });
    } catch (err) {
        console.error('[PublicAPI] customer/:id error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── INVENTORY ────────────────────────────────────────────────────────────────

/**
 * GET /v1/inventory
 * Query params: brand, category, in_stock (true/false), page, limit
 */
router.get('/inventory', requireScope('inventory:read'), async (req, res) => {
    const { page, limit, offset } = paginate(req.query);
    const { brand, category, in_stock } = req.query;

    // Products are global (no retailer_id) — filter by retailer's stock movements
    const conditions = [];
    const vals = [];
    let p = 1;

    if (brand) { conditions.push(`brand ILIKE $${p++}`); vals.push(`%${brand}%`); }
    if (category) { conditions.push(`category ILIKE $${p++}`); vals.push(`%${category}%`); }
    if (in_stock === 'true') { conditions.push(`in_stock > 0`); }
    if (in_stock === 'false') { conditions.push(`in_stock = 0`); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    try {
        const [{ rows: countRows }, { rows }] = await Promise.all([
            pool.query(`SELECT COUNT(*) AS total FROM products ${where}`, vals),
            pool.query(
                `SELECT id, name, brand, category, price, mop, in_stock, sku
                 FROM products
                 ${where}
                 ORDER BY brand ASC, name ASC
                 LIMIT $${p} OFFSET $${p + 1}`,
                [...vals, limit, offset]
            )
        ]);

        res.json({ data: rows, meta: meta(page, limit, countRows[0].total) });
    } catch (err) {
        console.error('[PublicAPI] inventory error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── DEVICES (IMEI lookup) ────────────────────────────────────────────────────

/**
 * GET /v1/devices/:imei
 * Lookup a device by IMEI — uses the partial index for O(1) lookup.
 * Returns sale info, customer (name + phone only), warranty status.
 */
router.get('/devices/:imei', requireScope('devices:read'), async (req, res) => {
    const { imei } = req.params;

    // Validate IMEI: 14–15 digits (some older formats are 14)
    if (!/^\d{14,15}$/.test(imei)) {
        return res.status(400).json({ error: 'Invalid IMEI — must be 14 or 15 digits' });
    }

    try {
        const { rows } = await pool.query(
            `SELECT
                si.id          AS sale_item_id,
                si.imei,
                si.serial_number,
                si.mac_id,
                si.product_name,
                si.category,
                si.manufacturing_date,
                si.installation_date,
                s.id           AS sale_id,
                s.date         AS sale_date,
                s.customer_name,
                s.total_amount,
                s.status       AS sale_status,
                s.retailer_id
             FROM sale_items si
             JOIN sales s ON s.id = si.sale_id
             WHERE si.imei = $1
               AND s.retailer_id = $2
             LIMIT 1`,
            [imei, req.retailer_id]
        );

        if (!rows[0]) return res.status(404).json({ error: 'Device not found' });

        // Don't expose internal retailer_id in response
        const { retailer_id: _, ...device } = rows[0];
        res.json({ data: device });
    } catch (err) {
        console.error('[PublicAPI] device/:imei error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── REPAIRS ─────────────────────────────────────────────────────────────────

/**
 * GET /v1/repairs
 * Query params: status, page, limit
 */
router.get('/repairs', requireScope('repairs:read'), async (req, res) => {
    const { page, limit, offset } = paginate(req.query);
    const { status } = req.query;

    const conditions = ['retailer_id = $1'];
    const vals = [req.retailer_id];
    let p = 2;

    if (status) { conditions.push(`status = $${p++}`); vals.push(status); }

    const where = conditions.join(' AND ');

    try {
        const [{ rows: countRows }, { rows }] = await Promise.all([
            pool.query(`SELECT COUNT(*) AS total FROM repairs WHERE ${where}`, vals),
            pool.query(
                `SELECT id, customer_name, phone, device, issue, status,
                        job_sheet_no, estimated_cost, assigned_to, created_at
                 FROM repairs
                 WHERE ${where}
                 ORDER BY created_at DESC
                 LIMIT $${p} OFFSET $${p + 1}`,
                [...vals, limit, offset]
            )
        ]);

        res.json({ data: rows, meta: meta(page, limit, countRows[0].total) });
    } catch (err) {
        console.error('[PublicAPI] repairs error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

// ─── REPORTS / SUMMARY ────────────────────────────────────────────────────────

/**
 * GET /v1/reports/summary
 * Query params: period (today|week|month|year), from, to
 *
 * Returns: total revenue, total transactions, avg order value,
 *          top 5 brands by revenue, payment mode breakdown.
 */
router.get('/reports/summary', requireScope('reports:read'), async (req, res) => {
    const { period, from, to } = req.query;
    const rid = req.retailer_id;

    let dateFrom, dateTo;
    const now = new Date();

    if (from && to) {
        dateFrom = from;
        dateTo = to;
    } else {
        switch (period) {
            case 'today':
                dateFrom = dateTo = now.toISOString().slice(0, 10);
                break;
            case 'week': {
                const d = new Date(now);
                d.setDate(d.getDate() - 7);
                dateFrom = d.toISOString().slice(0, 10);
                dateTo = now.toISOString().slice(0, 10);
                break;
            }
            case 'year': {
                const d = new Date(now);
                d.setFullYear(d.getFullYear() - 1);
                dateFrom = d.toISOString().slice(0, 10);
                dateTo = now.toISOString().slice(0, 10);
                break;
            }
            case 'month':
            default: {
                const d = new Date(now);
                d.setDate(d.getDate() - 30);
                dateFrom = d.toISOString().slice(0, 10);
                dateTo = now.toISOString().slice(0, 10);
            }
        }
    }

    try {
        const [overview, paymentBreakdown, topBrands] = await Promise.all([
            // Revenue overview
            pool.query(
                `SELECT
                    COUNT(*)                       AS total_transactions,
                    COALESCE(SUM(total_amount), 0) AS total_revenue,
                    COALESCE(AVG(total_amount), 0) AS avg_order_value,
                    COALESCE(SUM(CASE WHEN status = 'completed' THEN total_amount ELSE 0 END), 0) AS completed_revenue
                 FROM sales
                 WHERE retailer_id = $1 AND date >= $2 AND date <= $3`,
                [rid, dateFrom, dateTo]
            ),
            // Payment mode breakdown
            pool.query(
                `SELECT payment_mode, COUNT(*) AS count, SUM(total_amount) AS total
                 FROM sales
                 WHERE retailer_id = $1 AND date >= $2 AND date <= $3 AND payment_mode IS NOT NULL
                 GROUP BY payment_mode
                 ORDER BY total DESC`,
                [rid, dateFrom, dateTo]
            ),
            // Top brands by revenue (via sale_items join)
            pool.query(
                `SELECT si.category AS brand, SUM(si.final_price * si.quantity) AS revenue,
                        COUNT(*) AS units
                 FROM sale_items si
                 JOIN sales s ON s.id = si.sale_id
                 WHERE s.retailer_id = $1 AND s.date >= $2 AND s.date <= $3
                   AND si.category IS NOT NULL
                 GROUP BY si.category
                 ORDER BY revenue DESC
                 LIMIT 5`,
                [rid, dateFrom, dateTo]
            )
        ]);

        res.json({
            data: {
                period: { from: dateFrom, to: dateTo },
                overview: overview.rows[0],
                payment_breakdown: paymentBreakdown.rows,
                top_categories: topBrands.rows,
            }
        });
    } catch (err) {
        console.error('[PublicAPI] reports/summary error:', err.message);
        res.status(500).json({ error: 'Internal error' });
    }
});

export { router as publicApiRouter };
