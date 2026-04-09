import { state } from '../../state.js';

// Get payment mode icon
function getPaymentIcon(mode) {
    switch (mode) {
        case 'cash': return 'payments';
        case 'card': return 'credit_card';
        case 'upi': return 'qr_code';
        default: return 'account_balance_wallet';
    }
}

// Get payment mode label
function getPaymentLabel(mode) {
    switch (mode) {
        case 'cash': return 'Cash';
        case 'card': return 'Card';
        case 'upi': return 'UPI';
        default: return 'Payment';
    }
}

export function renderClientInvoice(layout = 'desktop') {
    const cache = window.getCache();
    const saleId = state.clientInvoiceId;
    const sale = (cache.sales || []).find(s => s.id === saleId);
    
    if (!sale) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">receipt_long</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Invoice not found</p>
                </div>
            </div>
        `;
    }
    
    const saleItems = (cache.saleItems || []).filter(i => i.sale_id === sale.id);
    const customer = cache.customers?.find(c => c.id === sale.customer_id);
    const company = sale.company_id ? cache.companies?.find(c => c.id === sale.company_id) : null;
    const totalVal = sale.total_amount || 0;
    
    // Parse extra fields for items
    const items = saleItems.map(s => {
        let extraFields = [];
        if (s.extra_fields) {
            try { extraFields = JSON.parse(s.extra_fields); } catch (e) {}
        }
        return {
            name: s.product_name,
            category: s.category || 'Standard',
            price: s.price,
            imei: s.imei,
            serial_number: s.serial_number,
            mac_id: s.mac_id,
            manufacturing_date: s.manufacturing_date,
            installation_date: s.installation_date,
            extraFields: extraFields
        };
    });
    
    const data = {
        id: sale.id,
        status: sale.status,
        customer: sale.customer_name,
        phone: customer?.phone || 'N/A',
        date: new Date(sale.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: new Date(sale.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST',
        items: items,
        subtotal: totalVal / 1.18,
        gst: totalVal - (totalVal / 1.18),
        total: totalVal,
        paymentMode: sale.payment_mode,
        paymentReference: sale.payment_reference,
        gstRequired: sale.gst_required,
        company: company,
        installationRequired: sale.installation_required,
        installationDate: sale.installation_date
    };

    return `
        <div class="h-full flex flex-col bg-white">
            <!-- Header with back button -->
            <div class="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-4 shrink-0 bg-slate-50">
                <button onclick="window.setClientMode('profile')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                    <span class="material-icons-outlined">arrow_back</span>
                </button>
                <div>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight">Invoice #${data.id}</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${data.date}</p>
                </div>
            </div>
            
            <!-- Scrollable Receipt Content -->
            <div class="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
                <div class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm border border-slate-100">
                    <!-- Header -->
                    <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                        <h2 class="text-2xl font-black tracking-tighter mb-1">Invoice</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                        <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                            <span>GSTIN: 27AAACR3456D1Z5</span>
                            <span>Order #${data.id}</span>
                        </div>
                    </div>

                    <!-- Info Grid -->
                    <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <div class="text-left">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Billed To</p>
                           <p class="text-sm font-black text-slate-900">${data.customer}</p>
                           <p class="text-[10px] font-bold text-slate-400">${data.phone}</p>
                        </div>
                        <div class="text-right">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transaction</p>
                           <p class="text-sm font-black text-slate-900">${data.date}</p>
                           <p class="text-[10px] font-bold text-slate-400">${data.time}</p>
                        </div>
                    </div>

                    <!-- GST Company Info -->
                    ${data.gstRequired && data.company ? `
                        <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                            <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                                <span class="material-icons-outlined text-sm">business</span>
                                GST Invoice
                            </div>
                            <p class="text-sm font-black text-slate-900">${data.company.name}</p>
                            <p class="text-[10px] font-bold text-slate-500">GSTIN: ${data.company.gst_number}</p>
                        </div>
                    ` : ''}

                    <!-- Items -->
                    <div class="space-y-4 text-left">
                        ${data.items.map(item => `
                            <div class="pb-4 border-b border-slate-100 last:border-0">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-black text-slate-900 truncate">${item.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">${item.category}</p>
                                    </div>
                                    <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(item.price).toLocaleString()}</p>
                                </div>
                                ${(item.imei || item.serial_number || item.mac_id || item.installation_date || (item.extraFields && item.extraFields.length > 0)) ? `
                                    <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                        <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                            <span class="material-icons-outlined text-xs">verified</span> Device Info
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            ${item.imei ? `
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${item.imei}</p>
                                                </div>
                                            ` : ''}
                                            ${item.serial_number ? `
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${item.serial_number}</p>
                                                </div>
                                            ` : ''}
                                            ${item.mac_id ? `
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${item.mac_id}</p>
                                                </div>
                                            ` : ''}
                                            ${item.manufacturing_date ? `
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(item.manufacturing_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</p>
                                                </div>
                                            ` : ''}
                                            ${(item.extraFields || []).map(field => `
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">${field.label}</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${field.value}</p>
                                                </div>
                                            `).join('')}
                                            ${item.installation_date ? `
                                                <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                                    <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                                    </p>
                                                    <p class="text-[9px] font-black text-slate-700">${new Date(item.installation_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                                                </div>
                                            ` : ''}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>

                    <!-- Footer Totals -->
                    <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${data.subtotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${data.gst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                        <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                            <span>Grand Total</span>
                            <span>₹${parseInt(data.total).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <!-- Payment Status -->
                    ${data.paymentMode ? `
                        <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-icons-outlined text-sm">${getPaymentIcon(data.paymentMode)}</span>
                                </div>
                                <div>
                                    <p class="text-[9px] font-black uppercase tracking-widest">Paid via ${getPaymentLabel(data.paymentMode)}</p>
                                    ${data.paymentReference ? `<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase">Ref: ${data.paymentReference}</p>` : ''}
                                </div>
                            </div>
                            <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                        </div>
                    ` : ''}
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center gap-3 mt-6 pt-4 border-t border-slate-100">
                        <button type="button" onclick="window.shareInvoiceWhatsApp('${data.id}')" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">chat</span>
                            WhatsApp
                        </button>
                        <button type="button" onclick="window.print()" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">print</span>
                            Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Share invoice via WhatsApp
window.shareInvoiceWhatsApp = (saleId) => {
    const cache = window.getCache();
    const sale = (cache.sales || []).find(s => s.id === saleId);
    if (!sale) return;
    
    const customer = cache.customers?.find(c => c.id === sale.customer_id);
    const saleItems = (cache.saleItems || []).filter(i => i.sale_id === sale.id);
    
    let text = `INVOICE #${sale.id}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `${new Date(sale.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}\n\n`;
    text += `${sale.customer_name}\n`;
    text += `${customer?.phone || ''}\n`;
    text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += `ITEMS:\n`;
    
    saleItems.forEach(item => {
        text += `\n• ${item.product_name}\n`;
        text += `  ${item.category || 'Product'} - ₹${parseInt(item.price).toLocaleString()}\n`;
    });
    
    text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += `TOTAL: ₹${parseInt(sale.total_amount).toLocaleString()}\n`;
    text += `\nThank you for shopping!\n`;
    text += `Powered by RetailerOS`;
    
    const url = `https://wa.me/${customer?.phone?.replace(/\D/g, '') || ''}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};
