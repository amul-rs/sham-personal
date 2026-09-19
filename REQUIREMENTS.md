# What is still needed

Written for: whoever is collecting answers from Dr Eabenson, plus whoever deploys the site.

Every item below is blocking something specific. Nothing on the site has been
invented to fill a gap — where an answer is missing, the section is absent
rather than guessed at, and the page it belongs to is not linked anywhere.

---

## 1. Blocking a whole page

These four pages do not exist and are not linked from anywhere. Nav and footer
entries were removed so nothing 404s. Each returns the moment its answers do.

### Curriculum vitae — `/about/cv`
**Needs:** degrees held, with institution and year for each · whether the MD in
Community Medicine is complete, and if so which year · current post and its
exact title · medical council registration number and which council ·
professional memberships · awards, with years.

A CV for a doctor that is missing qualifications and registration is worse than
no CV, so this is not being built partially. The publications and presentations
halves are already in the data files and will render the moment the rest lands.

### Clinical practice — `/clinical`
**Needs:** is he currently seeing patients privately at all? If yes — where,
which days, what times, which languages, and should people be able to book
through the site? Is the Medisage listing still accurate?

If the answer to the first question is no, this page is dropped permanently and
that is the end of it. A Medisage listing is not evidence of a current practice;
listings outlive the thing they describe. This page must also be read against
NMC advertising rules before launch: no testimonials, no before-and-after
imagery, no superlatives, no guaranteed outcomes, registration number shown.

### Speaking and media — `/speaking`
**Needs:** recent speaking engagements with dates and places · topics he will
accept invitations on · a decision on the ministry question below.

Nothing is publicly documented about his speaking in a medical or academic
capacity, and inferring a talk list from his papers would be fabrication.

**The ministry question.** His ministry work is a real and substantial part of
his public life. Four options: keep it entirely off this site; give it a small
clearly separate section linking out to eabensonministries.com; give it a full
page of its own; or something else. The recommendation is the second — hiding it
is dishonest, but blending it into the academic identity weakens both. Adjacent
and clearly distinct. If it appears at all, a second decision follows: should
*Anointing* and *The Great Commission* be listed, and which YouTube channels, if
any, should be linked?

### Writing — `/writing`
**Needs:** one decision — will he actually write regularly?

Answer honestly. A writing section whose newest piece is eighteen months old
does active damage; no writing section does none. It can be added later without
rebuilding anything, so "not yet" is a perfectly good answer. Three pieces that
draw on work already done, if he says yes: what 195 students said about AI; why
your doctor may not prescribe the cheaper medicine; what a year with one family
teaches a medical student.

---

## 2. Blocking a section of a page that exists

### About — `/about`
**Needs:** the same qualifications and positions as the CV above.

The biography is written and live. Education, positions held, memberships and
awards are absent from the page entirely — not stubbed, not headed with an empty
list underneath. They appear as real sections once the facts arrive.

**Also needs:** his approval of the biography itself. It was written from public
sources and is in our voice, not his. He should rewrite it freely.

### Publications — `/publications`
**Needs:** the DOI for two papers, and confirmation that seven is all of them.

Missing DOIs are for *Are future doctors ready for AI?* and *Biomedical waste
management*. The second is also missing volume, issue and page numbers. Both
render honestly as "DOI not yet available" rather than linking somewhere wrong.
If any papers are missing from the list, or any are under review and should be
shown as in progress, send the details.

**Also needs:** a Google Scholar profile link and a Scopus or Web of Science
author ID, if they exist. Both currently show greyed out in the footer.

**Also needs:** written consent from co-authors before a named collaborators
section goes up. Naming them in citations is normal academic practice and is
already done; a feature list of collaborators is a different thing and needs
asking. Recurring names: M. R. Gudadinni, M. C. Yadavannavar, A. M. Rangoli,
Rekha Udgiri, Tanuja P. Pattankar, Sachin Sangavi, A. Ravindra.

### Research theme pages — `/research/*`
**Needs:** long-form copy for four of the five themes.

Only *Medical education* is written out in full, as the model. The other four
detect that their copy is missing and fall back to an overview plus the papers
themselves, so they read as complete rather than broken. Filling in
`src/data/themeDetail.js` upgrades each page with no code changes.

### Teaching — `/teaching`
**Needs:** permission to link the SlideShare decks, and the individual deck URLs.

Every card currently points at the SlideShare profile rather than a guessed
permalink. Also worth asking whether there are decks that are not on SlideShare.

---

## 3. Blocking launch

### Domain name
Two or three choices in order of preference, in case the first is taken.
`src/astro.config.mjs` currently assumes `shamineabenson.com` as a placeholder
for canonical URLs and the sitemap. It must be set correctly before launch or
search engines index the wrong address.

### Contact form service
The contact form is built, validated and styled, but a static site has no mail
server. It needs an external form service — Formspree, Netlify Forms and
Web3Forms all have free tiers adequate for this volume. Set the endpoint in
`person.formEndpoint` in `src/data/site.js` and the form enables itself; while
it is null the page says plainly that it is not connected rather than silently
discarding messages.

### Email address
What address should appear publicly, if any? Nothing renders an email anywhere
until `person.email` is set, so the site currently shows none at all.

### Photograph
A professional headshot, high resolution, plain background if possible. Also
useful regardless of the speaking decision: a 50-word bio, a 200-word bio, and a
note on how to pronounce his name. That set is what makes an event organiser
pick one speaker over another and takes an hour to assemble.

### Privacy notice sign-off
`/privacy` is accurate about what the site technically does — no cookies, no
analytics, no tracking, and an honest disclosure that Google Fonts receives
visitors' IP addresses. The parts describing how enquiries are handled and for
how long state a sensible default that nobody has formally agreed to. He should
read it, and ideally someone should check it against the DPDP Act before launch.

### Social accounts
Which should be linked: LinkedIn, ResearchGate, Academia.edu, SlideShare, X,
Facebook, Instagram, Pinterest, YouTube, Medisage? Only the ones he ticks get
linked — a professional site that links a personal Instagram undercuts itself.
Currently linked: LinkedIn, ResearchGate, Academia.edu, SlideShare, ORCID.

---

## 4. Worth asking, not blocking anything

- Is anything currently online about him out of date or wrong that should be
  corrected here?
- Is there anything he specifically does **not** want on the site?
- Any researchers' or doctors' sites whose look he likes, or definitely dislikes?
- Does his institution have colours or marks the site should respect?
