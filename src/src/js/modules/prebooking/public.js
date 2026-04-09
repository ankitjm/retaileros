export function renderPreBookingPublic(isMobile) {
    return `
        <div class="h-full flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar animate-slide-up text-left">
            <div class="w-full max-w-md mx-auto bg-white min-h-full flex flex-col shadow-2xl relative overflow-hidden text-left">
                <!-- Promo Header -->
                <header class="p-6 pb-4 flex justify-between items-center bg-white/40 absolute top-0 w-full z-20 backdrop-blur-md text-left">
                    <p class="text-[8px] font-black text-slate-950 uppercase tracking-[0.3em] text-left">EXCLUSIVE ACCESS</p>
                    <div class="flex items-center gap-1 px-3 py-1 bg-slate-950 text-white rounded-full text-left">
                         <span class="text-[8px] font-black uppercase tracking-widest text-left">APPLESTORE-MUMBAICENTRAL</span>
                         <span class="material-symbols-outlined text-[10px] text-left">verified</span>
                    </div>
                </header>

                <div class="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden group text-left">
                    <img src="https://images.unsplash.com/photo-1726759081577-4c75ca7732a3?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s] text-left">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent text-left"></div>
                    
                    <div class="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16 text-center text-white">
                        <div class="mb-10 text-center animate-pulse">
                            <p class="text-[8px] font-black uppercase tracking-[0.4em] mb-4 text-slate-400">PRE-BOOKING CLOSES IN</p>
                            <div class="flex gap-4 text-center justify-center">
                                <div class="text-center">
                                    <p class="text-2xl font-black tabular-nums">02</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">DAYS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">14</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">HOURS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">38</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">MINS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">05</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">SECS</p>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-4xl font-black mb-2 tracking-tighter">iPhone 16 Pro</h2>
                        <p class="text-xs font-bold text-slate-400 mb-8 max-w-[200px]">The ultimate leap into the future.</p>
                        
                        <button class="px-8 py-2.5 border border-white/20 rounded-full text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-slate-950 transition-all text-center">RESERVE NOW</button>
                    </div>
                </div>

                <div class="p-10 space-y-12 text-left">
                    <div class="text-center">
                        <h3 class="text-2xl font-black tracking-tighter text-slate-950 mb-2">Reserve your device.</h3>
                        <p class="text-[10px] font-bold text-slate-400 mb-6">Secure yours with a fully refundable deposit.</p>
                        <div class="inline-block px-4 py-2 border-2 border-slate-950 text-[8px] font-black uppercase tracking-widest rounded-xl mb-12">VALID ONLY AT APPLE STORE - MUMBAI CENTRAL</div>
                    </div>

                    <div class="space-y-6 text-left">
                         <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">FULL NAME</label>
                            <input type="text" placeholder="John Doe" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">PHONE NUMBER</label>
                            <input type="text" placeholder="+91 98765 43210" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">EMAIL ADDRESS</label>
                            <input type="email" placeholder="john@example.com" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                    </div>

                    <div class="pt-6 text-center">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-full py-5 bg-slate-950 text-white rounded-3xl text-[12px] font-black uppercase tracking-[0.1em] shadow-2xl flex flex-col items-center justify-center gap-1 mb-8 active:scale-95 transition-all text-center">
                             <div class="text-center">Pay ₹5,000 Deposit</div>
                             <div class="text-[8px] font-bold opacity-30 tracking-widest text-center">INSTANT CONFIRMATION</div>
                        </button>

                        <div class="flex flex-col items-center gap-4 py-8 border-t border-slate-100 text-center">
                             <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-center">Supported Payment Methods</p>
                             <div class="flex gap-6 grayscale opacity-30 text-center">
                                <span class="material-icons-outlined text-xl text-center">credit_card</span>
                                <span class="material-icons-outlined text-xl text-center">payments</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance_wallet</span>
                             </div>
                        </div>

                         <div class="bg-slate-50 p-6 rounded-3xl space-y-4 text-left">
                            <div class="flex items-center gap-3 mb-2 text-left">
                                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm text-center"><span class="material-icons-outlined text-base text-center">info</span></div>
                                <h4 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Pre-booking Benefits</h4>
                            </div>
                            <ul class="space-y-2 pl-11 relative text-left">
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Guaranteed Day 1 Delivery
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Exclusive 'Mumbai Central' Launch Invite
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Complimentary Premium Case
                                </li>
                            </ul>
                        </div>
                    </div>

                    <footer class="pt-20 pb-10 flex flex-col items-center gap-6 text-center">
                        <div class="flex items-center gap-3 opacity-30 grayscale text-center">
                             <div class="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-center"><div class="w-2 h-2 bg-white rounded-full text-center"></div></div>
                             <h4 class="text-base font-black tracking-tighter text-slate-950 text-center">RetailerOS</h4>
                        </div>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center uppercase">© 2024 APPLE STORE MUMBAI CENTRAL. ALL RIGHTS RESERVED.</p>
                        
                        <button class="flex items-center gap-3 px-5 py-3 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm bg-white hover:bg-slate-50 transition-colors mt-4 text-center">
                            <span class="material-icons-outlined text-base text-center">support_agent</span> Need Help?
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    `;
}
