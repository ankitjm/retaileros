import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function migrate() {
    console.log("🔄 Starting multi-tenant migration: Adding retailer_id columns...\n");

    const tenantTables = [
        'customers',
        'companies',
        'sales',
        'groups',
        'group_members',
        'automations',
        'automation_messages',
        'communication_log'
    ];

    for (const table of tenantTables) {
        try {
            // Check if column already exists
            const info = await client.execute(`PRAGMA table_info(${table})`);
            const hasColumn = info.rows.some(r => r.name === 'retailer_id');

            if (hasColumn) {
                console.log(`  ✅ ${table} — retailer_id already exists, skipping`);
            } else {
                await client.execute(`ALTER TABLE ${table} ADD COLUMN retailer_id TEXT`);
                console.log(`  ✅ ${table} — retailer_id column added`);
            }

            // Create index (IF NOT EXISTS handles idempotency)
            await client.execute(`CREATE INDEX IF NOT EXISTS idx_${table}_retailer ON ${table}(retailer_id)`);
            console.log(`  ✅ ${table} — index created`);
        } catch (err) {
            console.error(`  ❌ ${table} — Error:`, err.message);
        }
    }

    console.log("\n✅ Migration complete!");
    console.log("\nNext steps:");
    console.log("  1. Update db.js helpers to include retailer_id in queries");
    console.log("  2. Update sync.js to filter by retailer_id");
    console.log("  3. Update state.js with tenant identity");
}

migrate();
