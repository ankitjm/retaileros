import { state } from '../../state.js';

export function renderShipping(isMobile) {
    const cache = window.getCache();
    const orders = cache.storeOrders || [];
    const orderItems = cache.storeOrderItems || [];

    const readyToShip = orders.filter(o => o.order_status === 'confirmed');
    const inTransit = orders.filter(o => o.order_status === 'shipped');
    const delivered = orders.filter(o => o.order_status === 'delivered');

    const renderOrderCard = (o, section) => {
        const items = orderItems.filter(i => i.order_id === o.id);
        const topItem = items[0] ? items[0].product_name : 'Order items';

        return `
            <button type="button" onclick="window.setActiveStoreOrder('${o.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${state.activeStoreOrderId === o.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                <div class="flex justify-between items-start mb-2 text-left">
                    <div class="text-left flex-1 min-w-0">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${o.order_number}</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${o.customer_name}</h4>
                    </div>
                    <p class="text-sm font-black text-slate-900 tracking-tighter shrink-0 ml-2">₹${parseInt(o.total_amount).toLocaleString()}</p>
                </div>
                <div class="flex items-center justify-between text-left">
                    <p class="text-[10px] font-bold text-slate-500 truncate">${topItem}</p>
                    <div class="flex items-center gap-2 shrink-0 ml-2">
                        ${section === 'transit' && o.courier_name ? `
                            <span class="text-[8px] font-bold text-slate-500">${o.courier_name}</span>
                        ` : ''}
                        ${section === 'delivered' ? `
                            <span class="text-[8px] font-bold text-slate-500">${o.delivered_date ? new Date(o.delivered_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : 'Delivered'}</span>
                        ` : ''}
                        <p class="text-[9px] font-black text-slate-300">${[o.shipping_city, o.shipping_pincode].filter(Boolean).join(' ')}</p>
                    </div>
                </div>
            </button>
        `;
    };

    return `
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${readyToShip.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Ready</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${inTransit.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">In Transit</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${delivered.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Delivered</p>
                </div>
            </div>

            <!-- Ready to Ship -->
            <section class="space-y-3 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Ready to Ship (${readyToShip.length})
                </p>
                ${readyToShip.length === 0 ? `
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">inventory_2</span>
                        <p class="text-[9px] font-bold text-slate-300">No orders awaiting shipment</p>
                    </div>
                ` : readyToShip.map(o => renderOrderCard(o, 'ready')).join('')}
            </section>

            <!-- In Transit -->
            <section class="space-y-3 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> In Transit (${inTransit.length})
                </p>
                ${inTransit.length === 0 ? `
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">local_shipping</span>
                        <p class="text-[9px] font-bold text-slate-300">No shipments in transit</p>
                    </div>
                ` : inTransit.map(o => renderOrderCard(o, 'transit')).join('')}
            </section>

            <!-- Recently Delivered -->
            ${delivered.length > 0 ? `
                <section class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full"></span> Recently Delivered (${delivered.length})
                    </p>
                    ${delivered.slice(0, 5).map(o => renderOrderCard(o, 'delivered')).join('')}
                </section>
            ` : ''}
        </div>
    `;
}
