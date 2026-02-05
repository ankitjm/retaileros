export function renderSettingsPlugins() {
    const plugins = [
        {
            name: 'WhatsApp Business',
            desc: 'Send automated messages, invoices & reminders to customers via WhatsApp Business API.',
            icon: 'chat',
            color: 'green',
            status: 'connected',
            badge: 'Active'
        },
        {
            name: 'Tally Integration',
            desc: 'Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.',
            icon: 'calculate',
            color: 'blue',
            status: 'available',
            badge: 'Connect'
        },
        {
            name: 'Razorpay Payments',
            desc: 'Accept UPI, cards, net banking & wallets. Auto-reconcile payments with sales records.',
            icon: 'account_balance_wallet',
            color: 'indigo',
            status: 'available',
            badge: 'Connect'
        },
        {
            name: 'PhonePe POS',
            desc: 'QR-based payments at counter. Instant settlement and daily reconciliation reports.',
            icon: 'qr_code_scanner',
            color: 'purple',
            status: 'available',
            badge: 'Connect'
        },
        {
            name: 'MSG91 SMS',
            desc: 'Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.',
            icon: 'sms',
            color: 'amber',
            status: 'available',
            badge: 'Connect'
        },
        {
            name: 'Thermal Printer',
            desc: 'Connect Bluetooth or USB receipt printers for instant POS invoice printing.',
            icon: 'print',
            color: 'slate',
            status: 'available',
            badge: 'Setup'
        },
        {
            name: 'Google Sheets',
            desc: 'Export daily sales, inventory & customer data to Google Sheets automatically.',
            icon: 'table_chart',
            color: 'green',
            status: 'available',
            badge: 'Connect'
        },
        {
            name: 'Shiprocket',
            desc: 'Ship products to customers with tracking. Auto-generate shipping labels from sales.',
            icon: 'local_shipping',
            color: 'orange',
            status: 'available',
            badge: 'Connect'
        },
    ];

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Plugins</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Integrations & Extensions</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Connected -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Connected
                    </p>
                    <div class="space-y-3 text-left">
                        ${plugins.filter(p => p.status === 'connected').map(p => `
                            <div class="card p-5 border-green-100 bg-green-50/30 text-left">
                                <div class="flex items-start justify-between text-left">
                                    <div class="flex items-start gap-4 text-left">
                                        <div class="w-12 h-12 bg-${p.color}-100 rounded-2xl flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-${p.color}-500 text-xl">${p.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-sm font-black text-slate-900">${p.name}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${p.desc}</p>
                                        </div>
                                    </div>
                                    <span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-100 text-green-600">${p.badge}</span>
                                </div>
                                <div class="flex gap-2 mt-4 pl-16 text-left">
                                    <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                                    <button onclick="window.toast.info('Disconnected')" class="px-4 py-2 bg-white border border-red-200 rounded-lg text-[8px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all">Disconnect</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Available -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Available Integrations
                    </p>
                    <div class="space-y-3 text-left">
                        ${plugins.filter(p => p.status === 'available').map(p => `
                            <div class="card p-5 text-left hover:border-slate-300 transition-all">
                                <div class="flex items-start justify-between text-left">
                                    <div class="flex items-start gap-4 text-left">
                                        <div class="w-12 h-12 bg-${p.color}-50 rounded-2xl flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-${p.color}-500 text-xl">${p.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-sm font-black text-slate-900">${p.name}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${p.desc}</p>
                                        </div>
                                    </div>
                                    <button onclick="window.toast.info('Integration setup coming soon')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">${p.badge}</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP & more</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
