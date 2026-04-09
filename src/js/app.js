import { state, registerRender, triggerRender, setAuthMode } from './state.js';
import { renderLauncher } from './modules/launcher/index.js';
import { renderSales, renderHistory, renderReceiptPreview } from './modules/sales/index.js';
import { renderClients } from './modules/clients/index.js';
import { renderAddClient } from './modules/clients/add-client.js';
import { renderReports } from './modules/reports/index.js';
import { renderRepairs } from './modules/repairs/index.js';

import { renderMarketing } from './modules/marketing/index.js';
import { renderPromoters } from './modules/promoters/index.js';
import { renderInventory } from './modules/inventory/index.js';
import { renderSettings } from './modules/settings/index.js';
import { renderSchemes } from './modules/schemes/index.js';
import { renderMarketplace } from './modules/marketplace/index.js';
import { renderAuth, renderRegister } from './modules/auth/index.js';
import { renderInquiries } from './modules/inquiries/index.js';
import { renderPreBooking } from './modules/prebooking/index.js';
import { renderAutomation } from './modules/automation/index.js';
import { renderMyStore } from './modules/mystore/index.js';
import { renderNotifications } from './modules/notifications/index.js';
import { initRouter, syncStateToUrl } from './router.js';
import { syncData } from './utils/sync.js';
// Initialize WATI WhatsApp integration
import './utils/wati.js';

// Initialize toast notification system
import './utils/toast.js';

// Initialize theme system
import './utils/theme.js';

// --- Router / Layout Logic ---

function renderAppPrimary() {
    if (state.currentApp === 'sales') return state.currentTab === 'new-sale' ? renderSales() : renderHistory();
    if (state.currentApp === 'clients') return renderClients('desktop-primary');
    if (state.currentApp === 'reports') return renderReports('desktop-primary');
    if (state.currentApp === 'repairs') return renderRepairs('desktop-primary');
    if (state.currentApp === 'marketing') return renderMarketing('desktop-primary');
    if (state.currentApp === 'promoters') return renderPromoters('desktop-primary');
    if (state.currentApp === 'inventory') return renderInventory('desktop-primary');
    if (state.currentApp === 'settings') return renderSettings('desktop-primary');
    if (state.currentApp === 'schemes') return renderSchemes('desktop-primary');
    if (state.currentApp === 'marketplace') return renderMarketplace('desktop-primary');
    if (state.currentApp === 'inquiries') return renderInquiries('desktop-primary');
    if (state.currentApp === 'prebooking') return renderPreBooking('desktop-primary');
    if (state.currentApp === 'automation') return renderAutomation('desktop-primary');
    if (state.currentApp === 'mystore') return renderMyStore('desktop-primary');
    if (state.currentApp === 'notifications') return renderNotifications('desktop-primary');

    return `<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>`;
}

function renderAppSecondary() {
    if (state.currentApp === 'sales') {
        if (state.salesMode === 'add-customer') return renderAddClient('desktop');
        return renderReceiptPreview();
    }
    if (state.currentApp === 'clients') return renderClients('desktop-secondary');
    if (state.currentApp === 'reports') return renderReports('desktop-secondary');
    if (state.currentApp === 'repairs') return renderRepairs('desktop-secondary');
    if (state.currentApp === 'marketing') return renderMarketing('desktop-secondary');
    if (state.currentApp === 'promoters') return renderPromoters('desktop-secondary');
    if (state.currentApp === 'inventory') return renderInventory('desktop-secondary');
    if (state.currentApp === 'settings') return renderSettings('desktop-secondary');
    if (state.currentApp === 'schemes') return renderSchemes('desktop-secondary');
    if (state.currentApp === 'marketplace') return renderMarketplace('desktop-secondary');
    if (state.currentApp === 'inquiries') return renderInquiries('desktop-secondary');
    if (state.currentApp === 'prebooking') return renderPreBooking('desktop-secondary');
    if (state.currentApp === 'automation') return renderAutomation('desktop-secondary');
    if (state.currentApp === 'mystore') return renderMyStore('desktop-secondary');
    if (state.currentApp === 'notifications') return renderNotifications('desktop-secondary');

    return `<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>`;
}

function renderSidebar() {
    return renderLauncher('desktop');
}

