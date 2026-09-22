# -*- coding: utf-8 -*-
"""Renders every generated page. Called by build_site.py."""
import html, json
import site_content as C

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
    shop_bill = {'monthly': 'Billed monthly + 18% GST'}
    for c in ('quarterly', 'annual'):
        saving = (B.PRICE['shop']['monthly'] - B.PRICE['shop'][c]) * 12
        shop_bill[c] = 'Billed %s a %s + GST · save %s/yr' % (
            B.inr(B.PRICE['shop'][c] * B.MONTHS[c]), 'quarter' if c == 'quarterly' else 'year', B.inr(saving))
    chain_bill = {c: 'Minimum 2 stores: <strong>%s/mo</strong> + GST' % B.inr(B.chain(2, c)) for c in cyc}

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
    <div class="amt"><span data-by-cycle="{sp}">{sq}</span> <small>/ month</small></div>
    <p class="bill" data-by-cycle="{sb}">{sbq}</p>
    <ul><li>1 store · 3 staff logins</li><li>750 bills a month</li><li>20 modules — adds IMEI Tracker, Schemes, Repairs, Claims, Reports</li>
        <li>200 WhatsApp messages a month</li><li>Email support, 48-hour reply</li></ul>
    <a class="btn btn-primary" href="/#start">Start 14-day trial</a>
  </article>
  <article class="plan">
    <h3>Chain</h3><p class="for">For owners running two or more stores.</p>
    <div class="amt"><span data-by-cycle="{cp}">{cq}</span> <small>/ month, first store</small></div>
    <p class="extra" data-by-cycle="{ce}">{ceq}</p>
    <p class="bill" data-by-cycle="{cb}">{cbq}</p>
    <ul><li>Minimum 2 stores · 3 logins per store</li><li>Unlimited bills</li><li>All 26 modules — adds Stores, Marketing, Marketplace, Automation</li>
        <li>2,000 WhatsApp messages a month</li><li>Priority support with phone callback</li></ul>
    <a class="btn btn-ghost" href="#calculator">Price my stores</a>
  </article>
