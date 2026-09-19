# CLAUDE.md — Dr Shamin Eabenson website

This file is the **source of truth**. It records what the client supplied, verbatim
where it matters, plus the decisions taken from it. When client answers and code
disagree, this file wins and the code gets corrected.

Answers received from Dr Eabenson, recorded 19 September 2026.
Everything in §1–§4 is client-supplied. §5 is our reading of it.

The live launch checklist is `REQUIREMENTS.md` — keep it ticked and dated.
This file records *what the client said and what we decided*; that file records
*what is left to do*.

---

## 1. Identity

| Field | Value |
|---|---|
| Domain | `www.shamineabenson.com` — **already purchased** (GoDaddy) |
| Name on site | Dr Shamin Eabenson |
| Post-nominals | MBBS, MD Community Medicine |
| Current post | Director and Founder, Eabenson Healthcare Private Limited |
| Council registration | Karnataka Medical Council (KMC) **169121** |

### Email addresses supplied
- Personal: `drshamin123@gmail.com`
- Personal: `dr_shamin@yahoo.com`
- Company (Eabenson Healthcare Private Limited): `drshamineabenson@eabensonhealthcare.com`
- Trust (Eabenson Ministries and Church Trust): `eabensonministries1@gmail.com`

**Decision:** the company address is used as the public contact on the site — it is
professional, tied to his current post, and separates him from the ministry identity.
The trust address is *not* published here; it belongs to the ministry, and the ministry
question (§6) is unanswered. See `person.email` in `src/data/site.js` to change this.

### Photograph
Promised as an attachment. **Not yet received.** No portrait is used anywhere; the
site does not depend on one.

---

## 2. Qualifications, positions, memberships, awards

### Degrees
| Degree | Institution | Year |
|---|---|---|
| MD Community Medicine | BLDE (DU) Shri B. M. Patil Medical College, Hospital and Research Centre, Vijayapura, Karnataka | 2026 |
| MBBS | Dr SMCSI Medical College Hospital and Research Centre, Karakonam, Thiruvananthapuram, Kerala | 2009 |

MD examination passed with **63.6%**. Completion certificate to be issued **3 October 2026**.

**Decision:** the site states the MD as completed in 2026, which is what he says. It does
not print the exam percentage — marks are not conventional on a professional site and he
did not ask for them. Say the word and they go in.

### Positions and organisations
- **Eabenson Healthcare Private Limited** — Founder, Director
- **Eabenson Ministries and Church Trust** — Chairman, Founder, Managing Trustee
- Eabenson TV
- Eabenson Foundation
- Eabenson Research Centre
- Eabenson Books and Publishers

**Decision:** only Eabenson Healthcare appears on the medical site. The Trust, TV, Books
and Publishers sit with the ministry identity, which is on hold pending §6. Foundation
and Research Centre are listed without description because none was supplied.

### Memberships (as supplied)
| Body | Number | Dates |
|---|---|---|
| *"Indian Medical Council"* Life Member | KRL/12999/33/2025/155554/2010-11/L, Thiruvananthapuram Local Branch, Kerala State Branch | — |
| Indian Red Cross Society (Kerala State Branch) — Life Member | No. 772 of 2010-11 | — |
| IAPSM (Indian Association of Preventive & Social Medicine) — Life Member | L-8706/2024 | — |
| European Society of Cardiology | ESC ID 1284616 | Aug 2022 – present |
| Royal College of Physicians — Associate Member | — | Jul 2016 – Jul 2017 |

> **HELD BACK — needs one line of confirmation.** The first entry is recorded as
> "Indian Medical Council". That is almost certainly the **Indian Medical Association
> (IMA)**: the IMA has local and state branches exactly as described, and issues life
> membership numbers in this format. A *council* is a statutory registration body — it
> does not have life members or local branches, and the Medical Council of India was
> dissolved in 2020. Publishing the wrong professional body on a doctor's site is a
> credential error, so **this membership is not rendered on the site** until he confirms
> which body it is. Everything else in the table is published.

### Awards and recognition
| Award | Issuer | Date |
|---|---|---|
| Gold Medal, PG paper presentation (SARS) | BLDE (DU) Shri B. M. Patil Medical College | Jul 2026 |
| 1st Prize, Essay Writing Competition, World Cancer Day 2026 | Dept of Surgery, BLDE (DU) | Feb 2026 |
| 2nd Prize, Essay Competition, World Cancer Day | BLDE (DU) | Feb 2025 |
| 3rd Prize, Drawing Competition, World Cancer Day | BLDE (DU) | Feb 2025 |
| ICMR MD Thesis Award — ₹1,00,000 grant | ICMR | Dec 2024 |
| 1st Prize, Best Oral Paper (PG), KARKON 24, 4th State Conference of IAPSM, S. S. Institute of Medical Sciences, Davangere | IAPSM | Sep 2024 |
| 1st Prize, Essay Writing, Rashtriya Ekta Divas | National Service Scheme | Nov 2023 |
| Commonwealth Scholarship, United Kingdom | Commonwealth Scholarship | *no year given* |
| Shankers International Award | *not stated* | *no year given* |

Awards without a year render without one rather than being dropped. The last two need
dates, and the Shankers award needs an issuing body.

---

## 3. Research

**14 papers published.** Two more expected within roughly two weeks of 19 Sep 2026.
More than 20 further papers at various stages.

Full list with DOIs lives in `src/data/publications.js` — that file is generated from
the client's list and is the only place publication data should be edited.

### Corrections this batch forced
1. **"Are future doctors ready for AI?"** — DOI supplied: `10.18203/2394-6040.ijcmph20260697`.
   Previously rendered "DOI not yet available".
