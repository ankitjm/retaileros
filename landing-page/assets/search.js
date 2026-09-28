/* RetailerOS site search — loaded on demand by header.js, and on /search/.
   Index: /assets/search-index.json (built by tools/build_search.py). */
(function () {
  if (window.rosSearch) return;
  var INDEX = null, loading = null;
  var SYN = { imei: 'imei serial', serial: 'serial imei', price: 'price pricing cost plan', pricing: 'pricing price cost plan',
    cost: 'cost price pricing', khata: 'khaata credit ledger', khaata: 'khaata credit ledger', credit: 'credit khaata ledger',
    gst: 'gst tax invoice', tax: 'tax gst', store: 'store stores multi', stores: 'stores store multi', chain: 'chain multi stores pro',
    whatsapp: 'whatsapp message', repair: 'repair service job', warranty: 'warranty imei serial', scheme: 'scheme schemes cashback',
    accountant: 'accountant finance ledger expense', ca: 'accountant finance', tally: 'tally', vyapar: 'vyapar', marg: 'marg', zoho: 'zoho',
    apx: 'apx', insurance: 'protection insurance warranty', demo: 'demo book', free: 'free plan', signup: 'start free sign' };

  function load() {
    if (INDEX) return Promise.resolve(INDEX);
    if (!loading) loading = fetch('/assets/search-index.json', { credentials: 'omit' }).then(function (r) { return r.json(); })
      .then(function (d) { INDEX = d.map(function (it) {
        it._t = (it.t + ' ' + it.h).toLowerCase(); it._d = (it.d || '').toLowerCase(); it._x = (it.x || '').toLowerCase(); return it; }); return INDEX; });
    return loading;
  }
  function terms(q) {
    var base = q.toLowerCase().replace(/[^a-z0-9₹ ]+/g, ' ').split(/\s+/).filter(function (w) { return w.length > 1 && !/^(the|and|for|a|an|to|of|in|on|is|do|does|can|i|my|how|what|with|you|your|it)$/.test(w); });
    return base.map(function (w) { return { w: w, alt: (SYN[w] || w).split(' ') }; });
  }
  function score(it, ts) {
    var s = 0, hit = 0;
    ts.forEach(function (t) {
      var best = 0;
      t.alt.forEach(function (w, i) {
        var f = i === 0 ? 1 : 0.6, v = 0;
        if (it._t.indexOf(w) > -1) v = 8; else if (it._d.indexOf(w) > -1) v = 3; else if (it._x.indexOf(w) > -1) v = 1;
        best = Math.max(best, v * f);
      });
      if (best) hit++; s += best;
    });
    if (hit < ts.length) s *= hit / ts.length * 0.6;          // prefer results matching every word
    if (it.k === 'Question') s *= 1.05;
    if (it.k.indexOf('section') > -1) s *= 0.9;
    // comparison pages only lead when a competitor (or "compare"/"vs") is in the query
    if (it.u.indexOf('/compare/') === 0 && !ts.some(function (t) { return /^(tally|vyapar|marg|zoho|apx|excel|paper|compare|vs|versus|alternative|retaileros\.ai)$/.test(t.w); })) s *= 0.45;
    if (/^\/(modules|solutions|pricing)\//.test(it.u) && it.k.indexOf('section') < 0 && it.k !== 'Question') s *= 1.35;
    return s;
  }
  function search(q, limit) {
    return load().then(function (idx) {
      var ts = terms(q), seen = {}; if (!ts.length) return [];
      return idx.map(function (it) { return { it: it, s: score(it, ts) }; }).filter(function (r) { return r.s > 1.5; })
        .sort(function (a, b) { return b.s - a.s; })
        .filter(function (r) { var u = r.it.u.split('#')[0]; seen[u] = (seen[u] || 0) + 1; return seen[u] <= 2; })   // at most 2 hits per page
        .slice(0, limit || 8).map(function (r) { return r.it; });
    });
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function isQuestion(q) { return /\?$|^(how|what|why|can|does|do|is|are|which|when|who|will)\b/i.test(q.trim()); }
  function row(it) {
    return '<a class="rs-item" href="' + esc(it.u) + '"><span class="rs-kind">' + esc(it.k) + '</span><b>' + esc(it.t) +
      '</b><small>' + esc((it.d || '').slice(0, 150)) + '</small></a>';
  }
  function askRow(q) {
    var wa = 'https://wa.me/918884972272?text=' + encodeURIComponent('Hi RetailerOS, I have a question: ' + q + ' (from the website search)');
    return '<div class="rs-ask"><b>Didn\'t find it?</b> <a href="' + wa + '" target="_blank" rel="noopener" data-track="search_ask">Ask us on WhatsApp</a>' +
      ' or <a href="/answers.html">browse all answers</a>.</div>';
  }
  window.rosSearch = { search: search, row: row, askRow: askRow, isQuestion: isQuestion, esc: esc };

  /* /search/ results page */
  var page = document.getElementById('rs-page');
  if (page) {
    var input = document.getElementById('rs-q'), list = document.getElementById('rs-results'), count = document.getElementById('rs-count');
    function run(q) {
      if (!q) { list.innerHTML = ''; count.textContent = ''; return; }
      search(q, 30).then(function (res) {
        count.textContent = res.length ? res.length + ' result' + (res.length === 1 ? '' : 's') + ' for "' + q + '"' : 'No results for "' + q + '"';
        list.innerHTML = res.map(row).join('') + askRow(q);
        if (window.rosTrack) rosTrack('search', { search_term: q, results: res.length });
      });
    }
    var q0 = new URLSearchParams(location.search).get('q') || '';
    input.value = q0; run(q0);
    document.getElementById('rs-form').addEventListener('submit', function (e) {
      e.preventDefault(); var q = input.value.trim();
      history.replaceState(null, '', '/search/' + (q ? '?q=' + encodeURIComponent(q) : '')); run(q);
    });
  }
})();
