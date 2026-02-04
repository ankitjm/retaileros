import { state } from '../../state.js';

export const renderRepairHeader = (title, subtitle, extra = '', showToggle = false) => `
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setRepairMode('search')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${title}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${subtitle}</p>
            </div>
            ${extra ? `<div class="p-2">${extra}</div>` : '<div class="w-10"></div>'}
        </div>
        ${showToggle ? `
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${state.repairTab === 'active' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${state.repairTab === 'history' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">History</button>
            </div>
        ` : ''}
    </header>
`;
