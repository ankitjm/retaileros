# -*- coding: utf-8 -*-
"""
Site search index: landing-page/assets/search-index.json

Built by tools/build_site.py after every page is written, by reading the
FINISHED HTML — so the index always matches what is on the site. One entry per
page, plus one per section heading that has an id (so results can jump to
#section) and one per FAQ question.
"""
import html, io, json, os, re

SKIP = {'hero.html', '404.html', 'search/index.html'}


def _text(s):
    s = re.sub(r'<(script|style)\b.*?</\1>', ' ', s, flags=re.S | re.I)
    s = re.sub(r'<[^>]+>', ' ', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()


def _url(rel):
    rel = rel.replace(os.sep, '/')
    if rel == 'index.html':
        return '/'
    if rel.endswith('/index.html'):
        return '/' + rel[:-len('index.html')]
    return '/' + rel


def _kind(url):
    for pre, k in (('/modules/', 'Module'), ('/compare/', 'Compare'), ('/solutions/', 'Solution'),
                   ('/pricing/', 'Pricing'), ('/answers', 'Answer'), ('/resources', 'Resource')):
        if url.startswith(pre):
            return k
    return 'Page'


def build(out_dir):
    items = []
    for root, _, files in os.walk(out_dir):
        for fn in files:
            if not fn.endswith('.html'):
                continue
            path = os.path.join(root, fn)
            rel = os.path.relpath(path, out_dir)
            if rel.replace(os.sep, '/') in SKIP:
                continue
            s = io.open(path, encoding='utf-8').read()
            if 'name="robots" content="noindex' in s:
                continue
            url = _url(rel)
            title = _text(re.search(r'<title>(.*?)</title>', s, re.S).group(1)).split(' | ')[0]
            m = re.search(r'<meta name="description" content="([^"]*)"', s)
            desc = html.unescape(m.group(1)) if m else ''
            h1 = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
            body = s[s.find('<main') if '<main' in s else s.find('<body'):]
            body_txt = _text(re.sub(r'<header class="rh".*?</header>|<nav class="rh-m-body".*?</nav>|<footer.*?</footer>', ' ', body, flags=re.S))
            kind = _kind(url)
            items.append({'u': url, 't': title, 'h': _text(h1.group(1)) if h1 else title, 'd': desc,
                          'k': kind, 'x': body_txt[:1200]})
            # sections with an id: <section id=..> / <div id=..> containing an h2/h3
            for sm in re.finditer(r'<(?:section|div|header)[^>]*\bid="([a-z0-9-]+)"[^>]*>(.{0,1500}?)<h[23][^>]*>(.*?)</h[23]>', s, re.S):
                sid, heading = sm.group(1), _text(sm.group(3))
                if not heading or sid in ('rh', 'rh-menu', 'main') or len(heading) > 90:
                    continue
                nxt = _text(s[sm.end():sm.end() + 900])[:260]
                items.append({'u': url + '#' + sid, 't': heading, 'h': heading, 'd': nxt, 'k': kind + ' · section', 'x': ''})
            # FAQ questions: generated pages use <details><summary>, answers.html uses .qa blocks with ids
            for qm in re.finditer(r'<details><summary>(.*?)</summary><p>(.*?)</p></details>', s, re.S):
                items.append({'u': url, 't': _text(qm.group(1)), 'h': _text(qm.group(1)), 'd': _text(qm.group(2))[:240], 'k': 'Question', 'x': ''})
            for qm in re.finditer(r'<div class="qa" id="([a-z0-9-]+)">\s*<h3>(.*?)</h3>(.*?)</div>', s, re.S):
                items.append({'u': url + '#' + qm.group(1), 't': _text(qm.group(2)), 'h': _text(qm.group(2)),
                              'd': _text(qm.group(3))[:240], 'k': 'Question', 'x': ''})
    # de-duplicate on (url, title)
    seen, out = set(), []
    for it in items:
        key = (it['u'], it['t'])
        if key not in seen:
            seen.add(key); out.append(it)
    dest = os.path.join(out_dir, 'assets', 'search-index.json')
    io.open(dest, 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, separators=(',', ':')))
    return len(out)
