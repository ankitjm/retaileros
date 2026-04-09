import { state } from '../../state.js';

const STORE_TYPES = [
    'General Store',
    'Grocery & FMCG',
    'Electronics',
    'Clothing & Apparel',
    'Pharmacy',
    'Hardware & Tools',
    'Stationery',
    'Mobile & Accessories',
    'Furniture & Home',
    'Other',
];

// Render registration for different layouts
export function renderRegister(layout = 'mobile') {
    if (layout === 'desktop-primary') {
        return renderRegisterPrimary();
    }
    if (layout === 'desktop-secondary') {
        return renderRegisterSecondary();
    }
    return renderRegisterMobile();
}

// Desktop primary column
function renderRegisterPrimary() {
    const step = state.registrationStep;

    if (step === 3) {
        return `
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
                <div class="animate-slide-up max-w-md">
                    <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-icons-outlined text-slate-900 text-5xl">verified</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">Verify Your Number</h2>
                    <p class="text-sm text-slate-500 mb-2">Enter the OTP sent to your WhatsApp.</p>
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Completing setup in the right panel →</p>
                </div>
                <div class="absolute bottom-6 flex items-center gap-2">
                    <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure Verification</p>
                </div>
            </div>
        `;
    }

    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${renderStepContent(step)}
            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure Registration</p>
            </div>
        </div>
    `;
}

// Desktop secondary column
function renderRegisterSecondary() {
    const step = state.registrationStep;

    if (step < 3) {
        return `
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 dot-grid relative overflow-hidden text-center">
                <div class="opacity-40 text-center">
                    <div class="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                        <span class="material-icons-outlined text-slate-400 text-4xl">store</span>
                    </div>
                    <h2 class="text-xl font-black text-slate-400 mb-2">Almost There</h2>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step ${step} of 3</p>
                    <div class="mt-6 flex justify-center gap-2">
                        ${[1,2,3].map(s => `<div class="h-1.5 ${s <= step ? 'w-6 bg-slate-500' : 'w-2 bg-slate-200'} rounded-full transition-all"></div>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Step 3: OTP panel on secondary
    return `
        <div class="h-full w-full flex flex-col p-8 bg-white relative overflow-y-auto custom-scrollbar">
            ${renderStepContent(3)}
        </div>
    `;
}

// Mobile full-screen view
function renderRegisterMobile() {
    const step = state.registrationStep;

    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-4 md:p-6 bg-white dot-grid relative overflow-y-auto">
            <!-- Progress dots -->
            <div class="flex gap-2 mb-6">
                ${[1,2,3].map(s => `<div class="h-1.5 ${s <= step ? 'w-6 bg-slate-900' : 'w-2 bg-slate-200'} rounded-full transition-all"></div>`).join('')}
            </div>
            <div class="w-full flex-1 flex items-center justify-center py-4">
                ${renderStepContent(step)}
            </div>
            <div class="flex items-center gap-2 pb-4">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure Registration</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 rounded-full mb-3"></div>
        </div>
    `;
}

// Shared step content
function renderStepContent(step) {
    if (step === 1) {
        const data = window._wizardData || {};
        return `
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                <div class="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center shadow-xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-2xl">store</span>
                </div>
                <h1 class="text-2xl font-black tracking-tighter text-slate-900 mb-1 text-center">Your Store</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center">Step 1 of 3</p>

                <div class="space-y-4">
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Store Name *</p>
                        <input
                            type="text"
                            id="wizard-store-name"
                            placeholder="e.g. Sharma Electronics"
                            value="${escapeAttr(data.store_name || '')}"
                            class="w-full h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                        >
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Store Type *</p>
                        <select
                            id="wizard-store-type"
                            class="w-full h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                        >
                            <option value="">Select type…</option>
                            ${STORE_TYPES.map(t => `<option value="${t}" ${data.store_type === t ? 'selected' : ''}>${t}</option>`).join('')}
                        </select>
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">GST Number <span class="normal-case font-medium text-slate-400">(optional)</span></p>
                        <input
                            type="text"
                            id="wizard-gst"
                            placeholder="e.g. 29AAAAA0000A1Z5"
                            value="${escapeAttr(data.gst_number || '')}"
                            maxlength="15"
                            class="w-full h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono text-slate-900 focus:border-slate-900 focus:outline-none transition-colors uppercase"
                        >
                    </div>
                </div>

                <div id="wizard-error-1" class="hidden mt-4 p-3 bg-red-50 border border-red-100 rounded-xl">
                    <p class="text-[11px] font-bold text-red-600" id="wizard-error-1-text"></p>
                </div>

                <button onclick="window.wizardStep1Next()" class="w-full mt-6 py-4 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                    Continue →
                </button>

                <p class="mt-5 text-center text-[10px] text-slate-400">
                    Already have a store?
                    <button onclick="setAuthMode('login')" class="text-slate-700 font-bold underline ml-1">Sign In</button>
                </p>
            </div>
        `;
    }

    if (step === 2) {
        const data = window._wizardData || {};
        return `
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                <header class="flex items-center justify-between mb-6 w-full">
                    <button onclick="window.setRegistrationStep(1)" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                    <div class="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">person</span>
                    </div>
                    <div class="w-10"></div>
                </header>

                <h1 class="text-2xl font-black tracking-tighter text-slate-900 mb-1">About You</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Step 2 of 3</p>

                <div class="space-y-4">
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Owner Name *</p>
                        <input
                            type="text"
                            id="wizard-owner-name"
                            placeholder="e.g. Ramesh Sharma"
                            value="${escapeAttr(data.owner_name || '')}"
                            class="w-full h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                        >
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Mobile Number *</p>
                        <div class="flex gap-2">
                            <div class="h-13 px-3 py-3.5 bg-slate-100 border border-slate-200 rounded-xl flex items-center gap-1.5 shrink-0">
                                <span class="text-sm font-black text-slate-700">+91</span>
                            </div>
                            <input
                                type="tel"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                maxlength="10"
                                id="wizard-mobile"
                                placeholder="98765 43210"
                                value="${escapeAttr(data.mobile || '')}"
                                class="flex-1 h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 tracking-wider focus:border-slate-900 focus:outline-none transition-colors"
                            >
                        </div>
                    </div>

                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Email <span class="normal-case font-medium text-slate-400">(optional)</span></p>
                        <input
                            type="email"
                            id="wizard-email"
                            placeholder="you@store.com"
                            value="${escapeAttr(data.email || '')}"
                            class="w-full h-13 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                        >
                    </div>
                </div>

                <div id="wizard-error-2" class="hidden mt-4 p-3 bg-red-50 border border-red-100 rounded-xl">
                    <p class="text-[11px] font-bold text-red-600" id="wizard-error-2-text"></p>
                </div>

                <button onclick="window.wizardStep2Next()" id="wizard-step2-btn" class="w-full mt-6 py-4 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                    Send OTP →
                </button>
            </div>
        `;
    }

    if (step === 3) {
        const data = window._wizardData || {};
        const isLoginOtp = window._loginOTPMode;
        const mobile = data.mobile || '';

        return `
            <div class="animate-slide-up w-full max-w-sm mx-auto px-4 md:px-0">
                <header class="flex items-center justify-between mb-8 w-full">
                    <button onclick="${isLoginOtp ? "setAuthMode('login')" : 'window.setRegistrationStep(2)'}" class="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform">
                        <span class="material-icons-outlined text-lg">arrow_back</span>
                    </button>
                    <div class="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">lock</span>
                    </div>
                    <div class="w-10"></div>
                </header>

                <h1 class="text-2xl font-black tracking-tighter text-slate-900 mb-2">Enter OTP</h1>
                <p class="text-xs text-slate-500 leading-relaxed mb-1">
                    We sent a 6-digit code to <span class="font-black text-slate-900">+91 ${mobile}</span>
                </p>
                <p class="text-[9px] font-bold text-slate-400 mb-8">Check your WhatsApp.</p>

                <div class="grid grid-cols-6 gap-2 mb-6" id="otp-container">
                    ${[0,1,2,3,4,5].map(i => `
                        <input
                            type="text"
                            inputmode="numeric"
                            pattern="[0-9]"
                            maxlength="1"
                            id="otp-${i}"
                            class="h-16 bg-white border-2 border-slate-100 rounded-xl text-center text-2xl font-black text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                            onkeydown="window.handleOtpKeydown(event, ${i})"
                            oninput="window.handleOtpInput(event, ${i})"
                            onpaste="window.handleOtpPaste(event)"
                        />`).join('')}
                </div>

                <p class="text-[10px] font-bold text-slate-400 text-center mb-8">
                    Didn't receive it?
                    <button onclick="window.resendOtp()" class="text-slate-600 underline ml-1">Resend OTP</button>
                </p>

                <div id="wizard-error-3" class="hidden mb-4 p-3 bg-red-50 border border-red-100 rounded-xl">
                    <p class="text-[11px] font-bold text-red-600" id="wizard-error-3-text"></p>
                </div>

                <button onclick="window.verifyOtp()" id="wizard-verify-btn" class="w-full py-4 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                    Verify & ${isLoginOtp ? 'Sign In' : 'Create Account'}
                </button>
            </div>
        `;
    }

    return '';
}

function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ─── OTP Input Handling ───────────────────────────────────────────

window.handleOtpInput = function(event, index) {
    const value = event.target.value;
    if (value && !/^\d$/.test(value)) {
        event.target.value = '';
        return;
    }
    if (value && index < 5) {
        const next = document.getElementById(`otp-${index + 1}`);
        if (next) next.focus();
    }
};

window.handleOtpKeydown = function(event, index) {
    if (event.key === 'Backspace') {
        const cur = document.getElementById(`otp-${index}`);
        if (!cur.value && index > 0) {
            const prev = document.getElementById(`otp-${index - 1}`);
            if (prev) { prev.focus(); prev.select(); }
        }
    } else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        document.getElementById(`otp-${index - 1}`)?.focus();
    } else if (event.key === 'ArrowRight' && index < 5) {
        event.preventDefault();
        document.getElementById(`otp-${index + 1}`)?.focus();
    } else if (event.key === 'Enter') {
        event.preventDefault();
        window.verifyOtp();
    }
};

window.handleOtpPaste = function(event) {
    event.preventDefault();
    const pasted = event.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pasted)) {
        for (let i = 0; i < 6; i++) {
            const inp = document.getElementById(`otp-${i}`);
            if (inp) inp.value = pasted[i];
        }
        document.getElementById('otp-5')?.focus();
    }
};

