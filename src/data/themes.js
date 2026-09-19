// Research themes. Each becomes /research/[slug] and a row on the home page.
// Every published paper belongs to exactly one theme — if you add a paper with a
// new `theme` value, add the theme here or it will not appear anywhere.
//
// Descriptions say what each study set out to examine. They do not state findings
// unless those findings are verified in themeDetail.js.

export const themes = [
  {
    slug: 'medical-education',
    title: 'Medical education and the future doctor',
    short: 'Medical education',
    card: 'Whether training matches the practice students are actually heading into.',
    body:
      'Four studies asking whether medical training matches the practice students are heading into. The first surveyed 195 students on artificial intelligence in medicine. Two more examine the family adoption programme, which places students with underprivileged families for the length of their training — one on what it teaches, one on what it does to the students who go through it. A fourth, written with colleagues outside community medicine, looks at the psychological groundwork that lets students adapt at all.',
    figure: 'tally',
  },
  {
    slug: 'road-safety',
    title: 'Injury and emergency response',
    short: 'Injury and emergency',
    card: 'Who is hurt on the roads of North Karnataka, and what happens in the hour after.',
    body:
      'Two studies on road traffic injury in Vijayapura. The first builds a sociodemographic picture of who is being hurt, because prevention has to be aimed at someone in particular. The second follows what happens next, examining how the 108 emergency ambulance service performs between the crash and the hospital bed. The WHO estimates road crashes cost nations around three per cent of GDP and claim close to 1.19 million lives a year.',
    figure: null,
  },
  {
    slug: 'infection-waste',
    title: 'Infection control and hospital waste',
    short: 'Infection and waste',
    card: 'Whether protective practice survives contact with daily work.',
    body:
      'Two studies on whether protective practice survives contact with daily work. One compares infection control awareness and compliance between dental students still training and dentists already in practice. The other measures what undergraduates know about biomedical waste, in a country producing roughly 1.5 to 2 kg of it per hospital bed per day — sharps, laboratory and anatomical waste that turns lethal when segregation fails.',
    figure: null,
  },
  {
    slug: 'access-to-medicines',
    title: 'Access to medicines',
    short: 'Access to medicines',
    card: 'Whether the next generation of prescribers trusts affordable generics.',
    body:
      'The Janaushadhi scheme exists to put affordable generic medicines within reach of ordinary families. Whether it works depends on whether doctors prescribe them. This study surveyed 157 medical students in Vijayapura district in early 2026 to find out what the next generation of prescribers believes about generics before habit sets in.',
    figure: null,
  },
  {
    slug: 'health-systems',
    title: 'Community health systems',
    short: 'Health systems',
    card: 'What delivering a national programme looks like to the people who actually deliver it.',
    body:
      'India’s community health programme is carried, in large part, on foot by accredited social health activists. This qualitative study asks ASHA workers directly what implementing community-based non-communicable disease prevention and health promotion involves, and where it breaks down — the view from the last mile rather than from the policy document.',
    figure: null,
  },
  {
    slug: 'climate-health',
    title: 'Heat and health',
    short: 'Heat and health',
    card: 'Heat related illness where extreme summers are routine, not exceptional.',
    body:
      'North Karnataka gets seriously hot, and does so every year. This observational study examines heat related illness among medical students in the region — a population that is young, healthy, and still affected, which is the point. Heat is treated here as a recurring public health problem rather than an exceptional event.',
    figure: null,
  },
  {
    slug: 'ethics',
    title: 'Ethics and medical negligence',
    short: 'Ethics and negligence',
    card: 'What students understand about negligence before they ever face it.',
    body:
      'Negligence is usually discussed after it happens. This study asked undergraduate medical students what they understood about it beforehand. Just under two-thirds graded as having good knowledge. The paper argues the subject needs teaching explicitly rather than being absorbed by accident.',
    figure: null,
  },
  {
    slug: 'integrative-medicine',
    title: 'Integrative and pharmaceutical medicine',
    short: 'Integrative medicine',
    card: 'Where traditional practice, pharmaceutical innovation and delivery meet.',
    body:
      'Two reviews outside the survey work. One examines what combining Ayurvedic and physiotherapeutic approaches offers in chronic musculoskeletal pain, and where the evidence currently stands. The other looks at where pharmaceutical innovation meets the delivery of care, and what that means for treatment outcomes in practice.',
    figure: null,
  },
];

export const themeBySlug = (slug) => themes.find((t) => t.slug === slug);
