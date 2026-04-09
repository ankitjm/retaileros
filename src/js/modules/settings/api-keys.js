/**
 * Settings > API — Retailer API Key Management
 *
 * Lets retailers create, view, and revoke API keys to access their data
 * from external systems (ERPs, custom dashboards, accounting software, etc.)
 *
 * Keys are scoped — the retailer chooses exactly what each key can read.
 * Raw key is shown exactly once on creation. Never stored, never shown again.
 */

const SCOPES = [
    { key: 'sales:read',     label: 'Sales',     desc: 'Read transactions & sale items',   icon: 'point_of_sale' },
    { key: 'customers:read', label: 'Customers',  desc: 'Read customer directory',          icon: 'group' },
    { key: 'inventory:read', label: 'Inventory',  desc: 'Read products & stock levels',     icon: 'inventory_2' },
    { key: 'repairs:read',   label: 'Repairs',    desc: 'Read service & repair records',    icon: 'build' },
    { key: 'reports:read',   label: 'Reports',    desc: 'Revenue summaries & analytics',    icon: 'bar_chart' },
    { key: 'devices:read',   label: 'Devices',    desc: 'IMEI & device lookup',             icon: 'smartphone' },
];

function getApiBase() {
    return window.location.hostname === 'localhost' ? '/api' : '/ros/api';
}

function getToken() {
    return localStorage.getItem('retaileros_session_token');
}

async function apiFetch(path, opts = {}) {
    const r = await fetch(`${getApiBase()}${path}`, {
        ...opts,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
            ...(opts.headers || {}),
        },
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error || 'Request failed');
    return data;
}

// ─── Render main view ────────────────────────────────────────────────────────

export function renderSettingsApi() {
    // Schedule data load after the HTML is painted to the DOM
    setTimeout(bootApiSettings, 0);

    return `
        <div data-settings-category="api" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                    <button onclick="window.setSettingsView(null)"
                        class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">API Access</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">External Integrations</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar" id="api-keys-content">
                ${renderApiKeysSkeleton()}
            </div>
        </div>
    `;
}

function renderApiKeysSkeleton() {
    return `
        <div class="p-6 space-y-4">
            <div class="h-20 bg-slate-50 rounded-2xl animate-pulse"></div>
            <div class="h-16 bg-slate-50 rounded-2xl animate-pulse"></div>
            <div class="h-16 bg-slate-50 rounded-2xl animate-pulse"></div>
        </div>
    `;
}

// ─── Boot: fetch keys and render real content ─────────────────────────────────

export async function bootApiSettings() {
    const container = document.getElementById('api-keys-content');
    if (!container) return;

    try {
        const { keys } = await apiFetch('/api-keys');
        container.innerHTML = renderApiKeysContent(keys || []);
        bindApiKeyHandlers();
    } catch (err) {
        container.innerHTML = `
            <div class="p-8 text-center text-slate-400 text-sm">${err.message}</div>
        `;
    }
}

