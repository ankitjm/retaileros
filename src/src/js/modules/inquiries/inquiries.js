import { state } from '../../state.js';
import { renderInquiriesHeader } from './header.js';
import { renderInquiriesStats } from './stats.js';
import { renderInquiriesList } from './list.js';
import { renderCaptureInquiry } from './capture.js';
import { renderResolveInquiry } from './resolve.js';

if (window._inquiriesShowAll === undefined) window._inquiriesShowAll = false;
window._toggleShowAllInquiries = () => {
    window._inquiriesShowAll = !window._inquiriesShowAll;
    window.triggerRender();
};

export function renderInquiries(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    if (isDesktopSecondary || (isMobile && state.inquiryViewMode === 'add')) {
        return renderCaptureInquiry(isMobile);
    }

    if (state.inquiryViewMode === 'resolve' && state.activeInquiry) {
        return renderResolveInquiry(isMobile);
    }

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${renderInquiriesHeader()}
            <div class="px-8 text-left">
                ${!window._inquiriesShowAll ? renderInquiriesStats() : ''}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">${window._inquiriesShowAll ? 'All Inquiries' : 'Recent Inquiries'}</h3>
                    <button onclick="window._toggleShowAllInquiries()" class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">${window._inquiriesShowAll ? 'Show Summary' : 'View All'}</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${renderInquiriesList()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `;
}
