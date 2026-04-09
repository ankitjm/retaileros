import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { state, setClientMode, setSalesMode } from '../../state.js';
import { renderClientHeader } from './header.js';
import { selectSaleCustomer } from '../sales/new-transaction.js';
import { esc } from './ui.js';

// Duplicate phone detection state
let phoneMatchedCustomer = null;

function renderPhoneMatchHint() {
    const c = phoneMatchedCustomer;
    if (!c) return '';
    return `
        <div class="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
            <div class="flex items-center gap-2">
                <span class="material-icons-outlined text-amber-500 text-base">info</span>
                <span class="text-[10px] font-black text-amber-700 uppercase tracking-widest">Existing Contact Found</span>
            </div>
            <div class="text-sm font-bold text-slate-900">${c.name || 'Unknown'}</div>
            <div class="text-xs text-slate-500">${c.phone || ''}${c.location ? ' · ' + c.location : ''}</div>
            <div class="flex gap-2 pt-1">
                <button type="button" onclick="window._useMatchedContact('${c.id}','${esc(c.name)}')" class="flex-1 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest text-center">Use This Contact</button>
                <button type="button" onclick="window._openClientEdit('${c.id}')" class="flex-1 py-2 bg-white border border-slate-200 text-slate-900 rounded-xl text-[9px] font-black uppercase tracking-widest text-center">Edit Contact</button>
            </div>
        </div>
    `;
}

window.checkPhoneDuplicate = function(value) {
    const digits = (value || '').replace(/\D/g, '');
    const hint = document.getElementById('phone-match-hint');
    if (digits.length < 6) {
        phoneMatchedCustomer = null;
        if (hint) hint.innerHTML = '';
        return;
    }
    const customers = (window._db_cache && window._db_cache.customers) || [];
    const match = customers.find(c => {
        const cDigits = (c.phone || '').replace(/\D/g, '');
        return cDigits && (cDigits.includes(digits) || digits.includes(cDigits));
    });
    phoneMatchedCustomer = match || null;
    if (hint) hint.innerHTML = renderPhoneMatchHint();
};

window._useMatchedContact = function(id, name) {
    if (state.currentApp === 'sales') {
        selectSaleCustomer(id, name);
        setSalesMode('default');
    } else {
        setClientMode('profile', name, id);
    }
};

export async function saveClient() {
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');
    const emailInput = document.getElementById('client-email');
    const locationInput = document.getElementById('client-location');
    const dobInput = document.getElementById('client-dob');

    if (!nameInput || !phoneInput) {
        console.error('Form inputs not found');
        window.toast.error("Form error. Please try again.");
        return;
    }

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const location = locationInput ? locationInput.value.trim() : '';
    const dob = dobInput ? dobInput.value : null;

    if (!name || !phone) {
        window.toast.warning("Name and Phone are required");
        return;
    }

    if (phoneMatchedCustomer) {
        window.toast.warning("A contact with this number already exists");
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

        await db.clients.add({
            id: newId,
            name,
            phone,
            email,
            location,
            dob
        });

        await syncData();

        phoneMatchedCustomer = null;
        window.toast.success('Client added successfully!');

        if (state.currentApp === 'sales') {
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

    // ── Desktop secondary pane: compact form ──
    if (isDesk) {
        return `
            <div class="h-full flex flex-col bg-white overflow-hidden">
                <div class="p-8 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-20 shrink-0 flex items-center gap-4 border-b border-slate-100">
                    <button type="button" onclick="window.setSalesMode('default')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                        <span class="material-icons-outlined">close</span>
                    </button>
                    <div>
                        <p class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">New Customer</p>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">Add to Sales Transaction</p>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-5 custom-scrollbar pb-32">
                    ${renderFormFields()}
                </div>
                <div class="p-8 pt-0 sticky bottom-0 z-20 bg-white">
                    <button type="button" id="save-client-btn" onclick="window.saveClient()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                        Save Customer
                        <span class="material-icons-outlined text-sm">done_all</span>
                    </button>
                    <p class="text-[9px] font-bold text-slate-300 text-center mt-3">Customer will be automatically selected after saving</p>
                </div>
            </div>
        `;
    }

    // ── Mobile: full capture.js style ──
    return `
        <div class="h-full flex flex-col bg-white overflow-hidden">
            <!-- Sticky header -->
            <div class="p-8 pb-4 bg-white/80 backdrop-blur-md sticky top-0 z-20 shrink-0 flex items-center gap-4 border-b border-slate-100">
                <button type="button" onclick="setClientMode('directory')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                    <span class="material-icons-outlined">chevron_left</span>
                </button>
                <div>
                    <p class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">New Client</p>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-0.5">Customer Directory</p>
                </div>
            </div>
            <!-- Scrollable form -->
            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-5 custom-scrollbar pb-32">
                ${renderFormFields()}
            </div>
            <!-- Sticky save button -->
            <div class="p-8 pt-0 sticky bottom-0 z-20 bg-white">
                <button type="button" id="save-client-btn" onclick="window.saveClient()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                    Save Customer
                    <span class="material-icons-outlined text-sm">done_all</span>
                </button>
            </div>
        </div>
    `;
}

function renderFormFields() {
    const inputClass = 'w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5';
    const labelClass = 'text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3';

    return `
        <div>
            <label class="${labelClass}">Full Name <span class="text-slate-900">*</span></label>
            <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="${inputClass}">
        </div>
        <div>
            <label class="${labelClass}">Mobile Number <span class="text-slate-900">*</span></label>
            <input type="tel" id="client-phone" placeholder="+91 98765 43210" oninput="window.checkPhoneDuplicate(this.value)" class="${inputClass}">
            <div id="phone-match-hint"></div>
        </div>
        <div>
            <label class="${labelClass}">Email Address</label>
            <input type="email" id="client-email" placeholder="client@example.com" class="${inputClass}">
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="relative">
                <label class="${labelClass}">Location</label>
                <input type="text" id="client-location" placeholder="City, State" class="${inputClass} pr-14">
                <span class="absolute right-5 bottom-4 material-icons-outlined text-slate-300">location_on</span>
            </div>
            <div>
                <label class="${labelClass}">Date of Birth</label>
                <input type="date" id="client-dob" class="${inputClass} text-slate-400">
            </div>
        </div>
    `;
}
