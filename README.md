# MyPortfolio

Portfolio site for **Rujul Chaudhari** — SOC analyst working detection
engineering, alert triage, and incident response.

**Live:** https://rujulchaudhari.github.io/MyPortfolio/

## Structure

```
index.html                    the whole page
assets/css/styles.css         design tokens + layout
assets/js/main.js             scroll reveal + nav highlighting
assets/img/portrait.jpg       optimised portrait (138 KB)
assets/Rujul_Chaudhari_Resume.pdf
.nojekyll                     skip Jekyll processing on Pages
```

Static HTML, CSS, and vanilla JavaScript. **No build step and no
dependencies** — GitHub Pages serves the files exactly as they are.

> Previously this was a React + Vite + Tailwind app deployed to a `gh-pages`
> branch via `npm run deploy`. That toolchain has been removed: the whole site
> is now smaller than the old JS bundle alone, and there is nothing to install,
> build, or keep patched. The old source remains in git history.

## Editing

Open `index.html` and edit the text directly — it's plain, commented HTML with
each section marked (hero, capabilities, experience, projects, stack,
credentials, contact). Colours, fonts, and spacing are defined once as custom
properties at the top of `assets/css/styles.css`.

Preview locally by opening `index.html`, or serve the folder:

```bash
python -m http.server 8000
```

Committing to `main` republishes the site automatically.

## Notes

- Dark-only by design; the palette is a neutral graphite with a single amber
  signal colour reserved for status and severity.
- Text contrast meets WCAG AA throughout, including the syntax-highlighted
  code block.
- Responsive from 390px up; the KQL block scrolls horizontally on its own
  rather than forcing the page to.
- Motion is disabled for visitors who set `prefers-reduced-motion`, and the
  page renders fully even if JavaScript fails to load.
- Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) load from Google Fonts.

## License

MIT — see [LICENSE](LICENSE).
