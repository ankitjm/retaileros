export function applyTheme() {
    const mode = localStorage.getItem('retaileros_theme') || 'light';
    const fontSize = parseInt(localStorage.getItem('retaileros_font_size') || '100');
    const density = localStorage.getItem('retaileros_density') || 'comfortable';
    const animations = localStorage.getItem('retaileros_animations') !== 'false';

    const html = document.documentElement;

    // Dark/Light mode
    let effective = mode;
    if (mode === 'system') {
        effective = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    html.classList.remove('light', 'dark');
    html.classList.add(effective);

    // Font size + density as zoom
    const densityOffset = density === 'compact' ? -5 : density === 'spacious' ? 5 : 0;
    html.style.setProperty('--font-scale', (fontSize + densityOffset) / 100);

    // Animations
    html.classList.toggle('no-animations', !animations);

    // Meta theme-color for mobile
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = effective === 'dark' ? '#020617' : '#0F172A';
}

window.applyTheme = applyTheme;

// System theme change listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('retaileros_theme') === 'system') applyTheme();
});

applyTheme();