</div>'''.format(
        sp=by({c: B.inr(B.PRICE['shop'][c]) for c in cyc}), sq=B.inr(B.PRICE['shop']['quarterly']),
        sb=by(shop_bill), sbq=shop_bill['quarterly'],
        cp=by({c: B.inr(B.PRICE['first'][c]) for c in cyc}), cq=B.inr(B.PRICE['first']['quarterly']),
        ce=by({c: '+ %s/mo for each additional store' % B.inr(B.PRICE['extra'][c]) for c in cyc}),
        ceq='+ %s/mo for each additional store' % B.inr(B.PRICE['extra']['quarterly']),
        cb=by(chain_bill), cbq=chain_bill['quarterly'])

    ex_rows = ''
    for n in (2, 3, 5, 10, 15, 25):
        ex_rows += '<tr><th scope="row">%d stores<small>%d staff logins</small></th><td>%s</td><td class="us">%s</td><td>%s</td></tr>' % (
            n, n * B.LOGINS_PER_STORE, B.inr(B.chain(n, 'monthly')), B.inr(B.chain(n, 'annual')),
            B.inr(B.chain(n, 'annual') / n))
    examples = '''<div class="ctable-wrap"><table class="ctable">
  <caption>Monthly figures before 18%% GST. Yearly billing saves 15%% on every store, including additional ones.</caption>
  <thead><tr><th scope="col">Chain size</th><th scope="col">Pay monthly</th><th scope="col" class="us">Pay yearly<br>(per month)</th><th scope="col">Per store<br>(yearly)</th></tr></thead>
  <tbody>%s</tbody></table></div>''' % ex_rows

    mod_rows = ''
    for group, mods in MODULES:
        mod_rows += '<tr><th scope="rowgroup" colspan="4" style="background:var(--bg);font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-muted)">%s</th></tr>' % e(group)
        for name, tier in mods:
            cells = ''.join('<td%s>%s</td>' % (' class="us"' if i == 1 else '', B.Y if TIER[tier] <= i else B.N) for i in range(3))
            mod_rows += '<tr><th scope="row">%s</th>%s</tr>' % (e(name), cells)
    modtable = '''<div class="ctable-wrap"><table class="ctable">
  <thead><tr><th scope="col">Module</th><th scope="col">Free</th><th scope="col" class="us">Shop</th><th scope="col">Chain</th></tr></thead>
  <tbody>%s</tbody></table></div>''' % mod_rows

    addons = [('Extra store', 'Chain plan · 3 logins included', 3499, '/mo'), ('Extra staff login', 'Only if a store needs more than 3', 499, '/mo'),
              ('250-bill pack', 'For festival months on Shop', 499, ''), ('500 WhatsApp messages', 'Top-up pack', 249, ''),
              ('10 GB storage', 'Per month', 149, '/mo'), ('Dedicated WhatsApp number', 'Your own business number', 1499, '/mo'),
              ('Claim recovery, done for you', 'We file your scheme and warranty claims', 2499, '/mo')]
    addon_html = '<div class="addons">%s</div>' % ''.join(
        '<div class="addon"><div><b>%s</b><span>%s</span></div><div class="pr">%s<small style="font-size:12px;color:var(--ink-muted)">%s</small></div></div>' % (
            e(n), e(d), B.inr(p), s) for n, d, p, s in addons)

    pricing_faqs = [
      ('How does Chain pricing work?', 'Chain is priced per store. The first store is Rs 7,499 a month and every additional store is Rs 3,499 a month, with a minimum of two stores. So two stores is Rs 10,998 a month, three is Rs 14,497 and five is Rs 21,495, before any billing discount.'),
      ('Why does Chain need at least two stores?', 'Chain is built for running several stores together: cross-store stock, reporting and IMEI search only make sense across two or more. A single store is fully covered by the Shop plan.'),
      ('Do additional stores get the quarterly and yearly discount?', 'Yes. Quarterly billing saves 5% and yearly billing saves 15% on the whole bill, including every additional store.'),
      ('Do staff logins cost extra?', 'No. Every store includes 3 staff logins, and they come with the store automatically. Extra logins are Rs 499 a month each, only if one store needs more than three.'),
      ('What happens if I go over my monthly bills on Shop?', 'Billing is never blocked. You can add a 250-bill pack for Rs 499, which suits festival months, or move to Chain for unlimited bills.'),
      ('Are prices inclusive of GST?', 'No. All prices exclude 18% GST. Every invoice shows the base price and GST separately.'),
      ('Is there a free trial?', 'Shop and Chain include a 14-day trial. The Free plan has no time limit and needs no card.'),
      ('Can I change plans or cancel?', 'Upgrades apply immediately and are pro-rated; downgrades apply from the next billing period. You can cancel any time, and the plan stays active until the end of the period you paid for.'),
    ]

    body = '''<section class="hero-s"><div class="wrap">
  <span class="eyebrow">Pricing</span>
  <h1>Pricing that grows <em>with your stores.</em></h1>
  <p class="lede">Three plans. Start free, move to Shop when the counter gets busy, and to Chain when you open a second store. Every store includes 3 staff logins.</p>
  <p class="answer">RetailerOS is <strong>free</strong> for one store up to 50 bills a month. <strong>Shop</strong> is ₹3,999 a month for one store. <strong>Chain</strong> is ₹7,499 a month for the first store plus ₹3,499 for each additional store, with a minimum of two. Paying quarterly saves 5%% and yearly saves 15%%. Prices exclude GST.</p>
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
  <div class="sec-head"><h2>How Chain pricing works</h2>
    <p>You pay ₹7,499 for your first store and ₹3,499 for each store after that, with a minimum of two. Every store brings its own 3 staff logins, so adding a store never means a separate charge for people.</p></div>
  %s
</div></section>

<section class="sec" id="calculator"><div class="wrap">
  <div class="sec-head"><h2>Work out your price</h2><p>Choose a plan, your number of stores and how you would like to pay.</p></div>
  <div class="calc">
    <div>
      <div class="field"><span class="lbl">Plan</span>
        <div class="seg" role="group" aria-label="Plan">
          <button type="button" data-calc-plan="shop" aria-pressed="false">Shop · 1 store</button>
          <button type="button" data-calc-plan="chain" aria-pressed="true">Chain · 2+ stores</button>
        </div></div>
      <div class="field"><label for="storeCount">Number of stores</label>
        <div class="stepper"><button type="button" id="storeDown" aria-label="One fewer store">−</button>
          <input id="storeCount" type="number" inputmode="numeric" min="2" max="500" value="2" aria-label="Number of stores">
          <button type="button" id="storeUp" aria-label="One more store">+</button></div>
        <p class="calc-note">Chain needs at least two stores. Shop covers one.</p></div>
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
          <dt>Staff logins</dt><dd id="cLogins">—</dd><dt>You are billed</dt><dd id="cBilled">—</dd>
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
  <div class="sec-head"><h2>Add-ons</h2><p>Top up what you need without changing plan. Available on Shop and Chain.</p></div>
  %s
