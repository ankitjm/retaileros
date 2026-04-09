import { state } from '../../state.js';
import { renderSalesHeader } from './header.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Date filter helpers
function getStartOfDay(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
}

function getEndOfDay(date) {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
}

function filterByDate(sales, filter, fromDate, toDate) {
    if (filter === 'all') return sales;

    const now = new Date();
    const today = getStartOfDay(now);

    return sales.filter(s => {
        const saleDate = new Date(s.date);

        switch (filter) {
            case 'today':
                return saleDate >= today && saleDate <= getEndOfDay(now);

            case 'week': {
                const weekStart = new Date(today);
                weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                return saleDate >= weekStart && saleDate <= getEndOfDay(now);
            }

            case 'month': {
                const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                return saleDate >= monthStart && saleDate <= getEndOfDay(now);
            }

            case 'custom': {
                if (!fromDate && !toDate) return true;
                const from = fromDate ? getStartOfDay(new Date(fromDate)) : new Date(0);
                const to = toDate ? getEndOfDay(new Date(toDate)) : new Date();
                return saleDate >= from && saleDate <= to;
            }

            default:
                return true;
        }
    });
}

// Window handlers for custom date range
window.updateHistoryFromDate = (value) => {
    state.historyFromDate = value;
    if (state.historyToDate) {
        state.historyDateFilter = 'custom';
        window.triggerRender();
    }
};

window.updateHistoryToDate = (value) => {
    state.historyToDate = value;
    if (state.historyFromDate) {
        state.historyDateFilter = 'custom';
        window.triggerRender();
    }
};

