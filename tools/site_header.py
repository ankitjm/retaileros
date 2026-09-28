# -*- coding: utf-8 -*-
"""
The ONE site header + mobile menu, used by every page on retaileros.in.

tools/build_site.py renders it into the generated pages and stamps it into the
hand-written pages between these markers:

    <!-- SITE-HEADER:START -->  ...  <!-- SITE-HEADER:END -->

So to change a link, a label or the menu, edit THIS file and run
`python3 tools/build_site.py` — never edit the header inside a page, the next
build overwrites it. Styles: landing-page/assets/header.css; behaviour:
landing-page/assets/header.js (both cache-busted by the build).
"""
import html

import site_content as C
import site_modules as M

START, END = '<!-- SITE-HEADER:START -->', '<!-- SITE-HEADER:END -->'

# (label, href, key) — key matches the `active` argument of render()
LINKS = [
    ('Product',   '/modules/',       'product'),
    ('Solutions', '/solutions/',     'solutions'),
    ('Pricing',   '/pricing/',       'pricing'),
    ('Compare',   '/compare/',       'compare'),
    ('Answers',   '/answers.html',   'answers'),
    ('Resources', '/resources.html', 'resources'),
]
SIGN_IN = 'https://app.retaileros.in/login'


def _e(s):
    return html.escape(s, quote=True)


def render(active=None):
    """Header + mobile menu. `active` = a LINKS key, to mark the current page."""
    cur = lambda k: ' aria-current="page"' if k == active else ''
    desk = ''.join('<a href="%s"%s>%s</a>' % (h, cur(k), n) for n, h, k in LINKS)
    main = ''.join('<a class="rh-m-link" href="%s"%s>%s</a>' % (h, cur(k), n) for n, h, k in LINKS)
    sol = ''.join('<a href="/solutions/%s/">%s</a>' % (s['slug'], _e(s['nav'])) for s in C.SOLUTIONS)
    cmp_ = ''.join('<a href="/compare/%s/">%s</a>' % (c['slug'], _e(c['nav'])) for c in C.COMPARES)
    mods = ''.join('<a href="/modules/%s/">%s</a>' % (m['slug'], _e(m['name'])) for m in M.MODULE_PAGES) + '<a href="/modules/">All 26 &rarr;</a>'
    return '''%s
<header class="rh" id="rh">
  <div class="rh-in">
    <a class="rh-brand" href="/" aria-label="RetailerOS home">
      <img class="rh-mark" src="/assets/logo-mark.png" alt="" width="32" height="32">
      <img class="rh-word" src="/assets/logo-wordmark.png" alt="RetailerOS" width="106" height="20">
    </a>
    <nav class="rh-nav" aria-label="Main">%s</nav>
    <div class="rh-cta">
      <a class="rh-signin signin" href="%s" data-label-in="Access account">Sign in</a>
      <a class="rh-start" href="/#start" data-cta="onboard">Start free</a>
      <button class="rh-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="rh-menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="rh-menu" id="rh-menu" aria-label="Menu" hidden>
  <nav class="rh-m-body" aria-label="Menu">
    %s
    <div class="rh-m-group">
      <p class="rh-m-label">Modules</p>
      <div class="rh-m-list">%s</div>
    </div>
    <div class="rh-m-group">
      <p class="rh-m-label">Solutions</p>
      <div class="rh-m-list">%s</div>
    </div>
    <div class="rh-m-group">
      <p class="rh-m-label">Compare</p>
      <div class="rh-m-list">%s</div>
    </div>
  </nav>
  <div class="rh-m-foot">
    <a class="rh-m-start" href="/#start" data-cta="onboard">Start free &rarr;</a>
    <a class="rh-m-demo" href="/#book-demo" data-demo-open>Book a 15-minute demo</a>
    <a class="rh-m-signin signin" href="%s" data-label-in="Access account">Sign in</a>
  </div>
</div>
%s''' % (START, desk, SIGN_IN, main, mods, sol, cmp_, SIGN_IN, END)
