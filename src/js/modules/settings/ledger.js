export function renderSettingsLedger() {
    const cache = window.getCache();
    const sales = (cache.sales || []).filter(s => s.status === 'completed');
    const saleItems = cache.saleItems || [];

    // Calculate totals from real data
    const totalRevenue = sales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
    const totalDiscounts = saleItems.reduce((sum, si) => sum + (si.discount_amount || 0), 0);

    // Group by payment mode
    const byMode = {};
    sales.forEach(s => {
        const mode = s.payment_mode || 'Unknown';
        byMode[mode] = (byMode[mode] || 0) + (s.total_amount || 0);
    });

    // Recent transactions (last 10 sales)
    const recentSales = sales.slice(0, 10);

    return `
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Ledger</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Overview</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar text-left">

                <!-- Revenue Summary -->
                <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden text-left">
                     <div class="flex justify-between items-start mb-4 relative z-10 text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-left"><span class="material-icons-outlined text-left">account_balance</span></div>
                            <div class="text-left">
                                 <h3 class="text-sm font-black text-slate-900 text-left">Sales Revenue</h3>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">${sales.length} Transactions</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <h3 class="text-sm font-black text-slate-900 text-right">\u20B9${totalRevenue.toLocaleString('en-IN')}</h3>
                            <p class="text-[8px] font-black text-slate-900 uppercase tracking-wide text-right">TOTAL REVENUE</p>
                        </div>
                     </div>

                     <div class="space-y-4 relative z-10 text-left">
                         <div class="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 text-left">
                             <span class="text-left">Date / Customer</span>
                             <div class="flex gap-4 text-right"><span>Mode</span><span>Amount</span></div>
                         </div>

                         ${recentSales.length === 0 ? `
                             <p class="text-[10px] text-slate-300 text-center py-6">No completed sales yet</p>
                         ` : recentSales.map(s => {
                            const date = s.date ? new Date(s.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : '';
                            return `
                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">${date}</p>
                                  <p class="text-[8px] text-slate-400 text-left">${s.customer_name || 'Walk-in'}</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-400 text-right">${s.payment_mode || '-'}</span>
                                <span class="text-slate-900 text-right">\u20B9${(s.total_amount || 0).toLocaleString('en-IN')}</span>
                              </div>
                         </div>`;
                         }).join('')}
                     </div>
                </div>

                <!-- Payment Mode Breakdown -->
                 <div class="space-y-3 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left px-1">By Payment Mode</p>

                     ${Object.entries(byMode).length === 0 ? `
                         <p class="text-[10px] text-slate-300 text-center py-4">No data</p>
                     ` : Object.entries(byMode).sort((a, b) => b[1] - a[1]).map(([mode, amount]) => `
                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">${mode === 'cash' ? 'payments' : mode === 'upi' ? 'qr_code' : mode === 'card' ? 'credit_card' : 'account_balance_wallet'}</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left capitalize">${mode}</p>
                             </div>
                         </div>
                         <div class="text-right">
                             <p class="text-xs font-black text-slate-900 text-right">\u20B9${amount.toLocaleString('en-IN')}</p>
                         </div>
                     </div>
                     `).join('')}
                 </div>

                 <div class="grid grid-cols-2 gap-4 mt-6 text-left">
                      <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL REVENUE</p>
                          <p class="text-lg font-black text-slate-900 text-left">\u20B9${totalRevenue.toLocaleString('en-IN')}</p>
                      </div>
                       <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL DISCOUNTS</p>
                          <p class="text-lg font-black text-slate-900 text-left">\u20B9${totalDiscounts.toLocaleString('en-IN')}</p>
                      </div>
                 </div>
            </div>
          </div>
    `;
}