function renderApiKeysContent(keys) {
    const activeKeys = keys.filter(k => k.is_active);
    const revokedKeys = keys.filter(k => !k.is_active);

    return `
        <!-- Base URL pill -->
        <div class="px-6 pb-4">
            <div class="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3">
                <span class="material-icons-outlined text-slate-400 text-sm">link</span>
                <div class="min-w-0 flex-1">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Base URL</p>
                    <p class="text-[10px] font-black text-slate-900 font-mono truncate">https://khosha.cloud/ros/v1/</p>
                </div>
                <button onclick="navigator.clipboard.writeText('https://khosha.cloud/ros/v1/').then(() => window.toast.success('Copied'))"
                    class="shrink-0 p-1.5 hover:bg-slate-200 rounded-lg transition-all">
                    <span class="material-icons-outlined text-slate-400 text-sm">content_copy</span>
                </button>
            </div>
        </div>

        <!-- Active Keys -->
        <div class="px-6 pb-2">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                <span class="w-1.5 h-1.5 bg-slate-900 rounded-full"></span>
                Active Keys (${activeKeys.length}/10)
            </p>
            <div class="space-y-2" id="active-keys-list">
                ${activeKeys.length === 0
                    ? `<p class="text-[10px] text-slate-300 py-4 text-center">No active keys yet — create one below</p>`
                    : activeKeys.map(renderKeyCard).join('')
                }
            </div>
        </div>

        <!-- Create new key -->
        <div class="px-6 py-4">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> New API Key
            </p>
            ${renderCreateForm()}
        </div>

        <!-- Endpoints reference -->
        <div class="px-6 pb-4 border-t border-dashed border-slate-100 pt-4">
            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Available Endpoints
            </p>
            ${renderEndpointsRef()}
        </div>

        ${revokedKeys.length > 0 ? `
        <div class="px-6 pb-6 border-t border-dashed border-slate-100 pt-4">
            <p class="text-[9px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2 mb-3">
                <span class="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Revoked Keys
            </p>
            <div class="space-y-2 opacity-50">
                ${revokedKeys.map(renderRevokedCard).join('')}
            </div>
        </div>
        ` : ''}
    `;
}

