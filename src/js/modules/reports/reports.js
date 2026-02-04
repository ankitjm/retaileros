import { state } from '../../state.js';
import { renderUnifiedHeader } from './header.js';
import { renderReportOverview } from './overview.js';
import { renderReportSales } from './sales.js';
import { renderReportInventory } from './inventory.js';
import { renderReportMarketing } from './marketing.js';

export function renderReports(layout) {
    const hMap = {
        'overview': { t: 'Reports', s: 'Business Intelligence' },
        'sales': { t: 'Sales', s: 'Deep-Dive Analytics' },
        'inventory': { t: 'Inventory', s: 'Stock & Logistics' },
        'marketing': { t: 'Marketing', s: 'Campaign Insights' }
    };

    const contentMap = {
        'overview': renderReportOverview(),
        'sales': renderReportSales(),
        'inventory': renderReportInventory(),
        'marketing': renderReportMarketing()
    };

    if (layout === 'desktop-primary') {
        return `
            ${renderUnifiedHeader(hMap.overview.t, hMap.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${contentMap.overview}
            </div>
        `;
    }

    if (layout === 'desktop-secondary') {
        const activeTab = state.reportsTab === 'overview' ? 'sales' : state.reportsTab;
        return `
            ${renderUnifiedHeader(hMap[activeTab].t, hMap[activeTab].s, ['sales', 'inventory', 'marketing'])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${contentMap[activeTab]}
            </div>
        `;
    }

    // Mobile logic
    const headerData = hMap[state.reportsTab] || hMap['overview'];
    return `
        ${renderUnifiedHeader(headerData.t, headerData.s, ['overview', 'sales', 'inventory', 'marketing'])}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${contentMap[state.reportsTab]}
        </div>
    `;
}
