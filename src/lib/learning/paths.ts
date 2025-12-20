/**
 * Learning Paths for Ashtadhyayi
 *
 * AUTO-GENERATED from markdown files in src/lib/learning/paths/
 * To edit, modify the .md files and run: npx tsx scripts/sync-paths.ts --to-ts
 */

export interface LearningStep {
  sutraId: string;
  title: string;
  commentary?: string;
  keyTerms?: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  titleSanskrit: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prerequisites: string[];
  steps: LearningStep[];
}

export const introductionPath: LearningPath = {
  id: "introduction",
  title: "Introduction to Paninian Grammar",
  titleSanskrit: "व्याकरणप्रवेशः",
  description: "Essential technical terms (samjna) you need before starting any prakriya. These 27 foundational concepts are prerequisites for all derivation work.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: [],
  steps: [
    {
      sutraId: "1.1.1",
      title: "Vrddhi defined",
      commentary: "The Ashtadhyayi begins with definitions. Vrddhi refers to the \"strengthened\" vowel grades: ā, ai, au. These appear in specific grammatical operations like causal formation.",
      keyTerms: ["vRddi", "AT", "Ec"],
    },
    {
      sutraId: "1.1.2",
      title: "Guna defined",
      commentary: "Guna refers to the \"medium\" vowel grades: a, e, o. Along with vrddhi, this establishes the vowel gradation (ablaut) system central to Sanskrit morphology.",
      keyTerms: ["guRa", "at", "eN"],
    },
    {
      sutraId: "1.1.3",
      title: "Guna and Vrddhi replace iK",
      commentary: "When guna or vrddhi substitution is prescribed, it replaces the vowels i, u, ṛ, ḷ (the pratyahara iK). This tells us where vowel strengthening applies.",
      keyTerms: ["iK", "guRa", "vRddi"],
    },
    {
      sutraId: "1.1.68",
      title: "Svan defines accent domain",
      commentary: "\"One's own form\" - when a rule mentions a sound, it refers to that sound along with its accent (svara) variations. This is a fundamental interpretive principle.",
      keyTerms: ["svaM", "rUpam"],
    },
    {
      sutraId: "1.1.69",
      title: "Anudit includes savarnas",
      commentary: "A vowel marked with anudātta (unmarked) in a rule includes all its homogeneous (savarna) variants. This expands the scope of rules efficiently.",
      keyTerms: ["aRudit", "savarRa"],
    },
    {
      sutraId: "1.1.70",
      title: "Taparastatkaalasya",
      commentary: "When a vowel is followed by 't' marker, it refers only to that specific vowel length, not its savarnas. This restricts scope when needed.",
      keyTerms: ["taparaH", "kAla"],
    },
    {
      sutraId: "1.3.2",
      title: "Final consonants are it (markers)",
      commentary: "In grammatical terms (pratyayas, etc.), a final consonant is an 'it' (marker). It conveys grammatical information but is deleted in the final form.",
      keyTerms: ["it", "hal", "antyam"],
    },
    {
      sutraId: "1.3.3",
      title: "Initial ṣ, s, h are markers",
      commentary: "Initial sibilants (ṣ, s) and h in affixes are also it-markers. For example, in 'ṣṇa' suffix, the ṣ is deleted.",
      keyTerms: ["halantyam", "AdiH"],
    },
    {
      sutraId: "1.3.9",
      title: "Tasya lopah - Markers are deleted",
      commentary: "Whatever is designated as 'it' undergoes lopa (deletion). The markers exist only to trigger rules and classify elements.",
      keyTerms: ["tasya", "lopaH", "it"],
    },
    {
      sutraId: "1.4.14",
      title: "Suptiṅantam padam",
      commentary: "A 'pada' (complete word) is defined as that which ends in sup (nominal endings) or tiṅ (verbal endings). This defines what constitutes a word.",
      keyTerms: ["sup", "tiN", "padam"],
    },
    {
      sutraId: "1.4.109",
      title: "Samhita: close contact",
      commentary: "Samhita means extreme proximity of sounds. Sandhi rules apply specifically when sounds are in samhita. This defines the domain of phonological rules.",
      keyTerms: ["saMhitA", "padasya"],
    },
    {
      sutraId: "3.1.1",
      title: "Pratyayah (suffixes follow)",
      commentary: "Pratyayas (suffixes/affixes) are placed after the base they attach to. This adhikara governs the entire suffix system.",
      keyTerms: ["pratyayaH", "paraH"],
    },
    {
      sutraId: "3.1.2",
      title: "Dhatoh (after verbal roots)",
      commentary: "The suffixes taught in this section come specifically after dhatus (verbal roots). This sets up the tiṅanta (verb conjugation) system.",
      keyTerms: ["DAtuH", "pratyaya"],
    },
  ],
};

export const tingantaLatPath: LearningPath = {
  id: "tinganta-lat",
  title: "Present Tense (Lat Lakara)",
  titleSanskrit: "लट्लकारः",
  description: "Learn to derive present tense verb forms. This is where Pushpa Dikshit's method begins - with the most common verb forms you'll encounter.",
  difficulty: "beginner",
  estimatedTime: "3-4 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "3.2.123",
      title: "Vartamane lat",
      commentary: "The suffix 'laṭ' is used to express present tense (vartamāna). This is our first lakāra - the template for deriving present tense forms.",
      keyTerms: ["vartamAne", "laT"],
    },
    {
      sutraId: "3.4.77",
      title: "Lasya (la is replaced)",
      commentary: "The 'l' of lakāras is replaced by tiṅ endings. This rule connects abstract lakāra markers to actual personal endings.",
      keyTerms: ["lasya", "Adesha"],
    },
    {
      sutraId: "3.4.78",
      title: "Tiptasjhi... (the 18 tiṅ endings)",
      commentary: "The 18 tiṅ endings: tip, tas, jhi (P 3rd), sip, thas, tha (P 2nd), mip, vas, mas (P 1st), ta, ātām, jha (Ā 3rd), thās, āthām, dhvam (Ā 2nd), iṭ, vahi, mahiṅ (Ā 1st).",
      keyTerms: ["tiN", "tip", "tas", "Ji"],
    },
    {
      sutraId: "1.4.99",
      title: "Lah parasmaipadam",
      commentary: "The first nine tiṅ endings (tip to mas) are called 'parasmaipada'. These are used with verbs that take parasmaipada.",
      keyTerms: ["laH", "parasmEpadam"],
    },
    {
      sutraId: "1.4.100",
      title: "Tañ ātmanepadeṣu",
      commentary: "The remaining nine endings (ta to mahiṅ) are called 'ātmanepada'. Verb roots are classified as taking one or both pada types.",
      keyTerms: ["taN", "Atmanepadam"],
    },
    {
      sutraId: "1.4.101",
      title: "Tiṅas trīṇi trīṇi",
      commentary: "The tiṅ endings group into threes: first three are prathama puruṣa (3rd person), next three madhyama (2nd), last three uttama (1st).",
      keyTerms: ["tiNaH", "trIRi", "praTama"],
    },
    {
      sutraId: "1.4.102",
      title: "Ekavacanadvivacanabahuvacanāni",
      commentary: "Within each person triplet: first is singular (ekavacana), second is dual (dvivacana), third is plural (bahuvacana).",
      keyTerms: ["ekavacanam", "dvivacanam", "bahuvacanam"],
    },
    {
      sutraId: "3.1.68",
      title: "Kartari śap",
      commentary: "The vikarana 'śap' is inserted between the dhatu and tiṅ endings when the kartā (agent) is expressed. This is the present tense marker.",
      keyTerms: ["kartari", "Sap", "vikarARa"],
    },
    {
      sutraId: "1.3.78",
      title: "Śeṣāt kartari parasmaipadam",
      commentary: "By default, when kartr̥ is expressed, verbs take parasmaipada endings - unless specifically marked otherwise.",
      keyTerms: ["SezAt", "kartari", "parasmEpadam"],
    },
    {
      sutraId: "6.1.77",
      title: "Iko yaṇ aci",
      commentary: "When i, u, ṛ, ḷ (iK) are followed by a vowel, they become y, v, r, l (yaṇ) respectively. Essential sandhi for verb formation.",
      keyTerms: ["ikaH", "yaR", "aci"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlr̥ṅṣu aṅgasya",
      commentary: "The augment 'a' (aṭ) is added before the verbal base in luṅ, laṅ, and lr̥ṅ lakāras. This marks past tenses.",
      keyTerms: ["luN", "laN", "lFN", "aNgasya"],
    },
    {
      sutraId: "7.3.84",
      title: "Sārvadhātukārdhadhātukayoḥ",
      commentary: "Guna substitution occurs for the iK vowels of an aṅga (stem) when followed by sārvadhātuka or ārdhadhātuka affixes. Core vowel strengthening rule.",
      keyTerms: ["sArvaDAtukaH", "ArDaDAtukaH", "guRa"],
    },
  ],
};

export const tingantaLotPath: LearningPath = {
  id: "tinganta-lot",
  title: "Imperative (Lot Lakara)",
  titleSanskrit: "लोट्लकारः",
  description: "Derive imperative (command) forms. Building on laṭ, you'll see how lakāras share structure but differ in endings.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.3.162",
      title: "Loṭ ca",
      commentary: "The suffix 'loṭ' expresses commands, requests, and benedictions (āśīḥ). This is the imperative mood.",
      keyTerms: ["loT", "viDi"],
    },
    {
      sutraId: "3.4.85",
      title: "Loṭo laṅvat",
      commentary: "Loṭ endings undergo the same substitutions as laṅ endings. This links the imperative to the imperfect system.",
      keyTerms: ["loTaH", "laNvat"],
    },
    {
      sutraId: "3.4.86",
      title: "Eruh",
      commentary: "In loṭ, the 'e' of the endings is replaced by 'u'. So 'te' becomes 'tu', 'se' becomes 'su'.",
      keyTerms: ["eH", "uH"],
    },
    {
      sutraId: "3.4.87",
      title: "Ser hy apic ca",
      commentary: "The 'si' ending (2nd singular P) becomes 'hi' in loṭ. Hence 'bhavasi' → 'bhava' (with hi dropped after 'a').",
      keyTerms: ["seH", "hi"],
    },
    {
      sutraId: "3.4.88",
      title: "Svādiṣu sārvadhātuke ṣṭhāluṅ",
      commentary: "Before sārvadhātuka affixes beginning with certain sounds, specific changes occur. Governs consonant modifications.",
      keyTerms: ["svAdiSu", "sArvaDAtukaH"],
    },
    {
      sutraId: "6.4.105",
      title: "Ato heḥ",
      commentary: "After a stem ending in 'a', the 'hi' of loṭ is deleted. So 'bhava + hi' → 'bhava'.",
      keyTerms: ["ataH", "heH"],
    },
    {
      sutraId: "3.4.89",
      title: "Māṅ loṭi",
      commentary: "The particle 'mā' is used with loṭ lakāra for prohibitions (mā bhūḥ = don't be). Negative commands.",
      keyTerms: ["mAN", "loTi"],
    },
    {
      sutraId: "7.1.35",
      title: "Tuhyostātaṅ āśiṣi",
      commentary: "In benedictions (āśīḥ), 'tu' and 'hi' endings are optionally replaced by 'tāt'. Formal blessing forms.",
      keyTerms: ["tu", "hi", "tAtaN", "ASizi"],
    },
  ],
};

