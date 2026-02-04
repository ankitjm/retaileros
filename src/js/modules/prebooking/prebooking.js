import { state } from '../../state.js';
import { renderPreBookingDashboard } from './dashboard.js';
import { renderPreBookingCreate } from './create.js';
import { renderPreBookingDetails } from './details.js';
import { renderPreBookingPublic } from './public.js';

export function renderPreBooking(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Sub-routing within the module
    if (isDesktopSecondary || (isMobile && state.preBookingViewMode === 'create')) {
        return renderPreBookingCreate(isMobile);
    }

    if (state.preBookingViewMode === 'details' && state.activeCampaign) {
        return renderPreBookingDetails(isMobile);
    }

    if (state.preBookingViewMode === 'public') {
        return renderPreBookingPublic(isMobile);
    }

    // Default: Dashboard
    return renderPreBookingDashboard();
}
