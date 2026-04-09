import { state } from '../../state.js';
import { renderInquiriesHeader } from './header.js';
import { renderInquiriesStats } from './stats.js';
import { renderInquiriesList } from './list.js';
import { renderCaptureInquiry } from './capture.js';
import { renderResolveInquiry } from './resolve.js';

// Empty state shown in secondary pane when nothing is selected
function renderInquiryEmptyPane() {
    return `
        <div class="h-full flex flex-col items-center justify-center bg-white text-center px-12 gap-5">
            <div class="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                <span class="material-icons-outlined text-slate-300 text-2xl">contact_support</span>
            </div>
            <div>
                <h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-2">Select an inquiry</h3>
                <p class="text-[10px] font-bold text-slate-400 leading-relaxed max-w-[180px]">
                    Pick one from the list to view details and take action.
                </p>
            </div>
            <button onclick="window.setActiveInquiry(null); window.setInquiryViewMode('capture');"
                class="mt-1 px-5 py-2.5 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest
                    hover:bg-slate-800 transition-all flex items-center gap-2">
                <span class="material-icons-outlined text-sm">add</span> Log New Inquiry
            </button>
        </div>
    `;
}

export function renderInquiries(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    // ── Secondary pane (desktop right column) ───────────────────────────
    if (isDesktopSecondary) {
        if (state.inquiryViewMode === 'capture') return renderCaptureInquiry(false);
        if (state.activeInquiry) return renderResolveInquiry(false, true);
        return renderInquiryEmptyPane();
    }

    // ── Mobile full-screen takeovers ─────────────────────────────────────
    if (isMobile) {
        if (state.inquiryViewMode === 'capture') return renderCaptureInquiry(true);
        if (state.inquiryViewMode === 'resolve' && state.activeInquiry) return renderResolveInquiry(true, false);
    }

    // ── Primary pane: always shows the list (desktop + mobile base) ───────
    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${renderInquiriesHeader()}
            <div class="px-8 text-left">
                ${renderInquiriesStats()}
            </div>
            <div class="scrolling-content text-left">
                ${renderInquiriesList()}
            </div>
        </div>
    `;
}
