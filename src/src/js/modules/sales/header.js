import { state } from '../../state.js';

// Search state
let showSearch = false;
let searchQuery = '';
let searchResults = { customers: [], sales: [] };

// Toggle search
window.toggleSalesSearch = () => {
    showSearch = !showSearch;
    if (!showSearch) {
        searchQuery = '';
        searchResults = { customers: [], sales: [] };
    }
    window.triggerRender();
};

// Update search - preserve focus after render
window.updateSalesSearch = (query) => {
    const input = document.getElementById('sales-universal-search');
    const cursorPos = input?.selectionStart || query.length;
    
    searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) {
        searchResults = { customers: [], sales: [] };
        window.triggerRender(false);
        restoreFocus('sales-universal-search', cursorPos);
        return;
    }
    
    const cache = window.getCache();
    const customers = cache.customers || [];
    const sales = cache.sales || [];
    const saleItems = cache.saleItems || [];
    
    // Search customers by name, phone, email
    searchResults.customers = customers.filter(c => 
        c.name?.toLowerCase().includes(searchQuery) ||
        c.phone?.includes(searchQuery) ||
        c.email?.toLowerCase().includes(searchQuery)
    ).slice(0, 5);
    
    // Search sales by customer name, order ID, or product names
    searchResults.sales = sales.filter(s => {
        // Check order ID
        if (s.id?.toLowerCase().includes(searchQuery)) return true;
        // Check customer name
        if (s.customer_name?.toLowerCase().includes(searchQuery)) return true;
        // Check products in this sale
        const items = saleItems.filter(i => i.sale_id === s.id);
        return items.some(i => i.product_name?.toLowerCase().includes(searchQuery));
    }).slice(0, 5);
    
    window.triggerRender(false);
    restoreFocus('sales-universal-search', cursorPos);
};

// Helper to restore focus
function restoreFocus(inputId, cursorPos) {
    setTimeout(() => {
        const input = document.getElementById(inputId);
        if (input) {
            input.focus();
            input.setSelectionRange(cursorPos, cursorPos);
        }
    }, 0);
}

// Select search result
window.selectSearchCustomer = (customerId, customerName) => {
    // Filter history to show this customer's transactions
    state.historyViewMode = 'completed';
    state.historyDateFilter = 'all';
    window.setTab('history');
    
    // Find their most recent transaction
    const cache = window.getCache();
    const customerSale = cache.sales.find(s => s.customer_id === customerId);
    if (customerSale) {
        window.setSalesHistoryId(customerSale.id);
    }
    
    showSearch = false;
    searchQuery = '';
    searchResults = { customers: [], sales: [] };
    window.triggerRender();
};

window.selectSearchSale = (saleId) => {
    window.setTab('history');
    window.setSalesHistoryId(saleId);
    
    showSearch = false;
    searchQuery = '';
    searchResults = { customers: [], sales: [] };
    window.triggerRender();
};

export function renderSalesHeader(tab) {
    const hasResults = searchResults.customers.length > 0 || searchResults.sales.length > 0;
    
    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Sales Desk</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${tab === 'new-sale' ? 'New Transaction' : 'Transaction History'}</p>
                </div>
                <button type="button" onclick="window.toggleSalesSearch()" class="p-2 text-slate-400 hover:text-slate-900 ${showSearch ? 'bg-slate-100 rounded-full text-slate-900' : ''}">
                    <span class="material-icons-outlined text-xl">${showSearch ? 'close' : 'search'}</span>
                </button>
            </div>
            
            <!-- Search Bar -->
            ${showSearch ? `
                <div class="mb-4 relative">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                        <input type="text" 
                               id="sales-universal-search"
                               value="${searchQuery}"
                               oninput="window.updateSalesSearch(this.value)" 
                               placeholder="Search customers, orders, products..." 
                               class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm"
                               autofocus>
                    </div>
                    
                    <!-- Search Results Dropdown -->
                    ${searchQuery && hasResults ? `
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                            ${searchResults.customers.length > 0 ? `
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">person</span>
                                        Customers (${searchResults.customers.length})
                                    </p>
                                </div>
                                ${searchResults.customers.map(c => `
                                    <button type="button" onclick="window.selectSearchCustomer('${c.id}', '${c.name?.replace(/'/g, "\\'")}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center gap-3">
                                        <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                            <span class="material-icons-outlined text-slate-400">person</span>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-black text-slate-900 truncate">${c.name}</p>
                                            <p class="text-[10px] font-bold text-slate-400">${c.phone || ''} ${c.email ? '• ' + c.email : ''}</p>
                                        </div>
                                    </button>
                                `).join('')}
                            ` : ''}
                            
                            ${searchResults.sales.length > 0 ? `
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">receipt</span>
                                        Transactions (${searchResults.sales.length})
                                    </p>
                                </div>
                                ${searchResults.sales.map(s => `
                                    <button type="button" onclick="window.selectSearchSale('${s.id}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 ${s.status === 'draft' ? 'bg-slate-200' : 'bg-slate-100'} rounded-full flex items-center justify-center">
                                                <span class="material-icons-outlined ${s.status === 'draft' ? 'text-slate-500' : 'text-slate-600'}">${s.status === 'draft' ? 'edit_note' : 'check_circle'}</span>
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-slate-900">#${s.id}</p>
                                                <p class="text-[10px] font-bold text-slate-400">${s.customer_name} • ${new Date(s.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <p class="text-sm font-black text-slate-900">₹${parseInt(s.total_amount || 0).toLocaleString()}</p>
                                    </button>
                                `).join('')}
                            ` : ''}
                        </div>
                    ` : ''}
                    
                    ${searchQuery && !hasResults ? `
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 mb-2">search_off</span>
                            <p class="text-xs font-bold text-slate-400">No results found for "${searchQuery}"</p>
                        </div>
                    ` : ''}
                </div>
            ` : ''}
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${tab === 'new-sale' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">New Sale</button>
                <button type="button" onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${tab === 'history' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">History</button>
            </div>
        </header>
    `;
}