function renderKeyCard(k) {
    const scopes = JSON.parse(k.scopes || '[]');
    const lastUsed = k.last_used_at
        ? new Date(k.last_used_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
        : 'Never';
    const resetPct = Math.min(100, Math.round((k.requests_today / k.rate_limit) * 100));
    const barColor = resetPct > 80 ? 'bg-red-400' : resetPct > 50 ? 'bg-amber-400' : 'bg-slate-900';

    return `
        <div class="card p-4 space-y-3" data-key-id="${k.id}">
            <div class="flex items-start justify-between gap-3">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-black text-slate-900 truncate">${escHtml(k.name)}</p>
                    <p class="text-[9px] font-mono text-slate-400 mt-0.5">${escHtml(k.key_prefix)}••••••••</p>
                </div>
                <button onclick="window.revokeApiKey('${k.id}', '${escHtml(k.name).replace(/'/g, "\\'")}')"
                    class="shrink-0 px-3 py-1.5 bg-slate-50 hover:bg-red-50 hover:text-red-600 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-500 transition-all">
                    Revoke
                </button>
            </div>

            <!-- Scopes -->
            <div class="flex flex-wrap gap-1">
                ${scopes.map(s => {
                    const sc = SCOPES.find(x => x.key === s);
                    return `<span class="px-2 py-0.5 bg-slate-100 rounded-full text-[7px] font-black text-slate-600 uppercase tracking-wider">${sc ? sc.label : s}</span>`;
                }).join('')}
            </div>

            <!-- Usage bar -->
            <div class="space-y-1">
                <div class="flex justify-between">
                    <p class="text-[8px] font-bold text-slate-400">Daily Usage</p>
                    <p class="text-[8px] font-black text-slate-600">${k.requests_today} / ${k.rate_limit}</p>
                </div>
                <div class="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div class="${barColor} h-full rounded-full transition-all" style="width:${resetPct}%"></div>
                </div>
            </div>

            <div class="flex justify-between text-[8px] text-slate-400 font-bold pt-0.5">
                <span>Last used: ${lastUsed}</span>
                <span>Created: ${new Date(k.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' })}</span>
            </div>
        </div>
    `;
}

function renderRevokedCard(k) {
    return `
        <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
            <div>
                <p class="text-[10px] font-black text-slate-500">${escHtml(k.name)}</p>
                <p class="text-[8px] font-mono text-slate-300">${escHtml(k.key_prefix)}••••••••</p>
            </div>
            <span class="text-[7px] font-black uppercase tracking-widest text-slate-300 bg-slate-200 px-2 py-1 rounded-full">Revoked</span>
        </div>
    `;
}

function renderCreateForm() {
    return `
        <div class="card p-5 space-y-4" id="create-key-form">
            <!-- Key name -->
            <div class="space-y-1.5">
                <label class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Key Name</label>
                <input type="text" id="new-key-name" maxlength="50"
                    placeholder="e.g. ERP Integration, WhatsApp Bot"
                    class="w-full px-4 py-3 bg-slate-50 rounded-xl text-[11px] font-bold text-slate-900 placeholder-slate-300 border-0 outline-none focus:ring-2 focus:ring-slate-200">
            </div>

            <!-- Scopes -->
            <div class="space-y-2">
                <label class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Permissions</label>
                <div class="grid grid-cols-2 gap-2">
                    ${SCOPES.map(s => `
                        <label class="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all group">
                            <input type="checkbox" data-scope="${s.key}"
                                class="w-3.5 h-3.5 accent-slate-900 rounded">
                            <div class="min-w-0">
                                <p class="text-[9px] font-black text-slate-900 leading-tight">${s.label}</p>
                                <p class="text-[7px] font-bold text-slate-400 leading-tight truncate">${s.desc}</p>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Rate limit -->
            <div class="space-y-1.5">
                <label class="text-[8px] font-black text-slate-500 uppercase tracking-widest flex justify-between">
                    <span>Daily Rate Limit</span>
                    <span id="rate-limit-display" class="text-slate-900">1,000 req/day</span>
                </label>
                <input type="range" id="new-key-rate-limit" min="100" max="10000" step="100" value="1000"
                    oninput="document.getElementById('rate-limit-display').textContent = parseInt(this.value).toLocaleString('en-IN') + ' req/day'"
                    class="w-full accent-slate-900">
                <div class="flex justify-between text-[7px] font-bold text-slate-300">
                    <span>100</span><span>10,000</span>
                </div>
            </div>

            <button onclick="window.createApiKey()"
                class="w-full py-3.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-slate-900/20">
                Generate API Key
            </button>
        </div>

        <!-- New key reveal modal (hidden) -->
        <div id="new-key-reveal" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white text-lg">key</span>
                    </div>
                    <div>
                        <p class="text-sm font-black text-slate-900">Your new API key</p>
                        <p class="text-[9px] font-bold text-red-500">Copy it now — shown only once</p>
                    </div>
                </div>

                <div class="bg-slate-50 rounded-xl p-4 relative group">
                    <p id="new-key-value" class="text-[9px] font-mono font-bold text-slate-900 break-all leading-relaxed"></p>
                    <button onclick="window.copyNewKey()"
                        class="absolute top-2 right-2 p-1.5 bg-white rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-slate-100">
                        <span class="material-icons-outlined text-slate-500 text-sm">content_copy</span>
                    </button>
                </div>

                <div class="space-y-2 text-[9px] font-bold text-slate-500">
                    <p class="flex items-center gap-1.5"><span class="material-icons-outlined text-xs text-amber-500">warning</span> Store this key securely — it cannot be retrieved after this</p>
                    <p class="flex items-center gap-1.5"><span class="material-icons-outlined text-xs text-slate-400">send</span> Send as <code class="bg-slate-100 px-1 rounded text-slate-700">X-Api-Key: &lt;your-key&gt;</code> header</p>
                </div>

                <button onclick="window.dismissNewKey()"
                    class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">
                    I've copied it — close
                </button>
            </div>
        </div>
    `;
}

function renderEndpointsRef() {
    const base = 'https://khosha.cloud/ros/v1';
    const endpoints = [
        { method: 'GET', path: '/sales',              scope: 'sales:read',     desc: 'List transactions' },
        { method: 'GET', path: '/sales/:id',          scope: 'sales:read',     desc: 'Sale + IMEI items' },
        { method: 'GET', path: '/customers',          scope: 'customers:read', desc: 'Customer directory' },
        { method: 'GET', path: '/customers/:id',      scope: 'customers:read', desc: 'Single customer' },
        { method: 'GET', path: '/inventory',          scope: 'inventory:read', desc: 'Products & stock' },
        { method: 'GET', path: '/devices/:imei',      scope: 'devices:read',   desc: 'IMEI device lookup' },
        { method: 'GET', path: '/repairs',            scope: 'repairs:read',   desc: 'Service records' },
        { method: 'GET', path: '/reports/summary',    scope: 'reports:read',   desc: 'Revenue analytics' },
    ];

    return `
        <div class="space-y-1.5">
            ${endpoints.map(e => `
                <div class="flex items-center gap-3 py-2 border-b border-slate-50">
                    <span class="text-[7px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">${e.method}</span>
                    <div class="min-w-0 flex-1">
                        <p class="text-[9px] font-mono font-bold text-slate-700 truncate">${e.path}</p>
                        <p class="text-[7px] font-bold text-slate-400">${e.desc}</p>
                    </div>
                    <span class="text-[7px] font-black text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded shrink-0 hidden sm:block">${e.scope}</span>
                </div>
            `).join('')}

            <div class="mt-3 p-3 bg-slate-50 rounded-xl">
                <p class="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">Quick Example</p>
                <pre class="text-[8px] font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">curl ${base}/sales \\
  -H "X-Api-Key: ros_live_..."</pre>
            </div>
        </div>
    `;
}

// ─── Event handlers (globals) ─────────────────────────────────────────────────

let _pendingKeyValue = '';

function bindApiKeyHandlers() {
    // Create key
    window.createApiKey = async () => {
        const name = document.getElementById('new-key-name')?.value?.trim();
        if (!name) { window.toast.warning('Enter a key name'); return; }

        const scopes = [...document.querySelectorAll('[data-scope]:checked')].map(el => el.dataset.scope);
        if (scopes.length === 0) { window.toast.warning('Select at least one permission'); return; }

        const rateLimit = parseInt(document.getElementById('new-key-rate-limit')?.value || '1000', 10);

        const btn = document.querySelector('#create-key-form button[onclick="window.createApiKey()"]');
        if (btn) { btn.textContent = 'Generating…'; btn.disabled = true; }

        try {
            const result = await apiFetch('/api-keys', {
                method: 'POST',
                body: JSON.stringify({ name, scopes, rate_limit: rateLimit }),
            });

            // Show reveal modal
            _pendingKeyValue = result.key;
            document.getElementById('new-key-value').textContent = result.key;
            document.getElementById('new-key-reveal').classList.remove('hidden');

            // Refresh the list
            const { keys } = await apiFetch('/api-keys');
            const listEl = document.getElementById('active-keys-list');
            const activeKeys = (keys || []).filter(k => k.is_active);
            if (listEl) listEl.innerHTML = activeKeys.map(renderKeyCard).join('') || '<p class="text-[10px] text-slate-300 py-4 text-center">No active keys yet</p>';

            // Reset form
            document.getElementById('new-key-name').value = '';
            document.querySelectorAll('[data-scope]:checked').forEach(el => el.checked = false);
            document.getElementById('new-key-rate-limit').value = '1000';
            document.getElementById('rate-limit-display').textContent = '1,000 req/day';
        } catch (err) {
            window.toast.error(err.message);
        } finally {
            if (btn) { btn.textContent = 'Generate API Key'; btn.disabled = false; }
        }
    };

    window.copyNewKey = () => {
        if (_pendingKeyValue) {
            navigator.clipboard.writeText(_pendingKeyValue).then(() => window.toast.success('Key copied to clipboard'));
        }
    };

    window.dismissNewKey = () => {
        document.getElementById('new-key-reveal').classList.add('hidden');
        _pendingKeyValue = '';
    };

    // Revoke key
    window.revokeApiKey = async (id, name) => {
        if (!confirm(`Revoke "${name}"? Any integrations using this key will stop working immediately.`)) return;

        try {
            await apiFetch(`/api-keys/${id}`, { method: 'DELETE' });
            window.toast.success('Key revoked');

            // Remove card from DOM
            const card = document.querySelector(`[data-key-id="${id}"]`);
            if (card) card.remove();
        } catch (err) {
            window.toast.error(err.message);
        }
    };
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function escHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
}
