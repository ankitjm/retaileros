import { state } from '../../state.js';
import { db } from '../../utils/db.js';

export async function updateInquiryStatus(newStatus) {
    if (!state.activeInquiry?.id) return;

    try {
        await db.inquiries.updateStatus(state.activeInquiry.id, newStatus);

        // Update cache immediately
        const inqs = window._db_cache.inquiries || [];
        const idx = inqs.findIndex(i => i.id === state.activeInquiry.id);
        if (idx >= 0) inqs[idx].status = newStatus;

        // Keep activeInquiry in sync so the preview pane reflects the new status
        state.activeInquiry = { ...state.activeInquiry, status: newStatus };

        if (window.toast) {
            if (newStatus === 'FULFILLED') window.toast.success('Marked as Won!');
            else if (newStatus === 'LOST SALE') window.toast.info('Marked as Lost Sale');
            else window.toast.success(`Marked as ${newStatus}`);
        }

        // For terminal statuses, close the preview
        if (newStatus === 'LOST SALE') {
            window.setActiveInquiry(null);
            window.setInquiryViewMode('list');
        } else {
            if (window.triggerRender) window.triggerRender();
        }
    } catch (err) {
        if (window.toast) window.toast.error('Update failed: ' + err.message);
    }
}

window.updateInquiryStatus = updateInquiryStatus;

// Build a pre-filled WhatsApp message for the inquiry
function buildWhatsAppUrl(inq, customer) {
    const firstName = (inq.customer_name || 'there').split(' ')[0];
    const product = inq.product_name || 'the product you inquired about';
    const msg = `Hi ${firstName}, the ${product} you asked about is available at our store. Shall I reserve one for you?`;
    const phone = (customer?.phone || '').replace(/\D/g, '');
    const base = phone ? `https://wa.me/91${phone}` : `https://wa.me/`;
    return `${base}?text=${encodeURIComponent(msg)}`;
}

// Build call URL
function buildCallUrl(customer) {
    const phone = customer?.phone || '';
    return phone ? `tel:${phone}` : null;
}

