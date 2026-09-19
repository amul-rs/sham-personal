// Single source of truth for identity, navigation and outbound profiles.
// Anything the client has not yet confirmed is `null` — components hide the
// element rather than rendering a placeholder. We do not invent a doctor's
// contact details or credentials.

export const person = {
  name: 'Dr Shamin Eabenson',
  given: 'Dr Shamin',
  family: 'Eabenson',
  department: 'Department of Community Medicine',
  institution:
    'BLDE (Deemed to be University), Shri B. M. Patil Medical College, Hospital and Research Centre',
  institutionShort: 'BLDE (DU), Shri B. M. Patil Medical College',
  city: 'Vijayapura',
  region: 'Karnataka',
  country: 'India',
  postcode: '586103',
  // Q2 — pending client answer. Nothing renders an email until this is set.
  email: null,
  /**
   * Where the contact form POSTs. A static site has no server of its own, so
   * this must be a form service (Formspree, Netlify Forms, Web3Forms...) or
   * the form cannot deliver anything. While it is null the page says so
   * plainly instead of pretending to accept messages.
   */
  formEndpoint: null,
  lede:
    'Medicine practised at the scale of a population — studying how health systems, education and everyday risk shape the lives of people in North Karnataka.',
};

// Writing (Q28), Clinical (Q16-19), Speaking (Q20-25) and the CV (Q5-10) are
// deliberately absent: linking a page we cannot honestly fill produces a 404,
// and a half-true clinical or CV page is worse than no page. Restore each
// entry at the same time as its page.
export const nav = [
  { label: 'About', href: '/about/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerPages = [{ label: 'Privacy', href: '/privacy/' }];

// `pending: true` renders as a muted, non-clickable row until confirmed.
export const profiles = [
  { label: 'ORCID', detail: '0009-0002-6516-7234', href: 'https://orcid.org/0009-0002-6516-7234' },
  { label: 'ResearchGate', detail: 'Publications and preprints', href: 'https://www.researchgate.net/profile/Shamin-Eabenson' },
  { label: 'Academia.edu', detail: 'Papers and drafts', href: 'https://bldeu.academia.edu/DrSHAMINEABENSON' },
  { label: 'LinkedIn', detail: 'Professional profile', href: 'https://www.linkedin.com/in/dr-shamin-eabenson-1a55811b3/' },
  { label: 'SlideShare', detail: 'Teaching material', href: 'https://www.slideshare.net/DrSHAMINEABENSON1' },
  { label: 'Google Scholar', detail: 'Awaiting link', href: null, pending: true },
  { label: 'Scopus', detail: 'Awaiting author ID', href: null, pending: true },
];