// ─── Wizard Step Handlers ──────────────────────────────────────────

window.wizardStep1Next = function() {
    const storeName = document.getElementById('wizard-store-name')?.value.trim() || '';
    const storeType = document.getElementById('wizard-store-type')?.value || '';
    const gst = document.getElementById('wizard-gst')?.value.trim().toUpperCase() || '';

    const errorDiv = document.getElementById('wizard-error-1');
    const errorText = document.getElementById('wizard-error-1-text');

    if (!storeName) {
        errorText.textContent = 'Please enter your store name.';
        errorDiv.classList.remove('hidden');
        return;
    }
    if (!storeType) {
        errorText.textContent = 'Please select a store type.';
        errorDiv.classList.remove('hidden');
        return;
    }

    errorDiv?.classList.add('hidden');

    window._wizardData = {
        ...(window._wizardData || {}),
        store_name: storeName,
        store_type: storeType,
        gst_number: gst,
    };
    window._loginOTPMode = false;
    window.setRegistrationStep(2);
};

window.wizardStep2Next = async function() {
    const ownerName = document.getElementById('wizard-owner-name')?.value.trim() || '';
    const mobile = document.getElementById('wizard-mobile')?.value.trim() || '';
    const email = document.getElementById('wizard-email')?.value.trim() || '';

    const errorDiv = document.getElementById('wizard-error-2');
    const errorText = document.getElementById('wizard-error-2-text');
    const btn = document.getElementById('wizard-step2-btn');

    if (!ownerName) {
        errorText.textContent = 'Please enter the owner name.';
        errorDiv.classList.remove('hidden');
        return;
    }
    if (!/^\d{10}$/.test(mobile)) {
        errorText.textContent = 'Please enter a valid 10-digit mobile number.';
        errorDiv.classList.remove('hidden');
        return;
    }

    errorDiv?.classList.add('hidden');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending OTP…'; }

    window._wizardData = {
        ...(window._wizardData || {}),
        owner_name: ownerName,
        mobile,
        email,
    };

    try {
        const response = await fetch((window._apiBase || '') + '/api/auth/otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile }),
        });
        const data = await response.json();

        if (!response.ok) {
            const msg = data.retryAfter
                ? `Too many attempts. Please wait ${data.retryAfter}s.`
                : (data.error || 'Failed to send OTP');
            errorText.textContent = msg;
            errorDiv.classList.remove('hidden');
            return;
        }

        window._registrationMobile = mobile;
        window._loginOTPMode = false;
        window.setRegistrationStep(3);
        setTimeout(() => document.getElementById('otp-0')?.focus(), 100);

    } catch (err) {
        console.error('OTP send failed:', err);
        errorText.textContent = 'Network error. Please check your connection.';
        errorDiv.classList.remove('hidden');
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = 'Send OTP →'; }
    }
};

