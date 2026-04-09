import { db } from '../../utils/db.js';
import { state } from '../../state.js';

// ─── Add-listing handler ──────────────────────────────────────────────────────

window._saveStoreListing = async function () {
    const productName = document.getElementById('sl-name')?.value?.trim();
    const brand = document.getElementById('sl-brand')?.value?.trim();
    const listingPrice = parseFloat(document.getElementById('sl-price')?.value?.trim()) || 0;
    const stockQty = parseInt(document.getElementById('sl-stock')?.value?.trim()) || 0;
    const description = document.getElementById('sl-desc')?.value?.trim() || '';

    if (!productName) {
        if (window.toast) window.toast.error('Product name is required');
        return;
    }

    const id = `sl_${Date.now()}`;
    const now = new Date().toISOString();

    try {
        await db.storeListings.add({
            product_id: null,
            product_name: productName,
            brand: brand || '',
            category: '',
            base_price: listingPrice,
            listing_price: listingPrice,
            description,
            status: 'active',
            stock_qty: stockQty
        });

        // Update cache
        if (!window._db_cache.storeListings) window._db_cache.storeListings = [];
        window._db_cache.storeListings.unshift({ id, product_name: productName, brand, listing_price: listingPrice, stock_qty: stockQty, status: 'active', created_at: now });

        if (window.toast) window.toast.success('Listing published to your store');
        window.setMyStoreViewMode('list');
        if (window.triggerRender) window.triggerRender();
    } catch (err) {
        console.error('[MyStore] add listing error:', err);
        if (window.toast) window.toast.error('Failed to save listing');
    }
};

window._updateOrderStatus = async function (orderId, newStatus) {
    try {
        await db.storeOrders.update(orderId, { order_status: newStatus });

        // Update cache
        const orders = window._db_cache.storeOrders || [];
        const idx = orders.findIndex(o => o.id === orderId);
        if (idx >= 0) orders[idx].order_status = newStatus;

        if (window.toast) window.toast.success(`Order marked as ${newStatus}`);
        if (window.triggerRender) window.triggerRender();
    } catch (err) {
        if (window.toast) window.toast.error('Failed to update order status');
    }
};

window._removeListing = async function (listingId) {
    try {
        await db.storeListings.delete(listingId);
        window._db_cache.storeListings = (window._db_cache.storeListings || []).filter(l => l.id !== listingId);
        if (window.toast) window.toast.success('Listing removed');
        if (window.triggerRender) window.triggerRender();
    } catch (err) {
        if (window.toast) window.toast.error('Failed to remove listing');
    }
};

// ─── Sub-views ────────────────────────────────────────────────────────────────

