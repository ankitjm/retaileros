// Create group form — extracted from groups.js
import { formData } from './groups-actions.js';

export function renderCreateGroup() {
    return `
        <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white">add</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">New ${formData.isCompany ? 'Company' : 'Group'}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Create & Add Members</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('list')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Form -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Company Toggle -->
                <div class="card p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 ${formData.isCompany ? 'bg-slate-900' : 'bg-slate-100'} rounded-xl flex items-center justify-center transition-all">
                            <span class="material-icons-outlined text-lg ${formData.isCompany ? 'text-white' : 'text-slate-400'}">${formData.isCompany ? 'business' : 'group'}</span>
                        </div>
                        <div>
                            <h3 class="text-sm font-black text-slate-900">${formData.isCompany ? 'Company' : 'Group'}</h3>
                            <p class="text-[9px] font-bold text-slate-400">${formData.isCompany ? 'B2B with GST' : 'For marketing'}</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.toggleGroupIsCompany()" class="w-11 h-6 ${formData.isCompany ? 'bg-slate-900' : 'bg-slate-200'} rounded-full relative transition-all">
                        <div class="absolute top-0.5 ${formData.isCompany ? 'right-0.5' : 'left-0.5'} w-5 h-5 bg-white rounded-full shadow transition-all"></div>
                    </button>
                </div>

                <!-- Form Fields -->
                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">${formData.isCompany ? 'Company Name' : 'Group Name'} <span class="text-slate-300">*</span></label>
                    <input type="text"
                           value="${formData.name}"
                           oninput="window.updateGroupForm('name', this.value)"
                           placeholder="${formData.isCompany ? 'e.g. Reliance Industries' : 'e.g. VIP Customers'}"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <textarea
                           oninput="window.updateGroupForm('description', this.value)"
                           placeholder="${formData.isCompany ? 'Company details, address...' : 'Purpose of this group...'}"
                           rows="2"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all resize-none">${formData.description}</textarea>
                </div>

                ${formData.isCompany ? `
                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">GST Number</label>
                        <input type="text"
                               value="${formData.gstNumber}"
                               oninput="window.updateGroupForm('gstNumber', this.value.toUpperCase())"
                               placeholder="e.g. 27AAACR3456D1Z5"
                               maxlength="15"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                        <input type="text"
                               value="${formData.contactPerson}"
                               oninput="window.updateGroupForm('contactPerson', this.value)"
                               placeholder="e.g. Mukesh Ambani"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                ` : ''}

                <!-- Save Button -->
                <button type="button" id="save-group-btn" onclick="window.saveGroup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                    Create ${formData.isCompany ? 'Company' : 'Group'}
                    <span class="material-icons-outlined text-xs">arrow_forward</span>
                </button>
            </div>
        </div>
    `;
}
