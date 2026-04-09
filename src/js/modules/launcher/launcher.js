import { state } from '../../state.js';
import { renderAuth, renderLogin } from '../auth/index.js';
import { renderAppsGrid } from './apps-grid.js';
import { renderLauncherFooter } from './footer.js';
import { renderNewsStrip } from '../news/news-list.js';

function fmtINR(n) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n); }
function fmtAmt(n) { return n >= 100000 ? '₹' + (n / 100000).toFixed(1) + 'L' : n >= 1000 ? '₹' + (n / 1000).toFixed(0) + 'K' : '₹' + n.toLocaleString(); }

function renderDailyCashRegister() {
    const cache = window.getCache ? window.getCache() : {};
    const sales = cache.sales || [];
    const expenses = cache.expenses || [];
    const customers = cache.customers || [];
    const inquiries = cache.inquiries || [];
    const today = new Date().toISOString().slice(0, 10);

    const todaySales = sales.filter(s => s.date && s.date.startsWith(today) && s.status !== 'draft');
    const todayExpenses = expenses.filter(e => e.date && e.date.startsWith(today));
    const totalRevenue = todaySales.reduce((s, sale) => s + (sale.total_amount || 0), 0);
    const totalExpense = todayExpenses.reduce((s, e) => s + (e.amount || 0), 0);
    const netToday = totalRevenue - totalExpense;
    const creditDue = sales.reduce((sum, s) => {
        if (s.payment_status === 'credit' || s.payment_status === 'partial') {
            return sum + Math.max(0, (s.total_amount || 0) - (s.amount_paid || 0));
        }
        return sum;
    }, 0);

    return `
        <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
            <div class="flex-1 p-3 text-left min-w-0">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Revenue</p>
                <h3 class="text-base font-black leading-none truncate ${totalRevenue > 0 ? 'text-slate-900' : 'text-slate-300'}">${fmtAmt(totalRevenue)}</h3>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5 truncate">today</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
            <div class="flex-1 p-3 text-left min-w-0">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Bills</p>
                <h3 class="text-base font-black leading-none truncate ${todaySales.length > 0 ? 'text-slate-900' : 'text-slate-300'}">${todaySales.length}</h3>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5 truncate">completed</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
            <div class="flex-1 p-3 text-left min-w-0">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Net</p>
                <h3 class="text-base font-black leading-none truncate ${netToday > 0 ? 'text-slate-900' : netToday < 0 ? 'text-red-500' : 'text-slate-300'}">${fmtAmt(Math.abs(netToday))}</h3>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5 truncate">${netToday < 0 ? 'loss' : 'profit'}</p>
            </div>
            <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
            <div class="flex-1 p-3 text-left min-w-0">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Credit</p>
                <h3 class="text-base font-black leading-none truncate ${creditDue > 0 ? 'text-amber-600' : 'text-slate-300'}">${fmtAmt(creditDue)}</h3>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5 truncate">due</p>
            </div>
        </div>
    `;
}

