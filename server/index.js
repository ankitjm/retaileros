import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cron from 'node-cron';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { authRouter } from './routes/auth.js';
import { dbRouter } from './routes/db.js';
import { whatsappRouter } from './routes/whatsapp.js';
import { whatsappOwnRouter } from './routes/whatsapp-own.js';
import { openaiRouter } from './routes/openai.js';
import { newsRouter } from './routes/news.js';
import { apiKeysRouter } from './routes/api-keys.js';
import { publicApiRouter } from './routes/public-api.js';
import { restoreAllSessions } from './lib/whatsapp-manager.js';
import { initSchema } from './db/client.js';
import { fetchAndCacheNews, fetchIfStale } from './lib/news-fetcher.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Security headers
app.use(helmet({
    contentSecurityPolicy: false // Vite SPA handles its own CSP
}));

// Security: lock CORS to frontend origins
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173').split(',').map(s => s.trim());
app.use(cors({
    origin: (origin, cb) => {
        if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
        cb(new Error('CORS blocked'));
    },
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));

// Base path for Nginx reverse proxy (retaileros.in/app → Express)
const BASE = '/app';

// API routes — mounted both at /api/* (dev) and /app/api/* (prod behind Nginx)
function mountApi(prefix) {
    app.use(`${prefix}/api/auth`, authRouter);
    app.use(`${prefix}/api/news`, newsRouter);
    app.use(`${prefix}/api/api-keys`, apiKeysRouter);
    app.use(`${prefix}/api`, dbRouter);
    app.use(`${prefix}/api/whatsapp/own`, whatsappOwnRouter);
    app.use(`${prefix}/api/whatsapp`, whatsappRouter);
    app.use(`${prefix}/api/openai`, openaiRouter);
    app.get(`${prefix}/api/health`, (req, res) => {
        res.json({ ok: true, ts: new Date().toISOString() });
    });
}
mountApi('');     // /api/* — direct access & Vite dev proxy
mountApi(BASE);  // /app/api/* — production behind Nginx

// Public API v1 — external integrations (API key auth, not JWT)
// Separate from the app API, no CORS restriction
app.use('/v1', publicApiRouter);
app.use(`${BASE}/v1`, publicApiRouter);

// Serve Vite build in production
const distPath = join(__dirname, '../dist');
app.use(`${BASE}`, express.static(distPath));
app.use(express.static(distPath)); // fallback for direct access
app.get(`${BASE}/*`, (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
});
app.get('*', (req, res) => {
    res.sendFile(join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3006;

(async () => {
    await initSchema();
    app.listen(PORT, () => {
        console.log(`RetailerOS PRODUCTION server running on port ${PORT}`);
        console.log(`Frontend origins: ${allowedOrigins.join(', ')}`);
        // Reconnect any retailers who were linked before server restart
        restoreAllSessions().catch(e => console.warn('[WA] restoreAllSessions error:', e.message));
        // Seed news cache on startup if empty or stale
        fetchIfStale().catch(e => console.warn('[News] Startup fetch error:', e.message));
    });

    // Daily 8:00 AM IST — fetch fresh consumer electronics news
    cron.schedule('0 8 * * *', () => {
        fetchAndCacheNews().catch(e => console.warn('[News] Cron fetch error:', e.message));
    }, { timezone: 'Asia/Kolkata' });

    console.log('[News] Cron scheduled: daily 8:00 AM IST');
})();