function renderDesktop() {
    // Desktop: 3 Columns with User Defined Ratios: 25% Left, 30% Right, Rest Center
    return `
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${renderSidebar()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${!state.isLoggedIn ?
            (state.authMode === 'register' ? renderRegister('desktop-primary') : `<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>`)
            : (state.currentApp === 'launcher' ?
                '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>'
                : renderAppPrimary())}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${!state.isLoggedIn ?
            (state.authMode === 'register' ? renderRegister('desktop-secondary') : `<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>`)
            : (state.currentApp === 'launcher' ?
                '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>'
                : renderAppSecondary())}
            </div>
        </div>
    `;
}

function renderMobileContent() {
    // Shared mobile-style content rendering for mobile and tablet right column
    // Sales app has special handling
    if (state.currentApp === 'sales') {
        const hasCartItems = window.getActiveCart && window.getActiveCart().length > 0;
        // Only show receipt preview for history tab (new-sale has its own checkout bar)
        const showHistoryPreview = state.currentTab === 'history' && state.salesHistoryId;

        if (state.showMobileReceipt && showHistoryPreview) {
            return `
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 pb-20 bg-slate-50/50">
                        ${renderReceiptPreview()}
                    </div>
                </div>
            `;
        }

        const content = state.currentTab === 'new-sale' ? renderSales() : renderHistory();
        const stickyFooter = showHistoryPreview ? `
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        ` : '';

        return `
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${content}
                ${showHistoryPreview ? '<div class="h-28 shrink-0 w-full"></div>' : ''}
            </div>
            ${stickyFooter}
        `;
    }

    // Generic mobile rendering for all other apps
    let content = '';
    if (state.currentApp === 'clients') content = renderClients('mobile');
    else if (state.currentApp === 'reports') content = renderReports('mobile');
    else if (state.currentApp === 'repairs') content = renderRepairs('mobile');
    else if (state.currentApp === 'marketing') content = renderMarketing('mobile');
    else if (state.currentApp === 'promoters') content = renderPromoters('mobile');
    else if (state.currentApp === 'inventory') content = renderInventory('mobile');
    else if (state.currentApp === 'settings') content = renderSettings('mobile');
    else if (state.currentApp === 'schemes') content = renderSchemes('mobile');
    else if (state.currentApp === 'marketplace') content = renderMarketplace('mobile');
    else if (state.currentApp === 'inquiries') content = renderInquiries('mobile');
    else if (state.currentApp === 'prebooking') content = renderPreBooking('mobile');
    else if (state.currentApp === 'automation') content = renderAutomation('mobile');
    else if (state.currentApp === 'mystore') content = renderMyStore('mobile');
    else if (state.currentApp === 'notifications') content = renderNotifications('mobile');
    else return `<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">App Module Not Found</p></div></div>`;

    return `
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${content}
        </div>
    `;
}

function renderTablet() {
    // Tablet: 2 Columns — Fixed sidebar + mobile-style content
    return `
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar Menu (300px fixed) -->
            <div class="w-[300px] shrink-0 h-full bg-white overflow-y-auto">
                ${renderSidebar()}
            </div>
            <!-- Col 2: Content (mobile-style stacked) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative">
                ${!state.isLoggedIn ?
                    `<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>`
                : (state.currentApp === 'launcher' ?
                    '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>'
                    : renderMobileContent())}
            </div>
        </div>
    `;
}

function renderMobile() {
    if (!state.isLoggedIn) {
        return `
            <div class="h-full w-full bg-white">
                ${renderAuth()}
            </div>
        `;
    }
    if (state.currentApp === 'launcher') return renderLauncher('mobile');

    return renderMobileContent();
}

function renderDemoBanner() {
    if (!window._isDemoMode) return '';
    return `
        <div id="demo-banner" style="position:fixed;top:0;left:0;right:0;z-index:9999;background:#1e293b;color:#f8fafc;padding:10px 16px;display:flex;align-items:center;justify-between;gap:12px;font-family:'Plus Jakarta Sans',sans-serif;">
            <div style="display:flex;align-items:center;gap:8px;min-width:0;">
                <span class="material-icons-outlined" style="font-size:16px;color:#fbbf24;flex-shrink:0;">preview</span>
                <p style="font-size:11px;font-weight:700;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Demo Mode — This is a sandbox with sample data.</p>
            </div>
            <button onclick="window._startRegistrationFromDemo()" style="background:#f8fafc;color:#1e293b;border:none;border-radius:8px;padding:6px 14px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;white-space:nowrap;flex-shrink:0;">
                Sign up for your own store →
            </button>
        </div>
        <div style="height:42px;"></div>
    `;
}

