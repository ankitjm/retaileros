import { query } from './db.js';
import { triggerRender } from '../state.js';

/**
 * Universal Data Sync Manager
 * Fetches data from Turso and populates the application's local cache
 */
export async function syncData() {
    console.group("🔄 Synchronizing Data with Turso...");

    try {
        // Fetch All Application Data in Parallel
        // Fetch Only Active App Modules
        const [customers, products, sales, saleItems] = await Promise.all([
            query("SELECT * FROM customers"),
            query("SELECT * FROM products"),
            query("SELECT * FROM sales ORDER BY date DESC"),
            query("SELECT * FROM sale_items")
        ]);

        // Map to global window storage
        window._db_cache = {
            customers: customers || [],
            products: products || [],
            sales: sales || [],
            saleItems: saleItems || [],
            // Empty placeholders for other apps to prevent UI crashes
            inventoryLogs: [],
            inquiries: [],
            repairs: [],
            marketplace: [],
            schemes: [],
            campaigns: [],
            bookings: [],
            automations: []
        };

        console.log("✅ Sync Complete. Tables cached.");
    } catch (err) {
        console.error("❌ Data Sync Failed:", err);
    } finally {
        console.groupEnd();
        triggerRender(false);
    }
}

// Global accessor for the cache
window.getCache = () => window._db_cache || { customers: [], sales: [], products: [], inventoryLogs: [] };
