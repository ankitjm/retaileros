export function renderNewAutomationForm(isMobile = false) {
    return `
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-6 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center gap-4 mb-6 text-left">
                    <button onclick="setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-xl font-black text-slate-900 tracking-tighter text-left">New Automation</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-left">RetailerOS</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-6 sm:px-8 space-y-8 pb-32 text-left">
                <div class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Select Customer</p>
                    <div class="card p-4 border-slate-200 text-left">
                        <p class="text-sm font-black text-slate-900 text-left">Arjun Mehta</p>
                    </div>
                    
                    <div class="card p-4 border-slate-900 shadow-lg flex items-center justify-between relative overflow-hidden text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">AM</div>
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Arjun Mehta</h4>
                                <p class="text-[10px] font-bold text-slate-400 text-left">+91 98765 43210</p>
                            </div>
                        </div>
                        <div class="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-center">
                            <span class="material-icons-outlined text-white text-[12px] text-center">done</span>
                        </div>
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 text-left"></div>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <div class="flex items-center justify-between text-left">
                         <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</p>
                         <span class="text-[9px] font-black text-slate-400 uppercase text-right">3 Found</span>
                    </div>

                    <div class="card p-5 border-2 border-slate-900 shadow-sm relative overflow-hidden text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-center">
                                <span class="material-icons-outlined text-slate-400 text-center">smartphone</span>
                            </div>
                            <div class="flex-1 text-left">
                                <div class="flex items-center justify-between text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Nothing Phone 3a</h4>
                                    <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Today</span>
                                </div>
                                <div class="flex items-center justify-between mt-0.5 text-left">
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide text-left">Order #88219 • ₹23,999</p>
                                    <p class="text-[9px] font-bold text-slate-300 uppercase text-right">14:20 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-5 border border-slate-100 shadow-sm relative overflow-hidden opacity-60 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-center">
                                <span class="material-icons-outlined text-slate-300 text-center">headphones</span>
                            </div>
                            <div class="flex-1 text-left">
                                <div class="flex items-center justify-between text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Ear (2) Black</h4>
                                    <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">12 Oct</span>
                                </div>
                                <div class="flex items-center justify-between mt-0.5 text-left">
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide text-left">Order #77102 • ₹9,999</p>
                                    <p class="text-[9px] font-bold text-slate-300 uppercase text-right">11:05 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Action -->
            <div class="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-slate-50 text-center">
                 <button class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-[1.01] transition-transform active:scale-95 flex items-center justify-center gap-3 text-center">
                    <span class="material-icons-outlined text-sm text-center">play_circle</span> Start Automation
                </button>
            </div>
        </div>
    `;
}
