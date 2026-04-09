import { renderMarketingGenerator } from './generator.js';
import { renderMarketingPreview } from './preview.js';

export function renderMarketing(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';
    const isMobile = mode === 'mobile';

    if (isDesktopSecondary) {
        return renderMarketingPreview();
    }

    // Mobile: show generator + preview stacked when image is generated
    if (isMobile) {
        const mState = window._marketingState || {};
        const hasResult = mState.generatedImageUrl || mState.isGenerating || mState.lastError;

        return `
            ${renderMarketingGenerator()}
            ${hasResult ? `
                <div class="px-4 pb-8">
                    ${renderMarketingPreview()}
                </div>
            ` : ''}
        `;
    }

    return renderMarketingGenerator();
}
