# What is still needed

Written for: whoever is collecting answers from Dr Eabenson, plus whoever deploys.

Updated 19 September 2026, after his answers came back. Most of the earlier list is
now closed. What follows is only what is still open, and what each answer unblocks.

Nothing on the site is invented. Where an answer is missing, the element does not
render and the page it belongs to is not linked anywhere.

---

## 1. One question that should be answered first

**Which professional body is the KRL/… life membership?**

It is recorded as *"Indian Medical Council"*, membership number
`KRL/12999/33/2025/155554/2010-11/L`, Thiruvananthapuram Local Branch under the Kerala
State Branch.

That is almost certainly the **Indian Medical Association (IMA)**. The IMA has local and
state branches exactly as described and issues life membership numbers in this format.
A *council* is a statutory registration body — it has neither life members nor local
branches, and the Medical Council of India was dissolved in 2020.

Because putting the wrong professional body on a doctor's site is a credential error,
**this membership is currently held back from the site**. Every other membership is
published. One line confirming "IMA" puts it live.

---

## 2. Blocking a whole page

These pages do not exist and are not linked from anywhere, so nothing 404s.

### Speaking and media — `/speaking`
**Needs:** recent speaking engagements with dates and places, and the topics he will
accept invitations on. Questions 19 and 20 came back blank.

Nothing public documents his speaking in a medical or academic capacity, and inferring
a talk list from his papers would be fabrication.

Worth assembling regardless of the answer: a downloadable headshot, a 50-word bio, a
200-word bio, and a note on how to pronounce his name. That set is what makes an
organiser choose one speaker over another, and it takes about an hour.

### The ministry question — Question 22, unanswered
His ministry work is a substantial part of his public life: he is Chairman, Founder and
Managing Trustee of the Eabenson Ministries and Church Trust, and also behind Eabenson
TV and Eabenson Books and Publishers.

Four options: **A** keep it entirely off this site · **B** a small, clearly separate
section linking out to eabensonministries.com · **C** a full page of its own · **D**
something else.

Our recommendation remains **B**. Hiding it is dishonest; blending it into the academic
identity weakens both. Adjacent and clearly distinct.

Until he chooses, the site carries **only** the medical identity. The Trust, Eabenson TV
and Eabenson Books are in the data but flagged `medical: false` and do not render. The
trust email is not published here. If he picks B or C, two follow-ups: should *Anointing*
and *The Great Commission* be listed, and which YouTube channels should be linked?

### Writing — `/writing`
**Needs:** one decision — will he write regularly? Question 27 came back blank.

Answer honestly. A writing section whose newest piece is eighteen months old does active
damage; no writing section does none. It can be added later without rebuilding anything.

---

## 3. Blocking a section of a page that exists

### Consultation — `/clinical`
Built, and live. He consults by **telemedicine**, and that is stated with his KMC
registration number as the advertising rules require.

**Still needs:** days, timings and languages (Question 16 came back blank). The page
deliberately states none of these — consulting hours a patient cannot rely on are worse
than no hours at all. The section appears automatically once
`person.clinical.days / timings / languages` are filled in `src/data/site.js`.

**Also needs a booking decision.** He said yes to online booking (Question 17). A static
site cannot run a scheduler, so this needs a service — Calendly, Practo, a link to his
Medisage profile, or simply the enquiry form as it works now. Set
`person.clinical.bookingUrl` once chosen.

Before launch, this page should be read by someone familiar with NMC advertising rules.

### Publications
**One DOI does not resolve.** `10.69605/IJLBPR_15.5.2026.182`, the *Handle with Care*
biomedical waste paper. Checked 19 September 2026: the `10.69605` prefix is registered
but this suffix returns "Resource not found" at doi.org — the publisher appears not to
have deposited it yet. The identifier is displayed as text rather than linked to a dead
page. Worth chasing the journal, or confirming the suffix is right.

The other ten DOIs were all checked and resolve.

**Also needs:** the **Scopus author ID**. The heading was given, the value left blank. It
shows greyed in the footer until supplied.

**Two more papers were due within a fortnight** of his reply, with more than twenty at
various stages. Send details and they render everywhere at once.

### About and CV
**Missing dates:** the Commonwealth Scholarship (United Kingdom) and the Shankers
International Award have no year. The Shankers award also has no issuing body. Both are
listed without a date rather than dropped, but they look unfinished next to the others.

### Teaching
**Needs:** permission to link the SlideShare decks, and the individual deck URLs
(Question 21 came back blank). Every card currently points at the SlideShare profile
rather than a guessed permalink. Also worth asking whether there are decks not on
SlideShare.

---

## 4. Blocking launch

### Contact form service
The form is built, validated and styled, but a static site has no mail server. It needs
an external form service — Formspree, Netlify Forms and Web3Forms all have free tiers
adequate for this volume. Set `person.formEndpoint` in `src/data/site.js` and the form
enables itself. Until then the page says plainly that it is not connected and points
people to email, which works.

### Confirm the public email address
Four addresses were supplied. The site currently publishes the company one,
`drshamineabenson@eabensonhealthcare.com`, because it matches his current post and keeps
the medical identity separate from the ministry. The alternatives on file are
`drshamin123@gmail.com` and `dr_shamin@yahoo.com`. One word changes it.

### Postal address
No address was supplied for Eabenson Healthcare Private Limited. The site prints **no**
postal address anywhere — the old BLDE department address stopped describing him when
the MD completed in 2026, and an address we cannot stand behind is worse than none.

### Photograph
Promised as an attachment, not yet received. Nothing on the site depends on it, but a
portrait on About and a headshot in a press kit both want it.

### Social accounts — Questions 25 and 26, unanswered
Currently linked: ORCID, Google Scholar, Web of Science, ResearchGate, Semantic Scholar,
Academia.edu, Researchers Profile, LinkedIn, SlideShare, Medisage — every link he
actually supplied. **X, Facebook, Instagram, Pinterest and YouTube are not linked**,
because he did not supply them and did not tick them. Only the ones he ticks get linked.

### Privacy notice sign-off
`/privacy` is accurate about what the site technically does — no cookies, no analytics,
no tracking, and an honest disclosure that Google Fonts receives visitors' IP addresses.
The parts describing how enquiries are handled state a sensible default nobody has
formally agreed to. He should read it, and ideally someone should check it against the
DPDP Act before launch.

### Domain
`www.shamineabenson.com` is purchased and is set as the canonical domain in
`astro.config.mjs`. It still needs DNS pointed at whichever host is chosen.

---

## 5. Answered, no longer blocking

Domain · public email · full name and post-nominals · both degrees with institutions and
years · MD completion · current post · KMC registration number · professional
memberships (bar the one query above) · awards · all fourteen publications with DOIs ·
two papers under review · Google Scholar · Web of Science ResearcherID · Semantic
Scholar · Researchers Profile · ORCID · ResearchGate · Academia.edu · LinkedIn ·
SlideShare · Medisage · co-author consent · telemedicine practice · Medisage profile
still accurate.

Questions 28–34 — tone, reference sites, colours, corrections, exclusions — came back
blank. The existing visual direction stands unless he says otherwise.
