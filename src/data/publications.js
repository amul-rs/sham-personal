// Publications — the single source for the home page, theme pages, the
// publications list and the CV. Supplied by Dr Eabenson, 19 September 2026.
// See CLAUDE.md §3 for what changed and why. Do not edit citation data anywhere
// but here.
//
// `doi: null` means no identifier was supplied. It renders as "DOI not yet
// available" rather than linking somewhere wrong.
// `volume/issue/pages: null` are omitted from the citation line entirely.

export const publications = [
  {
    id: 'ai-readiness',
    year: 2026,
    theme: 'medical-education',
    title:
      'Are future doctors ready for AI? Artificial intelligence in the field of medicine: perception among medical students in North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: [
      'Shamin Eabenson',
      'M. R. Gudadinni',
      'M. C. Yadavannavar',
      'Rekha Udgiri',
      'A. M. Rangoli',
    ],
    journal: 'International Journal of Community Medicine and Public Health',
    journalShort: 'Int J Community Med Public Health',
    volume: '13',
    issue: '3',
    pages: '1384–1390',
    doi: '10.18203/2394-6040.ijcmph20260697',
    featured: true,
    note:
      'A cross-sectional study of 195 medical students, conducted July to September 2024, measuring knowledge, attitudes and practices around artificial intelligence in medicine. Three-quarters were aged 19 to 21. A majority — 111 students — saw AI as a threat to the human dimension of medicine, and 82 feared it would cost them their jobs.',
  },
  {
    id: 'heat-waves',
    year: 2026,
    theme: 'climate-health',
    title: 'Heat waves and health: an observational study on heat related illnesses among medical students in North Karnataka',
    subtitle: null,
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Community Medicine and Public Health',
    journalShort: 'Int J Community Med Public Health',
    volume: null,
    issue: null,
    pages: null,
    doi: '10.18203/2394-6040.ijcmph20260765',
    featured: true,
    note:
      'An observational study of heat related illness among medical students in North Karnataka, a region where summer temperatures are a recurring public health problem rather than an exceptional event.',
  },
  {
    id: 'negligence',
    year: 2026,
    theme: 'ethics',
    title: 'Medical negligence: perception among undergraduate medical students',
    subtitle: 'a cross-sectional study from Vijayapura, North Karnataka, India',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Research in Medical Sciences',
    journalShort: 'Int J Res Med Sci',
    volume: '14',
    issue: '6',
    pages: '2368–2374',
    doi: '10.18203/2320-6012.ijrms20261476',
    note:
      'Most participants were aged 18 to 22, and 95 of them — just under two-thirds — graded as having good knowledge of medical negligence. The paper argues that negligence and its causes need to be taught explicitly if future doctors are to change the picture.',
  },
  {
    id: 'family-adoption-teaching',
    year: 2026,
    theme: 'medical-education',
    title: 'Family adoption program as a teaching-learning tool: perspectives from Vijayapura, North Karnataka, India',
    subtitle: 'a cross-sectional study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Community Medicine and Public Health',
    journalShort: 'Int J Community Med Public Health',
    volume: '13',
    issue: '6',
    pages: '2875–2882',
    doi: '10.18203/2394-6040.ijcmph20261768',
    note:
      'The family adoption programme places medical students with underprivileged families for the length of their training. This study examines what students take from it, and whether it works as the teaching tool it was designed to be.',
  },
  {
    id: 'road-safety',
    year: 2026,
    theme: 'road-safety',
    title: 'Sociodemographic profile of road traffic accident victims in Vijayapura, North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Community Medicine and Public Health',
    journalShort: 'Int J Community Med Public Health',
    volume: '13',
    issue: '6',
    pages: '2770–2776',
    doi: '10.18203/2394-6040.ijcmph20261481',
    featured: true,
    note:
      'Patients admitted with road traffic injuries were interviewed using a semi-structured, pre-tested questionnaire following institutional ethics clearance. The WHO estimates road crashes cost nations roughly three per cent of GDP and claim close to 1.19 million lives a year; this study asks who is being hurt locally, and how.',
  },
  {
    id: 'janaushadhi',
    year: 2026,
    theme: 'access-to-medicines',
    title:
      'Pradhan Mantri Bharatiya Janaushadhi Pariyojana and the perception of medical students towards generic medicines in North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Basic & Clinical Pharmacology',
    journalShort: 'Int J Basic Clin Pharmacol',
    volume: '15',
    issue: '4',
    pages: '612–620',
    doi: '10.18203/2319-2003.ijbcp20261833',
    note:
      'Rising healthcare costs are a serious burden in a country of India’s size, and the Janaushadhi scheme exists to supply affordable generics. This study surveyed 157 medical students in Vijayapura district during January and February 2026 to find out what the next generation of prescribers actually believes about them.',
  },
  {
    id: 'biomedical-waste',
    year: 2026,
    theme: 'infection-waste',
    title: 'Handle with care: biomedical waste management awareness among undergraduate medical students in North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Life Sciences, Biotechnology and Pharma Research',
    journalShort: 'Int J Life Sci Biotechnol Pharma Res',
    volume: '15',
    issue: '5',
    pages: null,
    doi: '10.69605/IJLBPR_15.5.2026.182',
    // Checked 19 Sep 2026: the 10.69605 prefix is registered but this suffix
    // does not resolve at doi.org yet — the publisher has not deposited it.
    // The identifier is shown as text rather than linked to a 404. Re-check
    // and remove this flag once it resolves.
    doiUnresolved: true,
    note:
      'India produces roughly 1.5 to 2 kg of biomedical waste per hospital bed per day — sharps, laboratory and anatomical waste that turns lethal when segregation fails. This study measures what undergraduates actually know about handling it.',
  },
  {
    id: 'ambulance-108',
    year: 2026,
    theme: 'road-safety',
    title: 'Role of 108 ambulance services in road traffic accidents in Vijayapura, North Karnataka',
    subtitle: 'a mixed methods study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Research in Medical Sciences',
    journalShort: 'Int J Res Med Sci',
    volume: null,
    issue: null,
    pages: null,
    doi: '10.18203/2320-6012.ijrms20262331',
    note:
      'What happens between a crash and a hospital bed decides a great deal of the outcome. This mixed methods study examines how the 108 emergency ambulance service performs in road traffic accidents in Vijayapura.',
  },
  {
    id: 'infection-control',
    year: 2026,
    theme: 'infection-waste',
    title: 'Infection control awareness and compliance among dental students and dentists in India',
    subtitle: 'a cross-sectional study',
    authors: [
      'Shamin Eabenson',
      'Sachin Sangavi',
      'Adarsh Ravindra',
      'M. R. Gudadinni',
      'M. C. Yadavannavar',
      'A. M. Rangoli',
    ],
    journal: 'International Journal of Research in Medical Sciences',
    journalShort: 'Int J Res Med Sci',
    volume: '14',
    issue: '7',
    pages: '2975–2981',
    doi: '10.18203/2320-6012.ijrms20262190',
    note:
      'A cross-sectional study of awareness and day-to-day compliance with infection control practice, comparing students still in training against dentists already in practice.',
  },
  {
    id: 'family-adoption-impact',
    year: 2026,
    theme: 'medical-education',
    title: 'Impact of family adoption programme on medical students in India',
    subtitle: 'a cross-sectional study',
    authors: ['Shamin Eabenson', 'M. R. Gudadinni', 'M. C. Yadavannavar', 'A. M. Rangoli'],
    journal: 'International Journal of Drug Delivery Technology',
    journalShort: 'Int J Drug Deliv Technol',
    volume: '16',
    issue: '66s',
    pages: null,
    doi: '10.25258/ijddt.16.66s.43',
    note:
      'A second look at the family adoption programme, this time measuring its effect on the students who go through it.',
  },
  {
    id: 'asha-ncd',
    year: 2026,
    theme: 'health-systems',
    title:
      'Exploring the experiences of accredited social health activists (ASHAs) in implementing community-based non-communicable disease prevention and health promotion programmes',
    subtitle: 'a qualitative study',
    authors: ['Shamin Eabenson'],
    journal: 'International Journal of Medical and Pharmaceutical Sciences',
    journalShort: 'Int J Med Pharm Sci',
    volume: null,
    issue: null,
    pages: null,
    published: '9 July 2026',
    doi: null,
    featured: true,
    note:
      'ASHA workers carry much of India’s community health programme on foot. This qualitative study asks them directly what implementing non-communicable disease prevention actually involves, and where it breaks down.',
  },
  {
    id: 'ayurveda-physiotherapy',
    year: 2026,
    theme: 'integrative-medicine',
    title: 'Integrative Ayurveda and physiotherapy interventions for chronic musculoskeletal pain',
    subtitle: 'a comprehensive review',
    authors: ['Shamin Eabenson'],
    journal: 'Genetics and Molecular Research',
    journalShort: 'Genet Mol Res',
    volume: null,
    issue: null,
    pages: null,
    published: '6 September 2026',
    doi: null,
    note:
      'A review of what combining Ayurvedic and physiotherapeutic approaches offers in chronic musculoskeletal pain, and where the evidence for it currently stands.',
  },
  {
    id: 'medicine-pharmaceuticals',
    year: 2026,
    theme: 'integrative-medicine',
    title: 'Integrating medicine and pharmaceuticals: innovations in healthcare delivery and treatment outcomes',
    subtitle: null,
    authors: ['Shamin Eabenson'],
    journal: 'Genetics and Molecular Research',
    journalShort: 'Genet Mol Res',
    volume: null,
    issue: null,
    pages: null,
    published: '12 August 2026',
    doi: null,
    note:
      'On where pharmaceutical innovation meets the delivery of care, and what that means for treatment outcomes in practice.',
  },
  {
    id: 'resilience-education',
    year: 2026,
    theme: 'medical-education',
    title: 'Resilience and adaptability in students: psychological insights for future-ready education',
    subtitle: null,
    // Fourth author here, not first. Emphasis is positional, so this shows correctly.
    authors: [
      'B. Adhikary',
      'D. N. Tiwari',
      'A. D. NitaNath',
      'S. Eabenson',
      'P. Ahuja',
    ],
    journal: 'International Journal of Special Education',
    journalShort: 'Int J Spec Educ',
    volume: '41',
    issue: '17s',
    pages: '1269–1279',
    doi: null,
    note:
      'A collaboration outside community medicine, on the psychological groundwork that lets students adapt — and what education has to do differently to build it.',
  },
];

