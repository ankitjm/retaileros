import { state } from '../../state.js';

export function renderLauncherFooter(isMob) {
    return `
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${state.isLoggedIn ? `
                <div class="card p-3 flex items-center justify-between border-slate-200/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 shadow-inner">AM</div>
                        <div class="text-left ${!isMob ? 'hidden xl:block' : ''}">
                            <p class="text-xs font-black text-slate-900">Arjun M.</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Apple Store - Mumbai Central</p>
                        </div>
                    </div>
                    <button onclick="setLoginStatus(false)" class="flex items-center gap-2 group p-1.5 hover:bg-slate-50 rounded-lg transition-all" title="Logout">
                            <span class="material-icons-outlined text-lg text-slate-900 group-hover:text-slate-400 transition-all">logout</span>
                    </button>
                </div>
            ` : `
                ${state.authMode === 'login' ? `
                    <button onclick="setAuthMode('register')" class="w-full h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center gap-4 group hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">
                            <span class="text-[10px] font-black uppercase tracking-widest">Register New Store</span>
                            <span class="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button onclick="setAuthMode('login')" class="w-full mt-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-950 transition-colors">Already have an ID? Login</button>
                ` : `
                    <button onclick="setAuthMode('login')" class="w-full h-14 border-2 border-slate-950 text-slate-950 rounded-2xl flex items-center justify-center gap-4 group hover:bg-slate-50 transition-all">
                            <span class="text-[10px] font-black uppercase tracking-widest">Back to Login</span>
                            <span class="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform rotate-180">arrow_forward</span>
                    </button>
                `}
            `}
        </footer>
    `;
}
