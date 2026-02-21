export function renderSettingsAlerts() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const cache = window.getCache();
    const s = cache.retailerSettings?.alerts || {};
    const settings = {
        whatsapp_notifications: s.whatsapp_notifications ?? true,
        sms_notifications: s.sms_notifications ?? false,
        email_notifications: s.email_notifications ?? true,
        push_notifications: s.push_notifications ?? true,
        low_stock_warning: s.low_stock_warning ?? true,
        low_stock_threshold: s.low_stock_threshold ?? '5 units',
        out_of_stock_alert: s.out_of_stock_alert ?? true,
        daily_sales_summary: s.daily_sales_summary ?? true,
        high_value_sale_threshold: s.high_value_sale_threshold ?? '\u20B925,000',
        new_sale_notification: s.new_sale_notification ?? false,
        birthday_reminders: s.birthday_reminders ?? true,
        inactive_customer_alert: s.inactive_customer_alert ?? true,
        repair_status_change: s.repair_status_change ?? true,
        installation_due: s.installation_due ?? true,
    };

    const lowStockOptions = ['3 units', '5 units', '10 units', '20 units'];
    const highValueOptions = ['\u20B910,000', '\u20B925,000', '\u20B950,000', '\u20B91,00,000'];

    return `
        <div data-settings-category="alerts" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Alerts</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Notifications & Reminders</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Notification Channels -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Notification Channels
                    </p>
                    <div class="space-y-3 text-left">
                        ${[
                            { name: 'WhatsApp', field: 'whatsapp_notifications', desc: `Messages to ${retailer.mobile_number || '••••••••••'}`, icon: 'chat', color: 'green' },
                            { name: 'SMS', field: 'sms_notifications', desc: 'Text alerts for critical events', icon: 'sms', color: 'blue' },
                            { name: 'Email', field: 'email_notifications', desc: retailer.email || 'Not configured', icon: 'email', color: 'indigo' },
                            { name: 'Push Notifications', field: 'push_notifications', desc: 'Browser & mobile push alerts', icon: 'notifications_active', color: 'amber' },
                        ].map(ch => `
                            <div class="card p-4 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                        <span class="material-icons-outlined text-slate-500">${ch.icon}</span>
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${ch.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${ch.desc}</p>
                                    </div>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" data-field="${ch.field}" class="sr-only peer" ${settings[ch.field] ? 'checked' : ''}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Inventory Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Inventory Alerts
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Warning</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when product stock falls below threshold</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="low_stock_warning" class="sr-only peer" ${settings.low_stock_warning ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Threshold</p>
                                <p class="text-[9px] font-bold text-slate-400">Minimum units before alert triggers</p>
                            </div>
                            <select data-field="low_stock_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${lowStockOptions.map(o => `<option ${settings.low_stock_threshold === o ? 'selected' : ''}>${o}</option>`).join('')}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Out of Stock Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Immediate alert when stock hits zero</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="out_of_stock_alert" class="sr-only peer" ${settings.out_of_stock_alert ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Sales Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sales & Revenue
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Daily Sales Summary</p>
                                <p class="text-[9px] font-bold text-slate-400">End-of-day report via WhatsApp at 9 PM</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="daily_sales_summary" class="sr-only peer" ${settings.daily_sales_summary ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">High-Value Sale Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Notify when sale exceeds threshold</p>
                            </div>
                            <select data-field="high_value_sale_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${highValueOptions.map(o => `<option ${settings.high_value_sale_threshold === o ? 'selected' : ''}>${o}</option>`).join('')}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">New Sale Notification</p>
                                <p class="text-[9px] font-bold text-slate-400">Real-time alert on every new sale</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="new_sale_notification" class="sr-only peer" ${settings.new_sale_notification ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Customer Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer Engagement
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Birthday Reminders</p>
                                <p class="text-[9px] font-bold text-slate-400">Get notified on customer birthdays</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="birthday_reminders" class="sr-only peer" ${settings.birthday_reminders ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Inactive Customer Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Flag customers with no purchase in 90 days</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="inactive_customer_alert" class="sr-only peer" ${settings.inactive_customer_alert ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Repair & Service -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Repairs & Service
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Repair Status Change</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when repair job moves to next stage</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="repair_status_change" class="sr-only peer" ${settings.repair_status_change ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Installation Due</p>
                                <p class="text-[9px] font-bold text-slate-400">Reminder 1 day before scheduled installation</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="installation_due" class="sr-only peer" ${settings.installation_due ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('alerts')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Alert Preferences
                    </button>
                </div>
            </div>
        </div>
    `;
}
