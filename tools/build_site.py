#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Static generator for the retaileros.in multi-page site.

    python3 tools/build_site.py            # writes pages into landing-page/

Generates /pricing/, /compare/*, /solutions/*. The homepage (index.html),
answers.html and the legal pages are hand-maintained and NOT touched here,
except sitemap.xml, which is rewritten to include every page.

Content lives in tools/site_content.py. Every FAQ's JSON-LD is produced from
the same data as the visible FAQ, so the two cannot drift apart.
"""
import hashlib, html, io, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'landing-page')
SITE = 'https://retaileros.in'
GA = 'G-9MV0N80GKW'
WA = '918884972272'
TODAY = '2026-09-22'

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import site_content as C  # noqa: E402

# ── pricing: single source of truth ───────────────────────────
PRICE = {
    'shop':  {'monthly': 3999, 'quarterly': 3799, 'annual': 3399},
    'first': {'monthly': 7499, 'quarterly': 7124, 'annual': 6374},
    'extra': {'monthly': 3499, 'quarterly': 3324, 'annual': 2974},
}
LOGINS_PER_STORE = 3
CHAIN_MIN = 2
MONTHS = {'monthly': 1, 'quarterly': 3, 'annual': 12}

def inr(n):
    """Indian digit grouping: 112176 -> 1,12,176"""
    n = int(round(n)); s = str(n)
    if len(s) <= 3: return '₹' + s
    head, tail = s[:-3], s[-3:]
    parts = []
    while len(head) > 2: parts.insert(0, head[-2:]); head = head[:-2]
    if head: parts.insert(0, head)
    return '₹' + ','.join(parts + [tail])

def chain(stores, cycle):
    return PRICE['first'][cycle] + (stores - 1) * PRICE['extra'][cycle]

e = lambda s: html.escape(s, quote=True)

def asset_ver(name):
    with open(os.path.join(OUT, 'assets', name), 'rb') as f:
        return hashlib.sha1(f.read()).hexdigest()[:10]

CSS_V, JS_V = asset_ver('site.css'), asset_ver('site.js')

# ── layout ────────────────────────────────────────────────────
NAV = [('Product', '/#modules'), ('Solutions', '/solutions/'), ('Pricing', '/pricing/'),
       ('Compare', '/compare/'), ('Answers', '/answers.html')]

def header(active):
    links = ''.join('<a href="%s"%s>%s</a>' % (h, ' aria-current="page"' if n == active else '', n)
                    for n, h in NAV)
    return '''<header class="site-head">
  <div class="wrap head-in">
    <a class="brand" href="/" aria-label="RetailerOS home">
      <img class="mark" src="/assets/logo-mark.png" alt="" width="34" height="34">
      <img class="word" src="/assets/logo-wordmark.png" alt="RetailerOS" width="111" height="21">
    </a>
    <nav class="nav" aria-label="Main">%s</nav>
    <div class="head-cta">
      <a class="signin" href="https://app.retaileros.in/login">Sign in</a>
      <a class="btn btn-primary btn-sm" href="/#start">Start free</a>
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mnav"><span></span></button>
    </div>
  </div>
</header>
<nav class="mnav" id="mnav" aria-label="Menu" aria-hidden="true">
  <button class="menu-btn mnav-close" type="button" aria-label="Close menu" style="display:inline-flex">✕</button>
  %s
  <div class="mnav-group">Solutions</div>
  %s
  <div class="mnav-group">Compare</div>
  %s
  <a class="signin" href="https://app.retaileros.in/login">Sign in</a>
  <a class="btn btn-primary" href="/#start">Start free</a>
</nav>''' % (links,
             ''.join('<a href="%s">%s</a>' % (h, n) for n, h in NAV),
             ''.join('<a href="/solutions/%s/">%s</a>' % (s['slug'], e(s['nav'])) for s in C.SOLUTIONS),
             ''.join('<a href="/compare/%s/">%s</a>' % (c['slug'], e(c['nav'])) for c in C.COMPARES))

def footer():
    sol = ''.join('<a href="/solutions/%s/">%s</a>' % (s['slug'], e(s['nav'])) for s in C.SOLUTIONS)
    cmp_ = ''.join('<a href="/compare/%s/">%s</a>' % (c['slug'], e(c['nav'])) for c in C.COMPARES)
    return '''<footer class="site-foot">
  <div class="wrap">
    <div class="foot-cols">
      <div>
        <a class="brand" href="/" aria-label="RetailerOS home">
          <img class="mark" src="/assets/logo-mark.png" alt="" width="34" height="34">
          <img class="word" src="/assets/logo-wordmark.png" alt="RetailerOS" width="111" height="21">
        </a>
        <p>Billing, stock, serial &amp; IMEI tracking, schemes, warranty claims and multi-store management for Indian consumer electronics retail.</p>
      </div>
      <div><h4>Product</h4><a href="/#modules">All 26 modules</a><a href="/pricing/">Pricing</a><a href="/answers.html">Questions &amp; answers</a><a href="/resources.html">Resources</a><a href="/#book-demo">Book a demo</a></div>
      <div><h4>Solutions</h4>%s</div>
      <div><h4>Compare</h4>%s</div>
    </div>
    <div class="foot-base">© 2026 RetailerOS · a product of Khosha Systems · Made in India ·
      <a href="/security.html">Security</a> · <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a></div>
  </div>
</footer>''' % (sol, cmp_)

def chat(msg, primary):
    label, href = primary
    return '''<div class="rchat" id="rchat">
  <div class="rchat-card" role="dialog" aria-label="Chat with RetailerOS" aria-hidden="true">
    <button class="rchat-x" type="button" aria-label="Close chat">×</button>
    <div class="rchat-who"><img src="/assets/logo-mark.png" alt="" width="34" height="34">
      <div><b>RetailerOS team</b><span>● Usually replies within minutes</span></div></div>
    <p class="rchat-msg">%s</p>
    <div class="rchat-opts">
      <a href="%s">%s</a>
      <a href="/#book-demo">Book a 15-minute demo</a>
      <a class="wa" href="https://wa.me/%s" target="_blank" rel="noopener">Chat on WhatsApp</a>
    </div>
  </div>
  <button class="rchat-btn" type="button" aria-label="Chat with us" aria-expanded="false">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
    <span class="rchat-dot" hidden></span>
  </button>
</div>''' % (e(msg), href, e(label), WA)

def crumbs(trail):
    parts = ['<a href="/">Home</a>']
    for name, href in trail[:-1]:
        parts.append('<a href="%s">%s</a>' % (href, e(name)))
    parts.append('<span aria-current="page">%s</span>' % e(trail[-1][0]))
    return '<nav class="crumbs wrap" aria-label="Breadcrumb">%s</nav>' % '<span aria-hidden="true">›</span>'.join(parts)

def ld(obj):
    return '<script type="application/ld+json">\n%s\n</script>' % json.dumps(obj, indent=2, ensure_ascii=False)

def faq_html(faqs):
    return '<div class="faq">%s</div>' % ''.join(
        '<details><summary>%s</summary><p>%s</p></details>' % (e(q), e(a)) for q, a in faqs)

def faq_ld(faqs):
    return {'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faqs]}

def crumb_ld(trail):
    items = [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE + '/'}]
    for i, (name, href) in enumerate(trail, start=2):
        items.append({'@type': 'ListItem', 'position': i, 'name': name, 'item': SITE + href})
    return {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': items}

def page(*, path, title, desc, active, trail, body, faqs=(), extra_ld=(), chat_msg, chat_primary, chat_delay=20, chat_priority=False):
    url = SITE + path
    blocks = [crumb_ld(trail)] + ([faq_ld(faqs)] if faqs else []) + list(extra_ld)
    doc = '''<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<script async src="https://www.googletagmanager.com/gtag/js?id={GA}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments);}}gtag('js',new Date());gtag('config','{GA}');</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="{url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1E47B8">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:type" content="website">
<meta property="og:site_name" content="RetailerOS">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{site}/assets/og-card.png">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500&display=swap">
<link rel="stylesheet" href="/assets/site.css?v={css_v}">
{ld}
</head>
<body data-chat-delay="{delay}"{prio}>
{header}
{crumbs}
<main>
{body}
</main>
{footer}
{chat}
<script src="/assets/site.js?v={js_v}" defer></script>
</body>
</html>
'''.format(GA=GA, title=e(title), desc=e(desc), url=url, site=SITE, css_v=CSS_V, js_v=JS_V,
           ld='\n'.join(ld(b) for b in blocks), delay=chat_delay, prio=' data-chat-priority' if chat_priority else '', header=header(active),
           crumbs=crumbs(trail), body=body, footer=footer(),
           chat=chat(chat_msg, chat_primary))
    dest = os.path.join(OUT, path.strip('/'), 'index.html')
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    io.open(dest, 'w', encoding='utf-8').write(doc)
    return path

def cta_band(h2, p, primary=('Start free', '/#start')):
    return '''<section class="sec"><div class="wrap"><div class="cta-band">
  <h2>%s</h2><p>%s</p>
  <div class="hero-cta"><a class="btn btn-primary" href="%s">%s</a>
  <a class="btn btn-ghost" href="/#book-demo">Book a 15-minute demo</a></div>
</div></div></section>''' % (e(h2), e(p), primary[1], e(primary[0]))

def ctable(cols, rows, caption='', us_col=None):
    head = ''.join('<th scope="col"%s>%s</th>' % (' class="us"' if i == us_col else '', c) for i, c in enumerate(cols))
    body = ''
    for r in rows:
        label, cells = r[0], r[1:]
        body += '<tr><th scope="row">%s</th>%s</tr>' % (label, ''.join(
            '<td%s>%s</td>' % (' class="us"' if (i + 1) == us_col else '', c) for i, c in enumerate(cells)))
    cap = '<caption>%s</caption>' % caption if caption else ''
    return '<div class="ctable-wrap"><table class="ctable">%s<thead><tr>%s</tr></thead><tbody>%s</tbody></table></div>' % (cap, head, body)

Y, N = '<span class="y" aria-label="Yes">✓</span>', '<span class="n" aria-label="No">✕</span>'
def P_(t): return '<span class="p">%s</span>' % e(t)

if __name__ == '__main__':
    import site_pages
    built = site_pages.build(sys.modules[__name__])
    # sitemap: hand-maintained pages + everything generated
    static = ['/', '/pricing/', '/answers.html', '/resources.html', '/security.html', '/privacy.html', '/terms.html']
    urls = static + [p for p in built if p not in static]
    pri = lambda u: '1.0' if u == '/' else '0.9' if u in ('/pricing/', '/answers.html') else \
        '0.8' if u.startswith(('/compare', '/solutions')) else '0.3'
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(
        '  <url><loc>%s%s</loc><lastmod>%s</lastmod><priority>%s</priority></url>\n' % (SITE, u, TODAY, pri(u)) for u in urls) + '</urlset>\n'
    io.open(os.path.join(OUT, 'sitemap.xml'), 'w', encoding='utf-8').write(sm)
    print('built %d pages, sitemap has %d URLs' % (len(built), len(urls)))
    for p in built: print('  ', p)
