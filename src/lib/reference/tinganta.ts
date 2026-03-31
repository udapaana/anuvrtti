/**
 * Tinganta (Verb) Reference Data
 * Quick-lookup tables for verb conjugation
 */

import type { ReferenceTable, ReferenceSection } from "./types";

// Helper to create Sanskrit cells
const s = (text: string, tooltip?: string) => ({
  text,
  sanskrit: true,
  tooltip,
});
const t = (text: string, tooltip?: string) => ({
  text,
  sanskrit: false,
  tooltip,
});

/**
 * Parasmaipada endings for all 10 lakaras
 */
export const parasmaipadaEndings: ReferenceTable = {
  id: "parasmaipada-endings",
  title: "Parasmaipada Endings",
  titleSanskrit: "परस्मैपदप्रत्ययाः",
  description: "Active voice endings for all ten lakāras",
  headers: [s("एक॰", "Singular"), s("द्वि॰", "Dual"), s("बहु॰", "Plural")],
  rowHeaders: [
    s("प्र॰", "Third person"),
    s("म॰", "Second person"),
    s("उ॰", "First person"),
  ],
  rows: [
    [s("ति"), s("तः"), s("अन्ति")],
    [s("सि"), s("थः"), s("थ")],
    [s("मि"), s("वः"), s("मः")],
  ],
  notes: [
    "These are the basic तिङ् endings before any lakāra-specific changes.",
  ],
};

/**
 * Atmanepada endings
 */
export const atmanepadaEndings: ReferenceTable = {
  id: "atmanepada-endings",
  title: "Atmanepada Endings",
  titleSanskrit: "आत्मनेपदप्रत्ययाः",
  description: "Middle voice endings",
  headers: [s("एक॰", "Singular"), s("द्वि॰", "Dual"), s("बहु॰", "Plural")],
  rowHeaders: [
    s("प्र॰", "Third person"),
    s("म॰", "Second person"),
    s("उ॰", "First person"),
  ],
  rows: [
    [s("ते"), s("आते"), s("अन्ते")],
    [s("से"), s("आथे"), s("ध्वे")],
    [s("ए"), s("वहे"), s("महे")],
  ],
};

/**
 * लट् (Present) - भू example - Parasmaipada
 */
export const latBhuParadigm: ReferenceTable = {
  id: "lat-bhu",
  title: "Present Tense (laṭ)",
  titleSanskrit: "लट्लकारः",
  description: "√bhū — parasmaipada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवति"), s("भवतः"), s("भवन्ति")],
    [s("भवसि"), s("भवथः"), s("भवथ")],
    [s("भवामि"), s("भवावः"), s("भवामः")],
  ],
};

/**
 * लट् (Present) - नी example - Ātmanepada
 */
export const latAtmaneParadigm: ReferenceTable = {
  id: "lat-atmane",
  title: "Present Tense — ātmanepada",
  titleSanskrit: "लट् आत्मनेपदम्",
  description: "√nī (to lead) — ātmanepada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("नयते"), s("नयेते"), s("नयन्ते")],
    [s("नयसे"), s("नयेथे"), s("नयध्वे")],
    [s("नये"), s("नयावहे"), s("नयामहे")],
  ],
};

/**
 * लङ् (Imperfect) - भू example - Parasmaipada
 */
export const langBhuParadigm: ReferenceTable = {
  id: "lang-bhu",
  title: "Imperfect (laṅ)",
  titleSanskrit: "लङ्लकारः",
  description: "√bhū — parasmaipada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("अभवत्"), s("अभवताम्"), s("अभवन्")],
    [s("अभवः"), s("अभवतम्"), s("अभवत")],
    [s("अभवम्"), s("अभवाव"), s("अभवाम")],
  ],
  notes: ["aṭ augment prefix added. These are past actions not of today (anadyatana)."],
};

/**
 * लङ् (Imperfect) - नी example - Ātmanepada
 */
export const langAtmaneParadigm: ReferenceTable = {
  id: "lang-atmane",
  title: "Imperfect — ātmanepada",
  titleSanskrit: "लङ् आत्मनेपदम्",
  description: "√nī — ātmanepada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("अनयत"), s("अनयेताम्"), s("अनयन्त")],
    [s("अनयथाः"), s("अनयेथाम्"), s("अनयध्वम्")],
    [s("अनये"), s("अनयावहि"), s("अनयामहि")],
  ],
};