export const tingantaLangPath: LearningPath = {
  id: "tinganta-lang",
  title: "Imperfect (Lang Lakara)",
  titleSanskrit: "लङ्लकारः",
  description: "Derive past imperfect tense forms. Learn the augment 'a' and how past tenses are marked in Paninian grammar.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.2.111",
      title: "Anadyatane laṅ",
      commentary: "The suffix 'laṅ' expresses past action not of today (anadyatana). This is the imperfect tense.",
      keyTerms: ["anadyatane", "laN"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlr̥ṅṣv aḍ udāttaḥ",
      commentary: "The augment 'aṭ' (= 'a') is prefixed to the dhātu in laṅ, luṅ, and lr̥ṅ. This 'a' marks past tense.",
      keyTerms: ["aT", "udAttaH", "laN"],
    },
    {
      sutraId: "3.4.100",
      title: "Itaś ca",
      commentary: "In laṅ (and other past tenses), the endings undergo 'it' substitutions. The 'i' of endings is handled specially.",
      keyTerms: ["itaH", "ca", "laN"],
    },
    {
      sutraId: "3.4.101",
      title: "Tasthasthāmipāṁ tāṁtaṁtāmāḥ",
      commentary: "The endings tas, thas, tha, mip are replaced by tām, tam, ta, am respectively in laṅ. Key ending transformations.",
      keyTerms: ["tas", "Tas", "TAm", "mip"],
    },
    {
      sutraId: "3.4.102",
      title: "Jherjus",
      commentary: "The ending 'jhi' (3rd plural P) is replaced by 'jus' (→ 'an') in laṅ. So 'bhavanti' becomes 'abhavan'.",
      keyTerms: ["JeH", "jus"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅāśiṣi",
      commentary: "In liṅ lakāra expressing wishes (āśīḥ), specific ending changes occur. Distinguishes optative from potential.",
      keyTerms: ["liN", "ASizi"],
    },
    {
      sutraId: "6.4.72",
      title: "Āḍajādīnām",
      commentary: "When the dhātu begins with a vowel, the augment 'āṭ' (long ā) is used instead of 'aṭ'. Maintains vowel sandhi.",
      keyTerms: ["AT", "ajAdInAm"],
    },
    {
      sutraId: "8.4.68",
      title: "A a",
      commentary: "Two short 'a' vowels in proximity coalesce. Basic sandhi rule applying to augmented forms.",
      keyTerms: ["aH", "aH"],
    },
  ],
};

export const tingantaVidhilingPath: LearningPath = {
  id: "tinganta-vidhiling",
  title: "Optative (Vidhiliṅ Lakara)",
  titleSanskrit: "विधिलिङ्",
  description: "Derive optative/potential mood forms. The liṅ lakāra with its distinctive 'yā' marker expresses possibility, obligation, and wishes.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.3.161",
      title: "Vidhinimantraṇādhīṣṭa...",
      commentary: "The suffix 'liṅ' expresses injunction (vidhi), invitation (nimantraṇa), instruction (adhīṣṭa), and more. The optative/potential mood.",
      keyTerms: ["viDi", "liN"],
    },
    {
      sutraId: "3.4.116",
      title: "Liṅāśiṣi",
      commentary: "The augment 'yāsuṭ' is added after the dhātu in liṅ for āśīḥ (benedictive). Distinguishes benedictive from optative.",
      keyTerms: ["liN", "ASizi", "yAsut"],
    },
    {
      sutraId: "3.4.103",
      title: "Yāsuṭ parasmaipadeyoḥ",
      commentary: "In parasmaipada, 'yāsuṭ' is the characteristic marker before endings. Creates the 'yā' of optative forms.",
      keyTerms: ["yAsut", "parasmEpade"],
    },
    {
      sutraId: "3.4.104",
      title: "Kintve sīyuṭ",
      commentary: "In ātmanepada liṅ, 'sīyuṭ' replaces 'yāsuṭ'. Different optative marker for middle voice.",
      keyTerms: ["sIyut", "liN", "Atmanepade"],
    },
    {
      sutraId: "3.4.105",
      title: "Jhusjusjhasāṁ jhantayaḥ",
      commentary: "The endings jhi, jus, jha are replaced by 'jh-ant' forms in certain contexts. Ending modifications.",
      keyTerms: ["JuH", "jus", "Ja", "jhant"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅāśiṣi iṭ",
      commentary: "The augment 'iṭ' is inserted in liṅ āśīḥ forms. Distinguishes benedictive morphology.",
      keyTerms: ["liN", "ASizi", "iT"],
    },
    {
      sutraId: "3.4.106",
      title: "Itaś ca lopaḥ parasmaipadesūs",
      commentary: "The 'i' of endings undergoes lopa in parasmaipada. Affects final vowels of endings.",
      keyTerms: ["itaH", "lopaH", "parasmEpadezu"],
    },
    {
      sutraId: "7.1.5",
      title: "Ātmanepadāni śeṣṣaḥ",
      commentary: "Remaining rules apply to ātmanepada endings. Completes the ending transformation picture.",
      keyTerms: ["Atmanepadayozu", "SezaH"],
    },
  ],
};

export const dhatuGanasPath: LearningPath = {
  id: "dhatu-ganas",
  title: "The Ten Verb Classes (Ganas)",
  titleSanskrit: "दशगणाः",
  description: "Learn how the 10 dhatu classes (ganas) affect verb conjugation. Each gana has its own vikarana that appears between root and ending.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "1.3.1",
      title: "Bhūvādayo dhātavaḥ",
      commentary: "The roots starting from 'bhū' are called dhātus. The Dhātupāṭha lists ~2000 roots organized into 10 classes (gaṇas).",
      keyTerms: ["BU", "DAtu", "gaNa"],
    },
    {
      sutraId: "3.1.68",
      title: "Kartari śap",
      commentary: "The vikarana 'śap' (realized as 'a') is added after bhvādi (1st class) roots before sārvadhātuka endings. bhū + śap + ti → bhavati.",
      keyTerms: ["Sap", "vikaraRa", "BvAdi"],
    },
    {
      sutraId: "3.1.69",
      title: "Divādibhyaḥ śyan",
      commentary: "After divādi (4th class) roots, the vikarana 'śyan' (= ya) is added. div + śyan + ti → dīvyati.",
      keyTerms: ["SyaN", "divAdi"],
    },
    {
      sutraId: "3.1.73",
      title: "Svādibhyaḥ śnu",
      commentary: "After svādi (5th class) roots, vikarana 'śnu' (= nu/no) is added. su + śnu + ti → sunoti.",
      keyTerms: ["Snu", "svAdi"],
    },
    {
      sutraId: "3.1.77",
      title: "Tudādibhyaś śa",
      commentary: "After tudādi (6th class) roots, vikarana 'śa' (= a, with accent difference) is added. tud + śa + ti → tudati.",
      keyTerms: ["Sa", "tudAdi"],
    },
    {
      sutraId: "3.1.78",
      title: "Rudhādibhyaḥ śnam",
      commentary: "After rudhādi (7th class) roots, vikarana 'śnam' is infixed (inserted before final consonant). rudh → ru-ṇa-dh + ti → ruṇaddhi.",
      keyTerms: ["Snam", "ruDAdi"],
    },
    {
      sutraId: "3.1.79",
      title: "Tanādikr̥ñbhya u",
      commentary: "After tanādi (8th class) roots, vikarana 'u' (= o) is added. tan + u + ti → tanoti.",
      keyTerms: ["u", "tanAdi"],
    },
    {
      sutraId: "3.1.80",
      title: "Kriyādibhyaḥ ṇā",
      commentary: "After kryādi (9th class) roots, vikarana 'ṇā' (= nā/nī) is added. krī + ṇā + ti → krīṇāti.",
      keyTerms: ["RA", "kryAdi"],
    },
    {
      sutraId: "2.4.72",
      title: "Adiprabhṛti... (curādi special)",
      commentary: "Curādi (10th class) roots take the 'ṇic' suffix, making them formally causatives. cur + ṇi + śap + ti → corayati.",
      keyTerms: ["Ric", "curAdi"],
    },
    {
      sutraId: "2.4.75",
      title: "Juhotyādiṣu ślu",
      commentary: "After juhotyādi (3rd class) roots, the vikarana undergoes 'ślu' (deletion), and the root reduplicates. hu → ju-hu + ti → juhoti.",
      keyTerms: ["Slu", "juhotyAdi"],
    },
    {
      sutraId: "3.1.81",
      title: "Krīṅ juhotyādiṣu ślu",
      commentary: "The root 'krī' (to buy) in juhotyādi class takes ślu. Creates reduplicated forms.",
      keyTerms: ["Slu", "krIN"],
    },
    {
      sutraId: "2.4.74",
      title: "Adādikṣu śyanśyaślīnāṁ śluḥ",
      commentary: "In adādi (2nd class), the vikarana is deleted (ślu). The root directly takes endings. ad + ti → atti.",
      keyTerms: ["Slu", "adAdi"],
    },
  ],
};

export const tingantaLutPath: LearningPath = {
  id: "tinganta-lut",
  title: "Periphrastic Future (Lut Lakara)",
  titleSanskrit: "लुट्लकारः",
  description: "Derive periphrastic future forms using the 'tā' suffix. This future emphasizes the agent and uses a different formation strategy.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lrt"],
  steps: [
    {
      sutraId: "3.3.15",
      title: "Anadyatane luṭ",
      commentary: "The suffix 'luṭ' expresses future action not occurring today. More definite than lṛṭ.",
      keyTerms: ["anadyatane", "luT"],
    },
    {
      sutraId: "3.1.33",
      title: "Syatāsī lṛluṭoḥ",
      commentary: "In luṭ, the 'tāsī' suffix is used (realized as 'tā'). Creates forms like 'kartā'.",
      keyTerms: ["tAsI", "luT"],
    },
    {
      sutraId: "2.4.85",
      title: "Luṭaḥ prathamasya ḍāraurasaḥ",
      commentary: "In luṭ first person, the ending is replaced by 'ḍā', 'rau', 'ras'. Special first-person forms.",
      keyTerms: ["luT", "praTama", "qA"],
    },
    {
      sutraId: "3.3.16",
      title: "Parasmaipadeṣūdātto...",
      commentary: "Parasmaipada forms in luṭ have specific accent patterns. Distinguishes from ātmanepada.",
      keyTerms: ["parasmEpadezu", "udAttaH"],
    },
    {
      sutraId: "3.1.34",
      title: "Hetuhetumator liṅ",
      commentary: "When cause-effect relationship is expressed, liṅ (not luṭ) may be used. Semantic distinction.",
      keyTerms: ["hetu", "hetumat", "liN"],
    },
    {
      sutraId: "7.2.10",
      title: "Ekāhalmadhye...iṭ",
      commentary: "The 'iṭ' augment applies before 'tās' just as with 'sya'. Parallel formation.",
      keyTerms: ["iT", "tAs"],
    },
    {
      sutraId: "3.4.78",
      title: "Tiptasjhisipthasthamibvasmas",
      commentary: "The tiṅ endings replace 'l' of luṭ as usual, but then undergo special luṭ substitutions.",
      keyTerms: ["tip", "luT"],
    },
    {
      sutraId: "2.4.84",
      title: "Aste bhūḥ",
      commentary: "The verb 'as' (to be) is replaced by 'bhū' in certain luṭ contexts. Auxiliary formation.",
      keyTerms: ["asti", "BU", "luT"],
    },
  ],
};

