// ── RetailerOS Database Client (Server API) ─────────────────
// All queries route through the Express server API
// No direct database connections from the browser

// API base path — adapts to Nginx reverse proxy in production
const API_BASE = window._apiBase || '';

function getAuthHeaders() {
    const token = localStorage.getItem('retaileros_session_token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
}

/**
 * Universal query handler — routes to /api/query (reads) or /api/mutate (writes)
 */
export async function query(sql, params = []) {
    const trimmed = sql.trim();
    const isWrite = /^(INSERT|UPDATE|DELETE|REPLACE)\b/i.test(trimmed);
    const endpoint = isWrite ? 'mutate' : 'query';

    const response = await fetch(`${API_BASE}/api/${endpoint}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ sql: trimmed, args: params })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Request failed' }));
        if (response.status === 401) {
            localStorage.removeItem('retaileros_session_token');
            localStorage.removeItem('retaileros_retailer_id');
            localStorage.removeItem('retaileros_logged_in');
            window.location.reload();
            return;
        }
        throw new Error(err.error || `API ${endpoint} failed`);
    }

    const data = await response.json();
    return isWrite ? data : (data.rows || []);
}

/**
 * Transaction handler — routes to /api/batch
 */
export async function transaction(statements) {
    const response = await fetch(`${API_BASE}/api/batch`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ statements })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({ error: 'Batch failed' }));
        throw new Error(err.error || 'Batch transaction failed');
    }

    return await response.json();
}

// Get current retailer ID for tenant isolation
function getCurrentRetailerId() {
    return localStorage.getItem('retaileros_retailer_id');
}

// Module specific helpers (multi-tenant aware)
export const db = {
    clients: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM customers WHERE retailer_id = ?", [rid])
                : query("SELECT * FROM customers");
        },
        add: (c) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO customers (id, name, phone, email, joined_at, dob, location, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, phone=EXCLUDED.phone, email=EXCLUDED.email, dob=EXCLUDED.dob, location=EXCLUDED.location",
                [c.id, c.name, c.phone || '', c.email || '', new Date().toISOString(), c.dob || null, c.location || '', rid]
            );
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM customers WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM customers WHERE id = ?", [id]);
        }
    },
    companies: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM companies WHERE retailer_id = ?", [rid])
                : query("SELECT * FROM companies");
        },
        add: (c) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO companies (id, name, gst_number, customer_id, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",
                [c.id, c.name, c.gst_number, c.customer_id, new Date().toISOString(), rid]
            );
        },
        getByCustomerId: (customerId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM companies WHERE customer_id = ? AND retailer_id = ?", [customerId, rid])
                : query("SELECT * FROM companies WHERE customer_id = ?", [customerId]);
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM companies WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM companies WHERE id = ?", [id]);
        }
    },
    sales: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM sales WHERE retailer_id = ? ORDER BY date DESC", [rid])
                : query("SELECT * FROM sales ORDER BY date DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM sales WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM sales WHERE id = ?", [id]);
        },
        getDrafts: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM sales WHERE status = 'draft' AND retailer_id = ? ORDER BY date DESC", [rid])
                : query("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC");
        },
        add: (s) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [s.id, s.customer_id, s.customer_name, s.date, s.total_amount, s.status || 'completed',
                 s.payment_mode || null, s.payment_reference || null, s.gst_required || 0, s.company_id || null,
                 s.installation_required || 0, s.installation_date || null, rid]
            );
        },
        update: (s) => {
            const rid = getCurrentRetailerId();
            const where = rid ? 'WHERE id = ? AND retailer_id = ?' : 'WHERE id = ?';
            const params = [s.customer_id, s.customer_name, s.total_amount, s.status,
                s.payment_mode || null, s.payment_reference || null, s.gst_required || 0, s.company_id || null,
                s.installation_required || 0, s.installation_date || null, s.id];
            if (rid) params.push(rid);
            return query(
                `UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?,
                 payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?,
                 installation_required = ?, installation_date = ? ${where}`, params);
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM sales WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM sales WHERE id = ?", [id]);
        },
        addItem: (i) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [i.id, i.sale_id, i.product_id, i.product_name, i.category, i.quantity, i.price,
                 i.discount_type || null, i.discount_value || null, i.discount_amount || null, i.scheme_id || null, i.final_price || i.price,
                 i.imei || null, i.serial_number || null, i.mac_id || null, i.manufacturing_date || null, i.installation_date || null, i.extra_fields || null, rid]
            );
        },
        deleteItems: (saleId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM sale_items WHERE sale_id = ? AND retailer_id = ?", [saleId, rid])
                : query("DELETE FROM sale_items WHERE sale_id = ?", [saleId]);
        },
        getItems: (saleId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM sale_items WHERE sale_id = ? AND retailer_id = ?", [saleId, rid])
                : query("SELECT * FROM sale_items WHERE sale_id = ?", [saleId]);
        }
    },
    inventory: {
        getProducts: () => query("SELECT * FROM products")
    },
    schemes: {
        getAll: () => query("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),
        getById: (id) => query("SELECT * FROM schemes WHERE id = ?", [id]),
        getByBrand: (brand) => query("SELECT * FROM schemes WHERE brand = ? AND status = 'active'", [brand]),
        getByCategory: (category) => query("SELECT * FROM schemes WHERE category = ? AND status = 'active'", [category]),
        getApplicable: (brand, category, price) => query(
            `SELECT * FROM schemes WHERE status = 'active'
             AND (brand = ? OR brand IS NULL)
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND (start_date)::date <= CURRENT_DATE AND (end_date)::date >= CURRENT_DATE`,
            [brand, category, price, price]
        )
    },
    groups: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM groups WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM groups ORDER BY created_at DESC");
        },
        add: (g) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [g.id, g.name, g.description || null, g.is_company || 0, g.gst_number || null, g.contact_person || null, g.created_at, rid]
            );
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM groups WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM groups WHERE id = ?", [id]);
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM groups WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM groups WHERE id = ?", [id]);
        },
        getMembers: (groupId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM group_members WHERE group_id = ? AND retailer_id = ?", [groupId, rid])
                : query("SELECT * FROM group_members WHERE group_id = ?", [groupId]);
        },
        getAllMembers: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM group_members WHERE retailer_id = ?", [rid])
                : query("SELECT * FROM group_members");
        },
        addMember: (m) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",
                [m.id, m.group_id, m.customer_id, m.added_at, rid]
            );
        },
        removeMember: (groupId, customerId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM group_members WHERE group_id = ? AND customer_id = ? AND retailer_id = ?", [groupId, customerId, rid])
                : query("DELETE FROM group_members WHERE group_id = ? AND customer_id = ?", [groupId, customerId]);
        },
        deleteMembers: (groupId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM group_members WHERE group_id = ? AND retailer_id = ?", [groupId, rid])
                : query("DELETE FROM group_members WHERE group_id = ?", [groupId]);
        }
    },
    automations: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automations WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM automations ORDER BY created_at DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automations WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM automations WHERE id = ?", [id]);
        },
        getByCustomer: (customerId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automations WHERE customer_id = ? AND retailer_id = ? ORDER BY created_at DESC", [customerId, rid])
                : query("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC", [customerId]);
        },
        getBySale: (saleId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automations WHERE sale_id = ? AND retailer_id = ?", [saleId, rid])
                : query("SELECT * FROM automations WHERE sale_id = ?", [saleId]);
        },
        add: (a) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [a.id, a.name, a.customer_id, a.customer_name, a.sale_id || null, a.status || 'active', a.created_at || new Date().toISOString(), rid]
            );
        },
        update: (id, updates) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query(`UPDATE automations SET status = ?, completed_at = ? WHERE id = ? AND retailer_id = ?`, [updates.status, updates.completed_at || null, id, rid])
                : query(`UPDATE automations SET status = ?, completed_at = ? WHERE id = ?`, [updates.status, updates.completed_at || null, id]);
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM automations WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM automations WHERE id = ?", [id]);
        },
        getMessages: (automationId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automation_messages WHERE automation_id = ? AND retailer_id = ? ORDER BY day_offset", [automationId, rid])
                : query("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset", [automationId]);
        },
        getAllMessages: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automation_messages WHERE retailer_id = ? ORDER BY scheduled_date", [rid])
                : query("SELECT * FROM automation_messages ORDER BY scheduled_date");
        },
        addMessage: (m) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [m.id, m.automation_id, m.message_type, m.title, m.content, m.day_offset, m.scheduled_date, m.status || 'pending', rid]
            );
        },
        updateMessageStatus: (id, status, sentAt) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query(`UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ? AND retailer_id = ?`, [status, sentAt, id, rid])
                : query(`UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?`, [status, sentAt, id]);
        },
        deleteMessages: (automationId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM automation_messages WHERE automation_id = ? AND retailer_id = ?", [automationId, rid])
                : query("DELETE FROM automation_messages WHERE automation_id = ?", [automationId]);
        }
    },
    communications: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM communication_log WHERE retailer_id = ? ORDER BY sent_at DESC", [rid])
                : query("SELECT * FROM communication_log ORDER BY sent_at DESC");
        },
        getByCustomer: (customerId) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM communication_log WHERE customer_id = ? AND retailer_id = ? ORDER BY sent_at DESC", [customerId, rid])
                : query("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC", [customerId]);
        },
        add: (c) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [c.id, c.customer_id, c.type, c.direction || 'outgoing', c.content, c.sent_at || new Date().toISOString(),
                 c.automation_id || null, c.sale_id || null, c.status || 'sent', rid]
            );
        },
        updateStatus: (id, status) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("UPDATE communication_log SET status = ? WHERE id = ? AND retailer_id = ?", [status, id, rid])
                : query("UPDATE communication_log SET status = ? WHERE id = ?", [status, id]);
        }
    },
    inquiries: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM inquiries WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM inquiries ORDER BY created_at DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM inquiries WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM inquiries WHERE id = ?", [id]);
        },
        add: (inq) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [inq.id, inq.customer_name, inq.product_name, inq.request, inq.status || 'PENDING', inq.created_at || new Date().toISOString(), rid]
            );
        },
        updateStatus: (id, status) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("UPDATE inquiries SET status = ? WHERE id = ? AND retailer_id = ?", [status, id, rid])
                : query("UPDATE inquiries SET status = ? WHERE id = ?", [status, id]);
        }
    },
    repairs: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM repairs WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM repairs ORDER BY created_at DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM repairs WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM repairs WHERE id = ?", [id]);
        },
        add: (r) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [r.id, r.customer_name, r.phone, r.device, r.issue, r.status || 'COLLECTED', r.job_sheet_no, r.estimated_cost || '0', r.assigned_to || 'Unassigned', r.created_at || new Date().toISOString(), rid]
            );
        },
        updateStatus: (id, status) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("UPDATE repairs SET status = ? WHERE id = ? AND retailer_id = ?", [status, id, rid])
                : query("UPDATE repairs SET status = ? WHERE id = ?", [status, id]);
        }
    },
    inventoryLogs: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM inventory_logs WHERE retailer_id = ? ORDER BY date DESC", [rid])
                : query("SELECT * FROM inventory_logs ORDER BY date DESC");
        },
        add: (log) => {
            const rid = getCurrentRetailerId();
            return query(
                "INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [log.id, log.product_id, log.type, log.quantity, log.reason, log.date || new Date().toISOString(), rid]
            );
        }
    },
    settings: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT category, settings FROM retailer_settings WHERE retailer_id = ?", [rid])
                : Promise.resolve([]);
        },
        get: (category) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT settings FROM retailer_settings WHERE retailer_id = ? AND category = ?", [rid, category])
                : Promise.resolve([]);
        },
        save: (category, settingsObj) => {
            const rid = getCurrentRetailerId();
            if (!rid) return Promise.resolve();
            const id = `setting_${rid}_${category}`;
            return query(
                `INSERT INTO retailer_settings (id, retailer_id, category, settings, updated_at) VALUES (?, ?, ?, ?, ?) ON CONFLICT (retailer_id, category) DO UPDATE SET settings = EXCLUDED.settings, updated_at = EXCLUDED.updated_at`,
                [id, rid, category, JSON.stringify(settingsObj), new Date().toISOString()]
            );
        }
    },
    teamMembers: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM team_members WHERE retailer_id = ? ORDER BY created_at", [rid])
                : query("SELECT * FROM team_members ORDER BY created_at");
        },
        add: (m) => {
            const rid = getCurrentRetailerId();
            const now = new Date().toISOString();
            return query(
                "INSERT INTO team_members (id, retailer_id, name, role, phone, email, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [m.id, rid, m.name, m.role, m.phone || null, m.email || null, m.status || 'invited', now, now]
            );
        },
        update: (id, updates) => {
            const rid = getCurrentRetailerId();
            return query(
                "UPDATE team_members SET name = ?, role = ?, phone = ?, status = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",
                [updates.name, updates.role, updates.phone, updates.status, new Date().toISOString(), id, rid]
            );
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM team_members WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM team_members WHERE id = ?", [id]);
        }
    },
    teamRoles: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM team_roles WHERE retailer_id = ? ORDER BY created_at", [rid])
                : query("SELECT * FROM team_roles ORDER BY created_at");
        },
        add: (r) => {
            const rid = getCurrentRetailerId();
            const now = new Date().toISOString();
            return query(
                "INSERT INTO team_roles (id, retailer_id, name, permissions, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [r.id, rid, r.name, JSON.stringify(r.permissions), r.description || null, now, now]
            );
        },
        update: (id, updates) => {
            const rid = getCurrentRetailerId();
            return query(
                "UPDATE team_roles SET name = ?, permissions = ?, description = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",
                [updates.name, JSON.stringify(updates.permissions), updates.description, new Date().toISOString(), id, rid]
            );
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM team_roles WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM team_roles WHERE id = ?", [id]);
        }
    },
    plugins: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM retailer_plugins WHERE retailer_id = ?", [rid])
                : Promise.resolve([]);
        },
        upsert: (pluginKey, status, config) => {
            const rid = getCurrentRetailerId();
            if (!rid) return Promise.resolve();
            const id = `plugin_${rid}_${pluginKey}`;
            const now = new Date().toISOString();
            const connectedAt = status === 'connected' ? now : null;
            return query(
                `INSERT INTO retailer_plugins (id, retailer_id, plugin_key, status, config, connected_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT (retailer_id, plugin_key) DO UPDATE SET status = EXCLUDED.status, config = EXCLUDED.config, connected_at = COALESCE(EXCLUDED.connected_at, retailer_plugins.connected_at), updated_at = EXCLUDED.updated_at`,
                [id, rid, pluginKey, status, config ? JSON.stringify(config) : null, connectedAt, now]
            );
        }
    },
    activityLogs: {
        getAll: (limit = 50) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM activity_logs WHERE retailer_id = ? ORDER BY created_at DESC LIMIT ?", [rid, limit])
                : query("SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT ?", [limit]);
        },
        add: (log) => {
            const rid = getCurrentRetailerId();
            const id = log.id || `log_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            return query(
                "INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [id, rid, log.action, log.detail || null, log.user_name || null, log.icon || null, log.color || null, new Date().toISOString()]
            );
        }
    },
    storeListings: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM store_listings WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM store_listings ORDER BY created_at DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM store_listings WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM store_listings WHERE id = ?", [id]);
        },
        add: (l) => {
            const rid = getCurrentRetailerId();
            const now = new Date().toISOString();
            return query(
                `INSERT INTO store_listings (id, product_id, product_name, brand, category, base_price, listing_price, description, status, stock_qty, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [l.id, l.product_id, l.product_name, l.brand || null, l.category || null, l.base_price, l.listing_price, l.description || null, l.status || 'draft', l.stock_qty || 0, now, now, rid]
            );
        },
        update: (id, u) => {
            const rid = getCurrentRetailerId();
            const now = new Date().toISOString();
            return query(
                `UPDATE store_listings SET listing_price = ?, description = ?, status = ?, stock_qty = ?, updated_at = ? WHERE id = ? AND retailer_id = ?`,
                [u.listing_price, u.description, u.status, u.stock_qty, now, id, rid]
            );
        },
        delete: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("DELETE FROM store_listings WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("DELETE FROM store_listings WHERE id = ?", [id]);
        }
    },
    storeOrders: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM store_orders WHERE retailer_id = ? ORDER BY order_date DESC", [rid])
                : query("SELECT * FROM store_orders ORDER BY order_date DESC");
        },
        getById: (id) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM store_orders WHERE id = ? AND retailer_id = ?", [id, rid])
                : query("SELECT * FROM store_orders WHERE id = ?", [id]);
        },
        add: (o) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO store_orders (id, order_number, customer_name, customer_phone, customer_email, shipping_address_line1, shipping_address_line2, shipping_city, shipping_state, shipping_pincode, order_date, total_amount, order_status, payment_status, payment_mode, payment_reference, tracking_number, courier_name, shipped_date, delivered_date, notes, sale_id, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [o.id, o.order_number, o.customer_name, o.customer_phone || null, o.customer_email || null, o.shipping_address_line1 || null, o.shipping_address_line2 || null, o.shipping_city || null, o.shipping_state || null, o.shipping_pincode || null, o.order_date, o.total_amount, o.order_status || 'pending', o.payment_status || 'pending', o.payment_mode || null, o.payment_reference || null, o.tracking_number || null, o.courier_name || null, o.shipped_date || null, o.delivered_date || null, o.notes || null, o.sale_id || null, rid]
            );
        },
        updateStatus: (id, status, extra = {}) => {
            const rid = getCurrentRetailerId();
            const fields = ['order_status = ?'];
            const values = [status];
            if (extra.tracking_number !== undefined) { fields.push('tracking_number = ?'); values.push(extra.tracking_number); }
            if (extra.courier_name !== undefined) { fields.push('courier_name = ?'); values.push(extra.courier_name); }
            if (extra.shipped_date !== undefined) { fields.push('shipped_date = ?'); values.push(extra.shipped_date); }
            if (extra.delivered_date !== undefined) { fields.push('delivered_date = ?'); values.push(extra.delivered_date); }
            if (extra.sale_id !== undefined) { fields.push('sale_id = ?'); values.push(extra.sale_id); }
            if (extra.payment_status !== undefined) { fields.push('payment_status = ?'); values.push(extra.payment_status); }
            values.push(id);
            if (rid) values.push(rid);
            const where = rid ? 'WHERE id = ? AND retailer_id = ?' : 'WHERE id = ?';
            return query(`UPDATE store_orders SET ${fields.join(', ')} ${where}`, values);
        },
        addItem: (i) => query(
            `INSERT INTO store_order_items (id, order_id, listing_id, product_id, product_name, category, quantity, unit_price, discount_amount, final_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [i.id, i.order_id, i.listing_id || null, i.product_id, i.product_name, i.category || null, i.quantity, i.unit_price, i.discount_amount || 0, i.final_price]
        ),
        getItems: (orderId) => query("SELECT * FROM store_order_items WHERE order_id = ?", [orderId]),
        deleteItems: (orderId) => query("DELETE FROM store_order_items WHERE order_id = ?", [orderId])
    },
    retailers: {
        getById: async (id) => {
            const rows = await query("SELECT * FROM retailers WHERE id = ?", [id]);
            return rows[0] || null;
        },
        getAll: async () => {
            return query("SELECT * FROM retailers ORDER BY onboarded_at DESC");
        }
    },
    activityLogs: {
        getAll: (limit = 50) => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM activity_logs WHERE retailer_id = ? ORDER BY created_at DESC LIMIT ?", [rid, limit])
                : query("SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT ?", [limit]);
        },
        add: (log) => {
            const rid = getCurrentRetailerId();
            const id = log.id || `log_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            return query(
                "INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [id, rid, log.action, log.detail || null, log.user_name || null, log.icon || null, log.color || null, new Date().toISOString()]
            );
        }
    }
};

// ── Shared Settings Save Helper ─────────────────────────────
window.saveSettings = async function(category) {
    const container = document.querySelector(`[data-settings-category="${category}"]`);
    if (!container) { console.error('No settings container for', category); return; }

    const data = {};
    container.querySelectorAll('input[type="checkbox"][data-field]').forEach(el => {
        data[el.dataset.field] = el.checked;
    });
    container.querySelectorAll('select[data-field]').forEach(el => {
        data[el.dataset.field] = el.value;
    });
    container.querySelectorAll('input[type="text"][data-field], input[type="range"][data-field], input[type="number"][data-field]').forEach(el => {
        data[el.dataset.field] = el.type === 'range' || el.type === 'number' ? Number(el.value) : el.value;
    });
    container.querySelectorAll('[data-field-group]').forEach(group => {
        const active = group.querySelector('[data-active="true"]');
        if (active) data[group.dataset.fieldGroup] = active.dataset.value;
    });

    try {
        await db.settings.save(category, data);
        if (!window._db_cache.retailerSettings) window._db_cache.retailerSettings = {};
        window._db_cache.retailerSettings[category] = data;
        const retailer = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(r => r.id === rid) || {}; })();
        db.activityLogs.add({ action: 'settings', detail: `Updated ${category} settings`, user_name: retailer.contact_person || 'Owner', icon: 'settings', color: 'slate' });
        if (window.toast) window.toast.success('Settings saved');
    } catch (err) {
        console.error('Failed to save settings:', err);
        if (window.toast) window.toast.error('Failed to save settings');
    }
};
