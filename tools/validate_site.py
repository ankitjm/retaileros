#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Pre-deploy checks for landing-page/. The server runs this before every deploy
and refuses to deploy if it fails. Run it yourself before pushing:

    python3 tools/validate_site.py

Exit code 0 = safe to deploy. Anything else = the problems are printed.
Needs Python 3; JavaScript is syntax-checked too if `node` is installed.
"""
import glob, io, json, os, re, shutil, subprocess, sys, tempfile
import xml.dom.minidom

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'landing-page')

REQUIRED = ['index.html', 'answers.html', 'pricing/index.html', 'compare/index.html',
            'solutions/index.html', 'sitemap.xml', 'robots.txt', 'llms.txt',
            'assets/site.css', 'assets/site.js', 'assets/header.css', 'assets/header.js',
            'assets/logo-mark.png', 'assets/logo-wordmark.png', 'favicon.ico']
# Tags whose open/close counts must match. Deliberately short: these are the
# ones whose imbalance has actually broken this site's layout.
BALANCED = ['div', 'section', 'main', 'nav', 'header', 'footer', 'table', 'script', 'style']

problems = []
def bad(where, what): problems.append('%s: %s' % (where, what))

for f in REQUIRED:
    if not os.path.isfile(os.path.join(SITE, f)): bad(f, 'required file is missing')

pages = sorted(glob.glob(os.path.join(SITE, '**', '*.html'), recursive=True))
inline_js = []
for path in pages:
    rel = os.path.relpath(path, SITE)
    s = io.open(path, encoding='utf-8', errors='replace').read()
    for i, block in enumerate(re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S)):
        try: json.loads(block)
        except ValueError as e: bad(rel, 'structured data block %d is not valid JSON (%s)' % (i + 1, e))
    for css in re.findall(r'<style[^>]*>(.*?)</style>', s, re.S):
        if css.count('{') != css.count('}'):
            bad(rel, 'CSS braces unbalanced ({ %d vs } %d)' % (css.count('{'), css.count('}')))
    for t in BALANCED:
        o, c = len(re.findall(r'<%s[\s>]' % t, s)), s.count('</%s>' % t)
        if o != c: bad(rel, '<%s> opened %d times but closed %d' % (t, o, c))
    if len(re.findall(r'<h1[\s>]', s)) > 1: bad(rel, 'more than one <h1>')
    # one shared header everywhere (tools/site_header.py) — no page may drift back to its own
    if s.count('<!-- SITE-HEADER:START -->') != 1 or s.count('id="rh"') != 1:
        bad(rel, 'must carry the shared site header exactly once (tools/site_header.py, run tools/build_site.py)')
    if 'assets/header.css' not in s or 'assets/header.js' not in s:
        bad(rel, 'shared header assets (header.css / header.js) not linked — run tools/build_site.py')
    if rel.endswith('index.html') or rel == 'answers.html':
        if 'G-9MV0N80GKW' not in s: bad(rel, 'Google Analytics tag missing')
    for j, js in enumerate(re.findall(r'<script(?![^>]*ld\+json)(?![^>]*\bsrc=)[^>]*>(.*?)</script>', s, re.S)):
        if js.strip(): inline_js.append(('%s inline script %d' % (rel, j + 1), js))

try: xml.dom.minidom.parse(os.path.join(SITE, 'sitemap.xml'))
except Exception as e: bad('sitemap.xml', 'not valid XML (%s)' % e)

# every sitemap URL must exist as a file here
try:
    sm = io.open(os.path.join(SITE, 'sitemap.xml'), encoding='utf-8').read()
    for url in re.findall(r'<loc>https://retaileros\.in(/[^<]*)</loc>', sm):
        target = url.lstrip('/') or 'index.html'
        if target.endswith('/'): target += 'index.html'
        if not os.path.isfile(os.path.join(SITE, target)): bad('sitemap.xml', 'lists %s but no such page exists' % url)
except OSError:
    pass

# the downloadable pricing proposal must quote today's prices (tools/build_proposal.py)
try:
    sys.path.insert(0, os.path.join(ROOT, 'tools'))
    import build_proposal as _BP
    _st = json.load(io.open(os.path.join(SITE, 'assets', 'pricing-proposal.json'), encoding='utf-8'))
    if not os.path.isfile(os.path.join(SITE, 'assets', 'RetailerOS-Pricing-Proposal.pdf')):
        bad('assets/RetailerOS-Pricing-Proposal.pdf', 'missing — run: python3 tools/build_proposal.py')
    elif _st.get('hash') != _BP.stamp_hash():
        bad('assets/RetailerOS-Pricing-Proposal.pdf', 'prices or modules changed since the PDF was made — run: python3 tools/build_proposal.py')
except (OSError, ValueError) as ex:
    bad('assets/pricing-proposal.json', 'missing or unreadable (%s) — run: python3 tools/build_proposal.py' % ex)

node = shutil.which('node')
if node:
    tmp = tempfile.mkdtemp()
    for label, code in [('assets/site.js', io.open(os.path.join(SITE, 'assets', 'site.js'), encoding='utf-8').read())] + inline_js:
        f = os.path.join(tmp, 'check.js'); io.open(f, 'w', encoding='utf-8').write(code)
        r = subprocess.run([node, '--check', f], capture_output=True, text=True)
        if r.returncode != 0:
            lines = r.stderr.strip().splitlines()
            msg = next((l.strip() for l in lines if 'Error' in l), lines[0] if lines else 'unknown error')
            where = next((l.rsplit(':', 1)[-1] for l in lines if l.startswith(f)), '?')
            bad(label, 'JavaScript syntax error at line %s: %s' % (where, msg[:160]))
    shutil.rmtree(tmp, ignore_errors=True)

if problems:
    print('NOT SAFE TO DEPLOY — %d problem(s):' % len(problems))
    for p in problems: print('  - ' + p)
    sys.exit(1)
print('OK — %d pages checked%s' % (len(pages), '' if node else ' (node not installed: JavaScript not checked)'))