/**
 * लोट् (Imperative) - भू example - Parasmaipada
 */
export const lotBhuParadigm: ReferenceTable = {
  id: "lot-bhu",
  title: "Imperative (loṭ)",
  titleSanskrit: "लोट्लकारः",
  description: "√bhū — parasmaipada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवतु"), s("भवताम्"), s("भवन्तु")],
    [s("भव"), s("भवतम्"), s("भवत")],
    [s("भवानि"), s("भवाव"), s("भवाम")],
  ],
};

/**
 * लोट् (Imperative) - नी example - Ātmanepada
 */
export const lotAtmaneParadigm: ReferenceTable = {
  id: "lot-atmane",
  title: "Imperative — ātmanepada",
  titleSanskrit: "लोट् आत्मनेपदम्",
  description: "√nī — ātmanepada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("नयताम्"), s("नयेताम्"), s("नयन्ताम्")],
    [s("नयस्व"), s("नयेथाम्"), s("नयध्वम्")],
    [s("नयै"), s("नयावहै"), s("नयामहै")],
  ],
};

/**
 * विधिलिङ् (Optative) - भू example - Parasmaipada
 */
export const vidhilingBhuParadigm: ReferenceTable = {
  id: "vidhiling-bhu",
  title: "Optative (vidhiliṅ)",
  titleSanskrit: "विधिलिङ्",
  description: "√bhū — parasmaipada — should/would/may",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवेत्"), s("भवेताम्"), s("भवेयुः")],
    [s("भवेः"), s("भवेतम्"), s("भवेत")],
    [s("भवेयम्"), s("भवेव"), s("भवेम")],
  ],
};

/**
 * विधिलिङ् (Optative) - नी example - Ātmanepada
 */
export const vidhilingAtmaneParadigm: ReferenceTable = {
  id: "vidhiling-atmane",
  title: "Optative — ātmanepada",
  titleSanskrit: "विधिलिङ् आत्मनेपदम्",
  description: "√nī — ātmanepada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("नयेत"), s("नयेयाताम्"), s("नयेरन्")],
    [s("नयेः"), s("नयेयाथाम्"), s("नयेध्वम्")],
    [s("नयेय"), s("नयेवहि"), s("नयेमहि")],
  ],
};

/**
 * लृट् (Simple Future) - भू example
 */
export const lrtBhuParadigm: ReferenceTable = {
  id: "lrt-bhu",
  title: "Simple Future (lṛṭ)",
  titleSanskrit: "लृट्लकारः",
  description: "√bhū — simple future",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भविष्यति"), s("भविष्यतः"), s("भविष्यन्ति")],
    [s("भविष्यसि"), s("भविष्यथः"), s("भविष्यथ")],
    [s("भविष्यामि"), s("भविष्यावः"), s("भविष्यामः")],
  ],
  notes: ["sya is the future marker."],
};

/**
 * लिट् (Perfect) - भू example
 */
export const litBhuParadigm: ReferenceTable = {
  id: "lit-bhu",
  title: "Perfect (liṭ)",
  titleSanskrit: "लिट्लकारः",
  description: "√bhū — witnessed past",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("बभूव"), s("बभूवतुः"), s("बभूवुः")],
    [s("बभूविथ"), s("बभूवथुः"), s("बभूव")],
    [s("बभूव"), s("बभूविव"), s("बभूविम")],
  ],
  notes: ["Note the reduplication: bhū → babhū."],
};

/**
 * Ten Ganas (Verb Classes)
 */
