import { state } from '../../state.js';

// Date filter state
if (!window._reportDateFilter) {
    window._reportDateFilter = { from: '', to: '', show: false };
}

window._toggleReportsDatePicker = () => {
    window._reportDateFilter.show = !window._reportDateFilter.show;
    window.triggerRender();
};

window._setReportDateFilter = () => {
    const from = document.getElementById('report-date-from')?.value;
    const to = document.getElementById('report-date-to')?.value;
    window._reportDateFilter.from = from || '';
    window._reportDateFilter.to = to || '';
    window._reportDateFilter.show = false;
    if (window.toast) window.toast.success(from || to ? `Filtered: ${from || 'start'} to ${to || 'now'}` : 'Filter cleared');
    window.triggerRender();
};

window._clearReportDateFilter = () => {
    window._reportDateFilter = { from: '', to: '', show: false };
    if (window.toast) window.toast.success('Date filter cleared');
    window.triggerRender();
};

// Export CSV of current report data
window._exportReportsCSV = () => {
    const cache = window.getCache();
    const tab = state.reportsTab || 'overview';
    let headers, rows, filename;

    if (tab === 'sales' || tab === 'overview') {
        const sales = cache.sales || [];
        headers = ['ID', 'Date', 'Customer', 'Product', 'Amount', 'Status', 'Payment Mode'];
        rows = sales.map(s => [s.id, s.date, s.customer_name || '', s.product_name || '', s.total_amount || s.total || '', s.status || '', s.payment_mode || '']);
        filename = 'sales_report.csv';
    } else if (tab === 'inventory') {
        const products = cache.products || [];
        headers = ['ID', 'Name', 'Brand', 'Category', 'MOP', 'Price', 'Stock'];
        rows = products.map(p => [p.id, p.name, p.brand || '', p.category || '', p.mop || '', p.price || '', p.stock || '']);
        filename = 'inventory_report.csv';
    } else {
        const automations = cache.automations || [];
        headers = ['ID', 'Customer', 'Template', 'Status', 'Created'];
        rows = automations.map(a => [a.id, a.customer_name || '', a.template_name || '', a.status || '', a.created_at || '']);
        filename = 'marketing_report.csv';
    }

    const csv = [headers.join(','), ...rows.map(r => r.map(v => `"${v}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    if (window.toast) window.toast.success(`${filename} downloaded`);
};

export const renderUnifiedHeader = (title, subtitle, tabs = []) => {
    const df = window._reportDateFilter || {};
    const hasFilter = df.from || df.to;

    return `
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${title}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${subtitle}</p>
            </div>
            <div class="flex items-center gap-1">
                <button onclick="window._exportReportsCSV()" class="p-2 text-slate-400 hover:text-slate-900" title="Export CSV"><span class="material-icons-outlined text-xl">download</span></button>
                <button onclick="window._toggleReportsDatePicker()" class="p-2 ${hasFilter ? 'text-slate-900' : 'text-slate-400'} hover:text-slate-900" title="Date Filter"><span class="material-symbols-outlined text-xl">calendar_today</span></button>
            </div>
        </div>
        ${df.show ? `
            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4 space-y-3">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">From</label>
                        <input type="date" id="report-date-from" value="${df.from}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900">
                    </div>
                    <div>
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">To</label>
                        <input type="date" id="report-date-to" value="${df.to}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900">
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="window._setReportDateFilter()" class="flex-1 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest">Apply</button>
                    <button onclick="window._clearReportDateFilter()" class="px-4 py-2 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase tracking-widest">Clear</button>
                </div>
            </div>
        ` : ''}
        ${hasFilter && !df.show ? `
            <div class="flex items-center gap-2 mb-4">
                <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Filtered:</span>
                <span class="px-2 py-1 bg-slate-100 rounded-lg text-[9px] font-bold text-slate-600">${df.from || 'start'} → ${df.to || 'now'}</span>
                <button onclick="window._clearReportDateFilter()" class="text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-sm">close</span></button>
            </div>
        ` : ''}
        ${tabs.length > 0 ? `
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                ${tabs.map(t => `<button onclick="setReportsTab('${t}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${state.reportsTab === t ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">${t.toUpperCase()}</button>`).join('')}
            </div>
        ` : ''}
    </header>
    `;
};