export const tingantaLitPath: LearningPath = {
  id: "tinganta-lit",
  title: "Perfect (Lit Lakara)",
  titleSanskrit: "लिट्लकारः",
  description: "Derive perfect tense forms with reduplication. The liṭ is unique - it requires doubling the root and has special endings.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["tinganta-lrt"],
  steps: [
    {
      sutraId: "3.2.115",
      title: "Parokṣe liṭ",
      commentary: "The suffix 'liṭ' expresses past action not witnessed by the speaker (parokṣa). The perfect tense.",
      keyTerms: ["parokze", "liT"],
    },
    {
      sutraId: "6.1.8",
      title: "Liṭi dhātor anabhyāsasya",
      commentary: "In liṭ, the dhātu (excluding any prior reduplication) is reduplicated. Core perfect formation rule.",
      keyTerms: ["liT", "DAtu", "aBvyAsa"],
    },
    {
      sutraId: "6.1.1",
      title: "Ekāco dve prathamasya",
      commentary: "For a single-vowel root, the first syllable is doubled. Basic reduplication principle.",
      keyTerms: ["ekAc", "dve", "praTama"],
    },
    {
      sutraId: "6.1.2",
      title: "Ajāder dvitīyasya",
      commentary: "For vowel-initial roots, the second part is taken for reduplication. Handles roots like 'ad'.",
      keyTerms: ["ajAdeH", "dvitIya"],
    },
    {
      sutraId: "7.4.59",
      title: "Hrasvaḥ",
      commentary: "The vowel of the abhyāsa (reduplicated syllable) becomes short. Long ā → a, etc.",
      keyTerms: ["hrasva", "aBvyAsa"],
    },
    {
      sutraId: "7.4.60",
      title: "Halādiḥ śeṣaḥ",
      commentary: "Only the initial consonant of the abhyāsa is retained. Simplifies consonant clusters.",
      keyTerms: ["halAdiH", "SezaH", "aBvyAsa"],
    },
    {
      sutraId: "7.4.62",
      title: "Kuhoś cuḥ",
      commentary: "Gutturals (k, kh, g, gh, h) in abhyāsa become palatals (c, ch, j, jh). Key sound change.",
      keyTerms: ["ku", "hu", "cu", "aBvyAsa"],
    },
    {
      sutraId: "3.4.81",
      title: "Liṭas tibjhasipjhisthami...",
      commentary: "Special liṭ endings: tib, jhaB, sip, etc. replace the standard tiṅ. Perfect has unique endings.",
      keyTerms: ["liT", "tiB", "JaB"],
    },
    {
      sutraId: "3.4.82",
      title: "Parasmaipadānāṃ ṇalatususthalthusaṇalvamāḥ",
      commentary: "The parasmaipada liṭ endings: ṇal (3s), atus (3d), us (3p), tha (2s), athus (2d), a (2p), ṇal (1s), va (1d), ma (1p).",
      keyTerms: ["Ral", "atus", "Tal"],
    },
    {
      sutraId: "7.1.34",
      title: "Ātmanepadeṣvanataḥ",
      commentary: "Ātmanepada liṭ endings differ from parasmaipada. Complete ending paradigm.",
      keyTerms: ["Atmanepadam", "anataH"],
    },
    {
      sutraId: "6.4.120",
      title: "Ata ekahalmadhye...",
      commentary: "Special rules for roots with 'a' and single consonant in liṭ. Affects common roots.",
      keyTerms: ["ataH", "ekahal", "liT"],
    },
    {
      sutraId: "6.4.126",
      title: "Na śasvadṛśivindagaṇḍasajām",
      commentary: "Certain roots (śas, dṛś, vid, etc.) don't take standard changes in liṭ. Exception list.",
      keyTerms: ["na", "sas", "liT"],
    },
  ],
};

export const tingantaLungPath: LearningPath = {
  id: "tinganta-lung",
  title: "Aorist (Lung Lakara)",
  titleSanskrit: "लुङ्लकारः",
  description: "Derive aorist (past tense) forms. The luṅ has multiple formation types - this path covers the seven aorist varieties.",
  difficulty: "advanced",
  estimatedTime: "4-5 hours",
  prerequisites: ["tinganta-lit"],
  steps: [
    {
      sutraId: "3.2.110",
      title: "Luṅ",
      commentary: "The suffix 'luṅ' expresses past action (bhūta). The aorist - a simple past tense.",
      keyTerms: ["luN", "BUta"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlṛṅṣv aḍ udāttaḥ",
      commentary: "The augment 'aṭ' (= a) is prefixed to the dhātu in luṅ. Past tense marker shared with laṅ.",
      keyTerms: ["aT", "luN"],
    },
    {
      sutraId: "3.1.43",
      title: "Cli luṅi",
      commentary: "The affix 'cli' is added after the dhātu in luṅ. This is the aorist sign.",
      keyTerms: ["cli", "luN"],
    },
    {
      sutraId: "3.1.44",
      title: "Cleḥ sic",
      commentary: "The 'cli' is replaced by 'sic' (= s) in certain conditions. Creates sigmatic aorist.",
      keyTerms: ["cleH", "sic"],
    },
    {
      sutraId: "2.4.77",
      title: "Gātisthāghupābhūbhyaḥ sic ṅit",
      commentary: "For roots gā, sthā, ghā, pā, bhū - 'sic' is treated as 'ṅit'. Affects which rules apply.",
      keyTerms: ["sic", "Nit", "gA"],
    },
    {
      sutraId: "3.1.45",
      title: "Śliṣṭisīcstidighavyayoḥ kṣaḥ",
      commentary: "For certain roots, 'ksa' replaces 'cli'. Another aorist type.",
      keyTerms: ["ksa", "aorist"],
    },
    {
      sutraId: "3.1.48",
      title: "Ṅamo hrasvāt cṅi",
      commentary: "After short-vowel roots ending in 'm' or 'n', the 'caṅ' aorist is formed. Reduplicated aorist.",
      keyTerms: ["caN", "hrasva"],
    },
    {
      sutraId: "3.1.52",
      title: "Asmadyuśmadbhyāṁ ṇic sic ca",
      commentary: "Roots with 'ṇic' (causative) can take 'sic' in luṅ. Causative aorist formation.",
      keyTerms: ["Ric", "sic", "luN"],
    },
    {
      sutraId: "3.1.55",
      title: "Puṣādidyutādibhyaś ca",
      commentary: "Roots of puṣ and dyut classes have special aorist formations.",
      keyTerms: ["luN", "puza", "dyuta"],
    },
    {
      sutraId: "7.2.1",
      title: "Ayadvidhinye ārdhdhātukasyāsya",
      commentary: "The 'iṭ' augment rules for ārdhadhātuka apply in aorist. Affects consonant clusters.",
      keyTerms: ["ArDaDAtukaH", "aya", "iT"],
    },
    {
      sutraId: "7.3.96",
      title: "Astisico'pṛkte",
      commentary: "For root 'as' (to be), special rules apply to 'sic' aorist when not prefixed.",
      keyTerms: ["asti", "sic", "apFkte"],
    },
    {
      sutraId: "6.4.104",
      title: "Luṅi ca",
      commentary: "Specific stem changes occur in luṅ context. Completes aorist stem formation.",
      keyTerms: ["luN", "ca"],
    },
  ],
};

export const tingantaAshirlingPath: LearningPath = {
  id: "tinganta-ashirling",
  title: "Benedictive (Ashirling)",
  titleSanskrit: "आशीर्लिङ्",
  description: "Derive benedictive forms expressing blessings and wishes. This special use of liṅ has its own distinctive formation.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-vidhiling"],
  steps: [
    {
      sutraId: "3.3.173",
      title: "Āśiṣi liṅloṭau",
      commentary: "The suffixes liṅ and loṭ express āśīḥ (blessing/benediction). Benedictive mood.",
      keyTerms: ["ASizi", "liN"],
    },
    {
      sutraId: "3.4.116",
      title: "Liṅāśiṣi",
      commentary: "In āśīḥ usage, the augment 'yāsuṭ' is added after the dhātu. Creates distinctive blessing forms.",
      keyTerms: ["liN", "ASizi", "yAsut"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅāśiṣi iṭ",
      commentary: "In liṅ āśīḥ, the augment 'iṭ' is inserted. Differentiates from regular optative.",
      keyTerms: ["liN", "ASizi", "iT"],
    },
    {
      sutraId: "3.4.104",
      title: "Kintve sīyuṭ",
      commentary: "In ātmanepada benedictive, 'sīyuṭ' (= sī) is the marker. Middle voice blessing.",
      keyTerms: ["sIyuT", "Atmanepade"],
    },
    {
      sutraId: "7.2.80",
      title: "Āto guṇe",
      commentary: "When guṇa applies after 'ā', specific changes occur. Affects benedictive vowels.",
      keyTerms: ["AtaH", "guRe"],
    },
    {
      sutraId: "3.4.117",
      title: "Yāsuṭ parasmaipadeṣu",
      commentary: "In parasmaipada, 'yāsuṭ' (= yās) creates forms like 'bhūyāt'. The blessing formula.",
      keyTerms: ["yAsut", "parasmEpadezu"],
    },
    {
      sutraId: "7.2.81",
      title: "Āto dīrgho yañi",
      commentary: "Before 'y' of yaṅ-class affixes, final 'ā' of stem lengthens. Vowel adjustment.",
      keyTerms: ["AtaH", "dIrGa", "yaN"],
    },
    {
      sutraId: "6.4.67",
      title: "Sasya lopaḥ śiti",
      commentary: "The 's' of 'yās' may be deleted before 'ś'-initial endings. Creates contracted forms.",
      keyTerms: ["sasya", "lopaH", "Siti"],
    },
  ],
};

export const taddhitaMatupPath: LearningPath = {
  id: "taddhita-matup",
  title: "Possessive Suffixes (Matup/Vatup)",
  titleSanskrit: "मतुब्वतुबौ",
  description: "Derive possessive adjectives using matup and vatup. \"Having X\" - create words like dhīmat (wise), balavat (strong).",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "5.2.94",
      title: "Tad asyāsty asminn iti matup",
      commentary: "The suffix 'matup' (= mat/vat) means \"one who has that\" or \"that in which something exists.\"",
      keyTerms: ["matup", "asti", "asmin"],
    },
    {
      sutraId: "8.2.9",
      title: "Māhābhāryeti...",
      commentary: "After stems ending in 'a', matup becomes 'vat'. \"bala + matup = balavat.\"",
      keyTerms: ["matup", "vat"],
    },
    {
      sutraId: "5.2.95",
      title: "Atyādibhyaḥ saṁśrūyante",
      commentary: "After words like 'ati', matup is optionally applied. Creates intensified meanings.",
      keyTerms: ["ati", "matup"],
    },
    {
      sutraId: "6.4.138",
      title: "Acaḥ",
      commentary: "Before matup, stems ending in vowels take specific forms. Vowel sandhi rules.",
      keyTerms: ["ac", "matup"],
    },
    {
      sutraId: "6.4.136",
      title: "Eco'yavāyāvaḥ",
      commentary: "Diphthongs split before matup. \"go + mat = gāvat\" (rare).",
      keyTerms: ["ec", "matup"],
    },
    {
      sutraId: "7.1.70",
      title: "Ugidañchaṁ sarvanāmasthāne...",
      commentary: "In sarvanāmasthāna cases (nom/voc/acc), matup forms have special endings.",
      keyTerms: ["matup", "sarvanAmaSena"],
    },
    {
      sutraId: "6.1.67",
      title: "Ver āpṛkte",
      commentary: "Root 'vṛ' shows special behavior with possessive suffixes.",
      keyTerms: ["vF", "matup"],
    },
    {
      sutraId: "8.2.10",
      title: "Vānto...",
      commentary: "The 'v' of vat-forms may undergo changes at word boundaries.",
      keyTerms: ["vat", "pada"],
    },
  ],
};

