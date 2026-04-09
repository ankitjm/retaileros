import { state } from '../../state.js';

// ── Formatting ──
function fmtINR(n) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n); }
function fmtDate(d) { return d ? new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }) : '—'; }
function daysBetween(d1, d2) { return Math.floor((d2 - d1) / 86400000); }
function fmtCapital(n) {
    if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + 'L';
    if (n >= 1000) return '₹' + (n / 1000).toFixed(0) + 'K';
    return '₹' + n.toLocaleString();
}

// ── State ──
let alertFilter     = 'all';     // all | critical | warning | opps
let alertMobileView = 'alerts';  // alerts | health
let alertSearchQuery = '';

window.setAlertFilter     = (f) => { alertFilter     = f; window.triggerRender(false); };
window.setAlertMobileView = (v) => { alertMobileView = v; window.triggerRender(false); };
window.updateAlertSearch  = (query) => {
    const input = document.getElementById('alert-search-input');
    const pos   = input?.selectionStart || query.length;
    alertSearchQuery = query;
    window.triggerRender(false);
    setTimeout(() => {
        const ni = document.getElementById('alert-search-input');
        if (ni) { ni.focus(); ni.setSelectionRange(pos, pos); }
    }, 0);
};

// ── Alert Computation Engine ──

function computeDeadStock(cache) {
    const products  = cache.products  || [];
    const saleItems = cache.saleItems || [];
    const sales     = cache.sales     || [];
    const now       = new Date();
    const DEAD_DAYS = 60;

    const saleDateMap = {};
    sales.forEach(s => { if (s.date) saleDateMap[s.id] = new Date(s.date); });

    const lastSaleByProduct = {};
    saleItems.forEach(si => {
        const d = saleDateMap[si.sale_id];
        if (!d) return;
        if (!lastSaleByProduct[si.product_id] || d > lastSaleByProduct[si.product_id]) {
            lastSaleByProduct[si.product_id] = d;
        }
    });

    return products
        .filter(p => (p.in_stock || 0) > 0)
        .map(p => {
            const lastSale    = lastSaleByProduct[p.id];
            const daysIdle    = lastSale ? daysBetween(lastSale, now) : 999;
            const capitalLocked = (p.price || 0) * (p.in_stock || 0);
            return { ...p, lastSale, daysIdle, capitalLocked };
        })
        .filter(p => p.daysIdle >= DEAD_DAYS)
        .sort((a, b) => b.capitalLocked - a.capitalLocked);
}

function computeLowStock(cache) {
    const products  = cache.products  || [];
    const saleItems = cache.saleItems || [];
    const sales     = cache.sales     || [];
    const now       = new Date();
    const LOW_THRESHOLD = 3;
    const LOOKBACK = 30;
    const cutoff = new Date(now - LOOKBACK * 86400000);

    const recentQty = {};
    saleItems.forEach(si => {
        const sale = sales.find(s => s.id === si.sale_id);
        if (!sale || new Date(sale.date) < cutoff) return;
        recentQty[si.product_id] = (recentQty[si.product_id] || 0) + (si.quantity || 1);
    });

    return products
        .filter(p => p.in_stock > 0 && p.in_stock <= LOW_THRESHOLD && recentQty[p.id])
        .map(p => {
            const sold     = recentQty[p.id] || 0;
            const avgDaily = sold / LOOKBACK;
            const daysLeft = avgDaily > 0 ? Math.round(p.in_stock / avgDaily) : 999;
            return { ...p, soldRecently: sold, avgDaily, daysLeft };
        })
        .sort((a, b) => a.daysLeft - b.daysLeft);
}

