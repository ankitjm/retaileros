// Client directory list — with sort, filter, and contextual info
import { state } from '../../state.js';
import { renderClientHeader } from './header.js';
import { emptyState, timeAgo, clientTier, esc } from './ui.js';

// Module-level state (survives re-renders, resets on page reload)
let sortMode = 'recent';   // recent | name | spent | orders
let filterMode = 'all';    // all | active | inactive | vip

window.setClientSort = (mode) => {
    sortMode = mode;
    window.triggerRender(false);
};

window.setClientFilter = (mode) => {
    filterMode = mode;
    window.triggerRender(false);
};

export function renderClientList() {
    const cache = window.getCache();
    const clients = cache.customers || [];
    const sales = cache.sales || [];
    const searchQuery = state.clientSearchQuery || '';

    // Pre-compute stats for ALL clients up front
    const clientStats = new Map();
    const now = new Date();
    const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    clients.forEach(c => {
        const cSales = sales.filter(s => s.customer_id === c.id && s.status !== 'draft');
        const totalSpent = cSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
        const lastSaleDate = cSales.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0]?.date || null;
        clientStats.set(c.id, { totalSpent, orderCount: cSales.length, lastSaleDate });
    });

    // Summary stats for the stats bar
    const totalClients = clients.length;
    const activeClients = clients.filter(c => {
        const { lastSaleDate } = clientStats.get(c.id) || {};
        return lastSaleDate && (now - new Date(lastSaleDate)) / 86400000 <= 30;
    }).length;
    const vipClients = clients.filter(c => (clientStats.get(c.id)?.totalSpent || 0) >= 50000).length;
    const newClients = clients.filter(c => c.joined_at && new Date(c.joined_at) >= thisMonthStart).length;

    // Text search
    let filteredClients = searchQuery
        ? clients.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (c.phone && c.phone.includes(searchQuery)) ||
            (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : [...clients];

    // Additional filter
    if (filterMode === 'active') {
        filteredClients = filteredClients.filter(c => {
            const { lastSaleDate } = clientStats.get(c.id) || {};
            return lastSaleDate && (now - new Date(lastSaleDate)) / 86400000 <= 30;
        });
    } else if (filterMode === 'inactive') {
        filteredClients = filteredClients.filter(c => {
            const { lastSaleDate } = clientStats.get(c.id) || {};
            if (!lastSaleDate) return true;
            return (now - new Date(lastSaleDate)) / 86400000 > 90;
        });
    } else if (filterMode === 'vip') {
        filteredClients = filteredClients.filter(c => {
            return (clientStats.get(c.id)?.totalSpent || 0) >= 50000;
        });
    }

    // Sort
    const sortedClients = [...filteredClients].sort((a, b) => {
        if (sortMode === 'name') return (a.name || '').localeCompare(b.name || '');
        if (sortMode === 'spent') return (clientStats.get(b.id)?.totalSpent || 0) - (clientStats.get(a.id)?.totalSpent || 0);
        if (sortMode === 'orders') return (clientStats.get(b.id)?.orderCount || 0) - (clientStats.get(a.id)?.orderCount || 0);
        // recent (default): last sale date, then joined_at
        const aDate = clientStats.get(a.id)?.lastSaleDate || a.joined_at || '2000-01-01';
        const bDate = clientStats.get(b.id)?.lastSaleDate || b.joined_at || '2000-01-01';
        return new Date(bDate) - new Date(aDate);
    });

    const sortBtn = (mode, label) => {
        const active = sortMode === mode;
        return `<button onclick="window.setClientSort('${mode}')" class="px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-lg transition-all ${active ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}">${label}</button>`;
    };

    const filterChip = (mode, label, count) => {
        const active = filterMode === mode;
        return `<button onclick="window.setClientFilter('${mode}')"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                ${active ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">
            ${label}${count > 0 ? `<span class="${active ? 'opacity-50' : 'opacity-70'} font-black">${count}</span>` : ''}
        </button>`;
    };

    const addBtn = `<button onclick="setClientMode('add')" class="w-8 h-8 flex items-center justify-center bg-slate-950 text-white rounded-full hover:bg-slate-800 transition-colors" title="Add client">
        <span class="material-icons-outlined text-sm">add</span>
    </button>`;

    const emptyMsg = searchQuery
        ? 'No clients found'
        : filterMode !== 'all' ? 'No clients match this filter' : 'No clients yet';
    const emptySubtext = searchQuery
        ? 'Try a different search term'
        : filterMode !== 'all' ? 'Try a different filter' : '';

    return `
        ${renderClientHeader('Clients', 'Customer Directory', addBtn)}

        <!-- Stats Bar -->
        <div class="px-8 shrink-0">
            <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 mb-5 overflow-hidden text-left">
                <div class="flex-1 p-4 text-left">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Total</p>
                    <h3 class="text-xl font-black leading-none text-slate-900">${totalClients}</h3>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">all clients</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-3"></div>
                <div class="flex-1 p-4 text-left">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Active</p>
                    <h3 class="text-xl font-black leading-none ${activeClients > 0 ? 'text-slate-900' : 'text-slate-300'}">${activeClients}</h3>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">last 30 days</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-3"></div>
                <div class="flex-1 p-4 text-left">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">VIP</p>
                    <h3 class="text-xl font-black leading-none ${vipClients > 0 ? 'text-slate-900' : 'text-slate-300'}">${vipClients}</h3>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">&gt;₹50K spent</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-3"></div>
                <div class="flex-1 p-4 text-left">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">New</p>
                    <h3 class="text-xl font-black leading-none ${newClients > 0 ? 'text-slate-900' : 'text-slate-300'}">${newClients}</h3>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">this month</p>
                </div>
            </div>
        </div>

        <div class="scrolling-content text-left">
            <!-- Sticky Controls -->
            <div class="sticky top-0 z-30 bg-white border-b border-slate-100 px-8 pt-2.5 pb-2.5 shadow-sm">
                <div class="flex items-center gap-2">
                    <div class="flex bg-slate-100 p-0.5 rounded-xl shrink-0">
                        <button class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide bg-white shadow-sm text-slate-900">Dir</button>
                        <button onclick="window.setClientMode('groups')" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide text-slate-400 hover:text-slate-600">Groups</button>
                    </div>
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400" style="font-size:18px">search</span>
                        <input type="text"
                               id="client-search-input"
                               value="${searchQuery}"
                               oninput="window.updateClientSearch(this.value)"
                               placeholder="Search by name, phone, email..."
                               class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                </div>
            </div>

            <!-- Scrollable Content -->
            <div class="px-8 pt-3 pb-6 space-y-3">
                <!-- Filter chips (Inquiries style) -->
                <div class="flex gap-1 overflow-x-auto scrollbar-none mb-4">
                    ${filterChip('all', 'All', 0)}
                    ${filterChip('active', 'Active', activeClients)}
                    ${filterChip('inactive', 'Inactive', 0)}
                    ${filterChip('vip', 'VIP', vipClients)}
                </div>

                <!-- Count + Sort -->
                <div class="flex items-center justify-between gap-2 mb-3">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest shrink-0">
                        ${sortedClients.length} ${sortedClients.length === 1 ? 'Client' : 'Clients'}${searchQuery ? ` · "${searchQuery}"` : ''}
                    </p>
                    <div class="flex items-center bg-slate-50 rounded-lg p-0.5 gap-0.5 overflow-x-auto">
                        ${sortBtn('recent', 'Recent')}
                        ${sortBtn('name', 'A→Z')}
                        ${sortBtn('spent', 'Top')}
                        ${sortBtn('orders', 'Orders')}
                    </div>
                </div>

                <!-- Client List -->
                <div class="space-y-2 pb-20">
                ${sortedClients.length === 0
                    ? emptyState('person_off', emptyMsg, emptySubtext)
                    : sortedClients.map(c => {
                        const stats = clientStats.get(c.id) || { totalSpent: 0, orderCount: 0, lastSaleDate: null };
                        const tier = clientTier(stats.totalSpent);
                        const lastActive = stats.lastSaleDate ? timeAgo(stats.lastSaleDate) : null;
                        const isSelected = state.selectedClient === c.name;
                        const initial = (c.name || '?')[0].toUpperCase();

                        return `
                        <div class="relative rounded-xl border transition-all ${isSelected ? 'border-slate-900 bg-slate-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/60'}">
                            ${isSelected ? '<div class="absolute left-0 top-2 bottom-2 w-[3px] bg-slate-950 rounded-full"></div>' : ''}
                            <button type="button" onclick="window.setClientMode('profile', '${esc(c.name)}', '${c.id}')" class="p-4 ${isSelected ? 'pl-5' : ''} text-left w-full">
                                <!-- Row 1: name + last active -->
                                <div class="flex items-center justify-between mb-1">
                                    <div class="flex items-center gap-2 flex-1 min-w-0">
                                        <div class="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                            <span class="text-[11px] font-black text-slate-600">${initial}</span>
                                        </div>
                                        <p class="text-[11px] font-black text-slate-900 truncate">${c.name}</p>
                                    </div>
                                    ${lastActive ? `<span class="text-[8px] font-black shrink-0 ml-2 ${(now - new Date(stats.lastSaleDate)) / 86400000 <= 7 ? 'text-green-600' : (now - new Date(stats.lastSaleDate)) / 86400000 <= 30 ? 'text-amber-600' : 'text-slate-300'}">${lastActive}</span>` : ''}
                                </div>
                                <!-- Row 2: contact + tier -->
                                <div class="flex items-center justify-between">
                                    <p class="text-[9px] font-bold text-slate-400 truncate">${c.phone || c.email || 'No contact'}</p>
                                    ${tier ? `<span class="px-1.5 py-0.5 rounded border text-[9px] font-black uppercase shrink-0 ml-2 ${tier.color}">${tier.label}</span>` : ''}
                                </div>
                                <!-- Row 3: spending (only if has orders) -->
                                ${stats.orderCount > 0 ? `
                                    <div class="border-t border-slate-100 mt-2 pt-2 flex items-center justify-between">
                                        <span class="text-[9px] font-bold text-slate-500">₹${stats.totalSpent.toLocaleString()} spent</span>
                                        <span class="text-[9px] font-bold text-slate-400">${stats.orderCount} orders</span>
                                    </div>
                                ` : ''}
                            </button>
                        </div>
                    `;
                }).join('')}
                </div>
            </div>
        </div>
    `;
}

// Search — preserve cursor position after re-render
window.updateClientSearch = (query) => {
    const input = document.getElementById('client-search-input');
    const cursorPos = input?.selectionStart || query.length;
    state.clientSearchQuery = query;
    window.triggerRender(false);
    setTimeout(() => {
        const newInput = document.getElementById('client-search-input');
        if (newInput) { newInput.focus(); newInput.setSelectionRange(cursorPos, cursorPos); }
    }, 0);
};
