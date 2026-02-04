import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { state, setClientMode, setSalesMode } from '../../state.js';
import { renderClientHeader } from './header.js';
import { selectSaleCustomer } from '../sales/new-transaction.js';

export async function saveClient() {
    const name = document.getElementById('client-name').value;
    const phone = document.getElementById('client-phone').value;
    const email = document.getElementById('client-email').value;
    const location = document.getElementById('client-location').value;

    if (!name || !phone) {
        alert("Name and Phone are required.");
        return;
    }

    const btn = document.getElementById('save-client-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...';
    btn.disabled = true;

    try {
        const newId = 'CL-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        await db.clients.add({
            id: newId,
            name,
            phone,
            email,
            location
        });

        await syncData(); // Refresh local cache

        if (state.currentApp === 'sales') {
            // Go back to sales view and select this customer
            selectSaleCustomer(newId, name);
            setSalesMode('default');
        } else {
            setClientMode('directory');
        }

    } catch (err) {
        alert("Error saving client: " + err.message);
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// Expose to window
window.saveClient = saveClient;

export function renderAddClient(layout) {
    const isDesk = layout === 'desktop';

    return `
        ${isDesk ? '' : renderClientHeader('New Client', 'RETAILEROS • CLIENTS')}
        <div class="${isDesk ? 'h-full flex flex-col pt-12' : 'scrolling-content'} px-8 space-y-10 pb-12 text-left">
             ${isDesk ? `
                <div class="flex items-center gap-4 mb-2 text-left">
                     <div class="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-lg text-center"><span class="material-icons-outlined text-white text-center">person_add</span></div>
                     <div class="text-left">
                        <h2 class="text-2xl font-black tracking-tighter text-left">New Client</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-left">Ensuring data integrity in RetailerOS</p>
                     </div>
                </div>
             ` : ''}

            <div class="space-y-8 text-left">
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name</label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number</label>
                    <input type="text" id="client-phone" placeholder="+91 98765 43210" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input type="email" id="client-email" placeholder="client@example.com" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left relative">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Location</label>
                    <input type="text" id="client-location" placeholder="City, State" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm pr-14 text-left">
                    <span class="absolute right-6 top-[42px] material-icons-outlined text-slate-300 text-right">location_on</span>
                </div>
            </div>

            <button id="save-client-btn" onclick="saveClient()" class="w-full py-5 bg-slate-900 text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-center">
                Save Client
                <span class="material-icons-outlined text-xs text-blue-400 text-center">done_all</span>
            </button>
        </div>
    `;
}
