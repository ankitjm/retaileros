export const state = {
    currentApp: window.innerWidth < 768 ? 'launcher' : 'sales',
    currentTab: 'new-sale',
    salesMode: 'default', // default | add-customer
    salesHistoryId: 'ORD-99281',
    showMobileReceipt: false,
    reportsTab: 'sales',
    repairTab: 'active',
    repairViewMode: 'search',
    selectedRepairDevice: null,
    selectedClient: 'Arjun Malhotra',
    clientViewMode: 'profile',
    promoterViewMode: 'performance',
    inventoryTab: 'brands', // brands | categories
    inventoryMode: 'details', // details | inward
    settingsView: 'roles', // roles | accounting | ledger
    viewportWidth: window.innerWidth,
    gridCols: window.innerWidth < 768 ? 4 : 3,
    schemesTab: 'list', // brands | list
    activeSchemeBrand: 'Apple',
    activeScheme: 'June Activation Bonus',
    showSchemeDetails: false,
    marketplaceTab: 'browse', // browse | my-offers
    marketplaceViewMode: 'list', // list | add
    isLoggedIn: false,
    authMode: 'login', // login | register
    registrationStep: 1, // 1 | 2 | 3
    inquiryViewMode: 'list', // list | add | resolve
    activeInquiry: null,
    preBookingViewMode: 'dashboard', // dashboard | create | details | public
    activeCampaign: null,
    automationViewMode: 'dashboard', // dashboard | create | details
    activeAutomationId: null
};

const listeners = [];

export const registerRender = (fn) => {
    listeners.push(fn);
};

export const triggerRender = (syncUrl = true) => {
    listeners.forEach(fn => fn(syncUrl));
};

// Actions
export function setApp(app) {
    state.currentApp = app;
    if (app === 'clients') state.clientViewMode = 'directory';
    triggerRender();
}

export function setTab(tab) {
    state.currentTab = tab;
    triggerRender();
}

export function setSalesHistoryId(id) {
    state.salesHistoryId = id;
    triggerRender();
}

export function toggleMobileReceipt(show) {
    state.showMobileReceipt = show;
    triggerRender();
}

export function setReportsTab(tab) {
    state.reportsTab = tab;
    triggerRender();
}

export function setRepairTab(tab) {
    state.repairTab = tab;
    triggerRender();
}

export function setRepairMode(mode, device = null) {
    state.repairViewMode = mode;
    if (device) state.selectedRepairDevice = device;
    triggerRender();
}

export function setGridCols(n) {
    state.gridCols = n;
    triggerRender();
}

export function setClientMode(mode, name = null) {
    state.clientViewMode = mode;
    if (name) state.selectedClient = name;
    triggerRender();
}

export function setSchemesTab(tab) {
    state.schemesTab = tab;
    triggerRender();
}

export function setSchemeBrand(brand) {
    state.activeSchemeBrand = brand;
    triggerRender();
}

export function setScheme(scheme) {
    state.activeScheme = scheme;
    triggerRender();
}

export function toggleSchemeDetails(show) {
    state.showSchemeDetails = show;
    triggerRender();
}

export function setMarketplaceTab(tab) {
    state.marketplaceTab = tab;
    triggerRender();
}

export function setMarketplaceViewMode(mode) {
    state.marketplaceViewMode = mode;
    triggerRender();
}

export function setLoginStatus(status) {
    state.isLoggedIn = status;
    state.currentApp = status ? 'sales' : 'launcher';
    triggerRender();
}

export function setAuthMode(mode) {
    state.authMode = mode;
    state.registrationStep = 1;
    triggerRender();
}

export function setRegistrationStep(step) {
    state.registrationStep = step;
    triggerRender();
}

export function setInquiryViewMode(mode) {
    state.inquiryViewMode = mode;
    triggerRender();
}

export function setActiveInquiry(inquiry) {
    state.activeInquiry = inquiry;
    triggerRender();
}

export function setPreBookingViewMode(mode) {
    state.preBookingViewMode = mode;
    triggerRender();
}

export function setActiveCampaign(campaign) {
    state.activeCampaign = campaign;
    triggerRender();
}

export function setAutomationViewMode(mode) {
    state.automationViewMode = mode;
    triggerRender();
}

export function setActiveAutomation(id) {
    state.activeAutomationId = id;
    triggerRender();
}

// Make actions available globally for inline onclick handlers
window.setApp = setApp;
window.setTab = setTab;
window.setSalesHistoryId = setSalesHistoryId;
window.toggleMobileReceipt = toggleMobileReceipt;
window.setReportsTab = setReportsTab;
window.setRepairTab = setRepairTab;
export function setSalesMode(mode) {
    state.salesMode = mode;
    triggerRender();
}

window.setSalesMode = setSalesMode;
window.setRepairMode = setRepairMode;
window.setGridCols = setGridCols;
window.setClientMode = setClientMode;
window.setSchemesTab = setSchemesTab;
window.setSchemeBrand = setSchemeBrand;
window.setScheme = setScheme;
window.toggleSchemeDetails = toggleSchemeDetails;
window.setMarketplaceTab = setMarketplaceTab;
window.setMarketplaceViewMode = setMarketplaceViewMode;
window.setLoginStatus = setLoginStatus;
window.setAuthMode = setAuthMode;
window.setRegistrationStep = setRegistrationStep;
window.setInquiryViewMode = setInquiryViewMode;
window.setActiveInquiry = setActiveInquiry;
window.setPreBookingViewMode = setPreBookingViewMode;
window.setActiveCampaign = setActiveCampaign;
window.setAutomationViewMode = setAutomationViewMode;
window.setActiveAutomation = setActiveAutomation;
