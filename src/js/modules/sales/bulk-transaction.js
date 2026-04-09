import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { renderSalesHeader } from './header.js';

// Bulk cart state
let bulkCart = [];
let bulkCompanyId = null;
let bulkCompanyName = '';
let bulkCompanyGst = '';
let bulkCompanyContact = '';
let bulkPoNumber = '';
let bulkCreditTerms = 'immediate';
let bulkCustomerId = null;
let bulkCustomerName = 'Select Customer';

// Payment modal state for bulk
let showBulkPaymentModal = false;
let bulkPaymentMode = '';
let bulkPaymentRef = '';
let bulkPaymentType = 'full'; // full | credit | partial
let bulkAmountPaid = 0;
let bulkInlineSearch = '';

const generateId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

// Credit terms → days mapping
const CREDIT_DAYS = { immediate: 0, credit_15: 15, credit_30: 30, credit_60: 60 };
const CREDIT_LABELS = { immediate: 'Immediate', credit_15: '15 Days', credit_30: '30 Days', credit_60: '60 Days' };

function calcDueDate(terms) {
    if (terms === 'immediate') return null;
    const d = new Date();
    d.setDate(d.getDate() + (CREDIT_DAYS[terms] || 0));
    return d.toISOString().split('T')[0];
}

// --- Actions exposed to window ---

window.addBulkProduct = (id) => {
    const products = window.getCache().products || [];
    const p = products.find(x => x.id === id);
    if (!p) return;
    const existing = bulkCart.findIndex(c => c.product_id === id);
    if (existing >= 0) {
        bulkCart[existing].qty += 1;
    } else {
        bulkCart.push({
            product_id: p.id,
            name: p.name,
            brand: p.brand,
            category: p.category,
            qty: 1,
            unit_price: p.mop || p.price || 0,
            discount_type: null,
            discount_value: 0,
            imeis: [],
            imeiText: '',
            showImeis: false
        });
    }
    const si = document.getElementById('bulk-product-search');
    if (si) si.value = '';
    // Preserve scroll — sticky search stays visible on re-render
    const _bScrollEl = document.querySelector('.scrolling-content');
    const _bScrollTop = _bScrollEl ? _bScrollEl.scrollTop : 0;
    window.triggerRender();
    requestAnimationFrame(() => { if (_bScrollEl) _bScrollEl.scrollTop = _bScrollTop; });
};

window.updateBulkQty = (idx, qty) => {
    if (bulkCart[idx]) {
        bulkCart[idx].qty = Math.max(1, parseInt(qty) || 1);
        window.triggerRender();
    }
};

window.updateBulkUnitPrice = (idx, price) => {
    if (bulkCart[idx]) {
        bulkCart[idx].unit_price = parseFloat(price) || 0;
        window.triggerRender();
    }
};

window.updateBulkDiscount = (idx, type, value) => {
    if (bulkCart[idx]) {
        bulkCart[idx].discount_type = type;
        bulkCart[idx].discount_value = parseFloat(value) || 0;
        window.triggerRender();
    }
};

window.toggleBulkImeis = (idx) => {
    if (bulkCart[idx]) {
        bulkCart[idx].showImeis = !bulkCart[idx].showImeis;
        window.triggerRender();
    }
};

window.updateBulkImeis = (idx, text) => {
    if (!bulkCart[idx]) return;
    bulkCart[idx].imeiText = text;
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    bulkCart[idx].imeis = lines;
    // Auto-sync qty upward if IMEIs exceed qty
    if (lines.length > bulkCart[idx].qty) {
        bulkCart[idx].qty = lines.length;
    }
    window.triggerRender();
};

window.removeBulkItem = (idx) => {
    bulkCart.splice(idx, 1);
    window.triggerRender();
};

window.selectBulkCompany = (id) => {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const companies = cache.companies || [];
    if (id === '__none__') {
        bulkCompanyId = null;
        bulkCompanyName = '';
        bulkCompanyGst = '';
        bulkCompanyContact = '';
        bulkCreditTerms = 'immediate';
    } else {
        // Try groups first (is_company=1), then companies table
        const group = groups.find(g => g.id === id && g.is_company);
        if (group) {
            bulkCompanyId = group.id;
            bulkCompanyName = group.name;
            bulkCompanyGst = group.gst_number || '';
            bulkCompanyContact = group.contact_person || '';
        } else {
            const comp = companies.find(c => c.id === id);
            if (comp) {
                bulkCompanyId = comp.id;
                bulkCompanyName = comp.name;
                bulkCompanyGst = comp.gst_number || '';
                bulkCompanyContact = '';
                bulkCreditTerms = comp.default_credit_terms || 'immediate';
            }
        }
    }
    const dd = document.getElementById('bulk-company-dropdown');
    if (dd) dd.classList.add('hidden');
    window.triggerRender();
};

