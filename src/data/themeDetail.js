// Long-form content for /research/[slug], keyed by theme slug.
//
// Only `medical-education` is written out in full — it is the model the spec
// sets for the other four. Themes with no entry here fall back to their
// overview plus the papers themselves, which is honest: a thin page is better
// than an invented one. Fill these in as the copy is approved.

export const themeDetail = {
  'medical-education': {
    displayTitle: 'Are future doctors ready for AI?',
    summary:
      'We asked 195 medical students in North Karnataka what they thought about artificial intelligence in medicine. Most had heard of it. More than half believed it threatens the human side of being a doctor. Two in five were afraid it would take their jobs. Almost none had been taught about it formally. The gap between how fast the technology is arriving and how slowly the curriculum is changing is the finding that matters.',
    sections: [
      {
        heading: 'Background',
        body: 'Artificial intelligence has moved into healthcare faster than medical education has adapted to it. Students qualifying now will practise alongside these tools for their whole careers, yet their training rarely addresses them. Before a curriculum can respond, someone has to establish what students currently know and believe.',
      },
      {
        heading: 'Methods',
        body: 'Cross-sectional study, July to September 2024. 195 medical students enrolled from North Karnataka. A structured questionnaire assessed knowledge, attitudes and practices regarding artificial intelligence in medicine. Institutional ethics clearance obtained; informed consent taken from all participants.',
      },
    ],
    findings: [
      { stat: '153', of: 'of 195', pct: '75%', label: 'were aged 19 to 21' },
      { stat: '111', of: 'of 195', pct: '56.9%', label: 'saw AI as a threat to the human dimension of medicine' },
      { stat: '82', of: 'of 195', pct: '42.1%', label: 'feared losing their job to AI' },
      { stat: '47', of: 'of 195', pct: '24.1%', label: 'did not see it as a threat; 37 (18.97%) were neutral' },
    ],
    meaning: {
      heading: 'What this means',
      body: 'Fear is not the problem. Unexamined fear is. Students who expect AI to replace them rather than assist them will resist tools that could make their work better, and students who trust them uncritically will lean on them where they should not. Neither outcome is served by leaving the subject out of the curriculum. The case here is for teaching AI in medicine explicitly — capabilities and limits both.',
    },
    glance: ['2026', 'Cross-sectional', 'n = 195', 'North Karnataka', 'Published'],
    // The paper this long-form page is built around.
    primary: 'ai-readiness',
  },
};

export const detailFor = (slug) => themeDetail[slug] ?? null;
