function toCSV(rows) {
    if (!rows || rows.length === 0) return 'No data';
    const headers = Object.keys(rows[0]);
    return [
        headers.join(','),
        ...rows.map(row => headers.map(h => {
            const val = row[h] == null ? '' : String(row[h]);
            return val.includes(',') || val.includes('"') ? `"${val.replace(/"/g, '""')}"` : val;
        }).join(','))
    ].join('\n');
}

window._downloadAccountingExport = function() {
    const fromVal = document.getElementById('acct-from')?.value;
    const toVal = document.getElementById('acct-to')?.value;

    const cache = window.getCache ? window.getCache() : {};
    let sales = (cache.sales || []).filter(s => s.status !== 'draft');

    if (fromVal) sales = sales.filter(s => s.date >= fromVal);
    if (toVal) sales = sales.filter(s => s.date <= toVal + 'T23:59:59');

    if (sales.length === 0) {
        if (window.toast) window.toast.warning('No sales data for selected date range');
        return;
    }

    const csv = toCSV(sales);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `retaileros-accounting-${dateStr}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);
    if (window.toast) window.toast.success(`Exported ${sales.length} transactions`);
};

export function renderSettingsAccounting() {
    const today = new Date().toISOString().slice(0, 10);
    const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10);

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
                             <input id="acct-from" type="date" value="${firstOfMonth}" class="text-sm font-black text-slate-900 bg-transparent border-none outline-none w-full">
                         </div>
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">To</p>
                             <input id="acct-to" type="date" value="${today}" class="text-sm font-black text-slate-900 bg-transparent border-none outline-none w-full">
                         </div>
                     </div>
                     <div class="flex gap-2">
                        <button onclick="document.getElementById('acct-from').value='${firstOfMonth}'; document.getElementById('acct-to').value='${today}'"
                            class="flex-1 bg-slate-50 rounded-lg p-2.5 text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors">
                            This Month
                        </button>
                        <button onclick="(() => { const d=new Date(); const f=new Date(d.getFullYear(),d.getMonth()-1,1); const t=new Date(d.getFullYear(),d.getMonth(),0); document.getElementById('acct-from').value=f.toISOString().slice(0,10); document.getElementById('acct-to').value=t.toISOString().slice(0,10); })()"
                            class="flex-1 bg-slate-50 rounded-lg p-2.5 text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors">
                            Last Month
                        </button>
                     </div>
                </div>

                <!-- Include in Export -->
                 <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Include In Export</p>
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg">receipt_long</span>
                             <span class="text-xs font-bold text-slate-900">Sales Transactions</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900">check_circle</span>
                     </div>
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg">local_offer</span>
                             <span class="text-xs font-bold text-slate-900">Payment Modes</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900">check_circle</span>
                     </div>
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg">account_balance</span>
                             <span class="text-xs font-bold text-slate-900">GST Breakup</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900">check_circle</span>
                     </div>
                </div>

                <button onclick="window._downloadAccountingExport()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                    Download Transaction CSV
                    <span class="block text-[8px] font-normal text-slate-400 lowercase mt-0.5">Filtered by date range</span>
                </button>

                <div class="pt-6 border-t border-dashed border-slate-200 text-left">
                     <div class="flex items-center gap-3 mb-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900"><span class="material-icons-outlined">account_box</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900">Connect Accountant</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Automated monthly reports</p>
                        </div>
                     </div>
                     <div class="relative text-left">
                          <input type="text" placeholder="accountant@firm.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 focus:outline-none">
                          <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">help</span>
                     </div>
                     <button onclick="window.toast?.info('Auto-sync via email — coming soon')" class="w-full py-3 mt-3 border-2 border-slate-900 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-colors text-center">
                        Enable Auto-Sync
                    </button>
                </div>
            </div>
        </div>
    `;
}
