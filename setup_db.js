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

        // 2. Drop All Tables (disable foreign key checks first)
        if (tables.length > 0) {
            console.log(`🗑️  Dropping ${tables.length} tables: ${tables.join(', ')}...`);
            await client.execute("PRAGMA foreign_keys = OFF");
            for (const table of tables) {
                await client.execute(`DROP TABLE IF EXISTS "${table}"`);
            }
            await client.execute("PRAGMA foreign_keys = ON");
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
                location TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_customers_retailer ON customers(retailer_id)`);

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
                sku TEXT,
                installation_required INTEGER DEFAULT 0
            )
        `);

        // Companies (for GST billing)
        await client.execute(`
            CREATE TABLE companies (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                gst_number TEXT,
                customer_id TEXT,
                created_at TEXT,
                retailer_id TEXT,
                FOREIGN KEY(customer_id) REFERENCES customers(id)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_companies_retailer ON companies(retailer_id)`);

        // Sales (Transactions)
        await client.execute(`
            CREATE TABLE sales (
                id TEXT PRIMARY KEY,
                customer_id TEXT,
                customer_name TEXT,
                date TEXT,
                total_amount REAL,
                status TEXT DEFAULT 'completed',
                payment_mode TEXT,
                payment_reference TEXT,
                gst_required INTEGER DEFAULT 0,
                company_id TEXT,
                installation_required INTEGER DEFAULT 0,
                installation_date TEXT,
                retailer_id TEXT,
                FOREIGN KEY(customer_id) REFERENCES customers(id),
                FOREIGN KEY(company_id) REFERENCES companies(id)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_sales_retailer ON sales(retailer_id)`);

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
                discount_type TEXT,
                discount_value REAL,
                discount_amount REAL,
                scheme_id TEXT,
                final_price REAL,
                imei TEXT,
                serial_number TEXT,
                mac_id TEXT,
                manufacturing_date TEXT,
                installation_date TEXT,
                extra_fields TEXT,
                FOREIGN KEY(sale_id) REFERENCES sales(id),
                FOREIGN KEY(product_id) REFERENCES products(id)
            )
        `);

        // Schemes (Brand schemes/incentives)
        await client.execute(`
            CREATE TABLE schemes (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                brand TEXT,
                category TEXT,
                discount_type TEXT,
                discount_value REAL,
                min_price REAL,
                max_price REAL,
                payout REAL,
                description TEXT,
                start_date TEXT,
                end_date TEXT,
                status TEXT DEFAULT 'active',
                created_at TEXT
            )
        `);

        // Groups (for client grouping and companies)
        await client.execute(`
            CREATE TABLE groups (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT,
                is_company INTEGER DEFAULT 0,
                gst_number TEXT,
                contact_person TEXT,
                created_at TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_groups_retailer ON groups(retailer_id)`);

        // Group Members (many-to-many relationship)
        await client.execute(`
            CREATE TABLE group_members (
                id TEXT PRIMARY KEY,
                group_id TEXT,
                customer_id TEXT,
                added_at TEXT,
                retailer_id TEXT,
                FOREIGN KEY(group_id) REFERENCES groups(id),
                FOREIGN KEY(customer_id) REFERENCES customers(id)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_group_members_retailer ON group_members(retailer_id)`);

        // Automations (Workflow definitions)
        await client.execute(`
            CREATE TABLE automations (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                customer_id TEXT,
                customer_name TEXT,
                sale_id TEXT,
                status TEXT DEFAULT 'active',
                created_at TEXT,
                completed_at TEXT,
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_automations_retailer ON automations(retailer_id)`);

        // Automation Messages (Scheduled messages in a sequence)
        await client.execute(`
            CREATE TABLE automation_messages (
                id TEXT PRIMARY KEY,
                automation_id TEXT,
                message_type TEXT,
                title TEXT,
                content TEXT,
                day_offset INTEGER,
                scheduled_date TEXT,
                sent_at TEXT,
                status TEXT DEFAULT 'pending',
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_automation_messages_retailer ON automation_messages(retailer_id)`);

        // Communication Log (WhatsApp messages, calls, etc.)
        await client.execute(`
            CREATE TABLE communication_log (
                id TEXT PRIMARY KEY,
                customer_id TEXT,
                type TEXT,
                direction TEXT,
                content TEXT,
                sent_at TEXT,
                automation_id TEXT,
                sale_id TEXT,
                status TEXT DEFAULT 'sent',
                retailer_id TEXT
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_communication_log_retailer ON communication_log(retailer_id)`);

        // Inquiries (Customer product inquiries)
        await client.execute(`
            CREATE TABLE inquiries (
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

        // Repairs (Service/repair job sheets)
        await client.execute(`
            CREATE TABLE repairs (
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

        // Inventory Logs (Stock inward/outward tracking)
        await client.execute(`
            CREATE TABLE inventory_logs (
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

        // Retailer Settings (JSON per category — security, alerts, taxes, language, backup, theme)
        await client.execute(`
            CREATE TABLE retailer_settings (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                category TEXT NOT NULL,
                settings TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, category)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailer_settings_rid ON retailer_settings(retailer_id)`);

        // Team Members
        await client.execute(`
            CREATE TABLE team_members (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                name TEXT NOT NULL,
                role TEXT NOT NULL,
                phone TEXT,
                email TEXT,
                status TEXT DEFAULT 'invited',
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_team_members_rid ON team_members(retailer_id)`);

        // Team Roles
        await client.execute(`
            CREATE TABLE team_roles (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                name TEXT NOT NULL,
                permissions TEXT NOT NULL,
                description TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, name)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_team_roles_rid ON team_roles(retailer_id)`);

        // Retailer Plugins
        await client.execute(`
            CREATE TABLE retailer_plugins (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                plugin_key TEXT NOT NULL,
                status TEXT DEFAULT 'available',
                config TEXT,
                connected_at TEXT,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, plugin_key)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailer_plugins_rid ON retailer_plugins(retailer_id)`);

        // Activity Logs
        await client.execute(`
            CREATE TABLE activity_logs (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                action TEXT NOT NULL,
                detail TEXT,
                user_name TEXT,
                icon TEXT,
                color TEXT,
                created_at TEXT NOT NULL
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_activity_logs_rid ON activity_logs(retailer_id)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(retailer_id, created_at)`);

        // Retailers (Onboarded retailers from external approved database)
        await client.execute(`
            CREATE TABLE retailers (
                -- Primary key
                id TEXT PRIMARY KEY,

                -- Generated unique code (replaces external codes)
                retailer_code TEXT UNIQUE NOT NULL,

                -- Business information
                retailer_name TEXT,
                contact_person TEXT,
                email TEXT,
                mobile_number TEXT UNIQUE NOT NULL,
                phone_number TEXT,

                -- Address
                address_line_1 TEXT,
                address_line_2 TEXT,
                country_name TEXT,
                state_name TEXT,
                city_name TEXT,
                district_name TEXT,
                area_name TEXT,
                pin_code TEXT,

                -- Financial
                vat_number TEXT,
                pan_number TEXT,

                -- Bank details
                bank_name TEXT,
                bank_account_holder TEXT,
                bank_account_number TEXT,
                bank_branch TEXT,
                bank_ifsc TEXT,

                -- Hierarchy
                parent_retailer_name TEXT,
                nd_name TEXT,
                rds_name TEXT,
                salesman_name TEXT,
                reporting_to_name TEXT,

                -- Metrics
                csa_on_counter TEXT,
                counter_potential_volume TEXT,
                counter_potential_value TEXT,

                -- Category
                retailer_category TEXT,
                retailer_category1 TEXT,
                retailer_classification TEXT,

                -- Dates
                dob TEXT,
                creation_date TEXT,
                onboarded_at TEXT DEFAULT CURRENT_TIMESTAMP,

                -- Status
                status TEXT DEFAULT 'active',
                approval_remarks TEXT,

                -- Registration tracking
                registration_completed INTEGER DEFAULT 1,
                otp_verified INTEGER DEFAULT 1,

                -- External DB tracking (for audit)
                external_db_id INTEGER,
                external_approval_status TEXT,
                external_process_status TEXT
            )
        `);

        // Create indexes for retailers
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailers_mobile ON retailers(mobile_number)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailers_code ON retailers(retailer_code)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailers_email ON retailers(email)`);

        // Store Listings (Online store products)
        await client.execute(`
            CREATE TABLE IF NOT EXISTS store_listings (
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
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_listings_retailer ON store_listings(retailer_id)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_listings_status ON store_listings(retailer_id, status)`);

        // Store Orders (Online orders)
        await client.execute(`
            CREATE TABLE IF NOT EXISTS store_orders (
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
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_orders_retailer ON store_orders(retailer_id)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_orders_status ON store_orders(retailer_id, order_status)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_orders_date ON store_orders(retailer_id, order_date)`);

        // Store Order Items
        await client.execute(`
            CREATE TABLE IF NOT EXISTS store_order_items (
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
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_store_order_items_order ON store_order_items(order_id)`);

        console.log("✅ Tables created: customers, products, companies, sales, sale_items, groups, group_members, automations, automation_messages, communication_log, retailers, store_listings, store_orders, store_order_items");

        // 4. Seed Basic Data with Indian Names
        console.log("🌱 Seeding data...");

        // Seed Customers (Indian Names)
        const customers = [
            ["CUST-001", "Arjun Malhotra", "9876543210", "arjun.malhotra@gmail.com", new Date(Date.now() - 90 * 86400000).toISOString(), null, "Mumbai"],
            ["CUST-002", "Priya Sharma", "9123456780", "priya.sharma@outlook.com", new Date(Date.now() - 60 * 86400000).toISOString(), null, "Delhi"],
            ["CUST-003", "Rahul Verma", "9988776655", "rahul.verma@yahoo.com", new Date(Date.now() - 45 * 86400000).toISOString(), null, "Bangalore"],
            ["CUST-004", "Anjali Patel", "9112233445", null, new Date(Date.now() - 30 * 86400000).toISOString(), null, "Ahmedabad"],
            ["CUST-005", "Vikram Singh", "9223344556", "vikram.singh@gmail.com", new Date(Date.now() - 20 * 86400000).toISOString(), null, "Jaipur"],
            ["CUST-006", "Neha Gupta", "9334455667", "neha.gupta@gmail.com", new Date(Date.now() - 15 * 86400000).toISOString(), null, "Pune"],
            ["CUST-007", "Amit Kumar", "9445566778", null, new Date(Date.now() - 10 * 86400000).toISOString(), null, "Chennai"],
            ["CUST-008", "Kavitha Reddy", "9556677889", "kavitha.r@gmail.com", new Date(Date.now() - 5 * 86400000).toISOString(), null, "Hyderabad"]
        ];

        for (const c of customers) {
            await client.execute({
                sql: "INSERT INTO customers (id, name, phone, email, joined_at, dob, location) VALUES (?, ?, ?, ?, ?, ?, ?)",
                args: c
            });
        }

        // Seed Products (installation_required: 0 = no, 1 = yes)
        const products = [
            ["PROD-001", "iPhone 15 Pro", "Apple", "Smartphones", 134900, 128000, 10, 0],
            ["PROD-002", "Galaxy S24 Ultra", "Samsung", "Smartphones", 129999, 120000, 15, 0],
            ["PROD-003", "AirPods Pro 2", "Apple", "Audio", 24900, 22000, 20, 0],
            ["PROD-004", "Sony WH-1000XM5", "Sony", "Audio", 29990, 26000, 8, 0],
            ["PROD-005", "MacBook Air M3", "Apple", "Laptops", 114900, 105000, 5, 0],
            ["PROD-006", "Samsung Split AC 1.5 Ton", "Samsung", "Air Conditioners", 45000, 42000, 8, 1],
            ["PROD-007", "LG Front Load Washing Machine 7kg", "LG", "Appliances", 38000, 35000, 5, 1],
            ["PROD-008", "Sony Bravia 55\" 4K TV", "Sony", "Television", 75000, 70000, 4, 1],
            ["PROD-009", "Voltas Window AC 1 Ton", "Voltas", "Air Conditioners", 32000, 29000, 6, 1],
            ["PROD-010", "Samsung 253L Refrigerator", "Samsung", "Appliances", 28000, 25000, 7, 1],
            ["PROD-011", "iPad Pro 12.9\" M2", "Apple", "Tablets", 112900, 105000, 6, 0],
            ["PROD-012", "OnePlus 12", "OnePlus", "Smartphones", 64999, 60000, 12, 0],
            ["PROD-013", "Bose QuietComfort Ultra", "Bose", "Audio", 36900, 33000, 5, 0],
            ["PROD-014", "Dell XPS 15", "Dell", "Laptops", 159990, 145000, 4, 0],
            ["PROD-015", "Apple Watch Ultra 2", "Apple", "Wearables", 89900, 82000, 8, 0]
        ];

        for (const p of products) {
            await client.execute({
                sql: "INSERT INTO products (id, name, brand, category, price, mop, in_stock, installation_required) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                args: p
            });
        }

        // Seed Sales History
        console.log("🌱 Seeding sales history...");
        
        // Calculate dates
        const today = new Date();
        const yesterday = new Date(Date.now() - 1 * 86400000);
        const twoDaysAgo = new Date(Date.now() - 2 * 86400000);
        const weekAgo = new Date(Date.now() - 7 * 86400000);
        const twoWeeksAgo = new Date(Date.now() - 14 * 86400000);
        const monthAgo = new Date(Date.now() - 30 * 86400000);

        // Sale 1: Arjun - iPhone + AirPods (Today)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-001", "CUST-001", "Arjun Malhotra", today.toISOString(), 150000, "completed", "upi", "UPI123456789"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-001A", "ORD-001", "PROD-001", "iPhone 15 Pro", "Smartphones", 1, 128000, "355421109876543"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-001B", "ORD-001", "PROD-003", "AirPods Pro 2", "Audio", 1, 22000]
        });

        // Sale 2: Priya - Samsung AC with installation (Yesterday)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, installation_required, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-002", "CUST-002", "Priya Sharma", yesterday.toISOString(), 42000, "completed", "card", 1, new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0]]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-002", "ORD-002", "PROD-006", "Samsung Split AC 1.5 Ton", "Air Conditioners", 1, 42000, "SAM-AC-2024-001", new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0]]
        });

        // Sale 3: Rahul - MacBook (2 days ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-003", "CUST-003", "Rahul Verma", twoDaysAgo.toISOString(), 105000, "completed", "card", "VISA-8876"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-003", "ORD-003", "PROD-005", "MacBook Air M3", "Laptops", 1, 105000, "FVFG25ABC123"]
        });

        // Sale 4: Anjali - Sony TV + Headphones (Week ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, installation_required, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-004", "CUST-004", "Anjali Patel", weekAgo.toISOString(), 96000, "completed", "upi", 1, new Date(Date.now() - 5 * 86400000).toISOString().split('T')[0]]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-004A", "ORD-004", "PROD-008", "Sony Bravia 55\" 4K TV", "Television", 1, 70000, "SONY-TV-2024-1234", new Date(Date.now() - 5 * 86400000).toISOString().split('T')[0]]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-004B", "ORD-004", "PROD-004", "Sony WH-1000XM5", "Audio", 1, 26000]
        });

        // Sale 5: Vikram - Galaxy S24 (Week ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-005", "CUST-005", "Vikram Singh", weekAgo.toISOString(), 120000, "completed", "cash"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-005", "ORD-005", "PROD-002", "Galaxy S24 Ultra", "Smartphones", 1, 120000, "355987654321098"]
        });

        // Sale 6: Neha - Refrigerator with installation (2 weeks ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, installation_required, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-006", "CUST-006", "Neha Gupta", twoWeeksAgo.toISOString(), 25000, "completed", "upi", 1, new Date(Date.now() - 12 * 86400000).toISOString().split('T')[0]]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-006", "ORD-006", "PROD-010", "Samsung 253L Refrigerator", "Appliances", 1, 25000, "SAM-REF-2024-567", new Date(Date.now() - 12 * 86400000).toISOString().split('T')[0]]
        });

        // Sale 7: Arjun - Second purchase - iPad (2 weeks ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-007", "CUST-001", "Arjun Malhotra", twoWeeksAgo.toISOString(), 105000, "completed", "card"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-007", "ORD-007", "PROD-011", "iPad Pro 12.9\" M2", "Tablets", 1, 105000, "DMPVG123ABC456"]
        });

        // Sale 8: Amit - OnePlus (Month ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-008", "CUST-007", "Amit Kumar", monthAgo.toISOString(), 60000, "completed", "cash"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-008", "ORD-008", "PROD-012", "OnePlus 12", "Smartphones", 1, 60000, "867543219876543"]
        });

        // Sale 9: Kavitha - LG Washing Machine (Month ago)
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, installation_required, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ORD-009", "CUST-008", "Kavitha Reddy", monthAgo.toISOString(), 35000, "completed", "upi", 1, new Date(Date.now() - 28 * 86400000).toISOString().split('T')[0]]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number, installation_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-009", "ORD-009", "PROD-007", "LG Front Load Washing Machine 7kg", "Appliances", 1, 35000, "LG-WM-2024-789", new Date(Date.now() - 28 * 86400000).toISOString().split('T')[0]]
        });

        // Draft sale for testing
        await client.execute({
            sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)",
            args: ["DRF-001", "CUST-003", "Rahul Verma", today.toISOString(), 82000, "draft"]
        });
        await client.execute({
            sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["ITEM-DRF-001", "DRF-001", "PROD-015", "Apple Watch Ultra 2", "Wearables", 1, 82000]
        });

        // Seed Groups
        console.log("🌱 Seeding groups...");

        // Company Group
        await client.execute({
            sql: "INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["GRP-001", "Tata Consultancy Services", "IT Services Company - Mumbai HQ", 1, "27AAACT5554B1Z5", "Rajesh Gopinathan", new Date(Date.now() - 30 * 86400000).toISOString()]
        });

        // Regular Groups
        await client.execute({
            sql: "INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["GRP-002", "VIP Customers", "High-value repeat customers", 0, null, null, new Date(Date.now() - 20 * 86400000).toISOString()]
        });

        await client.execute({
            sql: "INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["GRP-003", "Apple Enthusiasts", "Customers who prefer Apple products", 0, null, null, new Date(Date.now() - 10 * 86400000).toISOString()]
        });

        // Add members to groups
        // VIP Customers
        await client.execute({
            sql: "INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",
            args: ["GM-001", "GRP-002", "CUST-001", new Date().toISOString()]
        });
        await client.execute({
            sql: "INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",
            args: ["GM-002", "GRP-002", "CUST-005", new Date().toISOString()]
        });

        // Apple Enthusiasts
        await client.execute({
            sql: "INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",
            args: ["GM-003", "GRP-003", "CUST-001", new Date().toISOString()]
        });
        await client.execute({
            sql: "INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",
            args: ["GM-004", "GRP-003", "CUST-003", new Date().toISOString()]
        });

        // Seed Automations
        console.log("🌱 Seeding automations...");

        // Automation for Arjun's iPhone purchase
        await client.execute({
            sql: "INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["AUTO-001", "iPhone 15 Pro - Post-Purchase Journey", "CUST-001", "Arjun Malhotra", "ORD-001", "active", today.toISOString()]
        });

        // Messages for the automation
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-001", "AUTO-001", "welcome", "Welcome Message", "Thank you for purchasing iPhone 15 Pro! Here are some tips to get started...", 0, today.toISOString(), "sent"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-002", "AUTO-001", "tips", "Setup Guide", "Have you set up Face ID and Apple Pay? Here's how to maximize your iPhone experience...", 1, new Date(Date.now() + 1 * 86400000).toISOString(), "pending"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-003", "AUTO-001", "tips", "Camera Tips", "Your iPhone 15 Pro has an amazing camera! Here are 5 pro tips for stunning photos...", 3, new Date(Date.now() + 3 * 86400000).toISOString(), "pending"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-004", "AUTO-001", "upsell", "Accessory Recommendation", "Protect your iPhone with our premium cases! 20% off for you this week...", 7, new Date(Date.now() + 7 * 86400000).toISOString(), "pending"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-005", "AUTO-001", "feedback", "How's your iPhone?", "Hi Arjun! It's been 2 weeks with your new iPhone. We'd love to hear your feedback!", 14, new Date(Date.now() + 14 * 86400000).toISOString(), "pending"]
        });

        // Automation for Priya's AC with installation
        await client.execute({
            sql: "INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: ["AUTO-002", "Samsung AC - Installation Follow-up", "CUST-002", "Priya Sharma", "ORD-002", "active", yesterday.toISOString()]
        });

        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, sent_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-006", "AUTO-002", "welcome", "Thank You", "Thank you for choosing Samsung! Your AC installation is scheduled.", 0, yesterday.toISOString(), yesterday.toISOString(), "sent"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-007", "AUTO-002", "reminder", "Installation Reminder", "Your Samsung AC installation is tomorrow! Our technician will arrive between 10 AM - 12 PM.", 2, new Date(Date.now() + 2 * 86400000).toISOString(), "pending"]
        });
        await client.execute({
            sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["MSG-008", "AUTO-002", "tips", "AC Maintenance Tips", "Keep your AC running efficiently! Here are some maintenance tips...", 7, new Date(Date.now() + 7 * 86400000).toISOString(), "pending"]
        });

        // Communication log entries
        console.log("🌱 Seeding communication log...");

        await client.execute({
            sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["COMM-001", "CUST-001", "whatsapp", "outgoing", "Thank you for purchasing iPhone 15 Pro! Here are some tips to get started...", today.toISOString(), "AUTO-001", "ORD-001", "delivered"]
        });
        await client.execute({
            sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["COMM-002", "CUST-002", "whatsapp", "outgoing", "Thank you for choosing Samsung! Your AC installation is scheduled.", yesterday.toISOString(), "AUTO-002", "ORD-002", "delivered"]
        });
        await client.execute({
            sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, sale_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: ["COMM-003", "CUST-003", "whatsapp", "outgoing", "Your MacBook Air M3 invoice is attached. Thank you for shopping with us!", twoDaysAgo.toISOString(), "ORD-003", "delivered"]
        });

        // Seed Schemes
        console.log("🌱 Seeding schemes...");

        const schemes = [
            // Apple schemes
            ["SCH-001", "iPhone 15 Activation Bonus", "Apple", "Smartphones", "fixed", 2000, 100000, 200000, 2000, "₹2,000 instant discount on iPhone 15 series", new Date(Date.now() - 30 * 86400000).toISOString(), new Date(Date.now() + 60 * 86400000).toISOString(), "active"],
            ["SCH-002", "Apple Accessory Bundle", "Apple", "Audio", "percentage", 10, 5000, 50000, 500, "10% off on Apple accessories with any iPhone purchase", new Date(Date.now() - 15 * 86400000).toISOString(), new Date(Date.now() + 45 * 86400000).toISOString(), "active"],
            ["SCH-003", "MacBook Education Offer", "Apple", "Laptops", "fixed", 5000, 80000, 250000, 5000, "₹5,000 off for students and educators", new Date(Date.now() - 10 * 86400000).toISOString(), new Date(Date.now() + 90 * 86400000).toISOString(), "active"],
            
            // Samsung schemes
            ["SCH-004", "Samsung Galaxy Mega Sale", "Samsung", "Smartphones", "percentage", 5, 50000, 150000, 3000, "5% off on Galaxy S24 series", new Date(Date.now() - 20 * 86400000).toISOString(), new Date(Date.now() + 40 * 86400000).toISOString(), "active"],
            ["SCH-005", "Samsung AC Summer Offer", "Samsung", "Air Conditioners", "fixed", 3000, 30000, 80000, 3000, "₹3,000 installation discount on all Samsung ACs", new Date(Date.now() - 5 * 86400000).toISOString(), new Date(Date.now() + 55 * 86400000).toISOString(), "active"],
            ["SCH-006", "Samsung Appliance Bonanza", "Samsung", "Appliances", "percentage", 8, 20000, 100000, 2000, "8% off on refrigerators and washing machines", new Date(Date.now() - 10 * 86400000).toISOString(), new Date(Date.now() + 50 * 86400000).toISOString(), "active"],
            
            // Sony schemes
            ["SCH-007", "Sony Audio Fest", "Sony", "Audio", "percentage", 15, 10000, 50000, 1500, "15% off on Sony headphones", new Date(Date.now() - 7 * 86400000).toISOString(), new Date(Date.now() + 30 * 86400000).toISOString(), "active"],
            ["SCH-008", "Sony Bravia TV Offer", "Sony", "Television", "fixed", 5000, 50000, 150000, 5000, "₹5,000 instant cashback on Bravia TVs", new Date(Date.now() - 14 * 86400000).toISOString(), new Date(Date.now() + 45 * 86400000).toISOString(), "active"],
            
            // Other brands
            ["SCH-009", "LG Appliance Deal", "LG", "Appliances", "percentage", 10, 25000, 80000, 2500, "10% off on LG washing machines", new Date(Date.now() - 8 * 86400000).toISOString(), new Date(Date.now() + 35 * 86400000).toISOString(), "active"],
            ["SCH-010", "OnePlus Flash Sale", "OnePlus", "Smartphones", "fixed", 3000, 40000, 80000, 3000, "₹3,000 instant discount on OnePlus 12", new Date(Date.now() - 3 * 86400000).toISOString(), new Date(Date.now() + 15 * 86400000).toISOString(), "active"]
        ];

        for (const s of schemes) {
            await client.execute({
                sql: `INSERT INTO schemes (id, name, brand, category, discount_type, discount_value, min_price, max_price, payout, description, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                args: s
            });
        }

        console.log("✅ Database reset and seeded successfully!");
        console.log("📊 Summary:");
        console.log("   - 8 customers (Indian names)");
        console.log("   - 15 products");
        console.log("   - 9 completed sales + 1 draft");
        console.log("   - 3 groups (1 company, 2 regular) with sample members");
        console.log("   - 2 automations with message sequences");
        console.log("   - 3 communication log entries");
        console.log("   - 10 brand schemes");

    } catch (err) {
        console.error("❌ Error during DB Reset:", err);
    }
}

main();
