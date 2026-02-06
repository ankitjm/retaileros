import { state } from '../../state.js';
import { db } from '../../utils/db.js';

export function renderOrders(isMobile) {
    const cache = window.getCache();
    const orders = cache.storeOrders || [];
    const orderItems = cache.storeOrderItems || [];

    // Filter state
    window._storeOrderFilter = window._storeOrderFilter || 'all';

    window._setOrderFilter = (filter) => {
        window._storeOrderFilter = filter;
        window.triggerRender();
    };

    const filter = window._storeOrderFilter;
    const filtered = filter === 'all' ? orders : orders.filter(o => o.order_status === filter);

    const statusCounts = {
        all: orders.length,
        pending: orders.filter(o => o.order_status === 'pending').length,
        confirmed: orders.filter(o => o.order_status === 'confirmed').length,
        shipped: orders.filter(o => o.order_status === 'shipped').length,
        delivered: orders.filter(o => o.order_status === 'delivered').length,
        cancelled: orders.filter(o => o.order_status === 'cancelled').length,
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Pending</span>';
            case 'confirmed': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';
            case 'shipped': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-300 text-slate-700">Shipped</span>';
            case 'delivered': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Delivered</span>';
            case 'cancelled': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Cancelled</span>';
            default: return '';
        }
    };

    const getPaymentBadge = (status) => {
        if (status === 'paid') return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">Paid</span>';
        if (status === 'failed') return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">Failed</span>';
        return '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>';
    };

    // Create test order handler (for demo/testing)
    window._createTestOrder = async () => {
        const cache = window.getCache();
        const listings = (cache.storeListings || []).filter(l => l.status === 'active');
        if (listings.length === 0) { if (window.toast) window.toast.error('No active listings to order from'); return; }

        const listing = listings[0];
        const orderId = `so_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
        const orderNum = `WEB-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${String(orders.length + 1).padStart(4, '0')}`;
        const names = ['Aarav Patel', 'Sneha Gupta', 'Rohan Mehta', 'Kavya Sharma', 'Vikram Singh'];
        const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Chennai'];
        const name = names[Math.floor(Math.random() * names.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];

        try {
            const order = {
                id: orderId, order_number: orderNum, customer_name: name,
                customer_phone: '98' + Math.floor(10000000 + Math.random() * 90000000),
                customer_email: name.split(' ')[0].toLowerCase() + '@gmail.com',
                shipping_address_line1: Math.floor(100 + Math.random() * 900) + ', Sector ' + Math.floor(1 + Math.random() * 30),
                shipping_city: city, shipping_state: city === 'Mumbai' ? 'Maharashtra' : city === 'Delhi' ? 'Delhi' : city === 'Bangalore' ? 'Karnataka' : city === 'Pune' ? 'Maharashtra' : 'Tamil Nadu',
                shipping_pincode: String(100000 + Math.floor(Math.random() * 500000)),
                order_date: new Date().toISOString(), total_amount: listing.listing_price,
                order_status: 'pending', payment_status: Math.random() > 0.3 ? 'paid' : 'pending',
                payment_mode: Math.random() > 0.5 ? 'online' : 'cod'
            };
            await db.storeOrders.add(order);

            const itemId = `soi_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            await db.storeOrders.addItem({
                id: itemId, order_id: orderId, listing_id: listing.id,
                product_id: listing.product_id, product_name: listing.product_name,
                category: listing.category, quantity: 1,
                unit_price: listing.listing_price, final_price: listing.listing_price
            });

            if (!window._db_cache.storeOrders) window._db_cache.storeOrders = [];
            window._db_cache.storeOrders.unshift(order);
            if (!window._db_cache.storeOrderItems) window._db_cache.storeOrderItems = [];
            window._db_cache.storeOrderItems.push({ id: itemId, order_id: orderId, listing_id: listing.id, product_id: listing.product_id, product_name: listing.product_name, category: listing.category, quantity: 1, unit_price: listing.listing_price, discount_amount: 0, final_price: listing.listing_price });

            db.activityLogs.add({ action: 'store', detail: `New online order ${orderNum} from ${name}`, user_name: 'System', icon: 'shopping_bag', color: 'blue' });
            if (window.toast) window.toast.success(`Test order ${orderNum} created`);
            window.triggerRender();
        } catch (err) {
            console.error('Create test order failed:', err);
            if (window.toast) window.toast.error('Failed to create test order');
        }
    };

    const filters = [
        { key: 'all', label: 'All' },
        { key: 'pending', label: 'Pending' },
        { key: 'confirmed', label: 'Confirmed' },
        { key: 'shipped', label: 'Shipped' },
        { key: 'delivered', label: 'Delivered' },
    ];

    return `
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Filter Pills -->
            <div class="flex gap-2 overflow-x-auto pb-1 text-left">
                ${filters.map(f => `
                    <button type="button" onclick="window._setOrderFilter('${f.key}')" class="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${filter === f.key ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}">
                        ${f.label} ${statusCounts[f.key] > 0 ? `(${statusCounts[f.key]})` : ''}
                    </button>
                `).join('')}
            </div>

            <!-- Orders List -->
            ${filtered.length === 0 ? `
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">shopping_bag</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        ${filter === 'all' ? 'No orders yet' : `No ${filter} orders`}
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">Online orders will appear here</span>
                    <button type="button" onclick="window._createTestOrder()" class="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                        Create Test Order
                    </button>
                </div>
            ` : `
                <section class="space-y-3 text-left">
                    ${filtered.map(o => {
                        const items = orderItems.filter(i => i.order_id === o.id);
                        const topItem = items[0] ? items[0].product_name : 'Order items';
                        const moreCount = items.length > 1 ? `+ ${items.length - 1} more` : '';

                        return `
                            <button type="button" onclick="window.setActiveStoreOrder('${o.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full ${state.activeStoreOrderId === o.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                <div class="flex justify-between items-start mb-3 text-left">
                                    <div class="text-left flex-1 min-w-0">
                                        <div class="flex items-center gap-2 mb-1 flex-wrap text-left">
                                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${o.order_number}</p>
                                            ${getStatusBadge(o.order_status)}
                                            ${getPaymentBadge(o.payment_status)}
                                        </div>
                                        <h4 class="text-lg font-black text-slate-900 tracking-tighter truncate text-left">${o.customer_name}</h4>
                                    </div>
                                    <p class="text-lg font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${o.total_amount ? parseInt(o.total_amount).toLocaleString() : 0}</p>
                                </div>
                                <div class="space-y-1 text-left">
                                    <p class="text-[10px] font-bold text-slate-500 uppercase truncate text-left">${topItem} ${moreCount}</p>
                                    <div class="flex items-center justify-between text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                                            <span class="material-icons-outlined text-xs">public</span>
                                            Online &middot; ${o.payment_mode === 'cod' ? 'COD' : o.payment_mode === 'upi' ? 'UPI' : 'Online'}
                                        </p>
                                        <p class="text-[9px] font-black text-slate-300 uppercase">${new Date(o.order_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                    </div>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </section>
            `}
        </div>

        <!-- FAB: Create Test Order -->
        ${orders.length > 0 ? `
            <div class="absolute bottom-8 right-8 z-30">
                <button type="button" onclick="window._createTestOrder()" class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform" title="Create test order">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        ` : ''}
    `;
}
