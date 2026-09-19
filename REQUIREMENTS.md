# Launch checklist

**Keep this file updated.** Tick items as they are done and add the date. When
something new comes back from the client, move it out of §3 and into whichever
section it unblocks. This file and `CLAUDE.md` are the project's memory — if a
decision is not written down in one of them, it did not happen.

Last updated: **19 September 2026**
Status: **deployed to Vercel, DNS pending client confirmation**

---

## 1. Technical setup

- [x] Astro static build, 19 routes — *19 Sep 2026*
- [x] Deployed to Vercel — *19 Sep 2026, by Amul*
- [x] Favicon (`favicon.svg`, tally motif in the new green) — *19 Sep 2026*
- [x] Apple touch icon, 180×180 — *19 Sep 2026*
- [x] Social share image, 1200×630 `og.png`, with `og:` and `twitter:` tags — *19 Sep 2026*
- [x] `robots.txt`, pointing at the sitemap — *19 Sep 2026*
- [x] Sitemap generated at `/sitemap-index.xml` — *19 Sep 2026*
- [x] `theme-color` set to the new green — *19 Sep 2026*
- [x] Canonical domain set to `https://www.shamineabenson.com` — *19 Sep 2026*
- [ ] **DNS** — GoDaddy records pointed at Vercel. *Deliberately held until the
      client confirms. This is the last technical step before the site is public.*
- [ ] Verify the social preview renders — paste the live URL into WhatsApp and
      LinkedIn once DNS resolves. Cannot be checked before then.
- [ ] Decide on analytics. Recommended: Plausible or Umami, both cookieless, so
      no cookie banner and no third-party tracking on a page a patient may open.
      If none is added, remove the "no analytics" wording from `/privacy`.

## 2. Content and design

- [x] Palette moved off blue — the client has two other sites in blue. Now a deep
      green, `--field-deep #12301F`. Colour tokens renamed to role-based names
      (`--field-deep`, not `--field-blue`), so a future change is one file — *19 Sep 2026*
- [x] All 14 publications with DOIs, from the client's list — *19 Sep 2026*
- [x] Education, registration, memberships and awards live on `/about` and `/about/cv` — *19 Sep 2026*
- [x] `/clinical` built — telemedicine, registration number shown, NMC rules followed — *19 Sep 2026*
- [x] CV as a persistent action in the sticky header — *19 Sep 2026*
- [x] Every count derived from data, never typed — *19 Sep 2026*
- [ ] Long-form copy for **7 of 8** research themes. Only *Medical education* is
      written. The rest fall back to an overview plus their papers, which reads
      as finished rather than broken. Fill `src/data/themeDetail.js`.
- [ ] `/clinical` read by someone familiar with NMC advertising rules before launch.
- [ ] `/privacy` read and signed off by Dr Eabenson, ideally checked against the
      DPDP Act.

## 3. Waiting on the client

### Blocks launch
- [ ] **Contact form endpoint.** Static sites cannot send mail. Needs Formspree,
      Netlify Forms or Web3Forms. Set `person.formEndpoint` in `src/data/site.js`
      and the form enables itself. Until then it is visibly disabled and points
      to email.
- [ ] **Confirm the public email.** The site publishes
      `drshamineabenson@eabensonhealthcare.com`. He gave four addresses and never
      said which is public. Alternatives: `drshamin123@gmail.com`,
      `dr_shamin@yahoo.com`.
- [ ] **Which professional body is the `KRL/…` life membership?** Recorded as
      "Indian Medical Council", almost certainly the Indian Medical **Association**
      — a council has neither life members nor local branches. This is the one
      credential currently held back from the site. One word unblocks it.
      See `CLAUDE.md` §2.

### Blocks a whole page
- [ ] **Speaking** — recent engagements with dates and places, and the topics he
      will accept. `/speaking` is not built and not linked.
- [ ] **Ministry decision** — A: off this site entirely · B: a small, clearly
      separate section linking to eabensonministries.com · C: its own page · D:
      something else. Recommendation is **B**. Until he answers, the site carries
      only the medical identity; the Trust, Eabenson TV and Eabenson Books are in
      the data flagged `medical: false` and do not render. If B or C: should
      *Anointing* and *The Great Commission* be listed, and which YouTube channels?
- [ ] **Writing section** — will he write regularly? If not, better to have none.
      `/writing` is not built and not linked.

### Blocks a section
- [ ] **Consultation days, timings and languages.** He confirmed telemedicine but
      gave none of these, so the page states none. Fill
      `person.clinical.days / timings / languages`.
- [ ] **Booking method.** He said yes to online booking. Needs a service —
      Calendly, Practo, or his Medisage link. Set `person.clinical.bookingUrl`.
- [ ] **Scopus author ID.** Heading given, value left blank. Shows greyed in the footer.
- [ ] **A DOI that does not resolve.** `10.69605/IJLBPR_15.5.2026.182`, the
      *Handle with Care* paper. The prefix is registered but the suffix returns
      "not found" at doi.org. Shown as text, not linked. Chase the journal or
      confirm the suffix.
- [ ] **Two papers due** within a fortnight of 19 Sep, plus 20+ in progress.
- [ ] **Award dates** — the Commonwealth Scholarship and the Shankers
      International Award have no year; Shankers also has no issuing body.
- [ ] **SlideShare** — permission to link the decks, and the individual URLs. All
      four currently point at the profile.
- [ ] **Photograph.** Promised, not received. Nothing depends on it, but About
      and a press kit both want it.
- [ ] **Postal address** for Eabenson Healthcare Private Limited. The site prints
      none — the BLDE department address stopped describing him when the MD
      completed.

### Not blocking, still worth asking
- [ ] Which social accounts to link. Currently linked: every academic profile he
      supplied, plus LinkedIn, SlideShare and Medisage. X, Facebook, Instagram,
      Pinterest and YouTube are **not** linked because he did not supply or tick them.
- [ ] Anything online about him that is out of date and should be corrected here.
- [ ] Anything he specifically does not want on the site.

---

## 4. Answered, closed

Domain · public email supplied · full name and post-nominals · both degrees with
institutions and years · MD completion · current post · KMC registration 169121 ·
memberships (bar the one query in §3) · awards · all 14 publications with DOIs ·
two papers under review · Google Scholar · Web of Science ResearcherID · Semantic
Scholar · Researchers Profile · ORCID · ResearchGate · Academia.edu · LinkedIn ·
SlideShare · Medisage · co-author consent granted · telemedicine confirmed ·
Medisage profile confirmed accurate · **blue rejected, green chosen**.

Questions 28–31 — tone, reference sites, disliked looks, institutional colours —
came back blank. The current direction stands unless he says otherwise.
