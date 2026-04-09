import { state } from '../../state.js';

function fmtINR(n) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n); }

export function renderSchemeBrands() {
    const cache = window.getCache();
    const schemes = cache.schemes || [];
    const saleItems = cache.saleItems || [];
    const sales = cache.sales || [];
    const products = cache.products || [];
    const brandTargets = cache.brandTargets || [];

    // Compute actual brand-wise sales (amount + units)
    const brandSales = {};
    const productBrandMap = {};
    products.forEach(p => { productBrandMap[p.id] = p.brand || 'Other'; });
    const saleStatusMap = {};
    sales.forEach(s => { saleStatusMap[s.id] = s.status; });
    saleItems.forEach(si => {
        if (saleStatusMap[si.sale_id] === 'draft') return;
        const brand = productBrandMap[si.product_id] || 'Other';
        if (!brandSales[brand]) brandSales[brand] = { amount: 0, units: 0 };
        brandSales[brand].amount += si.final_price || si.price || 0;
        brandSales[brand].units += si.quantity || 1;
    });

    // Build targets map
    const targetMap = {};
    brandTargets.forEach(bt => { targetMap[bt.brand] = bt; });

    // Group schemes by brand
    const brandMap = {};
    schemes.forEach(s => {
        const brand = s.brand || 'Other';
        if (!brandMap[brand]) brandMap[brand] = { live: 0, completed: 0, totalPayout: 0 };
        if (s.status === 'active') brandMap[brand].live++;
        else brandMap[brand].completed++;
        brandMap[brand].totalPayout += s.payout || 0;
    });

    // Count scheme-applied sale items per brand
    saleItems.forEach(si => {
        if (si.scheme_id) {
            const scheme = schemes.find(s => s.id === si.scheme_id);
            if (scheme) {
                const brand = scheme.brand || 'Other';
                if (!brandMap[brand]) brandMap[brand] = { live: 0, completed: 0, totalPayout: 0 };
            }
        }
    });

    const brands = Object.entries(brandMap).map(([name, data]) => ({
        name,
        ...data
    })).sort((a, b) => b.totalPayout - a.totalPayout);

    if (brands.length === 0) {
        return `
            <div class="p-20 text-center opacity-30">
                <span class="material-icons-outlined text-4xl mb-4">local_offer</span>
                <p class="text-[10px] font-black uppercase tracking-widest">No Schemes Found</p>
                <p class="text-[9px] text-slate-400 mt-2">Active schemes will appear here grouped by brand</p>
            </div>
        `;
    }

    return `
        <div class="space-y-4 text-left">
            ${brands.map(b => `
                <div onclick="selectSchemeBrand('${b.name.replace(/'/g, "\\'")}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${state.activeSchemeBrand === b.name ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                                <span class="material-icons-outlined text-slate-400 text-left">local_offer</span>
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${b.name}</h3>
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">${b.live} ACTIVE SCHEME${b.live !== 1 ? 'S' : ''}</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-slate-200 group-hover:text-slate-400 transition-colors text-right">chevron_right</span>
                    </div>

                    <div class="space-y-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL PAYOUT POTENTIAL</p>
                            <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹${b.totalPayout.toLocaleString('en-IN')}</h2>
                        </div>

                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">LIVE SCHEMES</p>
                                <p class="text-lg font-black text-slate-900 text-left">${b.live}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">COMPLETED</p>
                                <p class="text-lg font-black text-slate-900 text-left">${b.completed}</p>
                            </div>
                        </div>

                        ${(() => {
                            const target = targetMap[b.name];
                            if (!target) return '';
                            const actual = brandSales[b.name] || { amount: 0, units: 0 };
                            const pct = target.target_amount > 0 ? Math.min(100, Math.round(actual.amount / target.target_amount * 100)) : 0;
                            const unitPct = target.target_units > 0 ? Math.min(100, Math.round(actual.units / target.target_units * 100)) : 0;
                            const barColor = pct >= 100 ? 'bg-green-500' : pct >= 80 ? 'bg-amber-500' : 'bg-slate-400';
                            return `
                            <div class="mt-4 pt-4 border-t border-dashed border-slate-100 text-left">
                                <div class="flex items-center justify-between mb-2">
                                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Target: ${target.period}</p>
                                    <p class="text-[9px] font-black ${pct >= 100 ? 'text-green-600' : pct >= 80 ? 'text-amber-600' : 'text-slate-500'}">${pct}%</p>
                                </div>
                                <div class="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                                    <div class="${barColor} h-full rounded-full transition-all" style="width:${pct}%"></div>
                                </div>
                                <div class="flex justify-between text-[8px] font-bold text-slate-400">
                                    <span>${fmtINR(actual.amount)} / ${fmtINR(target.target_amount)}</span>
                                    <span>${actual.units} / ${target.target_units} units</span>
                                </div>
                                ${target.incentive_slab ? `<p class="text-[8px] font-bold text-slate-300 mt-1">${target.incentive_slab}</p>` : ''}
                            </div>`;
                        })()}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