export const taddhitaTvaTalPath: LearningPath = {
  id: "taddhita-tva-tal",
  title: "Abstract Noun Suffixes (Tva/Tal)",
  titleSanskrit: "त्वतलौ",
  description: "Derive abstract nouns using tva and tal. Create \"-ness/-ity\" words like gurutva (heaviness), gurutā.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "5.1.119",
      title: "Tasya bhāvas tvataloḥ",
      commentary: "The suffixes 'tva' and 'tal' (= tā) express bhāva - the abstract quality of something. \"guru + tva = gurutva.\"",
      keyTerms: ["BAva", "tva", "tal"],
    },
    {
      sutraId: "5.1.120",
      title: "Aṇo dvitīyāyāṁ ca",
      commentary: "When derived from an 'aṇ' (a-ending) stem, tva/tal may express comparison.",
      keyTerms: ["aR", "tva", "dvitIyA"],
    },
    {
      sutraId: "6.4.164",
      title: "Co ku",
      commentary: "Before tva, palatal consonants (c, ch, j, jh) revert to gutturals. \"yāci + tva = yākitva.\"",
      keyTerms: ["cu", "ku", "tva"],
    },
    {
      sutraId: "7.4.32",
      title: "Et tvaṭṭve",
      commentary: "The vowel 'e' of a stem shortens before tva. Affects e-ending stems.",
      keyTerms: ["e", "tva"],
    },
    {
      sutraId: "6.4.155",
      title: "Tvaṭṭālo...",
      commentary: "Specific stem changes before tva and tā. Parallel formation rules.",
      keyTerms: ["tva", "tA"],
    },
    {
      sutraId: "7.2.83",
      title: "Iditaś ca",
      commentary: "Roots marked 'idit' show specific changes before tva.",
      keyTerms: ["idit", "tva"],
    },
    {
      sutraId: "5.1.121",
      title: "Teḥ samudāye",
      commentary: "The suffix may express collective sense. \"bahutva\" = plurality/manyness.",
      keyTerms: ["te", "samudAya", "tva"],
    },
    {
      sutraId: "6.1.66",
      title: "Lopoyaṁ ca...",
      commentary: "Certain final elements are deleted before tva/tal.",
      keyTerms: ["lopa", "tva"],
    },
  ],
};

export const taddhitaAnIkaPath: LearningPath = {
  id: "taddhita-an-ika",
  title: "Relational Suffixes (An/Ika/Thak)",
  titleSanskrit: "अण्ठक्",
  description: "Derive words expressing relation, origin, or connection. Create patronymics, place-derivatives, and professional terms.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "4.1.83",
      title: "Tasyāpatyam",
      commentary: "The suffix 'aṇ' (= a) creates patronymics - \"descendant of X.\" \"Dakṣa + aṇ = Dākṣa.\"",
      keyTerms: ["apatya", "aR"],
    },
    {
      sutraId: "4.1.92",
      title: "Tasyedaṁ",
      commentary: "The suffix also expresses \"belonging to, relating to.\" General relational sense.",
      keyTerms: ["idam", "aR"],
    },
    {
      sutraId: "4.2.80",
      title: "Tena dīvyati",
      commentary: "The suffix 'ṭhak' (= ika) expresses \"one who plays/deals with X.\" Professional terms.",
      keyTerms: ["dIvyati", "Wak"],
    },
    {
      sutraId: "4.3.120",
      title: "Tatrabhavaḥ",
      commentary: "The suffix 'ṭhak' creates \"native of X\" words. Place-of-origin derivatives.",
      keyTerms: ["tatra", "Tak"],
    },
    {
      sutraId: "7.3.1",
      title: "Añaḥ",
      commentary: "Before aṇ suffix, the first vowel of the base takes vṛddhi. \"Diti + aṇ = Daiteya.\"",
      keyTerms: ["aJ", "vFddi"],
    },
    {
      sutraId: "6.4.148",
      title: "Yasyeti ca",
      commentary: "Final 'ya' of a stem is deleted before aṇ. Stem simplification.",
      keyTerms: ["ya", "aR"],
    },
    {
      sutraId: "4.2.1",
      title: "Tena raktaṁ rāgāt",
      commentary: "Words expressing \"dyed with X\" take aṇ. Color derivatives.",
      keyTerms: ["rakta", "rAga", "aR"],
    },
    {
      sutraId: "7.2.117",
      title: "Taddhiteṣv acām ādeḥ",
      commentary: "In taddhita derivatives, the initial vowel of the base undergoes vṛddhi.",
      keyTerms: ["tadDita", "ac", "vFddi"],
    },
    {
      sutraId: "4.1.95",
      title: "Ata iñ",
      commentary: "After certain a-stems, 'iñ' (= i) is used instead of aṇ. \"Atri + iñ = Ātreya.\"",
      keyTerms: ["at", "iJ"],
    },
    {
      sutraId: "4.3.53",
      title: "Prāgvahaṭaḥ ṭhañ",
      commentary: "The suffix 'ṭhañ' (= ika) creates various relational derivatives.",
      keyTerms: ["WaJ", "prAgvahaT"],
    },
  ],
};

export const subantaPratipadikaPath: LearningPath = {
  id: "subanta-pratipadika",
  title: "Nominal Stems (Pratipadika)",
  titleSanskrit: "प्रातिपदिकम्",
  description: "Understand nominal stems before adding case endings. What qualifies as a pratipadika and how stems are classified.",
  difficulty: "beginner",
  estimatedTime: "2 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "1.2.45",
      title: "Arthavad adhātur apratyayaḥ prātipadikam",
      commentary: "A meaningful element that is neither a dhatu nor a pratyaya is called prātipadika. Basic noun stems.",
      keyTerms: ["arTavat", "aDAtu", "prAtipadikam"],
    },
    {
      sutraId: "1.2.46",
      title: "Kṛttaddhitasamāsāś ca",
      commentary: "Words formed with kṛt suffixes, taddhita suffixes, or compounds are also prātipadikas.",
      keyTerms: ["kFt", "tadDita", "samAsa"],
    },
    {
      sutraId: "1.4.14",
      title: "Suptiṅantaṁ padam",
      commentary: "A complete word (pada) ends in either sup (nominal) or tiṅ (verbal) endings.",
      keyTerms: ["sup", "tiN", "padam"],
    },
    {
      sutraId: "4.1.1",
      title: "Ṅyāpprātipadikāt",
      commentary: "From a prātipadika, feminine suffixes (ṅī, āp) and other derivations proceed.",
      keyTerms: ["Ni", "Ap", "prAtipadikAt"],
    },
    {
      sutraId: "4.1.2",
      title: "Svaujasamauṭ...",
      commentary: "The 21 sup endings (7 cases × 3 numbers): su, au, jas, am, auṭ, śas, ṭā, bhyām, bhis, ṅe, bhyām, bhyas, ṅasi, bhyām, bhyas, ṅas, os, ām, ṅi, os, sup.",
      keyTerms: ["sup", "svaujas"],
    },
    {
      sutraId: "1.4.103",
      title: "Sup ca",
      commentary: "The sup endings are called vibhakti. They express case relations.",
      keyTerms: ["sup", "vibhakti"],
    },
    {
      sutraId: "2.3.2",
      title: "Karmapravacanīyayukte dvitīyā",
      commentary: "The second case (accusative) is used with karma and certain preverbs.",
      keyTerms: ["karma", "dvitIyA"],
    },
    {
      sutraId: "1.1.68",
      title: "Svaṁ rūpam",
      commentary: "A word denotes its own form unless context indicates otherwise. Self-reference principle.",
      keyTerms: ["svaM", "rUpam"],
    },
  ],
};

export const subantaAStemsPath: LearningPath = {
  id: "subanta-a-stems",
  title: "A-stem Declension (Ajanta Pum/Napum)",
  titleSanskrit: "अकारान्तपुंनपुंसकम्",
  description: "Master the most common declension - masculine and neuter a-stems like deva, phala. The paradigm foundation.",
  difficulty: "beginner",
  estimatedTime: "3 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "7.1.9",
      title: "Ato bhisa ais",
      commentary: "After a-stems, the ending 'bhis' (I.pl) becomes 'ais'. \"devais\" not \"*devabhis.\"",
      keyTerms: ["at", "Bis", "Es"],
    },
    {
      sutraId: "7.3.102",
      title: "Supi ca",
      commentary: "Before certain sup endings, 'a' becomes 'o'. Affects genitive/locative dual.",
      keyTerms: ["sup", "at", "o"],
    },
    {
      sutraId: "7.3.103",
      title: "Bahuvacane jhaly et",
      commentary: "In plural, before jhal-initial endings, 'a' becomes 'e'. \"devebhyaḥ.\"",
      keyTerms: ["bahuvacanam", "Jal", "et"],
    },
    {
      sutraId: "7.1.12",
      title: "Ṭāṅasi ṅasāminām...",
      commentary: "The endings ṭā, ṅasi, ṅasāminam have special forms after a-stems.",
      keyTerms: ["NAsim", "at"],
    },
    {
      sutraId: "7.3.105",
      title: "Ṅisi ca",
      commentary: "Before ṅi (L.sg), 'a' becomes 'e'. \"deve\" (in the god).",
      keyTerms: ["Nisi", "at", "Au"],
    },
    {
      sutraId: "6.1.102",
      title: "Prathamayoḥ pūrvasavarṇam",
      commentary: "In N.sg and V.sg, vowel sandhi applies between stem and ending.",
      keyTerms: ["praTama", "pUrva", "savarRa"],
    },
    {
      sutraId: "7.1.24",
      title: "Ato'nupasarge kaḥ",
      commentary: "In vocative singular, a-stems take special treatment. \"he deva.\"",
      keyTerms: ["at", "ka", "sambodhana"],
    },
    {
      sutraId: "7.1.20",
      title: "Jaśśasau śiḥ",
      commentary: "The N.pl ending 'jas' and A.pl 'śas' become 'śi' after certain stems.",
      keyTerms: ["Jas", "Sas", "Si"],
    },
    {
      sutraId: "7.1.11",
      title: "Napaṁsakasya jhaly acaḥ",
      commentary: "For neuters, before jhal-endings, the final 'a' has special behavior.",
      keyTerms: ["napuMsaka", "Jal", "ac"],
    },
    {
      sutraId: "7.1.19",
      title: "Napuṁsakāc ca",
      commentary: "Neuter N/A plural takes 'śi' → 'i'. \"phalāni\" with lengthening.",
      keyTerms: ["napuMsaka", "Si"],
    },
    {
      sutraId: "7.1.72",
      title: "Napuṁsakasya a pañcamyāḥ",
      commentary: "Neuter stems have special ablative/genitive singular forms.",
      keyTerms: ["napuMsaka", "paJcamI"],
    },
  ],
};

