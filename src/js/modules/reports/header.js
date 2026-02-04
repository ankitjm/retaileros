import { state } from '../../state.js';

export const renderUnifiedHeader = (title, subtitle, tabs = []) => `
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${title}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${subtitle}</p>
            </div>
            <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">calendar_today</span></button>
        </div>
        ${tabs.length > 0 ? `
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                ${tabs.map(t => `<button onclick="setReportsTab('${t}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${state.reportsTab === t ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">${t.toUpperCase()}</button>`).join('')}
            </div>
        ` : ''}
    </header>
`;
