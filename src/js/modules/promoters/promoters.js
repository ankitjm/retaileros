import { state, triggerRender } from '../../state.js';
import { renderPromoterList } from './list.js';
import { renderPromoterOnboarding } from './onboarding.js';
import { renderPromoterPerformance } from './performance.js';

export function renderPromoters(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Helper to switch modes
    window.setPromoterViewMode = (mode) => {
        state.promoterViewMode = mode;
        triggerRender();
    };

    if (isDesktopSecondary) {
        if (state.promoterViewMode === 'onboarding') {
            return renderPromoterOnboarding();
        }
        return renderPromoterPerformance();
    }

    return renderPromoterList();
}