2. **Biomedical waste paper** — the real title is *"Handle with Care: Biomedical Waste
   Management Awareness among Undergraduate Medical Students in North Karnataka"*, DOI
   `10.69605/IJLBPR_15.5.2026.182`. We had it as a bare "Biomedical waste management"
   with authors **Pattankar TP, Rangoli AM** — that was **wrong**. Correct authors are
   Gudadinni, Yadavannavar and Rangoli. Tanuja P. Pattankar is not an author and has
   been removed.
3. **Seven papers were missing entirely** — heat waves, 108 ambulance services, the
   IJDDT family adoption paper, the ASHA qualitative study, two Genetics and Molecular
   Research papers, and the International Journal of Special Education paper.
4. On the Special Education paper he is the **fourth** author, not the first. Author
   emphasis is positional, so this now shows correctly.

### Under review / in progress
1. *Integrated Transcriptomic and Immunohistochemical Profiling of Inflammatory
   Biomarkers for Early Prediction of Oral Epithelial Dysplasia Progression* — Genetics
   and Molecular Research (E-ISSN 1676-5680)
2. *Development and Evaluation of Novel Pharmaceutical Formulations for the Management
   of Chronic Musculoskeletal Pain and Joint Disorders*

### Academic profiles — all client-supplied, all live on the site
| Profile | Value |
|---|---|
| ORCID | https://orcid.org/0009-0002-6516-7234 |
| Google Scholar | https://scholar.google.com/citations?user=iGElE6UAAAAJ&hl=en |
| Web of Science ResearcherID | QDN-7117-2026 — https://www.webofscience.com/wos/author/record/QDN-7117-2026 |
| ResearchGate | https://www.researchgate.net/profile/Shamin-Eabenson |
| Semantic Scholar | https://www.semanticscholar.org/author/Shamin-Eabenson/2421380683 |
| Researchers Profile | https://researchersprofile.com/users/41486/shamin-eabenson |
| LinkedIn | https://www.linkedin.com/in/dr-shamin-eabenson-1a55811b3/ |
| Academia.edu | https://bldeu.academia.edu/DrSHAMINEABENSON |
| SlideShare | https://www.slideshare.net/DrSHAMINEABENSON1 |
| Medisage | https://mymedisage.com/profile/dr-shamin-eabenson-general-practitioner-gp |

**Scopus author ID:** heading given, value left blank. Still outstanding.

**Co-author consent: granted.** Co-authors may be named on the site.

---

## 4. Clinical practice

- Currently seeing patients: **yes, telemedicine**
- Wants online appointment booking: **yes**
- Medisage profile: **active and correct**
- Days, timings and languages: **not answered**

**Decision:** `/clinical` is built and states telemedicine consultations with his
registration number, as Indian advertising rules require. It does **not** state days,
timings or languages, because he did not give them. Booking currently routes to the
enquiry form; a real booking system needs a decision (§6).

---

## 5. Editorial rules for this site

1. **Never invent.** If the client has not supplied it, the element does not render.
   Unknowns are `null` in `src/data/` and components hide or honestly mark them.
2. **Never publish a credential we suspect is wrong.** See the IMA note in §2.
3. **The ministry stays off the medical site** until he chooses A/B/C/D. He is publicly
   associated with both; the site simply does not speak for the ministry yet.
4. **Clinical copy follows NMC advertising rules** — no testimonials, no before-and-after
   imagery, no superlatives, no guaranteed outcomes, registration number displayed.
5. **One data file per kind of fact.** Publications, credentials, themes and site
   identity each have one home. Prose never hardcodes a number that data can
   derive — this rule has already been broken twice and both times shipped a
   wrong figure ("Seven papers" when there were fourteen).
6. **Colour is not blue.** The client already has two sites in blue and rejected
   it here. The site is a deep green, `--field-deep #12301F`. Colour tokens are
   named for their role (`--field-deep`, `--field`, `--field-lift`), never their
   hue, so another change is one file. Marigold stays for data marks only.
7. **Re-measure contrast after any colour change.** All fourteen pairs were
   checked against WCAG 2.2 when the palette moved to green; the lowest is
   4.6:1 for small meta text and 3.6:1 for graphical marks.

---

## 6. Still outstanding

Kept in **`REQUIREMENTS.md`**, not here. One list, one place — two copies of the
same checklist in two files is how they end up disagreeing.

The one item worth repeating, because it is a credential and not a task: the
`KRL/…` life membership is held back from the site until he confirms whether the
body is the Indian Medical Association. See §2.

The ministry decision (A / B / C / D) referenced in §1 and §2 also lives there.

## 7. Working notes

- Stack: Astro, static output. `npm run dev`, `npm run build`. npm only — a stray
  `pnpm-lock.yaml` is gitignored.
- Repo: https://github.com/amul-rs/sham-personal
- Hosting: **Vercel**, deployed 19 Sep 2026. DNS for `www.shamineabenson.com`
  (bought at GoDaddy) is deliberately **not** pointed yet — waiting on client
  confirmation. That is the last step before the site is publicly reachable.
- Brand assets live in `public/`: `favicon.svg`, `apple-touch-icon.png`, and
  `og.png` (1200×630). All three are generated from the tally motif, so they
  need regenerating if the palette changes again.
- Design rules and QC method are in `README.md`. Do not reintroduce: ALL-CAPS eyebrow
  labels, middle-dot meta strings, monospace data labels, `→` on link text, or
  scroll-triggered fade-ups. One motion moment, on page load, only.
- `--split` in `tokens.css` is the shared column ratio. Every two-column section uses
  it so secondary content shares one vertical axis.
