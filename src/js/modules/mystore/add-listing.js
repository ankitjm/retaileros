import { state } from '../../state.js';
import { db } from '../../utils/db.js';

export function renderAddListing() {
    const cache = window.getCache();
    const products = cache.products || [];
    const existingListings = cache.storeListings || [];
    const listedProductIds = existingListings.map(l => l.product_id);

    // Filter out already-listed products
    const availableProducts = products.filter(p => !listedProductIds.includes(p.id));

    // Save listing handler
    window._saveStoreListing = async () => {
        const container = document.getElementById('add-listing-form');
        if (!container) return;

        const productId = container.querySelector('[data-field="product_id"]')?.value;
        if (!productId) { if (window.toast) window.toast.error('Select a product'); return; }

        const product = products.find(p => p.id === productId);
        if (!product) return;

        const listingPrice = parseFloat(container.querySelector('[data-field="listing_price"]')?.value) || product.mop || product.price;
        const description = container.querySelector('[data-field="description"]')?.value || '';
        const stockQty = parseInt(container.querySelector('[data-field="stock_qty"]')?.value) || 0;
        const status = container.querySelector('[data-field="status"]')?.value || 'draft';

        const id = `sl_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

        try {
            await db.storeListings.add({
                id,
                product_id: product.id,
                product_name: product.name,
                brand: product.brand,
                category: product.category,
                base_price: product.price,
                listing_price: listingPrice,
                description,
                status,
                stock_qty: stockQty
            });
            if (!window._db_cache.storeListings) window._db_cache.storeListings = [];
            window._db_cache.storeListings.unshift({
                id, product_id: product.id, product_name: product.name, brand: product.brand,
                category: product.category, base_price: product.price, listing_price: listingPrice,
                description, status, stock_qty: stockQty, created_at: new Date().toISOString()
            });
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Listed product: ${product.name}`, user_name: r.contact_person || 'Owner', icon: 'add_shopping_cart', color: 'green' });
            if (window.toast) window.toast.success('Product listed on store');
            window.setMyStoreViewMode('list');
        } catch (err) {
            console.error('Save listing failed:', err);
            if (window.toast) window.toast.error('Failed to save listing');
        }
    };

    // Auto-fill price when product selected
    window._onProductSelect = (selectEl) => {
        const product = products.find(p => p.id === selectEl.value);
        if (!product) return;
        const priceInput = document.querySelector('[data-field="listing_price"]');
        const stockInput = document.querySelector('[data-field="stock_qty"]');
        if (priceInput) priceInput.value = product.mop || product.price || 0;
        if (stockInput) stockInput.value = product.in_stock || 0;
    };

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                    <button type="button" onclick="window.setMyStoreViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Add Listing</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">List Product on Store</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div id="add-listing-form" class="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 space-y-6 pb-12 text-left">
                <!-- Product Selection -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Select Product
                    </p>
                    <div class="card p-4 text-left">
                        <select data-field="product_id" onchange="window._onProductSelect(this)" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900">
                            <option value="">Choose from inventory...</option>
                            ${availableProducts.map(p => `
                                <option value="${p.id}">${p.name} ${p.brand ? '(' + p.brand + ')' : ''} — ₹${parseInt(p.price || 0).toLocaleString()}</option>
                            `).join('')}
                        </select>
                        ${availableProducts.length === 0 ? `
                            <p class="text-[9px] font-bold text-slate-500 mt-2">All products are already listed on your store</p>
                        ` : ''}
                    </div>
                </div>

                <!-- Pricing -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Pricing
                    </p>
                    <div class="card p-4 text-left">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="material-icons-outlined text-slate-400 text-sm">currency_rupee</span>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Listing Price</p>
                        </div>
                        <input type="number" data-field="listing_price" placeholder="0" class="w-full text-2xl font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-200">
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Set the price customers see on your store</p>
                    </div>
                </div>

                <!-- Description -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Description
                    </p>
                    <div class="card p-4 text-left">
                        <textarea data-field="description" rows="3" placeholder="Product description for your store..." class="w-full text-xs font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300 resize-none"></textarea>
                    </div>
                </div>

                <!-- Stock & Status -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Stock & Visibility
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 text-left">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-icons-outlined text-slate-400 text-sm">inventory_2</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Stock Qty</p>
                            </div>
                            <input type="number" data-field="stock_qty" value="0" min="0" class="w-full text-lg font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                        </div>
                        <div class="card p-4 text-left">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-icons-outlined text-slate-400 text-sm">visibility</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                            </div>
                            <select data-field="status" class="w-full text-sm font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                <option value="draft">Draft</option>
                                <option value="active">Active (Live)</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Save Button -->
                <button type="button" onclick="window._saveStoreListing()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">add_shopping_cart</span>
                    List on Store
                </button>
            </div>
        </div>
    `;
}
