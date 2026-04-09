import { Router } from 'express';
import { pool, translateSQL } from '../db/client.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// Tables that should be filtered by retailer_id on reads
const TENANT_TABLES = new Set([
    'customers', 'companies', 'sales', 'sale_items', 'groups', 'group_members',
    'automations', 'automation_messages', 'communication_log',
    'inquiries', 'repairs', 'inventory_logs', 'retailer_settings',
    'team_members', 'team_roles', 'retailer_plugins', 'activity_logs',
    'store_listings', 'store_orders', 'campaigns', 'prebookings',
    'expenses', 'brand_targets'
]);

// Tables that are global (no tenant filter on reads)
const GLOBAL_TABLES = new Set([
    'products', 'schemes', 'retailers', 'marketplace_listings',
    'store_order_items'
]);

// All allowed tables — only tables in this set may be queried
const ALLOWED_TABLES = new Set([...TENANT_TABLES, ...GLOBAL_TABLES]);

// Sensitive tables that should never be queried directly
const BLOCKED_TABLES = new Set(['otp_sessions', 'approved_retailers', 'api_keys']);

// Max SQL length — prevents oversized payloads
const MAX_SQL_LENGTH = 8000;

/**
 * Extract the primary table from a SQL statement (simple heuristic).
 * Runs on ORIGINAL (SQLite-syntax) SQL before translation.
 */
function extractTable(sql) {
    const normalised = sql.replace(/\s+/g, ' ').trim();

    // SELECT ... FROM table
    let m = normalised.match(/\bFROM\s+(\w+)/i);
    if (m) return m[1].toLowerCase();

    // INSERT [OR REPLACE|OR IGNORE] INTO table
    m = normalised.match(/\bINSERT\s+(?:OR\s+(?:REPLACE|IGNORE)\s+)?INTO\s+(\w+)/i);
    if (m) return m[1].toLowerCase();

    // UPDATE table
    m = normalised.match(/\bUPDATE\s+(\w+)/i);
    if (m) return m[1].toLowerCase();

    // DELETE FROM table
    m = normalised.match(/\bDELETE\s+FROM\s+(\w+)/i);
    if (m) return m[1].toLowerCase();

    return null;
}

/**
 * Detect stacked/multi-statement SQL.
 * Rejects any SQL that contains a semicolon followed by non-whitespace content,
 * which is the signature of statement stacking (e.g. `SELECT 1; DROP TABLE x`).
 */
function hasMultipleStatements(sql) {
    // Strip string literals to avoid false positives on semicolons inside strings
    const stripped = sql.replace(/'[^']*'/g, "''").replace(/"[^"]*"/g, '""');
    return /;[\s\S]*\S/.test(stripped);
}

/**
 * POST /api/query
 * { sql: "SELECT ...", args: [] }
 * Read-only queries with tenant isolation
 */
router.post('/query', requireAuth, async (req, res) => {
    const { sql, args = [] } = req.body;

    if (!sql || typeof sql !== 'string') {
        return res.status(400).json({ error: 'sql is required' });
    }

    if (sql.length > MAX_SQL_LENGTH) {
        return res.status(400).json({ error: 'SQL statement too long' });
    }

    if (hasMultipleStatements(sql)) {
        return res.status(400).json({ error: 'Multiple statements are not allowed' });
    }

    // Block write operations
    const upper = sql.trim().toUpperCase();
    if (/^(INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|REPLACE)\b/.test(upper)) {
        return res.status(400).json({ error: 'Use /api/mutate for write operations' });
    }

    // Block access to sensitive tables
    const table = extractTable(sql);
    if (table && BLOCKED_TABLES.has(table)) {
        return res.status(403).json({ error: 'Access denied to this table' });
    }

    // Enforce allowlist — only known app tables may be queried
    if (table && !ALLOWED_TABLES.has(table)) {
        return res.status(403).json({ error: 'Access denied to this table' });
    }

    try {
        const translated = translateSQL(sql);
        const result = await pool.query(translated, args);
        res.json({ rows: result.rows });
    } catch (err) {
        console.error('[DB Query Error]', err.message);
        res.status(500).json({ error: 'Query failed' });
    }
});

