import { db } from '../../utils/db.js';

export function renderSettingsTheme() {
    const cache = window.getCache();
    const s = cache.retailerSettings?.theme || {};
    const settings = {
        display_mode: s.display_mode ?? localStorage.getItem('retaileros_theme') ?? 'light',
        accent_color: s.accent_color ?? localStorage.getItem('retaileros_accent') ?? 'slate',
        layout_density: s.layout_density ?? localStorage.getItem('retaileros_density') ?? 'comfortable',
        font_size: s.font_size ?? parseInt(localStorage.getItem('retaileros_font_size') || '100'),
        sidebar_collapsed: s.sidebar_collapsed ?? false,
        show_app_labels: s.show_app_labels ?? true,
        animations_enabled: s.animations_enabled ?? (localStorage.getItem('retaileros_animations') !== 'false'),
    };

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

    // Custom save for theme — dual writes to localStorage + DB
    window.saveThemeSettings = async function() {
        const container = document.querySelector('[data-settings-category="theme"]');
        if (!container) return;

        const data = {};
        // Collect hidden inputs for button-group values
        container.querySelectorAll('input[type="hidden"][data-field], input[type="text"][data-field]').forEach(el => {
            data[el.dataset.field] = el.value;
        });
        // Collect range
        container.querySelectorAll('input[type="range"][data-field]').forEach(el => {
            data[el.dataset.field] = Number(el.value);
        });
        // Collect checkboxes
        container.querySelectorAll('input[type="checkbox"][data-field]').forEach(el => {
            data[el.dataset.field] = el.checked;
        });

        // Write to localStorage for instant access
        if (data.display_mode) localStorage.setItem('retaileros_theme', data.display_mode);
        if (data.accent_color) localStorage.setItem('retaileros_accent', data.accent_color);
        if (data.layout_density) localStorage.setItem('retaileros_density', data.layout_density);
        if (data.font_size) localStorage.setItem('retaileros_font_size', data.font_size);
        if (data.animations_enabled !== undefined) localStorage.setItem('retaileros_animations', data.animations_enabled);
        // Apply theme live
        if (window.applyTheme) window.applyTheme();

        // Write to DB for cross-device sync
        try {
            await db.settings.save('theme', data);
            if (!window._db_cache.retailerSettings) window._db_cache.retailerSettings = {};
            window._db_cache.retailerSettings.theme = data;
            if (window.toast) window.toast.success('Theme saved');
        } catch (err) {
            console.error('Failed to save theme:', err);
            if (window.toast) window.toast.error('Failed to save theme');
        }
    };

    // Helper for button-group selection
    window._selectThemeOption = function(field, value) {
        const input = document.querySelector(`[data-field="${field}"]`);
        if (input) input.value = value;
        // Update visual state
        const group = input?.closest('.grid, .space-y-3');
        if (group) {
            group.querySelectorAll('[data-option-btn]').forEach(btn => {
                const isActive = btn.dataset.optionValue === value;
                if (field === 'accent_color') {
                    // Accent buttons have different styling
                    btn.className = btn.className.replace(/bg-slate-50 ring-2 ring-\w+-\d+/g, '').replace('hover:bg-slate-50', '');
                    if (isActive) btn.classList.add('bg-slate-50');
                    else btn.classList.add('hover:bg-slate-50');
                } else {
                    btn.classList.toggle('border-slate-900', isActive);
                    btn.classList.toggle('bg-slate-50', isActive);
                    btn.classList.toggle('ring-1', isActive);
                    btn.classList.toggle('ring-slate-900', isActive);
                    btn.classList.toggle('hover:border-slate-300', !isActive);
                }
            });
        }
    };

    return `
        <div data-settings-category="theme" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                <input type="hidden" data-field="display_mode" value="${settings.display_mode}">
                <input type="hidden" data-field="accent_color" value="${settings.accent_color}">
                <input type="hidden" data-field="layout_density" value="${settings.layout_density}">

                <!-- Mode -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Mode
                    </p>
                    <div class="grid grid-cols-3 gap-3 text-left">
                        ${[
                            { name: 'Light', key: 'light', icon: 'light_mode', desc: 'Clean white interface' },
                            { name: 'Dark', key: 'dark', icon: 'dark_mode', desc: 'Easy on the eyes' },
                            { name: 'System', key: 'system', icon: 'settings_brightness', desc: 'Match device setting' },
                        ].map(t => `
                            <button data-option-btn data-option-value="${t.key}" onclick="window._selectThemeOption('display_mode','${t.key}')" class="card p-4 text-center transition-all ${settings.display_mode === t.key ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <span class="material-icons-outlined text-2xl ${settings.display_mode === t.key ? 'text-slate-900' : 'text-slate-400'} mb-2">${t.icon}</span>
                                <p class="text-[10px] font-black text-slate-900">${t.name}</p>
                                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${t.desc}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Accent Color -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Accent Color
                    </p>
                    <div class="grid grid-cols-4 gap-3 text-left">
                        ${accents.map(a => `
                            <button data-option-btn data-option-value="${a.key}" onclick="window._selectThemeOption('accent_color','${a.key}')" class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${settings.accent_color === a.key ? 'bg-slate-50 ring-2 ' + a.ring : 'hover:bg-slate-50'}">
                                <div class="w-8 h-8 ${a.bg} rounded-full ${settings.accent_color === a.key ? 'ring-2 ring-offset-2 ' + a.ring : ''}"></div>
                                <span class="text-[8px] font-black text-slate-600 uppercase tracking-widest">${a.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Layout Density -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Layout Density
                    </p>
                    <div class="space-y-3 text-left">
                        ${[
                            { name: 'Compact', key: 'compact', desc: 'Smaller spacing, more content visible. Best for desktop.', icon: 'density_small' },
                            { name: 'Comfortable', key: 'comfortable', desc: 'Balanced spacing for readability. Default experience.', icon: 'density_medium' },
                            { name: 'Spacious', key: 'spacious', desc: 'Extra breathing room. Best for touch devices.', icon: 'density_large' },
                        ].map(d => `
                            <button data-option-btn data-option-value="${d.key}" onclick="window._selectThemeOption('layout_density','${d.key}')" class="card p-4 flex items-center gap-4 text-left w-full transition-all ${settings.layout_density === d.key ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">${d.icon}</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${d.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${d.desc}</p>
                                </div>
                                ${settings.layout_density === d.key ? '<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Font Size -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Font Size
                    </p>
                    <div class="card p-5 text-left">
                        <div class="flex items-center justify-between mb-3 text-left">
                            <span class="text-xs font-bold text-slate-400">A</span>
                            <span class="text-xl font-bold text-slate-400">A</span>
                        </div>
                        <input type="range" data-field="font_size" min="80" max="120" value="${settings.font_size}" class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900">
                        <p class="text-[9px] font-bold text-slate-400 text-center mt-2">${settings.font_size}% ${settings.font_size === 100 ? '(Default)' : ''}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sidebar
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Collapsed by Default</p>
                                <p class="text-[9px] font-bold text-slate-400">Start with minimized sidebar</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="sidebar_collapsed" class="sr-only peer" ${settings.sidebar_collapsed ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show App Labels</p>
                                <p class="text-[9px] font-bold text-slate-400">Display text labels under sidebar icons</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_app_labels" class="sr-only peer" ${settings.show_app_labels ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
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
                            <input type="checkbox" data-field="animations_enabled" class="sr-only peer" ${settings.animations_enabled ? 'checked' : ''}>
                            <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveThemeSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    `;
}
