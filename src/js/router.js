import { state, triggerRender } from './state.js';

export function syncStateToUrl(syncUrl = true) {
    if (!syncUrl) return;

    const parts = [state.currentApp];

    // Add sub-view status based on app
    if (state.currentApp === 'sales') {
        parts.push(state.currentTab);
    } else if (state.currentApp === 'clients') {
        parts.push(state.clientViewMode);
        if (state.selectedClient && state.clientViewMode === 'profile') {
            parts.push(encodeURIComponent(state.selectedClient));
        }
    } else if (state.currentApp === 'reports') {
        parts.push(state.reportsTab);
    } else if (state.currentApp === 'repairs') {
        parts.push(state.repairTab);
        parts.push(state.repairViewMode);
    } else if (state.currentApp === 'inventory') {
        parts.push(state.inventoryTab);
        parts.push(state.inventoryMode);
    } else if (state.currentApp === 'marketplace') {
        parts.push(state.marketplaceTab);
        parts.push(state.marketplaceViewMode);
    } else if (state.currentApp === 'inquiries') {
        parts.push(state.inquiryViewMode);
    } else if (state.currentApp === 'prebooking') {
        parts.push(state.preBookingViewMode);
    } else if (state.currentApp === 'automation') {
        parts.push(state.automationViewMode);
    } else if (state.currentApp === 'schemes') {
        parts.push(state.schemesTab);
    } else if (state.currentApp === 'settings') {
        parts.push(state.settingsView);
    }

    const hash = '#/' + parts.filter(Boolean).join('/');
    if (window.location.hash !== hash) {
        window.history.pushState(null, '', hash);
    }
}

export function syncUrlToState() {
    const hash = window.location.hash.replace('#/', '');
    if (!hash) return;

    const parts = hash.split('/');
    const app = parts[0];

    if (app) state.currentApp = app;

    if (app === 'sales') {
        if (parts[1]) state.currentTab = parts[1];
    } else if (app === 'clients') {
        if (parts[1]) state.clientViewMode = parts[1];
        if (parts[2]) state.selectedClient = decodeURIComponent(parts[2]);
    } else if (app === 'reports') {
        if (parts[1]) state.reportsTab = parts[1];
    } else if (app === 'repairs') {
        if (parts[1]) state.repairTab = parts[1];
        if (parts[2]) state.repairViewMode = parts[2];
    } else if (app === 'inventory') {
        if (parts[1]) state.inventoryTab = parts[1];
        if (parts[2]) state.inventoryMode = parts[2];
    } else if (app === 'marketplace') {
        if (parts[1]) state.marketplaceTab = parts[1];
        if (parts[2]) state.marketplaceViewMode = parts[2];
    } else if (app === 'inquiries') {
        if (parts[1]) state.inquiryViewMode = parts[1];
    } else if (app === 'prebooking') {
        if (parts[1]) state.preBookingViewMode = parts[1];
    } else if (app === 'automation') {
        if (parts[1]) state.automationViewMode = parts[1];
    } else if (app === 'schemes') {
        if (parts[1]) state.schemesTab = parts[1];
    } else if (app === 'settings') {
        if (parts[1]) state.settingsView = parts[1];
    }

    triggerRender(false); // Render without re-syncing to URL to avoid loops
}

export function initRouter() {
    window.addEventListener('hashchange', syncUrlToState);
    syncUrlToState();
}
