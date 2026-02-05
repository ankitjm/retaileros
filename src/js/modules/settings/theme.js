export function renderSettingsTheme() {
    const currentTheme = localStorage.getItem('retaileros_theme') || 'light';
    const currentAccent = localStorage.getItem('retaileros_accent') || 'slate';
    const currentDensity = localStorage.getItem('retaileros_density') || 'comfortable';

    const accents = [
        { name: 'Slate', key: 'slate', bg: 'bg-slate-900', ring: 'ring-slate-900' },
        { name: 'Indigo', key: 'indigo', bg: 'bg-indigo-600', ring: 'ring-indigo-600' },
        { name: 'Blue', key: 'blue', bg: 'bg-blue-600', ring: 'ring-blue-600' },
        { name: 'Emerald', key: 'emerald', bg: 'bg-emerald-600', ring: 'ring-emerald-600' },
        { name: 'Violet', key: 'violet', bg: 'bg-violet-600', ring: 'ring-violet-600' },
        { name: 'Rose', key: 'rose', bg: 'bg-rose-600', ring: 'ring-rose-600' },
        { name: 'Amber', key: 'amber', bg: 'bg-amber-600', ring: 'ring-amber-600' },
        { name: 'Teal', key: 'teal', bg: 'bg-teal-600', ring: 'ring-teal-600' },
    ];

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Theme</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Appearance & Display</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Mode -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Mode
                    </p>
                    <div class="grid grid-cols-3 gap-3 text-left">
                        ${[
                            { name: 'Light', key: 'light', icon: 'light_mode', desc: 'Clean white interface' },
                            { name: 'Dark', key: 'dark', icon: 'dark_mode', desc: 'Easy on the eyes' },
                            { name: 'System', key: 'system', icon: 'settings_brightness', desc: 'Match device setting' },
                        ].map(t => `
                            <button class="card p-4 text-center transition-all ${currentTheme === t.key ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <span class="material-icons-outlined text-2xl ${currentTheme === t.key ? 'text-slate-900' : 'text-slate-400'} mb-2">${t.icon}</span>
                                <p class="text-[10px] font-black text-slate-900">${t.name}</p>
                                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${t.desc}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Accent Color -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Accent Color
                    </p>
                    <div class="grid grid-cols-4 gap-3 text-left">
                        ${accents.map(a => `
                            <button class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${currentAccent === a.key ? 'bg-slate-50 ring-2 ' + a.ring : 'hover:bg-slate-50'}">
                                <div class="w-8 h-8 ${a.bg} rounded-full ${currentAccent === a.key ? 'ring-2 ring-offset-2 ' + a.ring : ''}"></div>
                                <span class="text-[8px] font-black text-slate-600 uppercase tracking-widest">${a.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Layout Density -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Layout Density
                    </p>
                    <div class="space-y-3 text-left">
                        ${[
                            { name: 'Compact', key: 'compact', desc: 'Smaller spacing, more content visible. Best for desktop.', icon: 'density_small' },
                            { name: 'Comfortable', key: 'comfortable', desc: 'Balanced spacing for readability. Default experience.', icon: 'density_medium' },
                            { name: 'Spacious', key: 'spacious', desc: 'Extra breathing room. Best for touch devices.', icon: 'density_large' },
                        ].map(d => `
                            <button class="card p-4 flex items-center gap-4 text-left w-full transition-all ${currentDensity === d.key ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">${d.icon}</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${d.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${d.desc}</p>
                                </div>
                                ${currentDensity === d.key ? '<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Font Size -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Font Size
                    </p>
                    <div class="card p-5 text-left">
                        <div class="flex items-center justify-between mb-3 text-left">
                            <span class="text-xs font-bold text-slate-400">A</span>
                            <span class="text-xl font-bold text-slate-400">A</span>
                        </div>
                        <input type="range" min="80" max="120" value="100" class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900">
                        <p class="text-[9px] font-bold text-slate-400 text-center mt-2">100% (Default)</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Sidebar
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Collapsed by Default</p>
                                <p class="text-[9px] font-bold text-slate-400">Start with minimized sidebar</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show App Labels</p>
                                <p class="text-[9px] font-bold text-slate-400">Display text labels under sidebar icons</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Animations -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Motion
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Animations</p>
                            <p class="text-[9px] font-bold text-slate-400">Enable slide & fade transitions</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Theme preferences saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    `;
}
