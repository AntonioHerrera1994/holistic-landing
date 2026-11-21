// Guía de orientación (ES /guia, EN /guide).
// IMPORTANTE (legal): la guía NO diagnostica ni indica tratamientos. Solo sugiere
// qué valoración o servicio conviene explorar; el plan lo define el médico.
// Las respuestas no se guardan ni se envían a analytics: solo salen del navegador
// si el paciente decide mandar el resumen por WhatsApp.

export type GuideLang = 'en' | 'es';
export type ResultId = 'valuation' | 'support' | 'nutrition' | 'dental' | 'thanatology';

export interface GuideOption { id: string; label: string; hint?: string }
export interface GuideQuestion { id: string; title: string; help?: string; options: GuideOption[] }

export const guide = {
  es: {
    seoTitle: 'Guía: ¿por dónde empezar? | Holistic Cancer Coach',
    seoDesc: 'Responde 6 preguntas y descubre qué valoración o servicio integrativo conviene explorar primero. No es un diagnóstico; sin registro y sin guardar tus respuestas.',
    eyebrow: 'Guía de orientación · 2 minutos',
    h1: ['Encuentra tu', 'mejor primer', 'paso.'],
    lead: 'Seis preguntas sencillas para ayudarte a decidir con calma qué servicio conviene conocer primero, para ti o para alguien que quieres.',
    points: [
      'No es un diagnóstico ni indica tratamientos.',
      'No pedimos datos personales ni guardamos tus respuestas.',
      'Al final decides si quieres enviarnos tu resumen.',
    ],
    emergency: 'Si hay una emergencia médica, llama al 911.',
    stepOf: 'Pregunta {n} de {t}',
    back: 'Atrás',
    next: 'Siguiente',
    seeResult: 'Ver mi orientación',
    restart: 'Empezar de nuevo',
    noscript: 'Esta guía necesita JavaScript. También puedes escribirnos directamente por WhatsApp.',
    questions: [
      { id: 'who', title: '¿Para quién buscas información?', options: [
        { id: 'me', label: 'Para mí' },
        { id: 'family', label: 'Para un familiar' },
        { id: 'other', label: 'Para otra persona' },
      ] },
      { id: 'stage', title: '¿En qué momento se encuentra?', help: 'Elige la opción más cercana; no necesitas detalles médicos.', options: [
        { id: 'recent', label: 'Diagnóstico reciente' },
        { id: 'treatment', label: 'En tratamiento convencional', hint: 'Quimioterapia, radioterapia o cirugía' },
        { id: 'after', label: 'Ya terminó su tratamiento' },
        { id: 'advanced', label: 'Etapa avanzada o cuidados paliativos' },
        { id: 'prevention', label: 'Busco prevención y bienestar' },
      ] },
      { id: 'goal', title: '¿Qué le gustaría mejorar primero?', options: [
        { id: 'nutrition', label: 'Energía y nutrición' },
        { id: 'sidefx', label: 'Sobrellevar los efectos del tratamiento' },
        { id: 'dental', label: 'Salud bucal' },
        { id: 'emotional', label: 'Apoyo emocional para el paciente o la familia' },
        { id: 'eol', label: 'Acompañamiento al final de la vida' },
      ] },
      { id: 'onco', title: '¿Tiene un oncólogo que lleve su caso?', help: 'Nuestros servicios complementan la atención oncológica, no la reemplazan.', options: [
        { id: 'yes', label: 'Sí' },
        { id: 'no', label: 'No todavía' },
        { id: 'skip', label: 'Prefiero no decir' },
      ] },
      { id: 'mode', title: '¿Cómo prefiere atenderse?', options: [
        { id: 'tj', label: 'En nuestra clínica de Tijuana' },
        { id: 'zoom', label: 'A distancia, por Zoom' },
        { id: 'unsure', label: 'Aún no lo sé' },
      ] },
      { id: 'lang', title: '¿En qué idioma prefiere la atención?', options: [
        { id: 'es', label: 'Español' },
        { id: 'en', label: 'English' },
      ] },
    ] as GuideQuestion[],
    result: {
      eyebrow: 'Tu orientación',
      title: 'Esto es lo que te sugerimos explorar',
      intro: 'Con base en tus respuestas, estas opciones podrían ser un buen primer paso. En la valoración, el equipo médico revisa el caso completo y te ayuda a decidir.',
      primary: 'Sugerencia principal',
      secondary: 'También podría interesarte',
      why: 'Por qué te lo sugerimos',
      more: 'Conocer más',
      oncoNo: {
        title: 'Primero, lo más importante',
        text: 'Te recomendamos consultar con un médico oncólogo para confirmar el diagnóstico y conocer las opciones de tratamiento. Nuestros servicios están pensados para acompañar ese tratamiento, no para sustituirlo. Si lo necesitas, podemos orientarte sobre cómo dar ese paso.',
      },
      oncoSkip: 'Recuerda que nuestros servicios complementan la atención de su oncólogo; te recomendamos mantenerlo informado de cualquier terapia complementaria.',
      zoomNote: 'La tanatología está disponible por Zoom. Los demás servicios se realizan en nuestra clínica de Tijuana; escríbenos y te orientamos sobre una primera plática a distancia.',
      disclaimer: 'Esta guía es solo orientativa: no es un diagnóstico, no indica tratamientos y no sustituye una consulta médica. Cualquier plan lo define el médico después de una valoración personal.',
      send: 'Enviar mi resumen por WhatsApp',
      sendNote: 'Se abrirá WhatsApp con un mensaje listo; tú decides si lo envías.',
      call: 'O llámanos',
    },
    results: {
      valuation: { name: 'Valoración integral', who: 'Con nuestro director médico', text: 'Una primera consulta para conocer el caso completo, revisar estudios y explicar qué opciones complementarias podrían tener sentido, siempre en coordinación con su oncólogo.', href: '/nosotros' },
      support: { name: 'Programa de apoyo integral', who: 'Terapias complementarias', text: 'Terapias que buscan apoyar el bienestar, la energía y la calidad de vida durante el tratamiento convencional. El médico define si alguna es adecuada.', href: '/tratamientos' },
      nutrition: { name: 'Orientación nutricional', who: 'Con nuestra nutrióloga', text: 'Un plan de alimentación adaptado al momento del paciente para cuidar la energía, el peso y la recuperación.', href: '/nosotros' },
      dental: { name: 'Odontología holística', who: 'Con la Dra. Gisselle Heredia', text: 'Revisión y cuidado bucal con materiales biocompatibles y técnicas mínimamente invasivas, ideal antes, durante o después de otros tratamientos.', href: '/servicios-dentales' },
      thanatology: { name: 'Tanatología con Gloria', who: 'Presencial o por Zoom', text: 'Acompañamiento emocional para el paciente y su familia ante un diagnóstico difícil, la etapa terminal o el duelo.', href: '/tanatologia' },
    } as Record<ResultId, { name: string; who: string; text: string; href: string }>,
    why: {
      nutrition: 'Mencionaste que la energía y la nutrición son tu prioridad.',
      sidefx: 'Quieres sobrellevar mejor los efectos del tratamiento.',
      dental: 'La salud bucal es lo que quieres atender primero.',
      emotional: 'Buscas apoyo emocional para el paciente o la familia.',
      eol: 'Buscas acompañamiento para el final de la vida.',
      advanced: 'La etapa avanzada suele traer decisiones difíciles para toda la familia.',
      treatment: 'Está en tratamiento convencional y puede beneficiarse de apoyo complementario.',
      general: 'Es el punto de partida para revisar el caso completo con un médico.',
    } as Record<string, string>,
    wa: {
      hello: 'Hola, hice la guía de orientación en su sitio web.',
      labels: { who: 'Busco información', stage: 'Momento', goal: 'Prioridad', onco: 'Tiene oncólogo', mode: 'Modalidad', lang: 'Idioma' } as Record<string, string>,
      interest: 'Me interesa',
      close: '¿Me pueden orientar?',
    },
  },
  en: {
    seoTitle: 'Guide: Where Do I Start? | Holistic Cancer Coach',
    seoDesc: 'Answer 6 questions to see which integrative consultation or service may be worth exploring first. Not a diagnosis; no sign-up and your answers are not stored.',
    eyebrow: 'Orientation guide · 2 minutes',
    h1: ['Find your', 'best first', 'step.'],
    lead: 'Six simple questions to help you calmly decide which service to learn about first, for yourself or for someone you love.',
    points: [
      'It is not a diagnosis and does not recommend treatments.',
      'We ask for no personal data and do not store your answers.',
      'At the end, you decide whether to send us your summary.',
    ],
    emergency: 'In a medical emergency, call 911.',
    stepOf: 'Question {n} of {t}',
    back: 'Back',
    next: 'Next',
    seeResult: 'See my guidance',
    restart: 'Start over',
    noscript: 'This guide needs JavaScript. You can also message us directly on WhatsApp.',
    questions: [
      { id: 'who', title: 'Who are you looking for information for?', options: [
        { id: 'me', label: 'For myself' },
        { id: 'family', label: 'For a family member' },
        { id: 'other', label: 'For someone else' },
      ] },
      { id: 'stage', title: 'Where are they in their journey?', help: 'Choose the closest option; no medical details needed.', options: [
        { id: 'recent', label: 'Recently diagnosed' },
        { id: 'treatment', label: 'In conventional treatment', hint: 'Chemotherapy, radiation or surgery' },
        { id: 'after', label: 'Finished treatment' },
        { id: 'advanced', label: 'Advanced stage or palliative care' },
        { id: 'prevention', label: 'Looking for prevention and wellness' },
      ] },
      { id: 'goal', title: 'What would they like to improve first?', options: [
        { id: 'nutrition', label: 'Energy and nutrition' },
        { id: 'sidefx', label: 'Coping with treatment side effects' },
        { id: 'dental', label: 'Oral health' },
        { id: 'emotional', label: 'Emotional support for the patient or family' },
        { id: 'eol', label: 'End-of-life support' },
      ] },
      { id: 'onco', title: 'Do they have an oncologist managing their care?', help: 'Our services complement oncology care; they do not replace it.', options: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'Not yet' },
        { id: 'skip', label: 'Prefer not to say' },
      ] },
      { id: 'mode', title: 'How would they prefer to be seen?', options: [
        { id: 'tj', label: 'At our clinic in Tijuana' },
        { id: 'zoom', label: 'Remotely, by Zoom' },
        { id: 'unsure', label: 'Not sure yet' },
      ] },
      { id: 'lang', title: 'Which language do they prefer?', options: [
        { id: 'en', label: 'English' },
        { id: 'es', label: 'Español' },
      ] },
    ] as GuideQuestion[],
    result: {
      eyebrow: 'Your guidance',
      title: 'Here is what we suggest exploring',
      intro: 'Based on your answers, these options could be a good first step. During the consultation, the medical team reviews the full case and helps you decide.',
      primary: 'Main suggestion',
      secondary: 'You may also be interested in',
      why: 'Why we suggest it',
      more: 'Learn more',
      oncoNo: {
        title: 'First, the most important step',
        text: 'We recommend seeing an oncologist to confirm the diagnosis and understand the treatment options. Our services are designed to accompany that treatment, not replace it. If you need it, we can help you figure out how to take that step.',
      },
      oncoSkip: 'Remember that our services complement their oncologist’s care; we recommend keeping them informed about any complementary therapy.',
      zoomNote: 'Thanatology is available by Zoom. Our other services take place at our clinic in Tijuana; message us and we can arrange an initial remote conversation.',
      disclaimer: 'This guide is for orientation only: it is not a diagnosis, does not recommend treatments and does not replace a medical consultation. Any plan is defined by the physician after a personal evaluation.',
      send: 'Send my summary on WhatsApp',
      sendNote: 'WhatsApp will open with a ready-made message; you decide whether to send it.',
      call: 'Or call us',
    },
    results: {
      valuation: { name: 'Integrative consultation', who: 'With our medical director', text: 'A first consultation to understand the full case, review records and explain which complementary options may make sense, always in coordination with their oncologist.', href: '/about-us' },
      support: { name: 'Integrative Support Program', who: 'Complementary therapies', text: 'Therapies that aim to support well-being, energy and quality of life during conventional treatment. The physician decides whether any of them is appropriate.', href: '/treatments' },
      nutrition: { name: 'Nutrition guidance', who: 'With our nutritionist', text: 'An eating plan adapted to the patient’s current stage to help protect energy, weight and recovery.', href: '/about-us' },
      dental: { name: 'Holistic dentistry', who: 'With Dr. Gisselle Heredia', text: 'Oral evaluation and care with biocompatible materials and minimally invasive techniques, useful before, during or after other treatments.', href: '/dental-prices' },
      thanatology: { name: 'Thanatology with Gloria', who: 'In person or by Zoom', text: 'Emotional support for the patient and their family through a difficult diagnosis, the terminal stage or grief.', href: '/thanatology' },
    } as Record<ResultId, { name: string; who: string; text: string; href: string }>,
    why: {
      nutrition: 'You said energy and nutrition are the priority.',
      sidefx: 'You want to cope better with treatment side effects.',
      dental: 'Oral health is what you want to address first.',
      emotional: 'You are looking for emotional support for the patient or family.',
      eol: 'You are looking for end-of-life support.',
      advanced: 'The advanced stage often brings difficult decisions for the whole family.',
      treatment: 'They are in conventional treatment and may benefit from complementary support.',
      general: 'It is the starting point for reviewing the full case with a physician.',
    } as Record<string, string>,
    wa: {
      hello: 'Hi, I completed the orientation guide on your website.',
      labels: { who: 'Looking for information', stage: 'Stage', goal: 'Priority', onco: 'Has an oncologist', mode: 'Format', lang: 'Language' } as Record<string, string>,
      interest: 'I am interested in',
      close: 'Could you help me?',
    },
  },
};
