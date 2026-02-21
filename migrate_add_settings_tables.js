import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA",
});

async function migrate() {
    console.log("🔧 Adding settings tables: retailer_settings, team_members, team_roles, retailer_plugins, activity_logs...");

    try {
        // 1. Retailer Settings (JSON per category)
        await client.execute(`
            CREATE TABLE IF NOT EXISTS retailer_settings (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                category TEXT NOT NULL,
                settings TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, category)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailer_settings_rid ON retailer_settings(retailer_id)`);
        console.log("✅ retailer_settings table created");

        // 2. Team Members
        await client.execute(`
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
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_team_members_rid ON team_members(retailer_id)`);
        console.log("✅ team_members table created");

        // 3. Team Roles
        await client.execute(`
            CREATE TABLE IF NOT EXISTS team_roles (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                name TEXT NOT NULL,
                permissions TEXT NOT NULL,
                description TEXT,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, name)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_team_roles_rid ON team_roles(retailer_id)`);
        console.log("✅ team_roles table created");

        // 4. Retailer Plugins
        await client.execute(`
            CREATE TABLE IF NOT EXISTS retailer_plugins (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                plugin_key TEXT NOT NULL,
                status TEXT DEFAULT 'available',
                config TEXT,
                connected_at TEXT,
                updated_at TEXT NOT NULL,
                UNIQUE(retailer_id, plugin_key)
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_retailer_plugins_rid ON retailer_plugins(retailer_id)`);
        console.log("✅ retailer_plugins table created");

        // 5. Activity Logs
        await client.execute(`
            CREATE TABLE IF NOT EXISTS activity_logs (
                id TEXT PRIMARY KEY,
                retailer_id TEXT NOT NULL,
                action TEXT NOT NULL,
                detail TEXT,
                user_name TEXT,
                icon TEXT,
                color TEXT,
                created_at TEXT NOT NULL
            )
        `);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_activity_logs_rid ON activity_logs(retailer_id)`);
        await client.execute(`CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(retailer_id, created_at)`);
        console.log("✅ activity_logs table created");

        console.log("\n🎉 Migration complete! 5 settings tables added with retailer_id + indexes.");
    } catch (err) {
        console.error("❌ Migration failed:", err);
    }
}

migrate();
