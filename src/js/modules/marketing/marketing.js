import { renderMarketingGenerator } from './generator.js';
import { renderMarketingPreview } from './preview.js';

export function renderMarketing(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';

    if (isDesktopSecondary) {
        return renderMarketingPreview();
    }

    return renderMarketingGenerator();
}
