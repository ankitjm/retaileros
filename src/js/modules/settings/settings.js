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
import { renderSettingsApi } from './api-keys.js';

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

    window.saveNewRole = async () => {
        const nameInput = document.querySelector('input[placeholder="e.g. Floor Supervisor"]');
        const name = nameInput?.value?.trim();
        if (!name) {
            window.toast.warning('Please enter a role name');
            return;
        }
        try {
            const { db } = await import('../../utils/db.js');
            const id = `role_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
            // Collect permissions from checkboxes
            const perms = {};
            document.querySelectorAll('[data-perm]').forEach(el => {
                perms[el.dataset.perm] = el.checked;
            });
            await db.teamRoles.add({ id, name, permissions: perms });
            // Update cache
            const cache = window.getCache();
            if (!cache.teamRoles) cache.teamRoles = [];
            cache.teamRoles.push({ id, name, permissions: JSON.stringify(perms) });
            state.settingsActiveRole = name;
            state.settingsSubView = 'detail';
            window.toast.success(`Role "${name}" created successfully!`);
            triggerRender();
        } catch (err) {
            console.error('saveNewRole error:', err);
            window.toast.error('Failed to create role');
        }
    };

    window.updateRole = async () => {
        const roleName = state.settingsActiveRole;
        if (!roleName) return;
        try {
            const { db } = await import('../../utils/db.js');
            const cache = window.getCache();
            const roles = cache.teamRoles || [];
            const role = roles.find(r => r.name === roleName);
            if (!role) {
                window.toast.success('Role updated');
                window.setSettingsSubView('detail');
                return;
            }
            const perms = {};
            document.querySelectorAll('[data-perm]').forEach(el => {
                perms[el.dataset.perm] = el.checked;
            });
            await db.teamRoles.update(role.id, { name: roleName, permissions: perms, description: null });
            role.permissions = JSON.stringify(perms);
            window.toast.success('Role updated successfully!');
            window.setSettingsSubView('detail');
        } catch (err) {
            console.error('updateRole error:', err);
            window.toast.error('Failed to update role');
        }
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
        if (state.settingsView === 'api') return renderSettingsApi();
        if (isDesktopSecondary) return '';
    }

    return renderSettingsDashboard(mode);
}
