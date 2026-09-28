# -*- coding: utf-8 -*-
"""Renders every generated page. Called by build_site.py."""
import html, json
import site_content as C
import site_extra as SX
import site_compares as SC
import site_modules_render as MR

e = lambda s: html.escape(s, quote=True)

# Module -> plan. Must stay in step with the homepage's 26-module directory.
MODULES = [
  ('Billing and stock', [
    ('Sales Desk', 'free'), ('Invoices', 'free'), ('Inventory', 'free'), ('Purchase Orders', 'shop'),
    ('Pricing rules', 'shop'), ('Cash Register', 'shop'), ('Expenses', 'shop')]),
  ('Phones, appliances and service', [
    ('IMEI & Serial Tracker', 'shop'), ('Schemes', 'shop'), ('Repairs', 'shop'), ('Claims', 'shop')]),
  ('Customers', [
    ('Clients (CRM & khaata)', 'free'), ('Inquiries', 'shop'), ('Pre-booking', 'shop'),
    ('Marketing', 'chain'), ('Promoters', 'chain')]),
  ('Money and people', [('Finance', 'shop'), ('Staff', 'shop'), ('Reports', 'shop')]),
  ('Multi-store and platform', [
    ('Stores', 'chain'), ('Marketplace', 'chain'), ('Integrations', 'chain'), ('Automation', 'chain'),
    ('Dashboard', 'free'), ('Settings', 'free'), ('Login & onboarding', 'free')]),
]
TIER = {'free': 0, 'shop': 1, 'chain': 2}