export const subantaAaStemsPath: LearningPath = {
  id: "subanta-aa-stems",
  title: "Aa-stem Declension (Feminine)",
  titleSanskrit: "आकारान्तस्त्री",
  description: "Decline feminine ā-stems like senā, vidyā, kanyā. The primary feminine noun pattern.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "7.3.105",
      title: "Ṅisi ca",
      commentary: "Before ṅi (L.sg), long 'ā' takes special form. \"senāyām\" (in the army).",
      keyTerms: ["Nisi", "At", "Am"],
    },
    {
      sutraId: "7.3.106",
      title: "Saṃbuddhi ca",
      commentary: "In vocative singular, ā-stems have distinctive addressing form.",
      keyTerms: ["sambudDi", "At"],
    },
    {
      sutraId: "7.1.18",
      title: "Ṅe prathamayoḥ supāḥ",
      commentary: "Before ṅe (D.sg), nominative plural endings interact with ā-stems.",
      keyTerms: ["Ne", "praTama", "At"],
    },
    {
      sutraId: "7.3.104",
      title: "Osidyuthoḥ",
      commentary: "Before 'os' endings (G/L dual), ā-stem sandhi applies.",
      keyTerms: ["os", "At"],
    },
    {
      sutraId: "6.1.102",
      title: "Prathamayoḥ pūrvasavarṇaḥ",
      commentary: "In N.sg, the stem-final ā and ending merge. \"senā + su = senā.\"",
      keyTerms: ["praTama", "At", "savarRa"],
    },
    {
      sutraId: "7.3.112",
      title: "Aṁnīnāṅit",
      commentary: "The accusative plural 'śas' becomes 'ḥ' after ā. \"senāḥ.\"",
      keyTerms: ["Am", "nI", "At"],
    },
    {
      sutraId: "7.1.54",
      title: "Hrasvasya dīrghaḥ syāt",
      commentary: "Short vowels lengthen in certain environments before endings.",
      keyTerms: ["hrasva", "dIrGa", "At"],
    },
    {
      sutraId: "6.4.3",
      title: "Nāmi",
      commentary: "Before 'num'-augmented endings, ā-stems show specific behavior.",
      keyTerms: ["nAmi", "At"],
    },
    {
      sutraId: "7.1.50",
      title: "Āto ṅiti",
      commentary: "Before ṅit-marked endings, ā-final stems have characteristic forms.",
      keyTerms: ["At", "Nit"],
    },
    {
      sutraId: "7.3.108",
      title: "Hrasvanadyāpo numācārye",
      commentary: "Short feminine stems (nadī, etc.) take 'num' before certain endings.",
      keyTerms: ["hrasva", "nadI", "Ap"],
    },
  ],
};

export const subantaIUStemsPath: LearningPath = {
  id: "subanta-i-u-stems",
  title: "I-stem and U-stem Declension",
  titleSanskrit: "इकारोकारान्तम्",
  description: "Decline i-stems (agni, kavi) and u-stems (guru, madhu). Important patterns with guna and vrddhi changes.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "7.3.111",
      title: "Ghiseḥ sāpadādau",
      commentary: "Before 'ṅi' and 'se' (D/Ab.sg), guna applies to i/u stems. \"agnaye, gurave.\"",
      keyTerms: ["Gi", "seH", "guRa"],
    },
    {
      sutraId: "7.3.110",
      title: "Ṛto ṅisi",
      commentary: "Before ṅi (L.sg), stems in 'ṛ' (and by extension i/u) take specific forms.",
      keyTerms: ["Ft", "Nisi"],
    },
    {
      sutraId: "7.1.73",
      title: "Iko'ci vibhaktau",
      commentary: "Before vowel-initial vibhakti, 'iK' vowels (i, u, ṛ, ḷ) undergo sandhi.",
      keyTerms: ["ik", "ac", "vibhakti"],
    },
    {
      sutraId: "6.4.77",
      title: "Aco'ñīti",
      commentary: "Before vowel-initial ṅit endings, stem-final vowels change.",
      keyTerms: ["ac", "JI"],
    },
    {
      sutraId: "6.1.77",
      title: "Iko yaṇ aci",
      commentary: "Before vowels, i→y, u→v, ṛ→r, ḷ→l. Key sandhi for i/u stems.",
      keyTerms: ["ik", "yaN", "ac"],
    },
    {
      sutraId: "7.3.117",
      title: "At eḥ śeṣe",
      commentary: "In remaining cases (not covered above), 'a' of 'at' endings applies.",
      keyTerms: ["at", "eH", "Seze"],
    },
    {
      sutraId: "7.1.90",
      title: "Gotrasya chau",
      commentary: "Gotra (lineage) terms with i-ending have special vocative.",
      keyTerms: ["gotra", "Cu"],
    },
    {
      sutraId: "7.3.118",
      title: "Ṅe pratyayavatyadhātoḥ",
      commentary: "Before ṅe, stems with pratyaya suffixes behave distinctively.",
      keyTerms: ["Ne", "pratyaya"],
    },
    {
      sutraId: "7.3.119",
      title: "Acas trīstyadeś catuṣṣu",
      commentary: "Vowel-final feminine stems show specific patterns in certain cases.",
      keyTerms: ["ac", "strI", "catus"],
    },
    {
      sutraId: "6.4.83",
      title: "Nā nadyāḥ",
      commentary: "Before 'nā' (I.sg), nadī-type feminines lengthen.",
      keyTerms: ["nA", "nadI"],
    },
    {
      sutraId: "7.1.75",
      title: "Asthi dadhi sakthyakṣṇām anaṅ udāttaḥ",
      commentary: "Special neuter i-stems (asthi, dadhi) take 'an' in certain forms.",
      keyTerms: ["asTi", "daDi", "anaD"],
    },
  ],
};

export const subantaConsonantStemsPath: LearningPath = {
  id: "subanta-consonant-stems",
  title: "Consonant Stem Declension",
  titleSanskrit: "हलन्तम्",
  description: "Decline consonant-ending stems - the complex patterns of stems ending in stops, nasals, and sibilants.",
  difficulty: "advanced",
  estimatedTime: "4 hours",
  prerequisites: ["subanta-i-u-stems"],
  steps: [
    {
      sutraId: "8.2.23",
      title: "Saṁyogāntasya lopaḥ",
      commentary: "Final consonant of a cluster is deleted at word-end. \"marut\" not \"*marutt.\"",
      keyTerms: ["saMyoga", "anta", "lopa"],
    },
    {
      sutraId: "8.4.56",
      title: "Vaś catur śvas tryadasaḥ",
      commentary: "Specific consonant-stem words have irregular nominative singulars.",
      keyTerms: ["vas", "catur", "śvas"],
    },
    {
      sutraId: "8.2.62",
      title: "Kvau padāntat",
      commentary: "Word-final consonants before 'k' (pause) undergo specific changes.",
      keyTerms: ["ku", "au", "padAnta"],
    },
    {
      sutraId: "7.1.70",
      title: "Ugidañchaṁ sarvanāmasthāne",
      commentary: "Stems marked 'u' and 'añc'-type take 'num' in strong cases.",
      keyTerms: ["ugit", "aJc", "sarvanAmasTAna"],
    },
    {
      sutraId: "6.4.8",
      title: "Sarvanāmasthāne cāsamprasāraṇam",
      commentary: "In strong cases, certain stems don't undergo samprasāraṇa.",
      keyTerms: ["sarvanAmasTAna", "asamprasAraNa"],
    },
    {
      sutraId: "7.1.86",
      title: "Ito'tpadādiguṇa",
      commentary: "Stems ending in 'i' before pada-endings take guna in strong cases.",
      keyTerms: ["it", "pada", "guRa"],
    },
    {
      sutraId: "7.1.88",
      title: "Bhayoḥ",
      commentary: "Before 'bhis' and 'os' endings, stems show specific changes.",
      keyTerms: ["Bi", "os", "at"],
    },
    {
      sutraId: "7.1.89",
      title: "Puṁliṅgasyāṇinī...",
      commentary: "Masculine stems with 'aṇin' suffix have special declension.",
      keyTerms: ["puMliNga", "aRinI"],
    },
    {
      sutraId: "8.2.7",
      title: "Nalopaḥ supsvarasaṁjñātuṅvidhibhyo bahulam",
      commentary: "The 'n' of stems may be deleted before certain sup endings.",
      keyTerms: ["na", "lopa", "sup"],
    },
    {
      sutraId: "6.4.14",
      title: "Atastvā diti cānyatarasyām",
      commentary: "Before 'tvā' and similar, at-stems have optional forms.",
      keyTerms: ["at", "tvA"],
    },
    {
      sutraId: "8.2.30",
      title: "Coḥ kuḥ",
      commentary: "Word-final palatals become velars. \"vāc\" → \"vāk.\"",
      keyTerms: ["cu", "ku", "pada"],
    },
    {
      sutraId: "8.4.55",
      title: "Khari ca",
      commentary: "Before voiceless consonants, sandhi changes apply at word junction.",
      keyTerms: ["Kar", "pada"],
    },
  ],
};

export const karakaIntroPath: LearningPath = {
  id: "karaka-intro",
  title: "Karaka - Semantic Roles",
  titleSanskrit: "कारकप्रकरणम्",
  description: "Understand the six karakas - the semantic roles that link nouns to verbal action. Foundation of Sanskrit case syntax.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "1.4.23",
      title: "Kārakaṁ karoti yaḥ",
      commentary: "A karaka is that which brings about (karoti) the action. The participant roles in verbal action.",
      keyTerms: ["kAraka", "karoti"],
    },
    {
      sutraId: "1.4.24",
      title: "Dhruvam apāye'pādānam",
      commentary: "Apādāna (source/ablative) is the fixed point from which separation occurs. \"grāmāt āgacchati.\"",
      keyTerms: ["Druva", "apAya", "apAdAna"],
    },
    {
      sutraId: "1.4.32",
      title: "Karmaṇā yam abhipraiti sa sampradānam",
      commentary: "Sampradāna (recipient/dative) is that which the agent intends to reach through the action. \"bālakāya dadāti.\"",
      keyTerms: ["karma", "aBipraiti", "sampradAna"],
    },
    {
      sutraId: "1.4.42",
      title: "Sādhakatamaṁ karaṇam",
      commentary: "Karaṇa (instrument) is the most effective means of accomplishing the action. \"daṇḍena hanti.\"",
      keyTerms: ["sADakatamam", "karaNa"],
    },
    {
      sutraId: "1.4.45",
      title: "Ādhāro'dhikaraṇam",
      commentary: "Adhikaraṇa (locus/locative) is the location or support of the action. \"ghare tiṣṭhati.\"",
      keyTerms: ["ADAra", "aDikaraNa"],
    },
    {
      sutraId: "1.4.49",
      title: "Karturīpsitatamaṁ karma",
      commentary: "Karma (object) is what the agent most desires to attain through the action. \"grāmaṁ gacchati.\"",
      keyTerms: ["kartF", "Ipsitatamam", "karma"],
    },
    {
      sutraId: "1.4.54",
      title: "Svatantraḥ kartā",
      commentary: "Kartṛ (agent) is the independent actor. The one who controls the action.",
      keyTerms: ["svatantra", "kartF"],
    },
    {
      sutraId: "2.3.1",
      title: "Anabhihite",
      commentary: "Vibhaktis (case endings) express karakas when not already expressed by the verb.",
      keyTerms: ["anaBihite", "kAraka"],
    },
    {
      sutraId: "2.3.2",
      title: "Karmapravacanīyayukte dvitīyā",
      commentary: "The second case (accusative) is used with karmapravacanīya (certain particles).",
      keyTerms: ["karmapravacanIya", "dvitIyA"],
    },
    {
      sutraId: "2.3.18",
      title: "Kartṛkaraṇayos tṛtīyā",
      commentary: "The third case (instrumental) expresses kartṛ (in passive) and karaṇa (means).",
      keyTerms: ["kartF", "karaNa", "tFtIyA"],
    },
    {
      sutraId: "2.3.28",
      title: "Apādāne pañcamī",
      commentary: "The fifth case (ablative) expresses apādāna (source of separation).",
      keyTerms: ["apAdAna", "paJcamI"],
    },
    {
      sutraId: "2.3.36",
      title: "Ṣaṣṭhī śeṣe",
      commentary: "The sixth case (genitive) expresses remaining relations not covered by other cases.",
      keyTerms: ["zazWI", "Seze"],
    },
  ],
};

