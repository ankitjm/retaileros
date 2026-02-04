import { state } from '../../state.js';

export function renderAutomationDashboard() {
    const cache = window.getCache();
    const automations = cache.automations || [];
    const recentSales = cache.sales || [];

    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
             <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Automation</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">RetailerOS</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-32 text-left">
            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-4 text-left">
                <div class="card p-5 border-slate-200 shadow-sm text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Workflows</p>
                    <div class="flex items-baseline gap-2 text-left">
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${automations.length}</h3>
                        <span class="text-[9px] font-bold text-green-500 uppercase text-left">Live</span>
                    </div>
                </div>
                <div class="card p-5 border-slate-200 shadow-sm text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Recent Sales</p>
                    <div class="flex items-baseline gap-2 text-left">
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${recentSales.length}</h3>
                        <span class="text-[9px] font-bold text-blue-500 uppercase text-left">Tracked</span>
                    </div>
                </div>
            </div>

            <!-- Automations List -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between px-1 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Active Automations</h3>
                    <button class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-right">Settings</button>
                </div>

                <div class="space-y-3 text-left">
                    ${automations.map(a => `
                        <div class="card p-4 border-2 transition-all flex items-center justify-between text-left border-transparent hover:border-slate-100">
                            <div class="flex items-center gap-4 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-left">
                                    <span class="material-icons-outlined text-slate-300 text-sm">bolt</span>
                                </div>
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">${a.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${a.type}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="px-2 py-0.5 bg-green-50 text-[8px] font-black text-green-600 rounded uppercase tracking-wider mb-1 text-right">${a.status}</div>
                                <p class="text-[9px] font-bold text-slate-300 uppercase text-right">${new Date(a.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                    `).join('')}

                    ${automations.length === 0 ? `
                        <div class="py-10 text-center opacity-20">
                            <p class="text-[10px] font-black uppercase tracking-widest">No automations configured</p>
                        </div>
                    ` : ''}
                </div>
            </section>
        </div>

        <!-- Floating Action Button -->
        <div class="absolute bottom-10 right-10 z-20 text-left">
            <button onclick="setAutomationMode('create')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `;
}
