import { state } from '../../state.js';
import { renderClientHeader } from './header.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Helper to generate ID
const generateId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

// Local state for create/edit form
let formData = {
    name: '',
    description: '',
    isCompany: false,
    gstNumber: '',
    contactPerson: ''
};

// Reset form
function resetForm() {
    formData = {
        name: '',
        description: '',
        isCompany: false,
        gstNumber: '',
        contactPerson: ''
    };
}

// Form handlers
window.updateGroupForm = (field, value) => {
    formData[field] = value;
    if (field === 'isCompany') {
        window.triggerRender(false);
    }
};

window.toggleGroupIsCompany = () => {
    formData.isCompany = !formData.isCompany;
    window.triggerRender(false);
};

// Save group
window.saveGroup = async () => {
    if (!formData.name.trim()) {
        window.toast.warning('Please enter a group name');
        return;
    }

    const btn = document.getElementById('save-group-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...';
    }

    try {
        const groupId = generateId('GRP');
        await db.groups.add({
            id: groupId,
            name: formData.name.trim(),
            description: formData.description.trim(),
            is_company: formData.isCompany ? 1 : 0,
            gst_number: formData.isCompany ? formData.gstNumber.trim() : null,
            contact_person: formData.isCompany ? formData.contactPerson.trim() : null,
            created_at: new Date().toISOString()
        });

        resetForm();
        await syncData();
        state.groupViewMode = 'list';
        state.selectedGroupId = groupId;
        window.toast.success(`${formData.isCompany ? 'Company' : 'Group'} created successfully!`);
        window.triggerRender();
    } catch (err) {
        console.error('Error saving group:', err);
        window.toast.error('Error saving group: ' + err.message);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = 'Create Group';
        }
    }
};

// Delete group
window.deleteGroup = async (groupId) => {
    window.showConfirm('Are you sure you want to delete this group? All member associations will be removed.', async () => {
        try {
            await db.groups.deleteMembers(groupId);
            await db.groups.delete(groupId);
            await syncData();
            state.selectedGroupId = null;
            state.groupViewMode = 'list';
            window.toast.success('Group deleted successfully');
            window.triggerRender();
        } catch (err) {
            console.error('Error deleting group:', err);
            window.toast.error('Error deleting group: ' + err.message);
        }
    });
};

// Add member to group
window.addMemberToGroup = async (groupId, customerId) => {
    try {
        await db.groups.addMember({
            id: generateId('GM'),
            group_id: groupId,
            customer_id: customerId,
            added_at: new Date().toISOString()
        });
        await syncData();
        window.toast.success('Member added');
        window.triggerRender(false);
    } catch (err) {
        console.error('Error adding member:', err);
        window.toast.error('Error adding member: ' + err.message);
    }
};

// Remove member from group
window.removeMemberFromGroup = async (groupId, customerId) => {
    try {
        await db.groups.removeMember(groupId, customerId);
        await syncData();
        window.toast.info('Member removed');
        window.triggerRender(false);
    } catch (err) {
        console.error('Error removing member:', err);
        window.toast.error('Error removing member: ' + err.message);
    }
};

// Search for groups
window.updateGroupSearch = (query) => {
    const input = document.getElementById('group-search-input');
    const cursorPos = input?.selectionStart || query.length;
    
    state.groupSearchQuery = query;
    window.triggerRender(false);
    
    setTimeout(() => {
        const newInput = document.getElementById('group-search-input');
        if (newInput) {
            newInput.focus();
            newInput.setSelectionRange(cursorPos, cursorPos);
        }
    }, 0);
};

