import { db } from '../../utils/db.js';

export function renderSettingsPlugins() {
    const cache = window.getCache();
    const dbPlugins = cache.retailerPlugins || [];

    // Build a lookup map from DB: plugin_key → status
    const dbStatus = {};
    dbPlugins.forEach(p => { dbStatus[p.plugin_key] = p.status; });

    const categories = [
        {
            label: 'Payments & POS',
            plugins: [
                { name: 'Pine Labs POS', key: 'pine_labs_pos', desc: 'Accept card, UPI, wallet & EMI payments on Pine Labs terminals. Auto-push sale amount to device, capture transaction ID and settle instantly.', icon: 'point_of_sale', color: 'blue' },
                { name: 'Razorpay Payments', key: 'razorpay', desc: 'Accept UPI, cards, net banking & wallets online. Auto-reconcile payments with sales records.', icon: 'account_balance_wallet', color: 'indigo' },
                { name: 'PhonePe POS', key: 'phonepe_pos', desc: 'QR-based payments at counter. Instant settlement and daily reconciliation reports.', icon: 'qr_code_scanner', color: 'purple' },
                { name: 'Paytm for Business', key: 'paytm_business', desc: 'Accept Paytm wallet, UPI & Paytm Postpaid. Sound box alerts and auto-settlement.', icon: 'payments', color: 'blue' },
            ]
        },
        {
            label: 'Consumer Finance & EMI',
            plugins: [
                { name: 'Bajaj Finserv EMI', key: 'bajaj_finserv_emi', desc: 'Offer No-Cost EMI & low-cost EMI on Bajaj Finserv cards. Instant approval at checkout, auto-capture EMI tenure and subvention.', icon: 'credit_score', color: 'blue' },
                { name: 'HDFC Consumer Finance', key: 'hdfc_consumer_finance', desc: 'Enable HDFC consumer durable loans at POS. Approve customers via Aadhar OTP, auto-link loan ID to sale invoice.', icon: 'account_balance', color: 'indigo' },
                { name: 'IDFC First Finance', key: 'idfc_first_finance', desc: 'Consumer durable loans with instant digital approval. Support for 3–24 month tenures on electronics & appliances.', icon: 'savings', color: 'purple' },
                { name: 'Home Credit', key: 'home_credit', desc: 'EMI for non-card customers. Aadhar-based approval in 5 minutes for smartphones, appliances & electronics.', icon: 'approval', color: 'amber' },
                { name: 'ZestMoney / DMI Finance', key: 'zestmoney_dmi', desc: 'Buy Now Pay Later and no-cost EMI for online & in-store. Instant credit line for customers without credit cards.', icon: 'currency_rupee', color: 'green' },
            ]
        },
        {
            label: 'Telecom & Recharge',
            plugins: [
                { name: 'Jio Partner', key: 'jio_partner', desc: 'Activate Jio SIMs, process recharges & sell JioFiber plans from your store. Earn commission on every transaction.', icon: 'sim_card', color: 'blue' },
                { name: 'Airtel Mitra', key: 'airtel_mitra', desc: 'Activate Airtel prepaid & postpaid connections, process recharges, sell Airtel Xstream & DTH plans.', icon: 'cell_tower', color: 'red' },
                { name: 'Vi (Vodafone Idea)', key: 'vi_vodafone', desc: 'Process Vi recharges, new SIM activations & postpaid upgrades. Track commissions per transaction.', icon: 'signal_cellular_alt', color: 'rose' },
                { name: 'BSNL Retailer', key: 'bsnl_retailer', desc: 'BSNL SIM activations, recharges & broadband plan bookings. Government ID verification support.', icon: 'router', color: 'slate' },
                { name: 'Multi-Recharge API', key: 'multi_recharge_api', desc: 'Unified recharge API for all operators — prepaid, postpaid, DTH, broadband & electricity bills from one dashboard.', icon: 'bolt', color: 'amber' },
            ]
        },
        {
            label: 'Brand & Warranty',
            plugins: [
                { name: 'Samsung Partner Portal', key: 'samsung_partner', desc: 'Sync Samsung product catalog, claim brand warranty registrations & submit display incentive claims.', icon: 'devices', color: 'blue' },
                { name: 'Xiaomi Retail Suite', key: 'xiaomi_retail', desc: 'Access Mi product feed, process Mi Extended Warranty activations & sync sell-out data for incentives.', icon: 'smartphone', color: 'orange' },
                { name: 'OneAssist / Onsitego', key: 'oneassist_onsitego', desc: 'Sell extended warranty & damage protection plans at POS. Instant policy issuance linked to sale invoice.', icon: 'verified_user', color: 'green' },
            ]
        },
        {
            label: 'Communication',
            plugins: [
                { name: 'WhatsApp Business', key: 'whatsapp_business', desc: 'Send automated messages, invoices & reminders to customers via WhatsApp Business API.', icon: 'chat', color: 'green' },
                { name: 'MSG91 SMS', key: 'msg91_sms', desc: 'Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.', icon: 'sms', color: 'amber' },
            ]
        },
        {
            label: 'Accounting & ERP',
            plugins: [
                { name: 'Tally Integration', key: 'tally', desc: 'Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.', icon: 'calculate', color: 'blue' },
                { name: 'Google Sheets', key: 'google_sheets', desc: 'Export daily sales, inventory & customer data to Google Sheets automatically.', icon: 'table_chart', color: 'green' },
            ]
        },
        {
            label: 'Hardware & Logistics',
            plugins: [
                { name: 'Thermal Printer', key: 'thermal_printer', desc: 'Connect Bluetooth or USB receipt printers for instant POS invoice printing.', icon: 'print', color: 'slate' },
                { name: 'Barcode Scanner', key: 'barcode_scanner', desc: 'Pair Bluetooth or USB barcode scanners. Auto-lookup products by EAN/UPC code during billing.', icon: 'qr_code', color: 'slate' },
                { name: 'Shiprocket', key: 'shiprocket', desc: 'Ship products to customers with tracking. Auto-generate shipping labels from sales.', icon: 'local_shipping', color: 'orange' },
            ]
        },
    ];

    // Overlay DB status on hardcoded catalog
    categories.forEach(cat => {
        cat.plugins.forEach(p => {
            p.status = dbStatus[p.key] || 'available';
        });
    });

    const allPlugins = categories.flatMap(c => c.plugins);
    const connectedCount = allPlugins.filter(p => p.status === 'connected').length;
    const availableCount = allPlugins.filter(p => p.status === 'available').length;

    // Connect/disconnect handler
    window._togglePlugin = async function(pluginKey, pluginName, currentStatus) {
        const newStatus = currentStatus === 'connected' ? 'available' : 'connected';
        try {
            await db.plugins.upsert(pluginKey, newStatus, null);
            // Update cache
            const existing = (window._db_cache.retailerPlugins || []).findIndex(p => p.plugin_key === pluginKey);
            if (existing >= 0) {
                window._db_cache.retailerPlugins[existing].status = newStatus;
            } else {
                window._db_cache.retailerPlugins.push({ plugin_key: pluginKey, status: newStatus });
            }
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'plugin', detail: `${newStatus === 'connected' ? 'Connected' : 'Disconnected'} ${pluginName}`, user_name: r.contact_person || 'Owner', icon: 'extension', color: 'slate' });
            if (window.toast) window.toast.success(newStatus === 'connected' ? `${pluginName} connected` : `${pluginName} disconnected`);
            // Re-render
            if (window.setSettingsView) window.setSettingsView('plugins');
        } catch (err) {
            console.error('Plugin toggle failed:', err);
            if (window.toast) window.toast.error('Failed to update plugin');
        }
    };

    const renderPlugin = (p) => {
        const isConnected = p.status === 'connected';
        return `
            <div class="card p-5 ${isConnected ? 'border-slate-200 bg-slate-50/30' : 'hover:border-slate-300'} transition-all text-left">
                <div class="flex items-start justify-between text-left">
                    <div class="flex items-start gap-4 text-left">
                        <div class="w-12 h-12 ${isConnected ? 'bg-slate-100' : 'bg-slate-50'} rounded-2xl flex items-center justify-center shrink-0">
                            <span class="material-icons-outlined text-slate-500 text-xl">${p.icon}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-sm font-black text-slate-900">${p.name}</p>
                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${p.desc}</p>
                        </div>
                    </div>
                    ${isConnected
                        ? `<span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900 text-white">Active</span>`
                        : `<button onclick="window._togglePlugin('${p.key}','${p.name.replace(/'/g, "\\'")}','available')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">Connect</button>`
                    }
                </div>
                ${isConnected ? `
                    <div class="flex gap-2 mt-4 pl-16 text-left">
                        <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                        <button onclick="window._togglePlugin('${p.key}','${p.name.replace(/'/g, "\\'")}','connected')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Disconnect</button>
                    </div>
                ` : ''}
            </div>
        `;
    };

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
                <!-- Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${connectedCount}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Connected</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${availableCount}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Available</p>
                        </div>
                    </div>
                </div>

                <!-- Categories -->
                ${categories.map(cat => `
                    <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> ${cat.label}
                        </p>
                        <div class="space-y-3 text-left">
                            ${cat.plugins.map(p => renderPlugin(p)).join('')}
                        </div>
                    </div>
                `).join('')}

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP, Vivo, Oppo & more</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
