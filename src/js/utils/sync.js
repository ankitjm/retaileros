import { query } from './db.js';
import { triggerRender } from '../state.js';

/**
 * Universal Data Sync Manager
 * Fetches data from Turso and populates the application's local cache
 */
export async function syncData() {
    console.group("🔄 Synchronizing Data with Turso...");

    try {
        // Multi-tenant: filter tenant-scoped tables by retailer_id
        const retailerId = localStorage.getItem('retaileros_retailer_id');

        // Helper: build tenant-filtered query
        const tenantQuery = (table, orderBy = '') => {
            const order = orderBy ? ` ORDER BY ${orderBy}` : '';
            return retailerId
                ? query(`SELECT * FROM ${table} WHERE retailer_id = ?${order}`, [retailerId])
                : query(`SELECT * FROM ${table}${order}`);
        };

        // Fetch All Application Data in Parallel
        // Every query has .catch() so one failure doesn't break the entire sync
        const [customers, products, sales, saleItems, companies, groups, groupMembers, automations, automationMessages, communications, schemes, retailers] = await Promise.all([
            // TENANT-SCOPED tables
            tenantQuery("customers").catch(e => { console.error("Sync customers failed:", e); return []; }),
            // GLOBAL tables (no tenant filter)
            query("SELECT * FROM products").catch(e => { console.error("Sync products failed:", e); return []; }),
            tenantQuery("sales", "date DESC").catch(e => { console.error("Sync sales failed:", e); return []; }),
            // sale_items: filter through sales join
            (retailerId
                ? query("SELECT si.* FROM sale_items si INNER JOIN sales s ON si.sale_id = s.id WHERE s.retailer_id = ?", [retailerId])
                : query("SELECT * FROM sale_items")
            ).catch(e => { console.error("Sync sale_items failed:", e); return []; }),
            tenantQuery("companies").catch(e => { console.error("Sync companies failed:", e); return []; }),
            tenantQuery("groups", "created_at DESC").catch(e => { console.error("Sync groups failed:", e); return []; }),
            tenantQuery("group_members").catch(e => { console.error("Sync group_members failed:", e); return []; }),
            tenantQuery("automations", "created_at DESC").catch(e => { console.error("Sync automations failed:", e); return []; }),
            tenantQuery("automation_messages", "scheduled_date").catch(e => { console.error("Sync automation_messages failed:", e); return []; }),
            tenantQuery("communication_log", "sent_at DESC").catch(e => { console.error("Sync communications failed:", e); return []; }),
            // GLOBAL tables
            query("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(e => { console.error("Sync schemes failed:", e); return []; }),
            query("SELECT * FROM retailers ORDER BY onboarded_at DESC").catch(e => { console.error("Sync retailers failed:", e); return []; })
        ]);

        // Map to global window storage
        window._db_cache = {
            customers: customers || [],
            products: products || [],
            sales: sales || [],
            saleItems: saleItems || [],
            companies: companies || [],
            groups: groups || [],
            groupMembers: groupMembers || [],
            automations: automations || [],
            automationMessages: automationMessages || [],
            communications: communications || [],
            schemes: schemes || [],
            retailers: retailers || [],
            // Empty placeholders for other apps to prevent UI crashes
            inventoryLogs: [],
            inquiries: [],
            repairs: [],
            marketplace: [],
            campaigns: [],
            bookings: []
        };

        console.log("✅ Sync Complete. Tables cached:", {
            customers: customers.length,
            products: products.length,
            sales: sales.length,
            automations: automations.length
        });
    } catch (err) {
        console.error("❌ Data Sync Failed:", err);
        if (window.toast) {
            window.toast.error("Failed to sync data. Check your connection.");
        }
    } finally {
        console.groupEnd();
        triggerRender(false);
    }
}

// Global accessor for the cache
window.getCache = () => window._db_cache || {
    customers: [], sales: [], products: [], saleItems: [], companies: [],
    groups: [], groupMembers: [], automations: [], automationMessages: [],
    communications: [], schemes: [], retailers: [], inventoryLogs: [], inquiries: [],
    repairs: [], marketplace: [], campaigns: [], bookings: []
};
