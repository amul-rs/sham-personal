// Five lines of enquiry. Each becomes /research/[slug] and a card on Home.
// `figure` names the data visual that belongs to the theme, where one exists.

export const themes = [
  {
    slug: 'medical-education',
    index: '01',
    title: 'Medical education and the future doctor',
    short: 'Medical education',
    card: 'Readiness for artificial intelligence, and what family adoption teaches that a lecture hall cannot.',
    body:
      'Two studies, both asking whether medical training matches the practice students are heading into. The first surveyed 195 students on artificial intelligence in medicine and found that most saw it as a threat to the human dimension of their work, while a large minority feared for their jobs. The second examined the family adoption programme, which places students with underprivileged families through their training, and asked what they actually take from it.',
    figure: 'dots',
  },
  {
    slug: 'janaushadhi',
    index: '02',
    title: 'Access to medicines',
    short: 'Access to medicines',
    card: 'Whether the next generation of prescribers trusts affordable generics.',
    body:
      'The Janaushadhi scheme exists to put affordable generic medicines within reach of ordinary families. Whether it works depends on whether doctors prescribe them. This study surveyed 157 medical students in Vijayapura district in early 2026 to find out what the next generation of prescribers believes about generics before habit sets in.',
    figure: null,
  },
  {
    slug: 'road-safety',
    index: '03',
    title: 'Injury and road safety',
    short: 'Road safety',
    card: 'Who is being hurt on the roads of North Karnataka, and why.',
    body:
      'The WHO estimates road crashes cost nations around three per cent of GDP and claim close to 1.19 million lives a year. This study interviewed patients admitted with road traffic injuries in Vijayapura, building a sociodemographic picture of who is being hurt — because prevention has to be aimed at someone in particular.',
    figure: null,
  },
  {
    slug: 'infection-control',
    index: '04',
    title: 'Infection control and hospital waste',
    short: 'Infection & waste',
    card: 'Compliance in dental practice, and the handling of biomedical waste.',
    body:
      'Two studies on whether protective practice survives contact with daily work. One compares infection control awareness and compliance between dental students still training and dentists already in practice. The other examines biomedical waste handling in a country producing roughly 1.5 to 2 kg of it per hospital bed per day, against rules made under the Environment (Protection) Act.',
    figure: null,
  },
  {
    slug: 'negligence',
    index: '05',
    title: 'Ethics and medical negligence',
    short: 'Ethics & negligence',
    card: 'What students understand about negligence before they ever face it.',
    body:
      'Negligence is usually discussed after it happens. This study asked undergraduate medical students what they understood about it beforehand. Just under two-thirds graded as having good knowledge. The paper argues the subject needs teaching explicitly rather than being absorbed by accident.',
    figure: null,
  },
];

export const themeBySlug = (slug) => themes.find((t) => t.slug === slug);
