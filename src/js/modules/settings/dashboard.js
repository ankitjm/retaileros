import { state } from '../../state.js';

export function renderSettingsDashboard(mode) {
    const isMob = mode === 'mobile';
    const gridClass = !isMob ? 'grid-cols-6' : 'grid-cols-4';

    const settingsApps = [
        { n: 'Roles', i: 'admin_panel_settings', k: 'roles' },
        { n: 'Finance', i: 'account_balance', k: 'accounting' },
        { n: 'Ledger', i: 'menu_book', k: 'ledger' },
        { n: 'Store', i: 'store', k: 'store' },
        { n: 'Security', i: 'security', k: 'security' },
        { n: 'Alerts', i: 'notifications', k: 'alerts' },
        { n: 'Taxes', i: 'percent', k: 'taxes' },
        { n: 'Plugins', i: 'grid_view', k: 'plugins' },
        { n: 'Teams', i: 'hub', k: 'teams' },
        { n: 'Logs', i: 'history', k: 'logs' },
        { n: 'Lang', i: 'language', k: 'lang' },
        { n: 'Backup', i: 'cloud_upload', k: 'backup' },
        { n: 'Bills', i: 'description' },
        { n: 'AI Config', i: 'smart_toy', k: 'ai' },
        { n: 'Updates', i: 'update', k: 'updates' },
        { n: 'API', i: 'key' },
        { n: 'Theme', i: 'palette', k: 'theme' },
        { n: 'Help', i: 'support', k: 'help' }
    ];

    return `
         <div class="h-full flex flex-col relative bg-white text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Settings</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Global Dashboard</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">tune</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar text-left">
                <!-- Settings Grid -->
                <div class="card overflow-hidden border-slate-200 mb-8 text-left">
                    <div class="grid ${gridClass} divide-x divide-y divide-slate-100 text-left">
                        ${settingsApps.map(a => `
                            <button onclick="${a.k ? `window.setSettingsView('${a.k}')` : ''}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${state.settingsView === a.k ? 'bg-slate-100' : ''}">
                                <span class="material-icons-outlined text-xl ${state.settingsView === a.k ? 'text-slate-900 font-bold' : 'text-slate-500'} mb-1 text-center">${a.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${state.settingsView === a.k ? 'text-slate-900' : 'text-slate-500'}">${a.n}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="mb-4 text-left">
                     <p class="text-[8px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></span> System Health
                     </p>
                     <div class="bg-white border border-slate-100 rounded-2xl p-4 flex gap-8 shadow-sm text-left">
                        <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">SERVER STATUS</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-green-600 uppercase tracking-wide text-left">
                                <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse text-left"></span> Optimal
                             </div>
                        </div>
                         <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">LAST SYNC</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-slate-900 uppercase tracking-wide text-left">
                                <span class="material-icons-outlined text-xs text-left">history</span> 2m ago
                             </div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
    `;
}
