import { state, triggerRender } from '../../state.js';
import { renderAutomationDashboard } from './dashboard.js';
import { renderNewAutomationForm } from './create.js';
import { renderAutomationSequence } from './sequence.js';

export function renderAutomation(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Helper functions
    window.setAutomationMode = (viewMode, id = null) => {
        state.automationViewMode = viewMode;
        if (id !== null) state.activeAutomationId = id;
        triggerRender();
    };

    if (isDesktopSecondary) {
        if (state.automationViewMode === 'create') {
            return renderNewAutomationForm();
        } else if (state.automationViewMode === 'details' && state.activeAutomationId) {
            return renderAutomationSequence(state.activeAutomationId);
        }
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `;
    }

    // Dashboard View (Primary Column or Mobile Main)
    if (isMobile && state.automationViewMode === 'create') return renderNewAutomationForm(true);
    if (isMobile && state.automationViewMode === 'details') return renderAutomationSequence(state.activeAutomationId, true);

    return renderAutomationDashboard();
}