window.toggleBulkCompanyDropdown = (e) => {
    if (e) e.stopPropagation();
    const el = document.getElementById('bulk-company-dropdown');
    if (el) el.classList.toggle('hidden');
};

window.setBulkCreditTerms = (terms) => {
    bulkCreditTerms = terms;
    window.triggerRender();
};

window.updateBulkPoNumber = (val) => {
    bulkPoNumber = val;
};

window.updateBulkCompanyName = (val) => { bulkCompanyName = val; };
window.updateBulkCompanyGst = (val) => { bulkCompanyGst = val; };
window.updateBulkCompanyContact = (val) => { bulkCompanyContact = val; };

// Customer selection for bulk
let bulkCustomerSearch = '';
window.toggleBulkCustomerDropdown = (e) => {
    if (e) e.stopPropagation();
    const el = document.getElementById('bulk-customer-dropdown');
    if (el) el.classList.toggle('hidden');
};
window.updateBulkCustomerSearch = (val) => {
    bulkCustomerSearch = val.toLowerCase();
    window.triggerRender(false);
};
window.selectBulkCustomer = (id, name) => {
    bulkCustomerId = id;
    bulkCustomerName = name;
    const dd = document.getElementById('bulk-customer-dropdown');
    if (dd) dd.classList.add('hidden');
    window.triggerRender();
};

window.addBulkNewCustomer = () => {
    const dd = document.getElementById('bulk-customer-dropdown');
    if (dd) dd.classList.add('hidden');
    window.setSalesMode('add-customer');
};

// Payment flow
window.openBulkPayment = () => {
    if (bulkCart.length === 0) {
        window.toast.warning('Add items before completing');
        return;
    }
    showBulkPaymentModal = true;
    bulkPaymentMode = '';
    bulkPaymentRef = '';
    bulkPaymentType = 'full';
    bulkAmountPaid = 0;
    window.triggerRender();
};

window.closeBulkPayment = () => {
    showBulkPaymentModal = false;
    window.triggerRender();
};

window.setBulkPaymentMode = (mode) => {
    bulkPaymentMode = mode;
    bulkPaymentRef = '';
    window.triggerRender();
};

window.setBulkPaymentType = (type) => {
    bulkPaymentType = type;
    if (type === 'full') bulkAmountPaid = 0;
    window.triggerRender();
};

window.updateBulkPaymentRef = (val) => { bulkPaymentRef = val; };
window.updateBulkAmountPaid = (val) => { bulkAmountPaid = parseFloat(val) || 0; };

window.confirmBulkPayment = async () => {
    if (bulkPaymentType === 'full' && !bulkPaymentMode) {
        window.toast.warning('Select a payment mode');
        return;
    }
    if (bulkPaymentType === 'full' && (bulkPaymentMode === 'card' || bulkPaymentMode === 'upi') && !bulkPaymentRef) {
        window.toast.warning('Enter the transaction reference');
        return;
    }
    if (bulkPaymentType === 'partial' && !bulkPaymentMode) {
        window.toast.warning('Select a payment mode for partial amount');
        return;
    }
    showBulkPaymentModal = false;
    await completeBulkTransaction();
};

// Compute line total for a bulk item
function lineTotal(item) {
    let base = item.unit_price * item.qty;
    if (item.discount_type === 'percent') {
        base -= base * (item.discount_value / 100);
    } else if (item.discount_type === 'fixed') {
        base -= item.discount_value * item.qty;
    }
    return Math.max(0, base);
}

function lineDiscount(item) {
    const base = item.unit_price * item.qty;
    return base - lineTotal(item);
}

function grandTotal() {
    return bulkCart.reduce((s, item) => s + lineTotal(item), 0);
}

function totalQty() {
    return bulkCart.reduce((s, item) => s + item.qty, 0);
}

