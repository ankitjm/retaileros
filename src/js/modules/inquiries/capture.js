import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function saveInquiry() {
    const customer = document.getElementById('inq-customer').value;
    const product = document.getElementById('inq-product').value;
    const notes = document.getElementById('inq-notes').value;

    if (!customer || !product) {
        if (window.toast) window.toast.error('Customer and product are required');
        return;
    }

    const btn = document.getElementById('log-inquiry-btn');
    if (btn) { btn.disabled = true; btn.innerText = 'Logging...'; }

    const id = 'INQ-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    const now = new Date().toISOString();

    try {
        await db.inquiries.add({
            id,
            customer_name: customer,
            product_name: product,
            request: notes,
            status: 'PENDING',
            created_at: now
        });

        // Update cache immediately — no full sync needed
        if (!window._db_cache.inquiries) window._db_cache.inquiries = [];
        window._db_cache.inquiries.unshift({ id, customer_name: customer, product_name: product, request: notes, status: 'PENDING', created_at: now });

        if (window.toast) window.toast.success('Inquiry logged');
        // Auto-select the newly created inquiry to show it in the preview pane
        const newInq = { id, customer_name: customer, product_name: product, request: notes, status: 'PENDING', created_at: now };
        window.setActiveInquiry(newInq);
        window.setInquiryViewMode('resolve');
    } catch (err) {
        if (window.toast) window.toast.error('Failed to log inquiry: ' + err.message);
        if (btn) { btn.disabled = false; btn.innerText = 'Log Inquiry'; }
    }
}

window.saveInquiry = saveInquiry;

export function renderCaptureInquiry(isMobile) {
    return `
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20">
                <div class="flex items-center gap-4">
                    <button onclick="window.setInquiryViewMode('list'); window.setActiveInquiry(null);" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                    <div>
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Capture Inquiry</h2>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-6 custom-scrollbar pb-32">
                <div>
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Customer Name</label>
                    <input type="text" id="inq-customer" autofocus placeholder="Search or add customer..." class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5">
                </div>

                <div>
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Product Name</label>
                    <input type="text" id="inq-product" placeholder="e.g. iPhone 16 1TB Blue" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5">
                </div>

                <div>
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Notes <span class="text-slate-300 font-bold normal-case tracking-normal">optional</span></label>
                    <textarea id="inq-notes" placeholder="Add specific requirements or budget (₹)..." class="w-full h-32 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 resize-none" inputmode="text"></textarea>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20">
                <button id="log-inquiry-btn" onclick="saveInquiry()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                     <span class="material-icons-outlined text-lg">add_task</span> Log Inquiry
                </button>
            </div>
        </div>
    `;
}
