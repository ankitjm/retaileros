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
        if (s.id?.toLowerCase().includes(searchQuery)) return true;
        if (s.customer_name?.toLowerCase().includes(searchQuery)) return true;
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
    state.historyViewMode = 'completed';
    state.historyDateFilter = 'all';
    window.setTab('history');

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

    // ── History tab: full Inquiries-style header ──
    if (tab === 'history') {
        return `
            <header class="px-8 pt-6 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between text-left">
                    <button type="button" onclick="setApp('launcher')" class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="text-center">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900">Transactions</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-0.5">Sales History</p>
                    </div>
                    <button type="button" onclick="setTab('new-sale')" class="w-8 h-8 flex items-center justify-center bg-slate-950 text-white rounded-full hover:bg-slate-800 transition-colors">
                        <span class="material-icons-outlined text-sm">add</span>
                    </button>
                </div>
            </header>
        `;
    }

    // ── New-sale tab: matches the standard page header pattern ──
    return `
        <header class="px-8 pt-6 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between text-left">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Sales Desk</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-0.5">New Transaction</p>
                </div>
                <button type="button" onclick="setTab('history')"
                    class="w-8 h-8 flex items-center justify-center bg-slate-950 text-white rounded-full hover:bg-slate-800 transition-colors"
                    title="View Transaction History">
                    <span class="material-icons-outlined text-sm">history</span>
                </button>
            </div>
        </header>
    `;
}
