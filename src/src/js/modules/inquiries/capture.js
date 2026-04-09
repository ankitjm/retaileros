import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function saveInquiry() {
    const customer = document.getElementById('inq-customer').value;
    const product = document.getElementById('inq-product').value;
    const notes = document.getElementById('inq-notes').value;

    if (!customer || !product) {
        alert("Customer and Product are required.");
        return;
    }

    const btn = document.getElementById('log-inquiry-btn');
    btn.disabled = true;
    btn.innerText = 'Logging...';

    try {
        await db.inquiries.add({
            id: 'INQ-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
            customer_name: customer,
            product_name: product,
            request: notes,
            status: 'PENDING',
            created_at: new Date().toISOString()
        });

        await syncData();
        window.setInquiryViewMode('list');
    } catch (err) {
        alert("Error: " + err.message);
        btn.disabled = false;
        btn.innerText = 'Log Inquiry';
    }
}

window.saveInquiry = saveInquiry;

export function renderCaptureInquiry(isMobile) {
    return `
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none text-left">Capture Inquiry</h2>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-6 custom-scrollbar pb-32 text-left">
                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Customer Name</label>
                    <input type="text" id="inq-customer" placeholder="Search or add customer..." class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Name</label>
                    <input type="text" id="inq-product" placeholder="e.g. Phone 16 1TB Blue" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Notes</label>
                    <textarea id="inq-notes" placeholder="Add specific requirements or budget (₹)..." class="w-full h-32 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 resize-none text-left"></textarea>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20 text-center">
                <button id="log-inquiry-btn" onclick="saveInquiry()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">layers</span> Log Inquiry
                </button>
            </div>
        </div>
    `;
}
