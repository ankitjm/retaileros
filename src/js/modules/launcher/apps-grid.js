import { state } from '../../state.js';

// Notification count from real activity logs (unread = last 24h)
window.getNotificationCount = () => {
    const cache = window.getCache ? window.getCache() : {};
    const logs = cache.activityLogs || [];
    const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    return logs.filter(l => l.created_at > dayAgo).length;
};

export const apps = [
    { n: 'ALERTS', i: 'notifications_active', k: 'alerts' },
    { n: 'SALES DESK', i: 'account_balance_wallet', k: 'sales' },
    { n: 'CLIENTS', i: 'group', k: 'clients' },
    { n: 'INQUIRIES', i: 'help_outline', k: 'inquiries' },
    { n: 'PROMOTERS', i: 'business_center', k: 'promoters' },
    { n: 'MY STORE', i: 'storefront', k: 'mystore' },
    { n: 'INVENTORY', i: 'inventory_2', k: 'inventory' },
    { n: 'REPAIRS', i: 'build', k: 'repairs' },
    { n: 'MARKETPLACE', i: 'swap_horizontal_circle', k: 'marketplace' },
    { n: 'CLAIMS', i: 'verified_user', k: 'claims' },
    { n: 'SCHEMES', i: 'percent', k: 'schemes' },
    { n: 'MARKETING', i: 'campaign', k: 'marketing' },
    { n: 'AUTOMATION', i: 'smart_toy', s: true, k: 'automation' },
    { n: 'PRE-BOOKING', i: 'rocket_launch', k: 'prebooking' },
    { n: 'EXPENSES', i: 'receipt_long', k: 'expenses' },
    { n: 'REPORTS', i: 'bar_chart', k: 'reports' },
    { n: 'SETTINGS', i: 'settings', k: 'settings' }
];

export function renderAppsGrid(isMob) {
    const activeGridCols = !isMob ? 4 : state.gridCols;
    const gridClass = !isMob ? 'grid-cols-4' : ({ 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }[activeGridCols] || 'grid-cols-4');

    const notifCount = window.getNotificationCount ? window.getNotificationCount() : 0;

    return `
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${gridClass} divide-x divide-y divide-slate-200">
                ${apps.map(a => {
                    const isAlerts = a.k === 'alerts';
                    const showDot = isAlerts && notifCount > 0;
                    return `
                    <button onclick="setApp('${a.k || 'launcher'}')" class="h-[84px] flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${state.currentApp === a.k ? 'bg-slate-100' : ''}">
                        <div class="relative">
                            <span class="${a.s ? 'material-symbols-outlined' : 'material-icons-outlined'} text-[22px] ${state.currentApp === a.k ? 'text-slate-900 font-bold' : 'text-slate-500'} mb-1">${a.i}</span>
                            ${showDot ? '<span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>' : ''}
                        </div>
                        <span class="text-[10px] font-black uppercase text-center tracking-wide leading-tight ${state.currentApp === a.k ? 'text-slate-900' : 'text-slate-500'} max-w-[90%]">${a.n}</span>
                    </button>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}
