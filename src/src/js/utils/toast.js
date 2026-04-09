// Toast Notification System
// A native, styled toast component for the app

let toastContainer = null;
let toastTimeout = null;

// Toast types with icons
const TOAST_TYPES = {
    success: { icon: 'check_circle', bg: 'bg-slate-900', text: 'text-white' },
    error: { icon: 'error', bg: 'bg-slate-800', text: 'text-white' },
    warning: { icon: 'warning', bg: 'bg-slate-600', text: 'text-white' },
    info: { icon: 'info', bg: 'bg-slate-700', text: 'text-white' }
};

// Initialize toast container
function initToastContainer() {
    if (toastContainer) return;
    
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
}

// Show toast notification
export function showToast(message, type = 'info', duration = 3000) {
    initToastContainer();
    
    // Clear existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    const config = TOAST_TYPES[type] || TOAST_TYPES.info;
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `
        ${config.bg} ${config.text} 
        px-5 py-3.5 rounded-2xl shadow-2xl 
        flex items-center gap-3 
        transform transition-all duration-300 
        opacity-0 translate-y-[-20px] scale-95
        pointer-events-auto
        max-w-[90vw] sm:max-w-md
    `.trim().replace(/\s+/g, ' ');
    
    toast.innerHTML = `
        <span class="material-icons-outlined text-lg shrink-0">${config.icon}</span>
        <span class="text-sm font-bold leading-snug">${escapeHtml(message)}</span>
    `;
    
    // Add close button for longer messages or errors
    if (type === 'error' || message.length > 50) {
        toast.innerHTML += `
            <button onclick="this.parentElement.remove()" class="ml-2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-all shrink-0">
                <span class="material-icons-outlined text-sm">close</span>
            </button>
        `;
    }
    
    // Clear existing toasts
    toastContainer.innerHTML = '';
    toastContainer.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-[-20px]', 'scale-95');
        toast.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    });
    
    // Auto dismiss
    toastTimeout = setTimeout(() => {
        dismissToast(toast);
    }, duration);
    
    return toast;
}

// Dismiss toast with animation
function dismissToast(toast) {
    if (!toast || !toast.parentElement) return;
    
    toast.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    toast.classList.add('opacity-0', 'translate-y-[-20px]', 'scale-95');
    
    setTimeout(() => {
        toast.remove();
    }, 300);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Convenience methods
export const toast = {
    success: (msg, duration) => showToast(msg, 'success', duration),
    error: (msg, duration) => showToast(msg, 'error', duration || 5000),
    warning: (msg, duration) => showToast(msg, 'warning', duration || 4000),
    info: (msg, duration) => showToast(msg, 'info', duration)
};

// Confirmation dialog (replacement for confirm())
export function showConfirm(message, onConfirm, onCancel) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4';
    overlay.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl text-slate-600">help_outline</span>
                </div>
                <p class="text-sm font-bold text-slate-900 leading-relaxed">${escapeHtml(message)}</p>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="confirm-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="confirm-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Confirm
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const dialog = overlay.querySelector('div > div');
    
    // Animate in
    requestAnimationFrame(() => {
        dialog.classList.remove('scale-95', 'opacity-0');
        dialog.classList.add('scale-100', 'opacity-100');
    });
    
    // Handle buttons
    overlay.querySelector('#confirm-cancel').onclick = () => {
        closeConfirm(overlay);
        if (onCancel) onCancel();
    };
    
    overlay.querySelector('#confirm-ok').onclick = () => {
        closeConfirm(overlay);
        if (onConfirm) onConfirm();
    };
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeConfirm(overlay);
            if (onCancel) onCancel();
        }
    };
}

function closeConfirm(overlay) {
    const dialog = overlay.querySelector('div > div');
    dialog.classList.remove('scale-100', 'opacity-100');
    dialog.classList.add('scale-95', 'opacity-0');
    setTimeout(() => overlay.remove(), 200);
}

// Prompt dialog (replacement for prompt())
export function showPrompt(message, defaultValue = '', onSubmit, onCancel) {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4';
    overlay.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6">
                <p class="text-sm font-bold text-slate-900 mb-4">${escapeHtml(message)}</p>
                <input type="text" id="prompt-input" value="${escapeHtml(defaultValue)}" 
                       class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all"
                       autofocus>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="prompt-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="prompt-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Add
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const dialog = overlay.querySelector('div > div');
    const input = overlay.querySelector('#prompt-input');
    
    // Animate in
    requestAnimationFrame(() => {
        dialog.classList.remove('scale-95', 'opacity-0');
        dialog.classList.add('scale-100', 'opacity-100');
        input.focus();
        input.select();
    });
    
    // Handle Enter key
    input.onkeydown = (e) => {
        if (e.key === 'Enter') {
            const value = input.value.trim();
            closeConfirm(overlay);
            if (value && onSubmit) onSubmit(value);
        } else if (e.key === 'Escape') {
            closeConfirm(overlay);
            if (onCancel) onCancel();
        }
    };
    
    overlay.querySelector('#prompt-cancel').onclick = () => {
        closeConfirm(overlay);
        if (onCancel) onCancel();
    };
    
    overlay.querySelector('#prompt-ok').onclick = () => {
        const value = input.value.trim();
        closeConfirm(overlay);
        if (value && onSubmit) onSubmit(value);
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeConfirm(overlay);
            if (onCancel) onCancel();
        }
    };
}

// Make available globally
window.toast = toast;
window.showToast = showToast;
window.showConfirm = showConfirm;
window.showPrompt = showPrompt;
