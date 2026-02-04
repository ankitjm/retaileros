import { state } from '../../state.js';

export function renderClientHeader(title, subtitle = 'RETAILEROS', showSearch = false) {
    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${state.clientViewMode === 'directory' ? "setApp('launcher')" : "setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${state.clientViewMode === 'directory' ? 'Back' : 'Directory'}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${title}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${subtitle}</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-right"><span class="material-symbols-outlined text-xl text-right">${showSearch ? 'search' : 'more_horiz'}</span></button>
            </div>
        </header>
    `;
}