export function renderHistory() {
    const cache = window.getCache();
    const allSales = cache.sales || [];
    const cacheItems = cache.saleItems || [];

    // Store orders (online, not yet delivered)
    const storeOrders = (cache.storeOrders || []).filter(o => o.order_status !== 'delivered' && o.order_status !== 'cancelled');

    // Separate drafts and completed sales
    const allDrafts = allSales.filter(s => s.status === 'draft');
    const allCompleted = allSales.filter(s => s.status !== 'draft');

    // Apply date filter based on current view
    const viewMode = state.historyViewMode || 'completed';
    const dateFilter = state.historyDateFilter || 'all';

    const filteredDrafts = filterByDate(allDrafts, dateFilter, state.historyFromDate, state.historyToDate);
    const filteredCompleted = filterByDate(allCompleted, dateFilter, state.historyFromDate, state.historyToDate);
    const filteredStoreOrders = filterByDate(storeOrders.map(o => ({ ...o, date: o.order_date })), dateFilter, state.historyFromDate, state.historyToDate);

    // Get current display list based on view mode
    const displayList = viewMode === 'drafts' ? filteredDrafts : viewMode === 'online' ? filteredStoreOrders : filteredCompleted;
    const pendingCount = storeOrders.filter(o => o.order_status === 'pending').length;

    // Summary calculations
    const totalRevenue = displayList.reduce((sum, s) => sum + (parseInt(s.total_amount) || 0), 0);

    // Helper to get payment mode icon
    const getPaymentIcon = (mode) => {
        switch (mode) {
            case 'cash': return 'payments';
            case 'card': return 'credit_card';
            case 'upi': return 'qr_code';
            default: return 'account_balance_wallet';
        }
    };

    // Helper to get payment mode label
    const getPaymentLabel = (mode) => {
        switch (mode) {
            case 'cash': return 'Cash';
            case 'card': return 'Card';
            case 'upi': return 'UPI';
            default: return 'Paid';
        }
    };

    // Date filter chips
    const filterChips = [
        { key: 'all', label: 'All Time', icon: 'all_inclusive' },
        { key: 'today', label: 'Today', icon: 'today' },
        { key: 'week', label: 'This Week', icon: 'date_range' },
        { key: 'month', label: 'This Month', icon: 'calendar_month' }
    ];

    return `
        ${renderSalesHeader('history')}
        <div class="scrolling-content px-4 sm:px-8 space-y-4 pb-12 text-left">

            <!-- View Mode Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="window.setHistoryViewMode('completed')"
                    class="flex-1 py-2.5 text-[9px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 tracking-wider
                    ${viewMode === 'completed' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">check_circle</span>
                    <span class="hidden sm:inline">Completed</span> (${allCompleted.length})
                </button>
                <button type="button" onclick="window.setHistoryViewMode('online')"
                    class="flex-1 py-2.5 text-[9px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 tracking-wider relative
                    ${viewMode === 'online' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">language</span>
                    <span class="hidden sm:inline">Online</span> (${storeOrders.length})
                    ${pendingCount > 0 ? `<span class="absolute -top-1 right-1 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${pendingCount}</span>` : ''}
                </button>
                <button type="button" onclick="window.setHistoryViewMode('drafts')"
                    class="flex-1 py-2.5 text-[9px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 tracking-wider
                    ${viewMode === 'drafts' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">edit_note</span>
                    <span class="hidden sm:inline">Drafts</span> (${allDrafts.length})
                </button>
            </div>

            <!-- Date Filter Chips (Horizontal Scroll) -->
            <div class="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1" style="-webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none;">
                ${filterChips.map(f => `
                    <button type="button" onclick="window.setHistoryDateFilter('${f.key}')"
                        class="shrink-0 px-3.5 py-2 rounded-full text-[9px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all whitespace-nowrap
                        ${dateFilter === f.key ? 'bg-slate-900 text-white shadow-md' : 'bg-white border border-slate-200 text-slate-400 hover:border-slate-300'}">
                        <span class="material-icons-outlined text-xs">${f.icon}</span>
                        ${f.label}
                    </button>
                `).join('')}
            </div>

            ${viewMode !== 'drafts' ? `
                <!-- Summary Stats -->
                <div class="flex gap-3">
                    <div class="flex-1 card p-3.5 flex items-center gap-3">
                        <div class="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                            <span class="material-icons-outlined text-sm text-slate-500">account_balance_wallet</span>
                        </div>
                        <div class="min-w-0">
                            <p class="text-base font-black text-slate-900 tracking-tighter truncate">\u20B9${totalRevenue.toLocaleString()}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Revenue</p>
                        </div>
                    </div>
                    <div class="card p-3.5 flex items-center gap-3 shrink-0">
                        <div class="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-sm text-slate-500">receipt_long</span>
                        </div>
                        <div>
                            <p class="text-base font-black text-slate-900 tracking-tighter">${displayList.length}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Orders</p>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Section Label -->
            <div class="flex items-center justify-between">
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    ${viewMode === 'drafts' ? 'Saved Drafts' : viewMode === 'online' ? 'Online Orders' : 'Recent Transactions'}
                </p>
            </div>

            <!-- Transaction List -->
            ${displayList.length === 0 ? `
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-1">
                        <span class="material-icons-outlined text-2xl text-slate-300">${viewMode === 'drafts' ? 'edit_note' : viewMode === 'online' ? 'language' : 'receipt_long'}</span>
                    </div>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${viewMode === 'drafts' ? 'saved drafts' : viewMode === 'online' ? 'pending orders' : 'transactions'} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300 max-w-[200px]">
                        ${viewMode === 'online' ? 'Delivered orders appear in Completed' : dateFilter !== 'all' ? 'Try a different time period' : viewMode === 'drafts' ? 'Save drafts from the New Sale tab' : 'Complete a sale to see it here'}
                    </span>
                </div>
            ` : `
                <section class="space-y-3 text-left">
                    ${viewMode === 'online' ? filteredStoreOrders.map(o => {
                        const oItems = (cache.storeOrderItems || []).filter(i => i.order_id === o.id);
                        const topItem = oItems[0] ? oItems[0].product_name : 'Order items';
                        const moreCount = oItems.length > 1 ? `+ ${oItems.length - 1} more` : '';

                        const getOrderStatusBadge = (status) => {
                            switch (status) {
                                case 'pending': return '<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';
                                case 'confirmed': return '<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';
                                case 'shipped': return '<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';
                                default: return '';
                            }
                        };

                        return `
                            <button type="button" onclick="window.setApp('mystore'); window.setActiveStoreOrder('${o.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full border-transparent hover:border-slate-200 active:scale-[0.98]">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                                            <span class="bg-slate-900 px-2 py-0.5 rounded text-[7px] font-black text-white flex items-center gap-1 uppercase tracking-tighter">
                                                <span class="material-icons-outlined text-[10px]">language</span> Online
                                            </span>
                                            ${getOrderStatusBadge(o.order_status)}
                                            ${o.payment_status === 'paid' ? '<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-slate-900 text-white">Paid</span>' : o.payment_mode === 'cod' ? '<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>' : ''}
                                        </div>
                                        <h4 class="text-base font-black text-slate-900 tracking-tighter truncate">${o.customer_name}</h4>
                                    </div>
                                    <p class="text-base font-black text-slate-900 tracking-tighter shrink-0 ml-3">\u20B9${o.total_amount ? parseInt(o.total_amount).toLocaleString() : 0}</p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <p class="text-[10px] font-bold text-slate-400 uppercase truncate flex-1">${topItem} ${moreCount}</p>
                                    <p class="text-[9px] font-black text-slate-300 uppercase shrink-0 ml-2">${new Date(o.order_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                                </div>
                            </button>
                        `;
                    }).join('') : viewMode === 'drafts' ? filteredDrafts.map(s => {
                        const items = cacheItems.filter(i => i.sale_id === s.id);
                        const topItem = items[0] ? items[0].product_name : 'No items';
                        const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';

                        return `
                            <div class="card border-2 border-dashed overflow-hidden ${state.salesHistoryId === s.id ? 'border-slate-900 shadow-lg' : 'border-slate-200'}">
                                <button type="button" onclick="window.setSalesHistoryId('${s.id}')" class="p-4 text-left w-full">
                                    <div class="flex justify-between items-start mb-2">
                                        <div class="flex-1 min-w-0">
                                            <div class="flex items-center gap-1.5 mb-1.5">
                                                <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[7px] font-black uppercase tracking-widest">Draft</span>
                                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-tighter">#${s.id}</p>
                                            </div>
                                            <h4 class="text-base font-black text-slate-900 tracking-tighter truncate">${s.customer_name || 'No Customer'}</h4>
                                        </div>
                                        <p class="text-base font-black text-slate-900 tracking-tighter shrink-0 ml-3">\u20B9${s.total_amount ? parseInt(s.total_amount).toLocaleString() : 0}</p>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <p class="text-[10px] font-bold text-slate-400 uppercase truncate flex-1">${topItem} ${moreCount}</p>
                                        <p class="text-[9px] font-black text-slate-300 uppercase shrink-0 ml-2">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                                    </div>
                                </button>
                                <div class="px-4 pb-4 flex gap-2">
                                    <button type="button" onclick="window.loadDraft('${s.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition-all">
                                        <span class="material-icons-outlined text-sm">edit</span>
                                        Resume Draft
                                    </button>
                                    <button type="button" onclick="window.deleteDraft('${s.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-400 rounded-xl text-[9px] font-black uppercase flex items-center justify-center hover:bg-slate-50 active:scale-[0.98] transition-all">
                                        <span class="material-icons-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('') : filteredCompleted.map(s => {
                        const items = cacheItems.filter(i => i.sale_id === s.id);
                        const topItem = items[0] ? items[0].product_name : 'Custom Sale';
                        const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';
                        const paymentIcon = getPaymentIcon(s.payment_mode);
                        const paymentLabel = getPaymentLabel(s.payment_mode);

                        return `
                            <button type="button" onclick="window.setSalesHistoryId('${s.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full active:scale-[0.98] ${state.salesHistoryId === s.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                <div class="flex justify-between items-start mb-3">
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                                            <span class="px-2 py-0.5 rounded text-[7px] font-black ${s.source === 'online' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'} flex items-center gap-1 uppercase tracking-tighter">
                                                <span class="material-icons-outlined text-[10px]">${s.source === 'online' ? 'language' : 'store'}</span> ${s.source === 'online' ? 'Online' : 'Store'}
                                            </span>
                                            ${s.gst_required ? '<span class="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">GST</span>' : ''}
                                            ${s.installation_required ? '<span class="bg-slate-200 text-slate-600 px-2 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5"><span class="material-icons-outlined text-[10px]">build</span> Install</span>' : ''}
                                        </div>
                                        <h4 class="text-base font-black text-slate-900 tracking-tighter truncate">${s.customer_name}</h4>
                                    </div>
                                    <p class="text-base font-black text-slate-900 tracking-tighter shrink-0 ml-3">\u20B9${s.total_amount ? parseInt(s.total_amount).toLocaleString() : 0}</p>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2 flex-1 min-w-0">
                                        <span class="material-icons-outlined text-xs text-slate-400">${paymentIcon}</span>
                                        <p class="text-[10px] font-bold text-slate-400 uppercase truncate">${paymentLabel} \u2022 ${topItem} ${moreCount}</p>
                                    </div>
                                    <p class="text-[9px] font-black text-slate-300 uppercase shrink-0 ml-2">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </section>
            `}
        </div>
    `;
}

// Delete draft function
window.deleteDraft = async (saleId) => {
    window.showConfirm('Are you sure you want to delete this draft?', async () => {
        try {
            await db.sales.deleteItems(saleId);
            await db.sales.delete(saleId);
            await syncData();
            window.toast.success('Draft deleted successfully');
        } catch (err) {
            console.error('Error deleting draft:', err);
            window.toast.error('Error deleting draft: ' + err.message);
        }
    });
};