window._startRegistrationFromDemo = function() {
    window._isDemoMode = false;
    window._loginOTPMode = false;
    window._wizardData = {};
    // Clear demo session
    localStorage.removeItem('retaileros_session_token');
    localStorage.removeItem('retaileros_retailer_id');
    localStorage.removeItem('retaileros_retailer_code');
    localStorage.removeItem('retaileros_retailer_name');
    localStorage.removeItem('retaileros_logged_in');
    state.isLoggedIn = false;
    state.authMode = 'register';
    state.registrationStep = 1;
    triggerRender();
};

export function render() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    try {
        const width = window.innerWidth;
        let content = '';

        if (width < 768) {
            content = renderMobile();
        } else if (width >= 768 && width < 1024) {
            content = renderTablet();
        } else {
            content = renderDesktop();
        }

        appContainer.innerHTML = renderDemoBanner() + content;
    } catch (e) {
        console.error(e);
        appContainer.innerHTML = `<div class="p-4 text-slate-500 font-bold">Error: ${e.message}<br><small>${e.stack}</small></div>`;
    }
}

// Partial render function for auth content only (prevents full page reload)
export function updateAuthContent() {
    const width = window.innerWidth;

    if (width < 768) {
        // Mobile: Update entire container (it's a single column)
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = renderMobile();
        }
    } else {
        // Desktop/Tablet: Only update the auth columns (not sidebar)
        const primaryCol = document.querySelector('.flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10')
                        || document.querySelector('.flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative');
        const secondaryCol = document.querySelector('.w-\\[30\\%\\].shrink-0.bg-slate-50\\/50.h-full.overflow-hidden.flex.flex-col.relative.dot-grid.border-l.border-slate-200');

        if (primaryCol) {
            primaryCol.innerHTML = state.authMode === 'register'
                ? renderRegister('desktop-primary')
                : `<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>`;
        }

        if (secondaryCol && width >= 1024) {
            secondaryCol.innerHTML = state.authMode === 'register'
                ? renderRegister('desktop-secondary')
                : `<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>`;
        }
    }
}

// Make updateAuthContent available globally
window.updateAuthContent = updateAuthContent;

// Register listeners
registerRender(render);
registerRender(syncStateToUrl);

// Initial Setup
initRouter();

// Register resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth !== state.viewportWidth) {
        state.viewportWidth = window.innerWidth;
        state.gridCols = window.innerWidth < 768 ? 4 : 3;
        render();
    }
});

// Handle URL parameters: ?demo=1 and ?wizard=1
async function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);

    // ?wizard=1 — landing page "Get Started" CTA
    if (params.get('wizard') === '1' && !state.isLoggedIn) {
        window._loginOTPMode = false;
        window._wizardData = {};
        state.authMode = 'register';
        state.registrationStep = 1;
        // Clean URL without reloading
        const url = new URL(window.location.href);
        url.searchParams.delete('wizard');
        window.history.replaceState(null, '', url.toString());
        return;
    }

    // ?demo=1 — auto-login to sandbox demo account
    if (params.get('demo') === '1' && !state.isLoggedIn) {
        try {
            const response = await fetch((window._apiBase || '') + '/api/auth/demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();

            if (response.ok && data.token) {
                localStorage.setItem('retaileros_session_token', data.token);
                localStorage.setItem('retaileros_retailer_id', data.retailer_id);
                localStorage.setItem('retaileros_retailer_code', data.retailer_code || '');
                localStorage.setItem('retaileros_retailer_name', data.retailer_name || '');
                localStorage.setItem('retaileros_logged_in', 'true');

                window._isDemoMode = true;
                state.isLoggedIn = true;
                state.retailerId = data.retailer_id;
                state.retailerCode = data.retailer_code || '';
                state.retailerName = data.retailer_name || '';
                state.currentApp = window.innerWidth < 768 ? 'launcher' : 'sales';

                // Clean URL
                const url = new URL(window.location.href);
                url.searchParams.delete('demo');
                window.history.replaceState(null, '', url.toString());
            } else {
                console.warn('[Demo] Could not auto-login:', data.error);
            }
        } catch (err) {
            console.warn('[Demo] Auto-login failed:', err.message);
        }
    }
}

// Load data, then handle URL params, then render
handleUrlParams().then(() => {
    if (state.isLoggedIn) {
        return syncData();
    }
}).then(() => {
    console.log('Initial setup complete');
    render();
}).catch(err => {
    console.error('Initial setup failed:', err);
    render();
});
