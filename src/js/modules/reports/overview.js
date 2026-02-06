export function renderReportOverview() {
    const cache = window.getCache();
    const metrics = [
        {
            t: 'Total Sales',
            v: cache.sales ? `₹${cache.sales.reduce((acc, s) => acc + parseInt(s.amount || s.total_amount), 0).toLocaleString()}` : '₹0',
            p: cache.sales ? `+${cache.sales.length}` : '0',
            i: 'account_balance_wallet'
        },
        {
            t: 'Clients',
            v: cache.customers ? cache.customers.length.toLocaleString() : '0',
            p: 'Total',
            i: 'group'
        },
        {
            t: 'Inquiries',
            v: cache.inquiries ? cache.inquiries.length.toLocaleString() : '0',
            p: 'Pending',
            i: 'chat_bubble'
        },
        {
            t: 'Repairs',
            v: cache.repairs ? cache.repairs.length.toLocaleString() : '0',
            p: 'Active',
            i: 'settings'
        },
        {
            t: 'Schemes',
            v: cache.schemes ? `${cache.schemes.length} Active` : '0',
            p: 'Live',
            i: 'percent'
        },
        {
            t: 'Inventory',
            v: cache.products ? `₹${(cache.products.reduce((acc, p) => acc + (parseInt(p.price) * parseInt(p.stock)), 0) / 10000000).toFixed(1)}Cr` : '₹0',
            p: 'Stock Value',
            i: 'inventory_2'
        },
        {
            t: 'Campaigns',
            v: cache.campaigns ? cache.campaigns.length.toLocaleString() : '0',
            p: 'Pre-booking',
            i: 'rocket_launch'
        },
        {
            t: 'Automations',
            v: cache.automations ? cache.automations.length.toLocaleString() : '0',
            p: 'Live',
            i: 'bolt'
        }
    ];

    const tickerContent = `
        <div class="flex items-center gap-12 text-[13px] font-bold text-slate-600 pr-12 text-left">
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Real-time Intelligence:</strong> Connected to Turso DB. Syncing ${metrics.reduce((acc, m) => acc + parseInt(m.v.toString().replace(/[^0-9]/g, '') || 0), 0).toLocaleString()} data points.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Sales Performance:</strong> Weekend footfall has surged by <strong class="text-slate-900">14.5%</strong> compared to the previous cycle.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Automations:</strong> Lead generation is currently processing <strong class="text-slate-900">${cache.inquiries?.length || 0} active inquiries</strong>.</span>
        </div>
    `;

    return `
        <div class="card p-6 bg-white text-slate-900 relative overflow-hidden group mb-6 border-slate-100 shadow-sm">
            <div class="relative z-10 text-left mb-4">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Live Intelligence</p>
                <h2 class="text-2xl font-black tracking-tighter leading-none text-slate-900 text-left">Dashboard Insights</h2>
            </div>
            <div class="overflow-hidden border-t border-slate-100 pt-5 text-left">
                <div class="fast-ticker">
                    ${tickerContent}
                    ${tickerContent}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            ${metrics.map(m => `
                <div class="card p-5 space-y-3 relative overflow-hidden group hover:border-slate-300 transition-all text-left">
                    <div class="flex justify-between items-start">
                        <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                            <span class="material-icons-outlined text-sm text-slate-400">${m.i}</span>
                        </div>
                        <span class="text-[8px] font-black uppercase tracking-tighter ${m.p === 'Live' || m.p.startsWith('+') ? 'text-slate-900' : 'text-slate-400'}">${m.p}</span>
                    </div>
                    <div>
                        <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-left">${m.t}</h4>
                        <p class="text-lg font-black tracking-tighter text-slate-900 text-left">${m.v}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
