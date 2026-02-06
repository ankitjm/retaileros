import { state } from '../../state.js';

export function renderRepairHistory() {
    const cache = window.getCache();
    const history = cache.repairs || [];

    return `
        <div class="space-y-4 text-left px-8">
            <div class="flex justify-between items-center px-1 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Historical Job Cards</h3>
                <span class="text-[8px] font-black text-slate-300 uppercase text-right">${history.length} Jobs Total</span>
            </div>
            
            ${history.map(j => `
                <div onclick="window.setActiveRepairJob('${j.id}'); setRepairMode('status');" class="card p-5 border-2 transition-all group border-transparent hover:border-slate-200 cursor-pointer text-left">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">#${j.job_sheet_no}</p>
                            <h4 class="text-sm font-black text-slate-900 text-left">${j.device}</h4>
                            <p class="text-[10px] font-bold text-slate-400 lowercase -mt-0.5 text-left">${j.customer_name}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-[9px] font-black uppercase text-right ${j.status === 'COMPLETED' ? 'text-slate-900' : 'text-slate-400'}">${j.status}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-50 pt-4 text-left">
                        <p class="text-[10px] font-black text-slate-900 text-left">₹${parseInt(j.estimated_cost).toLocaleString()}</p>
                        <p class="text-[8px] font-black text-slate-300 uppercase italic text-right">${new Date(j.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join('')}

            ${history.length === 0 ? `
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">history</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No repair jobs found</p>
                </div>
            ` : ''}
        </div>
    `;
}
