import { state } from '../../state.js';

export function renderDashboard(isMobile) {
    const cache = window.getCache();
    const listings = cache.storeListings || [];
    const orders = cache.storeOrders || [];
    const orderItems = cache.storeOrderItems || [];
    const retailerId = localStorage.getItem('retaileros_retailer_id');
    const retailer = (cache.retailers || []).find(r => r.id === retailerId) || {};
    const retailerCode = localStorage.getItem('retaileros_retailer_code') || 'your-store';

    const storeUrl = `https://store.retaileros.in/${retailerCode}`;

    // Stats
    const activeListings = listings.filter(l => l.status === 'active').length;
    const totalOrders = orders.length;
    const deliveredOrders = orders.filter(o => o.order_status === 'delivered');
    const onlineRevenue = deliveredOrders.reduce((sum, o) => sum + (parseInt(o.total_amount) || 0), 0);
    const pendingOrders = orders.filter(o => o.order_status === 'pending').length;
    const confirmedOrders = orders.filter(o => o.order_status === 'confirmed').length;
    const shippedOrders = orders.filter(o => o.order_status === 'shipped').length;

    // Recent orders (last 5)
    const recentOrders = orders.slice(0, 5);

    // Top products (from order items)
    const productCounts = {};
    orderItems.forEach(item => {
        const name = item.product_name || 'Unknown';
        productCounts[name] = (productCounts[name] || 0) + (item.quantity || 1);
    });
    const topProducts = Object.entries(productCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    // Copy URL handler
    window._copyStoreUrl = async () => {
        try {
            await navigator.clipboard.writeText(storeUrl);
            if (window.toast) window.toast.success('Store URL copied!');
        } catch (err) {
            if (window.toast) window.toast.error('Failed to copy');
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';
            case 'confirmed': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';
            case 'shipped': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';
            case 'delivered': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-900 text-white">Delivered</span>';
            case 'cancelled': return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400">Cancelled</span>';
            default: return '';
        }
    };

    return `
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Store URL -->
            <div class="card p-5 border-slate-200 shadow-sm text-left">
                <div class="flex items-center justify-between mb-3 text-left">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Your Online Store</p>
                        <h3 class="text-sm font-black text-slate-900 tracking-tight text-left">${retailer.store_name || retailer.contact_person || 'My Store'}</h3>
                    </div>
                    <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                        <span class="material-icons-outlined text-slate-500">language</span>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-left">
                    <div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-left overflow-hidden">
                        <p class="text-[10px] font-bold text-slate-500 truncate">${storeUrl}</p>
                    </div>
                    <button type="button" onclick="window._copyStoreUrl()" class="px-4 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-1.5 shrink-0">
                        <span class="material-icons-outlined text-sm">content_copy</span> Copy
                    </button>
                </div>
                <div class="flex items-center gap-4 mt-3 text-left">
                    <span class="text-[8px] font-bold text-slate-500 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full"></span> Store Live
                    </span>
                    <span class="text-[8px] font-bold text-slate-400">${activeListings} products listed</span>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-3 text-left">
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">inventory_2</span>
                        <span class="text-[8px] font-black text-slate-500 uppercase">Active</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${activeListings}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Listings</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">shopping_bag</span>
                        <span class="text-[8px] font-black text-slate-500 uppercase">${pendingOrders > 0 ? pendingOrders + ' new' : 'All'}</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${totalOrders}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">payments</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${onlineRevenue > 0 ? '₹' + onlineRevenue.toLocaleString() : '₹0'}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Online Revenue</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">pending_actions</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${pendingOrders + confirmedOrders + shippedOrders}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">In Progress</p>
                </div>
            </div>

            <!-- Recent Orders -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Orders
                    </p>
                    ${orders.length > 5 ? `
                        <button type="button" onclick="window.setMyStoreTab('orders')" class="text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">View All</button>
                    ` : ''}
                </div>
                ${recentOrders.length === 0 ? `
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">shopping_bag</span>
                        <p class="text-[9px] font-bold text-slate-300">No orders yet — share your store URL to start receiving orders</p>
                    </div>
                ` : `
                    <div class="space-y-2">
                        ${recentOrders.map(o => `
                            <button type="button" onclick="window.setActiveStoreOrder('${o.id}')" class="card p-3 sm:p-4 border-2 transition-all cursor-pointer text-left w-full ${state.activeStoreOrderId === o.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                <div class="flex items-center justify-between text-left">
                                    <div class="flex items-center gap-3 flex-1 min-w-0 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-0.5 text-left">
                                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-tighter">${o.order_number}</p>
                                                ${getStatusBadge(o.order_status)}
                                            </div>
                                            <p class="text-xs font-black text-slate-900 truncate">${o.customer_name}</p>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0 ml-2">
                                        <p class="text-sm font-black text-slate-900 tracking-tighter">₹${parseInt(o.total_amount || 0).toLocaleString()}</p>
                                        <p class="text-[8px] font-bold text-slate-300">${new Date(o.order_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                                    </div>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                `}
            </section>

            <!-- Top Products -->
            ${topProducts.length > 0 ? `
                <section class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Top Selling Products
                    </p>
                    <div class="card p-4 space-y-3">
                        ${topProducts.map(([name, count], i) => `
                            <div class="flex items-center justify-between ${i < topProducts.length - 1 ? 'pb-3 border-b border-slate-50' : ''} text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[9px] font-black text-slate-400">${i + 1}</span>
                                    <p class="text-xs font-black text-slate-900 truncate">${name}</p>
                                </div>
                                <p class="text-[9px] font-black text-slate-400">${count} sold</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}
        </div>
    `;
}
