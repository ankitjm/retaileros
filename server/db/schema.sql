-- RetailerOS PostgreSQL Schema
-- Compatible with PostgreSQL 16+

CREATE TABLE IF NOT EXISTS customers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    joined_at TEXT,
    dob TEXT,
    location TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_customers_retailer ON customers(retailer_id);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone);

CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    brand TEXT,
    category TEXT,
    price REAL,
    mop REAL,
    in_stock INTEGER,
    sku TEXT,
    installation_required INTEGER DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_sku ON products(sku);

CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    gst_number TEXT,
    customer_id TEXT,
    created_at TEXT,
    retailer_id TEXT,
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
CREATE INDEX IF NOT EXISTS idx_companies_retailer ON companies(retailer_id);

CREATE TABLE IF NOT EXISTS sales (
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
);
CREATE INDEX IF NOT EXISTS idx_sales_retailer ON sales(retailer_id);
CREATE INDEX IF NOT EXISTS idx_sales_date ON sales(retailer_id, date);
CREATE INDEX IF NOT EXISTS idx_sales_customer ON sales(customer_id);
CREATE INDEX IF NOT EXISTS idx_sales_status ON sales(status);

CREATE TABLE IF NOT EXISTS sale_items (
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
    retailer_id TEXT,
    FOREIGN KEY(sale_id) REFERENCES sales(id)
);
CREATE INDEX IF NOT EXISTS idx_sale_items_sale ON sale_items(sale_id);
CREATE INDEX IF NOT EXISTS idx_sale_items_product ON sale_items(product_id);
CREATE INDEX IF NOT EXISTS idx_sale_items_retailer ON sale_items(retailer_id);

CREATE TABLE IF NOT EXISTS schemes (
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
);

CREATE TABLE IF NOT EXISTS groups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    is_company INTEGER DEFAULT 0,
    gst_number TEXT,
    contact_person TEXT,
    created_at TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_groups_retailer ON groups(retailer_id);

CREATE TABLE IF NOT EXISTS group_members (
    id TEXT PRIMARY KEY,
    group_id TEXT,
    customer_id TEXT,
    added_at TEXT,
    retailer_id TEXT,
    FOREIGN KEY(group_id) REFERENCES groups(id),
    FOREIGN KEY(customer_id) REFERENCES customers(id)
);
CREATE INDEX IF NOT EXISTS idx_group_members_retailer ON group_members(retailer_id);

CREATE TABLE IF NOT EXISTS automations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    customer_id TEXT,
    customer_name TEXT,
    sale_id TEXT,
    status TEXT DEFAULT 'active',
    created_at TEXT,
    completed_at TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_automations_retailer ON automations(retailer_id);

CREATE TABLE IF NOT EXISTS automation_messages (
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
);
CREATE INDEX IF NOT EXISTS idx_automation_messages_retailer ON automation_messages(retailer_id);

CREATE TABLE IF NOT EXISTS communication_log (
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
);
CREATE INDEX IF NOT EXISTS idx_communication_log_retailer ON communication_log(retailer_id);

