export function renderAutomationSequence(id, isMobile = false) {
    return `
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-6 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <button onclick="setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                            <span class="material-icons-outlined text-center">chevron_left</span>
                        </button>
                        <div class="text-left">
                            <div class="flex items-center gap-2 text-left">
                                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-widest text-left">Automation</p>
                                <span class="material-icons-outlined text-[10px] text-slate-300 transition-colors text-left">chevron_right</span>
                                <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Arjun Mehta</h2>
                            </div>
                            <p class="text-[9px] font-black text-green-500 uppercase tracking-[0.2em] mt-0.5 text-left">Active Sequence</p>
                        </div>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-right"><span class="material-symbols-outlined text-xl text-right">more_horiz</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-6 sm:px-8 relative pt-6 custom-scrollbar text-left">
                <!-- Timeline Vertical Line -->
                <div class="absolute left-[39px] sm:left-[47px] top-0 bottom-0 w-px bg-slate-200 border-dashed border-l border-slate-200 text-left"></div>

                <div class="space-y-12 pb-40 relative z-10 text-left">
                    <!-- T+0 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-xl shadow-slate-200 relative z-10 text-center">T+0</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Purchase Confirmation</h4>
                                <span class="px-2 py-0.5 bg-green-50 text-[8px] font-black text-green-600 rounded uppercase tracking-wider text-right">Sent</span>
                             </div>
                             <p class="text-xs font-medium text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Hi Arjun! Thank you for choosing us. Your warranty for the new device is now active. View details here: retailer.os/w/2938"
                             </p>
                        </div>
                    </div>

                    <!-- T+3 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 relative z-10 text-center">T+3</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Educational Tip</h4>
                                <span class="px-2 py-0.5 bg-blue-50 text-[8px] font-black text-blue-600 rounded uppercase tracking-wider text-right">Scheduled</span>
                             </div>
                             <p class="text-xs font-medium text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Pro Tip: To maximize your battery health, try to keep your charge between 20% and 80%. Here's a guide to your settings..."
                             </p>
                        </div>
                    </div>

                    <!-- T+15 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 relative z-10 text-center">T+15</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative bg-white/50 border-dashed text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Accessory Upsell</h4>
                                <span class="px-2 py-0.5 bg-slate-100 text-[8px] font-black text-slate-400 rounded uppercase tracking-wider text-right">Pending</span>
                             </div>
                             <p class="text-xs font-medium text-slate-400 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Found the perfect match? Get 15% off on all TWS and Cases this week only. Use code: MYNEWGEAR"
                             </p>
                        </div>
                    </div>

                     <!-- T+90 -->
                     <div class="flex gap-6 opacity-40 grayscale text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-300 relative z-10 text-center">T+90</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Upgrade Offer</h4>
                                <span class="px-2 py-0.5 bg-slate-50 text-[8px] font-black text-slate-300 rounded uppercase tracking-wider text-right">Locked</span>
                             </div>
                             <p class="text-xs font-medium text-slate-300 leading-relaxed italic border-l-2 border-slate-100 pl-4 p-3 rounded-lg text-left">
                                "Be the first to upgrade! The new flagship series launches tomorrow. Your loyalty trade-in value is estimated at ₹45,000."
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating Action for Sequence -->
            <div class="absolute bottom-32 right-10 z-20 text-center">
                <button class="w-12 h-12 bg-slate-900 text-white rounded-xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                    <span class="material-icons-outlined text-lg text-center">add_comment</span>
                </button>
            </div>

            <!-- Footer Profile -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-50 flex items-center justify-between text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-400 text-center">AS</div>
                    <div class="text-left">
                        <h4 class="text-[11px] font-black text-slate-900 tracking-tight text-left">Apple Store - Mumbai Central</h4>
                        <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-left">Store Manager</p>
                    </div>
                </div>
                <button class="flex items-center gap-2 text-[8px] font-black text-slate-900 uppercase tracking-widest text-right">
                    Logout <span class="material-icons-outlined text-xs text-center">logout</span>
                </button>
            </div>
        </div>
    `;
}
