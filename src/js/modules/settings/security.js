export function renderSettingsSecurity() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const cache = window.getCache();
    const s = cache.retailerSettings?.security || {};
    const settings = {
        otp_on_login: s.otp_on_login ?? true,
        email_verification: s.email_verification ?? false,
        auto_logout_timer: s.auto_logout_timer ?? '30 min',
        remember_device: s.remember_device ?? true,
    };

    const timerOptions = ['15 min', '30 min', '1 hour', '4 hours', 'Never'];

    return `
        <div data-settings-category="security" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-left">Security</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Access & Protection</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Store PIN -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Store PIN
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                <span class="material-icons-outlined text-slate-500">pin</span>
                            </div>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">4-Digit Access PIN</p>
                                <p class="text-[9px] font-bold text-slate-400">Last changed 30 days ago</p>
                            </div>
                        </div>
                        <button onclick="window.toast.info('PIN management coming soon')" class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all">Change</button>
                    </div>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Two-Factor Authentication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">verified_user</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">OTP on Login</p>
                                    <p class="text-[9px] font-bold text-slate-400">SMS to ${retailer.mobile_number || '••••••••••'}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="otp_on_login" class="sr-only peer" ${settings.otp_on_login ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">email</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Email Verification</p>
                                    <p class="text-[9px] font-bold text-slate-400">${retailer.email || 'Not configured'}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="email_verification" class="sr-only peer" ${settings.email_verification ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Session Management -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Session Management
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Logout Timer</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically logout after inactivity</p>
                            </div>
                            <select data-field="auto_logout_timer" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${timerOptions.map(o => `<option ${settings.auto_logout_timer === o ? 'selected' : ''}>${o}</option>`).join('')}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Remember Device</p>
                                <p class="text-[9px] font-bold text-slate-400">Skip 2FA on trusted devices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="remember_device" class="sr-only peer" ${settings.remember_device ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Active Devices -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Active Devices
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-white">computer</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">This Browser</p>
                                    <p class="text-[9px] font-bold text-slate-900">Active Now</p>
                                </div>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 uppercase">Current</span>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-400">smartphone</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Mobile App</p>
                                    <p class="text-[9px] font-bold text-slate-400">Last active 2 hours ago</p>
                                </div>
                            </div>
                            <button onclick="window.toast.info('Device revoked')" class="px-3 py-1.5 bg-slate-100 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">Revoke</button>
                        </div>
                    </div>
                </div>

                <!-- Login History -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Login History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[
                            { time: 'Today, 10:30 AM', device: 'Chrome / macOS', ip: '192.168.1.x', status: 'success' },
                            { time: 'Yesterday, 6:15 PM', device: 'Safari / iPhone', ip: '49.36.xx.xx', status: 'success' },
                            { time: 'Yesterday, 2:00 PM', device: 'Chrome / Windows', ip: '103.xx.xx.xx', status: 'failed' },
                            { time: '3 days ago', device: 'Chrome / macOS', ip: '192.168.1.x', status: 'success' },
                        ].map(l => `
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="text-left">
                                    <p class="text-[10px] font-bold text-slate-900">${l.device}</p>
                                    <p class="text-[8px] font-bold text-slate-400">${l.time} &middot; ${l.ip}</p>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${l.status === 'success' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}">${l.status}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('security')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Security Settings
                    </button>
                </div>
            </div>
        </div>
    `;
}
