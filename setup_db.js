import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function main() {
    console.log("⚠️  STARTING DATABASE RESET...");

    try {
        // 1. Get List of Tables
        const res = await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';");
        const tables = res.rows.map(r => r.name);

        // 2. Drop All Tables
        if (tables.length > 0) {
            console.log(`🗑️  Dropping ${tables.length} tables: ${tables.join(', ')}...`);
            for (const table of tables) {
                await client.execute(`DROP TABLE IF EXISTS "${table}"`);
            }
        } else {
            console.log("ℹ️  Database is already empty.");
        }

        // 3. Create Schema for SALES DESK App
        console.log("🏗️  Creating new schema...");

        // Customers
        await client.execute(`
            CREATE TABLE customers (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                joined_at TEXT,
                dob TEXT,
                location TEXT
            )
        `);

        // Products (Inventory)
        await client.execute(`
            CREATE TABLE products (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                brand TEXT,
                category TEXT,
                price REAL,
                mop REAL,
                in_stock INTEGER,
                sku TEXT
            )
        `);

        // Sales (Transactions)
        await client.execute(`
            CREATE TABLE sales (
                id TEXT PRIMARY KEY,
                customer_id TEXT,
                customer_name TEXT, -- Denormalized for ease
                date TEXT,
                total_amount REAL,
                status TEXT DEFAULT 'completed',
                FOREIGN KEY(customer_id) REFERENCES customers(id)
            )
        `);

        // Sale Items (Line Items)
        await client.execute(`
            CREATE TABLE sale_items (
                id TEXT PRIMARY KEY,
                sale_id TEXT,
                product_id TEXT,
                product_name TEXT,
                category TEXT,
                quantity INTEGER,
                price REAL,
                imei TEXT,
                FOREIGN KEY(sale_id) REFERENCES sales(id),
                FOREIGN KEY(product_id) REFERENCES products(id)
            )
        `);

        console.log("✅ Tables created: customers, products, sales, sale_items");

        // 4. Seed Basic Data
        console.log("🌱 Seeding data...");

        // Seed Customers
        await client.execute({
            sql: "INSERT INTO customers (id, name, phone, joined_at, location) VALUES (?, ?, ?, ?, ?)",
            args: ["CUST-001", "Alice Johnson", "9876543210", new Date().toISOString(), "Mumbai"]
        });
        await client.execute({
            sql: "INSERT INTO customers (id, name, phone, joined_at, location) VALUES (?, ?, ?, ?, ?)",
            args: ["CUST-002", "Bob Smith", "9123456780", new Date().toISOString(), "Delhi"]
        });

        // Seed Products
        const products = [
            ["PROD-001", "iPhone 15 Pro", "Apple", "Smartphones", 134900, 128000, 10],
            ["PROD-002", "Galaxy S24 Ultra", "Samsung", "Smartphones", 129999, 120000, 15],
            ["PROD-003", "AirPods Pro 2", "Apple", "Audio", 24900, 22000, 20],
            ["PROD-004", "Sony WH-1000XM5", "Sony", "Audio", 29990, 26000, 8],
            ["PROD-005", "MacBook Air M3", "Apple", "Laptops", 114900, 105000, 5]
        ];

        for (const p of products) {
            await client.execute({
                sql: "INSERT INTO products (id, name, brand, category, price, mop, in_stock) VALUES (?, ?, ?, ?, ?, ?, ?)",
                args: p
            });
        }

        // Seed Sales History
        console.log("🌱 Seeding sales history...");
        const saleId1 = "ORD-HIST-001";
        const saleId2 = "ORD-HIST-002";

        // Sale 1: Alice bought an iPhone
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)",
            args: [saleId1, "CUST-001", "Alice Johnson", new Date(Date.now() - 86400000).toISOString(), 128000, "completed"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-001", saleId1, "PROD-001", "iPhone 15 Pro", "Smartphones", 1, 128000, "IMEI-9988776655"]
        });

        // Sale 2: Bob bought headphones
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)",
            args: [saleId2, "CUST-002", "Bob Smith", new Date(Date.now() - 172800000).toISOString(), 26000, "completed"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-002", saleId2, "PROD-004", "Sony WH-1000XM5", "Audio", 1, 26000, "SN-SONY-12345"]
        });

        console.log("✅ Database reset and seeded successfully!");

    } catch (err) {
        console.error("❌ Error during DB Reset:", err);
    }
}

main();