// Submitted but not yet published. Listed separately and never mixed into the
// published count.
export const inProgress = [
  {
    title:
      'Integrated transcriptomic and immunohistochemical profiling of inflammatory biomarkers for early prediction of oral epithelial dysplasia progression',
    journal: 'Genetics and Molecular Research',
    status: 'Under review',
  },
  {
    title:
      'Development and evaluation of novel pharmaceutical formulations for the management of chronic musculoskeletal pain and joint disorders',
    journal: null,
    status: 'Under review',
  },
];

/** True for any spelling of his own name, so emphasis works wherever he sits. */
export const isSelf = (author) => /eabenson/i.test(author);

/** "Int J Res Med Sci. 2026;14(7):2975–2981" — the line an academic scans for. */
export function citationLine(p) {
  const vol = p.volume ? `;${p.volume}${p.issue ? `(${p.issue})` : ''}` : '';
  const pages = p.pages ? `:${p.pages}` : '';
  if (!p.volume && p.published) return `${p.journalShort}. ${p.published}`;
  return `${p.journalShort}. ${p.year}${vol}${pages}`;
}

/** Full Vancouver-style reference, the form these journals expect. */
export function fullCitation(p) {
  const authors = p.authors.join(', ');
  const titlePart = p.subtitle ? `${p.title}: ${p.subtitle}` : p.title;
  const vol = p.volume ? `;${p.volume}${p.issue ? `(${p.issue})` : ''}` : '';
  const pages = p.pages ? `:${p.pages}` : '';
  const doi = p.doi ? ` doi:${p.doi}` : '';
  return `${authors}. ${titlePart}. ${p.journal}. ${p.year}${vol}${pages}.${doi}`;
}

/** BibTeX record. Omits fields we do not have rather than emitting empties. */
export function bibtex(p) {
  const key = `eabenson${p.year}${p.id.replace(/-/g, '')}`;
  const rows = [
    ['author', p.authors.join(' and ')],
    ['title', p.subtitle ? `${p.title}: ${p.subtitle}` : p.title],
    ['journal', p.journal],
    ['year', String(p.year)],
    ['volume', p.volume],
    ['number', p.issue],
    ['pages', p.pages ? p.pages.replace('–', '--') : null],
    ['doi', p.doi],
  ].filter(([, v]) => v);
  return `@article{${key},\n${rows.map(([k, v]) => `  ${k} = {${v}}`).join(',\n')}\n}`;
}

export const featured = publications.filter((p) => p.featured);
export const byTheme = (slug) => publications.filter((p) => p.theme === slug);
