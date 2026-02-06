import { state, triggerRender } from '../../state.js';
import { renderInventoryHeader } from './header.js';
import { renderBrands } from './brands.js';
import { renderCategories } from './categories.js';
import { renderInwardShipment } from './inward.js';
import { renderInventoryDetails } from './details.js';

export function renderInventory(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Helper functions (could be moved to a shared actions file if needed, but keeping here for now as they relate to this module)
    window.setInventoryTab = (tab) => {
        state.inventoryTab = tab;
        triggerRender();
    };

    window.setInventoryMode = (mode) => {
        state.inventoryMode = mode;
        triggerRender();
    };

    if (isDesktopSecondary) {
        if (state.inventoryMode === 'inward') {
            return renderInwardShipment();
        }
        return renderInventoryDetails();
    }

    // Mobile: route to sub-views
    if (mode === 'mobile') {
        if (state.inventoryMode === 'inward') return renderInwardShipment();
        if (state.inventoryMode === 'details') return renderInventoryDetails();
    }

    // Default Primary View
    return `
        <div class="h-full flex flex-col relative bg-white">
            ${renderInventoryHeader()}
            ${state.inventoryTab === 'brands' ? renderBrands() : renderCategories()}
        </div>
    `;
}
