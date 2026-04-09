import { state } from '../../state.js';

export function renderSettingsStore() {
    const isEditMode = state.settingsSubView === 'edit';

    // Get retailer data from cache or fetch from DB
    const cache = window.getCache();
    const retailerId = localStorage.getItem('retaileros_retailer_id');
    const retailer = cache.retailers?.find(r => r.id === retailerId) || null;

    // If no retailer data, show loading or error state
    if (!retailer) {
        return `
            <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
                <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                        <div class="text-center translate-x-1">
                            <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                        </div>
                        <div class="w-8"></div>
                    </div>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar p-6 flex items-center justify-center text-center">
                    <div class="animate-pulse">
                        <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="material-icons-outlined text-3xl text-slate-300">store</span>
                        </div>
                        <p class="text-sm font-black text-slate-400">Loading store information...</p>
                        <p class="text-[9px] text-slate-300 mt-2">Please wait</p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                    </div>
                    <button onclick="window.setSettingsSubView('${isEditMode ? null : 'edit'}')" class="p-2 text-slate-400 hover:text-slate-900 text-left">
                        <span class="material-symbols-outlined text-xl text-left">${isEditMode ? 'close' : 'edit'}</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">

                <!-- Store Header Card -->
                <div class="p-6 border-b border-slate-100 text-left">
                    <div class="card p-6 border-2 border-slate-900 shadow-xl text-left">
                        <div class="flex items-start gap-4 text-left">
                            <div class="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 text-left">
                                <span class="material-icons-outlined text-3xl text-white text-left">store</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <h3 class="text-lg font-black text-slate-900 mb-1 truncate text-left">${retailer.retailer_name || 'Store Name'}</h3>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 text-left">${retailer.retailer_code || 'N/A'}</p>
                                <div class="flex items-center gap-2 text-left">
                                    <span class="px-2 py-0.5 bg-slate-900 text-white rounded text-[8px] font-black uppercase text-left">${retailer.status || 'Active'}</span>
                                    <span class="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[8px] font-black uppercase text-left">${retailer.retailer_category || 'Retailer'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${renderInfoCard('Contact Person', retailer.contact_person || 'N/A', 'person')}
                        ${renderInfoCard('Email', retailer.email || 'N/A', 'email')}
                        ${renderInfoCard('Mobile', retailer.mobile_number || 'N/A', 'phone')}
                        ${renderInfoCard('Phone', retailer.phone_number || 'N/A', 'call')}
                    </div>
                </div>

                <!-- Address Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Address
                    </p>

                    <div class="card p-4 border-slate-100 text-left">
                        <div class="space-y-2 text-left">
                            <p class="text-sm font-bold text-slate-900 text-left">${retailer.address_line_1 || 'N/A'}</p>
                            ${retailer.address_line_2 ? `<p class="text-sm font-bold text-slate-700 text-left">${retailer.address_line_2}</p>` : ''}
                            <p class="text-xs text-slate-500 text-left">
                                ${retailer.area_name ? retailer.area_name + ', ' : ''}${retailer.city_name || 'N/A'}, ${retailer.district_name || ''} ${retailer.state_name || 'N/A'} - ${retailer.pin_code || 'N/A'}
                            </p>
                            <p class="text-xs font-bold text-slate-400 text-left">${retailer.country_name || 'India'}</p>
                        </div>
                    </div>
                </div>

                <!-- Financial Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Financial Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${renderInfoCard('GST Number', retailer.vat_number || 'N/A', 'receipt_long')}
                        ${renderInfoCard('PAN Number', retailer.pan_number || 'N/A', 'credit_card')}
                    </div>
                </div>

                <!-- Bank Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Bank Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${renderInfoCard('Bank Name', retailer.bank_name || 'N/A', 'account_balance')}
                        ${renderInfoCard('Account Holder', retailer.bank_account_holder || 'N/A', 'person')}
                        ${renderInfoCard('Account Number', retailer.bank_account_number || 'N/A', 'numbers')}
                        ${renderInfoCard('IFSC Code', retailer.bank_ifsc || 'N/A', 'tag')}
                        ${renderInfoCard('Branch', retailer.bank_branch || 'N/A', 'location_on')}
                    </div>
                </div>

                <!-- Hierarchy Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Hierarchy & Reporting
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${renderInfoCard('Parent Retailer', retailer.parent_retailer_name || 'N/A', 'store')}
                        ${renderInfoCard('National Distributor', retailer.nd_name || 'N/A', 'business')}
                        ${renderInfoCard('Regional Distributor', retailer.rds_name || 'N/A', 'corporate_fare')}
                        ${renderInfoCard('Salesman', retailer.salesman_name || 'N/A', 'badge')}
                        ${renderInfoCard('Reporting To', retailer.reporting_to_name || 'N/A', 'supervisor_account')}
                    </div>
                </div>

                <!-- Business Metrics -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Metrics
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${renderInfoCard('CSA on Counter', retailer.csa_on_counter || 'N/A', 'groups')}
                        ${renderInfoCard('Potential Volume', retailer.counter_potential_volume || 'N/A', 'inventory')}
                        ${renderInfoCard('Potential Value', retailer.counter_potential_value || 'N/A', 'payments')}
                    </div>
                </div>

                <!-- Category & Classification -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Category & Classification
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${renderInfoCard('Category', retailer.retailer_category || 'N/A', 'category')}
                        ${renderInfoCard('Category 1', retailer.retailer_category1 || 'N/A', 'label')}
                        ${renderInfoCard('Classification', retailer.retailer_classification || 'N/A', 'stars')}
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Additional Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${renderInfoCard('Date of Birth', retailer.dob ? new Date(retailer.dob).toLocaleDateString() : 'N/A', 'cake')}
                        ${renderInfoCard('Creation Date', retailer.creation_date ? new Date(retailer.creation_date).toLocaleDateString() : 'N/A', 'event')}
                        ${renderInfoCard('Onboarded At', retailer.onboarded_at ? new Date(retailer.onboarded_at).toLocaleDateString() : 'N/A', 'schedule')}
                    </div>

                    ${retailer.approval_remarks ? `
                        <div class="card p-4 bg-slate-50 border-slate-200 text-left">
                            <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Approval Remarks</p>
                            <p class="text-xs text-slate-900 text-left">${retailer.approval_remarks}</p>
                        </div>
                    ` : ''}
                </div>

                ${isEditMode ? `
                    <!-- Edit Mode Actions -->
                    <div class="p-6 border-t border-slate-200 text-left">
                        <button onclick="window.toast.info('Edit functionality coming soon!')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                            Save Changes
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Helper function to render info cards
function renderInfoCard(label, value, icon) {
    return `
        <div class="card p-3 border-slate-100 text-left">
            <div class="flex items-center gap-2 mb-1 text-left">
                <span class="material-icons-outlined text-slate-400 text-sm text-left">${icon}</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${label}</p>
            </div>
            <p class="text-sm font-bold text-slate-900 truncate text-left">${value}</p>
        </div>
    `;
}
