import { state } from '../../state.js';

// The 5 tabs pinned to the bottom nav — most-used apps for a retailer
const NAV_ITEMS = [
    { k: 'sales',     i: 'account_balance_wallet', label: 'Sales'     },
    { k: 'clients',   i: 'group',                  label: 'Clients'   },
    { k: 'inquiries', i: 'help_outline',            label: 'Inquiries' },
    { k: 'alerts',    i: 'notifications_active',    label: 'Alerts'    },
    { k: 'launcher',  i: 'grid_view',               label: 'Menu'      },
];

export function renderBottomNav() {
    const current = state.currentApp;

    // Notification dot for alerts
    const notifCount = window.getNotificationCount ? window.getNotificationCount() : 0;

    return `
        <nav class="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 flex items-stretch" style="padding-bottom: env(safe-area-inset-bottom, 0px);">
            ${NAV_ITEMS.map(item => {
                const isActive = item.k === 'launcher'
                    ? current === 'launcher'
                    : current === item.k;
                const showDot = item.k === 'alerts' && notifCount > 0;

                return `
                <button
                    onclick="setApp('${item.k}')"
                    class="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600 active:text-slate-900'}"
                >
                    <div class="relative">
                        <span class="material-icons-outlined text-[22px] ${isActive ? 'font-bold' : ''}">${item.i}</span>
                        ${isActive ? '<span class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full"></span>' : ''}
                        ${showDot && !isActive ? '<span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>' : ''}
                    </div>
                    <span class="text-[9px] font-black uppercase tracking-wide leading-none mt-1 ${isActive ? 'text-slate-900' : ''}">${item.label}</span>
                </button>
                `;
            }).join('')}
        </nav>
    `;
}
