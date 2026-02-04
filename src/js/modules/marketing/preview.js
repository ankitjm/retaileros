export function renderMarketingPreview() {
    return `
        <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 text-left">
            <div class="card p-6 border-slate-200 shadow-sm bg-white w-full max-w-sm aspect-square flex items-center justify-center relative overflow-hidden group text-left">
                <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 text-left"></div>
                <div class="relative z-10 text-center">
                    <h3 class="text-xl font-black text-slate-900 tracking-tight mb-2 text-center">GENERATED</h3>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">MARKETING CREATIVE</p>
                    <div class="w-16 h-1 bg-slate-200 mx-auto mt-4 rounded-full text-center"></div>
                </div>
                <div class="absolute top-4 right-4 bg-slate-900 text-white text-[8px] font-black uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-left">1080 x 1080</div>
            </div>

            <div class="w-full max-w-sm grid grid-cols-2 gap-3 text-left">
                <button class="py-3 border-2 border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase hover:border-slate-900 transition-all flex items-center justify-center gap-2 text-left">
                    <span class="material-icons-outlined text-sm text-left">refresh</span> Re-Generate
                </button>
                <button class="py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-left">
                    <span class="material-icons-outlined text-sm text-left">download</span> Download
                </button>
            </div>

            <div class="w-full max-w-sm text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Refine Result</p>
                <div class="relative text-left">
                    <input type="text" placeholder="e.g., 'Make the background more minimal'" class="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-sm text-left">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}
