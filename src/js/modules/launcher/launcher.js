import { state } from '../../state.js';
import { renderAuth } from '../auth/index.js';
import { renderAppsGrid } from './apps-grid.js';
import { renderLauncherFooter } from './footer.js';

export function renderLauncher(mode) {
    const isMob = mode === 'mobile';

    return `
        <div class="flex flex-col min-h-full w-full">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                     <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                        <div class="text-left">
                            <h1 class="text-xl font-black tracking-tighter text-slate-900">RetailerOS</h1>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">App Launcher</p>
                        </div>
                     </div>
                     ${!isMob ? '' : `
                     <button class="p-2 text-slate-400 hover:text-slate-900">
                        <span class="material-symbols-outlined text-xl">search</span>
                     </button>`}
                </div>
            </header>

            <div class="flex-1 px-6 relative pb-4 overflow-y-auto custom-scrollbar">
                ${state.isLoggedIn ? `
                    ${renderAppsGrid(isMob)}

                    ${isMob ? `
                    <!-- Mobile Only News Ticker -->
                    <div class="news-ticker-container mt-6">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-6">
                                <span class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div> TELECOM: 5G rollout reaches 92% urban coverage</span>
                            </span>
                        </div>
                    </div>` : ''}
                ` : `
                    <!-- Auth View (Login/Register) when logged out -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${renderAuth()}
                    </div>
                `}
            </div>

            ${renderLauncherFooter(isMob)}
        </div>
    `;
}
