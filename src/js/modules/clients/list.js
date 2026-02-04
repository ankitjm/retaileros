import { state } from '../../state.js';
import { renderClientHeader } from './header.js';

export function renderClientList() {
    const cache = window.getCache();
    const clients = cache.customers || [];

    // Fallback display if no clients exist in DB yet
    const displayClients = clients.length > 0 ? clients.map(c => ({
        n: c.name,
        p: c.phone || 'No Phone',
        l: c.joined_at ? new Date(c.joined_at).toLocaleDateString() : 'N/A'
    })) : [
        { n: 'No Clients Found', p: 'Add your first client', l: '-' }
    ];

    return `
        ${renderClientHeader('Clients', 'RETAILEROS', true)}
        <div class="scrolling-content px-8 space-y-8 relative text-left">
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Directory</button>
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Groups</button>
            </div>

            <div class="space-y-4 pb-24 text-left">
                <p class="text-[9px] font-black text-slate-300 border-b border-slate-100 pb-2 uppercase tracking-widest text-left">Database Connectivity: Turso Live</p>
                ${displayClients.map(c => `
                    <div onclick="setClientMode('profile', '${c.n}')" class="card p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${state.selectedClient === c.n ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-11 h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center">${c.n.split(' ').map(x => x[0]).join('')}</div>
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${c.n}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left">${c.p}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter leading-none mb-1 text-right">Last Seen</p>
                            <p class="text-[10px] font-black text-slate-900 tracking-tighter text-right">${c.l}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Floating Add Button -->
            <button onclick="setClientMode('add')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `;
}
