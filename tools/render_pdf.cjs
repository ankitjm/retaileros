// node tools/render_pdf.cjs <in.html> <out.pdf>  — used by tools/build_proposal.py
const path = require('path');
let puppeteer;
try { puppeteer = require('puppeteer'); } catch (e) { puppeteer = require('/usr/local/lib/node_modules/puppeteer'); }
(async () => {
  const [src, out] = process.argv.slice(2);
  const b = await puppeteer.launch({ args: ['--no-sandbox'] });
  const pg = await b.newPage();
  await pg.goto('file://' + path.resolve(src), { waitUntil: 'networkidle0' });
  await pg.evaluateHandle('document.fonts.ready');
  // fail loudly if any page's content spills past its A4 box
  const spill = await pg.evaluate(() => [...document.querySelectorAll('.page')].map((p, i) => p.scrollHeight > p.clientHeight + 1 ? i + 1 : 0).filter(Boolean));
  if (spill.length) { console.error('content overflows page(s): ' + spill.join(', ')); process.exit(2); }
  await pg.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  // optional: a picture of page 1, used as the download card's thumbnail on the site
  const thumb = process.argv[4];
  if (thumb) {
    await pg.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
    const first = await pg.$('.page');
    await first.screenshot({ path: thumb });
  }
  console.log('rendered ' + out);
  await b.close();
})();