// Validate IMEIs
function validateImeis(item) {
    const errs = [];
    const seen = new Set();
    item.imeis.forEach((imei, i) => {
        if (!/^\d{15}$/.test(imei)) errs.push(`Line ${i + 1}: "${imei}" is not 15 digits`);
        if (seen.has(imei)) errs.push(`Line ${i + 1}: "${imei}" is duplicate`);
        seen.add(imei);
    });
    return errs;
}

// Complete bulk transaction
async function completeBulkTransaction() {
    try {
        const txnId = generateId('BULK');
        const total = grandTotal();
        let companyId = null;

        // Save / resolve company
        if (bulkCompanyName && bulkCompanyGst) {
            const existing = bulkCustomerId
                ? await db.companies.getByCustomerId(bulkCustomerId)
                : [];
            const match = existing.find(c => c.gst_number === bulkCompanyGst);
            if (match) {
                companyId = match.id;
            } else {
                companyId = generateId('COMP');
                await db.companies.add({
                    id: companyId,
                    name: bulkCompanyName,
                    gst_number: bulkCompanyGst,
                    customer_id: bulkCustomerId
                });
            }
        }

        // Determine payment_status
        let paymentStatus = 'paid';
        let amountPaid = total;
        if (bulkPaymentType === 'credit') {
            paymentStatus = 'credit';
            amountPaid = 0;
        } else if (bulkPaymentType === 'partial') {
            paymentStatus = 'partial';
            amountPaid = bulkAmountPaid;
        }

        // Create sale record
        await db.sales.add({
            id: txnId,
            customer_id: bulkCustomerId,
            customer_name: bulkCustomerName === 'Select Customer' ? 'Walk-in' : bulkCustomerName,
            date: new Date().toISOString(),
            total_amount: total,
            status: 'completed',
            payment_mode: bulkPaymentType === 'credit' ? 'credit' : bulkPaymentMode,
            payment_reference: bulkPaymentRef || null,
            gst_required: bulkCompanyGst ? 1 : 0,
            company_id: companyId,
            installation_required: 0,
            installation_date: null,
            billing_type: 'bulk',
            po_number: bulkPoNumber || null,
            credit_terms: bulkCreditTerms,
            credit_due_date: calcDueDate(bulkCreditTerms),
            amount_paid: amountPaid,
            payment_status: paymentStatus
        });

        // Create sale items — expand IMEIs to individual rows
        for (const item of bulkCart) {
            const discountAmt = lineDiscount(item);
            const perUnitDiscount = item.qty > 0 ? discountAmt / item.qty : 0;
            const perUnitFinal = item.unit_price - perUnitDiscount;

            if (item.imeis.length > 0) {
                // One row per IMEI
                for (const imei of item.imeis) {
                    await db.sales.addItem({
                        id: generateId('ITEM'),
                        sale_id: txnId,
                        product_id: item.product_id,
                        product_name: item.name,
                        category: item.category,
                        quantity: 1,
                        price: item.unit_price,
                        discount_type: item.discount_type || null,
                        discount_value: item.discount_value || null,
                        discount_amount: perUnitDiscount || null,
                        scheme_id: null,
                        final_price: perUnitFinal,
                        imei: imei,
                        serial_number: null,
                        mac_id: null,
                        manufacturing_date: null,
                        installation_date: null,
                        extra_fields: null
                    });
                }
                // Remaining qty without IMEIs (if qty > imeis.length)
                const remaining = item.qty - item.imeis.length;
                if (remaining > 0) {
                    await db.sales.addItem({
                        id: generateId('ITEM'),
                        sale_id: txnId,
                        product_id: item.product_id,
                        product_name: item.name,
                        category: item.category,
                        quantity: remaining,
                        price: item.unit_price,
                        discount_type: item.discount_type || null,
                        discount_value: item.discount_value || null,
                        discount_amount: perUnitDiscount * remaining || null,
                        scheme_id: null,
                        final_price: perUnitFinal * remaining,
                        imei: null,
                        serial_number: null,
                        mac_id: null,
                        manufacturing_date: null,
                        installation_date: null,
                        extra_fields: null
                    });
                }
            } else {
                // Single row with full qty
                await db.sales.addItem({
                    id: generateId('ITEM'),
                    sale_id: txnId,
                    product_id: item.product_id,
                    product_name: item.name,
                    category: item.category,
                    quantity: item.qty,
                    price: item.unit_price,
                    discount_type: item.discount_type || null,
                    discount_value: item.discount_value || null,
                    discount_amount: discountAmt || null,
                    scheme_id: null,
                    final_price: lineTotal(item),
                    imei: null,
                    serial_number: null,
                    mac_id: null,
                    manufacturing_date: null,
                    installation_date: null,
                    extra_fields: null
                });
            }

            // Decrement stock
            await db.inventory.updateStock(item.product_id, -item.qty);
        }

        // Log activity
        try {
            await db.activityLogs.add({
                action: 'Bulk order completed',
                detail: `${bulkCart.length} products, ${totalQty()} units — ₹${parseInt(total).toLocaleString()}`,
                icon: 'inventory_2',
                color: 'slate'
            });
        } catch (e) { /* non-critical */ }

        resetBulkState();
        await syncData();
        window.setTab('history');
        window.setSalesHistoryId(txnId);
        window.toast.success('Bulk order completed!');
    } catch (err) {
        console.error('Bulk transaction error:', err);
        window.toast.error('Error: ' + err.message);
    }
}

