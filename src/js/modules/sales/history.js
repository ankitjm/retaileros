import { state } from '../../state.js';
import { renderSalesHeader } from './header.js';

export function renderHistory() {
    const cache = window.getCache();
    const sales = cache.sales || [];

    // Filter out sample "NONE" if real sales exist
    const displaySales = sales.length > 0 ? sales : null;

    if (!displaySales) {
        return `
        ${renderSalesHeader('history')}
        <div class="h-full flex flex-col items-center justify-center text-slate-300 opacity-50">
            <span class="material-icons-outlined text-4xl mb-2">receipt_long</span>
            <p class="text-[10px] font-black uppercase tracking-widest text-center">No recent transactions</p>
        </div>`;
    }

    const cacheItems = cache.saleItems || [];

    return `
        ${renderSalesHeader('history')}
        <div class="scrolling-content px-8 space-y-8 pb-12 text-left">
             <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</h3>
                    <span class="text-[9px] font-black text-slate-900 uppercase tracking-widest text-right">Turso Live</span>
                </div>

                <div class="space-y-4 text-left">
                    ${displaySales.map(s => {
        // Find items for this sale
        const items = cacheItems.filter(i => i.sale_id === s.id);
        const topItem = items[0] ? items[0].product_name : 'Custom Sale';
        const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';

        return `
                        <button type="button" onclick="window.setSalesHistoryId('${s.id}')" class="card p-6 border-2 transition-all cursor-pointer text-left w-full ${state.salesHistoryId === s.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                            <div class="flex justify-between items-start mb-4 text-left">
                                <div class="text-left">
                                    <div class="flex items-center gap-2 mb-1 text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${s.id}</p>
                                        <span class="bg-slate-100 px-1.5 py-0.5 rounded text-[7px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-tighter text-left">
                                            <span class="material-icons-outlined text-[10px] text-left">store</span> In-Store
                                        </span>
                                    </div>
                                    <h4 class="text-xl font-black text-slate-900 tracking-tighter text-left">${s.customer_name}</h4>
                                </div>
                                <p class="text-xl font-black text-slate-900 tracking-tighter text-right">₹${s.total_amount ? parseInt(s.total_amount).toLocaleString() : 0}</p>
                            </div>
                            <div class="space-y-1 text-left">
                                <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${topItem} ${moreCount}</p>
                                <div class="flex items-center justify-between text-left">
                                    <p class="text-[9px] font-black text-green-500 uppercase text-left">Paid • Delivered</p>
                                    <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(s.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </button>
                    `}).join('')}
                </div>
             </section>
        </div>
    `;
}
