/**
 * News List — consumer electronics industry news for Indian retailers
 */
import { state } from '../../state.js';

const CAT_LABEL = { mobiles: 'MOBILES', gadgets: 'GADGETS', tech: 'TECH', general: 'NEWS' };
const CAT_COLOR = {
    mobiles: 'bg-blue-50 text-blue-600',
    gadgets: 'bg-violet-50 text-violet-600',
    tech:    'bg-amber-50 text-amber-700',
    general: 'bg-slate-100 text-slate-500',
};
const CAT_DOT = {
    mobiles: 'bg-blue-400',
    gadgets: 'bg-violet-400',
    tech:    'bg-amber-400',
    general: 'bg-slate-300',
};

function relativeTime(dateStr) {
    if (!dateStr) return '';
    try {
        const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        const d = Math.floor(diff / 86400);
        return d === 1 ? 'yesterday' : `${d}d ago`;
    } catch { return ''; }
}

function thumb(url) {
    if (!url) return null;
    // Prefer smaller variant from WordPress srcset patterns
    return url.replace(/-\d+x\d+(\.\w+)$/, '$1'); // strip size suffix to get original
}

function renderNewsCard(article, isSelected, index) {
    const cat   = article.category || 'general';
    const label = CAT_LABEL[cat] || 'NEWS';
    const color = CAT_COLOR[cat] || CAT_COLOR.general;
    const dot   = CAT_DOT[cat] || CAT_DOT.general;
    const time  = relativeTime(article.pub_date);
    const img   = article.image_url;
    const sel   = isSelected;

    // Featured card: first article OR first article with image — full-width with big image
    const isFeatured = index === 0;

    if (isFeatured && img) {
        return `
        <div onclick="setSelectedNews('${article.id}')"
             class="cursor-pointer group border-b border-slate-100 ${sel ? 'bg-slate-950' : 'hover:bg-slate-50'} transition-colors">
            <!-- Hero image -->
            <div class="relative overflow-hidden" style="aspect-ratio:16/9">
                <img src="${img}" alt="${article.title.replace(/"/g, '&quot;')}"
                     loading="lazy"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${sel ? 'opacity-70' : ''}"
                     onerror="this.closest('.relative').style.display='none'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">${label}</span>
                        <span class="text-[8px] font-bold text-white/70 uppercase tracking-wider">${article.source_name || ''}</span>
                        ${time ? `<span class="text-[8px] text-white/50 ml-auto">${time}</span>` : ''}
                    </div>
                    <p class="text-[12px] font-black leading-snug text-white line-clamp-2 drop-shadow">${article.title}</p>
                </div>
            </div>
            ${article.description ? `
            <div class="px-4 py-2.5">
                <p class="text-[10px] leading-relaxed line-clamp-2 ${sel ? 'text-white/60' : 'text-slate-400'}">${article.description}</p>
            </div>` : ''}
        </div>`;
    }

    // Standard card: text left + small thumbnail right
    return `
        <div onclick="setSelectedNews('${article.id}')"
             class="px-4 py-3 border-b border-slate-100 cursor-pointer transition-colors ${sel ? 'bg-slate-950' : 'hover:bg-slate-50/80'} group">
            <div class="flex items-start gap-3">
                <!-- Text -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5 mb-1">
                        <span class="w-1.5 h-1.5 rounded-full ${sel ? 'bg-white/40' : dot} shrink-0"></span>
                        <span class="text-[8px] font-black uppercase tracking-widest ${sel ? 'text-white/50' : 'text-slate-400'}">${article.source_name || ''}</span>
                        ${time ? `<span class="text-[8px] ${sel ? 'text-white/30' : 'text-slate-300'} ml-auto shrink-0">${time}</span>` : ''}
                    </div>
                    <p class="text-[11px] font-bold leading-snug line-clamp-2 ${sel ? 'text-white' : 'text-slate-900'}">${article.title}</p>
                    ${article.description && !img ? `<p class="text-[10px] leading-relaxed mt-1 line-clamp-1 ${sel ? 'text-white/50' : 'text-slate-400'}">${article.description}</p>` : ''}
                </div>
                <!-- Thumbnail -->
                ${img ? `
                <div class="shrink-0 w-[62px] h-[48px] rounded-lg overflow-hidden bg-slate-100">
                    <img src="${img}" alt=""
                         loading="lazy"
                         class="w-full h-full object-cover"
                         onerror="this.closest('div').style.display='none'">
                </div>` : `
                <div class="shrink-0 w-[62px] h-[48px] rounded-lg ${sel ? 'bg-white/5' : 'bg-slate-50'} flex items-center justify-center">
                    <span class="text-[8px] font-black uppercase ${sel ? 'text-white/20' : 'text-slate-200'} tracking-wider leading-tight text-center px-1">${label}</span>
                </div>`}
            </div>
        </div>`;
}