function resetBulkState() {
    bulkCart = [];
    bulkCompanyId = null;
    bulkCompanyName = '';
    bulkCompanyGst = '';
    bulkCompanyContact = '';
    bulkPoNumber = '';
    bulkCreditTerms = 'immediate';
    bulkCustomerId = null;
    bulkCustomerName = 'Select Customer';
    showBulkPaymentModal = false;
    bulkPaymentMode = '';
    bulkPaymentRef = '';
    bulkPaymentType = 'full';
    bulkAmountPaid = 0;
    bulkCustomerSearch = '';
}

// Expose for preview.js
window.getBulkCart = () => bulkCart;
window.getBulkState = () => ({
    companyName: bulkCompanyName,
    companyGst: bulkCompanyGst,
    poNumber: bulkPoNumber,
    creditTerms: bulkCreditTerms,
    paymentType: bulkPaymentType,
    amountPaid: bulkAmountPaid,
    grandTotal: grandTotal()
});

// Inline product search for table
window.updateBulkInlineSearch = (val) => {
    bulkInlineSearch = val.toLowerCase();
    window.triggerRender(false);
    requestAnimationFrame(() => {
        const el = document.getElementById('bulk-inline-search');
        if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
    });
};

window.addBulkProductInline = (id) => {
    window.addBulkProduct(id);
    bulkInlineSearch = '';
    window.triggerRender(false);
    requestAnimationFrame(() => {
        const el = document.getElementById('bulk-inline-search');
        if (el) el.focus();
    });
};

// --- Renderer ---

