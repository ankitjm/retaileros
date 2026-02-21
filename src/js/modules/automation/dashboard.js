import { state } from '../../state.js';

export function renderAutomationDashboard() {
    const cache = window.getCache();
    const automations = cache.automations || [];
    const automationMessages = cache.automationMessages || [];
    
    // Calculate stats
    const activeAutomations = automations.filter(a => a.status === 'active').length;
    const completedAutomations = automations.filter(a => a.status === 'completed').length;
    const totalMessages = automationMessages.length;
    const sentMessages = automationMessages.filter(m => m.status === 'sent').length;
    const pendingMessages = automationMessages.filter(m => m.status === 'pending').length;

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
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">settings</span></button>
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-32 text-left">
            <!-- Stats Cards -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${activeAutomations}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${sentMessages}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Sent</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${pendingMessages}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Scheduled</p>
                </div>
            </div>

            <!-- Active Automations List -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between px-1 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">All Automations</h3>
                    <span class="text-[8px] font-black text-slate-300 uppercase">${automations.length} total</span>
                </div>

                <div class="space-y-3 text-left">
                    ${automations.map(a => {
                        const messages = automationMessages.filter(m => m.automation_id === a.id);
                        const sent = messages.filter(m => m.status === 'sent').length;
                        const pending = messages.filter(m => m.status === 'pending').length;
                        const progress = messages.length > 0 ? Math.round((sent / messages.length) * 100) : 0;
                        
                        return `
                            <button type="button" onclick="window.setAutomationMode('details', '${a.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${state.activeAutomationId === a.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-100'}">
                                <div class="flex items-center gap-4 text-left">
                                    <div class="w-12 h-12 ${a.status === 'active' ? 'bg-slate-900' : 'bg-slate-200'} rounded-xl flex items-center justify-center text-center">
                                        <span class="material-icons-outlined ${a.status === 'active' ? 'text-white' : 'text-slate-400'} text-lg">smart_toy</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${a.name}</h4>
                                        <p class="text-[10px] font-bold text-slate-400 text-left">${a.customer_name}</p>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${progress}%"></div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-400">${sent}/${messages.length}</span>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0">
                                        <div class="px-2 py-0.5 ${a.status === 'active' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'} text-[8px] font-black rounded uppercase tracking-wider mb-1">${a.status}</div>
                                        <p class="text-[9px] font-bold text-slate-300 uppercase">${new Date(a.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</p>
                                    </div>
                                </div>
                            </button>
                        `;
                    }).join('')}

                    ${automations.length === 0 ? `
                        <div class="py-16 text-center">
                            <span class="material-icons-outlined text-4xl text-slate-200 mb-4">smart_toy</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No automations yet</p>
                            <p class="text-[9px] font-bold text-slate-300 mt-1">Create one from a sale to get started</p>
                        </div>
                    ` : ''}
                </div>
            </section>
        </div>

        <!-- Floating Action Button -->
        <div class="absolute bottom-10 right-10 z-20 text-left">
            <button onclick="window.setAutomationMode('create')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `;
}
