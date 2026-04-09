import pg from 'pg';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { Pool } = pg;
const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Connection Pool ─────────────────────────────────────────
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
});

// ── Primary key map for INSERT OR REPLACE → ON CONFLICT ─────
const PK_MAP = {
    products: 'id',
    retailer_settings: 'id',
    retailer_plugins: 'id',
    otp_sessions: 'mobile',
    schemes: 'id',
    retailers: 'id',
};

/**
 * Translate SQLite SQL to PostgreSQL SQL.
 * Handles: INSERT OR REPLACE, INSERT OR IGNORE, date/datetime functions, ? → $N
 */
export function translateSQL(sql) {
    let out = sql;

    // 1. INSERT OR REPLACE INTO <table> (<cols>) VALUES (<vals>)
    //    → INSERT INTO <table> (<cols>) VALUES (<vals>) ON CONFLICT (pk) DO UPDATE SET col=EXCLUDED.col, ...
    //    Uses paren-depth counting so nested subqueries inside VALUES are handled correctly.
    const iorHeader = out.match(/\bINSERT\s+OR\s+REPLACE\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*\(/i);
    if (iorHeader) {
        // iorHeader[0] ends with the opening '(' of VALUES — find its index in `out`
        const openIdx = iorHeader.index + iorHeader[0].length - 1;
        let depth = 0, closeIdx = -1;
        for (let i = openIdx; i < out.length; i++) {
            if (out[i] === '(') depth++;
            else if (out[i] === ')') { depth--; if (depth === 0) { closeIdx = i; break; } }
        }
        if (closeIdx !== -1) {
            const table = iorHeader[1].toLowerCase();
            const colsStr = iorHeader[2];
            const cols = colsStr.split(',').map(c => c.trim());
            const vals = out.slice(openIdx + 1, closeIdx);
            const pk = PK_MAP[table] || 'id';
            const setClauses = cols
                .filter(c => c !== pk)
                .map(c => `${c} = EXCLUDED.${c}`)
                .join(', ');
            const replacement = `INSERT INTO ${iorHeader[1]} (${colsStr}) VALUES (${vals}) ON CONFLICT (${pk}) DO UPDATE SET ${setClauses}`;
            out = out.slice(0, iorHeader.index) + replacement + out.slice(closeIdx + 1);
        }
    }

    // 2. INSERT OR IGNORE INTO <table> → INSERT INTO <table> ... ON CONFLICT DO NOTHING
    const ignoreMatch = out.match(/\bINSERT\s+OR\s+IGNORE\s+INTO\s+(\w+)/i);
    if (ignoreMatch) {
        out = out.replace(/\bINSERT\s+OR\s+IGNORE\s+INTO/i, 'INSERT INTO');
        // Append ON CONFLICT DO NOTHING before any trailing semicolon or end of string
        out = out.replace(/;?\s*$/, ' ON CONFLICT DO NOTHING');
    }

    // 3. datetime('now') → NOW()::text  (columns are TEXT, need text output)
    out = out.replace(/datetime\(\s*'now'\s*\)/gi, 'NOW()::text');

    // 4. date('now') → CURRENT_DATE  (keep as date type for comparisons; auto-casts to text in INSERT)
    out = out.replace(/date\(\s*'now'\s*\)/gi, 'CURRENT_DATE');

    // 5. date(<col>) → (<col>)::date  — but not date('now') (already handled)
    out = out.replace(/\bdate\(([^)]+)\)/gi, '($1)::date');

    // 6. Convert ? → $1, $2, $3... (must be last)
    let paramIndex = 0;
    out = out.replace(/\?/g, () => `$${++paramIndex}`);

    return out;
}

/**
 * Run schema.sql against PostgreSQL.
 * Called once at server startup.
 */
export async function initSchema() {
    const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
    await pool.query(schema);
    console.log('[DB] Schema initialized');
}

/**
 * Compatibility layer — drop-in replacement for better-sqlite3 API.
 * db.prepare(sql).get(...args)  → async, returns first row or undefined
 * db.prepare(sql).all(...args)  → async, returns rows array
 * db.prepare(sql).run(...args)  → async, returns { changes, lastInsertRowid }
 */
const db = {
    prepare(sql) {
        const translated = translateSQL(sql);
        return {
            async get(...args) {
                const result = await pool.query(translated, args);
                return result.rows[0] || undefined;
            },
            async all(...args) {
                const result = await pool.query(translated, args);
                return result.rows;
            },
            async run(...args) {
                const result = await pool.query(translated, args);
                return { changes: result.rowCount, lastInsertRowid: null };
            },
        };
    },
};

export default db;
