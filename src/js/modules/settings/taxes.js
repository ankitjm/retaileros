export function renderSettingsTaxes() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const gstRate = (cat, rate) => `
        <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
            <div class="flex items-center gap-3 text-left">
                <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                    <span class="text-[10px] font-black text-slate-500">${rate}%</span>
                </div>
                <p class="text-xs font-bold text-slate-900">${cat}</p>
            </div>
            <select class="px-3 py-1.5 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                <option ${rate === 0 ? 'selected' : ''}>0% (Exempt)</option>
                <option ${rate === 5 ? 'selected' : ''}>5% GST</option>
                <option ${rate === 12 ? 'selected' : ''}>12% GST</option>
                <option ${rate === 18 ? 'selected' : ''}>18% GST</option>
                <option ${rate === 28 ? 'selected' : ''}>28% GST</option>
            </select>
        </div>
    `;

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Taxes</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">GST & Tax Configuration</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- GST Registration -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> GST Registration
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">receipt_long</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GSTIN</p>
                            </div>
                            <input type="text" value="${retailer.vat_number || ''}" placeholder="e.g. 27AABCT1234F1Z5" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">credit_card</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                            </div>
                            <input type="text" value="${retailer.pan_number || ''}" placeholder="e.g. AABCT1234F" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">location_on</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">State</p>
                            </div>
                            <p class="text-sm font-bold text-slate-900">${retailer.state_name || 'Not set'}</p>
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">category</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Registration Type</p>
                            </div>
                            <select class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                <option selected>Regular</option>
                                <option>Composition</option>
                                <option>Unregistered</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tax Rates by Category -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Tax Rates by Category
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${gstRate('Smartphones', 18)}
                        ${gstRate('Laptops & Tablets', 18)}
                        ${gstRate('Audio & Wearables', 18)}
                        ${gstRate('Television', 28)}
                        ${gstRate('Air Conditioners', 28)}
                        ${gstRate('Appliances (Washing Machine, Fridge)', 28)}
                        ${gstRate('Accessories & Cables', 18)}
                        ${gstRate('Services & Repairs', 18)}
                    </div>
                </div>

                <!-- HSN/SAC Codes -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> HSN / SAC Codes
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${[
                            { cat: 'Mobile Phones', hsn: '8517' },
                            { cat: 'Laptops', hsn: '8471' },
                            { cat: 'Headphones & Audio', hsn: '8518' },
                            { cat: 'Television', hsn: '8528' },
                            { cat: 'Air Conditioners', hsn: '8415' },
                            { cat: 'Washing Machines', hsn: '8450' },
                            { cat: 'Refrigerators', hsn: '8418' },
                            { cat: 'Repair Services', hsn: '9987' },
                        ].map(h => `
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <p class="text-xs font-bold text-slate-900">${h.cat}</p>
                                <input type="text" value="${h.hsn}" class="w-20 text-right px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Invoice Settings -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Invoice Configuration
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show Tax Breakdown</p>
                                <p class="text-[9px] font-bold text-slate-400">Display CGST + SGST split on invoices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Tax Inclusive Pricing</p>
                                <p class="text-[9px] font-bold text-slate-400">Product prices already include GST</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Prefix</p>
                                <p class="text-[9px] font-bold text-slate-400">Prefix for invoice numbers</p>
                            </div>
                            <input type="text" value="${(retailer.retailer_code || 'ROS').split('-')[0]}-INV-" class="w-28 text-right px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">E-Invoice (IRN)</p>
                                <p class="text-[9px] font-bold text-slate-400">Enable e-invoicing via NIC portal</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Tax settings saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Save Tax Configuration
                    </button>
                </div>
            </div>
        </div>
    `;
}
