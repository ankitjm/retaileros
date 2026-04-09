export function renderInquiriesStats() {
    const cache = window.getCache();
    const inquiries = cache.inquiries || [];

    const total = inquiries.length;
    const pending  = inquiries.filter(i => (i.status || '').toUpperCase() === 'PENDING').length;
    const contacted = inquiries.filter(i => (i.status || '').toUpperCase() === 'CONTACTED').length;
    const fulfilled = inquiries.filter(i => ['FULFILLED', 'RESOLVED'].includes((i.status || '').toUpperCase())).length;
    const lost = inquiries.filter(i => (i.status || '').toUpperCase() === 'LOST SALE').length;
    const closed = fulfilled + lost;
    const convRate = closed > 0 ? Math.round((fulfilled / closed) * 100) : 0;

    const metric = (label, value, sub, highlight) => `
        <div class="text-left flex-1">
            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">${label}</p>
            <h3 class="text-xl font-black leading-none ${highlight || 'text-slate-900'}">${value}</h3>
            <p class="text-[8px] font-bold text-slate-400 mt-0.5 leading-tight">${sub}</p>
        </div>
    `;

    return `
        <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 mb-5 overflow-hidden text-left">
            <div class="flex-1 p-4 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Pending</p>
                <h3 class="text-xl font-black leading-none ${pending > 0 ? 'text-amber-600' : 'text-slate-900'}">${pending}</h3>
                <p class="text-[8px] font-bold text-slate-400 mt-0.5">of ${total} total</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-3"></div>
            <div class="flex-1 p-4 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Contacted</p>
                <h3 class="text-xl font-black leading-none text-slate-900">${contacted}</h3>
                <p class="text-[8px] font-bold text-slate-400 mt-0.5">following up</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-3"></div>
            <div class="flex-1 p-4 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Won</p>
                <h3 class="text-xl font-black leading-none text-slate-900">${fulfilled}</h3>
                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${lost} lost</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-3"></div>
            <div class="flex-1 p-4 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Conv.</p>
                <h3 class="text-xl font-black leading-none ${convRate >= 50 ? 'text-slate-900' : convRate > 0 ? 'text-slate-600' : 'text-slate-300'}">${convRate}%</h3>
                <p class="text-[8px] font-bold text-slate-400 mt-0.5">win rate</p>
            </div>
        </div>
    `;
}
