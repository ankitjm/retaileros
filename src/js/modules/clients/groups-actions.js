// Groups CRUD actions — extracted from groups.js
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { state } from '../../state.js';

const generateId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

// Form state for create/edit
export let formData = {
    name: '',
    description: '',
    isCompany: false,
    gstNumber: '',
    contactPerson: ''
};

export function resetForm() {
    formData.name = '';
    formData.description = '';
    formData.isCompany = false;
    formData.gstNumber = '';
    formData.contactPerson = '';
}

// Form handlers
window.updateGroupForm = (field, value) => {
    formData[field] = value;
    if (field === 'isCompany') window.triggerRender(false);
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

        const wasCompany = formData.isCompany;
        resetForm();
        await syncData();
        state.groupViewMode = 'list';
        state.selectedGroupId = groupId;
        window.toast.success(`${wasCompany ? 'Company' : 'Group'} created successfully!`);
        window.triggerRender();
    } catch (err) {
        console.error('Error saving group:', err);
        window.toast.error('Error saving group: ' + err.message);
        if (btn) { btn.disabled = false; btn.innerHTML = 'Create Group'; }
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

// Add member
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

// Remove member
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

// Search
window.updateGroupSearch = (query) => {
    const input = document.getElementById('group-search-input');
    const cursorPos = input?.selectionStart || query.length;
    state.groupSearchQuery = query;
    window.triggerRender(false);
    setTimeout(() => {
        const newInput = document.getElementById('group-search-input');
        if (newInput) { newInput.focus(); newInput.setSelectionRange(cursorPos, cursorPos); }
    }, 0);
};
