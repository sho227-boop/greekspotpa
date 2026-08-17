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
only photos of the printed menu, a screenshot of the business's Google
listing, and a photo of the storefront sign, which show how the logo looks
but aren't a usable file. Per instruction, the site uses a **plain
navy/ivory text wordmark** ("GREEK SPOT," set in Cinzel) in the header,
footer, and favicon, rather than an approximated or redrawn logo — no fake
Greek lettering, Greek-key circle, or invented graphic mark. Swap in the
official logo file (SVG/PNG) in place of `.wordmark` wherever the real
asset is supplied.

## Image inventory

Every photo on the homepage is used exactly once — no repeats or
placeholders:

| File | Used for |
|---|---|
| `assets/img/food-spread-overhead.jpg` | Hero background |
| `assets/img/restaurant-exterior.jpg` | About — storefront photo (with the real "Greek Spot / Authentic Gyro & Souvlaki" sign) |
| `assets/img/gyro-wrap.jpg` | What We Serve — Gyros |
| `assets/img/souvlaki-skewers.jpg` | What We Serve — Souvlaki |
| `assets/img/greek-salad-feta.jpg` | What We Serve — Greek Salads |
| `assets/img/gyro-platter-meat.jpg` | What We Serve — Platters |
| `assets/img/pita-tzatziki-salad.jpg` | What We Serve — Pita & Tzatziki |
| `assets/img/baklava.jpg` | What We Serve — Traditional Greek Baklava |
| `assets/img/souvlaki-plate.jpg` | Catering |

`assets/img/spanakopita.jpg`, `mezze-spread.jpg` and `gyro-platter.jpg`
are earlier photos no longer used on the homepage now that every section
has its own unique image; they're left in `assets/img/` in case a future
section (gallery, seasonal promo, etc.) can use them.

## Instagram

No Instagram link is included in the footer because no verified Greek Spot
Instagram account has been supplied or confirmed. Add one to the footer's
`.footer__col` markup once a real, confirmed handle is available.

## Content accuracy

Menu items/prices, business hours, address, and phone number match the
information provided. No hours, pricing, history, or reviews were invented.
Hours are used to compute a live "Open Today / Closed Today" status
client-side in the restaurant's local timezone (`America/New_York`).
