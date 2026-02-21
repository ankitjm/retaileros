import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function seedDemoRetailers() {
    console.log("🏪 Seeding 2 Demo Retailers with sample data...\n");

    // Disable foreign key checks for cleanup
    await client.execute("PRAGMA foreign_keys = OFF");

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
        // Clean tenant data (child tables first to avoid FK constraints)
        await client.execute({ sql: "DELETE FROM sale_items WHERE sale_id LIKE 'TZ-%'", args: [] });
        await client.execute({ sql: "DELETE FROM store_order_items WHERE order_id LIKE 'TZ-%'", args: [] });
        await client.execute({ sql: "DELETE FROM automation_messages WHERE automation_id LIKE 'TZ-%'", args: [] });
        await client.execute({ sql: "DELETE FROM group_members WHERE group_id LIKE 'TZ-%'", args: [] });
        for (const table of ['communication_log', 'sales', 'store_orders', 'automations', 'groups', 'companies', 'customers', 'repairs', 'inquiries', 'team_members', 'inventory_logs', 'store_listings', 'activity_logs']) {
            await client.execute({ sql: `DELETE FROM ${table} WHERE retailer_id = ?`, args: [R1_ID] });
        }
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
    await client.execute({
        sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, sale_id, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-COMM-002", "TZ-CUST-002", "whatsapp", "outgoing", "Your Samsung AC installation is scheduled for tomorrow!", yesterday.toISOString(), "TZ-ORD-002", "delivered", R1_ID]
    });
    console.log("  ✅ 2 communication log entries added");

    // Retailer 1 - Repairs
    const repairStatuses = ['COLLECTED', 'SENT_TO_BRAND', 'IN_REPAIR', 'READY', 'COMPLETED'];
    const r1Repairs = [
        ["TZ-REP-001", "Arjun Malhotra", "9876543210", "iPhone 14 Pro", "Screen cracked after drop", "COLLECTED", "JS-TZ-2024-001", "Runner A"],
        ["TZ-REP-002", "Priya Sharma", "9123456780", "Samsung Galaxy S23", "Battery draining fast", "IN_REPAIR", "JS-TZ-2024-002", "Runner B"],
        ["TZ-REP-003", "Rahul Verma", "9988776655", "MacBook Air M2", "Keyboard not responding", "SENT_TO_BRAND", "JS-TZ-2024-003", "Runner A"],
        ["TZ-REP-004", "Anjali Patel", "9112233445", "OnePlus 12", "Not turning on", "READY", "JS-TZ-2024-004", "Tech Lead"],
        ["TZ-REP-005", "Vikram Singh", "9223344556", "iPad Air 5", "Touch screen unresponsive", "COMPLETED", "JS-TZ-2024-005", "Runner B"],
        ["TZ-REP-006", "Sanya Kapoor", "9334455667", "Samsung Split AC 1.5T", "Cooling issue", "COLLECTED", "JS-TZ-2024-006", "Runner A"],
    ];
    for (const r of r1Repairs) {
        await client.execute({
            sql: "INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], new Date(Date.now() - Math.random() * 14 * 86400000).toISOString(), R1_ID]
        });
    }
    console.log("  ✅ 6 repairs added");

    // Retailer 1 - Inquiries
    const r1Inquiries = [
        ["TZ-INQ-001", "Deepak Mehra", "iPhone 16 Pro Max", "Want to know about exchange offers for my iPhone 13", "PENDING"],
        ["TZ-INQ-002", "Sunita Rani", "Samsung Galaxy Z Fold 6", "Interested in EMI options", "IN_PROGRESS"],
        ["TZ-INQ-003", "Manish Tiwari", "LG 55\" OLED TV", "When will the new model arrive?", "PENDING"],
        ["TZ-INQ-004", "Ritu Agarwal", "Apple Watch Ultra 2", "Do you have the orange alpine strap?", "RESOLVED"],
        ["TZ-INQ-005", "Arjun Malhotra", "AirPods Max", "Can I get a demo before buying?", "PENDING"],
    ];
    for (const inq of r1Inquiries) {
        await client.execute({
            sql: "INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: [inq[0], inq[1], inq[2], inq[3], inq[4], new Date(Date.now() - Math.random() * 7 * 86400000).toISOString(), R1_ID]
        });
    }
    console.log("  ✅ 5 inquiries added");

    // Retailer 1 - Team Members
    const r1Team = [
        ["TZ-TM-001", "Amit Sharma", "Sales Manager", "9876500001", "amit@techzone.in", "active"],
        ["TZ-TM-002", "Pooja Desai", "Sales Officer", "9876500002", "pooja@techzone.in", "active"],
        ["TZ-TM-003", "Karan Mehta", "Technician", "9876500003", "karan@techzone.in", "active"],
        ["TZ-TM-004", "Sneha Joshi", "Support Staff", "9876500004", "sneha@techzone.in", "active"],
        ["TZ-TM-005", "Rohit Patel", "Promoter - Samsung", "9876500005", null, "invited"],
    ];
    for (const tm of r1Team) {
        await client.execute({
            sql: "INSERT INTO team_members (id, retailer_id, name, role, phone, email, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [tm[0], R1_ID, tm[1], tm[2], tm[3], tm[4], tm[5], now, now]
        });
    }
    console.log("  ✅ 5 team members added");

    // Retailer 1 - Inventory Logs
    const r1InvLogs = [
        ["TZ-INV-001", "PROD-001", "inward", 10, "Fresh stock - iPhone 15 Pro"],
        ["TZ-INV-002", "PROD-002", "inward", 15, "Fresh stock - Galaxy S24 Ultra"],
        ["TZ-INV-003", "PROD-003", "inward", 25, "Fresh stock - AirPods Pro 2"],
        ["TZ-INV-004", "PROD-001", "outward", 1, "Sale TZ-ORD-001 - Arjun Malhotra"],
        ["TZ-INV-005", "PROD-006", "inward", 8, "Samsung AC summer stock"],
    ];
    for (const il of r1InvLogs) {
        await client.execute({
            sql: "INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: [il[0], il[1], il[2], il[3], il[4], new Date(Date.now() - Math.random() * 30 * 86400000).toISOString(), R1_ID]
        });
    }
    console.log("  ✅ 5 inventory logs added");

    // Retailer 1 - Store Listings (Marketplace)
    const r1Listings = [
        ["TZ-LST-001", "PROD-001", "iPhone 15 Pro", 125000, "active", 5, "iPhone 15 Pro - Brand New Sealed"],
        ["TZ-LST-002", "PROD-005", "MacBook Air M3", 99000, "active", 3, "MacBook Air M3 - Latest Model"],
        ["TZ-LST-003", "PROD-006", "Samsung Split AC 1.5T", 38000, "draft", 2, "Samsung AC 1.5T - Clearance"],
    ];
    for (const sl of r1Listings) {
        await client.execute({
            sql: "INSERT INTO store_listings (id, product_id, product_name, listing_price, status, stock_qty, description, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [sl[0], sl[1], sl[2], sl[3], sl[4], sl[5], sl[6], now, now, R1_ID]
        });
    }
    console.log("  ✅ 3 store listings added");

    // Retailer 1 - Store Orders
    await client.execute({
        sql: "INSERT INTO store_orders (id, order_number, customer_name, customer_phone, order_date, order_status, payment_status, total_amount, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-SO-001", "SO-2024-001", "Kavita Reddy", "9988001122", yesterday.toISOString(), "pending", "completed", 125000, R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO store_order_items (id, order_id, product_id, product_name, quantity, unit_price, final_price) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-SOI-001", "TZ-SO-001", "PROD-001", "iPhone 15 Pro", 1, 125000, 125000]
    });
    await client.execute({
        sql: "INSERT INTO store_orders (id, order_number, customer_name, customer_phone, order_date, order_status, payment_status, total_amount, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-SO-002", "SO-2024-002", "Nikhil Sharma", "9977001234", today.toISOString(), "shipped", "completed", 99000, R1_ID]
    });
    await client.execute({
        sql: "INSERT INTO store_order_items (id, order_id, product_id, product_name, quantity, unit_price, final_price) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: ["TZ-SOI-002", "TZ-SO-002", "PROD-005", "MacBook Air M3", 1, 99000, 99000]
    });
    console.log("  ✅ 2 store orders added");

    // Retailer 1 - Activity Logs
    const r1Activities = [
        ["TZ-ACT-001", "sale_completed", "Sale #TZ-ORD-001 completed - iPhone 15 Pro to Arjun Malhotra (₹1,50,000)", "Rajesh Kapoor", "receipt_long", "green"],
        ["TZ-ACT-002", "repair_created", "Repair job JS-TZ-2024-001 created for Arjun Malhotra - iPhone 14 Pro screen crack", "Karan Mehta", "build", "blue"],
        ["TZ-ACT-003", "customer_added", "New customer Anjali Patel added", "Pooja Desai", "person_add", "purple"],
        ["TZ-ACT-004", "inventory_inward", "10 units iPhone 15 Pro received", "Amit Sharma", "inventory", "orange"],
        ["TZ-ACT-005", "inquiry_received", "New inquiry from Deepak Mehra about iPhone 16 Pro Max", "System", "help", "yellow"],
    ];
    for (const act of r1Activities) {
        await client.execute({
            sql: "INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: [act[0], R1_ID, act[1], act[2], act[3], act[4], act[5], new Date(Date.now() - Math.random() * 3 * 86400000).toISOString()]
        });
    }
    console.log("  ✅ 5 activity logs added");

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
        await client.execute({ sql: "DELETE FROM sale_items WHERE sale_id LIKE 'DW-%'", args: [] });
        await client.execute({ sql: "DELETE FROM store_order_items WHERE order_id LIKE 'DW-%'", args: [] });
        await client.execute({ sql: "DELETE FROM automation_messages WHERE automation_id LIKE 'DW-%'", args: [] });
        await client.execute({ sql: "DELETE FROM group_members WHERE group_id LIKE 'DW-%'", args: [] });
        for (const table of ['communication_log', 'sales', 'store_orders', 'automations', 'groups', 'companies', 'customers', 'repairs', 'inquiries', 'team_members', 'inventory_logs', 'store_listings', 'activity_logs']) {
            await client.execute({ sql: `DELETE FROM ${table} WHERE retailer_id = ?`, args: [R2_ID] });
        }
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

    // Retailer 2 - Communication
    await client.execute({
        sql: "INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, sale_id, status, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-COMM-001", "DW-CUST-001", "whatsapp", "outgoing", "Your Galaxy S24 Ultra is ready for pickup!", now, "DW-ORD-001", "delivered", R2_ID]
    });

    // Retailer 2 - Repairs
    const r2Repairs = [
        ["DW-REP-001", "Deepak Mehra", "9654321098", "Samsung Galaxy S22", "Overheating issue", "IN_REPAIR", "JS-DW-2024-001", "Tech A"],
        ["DW-REP-002", "Sunita Rani", "9871234567", "iPhone 13", "Face ID not working", "COLLECTED", "JS-DW-2024-002", "Tech B"],
        ["DW-REP-003", "Manish Tiwari", "9765432109", "Realme GT 5 Pro", "Charging port damaged", "READY", "JS-DW-2024-003", "Tech A"],
        ["DW-REP-004", "Ritu Agarwal", "9543216789", "HP Pavilion Laptop", "Windows not booting", "SENT_TO_BRAND", "JS-DW-2024-004", "Tech B"],
    ];
    for (const r of r2Repairs) {
        await client.execute({
            sql: "INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], new Date(Date.now() - Math.random() * 10 * 86400000).toISOString(), R2_ID]
        });
    }
    console.log("  ✅ 4 repairs added");

    // Retailer 2 - Inquiries
    const r2Inquiries = [
        ["DW-INQ-001", "Kavita Reddy", "Samsung Galaxy Z Flip 6", "Price and availability?", "PENDING"],
        ["DW-INQ-002", "Nikhil Sharma", "Nothing Phone 3", "When is the launch date?", "PENDING"],
        ["DW-INQ-003", "Deepak Mehra", "Bose QC Ultra Headphones", "Do you have stock?", "RESOLVED"],
    ];
    for (const inq of r2Inquiries) {
        await client.execute({
            sql: "INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: [inq[0], inq[1], inq[2], inq[3], inq[4], new Date(Date.now() - Math.random() * 5 * 86400000).toISOString(), R2_ID]
        });
    }
    console.log("  ✅ 3 inquiries added");

    // Retailer 2 - Team Members
    const r2Team = [
        ["DW-TM-001", "Neha Gupta", "Store Owner", "9811223344", "neha@digitalworld.co.in", "active"],
        ["DW-TM-002", "Sanjay Kumar", "Sales Executive", "9811001122", "sanjay@digitalworld.co.in", "active"],
        ["DW-TM-003", "Preeti Sharma", "Technician", "9811002233", null, "active"],
    ];
    for (const tm of r2Team) {
        await client.execute({
            sql: "INSERT INTO team_members (id, retailer_id, name, role, phone, email, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [tm[0], R2_ID, tm[1], tm[2], tm[3], tm[4], tm[5], now, now]
        });
    }
    console.log("  ✅ 3 team members added");

    // Retailer 2 - Inventory Logs
    const r2InvLogs = [
        ["DW-INV-001", "PROD-002", "inward", 12, "Galaxy S24 Ultra stock"],
        ["DW-INV-002", "PROD-012", "inward", 20, "OnePlus 12 stock"],
        ["DW-INV-003", "PROD-002", "outward", 1, "Sale DW-ORD-001"],
    ];
    for (const il of r2InvLogs) {
        await client.execute({
            sql: "INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            args: [il[0], il[1], il[2], il[3], il[4], new Date(Date.now() - Math.random() * 15 * 86400000).toISOString(), R2_ID]
        });
    }
    console.log("  ✅ 3 inventory logs added");

    // Retailer 2 - Store Listings
    await client.execute({
        sql: "INSERT INTO store_listings (id, product_id, product_name, listing_price, status, stock_qty, description, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-LST-001", "PROD-012", "OnePlus 12", 55000, "active", 8, "OnePlus 12 - Best Price in Delhi", now, now, R2_ID]
    });
    await client.execute({
        sql: "INSERT INTO store_listings (id, product_id, product_name, listing_price, status, stock_qty, description, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: ["DW-LST-002", "PROD-015", "Apple Watch Ultra 2", 78000, "active", 2, "Apple Watch Ultra 2 - Limited Stock", now, now, R2_ID]
    });
    console.log("  ✅ 2 store listings added");

    // Retailer 2 - Activity Logs
    const r2Activities = [
        ["DW-ACT-001", "sale_completed", "Sale #DW-ORD-001 completed - Galaxy S24 Ultra to Deepak Mehra (₹1,20,000)", "Neha Gupta", "receipt_long", "green"],
        ["DW-ACT-002", "repair_created", "Repair job JS-DW-2024-001 for Deepak Mehra - Samsung Galaxy S22 overheating", "Preeti Sharma", "build", "blue"],
        ["DW-ACT-003", "draft_sale", "Draft sale #DW-DRF-001 created for Manish Tiwari (₹82,000)", "Sanjay Kumar", "edit_note", "orange"],
    ];
    for (const act of r2Activities) {
        await client.execute({
            sql: "INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            args: [act[0], R2_ID, act[1], act[2], act[3], act[4], act[5], new Date(Date.now() - Math.random() * 2 * 86400000).toISOString()]
        });
    }
    console.log("  ✅ 3 activity logs added");

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
    console.log("  ├─ 6 repairs, 5 inquiries, 5 team members");
    console.log("  ├─ 5 inventory logs, 3 store listings, 2 store orders");
    console.log("  └─ Login with: 9876543210 or ROS-20260206-0001");
    console.log("");
    console.log("  RETAILER 2: Digital World");
    console.log("  ├─ Code: ROS-20260206-0002");
    console.log("  ├─ Mobile: 9811223344");
    console.log("  ├─ City: New Delhi, Delhi");
    console.log("  ├─ 4 customers, 2 sales + 1 draft, 1 group, 1 automation");
    console.log("  ├─ 4 repairs, 3 inquiries, 3 team members");
    console.log("  ├─ 3 inventory logs, 2 store listings");
    console.log("  └─ Login with: 9811223344 or ROS-20260206-0002");
    console.log("");
    console.log("═══════════════════════════════════════════════════════");
    console.log("  Test multi-tenant isolation:");
    console.log("  1. Login as TechZone (9876543210) → see 5 customers, 3 sales");
    console.log("  2. Logout → Login as Digital World (9811223344) → see 4 customers, 2 sales");
    console.log("  3. Each retailer should ONLY see their own data!");
    console.log("═══════════════════════════════════════════════════════");

    // Re-enable foreign key checks
    await client.execute("PRAGMA foreign_keys = ON");
}

seedDemoRetailers().catch(console.error);
