# -*- coding: utf-8 -*-
"""Renders /modules/<slug>/ and the /modules/ hub from tools/site_modules.py.
Called from site_pages.build()."""
import html
import re

import site_modules as M

e = lambda s: html.escape(s, quote=True)
MODULE_SLUG = {m['name']: m['slug'] for m in M.MODULE_PAGES}   # module name -> page slug


def module_demo(kind):
    """Illustrated mock-ups in HTML/CSS. Always shown with an 'Illustration' caption."""
    if kind == 'tracker':
        rows = [('Samsung', 86, '₹8.6L of ₹10L', 'amber', '42 of 50 units'),
                ('Vivo', 104, '₹5.2L of ₹5L', 'green', 'target met · next slab at ₹6L'),
                ('Oppo', 62, '₹3.1L of ₹5L', 'grey', '31 of 50 units'),
                ('LG', 91, '₹4.55L of ₹5L', 'amber', 'ACs and refrigerators')]
        bars = ''.join(
            '<div class="mdt-row"><div class="mdt-top"><b>%s</b><span>%s</span></div>'
            '<div class="mdt-bar"><i class="%s" style="width:%d%%"></i></div><small>%d%% · %s</small></div>'
            % (b, amt, c, min(p, 100), p, note) for b, p, amt, c, note in rows)
        return '<div class="md-card"><div class="md-head"><b>Brand targets</b><span>Q3 · FY27</span></div>%s</div>' % bars
    if kind == 'timeline':
        msgs = [('Day 0', 'Thank you for buying your Galaxy S24 from Mhatre Mobiles! Your invoice is attached.', 'Sent'),
                ('Day 3', "Tip: move your WhatsApp chats to the new phone in 2 minutes — here's how.", 'Sent'),
                ('Day 10', '15% off a case and screen guard this week, just for you.', 'Scheduled'),
                ('Day 330', 'Your warranty ends next month. Extend it for another year?', 'Scheduled')]
        items = ''.join('<li><span class="mdl-day">%s</span><div class="mdl-msg">%s<small>%s</small></div></li>'
                        % (d, e(m), st) for d, m, st in msgs)
        return ('<div class="md-card"><div class="md-head"><b>Campaign · New smartphone</b><span>after sale</span></div>'
                '<ol class="md-timeline">%s</ol></div>' % items)
    if kind == 'creative':
        return ('<div class="md-card"><div class="md-head"><b>Create a creative</b><span>AI</span></div>'
                '<div class="mdc-prompt">Diwali offer — 20% off Samsung Galaxy phones, this week only</div>'
                '<div class="mdc-art"><span class="mdc-tag">Diwali offer</span><strong>20% off</strong>'
                '<em>Samsung Galaxy</em><small>This week only · Mhatre Mobiles</small></div>'
                '<div class="mdc-actions"><span>Download</span><span class="wa">Share on WhatsApp</span></div></div>')
    if kind == 'campaign':
        return ('<div class="md-card"><div class="md-head"><b>Galaxy launch · pre-booking</b><span>live</span></div>'
                '<div class="mdp-stats"><div><strong>84</strong><small>bookings</small></div>'
                '<div><strong>₹2,000</strong><small>deposit</small></div><div><strong>61</strong><small>confirmed</small></div></div>'
                '<div class="mdt-bar"><i class="green" style="width:73%"></i></div>'
                '<ul class="mdp-list"><li><b>Priya S.</b><span class="ok">Confirmed</span></li>'
                '<li><b>Arjun M.</b><span class="ok">Confirmed</span></li><li><b>Neha K.</b><span class="wait">Pending</span></li></ul>'
                '<div class="mdc-actions"><span class="wa">Share booking page</span></div></div>')
    if kind == 'storefront':
        return ('<div class="md-card"><div class="md-head"><b>Online orders</b><span>your store</span></div>'
                '<ul class="mdp-list"><li><b>#1042 · Galaxy A55</b><span class="ok">Delivered</span></li>'
                '<li><b>#1043 · Wireless earbuds</b><span class="ship">Shipped</span></li>'
                '<li><b>#1044 · 55" LED TV</b><span class="wait">Confirmed</span></li></ul>'
                '<div class="md-head md-sub"><b>Retailer marketplace</b><span class="soon">Coming soon</span></div>'
                '<ul class="mdp-list"><li><b>3 × 43" TV · open box</b><span>Pune</span></li>'
                '<li><b>10 × Redmi 13C · new</b><span>Nashik</span></li></ul></div>')
    if kind == 'stores':
        rows = [('Andheri', '₹2.4L', 38), ('Borivali', '₹1.9L', 31), ('Thane', '₹1.2L', 22), ('Vashi', '₹88k', 15)]
        r = ''.join('<li><b>%s</b><span>%s</span><small>%d bills</small></li>' % x for x in rows)
        return ('<div class="md-card"><div class="md-head"><b>All stores · today</b><span>₹6.38L</span></div>'
                '<ul class="mds-list">%s</ul></div>' % r)
    return ''