export const samasaIntroPath: LearningPath = {
  id: "samasa-intro",
  title: "Samasa - Compound Formation",
  titleSanskrit: "समासप्रकरणम्",
  description: "Learn the four main types of Sanskrit compounds. How words combine to form new semantic units.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["karaka-intro"],
  steps: [
    {
      sutraId: "2.1.4",
      title: "Saha supā",
      commentary: "A compound (samāsa) is formed when words come together with (saha) case endings.",
      keyTerms: ["saha", "sup", "samAsa"],
    },
    {
      sutraId: "2.1.6",
      title: "Avyayībhāvaḥ",
      commentary: "Avyayībhāva - indeclinable compound. First member is an avyaya, compound is neuter singular.",
      keyTerms: ["avyayIBAva"],
    },
    {
      sutraId: "2.1.22",
      title: "Tatpuruṣaḥ",
      commentary: "Tatpuruṣa - determinative compound. Second member is primary, first qualifies it.",
      keyTerms: ["tatpuruza"],
    },
    {
      sutraId: "2.1.23",
      title: "Vibhāṣā",
      commentary: "Compounding is often optional (vibhāṣā). Same meaning can be expressed analytically.",
      keyTerms: ["viBAzA", "samAsa"],
    },
    {
      sutraId: "2.2.6",
      title: "Nañ",
      commentary: "The negative particle 'na' (nañ) forms tatpuruṣa compounds. \"abrāhmaṇa\" = non-brahmin.",
      keyTerms: ["naJ", "tatpuruza"],
    },
    {
      sutraId: "2.2.24",
      title: "Anekam anyapadārthe",
      commentary: "Bahuvrīhi - possessive compound. Multiple words describe something external. \"bahuvrīhi\" = having much rice.",
      keyTerms: ["aneka", "anyapadArTe", "bahuvIhi"],
    },
    {
      sutraId: "2.2.29",
      title: "Cārthe dvandvaḥ",
      commentary: "Dvandva - copulative compound. Members connected by 'and'. \"rāmalakṣmaṇau\" = Rama and Lakshmana.",
      keyTerms: ["ca", "arTe", "dvandva"],
    },
    {
      sutraId: "2.1.57",
      title: "Viśeṣaṇaṁ viśeṣyeṇa bahulam",
      commentary: "Karmadhāraya - descriptive compound. Members in same case, qualifying relation.",
      keyTerms: ["vizezaRa", "vizezya", "karmaDAra"],
    },
    {
      sutraId: "2.1.61",
      title: "Saṁkhyāpūrvo dviguh",
      commentary: "Dvigu - numeral compound. Number as first member. \"pañcagava\" = five cows.",
      keyTerms: ["saNKyA", "pUrva", "dvigu"],
    },
    {
      sutraId: "6.1.223",
      title: "Asamāse",
      commentary: "Outside compounds, accent behaves differently. Compound accent rules are special.",
      keyTerms: ["asamAse", "udAtta"],
    },
    {
      sutraId: "6.2.1",
      title: "Bahuvīhau prakṛtyā pūrvapadam",
      commentary: "In bahuvrīhi, the first member retains its original form. Preservation rule.",
      keyTerms: ["bahuvIhi", "pUrvapadam"],
    },
    {
      sutraId: "2.4.71",
      title: "Supo dhātuprātipadikayoḥ",
      commentary: "Case endings are deleted when forming compounds. \"rāja + putra → rājaputra.\"",
      keyTerms: ["sup", "DAtu", "lopa"],
    },
  ],
};

export const sandhiVowelPath: LearningPath = {
  id: "sandhi-vowel",
  title: "Vowel Sandhi (Ac Sandhi)",
  titleSanskrit: "अच्सन्धिः",
  description: "Master the rules of vowel combination. When vowels meet at word boundaries or within words, these rules apply.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "6.1.101",
      title: "Akaḥ savarṇe dīrghaḥ",
      commentary: "When a simple vowel (a, i, u, ṛ, ḷ) meets its homogeneous (savarṇa) vowel, they merge into one long vowel. \"na + asti = nāsti.\"",
      keyTerms: ["ak", "savarRa", "dIrGa"],
    },
    {
      sutraId: "6.1.77",
      title: "Iko yaṇ aci",
      commentary: "Before any vowel, i→y, u→v, ṛ→r, ḷ→l. The semivowel substitution. \"iti + api = ity api.\"",
      keyTerms: ["ik", "yaN", "ac"],
    },
    {
      sutraId: "6.1.78",
      title: "Eco'yavāyāvaḥ",
      commentary: "The diphthongs e, o, ai, au split before vowels: e→ay, o→av, ai→āy, au→āv. \"ne + ana = nayana.\"",
      keyTerms: ["ec", "ayavAyAva"],
    },
    {
      sutraId: "6.1.87",
      title: "Ād guṇaḥ",
      commentary: "After 'a/ā', the vowels i/ī, u/ū, ṛ/ṝ become e, o, ar (guna). \"na + īśa = neśa.\"",
      keyTerms: ["At", "guRa"],
    },
    {
      sutraId: "6.1.88",
      title: "Vṛddhir eci",
      commentary: "After 'a/ā', the diphthongs e, o, ai, au become ai, au (vṛddhi). \"mahā + aiśvarya = mahaiśvarya.\"",
      keyTerms: ["vFddi", "ec"],
    },
    {
      sutraId: "6.1.109",
      title: "Eṅaḥ padāntād ati",
      commentary: "Word-final 'e' or 'o' before 'a' - the 'a' is elided. \"te + api = te'pi.\"",
      keyTerms: ["eN", "padAnta", "at"],
    },
    {
      sutraId: "6.1.94",
      title: "Antagranthamāsah...",
      commentary: "Certain dual endings (ī, ū, e) are pragṛhya - they don't undergo sandhi.",
      keyTerms: ["anta", "at", "pragFhya"],
    },
    {
      sutraId: "6.1.128",
      title: "Ṛte ca tṛtīyāsamāse",
      commentary: "Exception: 'ṛte' (without) doesn't take sandhi in certain compounds.",
      keyTerms: ["Fte", "tFtIyA", "samAsa"],
    },
    {
      sutraId: "8.3.19",
      title: "Lopodasyorvaḥ",
      commentary: "When a visarga (from 's') follows 'a' and precedes a voiced sound, special rules apply.",
      keyTerms: ["lopa", "o", "ru"],
    },
    {
      sutraId: "6.1.127",
      title: "Iko'savarṇe śākalyasya hrasvaś ca",
      commentary: "Before dissimilar vowels, optional shortening may occur (per Śākalya).",
      keyTerms: ["ik", "asavarRe", "hrasva"],
    },
  ],
};

export const sandhiVisargaPath: LearningPath = {
  id: "sandhi-visarga",
  title: "Visarga Sandhi",
  titleSanskrit: "विसर्गसन्धिः",
  description: "Learn the complex rules governing visarga (ḥ). How final -s and -r transform at word junctions.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["sandhi-vowel"],
  steps: [
    {
      sutraId: "8.3.15",
      title: "Kharavasānayoḥ visarjanīyaḥ",
      commentary: "Before voiceless consonants or pause, 's' and 'r' become visarga. \"rāmas + tiṣṭhati = rāmaḥ tiṣṭhati.\"",
      keyTerms: ["Kar", "avasAna", "visarjanIya"],
    },
    {
      sutraId: "8.3.17",
      title: "Bhobhagoaghoapūrvasya yo'śi",
      commentary: "Before voiced consonants, visarga from 'as/aḥ' becomes 'o'. \"rāmaḥ + gacchati = rāmo gacchati.\"",
      keyTerms: ["Bo", "yo", "aSi"],
    },
    {
      sutraId: "8.3.22",
      title: "Hasi ca",
      commentary: "Before 'h', special sandhi applies. The visarga assimilates.",
      keyTerms: ["ha", "visarga"],
    },
    {
      sutraId: "8.3.34",
      title: "Visarjanīyasya saḥ",
      commentary: "Visarga before 's' becomes 's'. \"rāmaḥ + sevate = rāmas sevate.\"",
      keyTerms: ["visarjanIya", "sa"],
    },
    {
      sutraId: "8.2.66",
      title: "Sasajuṣo ruḥ",
      commentary: "Final 's' (in certain environments) becomes 'ru'. Intermediate stage.",
      keyTerms: ["sas", "ru"],
    },
    {
      sutraId: "8.3.36",
      title: "Vā śari",
      commentary: "Before 'ś' (sibilants), visarga optionally becomes 'ś'. \"rāmaḥ + śete = rāmaś śete.\"",
      keyTerms: ["vA", "Sari", "visarga"],
    },
    {
      sutraId: "6.1.114",
      title: "Hrasvād dhaṁsi ca",
      commentary: "After short vowels, before 'dh', special treatment of visarga.",
      keyTerms: ["hrasva", "Dasi"],
    },
    {
      sutraId: "8.3.23",
      title: "Mo'nusvāraḥ",
      commentary: "Final 'm' before consonants becomes anusvāra (ṁ). Related to visarga system.",
      keyTerms: ["ma", "anusvAra"],
    },
    {
      sutraId: "8.3.4",
      title: "Anunāsikāt paro'nusvāraḥ",
      commentary: "After nasals, anusvāra may appear. Nasal+visarga interactions.",
      keyTerms: ["anunAsika", "anusvAra"],
    },
    {
      sutraId: "8.3.19",
      title: "Lopo'dasyorvaḥ",
      commentary: "The 'u' of 'ru' (from visarga) is deleted before voiced sounds.",
      keyTerms: ["lopa", "as", "ru"],
    },
  ],
};

