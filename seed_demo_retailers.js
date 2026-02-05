import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function seedDemoRetailers() {
    console.log("🏪 Seeding 2 Demo Retailers with sample data...\n");

    const now = new Date().toISOString();

    // ============================================================
    // RETAILER 1: TechZone Electronics - Mumbai
    // ============================================================
    const R1_ID = "demo_retailer_techzone_001";
    const R1_CODE = "ROS-20260206-0001";

    console.log("📌 Creating Retailer 1: TechZone Electronics...");

    // Check if already exists
    const existing1 = await client.execute({ sql: "SELECT id FROM retailers WHERE id = ?", args: [R1_ID] });
    if (existing1.rows.length > 0) {
        console.log("  ⚠️  Retailer 1 already exists, cleaning up first...");
        // Clean tenant data
        for (const table of ['customers', 'sales', 'companies', 'groups', 'group_members', 'automations', 'automation_messages', 'communication_log']) {
            await client.execute({ sql: `DELETE FROM ${table} WHERE retailer_id = ?`, args: [R1_ID] });
        }
        await client.execute({ sql: "DELETE FROM sale_items WHERE sale_id LIKE 'TZ-%'", args: [] });
        await client.execute({ sql: "DELETE FROM retailers WHERE id = ?", args: [R1_ID] });
    }

    // Insert Retailer 1
    await client.execute({
        sql: `INSERT INTO retailers (
            id, retailer_code, retailer_name, contact_person, email, mobile_number, phone_number,
            address_line_1, address_line_2, country_name, state_name, city_name, district_name, area_name, pin_code,
            vat_number, pan_number, bank_name, bank_account_holder, bank_account_number, bank_branch, bank_ifsc,
            parent_retailer_name, nd_name, rds_name, salesman_name, reporting_to_name,
            csa_on_counter, counter_potential_volume, counter_potential_value,
            retailer_category, retailer_category1, retailer_classification,
            status, onboarded_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
            R1_ID, R1_CODE, "TechZone Electronics", "Rajesh Kapoor", "rajesh@techzone.in", "9876543210", "022-26543210",
            "Shop No. 14, Phoenix Mall", "Lower Parel", "India", "Maharashtra", "Mumbai", "Mumbai City", "Lower Parel", "400013",
            "27AABCT1234B1Z5", "AABCT1234B", "HDFC Bank", "Rajesh Kapoor", "50100123456789", "Lower Parel Branch", "HDFC0001234",
            "DigiHub Distributors", "National Distributors Ltd", "West Region DS", "Amit Sharma", "Sunil Patel",
            "3", "250", "5000000",
            "Premium", "Electronics", "A+",
            "active", now
        ]
    });
    console.log("  ✅ Retailer 1 created");

    // Retailer 1 - Customers
    const r1Customers = [
        ["TZ-CUST-001", "Arjun Malhotra", "9876543210", "arjun.malhotra@gmail.com", R1_ID],
        ["TZ-CUST-002", "Priya Sharma", "9123456780", "priya.sharma@outlook.com", R1_ID],
        ["TZ-CUST-003", "Rahul Verma", "9988776655", "rahul.verma@yahoo.com", R1_ID],
        ["TZ-CUST-004", "Anjali Patel", "9112233445", null, R1_ID],
        ["TZ-CUST-005", "Vikram Singh", "9223344556", "vikram.singh@gmail.com", R1_ID],
    ];
    for (const c of r1Customers) {
        await client.execute({
            sql: "INSERT INTO customers (id, name, phone, email, joined_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",
            args: [c[0], c[1], c[2], c[3], new Date(Date.now() - Math.random() * 90 * 86400000).toISOString(), c[4]]
        });
    }
    console.log("  ✅ 5 customers added");

    // Retailer 1 - Sales
    const today = new Date();
    const yesterday = new Date(Date.now() - 86400000);
    const weekAgo = new Date(Date.now() - 7 * 86400000);

    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ORD-001", "TZ-CUST-001", "Arjun Malhotra", today.toISOString(), 150000, "completed", "upi", "UPI-TZ-001", R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ITEM-001A", "TZ-ORD-001", "PROD-001", "iPhone 15 Pro", "Smartphones", 1, 128000, "355421109876543"]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ITEM-001B", "TZ-ORD-001", "PROD-003", "AirPods Pro 2", "Audio", 1, 22000]
    });

    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ORD-002", "TZ-CUST-002", "Priya Sharma", yesterday.toISOString(), 42000, "completed", "card", R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, serial_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ITEM-002", "TZ-ORD-002", "PROD-006", "Samsung Split AC 1.5 Ton", "Air Conditioners", 1, 42000, "SAM-AC-TZ-001"]
    });

    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ORD-003", "TZ-CUST-003", "Rahul Verma", weekAgo.toISOString(), 105000, "completed", "card", R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-ITEM-003", "TZ-ORD-003", "PROD-005", "MacBook Air M3", "Laptops", 1, 105000]
    });
    console.log("  ✅ 3 sales with items added");

    // Retailer 1 - Groups
    await client.execute({
        sql: "INSERT INTO groups (id, name, description, is_company, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",
        args: ["TZ-GRP-001", "VIP Customers", "High-value repeat customers", 0, now, R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",
        args: ["TZ-GM-001", "TZ-GRP-001", "TZ-CUST-001", now, R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",
        args: ["TZ-GM-002", "TZ-GRP-001", "TZ-CUST-005", now, R1_ID]
    });
    console.log("  ✅ 1 group with 2 members added");

    // Retailer 1 - Automation
    await client.execute({
        sql: "INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-AUTO-001", "iPhone 15 Pro - Post-Purchase", "TZ-CUST-001", "Arjun Malhotra", "TZ-ORD-001", "active", now, R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-MSG-001", "TZ-AUTO-001", "welcome", "Welcome!", "Thank you for your iPhone 15 Pro purchase at TechZone!", 0, now, "sent", R1_ID]
    });
    console.log("  ✅ 1 automation with messages added");

    // Retailer 1 - Communication
    await client.execute({
        sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, sale_id, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-COMM-001", "TZ-CUST-001", "whatsapp", "outgoing", "Thank you for your purchase at TechZone Electronics!", now, "TZ-ORD-001", "delivered", R1_ID]
    });
    console.log("  ✅ 1 communication log entry added");

    console.log("\n✅ Retailer 1 (TechZone Electronics) complete!\n");

    // ============================================================
    // RETAILER 2: Digital World - Delhi
    // ============================================================
    const R2_ID = "demo_retailer_digitalworld_002";
    const R2_CODE = "ROS-20260206-0002";

    console.log("📌 Creating Retailer 2: Digital World...");

    // Check if already exists
    const existing2 = await client.execute({ sql: "SELECT id FROM retailers WHERE id = ?", args: [R2_ID] });
    if (existing2.rows.length > 0) {
        console.log("  ⚠️  Retailer 2 already exists, cleaning up first...");
        for (const table of ['customers', 'sales', 'companies', 'groups', 'group_members', 'automations', 'automation_messages', 'communication_log']) {
            await client.execute({ sql: `DELETE FROM ${table} WHERE retailer_id = ?`, args: [R2_ID] });
        }
        await client.execute({ sql: "DELETE FROM sale_items WHERE sale_id LIKE 'DW-%'", args: [] });
        await client.execute({ sql: "DELETE FROM retailers WHERE id = ?", args: [R2_ID] });
    }

    // Insert Retailer 2
    await client.execute({
        sql: `INSERT INTO retailers (
            id, retailer_code, retailer_name, contact_person, email, mobile_number, phone_number,
            address_line_1, address_line_2, country_name, state_name, city_name, district_name, area_name, pin_code,
            vat_number, pan_number, bank_name, bank_account_holder, bank_account_number, bank_branch, bank_ifsc,
            parent_retailer_name, nd_name, rds_name, salesman_name, reporting_to_name,
            csa_on_counter, counter_potential_volume, counter_potential_value,
            retailer_category, retailer_category1, retailer_classification,
            status, onboarded_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        args: [
            R2_ID, R2_CODE, "Digital World", "Neha Gupta", "neha@digitalworld.co.in", "9811223344", "011-45678901",
            "C-12, Nehru Place", "IT Market Complex", "India", "Delhi", "New Delhi", "South Delhi", "Nehru Place", "110019",
            "07AABCD5678E1Z3", "AABCD5678E", "ICICI Bank", "Neha Gupta", "00201234567890", "Nehru Place Branch", "ICIC0004567",
            "MegaTech Solutions", "North India Distributors", "Delhi Region DS", "Pooja Mehra", "Ravi Kumar",
            "2", "180", "3500000",
            "Standard", "Electronics & Gadgets", "A",
            "active", now
        ]
    });
    console.log("  ✅ Retailer 2 created");

    // Retailer 2 - Customers (DIFFERENT from Retailer 1)
    const r2Customers = [
        ["DW-CUST-001", "Deepak Mehra", "9654321098", "deepak.mehra@gmail.com", R2_ID],
        ["DW-CUST-002", "Sunita Rani", "9871234567", "sunita.rani@yahoo.com", R2_ID],
        ["DW-CUST-003", "Manish Tiwari", "9765432109", null, R2_ID],
        ["DW-CUST-004", "Ritu Agarwal", "9543216789", "ritu.agarwal@outlook.com", R2_ID],
    ];
    for (const c of r2Customers) {
        await client.execute({
            sql: "INSERT INTO customers (id, name, phone, email, joined_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",
            args: [c[0], c[1], c[2], c[3], new Date(Date.now() - Math.random() * 60 * 86400000).toISOString(), c[4]]
        });
    }
    console.log("  ✅ 4 customers added");

    // Retailer 2 - Sales
    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-ORD-001", "DW-CUST-001", "Deepak Mehra", today.toISOString(), 120000, "completed", "card", R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-ITEM-001", "DW-ORD-001", "PROD-002", "Galaxy S24 Ultra", "Smartphones", 1, 120000, "355987654321098"]
    });

    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-ORD-002", "DW-CUST-002", "Sunita Rani", yesterday.toISOString(), 60000, "completed", "upi", R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-ITEM-002", "DW-ORD-002", "PROD-012", "OnePlus 12", "Smartphones", 1, 60000, "867543219876543"]
    });

    // Draft sale for R2
    await client.execute({
        sql: "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-DRF-001", "DW-CUST-003", "Manish Tiwari", today.toISOString(), 82000, "draft", R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-ITEM-DRF-001", "DW-DRF-001", "PROD-015", "Apple Watch Ultra 2", "Wearables", 1, 82000]
    });
    console.log("  ✅ 2 sales + 1 draft with items added");

    // Retailer 2 - Groups
    await client.execute({
        sql: "INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-GRP-001", "TCS Corporate", "Tata Consultancy Services", 1, "27AAACT5554B1Z5", "Rajesh G.", now, R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",
        args: ["DW-GM-001", "DW-GRP-001", "DW-CUST-001", now, R2_ID]
    });
    console.log("  ✅ 1 group with 1 member added");

    // Retailer 2 - Automation
    await client.execute({
        sql: "INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-AUTO-001", "Galaxy S24 - Welcome Sequence", "DW-CUST-001", "Deepak Mehra", "DW-ORD-001", "active", now, R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-MSG-001", "DW-AUTO-001", "welcome", "Welcome to Digital World!", "Thank you for your Galaxy S24 Ultra purchase!", 0, now, "sent", R2_ID]
    });
    console.log("  ✅ 1 automation with messages added");

    console.log("\n✅ Retailer 2 (Digital World) complete!\n");

    // ============================================================
    // SUMMARY
    // ============================================================
    console.log("═══════════════════════════════════════════════════════");
    console.log("  DEMO RETAILERS SEEDED SUCCESSFULLY");
    console.log("═══════════════════════════════════════════════════════");
    console.log("");
    console.log("  RETAILER 1: TechZone Electronics");
    console.log("  ├─ Code: ROS-20260206-0001");
    console.log("  ├─ Mobile: 9876543210");
    console.log("  ├─ City: Mumbai, Maharashtra");
    console.log("  ├─ 5 customers, 3 sales, 1 group, 1 automation");
    console.log("  └─ Login with: 9876543210 or ROS-20260206-0001");
    console.log("");
    console.log("  RETAILER 2: Digital World");
    console.log("  ├─ Code: ROS-20260206-0002");
    console.log("  ├─ Mobile: 9811223344");
    console.log("  ├─ City: New Delhi, Delhi");
    console.log("  ├─ 4 customers, 2 sales + 1 draft, 1 group, 1 automation");
    console.log("  └─ Login with: 9811223344 or ROS-20260206-0002");
    console.log("");
    console.log("═══════════════════════════════════════════════════════");
    console.log("  Test multi-tenant isolation:");
    console.log("  1. Login as TechZone (9876543210) → see 5 customers, 3 sales");
    console.log("  2. Logout → Login as Digital World (9811223344) → see 4 customers, 2 sales");
    console.log("  3. Each retailer should ONLY see their own data!");
    console.log("═══════════════════════════════════════════════════════");
}

seedDemoRetailers().catch(console.error);