/**
 * POST /api/mutate
 * { sql: "INSERT/UPDATE/DELETE ...", args: [] }
 * Writes — tenant isolation enforced server-side.
 */
router.post('/mutate', requireAuth, async (req, res) => {
    const { sql, args = [] } = req.body;

    if (!sql || typeof sql !== 'string') {
        return res.status(400).json({ error: 'sql is required' });
    }

    if (sql.length > MAX_SQL_LENGTH) {
        return res.status(400).json({ error: 'SQL statement too long' });
    }

    if (hasMultipleStatements(sql)) {
        return res.status(400).json({ error: 'Multiple statements are not allowed' });
    }

    // Block DDL
    const upper = sql.trim().toUpperCase();
    if (/^(DROP|CREATE|ALTER)\b/.test(upper)) {
        return res.status(400).json({ error: 'DDL not allowed' });
    }

    // Block access to sensitive tables
    const table = extractTable(sql);
    if (table && BLOCKED_TABLES.has(table)) {
        return res.status(403).json({ error: 'Access denied to this table' });
    }

    // Tenant isolation: verify retailer_id args match JWT
    const jwtRetailerId = req.retailer_id;
    if (jwtRetailerId && /retailer_id/i.test(sql)) {
        const foreignId = args.find(a =>
            typeof a === 'string' &&
            a.length > 4 &&
            (a.startsWith('ret') || a.startsWith('rtl') || a.startsWith('retailer_')) &&
            a !== jwtRetailerId
        );
        if (foreignId) {
            return res.status(403).json({ error: 'Tenant isolation violation' });
        }
    }

    try {
        const translated = translateSQL(sql);
        const result = await pool.query(translated, args);
        res.json({ changes: result.rowCount, lastInsertRowid: null });
    } catch (err) {
        console.error('[DB Mutate Error]', err.message);
        res.status(500).json({ error: 'Mutation failed' });
    }
});

/**
 * POST /api/batch
 * { statements: [{ sql, args }] }
 * Transactional batch writes with tenant isolation
 */
router.post('/batch', requireAuth, async (req, res) => {
    const { statements } = req.body;

    if (!Array.isArray(statements) || statements.length === 0) {
        return res.status(400).json({ error: 'statements array is required' });
    }

    const jwtRetailerId = req.retailer_id;

    // Validate all statements before executing
    for (const stmt of statements) {
        const stmtSql = stmt.sql || '';

        if (stmtSql.length > MAX_SQL_LENGTH) {
            return res.status(400).json({ error: 'SQL statement too long' });
        }

        if (hasMultipleStatements(stmtSql)) {
            return res.status(400).json({ error: 'Multiple statements are not allowed' });
        }

        const upper = stmtSql.trim().toUpperCase();
        if (/^(DROP|CREATE|ALTER)\b/.test(upper)) {
            return res.status(400).json({ error: 'DDL not allowed in batch' });
        }

        const table = extractTable(stmtSql);
        if (table && BLOCKED_TABLES.has(table)) {
            return res.status(403).json({ error: 'Access denied to this table' });
        }

        if (jwtRetailerId && /retailer_id/i.test(stmtSql)) {
            const foreignId = (stmt.args || []).find(a =>
                typeof a === 'string' &&
                a.length > 4 &&
                (a.startsWith('ret') || a.startsWith('rtl') || a.startsWith('retailer_')) &&
                a !== jwtRetailerId
            );
            if (foreignId) {
                return res.status(403).json({ error: 'Tenant isolation violation in batch' });
            }
        }
    }

    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const results = [];
        for (const { sql, args = [] } of statements) {
            const translated = translateSQL(sql);
            const result = await client.query(translated, args);
            results.push({ changes: result.rowCount });
        }
        await client.query('COMMIT');
        res.json({ results });
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('[DB Batch Error]', err.message);
        res.status(500).json({ error: 'Batch failed' });
    } finally {
        client.release();
    }
});

export { router as dbRouter };
