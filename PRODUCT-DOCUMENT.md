# RetailerOS — Product Document & SOPs

> **Version:** 1.0 | **Date:** 25 Feb 2026 | **Live:** https://khosha.cloud/ros/

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Architecture](#2-architecture)
3. [Getting Started](#3-getting-started)
4. [Database Schema](#4-database-schema)
5. [API Reference](#5-api-reference)
6. [Module SOPs](#6-module-sops)
   - 6.1 [Launcher (Home)](#61-launcher-home)
   - 6.2 [Sales Desk](#62-sales-desk)
   - 6.3 [Clients (CRM)](#63-clients-crm)
   - 6.4 [Inventory](#64-inventory)
   - 6.5 [Schemes](#65-schemes)
   - 6.6 [Claims](#66-claims)
   - 6.7 [Reports](#67-reports)
   - 6.8 [Expenses](#68-expenses)
   - 6.9 [Repairs](#69-repairs)
   - 6.10 [Inquiries](#610-inquiries)
   - 6.11 [Pre-Booking](#611-pre-booking)
   - 6.12 [Automation](#612-automation)
   - 6.13 [Marketing](#613-marketing)
   - 6.14 [Marketplace](#614-marketplace)
   - 6.15 [My Store](#615-my-store)
   - 6.16 [Promoters](#616-promoters)
   - 6.17 [Notifications (Activity Log)](#617-notifications-activity-log)
   - 6.18 [Settings](#618-settings)
7. [Authentication & Security](#7-authentication--security)
8. [Data Sync & Caching](#8-data-sync--caching)
9. [Integrations](#9-integrations)
10. [Deployment & Operations](#10-deployment--operations)
11. [Seed Data / Demo](#11-seed-data--demo)
12. [State Management](#12-state-management)
13. [Adding a New Module](#13-adding-a-new-module)

---

## 1. Product Overview

**RetailerOS** is a multi-brand consumer electronics retail management SaaS built for Indian retailers running 1–3 store operations. It covers the entire retail workflow — billing, inventory, CRM, schemes, repairs, marketplace, and more.

### Target User
- Multi-brand electronics retailer (phones, laptops, TVs, accessories)
- 500–2,000 SKUs across 8–15 brands
- 20–50 walk-ins/day, ₹8K–₹25K average ticket
- Indian market: GST, UPI, WhatsApp-first, festival-driven

### Core Value Proposition
| # | Problem | How RetailerOS Solves It |
|---|---------|--------------------------|
| 1 | Scheme tracking & claims | Auto-applies schemes at billing, tracks claims per sale item |
| 2 | Dead stock & slow movers | Stock aging alerts (60d/90d), capital locked reports |
| 3 | Credit management | Customer ledger, company (B2B) accounts |
| 4 | Staff performance | Promoter metrics, team roles, activity logs |
| 5 | Customer follow-up | Automation sequences, birthday reminders, WhatsApp |
| 6 | Warranty & service | Full repair lifecycle: intake → dispatch |
| 7 | Daily reconciliation | Cash register widget, expense tracking, P&L |

### Modules (18 total)
Sales Desk, Clients, Inventory, Schemes, Claims, Reports, Expenses, Repairs, Inquiries, Pre-Booking, Automation, Marketing, Marketplace, My Store, Promoters, Notifications, Settings, Launcher

---

## 2. Architecture

```
┌─────────────────────────────────────────────────┐
│                   BROWSER (SPA)                  │
│  Vite + Vanilla JS + Tailwind CSS               │
│  Mobile-first, responsive 3-col desktop layout  │
└───────────────────┬─────────────────────────────┘
                    │ fetch /ros/api/*
┌───────────────────▼─────────────────────────────┐
│              EXPRESS.JS SERVER                    │
│  Port 3003, PM2 cluster mode                     │
│  JWT auth middleware, rate limiting              │
│  Dual mount: /api/* + /ros/api/*                │
└───────────────────┬─────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────┐
│            SQLite (better-sqlite3)               │
│  Single file: server/retaileros.db               │
│  WAL mode, multi-tenant via retailer_id          │
│  33 tables                                       │
└─────────────────────────────────────────────────┘
```

### Key Paths

| What | Path |
|------|------|
| Frontend source | `src/js/` |
| Server entry | `server/index.js` |
| DB schema | `server/db/schema.sql` |
| Seed data | `server/db/seed.js` |
| DB helpers (client) | `src/js/utils/db.js` |
| Data sync | `src/js/utils/sync.js` |
| App router | `src/js/app.js` |
| State machine | `src/js/state.js` |
| Module code | `src/js/modules/<module-name>/` |
| Build output | `dist/` |
| Vite config | `vite.config.js` |

### Responsive Layout
- **Mobile (<768px):** Full-screen single column, slide-in views
- **Tablet (768–1024px):** Similar to mobile with wider cards
- **Desktop (>1024px):** 3-column layout — Sidebar (launcher nav) | Primary (main content) | Secondary (detail/preview)

### Design System
- **Theme:** Minimal black/white/slate — no colors except functional (green=success, red=error, amber=warning)
- **Typography:** System font stack, `font-black` for headings, `text-[8px]` to `text-4xl` scale
- **Icons:** Material Icons Outlined + Material Symbols Outlined
- **Cards:** `card` class (white bg, rounded-2xl, shadow-sm), hover states
- **Currency:** ₹ symbol, Indian number system (lakhs/crores)

---

## 3. Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Local Development

```bash
cd RetailerOS/product-demo

# Install dependencies
npm install

# Seed the database (creates server/retaileros.db)
cd server && node db/seed.js && cd ..

# Start dev server (frontend: 5173, API proxy → 3003)
npx vite &
cd server && node index.js
```

### Demo Login
| Field | Value |
|-------|-------|
| Store Code | `ROS-20260225-0001` |
| Mobile (OTP) | `9876543210` |
| Retailer ID | `ret_demo_khosha_001` |

### Production Build & Deploy

```bash
cd product-demo
npx vite build          # Builds to dist/
pm2 restart retaileros  # Restarts server (serves dist/ + API)
```

---

## 4. Database Schema

### 33 Tables — Multi-tenant via `retailer_id`

#### Core Business

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `retailers` | Master retailer records | id, retailer_code, retailer_name, mobile_number, gst, address, bank details | N/A (is tenant) |
| `customers` | Customer directory | id, name, phone, email, dob, location, joined_at | Yes |
| `companies` | B2B company accounts | id, name, gst_number, customer_id | Yes |
| `products` | Product catalog (shared) | id, name, brand, category, price (MRP), mop (dealer price), in_stock, sku | No (global) |
| `sales` | Sale transactions | id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required | Yes |
| `sale_items` | Line items per sale | id, sale_id, product_id, product_name, category, quantity, price, discount_type/value/amount, scheme_id, final_price, imei, serial_number | FK: sales |

#### Inventory & Supply

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `schemes` | Brand schemes/offers | id, name, brand, category, discount_type, discount_value, payout, start_date, end_date, status | No (global) |
| `inventory_logs` | Stock movements | id, product_id, type (inward/outward), quantity, reason, date | Yes |
| `brand_targets` | Quarterly brand targets | id, brand, target_amount, target_units, period, start_date, end_date, incentive_slab | Yes |
| `expenses` | Store operating expenses | id, category, description, amount, payment_mode, date, recurring | Yes |

#### CRM & Communication

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `groups` | Customer groups | id, name, description, is_company, gst_number | Yes |
| `group_members` | Group membership | id, group_id, customer_id | Yes |
| `inquiries` | Walk-in inquiries | id, customer_name, product_name, request, status (PENDING/RESOLVED) | Yes |
| `automations` | Follow-up automations | id, name, customer_id, sale_id, status | Yes |
| `automation_messages` | Scheduled messages | id, automation_id, message_type, content, day_offset, scheduled_date, status | Yes |
| `communication_log` | All outbound messages | id, customer_id, type, direction, content, sent_at, automation_id, sale_id | Yes |

#### Service

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `repairs` | Repair job tracking | id, customer_name, phone, device, issue, status (collected/IN_REPAIR/READY/DISPATCHED), job_sheet_no, estimated_cost, assigned_to | Yes |
| `prebookings` | Product pre-orders | id, customer_name, phone, product_name, brand, advance_amount, status (pending/confirmed) | Yes |
| `campaigns` | Pre-booking campaigns | id, title, product, deposit_amount, start_date, end_date, status, hero_image, slug | Yes |

#### Store & Marketplace

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `store_listings` | Online store products | id, product_id, listing_price, status (draft/active), stock_qty | Yes |
| `store_orders` | Online orders | id, order_number, customer details, shipping address, order_status, payment_status, tracking | Yes |
| `store_order_items` | Order line items | id, order_id, listing_id, product_id, quantity, unit_price, final_price | FK: store_orders |
| `marketplace_listings` | B2B marketplace | id, product_name, brand, price, quantity, condition (new/open_box), seller details | Global |

#### Team & Config

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `team_members` | Staff directory | id, name, role, phone, status (invited/active) | Yes |
| `team_roles` | Role definitions | id, name, permissions (JSON), description | Yes |
| `retailer_settings` | Per-retailer config | id, category, settings (JSON) | Yes |
| `retailer_plugins` | Plugin connections | id, plugin_key, status, config | Yes |
| `activity_logs` | Audit trail | id, action, detail, user_name, icon | Yes |

#### Auth

| Table | Purpose | Key Columns | Tenant |
|-------|---------|-------------|--------|
| `approved_retailers` | Registration whitelist | mobile_number, retailer_name, approval_status | N/A |
| `otp_sessions` | Temporary OTP store | mobile (PK), otp, expires, attempts | N/A |

---

## 5. API Reference

**Base URL:** `https://khosha.cloud/ros/api` (production) or `http://localhost:3003/api` (dev)

All authenticated endpoints require: `Authorization: Bearer <JWT>`

### Authentication

| Method | Endpoint | Body | Response | Notes |
|--------|----------|------|----------|-------|
| POST | `/auth/otp` | `{ mobile }` | `{ ok, message }` | Rate-limited. Sends OTP via WATI WhatsApp |
| POST | `/auth/verify` | `{ mobile, otp }` | `{ ok, token, retailerId, retailerCode, retailerName }` | Returns JWT (30d expiry). Max 5 attempts |
| POST | `/auth/login` | `{ storeCode }` | `{ ok, token, retailerId, retailerCode, retailerName }` | Alternative login via store code |

### Generic Database (Authenticated)

| Method | Endpoint | Body | Response | Notes |
|--------|----------|------|----------|-------|
| POST | `/query` | `{ sql, params }` | `{ ok, data: [...rows] }` | Read-only. Tenant-isolated. Blocks writes |
| POST | `/mutate` | `{ sql, params }` | `{ ok, changes }` | Single write. Tenant-isolated. Blocks DDL |
| POST | `/batch` | `{ statements: [{sql, params}] }` | `{ ok, results }` | Transactional batch writes |

**Tenant Isolation:** The server automatically injects `retailer_id` into WHERE clauses for all tables in the `TENANT_TABLES` set: customers, sales, sale_items (via join), companies, groups, group_members, automations, automation_messages, communication_log, inquiries, repairs, inventory_logs, retailer_settings, team_members, team_roles, retailer_plugins, activity_logs, store_listings, store_orders, store_order_items, prebookings, campaigns, expenses, brand_targets.

**Blocked tables (read):** `otp_sessions`, `approved_retailers`

### Integrations

| Method | Endpoint | Body | Response | Notes |
|--------|----------|------|----------|-------|
| POST | `/whatsapp/send` | `{ phone, message }` | `{ ok }` | WATI session message |
| POST | `/whatsapp/template` | `{ phone, templateName, parameters }` | `{ ok }` | WATI template message |
| POST | `/whatsapp/own/connect` | — | `{ ok }` | Start QR for own WhatsApp |
| GET | `/whatsapp/own/qr` | — | `{ status, qr? }` | Poll QR code |
| GET | `/whatsapp/own/status` | — | `{ status }` | Connection status |
| POST | `/whatsapp/own/send` | `{ phone, message }` | `{ ok }` | Send via own WhatsApp |
| DELETE | `/whatsapp/own/session` | — | `{ ok }` | Disconnect |
| POST | `/openai/generate` | `{ prompt, size?, quality? }` | `{ ok, url }` | DALL-E 3 image generation |
| POST | `/openai/vision` | `{ prompt, imageUrl? }` | `{ ok, text }` | GPT-4o image analysis |
| GET | `/health` | — | `{ ok, ts }` | Health check |

---

## 6. Module SOPs

Each SOP covers: **What it does → How it works → User workflow → Key files → Data flow → Edge cases**

---

### 6.1 Launcher (Home)

**Purpose:** Home screen showing all app tiles, daily cash register summary, and news ticker.

**Files:**
- `src/js/modules/launcher/launcher.js` — Main render, cash register widget, live clock
- `src/js/modules/launcher/apps-grid.js` — App tile grid (17 tiles)
- `src/js/modules/launcher/footer.js` — Bottom nav footer

**SOP — Daily Start:**
1. Open RetailerOS → Launcher loads automatically
2. See **retailer name** and **live clock** (updates every 30 seconds) in header
3. View **Today's Register** card: Revenue, Bill count, Net (revenue – expenses), payment mode breakdown
4. Tap any app tile to navigate to that module
5. ALERTS tile shows **red dot** if there are unread activity logs in the last 24 hours

**App Tiles (17):**
ALERTS, SALES DESK, CLIENTS, INQUIRIES, PROMOTERS, MY STORE, INVENTORY, REPAIRS, MARKETPLACE, CLAIMS, SCHEMES, MARKETING, AUTOMATION, PRE-BOOKING, EXPENSES, REPORTS, SETTINGS

**Cash Register Widget Data Flow:**
```
window.getCache() → sales (today, non-draft) → sum total_amount = Revenue
                  → expenses (today) → sum amount = Total Expense
                  → Revenue - Expense = Net
                  → Group sales by payment_mode → mode breakdown chips
```

**Desktop Layout:**
- Launcher renders in the left sidebar column
- When logged in: shows apps grid + cash register + news ticker
- When logged out: shows branding placeholder (desktop) or auth form (mobile)

---

### 6.2 Sales Desk

**Purpose:** Create sales transactions (billing), manage sale history, draft/complete flow.

**Files:**
- `src/js/modules/sales/new-transaction.js` — Cart builder, product search, scheme auto-apply, payment, GST
- `src/js/modules/sales/history.js` — Sale history list with filters
- `src/js/modules/sales/preview.js` — Receipt preview (thermal-style)
- `src/js/modules/sales/header.js` — Tab switcher (New Sale / History)

**SOP — Create a New Sale:**
1. Navigate to **SALES DESK** → New Sale tab
2. **Search product** by name — type 2+ characters, matching products appear
3. Tap product to add to cart → quantity defaults to 1
4. **Adjust quantity/discount** per item if needed
5. **Select customer** from directory or add new inline
6. **Scheme auto-apply:** If a scheme matches (brand + category + price range + active dates), it appears as a suggestion. Tap to apply discount
7. **IMEI/Serial:** For phones/electronics, enter IMEI, serial number, MAC ID, manufacturing date
8. **Installation:** For TVs/appliances, toggle "Installation Required" and set date
9. **Payment mode:** Select Cash / UPI / Card / EMI / Credit / Bank Transfer. Enter reference for digital payments
10. **GST Invoice:** Toggle if customer needs GST invoice → select Company account
11. **Save as Draft** or **Complete Sale**
12. On completion: stock decremented, receipt generated, activity logged

**SOP — View Sale History:**
1. Go to **History** tab
2. Filter by: **Completed** / **Drafts** toggle
3. Date filters: All / Today / This Week / This Month / Custom Range
4. Tap a sale to view receipt preview
5. Desktop: receipt appears in right panel. Mobile: bottom sheet

**SOP — Export/Share Receipt:**
- From receipt preview, options to share or print

**Data Flow:**
```
Cart items → sale_items rows (with product_id, price, discount, scheme_id, final_price, IMEI)
Customer → sales.customer_id, sales.customer_name
Payment → sales.payment_mode, sales.payment_reference
GST → sales.gst_required, sales.company_id
Status → 'draft' or 'completed'
Stock → products.in_stock decremented on completion
Log → activity_logs entry
```

**Edge Cases:**
- Draft sales: saved but stock NOT decremented until completed
- Scheme expiry: scheme must be `status='active'` and within date range
- Part payment: tracked via payment_reference field
- Company sale: links to companies table for GST details
- Multi-item sale: each item is a separate sale_items row

---

### 6.3 Clients (CRM)

**Purpose:** Customer directory, profiles, purchase history, groups (VIP, brand fans), B2B companies.

**Files:**
- `src/js/modules/clients/clients.js` — Main view switcher
- `src/js/modules/clients/list.js` — Customer list with search
- `src/js/modules/clients/profile.js` — Individual customer profile (purchases, total spend, contact)
- `src/js/modules/clients/add-client.js` — Add new customer form
- `src/js/modules/clients/groups.js` — Group management (create, view, add/remove members)
- `src/js/modules/clients/invoice.js` — Invoice view for specific sale
- `src/js/modules/clients/header.js` — Navigation header

**SOP — Add a New Customer:**
1. Go to **CLIENTS** → tap **+** (Add)
2. Enter: Name (required), Phone (required, 10-digit), Email, DOB, Location
3. Save → customer appears in directory
4. Activity logged

**SOP — View Customer Profile:**
1. Search or browse → tap customer name
2. Profile shows: contact info, date joined, total purchases, total spend
3. **Purchase history:** all sales linked to this customer, sorted by date
4. **Groups:** which groups the customer belongs to
5. Tap a sale → view invoice

**SOP — Manage Groups:**
1. Switch to **Groups** view
2. Create group: name, description, optional company flag (with GST)
3. Add members: search existing customers → add to group
4. Remove members: tap remove on member card
5. Use groups for: targeted automations, company billing, loyalty segments

**Data Flow:**
```
customers → core customer data (name, phone, email, dob, location)
companies → B2B accounts linked to customer via customer_id
groups → named groups + group_members linking to customers
sales → customer_id references customers.id
```

---

### 6.4 Inventory

**Purpose:** Brand-wise stock view, category browsing, product details, inward shipment (stock-in), stock aging alerts.

**Files:**
- `src/js/modules/inventory/inventory.js` — Tab switcher (Brands / Categories)
- `src/js/modules/inventory/brands.js` — Brand cards with stock value, margins, aging alerts
- `src/js/modules/inventory/categories.js` — Category-wise product grid
- `src/js/modules/inventory/details.js` — Individual product detail
- `src/js/modules/inventory/inward.js` — Inward shipment form (add stock)

**SOP — Check Inventory by Brand:**
1. Navigate to **INVENTORY** → Brands tab (default)
2. See all brands as cards showing: total stock value (₹), unit count, SKU count, avg margin %
3. **Stock Aging Alerts** banner at top:
   - **Red (Dead Stock):** Products with no sales in 90+ days or never sold — shows count, locked capital value, product names
   - **Amber (Slow Movers):** Products with no sales in 60–90 days
4. Tap a brand card → view detailed product list for that brand

**SOP — Inward Shipment (Add Stock):**
1. Tap **+** button (bottom right) → Inward Shipment form
2. Select product or add new product
3. Enter: quantity, invoice reference, date
4. Save → `products.in_stock` incremented, `inventory_logs` entry created (type: 'inward')

**SOP — Check Stock Aging:**
1. Open Inventory → Brands view
2. If dead stock or slow movers exist, alert banners show at top
3. Red banner = 90+ days no sale (or never sold with stock)
4. Amber banner = 60–90 days no sale
5. Shows product names, unit counts, and total capital locked
6. Use this to plan clearance sales or returns to distributor

**Data Flow:**
```
products → master catalog (name, brand, category, price, mop, in_stock, sku)
inventory_logs → stock movements (inward: +qty, outward: -qty)
sale_items → used to compute last-sale-date per product for aging analysis
sales → date reference for sale_items aging calculation
```

**Stock Aging Calculation:**
```
For each product with in_stock > 0:
  - Find last sale date via sale_items → sales.date
  - No sale ever? → Dead Stock
  - Last sale > 90 days ago? → Dead Stock
  - Last sale 60–90 days ago? → Slow Mover
  - Dead stock value = sum(price × in_stock) for all dead products
```

---

### 6.5 Schemes

**Purpose:** View active brand schemes, track progress against brand targets, browse scheme details.

**Files:**
- `src/js/modules/schemes/schemes.js` — Tab switcher (List / Brands)
- `src/js/modules/schemes/list.js` — All schemes list
- `src/js/modules/schemes/brands.js` — Brand-wise scheme summary with target tracker
- `src/js/modules/schemes/details.js` — Individual scheme detail

**SOP — View Schemes by Brand:**
1. Navigate to **SCHEMES** → Brands tab
2. Each brand card shows: active scheme count, completed count, total payout potential
3. **Brand Target Tracker** (if targets set): progress bar showing actual vs target
   - Green bar: ≥100% (target met)
   - Amber bar: ≥80% (close to target)
   - Grey bar: <80%
   - Shows: actual amount / target amount, actual units / target units
   - Incentive slab info displayed below
4. Tap brand → view scheme list for that brand

**SOP — Check Scheme Details:**
1. Go to List tab or tap into a brand
2. Each scheme shows: name, discount type (flat/percentage), applicable brand/category, date range, payout
3. Tap scheme → full detail view with eligibility criteria

**SOP — Set Brand Targets:**
- Brand targets are seeded/managed in the `brand_targets` table
- Each target has: brand, target_amount (₹), target_units, period (e.g., "Q4-FY26"), date range, incentive_slab
- Actual progress computed from: `sale_items` × `products.brand` (non-draft sales)

**Data Flow:**
```
schemes → global scheme catalog (brand, category, discount, dates, payout)
brand_targets → retailer's quarterly targets per brand
sale_items + products → actual brand-wise sales (amount + units)
sales → filter out drafts
```

---

### 6.6 Claims

**Purpose:** Track scheme claims derived from actual sales. Shows which sale items had schemes applied and the claimable amount.

**Files:**
- `src/js/modules/claims/index.js` — Claims dashboard derived from sale_items with scheme_id

**SOP — Review Claims:**
1. Navigate to **CLAIMS**
2. Dashboard shows all sale items that have a `scheme_id` attached
3. For each claim: product name, scheme name, discount amount, sale date
4. Use this to file claims with distributors/brands
5. Track which claims have been submitted vs pending

**Data Flow:**
```
sale_items WHERE scheme_id IS NOT NULL → claim-eligible items
JOIN schemes → get scheme name, payout details
JOIN sales → get sale date, customer info
Aggregate by brand → total claimable per brand
```

**Edge Cases:**
- Scheme must have been active at time of sale
- Claims are derived (no separate claims table) — they come from sale_items with scheme_id
- Retailer uses this list to file manual claims with brand/distributor

---

### 6.7 Reports

**Purpose:** Sales analytics (30-day trend chart), daily breakdown, CSV export, brand margin analysis, product margin top 10.

**Files:**
- `src/js/modules/reports/sales.js` — Sales report with chart, daily list, margin analysis
- `src/js/modules/reports/overview.js` — Overview dashboard
- `src/js/modules/reports/inventory.js` — Inventory report
- `src/js/modules/reports/marketing.js` — Marketing report

**SOP — View Sales Report:**
1. Navigate to **REPORTS** → Sales tab
2. **Header card:** Total Revenue (30 days), order count, SVG line chart
3. **Stats grid:** Average Order Value, Total Orders
4. **Daily Sales list:** Last 10 days sorted by date descending, showing orders and revenue per day
5. **Export CSV:** Tap "Export CSV" button → downloads `sales-report-YYYY-MM-DD.csv` with columns: Date, Orders, Revenue

**SOP — Analyze Margins:**
1. Scroll below Daily Sales to see **Brand Margin Analysis**
2. Each brand card shows: units sold, revenue, cost (based on MOP), margin (₹), margin (%)
3. Green = positive margin, Red = negative margin
4. Below brands: **Product Margin — Top 10** products by absolute margin
5. Each product shows: name, brand, units sold, margin ₹, margin %

**Margin Calculation:**
```
Revenue per item = sale_items.final_price (or sale_items.price)
Cost per item = products.mop × sale_items.quantity
Margin = Revenue - Cost
Margin % = (Revenue - Cost) / Cost × 100
Aggregate by brand and by product
```

**Data Flow:**
```
sales (non-draft, last 30 days) → group by date → daily totals
sale_items + products → margin analysis per product/brand
```

---

### 6.8 Expenses

**Purpose:** Track store operating expenses (rent, salary, electricity, etc.) with monthly summaries and category breakdowns.

**Files:**
- `src/js/modules/expenses/index.js` — Expense list, stats, add form, category breakdown

**SOP — Record an Expense:**
1. Navigate to **EXPENSES**
2. View current month's expenses listed by date (newest first)
3. Tap **+ New Expense** button
4. Fill form:
   - **Category:** Rent, Salary, Electricity, Internet, Marketing, Transport, Maintenance, Miscellaneous
   - **Description:** Free text
   - **Amount:** ₹ value
   - **Payment Mode:** Cash, UPI, Bank Transfer, Auto Debit, Card
   - **Date:** Defaults to today
   - **Recurring:** Toggle if this repeats monthly
5. Save → expense added, list refreshes

**SOP — Review Monthly Expenses:**
1. Top stats card shows: Total this month (₹), entry count, recurring expense count
2. Desktop right panel shows **Monthly Category Breakdown**: each category with total amount and progress bar proportional to highest category
3. Use this for end-of-month reconciliation with accountant

**Data Flow:**
```
expenses → category, amount, date, payment_mode, recurring flag
Aggregate by month/category for summaries
Feeds into launcher's Daily Cash Register (Net = Revenue - Expenses)
```

**Categories:**
Rent, Salary, Electricity, Internet, Marketing, Transport, Maintenance, Miscellaneous

---

### 6.9 Repairs

**Purpose:** Full repair lifecycle tracking: intake → diagnosis → repair → ready → dispatch.

**Files:**
- `src/js/modules/repairs/repairs.js` — Main view
- `src/js/modules/repairs/search.js` — Search by customer/device
- `src/js/modules/repairs/intake.js` — New repair job form
- `src/js/modules/repairs/status.js` — Status tracker with timeline
- `src/js/modules/repairs/history.js` — Completed repairs

**SOP — Log a New Repair:**
1. Navigate to **REPAIRS**
2. Tap **+ New Repair**
3. Enter: Customer name, phone, device name, issue description, estimated cost
4. System generates job sheet number
5. Status set to **COLLECTED**
6. Activity logged

**SOP — Update Repair Status:**
1. Find repair in active list (or search)
2. Tap to open status view
3. Update status: COLLECTED → IN_REPAIR → READY → DISPATCHED
4. Each status change logged with timestamp
5. Optionally assign technician (`assigned_to`)

**SOP — Notify Customer:**
1. When status changes to READY, send WhatsApp notification
2. Use automation or manual WhatsApp send from the repair detail view

**Status Flow:**
```
COLLECTED → IN_REPAIR → READY → DISPATCHED
     ↑                              ↓
     └──────── (re-repair) ─────────┘
```

---

### 6.10 Inquiries

**Purpose:** Track walk-in inquiries that didn't convert to immediate sales. Follow up to convert.

**Files:**
- `src/js/modules/inquiries/inquiries.js` — Main view
- `src/js/modules/inquiries/list.js` — Inquiry list
- `src/js/modules/inquiries/capture.js` — New inquiry form
- `src/js/modules/inquiries/resolve.js` — Resolve inquiry (mark as converted/lost)
- `src/js/modules/inquiries/stats.js` — Inquiry stats

**SOP — Capture a Walk-in Inquiry:**
1. Navigate to **INQUIRIES** → tap **+ Capture**
2. Enter: Customer name, product they asked about, their request/notes
3. Save → status set to **PENDING**
4. Follow up later (call/WhatsApp)

**SOP — Resolve an Inquiry:**
1. Find pending inquiry in list
2. Tap → Resolve view
3. Mark as: **RESOLVED** (converted to sale or answered) or leave pending
4. Add resolution notes

**SOP — Track Conversion:**
1. Stats view shows: total inquiries, pending count, resolved count
2. Use this to measure walk-in conversion rate
3. Follow up on pending inquiries daily

---

### 6.11 Pre-Booking

**Purpose:** Accept advance deposits for upcoming product launches. Create public-facing campaign pages.

**Files:**
- `src/js/modules/prebooking/prebooking.js` — Main view
- `src/js/modules/prebooking/dashboard.js` — Active campaigns dashboard
- `src/js/modules/prebooking/create.js` — New prebooking/campaign form
- `src/js/modules/prebooking/details.js` — Campaign detail with booking list
- `src/js/modules/prebooking/public.js` — Public-facing booking page

**SOP — Create a Pre-Booking Campaign:**
1. Navigate to **PRE-BOOKING** → tap **+ New Campaign**
2. Enter: Title (e.g., "iPhone 16 Pro Pre-Order"), product, deposit amount, start/end dates, description, hero image URL
3. Save → campaign created with unique slug
4. Share the public booking page link with customers via WhatsApp

**SOP — Accept a Pre-Booking:**
1. Customer submits via public page, or retailer enters manually
2. Enter: Customer name, phone, product, expected price, advance amount, notes
3. Status: **PENDING** (advance not confirmed) or **CONFIRMED** (advance received)

**SOP — Convert Pre-Booking to Sale:**
1. When product arrives, find confirmed prebookings
2. Create sale with the pre-booked product
3. Advance amount deducted from total

---

### 6.12 Automation

**Purpose:** Set up automated WhatsApp follow-up sequences triggered by sales events.

**Files:**
- `src/js/modules/automation/automation.js` — Main view
- `src/js/modules/automation/dashboard.js` — Active automations list
- `src/js/modules/automation/create.js` — New automation form
- `src/js/modules/automation/sequence.js` — Message sequence builder

**SOP — Create a Post-Sale Follow-up:**
1. Navigate to **AUTOMATION** → tap **+ New**
2. Select trigger: After Sale / Manual
3. Link to specific customer or sale
4. Build message sequence:
   - Message 1: "Thank you for your purchase!" — Day 0
   - Message 2: "How is your new [product]?" — Day 3
   - Message 3: "Please rate your experience" — Day 7
5. Save → messages scheduled at `day_offset` from trigger date
6. System sends via WhatsApp (WATI or own) at scheduled time

**SOP — Monitor Automations:**
1. Dashboard shows: active automations, completed count
2. Each automation shows: customer name, sale reference, message status (sent/pending/failed)
3. Tap to see full sequence timeline

**Data Flow:**
```
automations → trigger record (customer_id, sale_id, status)
automation_messages → scheduled messages (day_offset, content, status)
communication_log → sent message records
```

---

### 6.13 Marketing

**Purpose:** AI-powered marketing content generation (banners, social media posts) using DALL-E and GPT-4o.

**Files:**
- `src/js/modules/marketing/generator.js` — AI content generator with prompt + preview

**SOP — Generate Marketing Content:**
1. Navigate to **MARKETING**
2. Enter prompt describing what you want (e.g., "Diwali sale banner for Samsung phones with 20% off")
3. Select image size and quality preferences
4. Tap **Generate** → calls OpenAI DALL-E 3 API
5. Preview generated image
6. Download or share via WhatsApp

**SOP — Analyze Product Images:**
1. Upload or paste product image URL
2. System uses GPT-4o vision to analyze and suggest marketing copy
3. Edit and use in your campaigns

**Requires:** OpenAI API key configured in `.env`

---

### 6.14 Marketplace

**Purpose:** B2B product marketplace where retailers can list excess/open-box stock for other retailers to buy.

**Files:**
- `src/js/modules/marketplace/marketplace.js` — Main view
- `src/js/modules/marketplace/list.js` — Browse all active listings
- `src/js/modules/marketplace/my-offers.js` — Retailer's own listings
- `src/js/modules/marketplace/add-product.js` — List a product for sale

**SOP — List a Product on Marketplace:**
1. Navigate to **MARKETPLACE** → My Offers tab
2. Tap **+ Add Product**
3. Enter: Product name, brand, category, price, quantity, condition (New / Open Box), description
4. Save → listing goes active (visible to all retailers)

**SOP — Browse Marketplace:**
1. Go to Browse tab
2. See all active listings from all retailers
3. Contact seller via phone/WhatsApp shown on listing

**Data Flow:**
```
marketplace_listings → global visibility (all retailers see active listings)
Seller identified by seller_name, seller_phone fields
Status: active (visible) — no buy/checkout flow yet, contact-based
```

---

### 6.15 My Store

**Purpose:** Online storefront for the retailer — list products, manage orders, handle shipping.

**Files:**
- `src/js/modules/mystore/index.js` — Full module: dashboard, listings, orders, shipping

**SOP — Set Up Online Store:**
1. Navigate to **MY STORE** → Listings tab
2. Add listings from your product catalog
3. Set listing price (can differ from in-store price), stock quantity, description
4. Toggle status: Draft → Active (visible to customers)

**SOP — Manage Online Orders:**
1. Orders tab shows incoming orders with status
2. Order statuses: **Pending** → **Confirmed** → **Shipped** → **Delivered**
3. For each order: customer details, shipping address, items, payment status
4. Add tracking number and courier name when shipping

**SOP — Track Shipping:**
1. Shipping tab shows dispatched orders
2. Update tracking info, mark as delivered
3. Shipped/delivered dates recorded automatically

---

### 6.16 Promoters

**Purpose:** Manage brand promoters (demo staff placed by brands) and track their performance.

**Files:**
- `src/js/modules/promoters/promoters.js` — Main view
- `src/js/modules/promoters/list.js` — Promoter list
- `src/js/modules/promoters/performance.js` — Performance metrics
- `src/js/modules/promoters/onboarding.js` — Add new promoter

**SOP — View Promoter Performance:**
1. Navigate to **PROMOTERS**
2. See team members list (from `team_members` table)
3. Performance view shows: store-wide metrics (since `sales` table has no `sold_by` field)
4. Metrics: total sales count, revenue, average ticket size

**SOP — Onboard a New Promoter:**
1. Tap **+ Add Promoter**
2. Enter: Name, role, phone, email
3. Status starts as **invited**
4. When they join: update to **active**

**Note:** Currently, sales are not attributed to individual promoters (no `sold_by` column on sales). Performance is store-wide aggregate.

---

### 6.17 Notifications (Activity Log)

**Purpose:** Chronological feed of all actions taken in the system. Also shows upcoming customer birthdays.

**Files:**
- `src/js/modules/notifications/index.js` — Activity feed grouped by date, birthday section

**SOP — Review Activity:**
1. Tap **ALERTS** on launcher (shows red dot if recent activity)
2. See activity log grouped by date: Today, Yesterday, older
3. Each entry shows: action icon, description, user name, timestamp
4. Actions tracked: sale, login, repair, inventory change, scheme, inquiry, automation, settings

**SOP — Birthday Reminders:**
1. At top of notifications, **Upcoming Birthdays** section (amber highlighted)
2. Shows customers with birthdays in next 7 days
3. "Today!" — birthday is today
4. "Tomorrow" — birthday is tomorrow
5. "In X days" — upcoming
6. Use this to send birthday wishes via WhatsApp, offer special discounts

**Birthday Calculation:**
```
For each customer with DOB:
  Set birthday to current year
  If already passed → set to next year
  If within 7 days → show in upcoming list
  Sort by daysUntil ascending
```

**Icon Map:**
| Action | Icon |
|--------|------|
| sale | receipt_long |
| login | login |
| auth | lock |
| repair | build |
| client | person |
| inventory | inventory_2 |
| settings | settings |
| plugin | extension |
| automation | bolt |
| error | error_outline |

---

### 6.18 Settings

**Purpose:** Store configuration, team management, roles & permissions, accounting, security, plugins, and more.

**Files:**
- `src/js/modules/settings/settings.js` — Main settings menu
- `src/js/modules/settings/dashboard.js` — Settings overview
- `src/js/modules/settings/store.js` — Store details (name, address, GST, receipt footer)
- `src/js/modules/settings/roles.js` — Role definitions with granular permissions
- `src/js/modules/settings/teams.js` — Team member management
- `src/js/modules/settings/accounting.js` — Financial settings, CSV export
- `src/js/modules/settings/security.js` — Security settings
- `src/js/modules/settings/backup.js` — Data backup/download
- `src/js/modules/settings/ledger.js` — Customer ledger view
- `src/js/modules/settings/plugins.js` — Plugin connections (WhatsApp, AI, etc.)
- `src/js/modules/settings/taxes.js` — GST configuration
- `src/js/modules/settings/alerts.js` — Alert settings
- `src/js/modules/settings/theme.js` — Theme settings
- `src/js/modules/settings/lang.js` — Language settings
- `src/js/modules/settings/help.js` — Help & support
- `src/js/modules/settings/ai.js` — AI feature settings
- `src/js/modules/settings/logs.js` — System logs
- `src/js/modules/settings/updates.js` — App updates

**SOP — Configure Store Details:**
1. Go to **SETTINGS** → Store
2. Edit: Store name, tagline, address, GSTIN, PAN, bank details
3. Set receipt footer text
4. Save → updates `retailer_settings` (category: 'store')

**SOP — Manage Team & Roles:**
1. **Teams:** Add/remove team members, set roles, invite via status
2. **Roles:** Define roles (Store Manager, Sales Executive, Inventory Manager, Service Technician)
3. Each role has granular permissions JSON covering: sales, inventory, reports, settings, etc.

**SOP — Accounting Export:**
1. Go to Settings → Accounting
2. Export sales data as CSV for accountant
3. View financial summaries

**SOP — Connect WhatsApp:**
1. Go to Settings → Plugins
2. Two options:
   - **WATI (Business API):** Enter API key — for template messages, bulk sends
   - **Own WhatsApp (Baileys):** Scan QR code — for personal WhatsApp messaging
3. Once connected, automation and manual messaging work via WhatsApp

**SOP — Data Backup:**
1. Go to Settings → Backup
2. Download full database backup
3. Store safely for disaster recovery

**SOP — Tax Configuration:**
1. Go to Settings → Taxes
2. Enable/disable GST on invoices
3. Set default GST rate (18% standard for electronics)
4. Toggle "Include in price" (MRP-inclusive pricing)

---

## 7. Authentication & Security

### Auth Flow

```
Option A: OTP Login
  1. Enter mobile number → POST /auth/otp → OTP sent via WATI WhatsApp
  2. Enter OTP → POST /auth/verify → JWT returned (30-day expiry)
  3. JWT stored in localStorage, sent as Bearer token on all API calls

Option B: Store Code Login
  1. Enter store code (e.g., ROS-20260225-0001) → POST /auth/login → JWT returned
  2. Same JWT flow as above
```

### Registration
1. Must be in `approved_retailers` whitelist
2. Multi-step form: mobile → OTP → store details → complete
3. Creates entry in `retailers` table

### Security Measures
- **JWT middleware:** All `/api/*` routes (except `/auth/*` and `/health`) require valid Bearer token
- **Rate limiting:** OTP endpoint limited to prevent abuse (max attempts tracked in `otp_sessions`)
- **Tenant isolation:** Server-side SQL rewriting ensures `retailer_id` filter on all tenant-scoped queries
- **Blocked tables:** `otp_sessions` and `approved_retailers` cannot be read via generic query endpoint
- **DDL blocking:** `mutate` endpoint blocks CREATE/DROP/ALTER statements
- **CORS:** Configured for production domain

---

## 8. Data Sync & Caching

### How It Works

On login (and on demand), `syncData()` in `src/js/utils/sync.js` fetches all 28 data sets in parallel and stores them in `window._db_cache`.

```javascript
// Access cached data anywhere:
const cache = window.getCache();
const sales = cache.sales || [];
const products = cache.products || [];
```

### 28 Synced Tables

| Cache Key | Source Table | Tenant-Filtered | Sort |
|-----------|-------------|-----------------|------|
| customers | customers | Yes | — |
| products | products | No (global) | — |
| sales | sales | Yes | date DESC |
| saleItems | sale_items (JOIN) | Yes | — |
| companies | companies | Yes | — |
| groups | groups | Yes | created_at DESC |
| groupMembers | group_members | Yes | — |
| automations | automations | Yes | created_at DESC |
| automationMessages | automation_messages | Yes | scheduled_date |
| communications | communication_log | Yes | sent_at DESC |
| schemes | schemes (active) | No | brand, name |
| retailers | retailers | No | onboarded_at DESC |
| inquiries | inquiries | Yes | created_at DESC |
| repairs | repairs | Yes | created_at DESC |
| inventoryLogs | inventory_logs | Yes | date DESC |
| retailerSettings | retailer_settings | Yes | category-keyed map |
| teamMembers | team_members | Yes | created_at |
| teamRoles | team_roles | Yes | created_at |
| retailerPlugins | retailer_plugins | Yes | — |
| activityLogs | activity_logs | Yes | created_at DESC |
| storeListings | store_listings | Yes | created_at DESC |
| storeOrders | store_orders | Yes | order_date DESC |
| storeOrderItems | store_order_items (JOIN) | Yes | — |
| campaigns | campaigns | Yes | created_at DESC |
| marketplace | marketplace_listings (active) | No | created_at DESC |
| prebookings | prebookings | Yes | created_at DESC |
| expenses | expenses | Yes | date DESC |
| brandTargets | brand_targets | Yes | brand |

### Re-syncing
After any write operation (sale, add customer, etc.), call `syncData()` to refresh the cache. All UI components read from `window.getCache()` so they auto-update on next render.

---

## 9. Integrations

### WhatsApp — WATI (Business API)
- **What:** Official WhatsApp Business API via WATI.io
- **Use:** Template messages (order confirmations, delivery updates), session messages
- **Config:** WATI API key + base URL in `.env`
- **Endpoints:** `/api/whatsapp/send`, `/api/whatsapp/template`

### WhatsApp — Own (Baileys)
- **What:** Connect retailer's personal WhatsApp via QR code
- **Use:** Informal messages, customer follow-ups, automation sequences
- **Config:** Session stored per-retailer in server memory
- **Flow:** Connect → Scan QR → Session active → Send messages
- **Endpoints:** `/api/whatsapp/own/*`

### OpenAI
- **DALL-E 3:** Marketing banner/image generation
- **GPT-4o Vision:** Product image analysis, content suggestions
- **Config:** OpenAI API key in `.env`
- **Endpoints:** `/api/openai/generate`, `/api/openai/vision`

---

## 10. Deployment & Operations

### Production Stack
```
Nginx (khosha.cloud)
  → /ros/ → proxy_pass http://127.0.0.1:3003/ros/
    → PM2 cluster (Node.js Express)
      → SQLite (server/retaileros.db, WAL mode)
```

### Commands

| Action | Command |
|--------|---------|
| Build frontend | `cd product-demo && npx vite build` |
| Start server | `cd server && node index.js` |
| Restart production | `pm2 restart retaileros` |
| View logs | `pm2 logs retaileros` |
| Seed database | `cd server && node db/seed.js` |
| Health check | `curl https://khosha.cloud/ros/api/health` |

### Environment Variables (`.env` in `server/`)
```
PORT=3003
JWT_SECRET=<secret>
WATI_API_KEY=<key>
WATI_BASE_URL=<url>
OPENAI_API_KEY=<key>
```

### Nginx Config
```
location /ros/ {
    proxy_pass http://127.0.0.1:3003/ros/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
}
```

---

## 11. Seed Data / Demo

The seed script (`server/db/seed.js`) creates a complete demo environment:

| Data | Count | Details |
|------|-------|---------|
| Retailer | 1 | Khosha Electronics, Mumbai |
| Products | 28 | Phones, tablets, audio, wearables, laptops, accessories, TVs, appliances |
| Customers | 15 | Indian names, Mumbai addresses, DOBs for birthday testing |
| Companies | 2 | B2B accounts with GST |
| Sales | 21 | 20 completed + 1 draft, mixed payment modes, 18-day span |
| Schemes | 6 | Samsung, Apple, OnePlus, Vivo, Audio — various discount types |
| Inquiries | 6 | 4 pending, 2 resolved |
| Repairs | 5 | All status stages represented |
| Team Members | 5 | Various roles including 1 invited |
| Team Roles | 4 | With detailed permission JSON |
| Groups | 3 | VIP, Samsung Enthusiasts, Apple Users |
| Automations | 3 | Post-purchase, review, service reminder |
| Activity Logs | 15 | Various action types |
| Store Listings | 5 | 4 active, 1 draft |
| Store Orders | 3 | Shipped, pending, delivered |
| Prebookings | 3 | 2 pending, 1 confirmed |
| Campaigns | 2 | Z Fold6 launch, iPhone 16 pre-order |
| Marketplace | 5 | 3 own, 2 from other retailers |
| Expenses | 10 | Rent, salary, utilities, marketing |
| Brand Targets | 5 | Q4-FY26 for Samsung, Apple, OnePlus, Vivo, Sony |

### Re-seeding
```bash
cd server
node db/seed.js
# This drops and recreates all data — use only in dev/demo
```

---

## 12. State Management

All UI state is managed via `src/js/state.js` — a reactive state object with localStorage persistence for auth fields.

### Key State Fields

**Navigation:**
- `currentApp` — Active module ('launcher', 'sales', 'clients', etc.)
- `currentTab` — Tab within module
- `viewportWidth` — Responsive breakpoint detection
- `gridCols` — Mobile launcher grid columns (2–4)

**Auth (persisted):**
- `isLoggedIn`, `retailerId`, `retailerCode`, `retailerName`

**Per-Module State:**
| Module | State Fields |
|--------|-------------|
| Sales | salesMode, salesHistoryId, showMobileReceipt, historyViewMode, historyDateFilter, historyFromDate, historyToDate |
| Clients | selectedClient, selectedClientId, clientViewMode, clientSearchQuery, clientInvoiceId, selectedGroupId, groupViewMode, groupSearchQuery |
| Inventory | inventoryTab, inventoryMode, inventoryBrand, inventoryCategory, activeCategory |
| Schemes | schemesTab, activeSchemeBrand, activeScheme, showSchemeDetails |
| Repairs | repairTab, repairViewMode, selectedRepairDevice, activeRepairId, repairContext |
| Promoters | promoterViewMode, activePromoter |
| Reports | reportsTab |
| Settings | settingsView, settingsSubView, settingsActiveRole |
| Marketplace | marketplaceTab, marketplaceViewMode |
| MyStore | myStoreTab, myStoreViewMode, activeStoreOrderId, activeListingId |
| Inquiries | inquiryViewMode, activeInquiry |
| PreBooking | preBookingViewMode, activeCampaign |
| Automation | automationViewMode, activeAutomationId |
| Auth | authMode, registrationStep |

### State Update Pattern
```javascript
import { state } from '../../state.js';

// Read state
if (state.currentApp === 'sales') { ... }

// Global functions update state and re-render
window.setApp = (app) => { state.currentApp = app; render(); };
window.setInventoryBrand = (brand) => { state.inventoryBrand = brand; render(); };
```

---

## 13. Adding a New Module

Follow this 8-step checklist to add a new module to RetailerOS:

### Step 1: Database Table
```sql
-- server/db/schema.sql
CREATE TABLE IF NOT EXISTS new_module (
    id TEXT PRIMARY KEY,
    retailer_id TEXT NOT NULL,
    -- your fields --
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);
CREATE INDEX idx_new_module_retailer ON new_module(retailer_id);
```

### Step 2: Tenant Isolation
```javascript
// server/routes/db.js — add to TENANT_TABLES set
const TENANT_TABLES = new Set([..., 'new_module']);
```

### Step 3: DB Helper (Client)
```javascript
// src/js/utils/db.js — add namespace
newModule: {
    getAll: () => query("SELECT * FROM new_module WHERE retailer_id = ?", [rid()]),
    add: (item) => mutate("INSERT INTO new_module (id, retailer_id, ...) VALUES (?, ?, ...)", [...]),
    update: (item) => mutate("UPDATE new_module SET ... WHERE id = ? AND retailer_id = ?", [...]),
    delete: (id) => mutate("DELETE FROM new_module WHERE id = ? AND retailer_id = ?", [id, rid()]),
},
```

### Step 4: Sync
```javascript
// src/js/utils/sync.js — add to parallel fetch array
query("SELECT * FROM new_module WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
    .then(r => cache.newModule = r.data || []).catch(() => cache.newModule = []),
```

### Step 5: UI Module
```javascript
// src/js/modules/new-module/index.js
export function renderNewModule(mode) {
    const cache = window.getCache();
    const items = cache.newModule || [];
    return `<div class="scrolling-content px-4 space-y-4 pb-32">...</div>`;
}
```

### Step 6: App Router
```javascript
// src/js/app.js — add to renderAppPrimary, renderAppSecondary, renderMobileContent
case 'new-module': return renderNewModule('desktop-primary');
```

### Step 7: Launcher Tile
```javascript
// src/js/modules/launcher/apps-grid.js — add to apps array
{ n: 'NEW MODULE', i: 'icon_name', k: 'new-module' },
```

### Step 8: Seed Data
```javascript
// server/db/seed.js — add realistic demo data
db.prepare("INSERT INTO new_module ...").run(...);
```

---

*Document generated 25 Feb 2026. Keep updated as modules evolve.*
