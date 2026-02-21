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

// Toggle date filter dropdown
window.toggleDateFilterDropdown = (e) => {
    if (e) e.stopPropagation();
    const el = document.getElementById('date-filter-dropdown');
    if (el) el.classList.toggle('hidden');
};

// Update custom dates
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

    // Filter store orders by date (use order_date field)
    const filteredStoreOrders = filterByDate(storeOrders.map(o => ({ ...o, date: o.order_date })), dateFilter, state.historyFromDate, state.historyToDate);

    // Get current display list based on view mode
    const displayList = viewMode === 'drafts' ? filteredDrafts : viewMode === 'online' ? filteredStoreOrders : filteredCompleted;

    // Get filter label
    const getFilterLabel = () => {
        switch (dateFilter) {
            case 'today': return 'Today';
            case 'week': return 'This Week';
            case 'month': return 'This Month';
            case 'custom': return state.historyFromDate || state.historyToDate ? 'Custom Range' : 'All Time';
            default: return 'All Time';
        }
    };

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

    return `
        ${renderSalesHeader('history')}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Toggle & Filter Section -->
            <section class="space-y-4">
                <!-- View Mode Toggle -->
                <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                    <button type="button" onclick="window.setHistoryViewMode('completed')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${viewMode === 'completed' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        <span class="hidden sm:inline">Completed</span> (${allCompleted.length})
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('online')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 relative ${viewMode === 'online' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                        <span class="material-icons-outlined text-sm">public</span>
                        <span class="hidden sm:inline">Online</span> (${storeOrders.length})
                        ${storeOrders.filter(o => o.order_status === 'pending').length > 0 ? `<span class="absolute -top-1 right-1 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${storeOrders.filter(o => o.order_status === 'pending').length}</span>` : ''}
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('drafts')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${viewMode === 'drafts' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                        <span class="material-icons-outlined text-sm">edit_note</span>
                        <span class="hidden sm:inline">Drafts</span> (${allDrafts.length})
                    </button>
                </div>

                <!-- Date Filter -->
                <div class="flex items-center justify-between gap-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ${viewMode === 'drafts' ? 'Saved Drafts' : 'Completed'}
                        <span class="text-slate-300 ml-1">(${displayList.length})</span>
                    </h3>
                    
                    <div class="relative">
                        <button type="button" onclick="window.toggleDateFilterDropdown(event)" class="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-600 uppercase hover:border-slate-300 transition-all">
                            <span class="material-icons-outlined text-sm">calendar_today</span>
                            ${getFilterLabel()}
                            <span class="material-icons-outlined text-sm text-slate-400">expand_more</span>
                        </button>
                        
                        <!-- Date Filter Dropdown -->
                        <div id="date-filter-dropdown" class="hidden absolute top-full right-0 z-50 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
                            <div class="p-2 space-y-1">
                                <button type="button" onclick="window.setHistoryDateFilter('all'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${dateFilter === 'all' ? 'bg-slate-100 text-slate-900' : 'text-slate-600'}">
                                    <span class="material-icons-outlined text-sm">all_inclusive</span>
                                    All Transactions
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('today'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${dateFilter === 'today' ? 'bg-slate-100 text-slate-900' : 'text-slate-600'}">
                                    <span class="material-icons-outlined text-sm">today</span>
                                    Today
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('week'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${dateFilter === 'week' ? 'bg-slate-100 text-slate-900' : 'text-slate-600'}">
                                    <span class="material-icons-outlined text-sm">date_range</span>
                                    This Week
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('month'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${dateFilter === 'month' ? 'bg-slate-100 text-slate-900' : 'text-slate-600'}">
                                    <span class="material-icons-outlined text-sm">calendar_month</span>
                                    This Month
                                </button>
                            </div>
                            
                            <div class="border-t border-slate-100 p-3 space-y-3">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Custom Date Range</p>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">From</label>
                                        <input type="date" value="${state.historyFromDate || ''}" onchange="window.updateHistoryFromDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">To</label>
                                        <input type="date" value="${state.historyToDate || ''}" onchange="window.updateHistoryToDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Transactions List -->
            ${displayList.length === 0 ? `
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">${viewMode === 'drafts' ? 'edit_note' : viewMode === 'online' ? 'public' : 'receipt_long'}</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${viewMode === 'drafts' ? 'saved drafts' : viewMode === 'online' ? 'pending online orders' : 'transactions'} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">
                        ${viewMode === 'online' ? 'Delivered orders appear in Completed tab' : dateFilter !== 'all' ? 'Try adjusting your date filter' : ''}
                    </span>
                </div>
            ` : `
                <section class="space-y-3 text-left">
                    ${viewMode === 'online' ? `
                        <!-- Online Orders List -->
                        ${filteredStoreOrders.map(o => {
                            const oItems = (cache.storeOrderItems || []).filter(i => i.order_id === o.id);
                            const topItem = oItems[0] ? oItems[0].product_name : 'Order items';
                            const moreCount = oItems.length > 1 ? `+ ${oItems.length - 1} more` : '';

                            const getOrderStatusBadge = (status) => {
                                switch (status) {
                                    case 'pending': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';
                                    case 'confirmed': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';
                                    case 'shipped': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';
                                    default: return '';
                                }
                            };

                            return `
                                <button type="button" onclick="window.setApp('mystore'); window.setActiveStoreOrder('${o.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full border-transparent hover:border-slate-200">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">${o.order_number}</p>
                                                <span class="bg-slate-900 px-1.5 py-0.5 rounded text-[7px] font-black text-white flex items-center gap-1 uppercase tracking-tighter">
                                                    <span class="material-icons-outlined text-[10px]">public</span> Online
                                                </span>
                                                ${getOrderStatusBadge(o.order_status)}
                                                ${o.payment_status === 'paid' ? '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">Paid</span>' : o.payment_mode === 'cod' ? '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>' : ''}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${o.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${o.total_amount ? parseInt(o.total_amount).toLocaleString() : 0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${topItem} ${moreCount}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">language</span>
                                                ${o.payment_mode === 'cod' ? 'COD' : o.payment_mode === 'upi' ? 'UPI' : 'Online'} • ${o.shipping_city || 'Ship pending'}
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(o.order_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                        </div>
                                    </div>
                                </button>
                            `;
                        }).join('')}
                    ` : viewMode === 'drafts' ? `
                        <!-- Drafts List -->
                        ${filteredDrafts.map(s => {
                            const items = cacheItems.filter(i => i.sale_id === s.id);
                            const topItem = items[0] ? items[0].product_name : 'No items';
                            const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';

                            return `
                                <div class="card border-2 border-dashed overflow-hidden ${state.salesHistoryId === s.id ? 'border-slate-900 shadow-lg' : 'border-slate-200'}">
                                    <button type="button" onclick="window.setSalesHistoryId('${s.id}')" class="p-5 text-left w-full">
                                        <div class="flex justify-between items-start mb-3 text-left">
                                            <div class="text-left">
                                                <div class="flex items-center gap-2 mb-1 text-left">
                                                    <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                                                        Draft
                                                    </span>
                                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">#${s.id}</p>
                                                </div>
                                                <h4 class="text-lg font-black text-slate-900 tracking-tighter text-left">${s.customer_name || 'No Customer'}</h4>
                                            </div>
                                            <p class="text-lg font-black text-slate-900 tracking-tighter text-right">₹${s.total_amount ? parseInt(s.total_amount).toLocaleString() : 0}</p>
                                        </div>
                                        <div class="space-y-1 text-left">
                                            <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${topItem} ${moreCount}</p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-left">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                        </div>
                                    </button>
                                    <div class="px-5 pb-4 flex gap-2">
                                        <button type="button" onclick="window.loadDraft('${s.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all">
                                            <span class="material-icons-outlined text-sm">edit</span>
                                            Resume Draft
                                        </button>
                                        <button type="button" onclick="window.deleteDraft('${s.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    ` : `
                        <!-- Completed Transactions List -->
                        ${filteredCompleted.map(s => {
                            const items = cacheItems.filter(i => i.sale_id === s.id);
                            const topItem = items[0] ? items[0].product_name : 'Custom Sale';
                            const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';
                            const paymentIcon = getPaymentIcon(s.payment_mode);
                            const paymentLabel = getPaymentLabel(s.payment_mode);

                            return `
                                <button type="button" onclick="window.setSalesHistoryId('${s.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full ${state.salesHistoryId === s.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${s.id}</p>
                                                <span class="px-1.5 py-0.5 rounded text-[7px] font-black ${s.source === 'online' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'} flex items-center gap-1 uppercase tracking-tighter text-left">
                                                    <span class="material-icons-outlined text-[10px] text-left">${s.source === 'online' ? 'public' : 'store'}</span> ${s.source === 'online' ? 'Online' : 'In-Store'}
                                                </span>
                                                ${s.gst_required ? `
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">
                                                        GST
                                                    </span>
                                                ` : ''}
                                                ${s.installation_required ? `
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Install
                                                    </span>
                                                ` : ''}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${s.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${s.total_amount ? parseInt(s.total_amount).toLocaleString() : 0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${topItem} ${moreCount}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">${paymentIcon}</span>
                                                ${paymentLabel} • Completed
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                        </div>
                                    </div>
                                </button>
                            `;
                        }).join('')}
                    `}
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