export const dhatuGanas: ReferenceTable = {
  id: "dhatu-ganas",
  title: "The Ten Verb Classes",
  titleSanskrit: "दशगणाः",
  description: "Vikarana (class marker) for each gana",
  headers: [s("गण"), s("संज्ञा"), s("विकरण"), s("उदाहरणम्"), s("लट् प्र॰ एक॰")],
  rows: [
    [s("१"), s("भ्वादि"), s("शप् (अ)"), s("भू"), s("भवति")],
    [s("२"), s("अदादि"), s("∅ (लुक्)"), s("अद्"), s("अत्ति")],
    [s("३"), s("जुहोत्यादि"), s("∅ (श्लु)"), s("हु"), s("जुहोति")],
    [s("४"), s("दिवादि"), s("श्यन् (य)"), s("दिव्"), s("दीव्यति")],
    [s("५"), s("स्वादि"), s("श्नु (नु/नो)"), s("सु"), s("सुनोति")],
    [s("६"), s("तुदादि"), s("श (अ)"), s("तुद्"), s("तुदति")],
    [s("७"), s("रुधादि"), s("श्नम् (न)"), s("रुध्"), s("रुणद्धि")],
    [s("८"), s("तनादि"), s("उ"), s("तन्"), s("तनोति")],
    [s("९"), s("क्र्यादि"), s("श्ना (ना/नी)"), s("क्री"), s("क्रीणाति")],
    [s("१०"), s("चुरादि"), s("णिच् (अय)"), s("चुर्"), s("चोरयति")],
  ],
};

/**
 * Lakara summary
 */
export const lakaraSummary: ReferenceTable = {
  id: "lakara-summary",
  title: "The Ten Lakaras",
  titleSanskrit: "दशलकाराः",
  description: "Overview of all ten tense/mood markers",
  headers: [s("लकार"), s("संज्ञा"), s("अर्थः"), s("आगमः")],
  rows: [
    [s("लट्"), s("वर्तमानी"), s("अधुना क्रिया"), t("—")],
    [s("लङ्"), s("भूते अनद्यतनी"), s("अनद्यतन भूत"), s("अट्")],
    [s("लोट्"), s("आज्ञार्थी"), s("विधि/आमन्त्रण"), t("—")],
    [s("विधिलिङ्"), s("विध्यर्थी"), s("विधि/सम्भावना"), t("—")],
    [s("आशीर्लिङ्"), s("आशीरर्थी"), s("आशीः"), t("—")],
    [s("लृट्"), s("भविष्यन्ती"), s("भविष्यत्"), t("—")],
    [s("लुट्"), s("अनद्यतनभविष्यन्ती"), s("निश्चित भविष्यत्"), t("—")],
    [s("लिट्"), s("परोक्षभूतकालिनी"), s("परोक्ष भूत"), t("—")],
    [s("लुङ्"), s("सामान्यभूतकालिनी"), s("सामान्य भूत"), s("अट्")],
    [s("लृङ्"), s("हेतुहेतुमद्भूतकालिनी"), s("हेतुहेतुमत्"), s("अट्")],
  ],
};

/**
 * Tinganta reference sections
 */
export const tingantaSections: ReferenceSection[] = [
  {
    id: "overview",
    title: "Overview",
    titleSanskrit: "परिचयः",
    tables: [lakaraSummary, dhatuGanas],
  },
  {
    id: "basic-endings",
    title: "Basic Endings",
    titleSanskrit: "मूलप्रत्ययाः",
    description: "The fundamental tiṅ endings before lakāra-specific changes",
    tables: [parasmaipadaEndings, atmanepadaEndings],
  },
  {
    id: "lat",
    title: "laṭ",
    titleSanskrit: "लट्",
    description: "vartamāna laṭ — ongoing action",
    tables: [latBhuParadigm, latAtmaneParadigm],
  },
  {
    id: "lang",
    title: "laṅ",
    titleSanskrit: "लङ्",
    description: "anadyatana laṅ — past action not of today",
    tables: [langBhuParadigm, langAtmaneParadigm],
  },
  {
    id: "lot",
    title: "loṭ",
    titleSanskrit: "लोट्",
    description: "vidhi, nimantrana, āmantrana — commands and wishes",
    tables: [lotBhuParadigm, lotAtmaneParadigm],
  },
  {
    id: "vidhiling",
    title: "vidhiliṅ",
    titleSanskrit: "विधिलिङ्",
    description: "vidhi — should, would, may",
    tables: [vidhilingBhuParadigm, vidhilingAtmaneParadigm],
  },
  {
    id: "lrt",
    title: "lṛṭ",
    titleSanskrit: "लृट्",
    description: "bhaviṣyati lṛṭ — simple future",
    tables: [lrtBhuParadigm],
  },
  {
    id: "lit",
    title: "liṭ",
    titleSanskrit: "लिट्",
    description: "parokṣa liṭ — witnessed past, with dvitva",
    tables: [litBhuParadigm],
  },
];
