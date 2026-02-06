# RetailerOS Design System — Black & White Theme

> Reference this file when creating new pages, modules, or UI components.
> The entire app uses a **monochrome slate palette** — no colored accents.

---

## Color Palette

| Purpose | Token | Usage |
|---------|-------|-------|
| **Primary text** | `text-slate-900` | Headlines, values, active elements |
| **Secondary text** | `text-slate-500` | Descriptions, labels |
| **Tertiary text** | `text-slate-400` | Hints, timestamps, section headers |
| **Muted text** | `text-slate-300` | Placeholders, disabled, empty state |
| **Primary background** | `bg-white` | Cards, containers |
| **Secondary background** | `bg-slate-50` | Input fields, info blocks, subtle fills |
| **Tertiary background** | `bg-slate-100` | Toggle groups, tab bars, inactive badges |
| **Dark fill** | `bg-slate-900` | Primary buttons, active tabs, prominent badges |
| **Darkest fill** | `bg-slate-950` | FABs, strong emphasis |
| **Border light** | `border-slate-100` | Card borders, dividers |
| **Border medium** | `border-slate-200` | Input borders, section dividers, dashed lines |
| **Border active** | `border-slate-900` | Selected/active card borders |

---

## Status Indicators (Monochrome)

Instead of colored status badges, use opacity and fill variations:

| Status | Style |
|--------|-------|
| **Active / Success / Delivered / Paid** | `bg-slate-900 text-white` (dark badge) |
| **Pending / Draft / Warning** | `bg-slate-200 text-slate-600` (medium badge) |
| **Inactive / Cancelled / Error / Failed** | `bg-slate-100 text-slate-400` (light badge) |
| **In Progress / Confirmed / Shipped** | `bg-slate-300 text-slate-700` (mid-tone badge) |
| **Info / Online** | `bg-slate-900 text-white` with appropriate icon |

### Status Badge Pattern
```html
<!-- Active/Success -->
<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Active</span>

<!-- Pending -->
<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Pending</span>

<!-- Inactive/Error -->
<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Inactive</span>

<!-- In Progress -->
<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-300 text-slate-700">Shipped</span>
```

---

## Notification Dots

| Priority | Style |
|----------|-------|
| **Urgent / New** | `bg-slate-900 text-white` (solid dark) |
| **Warning / Attention** | `bg-slate-500 text-white` (medium) |

---

## Stat Cards & Metrics

```html
<!-- Stat value -->
<p class="text-2xl font-black text-slate-900">42</p>
<p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Label</p>
```

Do NOT use colored text for stat values. All values are `text-slate-900`.

---

## Buttons

| Type | Style |
|------|-------|
| **Primary action** | `bg-slate-900 text-white rounded-2xl` |
| **Secondary action** | `bg-white border border-slate-200 text-slate-900 rounded-2xl` |
| **Danger action** | `bg-white border border-slate-200 text-slate-400 hover:text-slate-900 rounded-2xl` (no red) |
| **Toggle active** | `bg-white shadow-sm text-slate-900` (inside slate-100 pill) |
| **Toggle inactive** | `text-slate-400` |
| **Icon button** | `text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full` |
| **FAB** | `bg-slate-950 text-white rounded-full shadow-2xl` |

---

## Form Elements

```html
<input class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900">
<textarea class="w-full px-4 py-3 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 resize-none">
```

---

## Cards

```html
<div class="card p-4 sm:p-5 border-2 border-transparent hover:border-slate-200 transition-all">
<!-- Selected card -->
<div class="card p-4 sm:p-5 border-2 border-slate-900 shadow-lg">
```

---

## Section Headers

```html
<p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Section Title
</p>
```

---

## Toggle Switches

Instead of green toggles, use slate:
```html
<!-- ON -->
<div class="w-10 h-5 bg-slate-900 rounded-full relative">
    <div class="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</div>

<!-- OFF -->
<div class="w-10 h-5 bg-slate-200 rounded-full relative">
    <div class="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
</div>
```

---

## Info/Warning Blocks

```html
<!-- Info block -->
<div class="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-3">
    <span class="material-icons-outlined text-slate-400">info</span>
    <div>...</div>
</div>

<!-- Warning/attention block -->
<div class="bg-slate-100 border border-slate-200 p-4 rounded-xl flex items-start gap-3">
    <span class="material-icons-outlined text-slate-500">warning</span>
    <div>...</div>
</div>
```

---

## Payment Status Block

```html
<!-- Paid -->
<div class="bg-slate-900 text-white p-4 rounded-xl flex justify-between items-center">
    <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span class="material-icons-outlined text-sm">payments</span>
        </div>
        <p class="text-[9px] font-black uppercase tracking-widest">Paid via Cash</p>
    </div>
    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
</div>

<!-- Pending -->
<div class="bg-slate-100 border border-slate-200 p-4 rounded-xl flex items-center gap-3">
    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
        <span class="material-icons-outlined text-sm">pending</span>
    </div>
    <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment Pending</p>
</div>
```

---

## Typography

| Element | Class |
|---------|-------|
| Page title | `text-xl font-black tracking-tighter text-slate-900` |
| Card title | `text-sm font-black text-slate-900 tracking-tight` |
| Large value | `text-2xl font-black text-slate-900 tracking-tighter` |
| Label | `text-[9px] font-black text-slate-400 uppercase tracking-widest` |
| Small label | `text-[8px] font-black text-slate-400 uppercase tracking-widest` |
| Body text | `text-[10px] font-bold text-slate-500` |
| Muted | `text-[9px] font-bold text-slate-300` |

---

## Timeline / Progress Steps

```html
<!-- Completed step -->
<div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
    <span class="material-icons-outlined text-xs">check</span>
</div>

<!-- Current step -->
<div class="w-6 h-6 rounded-full bg-slate-400 text-white flex items-center justify-center">
    <span class="material-icons-outlined text-xs">radio_button_unchecked</span>
</div>

<!-- Future step -->
<div class="w-6 h-6 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center">
    <span class="material-icons-outlined text-xs">circle</span>
</div>

<!-- Connector line -->
<div class="flex-1 h-0.5 mx-1 bg-slate-900"></div> <!-- completed -->
<div class="flex-1 h-0.5 mx-1 bg-slate-100"></div> <!-- future -->
```

---

## NEVER Use

- `green-*` / `blue-*` / `red-*` / `amber-*` / `purple-*` / `orange-*`
- `indigo-*` / `emerald-*` / `teal-*` / `violet-*` / `rose-*` / `cyan-*`
- Any color outside the `slate` palette for UI elements

## Exception

- The **Settings > Theme** page shows accent color swatches — these are the ONLY place where non-slate colors should appear, as they represent selectable theme options (not currently applied).