function computeTargetProgress(cache) {
    const targets   = cache.brandTargets || [];
    const sales     = cache.sales        || [];
    const saleItems = cache.saleItems    || [];
    const now       = new Date();

    const salesMap = {};
    sales.forEach(s => { salesMap[s.id] = s; });

    return targets.map(t => {
        const start    = new Date(t.start_date);
        const end      = new Date(t.end_date);
        const daysLeft = Math.max(0, daysBetween(now, end));
        const totalDays = Math.max(1, daysBetween(start, end));
        const elapsed  = totalDays - daysLeft;

        let actualAmt = 0, actualUnits = 0;
        saleItems.forEach(si => {
            const sale = salesMap[si.sale_id];
            if (!sale || sale.status === 'draft') return;
            const d = new Date(sale.date);
            if (d < start || d > end) return;
            const name  = (si.product_name || '').toLowerCase();
            const cat   = (si.category    || '').toLowerCase();
            const brand = t.brand.toLowerCase();
            if (name.includes(brand) || cat.includes(brand)) {
                actualAmt   += (si.final_price || si.price || 0) * (si.quantity || 1);
                actualUnits += (si.quantity || 1);
            }
        });

        const pct         = t.target_amount > 0 ? Math.min(100, Math.round(actualAmt / t.target_amount * 100)) : 0;
        const expectedPct = Math.round(elapsed / totalDays * 100);
        const onTrack     = pct >= expectedPct;
        const gap         = Math.max(0, t.target_amount - actualAmt);

        return { ...t, actualAmt, actualUnits, pct, expectedPct, daysLeft, onTrack, gap };
    }).sort((a, b) => a.daysLeft - b.daysLeft);
}

function computeExpiringSchemes(cache) {
    const schemes = cache.schemes || [];
    const now     = new Date();
    return schemes
        .filter(s => s.end_date && s.status === 'active')
        .map(s => ({ ...s, daysLeft: daysBetween(now, new Date(s.end_date)) }))
        .filter(s => s.daysLeft >= 0 && s.daysLeft <= 7)
        .sort((a, b) => a.daysLeft - b.daysLeft);
}

const PLUGIN_CATALOG = [
    { key: 'whatsapp_business', name: 'WhatsApp Business',  icon: 'chat',             desc: 'Auto-send receipts, follow-ups & birthday wishes', impact: 'Save 2 hrs/day' },
    { key: 'upi_qr',           name: 'UPI QR Payments',    icon: 'qr_code_2',        desc: 'Dynamic UPI QR for instant payment collection',    impact: 'Faster checkout' },
    { key: 'gst_filing',       name: 'GST Auto-File',      icon: 'description',      desc: 'Auto-generate GSTR-1 & GSTR-3B from sales',        impact: 'Save ~₹2K/mo' },
    { key: 'loyalty',          name: 'Loyalty Program',    icon: 'loyalty',          desc: 'Points-based rewards with WhatsApp alerts',         impact: '+20% repeat' },
    { key: 'barcode_scanner',  name: 'Barcode Scanner',    icon: 'qr_code_scanner',  desc: 'Scan barcodes & IMEIs with phone camera',           impact: '2x faster billing' },
    { key: 'daily_pnl',        name: 'Daily P&L Report',   icon: 'analytics',        desc: 'End-of-day P&L on WhatsApp every night',            impact: 'Know daily profit' },
    { key: 'sms_campaigns',    name: 'SMS Campaigns',      icon: 'sms',              desc: 'Bulk SMS for offers, arrivals & festivals',          impact: '+15% footfall' },
    { key: 'google_business',  name: 'Google Business',    icon: 'public',           desc: 'Sync offers & stock to Google Maps listing',        impact: 'More walk-ins' },
];

function computeUpsellPlugins(cache) {
    const installed     = cache.retailerPlugins || [];
    const connectedKeys = new Set(installed.filter(p => p.status === 'connected').map(p => p.plugin_key));
    return PLUGIN_CATALOG.filter(p => !connectedKeys.has(p.key));
}

