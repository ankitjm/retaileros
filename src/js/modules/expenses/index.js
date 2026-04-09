import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

const CATEGORIES = ['Rent', 'Salary', 'Electricity', 'Internet', 'Marketing', 'Transport', 'Maintenance', 'Miscellaneous'];
const PAYMENT_MODES = ['cash', 'upi', 'bank_transfer', 'auto_debit', 'card'];
const PAYMENT_LABELS = { cash: 'Cash', upi: 'UPI', bank_transfer: 'Bank Transfer', auto_debit: 'Auto Debit', card: 'Card' };

function fmtINR(n) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n); }
function fmtDate(d) { return d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : ''; }

export function renderExpenses(mode) {
    const isMobile = mode === 'mobile';
    const isSecondary = mode === 'desktop-secondary';

    const cache = window.getCache();
    const expenses = cache.expenses || [];

    if (isSecondary) {
        // Monthly summary panel
        const now = new Date();
        const thisMonth = expenses.filter(e => {
            const d = new Date(e.date);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        });
        const total = thisMonth.reduce((s, e) => s + (e.amount || 0), 0);
        const byCategory = {};
        thisMonth.forEach(e => { byCategory[e.category] = (byCategory[e.category] || 0) + e.amount; });
        const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);

        return `
            <div class="h-full flex flex-col bg-white overflow-hidden">
                <header class="p-6 pb-4 shrink-0">
                    <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest">This Month</h2>
                    <p class="text-3xl font-black text-slate-900 mt-2">${fmtINR(total)}</p>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">${thisMonth.length} entries</p>
                </header>
                <div class="flex-1 overflow-y-auto px-6 space-y-2 custom-scrollbar pb-6">
                    ${sorted.length > 0 ? sorted.map(([cat, amt]) => {
                        const pct = total > 0 ? Math.round(amt / total * 100) : 0;
                        return `
                        <div class="p-3 bg-slate-50 rounded-xl">
                            <div class="flex justify-between items-center mb-1.5">
                                <span class="text-[10px] font-black text-slate-700 uppercase tracking-wider">${cat}</span>
                                <span class="text-xs font-black text-slate-900">${fmtINR(amt)}</span>
                            </div>
                            <div class="h-1 bg-slate-200 rounded-full overflow-hidden">
                                <div class="h-full bg-slate-900 rounded-full" style="width:${pct}%"></div>
                            </div>
                            <p class="text-[8px] font-bold text-slate-400 mt-1">${pct}% of total</p>
                        </div>`;
                    }).join('') : '<div class="py-10 text-center opacity-20"><p class="text-[10px] font-black uppercase tracking-widest">No expenses this month</p></div>'}

                    <button onclick="window._showAddExpense()" class="w-full py-3 mt-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                        + Add Expense
                    </button>
                </div>
            </div>
        `;
    }

    // Main view — expense list + stats
    const now = new Date();
    const thisMonth = expenses.filter(e => {
        const d = new Date(e.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });
    const totalThisMonth = thisMonth.reduce((s, e) => s + (e.amount || 0), 0);
    const recurring = expenses.filter(e => e.recurring).length;

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-4">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900">Expenses</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Track Outflows</p>
                    </div>
                    <button onclick="window._showAddExpense()" class="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform">
                        <span class="material-icons-outlined text-sm">add</span>
                    </button>
                </div>

                <div class="grid grid-cols-3 gap-3">
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">${fmtINR(totalThisMonth)}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">This Month</p>
                    </div>
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">${thisMonth.length}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Entries</p>
                    </div>
                    <div class="bg-slate-50 rounded-2xl p-4 text-center">
                        <p class="text-lg font-black text-slate-900">${recurring}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Recurring</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-4 sm:px-8 space-y-3 custom-scrollbar pb-20">
                ${expenses.length > 0 ? expenses.map(e => `
                    <div class="card p-4 border-slate-100 hover:border-slate-200 transition-all">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <h3 class="text-[11px] font-black text-slate-900">${e.description || e.category}</h3>
                                <p class="text-[9px] font-bold text-slate-400">${e.category} ${e.recurring ? '• Recurring' : ''}</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase ${e.payment_mode === 'cash' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}">${PAYMENT_LABELS[e.payment_mode] || e.payment_mode || '—'}</span>
                        </div>
                        <div class="flex justify-between items-end mt-3 pt-3 border-t border-slate-50">
                            <p class="text-[8px] font-bold text-slate-300">${fmtDate(e.date)}</p>
                            <p class="text-sm font-black text-slate-900">${fmtINR(e.amount)}</p>
                        </div>
                    </div>
                `).join('') : `
                    <div class="py-20 text-center opacity-20">
                        <span class="material-icons-outlined text-4xl">receipt_long</span>
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No expenses recorded</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-1">Tap + to add your first expense</p>
                    </div>
                `}
            </div>

            <!-- Add Expense Modal -->
            <div id="expense-modal" class="hidden fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
                <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                    <div class="flex justify-between items-center">
                        <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest">Add Expense</h3>
                        <button onclick="document.getElementById('expense-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-900">
                            <span class="material-icons-outlined">close</span>
                        </button>
                    </div>
                    <div>
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Category</label>
                        <select id="exp-category" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none">
                            ${CATEGORIES.map(c => `<option value="${c}">${c}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Description</label>
                        <input id="exp-desc" type="text" placeholder="e.g. Shop rent — March" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none">
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Amount (₹)</label>
                            <input id="exp-amount" type="number" placeholder="0" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none">
                        </div>
                        <div>
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Date</label>
                            <input id="exp-date" type="date" value="${new Date().toISOString().slice(0, 10)}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none">
                        </div>
                    </div>
                    <div>
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Payment Mode</label>
                        <select id="exp-mode" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none">
                            ${PAYMENT_MODES.map(m => `<option value="${m}">${PAYMENT_LABELS[m]}</option>`).join('')}
                        </select>
                    </div>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input id="exp-recurring" type="checkbox" class="w-4 h-4 rounded border-slate-300">
                        <span class="text-[10px] font-bold text-slate-700">Recurring monthly expense</span>
                    </label>
                    <button onclick="window._saveExpense()" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
                        Save Expense
                    </button>
                </div>
            </div>
        </div>
    `;
}

window._showAddExpense = function() {
    document.getElementById('expense-modal')?.classList.remove('hidden');
};

window._saveExpense = async function() {
    const category = document.getElementById('exp-category')?.value;
    const description = document.getElementById('exp-desc')?.value;
    const amount = parseFloat(document.getElementById('exp-amount')?.value);
    const date = document.getElementById('exp-date')?.value;
    const payment_mode = document.getElementById('exp-mode')?.value;
    const recurring = document.getElementById('exp-recurring')?.checked ? 1 : 0;

    if (!amount || amount <= 0) { window.toast?.error('Enter a valid amount'); return; }
    if (!date) { window.toast?.error('Select a date'); return; }

    try {
        const id = `exp_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
        await db.expenses.add({ id, category, description, amount, payment_mode, date, recurring });
        document.getElementById('expense-modal')?.classList.add('hidden');
        window.toast?.success(`Expense saved: ${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)}`);
        await syncData();
    } catch (err) {
        console.error('Save expense error:', err);
        window.toast?.error('Failed to save expense');
    }
};