export const sandhiConsonantPath: LearningPath = {
  id: "sandhi-consonant",
  title: "Consonant Sandhi (Hal Sandhi)",
  titleSanskrit: "हल्सन्धिः",
  description: "Master consonant junction rules. How stops, nasals, and other consonants interact at boundaries.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["sandhi-vowel"],
  steps: [
    {
      sutraId: "8.4.40",
      title: "Stoḥ ścunā ścuḥ",
      commentary: "Before palatals (c, ch, j, jh, ñ), dentals become palatals. \"sat + cit = saccit.\"",
      keyTerms: ["stu", "Scu", "Scu"],
    },
    {
      sutraId: "8.4.41",
      title: "Ṣṭunā ṣṭuḥ",
      commentary: "Before retroflexes (ṭ, ṭh, ḍ, ḍh, ṇ), dentals become retroflexes. \"tat + ṭīkā = taṭṭīkā.\"",
      keyTerms: ["ztu", "ztu"],
    },
    {
      sutraId: "8.4.53",
      title: "Jhalāṁ jaś jhaśi",
      commentary: "Before voiced non-aspirates, stops voice. \"vāk + ghāta = vāg ghāta.\"",
      keyTerms: ["Jal", "jaS", "JaS"],
    },
    {
      sutraId: "8.4.54",
      title: "Abhyāse car ca",
      commentary: "In reduplication, voiced aspirates become voiced non-aspirates.",
      keyTerms: ["aBvyAsa", "car"],
    },
    {
      sutraId: "8.4.55",
      title: "Khari ca",
      commentary: "Before voiceless sounds, voiced stops become voiceless. \"vāg + ca = vāk ca.\"",
      keyTerms: ["Kar"],
    },
    {
      sutraId: "8.2.30",
      title: "Coḥ kuḥ",
      commentary: "Word-final palatals (c, j) become velars (k, g). \"vāc → vāk.\"",
      keyTerms: ["cu", "ku", "pada"],
    },
    {
      sutraId: "8.2.39",
      title: "Jhalaṁ jaśo'nte",
      commentary: "Word-finally, aspirated stops lose aspiration. \"labh → lab (→ lap before voiceless).\"",
      keyTerms: ["Jal", "jaS", "ante"],
    },
    {
      sutraId: "8.4.45",
      title: "Yaro'nunāsike'nunāsiko vā",
      commentary: "Before nasals, stops optionally become nasal. \"vāk + mātram = vāṅ mātram.\"",
      keyTerms: ["yar", "anunAsika", "vA"],
    },
    {
      sutraId: "8.3.23",
      title: "Mo'nusvāraḥ",
      commentary: "Final 'm' becomes anusvāra before consonants. \"phalam + karoti = phalaṁ karoti.\"",
      keyTerms: ["ma", "anusvAra"],
    },
    {
      sutraId: "8.4.58",
      title: "Anusvārasya yayi parasavarṇaḥ",
      commentary: "Anusvāra before stops becomes homorganic nasal. \"saṁkhyā = saṅkhyā.\"",
      keyTerms: ["anusvAra", "yay", "parasavarRa"],
    },
    {
      sutraId: "8.4.2",
      title: "Aṭkupvāṅnumyāccalācāṁ pratyaye",
      commentary: "'N' becomes retroflex 'ṇ' after r/ṣ with intervening aṭ-sounds. Ṇatva rule.",
      keyTerms: ["aT", "Nit", "pratyaya"],
    },
  ],
};

export const tingantaLrtPath: LearningPath = {
  id: "tinganta-lrt",
  title: "Simple Future (Lrt Lakara)",
  titleSanskrit: "लृट्लकारः",
  description: "Derive simple future tense forms. This is the first ardhadhatuka lakara - note the different vikarana and ending patterns.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.3.13",
      title: "Lṛṭ śeṣe ca",
      commentary: "The suffix 'lṛṭ' expresses future action (bhaviṣyan). This is the simple future tense.",
      keyTerms: ["lFT", "Bavizyan"],
    },
    {
      sutraId: "3.1.33",
      title: "Syatāsī lṛluṭoḥ",
      commentary: "The vikaranas 'sya' (P) and 'tāsī' (Ā) are added after the dhatu in lṛṭ. These create the characteristic future forms.",
      keyTerms: ["sya", "tAsI", "lFT"],
    },
    {
      sutraId: "7.2.10",
      title: "Ekahalmadhye...",
      commentary: "The augment 'iṭ' is inserted before 'sya' when the dhatu has a single consonant between vowels. Affects form: kar + iṭ + sya → kariṣya.",
      keyTerms: ["ekahalmadhye", "iT"],
    },
    {
      sutraId: "1.2.4",
      title: "Sārvadhātukam apit",
      commentary: "A sārvadhātuka affix not marked with 'p' (pit) is treated as if marked with 'ṅ'. Affects accent and operations.",
      keyTerms: ["sArvaDAtukaH", "apit", "NidAgama"],
    },
    {
      sutraId: "3.4.77",
      title: "Lasya tiptas...",
      commentary: "The 'l' of lakāras is replaced by tiṅ endings. Same mechanism as present tense.",
      keyTerms: ["lasya", "tip", "Adesha"],
    },
    {
      sutraId: "8.4.1",
      title: "Raṣābhyāṁ no ṇaḥ",
      commentary: "After 'r' or 'ṣ', 'n' becomes 'ṇ' (retroflexion). Applies to future forms like kariṣyanti.",
      keyTerms: ["ra", "za", "Ra"],
    },
    {
      sutraId: "7.2.35",
      title: "Ārdhadhātukasyeḍ valādeḥ",
      commentary: "The augment 'iṭ' is added before an ārdhadhātuka suffix beginning with a consonant cluster. Key for future formation.",
      keyTerms: ["ArDaDAtukaH", "iT", "valAdeH"],
    },
    {
      sutraId: "6.4.62",
      title: "Syatāsyorakāraḥ",
      commentary: "Specific rules for the 'a' in 'sya' and 'tāsī' vikaranas. Governs vowel quality in future.",
      keyTerms: ["sya", "tAsi", "akAraH"],
    },
  ],
};

export const tingantaLrngPath: LearningPath = {
  id: "tinganta-lrng",
  title: "Conditional (Lrng Lakara)",
  titleSanskrit: "लृङ्लकारः",
  description: "Derive conditional mood forms expressing \"would have\" - unrealized conditions and hypotheticals.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lrt", "tinganta-lang"],
  steps: [
    {
      sutraId: "3.3.139",
      title: "Liṅ nimitte ca",
      commentary: "The conditional 'lṛṅ' expresses action that would occur given a condition. Counterfactual mood.",
      keyTerms: ["liN", "nimitte", "lFN"],
    },
    {
      sutraId: "3.3.140",
      title: "Bhūte ca",
      commentary: "When the unrealized condition is in the past, lṛṅ expresses \"would have been.\"",
      keyTerms: ["BUte", "lFN"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlṛṅṣv aḍ udāttaḥ",
      commentary: "The augment 'aṭ' is prefixed in lṛṅ, just like laṅ and luṅ. Past-referring marker.",
      keyTerms: ["aT", "lFN"],
    },
    {
      sutraId: "3.1.33",
      title: "Syatāsī lṛluṭoḥ",
      commentary: "The vikarana 'sya' (future marker) is added in lṛṅ. Combines future and past markers.",
      keyTerms: ["sya", "lFN"],
    },
    {
      sutraId: "3.4.81",
      title: "Liṅāśiṣi...",
      commentary: "The standard tiṅ endings are used, then modified for lṛṅ context.",
      keyTerms: ["lFN", "tiN"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅāśiṣi",
      commentary: "Augment rules similar to other liṅ contexts apply. Consistent treatment.",
      keyTerms: ["lFN", "iT"],
    },
    {
      sutraId: "2.4.85",
      title: "Luṭaḥ prathamasya",
      commentary: "First person forms have special treatment parallel to luṭ patterns.",
      keyTerms: ["lFN", "praTama"],
    },
    {
      sutraId: "6.4.62",
      title: "Syatāsyorakāraḥ",
      commentary: "The 'a' of 'sya' follows standard future rules in conditional too.",
      keyTerms: ["sya", "lFN"],
    },
  ],
};

export const kridantaKtvaPath: LearningPath = {
  id: "kridanta-ktva",
  title: "Absolutive (Ktva/Lyap)",
  titleSanskrit: "क्त्वान्तम्",
  description: "Derive absolutive forms (having done X). The ktva and lyap suffixes create indeclinable forms expressing prior action.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.4.21",
      title: "Samānakartṛkayoḥ pūrvakāle",
      commentary: "When two actions share the same agent and one precedes the other, ktva is used. \"Having eaten, he went.\"",
      keyTerms: ["samAnakartFka", "pUrvakAle", "ktvA"],
    },
    {
      sutraId: "3.4.18",
      title: "Alakṣaṇe lyap ca",
      commentary: "After a prefix (upasarga), 'lyap' (= ya) is used instead of ktva. \"pra-bhū + ya = prabhūya.\"",
      keyTerms: ["lyap", "upasarga"],
    },
    {
      sutraId: "1.1.40",
      title: "Ktvātosunkasunaḥ",
      commentary: "Forms ending in ktva are avyaya (indeclinable). They don't take case endings.",
      keyTerms: ["ktvA", "avyaya"],
    },
    {
      sutraId: "7.2.56",
      title: "Udito vā",
      commentary: "For roots marked with 'u' (udit), the augment 'iṭ' is optional before ktva. \"uktvā/ukitvā.\"",
      keyTerms: ["udit", "iT", "ktvA"],
    },
    {
      sutraId: "6.4.15",
      title: "Yasyeṭi ktvā",
      commentary: "When 'iṭ' is added, specific stem changes follow. Governs consonant behavior.",
      keyTerms: ["iT", "ktvA"],
    },
    {
      sutraId: "6.1.71",
      title: "Hrasvasya piti kṛti tuk",
      commentary: "Before a pit-marked kṛt suffix following a short vowel, 'tuk' (= t) is augmented.",
      keyTerms: ["hrasva", "pit", "tuk"],
    },
    {
      sutraId: "7.4.40",
      title: "Dyatisyatimāsthām...",
      commentary: "Roots dya, sya, māsthā have special treatment before ktva. Exception handling.",
      keyTerms: ["dyati", "syati", "ktvA"],
    },
    {
      sutraId: "8.4.17",
      title: "Nastaddhite",
      commentary: "The 'n' of a root becomes 'ṇ' in certain ktva formations. Retroflexion rule.",
      keyTerms: ["na", "tadDite", "Ra"],
    },
  ],
};

