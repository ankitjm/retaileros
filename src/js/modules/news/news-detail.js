/**
 * News Detail — article preview for the right panel (desktop secondary)
 */
import { state } from '../../state.js';

const CAT_LABEL = { mobiles: 'MOBILES', gadgets: 'GADGETS', tech: 'TECH', general: 'NEWS' };
const CAT_COLOR = {
    mobiles: 'text-blue-600 border-blue-100 bg-blue-50',
    gadgets: 'text-violet-600 border-violet-100 bg-violet-50',
    tech:    'text-amber-700 border-amber-100 bg-amber-50',
    general: 'text-slate-500 border-slate-200 bg-slate-50',
};

function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    } catch { return dateStr; }
}

function relativeTime(dateStr) {
    if (!dateStr) return '';
    try {
        const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return `${Math.floor(diff / 86400)}d ago`;
    } catch { return ''; }
}

export function renderNewsDetail() {
    const news = window._newsCache || [];
    const selectedId = state.selectedNewsId;
    const article = selectedId ? news.find(a => a.id === selectedId) : null;

    // ── No article selected ──
    if (!article) {
        if (news.length === 0) {
            return `
                <div class="h-full flex items-center justify-center">
                    <div class="text-center px-8">
                        <span class="material-icons-outlined text-5xl text-slate-200 mb-3 block">newspaper</span>
                        <p class="text-[10px] font-black uppercase tracking-widest text-slate-300">Industry News</p>
                        <p class="text-[9px] text-slate-300 mt-1">Loads daily at 8 AM IST</p>
                    </div>
                </div>`;
        }

        // Mosaic of top articles with images
        const withImg  = news.filter(a => a.image_url).slice(0, 4);
        const noImg    = news.filter(a => !a.image_url).slice(0, 4);
        const top      = news.slice(0, 1)[0];

        return `
            <div class="flex flex-col h-full overflow-hidden">
                <!-- Header -->
                <div class="px-5 pt-5 pb-4 shrink-0">
                    <p class="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-1.5">Today's Top Stories</p>
                    <p class="text-[10px] text-slate-400">${new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                </div>

                <div class="flex-1 overflow-y-auto custom-scrollbar">
                    ${withImg.length > 0 ? `
                    <!-- Image mosaic -->
                    <div class="px-4 pb-4 grid grid-cols-2 gap-2">
                        ${withImg.map((a, i) => `
                        <div onclick="setSelectedNews('${a.id}')"
                             class="relative rounded-xl overflow-hidden cursor-pointer group ${i === 0 ? 'col-span-2' : ''}"
                             style="aspect-ratio:${i === 0 ? '16/7' : '4/3'}">
                            <img src="${a.image_url}" alt=""
                                 loading="lazy"
                                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                                 onerror="this.closest('[onclick]').style.display='none'">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-3">
                                <p class="text-[8px] font-bold text-white/60 uppercase tracking-wider mb-1">${a.source_name}</p>
                                <p class="text-[${i === 0 ? '11' : '10'}px] font-black text-white leading-snug line-clamp-2">${a.title}</p>
                            </div>
                        </div>`).join('')}
                    </div>` : ''}

                    ${noImg.length > 0 ? `
                    <!-- Text headlines -->
                    <div class="px-5 pb-5 space-y-3 border-t border-slate-100 pt-4">
                        <p class="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-3">More Headlines</p>
                        ${noImg.map(a => `
                        <div onclick="setSelectedNews('${a.id}')" class="cursor-pointer group flex items-start gap-2.5">
                            <div class="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0 group-hover:bg-slate-900 transition-colors"></div>
                            <div>
                                <p class="text-[11px] font-bold text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">${a.title}</p>
                                <p class="text-[9px] text-slate-300 mt-0.5">${a.source_name} · ${relativeTime(a.pub_date)}</p>
                            </div>
                        </div>`).join('')}
                    </div>` : ''}
                </div>
            </div>`;
    }

    // ── Article selected ──
    const cat    = article.category || 'general';
    const clr    = CAT_COLOR[cat] || CAT_COLOR.general;
    const label  = CAT_LABEL[cat] || 'NEWS';
    const img    = article.image_url;

    // Related articles (same category, different article)
    const related = news.filter(a => a.id !== article.id && a.category === cat).slice(0, 3);

    return `
        <div class="flex flex-col h-full overflow-hidden">

            <!-- Hero image or colour band -->
            ${img ? `
            <div class="relative shrink-0 overflow-hidden" style="aspect-ratio:16/9; max-height:200px">
                <img src="${img}" alt="${article.title.replace(/"/g, '&quot;')}"
                     loading="lazy"
                     class="w-full h-full object-cover"
                     onerror="this.closest('.relative').style.display='none'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <!-- Back button overlay -->
                <button onclick="setSelectedNews(null)"
                    class="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1.5 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-lg transition-colors">
                    <span class="material-icons-outlined text-sm text-white">arrow_back</span>
                    <span class="text-[8px] font-black text-white uppercase tracking-wider">Back</span>
                </button>
            </div>` : `
            <div class="shrink-0 px-5 pt-4 pb-2">
                <button onclick="setSelectedNews(null)" class="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-4">
                    <span class="material-icons-outlined text-sm">arrow_back</span>
                    All Headlines
                </button>
            </div>`}

            <!-- Scrollable body -->
            <div class="flex-1 overflow-y-auto custom-scrollbar">

                <!-- Article meta + title -->
                <div class="px-5 pt-4 pb-4 border-b border-slate-100">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded border ${clr}">${label}</span>
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">${article.source_name || ''}</span>
                        <span class="text-[9px] text-slate-300 ml-auto shrink-0">${relativeTime(article.pub_date)}</span>
                    </div>
                    <h2 class="text-[13px] font-black text-slate-900 leading-snug">${article.title}</h2>
                    <p class="text-[9px] text-slate-300 mt-2">${formatDate(article.pub_date)}</p>
                </div>

                <!-- Description -->
                <div class="px-5 py-4 border-b border-slate-100">
                    ${article.description
                        ? `<p class="text-[11px] text-slate-600 leading-relaxed">${article.description}</p>`
                        : `<p class="text-[11px] text-slate-300 italic">No preview available.</p>`}
                </div>

                <!-- CTA -->
                <div class="px-5 py-4 border-b border-slate-100">
                    <a href="${article.link}" target="_blank" rel="noopener noreferrer"
                       class="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-[9px] font-black uppercase tracking-widest rounded-xl transition-colors">
                        <span class="material-icons-outlined text-sm">open_in_new</span>
                        Read Full Article
                    </a>
                    <p class="text-[8px] text-slate-300 text-center mt-2 uppercase tracking-wider">${article.source_name}</p>
                </div>

                <!-- Related -->
                ${related.length > 0 ? `
                <div class="px-5 py-4">
                    <p class="text-[8px] font-black uppercase tracking-widest text-slate-300 mb-3">More ${label}</p>
                    <div class="space-y-3">
                        ${related.map(r => `
                        <div onclick="setSelectedNews('${r.id}')" class="flex gap-2.5 cursor-pointer group">
                            ${r.image_url ? `
                            <div class="w-12 h-9 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                                <img src="${r.image_url}" alt="" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                     onerror="this.closest('div').remove()">
                            </div>` : `<div class="w-12 h-9 rounded-lg bg-slate-50 shrink-0"></div>`}
                            <p class="text-[10px] font-bold text-slate-600 leading-snug group-hover:text-slate-900 transition-colors line-clamp-2">${r.title}</p>
                        </div>`).join('')}
                    </div>
                </div>` : ''}

            </div>
        </div>`;
}
