import { state } from '../../state.js';

// Print receipt function
window.printReceipt = () => {
    window.print();
};

// Share via WhatsApp
window.shareWhatsApp = () => {
    const data = getReceiptData();
    if (!data) return;
    
    const text = formatReceiptText(data);
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};

// Automate transaction - redirect to automation app
window.automateTransaction = () => {
    const data = getReceiptData();
    if (!data) {
        window.toast.warning('No transaction data to automate');
        return;
    }
    
    // Store transaction data for automation
    window._automationContext = {
        transactionId: data.id,
        customer: data.customer,
        phone: data.phone,
        items: data.items,
        total: data.total,
        date: data.date,
        installationRequired: data.installationRequired,
        installationDate: data.installationDate
    };
    
    // Navigate to automation app and set to create mode
    window.setApp('automation');
    window.setAutomationViewMode('create');
};

// Share via Native Share API
window.shareNative = async () => {
    const data = getReceiptData();
    if (!data) return;
    
    const text = formatReceiptText(data);
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: `Invoice #${data.id}`,
                text: text
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
            }
        }
    } else {
        // Fallback: copy to clipboard
        try {
            await navigator.clipboard.writeText(text);
            window.toast.success('Receipt copied to clipboard!');
        } catch (err) {
            console.error('Copy failed:', err);
            window.toast.error('Failed to copy receipt');
        }
    }
};

