# Dr Shamin Eabenson — personal site

Static site, built with Astro. No CMS, no client-side framework, no runtime data
fetching. Output is plain HTML with three small inline scripts — the mobile nav,
the publications filter, and copy-to-clipboard for citations. Every page is
fully readable with JavaScript disabled.

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
  components/    Header, Footer, PageHeader, Tally, PubRow
  layouts/Base.astro   head, SEO, schema.org Person, skip link
  pages/         index, about, teaching, contact, privacy, accessibility, 404,
                 research/, research/[slug], publications/
```

`publications.js` feeds the home page, the theme pages, the Publications page
and the CV from one place, so those four can never disagree — which is the
failure mode the spec calls out. `credentials.js` does the same for About and
the CV. The CV has no separate PDF: it is styled for print, so there is no
second document to drift out of step.

## Conventions worth knowing

- **Nothing unconfirmed is invented.** Fields the client has not answered are
  `null` in the data files (`person.email`, two `doi` values, Google Scholar and
  Scopus). Components hide or visibly mark those rather than rendering a
  placeholder. Grep for `null` in `src/data/` to find what is outstanding.
- **The tally is seeded.** `Tally.astro` shuffles 111 of 195 marks with a
  fixed-seed PRNG at build time, so the figure is byte-identical on every build
  and needs no JavaScript to render.
- **One motion moment.** The tally counting in on page load is the only
  non-user-triggered animation on the site, and it sits behind
  `prefers-reduced-motion: no-preference`. Nothing animates on scroll.
- **One vertical axis.** `--split` in `tokens.css` is the column ratio every
  two-column section uses, so secondary content lines up down the whole page.
  Do not give a section its own ratio.
- **`--optical-left`** pulls display type back by its measured side bearing so
  large headings align optically with body text, not just geometrically.
- **Marigold means counting.** It is used on data marks and nothing else. On
  light grounds use `--marigold-dark`, which clears 3:1 where the bright one
  does not.
- **Two hues, never mixed inside one element.** Green (`--field-*`) carries the
  masthead, hero and footer; plum (`--field-alt-*`) carries the contact band and
  every second dark block. Light sections alternate `--plaster`, `--tint-mint`
  and `--tint-sand` so the page moves between tones instead of repeating one.
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
  if you raise those values, re-check by hand.
- **A DOI is only linked if it resolves.** `doiUnresolved: true` renders the
  identifier as text instead of linking to a 404. All DOIs were checked against
  doi.org; re-check when adding papers.
- **Held-back facts.** `hold: true` on a membership keeps it out of the rendered
  page. Used where we believe the supplied detail is wrong — see CLAUDE.md §2.

## Still blocked on client answers

| Area | Question | Effect |
|---|---|---|
| Email address | Q2 | Footer and contact band link to `/contact/` instead |
| Degrees, posts, registration | Q5–Q10 | `/about`, `/about/cv` cannot be written |
| Two missing DOIs | Q11 | Rows render "DOI not yet available" |
| Scholar / Scopus IDs | Q13, Q14 | Shown greyed in the footer |
| Co-author consent | Q15 | Collaborator list not yet rendered |
| Clinical practice | Q16–Q19 | `/clinical` not built; may be dropped entirely |
| Speaking history | Q20–Q25 | `/speaking` not built |
| Writing section | Q28 | `/writing` not built, and not linked |

## Quality checks

`npm run build` warns if any page's meta description exceeds 160 characters.

The audit script used during development checks contrast from the rendered DOM,
heading order, accessible names, duplicate ids, WCAG 2.2 tap targets (with its
inline and spacing exceptions), and overflow at 320/390/768/1440. Last run:
14 pages, 0 issues. Re-run it after layout changes.

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
