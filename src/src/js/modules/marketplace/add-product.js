import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Post product to marketplace
window._postToMarketplace = async () => {
    const productSelect = document.getElementById('mp-product-select');
    const qtyInput = document.getElementById('mp-quantity');
    const priceInput = document.getElementById('mp-price');

    const productName = productSelect?.value;
    const quantity = parseInt(qtyInput?.value) || 1;
    const priceStr = (priceInput?.value || '').replace(/[₹,\s]/g, '');
    const price = parseFloat(priceStr) || 0;

    if (!productName || productName === 'Choose a product...') {
        if (window.toast) window.toast.error('Select a product');
        return;
    }
    if (price <= 0) {
        if (window.toast) window.toast.error('Enter a valid price');
        return;
    }

    try {
        const id = 'LST-' + Math.random().toString(36).substr(2, 8).toUpperCase();
        const now = new Date().toISOString();
        await db.storeListings.add({
            id,
            product_id: id,
            product_name: productName,
            brand: productName.split(' ')[0],
            category: 'Marketplace',
            base_price: price,
            listing_price: price,
            description: `Marketplace listing: ${quantity} units`,
            status: 'active',
            stock_qty: quantity,
            created_at: now,
            updated_at: now
        });
        await syncData();
        if (window.toast) window.toast.success('Listed on marketplace!');
        window.setMarketplaceViewMode('list');
    } catch (err) {
        console.error('Post to marketplace failed:', err);
        if (window.toast) window.toast.error('Failed to post listing');
    }
};

export function renderMarketplaceAddProduct(mode) {
    const isMobile = mode === 'mobile';
    const cache = window.getCache();
    const products = cache.products || [];

    return `
        <div class="h-full flex flex-col bg-white animate-slide-up relative text-left">
            <header class="p-6 pb-4 shrink-0 flex items-center justify-between text-left">
                <div class="flex items-center gap-3 text-left">
                     <button onclick="${isMobile ? 'window.setMarketplaceViewMode(\'list\')' : 'setApp(\'launcher\')'}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">List a Product</h2>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-[0.1em] mt-1">Marketplace</p>
                    </div>
                </div>
                <div class="w-8"></div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-2 space-y-6 custom-scrollbar pb-20 text-left">
                <div class="space-y-6 text-left">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Select from Inventory</p>
                        <div class="relative group">
                            <select id="mp-product-select" class="w-full h-14 pl-4 pr-12 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                                <option>Choose a product...</option>
                                ${products.map(p => `<option value="${p.name}">${p.name} — ${p.brand || ''}</option>`).join('')}
                            </select>
                            <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">unfold_more</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Quantity</p>
                            <input type="number" id="mp-quantity" value="1" min="1" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                        </div>
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Price per Unit</p>
                            <input type="text" id="mp-price" placeholder="₹ 0" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm">
                        </div>
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3">Product Condition</p>
                        <div class="flex bg-slate-100 p-1 rounded-2xl gap-1">
                            <button class="flex-1 py-3 bg-white shadow-sm text-slate-950 text-[9px] font-black uppercase rounded-xl transition-all text-center">Sealed</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Open Box</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Used</button>
                        </div>
                    </div>

                    <p class="text-[8px] text-slate-400 font-medium text-center leading-relaxed max-w-[200px] mx-auto">By listing this product, you agree to the Marketplace Terms of Service.</p>

                    <button onclick="window._postToMarketplace()" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 text-center">
                         <span class="material-icons-outlined text-xl">rocket_launch</span> POST TO MARKETPLACE
                    </button>
                </div>
            </div>
        </div>
    `;
}
