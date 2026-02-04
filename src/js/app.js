import { state, registerRender, triggerRender } from './state.js';
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
import { renderAuth } from './modules/auth/index.js';
import { renderInquiries } from './modules/inquiries/index.js';
import { renderPreBooking } from './modules/prebooking/index.js';
import { renderAutomation } from './modules/automation/index.js';
import { initRouter, syncStateToUrl } from './router.js';
import { syncData } from './utils/sync.js';

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
            `<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>`
            : (state.currentApp === 'launcher' ?
                '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>'
                : renderAppPrimary())}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${!state.isLoggedIn ?
            `<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>`
            : (state.currentApp === 'launcher' ?
                '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>'
                : renderAppSecondary())}
            </div>
        </div>
    `;
}

function renderTablet() {
    // 2 Columns for Tablet: Menu + Primary
    return `
        <div class="h-full grid grid-cols-2 divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar / App Menu -->
            <div class="col-span-1 h-full bg-white z-20 overflow-y-auto">
                ${renderSidebar()}
            </div>

            <!-- Col 2: Primary Content -->
            <div class="col-span-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${state.currentApp === 'launcher' ?
            '<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>'
            : renderAppPrimary()}
               
               <!-- Tablet Specific: Sticky Preview Button if Active -->
               ${(state.currentApp === 'sales' && (state.currentTab === 'new-sale' || (state.currentTab === 'history' && state.salesHistoryId))) ? `
                    <div class="absolute bottom-6 right-6 z-50">
                        <button onclick="toggleMobileReceipt(true)" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                            <span class="material-icons-outlined">receipt_long</span>
                        </button>
                    </div>
                    ${state.showMobileReceipt ? `
                        <div class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8">
                            <div class="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                                    <button onclick="toggleMobileReceipt(false)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white rounded-full shadow-sm"><span class="material-icons-outlined text-lg">close</span></button>
                                </div>
                                <div class="overflow-y-auto flex-1 p-8 bg-slate-50/50">
                                    ${renderReceiptPreview()}
                                </div>
                            </div>
                        </div>
                    ` : ''}
               ` : ''}
            </div>
        </div>
    `;
}

function renderMobile() {
    if (!state.isLoggedIn) return renderAuth();
    if (state.currentApp === 'launcher') return renderLauncher('mobile');

    // SALES APP MOBILE LOGIC
    if (state.currentApp === 'sales') {
        const showPreview = state.currentTab === 'new-sale' || (state.currentTab === 'history' && state.salesHistoryId);

        // 3. PREVIEW SCREEN (Full Screen replacement)
        if (state.showMobileReceipt && showPreview) {
            return `
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 bg-slate-50/50">
                        ${renderReceiptPreview()}
                    </div>
                    <div class="p-4 border-t border-slate-100 bg-white shrink-0">
                        <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">print</span> Print Receipt
                        </button>
                    </div>
                </div>
            `;
        }

        // 2. MAIN APP SCREEN (Sales Desk)
        const content = state.currentTab === 'new-sale' ? renderSales() : renderHistory();

        const stickyFooter = showPreview ? `
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        ` : '';

        // Wrap in full width/height flex container for correct scrolling and layout
        return `
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${content}
                ${showPreview ? '<div class="h-28 shrink-0 w-full"></div>' : ''} <!-- Spacer inside flex flow pushing content up -->
            </div>
            ${stickyFooter}
        `;
    }

    // GENERIC MOBILE WRAPPER for other apps to ensure full width/height
    let content = '';

    if (state.currentApp === 'clients') {
        content = renderClients('mobile');
    }
    else if (state.currentApp === 'reports') {
        content = renderReports('mobile');
    }
    else if (state.currentApp === 'repairs') {
        content = renderRepairs('mobile');
    }
    else if (state.currentApp === 'marketing') {
        content = renderMarketing('mobile');
    }
    else if (state.currentApp === 'promoters') {
        content = renderPromoters('mobile');
    }
    else if (state.currentApp === 'inventory') {
        content = renderInventory('mobile');
    }
    else if (state.currentApp === 'settings') {
        content = renderSettings('mobile');
    }
    else if (state.currentApp === 'schemes') {
        content = renderSchemes('mobile');
    }
    else if (state.currentApp === 'marketplace') {
        content = renderMarketplace('mobile');
    }
    else if (state.currentApp === 'inquiries') {
        content = renderInquiries('mobile');
    }
    else if (state.currentApp === 'prebooking') {
        content = renderPreBooking('mobile');
    }
    else if (state.currentApp === 'automation') {
        content = renderAutomation('mobile');
    }
    else {
        // Fallback or unknown app
        return renderLauncher('mobile');
    }

    // Return wrapped content
    return `
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${content}
        </div>
    `;
}

export function render() {
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    try {
        const width = window.innerWidth;

        if (width < 768) {
            appContainer.innerHTML = renderMobile();
        } else if (width >= 768 && width < 1024) {
            appContainer.innerHTML = renderTablet();
        } else {
            appContainer.innerHTML = renderDesktop();
        }
    } catch (e) {
        console.error(e);
        appContainer.innerHTML = `< div class="p-4 text-red-500 font-bold" > Error: ${e.message} <br><small>${e.stack}</small></div>`;
    }
}

// Register listeners
registerRender(render);
registerRender(syncStateToUrl);

// Initial Setup
initRouter();
syncData(); // Get live data from Turso

// Register resize handler
window.addEventListener('resize', () => {
    if (window.innerWidth !== state.viewportWidth) {
        state.viewportWidth = window.innerWidth;
        state.gridCols = window.innerWidth < 768 ? 4 : 3;
        render();
    }
});

render();
