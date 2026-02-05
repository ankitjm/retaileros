export function renderSettingsHelp() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const faqs = [
        { q: 'How do I add a new customer?', a: 'Go to Clients app from the launcher, then tap the + button. Fill in the customer name and phone number to create a new record.' },
        { q: 'How do I create a sale?', a: 'Open Sales Desk, tap "New Transaction", select or add a customer, add products from your inventory, choose payment method, and confirm the sale.' },
        { q: 'How do I set up automation for a sale?', a: 'After completing a sale, go to Automation app. Create a new sequence linked to the sale — you can schedule WhatsApp messages at different day intervals.' },
        { q: 'How does multi-tenant isolation work?', a: 'Each retailer\'s data (customers, sales, inventory, etc.) is completely separate. When you log in, you only see your own store\'s data. No other retailer can access it.' },
        { q: 'How do I track repair jobs?', a: 'Use the Repairs module to create job sheets. Each repair moves through a lifecycle: Collected > Sent to Brand > In Repair > Ready > Handed Over.' },
        { q: 'How do I export my data?', a: 'Go to Settings > Backup. Select the data you want to export, choose CSV or JSON format, and download. You can also set up auto-backups.' },
        { q: 'Can I add staff members?', a: 'Go to Settings > Teams to invite staff. Each team member gets a role (Owner, Manager, Sales, Technician) with specific module access.' },
    ];

    const guides = [
        { title: 'Getting Started', desc: 'Complete setup guide for new retailers', icon: 'rocket_launch', color: 'indigo' },
        { title: 'Sales & Billing', desc: 'Create invoices, apply schemes, manage payments', icon: 'receipt', color: 'green' },
        { title: 'Customer Management', desc: 'Add customers, create groups, track engagement', icon: 'people', color: 'blue' },
        { title: 'Inventory Control', desc: 'Track stock, inward shipments, product catalog', icon: 'inventory_2', color: 'amber' },
        { title: 'Automation Setup', desc: 'Post-purchase sequences, WhatsApp campaigns', icon: 'smart_toy', color: 'purple' },
        { title: 'Reports & Analytics', desc: 'Sales reports, customer insights, performance', icon: 'analytics', color: 'teal' },
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
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Help</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Support & Documentation</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Quick Support -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Quick Support
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <button onclick="window.toast.info('Opening WhatsApp support...')" class="card p-4 text-center hover:border-green-300 hover:bg-green-50/30 transition-all">
                            <span class="material-icons-outlined text-green-500 text-2xl mb-2">chat</span>
                            <p class="text-[10px] font-black text-slate-900">WhatsApp</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Chat with us</p>
                        </button>
                        <button onclick="window.toast.info('Calling support...')" class="card p-4 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                            <span class="material-icons-outlined text-blue-500 text-2xl mb-2">call</span>
                            <p class="text-[10px] font-black text-slate-900">Call Us</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">1800-XXX-XXXX</p>
                        </button>
                        <button onclick="window.toast.info('Opening email...')" class="card p-4 text-center hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                            <span class="material-icons-outlined text-indigo-500 text-2xl mb-2">email</span>
                            <p class="text-[10px] font-black text-slate-900">Email</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">support@retaileros.in</p>
                        </button>
                        <button onclick="window.toast.info('Opening ticket system...')" class="card p-4 text-center hover:border-amber-300 hover:bg-amber-50/30 transition-all">
                            <span class="material-icons-outlined text-amber-500 text-2xl mb-2">confirmation_number</span>
                            <p class="text-[10px] font-black text-slate-900">Raise Ticket</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Track your issue</p>
                        </button>
                    </div>
                </div>

                <!-- Video Guides -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Guides & Tutorials
                    </p>
                    <div class="space-y-3 text-left">
                        ${guides.map(g => `
                            <button onclick="window.toast.info('Guide: ${g.title} — coming soon')" class="card p-4 flex items-center gap-4 text-left w-full hover:border-slate-300 transition-all">
                                <div class="w-10 h-10 bg-${g.color}-50 rounded-xl flex items-center justify-center shrink-0">
                                    <span class="material-icons-outlined text-${g.color}-500">${g.icon}</span>
                                </div>
                                <div class="flex-1 text-left">
                                    <p class="text-xs font-black text-slate-900">${g.title}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${g.desc}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-sm">chevron_right</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- FAQ -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Frequently Asked Questions
                    </p>
                    <div class="space-y-2 text-left">
                        ${faqs.map((faq, i) => `
                            <details class="card overflow-hidden group text-left">
                                <summary class="p-4 cursor-pointer flex items-center justify-between text-left list-none">
                                    <p class="text-[11px] font-black text-slate-900 pr-4">${faq.q}</p>
                                    <span class="material-icons-outlined text-slate-400 text-sm shrink-0 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div class="px-4 pb-4 text-left">
                                    <p class="text-[10px] font-bold text-slate-500 leading-relaxed">${faq.a}</p>
                                </div>
                            </details>
                        `).join('')}
                    </div>
                </div>

                <!-- Account Info -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Account
                    </p>
                    <div class="card p-4 bg-slate-50 border-transparent text-left">
                        <div class="grid grid-cols-2 gap-3 text-left">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Store</p>
                                <p class="text-xs font-bold text-slate-900">${retailer.retailer_name || 'Your Store'}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Code</p>
                                <p class="text-xs font-bold text-slate-900">${retailer.retailer_code || '—'}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Plan</p>
                                <p class="text-xs font-bold text-green-600">Professional</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Version</p>
                                <p class="text-xs font-bold text-slate-900">v2.1.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Report Bug -->
                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Bug report form coming soon')" class="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">bug_report</span> Report a Bug
                    </button>
                </div>
            </div>
        </div>
    `;
}
