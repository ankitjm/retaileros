/**
 * RetailerOS Production — Database Initialization
 * Run: node server/db/seed.js
 * Initializes schema only. No demo data is seeded.
 * New retailers self-register via OTP or are added by admin.
 */
import 'dotenv/config';
import pg from 'pg';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { Pool } = pg;
const __dirname = dirname(fileURLToPath(import.meta.url));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function init() {
    const client = await pool.connect();

    try {
        // Run schema
        const schema = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
        await client.query(schema);
        console.log('[DB] Schema initialized successfully.');

        // Verify tables
        const result = await client.query(
            `SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename`
        );
        console.log(`[DB] ${result.rows.length} tables created:`);
        result.rows.forEach(r => console.log(`  - ${r.tablename}`));

        console.log('\nProduction database ready. Retailers will register via OTP or store code login.');
    } catch (err) {
        console.error('Schema init failed:', err.message);
        process.exit(1);
    } finally {
        client.release();
        await pool.end();
    }
}

init();
