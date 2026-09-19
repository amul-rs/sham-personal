// Qualifications, positions, memberships and awards.
// Client-supplied 19 September 2026 — see CLAUDE.md §2.
// Feeds /about and /about/cv from one place so the two cannot disagree.

export const education = [
  {
    degree: 'MD, Community Medicine',
    institution: 'BLDE (Deemed to be University), Shri B. M. Patil Medical College, Hospital and Research Centre',
    place: 'Vijayapura, Karnataka',
    year: '2026',
  },
  {
    degree: 'MBBS',
    institution: 'Dr SMCSI Medical College, Hospital and Research Centre, Karakonam',
    place: 'Thiruvananthapuram, Kerala',
    year: '2009',
  },
];

export const registration = {
  council: 'Karnataka Medical Council',
  abbr: 'KMC',
  number: '169121',
};

export const positions = [
  {
    role: 'Founder and Director',
    org: 'Eabenson Healthcare Private Limited',
    note: 'Current post.',
    current: true,
  },
];

/**
 * Other organisations he founded or leads. Kept separate from `positions`
 * because no role detail or dates were supplied for most of them, and because
 * the Trust belongs to the ministry identity — which stays off this site until
 * he answers the ministry question. Only entries with `medical: true` render here.
 */
export const ventures = [
  { name: 'Eabenson Healthcare Private Limited', role: 'Founder, Director', medical: true },
  { name: 'Eabenson Research Centre', role: null, medical: true },
  { name: 'Eabenson Foundation', role: null, medical: true },
  { name: 'Eabenson Ministries and Church Trust', role: 'Chairman, Founder, Managing Trustee', medical: false },
  { name: 'Eabenson TV', role: null, medical: false },
  { name: 'Eabenson Books and Publishers', role: null, medical: false },
];

/**
 * `hold: true` keeps an entry out of the rendered page.
 *
 * The KRL/… life membership is recorded by the client as "Indian Medical
 * Council". That is almost certainly the Indian Medical Association — the IMA
 * has local and state branches exactly as described and issues life membership
 * numbers in this format, whereas a council is a statutory registration body
 * with neither. Publishing the wrong professional body on a doctor's site is a
 * credential error, so it waits for one line of confirmation. See CLAUDE.md §2.
 */
export const memberships = [
  {
    body: 'Indian Medical Association',
    detail: 'Life Member, Thiruvananthapuram Local Branch, Kerala State Branch',
    number: 'KRL/12999/33/2025/155554/2010-11/L',
    dates: null,
    hold: true,
  },
  {
    body: 'Indian Association of Preventive and Social Medicine',
    detail: 'Life Member',
    number: 'L-8706/2024',
    dates: null,
  },
  {
    body: 'Indian Red Cross Society',
    detail: 'Life Member, Kerala State Branch',
    number: 'No. 772 of 2010-11',
    dates: null,
  },
  {
    body: 'European Society of Cardiology',
    detail: 'Member',
    number: 'ESC ID 1284616',
    dates: 'Since August 2022',
  },
  {
    body: 'Royal College of Physicians',
    detail: 'Associate Member',
    number: null,
    dates: 'July 2016 – July 2017',
  },
];

// Newest first. `date: null` renders without a date rather than being dropped.
export const awards = [
  {
    title: 'Gold Medal, postgraduate paper presentation (SARS)',
    issuer: 'BLDE (DU) Shri B. M. Patil Medical College, Hospital and Research Centre',
    date: 'July 2026',
  },
  {
    title: 'First prize, essay writing competition, World Cancer Day 2026',
    issuer: 'Department of Surgery, BLDE (DU) Shri B. M. Patil Medical College',
    date: 'February 2026',
  },
  {
    title: 'Second prize, essay competition, World Cancer Day',
    issuer: 'BLDE (DU) Shri B. M. Patil Medical College',
    date: 'February 2025',
  },
  {
    title: 'Third prize, drawing competition, World Cancer Day',
    issuer: 'BLDE (DU) Shri B. M. Patil Medical College',
    date: 'February 2025',
  },
  {
    title: 'MD Thesis Award — ₹1,00,000 research grant',
    issuer: 'Indian Council of Medical Research',
    date: 'December 2024',
  },
  {
    title: 'First prize, best oral paper (postgraduate), KARKON 24, fourth state conference of IAPSM',
    issuer: 'IAPSM, at S. S. Institute of Medical Sciences, Davangere',
    date: 'September 2024',
  },
  {
    title: 'First prize, essay writing competition, Rashtriya Ekta Divas',
    issuer: 'National Service Scheme',
    date: 'November 2023',
  },
  {
    title: 'Commonwealth Scholarship, United Kingdom',
    issuer: 'Commonwealth Scholarship Commission',
    date: null,
  },
  {
    title: 'Shankers International Award',
    issuer: null,
    date: null,
  },
];

export const visibleMemberships = memberships.filter((m) => !m.hold);
export const medicalVentures = ventures.filter((v) => v.medical);
