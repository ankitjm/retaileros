import { state } from '../../state.js';

export function renderReceiptPreview() {
    // Data for the preview - in a real app this would come from the selected invoice ID
    const isHistory = state.currentTab === 'history';
    let data;

    if (isHistory) {
        // Fetch from Sales History
        const cache = window.getCache();
        const sales = (cache.sales || []).filter(s => s.id === state.salesHistoryId);

        if (sales.length > 0) {
            const sale = sales[0];
            const saleItems = (cache.saleItems || []).filter(i => i.sale_id === sale.id);
            const totalVal = sale.total_amount || 0;

            data = {
                id: sale.id,
                customer: sale.customer_name,
                phone: (cache.customers?.find(c => c.name === sale.customer_name)?.phone) || 'N/A',
                date: new Date(sale.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                time: new Date(sale.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST',
                items: saleItems.map(s => ({
                    n: s.product_name,
                    v: s.category || 'Standard',
                    p: '₹' + parseInt(s.price).toLocaleString(),
                    imei: s.imei
                })),
                subtotal: '₹' + (totalVal / 1.18).toLocaleString(undefined, { maximumFractionDigits: 2 }),
                gst: '₹' + (totalVal - (totalVal / 1.18)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
                total: '₹' + parseInt(totalVal).toLocaleString()
            };
        } else {
            return `<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
                <span class="material-icons-outlined text-4xl mb-2">receipt_long</span>
                <p class="text-xs font-black uppercase tracking-widest">Select a transaction to view receipt</p>
            </div>`;
        }
    } else {
        // Fetch from Active Cart Draft
        const cart = window.getActiveCart ? window.getActiveCart() : [];
        const customer = window.getSelectedCustomer ? window.getSelectedCustomer() : { name: 'Walk-in Customer', id: null };
        const totalAmount = cart.reduce((sum, item) => sum + item.mop, 0);

        data = {
            id: 'DRAFT',
            customer: customer.name,
            phone: window.getCache().customers?.find(c => c.id === customer.id)?.phone || '',
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST',
            items: cart.map(item => ({
                n: item.name,
                v: item.category,
                p: '₹' + item.mop.toLocaleString(),
                imei: null // IMEI not selected in cart yet
            })),
            subtotal: '₹' + (totalAmount / 1.18).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            gst: '₹' + (totalAmount - (totalAmount / 1.18)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            total: '₹' + totalAmount.toLocaleString()
        };

        if (cart.length === 0) {
            return `<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
                <span class="material-icons-outlined text-4xl mb-2">shopping_cart</span>
                <p class="text-xs font-black uppercase tracking-widest">Add items to cart to preview invoice</p>
            </div>`;
        }
    }

    return `
        <div class="card p-8 bg-white text-slate-900 font-inter leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">Invoice Preview</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>GSTIN: 27AAACR3456D1Z5</span>
                    <span>Order #${data.id}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-8 mb-8">
                <div class="text-left">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Billed To</p>
                   <p class="text-sm font-black text-slate-900 text-left">${data.customer}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-left">${data.phone}</p>
                </div>
                <div class="text-right">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Transaction</p>
                   <p class="text-sm font-black text-slate-900 text-right">${data.date}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-right">${data.time}</p>
                </div>
            </div>

            <!-- Items -->
            <div class="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${data.items.map(item => `
                    <div>
                        <div class="flex justify-between items-start mb-2 text-left">
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${item.n}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${item.v}</p>
                            </div>
                            <p class="text-sm font-black text-slate-900 text-right">${item.p}</p>
                        </div>
                        ${item.imei ? `
                            <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 grid grid-cols-2 gap-4 text-left">
                                 <div class="col-span-2 flex items-center gap-2 text-[9px] font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-1 text-left">
                                     <span class="material-icons-outlined text-xs">verified</span> Device Lifecycle Management
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">IMEI 1</p>
                                     <p class="text-[9px] font-black text-slate-700 tabular-nums text-left">${item.imei}</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">SERIAL NUMBER</p>
                                     <p class="text-[9px] font-black text-slate-700 tabular-nums text-left">R5CW10AZ8XL</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">WARRANTY ENDS</p>
                                     <p class="text-[9px] font-black text-slate-900 tabular-nums text-left">23 Oct 2024</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">STATUS</p>
                                     <p class="text-[9px] font-black text-green-500 uppercase text-left">Active</p>
                                 </div>
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            <!-- Footer Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-6 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>${data.subtotal}</span></div>
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>${data.gst}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">${data.total}</span>
                </div>
            </div>
            
            <!-- Payment -->
            <div class="bg-green-50 border border-green-100 p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><span class="material-icons-outlined text-sm">account_balance_wallet</span></div>
                    <div class="text-left">
                         <p class="text-[9px] font-black text-green-700 uppercase tracking-widest text-left">Paid via UPI</p>
                         <p class="text-[8px] font-bold text-green-600 tracking-widest uppercase text-left">Ref: 329849202111</p>
                    </div>
                </div>
                <span class="text-[9px] font-black text-green-600 bg-white px-2 py-1 rounded shadow-sm uppercase tracking-widest">Authorized</span>
            </div>
            
            <!-- Print Button (Desktop & Mobile) -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                 <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-lg">share</span></button>
                 <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-lg">print</span></button>
            </div>
        </div>
    `;
}
