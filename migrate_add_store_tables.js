import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function migrate() {
    console.log("🚀 Running My Store tables migration...\n");

    const statements = [
        // 1. store_listings
        `CREATE TABLE IF NOT EXISTS store_listings (
            id TEXT PRIMARY KEY,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            brand TEXT,
            category TEXT,
            base_price REAL,
            listing_price REAL NOT NULL,
            description TEXT,
            status TEXT DEFAULT 'draft',
            stock_qty INTEGER DEFAULT 0,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            retailer_id TEXT NOT NULL
        )`,
        `CREATE INDEX IF NOT EXISTS idx_store_listings_retailer ON store_listings(retailer_id)`,
        `CREATE INDEX IF NOT EXISTS idx_store_listings_status ON store_listings(retailer_id, status)`,

        // 2. store_orders
        `CREATE TABLE IF NOT EXISTS store_orders (
            id TEXT PRIMARY KEY,
            order_number TEXT NOT NULL,
            customer_name TEXT NOT NULL,
            customer_phone TEXT,
            customer_email TEXT,
            shipping_address_line1 TEXT,
            shipping_address_line2 TEXT,
            shipping_city TEXT,
            shipping_state TEXT,
            shipping_pincode TEXT,
            order_date TEXT NOT NULL,
            total_amount REAL NOT NULL,
            order_status TEXT DEFAULT 'pending',
            payment_status TEXT DEFAULT 'pending',
            payment_mode TEXT,
            payment_reference TEXT,
            tracking_number TEXT,
            courier_name TEXT,
            shipped_date TEXT,
            delivered_date TEXT,
            notes TEXT,
            sale_id TEXT,
            retailer_id TEXT NOT NULL
        )`,
        `CREATE INDEX IF NOT EXISTS idx_store_orders_retailer ON store_orders(retailer_id)`,
        `CREATE INDEX IF NOT EXISTS idx_store_orders_status ON store_orders(retailer_id, order_status)`,
        `CREATE INDEX IF NOT EXISTS idx_store_orders_date ON store_orders(retailer_id, order_date)`,

        // 3. store_order_items
        `CREATE TABLE IF NOT EXISTS store_order_items (
            id TEXT PRIMARY KEY,
            order_id TEXT NOT NULL,
            listing_id TEXT,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            category TEXT,
            quantity INTEGER NOT NULL,
            unit_price REAL NOT NULL,
            discount_amount REAL DEFAULT 0,
            final_price REAL NOT NULL
        )`,
        `CREATE INDEX IF NOT EXISTS idx_store_order_items_order ON store_order_items(order_id)`,
    ];

    for (const sql of statements) {
        try {
            await client.execute(sql);
            const name = sql.match(/(?:TABLE|INDEX)\s+(?:IF NOT EXISTS\s+)?(\w+)/i)?.[1] || 'unknown';
            console.log(`  ✅ ${name}`);
        } catch (err) {
            console.error(`  ❌ Failed:`, err.message);
        }
    }

    // 4. ALTER sales table — add source column
    try {
        await client.execute(`ALTER TABLE sales ADD COLUMN source TEXT DEFAULT 'in-store'`);
        console.log(`  ✅ sales.source column added`);
    } catch (err) {
        if (err.message.includes('duplicate column')) {
            console.log(`  ⏭️  sales.source column already exists`);
        } else {
            console.error(`  ❌ ALTER sales failed:`, err.message);
        }
    }

    console.log("\n✅ Migration complete!");
    process.exit(0);
}

migrate();
