import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

window._confirmPromoterHire = async () => {
    const name = document.getElementById('promoter-name')?.value?.trim();
    const phone = document.getElementById('promoter-phone')?.value?.trim();
    const hireDate = document.getElementById('promoter-hire-date')?.value?.trim();
    const brand = document.getElementById('promoter-brand')?.value;

    if (!name) {
        if (window.toast) window.toast.error('Full name is required');
        return;
    }

    try {
        const id = 'TM-' + Math.random().toString(36).substr(2, 8).toUpperCase();
        await db.teamMembers.add({
            id,
            name,
            role: brand && brand !== 'Select Brand' ? `${brand} Promoter` : 'Store Staff',
            phone: phone || null,
            email: null,
            status: 'active',
            joined_at: hireDate || new Date().toISOString().split('T')[0]
        });

        const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
        db.activityLogs.add({ action: 'team', detail: `Hired new promoter: ${name}`, user_name: r.contact_person || 'Owner', icon: 'person_add', color: 'green' });

        await syncData();
        if (window.toast) window.toast.success(`${name} added to team`);
        window.setPromoterViewMode('list');
    } catch (err) {
        console.error('Hire failed:', err);
        if (window.toast) window.toast.error('Failed to add team member');
    }
};

export function renderPromoterOnboarding() {
    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight">Add Promoter</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5">STAFF ONBOARDING</p>
                    </div>
                </div>
                <button onclick="setPromoterViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full"><span class="material-icons-outlined text-lg">close</span></button>
            </div>

            <div class="flex-1 overflow-y-auto p-8 space-y-8 text-left">
                <div class="text-left">
                    <h1 class="text-xl font-black text-slate-900 tracking-tight mb-1">Staff Onboarding</h1>
                    <p class="text-xs text-slate-500 font-medium">Register a new promoter or store employee.</p>
                </div>

                <div class="space-y-5 text-left">
                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" id="promoter-name" placeholder="Enter legal name" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Mobile Number</label>
                        <input type="text" id="promoter-phone" placeholder="9876543210" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hiring Date</label>
                        <input type="date" id="promoter-hire-date" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Assigned Brand</label>
                        <div class="relative">
                            <select id="promoter-brand" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm appearance-none text-slate-600">
                                <option>Select Brand</option>
                                <option>Samsung</option>
                                <option>Apple</option>
                                <option>Sony</option>
                                <option>LG</option>
                                <option>OnePlus</option>
                                <option>Nothing</option>
                            </select>
                            <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">expand_more</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-slate-100 shrink-0">
                <button onclick="window._confirmPromoterHire()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    Confirm Hire <span class="material-icons-outlined text-sm">person_add</span>
                </button>
            </div>
        </div>
    `;
}