</div></section>

<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Pricing questions</h2></div>
  %s
</div></section>
%s''' % (plans, examples, modtable, addon_html, B.faq_html(pricing_faqs),
         B.cta_band('Start on Free and upgrade when you are ready', 'No card needed. Move to Shop or Chain in one click, and billing is never blocked while you decide.'))

    offers = {'@context': 'https://schema.org', '@type': 'SoftwareApplication', 'name': 'RetailerOS',
              'applicationCategory': 'BusinessApplication', 'operatingSystem': 'Web', 'url': B.SITE + '/pricing/',
              'offers': [
                {'@type': 'Offer', 'name': 'Free', 'price': '0', 'priceCurrency': 'INR', 'description': '1 store, 50 bills a month, 7 modules'},
                {'@type': 'Offer', 'name': 'Shop', 'price': str(B.PRICE['shop']['monthly']), 'priceCurrency': 'INR', 'description': '1 store, 750 bills a month, 20 modules, 3 staff logins'},
                {'@type': 'Offer', 'name': 'Chain (2 stores)', 'price': str(B.chain(2, 'monthly')), 'priceCurrency': 'INR',
                 'description': 'Rs 7,499 a month for the first store plus Rs 3,499 for each additional store, minimum two. Unlimited bills, all 26 modules, 3 staff logins per store.'}]}
    built.append(B.page(path='/pricing/', title='Pricing — Free, Shop & Chain Plans | RetailerOS',
        desc='RetailerOS pricing: free for 50 bills a month, Shop Rs 3,999 a month, Chain Rs 7,499 for the first store plus Rs 3,499 per additional store. 3 staff logins per store. Calculator included.',
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
        extra = ''
        if s['slug'] == 'multi-store-chains':
            extra = '<section class="sec"><div class="wrap"><div class="sec-head"><h2>What a chain costs</h2><p>₹7,499 for the first store, ₹3,499 for each store after it. <a href="/pricing/#calculator">Work out your exact figure →</a></p></div>%s</div></section>' % examples
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
    def hub(path, name, eyebrow, h1, lede, items, base):
        cards = ''.join('<a class="card" href="/%s/%s/"><h3>%s</h3><p>%s</p><span class="go">Read →</span></a>' % (
            base, i['slug'], e(i['nav']), e(i['desc'])) for i in items)
        body = '''<section class="hero-s"><div class="wrap narrow"><span class="eyebrow">%s</span><h1>%s</h1><p class="lede">%s</p></div></section>
<section class="sec alt"><div class="wrap"><div class="cards">%s</div></div></section>%s''' % (
            e(eyebrow), h1, e(lede), cards, B.cta_band('Not sure which fits?', 'Tell us what you sell and how many stores you run, and we will show you on a short call.'))
        return B.page(path=path, title='%s | RetailerOS' % name, desc=lede, active=eyebrow, trail=[(eyebrow, path)], body=body,
                      chat_msg='Not sure where to start? Tell me what you sell and I will point you to the right page.',
                      chat_primary=('See pricing', '/pricing/'), chat_delay=25)
    built.append(hub('/compare/', 'Compare RetailerOS', 'Compare', 'How RetailerOS <em>compares.</em>',
        'Honest, side-by-side comparisons with the software Indian electronics retailers use most — including where the other option is the better fit.',
        C.COMPARES, 'compare'))
    built.append(hub('/solutions/', 'Solutions for Electronics Retail', 'Solutions', 'Built for the way <em>your store works.</em>',
        'RetailerOS for mobile shops, appliance and AC dealers, multi-store chains, and repair and service centres.',
        C.SOLUTIONS, 'solutions'))
    return built
