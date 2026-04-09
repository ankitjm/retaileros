export function renderInquiriesHeader() {
    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Inquiries</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">RetailerOS Hub</p>
                </div>
                <button type="button" class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">tune</span></button>
            </div>
        </header>
    `;
}
