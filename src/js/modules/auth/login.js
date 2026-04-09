export function renderLogin(mode) {
    const isMobile = mode === 'mobile';
    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-6 animate-slide-up">
            ${isMobile ? `
                <!-- Logo + Branding for mobile -->
                <div class="text-center mb-10">
                    <img src="/ros-logo.png" alt="ROS" class="h-12 object-contain mx-auto mb-4" style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Retail Operating System</p>
                </div>
            ` : `
                <!-- Header Section (Subtle for Sidebar) -->
                <div class="text-center mb-8">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Enterprise Authentication</p>
                </div>
            `}

            <!-- Login Content -->
            <div class="w-full max-w-sm space-y-8">
                <div>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Mobile Number or Store Code</p>
                    <div class="relative group">
                        <input type="text" id="login-identifier" placeholder="e.g. 9876543210 or ROS-20260206-0001" class="w-full h-14 pl-5 pr-12 bg-white border border-slate-100 rounded-2xl text-xs font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 transition-all shadow-sm">
                        <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">store</span>
                    </div>
                </div>

                <div id="login-error" class="hidden">
                    <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl">
                        <p class="text-[10px] font-bold text-slate-600" id="login-error-text"></p>
                    </div>
                </div>

                <div class="pt-4 space-y-3">
                    <button id="login-btn" onclick="window.loginWithCredentials()" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                        Authenticate
                    </button>
                    <button class="w-full py-4 bg-white border border-slate-200 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                         <span class="material-icons-outlined text-lg">qr_code_scanner</span> Scan Store QR
                    </button>
                </div>

                ${isMobile ? `
                    <div class="pt-2 space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="flex-1 h-px bg-slate-100"></div>
                            <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest">or</span>
                            <div class="flex-1 h-px bg-slate-100"></div>
                        </div>
                        <button onclick="window._loginOTPMode=false; window._wizardData={}; setAuthMode('register');" class="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 active:scale-95 transition-all">
                            <span class="material-icons-outlined text-sm">add_business</span>
                            Register New Store
                        </button>
                    </div>
                ` : ''}

                <div class="text-center">
                    <button class="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors">Forgot PIN?</button>
                </div>
            </div>

            <!-- Bottom Footnote -->
            <div class="mt-12 flex items-center gap-2 opacity-30">
                <span class="material-icons-outlined text-slate-400 text-sm">verified_user</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">End-to-end Encrypted</p>
            </div>

            ${isMobile ? `
                <p class="text-center text-[7px] font-bold text-slate-300 uppercase tracking-[0.15em] mt-6">A product of Khosha Systems</p>
            ` : ''}
        </div>
    `;
}

// Real login: mobile → OTP flow, store code → direct JWT login
window.loginWithCredentials = async function() {
    const input = document.getElementById('login-identifier');
    const identifier = input ? input.value.trim() : '';
    const errorDiv = document.getElementById('login-error');
    const errorText = document.getElementById('login-error-text');
    const btn = document.getElementById('login-btn');

    if (!identifier) {
        if (errorDiv && errorText) {
            errorText.textContent = 'Please enter your mobile number or store code.';
            errorDiv.classList.remove('hidden');
        }
        return;
    }

    if (errorDiv) errorDiv.classList.add('hidden');
    if (btn) { btn.disabled = true; btn.textContent = 'Authenticating…'; }

    try {
        // Mobile number — send OTP and go to OTP input step (step 3 of wizard)
        if (/^\d{10}$/.test(identifier)) {
            const response = await fetch((window._apiBase||'')+'/api/auth/otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobile: identifier })
            });
            const data = await response.json();

            if (!response.ok) {
                const msg = data.retryAfter
                    ? `Too many attempts. Please wait ${data.retryAfter}s.`
                    : (data.error || 'Failed to send OTP');
                if (errorText) errorText.textContent = msg;
                if (errorDiv) errorDiv.classList.remove('hidden');
                return;
            }

            // Set up OTP-only mode (existing user login, skip wizard steps)
            window._loginOTPMode = true;
            window._wizardData = { mobile: identifier };
            window._registrationMobile = identifier;

            window.setAuthMode('register');
            setTimeout(() => window.setRegistrationStep(3), 50);
            return;
        }

        // Store code — direct JWT login
        const response = await fetch((window._apiBase||'')+'/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ store_code: identifier })
        });

        const data = await response.json();

        if (!response.ok) {
            if (errorText) errorText.textContent = data.error || 'Invalid store code.';
            if (errorDiv) errorDiv.classList.remove('hidden');
            return;
        }

        // Store session
        localStorage.setItem('retaileros_session_token', data.token);
        localStorage.setItem('retaileros_retailer_id', data.retailer_id);
        localStorage.setItem('retaileros_retailer_code', data.retailer_code || '');
        localStorage.setItem('retaileros_retailer_name', data.retailer_name || '');
        localStorage.setItem('retaileros_logged_in', 'true');

        window.setRetailer(data.retailer_id, data.retailer_code, data.retailer_name);

        const { syncData } = await import('../../utils/sync.js');
        await syncData();

        window.setLoginStatus(true);

    } catch (error) {
        console.error('Login failed:', error);
        if (errorText) errorText.textContent = 'Network error. Please try again.';
        if (errorDiv) errorDiv.classList.remove('hidden');
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = 'Authenticate'; }
    }
};
