import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Get payment mode icon
function getPaymentIcon(mode) {
    switch (mode) {
        case 'cash': case 'cod': return 'payments';
        case 'card': return 'credit_card';
        case 'upi': return 'qr_code';
        case 'online': return 'language';
        default: return 'account_balance_wallet';
    }
}

function getPaymentLabel(mode) {
    switch (mode) {
        case 'cash': case 'cod': return 'Cash on Delivery';
        case 'card': return 'Card';
        case 'upi': return 'UPI';
        case 'online': return 'Online Payment';
        default: return 'Payment';
    }
}

export function renderOrderDetail() {
    const cache = window.getCache();
    const orders = cache.storeOrders || [];
    const orderItems = cache.storeOrderItems || [];

    const order = orders.find(o => o.id === state.activeStoreOrderId);
    if (!order) {
        return `<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">search_off</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select an order to view details</p>
            </div>
        </div>`;
    }

    const items = orderItems.filter(i => i.order_id === order.id);
    const isCancelled = order.order_status === 'cancelled';
    const isDelivered = order.order_status === 'delivered';
    const isPaid = order.payment_status === 'paid';
    const totalAmount = parseInt(order.total_amount) || 0;
    const subtotal = totalAmount / 1.18;
    const gst = totalAmount - subtotal;

    const statusSteps = ['pending', 'confirmed', 'shipped', 'delivered'];
    const currentStepIdx = statusSteps.indexOf(order.order_status);

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'slate';
            case 'confirmed': return 'slate';
            case 'shipped': return 'slate';
            case 'delivered': return 'slate';
            case 'cancelled': return 'slate';
            default: return 'slate';
        }
    };

    const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
    const formatTime = (d) => d ? new Date(d).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) : '';

    // Action handlers
    window._confirmOrder = async (orderId) => {
        try {
            await db.storeOrders.updateStatus(orderId, 'confirmed');
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) window._db_cache.storeOrders[idx].order_status = 'confirmed';
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Confirmed order ${order.order_number}`, user_name: r.contact_person || 'Owner', icon: 'check_circle', color: 'blue' });
            if (window.toast) window.toast.success('Order confirmed');
            window.triggerRender();
        } catch (err) {
            console.error('Confirm order failed:', err);
            if (window.toast) window.toast.error('Failed to confirm order');
        }
    };

    window._shipOrder = async (orderId) => {
        const container = document.getElementById('shipping-form');
        const tracking = container?.querySelector('[data-field="tracking_number"]')?.value || '';
        const courier = container?.querySelector('[data-field="courier_name"]')?.value || '';

        if (!tracking) { if (window.toast) window.toast.error('Enter tracking number'); return; }
        if (!courier) { if (window.toast) window.toast.error('Enter courier name'); return; }

        try {
            const now = new Date().toISOString();
            await db.storeOrders.updateStatus(orderId, 'shipped', {
                tracking_number: tracking,
                courier_name: courier,
                shipped_date: now
            });
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) {
                window._db_cache.storeOrders[idx].order_status = 'shipped';
                window._db_cache.storeOrders[idx].tracking_number = tracking;
                window._db_cache.storeOrders[idx].courier_name = courier;
                window._db_cache.storeOrders[idx].shipped_date = now;
            }
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Shipped order ${order.order_number} via ${courier}`, user_name: r.contact_person || 'Owner', icon: 'local_shipping', color: 'purple' });
            if (window.toast) window.toast.success('Order marked as shipped');
            window.triggerRender();
        } catch (err) {
            console.error('Ship order failed:', err);
            if (window.toast) window.toast.error('Failed to update shipping');
        }
    };

    window._deliverOrder = async (orderId) => {
        try {
            const now = new Date().toISOString();

            // 1. Create sale record
            const saleId = `sale_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            await db.sales.add({
                id: saleId,
                customer_id: null,
                customer_name: order.customer_name,
                date: now,
                total_amount: order.total_amount,
                status: 'completed',
                payment_mode: order.payment_mode === 'cod' ? 'cash' : order.payment_mode === 'upi' ? 'upi' : 'card',
                payment_reference: order.payment_reference || order.order_number,
                gst_required: 0,
                company_id: null,
                installation_required: 0,
                installation_date: null,
                source: 'online'
            });

            // 2. Create sale items
            for (const item of items) {
                const siId = `si_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
                await db.sales.addItem({
                    id: siId,
                    sale_id: saleId,
                    product_id: item.product_id,
                    product_name: item.product_name,
                    category: item.category || null,
                    quantity: item.quantity,
                    price: item.unit_price,
                    discount_type: null,
                    discount_value: 0,
                    discount_amount: item.discount_amount || 0,
                    scheme_id: null,
                    final_price: item.final_price,
                    imei: null,
                    serial_number: null,
                    mac_id: null,
                    manufacturing_date: null,
                    installation_date: null,
                    extra_fields: null
                });
            }

            // 3. Update order
            await db.storeOrders.updateStatus(orderId, 'delivered', {
                delivered_date: now,
                sale_id: saleId,
                payment_status: 'paid'
            });

            // 4. Sync to refresh cache
            await syncData();

            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Order ${order.order_number} delivered & invoice created`, user_name: r.contact_person || 'Owner', icon: 'check_circle', color: 'green' });
            if (window.toast) window.toast.success('Order delivered & sale recorded');
        } catch (err) {
            console.error('Deliver order failed:', err);
            if (window.toast) window.toast.error('Failed to mark as delivered');
        }
    };

    window._cancelOrder = async (orderId) => {
        if (!confirm('Cancel this order?')) return;
        try {
            await db.storeOrders.updateStatus(orderId, 'cancelled');
            const idx = window._db_cache.storeOrders.findIndex(o => o.id === orderId);
            if (idx >= 0) window._db_cache.storeOrders[idx].order_status = 'cancelled';
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Cancelled order ${order.order_number}`, user_name: r.contact_person || 'Owner', icon: 'cancel', color: 'red' });
            if (window.toast) window.toast.success('Order cancelled');
            window.triggerRender();
        } catch (err) {
            console.error('Cancel order failed:', err);
            if (window.toast) window.toast.error('Failed to cancel order');
        }
    };

    // Share order via WhatsApp
    window._shareOrderWhatsApp = () => {
        let text = `ORDER #${order.order_number}\n`;
        text += `━━━━━━━━━━━━━━━━━━━━\n`;
        text += `${formatDate(order.order_date)}\n\n`;
        text += `Customer: ${order.customer_name}\n`;
        text += `Phone: ${order.customer_phone || 'N/A'}\n`;
        if (order.shipping_city) text += `City: ${order.shipping_city}\n`;
        text += `\n━━━━━━━━━━━━━━━━━━━━\nITEMS:\n`;
        items.forEach(item => {
            text += `• ${item.product_name} - ₹${parseInt(item.final_price).toLocaleString()}\n`;
        });
        text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
        text += `TOTAL: ₹${totalAmount.toLocaleString()}\n`;
        text += `Status: ${order.order_status.toUpperCase()}\n`;
        if (order.tracking_number) text += `Tracking: ${order.tracking_number}\n`;
        text += `\nPowered by RetailerOS`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Print order
    window._printOrder = () => { window.print(); };

    return `
        <div id="order-detail" class="bg-white text-slate-900 leading-relaxed relative h-full flex flex-col print:shadow-none print:border-0">
            <!-- Back Button -->
            <header class="p-4 shrink-0 flex items-center gap-3 border-b border-slate-100 bg-white sticky top-0 z-20 print:hidden">
                <button onclick="window.setMyStoreViewMode('orders')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900">
                    <span class="material-icons-outlined">arrow_back</span>
                </button>
                <div>
                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Order Detail</h3>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">#${order.order_number}</p>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 sm:p-8">
            <!-- Invoice Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">${isDelivered ? 'Invoice' : isCancelled ? 'Cancelled Order' : 'Order'}</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • Online Order</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>Order #${order.order_number}</span>
                    <span class="text-slate-500 font-black">${order.order_status.toUpperCase()}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                <div class="text-left">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Customer</p>
                    <p class="text-sm font-black text-slate-900 text-left">${order.customer_name}</p>
                    <p class="text-[10px] font-bold text-slate-400 text-left">${order.customer_phone || '—'}</p>
                    ${order.customer_email ? `<p class="text-[10px] font-bold text-slate-400 text-left">${order.customer_email}</p>` : ''}
                </div>
                <div class="text-right">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Order Date</p>
                    <p class="text-sm font-black text-slate-900 text-right">${formatDate(order.order_date)}</p>
                    <p class="text-[10px] font-bold text-slate-400 text-right">${formatTime(order.order_date)}</p>
                </div>
            </div>

            <!-- Shipping Address -->
            ${order.shipping_address_line1 || order.shipping_city ? `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-start gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                        <span class="material-icons-outlined text-sm">location_on</span>
                    </div>
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Shipping Address</p>
                        <p class="text-xs font-bold text-slate-900">${order.shipping_address_line1 || ''}</p>
                        ${order.shipping_address_line2 ? `<p class="text-xs font-bold text-slate-700">${order.shipping_address_line2}</p>` : ''}
                        <p class="text-[10px] font-bold text-slate-500">${[order.shipping_city, order.shipping_state, order.shipping_pincode].filter(Boolean).join(', ')}</p>
                    </div>
                </div>
            ` : ''}

            <!-- Tracking Info -->
            ${order.tracking_number ? `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                        <span class="material-icons-outlined text-sm">local_shipping</span>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Shipment Details</p>
                        <div class="flex items-center gap-4 mt-1">
                            <span class="text-xs font-bold text-slate-900">${order.courier_name || '—'}</span>
                            <span class="text-xs font-black text-slate-900 font-mono">${order.tracking_number}</span>
                        </div>
                        <div class="flex items-center gap-4 mt-1">
                            ${order.shipped_date ? `<span class="text-[9px] font-bold text-slate-400">Shipped: ${formatDate(order.shipped_date)}</span>` : ''}
                            ${order.delivered_date ? `<span class="text-[9px] font-bold text-slate-500">Delivered: ${formatDate(order.delivered_date)}</span>` : ''}
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Status Progress (compact) -->
            ${!isCancelled ? `
                <div class="flex items-center justify-between mb-6 px-2">
                    ${statusSteps.map((step, i) => `
                        <div class="flex flex-col items-center gap-1">
                            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${i <= currentStepIdx ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-300'}">
                                ${i <= currentStepIdx ? '<span class="material-icons-outlined text-xs">check</span>' : '<span class="material-icons-outlined text-xs">circle</span>'}
                            </div>
                            <p class="text-[6px] font-black uppercase tracking-widest ${i <= currentStepIdx ? 'text-slate-700' : 'text-slate-300'}">${step}</p>
                        </div>
                        ${i < statusSteps.length - 1 ? `<div class="flex-1 h-0.5 mx-1 ${i < currentStepIdx ? 'bg-slate-900' : 'bg-slate-100'}"></div>` : ''}
                    `).join('')}
                </div>
            ` : ''}

            <!-- Items -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${items.map(item => `
                    <div class="pb-4 border-b border-slate-100 last:border-0">
                        <div class="flex justify-between items-start mb-1 text-left">
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${item.product_name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${item.category || 'Standard'} · Qty: ${item.quantity}</p>
                            </div>
                            <div class="text-right shrink-0 ml-2">
                                <p class="text-sm font-black text-slate-900">₹${parseInt(item.final_price).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${subtotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${gst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">₹${totalAmount.toLocaleString()}</span>
                </div>
            </div>

            <!-- Payment Status -->
            ${isPaid ? `
                <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-icons-outlined text-sm">${getPaymentIcon(order.payment_mode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${getPaymentLabel(order.payment_mode)}</p>
                            ${order.payment_reference ? `<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase text-left">Ref: ${order.payment_reference}</p>` : ''}
                        </div>
                    </div>
                    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                </div>
            ` : isCancelled ? `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                        <span class="material-icons-outlined text-sm">cancel</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Cancelled</p>
                        <p class="text-[8px] font-bold text-slate-400">This order has been cancelled</p>
                    </div>
                </div>
            ` : `
                <div class="bg-slate-100 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <span class="material-icons-outlined text-sm">pending</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment ${order.payment_mode === 'cod' ? 'on Delivery' : 'Pending'}</p>
                        <p class="text-[8px] font-bold text-slate-400">${order.payment_mode === 'cod' ? 'Cash on Delivery' : 'Awaiting payment confirmation'}</p>
                    </div>
                </div>
            `}

            <!-- Shipping Form (when confirmed, ready to ship) -->
            ${order.order_status === 'confirmed' ? `
                <div id="shipping-form" class="space-y-3 mt-6 no-print">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="material-icons-outlined text-xs">local_shipping</span> Ship This Order
                    </p>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Courier Name</p>
                        <input type="text" data-field="courier_name" placeholder="e.g. BlueDart, Delhivery, DTDC" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900">
                    </div>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tracking Number</p>
                        <input type="text" data-field="tracking_number" placeholder="e.g. AWB123456789" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900 font-mono">
                    </div>
                </div>
            ` : ''}

            <!-- Action Buttons -->
            ${!isCancelled && !isDelivered ? `
                <div class="space-y-3 mt-6 no-print">
                    ${order.order_status === 'pending' ? `
                        <button type="button" onclick="window._confirmOrder('${order.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">thumb_up</span> Confirm Order
                        </button>
                    ` : ''}
                    ${order.order_status === 'confirmed' ? `
                        <button type="button" onclick="window._shipOrder('${order.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">local_shipping</span> Mark as Shipped
                        </button>
                    ` : ''}
                    ${order.order_status === 'shipped' ? `
                        <button type="button" onclick="window._deliverOrder('${order.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">check_circle</span> Mark as Delivered
                        </button>
                    ` : ''}
                    <button type="button" onclick="window._cancelOrder('${order.id}')" class="w-full py-3 bg-white border border-slate-200 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">cancel</span> Cancel Order
                    </button>
                </div>
            ` : ''}

            ${isDelivered && order.sale_id ? `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                        <span class="material-icons-outlined text-sm">receipt_long</span>
                    </div>
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-700 uppercase tracking-widest">Invoice Created in Sales Desk</p>
                        <p class="text-[8px] font-bold text-slate-500">Sale ID: ${order.sale_id}</p>
                    </div>
                </div>
            ` : ''}

            <!-- Footer Action Icons -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                <button type="button" onclick="window._shareOrderWhatsApp()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share via WhatsApp">
                    <span class="material-icons-outlined text-lg">chat</span>
                </button>
                <button type="button" onclick="window._printOrder()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Print">
                    <span class="material-icons-outlined text-lg">print</span>
                </button>
            </div>
            </div>
        </div>
    `;
}