def build(B):
    built = []
    assert sum(len(m) for _, m in MODULES) == 26, 'module table must list all 26 modules'

    # ── /pricing/ ─────────────────────────────────────────────
    def by(d): return e(json.dumps(d, ensure_ascii=False))
    cyc = ('monthly', 'quarterly', 'annual')
    # Every cycle is shown the same way: monthly -> the monthly price; quarterly/annual ->
    # the total actually billed for the cycle as the big figure, with the per-month
    # equivalent, the struck-through monthly price and the saving underneath.
    per = {'monthly': '/ month', 'quarterly': '/ 3 months', 'annual': '/ year'}
    def total(n, c): return B.inr(n * B.MONTHS[c])
    def sub(key, c):
        if c == 'monthly': return 'Billed monthly · + 18% GST'
        m, lst = B.PRICE[key][c], B.PRICE[key]['monthly']
        return '%s/month <s>%s</s> · <span class="save">save %s</span> · +\u00a018%%\u00a0GST' % (
            B.inr(m), B.inr(lst), B.inr((lst - m) * B.MONTHS[c]))
    shop_amt = {c: total(B.PRICE['shop'][c], c) for c in cyc}
    shop_bill = {c: sub('shop', c) for c in cyc}
    chain_amt = {c: total(B.PRICE['first'][c], c) for c in cyc}
    chain_per = {c: per[c] + ', first store' for c in cyc}
    chain_first = {c: sub('first', c) for c in cyc}
    chain_extra = {'monthly': '+ %s/month for each additional store' % B.inr(B.PRICE['extra']['monthly'])}
    chain_bill = {'monthly': 'With 2 stores: <strong>%s/month</strong>' % B.inr(B.chain(2, 'monthly'))}
    for c in ('quarterly', 'annual'):
        chain_extra[c] = '+ %s per additional store %s (%s/month)' % (
            total(B.PRICE['extra'][c], c), per[c], B.inr(B.PRICE['extra'][c]))
        chain_bill[c] = 'With 2 stores: <strong>%s</strong> %s (%s/month) · <span class="save">save %s</span>' % (
            total(B.chain(2, c), c), per[c], B.inr(B.chain(2, c)),
            B.inr((B.chain(2, 'monthly') - B.chain(2, c)) * B.MONTHS[c]))

    plans = '''<div class="plans">
  <article class="plan">
    <h3>Free</h3><p class="for">For a small counter replacing the paper register.</p>
    <div class="amt">₹0 <small>forever</small></div>
    <p class="bill">No card needed · no time limit</p>
    <ul><li>1 store · 3 staff logins</li><li>50 bills a month</li><li>7 modules — Sales Desk, Invoices, Inventory, Clients</li>
        <li>Unlimited customer and IMEI history</li><li>GST-compliant invoices</li></ul>
    <a class="btn btn-ghost" href="/#start">Start free</a>
  </article>
  <article class="plan featured">
    <span class="badge">Most shops</span>
    <h3>Shop</h3><p class="for">Everything one busy counter needs.</p>
    <div class="amt"><span data-by-cycle="{sp}">{sq}</span> <small data-by-cycle="{spp}">{sppq}</small></div>
    <p class="bill" data-by-cycle="{sb}">{sbq}</p>
    <ul><li>1 store · 3 staff logins</li><li>750 bills a month</li><li>20 modules — adds IMEI Tracker, Schemes, Repairs, Claims, Pre-booking, Reports</li>
        <li>200 WhatsApp messages a month</li><li>Email support, 48-hour reply</li></ul>
    <a class="btn btn-primary" href="/#start">Start 14-day trial</a>
  </article>
  <article class="plan">
    <h3>Pro</h3><p class="for">Unlimited bills and every module — add stores whenever you open them.</p>
    <div class="amt"><span data-by-cycle="{cp}">{cq}</span> <small data-by-cycle="{cpp}">{cppq}</small></div>
    <p class="bill first" data-by-cycle="{cf}">{cfq}</p>
    <p class="extra" data-by-cycle="{ce}">{ceq}</p>
    <p class="bill min" data-by-cycle="{cb}">{cbq}</p>
    <ul><li>1 store included · add stores any time · 3 logins per store</li><li>Unlimited bills</li><li>All 26 modules — adds Stores, Marketing, Marketplace, Automation</li>
        <li>2,000 WhatsApp messages a month</li><li>Priority support with phone callback</li></ul>
    <a class="btn btn-ghost" href="#calculator">Price my stores</a>
  </article>
</div>'''.format(
        sp=by(shop_amt), sq=shop_amt['quarterly'], spp=by(per), sppq=per['quarterly'],
        sb=by(shop_bill), sbq=shop_bill['quarterly'],
        cp=by(chain_amt), cq=chain_amt['quarterly'], cpp=by(chain_per), cppq=chain_per['quarterly'],
        cf=by(chain_first), cfq=chain_first['quarterly'],
        ce=by(chain_extra), ceq=chain_extra['quarterly'],
        cb=by(chain_bill), cbq=chain_bill['quarterly'])
    plans = MR.link_modules(plans)   # module names -> their landing pages

    ex_rows = ''
    for n in (1, 2, 3, 5, 10, 15, 25):
        # every cell says what period it is for: the big figure is what is billed, the small one the per-month view
        ex_rows += ('<tr><th scope="row">%d store%s<small>%d staff logins</small></th>'
                    '<td>%s<small>a month</small></td>'
                    '<td class="us">%s<small>a year · %s a month</small></td>'
                    '<td>%s<small>a month, billed yearly</small></td></tr>') % (
            n, '' if n == 1 else 's', n * B.LOGINS_PER_STORE, B.inr(B.chain(n, 'monthly')),
            B.inr(B.chain(n, 'annual') * 12), B.inr(B.chain(n, 'annual')), B.inr(B.chain(n, 'annual') / n))
    examples = '''<div class="ctable-wrap"><table class="ctable">
  <caption>What a chain pays, before 18%% GST. Yearly billing saves 15%% on every store, including additional ones. Quarterly billing saves 5%%.</caption>
  <thead><tr><th scope="col">Stores</th><th scope="col">Billed monthly</th><th scope="col" class="us">Billed yearly</th><th scope="col">Per store<br>(yearly billing)</th></tr></thead>
  <tbody>%s</tbody></table></div>''' % ex_rows

    mod_rows = ''
    for group, mods in MODULES:
        mod_rows += '<tr><th scope="rowgroup" colspan="4" style="background:var(--bg);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted)">%s</th></tr>' % e(group)
        for name, tier in mods:
            cells = ''.join('<td%s>%s</td>' % (' class="us"' if i == 1 else '', B.Y if TIER[tier] <= i else B.N) for i in range(3))
            label = ('<a class="mod-link" href="/modules/%s/">%s</a>' % (MR.MODULE_SLUG[name], e(name))) if name in MR.MODULE_SLUG else e(name)
            mod_rows += '<tr><th scope="row">%s</th>%s</tr>' % (label, cells)
    modtable = '''<div class="ctable-wrap"><table class="ctable">
  <thead><tr><th scope="col">Module</th><th scope="col">Free</th><th scope="col" class="us">Shop</th><th scope="col">Pro</th></tr></thead>
  <tbody>%s</tbody></table></div>''' % mod_rows

    addons = B.ADDONS
    addon_html = '<div class="addons">%s</div>' % ''.join(
        '<div class="addon"><div><b>%s</b><span>%s</span></div><div class="pr">%s<small style="font-size:12px;color:var(--ink-muted)">%s</small></div></div>' % (
            e(n), e(d), B.inr(p), s) for n, d, p, s in addons)

    pricing_faqs = [
      ('How does Pro pricing work?', 'Pro is priced per store. The first store is Rs 7,499 a month and every additional store is Rs 3,499 a month. So two stores is Rs 10,998 a month, three is Rs 14,497 and five is Rs 21,495, before any billing discount.'),
      ('Can I start Pro with just one store?', 'Yes. Pro covers one store at Rs 7,499 a month, with unlimited bills and all 26 modules. When you open another store, add it for Rs 3,499 a month; nothing changes for the first one.'),
      ('Do additional stores get the quarterly and yearly discount?', 'Yes. Quarterly billing saves 5% and yearly billing saves 15% on the whole bill, including every additional store.'),
      ('Do staff logins cost extra?', 'No. Every store includes 3 staff logins, and they come with the store automatically. Extra logins are Rs 499 a month each, only if one store needs more than three.'),
      ('What happens if I go over my monthly bills on Shop?', 'Billing is never blocked. You can add a 250-bill pack for Rs 499, which suits festival months, or move to Pro for unlimited bills.'),
      ('Are prices inclusive of GST?', 'No. All prices exclude 18% GST. Every invoice shows the base price and GST separately.'),
      ('Is there a free trial?', 'Shop and Pro include a 14-day trial. The Free plan has no time limit and needs no card.'),
      ('Can I change plans or cancel?', 'Upgrades apply immediately and are pro-rated; downgrades apply from the next billing period. You can cancel any time, and the plan stays active until the end of the period you paid for.'),
    ]

    body = '''<section class="hero-s"><div class="wrap">
  <div class="price-hero">
  <div class="ph-copy">
  <span class="eyebrow">Pricing</span>
  <h1>Pricing that grows <em>with your stores.</em></h1>
  <p class="lede">Three plans. Start free, move to Shop when the counter gets busy, and to Pro for unlimited bills, every module and more stores whenever you open them. Every store includes 3 staff logins.</p>
  <p class="answer">RetailerOS is <strong>free</strong> for one store up to 50 bills a month. <strong>Shop</strong> is ₹3,999 a month for one store. <strong>Pro</strong> is ₹7,499 a month for your store, and you can add more stores at ₹3,499 a month each. Paying quarterly saves 5%% and yearly saves 15%%. Prices exclude GST.</p>
  </div>
  <a class="pdf-card" href="/assets/RetailerOS-Pricing-Proposal.pdf" download data-track="proposal_download" aria-label="Download the RetailerOS pricing proposal, PDF, 4 pages">
    <span class="pdf-doc">
      <span class="pdf-sheet s3" aria-hidden="true"></span><span class="pdf-sheet s2" aria-hidden="true"></span>
      <picture class="pdf-sheet s1"><source type="image/webp" srcset="/assets/pricing-proposal-cover.webp"><img src="/assets/pricing-proposal-cover.jpg" alt="" width="420" height="594" loading="eager"></picture>
      <span class="pdf-badge" aria-hidden="true">PDF</span>
    </span>
    <span class="pdf-meta"><b>Pricing proposal</b><small>4 pages · plans, rates, store examples &amp; terms — ready to share with your partners or management</small>
      <span class="pdf-btn"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>Download PDF</span></span>
  </a>
  </div>
  <div class="hero-cta" style="margin-top:26px">
    <div class="cycle" role="group" aria-label="Billing cycle">
      <button type="button" data-cycle="monthly" aria-pressed="false">Monthly</button>
      <button type="button" data-cycle="quarterly" aria-pressed="true">Quarterly<span class="save">−5%%</span></button>
      <button type="button" data-cycle="annual" aria-pressed="false">Yearly<span class="save">−15%%</span></button>
    </div>
  </div>
  %s
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>How Pro pricing works</h2>
    <p>You pay ₹7,499 for your first store and ₹3,499 for each store after that. Every store brings its own 3 staff logins, so adding a store never means a separate charge for people.</p></div>
  %s
</div></section>

<section class="sec" id="calculator"><div class="wrap">
  <div class="sec-head"><h2>Work out your price</h2><p>Choose a plan, your number of stores and how you would like to pay.</p></div>
  <div class="calc">
    <div>
      <div class="field"><span class="lbl">Plan</span>
        <div class="seg" role="group" aria-label="Plan">
          <button type="button" data-calc-plan="shop" aria-pressed="false">Shop · 1 store</button>
          <button type="button" data-calc-plan="chain" aria-pressed="true">Pro</button>
        </div></div>
      <div class="field"><label for="storeCount">Number of stores</label>
        <div class="stepper"><button type="button" id="storeDown" aria-label="One fewer store">−</button>
          <input id="storeCount" type="number" inputmode="numeric" min="1" max="500" value="1" aria-label="Number of stores">
          <button type="button" id="storeUp" aria-label="One more store">+</button></div>
        <p class="calc-note">Pro starts with one store; each store you add is ₹3,499 a month.</p></div>
      <div class="field"><span class="lbl">Pay</span>
        <div class="seg" role="group" aria-label="Billing cycle">
          <button type="button" data-calc-cycle="monthly" aria-pressed="false">Monthly</button>
          <button type="button" data-calc-cycle="quarterly" aria-pressed="true">Quarterly</button>
          <button type="button" data-calc-cycle="annual" aria-pressed="false">Yearly</button>
        </div></div>
    </div>
    <div class="result" id="calcOut" aria-live="polite">
      <div class="big" id="cBig">—</div>
      <dl><dt>Stores</dt><dd id="cStores">—</dd><dt>Cost per store</dt><dd id="cPer">—</dd>
          <dt>Staff logins</dt><dd id="cLogins">—</dd><dt>Per month</dt><dd id="cBilled">—</dd>
          <dt>Per year</dt><dd id="cYear">—</dd></dl>
      <p class="hint" id="cHint"></p>
    </div>
  </div>
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>What is in each plan</h2><p>All 26 modules, and the plan that includes each one.</p></div>
  %s
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>Add-ons</h2><p>Top up what you need without changing plan. Available on Shop and Pro.</p></div>
  %s
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Pricing questions</h2></div>
  %s
</div></section>
%s''' % (plans, examples, modtable, addon_html, B.faq_html(pricing_faqs),
         B.cta_band('Start on Free and upgrade when you are ready', 'No card needed. Move to Shop or Pro in one click, and billing is never blocked while you decide.'))

    offers = {'@context': 'https://schema.org', '@type': 'SoftwareApplication', 'name': 'RetailerOS',
              'applicationCategory': 'BusinessApplication', 'operatingSystem': 'Web', 'url': B.SITE + '/pricing/',
              'offers': [
                {'@type': 'Offer', 'name': 'Free', 'price': '0', 'priceCurrency': 'INR', 'description': '1 store, 50 bills a month, 7 modules'},
                {'@type': 'Offer', 'name': 'Shop', 'price': str(B.PRICE['shop']['monthly']), 'priceCurrency': 'INR', 'description': '1 store, 750 bills a month, 20 modules, 3 staff logins'},
                {'@type': 'Offer', 'name': 'Pro (2 stores)', 'price': str(B.chain(2, 'monthly')), 'priceCurrency': 'INR',
                 'description': 'Rs 7,499 a month for the first store plus Rs 3,499 for each additional store. Unlimited bills, all 26 modules, 3 staff logins per store.'}]}
    built.append(B.page(path='/pricing/', title='Pricing — Free, Shop & Pro Plans | RetailerOS',
        desc='RetailerOS pricing: Free for 50 bills a month, Shop Rs 3,999 a month, Pro Rs 7,499 for the first store plus Rs 3,499 per extra store. Store calculator inside.',
        active='Pricing', trail=[('Pricing', '/pricing/')], body=body, faqs=pricing_faqs, extra_ld=[offers],
        chat_msg='Working out the cost for your stores? Tell me how many you run and I will give you the exact monthly figure.',
        chat_primary=('Work out my price', '#calculator'), chat_delay=12, chat_priority=True))

    # ── /compare/<x>/ ─────────────────────────────────────────
    def cell(v):
        if v == 'Y': return B.Y
        if v == 'N': return B.N
        return B.P_(v[2:])
    for c in C.COMPARES:
        rows = [(r[0],) + tuple(cell(x) for x in r[1:]) for r in c['rows']]
        who = ''.join('<div class="card"><h3>%s</h3><p>%s</p></div>' % (e(t), e(d)) for t, d in c['who'])
        body = '''<section class="hero-s"><div class="wrap narrow">
  <span class="eyebrow">Compare</span>
  <h1>%s</h1>
  <p class="answer">%s</p>
  <div class="hero-cta"><a class="btn btn-primary" href="/#start">Start free</a><a class="btn btn-ghost" href="/#book-demo">Book a 15-minute demo</a></div>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Where each one is strong</h2></div>
  <div class="verdict">
    <div class="them"><h3>Where %s is strong</h3><ul>%s</ul></div>
    <div class="us"><h3>Where RetailerOS goes further</h3><ul>%s</ul></div>
  </div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>Side by side</h2></div>
  %s
  %s
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Which should you choose?</h2></div>
  <div class="cards">%s</div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>Questions</h2></div>
  %s
</div></section>
%s''' % (c['h1'], e(c['answer']), e(c['vs']),
         ''.join('<li>%s</li>' % e(x) for x in c['them_good']),
         ''.join('<li>%s</li>' % e(x) for x in c['us_more']),
         B.ctable(c['cols'], rows, us_col=2),
         '<p class="disclaimer">%s</p>' % e(c['source']) if c['source'] else '',
         who, B.faq_html(c['faqs']),
         B.cta_band('Try RetailerOS free', 'Free for up to 50 bills a month, with no card needed — run it alongside what you use today.'))
        built.append(B.page(path='/compare/%s/' % c['slug'], title=c['title'], desc=c['desc'], active='Compare',
            trail=[('Compare', '/compare/'), (c['nav'], '/compare/%s/' % c['slug'])], body=body, faqs=c['faqs'],
            chat_msg=c['chat'], chat_primary=('See pricing', '/pricing/'), chat_delay=18))

    # ── /solutions/<x>/ ───────────────────────────────────────
    for s in C.SOLUTIONS:
        cards = ''.join('<div class="card"><h3>%s</h3><p>%s</p>%s</div>' % (
            e(t), e(d), '<span class="tag">%s</span>' % e(tag) if tag else '') for t, d, tag in s['cards'])
        SOL_MODS = {'mobile-phone-retail': ['schemes', 'pre-booking', 'automation', 'marketing'],
                    'appliance-and-ac-dealers': ['schemes', 'pre-booking', 'automation', 'marketing'],
                    'multi-store-chains': ['stores', 'marketplace', 'automation', 'schemes'],
                    'repair-and-service-centres': ['automation', 'schemes', 'marketing', 'stores']}
        by_mod = {m['slug']: m for m in MR.M.MODULE_PAGES}
        extra = '<section class="sec"><div class="wrap"><div class="sec-head"><h2>Modules that matter here</h2></div><div class="cards">%s</div><p class="mod-all"><a href="/modules/">See all 26 modules &rarr;</a></p></div></section>' % ''.join(
            '<a class="card" href="/modules/%s/"><h3>%s</h3><p>%s</p><span class="go">Explore &rarr;</span></a>' % (k, e(by_mod[k]['name']), e(by_mod[k]['desc'])) for k in SOL_MODS[s['slug']])
        if s['slug'] == 'multi-store-chains':
            extra += '<section class="sec"><div class="wrap"><div class="sec-head"><h2>What a chain costs</h2><p>₹7,499 for the first store, ₹3,499 for each store after it. <a href="/pricing/#calculator">Work out your exact figure →</a></p></div>%s</div></section>' % examples
        body = '''<section class="hero-s"><div class="wrap narrow">
  <span class="eyebrow">%s</span>
  <h1>%s</h1>
  <p class="answer">%s</p>
  <div class="hero-cta"><a class="btn btn-primary" href="/#start">Start free</a><a class="btn btn-ghost" href="/#book-demo">Book a 15-minute demo</a></div>
  <p class="hero-note">Free for up to 50 bills a month · no card needed</p>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>What it handles</h2></div>
  <div class="cards">%s</div>
</div></section>
%s
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Questions</h2></div>
  %s
</div></section>
%s''' % (e(s['eyebrow']), s['h1'], e(s['answer']), cards, extra, B.faq_html(s['faqs']),
         B.cta_band('See it on a real counter', 'A 15-minute walkthrough on a weekday, or start free today and set it up yourself in about ten minutes.'))
        built.append(B.page(path='/solutions/%s/' % s['slug'], title=s['title'], desc=s['desc'], active='Solutions',
            trail=[('Solutions', '/solutions/'), (s['nav'], '/solutions/%s/' % s['slug'])], body=body, faqs=s['faqs'],
            chat_msg=s['chat'], chat_primary=('See pricing', '/pricing/'), chat_delay=20))

    # ── hubs ──────────────────────────────────────────────────
    # photo per solution: the same 1:1 images as the homepage "Who it's for" cards
    SOL_IMG = {'mobile-phone-retail': ('mobile-phone-store', 'A RetailerOS staff member showing a phone to a customer at a mobile store counter'),
               'appliance-and-ac-dealers': ('appliance-ac-dealer', 'A RetailerOS staff member presenting air conditioners and washing machines to a customer'),
               'multi-store-chains': ('multi-store-chain', 'An owner at a laptop with the RetailerOS multi-store dashboard on the screen behind'),
               'repair-and-service-centres': ('repair-service-centre', 'A service desk technician showing a customer their repair status on a phone')}
    def pic(slug):
        f, alt = SOL_IMG[slug]
        return ('<picture class="card-img"><source type="image/webp" srcset="/assets/solutions/%s.webp">'
                '<img src="/assets/solutions/%s.jpg" alt="%s" width="880" height="880" loading="lazy" decoding="async"></picture>' % (f, f, e(alt)))
    def hub(path, name, eyebrow, h1, lede, items, base, extra=''):
        cards = ''.join('<a class="card%s" href="/%s/%s/">%s<div class="card-body"><h3>%s</h3><p>%s</p><span class="go">Read →</span></div></a>' % (
            ' has-img' if i['slug'] in SOL_IMG and base == 'solutions' else '', base, i['slug'],
            pic(i['slug']) if i['slug'] in SOL_IMG and base == 'solutions' else '', e(i['nav']), e(i['desc'])) for i in items)
        body = '''<section class="hero-s"><div class="wrap narrow"><span class="eyebrow">%s</span><h1>%s</h1><p class="lede">%s</p></div></section>
<section class="sec alt"><div class="wrap"><div class="cards">%s</div></div></section>%s%s''' % (
            e(eyebrow), h1, e(lede), cards, extra, B.cta_band('Not sure which fits?', 'Tell us what you sell and how many stores you run, and we will show you on a short call.'))
        return B.page(path=path, title='%s | RetailerOS' % name, desc=lede, active=eyebrow, trail=[(eyebrow, path)], body=body,
                      chat_msg='Not sure where to start? Tell me what you sell and I will point you to the right page.',
                      chat_primary=('See pricing', '/pricing/'), chat_delay=25)
        # side-by-side of the tools Indian electronics retailers use today (facts: tools/site_compares.py)
    MX_COLS = ['TallyPrime', 'Marg ERP 9+', 'Zoho Books + Inventory', 'APX ERP', 'RetailerOS']
    MX_ROWS = [
        ('Built for', ['P:Accounting', 'P:Pharma & FMCG first', 'P:Any business', 'P:Large chains', 'P:Electronics retail']),
        ('IMEI / serial tracking', ['P:Add-on', 'Y', 'P:Higher plans', 'Y', 'Y']),
        ('Brand schemes & claims', ['P:Not listed', 'P:Not listed', 'P:Not listed', 'Y', 'Y']),
        ('Repair job cards', ['P:Not listed', 'P:Not listed', 'P:Not listed', 'Y', 'Y']),
        ('GST returns filed in-app', ['Y', 'Y', 'Y', 'P:Not listed', 'P:Summaries']),
        ('Runs in browser & phones', ['P:Cloud extra', 'P:Cloud extra', 'Y', 'Y', 'Y']),
        ('Published pricing', ['Y', 'Y', 'Y', 'P:On request', 'Y']),
    ]
    matrix = '<section class="sec"><div class="wrap"><div class="sec-head"><h2>At a glance</h2><p>What each tool\'s own website lists, checked %s. "Not listed" means we could not find it on their site — not that it cannot be done.</p></div>%s</div></section>' % (
        e(SC.CHECKED), B.ctable(['What you need'] + [c for k, c in enumerate(MX_COLS) if SC.APX_CONFIRMED or k != 3],
                 [(r, *[B.Y if x == 'Y' else B.P_(x[2:]) for k, x in enumerate(v) if SC.APX_CONFIRMED or k != 3]) for r, v in MX_ROWS],
                 us_col=5 if SC.APX_CONFIRMED else 4))
    built.append(hub('/compare/', 'Compare RetailerOS', 'Compare', 'RetailerOS and the tools <em>retailers use today.</em>',
        'Honest, side-by-side comparisons with the software Indian electronics retailers use most — including where the other option is the better fit.',
        C.COMPARES, 'compare', extra=matrix))
    built.append(hub('/solutions/', 'Solutions for Electronics Retail', 'Solutions', 'Built for the way <em>your store works.</em>',
        'RetailerOS for mobile shops, appliance and AC dealers, multi-store chains, and repair and service centres.',
        C.SOLUTIONS, 'solutions'))
    built.extend(MR.module_pages(B, MODULES))
    built.extend(SX.pages(B))
    return built
