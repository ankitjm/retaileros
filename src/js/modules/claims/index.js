import { state } from '../../state.js';

export function renderClaims(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    if (isDesktopSecondary) {
        return `
            <div class="h-full flex flex-col items-center justify-center text-center p-8">
                <span class="material-icons-outlined text-6xl text-slate-100 mb-4">verified_user</span>
                <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Claim Details</p>
                <p class="text-[8px] text-slate-300 mt-2">Select a claim to view details</p>
            </div>
        `;
    }

    const cache = window.getCache();
    const schemes = cache.schemes || [];
    const sales = cache.sales || [];

    // Claims are derived from completed sales that had scheme discounts
    const saleItems = cache.saleItems || [];
    const claimsData = saleItems.filter(si => si.scheme_id).map(si => {
        const sale = sales.find(s => s.id === si.sale_id);
        const scheme = schemes.find(sc => sc.id === si.scheme_id);
        return {
            id: si.id,
            product: si.product_name,
            scheme_name: scheme?.name || si.scheme_id,
            sale_date: sale?.date,
            customer: sale?.customer_name || 'Walk-in',
            amount: si.discount_amount || 0,
            payout: scheme?.payout || 0,
            status: 'pending'
        };
    });

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-4 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900">Claims</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Scheme Payouts</p>
                    </div>
                    <div class="w-8"></div>
                </div>

                <!-- Stats Row -->
                <div class="grid grid-cols-3 gap-3 text-left">
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">${claimsData.length}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                    </div>
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">${claimsData.filter(c => c.status === 'pending').length}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Pending</p>
                    </div>
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">₹${claimsData.reduce((sum, c) => sum + (c.payout || 0), 0).toLocaleString()}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Payout</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-4 sm:px-8 space-y-3 custom-scrollbar pb-20 text-left">
                ${claimsData.length > 0 ? claimsData.map(c => `
                    <div class="card p-4 border-slate-100 hover:border-slate-200 transition-all text-left">
                        <div class="flex justify-between items-start mb-2">
                            <div class="text-left">
                                <h3 class="text-[11px] font-black text-slate-900">${c.product}</h3>
                                <p class="text-[9px] font-bold text-slate-400">${c.scheme_name} • ${c.customer}</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase bg-amber-50 text-amber-600">${c.status}</span>
                        </div>
                        <div class="flex justify-between items-end mt-3 pt-3 border-t border-slate-50">
                            <p class="text-[8px] font-bold text-slate-300">${c.sale_date ? new Date(c.sale_date).toLocaleDateString() : ''}</p>
                            <p class="text-sm font-black text-slate-900">₹${(c.payout || 0).toLocaleString()}</p>
                        </div>
                    </div>
                `).join('') : `
                    <div class="py-20 text-center opacity-20">
                        <span class="material-icons-outlined text-4xl">verified_user</span>
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No scheme claims yet</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-1">Claims appear when sales use scheme discounts</p>
                    </div>
                `}
            </div>
        </div>
    `;
}
