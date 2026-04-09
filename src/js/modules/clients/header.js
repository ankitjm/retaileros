import { state } from '../../state.js';

export function renderClientHeader(title, subtitle = 'RETAILEROS') {
    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="${state.clientViewMode === 'directory' || state.clientViewMode === 'groups' ? "setApp('launcher')" : "setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">${state.clientViewMode === 'directory' || state.clientViewMode === 'groups' ? 'Back' : 'Directory'}</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">${title}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${subtitle}</p>
                </div>
                <div class="w-10"></div>
            </div>
        </header>
    `;
}
