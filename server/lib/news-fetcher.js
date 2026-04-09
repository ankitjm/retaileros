/**
 * News Fetcher — daily consumer electronics news for Indian retailers
 * Fetches RSS feeds, parses articles + images, stores in news_cache table.
 * Called at 8am IST via node-cron and on server start if cache is empty/stale.
 */
import { pool } from '../db/client.js';

const NEWS_SOURCES = [
    { name: 'GizmoChina',        url: 'https://www.gizmochina.com/feed/',             category: 'mobiles'   },
    { name: 'Android Authority', url: 'https://www.androidauthority.com/feed/',       category: 'mobiles'   },
    { name: '9to5Google',        url: 'https://9to5google.com/feed/',                 category: 'mobiles'   },
    { name: 'SamMobile',         url: 'https://www.sammobile.com/feed/',              category: 'mobiles'   },
    { name: '9to5Mac',           url: 'https://9to5mac.com/feed/',                    category: 'gadgets'   },
    { name: 'Phandroid',         url: 'https://phandroid.com/feed/',                  category: 'mobiles'   },
    { name: 'TechCrunch',        url: 'https://techcrunch.com/feed/',                 category: 'tech'      },
];

// Strip CDATA and HTML tags, return plain text
function extractTag(xml, tag) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
    const m = xml.match(regex);
    if (!m) return '';
    return m[1]
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
        .trim();
}

function extractLink(xml) {
    const m1 = xml.match(/<link[^>]+href=["']([^"']+)["']/i);
    if (m1) return m1[1];
    const m2 = xml.match(/<link[^>]*>([^<]+)<\/link>/i);
    if (m2) return m2[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim();
    return '';
}

/**
 * Extract the best image URL from an RSS item block.
 * Priority: media:content url > media:thumbnail url > enclosure url > first <img src> in description/content
 */
function extractImage(raw) {
    // 1. <media:content medium="image" url="..."> or <media:content url="...">
    const mc = raw.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i);
    if (mc) return mc[1];

    // 2. <media:thumbnail url="...">
    const mt = raw.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
    if (mt) return mt[1];

    // 3. <enclosure url="..." type="image/...">
    const enc = raw.match(/<enclosure[^>]+type=["']image\/[^"']*["'][^>]+url=["']([^"']+)["']/i)
             || raw.match(/<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\/[^"']*["']/i);
    if (enc) return enc[1];

    // 4. First <img src="..."> embedded in description/content CDATA — skip tiny icons/GIFs
    const descMatch = raw.match(/<description[^>]*>([\s\S]*?)<\/description>/i)
                   || raw.match(/<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i);
    if (descMatch) {
        const html = descMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
        const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
        for (const m of imgMatches) {
            const src = m[1];
            // Skip tiny tracking pixels, icons, and svg
            if (src.includes('.gif')) continue;
            if (src.includes('.svg')) continue;
            if (src.includes('1x1') || src.includes('pixel') || src.includes('spacer')) continue;
            if (src.length > 10) return src;
        }
    }

    return null;
}

function parseRSS(xml, sourceName, category) {
    const items = [];
    const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
        const raw = match[1];
        const title = extractTag(raw, 'title');
        const link = extractLink(raw) || extractTag(raw, 'link');
        const description = extractTag(raw, 'description').substring(0, 400);
        const pubDate = extractTag(raw, 'pubDate') || extractTag(raw, 'dc:date') || new Date().toISOString();
        const imageUrl = extractImage(raw);
        if (title && link) {
            items.push({ title, link, description, pubDate, imageUrl, sourceName, category });
        }
    }
    return items.slice(0, 10);
}

export async function fetchAndCacheNews() {
    console.log('[News] Starting daily news fetch...');
    const allArticles = [];

    for (const source of NEWS_SOURCES) {
        try {
            const res = await fetch(source.url, {
                signal: AbortSignal.timeout(12000),
                headers: {
                    'User-Agent': 'Mozilla/5.0 (compatible; RetailerOS/1.0; +https://khosha.cloud)',
                    'Accept': 'application/rss+xml, application/xml, text/xml, */*'
                }
            });
            if (!res.ok) {
                console.warn(`[News] ${source.name}: HTTP ${res.status}`);
                continue;
            }
            const xml = await res.text();
            const items = parseRSS(xml, source.name, source.category);
            const withImg = items.filter(i => i.imageUrl).length;
            allArticles.push(...items);
            console.log(`[News] ${source.name}: ${items.length} articles, ${withImg} with images`);
        } catch (e) {
            console.warn(`[News] ${source.name} failed: ${e.message}`);
        }
    }

    if (allArticles.length === 0) {
        console.warn('[News] No articles fetched — cache unchanged');
        return 0;
    }

    try {
        await pool.query('DELETE FROM news_cache');
        for (const a of allArticles) {
            const id = `news_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
            await pool.query(
                `INSERT INTO news_cache (id, title, description, link, source_name, pub_date, category, image_url, fetched_at)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW()::text)`,
                [id, a.title, a.description, a.link, a.sourceName, a.pubDate, a.category, a.imageUrl || null]
            );
        }
        const withImg = allArticles.filter(a => a.imageUrl).length;
        console.log(`[News] Cached ${allArticles.length} articles (${withImg} with images)`);
        return allArticles.length;
    } catch (e) {
        console.error('[News] DB write error:', e.message);
        return 0;
    }
}

/** Fetch only if cache is empty or older than 6 hours */
export async function fetchIfStale() {
    try {
        const { rows } = await pool.query(
            `SELECT fetched_at FROM news_cache ORDER BY fetched_at DESC LIMIT 1`
        );
        if (rows.length === 0) {
            return fetchAndCacheNews();
        }
        const age = Date.now() - new Date(rows[0].fetched_at).getTime();
        if (age > 6 * 60 * 60 * 1000) {
            return fetchAndCacheNews();
        }
        console.log('[News] Cache is fresh, skipping fetch');
        return 0;
    } catch (e) {
        console.error('[News] Stale-check error:', e.message);
        return fetchAndCacheNews();
    }
}
