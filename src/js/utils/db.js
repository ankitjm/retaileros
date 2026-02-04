import { createClient } from "@libsql/client";

// Database Configuration
// Note: In a production environment, these should be env variables
const config = {
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
};

// Initialize the Turso client
const client = createClient(config);

/**
 * Universal query handler
 */
export async function query(sql, params = []) {
    try {
        const result = await client.execute({ sql, args: params });
        return result.rows;
    } catch (err) {
        console.error("DB Query Error:", err, "SQL:", sql);
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

// Module specific helpers (Examples)
export const db = {
    clients: {
        getAll: () => query("SELECT * FROM customers"),
        add: (c) => query(
            "INSERT INTO customers (id, name, phone, email, joined_at, dob, location) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [c.id, c.name, c.phone, c.email, new Date().toISOString(), c.dob, c.location]
        )
    },
    sales: {
        getAll: () => query("SELECT * FROM sales ORDER BY date DESC"),
        add: (s) => query(
            "INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)",
            [s.id, s.customer_id, s.customer_name, s.date, s.total_amount, s.status]
        ),
        addItem: (i) => query(
            "INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [i.id, i.sale_id, i.product_id, i.product_name, i.category, i.quantity, i.price, i.imei]
        )
    },
    inventory: {
        getProducts: () => query("SELECT * FROM products")
    }
};
