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
 * लट् (Present) - भू example
 */
export const latBhuParadigm: ReferenceTable = {
  id: "lat-bhu",
  title: "Present Tense (लट्)",
  titleSanskrit: "लट्लकारः",
  description: "√भू (to become) - Parasmaipada",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवति"), s("भवतः"), s("भवन्ति")],
    [s("भवसि"), s("भवथः"), s("भवथ")],
    [s("भवामि"), s("भवावः"), s("भवामः")],
  ],
};

/**
 * लङ् (Imperfect) - भू example
 */
export const langBhuParadigm: ReferenceTable = {
  id: "lang-bhu",
  title: "Imperfect (लङ्)",
  titleSanskrit: "लङ्लकारः",
  description: "√भू - Past action not of today",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("अभवत्"), s("अभवताम्"), s("अभवन्")],
    [s("अभवः"), s("अभवतम्"), s("अभवत")],
    [s("अभवम्"), s("अभवाव"), s("अभवाम")],
  ],
  notes: ["Note the अट् augment prefix."],
};

/**
 * लोट् (Imperative) - भू example
 */
export const lotBhuParadigm: ReferenceTable = {
  id: "lot-bhu",
  title: "Imperative (लोट्)",
  titleSanskrit: "लोट्लकारः",
  description: "√भू - Commands and requests",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवतु"), s("भवताम्"), s("भवन्तु")],
    [s("भव"), s("भवतम्"), s("भवत")],
    [s("भवानि"), s("भवाव"), s("भवाम")],
  ],
};

/**
 * विधिलिङ् (Optative) - भू example
 */
export const vidhilingBhuParadigm: ReferenceTable = {
  id: "vidhiling-bhu",
  title: "Optative (विधिलिङ्)",
  titleSanskrit: "विधिलिङ्",
  description: '√भू - "should/would/may"',
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भवेत्"), s("भवेताम्"), s("भवेयुः")],
    [s("भवेः"), s("भवेतम्"), s("भवेत")],
    [s("भवेयम्"), s("भवेव"), s("भवेम")],
  ],
};

/**
 * लृट् (Simple Future) - भू example
 */
export const lrtBhuParadigm: ReferenceTable = {
  id: "lrt-bhu",
  title: "Simple Future (लृट्)",
  titleSanskrit: "लृट्लकारः",
  description: "√भू - Future action",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("भविष्यति"), s("भविष्यतः"), s("भविष्यन्ति")],
    [s("भविष्यसि"), s("भविष्यथः"), s("भविष्यथ")],
    [s("भविष्यामि"), s("भविष्यावः"), s("भविष्यामः")],
  ],
  notes: ["स्य is the future marker."],
};

/**
 * लिट् (Perfect) - भू example
 */
export const litBhuParadigm: ReferenceTable = {
  id: "lit-bhu",
  title: "Perfect (लिट्)",
  titleSanskrit: "लिट्लकारः",
  description: "√भू - Witnessed past",
  headers: [s("एक॰"), s("द्वि॰"), s("बहु॰")],
  rowHeaders: [s("प्र॰"), s("म॰"), s("उ॰")],
  rows: [
    [s("बभूव"), s("बभूवतुः"), s("बभूवुः")],
    [s("बभूविथ"), s("बभूवथुः"), s("बभूव")],
    [s("बभूव"), s("बभूविव"), s("बभूविम")],
  ],
  notes: ["Note the reduplication: भू → बभू."],
};

/**
 * Ten Ganas (Verb Classes)
 */
export const dhatuGanas: ReferenceTable = {
  id: "dhatu-ganas",
  title: "The Ten Verb Classes",
  titleSanskrit: "दशगणाः",
  description: "Vikarana (class marker) for each gana",
  headers: [s("गण"), t("Name"), s("विकरण"), t("Example"), s("लट् प्र॰ एक॰")],
  rows: [
    [s("१"), t("भ्वादि"), s("शप् (अ)"), s("भू"), s("भवति")],
    [s("२"), t("अदादि"), s("∅ (लुक्)"), s("अद्"), s("अत्ति")],
    [s("३"), t("जुहोत्यादि"), s("∅ (श्लु)"), s("हु"), s("जुहोति")],
    [s("४"), t("दिवादि"), s("श्यन् (य)"), s("दिव्"), s("दीव्यति")],
    [s("५"), t("स्वादि"), s("श्नु (नु/नो)"), s("सु"), s("सुनोति")],
    [s("६"), t("तुदादि"), s("श (अ)"), s("तुद्"), s("तुदति")],
    [s("७"), t("रुधादि"), s("श्नम् (न)"), s("रुध्"), s("रुणद्धि")],
    [s("८"), t("तनादि"), s("उ"), s("तन्"), s("तनोति")],
    [s("९"), t("क्र्यादि"), s("श्ना (ना/नी)"), s("क्री"), s("क्रीणाति")],
    [s("१०"), t("चुरादि"), s("णिच् (अय)"), s("चुर्"), s("चोरयति")],
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
  headers: [s("लकार"), t("Name"), t("Meaning"), t("Augment")],
  rows: [
    [s("लट्"), t("Present"), t("Action happening now"), t("—")],
    [s("लङ्"), t("Imperfect"), t("Past, not today"), s("अट्")],
    [s("लोट्"), t("Imperative"), t("Command, wish"), t("—")],
    [s("विधिलिङ्"), t("Optative"), t("Should, would, may"), t("—")],
    [s("आशीर्लिङ्"), t("Benedictive"), t("Blessing"), t("—")],
    [s("लृट्"), t("Simple Future"), t("Will happen"), t("—")],
    [s("लुट्"), t("Periphrastic Future"), t("Definite future"), t("—")],
    [s("लिट्"), t("Perfect"), t("Witnessed past"), t("—")],
    [s("लुङ्"), t("Aorist"), t("Recent past"), s("अट्")],
    [s("लृङ्"), t("Conditional"), t("Would have"), s("अट्")],
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
    description: "The fundamental तिङ् endings before lakāra-specific changes",
    tables: [parasmaipadaEndings, atmanepadaEndings],
  },
  {
    id: "lat",
    title: "Present Tense",
    titleSanskrit: "लट्",
    description: "वर्तमाने लट् — For ongoing action",
    tables: [latBhuParadigm],
  },
  {
    id: "lang",
    title: "Imperfect",
    titleSanskrit: "लङ्",
    description: "अनद्यतने लङ् — Past action not of today",
    tables: [langBhuParadigm],
  },
  {
    id: "lot",
    title: "Imperative",
    titleSanskrit: "लोट्",
    description: "विधि, निमन्त्रण, आमन्त्रण — Commands and wishes",
    tables: [lotBhuParadigm],
  },
  {
    id: "vidhiling",
    title: "Optative",
    titleSanskrit: "विधिलिङ्",
    description: "Should, would, may — Potential mood",
    tables: [vidhilingBhuParadigm],
  },
  {
    id: "lrt",
    title: "Simple Future",
    titleSanskrit: "लृट्",
    description: "Future action",
    tables: [lrtBhuParadigm],
  },
  {
    id: "lit",
    title: "Perfect",
    titleSanskrit: "लिट्",
    description: "परोक्षे लिट् — Witnessed past, with reduplication",
    tables: [litBhuParadigm],
  },
];
