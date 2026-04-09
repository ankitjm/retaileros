import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function updateInquiryStatus(newStatus) {
    if (!state.activeInquiry?.id) return;

    try {
        await db.inquiries.updateStatus(state.activeInquiry.id, newStatus);
        await syncData();
        window.setInquiryViewMode('list');
    } catch (err) {
        alert("Update failed: " + err.message);
    }
}

window.updateInquiryStatus = updateInquiryStatus;

export function renderResolveInquiry() {
    const inq = state.activeInquiry;
    if (!inq) return `<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>`;

    return `
        <div class="h-full flex flex-col bg-white animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between text-left">
                <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                </button>
                <div class="flex gap-2 text-left">
                    <button onclick="updateInquiryStatus('LOST SALE')" class="px-4 py-2 bg-slate-100 text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Lost Sale</button>
                    <button onclick="updateInquiryStatus('FULFILLED')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Won Sale</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar text-left">
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Product Interest</p>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${inq.product_name || inq.request}</h2>
                    <div class="flex items-center gap-2 mt-2 text-left">
                         <span class="bg-slate-200 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase text-left">${inq.status}</span>
                         <span class="text-[9px] font-bold text-slate-400 text-left">Requested by ${inq.customer_name}</span>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Requirements</h3>
                    <div class="card p-6 bg-slate-50 border-transparent text-left">
                        <p class="text-[11px] font-bold text-slate-600 leading-relaxed text-left">${inq.request || 'No specific requirements logged.'}</p>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Recommended Actions</h3>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">call</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">Call Customer</h4>
                        </div>
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">chat</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">WhatsApp</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-8 shrink-0 text-center">
                <button onclick="updateInquiryStatus('CONTACTED')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     Mark as Contacted
                </button>
            </div>
        </div>
    `;
}
