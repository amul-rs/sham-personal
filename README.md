# Dr Shamin Eabenson — personal site

Static site, built with Astro. No CMS, no client-side framework, no runtime data
fetching. Output is plain HTML with six small inline scripts — the `no-js` class
stripper, the mobile nav, the publications filter, copy-to-clipboard for
citations (twice), the contact mailto composer and the CV print button. Every
page is fully readable and usable with JavaScript disabled.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Architecture

```
CLAUDE.md        what the client supplied, verbatim, plus the decisions taken
                 from it. When client answers and code disagree, that file wins.
REQUIREMENTS.md  what is still outstanding, and what each answer unblocks.

src/
  data/          the single source of truth — no content lives in markup
    site.js          identity, navigation, outbound profiles, clinical mode
    publications.js  14 papers, 2 under review, citation + BibTeX helpers
    credentials.js   education, registration, positions, memberships, awards
    themes.js        8 research themes → /research/[slug]
    themeDetail.js   long-form copy where it exists; pages degrade without it
    teaching.js      SlideShare decks
  styles/
    tokens.css     colour, fluid type scale, spacing, the shared column split
    global.css     reset, layout primitives, link and focus behaviour
  components/    Header, Footer, PageHeader, Tally, PubRow, Portrait
  layouts/Base.astro   head, SEO, schema.org Person, skip link
  pages/         index, about, about/cv, research/, research/[slug],
                 publications/, teaching, profiles, clinical, contact,
                 privacy, accessibility, 404                      (20 routes)
vercel.json      trailingSlash, so /about and /about/ are not two URLs
```

`publications.js` feeds the home page, the theme pages, the Publications page
and the CV from one place, so those four can never disagree — which is the
failure mode the spec calls out. `credentials.js` does the same for About and
the CV. The CV has no separate PDF: it is styled for print, so there is no
second document to drift out of step.

## Conventions worth knowing

- **Nothing unconfirmed is invented, and nothing narrates the gap.** Fields the
  client has not answered are `null` (four `doi` values, the Scopus profile,
  `person.images.portrait`, the clinical times). Components hide them silently —
  no "awaited", no "not yet available". Grep for `null` in `src/data/` to find
  what is outstanding. This rule has been broken once, by inferring an award's
  issuing body; see CLAUDE.md §5.1.
- **The tally is seeded.** `Tally.astro` shuffles 111 of 195 marks with a
  fixed-seed PRNG at build time, so the figure is byte-identical on every build
  and needs no JavaScript to render.
- **Two ambient movements, both behind `prefers-reduced-motion`.** The tally
  counts in on load, then settles into a slow standing wave that travels by
  column. The dark bands carry the aurora drift. Nothing animates on scroll,
  and nothing animates in response to nothing.
- **The tally wave animates height because height carries no data here.** Every
  stroke is the same height; the encoding is colour and count. Animating the
  size of a mark whose size meant something would misstate the figure.
- **Tally strokes take their colour from the ground, both marked and unmarked.**
  The unmarked ones must, because the aurora bloom is the same hue as the stroke:
  on a dark ground the bloom brightening beneath them dropped them to 2.1:1,
  under the 3:1 a graphical object needs. `--stroke-dark` on dark grounds,
  `--field-lift` on pale ones.
- **Measured cost, 4x CPU throttle at 390px:** 61fps idle, 56 with the wave,
  59 with the aurora, 54 with both. `transform` only, so no layout; no
  `will-change` on the 195 strokes, which would cost more in memory than it
  saves in paint.
- **One vertical axis.** `--split` in `tokens.css` is the column ratio every
  two-column section uses, so secondary content lines up down the whole page.
  Do not give a section its own ratio.
- **`--optical-left`** pulls display type back by its measured side bearing so
  large headings align optically with body text, not just geometrically.
- **Marigold means counting.** It is used on data marks and nothing else. On
  light grounds use `--marigold-dark`, which clears 3:1 where the bright one
  does not.
- **One dark hue, four pale grounds.** Green (`--field-*`) carries the masthead,
  hero and footer — the only dark fields. Everything else alternates between
  `--plaster`, `--tint-mint`, `--tint-sand` and `--tint-clay`, so the page moves
  between tones instead of repeating one. The dark violet second hue was tried
  and dropped: the client wanted the palette lighter.
