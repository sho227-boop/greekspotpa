# Greek Spot — Restaurant Website

A clean, compact website for **Greek Spot**, a Greek restaurant in
Cedars, PA: a one-page homepage, a dedicated About page, and two
standalone legal pages.

## Structure

- `index.html` — homepage: Header, Hero, What We Serve, Our Menu, Greek
  Spot Catering, Visit Greek Spot, Footer. No About section — About is
  its own page (see below).
- `about.html` — dedicated About page: heading, the real restaurant
  exterior photo, one short paragraph, Call to Order and Get Directions.
- `privacy.html`, `terms.html` — standalone legal pages, linked from the
  footer.
- `css/style.css` — single stylesheet. Palette: warm ivory (`#F4EFE5`,
  dominant background), soft parchment (`#E8DDCC`), deep navy (`#102A43`,
  header/footer/buttons), muted Greek blue (`#315F83`, used sparingly),
  olive (`#6F7651`) and terracotta (`#A85F3E`) as small accents, charcoal
  (`#24221F`) body text, warm brown (`#72513C`). No bright royal blue.
- `js/main.js` — mobile nav toggle, menu category tabs, a light scroll-fade
  on section headings, and the live "Open Today / Closed Today" hours status.
- No build step — plain HTML/CSS/JS, deployable as static files anywhere.

## Logo

The official Greek Spot logo (the uploaded wordmark with the olive-branch
flourishes and "Authentic Gyro & Souvlaki" subtitle) is now a real image
asset, used everywhere — never retyped or redrawn:

- `assets/img/logo.png` — the logo with its cream backing removed
  (transparent background), used on light backgrounds: header, About
  page, Privacy/Terms headers.
- `assets/img/logo-on-plate.png` — the same logo on a small ivory plate,
  used on navy backgrounds: footer, mobile navigation drawer.

Both are exact crops of the uploaded logo — wording, typography, colors,
spacing and proportions are untouched. The header logo links to the
homepage everywhere. The favicon still uses a simple navy "G" monogram
rather than a crop of the logo, since the wordmark has no compact mark
that reads clearly at favicon size — swap this for an official favicon
export if one becomes available.

## Image inventory

Every photo on the homepage is used exactly once — no repeats or
placeholders:

| File | Used for |
|---|---|
| `assets/img/food-spread-overhead.jpg` | Hero background |
| `assets/img/gyro-wrap.jpg` | What We Serve — Gyros |
| `assets/img/souvlaki-skewers.jpg` | What We Serve — Souvlaki |
| `assets/img/greek-salad-feta.jpg` | What We Serve — Greek Salads |
| `assets/img/gyro-platter-meat.jpg` | What We Serve — Platters |
| `assets/img/pita-tzatziki-salad.jpg` | What We Serve — Pita & Tzatziki |
| `assets/img/baklava.jpg` | What We Serve — Traditional Greek Baklava |
| `assets/img/souvlaki-plate.jpg` | Catering |
| `assets/img/restaurant-exterior.jpg` | About page — storefront photo (with the real "Greek Spot / Authentic Gyro & Souvlaki" sign) |

`assets/img/spanakopita.jpg`, `mezze-spread.jpg` and `gyro-platter.jpg`
are earlier photos no longer used anywhere on the site; they're left in
`assets/img/` in case a future section can use them.

## Instagram

No Instagram link is included in the footer — confirmed there is no
Instagram account to link to.

## Content accuracy

Menu items/prices, business hours, address, and phone number match the
information provided. No hours, pricing, history, owner details, or
reviews were invented. Hours are used to compute a live "Open Today /
Closed Today" status client-side in the restaurant's local timezone
(`America/New_York`).