export function renderResolveInquiry(isMobile, isDesktopPane) {
    const inq = state.activeInquiry;
    if (!inq) return `<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>`;

    const cache = window.getCache();
    const customer = (cache.customers || []).find(c =>
        c.name?.toLowerCase() === (inq.customer_name || '').toLowerCase()
    );
    const customerSales = customer
        ? (cache.sales || []).filter(s => s.customer_id === customer.id && s.status !== 'draft')
        : [];
    const totalSpent = customerSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);

    const days = Math.floor((Date.now() - new Date(inq.created_at).getTime()) / 86400000);
    const dayLabel = days === 0 ? 'Today' : days === 1 ? '1 day ago' : `${days} days ago`;

    const status = (inq.status || '').toUpperCase();
    const isPending   = status === 'PENDING';
    const isContacted = status === 'CONTACTED';
    const isFulfilled = status === 'FULFILLED';
    const isLost      = status === 'LOST SALE';
    const isTerminal  = isFulfilled || isLost;

    const statusStyles = {
        PENDING:    'bg-amber-50 text-amber-700 border-amber-200',
        CONTACTED:  'bg-blue-50 text-blue-700 border-blue-200',
        FULFILLED:  'bg-emerald-50 text-emerald-700 border-emerald-200',
        'LOST SALE':'bg-slate-100 text-slate-400 border-slate-200',
    };
    const statusCls = statusStyles[status] || 'bg-slate-100 text-slate-400 border-slate-200';
    const statusDisplayLabel = isFulfilled ? 'WON' : isLost ? 'LOST' : status;

    const waUrl  = buildWhatsAppUrl(inq, customer);
    const callUrl = buildCallUrl(customer);

    // Urgency hint
    const urgencyHint = isPending && days > 3
        ? `<div class="mx-6 mb-4 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-2">
                <span class="material-icons-outlined text-amber-500 text-base">schedule</span>
                <p class="text-[9px] font-black text-amber-700">${days > 7 ? 'Overdue' : 'Follow-up needed'} — ${dayLabel}</p>
           </div>`
        : '';

    return `
        <div class="h-full flex flex-col bg-white text-left">
            <!-- Header bar -->
            <header class="px-6 py-4 shrink-0 flex items-center justify-between border-b border-slate-100">
                ${isMobile ? `
                    <button onclick="window.setInquiryViewMode('list'); window.triggerRender()"
                        class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                ` : `
                    <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest">${inq.id || ''}</span>
                `}

                <!-- Win / Lose buttons (only when not terminal) -->
                <div class="flex items-center gap-2">
                    ${!isTerminal ? `
                        <button onclick="updateInquiryStatus('LOST SALE')"
                            class="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 text-[8px] font-black uppercase tracking-widest hover:border-slate-400 hover:text-slate-600 transition-all">
                            Lost
                        </button>
                        <button onclick="updateInquiryStatus('FULFILLED')"
                            class="px-3 py-1.5 rounded-lg bg-slate-950 text-white text-[8px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                            Won Sale
                        </button>
                    ` : `
                        <span class="px-3 py-1.5 rounded-lg border text-[8px] font-black uppercase tracking-widest ${statusCls}">${statusDisplayLabel}</span>
                    `}
                </div>
            </header>

            <!-- Scrollable content -->
            <div class="flex-1 overflow-y-auto custom-scrollbar">

                <!-- Product + customer block -->
                <div class="px-6 pt-6 pb-4">
                    <div class="flex items-start gap-3 mb-4">
                        <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span class="material-icons-outlined text-slate-400">search</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h2 class="text-lg font-black text-slate-900 tracking-tighter leading-tight">${inq.product_name || inq.request || '—'}</h2>
                            <div class="flex items-center flex-wrap gap-2 mt-1.5">
                                <div class="flex items-center gap-1.5">
                                    <div class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-black text-slate-600 shrink-0">
                                        ${(inq.customer_name || '?').charAt(0).toUpperCase()}
                                    </div>
                                    <span class="text-[10px] font-black text-slate-700">${inq.customer_name || 'Unknown'}</span>
                                </div>
                                <span class="text-slate-200 text-xs">·</span>
                                <span class="text-[9px] font-bold text-slate-400">${dayLabel}</span>
                                <span class="px-1.5 py-0.5 rounded border text-[7px] font-black uppercase tracking-wide ${statusCls}">${statusDisplayLabel}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Urgency banner -->
                ${urgencyHint}

                <!-- Requirements -->
                ${inq.request && inq.request !== inq.product_name ? `
                    <div class="px-6 pb-4">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Requirements</p>
                        <div class="bg-slate-50 border border-slate-100 rounded-xl p-4">
                            <p class="text-[11px] font-bold text-slate-600 leading-relaxed">${inq.request}</p>
                        </div>
                    </div>
                ` : ''}

                <!-- Customer history (if known customer) -->
                ${customer ? `
                    <div class="px-6 pb-4">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Customer History</p>
                        <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p class="text-[11px] font-black text-slate-900">${customerSales.length} ${customerSales.length === 1 ? 'purchase' : 'purchases'}</p>
                                <p class="text-[9px] font-bold text-slate-400 mt-0.5">
                                    ₹${new Intl.NumberFormat('en-IN').format(totalSpent)} total spent
                                </p>
                            </div>
                            <button onclick="window.setSelectedClient('${customer.name.replace(/'/g, "\\'")}'); setApp('clients');"
                                class="flex items-center gap-1 text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">
                                Profile <span class="material-icons-outlined text-xs">chevron_right</span>
                            </button>
                        </div>
                    </div>
                ` : ''}

                <!-- Quick contact actions -->
                <div class="px-6 pb-6">
                    <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Contact</p>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="${callUrl ? `window.open('${callUrl}')` : `window.toast?.info('No phone number on file')`}"
                            class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                            <span class="material-icons-outlined text-slate-400 text-lg">call</span>
                            <span class="text-[9px] font-black text-slate-700 uppercase tracking-wide">Call</span>
                        </button>
                        <button onclick="window.open('${waUrl}', '_blank')"
                            class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                            <span class="material-icons-outlined text-slate-400 text-lg">chat</span>
                            <span class="text-[9px] font-black text-slate-700 uppercase tracking-wide">WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Primary CTA -->
            ${!isTerminal ? `
                <div class="px-6 pb-6 pt-2 shrink-0 border-t border-slate-100">
                    ${isPending ? `
                        <button onclick="updateInquiryStatus('CONTACTED')"
                            class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest
                                shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all hover:bg-slate-800">
                            <span class="material-icons-outlined text-sm">phone_in_talk</span>
                            Mark as Contacted
                        </button>
                    ` : `
                        <button onclick="setApp('sales')"
                            class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest
                                shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] transition-all hover:bg-slate-800">
                            <span class="material-icons-outlined text-sm">point_of_sale</span>
                            Create Sale
                        </button>
                    `}
                </div>
            ` : ''}
        </div>
    `;
}
