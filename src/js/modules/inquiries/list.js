import { state } from '../../state.js';

// Module-level filter/sort/search state
let filterMode  = 'all';     // all | pending | contacted | won | lost
let sortMode    = 'newest';  // newest | oldest | budget | urgent
let openOnly    = false;     // quick toggle: open inquiries only
let searchQuery = '';

window._setInqFilter = (mode) => { filterMode = mode; window.triggerRender(false); };
window._setInqSort   = (mode) => { sortMode   = mode; window.triggerRender(false); };
window._setInqOpen   = (open) => { openOnly   = open; window.triggerRender(false); };

window.updateInquirySearch = (query) => {
    const input = document.getElementById('inquiry-search-input');
    const pos = input?.selectionStart || query.length;
    searchQuery = query;
    window.triggerRender(false);
    setTimeout(() => {
        const ni = document.getElementById('inquiry-search-input');
        if (ni) { ni.focus(); ni.setSelectionRange(pos, pos); }
    }, 0);
};

function daysPending(dateStr) {
    if (!dateStr) return 0;
    return Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
}

function urgencyColor(days, status) {
    const s = (status || '').toUpperCase();
    if (s === 'FULFILLED' || s === 'LOST SALE') return 'text-slate-300';
    if (days > 7) return 'text-red-500';
    if (days > 3) return 'text-amber-500';
    if (days >= 1) return 'text-slate-500';
    return 'text-emerald-500';
}

function urgencyLabel(days, status) {
    const s = (status || '').toUpperCase();
    if (s === 'FULFILLED') return 'won';
    if (s === 'LOST SALE') return 'lost';
    if (days === 0) return 'today';
    if (days === 1) return '1d';
    return `${days}d`;
}

function extractBudget(request) {
    if (!request) return null;
    const m = request.match(/[₹₨]\s?[\d,]+/) || request.match(/\b[\d]{4,6}\b/);
    return m ? m[0].replace(/\s/g, '') : null;
}

function statusBadge(status) {
    switch ((status || '').toUpperCase()) {
        case 'PENDING':   return 'bg-amber-50 text-amber-700 border-amber-200';
        case 'CONTACTED': return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'FULFILLED': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        case 'LOST SALE': return 'bg-slate-100 text-slate-400 border-slate-200';
        default:          return 'bg-slate-100 text-slate-400 border-slate-200';
    }
}

function statusLabel(status) {
    switch ((status || '').toUpperCase()) {
        case 'FULFILLED': return 'Won';
        case 'LOST SALE': return 'Lost';
        default: return status || 'Unknown';
    }
}

