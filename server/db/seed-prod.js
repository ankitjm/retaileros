/**
 * RetailerOS Production — Demo Seed Script
 * Run: node server/db/seed-prod.js
 *
 * Seeds realistic Indian consumer electronics retail data.
 * Idempotent — safe to run multiple times (ON CONFLICT DO NOTHING).
 */
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://retaileros_prod:5f9bd5ab97106969c30b6128d3805a46@localhost:5432/retaileros_prod',
});

const RID = 'ret_demo_khosha_001';

async function seed() {
  const client = await pool.connect();

  try {
    console.log('[seed] Starting production seed...\n');

    // ── 0. Schema migration: add retailer_id to sale_items if missing ──
    await client.query(`ALTER TABLE sale_items ADD COLUMN IF NOT EXISTS retailer_id TEXT;`);
    console.log('[seed] sale_items.retailer_id column ensured.');

    // ── 1. Retailer ──
    await client.query(`
      INSERT INTO retailers (id, retailer_code, retailer_name, contact_person, email, mobile_number, city_name, state_name, status, onboarded_at)
      VALUES ('${RID}', 'ROS-20260225-0001', 'Khosha Electronics', 'Nischal', 'demo@retaileros.in', '9876543210', 'Bengaluru', 'Karnataka', 'active', NOW()::text)
      ON CONFLICT (id) DO NOTHING;
    `);
    console.log('[seed] Retailer inserted.');

    // ── 2. Approved Retailer (OTP login whitelist) ──
    await client.query(`
      INSERT INTO approved_retailers (mobile_number, retailer_name, contact_person, email, approval_status, process_status)
      VALUES ('9876543210', 'Khosha Electronics', 'Nischal', 'demo@retaileros.in', 'Approved', 'approved')
      ON CONFLICT (mobile_number) DO NOTHING;
    `);
    console.log('[seed] Approved retailer inserted.');

    // ── 3. Products (15 items) ──
    const products = [
      // Smartphones
      { id: 'prod_001', name: 'iPhone 15 Pro Max 256GB',        brand: 'Apple',   category: 'Smartphones',       price: 159900, mop: 142000, in_stock: 12, sku: 'APL-IP15PM-256',  install: 0 },
      { id: 'prod_002', name: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', category: 'Smartphones',       price: 134999, mop: 118000, in_stock: 8,  sku: 'SAM-S24U-256',    install: 0 },
      { id: 'prod_003', name: 'OnePlus 12 256GB',               brand: 'OnePlus', category: 'Smartphones',       price: 69999,  mop: 59500,  in_stock: 15, sku: 'OP-12-256',       install: 0 },
      // Laptops
      { id: 'prod_004', name: 'MacBook Air M3 15" 16GB/512GB',  brand: 'Apple',   category: 'Laptops',           price: 149900, mop: 132000, in_stock: 6,  sku: 'APL-MBA-M3-15',   install: 0 },
      { id: 'prod_005', name: 'Samsung Galaxy Book4 Pro 14"',    brand: 'Samsung', category: 'Laptops',           price: 114999, mop: 98000,  in_stock: 5,  sku: 'SAM-GB4P-14',     install: 0 },
      // TVs
      { id: 'prod_006', name: 'Sony Bravia XR 55" 4K OLED',     brand: 'Sony',    category: 'TVs',               price: 149990, mop: 128000, in_stock: 7,  sku: 'SNY-XR55-OLED',   install: 1 },
      { id: 'prod_007', name: 'Samsung 65" Crystal 4K UHD TV',   brand: 'Samsung', category: 'TVs',               price: 72990,  mop: 62000,  in_stock: 10, sku: 'SAM-CU65-4K',     install: 1 },
      { id: 'prod_008', name: 'LG 55" OLED C3 4K TV',           brand: 'LG',      category: 'TVs',               price: 119990, mop: 102000, in_stock: 5,  sku: 'LG-OLEDC3-55',    install: 1 },
      // Audio
      { id: 'prod_009', name: 'Bose QuietComfort Ultra Headphones', brand: 'Bose', category: 'Audio',            price: 34900,  mop: 29500,  in_stock: 20, sku: 'BOSE-QCU-HP',     install: 0 },
      { id: 'prod_010', name: 'Sony WH-1000XM5 Headphones',     brand: 'Sony',    category: 'Audio',             price: 29990,  mop: 25000,  in_stock: 18, sku: 'SNY-WH1000XM5',   install: 0 },
      // Home Appliances
      { id: 'prod_011', name: 'LG 10kg Front Load Washing Machine', brand: 'LG',  category: 'Home Appliances',   price: 54990,  mop: 46000,  in_stock: 8,  sku: 'LG-WM-FL10',      install: 1 },
      { id: 'prod_012', name: 'Samsung 253L Frost Free Refrigerator', brand: 'Samsung', category: 'Home Appliances', price: 28990, mop: 24000, in_stock: 10, sku: 'SAM-RF253-FF',   install: 1 },
      // Wearables
      { id: 'prod_013', name: 'Apple Watch Ultra 2',             brand: 'Apple',   category: 'Wearables',         price: 89900,  mop: 78000,  in_stock: 9,  sku: 'APL-AWU2',         install: 0 },
      // Tablets
      { id: 'prod_014', name: 'iPad Air M2 11" 128GB',          brand: 'Apple',   category: 'Tablets',            price: 69900,  mop: 60000,  in_stock: 14, sku: 'APL-IPAM2-128',    install: 0 },
      { id: 'prod_015', name: 'Samsung Galaxy Tab S9 FE 128GB',  brand: 'Samsung', category: 'Tablets',           price: 44999,  mop: 38000,  in_stock: 11, sku: 'SAM-TABS9FE-128',  install: 0 },
    ];

    for (const p of products) {
      await client.query(`
        INSERT INTO products (id, name, brand, category, price, mop, in_stock, sku, installation_required)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (id) DO NOTHING
      `, [p.id, p.name, p.brand, p.category, p.price, p.mop, p.in_stock, p.sku, p.install]);
    }
    console.log(`[seed] ${products.length} products inserted.`);

    // ── 4. Customers (8) ──
    const customers = [
      { id: 'cust_001', name: 'Arjun Mehta',      phone: '9845012345', email: 'arjun.mehta@gmail.com',    location: 'Koramangala, Bengaluru' },
      { id: 'cust_002', name: 'Priya Sharma',      phone: '9820034567', email: 'priya.sharma@yahoo.com',   location: 'Andheri West, Mumbai' },
      { id: 'cust_003', name: 'Rahul Krishnan',    phone: '9841056789', email: 'rahul.k@outlook.com',      location: 'T Nagar, Chennai' },
      { id: 'cust_004', name: 'Sneha Reddy',       phone: '9900123456', email: 'sneha.reddy@gmail.com',    location: 'Indiranagar, Bengaluru' },
      { id: 'cust_005', name: 'Vikram Patel',      phone: '9811045678', email: 'vikram.patel@gmail.com',   location: 'Connaught Place, Delhi' },
      { id: 'cust_006', name: 'Deepa Nair',        phone: '9876012345', email: 'deepa.nair@hotmail.com',   location: 'Jayanagar, Bengaluru' },
      { id: 'cust_007', name: 'Karthik Iyer',      phone: '9845098765', email: 'karthik.iyer@gmail.com',   location: 'HSR Layout, Bengaluru' },
      { id: 'cust_008', name: 'Ananya Gupta',      phone: '9810023456', email: 'ananya.gupta@gmail.com',   location: 'Vasant Kunj, Delhi' },
    ];

    const now = new Date();
    for (const c of customers) {
      const joinedDaysAgo = Math.floor(Math.random() * 180) + 30;
      const joined = new Date(now - joinedDaysAgo * 86400000).toISOString().split('T')[0];
      await client.query(`
        INSERT INTO customers (id, name, phone, email, location, joined_at, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO NOTHING
      `, [c.id, c.name, c.phone, c.email, c.location, joined, RID]);
    }
    console.log(`[seed] ${customers.length} customers inserted.`);

    // ── 5. Sales (10 — 9 completed, 1 draft) ──
    const sales = [
      { id: 'sale_001', cid: 'cust_001', cname: 'Arjun Mehta',   daysAgo: 85, total: 159900, status: 'completed', pay: 'UPI',           ref: 'UPI-20260115-001', install: 0 },
      { id: 'sale_002', cid: 'cust_002', cname: 'Priya Sharma',  daysAgo: 72, total: 149900, status: 'completed', pay: 'Card',          ref: 'HDFC-XXXX-4521',   install: 0 },
      { id: 'sale_003', cid: 'cust_003', cname: 'Rahul Krishnan',daysAgo: 60, total: 149990, status: 'completed', pay: 'EMI',           ref: 'BAJAJ-EMI-90234',  install: 1 },
      { id: 'sale_004', cid: 'cust_004', cname: 'Sneha Reddy',   daysAgo: 45, total: 69999,  status: 'completed', pay: 'UPI',           ref: 'UPI-20260204-003', install: 0 },
      { id: 'sale_005', cid: 'cust_005', cname: 'Vikram Patel',  daysAgo: 35, total: 134999, status: 'completed', pay: 'Bank Transfer', ref: 'NEFT-20260210-78', install: 0 },
      { id: 'sale_006', cid: 'cust_006', cname: 'Deepa Nair',    daysAgo: 25, total: 54990,  status: 'completed', pay: 'EMI',           ref: 'HDFC-EMI-55123',   install: 1 },
      { id: 'sale_007', cid: 'cust_007', cname: 'Karthik Iyer',  daysAgo: 15, total: 64890,  status: 'completed', pay: 'Cash',          ref: null,               install: 0 },
      { id: 'sale_008', cid: 'cust_001', cname: 'Arjun Mehta',   daysAgo: 10, total: 89900,  status: 'completed', pay: 'UPI',           ref: 'UPI-20260305-008', install: 0 },
      { id: 'sale_009', cid: 'cust_008', cname: 'Ananya Gupta',  daysAgo: 3,  total: 72990,  status: 'completed', pay: 'Card',          ref: 'ICICI-XXXX-7832',  install: 1 },
      { id: 'sale_010', cid: 'cust_005', cname: 'Vikram Patel',  daysAgo: 1,  total: 44999,  status: 'draft',     pay: null,            ref: null,               install: 0 },
    ];

    for (const s of sales) {
      const saleDate = new Date(now - s.daysAgo * 86400000).toISOString().split('T')[0];
      const installDate = s.install ? new Date(now - (s.daysAgo - 2) * 86400000).toISOString().split('T')[0] : null;
      await client.query(`
        INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, installation_required, installation_date, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO NOTHING
      `, [s.id, s.cid, s.cname, saleDate, s.total, s.status, s.pay, s.ref, s.install, installDate, RID]);
    }
    console.log(`[seed] ${sales.length} sales inserted.`);

    // ── 6. Sale Items ──
    const saleItems = [
      // sale_001: iPhone 15 Pro Max
      { id: 'si_001', saleId: 'sale_001', prodId: 'prod_001', prodName: 'iPhone 15 Pro Max 256GB',        cat: 'Smartphones',     qty: 1, price: 159900, final: 159900, imei: '353456789012345', serial: null },
      // sale_002: MacBook Air M3
      { id: 'si_002', saleId: 'sale_002', prodId: 'prod_004', prodName: 'MacBook Air M3 15" 16GB/512GB',  cat: 'Laptops',         qty: 1, price: 149900, final: 149900, imei: null, serial: 'C02ZM1ABCDEF' },
      // sale_003: Sony Bravia XR 55"
      { id: 'si_003', saleId: 'sale_003', prodId: 'prod_006', prodName: 'Sony Bravia XR 55" 4K OLED',     cat: 'TVs',             qty: 1, price: 149990, final: 149990, imei: null, serial: 'SNY-55XR-20260110' },
      // sale_004: OnePlus 12
      { id: 'si_004', saleId: 'sale_004', prodId: 'prod_003', prodName: 'OnePlus 12 256GB',               cat: 'Smartphones',     qty: 1, price: 69999,  final: 69999,  imei: '861234567890123', serial: null },
      // sale_005: Samsung Galaxy S24 Ultra
      { id: 'si_005', saleId: 'sale_005', prodId: 'prod_002', prodName: 'Samsung Galaxy S24 Ultra 256GB', cat: 'Smartphones',     qty: 1, price: 134999, final: 134999, imei: '356789012345678', serial: null },
      // sale_006: LG Washing Machine
      { id: 'si_006', saleId: 'sale_006', prodId: 'prod_011', prodName: 'LG 10kg Front Load Washing Machine', cat: 'Home Appliances', qty: 1, price: 54990, final: 54990, imei: null, serial: 'LG-WM-2026-A4521' },
      // sale_007: Bose QC Ultra + Sony WH-1000XM5 (2 items)
      { id: 'si_007', saleId: 'sale_007', prodId: 'prod_009', prodName: 'Bose QuietComfort Ultra Headphones', cat: 'Audio',       qty: 1, price: 34900,  final: 34900,  imei: null, serial: null },
      { id: 'si_008', saleId: 'sale_007', prodId: 'prod_010', prodName: 'Sony WH-1000XM5 Headphones',     cat: 'Audio',           qty: 1, price: 29990,  final: 29990,  imei: null, serial: null },
      // sale_008: Apple Watch Ultra 2
      { id: 'si_009', saleId: 'sale_008', prodId: 'prod_013', prodName: 'Apple Watch Ultra 2',             cat: 'Wearables',       qty: 1, price: 89900,  final: 89900,  imei: null, serial: 'AWU2-20260305-009' },
      // sale_009: Samsung 65" TV
      { id: 'si_010', saleId: 'sale_009', prodId: 'prod_007', prodName: 'Samsung 65" Crystal 4K UHD TV',   cat: 'TVs',             qty: 1, price: 72990,  final: 72990,  imei: null, serial: 'SAM-65CU-2026-B781' },
      // sale_010 (draft): Samsung Tab S9 FE
      { id: 'si_011', saleId: 'sale_010', prodId: 'prod_015', prodName: 'Samsung Galaxy Tab S9 FE 128GB',  cat: 'Tablets',         qty: 1, price: 44999,  final: 44999,  imei: null, serial: null },
    ];

    for (const si of saleItems) {
      await client.query(`
        INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, final_price, imei, serial_number, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO NOTHING
      `, [si.id, si.saleId, si.prodId, si.prodName, si.cat, si.qty, si.price, si.final, si.imei, si.serial, RID]);
    }
    console.log(`[seed] ${saleItems.length} sale items inserted.`);

    // ── 7. Schemes (10 active) ──
    const schemeStart = '2026-03-01';
    const schemeEnd = '2026-03-31';
    const schemes = [
      { id: 'scheme_001', name: 'Apple iPhone Cashback',       brand: 'Apple',   category: 'Smartphones',     discType: 'percentage', discVal: 5,    minPrice: 50000,  maxPrice: 200000, payout: 8000,  desc: '5% cashback on all iPhones' },
      { id: 'scheme_002', name: 'Samsung Galaxy Bonus',        brand: 'Samsung', category: 'Smartphones',     discType: 'flat',       discVal: 5000, minPrice: 30000,  maxPrice: 150000, payout: 5000,  desc: 'Flat Rs.5,000 off Galaxy S series' },
      { id: 'scheme_003', name: 'Sony TV Festival Offer',      brand: 'Sony',    category: 'TVs',             discType: 'percentage', discVal: 8,    minPrice: 50000,  maxPrice: 300000, payout: 12000, desc: '8% off on Sony Bravia TVs' },
      { id: 'scheme_004', name: 'LG Appliance Exchange Bonus', brand: 'LG',      category: 'Home Appliances', discType: 'flat',       discVal: 7000, minPrice: 20000,  maxPrice: 100000, payout: 7000,  desc: 'Exchange bonus on LG appliances' },
      { id: 'scheme_005', name: 'OnePlus Launch Offer',        brand: 'OnePlus', category: 'Smartphones',     discType: 'flat',       discVal: 3000, minPrice: 30000,  maxPrice: 80000,  payout: 3000,  desc: 'Launch offer on OnePlus 12' },
      { id: 'scheme_006', name: 'Apple MacBook Back-to-School',brand: 'Apple',   category: 'Laptops',         discType: 'percentage', discVal: 7,    minPrice: 80000,  maxPrice: 250000, payout: 10000, desc: '7% student discount on MacBooks' },
      { id: 'scheme_007', name: 'Samsung TV Summer Sale',      brand: 'Samsung', category: 'TVs',             discType: 'percentage', discVal: 10,   minPrice: 30000,  maxPrice: 200000, payout: 7300,  desc: '10% off Samsung Crystal TVs' },
      { id: 'scheme_008', name: 'Bose Audio Week',             brand: 'Bose',    category: 'Audio',           discType: 'flat',       discVal: 4000, minPrice: 10000,  maxPrice: 50000,  payout: 4000,  desc: 'Flat Rs.4,000 off Bose headphones' },
      { id: 'scheme_009', name: 'Apple Watch Wellness Offer',  brand: 'Apple',   category: 'Wearables',       discType: 'percentage', discVal: 6,    minPrice: 40000,  maxPrice: 100000, payout: 5400,  desc: '6% off Apple Watch Ultra' },
      { id: 'scheme_010', name: 'LG OLED TV Upgrade',          brand: 'LG',      category: 'TVs',             discType: 'flat',       discVal: 10000,minPrice: 80000,  maxPrice: 200000, payout: 10000, desc: 'Rs.10,000 off LG OLED TVs' },
    ];

    for (const s of schemes) {
      await client.query(`
        INSERT INTO schemes (id, name, brand, category, discount_type, discount_value, min_price, max_price, payout, description, start_date, end_date, status, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, 'active', NOW()::text)
        ON CONFLICT (id) DO NOTHING
      `, [s.id, s.name, s.brand, s.category, s.discType, s.discVal, s.minPrice, s.maxPrice, s.payout, s.desc, schemeStart, schemeEnd]);
    }
    console.log(`[seed] ${schemes.length} schemes inserted.`);

    // ── 8. Groups (3) + group_members ──
    const groups = [
      { id: 'group_001', name: 'TechNova Solutions Pvt Ltd', desc: 'Corporate client — bulk laptop purchases', isCompany: 1, gst: '29ABCDE1234F1Z5', contact: 'Anil Kumar' },
      { id: 'group_002', name: 'Premium Buyers',             desc: 'High-value customers (>Rs.1L purchases)',  isCompany: 0, gst: null, contact: null },
      { id: 'group_003', name: 'Bengaluru Locals',           desc: 'Customers from Bengaluru area',            isCompany: 0, gst: null, contact: null },
    ];

    for (const g of groups) {
      await client.query(`
        INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, NOW()::text, $7)
        ON CONFLICT (id) DO NOTHING
      `, [g.id, g.name, g.desc, g.isCompany, g.gst, g.contact, RID]);
    }

    const groupMembers = [
      { id: 'gm_001', groupId: 'group_001', custId: 'cust_005' },
      { id: 'gm_002', groupId: 'group_002', custId: 'cust_001' },
      { id: 'gm_003', groupId: 'group_002', custId: 'cust_005' },
      { id: 'gm_004', groupId: 'group_003', custId: 'cust_001' },
      { id: 'gm_005', groupId: 'group_003', custId: 'cust_004' },
      { id: 'gm_006', groupId: 'group_003', custId: 'cust_006' },
      { id: 'gm_007', groupId: 'group_003', custId: 'cust_007' },
    ];

    for (const gm of groupMembers) {
      await client.query(`
        INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id)
        VALUES ($1, $2, $3, NOW()::text, $4)
        ON CONFLICT (id) DO NOTHING
      `, [gm.id, gm.groupId, gm.custId, RID]);
    }
    console.log(`[seed] ${groups.length} groups + ${groupMembers.length} members inserted.`);

    // ── 9. Automations (2) + messages ──
    const automations = [
      { id: 'auto_001', name: 'Post-Purchase Follow-up', custId: 'cust_001', custName: 'Arjun Mehta',   saleId: 'sale_001', status: 'active' },
      { id: 'auto_002', name: 'Installation Follow-up',  custId: 'cust_003', custName: 'Rahul Krishnan', saleId: 'sale_003', status: 'active' },
    ];

    for (const a of automations) {
      await client.query(`
        INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, NOW()::text, $7)
        ON CONFLICT (id) DO NOTHING
      `, [a.id, a.name, a.custId, a.custName, a.saleId, a.status, RID]);
    }

    const autoMsgs = [
      { id: 'amsg_001', autoId: 'auto_001', type: 'whatsapp', title: 'Thank You',           content: 'Hi Arjun! Thank you for purchasing the iPhone 15 Pro Max from Khosha Electronics. We hope you love it!', dayOffset: 1, status: 'sent' },
      { id: 'amsg_002', autoId: 'auto_001', type: 'whatsapp', title: 'How is it going?',     content: 'Hi Arjun, it has been a week since your purchase. How are you enjoying your new iPhone? Let us know if you need any help.', dayOffset: 7, status: 'pending' },
      { id: 'amsg_003', autoId: 'auto_002', type: 'whatsapp', title: 'Installation Complete', content: 'Hi Rahul! Your Sony Bravia OLED TV has been installed. Please rate your installation experience.', dayOffset: 3, status: 'sent' },
      { id: 'amsg_004', autoId: 'auto_002', type: 'whatsapp', title: 'Product Review',       content: 'Hi Rahul, how are you enjoying your new Sony TV? We would love your feedback!', dayOffset: 14, status: 'pending' },
    ];

    for (const m of autoMsgs) {
      const schedDate = new Date(now.getTime() + m.dayOffset * 86400000).toISOString().split('T')[0];
      const sentAt = m.status === 'sent' ? new Date(now.getTime() - (30 - m.dayOffset) * 86400000).toISOString() : null;
      await client.query(`
        INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, sent_at, status, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        ON CONFLICT (id) DO NOTHING
      `, [m.id, m.autoId, m.type, m.title, m.content, m.dayOffset, schedDate, sentAt, m.status, RID]);
    }
    console.log(`[seed] ${automations.length} automations + ${autoMsgs.length} messages inserted.`);

    // ── 10. Communication Log (3 entries) ──
    const commLogs = [
      { id: 'comm_001', custId: 'cust_001', type: 'whatsapp', direction: 'outbound', content: 'Thank you for your purchase! Your iPhone 15 Pro Max is ready for pickup.',       saleId: 'sale_001', autoId: 'auto_001' },
      { id: 'comm_002', custId: 'cust_003', type: 'whatsapp', direction: 'outbound', content: 'Your Sony Bravia TV installation has been scheduled for tomorrow between 10am-1pm.', saleId: 'sale_003', autoId: null },
      { id: 'comm_003', custId: 'cust_006', type: 'sms',      direction: 'outbound', content: 'Hi Deepa, your LG washing machine installation is complete. Thank you for choosing Khosha Electronics!', saleId: 'sale_006', autoId: null },
    ];

    for (const c of commLogs) {
      const sentAt = new Date(now.getTime() - Math.floor(Math.random() * 30) * 86400000).toISOString();
      await client.query(`
        INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'sent', $9)
        ON CONFLICT (id) DO NOTHING
      `, [c.id, c.custId, c.type, c.direction, c.content, sentAt, c.autoId, c.saleId, RID]);
    }
    console.log(`[seed] ${commLogs.length} communication log entries inserted.`);

    // ── 11. Brand Targets (5 quarterly) ──
    const brandTargets = [
      { id: 'bt_001', brand: 'Apple',   amount: 1500000, units: 15, period: 'Q1-2026' },
      { id: 'bt_002', brand: 'Samsung', amount: 1200000, units: 20, period: 'Q1-2026' },
      { id: 'bt_003', brand: 'Sony',    amount: 800000,  units: 8,  period: 'Q1-2026' },
      { id: 'bt_004', brand: 'LG',      amount: 600000,  units: 10, period: 'Q1-2026' },
      { id: 'bt_005', brand: 'OnePlus', amount: 500000,  units: 12, period: 'Q1-2026' },
    ];

    for (const bt of brandTargets) {
      await client.query(`
        INSERT INTO brand_targets (id, brand, target_amount, target_units, period, start_date, end_date, incentive_slab, notes, retailer_id)
        VALUES ($1, $2, $3, $4, $5, '2026-01-01', '2026-03-31', $6, $7, $8)
        ON CONFLICT (retailer_id, brand, period) DO NOTHING
      `, [bt.id, bt.brand, bt.amount, bt.units, bt.period, `${bt.units * 2} units = 2% extra`, `Quarterly target for ${bt.brand}`, RID]);
    }
    console.log(`[seed] ${brandTargets.length} brand targets inserted.`);

    // ── 12. Expenses (5 entries) ──
    const expenses = [
      { id: 'exp_001', category: 'Rent',        desc: 'Shop rent — Koramangala 4th Block',        amount: 85000,  pay: 'Bank Transfer', date: '2026-03-01', recurring: 1 },
      { id: 'exp_002', category: 'Electricity',  desc: 'BESCOM electricity bill — February 2026',  amount: 12500,  pay: 'UPI',           date: '2026-03-05', recurring: 1 },
      { id: 'exp_003', category: 'Salary',       desc: 'Staff salaries — 3 employees',             amount: 120000, pay: 'Bank Transfer', date: '2026-03-01', recurring: 1 },
      { id: 'exp_004', category: 'Marketing',    desc: 'Google Ads + Instagram promotions',         amount: 25000,  pay: 'Card',          date: '2026-03-03', recurring: 0 },
      { id: 'exp_005', category: 'Miscellaneous', desc: 'Packaging materials + courier charges',    amount: 8500,   pay: 'Cash',          date: '2026-03-07', recurring: 0 },
    ];

    for (const e of expenses) {
      await client.query(`
        INSERT INTO expenses (id, category, description, amount, payment_mode, date, recurring, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO NOTHING
      `, [e.id, e.category, e.desc, e.amount, e.pay, e.date, e.recurring, RID]);
    }
    console.log(`[seed] ${expenses.length} expenses inserted.`);

    // ── 13. Repairs (3 entries) ──
    const repairs = [
      { id: 'repair_001', custName: 'Arjun Mehta',   phone: '9845012345', device: 'iPhone 14 Pro',           issue: 'Cracked screen — needs display replacement',  status: 'in_progress', jobSheet: 'JS-2026-001', estCost: 28000, assignedTo: 'Ravi' },
      { id: 'repair_002', custName: 'Priya Sharma',   phone: '9820034567', device: 'Samsung Galaxy Buds2 Pro', issue: 'Left earbud not charging',                   status: 'collected',   jobSheet: 'JS-2026-002', estCost: 4500,  assignedTo: 'Suresh' },
      { id: 'repair_003', custName: 'Karthik Iyer',   phone: '9845098765', device: 'MacBook Air M2',           issue: 'Keyboard key stuck — spacebar intermittent', status: 'completed',   jobSheet: 'JS-2026-003', estCost: 12000, assignedTo: 'Ravi' },
    ];

    for (const r of repairs) {
      const createdDays = r.status === 'completed' ? 20 : r.status === 'in_progress' ? 5 : 2;
      const createdAt = new Date(now - createdDays * 86400000).toISOString();
      await client.query(`
        INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO NOTHING
      `, [r.id, r.custName, r.phone, r.device, r.issue, r.status, r.jobSheet, r.estCost, r.assignedTo, createdAt, RID]);
    }
    console.log(`[seed] ${repairs.length} repairs inserted.`);

    // ── 14. Inquiries (3 entries) ──
    const inquiries = [
      { id: 'inq_001', custName: 'Vikram Patel',  prodName: 'iPhone 16 Pro',          request: 'When will iPhone 16 Pro be available? Interested in 256GB Natural Titanium.', status: 'PENDING' },
      { id: 'inq_002', custName: 'Deepa Nair',    prodName: 'Sony WF-1000XM5',        request: 'Looking for Sony XM5 earbuds in stock. Can you confirm availability?',        status: 'RESPONDED' },
      { id: 'inq_003', custName: 'Ananya Gupta',   prodName: 'LG 77" OLED G3',         request: 'Want price quote for LG 77 inch OLED with wall mount installation.',          status: 'CLOSED' },
    ];

    for (const inq of inquiries) {
      const createdAt = new Date(now - Math.floor(Math.random() * 15 + 1) * 86400000).toISOString();
      await client.query(`
        INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO NOTHING
      `, [inq.id, inq.custName, inq.prodName, inq.request, inq.status, createdAt, RID]);
    }
    console.log(`[seed] ${inquiries.length} inquiries inserted.`);

    // ── 15. Activity Logs (10 entries) ──
    const activities = [
      { action: 'sale_created',     detail: 'New sale #sale_001 — iPhone 15 Pro Max to Arjun Mehta (Rs.1,59,900)',     icon: 'shopping-cart', color: 'green' },
      { action: 'customer_added',   detail: 'New customer registered: Priya Sharma (Mumbai)',                           icon: 'user-plus',     color: 'blue' },
      { action: 'sale_created',     detail: 'New sale #sale_003 — Sony Bravia 55" OLED to Rahul Krishnan (Rs.1,49,990)', icon: 'shopping-cart', color: 'green' },
      { action: 'product_updated',  detail: 'Stock updated: OnePlus 12 — 15 units added',                              icon: 'package',       color: 'orange' },
      { action: 'scheme_created',   detail: 'New scheme: Apple iPhone Cashback (5% off, valid Mar 2026)',               icon: 'tag',           color: 'purple' },
      { action: 'repair_created',   detail: 'Repair job JS-2026-001 created for iPhone 14 Pro (cracked screen)',        icon: 'tool',          color: 'red' },
      { action: 'sale_created',     detail: 'New sale #sale_005 — Samsung S24 Ultra to Vikram Patel (Rs.1,34,999)',     icon: 'shopping-cart', color: 'green' },
      { action: 'expense_added',    detail: 'Expense recorded: Shop rent Rs.85,000 — March 2026',                      icon: 'credit-card',   color: 'gray' },
      { action: 'inquiry_received', detail: 'New inquiry from Vikram Patel about iPhone 16 Pro',                        icon: 'message-circle',color: 'blue' },
      { action: 'sale_created',     detail: 'New sale #sale_009 — Samsung 65" TV to Ananya Gupta (Rs.72,990)',          icon: 'shopping-cart', color: 'green' },
    ];

    for (let i = 0; i < activities.length; i++) {
      const a = activities[i];
      const id = `act_${String(i + 1).padStart(3, '0')}`;
      const createdAt = new Date(now - (90 - i * 9) * 86400000).toISOString();
      await client.query(`
        INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at)
        VALUES ($1, $2, $3, $4, 'Nischal', $5, $6, $7)
        ON CONFLICT (id) DO NOTHING
      `, [id, RID, a.action, a.detail, a.icon, a.color, createdAt]);
    }
    console.log(`[seed] ${activities.length} activity logs inserted.`);

    // ── 16. Print table counts ──
    console.log('\n--- Table Counts ---');
    const tables = [
      'retailers', 'approved_retailers', 'products', 'customers', 'sales', 'sale_items',
      'schemes', 'groups', 'group_members', 'automations', 'automation_messages',
      'communication_log', 'brand_targets', 'expenses', 'repairs', 'inquiries', 'activity_logs'
    ];

    for (const t of tables) {
      const res = await client.query(`SELECT COUNT(*) as count FROM ${t}`);
      console.log(`  ${t.padEnd(25)} ${res.rows[0].count}`);
    }

    console.log('\n[seed] Production seed complete!');

  } catch (err) {
    console.error('[seed] ERROR:', err.message);
    console.error(err.stack);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
