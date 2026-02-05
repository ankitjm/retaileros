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
- **Tenant-scoped tables** (filtered by `retailer_id`): customers, companies, sales, groups, group_members, automations, automation_messages, communication_log
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
- `migrate_add_retailer_id.js` — live DB migration script
- `seed_demo_retailers.js` — demo data seeding