window.verifyOtp = async function() {
    const otpValues = [];
    for (let i = 0; i < 6; i++) {
        const inp = document.getElementById(`otp-${i}`);
        if (inp) otpValues.push(inp.value);
    }
    const otp = otpValues.join('');

    const errorDiv = document.getElementById('wizard-error-3');
    const errorText = document.getElementById('wizard-error-3-text');
    const btn = document.getElementById('wizard-verify-btn');

    if (otp.length !== 6) {
        errorText.textContent = 'Please enter all 6 digits.';
        errorDiv.classList.remove('hidden');
        return;
    }

    const mobile = window._registrationMobile || window._wizardData?.mobile;
    if (!mobile) {
        errorText.textContent = 'Session expired. Please start again.';
        errorDiv.classList.remove('hidden');
        window.setRegistrationStep(window._loginOTPMode ? 1 : 2);
        return;
    }

    errorDiv?.classList.add('hidden');
    if (btn) { btn.disabled = true; btn.textContent = 'Verifying…'; }

    try {
        const wizardData = window._wizardData || {};
        const payload = {
            mobile,
            otp,
            // Pass wizard fields — backend ignores them for existing retailers
            store_name: wizardData.store_name || undefined,
            owner_name: wizardData.owner_name || undefined,
            email: wizardData.email || undefined,
            gst_number: wizardData.gst_number || undefined,
            store_type: wizardData.store_type || undefined,
        };

        const response = await fetch((window._apiBase || '') + '/api/auth/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const data = await response.json();

        if (!response.ok) {
            errorText.textContent = data.error || 'Invalid OTP. Please try again.';
            errorDiv.classList.remove('hidden');
            return;
        }

        // Store session
        localStorage.setItem('retaileros_session_token', data.token);
        localStorage.setItem('retaileros_retailer_id', data.retailer_id);
        localStorage.setItem('retaileros_retailer_code', data.retailer_code || '');
        localStorage.setItem('retaileros_retailer_name', data.retailer_name || '');
        localStorage.setItem('retaileros_logged_in', 'true');

        window.setRetailer(data.retailer_id, data.retailer_code, data.retailer_name);

        // Clean up wizard state
        delete window._wizardData;
        delete window._registrationMobile;
        delete window._loginOTPMode;

        const { syncData } = await import('../../utils/sync.js');
        await syncData();

        window.setLoginStatus(true);

    } catch (err) {
        console.error('OTP verify failed:', err);
        errorText.textContent = 'Network error. Please try again.';
        errorDiv.classList.remove('hidden');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = (window._loginOTPMode ? 'Verify & Sign In' : 'Verify & Create Account');
        }
    }
};

window.resendOtp = async function() {
    for (let i = 0; i < 6; i++) {
        const inp = document.getElementById(`otp-${i}`);
        if (inp) inp.value = '';
    }
    document.getElementById('otp-0')?.focus();

    const mobile = window._registrationMobile || window._wizardData?.mobile;
    if (!mobile) {
        window.setRegistrationStep(window._loginOTPMode ? 1 : 2);
        return;
    }

    try {
        const response = await fetch((window._apiBase || '') + '/api/auth/otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobile }),
        });
        const data = await response.json();

        if (!response.ok) {
            if (data.retryAfter) {
                alert(`Please wait ${data.retryAfter} seconds before requesting a new OTP.`);
            } else {
                alert(data.error || 'Failed to resend OTP.');
            }
            return;
        }

        if (window.toast) window.toast.success('OTP resent to your WhatsApp');
    } catch {
        alert('Network error. Please try again.');
    }
};

// Keep legacy finalizeRegistration for any code that calls it
window.finalizeRegistration = window.verifyOtp;