export function renderBulkSales() {
    const cache = window.getCache();
    const products = cache.products || [];
    const allCustomers = cache.customers || [];
    const groups = (cache.groups || []).filter(g => g.is_company);
    const companies = cache.companies || [];

    // Inline product search (embedded in table)
    const filteredBulkProducts = bulkInlineSearch
        ? products.filter(p => p.name.toLowerCase().includes(bulkInlineSearch) || p.brand?.toLowerCase().includes(bulkInlineSearch) || p.sku?.toLowerCase().includes(bulkInlineSearch))
        : [];

    // Customer search
    const customers = bulkCustomerSearch
        ? allCustomers.filter(c => c.name.toLowerCase().includes(bulkCustomerSearch) || c.phone?.includes(bulkCustomerSearch))
        : allCustomers;

    const total = grandTotal();
    const qty = totalQty();

    // Merge company sources
    const companyList = [
        ...groups.map(g => ({ id: g.id, name: g.name, gst: g.gst_number, source: 'group' })),
        ...companies.map(c => ({ id: c.id, name: c.name, gst: c.gst_number, source: 'company' }))
    ];

    const billingMode = state.salesBillingMode || 'retail';

    return `
        ${renderSalesHeader('new-sale')}
        <div class="scrolling-content text-left" id="bulk-scroll">

            <!-- ── STICKY TOP CONTROLS: always visible ── -->
            <div class="sticky top-0 z-30 bg-white border-b border-slate-100 px-8 pt-2.5 pb-2.5 shadow-sm">

            <!-- Row 1: Mode toggle + Customer selector -->
            <div class="flex items-center gap-2">
                <!-- Mode toggle (Inquiries tab style) -->
                <div class="flex items-center gap-1 shrink-0">
                    <button type="button" onclick="window.setSalesBillingMode('retail')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${billingMode === 'retail' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">
                        <span class="material-icons-outlined" style="font-size:12px">point_of_sale</span>
                        Retail
                    </button>
                    <button type="button" onclick="window.setSalesBillingMode('bulk')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${billingMode === 'bulk' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">
                        <span class="material-icons-outlined" style="font-size:12px">inventory_2</span>
                        Bulk
                    </button>
                </div>

                <!-- Customer selector (flex-1) -->
                <div class="relative flex-1">
                    <button type="button" onclick="window.toggleBulkCustomerDropdown(event)" class="w-full flex items-center justify-between gap-2 bg-slate-50 border ${bulkCustomerId ? 'border-slate-900' : 'border-slate-200'} rounded-xl px-3 py-2 cursor-pointer hover:border-slate-400 transition-all">
                        <div class="flex items-center gap-1.5 min-w-0">
                            <span class="material-icons-outlined text-slate-400" style="font-size:15px">person</span>
                            <span class="text-xs font-black text-slate-900 truncate">${bulkCustomerName}</span>
                            ${bulkCustomerId ? '<span class="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></span>' : ''}
                        </div>
                        <span class="material-icons-outlined text-slate-300 shrink-0" style="font-size:16px">expand_more</span>
                    </button>
                    <div id="bulk-customer-dropdown" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-56 overflow-y-auto mt-1 flex flex-col">
                        <div class="p-2.5 sticky top-0 bg-white z-20 border-b border-slate-100" onclick="event.stopPropagation()">
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400" style="font-size:14px">search</span>
                                <input type="text" value="${bulkCustomerSearch}" oninput="window.updateBulkCustomerSearch(this.value)" placeholder="Search customer..." class="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        </div>
                        <button type="button" onclick="window.addBulkNewCustomer()" class="p-3 bg-slate-900 text-white border-b border-slate-900 cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-800 sticky top-[44px] z-10">
                            <span class="material-icons-outlined" style="font-size:13px">add</span>
                            <span class="text-[10px] font-black uppercase tracking-widest">New Customer</span>
                        </button>
                        ${customers.map(c => `
                            <button type="button" onclick="window.selectBulkCustomer('${c.id}', '${c.name.replace(/'/g, "\\'")}')" class="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400">${c.phone || ''}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>

            </div>
            <!-- ── END STICKY TOP CONTROLS ── -->

            <!-- ── SCROLLABLE AREA: Corporate + Line Items ── -->
            <div class="px-8 pt-3 pb-6 space-y-6 text-left">

            <!-- Corporate Account -->
            <section class="space-y-3">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Corporate Account</h3>
                <div class="relative">
                    <button type="button" onclick="window.toggleBulkCompanyDropdown(event)" class="rounded-xl border border-slate-100 bg-white p-4 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all w-full">
                        <div class="flex items-center gap-3 text-slate-900">
                            <span class="material-icons-outlined text-slate-400">business</span>
                            <span class="text-sm font-black">${bulkCompanyName || 'Select Company'}</span>
                            ${bulkCompanyGst ? `<span class="text-[8px] font-bold text-slate-400 uppercase">${bulkCompanyGst}</span>` : ''}
                        </div>
                        <span class="material-icons-outlined text-slate-300">expand_more</span>
                    </button>
                    <div id="bulk-company-dropdown" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto mt-2">
                        <button type="button" onclick="window.selectBulkCompany('__none__')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-100 text-left w-full">
                            <p class="text-xs font-bold text-slate-400">No Company (Manual Entry)</p>
                        </button>
                        ${companyList.map(c => `
                            <button type="button" onclick="window.selectBulkCompany('${c.id}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400">${c.gst || 'No GST'}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Manual company fields -->
                <div class="rounded-xl border border-slate-100 bg-white p-4 space-y-3">
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Company Name</label>
                            <input type="text" value="${bulkCompanyName}" oninput="window.updateBulkCompanyName(this.value)" placeholder="Company name" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">GST Number</label>
                            <input type="text" value="${bulkCompanyGst}" oninput="window.updateBulkCompanyGst(this.value)" placeholder="27AAACR3456D1Z5" maxlength="15" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">PO Number</label>
                            <input type="text" value="${bulkPoNumber}" oninput="window.updateBulkPoNumber(this.value)" placeholder="PO-2026-001" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Credit Terms</label>
                            <div class="flex items-center gap-1 flex-wrap">
                                ${Object.entries(CREDIT_LABELS).map(([k, v]) => `
                                    <button type="button" onclick="window.setBulkCreditTerms('${k}')" class="px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${bulkCreditTerms === k ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">${v}</button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bulk Cart / Line Items — Excel-style table (always shown) -->
            <section>
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-[8px] font-black text-slate-300 uppercase tracking-widest">
                        ${bulkCart.length > 0 ? `Line Items · ${bulkCart.length} Products · ${qty} Units` : 'Line Items'}
                    </h3>
                </div>
                <div class="rounded-xl border border-slate-200 overflow-hidden">
                    ${bulkCart.length > 0 ? `
                        <!-- Table Header -->
                        <div class="grid bg-slate-50 border-b border-slate-200" style="grid-template-columns: 1fr 64px 96px 72px 80px 32px;">
                            <div class="px-3 py-2 text-[8px] font-black text-slate-400 uppercase tracking-widest">Product</div>
                            <div class="px-2 py-2 text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Qty</div>
                            <div class="px-2 py-2 text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Unit ₹</div>
                            <div class="px-2 py-2 text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Disc %</div>
                            <div class="px-2 py-2 text-[8px] font-black text-slate-400 uppercase tracking-widest text-right">Total</div>
                            <div class="px-1 py-2"></div>
                        </div>
                        <!-- Table Rows -->
                        <div class="divide-y divide-slate-100">
                            ${bulkCart.map((item, idx) => {
                                const lt = lineTotal(item);
                                const imeiCount = item.imeis.length;
                                const imeiErrors = imeiCount > 0 ? validateImeis(item) : [];
                                return `
                                    <div>
                                        <!-- Main row -->
                                        <div class="grid items-center hover:bg-slate-50/60 transition-colors" style="grid-template-columns: 1fr 64px 96px 72px 80px 32px;">
                                            <!-- Product name + IMEI toggle -->
                                            <div class="px-3 py-2.5 min-w-0">
                                                <p class="text-[10px] font-black text-slate-900 truncate leading-tight">${item.name}</p>
                                                <div class="flex items-center gap-1.5 mt-0.5">
                                                    <p class="text-[8px] font-bold text-slate-400 truncate">${item.brand || ''}</p>
                                                    <button type="button" onclick="window.toggleBulkImeis(${idx})" class="flex items-center gap-0.5 text-[7px] font-black uppercase ${imeiCount > 0 ? 'text-slate-700' : 'text-slate-300'} hover:text-slate-700 transition-colors shrink-0">
                                                        <span class="material-icons-outlined" style="font-size:10px">qr_code_2</span>
                                                        ${imeiCount > 0 ? `${imeiCount}/${item.qty}` : 'IMEI'}
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- Qty -->
                                            <div class="px-1 py-2 text-center">
                                                <input type="number" min="1" value="${item.qty}"
                                                    onchange="window.updateBulkQty(${idx}, this.value)"
                                                    class="w-full px-1 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-center focus:outline-none focus:border-slate-950 transition-all">
                                            </div>
                                            <!-- Unit Price -->
                                            <div class="px-1 py-2 text-center">
                                                <input type="number" value="${item.unit_price}"
                                                    onchange="window.updateBulkUnitPrice(${idx}, this.value)"
                                                    class="w-full px-1 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-center focus:outline-none focus:border-slate-950 transition-all">
                                            </div>
                                            <!-- Discount % -->
                                            <div class="px-1 py-2 text-center">
                                                <input type="number" min="0" max="100"
                                                    value="${item.discount_type === 'percent' ? item.discount_value : ''}"
                                                    onchange="window.updateBulkDiscount(${idx}, 'percent', this.value)"
                                                    placeholder="0"
                                                    class="w-full px-1 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-center focus:outline-none focus:border-slate-950 transition-all">
                                            </div>
                                            <!-- Line Total -->
                                            <div class="px-2 py-2 text-right">
                                                <p class="text-[10px] font-black text-slate-900">₹${parseInt(lt).toLocaleString()}</p>
                                            </div>
                                            <!-- Remove -->
                                            <div class="px-1 py-2 text-center">
                                                <button type="button" onclick="window.removeBulkItem(${idx})"
                                                    class="w-6 h-6 flex items-center justify-center text-slate-300 hover:text-red-500 transition-colors rounded mx-auto">
                                                    <span class="material-icons-outlined text-sm">close</span>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- IMEI expanded row -->
                                        ${item.showImeis ? `
                                            <div class="px-3 pb-3 bg-slate-50/50 border-t border-slate-100">
                                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5 pt-2">IMEI / Serial Numbers (one per line)</label>
                                                <textarea rows="3" placeholder="353456789012345&#10;353456789012346&#10;353456789012347"
                                                    oninput="window.updateBulkImeis(${idx}, this.value)"
                                                    class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-mono focus:outline-none focus:border-slate-950 transition-all resize-none">${item.imeiText}</textarea>
                                                ${imeiErrors.length > 0 ? `
                                                    <div class="text-[8px] font-bold text-red-500 mt-1.5 space-y-0.5">
                                                        ${imeiErrors.slice(0, 3).map(e => `<p>${e}</p>`).join('')}
                                                        ${imeiErrors.length > 3 ? `<p>...and ${imeiErrors.length - 3} more</p>` : ''}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        ` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <!-- Table Footer: totals row -->
                        <div class="grid items-center bg-slate-50 border-t-2 border-slate-200" style="grid-template-columns: 1fr 64px 96px 72px 80px 32px;">
                            <div class="px-3 py-2.5">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${bulkCart.length} products · ${qty} units</p>
                            </div>
                            <div></div><div></div><div></div>
                            <div class="px-2 py-2.5 text-right">
                                <p class="text-sm font-black text-slate-900">₹${parseInt(total).toLocaleString()}</p>
                            </div>
                            <div></div>
                        </div>
                    ` : ''}
                    <!-- ── Add Product Row (inline search) — always shown ── -->
                    <div class="relative ${bulkCart.length > 0 ? 'border-t border-dashed border-slate-200' : ''}">
                        <div class="flex items-center gap-2 px-3 py-2.5">
                            <span class="material-icons-outlined text-slate-300 shrink-0" style="font-size:16px">add</span>
                            <input id="bulk-inline-search" type="text"
                                value="${bulkInlineSearch}"
                                oninput="window.updateBulkInlineSearch(this.value)"
                                placeholder="${bulkCart.length === 0 ? 'Search products to add to order…' : 'Add another product…'}"
                                class="flex-1 py-1.5 bg-transparent text-[11px] font-bold text-slate-900 placeholder-slate-300 focus:outline-none transition-all">
                        </div>
                        ${bulkInlineSearch ? `
                            <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-xl shadow-2xl overflow-hidden max-h-52 overflow-y-auto">
                                ${filteredBulkProducts.length > 0 ? filteredBulkProducts.slice(0, 15).map(p => `
                                    <button type="button" onclick="window.addBulkProductInline('${p.id}')"
                                        class="p-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between w-full text-left border-b border-slate-50">
                                        <div class="min-w-0 flex-1">
                                            <p class="text-[10px] font-black text-slate-900 truncate">${p.name}</p>
                                            <p class="text-[8px] font-bold text-slate-400">${p.brand || ''} · Stk: ${p.in_stock || 0}</p>
                                        </div>
                                        <p class="text-xs font-black text-slate-900 ml-2 shrink-0">₹${parseInt(p.mop || p.price || 0).toLocaleString()}</p>
                                    </button>
                                `).join('') : '<p class="p-3 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </section>

            </div>
            <!-- ── END SCROLLABLE AREA ── -->

        </div>
        <!-- ── END SCROLLING CONTENT ── -->

        <!-- Action Footer: total info + Preview + Complete in one row -->
        ${bulkCart.length > 0 ? `
            <div class="flex items-center gap-2 px-8 py-3 bg-white border-t border-slate-100 shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
                <!-- Total summary (compact) -->
                <div class="shrink-0">
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-wide">${bulkCart.length} products · ${qty} units</p>
                    <p class="text-sm font-black text-slate-900 tracking-tighter">₹${parseInt(total).toLocaleString()}</p>
                    ${bulkCreditTerms !== 'immediate' ? `<p class="text-[7px] font-bold text-slate-400">${CREDIT_LABELS[bulkCreditTerms]}</p>` : ''}
                </div>
                <!-- Preview Receipt -->
                <button type="button" onclick="toggleMobileReceipt(true)" class="w-12 h-12 flex flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-slate-200 hover:border-slate-900 transition-all shrink-0">
                    <span class="material-icons-outlined text-slate-500" style="font-size:17px">receipt_long</span>
                    <span class="text-[7px] font-black text-slate-500 uppercase">Preview</span>
                </button>
                <!-- Complete -->
                <button type="button" onclick="window.openBulkPayment()" class="flex-1 h-12 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition-all">
                    Complete
                    <span class="material-icons-outlined" style="font-size:16px">check_circle</span>
                </button>
            </div>
        ` : ''}

        <!-- Payment Modal -->
        ${showBulkPaymentModal ? renderBulkPaymentModal(total) : ''}
    `;
}

function renderBulkPaymentModal(total) {
    const dueDate = calcDueDate(bulkCreditTerms);
    const balance = total - bulkAmountPaid;

    return `
        <div class="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center" onclick="window.closeBulkPayment()">
            <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-y-auto" onclick="event.stopPropagation()">
                <div class="p-6 border-b border-slate-100">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-black text-slate-900">Complete Bulk Order</h3>
                        <button type="button" onclick="window.closeBulkPayment()" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-100">
                            <span class="material-icons-outlined">close</span>
                        </button>
                    </div>
                    <p class="text-2xl font-black text-slate-900 mt-2">₹${parseInt(total).toLocaleString()}</p>
                </div>

                <div class="p-6 space-y-5">
                    <!-- Payment Type -->
                    <div class="space-y-2">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Payment Type</p>
                        <div class="flex items-center gap-1">
                            <button type="button" onclick="window.setBulkPaymentType('full')" class="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${bulkPaymentType === 'full' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">Full Payment</button>
                            <button type="button" onclick="window.setBulkPaymentType('partial')" class="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${bulkPaymentType === 'partial' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">Partial</button>
                            <button type="button" onclick="window.setBulkPaymentType('credit')" class="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${bulkPaymentType === 'credit' ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">Credit</button>
                        </div>
                    </div>

                    ${bulkPaymentType === 'credit' ? `
                        <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                            <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest">
                                <span class="material-icons-outlined text-sm">event</span>
                                Full Credit — ${CREDIT_LABELS[bulkCreditTerms]}
                            </div>
                            ${dueDate ? `<p class="text-xs font-bold text-slate-500">Due by ${new Date(dueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>` : ''}
                            <p class="text-xl font-black text-slate-900">Balance: ₹${parseInt(total).toLocaleString()}</p>
                        </div>
                    ` : ''}

                    ${bulkPaymentType === 'partial' ? `
                        <div class="space-y-3">
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Amount Paying Now</label>
                                <input type="number" value="${bulkAmountPaid || ''}" oninput="window.updateBulkAmountPaid(this.value)" placeholder="Enter amount" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <div class="flex justify-between text-xs font-bold text-slate-500">
                                    <span>Balance Due</span>
                                    <span class="font-black text-slate-900">₹${parseInt(balance > 0 ? balance : 0).toLocaleString()}</span>
                                </div>
                                ${dueDate ? `<p class="text-[9px] font-bold text-slate-400 mt-1">Due by ${new Date(dueDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>` : ''}
                            </div>
                        </div>
                    ` : ''}

                    ${bulkPaymentType !== 'credit' ? `
                        <!-- Payment Mode -->
                        <div class="space-y-2">
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Payment Mode</p>
                            <div class="grid grid-cols-3 gap-2">
                                ${['cash', 'card', 'upi'].map(mode => `
                                    <button type="button" onclick="window.setBulkPaymentMode('${mode}')" class="card p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${bulkPaymentMode === mode ? 'border-slate-900 bg-slate-900 text-white' : 'hover:border-slate-300'}">
                                        <span class="material-icons-outlined">${mode === 'cash' ? 'payments' : mode === 'card' ? 'credit_card' : 'qr_code'}</span>
                                        <span class="text-[9px] font-black uppercase">${mode === 'upi' ? 'UPI' : mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
                                    </button>
                                `).join('')}
                            </div>
                        </div>

                        ${(bulkPaymentMode === 'card' || bulkPaymentMode === 'upi') ? `
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Transaction Reference</label>
                                <input type="text" value="${bulkPaymentRef}" oninput="window.updateBulkPaymentRef(this.value)" placeholder="Enter reference number" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        ` : ''}
                    ` : ''}

                    <button type="button" onclick="window.confirmBulkPayment()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        ${bulkPaymentType === 'credit' ? 'Place on Credit' : bulkPaymentType === 'partial' ? `Pay ₹${parseInt(bulkAmountPaid).toLocaleString()} Now` : 'Confirm Payment'}
                    </button>
                </div>
            </div>
        </div>
    `;
}
