import { state } from '../../state.js';
import { renderAuth, renderLogin } from '../auth/index.js';
import { renderAppsGrid } from './apps-grid.js';
import { renderLauncherFooter } from './footer.js';

export function renderLauncher(mode) {
    const isMob = mode === 'mobile';

    return `
        <div class="flex flex-col min-h-full w-full">
            <header class="px-5 sm:px-8 pt-5 sm:pt-8 pb-3 shrink-0">
                <div class="flex items-center justify-between">
                     <div class="flex items-center gap-3.5">
                        <img src="/ros-logo.jpeg" alt="RetailerOS" class="w-14 h-14 object-contain">
                        <div class="text-left">
                            ${state.isLoggedIn && state.retailerName ? `<p class="text-xs font-black text-slate-900 tracking-tight leading-tight">${state.retailerName}</p>` : ''}
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] ${state.isLoggedIn && state.retailerName ? 'mt-0.5' : ''}">${new Date().toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })} · ${new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                     </div>
                     ${!isMob ? '' : `
                     <button class="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
                        <span class="material-symbols-outlined text-lg text-slate-600">search</span>
                     </button>`}
                </div>
            </header>

            <div class="flex-1 px-6 relative pb-4 overflow-y-auto custom-scrollbar">
                ${state.isLoggedIn ? `
                    ${renderAppsGrid(isMob)}

                    <!-- News Ticker -->
                    <div class="news-ticker-container mt-6">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-6">
                                <span class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></div> TELECOM: 5G rollout reaches 92% urban coverage</span>
                            </span>
                        </div>
                    </div>
                ` : `
                    <!-- Auth View (Login only in desktop, full auth in mobile) -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${isMob ? renderAuth() : renderLogin()}
                    </div>
                `}
            </div>

            ${renderLauncherFooter(isMob)}
        </div>
    `;
}