export function renderInquiriesList() {
    const cache = window.getCache();
    let all = cache.inquiries || [];

    // Quick open-only toggle (pre-filter before counts)
    if (openOnly) {
        all = all.filter(i => {
            const s = (i.status || '').toUpperCase();
            return s === 'PENDING' || s === 'CONTACTED';
        });
    }

    // Counts for filter chips (on current open-only subset)
    const counts = {
        all:       all.length,
        pending:   all.filter(i => (i.status || '').toUpperCase() === 'PENDING').length,
        contacted: all.filter(i => (i.status || '').toUpperCase() === 'CONTACTED').length,
        won:       all.filter(i => (i.status || '').toUpperCase() === 'FULFILLED').length,
        lost:      all.filter(i => (i.status || '').toUpperCase() === 'LOST SALE').length,
    };

    // Apply status filter
    let filtered = filterMode === 'all' ? [...all] : all.filter(i => {
        const s = (i.status || '').toUpperCase();
        if (filterMode === 'pending')   return s === 'PENDING';
        if (filterMode === 'contacted') return s === 'CONTACTED';
        if (filterMode === 'won')       return s === 'FULFILLED';
        if (filterMode === 'lost')      return s === 'LOST SALE';
        return true;
    });

    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(i =>
            (i.product_name || '').toLowerCase().includes(q) ||
            (i.customer_name || '').toLowerCase().includes(q) ||
            (i.request || '').toLowerCase().includes(q)
        );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
        if (sortMode === 'oldest') return new Date(a.created_at) - new Date(b.created_at);
        if (sortMode === 'budget') {
            const aB = parseInt((extractBudget(a.request) || '0').replace(/[^0-9]/g, '')) || 0;
            const bB = parseInt((extractBudget(b.request) || '0').replace(/[^0-9]/g, '')) || 0;
            return bB - aB;
        }
        if (sortMode === 'urgent') {
            const urgency = (i) => {
                const s = (i.status || '').toUpperCase();
                if (s === 'FULFILLED' || s === 'LOST SALE') return 9999;
                return daysPending(i.created_at);
            };
            return urgency(b) - urgency(a);
        }
        // newest (default)
        return new Date(b.created_at) - new Date(a.created_at);
    });

    const tab = (key, label) => {
        const active = filterMode === key;
        const n = counts[key];
        return `<button onclick="window._setInqFilter('${key}')"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                ${active ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">
            ${label}${n > 0 ? `<span class="${active ? 'opacity-50' : 'opacity-70'} font-black">${n}</span>` : ''}
        </button>`;
    };

    const sortBtn = (mode, label) => {
        const active = sortMode === mode;
        return `<button onclick="window._setInqSort('${mode}')" class="px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${active ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}">${label}</button>`;
    };

    const toggleBtn = (isOpen, label) => {
        const active = openOnly === isOpen;
        return `<button onclick="window._setInqOpen(${isOpen})" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide ${active ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}">${label}</button>`;
    };

    return `
        <!-- Sticky Controls -->
        <div class="sticky top-0 z-30 bg-white border-b border-slate-100 px-8 pt-2.5 pb-2.5 shadow-sm">
            <div class="flex items-center gap-2">
                <div class="flex bg-slate-100 p-0.5 rounded-xl shrink-0">
                    ${toggleBtn(false, 'All')}
                    ${toggleBtn(true, 'Open')}
                </div>
                <div class="relative flex-1">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400" style="font-size:18px">search</span>
                    <input type="text"
                           id="inquiry-search-input"
                           value="${searchQuery}"
                           oninput="window.updateInquirySearch(this.value)"
                           placeholder="Search by name, product..."
                           class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>
            </div>
        </div>

        <!-- Scrollable Content -->
        <div class="px-8 pt-3 pb-6">
            <!-- Filter chips -->
            <div class="flex gap-1 overflow-x-auto scrollbar-none mb-4">
                ${tab('all', 'All')}
                ${tab('pending', 'Pending')}
                ${tab('contacted', 'Contacted')}
                ${tab('won', 'Won')}
                ${tab('lost', 'Lost')}
            </div>

            <!-- Count + Sort -->
            <div class="flex items-center justify-between gap-2 mb-3">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                    ${filtered.length} ${filtered.length === 1 ? 'Inquiry' : 'Inquiries'}${searchQuery ? ` · "${searchQuery}"` : ''}
                </p>
                <div class="flex items-center bg-slate-50 rounded-lg p-0.5 gap-0.5 overflow-x-auto">
                    ${sortBtn('newest', 'Newest')}
                    ${sortBtn('oldest', 'Oldest')}
                    ${sortBtn('budget', 'Budget')}
                    ${sortBtn('urgent', 'Urgent')}
                </div>
            </div>

            <!-- List -->
            <div class="space-y-2 pb-20">
                ${filtered.length === 0 ? `
                    <div class="flex flex-col items-center justify-center py-14 gap-3 text-center">
                        <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                            <span class="material-icons-outlined text-3xl text-slate-400">contact_support</span>
                        </div>
                        <p class="text-sm font-semibold text-slate-900">${searchQuery ? 'No results found' : filterMode !== 'all' ? 'No ' + filterMode + ' inquiries' : 'No inquiries yet'}</p>
                        <p class="text-xs text-slate-500 max-w-[220px]">${searchQuery ? 'Try a different search term' : 'Tap + to capture a customer inquiry when they ask for a product'}</p>
                    </div>
                ` : filtered.map(inq => {
                    const days   = daysPending(inq.created_at);
                    const budget = extractBudget(inq.request);
                    const isActive = state.activeInquiry?.id === inq.id;
                    const showNotes = inq.request && inq.request !== inq.product_name && inq.request.trim().length > 0;

                    return `
                        <div onclick="window.setActiveInquiry(${JSON.stringify(inq).replace(/"/g, '&quot;')}); window.setInquiryViewMode('resolve');"
                            class="relative cursor-pointer rounded-xl border transition-all
                                ${isActive
                                    ? 'border-slate-900 bg-slate-50 shadow-sm'
                                    : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/60'}">

                            ${isActive ? `<div class="absolute left-0 top-2 bottom-2 w-[3px] bg-slate-950 rounded-full"></div>` : ''}

                            <div class="p-4 ${isActive ? 'pl-5' : ''}">
                                <!-- Row 1: product + age -->
                                <div class="flex items-start justify-between gap-2 mb-1.5">
                                    <h4 class="text-[11px] font-black text-slate-900 leading-snug flex-1 min-w-0 truncate">${inq.product_name || inq.request || '—'}</h4>
                                    <span class="text-[8px] font-black uppercase tracking-wider shrink-0 mt-0.5 ${urgencyColor(days, inq.status)}">${urgencyLabel(days, inq.status)}</span>
                                </div>

                                <!-- Row 2: customer + status -->
                                <div class="flex items-center justify-between gap-2">
                                    <span class="text-[9px] font-bold text-slate-400 truncate">${inq.customer_name || 'Unknown'}</span>
                                    <span class="px-1.5 py-0.5 rounded border text-[9px] font-black uppercase tracking-wide shrink-0 ${statusBadge(inq.status)}">${statusLabel(inq.status)}</span>
                                </div>

                                <!-- Row 3: notes + budget -->
                                ${showNotes || budget ? `
                                    <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                                        ${showNotes ? `<p class="text-[8px] text-slate-400 truncate flex-1 leading-relaxed">${inq.request.substring(0, 55)}${inq.request.length > 55 ? '…' : ''}</p>` : '<span class="flex-1"></span>'}
                                        ${budget ? `<span class="text-[8px] font-black text-slate-500 shrink-0">${budget}</span>` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}
