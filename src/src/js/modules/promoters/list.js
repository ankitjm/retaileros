import { state } from '../../state.js';
import { renderPromoterHeader } from './header.js';

// Local check-in state (persisted in localStorage)
if (!window._promoterCheckIns) {
    try {
        window._promoterCheckIns = JSON.parse(localStorage.getItem('promoter_checkins') || '{}');
    } catch { window._promoterCheckIns = {}; }
}

window._togglePromoterCheckIn = (id, evt) => {
    if (evt) evt.stopPropagation();
    window._promoterCheckIns[id] = !window._promoterCheckIns[id];
    localStorage.setItem('promoter_checkins', JSON.stringify(window._promoterCheckIns));
    if (window.toast) window.toast.success(window._promoterCheckIns[id] ? 'Checked in' : 'Checked out');
    window.triggerRender();
};

const MOCK_PROMOTERS = [
    { id: 'P1', initials: 'RS', name: 'Rohan S.', role: 'PREMIUM BRAND' },
    { id: 'P2', initials: 'AK', name: 'Ananya K.', role: 'STORE STAFF' },
    { id: 'P3', initials: 'VM', name: 'Vikram M.', role: 'ELECTRONICS PRO' },
    { id: 'P4', initials: 'SD', name: 'Sarah D.', role: 'AUDIO SPECIALIST' },
];

export function renderPromoterList() {
    // Merge DB team members with mock data
    const cache = window.getCache();
    const dbMembers = (cache.teamMembers || []).filter(m => m.status === 'active');
    const allPromoters = [
        ...MOCK_PROMOTERS,
        ...dbMembers.map(m => ({
            id: m.id,
            initials: m.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
            name: m.name,
            role: (m.role || 'STAFF').toUpperCase()
        }))
    ];

    const checkedInCount = allPromoters.filter(p => window._promoterCheckIns[p.id]).length;

    return `
        ${renderPromoterHeader()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            ${allPromoters.map(p => {
                const isCheckedIn = window._promoterCheckIns[p.id] || false;
                return `
                    <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${state.promoterViewMode === 'performance' ? 'border-transparent hover:border-slate-200' : 'border-transparent hover:border-slate-200'}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm">${p.initials}</div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900">${p.name}</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide">${p.role}</p>
                            </div>
                        </div>
                        <div class="text-right" onclick="event.stopPropagation()">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1">CHECK-IN</p>
                            <button onclick="window._togglePromoterCheckIn('${p.id}', event)" class="w-10 h-5 ${isCheckedIn ? 'bg-slate-900' : 'bg-slate-200'} rounded-full relative cursor-pointer ml-auto transition-colors">
                                <div class="w-3 h-3 bg-white rounded-full absolute ${isCheckedIn ? 'right-1' : 'left-1'} top-1 shadow-sm transition-all"></div>
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}

            <!-- Add Button -->
            <div class="fixed bottom-32 right-8 z-20 sm:absolute sm:bottom-32 sm:right-8">
                <button onclick="setPromoterViewMode('onboarding')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        </div>

        <!-- Footer Stats -->
        <div class="p-6 border-t border-slate-100 bg-white grid grid-cols-2 gap-4 shrink-0 z-10 relative text-left">
             <div class="text-left border-r border-slate-100">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1">CHECKED IN</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight">${checkedInCount}/${allPromoters.length}</h3>
             </div>
             <div class="text-right">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1">TOTAL TEAM</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight">${allPromoters.length}</h3>
             </div>
        </div>
    `;
}
