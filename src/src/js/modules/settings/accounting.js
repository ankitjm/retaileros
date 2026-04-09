export function renderSettingsAccounting() {
    return `
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Accounting</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Data Export</p>
                    </div>
                    <div class="w-10 text-left"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
                <!-- Date Range -->
                <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Date Range</p>
                     <div class="flex gap-2 text-left">
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">From</p>
                             <p class="text-sm font-black text-slate-900 text-left">01 Oct 2023</p>
                         </div>
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">To</p>
                             <p class="text-sm font-black text-slate-900 text-left">31 Oct 2023</p>
                         </div>
                     </div>
                     <div class="bg-slate-50 rounded-lg p-2.5 text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors">Quick Select: Last Month</div>
                </div>

                <!-- Include in Export -->
                 <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left text-left">Include In Export</p>
                     
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">receipt_long</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Sales Transactions</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">local_offer</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Discounts & Vouchers</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">account_balance</span>
                             <span class="text-xs font-bold text-slate-900 text-left">GST Breakup</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                      <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">qr_code</span>
                             <span class="text-xs font-bold text-slate-900 text-left">HSN / SAC Codes</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>
                </div>

                <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                    Download Transaction Excel
                    <span class="block text-[8px] font-normal text-slate-400 lowercase mt-0.5 text-center">XLSX • 1.2 MB Estimated</span>
                </button>
                
                <div class="pt-6 border-t border-dashed border-slate-200 text-left text-left">
                     <div class="flex items-center gap-3 mb-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 text-left"><span class="material-icons-outlined text-left">account_box</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">Connect Accountant</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">Automated monthly reports</p>
                        </div>
                     </div>
                     <div class="relative text-left">
                          <input type="text" value="accountant@firm.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 focus:outline-none text-left">
                          <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm text-left">help</span>
                     </div>
                     <button class="w-full py-3 mt-3 border-2 border-slate-900 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-colors text-center">
                        Enable Auto-Sync
                    </button>
                </div>
            </div>
        </div>
    `;
}
