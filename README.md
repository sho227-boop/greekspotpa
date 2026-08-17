# Greek Spot — Restaurant Website

A clean, compact one-page website for **Greek Spot**, a Greek restaurant
in Cedars, PA, plus two standalone legal pages.

## Structure

- `index.html` — homepage: Header, Hero, About (Our Kitchen), What We Serve,
  Our Menu, Greek Spot Catering, Visit Greek Spot, Footer. No other sections.
- `privacy.html`, `terms.html` — standalone pages (not homepage sections),
  linked from the footer.
- `css/style.css` — single stylesheet. Palette: warm ivory (`#F4EFE5`,
  dominant background), soft parchment (`#E8DDCC`), deep navy (`#102A43`,
  header/footer/buttons), muted Greek blue (`#315F83`, used sparingly),
  olive (`#6F7651`) and terracotta (`#A85F3E`) as small accents, charcoal
  (`#24221F`) body text, warm brown (`#72513C`). No bright royal blue.
- `js/main.js` — mobile nav toggle, menu category tabs, a light scroll-fade
  on section headings, and the live "Open Today / Closed Today" hours status.
- No build step — plain HTML/CSS/JS, deployable as static files anywhere.

## Logo

There is no official Greek Spot logo *asset* (image file) in this project —
only photos of the printed menu and a screenshot of the business's Google
listing, which show how the logo looks but aren't a usable file. No logo
file was supplied with the most recent redesign request either. Per
instruction, the site uses a **plain navy/ivory text wordmark** ("GREEK
SPOT," set in Cinzel) in the header, footer, and favicon, rather than an
approximated or redrawn logo — no fake Greek lettering, Greek-key circle,
or invented graphic mark. Swap in the official logo file (SVG/PNG) in place
of `.wordmark` wherever the real asset is supplied.

## Image inventory

Every photo on the homepage is used exactly once, with one intentional
reuse noted below (see the comment block at the top of `css/style.css`):

| File | Used for |
|---|---|
| `assets/img/spanakopita.jpg` | Hero background |
| `assets/img/gyro-wrap.jpg` | What We Serve — Gyros |
| `assets/img/souvlaki-skewers.jpg` | What We Serve — Souvlaki, **and** Catering (reused) |
| `assets/img/mezze-spread.jpg` | What We Serve — Greek Salads |
| `assets/img/gyro-platter.jpg` | What We Serve — Platters |
| `assets/img/pita-tzatziki-salad.jpg` | What We Serve — Pita & Tzatziki |
| `assets/img/baklava.jpg` | What We Serve — Traditional Greek Baklava |

No new photos ("five newly regenerated" images, a new hero shot, an
About-section exterior photo) were actually attached with the most recent
redesign request, so the site still runs on the same 7 photos already in
the project:

- **About** is intentionally text-only (no photo) rather than reusing or
  duplicating an existing image.
- **Catering** reuses `souvlaki-skewers.jpg` — the request's own copy
  explicitly allowed reusing either "the chicken souvlaki platter or the
  overhead food spread" here, so this was the one deliberate exception to
  the "each photo used once" rule.

Send the real hero/About/catering photos (or the official logo file) and
they can be wired in directly in place of the above.

## Instagram

No Instagram link is included in the footer because no verified Greek Spot
Instagram account was supplied or confirmed. Add one to the footer's
`.footer__col` markup once a real, confirmed handle is available.

## Content accuracy

Menu items/prices, business hours, address, and phone number match the
information provided. No hours, pricing, history, or reviews were invented.
Hours are used to compute a live "Open Today / Closed Today" status
client-side in the restaurant's local timezone (`America/New_York`).
