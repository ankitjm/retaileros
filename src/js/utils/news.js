/**
 * News utility — fetches news from backend and caches in window._newsCache
 * Called once after login/sync; cached articles available for all renders.
 */

window._newsCache = window._newsCache || [];
window._newsLoading = false;
window._newsFetchedAt = null;

export async function loadNews(force = false) {
    // Skip if already loaded and not forced
    if (!force && window._newsCache.length > 0) return;

    window._newsLoading = true;
    if (window.triggerRender) window.triggerRender(false);

    try {
        const base = window._apiBase || '';
        const res = await fetch(`${base}/api/news`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        window._newsCache = data.articles || [];
        window._newsFetchedAt = data.fetched_at || new Date().toISOString();
    } catch (e) {
        console.warn('[News] Failed to load news:', e.message);
        window._newsCache = [];
    } finally {
        window._newsLoading = false;
        if (window.triggerRender) window.triggerRender(false);
    }
}

// Manual refresh triggered by the refresh button in the news header
window.refreshNews = function () {
    const icon = document.getElementById('news-refresh-icon');
    if (icon) icon.classList.add('animate-spin');
    loadNews(true).then(() => {
        if (icon) icon.classList.remove('animate-spin');
    });
};
