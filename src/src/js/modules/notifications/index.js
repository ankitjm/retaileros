// Notifications / Alerts Module
// Local state
let notificationTab = 'all'; // all | order | customer | system
let activeNotificationId = null;
let readIds = [];

// Load read state from localStorage
try {
    readIds = JSON.parse(localStorage.getItem('retaileros_read_notifications') || '[]');
} catch (e) {
    readIds = [];
}

function saveReadState() {
    localStorage.setItem('retaileros_read_notifications', JSON.stringify(readIds));
}

// Relative time formatting
function getRelativeTime(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

// Generate notifications from cache + hardcoded system alerts
function generateNotifications() {
    const cache = window.getCache ? window.getCache() : {};
    const sales = cache.sales || [];
    const customers = cache.customers || [];
    const storeOrders = cache.storeOrders || [];
    const notifications = [];

    // From pending store orders
    const pendingOrders = storeOrders.filter(o => o.order_status === 'pending').slice(0, 3);
    pendingOrders.forEach(o => {
        notifications.push({
            id: `notif-order-${o.id}`,
            type: 'order',
            title: 'New Online Order',
            message: `${o.customer_name} placed ${o.order_number} for \u20B9${parseInt(o.total_amount || 0).toLocaleString()}`,
            icon: 'shopping_cart',
            timestamp: new Date(o.order_date),
            actionLabel: 'View Order',
            actionFn: `window.setApp('mystore'); window.setActiveStoreOrder('${o.id}')`
        });
    });

    // From recent completed sales
    const recentSales = sales.filter(s => s.status !== 'draft').slice(0, 4);
    recentSales.forEach(s => {
        notifications.push({
            id: `notif-sale-${s.id}`,
            type: 'order',
            title: 'Sale Completed',
            message: `\u20B9${parseInt(s.total_amount || 0).toLocaleString()} sale to ${s.customer_name} via ${s.payment_mode || 'cash'}`,
            icon: 'check_circle',
            timestamp: new Date(s.date),
            actionLabel: 'View Receipt',
            actionFn: `window.setApp('sales'); window.setTab('history'); window.setSalesHistoryId('${s.id}')`
        });
    });

    // Customer activity
    const recentCustomers = [...customers]
        .sort((a, b) => new Date(b.joined_at || 0) - new Date(a.joined_at || 0))
        .slice(0, 3);
    recentCustomers.forEach(c => {
        notifications.push({
            id: `notif-cust-${c.id}`,
            type: 'customer',
            title: 'Customer Added',
            message: `${c.name} was added to your client directory${c.phone ? ' (' + c.phone + ')' : ''}`,
            icon: 'person_add',
            timestamp: new Date(c.joined_at || Date.now() - 86400000),
            actionLabel: 'View Profile',
            actionFn: `window.setApp('clients'); window.setClientMode('profile', '${(c.name || '').replace(/'/g, "\\'")}', '${c.id}')`
        });
    });

    // System notifications (hardcoded for realistic demo)
    const now = Date.now();
    notifications.push(
        {
            id: 'notif-sys-stock',
            type: 'system',
            title: 'Low Stock Alert',
            message: 'iPhone 16 Pro Max (256GB) \u2014 Only 2 units remaining in inventory. Consider restocking.',
            icon: 'inventory_2',
            timestamp: new Date(now - 3600000),
            severity: 'warning',
            actionLabel: 'Check Inventory',
            actionFn: "window.setApp('inventory')"
        },
        {
            id: 'notif-sys-scheme',
            type: 'system',
            title: 'Scheme Expiring Soon',
            message: 'Apple Summer Cashback scheme expires in 3 days. Ensure all eligible claims are filed before the deadline.',
            icon: 'timer',
            timestamp: new Date(now - 7200000),
            severity: 'warning',
            actionLabel: 'View Schemes',
            actionFn: "window.setApp('schemes')"
        },
        {
            id: 'notif-sys-report',
            type: 'system',
            title: 'Monthly Report Ready',
            message: 'Your February 2026 sales performance report is ready. Total revenue and customer insights available.',
            icon: 'assessment',
            timestamp: new Date(now - 86400000),
            actionLabel: 'View Reports',
            actionFn: "window.setApp('reports')"
        },
        {
            id: 'notif-sys-backup',
            type: 'system',
            title: 'Backup Completed',
            message: 'Daily automatic cloud backup completed successfully. All store data is safely secured.',
            icon: 'cloud_done',
            timestamp: new Date(now - 43200000)
        },
        {
            id: 'notif-sys-update',
            type: 'system',
            title: 'System Update Available',
            message: 'RetailerOS v2.4 is available with new AI scanning features and performance improvements.',
            icon: 'system_update',
            timestamp: new Date(now - 172800000)
        },
        {
            id: 'notif-sys-install',
            type: 'order',
            title: 'Installation Scheduled',
            message: 'Washing machine installation for Rahul Sharma is scheduled for tomorrow at 10:00 AM.',
            icon: 'build',
            timestamp: new Date(now - 10800000),
            actionLabel: 'View Details',
            actionFn: "window.setApp('repairs')"
        }
    );

    // Sort by timestamp, newest first
    return notifications.sort((a, b) => b.timestamp - a.timestamp);
}

// Window handlers
window.setNotificationTab = (tab) => {
    notificationTab = tab;
    window.triggerRender();
};

window.setActiveNotification = (id) => {
    activeNotificationId = id;
    // Mark as read
    if (!readIds.includes(id)) {
        readIds.push(id);
        saveReadState();
    }
    window.triggerRender();
};

window.clearActiveNotification = () => {
    activeNotificationId = null;
    window.triggerRender();
};

window.markAllNotificationsRead = () => {
    const notifications = generateNotifications();
    readIds = notifications.map(n => n.id);
    saveReadState();
    window.toast.success('All notifications marked as read');
    window.triggerRender();
};

// Main render function
export function renderNotifications(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';
    const isDesktopPrimary = mode === 'desktop-primary';

    if (isDesktopSecondary) return renderNotificationDetail();
    if (isDesktopPrimary) return renderNotificationList(false);

    // Mobile: show detail if active notification, otherwise list
    if (isMobile && activeNotificationId) {
        return renderMobileDetail();
    }
    return renderNotificationList(true);
}

function renderNotificationList(isMobile) {
    const notifications = generateNotifications();
    const tab = notificationTab || 'all';
    const filtered = tab === 'all' ? notifications : notifications.filter(n => n.type === tab);
    const unreadCount = notifications.filter(n => !readIds.includes(n.id)).length;

    const tabs = [
        { key: 'all', label: 'All', icon: 'notifications' },
        { key: 'order', label: 'Orders', icon: 'shopping_cart' },
        { key: 'customer', label: 'Clients', icon: 'people' },
        { key: 'system', label: 'System', icon: 'settings' }
    ];

    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Alerts</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Notification Center</p>
                </div>
                ${unreadCount > 0 ? `
                    <button type="button" onclick="window.markAllNotificationsRead()" class="text-[8px] font-black text-slate-400 uppercase tracking-wider hover:text-slate-900 transition-colors px-1">
                        Read All
                    </button>
                ` : '<div class="w-14"></div>'}
            </div>

            <!-- Filter Tabs -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                ${tabs.map(t => {
                    const unread = t.key === 'all'
                        ? unreadCount
                        : notifications.filter(n => n.type === t.key && !readIds.includes(n.id)).length;
                    return `
                        <button type="button" onclick="window.setNotificationTab('${t.key}')"
                            class="flex-1 py-2.5 text-[9px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1 tracking-wider relative
                            ${tab === t.key ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                            <span class="material-icons-outlined text-xs">${t.icon}</span>
                            <span class="hidden sm:inline">${t.label}</span>
                            ${unread > 0 ? `<span class="w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center ml-0.5">${unread}</span>` : ''}
                        </button>
                    `;
                }).join('')}
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-12 text-left">
            <!-- Count -->
            <div class="flex items-center justify-between">
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest">
                    ${filtered.length} Alerts${unreadCount > 0 ? ` \u2022 ${unreadCount} unread` : ''}
                </p>
            </div>

            ${filtered.length === 0 ? `
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-1">
                        <span class="material-icons-outlined text-2xl text-slate-300">notifications_off</span>
                    </div>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">No notifications</span>
                    <span class="text-[9px] font-bold text-slate-300">You're all caught up!</span>
                </div>
            ` : `
                <div class="space-y-2">
                    ${filtered.map(n => {
                        const isRead = readIds.includes(n.id);
                        const isActive = activeNotificationId === n.id;
                        const iconBg = n.severity === 'warning' ? 'bg-slate-900' : 'bg-slate-100';
                        const iconColor = n.severity === 'warning' ? 'text-white' : 'text-slate-500';

                        return `
                            <button type="button" onclick="window.setActiveNotification('${n.id}')"
                                class="card p-4 border-2 transition-all cursor-pointer text-left w-full active:scale-[0.98]
                                ${isActive ? 'border-slate-900 shadow-lg' : isRead ? 'border-transparent' : 'border-transparent hover:border-slate-200'}">
                                <div class="flex gap-3">
                                    <div class="w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center shrink-0 ${!isRead ? 'ring-2 ring-slate-900/10' : ''}">
                                        <span class="material-icons-outlined text-lg ${iconColor}">${n.icon}</span>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center justify-between gap-2 mb-0.5">
                                            <h4 class="text-xs font-black truncate ${!isRead ? 'text-slate-900' : 'text-slate-400'}">${n.title}</h4>
                                            <span class="text-[8px] font-black text-slate-300 uppercase tracking-wider shrink-0 whitespace-nowrap">${getRelativeTime(n.timestamp)}</span>
                                        </div>
                                        <p class="text-[10px] font-bold ${!isRead ? 'text-slate-600' : 'text-slate-400'} leading-relaxed line-clamp-2">${n.message}</p>
                                        ${!isRead ? '<div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2"></div>' : ''}
                                    </div>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </div>
            `}
        </div>
    `;
}

function renderNotificationDetailContent(notification) {
    const typeLabel = notification.type === 'order' ? 'Order Update' : notification.type === 'customer' ? 'Customer Activity' : 'System Alert';
    const iconBg = notification.severity === 'warning' ? 'bg-slate-900' : 'bg-slate-100';
    const iconColor = notification.severity === 'warning' ? 'text-white' : 'text-slate-500';

    return `
        <div class="flex flex-col items-center text-center pt-8 pb-6">
            <div class="w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span class="material-icons-outlined text-2xl ${iconColor}">${notification.icon}</span>
            </div>
            <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-3">${typeLabel}</span>
            <h2 class="text-xl font-black text-slate-900 tracking-tighter mb-2">${notification.title}</h2>
            <p class="text-sm font-bold text-slate-500 leading-relaxed max-w-[280px]">${notification.message}</p>
            <p class="text-[9px] font-black text-slate-300 uppercase tracking-widest mt-4">
                ${notification.timestamp.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} at ${notification.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
            </p>
        </div>

        ${notification.actionLabel ? `
            <button type="button" onclick="${notification.actionFn}" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                ${notification.actionLabel}
                <span class="material-icons-outlined text-xs">arrow_forward</span>
            </button>
        ` : ''}

        ${notification.severity === 'warning' ? `
            <div class="card p-4 mt-6 border-l-4 border-l-slate-900">
                <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">
                    <span class="material-icons-outlined text-sm">priority_high</span>
                    Action Required
                </div>
                <p class="text-[10px] font-bold text-slate-500">This alert requires your attention. Take action to resolve this issue promptly.</p>
            </div>
        ` : ''}
    `;
}

function renderNotificationDetail() {
    if (!activeNotificationId) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">notifications</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Select a notification<br>to view details</p>
                </div>
            </div>
        `;
    }

    const notifications = generateNotifications();
    const notification = notifications.find(n => n.id === activeNotificationId);

    if (!notification) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Notification not found</p>
                </div>
            </div>
        `;
    }

    return `
        <div class="h-full flex flex-col">
            <div class="p-6 sm:p-8 flex-1 overflow-y-auto">
                ${renderNotificationDetailContent(notification)}
            </div>
        </div>
    `;
}

function renderMobileDetail() {
    const notifications = generateNotifications();
    const notification = notifications.find(n => n.id === activeNotificationId);

    if (!notification) {
        activeNotificationId = null;
        return renderNotificationList(true);
    }

    return `
        <header class="p-4 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-2">
                <button type="button" onclick="window.clearActiveNotification()" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Alert Detail</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Notifications</p>
                </div>
                <div class="w-8"></div>
            </div>
        </header>
        <div class="scrolling-content px-4 pb-12">
            ${renderNotificationDetailContent(notification)}
        </div>
    `;
}
