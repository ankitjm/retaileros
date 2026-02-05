import { createClient } from "@libsql/client";

// Database Configuration
// Note: In a production environment, these should be env variables

// App Database (Main application data)
const appConfig = {
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
};

// External Approved Retailers Database
const approvedConfig = {
    url: "libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAyODMwNTgsImlkIjoiZTVmNzQ5MjMtMDFiMi00YzkxLTlmMjEtZTJhZDIxMzBmMmZmIiwicmlkIjoiZjQzNTc5NTMtN2E2OS00M2UzLWE3MWUtNDcyYzk1MWM1NTRiIn0.8dOIX1XeNnJswuRGhacgPypg_h_9_-bRAwBxtKhBX7rJ4bQuEtSz9Z6igZsvGrWxDlsYlHMo4V3KKIuIZRSuBA",
};

// Initialize the Turso clients
const client = createClient(appConfig);
const approvedClient = createClient(approvedConfig);

/**
 * Universal query handler
 */
export async function query(sql, params = []) {
    try {
        const result = await client.execute({ sql, args: params });
        return result.rows;
    } catch (err) {
        console.error("DB Query Error:", err.message, "SQL:", sql, "Params:", params);
        throw err;
    }
}

/**
 * Transaction handler
 */
export async function transaction(statements) {
    try {
        const result = await client.batch(statements);
        return result;
    } catch (err) {
        console.error("DB Transaction Error:", err);
        throw err;
    }
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
                "INSERT INTO customers (id, name, phone, email, joined_at, dob, location, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [c.id, c.name, c.phone || '', c.email || '', new Date().toISOString(), c.dob || null, c.location || '', rid]
            );
        },
        getById: (id) => query("SELECT * FROM customers WHERE id = ?", [id])
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
        getByCustomerId: (customerId) => query("SELECT * FROM companies WHERE customer_id = ?", [customerId]),
        getById: (id) => query("SELECT * FROM companies WHERE id = ?", [id])
    },
    sales: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM sales WHERE retailer_id = ? ORDER BY date DESC", [rid])
                : query("SELECT * FROM sales ORDER BY date DESC");
        },
        getById: (id) => query("SELECT * FROM sales WHERE id = ?", [id]),
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
        update: (s) => query(
            `UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?,
             payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?,
             installation_required = ?, installation_date = ? WHERE id = ?`,
            [s.customer_id, s.customer_name, s.total_amount, s.status,
             s.payment_mode || null, s.payment_reference || null, s.gst_required || 0, s.company_id || null,
             s.installation_required || 0, s.installation_date || null, s.id]
        ),
        delete: (id) => query("DELETE FROM sales WHERE id = ?", [id]),
        addItem: (i) => query(
            `INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [i.id, i.sale_id, i.product_id, i.product_name, i.category, i.quantity, i.price,
             i.discount_type || null, i.discount_value || null, i.discount_amount || null, i.scheme_id || null, i.final_price || i.price,
             i.imei || null, i.serial_number || null, i.mac_id || null, i.manufacturing_date || null, i.installation_date || null, i.extra_fields || null]
        ),
        deleteItems: (saleId) => query("DELETE FROM sale_items WHERE sale_id = ?", [saleId]),
        getItems: (saleId) => query("SELECT * FROM sale_items WHERE sale_id = ?", [saleId])
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
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,
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
        getById: (id) => query("SELECT * FROM groups WHERE id = ?", [id]),
        delete: (id) => query("DELETE FROM groups WHERE id = ?", [id]),
        // Group members
        getMembers: (groupId) => query("SELECT * FROM group_members WHERE group_id = ?", [groupId]),
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
        removeMember: (groupId, customerId) => query(
            "DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",
            [groupId, customerId]
        ),
        deleteMembers: (groupId) => query("DELETE FROM group_members WHERE group_id = ?", [groupId])
    },
    automations: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM automations WHERE retailer_id = ? ORDER BY created_at DESC", [rid])
                : query("SELECT * FROM automations ORDER BY created_at DESC");
        },
        getById: (id) => query("SELECT * FROM automations WHERE id = ?", [id]),
        getByCustomer: (customerId) => query("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC", [customerId]),
        getBySale: (saleId) => query("SELECT * FROM automations WHERE sale_id = ?", [saleId]),
        add: (a) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [a.id, a.name, a.customer_id, a.customer_name, a.sale_id || null, a.status || 'active', a.created_at || new Date().toISOString(), rid]
            );
        },
        update: (id, updates) => query(
            `UPDATE automations SET status = ?, completed_at = ? WHERE id = ?`,
            [updates.status, updates.completed_at || null, id]
        ),
        delete: (id) => query("DELETE FROM automations WHERE id = ?", [id]),
        // Automation messages
        getMessages: (automationId) => query("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset", [automationId]),
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
        updateMessageStatus: (id, status, sentAt) => query(
            `UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?`,
            [status, sentAt, id]
        ),
        deleteMessages: (automationId) => query("DELETE FROM automation_messages WHERE automation_id = ?", [automationId])
    },
    communications: {
        getAll: () => {
            const rid = getCurrentRetailerId();
            return rid
                ? query("SELECT * FROM communication_log WHERE retailer_id = ? ORDER BY sent_at DESC", [rid])
                : query("SELECT * FROM communication_log ORDER BY sent_at DESC");
        },
        getByCustomer: (customerId) => query("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC", [customerId]),
        add: (c) => {
            const rid = getCurrentRetailerId();
            return query(
                `INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [c.id, c.customer_id, c.type, c.direction || 'outgoing', c.content, c.sent_at || new Date().toISOString(),
                 c.automation_id || null, c.sale_id || null, c.status || 'sent', rid]
            );
        },
        updateStatus: (id, status) => query("UPDATE communication_log SET status = ? WHERE id = ?", [status, id])
    },
    approved: {
        // Check if mobile number is approved
        checkApproval: async (mobileNumber) => {
            const sql = `
                SELECT * FROM retailers
                WHERE MobileNumber = ?
                AND process_status = 'approved'
                AND Approval_Status = 'Approved'
                LIMIT 1
            `;
            try {
                const result = await approvedClient.execute({ sql, args: [mobileNumber] });
                return result.rows.length > 0 ? result.rows[0] : null;
            } catch (err) {
                console.error("Error checking approval:", err.message);
                throw err;
            }
        },
        // Get full retailer details by mobile
        getByMobile: async (mobileNumber) => {
            const sql = "SELECT * FROM retailers WHERE MobileNumber = ? LIMIT 1";
            try {
                const result = await approvedClient.execute({ sql, args: [mobileNumber] });
                return result.rows.length > 0 ? result.rows[0] : null;
            } catch (err) {
                console.error("Error fetching retailer:", err.message);
                throw err;
            }
        }
    },
    retailers: {
        // Check if retailer already registered
        isRegistered: async (mobileNumber) => {
            const sql = "SELECT id FROM retailers WHERE mobile_number = ? LIMIT 1";
            const result = await client.execute({ sql, args: [mobileNumber] });
            return result.rows.length > 0;
        },
        // Generate unique retailer code
        generateCode: async () => {
            // Format: ROS-YYYYMMDD-XXXX (e.g., ROS-20260205-0001)
            const date = new Date();
            const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');

            // Get today's count
            const sql = "SELECT COUNT(*) as count FROM retailers WHERE retailer_code LIKE ?";
            const result = await client.execute({
                sql,
                args: [`ROS-${dateStr}-%`]
            });
            const count = parseInt(result.rows[0].count) + 1;
            const sequence = count.toString().padStart(4, '0');

            return `ROS-${dateStr}-${sequence}`;
        },
        // Add new retailer from approved data
        add: async (approvedData) => {
            const retailerCode = await db.retailers.generateCode();
            const id = `retailer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            const sql = `
                INSERT INTO retailers (
                    id, retailer_code, retailer_name, contact_person, email,
                    mobile_number, phone_number, address_line_1, address_line_2,
                    country_name, state_name, city_name, district_name, area_name, pin_code,
                    vat_number, pan_number, bank_name, bank_account_holder, bank_account_number,
                    bank_branch, bank_ifsc, parent_retailer_name, nd_name, rds_name,
                    salesman_name, reporting_to_name, csa_on_counter, counter_potential_volume,
                    counter_potential_value, retailer_category, retailer_category1,
                    retailer_classification, dob, creation_date, approval_remarks,
                    external_db_id, external_approval_status, external_process_status,
                    status, onboarded_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `;

            await client.execute({
                sql,
                args: [
                    id,
                    retailerCode,
                    approvedData.RetailerName,
                    approvedData.ContactPerson,
                    approvedData.Email,
                    approvedData.MobileNumber,
                    approvedData.PhoneNumber,
                    approvedData.Address_Line_1,
                    approvedData.Address_Line_2,
                    approvedData.CountryName,
                    approvedData.StateName,
                    approvedData.CityName,
                    approvedData.DistrictName,
                    approvedData.AreaName,
                    approvedData.PinCode,
                    approvedData.VATNnumber,
                    approvedData.PAN_Number,
                    approvedData.Name_of_Bank,
                    approvedData.Name_of_Bank_Account_Holder,
                    approvedData.Bank_Account_Number,
                    approvedData.Branch_Location,
                    approvedData.IFSC_Code,
                    approvedData.ParentRetailerName,
                    approvedData.NDName,
                    approvedData.RDSName,
                    approvedData.SalesmanName,
                    approvedData.Reporting_To_Name,
                    approvedData.CSA_on_Counter,
                    approvedData.Counter_Potential_in_Volume,
                    approvedData.Counter_Potential_in_Value,
                    approvedData.Retailer_Category,
                    approvedData.RETAILER_CATEGORY1,
                    approvedData.RETAILER_CLASSIFICATION,
                    approvedData.DOB,
                    approvedData.Creation_Date,
                    approvedData.ApprovalRemarks,
                    approvedData.id,
                    approvedData.Approval_Status,
                    approvedData.process_status,
                    'active'
                ]
            });

            return { id, retailerCode };
        },
        // Get retailer by ID
        getById: async (id) => {
            const sql = "SELECT * FROM retailers WHERE id = ?";
            const result = await client.execute({ sql, args: [id] });
            return result.rows[0] || null;
        },
        // Get all retailers
        getAll: async () => {
            const sql = "SELECT * FROM retailers ORDER BY onboarded_at DESC";
            const result = await client.execute(sql);
            return result.rows;
        }
    }
};
