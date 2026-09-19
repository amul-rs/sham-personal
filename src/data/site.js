// Identity, navigation and outbound profiles.
// Client-supplied 19 September 2026 — see CLAUDE.md §1 and §3.
//
// Anything not yet confirmed is `null`; components hide the element rather than
// rendering a placeholder. We do not invent a doctor's contact details.

export const person = {
  name: 'Dr Shamin Eabenson',
  given: 'Shamin',
  family: 'Eabenson',
  postNominals: 'MBBS, MD Community Medicine',
  title: 'Founder and Director',
  org: 'Eabenson Healthcare Private Limited',

  // Where he took his MD. This is his alma mater, not his current address —
  // the MD completed in 2026, so the department address no longer describes
  // where he works.
  almaMater: 'BLDE (Deemed to be University), Shri B. M. Patil Medical College, Hospital and Research Centre',
  almaMaterShort: 'BLDE (DU), Shri B. M. Patil Medical College',
  almaMaterCity: 'Vijayapura, Karnataka',

  // The region his research covers, which is a claim about the studies rather
  // than about where he currently sits.
  researchRegion: 'North Karnataka',

  /**
   * Public contact. He supplied four addresses; this is the company one, which
   * matches his current post and keeps the medical identity separate from the
   * ministry. Alternatives on file: drshamin123@gmail.com, dr_shamin@yahoo.com.
   */
  email: 'drshamineabenson@eabensonhealthcare.com',

  /**
   * Postal address for Eabenson Healthcare Private Limited — not supplied.
   * Until it is, no postal address is printed anywhere on the site.
   */
  address: null,

  /**
   * Where the contact form POSTs. A static site has no server of its own, so
   * this must be a form service (Formspree, Netlify Forms, Web3Forms...) or the
   * form cannot deliver anything. While it is null the page says so plainly
   * instead of pretending to accept messages.
   */
  formEndpoint: null,

  /** Telemedicine only, confirmed. Days, timings and languages not supplied. */
  clinical: {
    telemedicine: true,
    inPerson: false,
    days: null,
    timings: null,
    languages: null,
    bookingUrl: null,
  },

  lede:
    'Medicine practised at the scale of a population — how health systems, education and everyday risk shape the lives of people in North Karnataka.',
};

// Writing (Q27), Speaking (Q19–21) and the ministry question (Q22) are still
// unanswered, so those pages are neither built nor linked. Restore the entry at
// the same time as the page.
export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Consultation', href: '/clinical/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerPages = [
  { label: 'Curriculum vitae', href: '/about/cv/' },
  { label: 'Privacy', href: '/privacy/' },
];

// Every link below was supplied by the client. `pending: true` renders muted and
// unclickable rather than being silently dropped.
export const profiles = [
  {
    label: 'ORCID',
    detail: '0009-0002-6516-7234',
    href: 'https://orcid.org/0009-0002-6516-7234',
    group: 'academic',
  },
  {
    label: 'Google Scholar',
    detail: 'Citations and metrics',
    href: 'https://scholar.google.com/citations?user=iGElE6UAAAAJ&hl=en',
    group: 'academic',
  },
  {
    label: 'Web of Science',
    detail: 'ResearcherID QDN-7117-2026',
    href: 'https://www.webofscience.com/wos/author/record/QDN-7117-2026',
    group: 'academic',
  },
  {
    label: 'ResearchGate',
    detail: 'Publications and preprints',
    href: 'https://www.researchgate.net/profile/Shamin-Eabenson',
    group: 'academic',
  },
  {
    label: 'Semantic Scholar',
    detail: 'Indexed papers',
    href: 'https://www.semanticscholar.org/author/Shamin-Eabenson/2421380683',
    group: 'academic',
  },
  {
    label: 'Academia.edu',
    detail: 'Papers and drafts',
    href: 'https://bldeu.academia.edu/DrSHAMINEABENSON',
    group: 'academic',
  },
  {
    label: 'Researchers Profile',
    detail: 'Profile 41486',
    href: 'https://researchersprofile.com/users/41486/shamin-eabenson',
    group: 'academic',
  },
  {
    label: 'Scopus',
    detail: 'Author ID awaited',
    href: null,
    pending: true,
    group: 'academic',
  },
  {
    label: 'LinkedIn',
    detail: 'Professional profile',
    href: 'https://www.linkedin.com/in/dr-shamin-eabenson-1a55811b3/',
    group: 'elsewhere',
  },
  {
    label: 'SlideShare',
    detail: 'Teaching material',
    href: 'https://www.slideshare.net/DrSHAMINEABENSON1',
    group: 'elsewhere',
  },
  {
    label: 'Medisage',
    detail: 'Clinical profile',
    href: 'https://mymedisage.com/profile/dr-shamin-eabenson-general-practitioner-gp',
    group: 'elsewhere',
  },
];

export const academicProfiles = profiles.filter((p) => p.group === 'academic');
export const elsewhereProfiles = profiles.filter((p) => p.group === 'elsewhere');
