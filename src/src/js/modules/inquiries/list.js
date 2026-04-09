import { state } from '../../state.js';

export function renderInquiriesList() {
    const cache = window.getCache();
    const recentInquiries = cache.inquiries || [];

    const getStatusClass = (status) => {
        switch (status) {
            case 'PENDING': return 'bg-slate-200 text-slate-600';
            case 'FULFILLED': return 'bg-slate-900 text-white';
            case 'CONTACTED': return 'bg-slate-300 text-slate-700';
            case 'LOST SALE': return 'bg-slate-100 text-slate-400';
            default: return 'bg-slate-50 text-slate-400';
        }
    };

    return `
        <div class="space-y-3 text-left">
            ${recentInquiries.map(inq => `
                <div onclick="window.setActiveInquiry(${JSON.stringify(inq).replace(/"/g, '&quot;')}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${state.activeInquiry?.id === inq.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                    <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shrink-0 text-left">
                        <span class="material-icons-outlined text-slate-300 text-xl text-left">info</span>
                    </div>
                    <div class="flex-1 min-w-0 text-left">
                        <div class="flex justify-between items-start mb-0.5 text-left">
                            <h4 class="text-xs font-black text-slate-900 truncate text-left">${inq.product_name || inq.request}</h4>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase tracking-wider text-right ${getStatusClass(inq.status)}">${inq.status}</span>
                        </div>
                        <div class="flex justify-between items-center text-left">
                            <p class="text-[10px] font-bold text-slate-400 text-left">${inq.customer_name}</p>
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-right">${new Date(inq.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            `).join('')}

            ${recentInquiries.length === 0 ? `
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">contact_support</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No inquiries found</p>
                </div>
            ` : ''}
        </div>
    `;
}
