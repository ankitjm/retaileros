import { state } from '../../state.js';

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

// Desktop primary column (steps 1 & 2)
function renderRegisterPrimary() {
    const step = state.registrationStep;

    // When step 3, show completion message in middle column
    if (step === 3) {
        return `
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
                <div class="animate-slide-up max-w-md">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-icons-outlined text-green-600 text-5xl">check_circle</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">Almost There!</h2>
                    <p class="text-sm text-slate-500 mb-8">Please review and confirm your store details in the right panel to complete registration.</p>

                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">done</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-green-700 uppercase">Mobile Verified</p>
                                <p class="text-xs text-green-600">+91 98765 43210</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">arrow_forward</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-blue-700 uppercase">Next Step</p>
                                <p class="text-xs text-blue-600">Confirm store details →</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-6 flex items-center gap-2">
                    <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                    <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure Encryption</p>
                </div>
            </div>
        `;
    }

    // Steps 1 & 2 show their content
    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${renderStepContent(step)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${step === 2 ? 'Verification' : 'Encryption'}</p>
            </div>
        </div>
    `;
}

// Desktop secondary/preview column (step 3 preview)
function renderRegisterSecondary() {
    const step = state.registrationStep;

    if (step < 3) {
        // Show preview of what's coming next
        return `
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 dot-grid relative overflow-hidden text-center">
                <div class="opacity-40 text-center">
                    <div class="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                        <span class="material-icons-outlined text-slate-400 text-4xl">store</span>
                    </div>
                    <h2 class="text-xl font-black text-slate-400 mb-2">Store Details</h2>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coming up next...</p>
                    <div class="mt-8 space-y-2">
                        ${['Store Name', 'Owner Details', 'GSTIN', 'Store Type'].map(item => `
                            <div class="h-12 bg-white/50 border border-slate-200 rounded-xl"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Show step 3 content
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
            <div class="w-full flex-1 flex items-center justify-center py-8">
                ${renderStepContent(step)}
            </div>

            <div class="flex items-center gap-2 pb-4">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${step === 2 ? 'Verification' : step === 3 ? 'Encryption' : 'Encryption'}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 rounded-full mb-3"></div>
        </div>
    `;
}

// Shared step content generator
function renderStepContent(step) {
    let stepContent = '';

    if (step === 1) {
        stepContent = `
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                 <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-3xl">terminal</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 mb-1">Registration</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 md:mb-12">RetailerOS Enterprise</p>

                <div class="card p-6 md:p-8 border-slate-100 shadow-xl text-left">
                    <p class="text-[9px] md:text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Enter Mobile Number</p>
                    <div class="flex items-center gap-2 mb-6 md:mb-8">
                         <div class="h-14 md:h-14 px-3 md:px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 shrink-0">
                            <div class="w-6 h-4 bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-sm"></div>
                            <span class="text-sm font-black text-slate-900">+91</span>
                         </div>
                         <input
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            maxlength="10"
                            id="mobile-input"
                            placeholder="00000 00000"
                            class="flex-1 h-14 px-4 md:px-5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black text-slate-900 tracking-wider focus:border-slate-900 focus:outline-none transition-colors">
                    </div>
                    <button onclick="window.requestOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                        Request OTP
                    </button>
                </div>

                <p class="mt-6 md:mt-8 px-4 md:px-12 text-[8px] font-medium text-slate-400 leading-relaxed text-center">By continuing, you agree to our <span class="text-slate-900 underline">Terms of Service</span> and <span class="text-slate-900 underline">Privacy Policy</span></p>
            </div>
        `;
    } else if (step === 2) {
        stepContent = `
            <div class="animate-slide-up w-full max-w-sm mx-auto px-4 md:px-0">
                 <header class="flex items-center justify-between mb-8 md:mb-12 w-full">
                    <button onclick="window.setRegistrationStep(1)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">terminal</span>
                    </div>
                    <div class="w-10 md:w-8"></div>
                </header>

                <div class="text-left w-full">
                    <h1 class="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2">Verify OTP</h1>
                    <p class="text-xs md:text-[11px] font-bold text-slate-400 leading-relaxed mb-6 md:mb-8">We've sent a 6-digit code to <span class="text-slate-950">+91 98765 43210</span></p>

                    <div class="grid grid-cols-6 gap-2 md:gap-2 mb-6 md:mb-8" id="otp-container">
                        ${[0, 1, 2, 3, 4, 5].map((idx) => `
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]"
                                maxlength="1"
                                id="otp-${idx}"
                                class="h-16 md:h-14 bg-white border-2 border-slate-100 rounded-xl text-center text-2xl md:text-xl font-black text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                                onkeydown="window.handleOtpKeydown(event, ${idx})"
                                oninput="window.handleOtpInput(event, ${idx})"
                                onpaste="window.handleOtpPaste(event)"
                            />`).join('')}
                    </div>

                    <p class="text-[10px] md:text-[10px] font-bold text-slate-400 text-center mb-8 md:mb-12">
                        Didn't receive the code? <button onclick="window.resendOtp()" class="text-indigo-500 underline">Resend Code</button>
                    </p>

                    <button onclick="window.verifyOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                        Verify & Proceed
                    </button>
                </div>
            </div>
        `;
    } else if (step === 3) {
        stepContent = `
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                <header class="flex items-center justify-between mb-6 md:mb-8">
                    <button onclick="window.setRegistrationStep(2)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                        <div class="w-4 h-1.5 bg-slate-950 rounded-full"></div>
                    </div>
                </header>

                <div class="text-center mb-6 md:mb-8">
                    <h1 class="text-xl md:text-2xl font-black tracking-tighter text-slate-900 mb-1">Confirm Store Details</h1>
                    <p class="text-[9px] font-bold text-slate-400 leading-relaxed px-2">Please verify the business information retrieved from your profile.</p>
                </div>

                <div class="space-y-3 mb-6 md:mb-8">
                    ${[
                { l: 'STORE NAME', v: 'Luxe Retail Collective' },
                { l: 'OWNER NAME', v: 'Alexander Sterling' },
                { l: 'MOBILE NUMBER', v: '+1 (555) 012-3456' },
                { l: 'GSTIN', v: '22AAAAA0000A1Z5' }
            ].map(item => `
                        <div class="card p-4 border-slate-100 flex items-center justify-between">
                            <div class="text-left flex-1 min-w-0">
                                <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">${item.l}</p>
                                <p class="text-[11px] md:text-[11px] font-black text-slate-900 truncate">${item.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center shrink-0 ml-3"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join('')}

                    <div class="card p-4 border-slate-100 flex items-center justify-between">
                        <div class="text-left flex-1">
                            <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">STORE TYPE</p>
                            <p class="text-[11px] font-black text-slate-900">Multi-store Operations</p>
                        </div>
                        <div class="w-10 h-5 bg-slate-950 rounded-full relative cursor-pointer shrink-0"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1"></div></div>
                    </div>
                </div>

                 <div class="card p-4 border-slate-100 mb-8 md:mb-12 flex items-center gap-3 md:gap-4 bg-slate-50/50 border-dashed">
                    <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-300 shrink-0">
                        <span class="material-icons-outlined">public</span>
                    </div>
                    <div class="flex-1 text-left min-w-0">
                        <p class="text-[10px] font-black text-slate-950 leading-none mb-1">Set Up Custom Domain</p>
                        <p class="text-[8px] font-bold text-slate-400">Link your own URL to your storefront</p>
                    </div>
                    <button class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase shrink-0 active:scale-95 transition-transform">Connect</button>
                </div>

                <button onclick="window.setLoginStatus(true)" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                    Finalize Setup
                </button>
                <p class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] mt-4 md:mt-6 opacity-40 text-center">Details can be edited later in settings</p>
            </div>
        `;
    }

    return stepContent;
}

// OTP Input Handling Functions
window.handleOtpInput = function(event, index) {
    const value = event.target.value;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) {
        event.target.value = '';
        return;
    }

    // Auto-focus next input
    if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
    }
};

window.handleOtpKeydown = function(event, index) {
    // Handle backspace
    if (event.key === 'Backspace') {
        const currentInput = document.getElementById(`otp-${index}`);
        if (!currentInput.value && index > 0) {
            // Move to previous input if current is empty
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
                prevInput.select();
            }
        }
    }
    // Handle arrow keys
    else if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        const prevInput = document.getElementById(`otp-${index - 1}`);
        if (prevInput) prevInput.focus();
    }
    else if (event.key === 'ArrowRight' && index < 5) {
        event.preventDefault();
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
    }
    // Handle Enter key to verify
    else if (event.key === 'Enter') {
        event.preventDefault();
        window.verifyOtp();
    }
};

window.handleOtpPaste = function(event) {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text').trim();

    // Only process if it's 6 digits
    if (/^\d{6}$/.test(pastedData)) {
        for (let i = 0; i < 6; i++) {
            const input = document.getElementById(`otp-${i}`);
            if (input) {
                input.value = pastedData[i];
            }
        }
        // Focus last input
        const lastInput = document.getElementById('otp-5');
        if (lastInput) lastInput.focus();
    }
};

window.requestOtp = function() {
    const mobileInput = document.getElementById('mobile-input');
    const mobile = mobileInput ? mobileInput.value.trim() : '';

    if (!mobile || mobile.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }

    // In a real app, you'd send OTP via API here
    console.log('Sending OTP to:', mobile);

    // Move to step 2
    window.setRegistrationStep(2);

    // Auto-focus first OTP input after render
    setTimeout(() => {
        const firstInput = document.getElementById('otp-0');
        if (firstInput) firstInput.focus();
    }, 100);
};

window.verifyOtp = function() {
    // Collect OTP values
    const otpValues = [];
    for (let i = 0; i < 6; i++) {
        const input = document.getElementById(`otp-${i}`);
        if (input) {
            otpValues.push(input.value);
        }
    }

    const otp = otpValues.join('');

    if (otp.length !== 6) {
        alert('Please enter all 6 digits');
        return;
    }

    // In a real app, you'd verify OTP via API here
    console.log('Verifying OTP:', otp);

    // Move to step 3
    window.setRegistrationStep(3);
};

window.resendOtp = function() {
    // Clear all OTP inputs
    for (let i = 0; i < 6; i++) {
        const input = document.getElementById(`otp-${i}`);
        if (input) {
            input.value = '';
        }
    }

    // Focus first input
    const firstInput = document.getElementById('otp-0');
    if (firstInput) firstInput.focus();

    // In a real app, you'd resend OTP via API here
    console.log('Resending OTP...');
    alert('OTP has been resent successfully!');
};
