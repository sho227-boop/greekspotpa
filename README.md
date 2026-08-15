# Greek Spot — Restaurant Website

A custom, editorial-style marketing website for **Greek Spot**, an authentic
Greek/Mediterranean restaurant in Cedars, PA.

## Structure

- `index.html` — full one-page site (Home, Menu, Catering, About, Visit)
- `css/style.css` — design system (deep Mediterranean blue + warm cream palette, Greek-key/olive/column motifs)
- `js/main.js` — mobile nav, menu category tabs, scroll reveal animations, live open/closed hours status
- No build step — plain HTML/CSS/JS, deployable as static files anywhere (Netlify, GitHub Pages, S3, etc).

## Notes on imagery

This environment's network policy blocks outbound requests to stock-photo
hosts (Unsplash, Pexels, Pixabay, Wikimedia), so the "photography" panels
throughout the site are hand-built SVG line-art + color-block illustrations
in the Greek/Mediterranean editorial style, rather than photographs. They're
implemented as reusable `.art-panel` components in `css/style.css` — swap in
real food photography by replacing the `<div class="art-panel ...">...</div>`
blocks with `<img>`/`<picture>` elements (recommended: WebP/AVIF, responsive
`srcset`, `loading="lazy"`) whenever real photos are available.

## Content accuracy

Menu items/prices, business hours, address, and phone number match the
information provided. No hours, pricing, history, or reviews were invented.
Business hours are used to compute a live "Open Today / Closed Today" status
client-side in the restaurant's local timezone (`America/New_York`).
