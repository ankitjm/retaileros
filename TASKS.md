# RetailerOS - Task Tracker

> This file tracks all tasks for the RetailerOS project. Updated every session.
> **Branch:** `dev-working`
> **Netlify:** https://gorgeous-raindrop-78b58d.netlify.app/
> **Last Updated:** 2026-02-07 (Session 3)

---

## Completed Tasks

- [x] Clone repo and set up local environment
- [x] Create `dev-working` branch (protect main)
- [x] Set up task tracking (this file)
- [x] Set up Netlify CLI deployment
- [x] **Phase 1:** Database schema migration — added `retailer_id` column to 8 tenant-scoped tables + indexes
- [x] **Phase 2:** State management — added `retailerId`, `setRetailer()`, `clearRetailer()`, `getRetailerId()` to state.js
- [x] **Phase 3:** Sync layer — all tenant queries now filter by `retailer_id`
- [x] **Phase 4:** DB helpers — all CRUD operations (insert/query) include `retailer_id`
- [x] **Phase 5:** Login flow — real DB-backed authentication by mobile number or store code
- [x] **Phase 6:** Created 2 demo retailers (TechZone Electronics + Digital World) with isolated sample data
- [x] Settings > Store page already shows all retailer info (40+ fields)
- [x] **Comprehensive Tenant Audit:** Fixed ALL db.js getById/update/delete queries with retailer_id filtering
- [x] **Missing Tables:** Added inquiries, repairs, inventory_logs tables with retailer_id + indexes (schema + live migration)
- [x] **Module Fixes:** Replaced all raw db.query() calls in capture.js, resolve.js, intake.js, status.js, inward.js with tenant-safe db helpers
- [x] **Sync Update:** inquiries, repairs, inventory_logs now synced from DB (no longer empty placeholders)
- [x] **Settings Sub-Apps:** Built 11 new retailer-centric settings pages:
  - Security (PIN, 2FA, session management, devices, login history)
  - Alerts (notification channels, inventory/sales/customer/repair alerts)
  - Taxes (GSTIN, PAN, tax rates by category, HSN codes, invoice config)
  - Plugins (24 plugins across 7 categories — payments, finance, telecom, brand, comms, accounting, hardware)
  - Teams (staff members, roles, module access matrix)
  - Logs (activity audit trail, grouped by day with filters)
  - Language (10 Indian languages, communication lang, date/currency/number formats)
  - Backup (data overview, manual export, auto-backup schedule, history, retention)
  - Updates & Release Notes (version banner, release timeline, changelog)
  - Theme (light/dark/system mode, 8 accent colors, density, font size, sidebar, animations)
  - Help (WhatsApp/call/email/ticket support, guides, FAQ, account info, bug report)
- [x] **Settings DB Persistence:** Connected all settings sub-apps to Turso DB with retailer_id isolation:
  - Created 5 new tables: `retailer_settings`, `team_members`, `team_roles`, `retailer_plugins`, `activity_logs`
  - Added 5 db helper modules: `db.settings`, `db.teamMembers`, `db.teamRoles`, `db.plugins`, `db.activityLogs`
  - Added `window.saveSettings()` shared helper + sync integration
  - Wired 6 JSON-category settings: security (4 fields), alerts (14 fields), taxes (23 fields), language (8 fields), backup (5 fields), theme (7 fields)
  - Wired 3 relational pages: plugins (connect/disconnect with DB), teams (add/remove members from DB), logs (read from activity_logs table)
  - Custom save functions for taxes (nested GST/HSN JSON) and theme (dual localStorage + DB write)
  - All settings persist per retailer with zero-migration defaults strategy
- [x] **My Store App:** Full ecommerce management module with 4 tabs:
  - **Dashboard:** Store URL with copy button, quick stats (active listings, orders, revenue, in-progress), recent orders, top products
  - **Listings:** List inventory products on online store (add/activate/deactivate/delete), click listing → detail in preview pane with inline edit
  - **Orders:** Track online orders with status workflow (pending → confirmed → shipped → delivered)
  - **Shipping:** Manage shipments with courier/tracking info, ready-to-ship queue
  - 3 new DB tables: `store_listings`, `store_orders`, `store_order_items`
  - Order-to-sale conversion: delivered orders auto-create sale records with `source='online'`
  - Sales Desk integration: online sales show "Online" badge (blue) vs "In-Store" badge in history
  - Sales Desk history: "Online" tab shows pending/confirmed/shipped store orders, click → navigates to My Store
  - Order detail restyled to match Sales Desk invoice preview (card layout, dashed borders, payment block, WhatsApp share, print)
  - Desktop preview pane: contextual content (listing detail, order invoice, dashboard quick actions)
  - Test order generator for demo/testing purposes
- [x] **Marketing AI Creative Generator:** OpenAI-powered marketing creative generation:
  - DALL-E 3 image generation from text prompts
  - 5 rotating long-tail keyword suggestions (pool of 20 Indian retail-specific prompts)
  - Reference image upload with GPT-4o-mini Vision enhancement
  - Upload tips: store front, product images, brand logos, festival photos
  - Preview pane: generated image display, download, re-generate, refine input
  - Creative tips guide in empty state
  - Uses existing OpenAI API key from Settings > AI Config
- [x] **Notifications/Alerts Module:** Centralized alert hub scanning all module data:
  - ALERTS app as first item in launcher grid with red dot badge when notifications exist
  - 8 notification sources: pending store orders, low stock (≤5 units), draft sales, unresolved inquiries, active repairs, scheduled automations (7d), live campaigns, client birthdays
  - Color-coded notification cards with icon, count badge, description, and tap-to-navigate
  - Push notification toggle (persisted in localStorage, default ON)
  - Desktop secondary pane shows total count summary with category breakdown
  - Empty state: checkmark + "All Caught Up" when no alerts
  - `window.getNotificationCount()` exposed globally for badge rendering
