# Deploying retaileros.in

The website at **https://retaileros.in** is the `landing-page/` folder of this
repo. Push a change to GitHub and the server picks it up within about two
minutes: it merges it into `main`, rebuilds, checks it, puts it live, confirms
the site still works, and only then updates `main` on GitHub.

## Making a change

```bash
git checkout main && git pull
git checkout -b landing/short-description      # any branch name works
# ...edit files under landing-page/ or tools/...
python3 tools/build_site.py                    # only if you changed tools/
python3 tools/validate_site.py                 # the same checks the server runs
git add -A && git commit -m "What you changed"
git push -u origin landing/short-description
```

Within two minutes it is live. Confirm it at **https://retaileros.in/version.txt**
— it shows the commit that is currently serving.

Pushing straight to `main` works too; a branch just gives you a clean merge commit.

## What deploys automatically — and what doesn't

| Your branch changes… | What happens |
|---|---|
| only `landing-page/` and/or `tools/` | merged into `main` and deployed automatically |
| anything else (`server/`, `src/`, `production/`, `.gitignore`…) | **skipped** — this repo also holds the app, so Ankit merges those by hand |
| a branch named `wip/…` or `draft/…` | ignored — use these for work in progress |
| a branch that conflicts with `main` | not deployed — `git pull origin main`, resolve, push again |

`dev-working` is an old branch with no shared history with `main`; the server ignores it.

## Generated pages — don't edit these by hand

These files are built by `tools/build_site.py`:

- `landing-page/pricing/`, `landing-page/compare/`, `landing-page/solutions/`
- `landing-page/sitemap.xml`

Each starts with a `GENERATED` comment. **Change the source instead**:

- wording, prices, FAQs, comparisons → `tools/site_content.py`
- layout and page structure → `tools/site_pages.py`
- header, footer, prices, sitemap → `tools/build_site.py`
- styles and scripts for these pages → `landing-page/assets/site.css`, `site.js`

Then run `python3 tools/build_site.py` and commit both. If you edit a generated
page directly, the server refuses to deploy it, because the rebuild would
silently undo your edit.

Everything else — `index.html`, `answers.html`, the legal pages — is edited by
hand as normal. Note `hero.html` must stay an exact copy of `index.html`.

## Rules for content (why the pages are safe to publish)

Read the top of `tools/site_content.py`. In short: every claim about a named
competitor must be checked on their own website and dated, and say "Not listed"
rather than "No" when a feature simply isn't on their page.

## If something goes wrong

- **Checks fail** → nothing changes on the site. Run `python3 tools/validate_site.py`
  locally to see why, fix, push again.
- **Site breaks after deploying** → the server automatically restores the previous
  version and does **not** update GitHub.
- The server keeps the last three versions and can roll back instantly.

Server-side details (for Ankit): `/root/Production/docs/retaileros-landing-deploy.md`.