function renderLoadingState() {
    return [
        // Featured skeleton
        `<div class="border-b border-slate-100 animate-pulse">
            <div class="bg-slate-100" style="aspect-ratio:16/9"></div>
            <div class="px-4 py-3 space-y-1.5">
                <div class="h-3 w-full bg-slate-100 rounded"></div>
                <div class="h-3 w-3/4 bg-slate-100 rounded"></div>
            </div>
        </div>`,
        // Standard skeletons
        ...Array.from({ length: 6 }, () => `
        <div class="px-4 py-3 border-b border-slate-100 animate-pulse flex gap-3">
            <div class="flex-1 space-y-1.5">
                <div class="h-2 w-20 bg-slate-100 rounded"></div>
                <div class="h-3 w-full bg-slate-100 rounded"></div>
                <div class="h-3 w-2/3 bg-slate-100 rounded"></div>
            </div>
            <div class="w-[62px] h-[48px] bg-slate-100 rounded-lg shrink-0"></div>
        </div>`)
    ].join('');
}

export function renderNewsList(mode = 'desktop-primary') {
    const news = window._newsCache || [];
    const selectedId = state.selectedNewsId;

    const header = `
        <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white sticky top-0 z-10">
            <div class="flex items-center gap-2">
                <span class="material-icons-outlined text-[15px] text-slate-400">newspaper</span>
                <h2 class="text-[10px] font-black uppercase tracking-widest text-slate-900">Industry News</h2>
                ${news.length > 0 ? `<span class="text-[8px] font-bold text-slate-300 uppercase">${news.length}</span>` : ''}
            </div>
            <div class="flex items-center gap-2">
                ${window._newsFetchedAt ? `<span class="text-[8px] font-bold text-slate-300 hidden sm:block">Updated ${relativeTime(window._newsFetchedAt)}</span>` : ''}
                <button onclick="refreshNews()" title="Refresh"
                    class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-slate-700 transition-colors rounded-lg hover:bg-slate-50">
                    <span class="material-icons-outlined text-[15px]" id="news-refresh-icon">refresh</span>
                </button>
            </div>
        </div>`;

    if (window._newsLoading) {
        return `<div class="flex flex-col h-full overflow-hidden">${header}<div class="overflow-y-auto flex-1">${renderLoadingState()}</div></div>`;
    }

    if (news.length === 0) {
        return `
            <div class="flex flex-col h-full overflow-hidden">
                ${header}
                <div class="flex-1 flex items-center justify-center text-center px-8">
                    <div>
                        <span class="material-icons-outlined text-4xl text-slate-200 mb-3 block">newspaper</span>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">No news yet</p>
                        <p class="text-[9px] text-slate-300 mb-4">Fetches daily at 8 AM IST</p>
                        <button onclick="refreshNews()" class="px-4 py-2 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-700 transition-colors">
                            Fetch now
                        </button>
                    </div>
                </div>
            </div>`;
    }

    const cards = news.map((a, i) => renderNewsCard(a, a.id === selectedId, i)).join('');

    return `
        <div class="flex flex-col h-full overflow-hidden">
            ${header}
            <div class="overflow-y-auto flex-1 custom-scrollbar">
                ${cards}
                <div class="p-4 text-center">
                    <p class="text-[8px] font-bold text-slate-200 uppercase tracking-widest">Consumer electronics · India market</p>
                </div>
            </div>
        </div>`;
}

/** Horizontal-scroll strip for mobile launcher */
export function renderNewsStrip() {
    const news = window._newsCache || [];
    if (news.length === 0) return '';

    const cards = news.slice(0, 12).map(a => {
        const img = a.image_url;
        const cat = a.category || 'general';
        const time = relativeTime(a.pub_date);
        return `
        <a href="${a.link}" target="_blank" rel="noopener noreferrer"
           class="shrink-0 w-[180px] bg-white border border-slate-100 rounded-2xl overflow-hidden flex flex-col hover:border-slate-300 hover:shadow-sm transition-all active:scale-[0.98]">
            ${img ? `
            <div class="overflow-hidden" style="aspect-ratio:16/9">
                <img src="${img}" alt="" loading="lazy" class="w-full h-full object-cover"
                     onerror="this.closest('div').remove()">
            </div>` : `
            <div class="flex items-center justify-center bg-slate-50" style="aspect-ratio:16/9">
                <span class="text-[8px] font-black uppercase tracking-widest text-slate-200">${CAT_LABEL[cat] || 'NEWS'}</span>
            </div>`}
            <div class="p-2.5 flex flex-col gap-1 flex-1">
                <p class="text-[9px] font-bold text-slate-900 leading-snug line-clamp-2 flex-1">${a.title}</p>
                <div class="flex items-center gap-1.5 mt-auto">
                    <span class="w-1 h-1 rounded-full ${CAT_DOT[cat] || 'bg-slate-300'} shrink-0"></span>
                    <span class="text-[8px] text-slate-400 truncate">${a.source_name}</span>
                    ${time ? `<span class="text-[8px] text-slate-300 ml-auto shrink-0">${time}</span>` : ''}
                </div>
            </div>
        </a>`;
    }).join('');

    return `
        <div class="mt-5 -mx-1">
            <div class="px-1 mb-2.5 flex items-center gap-2">
                <span class="material-icons-outlined text-sm text-slate-400">newspaper</span>
                <p class="text-[9px] font-black uppercase tracking-widest text-slate-500">Industry News</p>
                <span class="text-[8px] text-slate-300 font-bold">${news.length}</span>
            </div>
            <div class="flex gap-2.5 overflow-x-auto pb-3 px-1" style="scrollbar-width:none;-webkit-overflow-scrolling:touch">
                ${cards}
            </div>
        </div>`;
}
