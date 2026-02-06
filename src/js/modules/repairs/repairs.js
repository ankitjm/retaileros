import { state } from '../../state.js';
import { renderRepairHeader } from './header.js';
import { renderRepairSearch } from './search.js';
import { renderRepairIntake } from './intake.js';
import { renderRepairStatus } from './status.js';
import { renderRepairHistory } from './history.js';

export function renderRepairs(layout) {
    const hMap = {
        'search': { t: 'RetailerOS', s: 'Repairs Management', txn: null },
        'intake': { t: 'Device Intake', s: 'Repair Management', txn: 'TXN-4920' },
        'status': { t: 'Job ID: #REP-2024', s: 'Repair Assignment', badge: 'ACTIVE' },
        'history': { t: 'Job History', s: 'Service Records', badge: null }
    };

    const contentMap = {
        'search': renderRepairSearch(),
        'intake': renderRepairIntake(),
        'status': renderRepairStatus()
    };

    if (layout === 'desktop-primary') {
        return `
            ${renderRepairHeader(hMap.search.t, hMap.search.s, '<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>', true)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${state.repairTab === 'active' ? contentMap.search : renderRepairHistory()}
            </div>
        `;
    }

    if (layout === 'desktop-secondary') {
        const activeMode = state.repairViewMode === 'search' ? 'status' : state.repairViewMode;
        const activeHeader = hMap[activeMode];
        const extra = activeMode === 'intake' ? `<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${activeHeader.txn}</span>` : `<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${activeHeader.badge}</span>`;

        return `
            ${renderRepairHeader(activeHeader.t, activeHeader.s, extra)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${state.repairTab === 'history' ? '<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>' : contentMap[activeMode]}
            </div>
        `;
    }

    // Mobile logic
    const currentMode = state.repairTab === 'history' ? 'history' : state.repairViewMode;
    const mobileHeader = hMap[currentMode];
    const isMainView = currentMode === 'search' || currentMode === 'history';
    const extraMobile = currentMode === 'intake' ? `<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${mobileHeader.txn}</span>` : (currentMode === 'status' ? `<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${mobileHeader.badge}</span>` : '<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>');

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden">
            ${renderRepairHeader(mobileHeader.t, mobileHeader.s, extraMobile, isMainView)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${state.repairTab === 'history' ? renderRepairHistory() : contentMap[state.repairViewMode]}
            </div>
        </div>
    `;
}