export const kridantaTumunPath: LearningPath = {
  id: "kridanta-tumun",
  title: "Infinitive (Tumun)",
  titleSanskrit: "तुमन्तम्",
  description: "Derive infinitive forms (to do X). The tumun suffix creates purpose expressions and complements.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.3.10",
      title: "Tumun ṇvulau kriyāyāṃ kriyārthāyām",
      commentary: "The suffix 'tumun' (= tum) expresses purpose - an action done for the sake of another action.",
      keyTerms: ["tumun", "kriyA", "kriyArTA"],
    },
    {
      sutraId: "3.4.65",
      title: "Śeṣātkartari parasmaipadam",
      commentary: "The infinitive is used when the agent of the main and subordinate verbs is the same.",
      keyTerms: ["tumun", "kartari"],
    },
    {
      sutraId: "1.1.40",
      title: "Ktvātosunkasunaḥ",
      commentary: "Like ktva, tumun forms are avyaya (indeclinable). They don't inflect.",
      keyTerms: ["tumun", "avyaya"],
    },
    {
      sutraId: "7.2.35",
      title: "Ārdhadhātukasyeḍ valādeḥ",
      commentary: "The augment 'iṭ' is added before tumun when it follows consonant-final roots. \"kartum, gantum.\"",
      keyTerms: ["ArDaDAtukaH", "iT"],
    },
    {
      sutraId: "6.4.66",
      title: "Ghumastvanas...",
      commentary: "Roots ending in 'ghu' (dā, dhā, etc.) have special treatment before tumun.",
      keyTerms: ["Gum", "tumun"],
    },
    {
      sutraId: "6.1.15",
      title: "Vacivapivayati...",
      commentary: "Roots vac, vap, etc. show samprasāraṇa (semivowel → vowel) before tumun.",
      keyTerms: ["vac", "vap", "tumun"],
    },
    {
      sutraId: "7.2.44",
      title: "Svaratisūtidhṛṅ...",
      commentary: "Certain roots have optional 'iṭ' before tumun. Creates doublets.",
      keyTerms: ["svara", "sU", "tumun"],
    },
    {
      sutraId: "7.3.84",
      title: "Sārvadhātukārdhadhātukayoḥ",
      commentary: "Guna applies to the root vowel before tumun (ārdhadhātuka). Core strengthening.",
      keyTerms: ["guRa", "tumun"],
    },
  ],
};

export const kridantaShatrShanacPath: LearningPath = {
  id: "kridanta-shatr-shanac",
  title: "Present Participles (Shatr/Shanac)",
  titleSanskrit: "शतृशानचौ",
  description: "Derive present active and middle participles. These verbal adjectives describe ongoing action.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.2.124",
      title: "Laṭaḥ śatṛśānacau",
      commentary: "In place of laṭ endings, 'śatṛ' (P) and 'śānac' (Ā) create present participles. \"bhavat\" (being).",
      keyTerms: ["laT", "SatF", "SAnac"],
    },
    {
      sutraId: "3.2.125",
      title: "Laṭo vartamāne",
      commentary: "These participles express ongoing action in present time. Active verbal adjectives.",
      keyTerms: ["laT", "vartamAne", "SatF"],
    },
    {
      sutraId: "1.4.99",
      title: "Laḥ parasmaipadam",
      commentary: "The suffix 'śatṛ' is used with parasmaipada verbs. Creates \"-at/-ant\" forms.",
      keyTerms: ["SatF", "parasmEpadam"],
    },
    {
      sutraId: "1.4.100",
      title: "Tañ ātmanepadam",
      commentary: "The suffix 'śānac' is used with ātmanepada verbs. Creates \"-māna\" forms.",
      keyTerms: ["SAnac", "Atmanepadam"],
    },
    {
      sutraId: "7.1.80",
      title: "Ata ātmanepadeyoḥ kaṇ",
      commentary: "After stems ending in 'a', śānac becomes '-māna'. Regular formation.",
      keyTerms: ["at", "Atmanepadam", "SAnac"],
    },
    {
      sutraId: "6.4.98",
      title: "Gamihanikhanyantebhyaḥ",
      commentary: "Roots gam, han, etc. have special treatment before śatṛ. Creates \"gacchat\" not \"*gamat\".",
      keyTerms: ["gam", "han", "SatF"],
    },
    {
      sutraId: "7.2.83",
      title: "Iditah...",
      commentary: "Roots marked with 'i' show specific changes before śatṛ. Affects root vowel.",
      keyTerms: ["idit", "SatF"],
    },
    {
      sutraId: "6.1.67",
      title: "Verāpṛkte",
      commentary: "The root 'vṛ' (to cover) has special participial forms when not prefixed.",
      keyTerms: ["vF", "apFkte", "SatF"],
    },
    {
      sutraId: "3.2.127",
      title: "Karmavat karmaṇā tulyakriyaḥ",
      commentary: "The śānac participle can express the sense of undergoing action (passive-like use).",
      keyTerms: ["karmavat", "SAnac"],
    },
    {
      sutraId: "1.2.1",
      title: "Gātisthāghaupābhūsya sārvadhātuke",
      commentary: "Śatṛ and śānac are sārvadhātuka, so guṇa applies. Root strengthening.",
      keyTerms: ["sArvaDAtukaH", "SatF"],
    },
  ],
};

export const kridantaKtaKtavatuPath: LearningPath = {
  id: "kridanta-kta-ktavatu",
  title: "Past Participles (Kta/Ktavatu)",
  titleSanskrit: "क्तक्तवतू",
  description: "Derive past passive participle (kta) and past active participle (ktavatu). Essential forms for describing completed actions.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.2.102",
      title: "Niṣṭhā",
      commentary: "The term 'niṣṭhā' covers both kta and ktavatu suffixes. Past participial forms.",
      keyTerms: ["nizWA", "kta", "ktavatu"],
    },
    {
      sutraId: "3.4.114",
      title: "Bhāve ktaḥ",
      commentary: "The suffix 'kta' primarily expresses bhāva (abstract action) or karma (object). \"kṛtam\" = done.",
      keyTerms: ["BAve", "kta"],
    },
    {
      sutraId: "3.4.72",
      title: "Kartuḥ ktavatu",
      commentary: "The suffix 'ktavatu' (= -tavat) expresses the agent of completed action. \"kṛtavān\" = one who did.",
      keyTerms: ["kartuH", "ktavatu"],
    },
    {
      sutraId: "7.2.14",
      title: "Ḍato'nityasya...",
      commentary: "The augment 'iṭ' is added before kta after certain roots. \"patitam, gatam.\"",
      keyTerms: ["Ta", "iT", "kta"],
    },
    {
      sutraId: "7.2.16",
      title: "Ato'dantād ḍaḥ",
      commentary: "After roots ending in 'at', the 'ṭ' of kta changes to 'ḍ'. Creates \"-na\" forms.",
      keyTerms: ["at", "Ta", "kta"],
    },
    {
      sutraId: "6.4.52",
      title: "Niṣṭhātasya na se",
      commentary: "In niṣṭhā, the 't' of certain roots becomes 'n'. \"glāna\" not \"*glāta\".",
      keyTerms: ["nizWA", "ta", "na"],
    },
    {
      sutraId: "8.2.42",
      title: "Ṛduraśi...",
      commentary: "After roots in 'ṛ/ṝ', kta becomes \"-ṛta\". Creates forms like \"kṛta, smṛta.\"",
      keyTerms: ["Ft", "uz", "kta"],
    },
    {
      sutraId: "7.2.24",
      title: "Arditah...",
      commentary: "Roots marked 'ardit' optionally take 'iṭ'. Allows variant forms.",
      keyTerms: ["ardit", "kta"],
    },
    {
      sutraId: "6.4.64",
      title: "Āto lopa iṭi ca",
      commentary: "Final 'ā' of a root is deleted when 'iṭ' follows. \"dā + i + ta = datta.\"",
      keyTerms: ["At", "lopa", "iT"],
    },
    {
      sutraId: "1.2.26",
      title: "Kartari ktaḥ",
      commentary: "Sometimes kta expresses kartr̥ (agent) sense in intransitive verbs. \"gataḥ\" = one who went.",
      keyTerms: ["kartari", "kta"],
    },
    {
      sutraId: "6.1.15",
      title: "Vacivapivadāṁ...",
      commentary: "Roots vac, vap show samprasāraṇa before kta. \"ukta, upta.\"",
      keyTerms: ["vac", "vap", "kta"],
    },
  ],
};

export const kridantaTavyaAniyaPath: LearningPath = {
  id: "kridanta-tavya-aniya",
  title: "Future Passive Participles (Tavya/Aniya/Ya)",
  titleSanskrit: "तव्यानीययाः",
  description: "Derive gerundives expressing necessity or obligation. \"To be done\" - essential for expressing duty and propriety.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.1.96",
      title: "Tavyattvyānīyaraḥ",
      commentary: "The suffixes tavya, tvya (= tya), and anīya express obligation or necessity. Gerundives.",
      keyTerms: ["tavya", "tvya", "anIya"],
    },
    {
      sutraId: "3.1.97",
      title: "Acaḥ kārtsye",
      commentary: "The suffix 'yat' (= ya) also creates gerundives, often with sense of completeness.",
      keyTerms: ["yat", "kArtsye"],
    },
    {
      sutraId: "3.4.68",
      title: "Bhāveṣu tavyadyāḥ",
      commentary: "These suffixes primarily express bhāva but agree with karma. \"kartavyam\" = to be done.",
      keyTerms: ["BAve", "tavya"],
    },
    {
      sutraId: "7.2.35",
      title: "Ārdhadhātukasyeḍ valādeḥ",
      commentary: "The augment 'iṭ' applies before tavya etc. when needed. \"kartitavya/kartavya.\"",
      keyTerms: ["ArDaDAtukaH", "iT", "tavya"],
    },
    {
      sutraId: "6.1.54",
      title: "Ḍyapo valādeḥ",
      commentary: "Before ya(t), specific sandhi rules apply. Affects consonant+ya junction.",
      keyTerms: ["yat", "valAdeH"],
    },
    {
      sutraId: "6.4.56",
      title: "Guptijuṣi...",
      commentary: "Roots gup, jus, etc. have special treatment before anīya.",
      keyTerms: ["gup", "anIya"],
    },
    {
      sutraId: "7.3.84",
      title: "Sārvadhātukārdhadhātukayoḥ",
      commentary: "Guna applies before these ārdhadhātuka suffixes. Root vowel strengthens.",
      keyTerms: ["guRa", "tavya"],
    },
    {
      sutraId: "6.1.48",
      title: "Eco'yavāyāvaḥ",
      commentary: "Diphthongs (e, o, ai, au) split before ya(t). \"ne + ya = nāya.\"",
      keyTerms: ["ec", "yat"],
    },
    {
      sutraId: "3.1.100",
      title: "Ṛhaloṣ ṭhak",
      commentary: "After roots ending in 'ṛ' or consonants, 'ṭhak' (= eya) is an alternative gerundive.",
      keyTerms: ["Tak", "FhaloH"],
    },
    {
      sutraId: "6.4.66",
      title: "Ghumascā...anīyareṣu",
      commentary: "Roots marked 'ghu' (dā, dhā) show special changes before anīya. \"deya, dheya.\"",
      keyTerms: ["Gum", "anIya"],
    },
  ],
};

export const learningPaths: LearningPath[] = [introductionPath, tingantaLatPath, tingantaLotPath, tingantaLangPath, tingantaVidhilingPath, dhatuGanasPath, tingantaLutPath, tingantaLitPath, tingantaLungPath, tingantaAshirlingPath, taddhitaMatupPath, taddhitaTvaTalPath, taddhitaAnIkaPath, subantaPratipadikaPath, subantaAStemsPath, subantaAaStemsPath, subantaIUStemsPath, subantaConsonantStemsPath, karakaIntroPath, samasaIntroPath, sandhiVowelPath, sandhiVisargaPath, sandhiConsonantPath, tingantaLrtPath, tingantaLrngPath, kridantaKtvaPath, kridantaTumunPath, kridantaShatrShanacPath, kridantaKtaKtavatuPath, kridantaTavyaAniyaPath];

export function getPath(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}

export function getAvailablePaths(completedPaths: string[]): LearningPath[] {
  return learningPaths.filter((path) =>
    path.prerequisites.every((prereq) => completedPaths.includes(prereq)),
  );
}
