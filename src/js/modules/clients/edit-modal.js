// Client edit modal + WhatsApp action — extracted from profile.js
import { esc } from './ui.js';

// Open WhatsApp for client
window._openClientWhatsApp = function(phone, name) {
    if (!phone) return;
    const msg = `Hi ${name || 'there'}! This is a message from our store. How can we help you?`;
    const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
};

// Open edit modal
window._openClientEdit = function(clientId) {
    const cache = window.getCache ? window.getCache() : {};
    const client = (cache.customers || []).find(c => c.id === clientId);
    if (!client) return;

    const modal = document.createElement('div');
    modal.id = 'client-edit-modal';
    modal.className = 'fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-6 w-full max-w-md space-y-4 shadow-2xl">
            <div class="flex justify-between items-center">
                <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest">Edit Client</h3>
                <button onclick="document.getElementById('client-edit-modal').remove()" class="text-slate-400 hover:text-slate-900">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>
            <div class="space-y-3">
                <div class="space-y-1">
                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input id="edit-name" value="${esc(client.name)}" placeholder="Full Name" class="w-full h-12 px-4 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none">
                </div>
                <div class="space-y-1">
                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                    <input id="edit-phone" value="${esc(client.phone)}" placeholder="Phone" class="w-full h-12 px-4 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none">
                </div>
                <div class="space-y-1">
                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                    <input id="edit-email" value="${esc(client.email)}" placeholder="Email" class="w-full h-12 px-4 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none">
                </div>
                <div class="space-y-1">
                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
                    <input id="edit-location" value="${esc(client.location)}" placeholder="City / Location" class="w-full h-12 px-4 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none">
                </div>
                <div class="space-y-1">
                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                    <input id="edit-dob" type="date" value="${client.dob || ''}" class="w-full h-12 px-4 bg-slate-50 rounded-xl text-sm font-bold text-slate-900 border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none">
                </div>
            </div>
            <button onclick="window._saveClientEdit('${clientId}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl">
                Save Changes
            </button>
        </div>
    `;
    document.body.appendChild(modal);
};

// Save edit
window._saveClientEdit = async function(clientId) {
    const name = document.getElementById('edit-name')?.value?.trim();
    if (!name) { if (window.toast) window.toast.error('Name is required'); return; }

    const updates = {
        id: clientId,
        name,
        phone: document.getElementById('edit-phone')?.value?.trim() || '',
        email: document.getElementById('edit-email')?.value?.trim() || '',
        location: document.getElementById('edit-location')?.value?.trim() || '',
        dob: document.getElementById('edit-dob')?.value || null
    };

    try {
        const { db } = await import('../../utils/db.js');
        await db.clients.update(updates);

        const cache = window.getCache ? window.getCache() : {};
        const client = (cache.customers || []).find(c => c.id === clientId);
        if (client) Object.assign(client, updates);

        document.getElementById('client-edit-modal')?.remove();
        if (window.toast) window.toast.success('Client updated');
        window.triggerRender();
    } catch (err) {
        console.error('Client edit error:', err);
        if (window.toast) window.toast.error('Failed to save');
    }
};