CREATE TABLE IF NOT EXISTS inquiries (
    id TEXT PRIMARY KEY,
    customer_name TEXT,
    product_name TEXT,
    request TEXT,
    status TEXT DEFAULT 'PENDING',
    created_at TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_inquiries_retailer ON inquiries(retailer_id);

CREATE TABLE IF NOT EXISTS repairs (
    id TEXT PRIMARY KEY,
    customer_name TEXT,
    phone TEXT,
    device TEXT,
    issue TEXT,
    status TEXT DEFAULT 'collected',
    job_sheet_no TEXT,
    estimated_cost REAL DEFAULT 0,
    assigned_to TEXT,
    created_at TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_repairs_retailer ON repairs(retailer_id);
CREATE INDEX IF NOT EXISTS idx_repairs_status ON repairs(status);

CREATE TABLE IF NOT EXISTS inventory_logs (
    id TEXT PRIMARY KEY,
    product_id TEXT,
    type TEXT,
    quantity INTEGER,
    reason TEXT,
    date TEXT,
    retailer_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_inventory_logs_retailer ON inventory_logs(retailer_id);
CREATE INDEX IF NOT EXISTS idx_inventory_logs_product ON inventory_logs(product_id);

CREATE TABLE IF NOT EXISTS retailer_settings (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    category TEXT NOT NULL,
    settings TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(retailer_id, category)
);
CREATE INDEX IF NOT EXISTS idx_retailer_settings_rid ON retailer_settings(retailer_id);

CREATE TABLE IF NOT EXISTS team_members (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    phone TEXT,
    email TEXT,
    status TEXT DEFAULT 'invited',
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_team_members_rid ON team_members(retailer_id);

CREATE TABLE IF NOT EXISTS team_roles (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    name TEXT NOT NULL,
    permissions TEXT NOT NULL,
    description TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    UNIQUE(retailer_id, name)
);
CREATE INDEX IF NOT EXISTS idx_team_roles_rid ON team_roles(retailer_id);

CREATE TABLE IF NOT EXISTS retailer_plugins (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    plugin_key TEXT NOT NULL,
    status TEXT DEFAULT 'available',
    config TEXT,
    connected_at TEXT,
    updated_at TEXT NOT NULL,
    UNIQUE(retailer_id, plugin_key)
);
CREATE INDEX IF NOT EXISTS idx_retailer_plugins_rid ON retailer_plugins(retailer_id);

CREATE TABLE IF NOT EXISTS activity_logs (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    action TEXT NOT NULL,
    detail TEXT,
    user_name TEXT,
    icon TEXT,
    color TEXT,
    created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_activity_logs_rid ON activity_logs(retailer_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(retailer_id, created_at);

CREATE TABLE IF NOT EXISTS retailers (
    id TEXT PRIMARY KEY,
    retailer_code TEXT UNIQUE NOT NULL,
    retailer_name TEXT,
    contact_person TEXT,
    email TEXT,
    mobile_number TEXT UNIQUE NOT NULL,
    phone_number TEXT,
    address_line_1 TEXT,
    address_line_2 TEXT,
    country_name TEXT,
    state_name TEXT,
    city_name TEXT,
    district_name TEXT,
    area_name TEXT,
    pin_code TEXT,
    vat_number TEXT,
    pan_number TEXT,
    bank_name TEXT,
    bank_account_holder TEXT,
    bank_account_number TEXT,
    bank_branch TEXT,
    bank_ifsc TEXT,
    parent_retailer_name TEXT,
    nd_name TEXT,
    rds_name TEXT,
    salesman_name TEXT,
    reporting_to_name TEXT,
    csa_on_counter TEXT,
    counter_potential_volume TEXT,
    counter_potential_value TEXT,
    retailer_category TEXT,
    retailer_category1 TEXT,
    retailer_classification TEXT,
    dob TEXT,
    creation_date TEXT,
    onboarded_at TEXT DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'active',
    approval_remarks TEXT,
    registration_completed INTEGER DEFAULT 1,
    otp_verified INTEGER DEFAULT 1,
    external_db_id INTEGER,
    external_approval_status TEXT,
    external_process_status TEXT
);
CREATE INDEX IF NOT EXISTS idx_retailers_mobile ON retailers(mobile_number);
CREATE INDEX IF NOT EXISTS idx_retailers_code ON retailers(retailer_code);

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
);
CREATE INDEX IF NOT EXISTS idx_store_listings_retailer ON store_listings(retailer_id);

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
);
CREATE INDEX IF NOT EXISTS idx_store_orders_retailer ON store_orders(retailer_id);

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
);
CREATE INDEX IF NOT EXISTS idx_store_order_items_order ON store_order_items(order_id);

-- OTP sessions for WhatsApp authentication
CREATE TABLE IF NOT EXISTS otp_sessions (
    mobile TEXT PRIMARY KEY,
    otp TEXT NOT NULL,
    expires TEXT NOT NULL,
    attempts INTEGER DEFAULT 0
);

-- Approved retailers whitelist (who can register)
CREATE TABLE IF NOT EXISTS approved_retailers (
    id SERIAL PRIMARY KEY,
    mobile_number TEXT UNIQUE NOT NULL,
    retailer_name TEXT,
    contact_person TEXT,
    email TEXT,
    address TEXT,
    state_name TEXT,
    city_name TEXT,
    approval_status TEXT DEFAULT 'Approved',
    process_status TEXT DEFAULT 'approved',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_approved_retailers_mobile ON approved_retailers(mobile_number);

-- Prebookings
CREATE TABLE IF NOT EXISTS prebookings (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    phone TEXT,
    product_name TEXT NOT NULL,
    brand TEXT,
    expected_price REAL,
    advance_amount REAL DEFAULT 0,
    status TEXT DEFAULT 'pending',
    notes TEXT,
    created_at TEXT NOT NULL,
    retailer_id TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_prebookings_retailer ON prebookings(retailer_id);

-- Pre-booking campaigns
CREATE TABLE IF NOT EXISTS campaigns (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    product TEXT NOT NULL,
    deposit_amount REAL DEFAULT 0,
    start_date TEXT NOT NULL,
    end_date TEXT,
    status TEXT DEFAULT 'active',
    description TEXT,
    hero_image TEXT,
    slug TEXT,
    created_at TEXT NOT NULL,
    retailer_id TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_campaigns_retailer ON campaigns(retailer_id);

-- Marketplace listings (retailer-to-retailer trading)
CREATE TABLE IF NOT EXISTS marketplace_listings (
    id TEXT PRIMARY KEY,
    product_name TEXT NOT NULL,
    brand TEXT,
    category TEXT,
    price REAL NOT NULL,
    quantity INTEGER DEFAULT 1,
    condition TEXT DEFAULT 'new',
    description TEXT,
    seller_name TEXT,
    seller_phone TEXT,
    status TEXT DEFAULT 'active',
    created_at TEXT NOT NULL,
    retailer_id TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_marketplace_retailer ON marketplace_listings(retailer_id);

-- Expenses (rent, salary, electricity, misc)
CREATE TABLE IF NOT EXISTS expenses (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    description TEXT,
    amount REAL NOT NULL,
    payment_mode TEXT,
    date TEXT NOT NULL,
    receipt_ref TEXT,
    recurring INTEGER DEFAULT 0,
    created_at TEXT DEFAULT NOW(),
    retailer_id TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_expenses_retailer ON expenses(retailer_id);
CREATE INDEX IF NOT EXISTS idx_expenses_date ON expenses(retailer_id, date);

-- Brand targets (monthly/quarterly sales targets per brand)
CREATE TABLE IF NOT EXISTS brand_targets (
    id TEXT PRIMARY KEY,
    brand TEXT NOT NULL,
    target_amount REAL NOT NULL,
    target_units INTEGER DEFAULT 0,
    period TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    incentive_slab TEXT,
    notes TEXT,
    created_at TEXT DEFAULT NOW(),
    retailer_id TEXT NOT NULL,
    UNIQUE(retailer_id, brand, period)
);
CREATE INDEX IF NOT EXISTS idx_brand_targets_retailer ON brand_targets(retailer_id);

-- News cache (global — no retailer_id, fetched daily at 8am IST)
CREATE TABLE IF NOT EXISTS news_cache (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    link TEXT,
    source_name TEXT,
    pub_date TEXT,
    category TEXT DEFAULT 'general',
    image_url TEXT,
    fetched_at TEXT DEFAULT (NOW()::text)
);
ALTER TABLE news_cache ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Bulk billing columns on sales
ALTER TABLE sales ADD COLUMN IF NOT EXISTS billing_type TEXT DEFAULT 'retail';
ALTER TABLE sales ADD COLUMN IF NOT EXISTS po_number TEXT;
ALTER TABLE sales ADD COLUMN IF NOT EXISTS credit_terms TEXT DEFAULT 'immediate';
ALTER TABLE sales ADD COLUMN IF NOT EXISTS credit_due_date TEXT;
ALTER TABLE sales ADD COLUMN IF NOT EXISTS amount_paid REAL DEFAULT 0;
ALTER TABLE sales ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'paid';

-- Company extended columns
ALTER TABLE companies ADD COLUMN IF NOT EXISTS address TEXT;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS default_credit_terms TEXT DEFAULT 'immediate';
ALTER TABLE companies ADD COLUMN IF NOT EXISTS credit_limit REAL DEFAULT 0;

-- IMEI / Serial number indexes (partial — only index non-null rows)
CREATE INDEX IF NOT EXISTS idx_sale_items_imei ON sale_items(imei) WHERE imei IS NOT NULL AND imei != '';
CREATE INDEX IF NOT EXISTS idx_sale_items_serial ON sale_items(serial_number) WHERE serial_number IS NOT NULL AND serial_number != '';
CREATE INDEX IF NOT EXISTS idx_sale_items_product_imei ON sale_items(product_id, imei);

-- API Keys: retailer-issued keys for external integrations
-- key_hash is SHA-256 of the raw key — raw key shown once on creation, never stored
CREATE TABLE IF NOT EXISTS api_keys (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    name TEXT NOT NULL,
    key_hash TEXT NOT NULL UNIQUE,
    key_prefix TEXT NOT NULL,           -- e.g. ros_live_a1b2c3d4 (shown in UI)
    scopes TEXT NOT NULL DEFAULT '[]',  -- JSON array: ["sales:read","customers:read",...]
    rate_limit INTEGER DEFAULT 1000,    -- Max requests per day
    requests_today INTEGER DEFAULT 0,
    requests_reset_at TEXT,             -- ISO timestamp when today's counter resets
    last_used_at TEXT,
    is_active INTEGER DEFAULT 1,        -- 0 = revoked
    created_at TEXT NOT NULL,
    expires_at TEXT                     -- NULL = never expires
);
CREATE INDEX IF NOT EXISTS idx_api_keys_retailer ON api_keys(retailer_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_api_keys_hash ON api_keys(key_hash);
CREATE INDEX IF NOT EXISTS idx_api_keys_active ON api_keys(retailer_id, is_active);

-- Repairs extended columns
ALTER TABLE repairs ADD COLUMN IF NOT EXISTS imei TEXT;
ALTER TABLE repairs ADD COLUMN IF NOT EXISTS brand TEXT;
ALTER TABLE repairs ADD COLUMN IF NOT EXISTS actual_cost REAL DEFAULT 0;
ALTER TABLE repairs ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE repairs ADD COLUMN IF NOT EXISTS updated_at TEXT;

-- Registration requests (self-service interest queue — admin reviews & approves)
CREATE TABLE IF NOT EXISTS registration_requests (
    id SERIAL PRIMARY KEY,
    mobile_number TEXT UNIQUE NOT NULL,
    retailer_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    email TEXT,
    city_name TEXT,
    state_name TEXT,
    business_type TEXT,
    status TEXT DEFAULT 'pending',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TEXT,
    reviewed_by TEXT
);
CREATE INDEX IF NOT EXISTS idx_registration_requests_mobile ON registration_requests(mobile_number);
CREATE INDEX IF NOT EXISTS idx_registration_requests_status ON registration_requests(status);

-- Retailer subscriptions — Razorpay/Stripe payment records and billing periods
CREATE TABLE IF NOT EXISTS retailer_subscriptions (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    plan_id TEXT NOT NULL,                   -- 'quarterly' | 'yearly'
    status TEXT DEFAULT 'pending',           -- pending | active | expired | cancelled
    payment_provider TEXT,                   -- 'razorpay' | 'stripe'
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    razorpay_signature TEXT,
    stripe_session_id TEXT,
    stripe_payment_intent TEXT,
    amount_base REAL,                        -- base amount before GST (INR)
    gst_amount REAL,                         -- GST 18%
    amount_total REAL,                       -- total amount paid
    currency TEXT DEFAULT 'INR',
    invoice_number TEXT,
    billing_start TEXT,
    billing_end TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_retailer ON retailer_subscriptions(retailer_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON retailer_subscriptions(retailer_id, status);

-- Extend retailers table with subscription tracking columns
ALTER TABLE retailers ADD COLUMN IF NOT EXISTS gst_number TEXT;
ALTER TABLE retailers ADD COLUMN IF NOT EXISTS address TEXT;
