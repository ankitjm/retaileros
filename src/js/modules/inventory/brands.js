import { state } from '../../state.js';

function fmt(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
}

// Stock aging: check last sale date per product. >60 days = slow, >90 days = dead
function getStockAging(products, saleItems) {
    const now = Date.now();
    const lastSaleMap = {};
    (saleItems || []).forEach(si => {
        if (!lastSaleMap[si.product_id] || si.sale_id > lastSaleMap[si.product_id]) {
            lastSaleMap[si.product_id] = si.sale_id;
        }
    });
    const aging = { slow: [], dead: [] };
    products.forEach(p => {
        if ((p.in_stock || 0) <= 0) return;
        const lastSale = lastSaleMap[p.id];
        // If product has never been sold and has stock, consider it 90+ days
        if (!lastSale) { aging.dead.push(p); return; }
    });
    return aging;
}

export function renderBrands() {
    const cache = window.getCache ? window.getCache() : {};
    const products = cache.products || [];
    const saleItems = cache.saleItems || [];
    const sales = cache.sales || [];

    // Build last-sale-date map per product
    const now = Date.now();
    const saleIdDateMap = {};
    sales.forEach(s => { saleIdDateMap[s.id] = s.date; });
    const lastSaleDateMap = {};
    saleItems.forEach(si => {
        const saleDate = saleIdDateMap[si.sale_id];
        if (saleDate && (!lastSaleDateMap[si.product_id] || saleDate > lastSaleDateMap[si.product_id])) {
            lastSaleDateMap[si.product_id] = saleDate;
        }
    });

    // Classify stock: slow (>60d no sale), dead (>90d or never sold)
    const slowProducts = [];
    const deadProducts = [];
    products.forEach(p => {
        if ((p.in_stock || 0) <= 0) return;
        const lastDate = lastSaleDateMap[p.id];
        if (!lastDate) { deadProducts.push(p); return; }
        const daysSince = Math.floor((now - new Date(lastDate).getTime()) / 86400000);
        if (daysSince > 90) deadProducts.push(p);
        else if (daysSince > 60) slowProducts.push(p);
    });
    const deadStockValue = deadProducts.reduce((s, p) => s + (p.price || 0) * (p.in_stock || 0), 0);
    const slowStockValue = slowProducts.reduce((s, p) => s + (p.price || 0) * (p.in_stock || 0), 0);

    // Group products by brand
    const brandMap = {};
    for (const p of products) {
        const brand = p.brand || 'Other';
        if (!brandMap[brand]) brandMap[brand] = [];
        brandMap[brand].push(p);
    }

    const brands = Object.keys(brandMap).sort();

    if (brands.length === 0) {
        return `
            <div class="scrolling-content px-6 pb-32">
                <div class="flex flex-col items-center justify-center py-20 text-center">
                    <span class="material-icons-outlined text-4xl text-slate-200 mb-3">inventory_2</span>
                    <p class="text-xs font-bold text-slate-400">No inventory yet</p>
                    <p class="text-[10px] text-slate-300 mt-1">Add products via Inward Shipment</p>
                </div>
            </div>
            <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
                <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        `;
    }

    const cards = brands.map(brand => {
        const items = brandMap[brand];
        const totalStock = items.reduce((s, p) => s + (p.in_stock || 0), 0);
        const totalValue = items.reduce((s, p) => s + ((p.price || 0) * (p.in_stock || 0)), 0);
        const totalMopValue = items.reduce((s, p) => s + ((p.mop || 0) * (p.in_stock || 0)), 0);
        const avgMargin = totalMopValue > 0 && totalValue > 0
            ? (((totalMopValue - totalValue) / totalValue) * 100).toFixed(1)
            : '—';
        const maxPriceItem = items.reduce((best, p) => (p.price || 0) > (best.price || 0) ? p : best, items[0]);
        const categories = [...new Set(items.map(p => p.category).filter(Boolean))];
        const catLabel = categories.length > 0 ? categories[0] : 'Electronics';

        const isActive = state.inventoryBrand === brand;

        return `
            <div onclick="setInventoryBrand('${brand.replace(/'/g, "\\'")}'); setInventoryMode('details')"
                 class="card p-5 border-2 transition-all cursor-pointer group bg-white ${isActive ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">${brand}</h3>
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">${catLabel}</span>
                    </div>
                    <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">${avgMargin}%</p>
                    </div>
                </div>
                <div class="mb-5 text-left">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">TOTAL VALUE IN STOCK</p>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter">${fmt(totalValue)}</h2>
                    <p class="text-[9px] text-slate-400 mt-0.5">${totalStock} units · ${items.length} SKUs</p>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2">TOP ITEM METRICS</p>
                    <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">${fmt(maxPriceItem.price || 0)}</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">${fmt(maxPriceItem.mop || maxPriceItem.price || 0)}</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">STOCK</p>
                            <p class="text-[8px] font-black text-slate-900">${totalStock}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Stock aging alert banner
    const agingAlert = (deadProducts.length > 0 || slowProducts.length > 0) ? `
        <div class="mx-6 mb-4 space-y-2">
            ${deadProducts.length > 0 ? `
            <div class="bg-red-50 border border-red-100 rounded-2xl p-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="material-icons-outlined text-red-500 text-lg">warning</span>
                    <span class="text-[10px] font-black text-red-700 uppercase tracking-widest">Dead Stock Alert</span>
                </div>
                <p class="text-xs font-bold text-red-900">${deadProducts.length} products (${fmt(deadStockValue)}) with no sales in 90+ days</p>
                <div class="mt-2 space-y-1">
                    ${deadProducts.slice(0, 3).map(p => `
                        <p class="text-[9px] text-red-600 font-bold">${p.name} — ${p.in_stock} units × ${fmt(p.price || 0)}</p>
                    `).join('')}
                    ${deadProducts.length > 3 ? `<p class="text-[8px] text-red-400 font-bold">+${deadProducts.length - 3} more</p>` : ''}
                </div>
            </div>` : ''}
            ${slowProducts.length > 0 ? `
            <div class="bg-amber-50 border border-amber-100 rounded-2xl p-4">
                <div class="flex items-center gap-2 mb-2">
                    <span class="material-icons-outlined text-amber-500 text-lg">schedule</span>
                    <span class="text-[10px] font-black text-amber-700 uppercase tracking-widest">Slow Movers</span>
                </div>
                <p class="text-xs font-bold text-amber-900">${slowProducts.length} products (${fmt(slowStockValue)}) with no sales in 60+ days</p>
                <div class="mt-2 space-y-1">
                    ${slowProducts.slice(0, 3).map(p => `
                        <p class="text-[9px] text-amber-600 font-bold">${p.name} — ${p.in_stock} units</p>
                    `).join('')}
                    ${slowProducts.length > 3 ? `<p class="text-[8px] text-amber-400 font-bold">+${slowProducts.length - 3} more</p>` : ''}
                </div>
            </div>` : ''}
        </div>
    ` : '';

    return `
        <div class="scrolling-content px-6 space-y-4 pb-32">
            ${agingAlert}
            ${cards}
        </div>
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `;
}
