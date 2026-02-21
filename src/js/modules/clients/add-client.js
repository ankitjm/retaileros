import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { state, setClientMode, setSalesMode } from '../../state.js';
import { renderClientHeader } from './header.js';
import { selectSaleCustomer } from '../sales/new-transaction.js';

export async function saveClient() {
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');
    const emailInput = document.getElementById('client-email');
    const locationInput = document.getElementById('client-location');

    if (!nameInput || !phoneInput) {
        console.error('Form inputs not found');
        window.toast.error("Form error. Please try again.");
        return;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const location = locationInput ? locationInput.value.trim() : '';

    if (!name || !phone) {
        window.toast.warning("Name and Phone are required");
        return;
    }

    const btn = document.getElementById('save-client-btn');
    let originalText = '';
    if (btn) {
        originalText = btn.innerHTML;
        btn.innerHTML = '<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...';
        btn.disabled = true;
    }

    try {
        const newId = 'CL-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        
        console.log('Saving client:', { id: newId, name, phone, email, location });
        
        await db.clients.add({
            id: newId,
            name,
            phone,
            email,
            location
        });

        console.log('Client saved successfully');
        
        await syncData(); // Refresh local cache
        
        window.toast.success('Client added successfully!');

        if (state.currentApp === 'sales') {
            // Go back to sales view and select this customer
            selectSaleCustomer(newId, name);
            setSalesMode('default');
        } else {
            setClientMode('directory');
        }

    } catch (err) {
        console.error('Error saving client:', err);
        window.toast.error("Error saving client: " + err.message);
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }
}

// Expose to window
window.saveClient = saveClient;

export function renderAddClient(layout) {
    const isDesk = layout === 'desktop';

    return `
        ${isDesk ? '' : renderClientHeader('New Client', 'RETAILEROS • CLIENTS')}
        <div class="${isDesk ? 'h-full flex flex-col pt-8' : 'scrolling-content'} px-4 sm:px-8 space-y-8 pb-12 text-left">
             ${isDesk ? `
                <div class="flex items-center justify-between mb-2 text-left">
                     <div class="flex items-center gap-4">
                         <div class="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-lg text-center">
                             <span class="material-icons-outlined text-white text-center">person_add</span>
                         </div>
                         <div class="text-left">
                            <h2 class="text-xl font-black tracking-tighter text-left">New Customer</h2>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-left">Add to Sales Transaction</p>
                         </div>
                     </div>
                     <button type="button" onclick="window.setSalesMode('default')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                         <span class="material-icons-outlined">close</span>
                     </button>
                </div>
             ` : ''}

            <div class="space-y-6 text-left">
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name <span class="text-slate-900">*</span></label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number <span class="text-slate-900">*</span></label>
                    <input type="tel" id="client-phone" placeholder="+91 98765 43210" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input type="email" id="client-email" placeholder="client@example.com" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left relative">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Location</label>
                    <input type="text" id="client-location" placeholder="City, State" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm pr-14 text-left">
                    <span class="absolute right-5 top-[38px] material-icons-outlined text-slate-300 text-right">location_on</span>
                </div>
            </div>

            <button type="button" id="save-client-btn" onclick="window.saveClient()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center">
                Save Customer
                <span class="material-icons-outlined text-xs text-center">done_all</span>
            </button>
            
            ${isDesk ? `
                <p class="text-[9px] font-bold text-slate-300 text-center">Customer will be automatically selected after saving</p>
            ` : ''}
        </div>
    `;
}
