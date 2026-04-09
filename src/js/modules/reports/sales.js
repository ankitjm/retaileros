function fmt(n) {
    if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
    if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + 'L';
    if (n >= 1000) return '₹' + (n / 1000).toFixed(1) + 'K';
    return '₹' + Math.round(n).toLocaleString('en-IN');
}

function dateKey(dateStr) {
    const d = new Date(dateStr);
    return isNaN(d) ? null : d.toISOString().slice(0, 10);
}

function exportSalesCSV(grouped) {
    const rows = [['Date', 'Orders', 'Revenue']];
    for (const [date, data] of Object.entries(grouped)) {
        rows.push([date, data.count, data.total.toFixed(2)]);
    }
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sales-report-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}
window._exportSalesCSV = exportSalesCSV;

function buildMarginAnalysis(saleItems, products) {
    // Create product lookup: id → { price (MRP), mop (cost to retailer) }
    const productMap = {};
    products.forEach(p => { productMap[p.id] = p; });

    // Aggregate by product
    const productStats = {};
    saleItems.forEach(si => {
        const pid = si.product_id;
        const prod = productMap[pid];
        if (!prod) return;
        if (!productStats[pid]) {
            productStats[pid] = { name: prod.name, brand: prod.brand || 'Other', qty: 0, revenue: 0, cost: 0 };
        }
        const qty = si.quantity || 1;
        const revenue = si.final_price || si.price || 0;
        const cost = (prod.mop || prod.price || 0) * qty;
        productStats[pid].qty += qty;
        productStats[pid].revenue += revenue;
        productStats[pid].cost += cost;
    });

    // Brand-level aggregation
    const brandStats = {};
    Object.values(productStats).forEach(ps => {
        if (!brandStats[ps.brand]) brandStats[ps.brand] = { revenue: 0, cost: 0, qty: 0 };
        brandStats[ps.brand].revenue += ps.revenue;
        brandStats[ps.brand].cost += ps.cost;
        brandStats[ps.brand].qty += ps.qty;
    });

    // Sort products by margin (revenue - cost) descending
    const sorted = Object.values(productStats)
        .map(ps => ({ ...ps, margin: ps.revenue - ps.cost, marginPct: ps.cost > 0 ? ((ps.revenue - ps.cost) / ps.cost * 100) : 0 }))
        .sort((a, b) => b.margin - a.margin);

    const brandSorted = Object.entries(brandStats)
        .map(([brand, bs]) => ({ brand, ...bs, margin: bs.revenue - bs.cost, marginPct: bs.cost > 0 ? ((bs.revenue - bs.cost) / bs.cost * 100) : 0 }))
        .sort((a, b) => b.margin - a.margin);

    return { products: sorted, brands: brandSorted };
}

