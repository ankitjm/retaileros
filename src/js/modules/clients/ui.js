// Shared UI helpers for clients module

export function avatar(name, size = 'md') {
    const initials = (name || '?').split(' ').map(x => x[0]).join('').toUpperCase().slice(0, 2);
    const sizes = {
        xs: 'w-6 h-6 text-[7px]',
        sm: 'w-8 h-8 text-[8px]',
        md: 'w-10 h-10 sm:w-11 sm:h-11 text-[10px]',
        lg: 'w-20 h-20 sm:w-24 sm:h-24 text-2xl sm:text-3xl'
    };
    const cls = sizes[size] || sizes.md;
    const ring = size === 'lg' ? 'border-[6px] border-white shadow-inner' : 'border border-slate-100';
    return `<div class="${cls} rounded-full bg-slate-100 ${ring} flex items-center justify-center font-black text-slate-400 shrink-0">${initials}</div>`;
}

export function statCard(value, label) {
    return `
        <div class="card p-4 text-center">
            <p class="text-2xl font-black text-slate-900 tracking-tighter">${value}</p>
            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">${label}</p>
        </div>
    `;
}

export function emptyState(icon, text, subtext = '') {
    return `
        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
            <span class="material-icons-outlined text-3xl text-slate-200">${icon}</span>
            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">${text}</span>
            ${subtext ? `<span class="text-[9px] font-bold text-slate-300">${subtext}</span>` : ''}
        </div>
    `;
}

export function formatDate(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatDateShort(dateStr) {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

export function timeAgo(dateStr) {
    if (!dateStr) return '';
    const now = new Date();
    const then = new Date(dateStr);
    const diffMs = now - then;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
}

export function daysSince(dateStr) {
    if (!dateStr) return Infinity;
    return Math.floor((new Date() - new Date(dateStr)) / (1000 * 60 * 60 * 24));
}

// Client value tier based on total spend
export function clientTier(totalSpent) {
    if (totalSpent >= 200000) return { label: 'Platinum', color: 'bg-slate-900 text-white' };
    if (totalSpent >= 50000)  return { label: 'Gold', color: 'bg-amber-100 text-amber-700' };
    if (totalSpent >= 10000)  return { label: 'Silver', color: 'bg-slate-200 text-slate-600' };
    if (totalSpent > 0)       return { label: 'Bronze', color: 'bg-orange-50 text-orange-500' };
    return null;
}

// Escape single quotes for inline onclick handlers
export function esc(str) {
    return (str || '').replace(/'/g, "\\'");
}
