import { db } from '../../utils/db.js';

export function renderSettingsTaxes() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const cache = window.getCache();
    const s = cache.retailerSettings?.taxes || {};
    const settings = {
        gstin: s.gstin ?? retailer.vat_number ?? '',
        pan: s.pan ?? retailer.pan_number ?? '',
        registration_type: s.registration_type ?? 'Regular',
        show_tax_breakdown: s.show_tax_breakdown ?? true,
        tax_inclusive_pricing: s.tax_inclusive_pricing ?? true,
        invoice_prefix: s.invoice_prefix ?? `${(retailer.retailer_code || 'ROS').split('-')[0]}-INV-`,
        e_invoice_enabled: s.e_invoice_enabled ?? false,
    };

    const gstRates = s.gst_rates || {
        smartphones: 18, laptops_tablets: 18, audio_wearables: 18,
        television: 28, air_conditioners: 28, appliances: 28,
        accessories: 18, services_repairs: 18,
    };

    const hsnCodes = s.hsn_codes || {
        mobile_phones: '8517', laptops: '8471', headphones_audio: '8518',
        television: '8528', air_conditioners: '8415', washing_machines: '8450',
        refrigerators: '8418', repair_services: '9987',
    };

    const gstOptions = [0, 5, 12, 18, 28];

    const gstCategories = [
        { label: 'Smartphones', key: 'smartphones' },
        { label: 'Laptops & Tablets', key: 'laptops_tablets' },
        { label: 'Audio & Wearables', key: 'audio_wearables' },
        { label: 'Television', key: 'television' },
        { label: 'Air Conditioners', key: 'air_conditioners' },
        { label: 'Appliances (Washing Machine, Fridge)', key: 'appliances' },
        { label: 'Accessories & Cables', key: 'accessories' },
        { label: 'Services & Repairs', key: 'services_repairs' },
    ];

    const hsnCategories = [
        { label: 'Mobile Phones', key: 'mobile_phones' },
        { label: 'Laptops', key: 'laptops' },
        { label: 'Headphones & Audio', key: 'headphones_audio' },
        { label: 'Television', key: 'television' },
        { label: 'Air Conditioners', key: 'air_conditioners' },
        { label: 'Washing Machines', key: 'washing_machines' },
        { label: 'Refrigerators', key: 'refrigerators' },
        { label: 'Repair Services', key: 'repair_services' },
    ];

    const regTypes = ['Regular', 'Composition', 'Unregistered'];

    // Custom save for taxes — builds nested JSON
    window.saveTaxSettings = async function() {
        const container = document.querySelector('[data-settings-category="taxes"]');
        if (!container) return;

        const data = {
            gstin: container.querySelector('[data-field="gstin"]')?.value || '',
            pan: container.querySelector('[data-field="pan"]')?.value || '',
            registration_type: container.querySelector('[data-field="registration_type"]')?.value || 'Regular',
            show_tax_breakdown: container.querySelector('[data-field="show_tax_breakdown"]')?.checked ?? true,
            tax_inclusive_pricing: container.querySelector('[data-field="tax_inclusive_pricing"]')?.checked ?? true,
            invoice_prefix: container.querySelector('[data-field="invoice_prefix"]')?.value || 'ROS-INV-',
            e_invoice_enabled: container.querySelector('[data-field="e_invoice_enabled"]')?.checked ?? false,
            gst_rates: {},
            hsn_codes: {},
        };

        // Collect GST rates
        container.querySelectorAll('[data-gst-key]').forEach(el => {
            const val = parseInt(el.value);
            data.gst_rates[el.dataset.gstKey] = isNaN(val) ? 18 : val;
        });

        // Collect HSN codes
        container.querySelectorAll('[data-hsn-key]').forEach(el => {
            data.hsn_codes[el.dataset.hsnKey] = el.value;
        });

        try {
            await db.settings.save('taxes', data);
            if (!window._db_cache.retailerSettings) window._db_cache.retailerSettings = {};
            window._db_cache.retailerSettings.taxes = data;
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'settings', detail: 'Updated tax configuration', user_name: r.contact_person || 'Owner', icon: 'percent', color: 'slate' });
            if (window.toast) window.toast.success('Tax settings saved');
        } catch (err) {
            console.error('Failed to save tax settings:', err);
            if (window.toast) window.toast.error('Failed to save tax settings');
        }
    };

    return `
        <div data-settings-category="taxes" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> GST Registration
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">receipt_long</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GSTIN</p>
                            </div>
                            <input type="text" data-field="gstin" value="${settings.gstin}" placeholder="e.g. 27AABCT1234F1Z5" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">credit_card</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                            </div>
                            <input type="text" data-field="pan" value="${settings.pan}" placeholder="e.g. AABCT1234F" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
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
                            <select data-field="registration_type" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                ${regTypes.map(t => `<option ${settings.registration_type === t ? 'selected' : ''}>${t}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tax Rates by Category -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Tax Rates by Category
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${gstCategories.map(c => `
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                                        <span class="text-[10px] font-black text-slate-500">${gstRates[c.key]}%</span>
                                    </div>
                                    <p class="text-xs font-bold text-slate-900">${c.label}</p>
                                </div>
                                <select data-gst-key="${c.key}" class="px-3 py-1.5 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                    ${gstOptions.map(r => `<option value="${r}" ${gstRates[c.key] === r ? 'selected' : ''}>${r === 0 ? '0% (Exempt)' : r + '% GST'}</option>`).join('')}
                                </select>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- HSN/SAC Codes -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> HSN / SAC Codes
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${hsnCategories.map(h => `
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <p class="text-xs font-bold text-slate-900">${h.label}</p>
                                <input type="text" data-hsn-key="${h.key}" value="${hsnCodes[h.key]}" class="w-20 text-right px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Invoice Settings -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Invoice Configuration
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show Tax Breakdown</p>
                                <p class="text-[9px] font-bold text-slate-400">Display CGST + SGST split on invoices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_tax_breakdown" class="sr-only peer" ${settings.show_tax_breakdown ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Tax Inclusive Pricing</p>
                                <p class="text-[9px] font-bold text-slate-400">Product prices already include GST</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="tax_inclusive_pricing" class="sr-only peer" ${settings.tax_inclusive_pricing ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Prefix</p>
                                <p class="text-[9px] font-bold text-slate-400">Prefix for invoice numbers</p>
                            </div>
                            <input type="text" data-field="invoice_prefix" value="${settings.invoice_prefix}" class="w-28 text-right px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">E-Invoice (IRN)</p>
                                <p class="text-[9px] font-bold text-slate-400">Enable e-invoicing via NIC portal</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="e_invoice_enabled" class="sr-only peer" ${settings.e_invoice_enabled ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveTaxSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Tax Configuration
                    </button>
                </div>
            </div>
        </div>
    `;
}