- **Cards only where content is parallel.** Research themes and teaching decks
  are card grids because the items are comparable. Publications, credentials and
  paper lists stay as rows. Making everything a card is the tell.
- **Card internals are flex, not grid.** `margin-top: auto` pushes the footer
  line to the bottom of a flex column; in a grid with `align-content: start` it
  silently does nothing and the cards end up ragged.
- **The ambient drift is capped by contrast, not taste.** `.aurora` lightens the
  ground it sits on. At 0.55 opacity it dropped marigold text to 4.15:1, under
  the minimum. It is 0.36 / 0.30 now, holding 4.8:1 at the brightest point.
  Automated contrast checks read `backgroundColor` and cannot see a gradient —
  if you raise those values, re-check by hand. At the royal green the blooms are
  0.16/0.16; pixel-sampling the brightest rendered point gives marigold 4.70:1
  and the tally strokes 4.11:1, so there is about 0.2 of headroom and no more.
  The blooms are green and amber; there is no violet anywhere in the build.
- **A DOI is only linked if it resolves.** `doiUnresolved: true` renders the
  identifier as text instead of linking to a 404. All DOIs were checked against
  doi.org; re-check when adding papers.
- **Held-back facts.** `hold: true` on a membership keeps it out of the rendered
  page. Used where we believe the supplied detail is wrong — see CLAUDE.md §2.
- **Use `isSelf()` for his own name, never `startsWith`.** Authors are stored
  "Shamin Eabenson" and "S. Eabenson"; a surname prefix match silently matches
  nothing. That bug listed him among his own co-authors on all eight theme pages.
- **The focus ring is `currentColor`, which breaks on filled controls.** A filled
  button's text colour matches its fill, so the ring lands on the page behind it
  at 1:1. `.submit`, `.chip.is-on` and `.cv[aria-current]` each set their own
  `outline-color`. Any new filled control needs the same.
- **Breakpoints that gate navigation are in `em`, not `px`.** A px media query
  cannot see text-only zoom, so the seven-item desktop nav stayed up at 200%
  text and pushed the CV button off-screen. The JS `matchMedia` must match.
- **Never put a page's meta description into the `Person` schema.** It described
  Dr Eabenson as "How this website handles personal data" on `/privacy`.

## Still blocked on client answers

See `REQUIREMENTS.md` — one list, kept current. Short version: the public email
is confirmed and live, `/about`, `/about/cv` and `/clinical` are all built, and
co-author consent is granted. What remains is the photograph, the IMA
confirmation, the Scopus ID, four papers with no DOI, consultation times, and
the speaking/ministry/writing decisions.


## Quality checks

`npm run build` warns if any page's meta description exceeds 160 characters.

The audit script used during development checks contrast from the rendered DOM,
heading order, accessible names, duplicate ids, WCAG 2.2 tap targets (with its
inline and spacing exceptions), and overflow at 320/390/768/1440. Last run:
20 pages, 0 issues. Re-run it after layout changes.

It does NOT catch: contrast over the `.aurora` gradients (sample the rendered
pixels), focus rings on filled controls (pixel-diff the control, with a padded
capture — the outline is drawn outside the element box), text-only zoom, or
behaviour with JavaScript disabled. Each of those hid a real bug.

## Design and accessibility skills

The build used a set of Claude Code skills that are **not committed** — roughly
10 MB of third-party code from five repositories, most without a bundled
licence. To restore them into `.claude/skills/`:

```bash
git clone --depth 1 https://github.com/anthropics/skills.git       /tmp/anthropic
git clone --depth 1 https://github.com/vercel-labs/agent-skills.git /tmp/vercel
git clone --depth 1 https://github.com/accesslint/claude-marketplace.git /tmp/accesslint

mkdir -p .claude/skills
cp -r /tmp/anthropic/skills/frontend-design        .claude/skills/
cp -r /tmp/vercel/skills/web-design-guidelines     .claude/skills/
cp -r /tmp/accesslint/plugins/accesslint/skills/*  .claude/skills/
```

`frontend-design` is the one that matters most here: the palette, typography
and the rule against templated defaults all come from it.

## A note on tooling

Use **npm**. A `pnpm-lock.yaml` and `pnpm-workspace.yaml` exist on disk but are
gitignored — two lockfiles for one project produce different dependency trees
depending on which tool is run. If the project should standardise on pnpm
instead, delete `package-lock.json`, un-ignore the pnpm files and commit those.
