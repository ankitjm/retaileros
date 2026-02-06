import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function updateRepairStatus(newStatus) {
    if (!state.activeRepairId) return;

    try {
        await db.repairs.updateStatus(state.activeRepairId, newStatus);
        await syncData();
    } catch (err) {
        alert("Update failed: " + err.message);
    }
}

window.updateRepairStatus = updateRepairStatus;

export function renderRepairStatus() {
    const cache = window.getCache();
    const job = cache.repairs.find(j => j.id === state.activeRepairId) || cache.repairs[0];

    if (!job) {
        return `<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>`;
    }

    const statuses = [
        { l: 'Collected', s: 'COLLECTED', i: 'done' },
        { l: 'Sent to Brand', s: 'SENT_TO_BRAND', i: 'shipping' },
        { l: 'At Service Center', s: 'IN_REPAIR', i: 'build' },
        { l: 'Ready for Pickup', s: 'READY', i: 'check_circle' },
        { l: 'Handed Over', s: 'COMPLETED', i: 'person' }
    ];

    const currentIdx = statuses.findIndex(s => s.s === job.status);

    return `
        <div class="card p-6 border-slate-200/50 flex gap-5 items-center relative overflow-hidden text-left bg-slate-50/50">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-left">
                <span class="material-icons-outlined text-slate-400 text-2xl text-left">smartphone</span>
            </div>
            <div class="text-left">
                <h4 class="text-sm font-black text-slate-900 leading-none text-left">${job.device}</h4>
                <p class="text-[10px] font-bold text-slate-900 mt-1 uppercase text-left">${job.issue}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-0.5 text-left">Customer: ${job.customer_name}</p>
            </div>
            <button class="absolute top-6 right-6 text-slate-400"><span class="material-icons-outlined text-sm text-left">info</span></button>
        </div>

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Assignment</h3>
            <div class="card p-4 flex items-center justify-between text-left">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-left">
                        <span class="material-icons-outlined text-slate-400 text-left">person</span>
                    </div>
                    <div class="text-left">
                        <h4 class="text-xs font-black text-slate-900 text-left">${job.assigned_to || 'Runner A'}</h4>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">Logistics Team</p>
                    </div>
                </div>
                <button class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all text-left">Reassign</button>
            </div>
        </div>

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Service Lifecycle</h3>
            <div class="card p-8 relative overflow-hidden text-left">
                <div class="absolute left-[45px] top-10 bottom-10 w-px bg-slate-100 border-l border-dashed border-slate-200 text-left"></div>
                
                <div class="space-y-10 relative text-left">
                    ${statuses.map((s, idx) => {
        const isDone = idx <= currentIdx;
        const isActive = idx === currentIdx;
        return `
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${isDone ? 'bg-slate-900 text-white' : 'bg-slate-100 border border-slate-200'}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${isDone ? 'done' : ''}</span>
                            </div>
                            <div class="text-left ${!isDone ? 'opacity-30' : ''}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${isActive ? 'text-slate-900 underline underline-offset-4' : ''}">${s.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${isActive ? 'CURRENT STATUS' : (isDone ? 'COMPLETED' : 'PENDING')}
                                </p>
                            </div>
                        </div>
                        `;
    }).join('')}
                </div>
            </div>
        </div>

        <div class="flex gap-2 text-left">
            <button onclick="updateRepairStatus('${statuses[Math.min(currentIdx + 1, statuses.length - 1)].s}')" class="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 flex items-center justify-center gap-3 text-left">
                Update Status
            </button>
        </div>
    `;
}
