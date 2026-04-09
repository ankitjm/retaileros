import { state, triggerRender } from '../../state.js';
import { renderSettingsDashboard } from './dashboard.js';
import { renderSettingsRoles } from './roles.js';
import { renderSettingsAccounting } from './accounting.js';
import { renderSettingsLedger } from './ledger.js';
import { renderAISettings } from './ai.js';
import { renderSettingsStore } from './store.js';
import { renderSettingsSecurity } from './security.js';
import { renderSettingsAlerts } from './alerts.js';
import { renderSettingsTaxes } from './taxes.js';
import { renderSettingsPlugins } from './plugins.js';
import { renderSettingsTeams } from './teams.js';
import { renderSettingsLogs } from './logs.js';
import { renderSettingsLang } from './lang.js';
import { renderSettingsBackup } from './backup.js';
import { renderSettingsUpdates } from './updates.js';
import { renderSettingsTheme } from './theme.js';
import { renderSettingsHelp } from './help.js';

export function renderSettings(mode) {
    const isMobile = mode === 'mobile';
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

    // Sub-app routing — applies to desktop secondary pane AND mobile when a view is selected
    if (isDesktopSecondary || (isMobile && state.settingsView)) {
        if (state.settingsView === 'roles') return renderSettingsRoles();
        if (state.settingsView === 'accounting') return renderSettingsAccounting();
        if (state.settingsView === 'ledger') return renderSettingsLedger();
        if (state.settingsView === 'ai') return renderAISettings();
        if (state.settingsView === 'store') return renderSettingsStore();
        if (state.settingsView === 'security') return renderSettingsSecurity();
        if (state.settingsView === 'alerts') return renderSettingsAlerts();
        if (state.settingsView === 'taxes') return renderSettingsTaxes();
        if (state.settingsView === 'plugins') return renderSettingsPlugins();
        if (state.settingsView === 'teams') return renderSettingsTeams();
        if (state.settingsView === 'logs') return renderSettingsLogs();
        if (state.settingsView === 'lang') return renderSettingsLang();
        if (state.settingsView === 'backup') return renderSettingsBackup();
        if (state.settingsView === 'updates') return renderSettingsUpdates();
        if (state.settingsView === 'theme') return renderSettingsTheme();
        if (state.settingsView === 'help') return renderSettingsHelp();
        if (isDesktopSecondary) return '';
    }

    return renderSettingsDashboard(mode);
}