export function renderReportSales() {
    const cache = window.getCache ? window.getCache() : {};
    const sales = (cache.sales || []).filter(s => s.status !== 'draft');
    const saleItems = cache.saleItems || [];
    const products = cache.products || [];
    const marginData = buildMarginAnalysis(saleItems, products);

    // Group by day (last 30 days)
    const now = new Date();
    const thirtyDaysAgo = new Date(now - 30 * 86400000);

    const grouped = {};
    let totalRevenue = 0;
    let totalOrders = 0;

    for (const s of sales) {
        const key = dateKey(s.date);
        if (!key) continue;
        const d = new Date(key);
        if (d < thirtyDaysAgo) continue;

        if (!grouped[key]) grouped[key] = { count: 0, total: 0 };
        grouped[key].count++;
        grouped[key].total += parseFloat(s.total_amount) || 0;
        totalRevenue += parseFloat(s.total_amount) || 0;
        totalOrders++;
    }

    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // SVG chart — last 30 days
    const chartDays = 30;
    const chartData = [];
    for (let i = chartDays - 1; i >= 0; i--) {
        const d = new Date(now - i * 86400000);
        const key = d.toISOString().slice(0, 10);
        chartData.push(grouped[key]?.total || 0);
    }
    const maxVal = Math.max(...chartData, 1);
    const points = chartData.map((v, i) => {
        const x = (i / (chartDays - 1)) * 100;
        const y = 40 - (v / maxVal) * 36;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    // Daily list (sorted desc, last 10)
    const dailyList = Object.entries(grouped)
        .sort(([a], [b]) => b.localeCompare(a))
        .slice(0, 10);

    const todayKey = now.toISOString().slice(0, 10);
    const yesterdayKey = new Date(now - 86400000).toISOString().slice(0, 10);

    const dayRows = dailyList.map(([date, data]) => {
        const label = date === todayKey ? 'Today' : date === yesterdayKey ? 'Yesterday' : date;
        return `
            <div class="card p-5 group hover:bg-slate-50 transition-all flex justify-between items-center text-left">
                <div class="text-left">
                    <h4 class="text-sm font-black text-slate-900">${label}</h4>
                    <p class="text-[10px] font-bold text-slate-400 -mt-0.5">${data.count} order${data.count !== 1 ? 's' : ''}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-black text-slate-900">${fmt(data.total)}</p>
                </div>
            </div>
        `;
    }).join('');

    const emptyState = sales.length === 0 ? `
        <div class="py-12 text-center opacity-40">
            <span class="material-icons-outlined text-3xl text-slate-300 block mb-2">bar_chart</span>
            <p class="text-xs font-bold text-slate-400">No sales data yet</p>
        </div>
    ` : '';

    return `
        <div class="scrolling-content px-4 space-y-6 pb-32">
            <!-- Header -->
            <div class="card p-8 space-y-6 text-left">
                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Revenue (30D)</p>
                        <h2 class="text-4xl font-black tracking-tighter text-slate-900">${fmt(totalRevenue)}</h2>
                    </div>
                    <div class="bg-slate-100 px-2 py-1 rounded-lg flex items-center gap-1">
                        <span class="material-icons-outlined text-[10px] text-slate-900">bar_chart</span>
                        <span class="text-[10px] font-black text-slate-900">${totalOrders} orders</span>
                    </div>
                </div>

                <!-- Chart -->
                <div class="h-48 relative border-b border-slate-100">
                    ${sales.length > 0 ? `
                        <svg class="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <polyline points="${points}" fill="none" stroke="#0f172a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    ` : emptyState}
                    <div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">30 days ago</div>
                    <div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">Today</div>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4">
                <div class="card p-6 space-y-3 text-left">
                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                        <span class="material-icons-outlined text-slate-400">shopping_bag</span>
                    </div>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg Order Value</p>
                        <h4 class="text-xl font-black text-slate-900">${fmt(avgOrderValue)}</h4>
                    </div>
                </div>
                <div class="card p-6 space-y-3 text-left">
                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                        <span class="material-icons-outlined text-slate-400">receipt_long</span>
                    </div>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Orders</p>
                        <h4 class="text-xl font-black text-slate-900">${totalOrders}</h4>
                    </div>
                </div>
            </div>

            <!-- Daily List -->
            <section class="space-y-4 text-left">
                <div class="flex justify-between items-center px-1">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Daily Sales</h3>
                    <button onclick="window._exportSalesCSV(${JSON.stringify(grouped).replace(/</g, '\\u003c')})"
                        class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">
                        Export CSV
                    </button>
                </div>
                <div class="space-y-3">
                    ${dailyList.length > 0 ? dayRows : `<p class="text-center text-xs text-slate-300 py-6">No sales in the last 30 days</p>`}
                </div>
            </section>

            <!-- Brand-wise Margin Analysis -->
            ${marginData.brands.length > 0 ? `
            <section class="space-y-4 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Brand Margin Analysis</h3>
                <div class="space-y-3">
                    ${marginData.brands.map(b => `
                    <div class="card p-5 text-left">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h4 class="text-sm font-black text-slate-900">${b.brand}</h4>
                                <p class="text-[9px] font-bold text-slate-400">${b.qty} units sold</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-black ${b.margin >= 0 ? 'text-green-600' : 'text-red-600'}">${fmt(b.margin)}</p>
                                <p class="text-[9px] font-bold ${b.marginPct >= 0 ? 'text-green-500' : 'text-red-500'}">${b.marginPct.toFixed(1)}% margin</p>
                            </div>
                        </div>
                        <div class="flex justify-between text-[8px] font-bold text-slate-300 border-t border-slate-50 pt-2">
                            <span>Revenue: ${fmt(b.revenue)}</span>
                            <span>Cost: ${fmt(b.cost)}</span>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </section>` : ''}

            <!-- Product-wise Margin (Top 10) -->
            ${marginData.products.length > 0 ? `
            <section class="space-y-4 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Product Margin — Top 10</h3>
                <div class="space-y-2">
                    ${marginData.products.slice(0, 10).map(p => `
                    <div class="card p-4 text-left">
                        <div class="flex justify-between items-center">
                            <div class="flex-1 min-w-0 mr-3">
                                <p class="text-[10px] font-black text-slate-900 truncate">${p.name}</p>
                                <p class="text-[8px] font-bold text-slate-400">${p.brand} · ${p.qty} sold</p>
                            </div>
                            <div class="text-right shrink-0">
                                <p class="text-xs font-black ${p.margin >= 0 ? 'text-green-600' : 'text-red-600'}">${fmt(p.margin)}</p>
                                <p class="text-[8px] font-bold ${p.marginPct >= 0 ? 'text-green-500' : 'text-red-500'}">${p.marginPct.toFixed(1)}%</p>
                            </div>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </section>` : ''}
        </div>
    `;
}