PAGE = '''<section class="hero-s mod-hero"><div class="wrap mod-hero-in">
  <div class="mod-copy">
    <span class="eyebrow">{eyebrow}</span>
    <h1>{h1}</h1>
    <p class="answer">{answer}</p>
    <p class="mod-plan"><span class="dot {plan}"></span>{plan_line}</p>
    <div class="hero-cta"><a class="btn btn-primary" href="/#start">Start free</a><a class="btn btn-ghost" href="/#book-demo">Book a 15-minute demo</a></div>
  </div>
  <figure class="mod-demo" aria-label="Illustration of the {name} module">{demo}<figcaption>Illustration</figcaption></figure>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>What's inside</h2></div>
  {split}{feats}
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>How it works</h2></div>
  <ol class="mod-steps">{steps}</ol>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>On a real counter</h2></div>
  <div class="mod-exs">{examples}</div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>Questions</h2></div>
  {faq}
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Works well with</h2></div>
  <div class="cards">{related}</div>
  <p class="mod-all"><a href="/modules/">See all 26 modules &rarr;</a></p>
</div></section>
{cta}'''

HUB = '''<section class="hero-s"><div class="wrap narrow"><span class="eyebrow">Modules</span>
  <h1>26 modules. <em>One login.</em></h1><p class="answer">{answer}</p></div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Explore a module</h2></div>
  <div class="cards">{featured}</div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="sec-head"><h2>The full system</h2>
    <p class="hub-key"><span class="dot free"></span>Free <span class="dot shop"></span>Shop <span class="dot chain"></span>Pro</p></div>
  <div class="hub-groups">{groups}</div>
</div></section>
{cta}'''

HUB_ANSWER = ('RetailerOS has 26 modules, all on one login. Seven are free — Sales Desk, Invoices, Inventory, '
              'Clients, Dashboard, Settings and onboarding. Shop adds 13, including IMEI tracking, Schemes, Repairs, '
              'Claims and Pre-booking. Pro adds the last 6: Stores, Marketing, Marketplace, Integrations, '
              'Automation and Promoters.')


