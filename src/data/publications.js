// Seven peer-reviewed papers, all 2026. Verified against the spec document.
// `doi: null` = not found in public sources (Q11). Feeds /publications,
// /research/[theme] and the CV page from this one file, so they cannot disagree.

export const publications = [
  {
    id: 'ai-readiness',
    year: 2026,
    theme: 'medical-education',
    title:
      'Are future doctors ready for AI? Artificial intelligence in the field of medicine: perception among medical students in North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Eabenson S', 'Gudadinni MR', 'Yadavannavar MC', 'Udgiri R', 'Rangoli AM'],
    journal: 'International Journal of Community Medicine and Public Health',
    journalShort: 'Int J Community Med Public Health',
    volume: '13',
    issue: '3',
    pages: '1384–1390',
    doi: null,
    featured: true,
    note:
      'A cross-sectional study of 195 medical students, conducted July to September 2024, measuring knowledge, attitudes and practices around artificial intelligence in medicine. Three-quarters were aged 19 to 21. A majority — 111 students — saw AI as a threat to the human dimension of medicine, and 82 feared it would cost them their jobs.',
  },
  {
    id: 'infection-control',
    year: 2026,
    theme: 'infection-control',
    title: 'Infection control awareness and compliance among dental students and dentists in India',
    subtitle: 'a cross-sectional study',
    authors: ['Eabenson S', 'Sangavi S', 'Ravindra A', 'Gudadinni MR', 'Yadavannavar MC', 'Rangoli AM'],
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
    id: 'janaushadhi',
    year: 2026,
    theme: 'janaushadhi',
    title:
      'Pradhan Mantri Bharatiya Janaushadhi Pariyojana and the perception of medical students towards generic medicines in North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Eabenson S', 'Gudadinni MR', 'Yadavannavar MC', 'Rangoli AM'],
    journal: 'International Journal of Basic & Clinical Pharmacology',
    journalShort: 'Int J Basic Clin Pharmacol',
    volume: '15',
    issue: '4',
    pages: '612–620',
    doi: '10.18203/2319-2003.ijbcp20261833',
    featured: true,
    note:
      'Rising healthcare costs are a serious burden in a country of India’s size, and the Janaushadhi scheme exists to supply affordable generics. This study surveyed 157 medical students in Vijayapura district during January and February 2026 to find out what the next generation of prescribers actually believes about them.',
  },
  {
    id: 'family-adoption',
    year: 2026,
    theme: 'medical-education',
    title: 'Family adoption program as a teaching-learning tool: perspectives from Vijayapura, North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Eabenson S', 'Gudadinni MR', 'Yadavannavar MC', 'Rangoli AM'],
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
    authors: ['Eabenson S', 'Gudadinni MR', 'Yadavannavar MC', 'Rangoli AM'],
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
    id: 'negligence',
    year: 2026,
    theme: 'negligence',
    title: 'Medical negligence: perception among undergraduate medical students in Vijayapura, North Karnataka',
    subtitle: 'a cross-sectional study',
    authors: ['Eabenson S', 'Gudadinni MR', 'Yadavannavar MC', 'Rangoli AM'],
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
    id: 'biomedical-waste',
    year: 2026,
    theme: 'infection-control',
    title: 'Biomedical waste management',
    subtitle: null,
    authors: ['Eabenson S', 'Pattankar TP', 'Rangoli AM'],
    journal: 'International Journal of Life Sciences, Biotechnology and Pharma Research',
    journalShort: 'Int J Life Sci Biotechnol Pharma Res',
    volume: null,
    issue: null,
    pages: null,
    doi: null,
    note:
      'India produces roughly 1.5 to 2 kg of biomedical waste per hospital bed per day — sharps, laboratory and anatomical waste that turns lethal when segregation fails. The paper examines practice against the 2016 rules made under the Environment (Protection) Act.',
  },
];

/** "Int J Res Med Sci. 2026;14(7):2975–2981" — the line an academic scans for. */
export function citationLine(p) {
  const vol = p.volume ? `;${p.volume}${p.issue ? `(${p.issue})` : ''}` : '';
  const pages = p.pages ? `:${p.pages}` : '';
  return `${p.journalShort}. ${p.year}${vol}${pages}`;
}

export const featured = publications.filter((p) => p.featured);
export const byTheme = (slug) => publications.filter((p) => p.theme === slug);

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
  const body = rows.map(([k, v]) => `  ${k} = {${v}}`).join(',\n');
  return `@article{${key},\n${body}\n}`;
}
