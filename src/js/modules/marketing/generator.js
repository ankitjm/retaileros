import { renderMarketingHeader } from './header.js';

export function renderMarketingGenerator() {
    return `
        ${renderMarketingHeader()}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32">
            <!-- Usage Limit -->
            <div class="card p-5 border-slate-200 shadow-sm text-left">
                <div class="flex justify-between items-end mb-3">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Usage Limit</p>
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">128 <span class="text-slate-300 text-lg">/ 150</span></h3>
                    </div>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-right">Generations Available</p>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden text-left">
                    <div class="h-full bg-slate-900 w-[85%] rounded-full"></div>
                </div>
            </div>

            <!-- Prompt Input -->
            <div class="relative text-left">
                <textarea placeholder="Describe the campaign you want to create..." class="w-full h-40 p-5 pr-12 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm resize-none leading-relaxed text-left"></textarea>
                <button class="absolute right-5 bottom-5 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-full">
                    <span class="material-icons-outlined text-lg">mic</span>
                </button>
            </div>

            <button class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 text-left">
                <span class="material-icons-outlined text-lg">bolt</span> Generate Creative
            </button>

            <!-- Quick Ideas -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Quick Ideas</h3>
                <div class="flex flex-wrap gap-2 text-left">
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">New Product Launch</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Festive Sale</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Weekend Flash Promo</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Seasonal Offer</button>
                </div>
            </section>

             <!-- Reference Assets -->
             <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Reference Assets</h3>
                <div class="card h-32 border-dashed border-2 border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors group text-left">
                     <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-slate-900 group-hover:scale-110 transition-all text-left">
                        <span class="material-icons-outlined">add_photo_alternate</span>
                     </div>
                     <div class="text-center">
                        <p class="text-[10px] font-bold text-slate-600">Upload Store or Product Images</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">AI will use these as visual context</p>
                     </div>
                </div>
             </section>
        </div>
    `;
}