def module_pages(B, MODULES):
    out = []
    by_slug = {m['slug']: m for m in M.MODULE_PAGES}
    tiers = {n: t for _, items in MODULES for n, t in items}
    for m in M.MODULE_PAGES:
        assert tiers.get(m['name']) == m['plan'], '%s: plan %s does not match the module table' % (m['name'], m['plan'])
        soon = lambda st: st == 'soon'
        feats = ''.join('<div class="card%s"><h3>%s</h3><p>%s</p>%s</div>' % (
            ' is-soon' if soon(st) else '', e(t), e(d), '<span class="tag soon">Coming soon</span>' if soon(st) else '')
            for t, d, st in m['features'])
        split = ''
        if m.get('split'):
            split = '<div class="mod-split">%s</div>' % ''.join(
                '<div class="mod-half%s"><div class="mod-half-top"><h3>%s</h3>%s</div><p class="mod-half-sub">%s</p><ul>%s</ul></div>' % (
                    ' is-soon' if soon(st) else '', e(t),
                    '<span class="tag soon">Coming soon</span>' if soon(st) else '<span class="tag live">Available</span>',
                    e(sub), ''.join('<li>%s</li>' % e(x) for x in items))
                for t, sub, st, items in m['split'])
        live_features = [t for t, _, st in m['features'] if not soon(st)] + \
                        [x for _, _, st, items in m.get('split', []) if not soon(st) for x in items]
        app_ld = {'@context': 'https://schema.org', '@type': 'SoftwareApplication',
                  'name': 'RetailerOS %s' % m['name'], 'applicationCategory': 'BusinessApplication',
                  'applicationSubCategory': 'Retail management software', 'operatingSystem': 'Web',
                  'url': B.SITE + '/modules/%s/' % m['slug'], 'description': m['answer'],
                  'featureList': live_features,
                  'isPartOf': {'@type': 'SoftwareApplication', 'name': 'RetailerOS', 'url': B.SITE + '/'},
                  'publisher': {'@type': 'Organization', 'name': 'Khosha Systems', 'url': 'https://khoshasystems.com'}}
        plan_line = {'shop': 'Included on Shop (₹3,999 a month) and Pro',
                     'chain': 'Part of the Pro plan', 'free': 'Free on every plan'}[m['plan']]
        body = PAGE.format(
            eyebrow=e(m['eyebrow']), h1=m['h1'], answer=e(m['answer']), plan=m['plan'], plan_line=e(plan_line),
            name=e(m['name']), demo=module_demo(m['demo']), split=split,
            feats='<div class="cards">%s</div>' % feats if feats else '',
            steps=''.join('<li><h3>%s</h3><p>%s</p></li>' % (e(t), e(d)) for t, d in m['steps']),
            examples=''.join('<div class="mod-ex"><h3>%s</h3><p>%s</p></div>' % (e(t), e(d)) for t, d in m['examples']),
            faq=B.faq_html(m['faqs']),
            related=''.join('<a class="card" href="/modules/%s/"><h3>%s</h3><p>%s</p><span class="go">Explore &rarr;</span></a>' % (
                r, e(by_slug[r]['name']), e(by_slug[r]['desc'])) for r in m['related']),
            cta=B.cta_band('See %s on your own counter' % m['name'],
                           'Start free today, or book a 15-minute walkthrough on a weekday.'))
        out.append(B.page(path='/modules/%s/' % m['slug'], title=m['title'], desc=m['desc'], active='Product',
                          trail=[('Modules', '/modules/'), (m['name'], '/modules/%s/' % m['slug'])], body=body,
                          faqs=m['faqs'], extra_ld=[app_ld], chat_msg=m['chat'],
                          chat_primary=('See pricing', '/pricing/'), chat_delay=20))

    groups = ''
    for g, items in MODULES:
        pills = ''.join(
            ('<a class="hub-pill %s" href="/modules/%s/">%s<span aria-hidden="true">&rarr;</span></a>' % (t, MODULE_SLUG[n], e(n)))
            if n in MODULE_SLUG else '<span class="hub-pill %s">%s</span>' % (t, e(n)) for n, t in items)
        groups += '<div class="hub-group"><h3>%s <small>%d</small></h3><div class="hub-pills">%s</div></div>' % (e(g), len(items), pills)
    featured = ''.join(
        '<a class="card" href="/modules/%s/"><span class="tag %s">%s</span><h3>%s</h3><p>%s</p><span class="go">Explore &rarr;</span></a>' % (
            m['slug'], m['plan'], M.PLAN[m['plan']], e(m['name']), e(m['desc'])) for m in M.MODULE_PAGES)
    body = HUB.format(answer=e(HUB_ANSWER), featured=featured, groups=groups,
                      cta=B.cta_band('Start with the free seven', 'Switch the rest on when your counter gets busy.'))
    out.append(B.page(path='/modules/', title='RetailerOS Modules: Schemes, Automation, Marketing & More',
                      desc='All 26 RetailerOS modules on one login: billing, IMEI tracking, schemes, repairs, pre-booking, automation, marketing, marketplace and multi-store.',
                      active='Product', trail=[('Modules', '/modules/')], body=body,
                      chat_msg='Looking for a particular feature? Ask me and I will point you to the module.',
                      chat_primary=('See pricing', '/pricing/'), chat_delay=25))
    return out


def link_modules(text):
    """Link module names in a plain module LIST (not prose) to their landing pages.
    Only whole words, only outside existing tags/links."""
    parts = re.split(r'(<a\b[^>]*>.*?</a>|<[^>]+>)', text)
    for i, p in enumerate(parts):
        if p.startswith('<'):
            continue
        for name, slug in MODULE_SLUG.items():
            p = re.sub(r'(?<![\w-])%s(?![\w-])' % re.escape(name),
                       '<a class="mod-link" href="/modules/%s/">%s</a>' % (slug, name), p, count=1)
        parts[i] = p
    return ''.join(parts)
