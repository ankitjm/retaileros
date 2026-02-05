# RetailerOS - Task Tracker

> This file tracks all tasks for the RetailerOS project. Updated every session.
> **Branch:** `dev-working`
> **Netlify:** https://gorgeous-raindrop-78b58d.netlify.app/
> **Last Updated:** 2026-02-06

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
  - Plugins (WhatsApp, Tally, Razorpay, PhonePe, SMS, printer, Sheets, Shiprocket)
  - Teams (staff members, roles, module access matrix)
  - Logs (activity audit trail, grouped by day with filters)
  - Language (10 Indian languages, communication lang, date/currency/number formats)
  - Backup (data overview, manual export, auto-backup schedule, history, retention)
  - Updates & Release Notes (version banner, release timeline, changelog)
  - Theme (light/dark/system mode, 8 accent colors, density, font size, sidebar, animations)
  - Help (WhatsApp/call/email/ticket support, guides, FAQ, account info, bug report)

---

## Demo Retailers for Testing

| Retailer | Code | Mobile | City | Login With |
|----------|------|--------|------|-----------|
| TechZone Electronics | ROS-20260206-0001 | 9876543210 | Mumbai | `9876543210` |
| Digital World | ROS-20260206-0002 | 9811223344 | New Delhi | `9811223344` |

**Test multi-tenant isolation:**
1. Login as TechZone (9876543210) — see 5 customers, 3 sales
2. Logout — Login as Digital World (9811223344) — see 4 customers, 2 sales
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
- [ ] Add user/role management within each retailer (staff, manager, owner)

---

## Architecture Notes

### Multi-Tenant Design
- **Tenant-scoped tables** (filtered by `retailer_id`): customers, companies, sales, groups, group_members, automations, automation_messages, communication_log, inquiries, repairs, inventory_logs
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
- `seed_demo_retailers.js` — demo data seeding