function buildTickerItems() {
    const cache = window.getCache ? window.getCache() : {};
    const sales = cache.sales || [];
    const customers = cache.customers || [];
    const inquiries = cache.inquiries || [];
    const products = cache.products || [];
    const today = new Date().toISOString().slice(0, 10);
    const todayMD = today.slice(5); // MM-DD

    const todaySales = sales.filter(s => s.date && s.date.startsWith(today) && s.status !== 'draft');
    const totalRevenue = todaySales.reduce((s, sale) => s + (sale.total_amount || 0), 0);
    const drafts = sales.filter(s => s.status === 'draft');
    const pendingInq = inquiries.filter(i => i.status === 'open' || i.status === 'pending');
    const lowStock = products.filter(p => (p.in_stock || 0) <= (p.reorder_level || 3) && (p.in_stock || 0) >= 0);

    // Birthday customers (DOB matches today MM-DD)
    const birthdayCustomers = customers.filter(c => {
        if (!c.dob) return false;
        return c.dob.slice(5) === todayMD;
    });

    const creditDue = sales.reduce((sum, s) => {
        if (s.payment_status === 'credit' || s.payment_status === 'partial') {
            return sum + Math.max(0, (s.total_amount || 0) - (s.amount_paid || 0));
        }
        return sum;
    }, 0);

    const items = [];

    // Revenue highlight
    if (totalRevenue > 0) {
        items.push(`💰 Today's Revenue: ₹${parseInt(totalRevenue).toLocaleString('en-IN')} across ${todaySales.length} bill${todaySales.length !== 1 ? 's' : ''}`);
    } else {
        items.push(`🏪 No sales recorded yet today — Let's close some deals!`);
    }

    // Birthdays
    birthdayCustomers.slice(0, 2).forEach(c => {
        items.push(`🎂 Birthday Today: ${c.name}${c.phone ? ' · ' + c.phone : ''} — Don't forget to reach out!`);
    });

    // Pending inquiries
    if (pendingInq.length > 0) {
        items.push(`❓ ${pendingInq.length} pending quer${pendingInq.length !== 1 ? 'ies' : 'y'} waiting for response`);
    }

    // Low stock
    if (lowStock.length > 0) {
        const topLow = lowStock.slice(0, 2).map(p => `${p.name} (${p.in_stock || 0} left)`).join(' · ');
        items.push(`⚠️ Low Stock: ${topLow}`);
    }

    // Outstanding credit
    if (creditDue > 0) {
        items.push(`💳 ₹${parseInt(creditDue).toLocaleString('en-IN')} credit outstanding — Follow up with customers`);
    }

    // Drafts
    if (drafts.length > 0) {
        items.push(`📝 ${drafts.length} draft${drafts.length !== 1 ? 's' : ''} saved — Resume to complete billing`);
    }

    // Fallback
    if (items.length < 2) {
        items.push(`📱 RetailerOS · Manage Sales · Inventory · Clients · Schemes · Repairs — All in One`);
    }

    // Double the items for seamless CSS loop (animation: 0% → -50%)
    const doubled = [...items, ...items];
    return doubled.map(text => `<span class="inline-flex items-center px-6 text-slate-300 gap-2"><span class="w-1 h-1 rounded-full bg-slate-600 shrink-0"></span><span class="text-slate-200">${text}</span></span>`).join('');
}

// Live clock updater — runs once per minute
if (!window._clockInterval) {
    window._clockInterval = setInterval(() => {
        const el = document.getElementById('ros-live-clock');
        if (el) {
            const now = new Date();
            el.textContent = `${now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })} \u00B7 ${now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;
        }
    }, 30000);
}

export function renderLauncher(mode) {
    const isMob = mode === 'mobile';

    return `
        <div class="flex flex-col min-h-full w-full">
            <header class="px-5 sm:px-8 pt-5 sm:pt-8 pb-3 shrink-0">
                <div class="flex items-center justify-between">
                     <div class="flex items-center gap-3.5">
                        <img src="/ros-logo.png" alt="ROS" class="h-10 object-contain" style="filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12));">
                        <div class="text-left">
                            ${state.isLoggedIn && state.retailerName ? `<p class="text-xs font-black text-slate-900 tracking-tight leading-tight">${state.retailerName}</p>` : ''}
                            <p id="ros-live-clock" class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ${state.isLoggedIn && state.retailerName ? 'mt-0.5' : ''}">${new Date().toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })} \u00B7 ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                     </div>
                     ${!isMob ? '' : `
                     <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
                        <span class="material-symbols-outlined text-lg text-slate-600">search</span>
                     </button>`}
                </div>
            </header>

            <div class="flex-1 px-6 relative pb-4 overflow-y-auto custom-scrollbar">
                ${state.isLoggedIn ? `
                    ${renderDailyCashRegister()}

                    <!-- Live Ticker — real store data -->
                    <div class="news-ticker-container">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black flex items-center">
                                ${buildTickerItems()}
                            </span>
                        </div>
                    </div>

                    <div class="mt-4">
                        ${renderAppsGrid(isMob)}
                    </div>

                    ${isMob ? renderNewsStrip() : ''}
                ` : isMob ? `
                    <!-- Mobile: full auth form in launcher -->
                    <div id="auth-container" class="h-full w-full py-10">
                        ${renderAuth()}
                    </div>
                ` : `
                    <!-- Desktop: login is shown in center column; sidebar shows branding -->
                    <div class="flex flex-col items-center justify-center h-full gap-4 opacity-30 select-none pointer-events-none py-10">
                        <span class="material-icons-outlined text-5xl text-slate-400">store</span>
                        <p class="text-[9px] font-black uppercase tracking-widest text-slate-400">RetailerOS</p>
                    </div>
                `}
            </div>

            ${renderLauncherFooter(isMob)}
        </div>
    `;
}