// Get receipt data helper
function getReceiptData() {
    const isHistory = state.currentTab === 'history';
    const cache = window.getCache();
    
    if (isHistory) {
        const sale = (cache.sales || []).find(s => s.id === state.salesHistoryId);
        if (!sale) return null;
        
        const saleItems = (cache.saleItems || []).filter(i => i.sale_id === sale.id);
        const customer = cache.customers?.find(c => c.id === sale.customer_id);
        const company = sale.company_id ? cache.companies?.find(c => c.id === sale.company_id) : null;
        const totalVal = sale.total_amount || 0;
        
        return {
            id: sale.id,
            status: sale.status,
            customer: sale.customer_name,
            customerId: sale.customer_id,
            phone: customer?.phone || 'N/A',
            date: new Date(sale.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            time: new Date(sale.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST',
            items: saleItems.map(s => {
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
            }),
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
    } else {
        const cart = window.getActiveCart ? window.getActiveCart() : [];
        const customer = window.getSelectedCustomer ? window.getSelectedCustomer() : { name: 'Walk-in Customer', id: null };
        const saleState = window.getSaleState ? window.getSaleState() : {};
        const customerData = window.getCache().customers?.find(c => c.id === customer.id);
        // Use final_price which accounts for discounts
        const totalAmount = cart.reduce((sum, item) => sum + (item.final_price || item.mop || 0), 0);
        const totalDiscount = cart.reduce((sum, item) => sum + (item.discount_amount || 0), 0);
        
        if (cart.length === 0) return null;
        
        return {
            id: 'DRAFT',
            status: 'draft',
            customer: customer.name,
            customerId: customer.id,
            phone: customerData?.phone || '',
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ' IST',
            items: cart.map(item => ({
                name: item.name,
                category: item.category,
                price: item.mop,
                discount_type: item.discount_type,
                discount_value: item.discount_value,
                discount_amount: item.discount_amount,
                scheme_name: item.scheme_name,
                final_price: item.final_price || item.mop,
                imei: item.imei,
                serial_number: item.serial_number,
                mac_id: item.mac_id,
                manufacturing_date: item.manufacturing_date,
                installation_date: item.installation_required ? item.installation_date : null,
                extraFields: item.extraFields || []
            })),
            subtotal: totalAmount / 1.18,
            gst: totalAmount - (totalAmount / 1.18),
            total: totalAmount,
            totalDiscount: totalDiscount,
            paymentMode: saleState.paymentMode,
            paymentReference: saleState.paymentReference,
            gstRequired: saleState.gstRequired,
            company: saleState.gstRequired ? { name: saleState.companyName, gst_number: saleState.gstNumber } : null,
            installationRequired: saleState.installationRequired,
            installationDate: saleState.installationDate
        };
    }
}

// Format receipt as text for sharing
function formatReceiptText(data) {
    let text = `INVOICE #${data.id}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `${data.date} | ${data.time}\n\n`;
    text += `${data.customer}\n`;
    text += `${data.phone}\n`;
    
    if (data.company) {
        text += `${data.company.name}\n`;
        text += `GST: ${data.company.gst_number}\n`;
    }
    
    text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += `ITEMS:\n`;
    
    data.items.forEach(item => {
        text += `\n• ${item.name}\n`;
        text += `  ${item.category} - ₹${parseInt(item.price).toLocaleString()}\n`;
        if (item.imei) text += `  IMEI: ${item.imei}\n`;
        if (item.serial_number) text += `  S/N: ${item.serial_number}\n`;
        if (item.installation_date) text += `  Install: ${new Date(item.installation_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}\n`;
    });
    
    text += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Subtotal: ₹${data.subtotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}\n`;
    text += `GST (18%): ₹${data.gst.toLocaleString(undefined, { maximumFractionDigits: 2 })}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `TOTAL: ₹${parseInt(data.total).toLocaleString()}\n`;
    
    if (data.paymentMode) {
        const modes = { cash: 'Cash', card: 'Card', upi: 'UPI' };
        text += `\nPaid via ${modes[data.paymentMode] || data.paymentMode}`;
        if (data.paymentReference) text += ` (Ref: ${data.paymentReference})`;
    }
    
    if (data.installationRequired && data.installationDate) {
        text += `\n\nInstallation: ${new Date(data.installationDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`;
    }
    
    text += `\n\n━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Thank you for shopping!\n`;
    text += `Powered by RetailerOS`;
    
    return text;
}

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

export function renderReceiptPreview() {
    const isHistory = state.currentTab === 'history';
    const data = getReceiptData();

    if (!data) {
        const message = isHistory 
            ? 'Select a transaction to view receipt'
            : 'Add items to cart to preview invoice';
        const icon = isHistory ? 'receipt_long' : 'shopping_cart';
        
        return `<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
            <span class="material-icons-outlined text-4xl mb-2">${icon}</span>
            <p class="text-xs font-black uppercase tracking-widest">${message}</p>
        </div>`;
    }

    const isDraft = data.status === 'draft';

    return `
        <div id="receipt-content" class="card p-6 sm:p-8 bg-white text-slate-900 font-inter leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100 print:shadow-none print:border-0">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">${isDraft ? 'Draft Invoice' : 'Invoice'}</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>GSTIN: 27AAACR3456D1Z5</span>
                    <span>Order #${data.id}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
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

            <!-- Installation Summary -->
            ${data.installationRequired ? `
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                        <span class="material-icons-outlined text-sm">build</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Installation Required</p>
                        <p class="text-[10px] font-bold text-slate-500">See individual items for scheduled dates</p>
                    </div>
                </div>
            ` : ''}

            <!-- Items -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${data.items.map(item => `
                    <div class="pb-4 border-b border-slate-100 last:border-0">
                        <div class="flex justify-between items-start mb-2 text-left">
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${item.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${item.category}</p>
                            </div>
                            <div class="text-right shrink-0 ml-2">
                                ${item.discount_amount > 0 ? `
                                    <p class="text-[9px] font-bold text-slate-400 line-through">₹${parseInt(item.price).toLocaleString()}</p>
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(item.final_price || item.price).toLocaleString()}</p>
                                ` : `
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(item.price).toLocaleString()}</p>
                                `}
                            </div>
                        </div>
                        ${item.discount_amount > 0 ? `
                            <div class="flex items-center gap-2 mb-2 bg-slate-900 text-white px-2 py-1 rounded-lg">
                                <span class="material-icons-outlined text-xs">local_offer</span>
                                <span class="text-[8px] font-black uppercase flex-1">
                                    ${item.discount_type === 'scheme' ? item.scheme_name : `Store Discount (${item.discount_value}%)`}
                                </span>
                                <span class="text-[9px] font-black">-₹${parseInt(item.discount_amount).toLocaleString()}</span>
                            </div>
                        ` : ''}
                        ${(item.imei || item.serial_number || item.mac_id || item.installation_date || (item.extraFields && item.extraFields.length > 0)) ? `
                            <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                    <span class="material-icons-outlined text-xs">verified</span> Device Info
                                </div>
                                <div class="grid grid-cols-2 gap-2 text-left">
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
                ${data.totalDiscount > 0 ? `
                    <div class="flex justify-between text-[10px] font-bold text-slate-900 uppercase">
                        <span class="tracking-widest flex items-center gap-1"><span class="material-icons-outlined text-xs">local_offer</span> You Saved</span>
                        <span>-₹${parseInt(data.totalDiscount).toLocaleString()}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${data.gst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">₹${parseInt(data.total).toLocaleString()}</span>
                </div>
            </div>
            
            <!-- Payment Status -->
            ${data.paymentMode ? `
                <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-icons-outlined text-sm">${getPaymentIcon(data.paymentMode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${getPaymentLabel(data.paymentMode)}</p>
                            ${data.paymentReference ? `<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase text-left">Ref: ${data.paymentReference}</p>` : ''}
                        </div>
                    </div>
                    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                </div>
            ` : (isDraft ? `
                <div class="bg-slate-100 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <span class="material-icons-outlined text-sm">pending</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment Pending</p>
                        <p class="text-[8px] font-bold text-slate-400">Complete transaction to record payment</p>
                    </div>
                </div>
            ` : '')}
            
            <!-- Action Buttons (hidden on mobile) -->
            <div class="hidden sm:flex justify-end gap-2 mt-4 no-print">
                <button type="button" onclick="window.automateTransaction()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Create Automation">
                    <span class="material-icons-outlined text-lg">smart_toy</span>
                </button>
                <button type="button" onclick="window.shareWhatsApp()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share via WhatsApp">
                    <span class="material-icons-outlined text-lg">chat</span>
                </button>
                <button type="button" onclick="window.shareNative()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share">
                    <span class="material-icons-outlined text-lg">share</span>
                </button>
                <button type="button" onclick="window.printReceipt()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Print">
                    <span class="material-icons-outlined text-lg">print</span>
                </button>
            </div>
        </div>
    `;
}