- [x] **Notifications Accordions:** Grouped notifications by category with collapsible accordions (closed by default), count badges, expand/collapse toggle
- [x] **Removed "RetailerOS" text** from notifications header — clean minimal header
- [x] **Footer:** Added "A product of Khosha Systems" minimal footer to launcher
- [x] **PWA Setup:** Full Progressive Web App support:
  - manifest.json with app name, icons (192x192, 512x512), standalone display mode
  - Service worker (sw.js) with network-first for pages, cache-first for assets
  - Favicon (16x16, 32x32), Apple touch icon (180x180)
  - `apple-mobile-web-app-capable` meta tags — no URL bar in standalone mode
  - Install prompt in browser, "Add to Home Screen" on mobile
- [x] **Sales Desk scroll fix:** Fixed mobile scroll jumping when toggling discount/device details sections — preserves scroll position and smoothly scrolls expanded section into view
- [x] **Comprehensive Module Audit & Fix (Session 3):**
  - Auto-collapse discount section after applying in Sales Desk
  - Notifications redesign: rich info cards with contextual action buttons, black/white/slate theme only
  - Wired all non-functional buttons across 7 modules:
    - Promoters: Confirm Hire → DB insert, toggle check-in switches, back button fix
    - Schemes: Submit Claims → activity log, Download CSV from sales data
    - Marketplace: Post to Marketplace → DB insert, Pause/Sold status buttons, Contact Seller
    - Prebooking: Publish Campaign → generate shareable URL, Convert to Sale → navigate to Sales Desk
    - Reports: Date range picker with apply/clear, CSV export by tab (sales/inventory/marketing)
    - Repairs: Reassign button with team member picker from cache
    - Inquiries: View All toggle between summary + recent vs full list
  - DB schema: Added store_listings, store_orders, store_order_items to setup_db.js
  - Fixed inventory/inward.js: replaced raw query with db helper, fixed product_id bug
  - Fixed inventory/categories.js: malformed HTML tags causing raw HTML display
  - My Store Listings tab: fixed mobile squeeze (added w-full)
  - Launcher header: added time display next to date
  - Marketing AI: wired OpenAI API key fallback for image generation
  - Comprehensive dummy data: seeded repairs, inquiries, team members, inventory logs, store listings, store orders, activity logs for both demo retailers

---

## Demo Retailers for Testing

| Retailer | Code | Mobile | City | Login With |
|----------|------|--------|------|-----------|
| TechZone Electronics | ROS-20260206-0001 | 9876543210 | Mumbai | `9876543210` |
| Digital World | ROS-20260206-0002 | 9811223344 | New Delhi | `9811223344` |

**Test multi-tenant isolation:**
1. Login as TechZone (9876543210) — see 5 customers, 3 sales, 6 repairs, 5 inquiries, 5 team members, 3 store listings, 2 store orders
2. Logout — Login as Digital World (9811223344) — see 4 customers, 2 sales + 1 draft, 4 repairs, 3 inquiries, 3 team members, 2 store listings
3. Each retailer should ONLY see their own data!

---

## In Progress

_(none currently)_

---

## Upcoming / Backlog

- [ ] Fix expired external DB auth token (Turso) for real registration flow
- [ ] Implement real OTP service integration (Twilio/AWS SNS)
- [ ] Add edit functionality to Settings > Store page
- [ ] Build retailer dashboard view for registered retailers
- [ ] Add bulk import for approved retailers
- [ ] Admin approval workflow panel
- [ ] Mark retailers as registered in external DB after onboarding
- [ ] General UI/UX improvements
- [ ] Performance optimization (code-splitting for 500KB+ bundle)
- [ ] Add user/role management within each retailer (staff, manager, owner) — teams page DB wired, needs role editor UI

---

## Architecture Notes

### Multi-Tenant Design
- **Tenant-scoped tables** (filtered by `retailer_id`): customers, companies, sales, groups, group_members, automations, automation_messages, communication_log, inquiries, repairs, inventory_logs, retailer_settings, team_members, team_roles, retailer_plugins, activity_logs, store_listings, store_orders, store_order_items
- **Global tables** (shared across all retailers): products, schemes, sale_items (inherits via sale_id join), retailers
- **Tenant identity**: stored in `state.retailerId` + localStorage, used by all db helpers and sync
- **Login**: authenticates by mobile number or store code against `retailers` table
- **Logout**: clears tenant identity via `clearRetailer()`

### Key Files
- `src/js/state.js` — tenant identity management
- `src/js/utils/db.js` — all CRUD with `retailer_id` filtering
- `src/js/utils/sync.js` — tenant-filtered data sync
- `src/js/modules/auth/login.js` — real DB-backed login
- `src/js/modules/settings/store.js` — store profile display (40+ fields)
- `setup_db.js` — schema with `retailer_id` columns
- `migrate_add_retailer_id.js` — live DB migration script (Phase 1)
- `migrate_add_missing_tables.js` — adds inquiries, repairs, inventory_logs tables
- `migrate_add_settings_tables.js` — adds retailer_settings, team_members, team_roles, retailer_plugins, activity_logs
- `migrate_add_store_tables.js` — adds store_listings, store_orders, store_order_items + sales.source column
- `seed_demo_retailers.js` — demo data seeding
- `src/js/modules/mystore/dashboard.js` — store URL, analytics stats, recent orders, top products
- `src/js/modules/mystore/listing-detail.js` — listing preview pane with inline edit
- `src/js/modules/marketing/generator.js` — AI creative prompt, suggestions, image upload, DALL-E generation
- `src/js/modules/marketing/preview.js` — generated image display, download, refine
