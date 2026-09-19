# Dr Shamin Eabenson — personal site

Static site, built with Astro. No CMS, no client-side framework, no runtime data
fetching. Output is plain HTML with two small inline scripts (mobile nav, scroll
reveal); the page is fully readable with JavaScript disabled.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Architecture

```
src/
  data/          the single source of truth — no content lives in markup
    site.js          identity, navigation, outbound profiles
    publications.js  7 papers + citationLine() helper
    themes.js        5 research themes → /research/[slug]
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
failure mode the spec calls out.

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