// Render groups list
export function renderGroupsList() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const searchQuery = state.groupSearchQuery || '';

    // Filter groups based on search
    const filteredGroups = searchQuery
        ? groups.filter(g =>
            g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (g.description && g.description.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : groups;

    // Separate companies and regular groups
    const companies = filteredGroups.filter(g => g.is_company === 1);
    const regularGroups = filteredGroups.filter(g => g.is_company !== 1);

    return `
        ${renderClientHeader('Groups', 'RETAILEROS')}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 relative text-left">
            <!-- Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button onclick="window.setClientMode('directory')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Directory</button>
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Groups</button>
            </div>

            <!-- Search -->
            <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                <input type="text" 
                       id="group-search-input"
                       value="${searchQuery}"
                       oninput="window.updateGroupSearch(this.value)" 
                       placeholder="Search groups & companies..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${filteredGroups.length} Total • ${companies.length} Companies • ${regularGroups.length} Groups
                </p>
            </div>

            <!-- Groups List -->
            <div class="space-y-3 pb-24 text-left">
                ${filteredGroups.length === 0 ? `
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">group_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${searchQuery ? 'No groups found' : 'No groups yet'}
                        </span>
                        <button onclick="window.setGroupViewMode('create')" class="mt-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                            Create First Group
                        </button>
                    </div>
                ` : `
                    ${companies.length > 0 ? `
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Companies</p>
                            ${companies.map(g => {
                                const memberCount = groupMembers.filter(m => m.group_id === g.id).length;
                                return `
                                    <button type="button" onclick="window.setSelectedGroup('${g.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${state.selectedGroupId === g.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                                                <span class="material-icons-outlined text-lg">business</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${g.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${g.gst_number || 'No GST'}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${memberCount}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    ` : ''}
                    
                    ${regularGroups.length > 0 ? `
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Groups</p>
                            ${regularGroups.map(g => {
                                const memberCount = groupMembers.filter(m => m.group_id === g.id).length;
                                return `
                                    <button type="button" onclick="window.setSelectedGroup('${g.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${state.selectedGroupId === g.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                                <span class="material-icons-outlined text-lg">group</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${g.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${g.description || 'No description'}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${memberCount}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    ` : ''}
                `}
            </div>

            <!-- Floating Add Button -->
            <button onclick="window.setGroupViewMode('create')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `;
}

// Render create group form (preview pane)
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

// Render group detail (preview pane)
export function renderGroupDetail() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const customers = cache.customers || [];
    const sales = cache.sales || [];

    const group = groups.find(g => g.id === state.selectedGroupId);
    if (!group) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;
    }

    // Get members of this group
    const memberIds = groupMembers.filter(m => m.group_id === group.id).map(m => m.customer_id);
    const members = customers.filter(c => memberIds.includes(c.id));

    // Calculate total spent by group members
    const memberSales = sales.filter(s => memberIds.includes(s.customer_id) && s.status !== 'draft');
    const totalSpent = memberSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);

    return `
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 text-center border-b border-slate-100 shrink-0">
                <div class="w-16 h-16 ${group.is_company ? 'bg-slate-900' : 'bg-slate-100'} rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl ${group.is_company ? 'text-white' : 'text-slate-400'}">${group.is_company ? 'business' : 'group'}</span>
                </div>
                <h2 class="text-xl font-black text-slate-900 tracking-tighter">${group.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    ${group.is_company ? 'Company' : 'Group'} • Created ${new Date(group.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
                ${group.description ? `<p class="text-xs font-bold text-slate-500 mt-2">${group.description}</p>` : ''}
                ${group.gst_number ? `<p class="text-[10px] font-black text-slate-400 mt-1">GST: ${group.gst_number}</p>` : ''}
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Stats -->
                <div class="grid grid-cols-2 gap-3">
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">${members.length}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Members</p>
                    </div>
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${totalSpent.toLocaleString()}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                    <button class="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">chat</span>
                        WhatsApp
                    </button>
                    <button class="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">campaign</span>
                        Campaign
                    </button>
                </div>

                <!-- Members Section -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Members (${members.length})</h3>
                        <button onclick="window.setGroupViewMode('add-members')" class="text-[9px] font-black text-slate-900 uppercase flex items-center gap-1">
                            <span class="material-icons-outlined text-sm">person_add</span>
                            Add
                        </button>
                    </div>

                    ${members.length === 0 ? `
                        <div class="card p-6 border-dashed border-slate-200 text-center">
                            <span class="material-icons-outlined text-2xl text-slate-200 mb-2">group_add</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No members yet</p>
                            <button onclick="window.setGroupViewMode('add-members')" class="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Add Members
                            </button>
                        </div>
                    ` : `
                        <div class="space-y-2">
                            ${members.map(m => {
                                const mSales = sales.filter(s => s.customer_id === m.id && s.status !== 'draft');
                                const spent = mSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
                                return `
                                    <div class="card p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${m.name.split(' ').map(x => x[0]).join('').toUpperCase()}</div>
                                            <div>
                                                <p class="text-xs font-black text-slate-900">${m.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${m.phone || 'No phone'}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${spent > 0 ? `<span class="text-[9px] font-black text-slate-500">₹${spent.toLocaleString()}</span>` : ''}
                                            <button onclick="window.removeMemberFromGroup('${group.id}', '${m.id}')" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                                                <span class="material-icons-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>

                <!-- Delete Button -->
                <button onclick="window.deleteGroup('${group.id}')" class="w-full py-3 text-[9px] font-black text-slate-400 uppercase border border-slate-200 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 mt-4">
                    <span class="material-icons-outlined text-sm">delete</span>
                    Delete ${group.is_company ? 'Company' : 'Group'}
                </button>
            </div>
        </div>
    `;
}

// Render add members view
export function renderAddMembers() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const customers = cache.customers || [];

    const group = groups.find(g => g.id === state.selectedGroupId);
    if (!group) {
        state.groupViewMode = 'list';
        return '';
    }

    // Get current member IDs
    const memberIds = groupMembers.filter(m => m.group_id === group.id).map(m => m.customer_id);
    
    // Non-members
    const nonMembers = customers.filter(c => !memberIds.includes(c.id));

    return `
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 ${group.is_company ? 'bg-slate-900' : 'bg-slate-100'} rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined ${group.is_company ? 'text-white' : 'text-slate-400'}">${group.is_company ? 'business' : 'group'}</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">Add Members</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${group.name} • ${memberIds.length} current</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('detail')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${nonMembers.length})</h3>
                
                ${nonMembers.length === 0 ? `
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                ` : `
                    <div class="space-y-2">
                        ${nonMembers.map(c => `
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${c.name.split(' ').map(x => x[0]).join('').toUpperCase()}</div>
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${c.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${c.phone || c.email || 'No contact'}</p>
                                    </div>
                                </div>
                                <button onclick="window.addMemberToGroup('${group.id}', '${c.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">
                                    Add
                                </button>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

// Main render function for primary pane (list view)
export function renderGroups() {
    // Primary pane always shows the list
    return renderGroupsList();
}

// Render function for secondary pane (detail/create views)
export function renderGroupsSecondary() {
    switch (state.groupViewMode) {
        case 'create':
            return renderCreateGroup();
        case 'detail':
            return renderGroupDetail();
        case 'add-members':
            return renderAddMembers();
        default:
            // Empty state when no group is selected
            return `
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `;
    }
}