function renderDashboard(listings, orders) {
    const totalRevenue = orders.filter(o => o.order_status !== 'cancelled')
        .reduce((s, o) => s + (o.total_amount || 0), 0);
    const pendingOrders = orders.filter(o => o.order_status === 'pending').length;
    const activeListings = listings.filter(l => l.status === 'active').length;

    const recentOrders = orders.slice(0, 5);

    const statusBadge = (s) => {
        const map = { pending: 'bg-amber-100 text-amber-700', processing: 'bg-blue-100 text-blue-700', shipped: 'bg-purple-100 text-purple-700', delivered: 'bg-green-100 text-green-700', cancelled: 'bg-red-100 text-red-700' };
        return `<span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest ${map[s] || 'bg-slate-100 text-slate-600'}">${s}</span>`;
    };

    return `
        <div class="space-y-6 p-6">
            <!-- Metrics -->
            <div class="grid grid-cols-3 gap-3">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">₹${(totalRevenue / 1000).toFixed(1)}k</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Revenue</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${pendingOrders}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${activeListings}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Listed</p>
                </div>
            </div>

            <!-- Quick actions -->
            <div class="grid grid-cols-2 gap-3">
                <button onclick="window.setMyStoreTab('listings'); window.setMyStoreViewMode('add-listing')"
                    class="card p-4 flex items-center gap-3 hover:border-slate-300 transition-all text-left">
                    <span class="material-icons-outlined text-slate-400">add_circle_outline</span>
                    <span class="text-[10px] font-black text-slate-900">Add Listing</span>
                </button>
                <button onclick="window.setMyStoreTab('orders')"
                    class="card p-4 flex items-center gap-3 hover:border-slate-300 transition-all text-left">
                    <span class="material-icons-outlined text-slate-400">local_shipping</span>
                    <span class="text-[10px] font-black text-slate-900">View Orders</span>
                </button>
            </div>

            <!-- Recent orders -->
            <div>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Recent Orders</p>
                ${recentOrders.length === 0 ? `
                    <div class="py-10 text-center opacity-30">
                        <span class="material-icons-outlined text-3xl">storefront</span>
                        <p class="text-[9px] font-black uppercase tracking-widest mt-2">No orders yet</p>
                    </div>
                ` : recentOrders.map(o => `
                    <div class="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                        <div>
                            <p class="text-xs font-black text-slate-900">${o.customer_name}</p>
                            <p class="text-[9px] text-slate-400 mt-0.5">${o.order_number || o.id}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <p class="text-xs font-black text-slate-900">₹${(o.total_amount || 0).toLocaleString()}</p>
                            ${statusBadge(o.order_status || 'pending')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
}

function renderListings(listings) {
    if (state.myStoreViewMode === 'add-listing') {
        return `
            <div class="p-6 space-y-4">
                <div class="space-y-1">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Product Name</label>
                    <input id="sl-name" type="text" placeholder="e.g., iPhone 16 Pro Max 256GB"
                        class="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 bg-white">
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Brand</label>
                        <input id="sl-brand" type="text" placeholder="Apple"
                            class="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 bg-white">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Stock Qty</label>
                        <input id="sl-stock" type="number" placeholder="5"
                            class="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 bg-white">
                    </div>
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Listing Price (₹)</label>
                    <input id="sl-price" type="number" placeholder="149999"
                        class="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 bg-white">
                </div>
                <div class="space-y-1">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Description (optional)</label>
                    <textarea id="sl-desc" placeholder="Key specs, offers or warranty details..." rows="3"
                        class="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 bg-white resize-none"></textarea>
                </div>
                <div class="flex gap-3 pt-2">
                    <button onclick="window.setMyStoreViewMode('list')"
                        class="flex-1 py-3 border border-slate-200 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                        Cancel
                    </button>
                    <button onclick="window._saveStoreListing()"
                        class="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                        Publish Listing
                    </button>
                </div>
            </div>`;
    }

    return `
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">${listings.length} listings</p>
                <button onclick="window.setMyStoreViewMode('add-listing')"
                    class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                    <span class="material-icons-outlined text-sm">add</span> Add
                </button>
            </div>
            ${listings.length === 0 ? `
                <div class="py-16 text-center opacity-30">
                    <span class="material-icons-outlined text-4xl">storefront</span>
                    <p class="text-[10px] font-black uppercase tracking-widest mt-3">No listings yet</p>
                    <p class="text-[9px] text-slate-400 mt-1">Add products to your online store</p>
                </div>
            ` : listings.map(l => `
                <div class="card p-4 mb-3 hover:border-slate-300 transition-all">
                    <div class="flex items-start justify-between">
                        <div>
                            <p class="text-sm font-black text-slate-900">${l.product_name}</p>
                            ${l.brand ? `<p class="text-[9px] text-slate-400 mt-0.5">${l.brand}</p>` : ''}
                        </div>
                        <button onclick="window._removeListing('${l.id}')"
                            class="text-slate-300 hover:text-red-500 transition-colors">
                            <span class="material-icons-outlined text-base">delete_outline</span>
                        </button>
                    </div>
                    <div class="flex items-center justify-between mt-3">
                        <p class="text-base font-black text-slate-900">₹${(l.listing_price || 0).toLocaleString()}</p>
                        <div class="flex items-center gap-3 text-[9px] text-slate-400">
                            <span>${l.stock_qty || 0} in stock</span>
                            <span class="px-2 py-0.5 rounded-full ${l.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'} font-black uppercase tracking-wider">${l.status || 'active'}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>`;
}

function renderOrders(orders) {
    const statusBadge = (s) => {
        const map = { pending: 'bg-amber-100 text-amber-700', processing: 'bg-blue-100 text-blue-700', shipped: 'bg-purple-100 text-purple-700', delivered: 'bg-green-100 text-green-700', cancelled: 'bg-red-100 text-red-700' };
        return `<span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase tracking-widest ${map[s] || 'bg-slate-100 text-slate-600'}">${s}</span>`;
    };

    const nextStatus = { pending: 'processing', processing: 'shipped', shipped: 'delivered' };

    return `
        <div class="p-6">
            ${orders.length === 0 ? `
                <div class="py-16 text-center opacity-30">
                    <span class="material-icons-outlined text-4xl">local_shipping</span>
                    <p class="text-[10px] font-black uppercase tracking-widest mt-3">No orders yet</p>
                </div>
            ` : orders.map(o => {
                const next = nextStatus[o.order_status];
                return `
                <div class="card p-4 mb-3">
                    <div class="flex items-start justify-between mb-3">
                        <div>
                            <p class="text-sm font-black text-slate-900">${o.customer_name}</p>
                            <p class="text-[9px] text-slate-400 mt-0.5">${o.order_number || o.id} &bull; ${new Date(o.order_date || o.created_at).toLocaleDateString('en-IN')}</p>
                        </div>
                        ${statusBadge(o.order_status || 'pending')}
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="text-base font-black text-slate-900">₹${(o.total_amount || 0).toLocaleString()}</p>
                        ${next ? `<button onclick="window._updateOrderStatus('${o.id}','${next}')"
                            class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                            Mark ${next}
                        </button>` : `<span class="text-[9px] text-slate-300 font-bold">${o.order_status === 'delivered' ? 'Completed' : 'Cancelled'}</span>`}
                    </div>
                </div>`;
            }).join('')}
        </div>`;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function renderMyStore(mode) {
    const isSecondary = mode === 'desktop-secondary';
    const cache = window.getCache();
    const listings = cache.storeListings || [];
    const orders = cache.storeOrders || [];
    const tab = state.myStoreTab || 'dashboard';

    if (isSecondary) {
        // Show order detail if selected, otherwise store stats
        if (state.activeStoreOrderId) {
            const order = orders.find(o => o.id === state.activeStoreOrderId);
            const orderItems = (cache.storeOrderItems || []).filter(i => i.order_id === state.activeStoreOrderId);
            if (order) {
                const statusMap = { pending: 'bg-amber-100 text-amber-700', processing: 'bg-blue-100 text-blue-700', shipped: 'bg-purple-100 text-purple-700', delivered: 'bg-green-100 text-green-700', cancelled: 'bg-red-100 text-red-700' };
                return `
                    <div class="h-full flex flex-col bg-white overflow-hidden">
                        <div class="p-6 border-b border-slate-100">
                            <div class="flex items-center justify-between mb-3">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Order Detail</p>
                                <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase ${statusMap[order.order_status] || 'bg-slate-100 text-slate-600'}">${order.order_status}</span>
                            </div>
                            <p class="text-sm font-black text-slate-900">${order.customer_name}</p>
                            <p class="text-[9px] text-slate-400 mt-0.5">${order.order_number || order.id}</p>
                            <p class="text-2xl font-black text-slate-900 mt-3">₹${(order.total_amount || 0).toLocaleString()}</p>
                            <p class="text-[8px] text-slate-400 mt-0.5">${new Date(order.order_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                        </div>
                        <div class="flex-1 overflow-y-auto custom-scrollbar px-6 py-4 space-y-3">
                            ${order.customer_phone ? `<div class="p-3 bg-slate-50 rounded-xl"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p><p class="text-xs font-bold text-slate-900">${order.customer_phone}</p></div>` : ''}
                            ${order.shipping_address_line1 ? `<div class="p-3 bg-slate-50 rounded-xl"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Shipping</p><p class="text-xs font-bold text-slate-900">${order.shipping_address_line1}${order.shipping_city ? ', ' + order.shipping_city : ''}${order.shipping_pincode ? ' — ' + order.shipping_pincode : ''}</p></div>` : ''}
                            ${orderItems.length > 0 ? `
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest pt-2">Items</p>
                                ${orderItems.map(i => `
                                    <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <div><p class="text-[10px] font-black text-slate-900">${i.product_name}</p><p class="text-[8px] text-slate-400">Qty: ${i.quantity}</p></div>
                                        <p class="text-xs font-black text-slate-900">₹${(i.final_price || 0).toLocaleString()}</p>
                                    </div>
                                `).join('')}
                            ` : ''}
                        </div>
                    </div>`;
            }
        }
        // Default: store overview stats
        const activeListings = listings.filter(l => l.status === 'active').length;
        const totalStock = listings.reduce((s, l) => s + (l.stock_qty || 0), 0);
        const pendingOrders = orders.filter(o => o.order_status === 'pending').length;
        return `
            <div class="h-full flex flex-col items-center justify-center text-center p-8">
                <span class="material-icons-outlined text-5xl text-slate-100 mb-4">storefront</span>
                <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Store Snapshot</p>
                <div class="grid grid-cols-1 gap-3 w-full max-w-xs">
                    <div class="p-3 bg-slate-50 rounded-xl"><p class="text-lg font-black text-slate-900">${activeListings}</p><p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Active Listings</p></div>
                    <div class="p-3 bg-slate-50 rounded-xl"><p class="text-lg font-black text-slate-900">${totalStock}</p><p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total Stock</p></div>
                    <div class="p-3 bg-slate-50 rounded-xl"><p class="text-lg font-black text-slate-900">${pendingOrders}</p><p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Pending Orders</p></div>
                </div>
                <p class="text-[8px] text-slate-300 mt-6">Select an order to view details</p>
            </div>`;
    }

    const tabs = [
        { id: 'dashboard', label: 'Overview', icon: 'dashboard' },
        { id: 'listings', label: 'Listings', icon: 'storefront' },
        { id: 'orders', label: 'Orders', icon: 'local_shipping' },
    ];

    let content = '';
    if (tab === 'listings') content = renderListings(listings);
    else if (tab === 'orders') content = renderOrders(orders);
    else content = renderDashboard(listings, orders);

    // Tab header title
    const viewLabel = tab === 'listings' && state.myStoreViewMode === 'add-listing' ? 'Add Listing' : tabs.find(t => t.id === tab)?.label || 'My Store';

    return `
        <div class="h-full flex flex-col bg-white text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-6">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900">My Store</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${viewLabel}</p>
                    </div>
                    <div class="w-8"></div>
                </div>

                <!-- Tab bar -->
                <div class="flex gap-1 bg-slate-100 rounded-xl p-1">
                    ${tabs.map(t => `
                        <button onclick="window.setMyStoreTab('${t.id}')"
                            class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all
                            ${tab === t.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-700'}">
                            <span class="material-icons-outlined text-sm">${t.icon}</span>
                            <span class="hidden sm:block">${t.label}</span>
                        </button>
                    `).join('')}
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar">
                ${content}
            </div>
        </div>
    `;
}
