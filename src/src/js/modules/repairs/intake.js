import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function createJobSheet() {
    const context = state.repairContext || { customer_name: 'Walk-in', customer_phone: '' };
    const device = document.getElementById('repair-device').value;
    const issue = document.getElementById('repair-issue').value;
    const estimatedCost = document.getElementById('repair-cost').value;

    if (!device || !issue) {
        alert("Device and Issue are required.");
        return;
    }

    const btn = document.getElementById('create-job-btn');
    btn.disabled = true;
    btn.innerText = 'Creating...';

    try {
        const jobNo = 'REP-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        await db.repairs.add({
            id: jobNo,
            customer_name: context.customer_name,
            phone: context.customer_phone,
            device,
            issue,
            status: 'COLLECTED',
            job_sheet_no: jobNo,
            estimated_cost: estimatedCost || '0',
            assigned_to: 'Unassigned',
            created_at: new Date().toISOString()
        });

        await syncData();
        window.setActiveRepairJob(jobNo);
        window.setRepairMode('status');
    } catch (err) {
        alert("Error creating job: " + err.message);
        btn.disabled = false;
        btn.innerText = 'Create Job Sheet';
    }
}

window.createJobSheet = createJobSheet;
window.setActiveRepairJob = (id) => { state.activeRepairId = id; };

export function renderRepairIntake() {
    const context = state.repairContext || { customer_name: 'New Walk-in', customer_phone: '' };

    return `
        <div class="card p-6 border-slate-200/50 space-y-4 relative overflow-hidden text-left bg-slate-50/10">
            <div class="text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Customer Context</p>
                <h4 class="text-lg font-black tracking-tighter text-slate-900 text-left">${context.customer_name}</h4>
                <p class="text-[10px] font-bold text-slate-400 text-left">${context.customer_phone || 'Direct Walk-in'}</p>
            </div>
            <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full opacity-50"></div>
        </div>

        <div class="space-y-6 text-left pt-4">
            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Device Model & Serial</label>
                <input type="text" id="repair-device" placeholder="e.g. iPhone 15 Pro Max (SN: RZ...)" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Fault Description</label>
                <textarea id="repair-issue" placeholder="Describe the issues reported by the customer..." class="w-full min-h-[120px] p-6 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm resize-none text-left"></textarea>
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Estimated Cost (₹)</label>
                <input type="number" id="repair-cost" placeholder="₹0" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>
        </div>

        <button id="create-job-btn" onclick="createJobSheet()" class="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 mt-8 text-center">Create Job Sheet</button>
    `;
}