function getUpcomingBirthdays(customers) {
    if (!customers || !customers.length) return [];
    const now     = new Date();
    const results = [];
    customers.forEach(c => {
        if (!c.dob) return;
        const dob = new Date(c.dob);
        if (isNaN(dob)) return;
        const bd  = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
        if (bd < new Date(now.getFullYear(), now.getMonth(), now.getDate())) bd.setFullYear(now.getFullYear() + 1);
        const diff = Math.floor((bd - now) / 86400000);
        if (diff >= 0 && diff <= 7) results.push({ ...c, daysUntil: diff });
    });
    return results.sort((a, b) => a.daysUntil - b.daysUntil);
}

// ── Shared alert card (Inquiries style) ──
function alertCard({ r1title, r1right, r1rightClass = 'text-slate-400', r2 = '', r3left = '', r3right = '', onclick = '' }) {
    return `
        <div class="relative cursor-pointer rounded-xl border transition-all border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/60" ${onclick ? `onclick="${onclick}"` : ''}>
            <div class="p-4">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-[11px] font-black text-slate-900 truncate flex-1 pr-2">${r1title}</span>
                    <span class="text-[9px] font-black shrink-0 ${r1rightClass}">${r1right}</span>
                </div>
                ${r2 ? `<p class="text-[9px] font-bold text-slate-400 ${r3left || r3right ? 'mb-2' : ''}">${r2}</p>` : ''}
                ${(r3left || r3right) ? `
                    <div class="flex items-center justify-between border-t border-slate-100 pt-2 mt-2">
                        <span class="text-[9px] font-bold text-slate-500">${r3left}</span>
                        <span class="text-[9px] font-bold text-slate-400">${r3right}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ── Section Renderers ──

function renderDeadStockSection(items) {
    if (!items.length) return '';
    const totalCapital = items.reduce((s, p) => s + p.capitalLocked, 0);
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Dead Stock · ${items.length} items · ${fmtCapital(totalCapital)} locked</p>
        <div class="space-y-2 mb-2">
            ${items.slice(0, 5).map(p => alertCard({
                r1title: p.name,
                r1right: p.daysIdle === 999 ? 'Never sold' : `${p.daysIdle}d idle`,
                r1rightClass: p.daysIdle > 90 || p.daysIdle === 999 ? 'text-red-600' : 'text-amber-600',
                r2: `${p.brand || '—'} · ${p.in_stock} units in stock`,
                r3left: `${fmtINR(p.capitalLocked)} locked`,
                r3right: `₹${p.price?.toLocaleString() || 0}/unit`,
            })).join('')}
            ${items.length > 5 ? `<p class="text-[9px] font-bold text-red-400 text-center pt-1">+${items.length - 5} more items</p>` : ''}
        </div>
    `;
}

function renderLowStockSection(items) {
    if (!items.length) return '';
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Low Stock · Reorder Soon</p>
        <div class="space-y-2 mb-2">
            ${items.slice(0, 4).map(p => alertCard({
                r1title: p.name,
                r1right: `${p.in_stock} left`,
                r1rightClass: 'text-amber-600',
                r2: `${p.brand || '—'} · ${p.soldRecently} sold in 30d`,
                r3left: `~${p.daysLeft}d stock remaining`,
            })).join('')}
        </div>
    `;
}

function renderTargetsSection(targets) {
    if (!targets.length) return '';
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Brand Targets</p>
        <div class="space-y-2 mb-2">
            ${targets.map(t => alertCard({
                r1title: t.brand,
                r1right: `${t.daysLeft}d left`,
                r1rightClass: t.daysLeft <= 7 ? 'text-red-600' : 'text-slate-400',
                r2: `${fmtINR(t.actualAmt)} of ${fmtINR(t.target_amount)} · ${t.pct}%`,
                r3left: t.gap > 0 ? `Gap: ${fmtINR(t.gap)}` : 'On track',
                r3right: t.onTrack ? '✓ On track' : `Behind by ${t.expectedPct - t.pct}%`,
            })).join('')}
        </div>
    `;
}

function renderSchemesSection(schemes) {
    if (!schemes.length) return '';
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Expiring Schemes · Sell Before They End</p>
        <div class="space-y-2 mb-2">
            ${schemes.map(s => alertCard({
                r1title: s.name,
                r1right: s.daysLeft === 0 ? 'Ends today!' : s.daysLeft === 1 ? 'Tomorrow' : `${s.daysLeft}d left`,
                r1rightClass: s.daysLeft <= 2 ? 'text-red-600' : 'text-orange-500',
                r2: `${s.brand || '—'} · ${s.discount_type === 'cashback' ? 'Cashback' : s.discount_type === 'percentage' ? '%' : 'Flat'} ${s.payout ? fmtINR(s.payout) : ''}`,
            })).join('')}
        </div>
    `;
}

function renderPluginsSection(plugins) {
    if (!plugins.length) return '';
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Grow Your Business · Plugins Available</p>
        <div class="space-y-2 mb-2">
            ${plugins.slice(0, 4).map(p => alertCard({
                r1title: p.name,
                r1right: p.impact,
                r1rightClass: 'text-green-600',
                r2: p.desc,
                r3left: 'Not enabled',
                r3right: `<button onclick="event.stopPropagation(); setApp('settings')" class="px-2 py-0.5 bg-slate-950 text-white rounded text-[7px] font-black uppercase tracking-wider">Enable</button>`,
            })).join('')}
            ${plugins.length > 4 ? `<p class="text-[9px] font-bold text-green-500 text-center pt-1">+${plugins.length - 4} more plugins available</p>` : ''}
        </div>
    `;
}

function renderBirthdaysSection(birthdays) {
    if (!birthdays.length) return '';
    return `
        <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 mt-4">Birthdays This Week</p>
        <div class="space-y-2 mb-2">
            ${birthdays.map(c => alertCard({
                r1title: c.name,
                r1right: c.daysUntil === 0 ? 'Today!' : c.daysUntil === 1 ? 'Tomorrow' : `In ${c.daysUntil}d`,
                r1rightClass: c.daysUntil === 0 ? 'text-violet-600' : 'text-slate-400',
                r2: c.phone || 'No phone',
                r3left: c.daysUntil === 0 ? '🎂 Birthday today — send a wish!' : `Coming up in ${c.daysUntil} day${c.daysUntil !== 1 ? 's' : ''}`,
            })).join('')}
        </div>
    `;
}

// ── Health Content (shared between sidebar and mobile health view) ──
function renderHealthContent() {
    const cache     = window.getCache();
    const deadStock = computeDeadStock(cache);
    const lowStock  = computeLowStock(cache);
    const targets   = computeTargetProgress(cache);
    const plugins   = computeUpsellPlugins(cache);

    let score = 100;
    score -= Math.min(30, deadStock.length * 5);
    score -= Math.min(20, lowStock.length * 5);
    score -= Math.min(20, targets.filter(t => !t.onTrack).length * 10);
    score -= Math.min(15, Math.max(0, plugins.length - 4) * 3);
    score  = Math.max(0, score);

    const scoreColor = score >= 80 ? 'text-green-600'  : score >= 50 ? 'text-amber-600' : 'text-red-600';
    const scoreLabel = score >= 80 ? 'Healthy'          : score >= 50 ? 'Needs Attention' : 'Critical';
    const scoreBg    = score >= 80 ? 'bg-green-50'      : score >= 50 ? 'bg-amber-50'     : 'bg-red-50';

    const logs = (cache.activityLogs || []).slice(0, 20);
    function timeStr(iso) {
        return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    return `
        <!-- Store Health Score -->
        <div class="p-6 border-b border-slate-100 shrink-0">
            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-3">Store Health</p>
            <div class="flex items-center gap-4">
                <div class="w-16 h-16 rounded-2xl ${scoreBg} flex items-center justify-center shrink-0">
                    <span class="text-2xl font-black ${scoreColor}">${score}</span>
                </div>
                <div>
                    <p class="text-sm font-black ${scoreColor}">${scoreLabel}</p>
                    <p class="text-[8px] font-bold text-slate-400 mt-0.5">Based on stock, targets & setup</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-4">
                <div class="p-2.5 bg-slate-50 rounded-xl text-center">
                    <p class="text-sm font-black text-slate-900">${deadStock.length}</p>
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Dead Stock</p>
                </div>
                <div class="p-2.5 bg-slate-50 rounded-xl text-center">
                    <p class="text-sm font-black text-slate-900">${lowStock.length}</p>
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Low Stock</p>
                </div>
                <div class="p-2.5 bg-slate-50 rounded-xl text-center">
                    <p class="text-sm font-black text-slate-900">${targets.filter(t => t.onTrack).length}/${targets.length}</p>
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">On Target</p>
                </div>
                <div class="p-2.5 bg-slate-50 rounded-xl text-center">
                    <p class="text-sm font-black text-slate-900">${8 - plugins.length}/${8}</p>
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Plugins On</p>
                </div>
            </div>
        </div>

        <!-- Activity Feed -->
        <div class="flex-1 overflow-y-auto custom-scrollbar">
            <div class="px-6 py-2.5 bg-slate-50 border-b border-slate-100 sticky top-0 z-10">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Recent Activity</p>
            </div>
            ${logs.length > 0 ? logs.map(log => `
                <div class="flex items-start gap-3 px-6 py-3 border-b border-slate-50 hover:bg-slate-50/60 transition-colors">
                    <div class="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span class="material-icons-outlined text-slate-400 text-xs">${log.icon || 'notifications'}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-[10px] font-black text-slate-900 leading-snug truncate">${log.detail || log.action}</p>
                        <p class="text-[8px] font-bold text-slate-300">${log.user_name || 'System'} &middot; ${timeStr(log.created_at)}</p>
                    </div>
                </div>
            `).join('') : `
                <div class="py-10 text-center opacity-20">
                    <span class="material-icons-outlined text-2xl">schedule</span>
                    <p class="text-[9px] font-black uppercase tracking-widest mt-2">No activity yet</p>
                </div>
            `}
        </div>
    `;
}

// ── Secondary Panel (desktop right column) ──
function renderSidebar() {
    return `
        <div class="h-full flex flex-col bg-white overflow-hidden">
            ${renderHealthContent()}
        </div>
    `;
}

// ── Main Dashboard (Primary View) ──
function renderDashboard() {
    const cache          = window.getCache();
    const deadStock      = computeDeadStock(cache);
    const lowStock       = computeLowStock(cache);
    const targets        = computeTargetProgress(cache);
    const expiringSchemes = computeExpiringSchemes(cache);
    const plugins        = computeUpsellPlugins(cache);
    const birthdays      = getUpcomingBirthdays(cache.customers || []);

    // Mobile health view — show health score + activity feed
    if (alertMobileView === 'health') {
        return `
            <div class="h-full flex flex-col bg-white overflow-hidden text-left">
                <header class="px-8 pt-6 pb-4 shrink-0 text-left">
                    <div class="flex items-center justify-between text-left">
                        <button onclick="setApp('launcher')" class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
                            <span class="material-icons-outlined">chevron_left</span>
                        </button>
                        <div class="text-center">
                            <h1 class="text-xl font-black tracking-tighter text-slate-900">Store Health</h1>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-0.5">Business Intelligence</p>
                        </div>
                        <div class="flex bg-slate-100 p-0.5 rounded-xl">
                            <button onclick="window.setAlertMobileView('alerts')" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide text-slate-400 hover:text-slate-600">Alerts</button>
                            <button onclick="window.setAlertMobileView('health')" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide bg-white shadow-sm text-slate-900">Health</button>
                        </div>
                    </div>
                </header>
                <div class="flex-1 overflow-hidden flex flex-col">
                    ${renderHealthContent()}
                </div>
            </div>
        `;
    }

    const criticalCount   = deadStock.length + lowStock.length;
    const warningCount    = targets.filter(t => !t.onTrack).length + expiringSchemes.length;
    const oppsCount       = plugins.length + birthdays.length;
    const totalAlerts     = criticalCount + warningCount + oppsCount;
    const totalDeadCapital = deadStock.reduce((s, p) => s + p.capitalLocked, 0);

    // Apply search filter
    let displayDeadStock  = deadStock;
    let displayLowStock   = lowStock;
    let displayTargets    = targets;
    let displaySchemes    = expiringSchemes;
    let displayPlugins    = plugins;
    let displayBirthdays  = birthdays;

    if (alertSearchQuery) {
        const q = alertSearchQuery.toLowerCase();
        displayDeadStock  = deadStock.filter(p   => (p.name  || '').toLowerCase().includes(q) || (p.brand  || '').toLowerCase().includes(q));
        displayLowStock   = lowStock.filter(p    => (p.name  || '').toLowerCase().includes(q) || (p.brand  || '').toLowerCase().includes(q));
        displayTargets    = targets.filter(t     => (t.brand || '').toLowerCase().includes(q));
        displaySchemes    = expiringSchemes.filter(s => (s.name || '').toLowerCase().includes(q) || (s.brand || '').toLowerCase().includes(q));
        displayPlugins    = plugins.filter(p     => (p.name  || '').toLowerCase().includes(q) || (p.desc   || '').toLowerCase().includes(q));
        displayBirthdays  = birthdays.filter(c   => (c.name  || '').toLowerCase().includes(q) || (c.phone  || '').includes(q));
    }

    const noSearchResults = alertSearchQuery &&
        !displayDeadStock.length && !displayLowStock.length &&
        !displayTargets.length   && !displaySchemes.length  &&
        !displayPlugins.length   && !displayBirthdays.length;

    const tabBtn = (key, label, count) => {
        const active = alertFilter === key;
        return `<button onclick="window.setAlertFilter('${key}')"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                ${active ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'}">
            ${label}${count > 0 ? `<span class="${active ? 'opacity-50' : 'opacity-70'} font-black">${count}</span>` : ''}
        </button>`;
    };

    const mobileToggle = (mode, label) => {
        const active = alertMobileView === mode;
        return `<button onclick="window.setAlertMobileView('${mode}')" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide ${active ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}">${label}</button>`;
    };

    const showCritical = alertFilter === 'all' || alertFilter === 'critical';
    const showWarning  = alertFilter === 'all' || alertFilter === 'warning';
    const showOpps     = alertFilter === 'all' || alertFilter === 'opps';
    const hasSomething = totalAlerts > 0;

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden text-left">
            <header class="px-8 pt-6 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900">Alerts</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-0.5">Business Intelligence</p>
                    </div>
                    <div class="w-8 h-8 flex items-center justify-center">
                        ${totalAlerts > 0 ? `<span class="w-6 h-6 bg-slate-900 text-white text-[9px] font-black rounded-full flex items-center justify-center">${totalAlerts}</span>` : ''}
                    </div>
                </div>
            </header>

            <!-- Stats Bar -->
            <div class="px-8 shrink-0">
                <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 mb-5 overflow-hidden text-left">
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Critical</p>
                        <h3 class="text-xl font-black leading-none ${criticalCount > 0 ? 'text-red-600' : 'text-slate-900'}">${criticalCount}</h3>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">dead + low stock</p>
                    </div>
                    <div class="w-px self-stretch bg-slate-200 my-3"></div>
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Warning</p>
                        <h3 class="text-xl font-black leading-none ${warningCount > 0 ? 'text-amber-600' : 'text-slate-900'}">${warningCount}</h3>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">targets + schemes</p>
                    </div>
                    <div class="w-px self-stretch bg-slate-200 my-3"></div>
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Opps</p>
                        <h3 class="text-xl font-black leading-none text-slate-900">${oppsCount}</h3>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">plugins + birthdays</p>
                    </div>
                    <div class="w-px self-stretch bg-slate-200 my-3"></div>
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Capital</p>
                        <h3 class="text-xl font-black leading-none ${totalDeadCapital > 0 ? 'text-slate-900' : 'text-slate-300'}">${fmtCapital(totalDeadCapital)}</h3>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">locked in dead stock</p>
                    </div>
                </div>
            </div>

            <div class="scrolling-content text-left">
                <!-- Sticky Controls -->
                <div class="sticky top-0 z-30 bg-white border-b border-slate-100 px-8 pt-2.5 pb-2.5 shadow-sm">
                    <div class="flex items-center gap-2">
                        <!-- Mobile toggle: Alerts | Health — hidden on desktop since sidebar is always visible -->
                        <div class="flex bg-slate-100 p-0.5 rounded-xl shrink-0 sm:hidden">
                            ${mobileToggle('alerts', 'Alerts')}
                            ${mobileToggle('health', 'Health')}
                        </div>
                        <div class="relative flex-1">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400" style="font-size:18px">search</span>
                            <input type="text"
                                   id="alert-search-input"
                                   value="${alertSearchQuery}"
                                   oninput="window.updateAlertSearch(this.value)"
                                   placeholder="Search alerts..."
                                   class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="px-8 pt-3 pb-24">
                    <!-- Filter chips -->
                    <div class="flex items-center gap-1 mb-4 overflow-x-auto scrollbar-none">
                        ${tabBtn('all', 'All', totalAlerts)}
                        ${tabBtn('critical', 'Critical', criticalCount)}
                        ${tabBtn('warning', 'Warning', warningCount)}
                        ${tabBtn('opps', 'Opportunities', oppsCount)}
                    </div>

                    ${noSearchResults ? `
                        <div class="flex flex-col items-center gap-3 py-12 opacity-30">
                            <span class="material-icons-outlined text-4xl">search_off</span>
                            <p class="text-[9px] font-black uppercase tracking-widest">No results for "${alertSearchQuery}"</p>
                        </div>
                    ` : !hasSomething ? `
                        <div class="flex flex-col items-center justify-center py-14 gap-3">
                            <div class="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center">
                                <span class="material-icons-outlined text-3xl text-emerald-500">verified</span>
                            </div>
                            <p class="text-sm font-bold text-slate-900">All clear</p>
                            <p class="text-xs text-slate-500 text-center max-w-[220px]">No alerts right now. Your store is in great shape.</p>
                        </div>
                    ` : `
                        ${showCritical ? renderDeadStockSection(displayDeadStock) : ''}
                        ${showCritical ? renderLowStockSection(displayLowStock)   : ''}
                        ${showWarning  ? renderTargetsSection(displayTargets)     : ''}
                        ${showWarning  ? renderSchemesSection(displaySchemes)     : ''}
                        ${showOpps     ? renderPluginsSection(displayPlugins)     : ''}
                        ${showOpps     ? renderBirthdaysSection(displayBirthdays) : ''}
                        ${alertFilter !== 'all' && (
                            (alertFilter === 'critical' && !criticalCount) ||
                            (alertFilter === 'warning'  && !warningCount)  ||
                            (alertFilter === 'opps'     && !oppsCount)
                        ) ? `<p class="text-[9px] font-bold text-slate-300 text-center pt-8">No ${alertFilter} alerts right now</p>` : ''}
                    `}
                </div>
            </div>
        </div>
    `;
}

// ── Export ──
export function renderAlerts(mode) {
    const isSecondary = mode === 'desktop-secondary';
    if (isSecondary) return renderSidebar();
    return renderDashboard();
}
