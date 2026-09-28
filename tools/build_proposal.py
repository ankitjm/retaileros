#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
The downloadable pricing proposal:  landing-page/assets/RetailerOS-Pricing-Proposal.pdf

    python3 tools/build_proposal.py          # needs node + puppeteer (installed on kosha.tech)

Built from the SAME constants as the website (PRICE, ADDONS, the module table),
so the PDF and /pricing/ cannot quote different numbers. It writes a stamp
(assets/pricing-proposal.json) with a hash of those constants;
tools/validate_site.py refuses to deploy if the prices changed and this script
was not re-run.

NEVER put client-specific custom modules in here. This is the public proposal.
"""
import base64, hashlib, html, io, json, os, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import build_site as B          # noqa: E402
import site_pages as SP         # noqa: E402

OUT = os.path.join(B.OUT, 'assets', 'RetailerOS-Pricing-Proposal.pdf')
STAMP = os.path.join(B.OUT, 'assets', 'pricing-proposal.json')
AS_OF = '28 September 2026'
WA = '+91 88849 72272'
e = lambda s: html.escape(str(s), quote=True)
inr = B.inr


def stamp_hash():
    """Hash of every number the PDF quotes. validate_site.py recomputes it."""
    src = json.dumps({'price': B.PRICE, 'addons': B.ADDONS, 'modules': SP.MODULES,
                      'logins': B.LOGINS_PER_STORE, 'min': B.CHAIN_MIN}, sort_keys=True, ensure_ascii=False)
    return hashlib.sha1(src.encode('utf-8')).hexdigest()


def img(path, width, quality=78):
    """Embed an image, downscaled, as a data URI (keeps the PDF small and self-contained)."""
    from PIL import Image
    im = Image.open(path)
    has_alpha = im.mode in ('RGBA', 'LA')
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    buf = io.BytesIO()
    if has_alpha:
        im.save(buf, 'PNG', optimize=True); mime = 'image/png'
    else:
        im.convert('RGB').save(buf, 'JPEG', quality=quality, optimize=True, progressive=True); mime = 'image/jpeg'
    return 'data:%s;base64,%s' % (mime, base64.b64encode(buf.getvalue()).decode())


def build_html():
    A = lambda *p: os.path.join(B.OUT, 'assets', *p)
    logo_mark, logo_word = img(A('logo-mark.png'), 120), img(A('logo-wordmark.png'), 360)
    presenter = img(A('hero-photos', 'presenter.png'), 520)
    multistore = img(A('hero-photos', 'multistore-640.png'), 640)
    who = [(img(A('solutions', f + '.jpg'), 420), t, d) for f, t, d in [
        ('mobile-phone-store', 'Mobile phone stores', 'IMEI on every handset, brand scheme claims, warranty and repairs.'),
        ('appliance-ac-dealer', 'AC & appliance dealers', 'Serial-tracked ACs, fridges and TVs, installations and service jobs.'),
        ('multi-store-chain', 'Multi-store chains', 'Every store from one owner login, 3 staff logins per store.'),
        ('repair-service-centre', 'Repair & service centres', 'Job cards from intake to handover, with the unit\'s history.')]]
    P = B.PRICE
    M = B.MONTHS

    def cyc(key):  # (monthly, quarterly total, quarterly per month, yearly total, yearly per month)
        return P[key]['monthly'], P[key]['quarterly'] * 3, P[key]['quarterly'], P[key]['annual'] * 12, P[key]['annual']

    def rate_row(label, sub, key):
        mo, qt, qm, yt, ym = cyc(key)
        return ('<tr><th>%s<small>%s</small></th><td><b>%s</b><small>a month</small></td>'
                '<td><b>%s</b><small>every 3 months · %s a month</small></td>'
                '<td class="hl"><b>%s</b><small>a year · %s a month</small></td></tr>') % (
            e(label), e(sub), inr(mo), inr(qt), inr(qm), inr(yt), inr(ym))

    rates = (rate_row('Shop', 'one store', 'shop') + rate_row('Pro — first store', 'carries the platform', 'first') +
             rate_row('Extra store (optional)', '3 staff logins included', 'extra'))

    chain_rows = ''.join(
        '<tr><th>%d store%s<small>%d staff logins</small></th><td><b>%s</b><small>a month</small></td>'
        '<td><b>%s</b><small>every 3 months · %s a month</small></td><td class="hl"><b>%s</b><small>a year · %s a month</small></td></tr>' % (
            n, '' if n == 1 else 's', n * B.LOGINS_PER_STORE, inr(B.chain(n, 'monthly')), inr(B.chain(n, 'quarterly') * 3), inr(B.chain(n, 'quarterly')),
            inr(B.chain(n, 'annual') * 12), inr(B.chain(n, 'annual')))
        for n in (1, 2, 3, 5, 10, 15))

    tier_n = {t: sum(1 for _, items in SP.MODULES for _, x in items if SP.TIER[x] <= SP.TIER[t]) for t in ('free', 'shop', 'chain')}
    mods = ''.join('<div class="mg"><h4>%s</h4><p>%s</p></div>' % (
        e(g), ' '.join('<span class="pill %s">%s</span>' % (t, e(n)) for n, t in items)) for g, items in SP.MODULES)

    addons = ''.join('<tr><th>%s<small>%s</small></th><td><b>%s</b><small>%s</small></td></tr>' % (
        e(n), e(d), inr(p), e(s.replace('/mo', 'a month').strip())) for n, d, p, s in B.ADDONS)

    def page(n, title, sub, body):
        return '''<section class="page">
  <header class="ph"><div class="brand"><img src="%s" alt=""><img class="word" src="%s" alt="RetailerOS"><span>BY KHOSHÀ SYSTEMS</span></div>
    <div class="pt"><b>%s</b><small>%s</small></div></header>
  <div class="rule"></div>
  %s
  <footer class="pf"><span><b>RetailerOS</b> · Pricing proposal · prices as of %s</span><span>%d / 4</span></footer>
</section>''' % (logo_mark, logo_word, e(title), e(sub), body, AS_OF, n)

    p1 = page(1, 'Pricing proposal', 'For owners and buyers', '''
  <div class="cover">
    <div>
      <p class="kicker">RETAILEROS PRICING PROPOSAL</p>
      <h1>Billing, stock, schemes and customers — <em>one system for every counter.</em></h1>
      <p class="lead">RetailerOS is retail management software built for Indian consumer electronics stores: mobiles, appliances, ACs, TVs and laptops. This document sets out what it does, what it costs and what you get — so you can review it with your partners or management before you decide.</p>
    </div>
    <img class="presenter" src="%s" alt="">
  </div>
  <p class="kicker">THE PLANS AT A GLANCE</p>
  <div class="glance">
    <div class="g free"><b>Free</b><strong>₹0</strong><small>forever · 1 store · 50 bills a month · 7 modules</small></div>
    <div class="g shop"><b>Shop</b><strong>%s<i>/ month</i></strong><small>1 store · 750 bills a month · 20 modules</small></div>
    <div class="g chain"><b>Pro</b><strong>%s<i>/ month, first store</i></strong><small>unlimited bills · all 26 modules · add stores any time at %s a month each</small></div>
  </div>
  <p class="note">Monthly rates shown. Quarterly billing saves 5%%, yearly billing saves 15%% — on every store, including additional ones. All prices exclude 18%% GST.</p>
  <div class="isnot">
    <div><p class="kicker">WHAT RETAILEROS IS</p><ul>
      <li>The operating system for your retail counter — GST billing, inventory and purchase orders</li>
      <li>Every unit tracked by IMEI or serial number, from purchase to sale to warranty</li>
      <li>Brand schemes and warranty claims tracked until the brand pays</li>
      <li>Repairs on job cards, customer khaata, WhatsApp receipts and follow-ups</li>
      <li>Every store run from one owner login</li></ul></div>
    <div><p class="kicker">WHAT IT IS NOT</p><ul class="no">
      <li>Not hardware — printers, scanners and devices are not included</li>
      <li>Not internet connectivity</li>
      <li>Not accounting or tax advisory — your CA can keep your books where they are today</li>
      <li>Not a lock-in — cancel any time; your data is yours to export</li></ul></div>
  </div>''' % (presenter, inr(P['shop']['monthly']), inr(P['first']['monthly']), inr(P['extra']['monthly'])))

    p2 = page(2, 'What you get', 'Who it is for and the 26 modules', '''
  <p class="kicker">WHO IT IS FOR</p>
  <div class="who">%s</div>
  <p class="kicker">26 MODULES, ONE LOGIN</p>
  <p class="note tight"><span class="pill free">Free</span> %d modules &nbsp; <span class="pill shop">Shop</span> %d modules &nbsp; <span class="pill chain">Pro</span> all %d — each plan includes everything in the one before it.</p>
  <div class="mods">%s</div>''' % (
        ''.join('<figure><img src="%s" alt=""><figcaption><b>%s</b>%s</figcaption></figure>' % (s, e(t), e(d)) for s, t, d in who),
        tier_n['free'], tier_n['shop'], tier_n['chain'], mods))

    p3 = page(3, 'Plans and rates', 'All prices exclude 18% GST', '''
  <p class="kicker">WHAT IS IN EACH PLAN</p>
  <table class="t plan">
    <thead><tr><th></th><th>Free</th><th>Shop</th><th class="hl">Pro</th></tr></thead>
    <tbody>
      <tr><th>Stores</th><td>1</td><td>1</td><td class="hl">1, plus any you add</td></tr>
      <tr><th>Bills</th><td>50 a month</td><td>750 a month</td><td class="hl">Unlimited</td></tr>
      <tr><th>Modules</th><td>%d</td><td>%d</td><td class="hl">All %d</td></tr>
      <tr><th>Staff logins</th><td>3</td><td>3</td><td class="hl">3 per store</td></tr>
      <tr><th>WhatsApp messages</th><td>—</td><td>200 a month</td><td class="hl">2,000 a month</td></tr>
      <tr><th>Cross-store stock, staff and IMEI search</th><td>—</td><td>—</td><td class="hl">Yes</td></tr>
      <tr><th>Support</th><td>Knowledge base &amp; community</td><td>Email (48 h) &amp; in-app chat</td><td class="hl">Priority 12 h email, WhatsApp, phone callback</td></tr>
      <tr><th>Trial</th><td>No time limit</td><td>14 days</td><td class="hl">14 days</td></tr>
    </tbody>
  </table>
  <p class="kicker">RATE CARD — BY BILLING CYCLE</p>
  <table class="t rate">
    <thead><tr><th>Licence</th><th>Billed monthly</th><th>Billed quarterly <span class="save">save 5%%</span></th><th class="hl">Billed yearly <span class="save">save 15%%</span></th></tr></thead>
    <tbody>%s</tbody>
  </table>
  <p class="note">The big figure is what is billed for that cycle; the small one is what it works out to per month. Pro starts with one store, which carries the platform; every store you add after it is priced lower, and adding stores is optional.</p>''' % (
        tier_n['free'], tier_n['shop'], tier_n['chain'], rates))

    p4 = page(4, 'Stores, add-ons and terms', 'Worked examples before 18% GST', '''
  <div class="split">
    <div>
      <p class="kicker">PRO, BY NUMBER OF STORES</p>
      <table class="t rate small">
        <thead><tr><th>Stores</th><th>Monthly</th><th>Quarterly</th><th class="hl">Yearly</th></tr></thead>
        <tbody>%s</tbody>
      </table>
    </div>
    <img class="ms" src="%s" alt="">
  </div>
  <div class="split2">
    <div>
      <p class="kicker">ADD-ONS · SHOP AND CHAIN</p>
      <table class="t addons"><tbody>%s</tbody></table>
    </div>
    <div>
      <p class="kicker">TERMS</p>
      <ul class="terms">
        <li><b>GST</b> at 18%% is added to every price in this document.</li>
        <li><b>Trial.</b> Shop and Pro include a 14-day trial; Free has no time limit and needs no card.</li>
        <li><b>Changes.</b> Upgrades apply immediately and are pro-rated; downgrades apply from the next billing period.</li>
        <li><b>Cancel any time.</b> The plan stays active to the end of the period paid for. Quarterly and yearly plans carry a pro-rated refund within the first 30 days.</li>
        <li><b>Your data.</b> You own it, and can export it at any time.</li>
      </ul>
      <p class="kicker">NEXT STEPS</p>
      <ol class="next"><li>Book a 15-minute demo, or start free at retaileros.in</li><li>Choose the plan and billing cycle</li><li>We set up your stores, staff and products</li><li>Your counters bill on RetailerOS</li></ol>
    </div>
  </div>
  <div class="contact"><b>Talk to us</b><span>WhatsApp %s</span><span>retaileros.in</span><span>Current prices always at retaileros.in/pricing</span></div>''' % (
        chain_rows, multistore, addons, WA))

    css = io.open(os.path.join(HERE, 'proposal.css'), encoding='utf-8').read()
    return '''<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><title>RetailerOS — Pricing proposal</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap">
<style>%s</style></head><body>%s%s%s%s</body></html>''' % (css, p1, p2, p3, p4)


if __name__ == '__main__':
    tmp = tempfile.mkdtemp()
    src = os.path.join(tmp, 'proposal.html')
    io.open(src, 'w', encoding='utf-8').write(build_html())
    thumb_png = os.path.join(tmp, 'cover.png')
    r = subprocess.run(['node', os.path.join(HERE, 'render_pdf.cjs'), src, OUT, thumb_png], capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit('PDF render failed:\n' + r.stdout + r.stderr)
    # cover thumbnail for the site's download card
    from PIL import Image
    im = Image.open(thumb_png).convert('RGB'); im = im.resize((420, round(im.height * 420 / im.width)), Image.LANCZOS)
    im.save(os.path.join(B.OUT, 'assets', 'pricing-proposal-cover.webp'), 'WEBP', quality=82, method=6)
    im.save(os.path.join(B.OUT, 'assets', 'pricing-proposal-cover.jpg'), 'JPEG', quality=84, optimize=True)
    json.dump({'hash': stamp_hash(), 'as_of': AS_OF, 'pages': 4, 'kb': os.path.getsize(OUT) // 1024}, io.open(STAMP, 'w', encoding='utf-8'), indent=1)
    print(r.stdout.strip())
    print('wrote %s (%d KB)' % (OUT, os.path.getsize(OUT) // 1024))
    if '--keep-html' in sys.argv:
        print('html:', src)
