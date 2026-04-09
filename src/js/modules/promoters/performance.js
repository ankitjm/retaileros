import { state } from '../../state.js';

export function renderPromoterPerformance() {
    const promoter = state.activePromoter;
    const cache = window.getCache();
    const sales = (cache.sales || []).filter(s => s.status !== 'draft');

    // Store-wide metrics (no per-promoter attribution in schema yet)
    const totalRevenue = sales.reduce((s, o) => s + (o.total_amount || 0), 0);
    const avgSaleValue = sales.length > 0 ? totalRevenue / sales.length : 0;

    // Build last-7-days daily sales for chart
    const days = [];
    const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        const total = sales
            .filter(s => (s.date || '').slice(0, 10) === key)
            .reduce((sum, s) => sum + (s.total_amount || 0), 0);
        days.push({ label: dayLabels[d.getDay()], total });
    }

    const maxDay = Math.max(...days.map(d => d.total), 1);

    // This month vs last month count
    const now = new Date();
    const thisMonthSales = sales.filter(s => {
        const d = new Date(s.date);
        return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
    });
    const lastMonthSales = sales.filter(s => {
        const d = new Date(s.date);
        const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        return d.getFullYear() === lm.getFullYear() && d.getMonth() === lm.getMonth();
    });
    const growthPct = lastMonthSales.length > 0
        ? (((thisMonthSales.length - lastMonthSales.length) / lastMonthSales.length) * 100).toFixed(1)
        : '—';

    // Check-in state for this promoter
    const isCheckedIn = promoter ? (window._promoterCheckIns?.[promoter.id] || false) : false;

    const name = promoter?.name || 'Team Overview';
    const role = promoter?.role || 'STORE';
    const initials = promoter?.initials || (name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase());

    return `
        <div class="h-full flex flex-col relative bg-white text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                <button onclick="setPromoterViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                </button>
                <div class="flex items-center gap-3 text-left">
                    <div class="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center font-black text-sm text-slate-600">${initials}</div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">${name}</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">${role}</p>
                    </div>
                </div>
                ${promoter ? `
                <button onclick="window._togglePromoterCheckIn('${promoter.id}', event)"
                    class="w-10 h-5 ${isCheckedIn ? 'bg-slate-900' : 'bg-slate-200'} rounded-full relative transition-colors">
                    <div class="w-3 h-3 bg-white rounded-full absolute ${isCheckedIn ? 'right-1' : 'left-1'} top-1 shadow-sm transition-all"></div>
                </button>
                ` : '<div class="w-8"></div>'}
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">

                <!-- Revenue snapshot -->
                <section class="space-y-3 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Store Revenue</h3>
                    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden text-left">
                        ${growthPct !== '—' ? `<span class="absolute top-4 right-4 bg-slate-100 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">${growthPct > 0 ? '+' : ''}${growthPct}%</span>` : ''}
                        <div class="flex items-center gap-2 mb-4 text-slate-400 text-left">
                            <span class="material-icons-outlined text-lg">payments</span>
                        </div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue Generated</p>
                        <h2 class="text-3xl font-black text-slate-900 tracking-tighter">₹${totalRevenue.toLocaleString('en-IN')}</h2>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2">Avg Sale Value</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight">₹${Math.round(avgSaleValue).toLocaleString('en-IN')}</h3>
                            <div class="h-1 w-12 bg-slate-900 rounded-full mt-3"></div>
                        </div>
                        <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2">This Month</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight">${thisMonthSales.length} <span class="text-sm font-bold text-slate-400">sales</span></h3>
                            <div class="h-1 w-8 bg-slate-900 rounded-full mt-3"></div>
                        </div>
                    </div>
                </section>

                <!-- Daily Sales Trend (real data) -->
                <section class="space-y-3 text-left">
                    <div class="flex items-center justify-between text-left">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales Trend</h3>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-wide text-right">Last 7 Days</p>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm h-48 flex items-end justify-between gap-2 px-8 text-left">
                        ${days.map(d => {
                            const pct = maxDay > 0 ? Math.max(8, Math.round((d.total / maxDay) * 100)) : 8;
                            return `
                            <div class="w-full flex-1 flex flex-col items-center justify-end gap-1">
                                <div class="w-full bg-slate-900 rounded-t-lg" style="height:${pct}%"></div>
                                <p class="text-[8px] font-black text-slate-400">${d.label}</p>
                            </div>`;
                        }).join('')}
                    </div>
                </section>

                <!-- Attendance legend (from localStorage check-ins) -->
                <section class="space-y-3 pb-8 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Team Check-In Status</h3>
                    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                        ${(cache.teamMembers || []).filter(m => m.status !== 'inactive').map(m => {
                            const ci = window._promoterCheckIns?.[m.id] || false;
                            const ini = (m.name || 'ST').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
                            return `
                            <div class="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">${ini}</div>
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${m.name}</p>
                                        <p class="text-[8px] text-slate-400 uppercase tracking-wide">${m.role || 'Staff'}</p>
                                    </div>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${ci ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}">${ci ? 'In' : 'Out'}</span>
                            </div>`;
                        }).join('') || '<p class="text-[10px] text-slate-300 text-center py-4">No team members added yet</p>'}
                    </div>
                </section>
            </div>
        </div>
    `;
}
