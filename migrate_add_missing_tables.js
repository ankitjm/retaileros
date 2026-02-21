import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function migrate() {
    console.log("🔧 Adding missing tables: inquiries, repairs, inventory_logs...");

    try {
        // Inquiries table
        await client.execute(`
            CREATE TABLE IF NOT EXISTS inquiries (
                id TEXT PRIMARY KEY,
                customer_name TEXT,
                product_name TEXT,
                request TEXT,
                status TEXT DEFAULT 'PENDING',
                created_at TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_inquiries_retailer ON inquiries(retailer_id)`);
        console.log("✅ inquiries table created");

        // Repairs table
        await client.execute(`
            CREATE TABLE IF NOT EXISTS repairs (
                id TEXT PRIMARY KEY,
                customer_name TEXT,
                phone TEXT,
                device TEXT,
                issue TEXT,
                status TEXT DEFAULT 'COLLECTED',
                job_sheet_no TEXT,
                estimated_cost TEXT,
                assigned_to TEXT,
                created_at TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_repairs_retailer ON repairs(retailer_id)`);
        console.log("✅ repairs table created");

        // Inventory Logs table
        await client.execute(`
            CREATE TABLE IF NOT EXISTS inventory_logs (
                id TEXT PRIMARY KEY,
                product_id TEXT,
                type TEXT,
                quantity INTEGER,
                reason TEXT,
                date TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_inventory_logs_retailer ON inventory_logs(retailer_id)`);
        console.log("✅ inventory_logs table created");

        console.log("\n🎉 Migration complete! 3 tables added with retailer_id + indexes.");
    } catch (err) {
        console.error("❌ Migration failed:", err);
    }
}

migrate();
