/**
 * News routes — serves cached consumer electronics news articles
 * Public endpoint (no JWT required — public news data)
 */
import express from 'express';
import { pool } from '../db/client.js';

export const newsRouter = express.Router();

// GET /api/news — return all cached articles, newest first
newsRouter.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query(
            `SELECT id, title, description, link, source_name, pub_date, category, image_url, fetched_at
               FROM news_cache
           ORDER BY pub_date DESC
              LIMIT 60`
        );
        res.json({ articles: rows, fetched_at: rows[0]?.fetched_at || null });
    } catch (e) {
        res.status(500).json({ error: e.message, articles: [] });
    }
});
