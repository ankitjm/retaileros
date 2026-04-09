// Check localStorage for existing login status
const savedLoginStatus = localStorage.getItem('retaileros_logged_in') === 'true';
const savedRetailerId = localStorage.getItem('retaileros_retailer_id') || null;
const savedRetailerCode = localStorage.getItem('retaileros_retailer_code') || null;
const savedRetailerName = localStorage.getItem('retaileros_retailer_name') || null;

// Push notifications preference
const savedPushPref = localStorage.getItem('retaileros_push_notifications') !== 'false';
window._pushNotificationsEnabled = savedPushPref;

export const state = {
    // Tenant identity
    retailerId: savedRetailerId,
    retailerCode: savedRetailerCode,
    retailerName: savedRetailerName,
    currentApp: window.innerWidth < 768 ? 'launcher' : 'sales',
    currentTab: 'new-sale',
    salesMode: 'default', // default | add-customer
    salesHistoryId: 'ORD-99281',
    // History filters
    historyViewMode: 'completed', // 'completed' | 'drafts'
    historyDateFilter: 'today', // 'all' | 'today' | 'week' | 'month' | 'custom'
    historyFromDate: '',
    historyToDate: '',
    showMobileReceipt: false,
    reportsTab: 'sales',
    repairTab: 'active',
    repairViewMode: 'search',
    selectedRepairDevice: null,
    activeRepairId: null,
    repairContext: null,
    selectedClient: null,
    selectedClientId: null,
    clientViewMode: 'directory', // directory | profile | add | groups | invoice
    clientSearchQuery: '',
    // Client invoice preview
    clientInvoiceId: null, // Sale ID to preview from client timeline
    // Groups
    selectedGroupId: null,
    groupViewMode: 'list', // list | create | detail | add-members
    groupSearchQuery: '',
    promoterViewMode: 'performance',
    inventoryTab: 'brands', // brands | categories
    inventoryMode: 'details', // details | inward
    activeCategory: null,
    settingsView: null, // null = dashboard | roles | accounting | ledger | etc.
    viewportWidth: window.innerWidth,
    gridCols: window.innerWidth < 768 ? 4 : 3,
    schemesTab: 'list', // brands | list
    activeSchemeBrand: 'Apple',
    activeScheme: 'June Activation Bonus',
    showSchemeDetails: false,
    marketplaceTab: 'browse', // browse | my-offers
    marketplaceViewMode: 'list', // list | add
    myStoreTab: 'dashboard', // dashboard | listings | orders | shipping
    myStoreViewMode: 'list', // list | add-listing | order-detail
    activeStoreOrderId: null,
    activeListingId: null,
    isLoggedIn: savedLoginStatus,
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
    // Auto-open receipt preview on mobile when selecting a transaction
    if (id && window.innerWidth < 768) {
        state.showMobileReceipt = true;
    }
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

export function setClientMode(mode, name = null, id = null) {
    state.clientViewMode = mode;
    if (name) state.selectedClient = name;
    if (id) state.selectedClientId = id;
    // Clear invoice when going back to profile
    if (mode !== 'invoice') state.clientInvoiceId = null;
    triggerRender();
}

export function viewClientInvoice(saleId) {
    state.clientInvoiceId = saleId;
    state.clientViewMode = 'invoice';
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

// Tenant identity management
export function setRetailer(id, code, name) {
    state.retailerId = id;
    state.retailerCode = code;
    state.retailerName = name;
    localStorage.setItem('retaileros_retailer_id', id);
    localStorage.setItem('retaileros_retailer_code', code);
    localStorage.setItem('retaileros_retailer_name', name);
}

export function clearRetailer() {
    state.retailerId = null;
    state.retailerCode = null;
    state.retailerName = null;
    localStorage.removeItem('retaileros_retailer_id');
    localStorage.removeItem('retaileros_retailer_code');
    localStorage.removeItem('retaileros_retailer_name');
}

export function getRetailerId() {
    return state.retailerId;
}

export function setLoginStatus(status) {
    state.isLoggedIn = status;
    // Save login status to localStorage
    if (status) {
        localStorage.setItem('retaileros_logged_in', 'true');
    } else {
        localStorage.removeItem('retaileros_logged_in');
        clearRetailer(); // Clear tenant identity on logout
    }
    // Mobile users go to launcher first, desktop users go to sales
    const isMobile = window.innerWidth < 768;
    state.currentApp = status ? (isMobile ? 'launcher' : 'sales') : 'launcher';
    triggerRender();
}

export function setAuthMode(mode) {
    state.authMode = mode;
    state.registrationStep = 1;
    triggerRender();
}

export function setRegistrationStep(step) {
    state.registrationStep = step;
    // Use partial auth render instead of full page render
    if (window.updateAuthContent) {
        window.updateAuthContent();
    } else {
        triggerRender();
    }
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
window.triggerRender = triggerRender;
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

export function setHistoryViewMode(mode) {
    state.historyViewMode = mode;
    triggerRender();
}

export function setHistoryDateFilter(filter) {
    state.historyDateFilter = filter;
    if (filter !== 'custom') {
        state.historyFromDate = '';
        state.historyToDate = '';
    }
    triggerRender();
}

export function setHistoryCustomDates(from, to) {
    state.historyFromDate = from;
    state.historyToDate = to;
    state.historyDateFilter = 'custom';
    triggerRender();
}

window.setHistoryViewMode = setHistoryViewMode;
window.setHistoryDateFilter = setHistoryDateFilter;
window.setHistoryCustomDates = setHistoryCustomDates;

window.setRepairMode = setRepairMode;
window.setGridCols = setGridCols;
window.setClientMode = setClientMode;
window.viewClientInvoice = viewClientInvoice;
window.setSchemesTab = setSchemesTab;
window.setSchemeBrand = setSchemeBrand;
window.setScheme = setScheme;
window.toggleSchemeDetails = toggleSchemeDetails;
window.setMarketplaceTab = setMarketplaceTab;
window.setMarketplaceViewMode = setMarketplaceViewMode;

export function setMyStoreTab(tab) {
    state.myStoreTab = tab;
    state.myStoreViewMode = 'list';
    triggerRender();
}

export function setMyStoreViewMode(mode) {
    state.myStoreViewMode = mode;
    triggerRender();
}

export function setActiveStoreOrder(orderId) {
    state.activeStoreOrderId = orderId;
    state.myStoreViewMode = 'order-detail';
    triggerRender();
}

export function setActiveListing(listingId) {
    state.activeListingId = listingId;
    triggerRender();
}

window.setMyStoreTab = setMyStoreTab;
window.setMyStoreViewMode = setMyStoreViewMode;
window.setActiveStoreOrder = setActiveStoreOrder;
window.setActiveListing = setActiveListing;
window.setRetailer = setRetailer;
window.clearRetailer = clearRetailer;
window.getRetailerId = getRetailerId;
window.setLoginStatus = setLoginStatus;
window.setAuthMode = setAuthMode;
window.setRegistrationStep = setRegistrationStep;
window.setInquiryViewMode = setInquiryViewMode;
window.setActiveInquiry = setActiveInquiry;
window.setPreBookingViewMode = setPreBookingViewMode;
window.setActiveCampaign = setActiveCampaign;
window.setAutomationViewMode = setAutomationViewMode;
window.setActiveAutomation = setActiveAutomation;

// Groups functions
export function setGroupViewMode(mode) {
    state.groupViewMode = mode;
    triggerRender();
}

export function setSelectedGroup(id) {
    state.selectedGroupId = id;
    triggerRender();
}

window.setGroupViewMode = setGroupViewMode;
window.setSelectedGroup = setSelectedGroup;

// Push notifications toggle
export function togglePushNotifications() {
    const current = window._pushNotificationsEnabled !== false;
    window._pushNotificationsEnabled = !current;
    localStorage.setItem('retaileros_push_notifications', !current ? 'true' : 'false');
    triggerRender();
}
window.togglePushNotifications = togglePushNotifications;
