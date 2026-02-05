import { state, triggerRender } from '../../state.js';
import { renderSettingsDashboard } from './dashboard.js';
import { renderSettingsRoles } from './roles.js';
import { renderSettingsAccounting } from './accounting.js';
import { renderSettingsLedger } from './ledger.js';
import { renderAISettings } from './ai.js';
import { renderSettingsStore } from './store.js';

export function renderSettings(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Helper to switch settings view
    window.setSettingsView = (view) => {
        state.settingsView = view;
        state.settingsSubView = null; // Reset sub-view when parent changes
        triggerRender();
    };

    // Helper for sub-views (e.g. Roles List vs Add)
    window.setSettingsSubView = (subView) => {
        state.settingsSubView = subView;
        triggerRender();
    };

    window.setSettingsRole = (role) => {
        state.settingsActiveRole = role;
        state.settingsSubView = 'detail'; // Explicitly set to detail mode
        triggerRender();
    };

    window.saveNewRole = () => {
        const input = document.querySelector('input[placeholder="e.g. Floor Supervisor"]');
        if (input && input.value) {
            state.settingsActiveRole = input.value;
            state.settingsSubView = 'detail';
            window.toast.success(`Role "${input.value}" created successfully!`);
            triggerRender();
        } else {
            window.toast.warning('Please enter a role name');
        }
    };

    window.updateRole = () => {
        window.toast.success('Role profile updated successfully!');
        window.setSettingsSubView('detail');
    };

    if (isDesktopSecondary) {
        if (state.settingsView === 'roles') {
            return renderSettingsRoles();
        }
        if (state.settingsView === 'accounting') {
            return renderSettingsAccounting();
        }
        if (state.settingsView === 'ledger') {
            return renderSettingsLedger();
        }
        if (state.settingsView === 'ai') {
            return renderAISettings();
        }
        if (state.settingsView === 'store') {
            return renderSettingsStore();
        }
        return '';
    }

    return renderSettingsDashboard(mode);
}
