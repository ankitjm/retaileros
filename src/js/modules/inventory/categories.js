export function renderCategories() {
    const cache = window.getCache();
    const products = cache.products || [];

    // Group by category
    const categoryStats = products.reduce((acc, p) => {
        const cat = p.category || 'Uncategorized';
        if (!acc[cat]) {
            acc[cat] = { count: 0, blocked: 0, margin: 0, icon: 'category' };
        }
        acc[cat].count += parseInt(p.stock) || 0;

        const price = parseInt(p.price) || 0;
        const dp = price * 0.9; // Simulated DP
        acc[cat].blocked += (parseInt(p.stock) || 0) * dp;
        acc[cat].margin += ((price - dp) * (parseInt(p.stock) || 0));

        // Icon mapping
        if (cat.toLowerCase().includes('phone')) acc[cat].icon = 'smartphone';
        else if (cat.toLowerCase().includes('tablet')) acc[cat].icon = 'tablet_mac';
        else if (cat.toLowerCase().includes('audio')) acc[cat].icon = 'headphones';

        return acc;
    }, {});

    const cats = Object.keys(categoryStats);
    const totalCapital = Object.values(categoryStats).reduce((sum, c) => sum + c.blocked, 0);
    const totalMargin = Object.values(categoryStats).reduce((sum, c) => sum + c.margin, 0);

    return `
        < div class="scrolling-content px-6 space-y-4 pb-32" >
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${cats.length === 0 ? `
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            ` : cats.map(cat => {
        const s = categoryStats[cat];
        return `
                <div onclick="state.activeCategory='${cat}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${s.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${cat}</h3>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">STOCK COUNT: ${s.count}</p>
                        </div>
                    </div>
                     <span class="material-icons-outlined text-slate-300">chevron_right</span>
                </div>
                <div class="grid grid-cols-2 gap-4 px-2 -mt-2 mb-4 text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${s.blocked.toLocaleString()}</h4>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                        <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${s.margin.toLocaleString()}</h4>
                    </div>
                </div>
                `;
    }).join('')
        }

            < !--Brand Health Widget-- >
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mt-4 text-left">
            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">BRAND HEALTH</p>
            <div class="flex gap-4 text-left">
                <div class="flex-1 bg-slate-900 rounded-xl p-3 text-white text-left">
                    <p class="text-[7px] font-black uppercase tracking-widest opacity-60 mb-1 text-left">TOTAL CAPITAL</p>
                    <p class="text-lg font-black tracking-tight text-white text-left">₹${(totalCapital / 10000000).toFixed(2)} Cr</p>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-900 flex justify-between items-center text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black uppercase tracking-widest opacity-40 mb-1 text-left">AVG. MARGIN</p>
                        <p class="text-lg font-black tracking-tight text-left">${totalCapital > 0 ? ((totalMargin / totalCapital) * 100).toFixed(1) : 0}%</p>
                    </div>
                    <span class="material-icons-outlined text-slate-900 bg-white rounded-full p-1 shadow-sm text-sm text-left">bar_chart</span>
                </div>
            </div>
        </div>
        </div >
         
         < !--Floating Action Button-- >
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `;
}
