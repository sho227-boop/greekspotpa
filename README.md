# Greek Spot — Restaurant Website

A clean, compact one-page website for **Greek Spot**, a Greek restaurant
in Cedars, PA, plus two standalone legal pages.

## Structure

- `index.html` — homepage: Header, Hero, What We Serve, Our Menu, Greek Spot
  Catering, Visit Greek Spot, Footer. No other sections.
- `privacy.html`, `terms.html` — standalone pages (not homepage sections),
  linked from the footer.
- `css/style.css` — single stylesheet. Palette: navy (`#0B3B6E`), bright blue
  accent (`#2165B5` / `#73B7E6`), warm cream (`#F8F3EA`).
- `js/main.js` — mobile nav toggle, menu category tabs, a light scroll-fade
  on section headings, and the live "Open Today / Closed Today" hours status.
- No build step — plain HTML/CSS/JS, deployable as static files anywhere.

## Logo

There is no official Greek Spot logo *asset* (image file) in this project —
only photos of the printed menu and a screenshot of the business's Google
listing, which show how the logo looks but aren't a usable file. Per
instruction, the site currently uses a **plain navy text wordmark**
("GREEK SPOT") in the header, footer, and favicon, rather than an
approximated or redrawn logo. Swap in the official logo file (SVG/PNG) in
place of `.wordmark` wherever the real asset is supplied.

## Image inventory

Every photo on the homepage is used exactly once (see the comment block at
the top of `css/style.css`):

| File | Used for |
|---|---|
| `assets/img/spanakopita.jpg` | Hero background |
| `assets/img/gyro-wrap.jpg` | What We Serve — Gyros |
| `assets/img/souvlaki-skewers.jpg` | What We Serve — Souvlaki |
| `assets/img/mezze-spread.jpg` | What We Serve — Greek Salads |
| `assets/img/gyro-platter.jpg` | What We Serve — Platters |
| `assets/img/pita-tzatziki-salad.jpg` | What We Serve — Pita & Tzatziki |
| `assets/img/baklava.jpg` | What We Serve — Traditional Greek Baklava |

Catering intentionally has no photo — all unique supplied photos are already
assigned above, and a duplicate wasn't used to fill the space. Add a unique
catering photo to `assets/img/` and wire it into the `#catering` section in
`index.html` when one is available.

## Content accuracy

Menu items/prices, business hours, address, and phone number match the
information provided. No hours, pricing, history, or reviews were invented.
Hours are used to compute a live "Open Today / Closed Today" status
client-side in the restaurant's local timezone (`America/New_York`).
