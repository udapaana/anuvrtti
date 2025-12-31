/**
 * Sanskrit grammatical terminology (samjna) definitions
 * Used for the jargon lookup sidebar in learning paths
 */

export interface Term {
  term: string; // Devanagari
  termRoman: string; // IAST transliteration
  meaning: string; // English meaning
  sutraRef?: string; // Defining sutra if applicable
  category: TermCategory;
  related?: string[]; // Related terms (by termRoman)
}

export type TermCategory =
  | "samjna" // Technical names
  | "pratyahara" // Sound groups
  | "karaka" // Semantic roles
  | "vibhakti" // Case/inflection
  | "pratyaya" // Suffixes
  | "sandhi" // Sound combination
  | "lakara" // Tenses and moods
  | "gana" // Verb classes
  | "samasa" // Compounds
  | "general"; // General terms

export const terms: Term[] = [
  // Samjna - Technical names
  {
    term: "संज्ञा",
    termRoman: "saṃjñā",
    meaning:
      "Technical term or name. Panini defines many samjnas to create a precise metalanguage.",
    category: "samjna",
  },
  {
    term: "वृद्धि",
    termRoman: "vṛddhi",
    meaning:
      'The "strengthened" vowel grade: @[ā], @[ai], @[au]. Defined in 1.1.1.',
    sutraRef: "1.1.1",
    category: "samjna",
    related: ["guṇa"],
  },
  {
    term: "गुण",
    termRoman: "guṇa",
    meaning: 'The "medium" vowel grade: @[a], @[e], @[o]. Defined in 1.1.2.',
    sutraRef: "1.1.2",
    category: "samjna",
    related: ["vṛddhi"],
  },
  {
    term: "स्वर",
    termRoman: "svara",
    meaning: 'Vowel. Defined as the pratyahara "@[ac]" in 1.1.9.',
    sutraRef: "1.1.9",
    category: "samjna",
    related: ["vyañjana", "ac"],
  },
  {
    term: "व्यञ्जन",
    termRoman: "vyañjana",
    meaning: 'Consonant. Defined as the pratyahara "@[hal]" in 1.1.10.',
    sutraRef: "1.1.10",
    category: "samjna",
    related: ["svara", "hal"],
  },
  {
    term: "अन्तःस्थ",
    termRoman: "antaḥstha",
    meaning:
      "Semivowel, literally 'standing between' (vowels and consonants). The four sounds @deva[य], @deva[र], @deva[ल], @deva[व] (y, r, l, v).",
    category: "samjna",
    related: ["vyañjana", "yaṇ"],
  },
  {
    term: "ऊष्मन्",
    termRoman: "ūṣman",
    meaning:
      "Sibilant/fricative, literally 'heat'. The sounds @deva[श], @deva[ष], @deva[स], @deva[ह] (ś, ṣ, s, h).",
    category: "samjna",
    related: ["vyañjana"],
  },
  {
    term: "अनुस्वार",
    termRoman: "anusvāra",
    meaning:
      "The nasal sound @deva[ं] written as a dot above the line. Represents nasalization of the preceding vowel.",
    category: "samjna",
    related: ["visarga"],
  },
  {
    term: "सवर्ण",
    termRoman: "savarṇa",
    meaning: "Homogeneous sounds - same place and effort of articulation.",
    sutraRef: "1.1.9",
    category: "samjna",
  },
  {
    term: "आस्य",
    termRoman: "āsya",
    meaning:
      "Mouth; place of articulation (स्थान). Used in defining homogeneous sounds.",
    category: "phonetics",
  },
  {
    term: "प्रयत्न",
    termRoman: "prayatna",
    meaning:
      "Articulatory effort. Internal (आभ्यन्तर) and external (बाह्य) efforts define sound production.",
    category: "phonetics",
  },
  {
    term: "इत्",
    termRoman: "it",
    meaning:
      "Marker letter (anubandha) that indicates grammatical properties but is deleted.",
    sutraRef: "1.3.2",
    category: "samjna",
    related: ["anubandha"],
  },
  {
    term: "अनुबन्ध",
    termRoman: "anubandha",
    meaning: 'Same as "it" - a marker letter attached to grammatical elements.',
    category: "samjna",
    related: ["it"],
  },
  {
    term: "लोप",
    termRoman: "lopa",
    meaning: "Deletion or elision. Markers undergo lopa (1.3.9).",
    sutraRef: "1.3.9",
    category: "samjna",
  },
  {
    term: "आदेश",
    termRoman: "ādeśa",
    meaning: "Substitution or replacement. One element replacing another.",
    category: "samjna",
    related: ["sthānin"],
  },
  {
    term: "स्थानिन्",
    termRoman: "sthānin",
    meaning: "The original element that gets replaced (by an ādeśa).",
    category: "samjna",
    related: ["ādeśa"],
  },
  {
    term: "प्रकृति",
    termRoman: "prakṛti",
    meaning: "Base or stem to which affixes are added.",
    category: "samjna",
    related: ["pratyaya"],
  },
  {
    term: "धातु",
    termRoman: "dhātu",
    meaning: "Verbal root. The base form of verbs listed in the Dhatupatha.",
    category: "samjna",
    related: ["prakṛti", "prātipadika"],
  },
  {
    term: "प्रातिपदिक",
    termRoman: "prātipadika",
    meaning: "Nominal stem - a meaningful base that takes case endings.",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "पद",
    termRoman: "pada",
    meaning: "Word - a complete inflected form ending in sup or tiṅ.",
    category: "samjna",
  },
  {
    term: "संहिता",
    termRoman: "saṃhitā",
    meaning: "Close proximity of sounds - the domain where sandhi applies.",
    sutraRef: "1.4.109",
    category: "samjna",
  },
  {
    term: "अधिकार",
    termRoman: "adhikāra",
    meaning: "Governing rule whose scope extends over subsequent sutras.",
    category: "samjna",
  },
  {
    term: "अनुवृत्ति",
    termRoman: "anuvṛtti",
    meaning: "Continuation - when a term from a prior sutra carries forward.",
    category: "samjna",
  },
  {
    term: "परिभाषा",
    termRoman: "paribhāṣā",
    meaning: "Interpretive rule that governs how other rules are applied.",
    category: "samjna",
  },
  {
    term: "विधि",
    termRoman: "vidhi",
    meaning: "Operational rule that prescribes a grammatical operation.",
    category: "samjna",
  },

  // Pratyahara
  {
    term: "प्रत्याहार",
    termRoman: "pratyāhāra",
    meaning: "A shorthand notation for sound groups using the Shiva Sutras.",
    category: "pratyahara",
  },
  {
    term: "अच्",
    termRoman: "ac",
    meaning:
      "All vowels: @[a], @[i], @[u], @[ṛ], @[ḷ], @[e], @[o], @[ai], @[au].",
    category: "pratyahara",
  },
  {
    term: "हल्",
    termRoman: "hal",
    meaning: "All consonants.",
    category: "pratyahara",
  },
  {
    term: "अण्",
    termRoman: "aṇ",
    meaning: "Simple vowels: @[a], @[i], @[u].",
    category: "pratyahara",
  },
  {
    term: "इक्",
    termRoman: "ik",
    meaning: "The vowels i, u, ṛ, ḷ - those that become semivowels.",
    category: "pratyahara",
    related: ["yaṇ"],
  },
  {
    term: "यण्",
    termRoman: "yaṇ",
    meaning: "Semivowels: @[y], @[v], @[r], @[l].",
    category: "pratyahara",
    related: ["ik"],
  },
  {
    term: "एच्",
    termRoman: "ec",
    meaning: "Diphthongs: @[e], @[o], @[ai], @[au].",
    category: "pratyahara",
  },

  // Karaka
  {
    term: "कारक",
    termRoman: "kāraka",
    meaning:
      "Semantic role - the relation between a noun and the verbal action.",
    category: "karaka",
  },
  {
    term: "कर्तृ",
    termRoman: "kartṛ",
    meaning: "Agent - the independent doer of the action.",
    sutraRef: "1.4.54",
    category: "karaka",
  },
  {
    term: "कर्मन्",
    termRoman: "karman",
    meaning:
      "Object - what the agent most desires to attain through the action.",
    sutraRef: "1.4.49",
    category: "karaka",
  },
  {
    term: "करण",
    termRoman: "karaṇa",
    meaning:
      "Instrument - the most effective means of accomplishing the action.",
    sutraRef: "1.4.42",
    category: "karaka",
  },
  {
    term: "सम्प्रदान",
    termRoman: "sampradāna",
    meaning: "Recipient - the one for whom the action is intended.",
    sutraRef: "1.4.32",
    category: "karaka",
  },
  {
    term: "अपादान",
    termRoman: "apādāna",
    meaning: "Source - the fixed point from which movement occurs.",
    sutraRef: "1.4.24",
    category: "karaka",
  },
  {
    term: "अधिकरण",
    termRoman: "adhikaraṇa",
    meaning: "Locus - the location or support of the action.",
    sutraRef: "1.4.45",
    category: "karaka",
  },

  // Vibhakti
  {
    term: "विभक्ति",
    termRoman: "vibhakti",
    meaning: "Inflectional ending - case endings (sup) or verb endings (tiṅ).",
    sutraRef: "1.4.104",
    category: "vibhakti",
  },
  {
    term: "प्रथमा",
    termRoman: "prathamā",
    meaning: "First case (nominative) - used for the subject or naming.",
    category: "vibhakti",
  },
  {
    term: "द्वितीया",
    termRoman: "dvitīyā",
    meaning: "Second case (accusative) - used for the direct object.",
    category: "vibhakti",
  },
  {
    term: "तृतीया",
    termRoman: "tṛtīyā",
    meaning:
      "Third case (instrumental) - used for the instrument or agent in passive.",
    category: "vibhakti",
  },
  {
    term: "चतुर्थी",
    termRoman: "caturthī",
    meaning: "Fourth case (dative) - used for the recipient or purpose.",
    category: "vibhakti",
  },
  {
    term: "पञ्चमी",
    termRoman: "pañcamī",
    meaning: "Fifth case (ablative) - used for source or comparison.",
    category: "vibhakti",
  },
  {
    term: "षष्ठी",
    termRoman: "ṣaṣṭhī",
    meaning: "Sixth case (genitive) - used for possession or relation.",
    category: "vibhakti",
  },
  {
    term: "सप्तमी",
    termRoman: "saptamī",
    meaning: "Seventh case (locative) - used for location in space or time.",
    category: "vibhakti",
  },

  // Pratyaya
  {
    term: "प्रत्यय",
    termRoman: "pratyaya",
    meaning: "Suffix or affix added after a base.",
    sutraRef: "3.1.1",
    category: "pratyaya",
  },
  {
    term: "सुप्",
    termRoman: "sup",
    meaning: "Nominal case endings (21 total: 7 cases × 3 numbers).",
    category: "pratyaya",
  },
  {
    term: "तिङ्",
    termRoman: "tiṅ",
    meaning:
      "Verbal personal endings (18 total: 3 persons × 3 numbers × 2 padas).",
    category: "pratyaya",
  },
  {
    term: "कृत्",
    termRoman: "kṛt",
    meaning: "Primary suffix added directly to a verbal root.",
    category: "pratyaya",
  },
  {
    term: "तद्धित",
    termRoman: "taddhita",
    meaning: "Secondary suffix added to a nominal stem.",
    category: "pratyaya",
  },

  // Sandhi
  {
    term: "सन्धि",
    termRoman: "sandhi",
    meaning: "Junction - sound changes when morphemes or words combine.",
    category: "sandhi",
  },
  {
    term: "दीर्घ",
    termRoman: "dīrgha",
    meaning: "Long (vowel) - the lengthened version of a vowel.",
    category: "sandhi",
  },
  {
    term: "ह्रस्व",
    termRoman: "hrasva",
    meaning: "Short (vowel) - the basic short vowel.",
    category: "sandhi",
  },
  {
    term: "प्लुत",
    termRoman: "pluta",
    meaning: "Prolated (vowel) - extra-long, used in calling.",
    category: "sandhi",
  },

  // Lakara - Tenses and Moods
  {
    term: "लकार",
    termRoman: "lakāra",
    meaning:
      "Tense-mood marker. The 10 lakaras indicate tense, mood, and aspect of verbs.",
    category: "lakara",
  },
  {
    term: "लट्",
    termRoman: "laṭ",
    meaning: "Present tense (vartamāna). Used for ongoing or habitual actions.",
    sutraRef: "3.2.123",
    category: "lakara",
  },
  {
    term: "लङ्",
    termRoman: "laṅ",
    meaning: "Imperfect (anadyatana-bhūta). Past tense not of today.",
    sutraRef: "3.2.111",
    category: "lakara",
  },
  {
    term: "लोट्",
    termRoman: "loṭ",
    meaning: "Imperative mood. Used for commands, requests, and blessings.",
    sutraRef: "3.3.162",
    category: "lakara",
  },
  {
    term: "लिङ्",
    termRoman: "liṅ",
    meaning:
      "Optative/potential mood. Has two forms: @[vidhiliṅ] (prescription) and @[āśīrliṅ] (benediction).",
    sutraRef: "3.3.161",
    category: "lakara",
  },
  {
    term: "लिट्",
    termRoman: "liṭ",
    meaning: "Perfect tense (parokṣa-bhūta). Past not witnessed by speaker.",
    sutraRef: "3.2.115",
    category: "lakara",
  },
  {
    term: "लुट्",
    termRoman: "luṭ",
    meaning: "Periphrastic future. Future not of today.",
    sutraRef: "3.3.15",
    category: "lakara",
  },
  {
    term: "लृट्",
    termRoman: "lṛṭ",
    meaning: "Simple future. General future tense.",
    sutraRef: "3.3.13",
    category: "lakara",
  },
  {
    term: "लुङ्",
    termRoman: "luṅ",
    meaning: "Aorist (bhūta). General past tense.",
    sutraRef: "3.2.110",
    category: "lakara",
  },
  {
    term: "लृङ्",
    termRoman: "lṛṅ",
    meaning: "Conditional. Used for hypothetical conditions.",
    sutraRef: "3.3.139",
    category: "lakara",
  },
  {
    term: "लेट्",
    termRoman: "leṭ",
    meaning: "Vedic subjunctive. Found only in Vedic texts.",
    sutraRef: "3.4.7",
    category: "lakara",
  },
  {
    term: "भूत",
    termRoman: "bhūta",
    meaning: "Past time. Action already completed.",
    category: "lakara",
  },
  {
    term: "वर्तमान",
    termRoman: "vartamāna",
    meaning: "Present time. Action ongoing or habitual.",
    category: "lakara",
  },
  {
    term: "भविष्यत्",
    termRoman: "bhaviṣyat",
    meaning: "Future time. Action yet to occur.",
    category: "lakara",
  },

  // Gana - Verb Classes
  {
    term: "गण",
    termRoman: "gaṇa",
    meaning:
      "Verb class. The 10 classes determine how roots form their present stem.",
    category: "gana",
  },
  {
    term: "भ्वादि",
    termRoman: "bhvādi",
    meaning:
      "First class (class 1). Adds @[guṇa] and śap vikaraṇa. E.g., @[bhū] → @[bhavati].",
    category: "gana",
  },
  {
    term: "अदादि",
    termRoman: "adādi",
    meaning:
      "Second class (class 2). No vikaraṇa, root directly takes endings. E.g., @[ad] → @[atti].",
    category: "gana",
  },
  {
    term: "जुहोत्यादि",
    termRoman: "juhotyādi",
    meaning:
      "Third class (class 3). Reduplication without vikaraṇa. E.g., @[hu] → @[juhoti].",
    category: "gana",
  },
  {
    term: "दिवादि",
    termRoman: "divādi",
    meaning:
      "Fourth class (class 4). Adds śyan vikaraṇa. E.g., @[div] → @[dīvyati].",
    category: "gana",
  },
  {
    term: "स्वादि",
    termRoman: "svādi",
    meaning:
      "Fifth class (class 5). Adds śnu vikaraṇa. E.g., @[su] → @[sunoti].",
    category: "gana",
  },
  {
    term: "तुदादि",
    termRoman: "tudādi",
    meaning:
      "Sixth class (class 6). Adds śa vikaraṇa (accent on ending). E.g., @[tud] → @[tudati].",
    category: "gana",
  },
  {
    term: "रुधादि",
    termRoman: "rudhādi",
    meaning:
      "Seventh class (class 7). Inserts nasal (śnam) before final consonant. E.g., @[rudh] → @[ruṇaddhi].",
    category: "gana",
  },
  {
    term: "तनादि",
    termRoman: "tanādi",
    meaning:
      "Eighth class (class 8). Adds u vikaraṇa. E.g., @[tan] → @[tanoti].",
    category: "gana",
  },
  {
    term: "क्र्यादि",
    termRoman: "kryādi",
    meaning:
      "Ninth class (class 9). Adds śnā vikaraṇa. E.g., @[krī] → @[krīṇāti].",
    category: "gana",
  },
  {
    term: "चुरादि",
    termRoman: "curādi",
    meaning:
      "Tenth class (class 10). Adds ṇic (causative-like). E.g., @[cur] → @[corayati].",
    category: "gana",
  },

  // Samasa - Compounds
  {
    term: "समास",
    termRoman: "samāsa",
    meaning: "Compound - multiple words joined into a single unit.",
    sutraRef: "2.1.3",
    category: "samasa",
  },
  {
    term: "तत्पुरुष",
    termRoman: "tatpuruṣa",
    meaning:
      "Determinative compound. The second member is primary, first qualifies it.",
    sutraRef: "2.1.22",
    category: "samasa",
  },
  {
    term: "कर्मधारय",
    termRoman: "karmadhāraya",
    meaning:
      "Appositional compound. Both members refer to the same thing (subset of @[tatpuruṣa]).",
    sutraRef: "1.2.42",
    category: "samasa",
  },
  {
    term: "द्विगु",
    termRoman: "dvigu",
    meaning:
      "Numeral compound. First member is a number (subset of @[tatpuruṣa]).",
    sutraRef: "2.1.52",
    category: "samasa",
  },
  {
    term: "बहुव्रीहि",
    termRoman: "bahuvrīhi",
    meaning:
      "Possessive compound. The compound denotes something having what the members describe.",
    sutraRef: "2.2.23",
    category: "samasa",
  },
  {
    term: "द्वन्द्व",
    termRoman: "dvandva",
    meaning: "Copulative compound. Members are coordinated (X and Y).",
    sutraRef: "2.2.29",
    category: "samasa",
  },
  {
    term: "अव्ययीभाव",
    termRoman: "avyayībhāva",
    meaning:
      "Adverbial compound. First member is an indeclinable, result is neuter singular.",
    sutraRef: "2.1.5",
    category: "samasa",
  },
  {
    term: "समाहार",
    termRoman: "samāhāra",
    meaning:
      "Collective sense. When a dvandva denotes the group as a whole (neuter singular).",
    category: "samasa",
  },

  // Additional Pratyaya - Krit suffixes
  {
    term: "क्त",
    termRoman: "kta",
    meaning:
      "Past passive participle suffix. Forms adjectives meaning 'was done' (@[niṣṭhā]).",
    sutraRef: "3.2.102",
    category: "pratyaya",
    related: ["ktavatu"],
  },
  {
    term: "क्तवतु",
    termRoman: "ktavatu",
    meaning:
      "Past active participle suffix. Forms adjectives meaning 'one who did' (@[niṣṭhā]).",
    sutraRef: "3.2.102",
    category: "pratyaya",
    related: ["kta"],
  },
  {
    term: "क्त्वा",
    termRoman: "ktvā",
    meaning:
      "Absolutive suffix. 'Having done X' - connects sequential actions by same agent.",
    sutraRef: "3.4.21",
    category: "pratyaya",
    related: ["lyap"],
  },
  {
    term: "ल्यप्",
    termRoman: "lyap",
    meaning:
      "Absolutive suffix after upasarga. Same meaning as ktvā but used with prefixed verbs.",
    sutraRef: "3.4.22",
    category: "pratyaya",
    related: ["ktvā"],
  },
  {
    term: "तुमुन्",
    termRoman: "tumun",
    meaning: "Infinitive suffix. Forms verbal nouns meaning 'to do'.",
    sutraRef: "3.3.10",
    category: "pratyaya",
  },
  {
    term: "शतृ",
    termRoman: "śatṛ",
    meaning:
      "Present active participle suffix (@[parasmaipada]). 'One who is doing'.",
    sutraRef: "3.2.124",
    category: "pratyaya",
    related: ["śānac"],
  },
  {
    term: "शानच्",
    termRoman: "śānac",
    meaning:
      "Present participle suffix (@[ātmanepada]). 'One who is doing' (middle voice).",
    sutraRef: "3.2.124",
    category: "pratyaya",
    related: ["śatṛ"],
  },
  {
    term: "तव्य",
    termRoman: "tavya",
    meaning:
      "Future passive participle suffix. 'Should be done, must be done'.",
    sutraRef: "3.1.96",
    category: "pratyaya",
    related: ["anīya", "ṇyat"],
  },
  {
    term: "अनीय",
    termRoman: "anīya",
    meaning: "Future passive participle suffix. Same meaning as tavya.",
    sutraRef: "3.1.96",
    category: "pratyaya",
    related: ["tavya", "ṇyat"],
  },
  {
    term: "ण्यत्",
    termRoman: "ṇyat",
    meaning: "Future passive participle suffix (= ya). Same meaning as tavya.",
    sutraRef: "3.1.124",
    category: "pratyaya",
    related: ["tavya", "anīya"],
  },
  {
    term: "तव्यत्",
    termRoman: "tavyat",
    meaning: "Variant of tavya. Future passive participle suffix.",
    category: "pratyaya",
    related: ["tavya"],
  },

  // Vikarana - Tense/mood affixes
  {
    term: "विकरण",
    termRoman: "vikaraṇa",
    meaning: "Tense-mood affix inserted between root and personal ending.",
    category: "pratyaya",
  },
  {
    term: "शप्",
    termRoman: "śap",
    meaning: "Vikaraṇa for class 1 (bhvādi). Adds @[a] to stem.",
    sutraRef: "3.1.68",
    category: "pratyaya",
  },
  {
    term: "श्यन्",
    termRoman: "śyan",
    meaning: "Vikaraṇa for class 4 (divādi). Adds @[ya] to stem.",
    sutraRef: "3.1.69",
    category: "pratyaya",
  },
  {
    term: "श्नु",
    termRoman: "śnu",
    meaning: "Vikaraṇa for class 5 (svādi). Adds @[nu]/@[no] to stem.",
    sutraRef: "3.1.73",
    category: "pratyaya",
  },
  {
    term: "श्ना",
    termRoman: "śnā",
    meaning: "Vikaraṇa for class 9 (kryādi). Adds @[nā]/@[nī] to stem.",
    sutraRef: "3.1.81",
    category: "pratyaya",
  },
  {
    term: "श्नम्",
    termRoman: "śnam",
    meaning:
      "Vikaraṇa for class 7 (rudhādi). Inserts nasal before final consonant.",
    sutraRef: "3.1.78",
    category: "pratyaya",
  },

  // Taddhita suffixes
  {
    term: "मतुप्",
    termRoman: "matup",
    meaning:
      "Possessive suffix meaning 'having X'. Forms adjectives like @[dhana] → @[dhanavat].",
    sutraRef: "5.2.94",
    category: "pratyaya",
  },
  {
    term: "तल्",
    termRoman: "tal",
    meaning:
      "Abstract noun suffix (= tā). Forms feminine nouns meaning '-ness, -hood'.",
    sutraRef: "5.1.119",
    category: "pratyaya",
    related: ["tva"],
  },
  {
    term: "त्व",
    termRoman: "tva",
    meaning:
      "Abstract noun suffix (= tva). Forms neuter nouns meaning '-ness, -hood'.",
    sutraRef: "5.1.119",
    category: "pratyaya",
    related: ["tal"],
  },
  {
    term: "इन्",
    termRoman: "in",
    meaning: "Possessive suffix meaning 'having X'. Alternative to matup.",
    category: "pratyaya",
  },
  {
    term: "णिच्",
    termRoman: "ṇic",
    meaning:
      "Causative suffix. Makes verbs causative: @[paca] → @[pācayati] 'causes to cook'.",
    sutraRef: "3.1.26",
    category: "pratyaya",
  },
  {
    term: "सन्",
    termRoman: "san",
    meaning:
      "Desiderative suffix. Expresses desire to do: @[piba] → @[pipāsati] 'wishes to drink'.",
    sutraRef: "3.1.7",
    category: "pratyaya",
  },

  // Additional Samjna - Technical terms
  {
    term: "अङ्ग",
    termRoman: "aṅga",
    meaning:
      "Stem - the base to which an affix is attached (after certain operations).",
    sutraRef: "1.4.13",
    category: "samjna",
  },
  {
    term: "उपसर्ग",
    termRoman: "upasarga",
    meaning:
      "Verbal prefix. Preverbs like @[pra], @[parā], @[apa], @[sam], etc. that modify verb meaning.",
    sutraRef: "1.4.59",
    category: "samjna",
  },
  {
    term: "अव्यय",
    termRoman: "avyaya",
    meaning:
      "Indeclinable - a word that doesn't change form (particles, adverbs).",
    sutraRef: "1.1.37",
    category: "samjna",
  },
  {
    term: "उपपद",
    termRoman: "upapada",
    meaning:
      "Co-occurring word. A word in construction with another that conditions an affix.",
    category: "samjna",
  },
  {
    term: "पूर्वपद",
    termRoman: "pūrvapada",
    meaning: "Prior member - the first component of a compound.",
    category: "samjna",
  },
  {
    term: "घि",
    termRoman: "ghi",
    meaning:
      "Technical name for stems ending in short i/u (except @[sakhi] and @[pati] in certain uses).",
    sutraRef: "1.4.7",
    category: "samjna",
  },
  {
    term: "घु",
    termRoman: "ghu",
    meaning:
      "Technical name for the roots @[dā] 'give' and @[dhā] 'place' (and their derivatives).",
    sutraRef: "1.1.20",
    category: "samjna",
  },
  {
    term: "नदी",
    termRoman: "nadī",
    meaning: "Technical name for feminine stems in long ī/ū.",
    sutraRef: "1.4.3",
    category: "samjna",
  },
  {
    term: "सर्वनामस्थान",
    termRoman: "sarvanāmasthāna",
    meaning:
      "Strong cases - nominative and accusative (singular, dual, plural) where stems strengthen.",
    sutraRef: "1.1.42",
    category: "samjna",
  },
  {
    term: "अभ्यास",
    termRoman: "abhyāsa",
    meaning: "Reduplication - the repeated portion of a reduplicated form.",
    sutraRef: "6.1.4",
    category: "samjna",
  },
  {
    term: "सम्प्रसारण",
    termRoman: "samprasāraṇa",
    meaning:
      "Semivowel-to-vowel change: @[y]→@[i], @[v]→@[u], @[r]→@[ṛ], @[l]→@[ḷ].",
    sutraRef: "1.1.45",
    category: "samjna",
  },

  // Augments
  {
    term: "आगम",
    termRoman: "āgama",
    meaning: "Augment - an element inserted into a form.",
    category: "samjna",
  },
  {
    term: "इट्",
    termRoman: "iṭ",
    meaning: "Augment @[i] added before certain affixes (@[seṭ] roots).",
    sutraRef: "7.2.35",
    category: "samjna",
    related: ["aniṭ"],
  },
  {
    term: "अनिट्",
    termRoman: "aniṭ",
    meaning:
      "Without iṭ augment. Roots that don't take iṭ before certain affixes.",
    category: "samjna",
    related: ["iṭ"],
  },
  {
    term: "आट्",
    termRoman: "āṭ",
    meaning: "Augment @[ā] added in certain formations.",
    category: "samjna",
  },
  {
    term: "औट्",
    termRoman: "auṭ",
    meaning: "Augment @[au] added before certain endings.",
    category: "samjna",
  },
  {
    term: "नुम्",
    termRoman: "num",
    meaning: "Nasal augment @[n] inserted in certain forms.",
    sutraRef: "7.1.58",
    category: "samjna",
  },

  // It-markers (anubandhas)
  {
    term: "पित्",
    termRoman: "pit",
    meaning: "Having p as marker. Indicates accent on first syllable.",
    category: "samjna",
    related: ["kit", "ṅit"],
  },
  {
    term: "कित्",
    termRoman: "kit",
    meaning: "Having k as marker. Prevents @[guṇa]/@[vṛddhi].",
    category: "samjna",
    related: ["pit", "ṅit"],
  },
  {
    term: "ङित्",
    termRoman: "ṅit",
    meaning:
      "Having ṅ as marker. Prevents @[guṇa]/@[vṛddhi]; indicates @[ātmanepada].",
    category: "samjna",
    related: ["pit", "kit"],
  },
  {
    term: "शित्",
    termRoman: "śit",
    meaning: "Having ś as marker. Indicates @[sārvadhātuka] affix.",
    category: "samjna",
  },

  // Deletion types
  {
    term: "लुक्",
    termRoman: "luk",
    meaning:
      "Complete deletion with no trace. The deleted element is as if it never existed.",
    sutraRef: "1.1.61",
    category: "samjna",
    related: ["ślu"],
  },
  {
    term: "श्लु",
    termRoman: "ślu",
    meaning:
      "Deletion that leaves a trace (@[sthānivat]). The deleted element still triggers some rules.",
    sutraRef: "1.1.62",
    category: "samjna",
    related: ["luk"],
  },

  // Pada types
  {
    term: "परस्मैपद",
    termRoman: "parasmaipada",
    meaning:
      "Active voice endings. 'Word for another' - action for another's benefit.",
    sutraRef: "1.4.99",
    category: "samjna",
    related: ["ātmanepada"],
  },
  {
    term: "आत्मनेपद",
    termRoman: "ātmanepada",
    meaning:
      "Middle voice endings. 'Word for oneself' - action for one's own benefit.",
    sutraRef: "1.4.100",
    category: "samjna",
    related: ["parasmaipada"],
  },

  // Affix categories
  {
    term: "सार्वधातुक",
    termRoman: "sārvadhātuka",
    meaning:
      "Conjugational affixes - affixes marked with ś or tiṅ endings. Cause @[guṇa].",
    sutraRef: "3.4.113",
    category: "samjna",
    related: ["ārdhadhātuka"],
  },
  {
    term: "आर्धधातुक",
    termRoman: "ārdhadhātuka",
    meaning:
      "Non-conjugational affixes - affixes not marked with ś. Include kṛt affixes. Cause @[vṛddhi].",
    sutraRef: "3.4.114",
    category: "samjna",
    related: ["sārvadhātuka"],
  },

  // Accent
  {
    term: "अनुदात्त",
    termRoman: "anudātta",
    meaning: "Low-pitched accent (non-acute). Unmarked in pronunciation.",
    category: "samjna",
  },

  // Vacana (number)
  {
    term: "एकवचन",
    termRoman: "ekavacana",
    meaning: "Singular number.",
    category: "vibhakti",
  },
  {
    term: "द्विवचन",
    termRoman: "dvivacana",
    meaning: "Dual number.",
    category: "vibhakti",
  },
  {
    term: "बहुवचन",
    termRoman: "bahuvacana",
    meaning: "Plural number.",
    category: "vibhakti",
  },

  // Purusa (person)
  {
    term: "प्रथम",
    termRoman: "prathama",
    meaning:
      "Third person (in Sanskrit grammar, 'first' purusa refers to the one spoken about).",
    category: "vibhakti",
  },
  {
    term: "मध्यम",
    termRoman: "madhyama",
    meaning: "Second person (the one spoken to).",
    category: "vibhakti",
  },
  {
    term: "उत्तम",
    termRoman: "uttama",
    meaning: "First person (the speaker).",
    category: "vibhakti",
  },

  // Sandhi
  {
    term: "विसर्ग",
    termRoman: "visarga",
    meaning:
      "The sound @[ḥ] (@[visarjanīya]). Final aspiration that undergoes sandhi changes.",
    category: "sandhi",
  },

  // General
  {
    term: "क्रिया",
    termRoman: "kriyā",
    meaning: "Action or verb. The activity denoted by the verbal root.",
    category: "general",
  },
  {
    term: "भाव",
    termRoman: "bhāva",
    meaning: "State of being, abstract action, or impersonal passive sense.",
    category: "general",
  },
  {
    term: "उच्चारण",
    termRoman: "uccāraṇa",
    meaning: "Pronunciation or articulation.",
    category: "general",
  },
  {
    term: "वर्ण",
    termRoman: "varṇa",
    meaning: "Sound or phoneme - the basic unit of speech.",
    category: "general",
  },
  {
    term: "अक्षर",
    termRoman: "akṣara",
    meaning: "Syllable - a vowel with optional consonants.",
    category: "general",
  },
  {
    term: "वर्णमाला",
    termRoman: "varṇamālā",
    meaning:
      "The alphabet, literally 'garland of letters'. The systematic arrangement of Sanskrit sounds: vowels (@deva[स्वर]) and consonants (@deva[व्यञ्जन]).",
    category: "general",
    related: ["varṇa", "svara", "vyañjana"],
  },
  {
    term: "प्रक्रिया",
    termRoman: "prakriyā",
    meaning:
      "Derivation or grammatical procedure. The step-by-step application of rules to derive a word form from its base elements (@[dhātu], @[prātipadika]) and affixes (@[pratyaya]).",
    category: "general",
    related: ["dhātu", "pratyaya", "prātipadika"],
  },
  {
    term: "व्युत्पत्ति",
    termRoman: "vyutpatti",
    meaning:
      "Etymology or derivation. The origin and formation of a word through grammatical rules.",
    category: "general",
    related: ["prakriyā"],
  },

  // Prayoga - Voice/Construction
  {
    term: "प्रयोग",
    termRoman: "prayoga",
    meaning:
      "Voice or construction. The way a verb relates to its @[kartṛ] and @[karman].",
    category: "general",
  },
  {
    term: "कर्तरि प्रयोग",
    termRoman: "kartari prayoga",
    meaning:
      "Active voice. The @[kartṛ] (agent) is the grammatical subject and takes @[prathamā]. The verb agrees with the @[kartṛ].",
    category: "general",
    related: ["karmaṇi prayoga", "kartṛ"],
  },
  {
    term: "कर्मणि प्रयोग",
    termRoman: "karmaṇi prayoga",
    meaning:
      "Passive voice. The @[karman] (object) becomes the grammatical subject and takes @[prathamā]. The @[kartṛ] takes @[tṛtīyā].",
    category: "general",
    related: ["kartari prayoga", "karman"],
  },
  {
    term: "भावे प्रयोग",
    termRoman: "bhāve prayoga",
    meaning:
      "Impersonal passive. Used with intransitive verbs. The verb is always third person singular neuter. @[मया गम्यते] 'going is done by me'.",
    category: "general",
    related: ["karmaṇi prayoga"],
  },

  // Additional karaka-related terms
  {
    term: "सहार्थ",
    termRoman: "sahārtha",
    meaning:
      "Accompaniment. Expressed by @[tṛtīyā] with @[saha]: @[पुत्रेण सह गच्छति] 'goes with the son'.",
    category: "karaka",
    related: ["tṛtīyā"],
  },
  {
    term: "प्रयोजन",
    termRoman: "prayojana",
    meaning:
      "Purpose or goal. Expressed by @[caturthī]: @[विद्यायै गच्छति] 'goes for knowledge'.",
    category: "karaka",
    related: ["caturthī", "sampradāna"],
  },
  {
    term: "दान",
    termRoman: "dāna",
    meaning:
      "Giving. The prototypical action for @[sampradāna] (recipient): @[ब्राह्मणाय गां ददाति] 'gives a cow to the brahmin'.",
    category: "karaka",
  },
  {
    term: "साधकतम",
    termRoman: "sādhakatama",
    meaning:
      "Most effective means. The defining quality of @[karaṇa] (instrument): @[दात्रेण लुनाति] 'cuts with the sickle'.",
    sutraRef: "1.4.42",
    category: "karaka",
    related: ["karaṇa"],
  },
  {
    term: "ईप्सिततम",
    termRoman: "īpsitatama",
    meaning:
      "Most desired (to affect). The defining quality of @[karman]: what the @[kartṛ] most wishes to accomplish.",
    sutraRef: "1.4.49",
    category: "karaka",
    related: ["karman"],
  },
  {
    term: "स्वतन्त्र",
    termRoman: "svatantra",
    meaning:
      "Independent. The defining quality of @[kartṛ]: the agent acts of their own accord, not as instrument of another.",
    sutraRef: "1.4.54",
    category: "karaka",
    related: ["kartṛ"],
  },
  {
    term: "आधार",
    termRoman: "ādhāra",
    meaning:
      "Container or support. The defining quality of @[adhikaraṇa] (locus): where the action takes place.",
    sutraRef: "1.4.45",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "ध्रुव",
    termRoman: "dhruva",
    meaning:
      "Fixed point. The defining quality of @[apādāna]: the stationary point from which separation occurs.",
    sutraRef: "1.4.24",
    category: "karaka",
    related: ["apādāna"],
  },

  // Vibhakti usages
  {
    term: "सम्बोधन",
    termRoman: "sambodhana",
    meaning:
      "Vocative or direct address. Uses @[prathamā] endings but with special forms: @[हे राम] 'O Rama!'",
    category: "vibhakti",
    related: ["prathamā"],
  },
  {
    term: "सति सप्तमी",
    termRoman: "sati saptamī",
    meaning:
      "Locative absolute. A construction where both subject and participle take @[saptamī] to express circumstance: @[सूर्ये उदिते] 'the sun having risen'.",
    category: "vibhakti",
    related: ["saptamī", "adhikaraṇa"],
  },
  {
    term: "गत्यर्थ",
    termRoman: "gatyartha",
    meaning:
      "Motion meaning. Verbs of motion (@[गम्], @[या], etc.) whose destination takes @[dvitīyā]: @[ग्रामं गच्छति] 'goes to the village'.",
    category: "vibhakti",
    related: ["dvitīyā"],
  },
  {
    term: "काल",
    termRoman: "kāla",
    meaning:
      "Time. Duration takes @[dvitīyā]: @[मासं वसति] 'stays for a month'. Time-when takes @[saptamī]: @[प्रातःकाले] 'in the morning'.",
    category: "vibhakti",
  },
  {
    term: "अध्वन्",
    termRoman: "adhvan",
    meaning:
      "Distance or path. Extent of distance takes @[dvitīyā]: @[क्रोशं गच्छति] 'goes one krośa'.",
    category: "vibhakti",
    related: ["dvitīyā"],
  },
  {
    term: "अत्यन्तसंयोग",
    termRoman: "atyantasaṃyoga",
    meaning:
      "Complete connection. When @[dvitīyā] expresses duration, the action pervades the entire time/distance.",
    sutraRef: "2.3.5",
    category: "vibhakti",
  },

  // Linga (gender)
  {
    term: "लिङ्ग",
    termRoman: "liṅga",
    meaning:
      "Gender. Sanskrit has three: @[puṃliṅga] (masculine), @[strīliṅga] (feminine), @[napuṃsakaliṅga] (neuter).",
    category: "samjna",
  },
  {
    term: "पुंलिङ्ग",
    termRoman: "puṃliṅga",
    meaning: "Masculine gender. E.g., @[देवः] 'god', @[नरः] 'man'.",
    category: "samjna",
    related: ["liṅga"],
  },
  {
    term: "स्त्रीलिङ्ग",
    termRoman: "strīliṅga",
    meaning: "Feminine gender. E.g., @[देवी] 'goddess', @[नदी] 'river'.",
    category: "samjna",
    related: ["liṅga"],
  },
  {
    term: "नपुंसकलिङ्ग",
    termRoman: "napuṃsakaliṅga",
    meaning: "Neuter gender. E.g., @[फलम्] 'fruit', @[वनम्] 'forest'.",
    category: "samjna",
    related: ["liṅga"],
  },

  // Vacana (number) - already have these but adding alternate forms
  {
    term: "वचन",
    termRoman: "vacana",
    meaning:
      "Number. Sanskrit has three: @[ekavacana] (singular), @[dvivacana] (dual), @[bahuvacana] (plural).",
    category: "vibhakti",
  },

  // Additional useful terms
  {
    term: "तपस्",
    termRoman: "tapas",
    meaning:
      "Austerity or penance. Spiritual practice involving self-discipline.",
    category: "general",
  },
  {
    term: "सह",
    termRoman: "saha",
    meaning:
      "With (together with). Governs @[tṛtīyā]: @[पुत्रेण सह] 'with the son'.",
    category: "general",
    related: ["sahārtha", "tṛtīyā"],
  },

  // Additional terms for vibhakti paths
  {
    term: "शेष",
    termRoman: "śeṣa",
    meaning:
      "Remainder. षष्ठी (genitive) expresses relations not covered by other कारकs.",
    sutraRef: "2.3.50",
    category: "karaka",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "उपमान",
    termRoman: "upamāna",
    meaning:
      "Standard of comparison. Takes पञ्चमी (ablative): @[रामात् बलवान्] 'stronger than Rama'.",
    category: "karaka",
    related: ["pañcamī"],
  },
  {
    term: "स्वामित्व",
    termRoman: "svāmitva",
    meaning:
      "Ownership. A type of सम्बन्ध expressed by षष्ठी: @[मम गृहम्] 'my house'.",
    category: "karaka",
    related: ["ṣaṣṭhī", "sambandha"],
  },
  {
    term: "अवयव",
    termRoman: "avayava",
    meaning:
      "Part or limb. Part-whole relation expressed by षष्ठी: @[वृक्षस्य शाखा] 'branch of tree'.",
    category: "karaka",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "विकार",
    termRoman: "vikāra",
    meaning:
      "Modification or transformation. Material relation in षष्ठी: @[सुवर्णस्य भूषणम्] 'ornament of gold'.",
    category: "karaka",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "औपश्लेषिक",
    termRoman: "aupaśleṣika",
    meaning:
      "Contact-based अधिकरण. The आधार touches the action: @[कटे आस्ते] 'sits on the mat'.",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "वैषयिक",
    termRoman: "vaiṣayika",
    meaning:
      "Domain-based अधिकरण. Abstract location: @[मोक्षे इच्छा] 'desire for liberation', @[व्याकरणे निपुणः] 'skilled in grammar'.",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "अभिव्यापक",
    termRoman: "abhivyāpaka",
    meaning:
      "Pervading अधिकरण. The located thing pervades the locus: @[तिलेषु तैलम्] 'oil in sesame seeds'.",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "कालाधिकरण",
    termRoman: "kālādhikaraṇa",
    meaning:
      "Temporal location. सप्तमी (locative) expressing time-when: @[प्रातःकाले] 'at dawn', @[मध्याह्ने] 'at midday'.",
    category: "karaka",
    related: ["adhikaraṇa", "kāla", "saptamī"],
  },
  {
    term: "निमित्त",
    termRoman: "nimitta",
    meaning:
      "Occasion or circumstance. Expressed by सप्तमी in constructions like सति सप्तमी.",
    category: "karaka",
    related: ["saptamī"],
  },
  {
    term: "विषय",
    termRoman: "viṣaya",
    meaning:
      "Domain or subject matter. सप्तमी meaning 'regarding': @[शास्त्रे पण्डितः] 'learned in शास्त्र'.",
    category: "karaka",
    related: ["saptamī"],
  },
  {
    term: "देश",
    termRoman: "deśa",
    meaning:
      "Place or location. Spatial अधिकरण: @[गृहे वसति] 'lives in the house'.",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "कृदन्त",
    termRoman: "kṛdanta",
    meaning:
      "Word ending in a कृत् suffix. Verbal derivative like @[गत] 'gone', @[कृत] 'done'.",
    category: "pratyaya",
    related: ["kṛt"],
  },
  {
    term: "सम्बन्ध",
    termRoman: "sambandha",
    meaning:
      "Relation or connection. The general meaning of षष्ठी (genitive): @[रामस्य पुत्रः] 'Rama's son'.",
    category: "karaka",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "भय",
    termRoman: "bhaya",
    meaning:
      "Fear. The cause of fear takes पञ्चमी: @[चोरात् बिभेति] 'fears the thief'.",
    category: "general",
    related: ["pañcamī"],
  },
  {
    term: "त्राण",
    termRoman: "trāṇa",
    meaning:
      "Protection. The source of danger takes पञ्चमी: @[सिंहात् त्रायते] 'is protected from the lion'.",
    category: "general",
    related: ["pañcamī"],
  },

  // Additional terms for kridanta paths
  {
    term: "निष्ठा",
    termRoman: "niṣṭhā",
    meaning:
      "Collective name for @[kta] and @[ktavatu] suffixes. Past participle affixes defined in 1.1.26.",
    sutraRef: "1.1.26",
    category: "pratyaya",
    related: ["kta", "ktavatu"],
  },
  {
    term: "क्त्वा",
    termRoman: "ktvā",
    meaning:
      "Absolutive suffix meaning 'having done'. Used for sequential actions by the same agent: @[भुक्त्वा गच्छति] 'having eaten, he goes'.",
    sutraRef: "3.4.21",
    category: "pratyaya",
    related: ["lyap"],
  },
  {
    term: "सत्",
    termRoman: "sat",
    meaning:
      "Technical name for @[śatṛ] and @[śānac] (present participle suffixes). Defined in 3.2.127.",
    sutraRef: "3.2.127",
    category: "pratyaya",
    related: ["śatṛ", "śānac"],
  },
  {
    term: "कृत्य",
    termRoman: "kṛtya",
    meaning:
      "Future passive participle suffixes (@[tavya], @[anīya], @[yat]). Express obligation: 'to be done'.",
    sutraRef: "3.1.96",
    category: "pratyaya",
    related: ["tavya", "anīya"],
  },

  // Additional terms for taddhita paths
  {
    term: "अपत्य",
    termRoman: "apatya",
    meaning:
      "Offspring or descendant. The meaning expressed by patronymic suffixes like @[aṇ], @[iñ].",
    sutraRef: "4.1.92",
    category: "samjna",
  },
  {
    term: "गोत्र",
    termRoman: "gotra",
    meaning:
      "Clan or lineage. Family name passed through generations, formed with special suffixes.",
    category: "samjna",
    related: ["apatya"],
  },
  {
    term: "इमनिच्",
    termRoman: "imanic",
    meaning:
      "Abstract noun suffix (= @[iman]). Forms nouns like @[गरिमन्] 'heaviness' with @[vṛddhi].",
    sutraRef: "5.1.120",
    category: "pratyaya",
    related: ["tva", "tal"],
  },
  {
    term: "यत्",
    termRoman: "yat",
    meaning:
      "Future passive participle suffix after vowel-final roots. @[गेयम्] 'to be sung'.",
    sutraRef: "3.1.97",
    category: "pratyaya",
    related: ["tavya", "kṛtya"],
  },
  {
    term: "इञ्",
    termRoman: "iñ",
    meaning:
      "Patronymic suffix (= @[i]) after @[a]-final stems. @[दक्ष] → @[दाक्षिः] 'son of Daksha'.",
    sutraRef: "4.1.95",
    category: "pratyaya",
    related: ["aṇ", "apatya"],
  },
  {
    term: "ढक्",
    termRoman: "ḍhak",
    meaning:
      "Patronymic suffix (= @[eya]). @[कुन्ती] → @[कौन्तेयः] 'son of Kunti'.",
    category: "pratyaya",
    related: ["apatya"],
  },

  // Additional pratyahara terms
  {
    term: "वल्",
    termRoman: "val",
    meaning:
      "Pratyahara covering most consonants. Used in @[iṭ] augment rules (7.2.35).",
    sutraRef: "7.2.35",
    category: "pratyahara",
  },
  {
    term: "झल्",
    termRoman: "jhal",
    meaning:
      "Pratyahara for obstruent consonants (stops and sibilants). Used in sandhi rules.",
    category: "pratyahara",
  },

  // Additional sandhi terms
  {
    term: "पररूप",
    termRoman: "pararūpa",
    meaning:
      "Substitution by the following element. In @[a/ā + e/o], the @[e/o] replaces both.",
    sutraRef: "6.1.94",
    category: "sandhi",
  },
  {
    term: "पूर्वरूप",
    termRoman: "pūrvarūpa",
    meaning:
      "Substitution by the preceding element. The prior vowel replaces both in certain contexts.",
    sutraRef: "6.1.109",
    category: "sandhi",
  },
  {
    term: "प्रकृतिभाव",
    termRoman: "prakṛtibhāva",
    meaning:
      "Retention of original form. No sandhi occurs; both elements remain unchanged.",
    category: "sandhi",
  },
  {
    term: "आयादेश",
    termRoman: "āyādeśa",
    meaning:
      "Substitution by @[āy], @[āv], etc. Diphthongs become @[ay], @[av] before vowels.",
    sutraRef: "6.1.78",
    category: "sandhi",
  },

  // Additional samasa terms
  {
    term: "प्रधान",
    termRoman: "pradhāna",
    meaning:
      "Primary or principal element. In @[tatpuruṣa], the second member is @[pradhāna].",
    category: "samasa",
    related: ["upasarjana"],
  },
  {
    term: "उपसर्जन",
    termRoman: "upasarjana",
    meaning:
      "Subordinate element. In compounds, the non-primary member that qualifies the @[pradhāna].",
    sutraRef: "1.2.43",
    category: "samasa",
    related: ["pradhāna"],
  },
  {
    term: "समाहार द्वन्द्व",
    termRoman: "samāhāra dvandva",
    meaning:
      "Collective @[dvandva]. Members taken as a group; result is neuter singular: @[पाणिपादम्].",
    category: "samasa",
    related: ["dvandva"],
  },
  {
    term: "इतरेतर द्वन्द्व",
    termRoman: "itaretara dvandva",
    meaning:
      "Enumerative @[dvandva]. Members counted individually; result is plural: @[रामलक्ष्मणौ].",
    category: "samasa",
    related: ["dvandva"],
  },

  // Additional verb-related terms
  {
    term: "विधिलिङ्",
    termRoman: "vidhiliṅ",
    meaning:
      "Prescriptive optative. Expresses command, advice, possibility: @[भवेत्] 'should be, may be'.",
    sutraRef: "3.3.161",
    category: "lakara",
    related: ["āśīrliṅ", "liṅ"],
  },
  {
    term: "आशीर्लिङ्",
    termRoman: "āśīrliṅ",
    meaning:
      "Benedictive optative. Expresses blessing or wish: @[भूयात्] 'may it be!'",
    sutraRef: "3.3.173",
    category: "lakara",
    related: ["vidhiliṅ", "liṅ"],
  },
  {
    term: "अनद्यतन",
    termRoman: "anadyatana",
    meaning:
      "Not of today. Time reference excluding the current day; governs @[laṅ] and @[luṭ].",
    sutraRef: "3.2.111",
    category: "lakara",
  },
  {
    term: "परोक्ष",
    termRoman: "parokṣa",
    meaning:
      "Unwitnessed. Past action not seen by the speaker; expressed by @[liṭ] (perfect).",
    sutraRef: "3.2.115",
    category: "lakara",
    related: ["liṭ"],
  },

  // Technical operations
  {
    term: "स्थानिवत्",
    termRoman: "sthānivat",
    meaning:
      "Like the original. A substitute behaves as if it were the replaced element for certain rules.",
    sutraRef: "1.1.56",
    category: "samjna",
  },
  {
    term: "असिद्ध",
    termRoman: "asiddha",
    meaning:
      "Non-effected. A rule's result is 'invisible' to certain other rules.",
    sutraRef: "8.2.1",
    category: "samjna",
  },
  {
    term: "उपधा",
    termRoman: "upadhā",
    meaning:
      "Penultimate. The letter before the final: in @[पच्], @[अ] is the @[upadhā].",
    sutraRef: "1.1.65",
    category: "samjna",
  },
  {
    term: "टि",
    termRoman: "ṭi",
    meaning: "Final portion. The last vowel and what follows it in a word.",
    sutraRef: "1.1.64",
    category: "samjna",
  },

  // Western grammatical terms (for cross-reference)
  {
    term: "nominative",
    termRoman: "nominative",
    meaning:
      "First case (@deva[प्रथमा]). Used for the subject of a sentence or simple naming. Sanskrit: @deva[प्रथमा विभक्ति].",
    category: "vibhakti",
    related: ["prathamā"],
  },
  {
    term: "accusative",
    termRoman: "accusative",
    meaning:
      "Second case (@deva[द्वितीया]). Used for the direct object of a transitive verb. Sanskrit: @deva[द्वितीया विभक्ति].",
    category: "vibhakti",
    related: ["dvitīyā"],
  },
  {
    term: "instrumental",
    termRoman: "instrumental",
    meaning:
      "Third case (@deva[तृतीया]). Used for the instrument or means, also for agent in passive. Sanskrit: @deva[तृतीया विभक्ति].",
    category: "vibhakti",
    related: ["tṛtīyā"],
  },
  {
    term: "dative",
    termRoman: "dative",
    meaning:
      "Fourth case (@deva[चतुर्थी]). Used for the indirect object or recipient. Sanskrit: @deva[चतुर्थी विभक्ति].",
    category: "vibhakti",
    related: ["caturthī"],
  },
  {
    term: "ablative",
    termRoman: "ablative",
    meaning:
      "Fifth case (@deva[पञ्चमी]). Used for source, separation, or comparison. Sanskrit: @deva[पञ्चमी विभक्ति].",
    category: "vibhakti",
    related: ["pañcamī"],
  },
  {
    term: "genitive",
    termRoman: "genitive",
    meaning:
      "Sixth case (@deva[षष्ठी]). Used for possession and various relations. Sanskrit: @deva[षष्ठी विभक्ति].",
    category: "vibhakti",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "locative",
    termRoman: "locative",
    meaning:
      "Seventh case (@deva[सप्तमी]). Used for location in space or time. Sanskrit: @deva[सप्तमी विभक्ति].",
    category: "vibhakti",
    related: ["saptamī"],
  },
  {
    term: "vocative",
    termRoman: "vocative",
    meaning:
      "Case of direct address (@deva[सम्बोधन]). Uses @deva[प्रथमा] endings with special forms. Sanskrit: @deva[सम्बोधन प्रथमा].",
    category: "vibhakti",
    related: ["sambodhana", "prathamā"],
  },
  {
    term: "singular",
    termRoman: "singular",
    meaning: "One item (@deva[एकवचन]). Sanskrit: @deva[एकवचनम्].",
    category: "vibhakti",
    related: ["ekavacana"],
  },
  {
    term: "dual",
    termRoman: "dual",
    meaning:
      "Two items (@deva[द्विवचन]). Sanskrit has a special number for exactly two. Sanskrit: @deva[द्विवचनम्].",
    category: "vibhakti",
    related: ["dvivacana"],
  },
  {
    term: "plural",
    termRoman: "plural",
    meaning: "More than two items (@deva[बहुवचन]). Sanskrit: @deva[बहुवचनम्].",
    category: "vibhakti",
    related: ["bahuvacana"],
  },
  {
    term: "present",
    termRoman: "present",
    meaning:
      "Present tense (@deva[लट्]). Expresses ongoing or habitual action. Sanskrit: @deva[वर्तमानकालः].",
    category: "lakara",
    related: ["laṭ", "vartamāna"],
  },
  {
    term: "imperfect",
    termRoman: "imperfect",
    meaning:
      "Past tense not of today (@deva[लङ्]). Sanskrit: @deva[अनद्यतन भूतकालः].",
    category: "lakara",
    related: ["laṅ", "anadyatana"],
  },
  {
    term: "perfect",
    termRoman: "perfect",
    meaning:
      "Past tense unwitnessed (@deva[लिट्]). Action not seen by speaker. Sanskrit: @deva[परोक्ष भूतकालः].",
    category: "lakara",
    related: ["liṭ", "parokṣa"],
  },
  {
    term: "aorist",
    termRoman: "aorist",
    meaning:
      "General past tense (@deva[लुङ्]). Simple past without specific nuance. Sanskrit: @deva[सामान्य भूतकालः].",
    category: "lakara",
    related: ["luṅ", "bhūta"],
  },
  {
    term: "future",
    termRoman: "future",
    meaning:
      "Future tense. Simple future is @deva[लृट्]; periphrastic future is @deva[लुट्]. Sanskrit: @deva[भविष्यत्कालः].",
    category: "lakara",
    related: ["lṛṭ", "luṭ", "bhaviṣyat"],
  },
  {
    term: "imperative",
    termRoman: "imperative",
    meaning:
      "Command mood (@deva[लोट्]). Used for orders, requests, blessings. Sanskrit: @deva[आज्ञार्थः].",
    category: "lakara",
    related: ["loṭ"],
  },
  {
    term: "optative",
    termRoman: "optative",
    meaning:
      "Potential mood (@deva[लिङ्]). Expresses possibility, wish, or prescription. Sanskrit: @deva[विध्यर्थः].",
    category: "lakara",
    related: ["liṅ", "vidhiliṅ"],
  },
  {
    term: "conditional",
    termRoman: "conditional",
    meaning:
      "Hypothetical mood (@deva[लृङ्]). Used for 'would have' scenarios. Sanskrit: @deva[सङ्केतार्थः].",
    category: "lakara",
    related: ["lṛṅ"],
  },
  {
    term: "benedictive",
    termRoman: "benedictive",
    meaning:
      "Blessing mood (@deva[आशीर्लिङ्]). Used for wishes and blessings. Sanskrit: @deva[आशिषि लिङ्].",
    category: "lakara",
    related: ["āśīrliṅ"],
  },
  {
    term: "active",
    termRoman: "active",
    meaning:
      "Active voice (@deva[परस्मैपद]). Action for another's benefit. Sanskrit: @deva[कर्तरि प्रयोगः].",
    category: "samjna",
    related: ["parasmaipada", "kartari prayoga"],
  },
  {
    term: "middle",
    termRoman: "middle",
    meaning:
      "Middle voice (@deva[आत्मनेपद]). Action for one's own benefit. Sanskrit: @deva[आत्मनेपदम्].",
    category: "samjna",
    related: ["ātmanepada"],
  },
  {
    term: "passive",
    termRoman: "passive",
    meaning:
      "Passive voice (@deva[कर्मणि प्रयोग]). Object becomes subject; agent in instrumental. Sanskrit: @deva[कर्मणि प्रयोगः].",
    category: "samjna",
    related: ["karmaṇi prayoga"],
  },
  {
    term: "causative",
    termRoman: "causative",
    meaning:
      "Causing another to act (@deva[णिच्]). @deva[पच्] 'cook' → @deva[पाचयति] 'causes to cook'. Sanskrit: @deva[प्रयोजकः].",
    category: "pratyaya",
    related: ["ṇic"],
  },
  {
    term: "desiderative",
    termRoman: "desiderative",
    meaning:
      "Expressing desire to act (@deva[सन्]). @deva[पा] 'drink' → @deva[पिपासति] 'wants to drink'. Sanskrit: @deva[सन्नन्तः].",
    category: "pratyaya",
    related: ["san"],
  },
  {
    term: "intensive",
    termRoman: "intensive",
    meaning:
      "Expressing repeated or intense action (@deva[यङ्]). Also called frequentative. Sanskrit: @deva[यङन्तः].",
    category: "pratyaya",
  },
  {
    term: "participle",
    termRoman: "participle",
    meaning:
      "Verbal adjective. Present (@deva[शतृ]/[@deva[शानच्]), past (@deva[क्त]), future passive (@deva[तव्य]). Sanskrit: @deva[कृदन्तः].",
    category: "pratyaya",
    related: ["śatṛ", "śānac", "kta", "tavya"],
  },
  {
    term: "infinitive",
    termRoman: "infinitive",
    meaning:
      "Verbal noun 'to do' (@deva[तुमुन्]). @deva[गन्तुम्] 'to go'. Sanskrit: @deva[तुमन्तः].",
    category: "pratyaya",
    related: ["tumun"],
  },
  {
    term: "absolutive",
    termRoman: "absolutive",
    meaning:
      "Gerund 'having done' (@deva[क्त्वा], @deva[ल्यप्]). @deva[गत्वा] 'having gone'. Sanskrit: @deva[क्त्वान्तः].",
    category: "pratyaya",
    related: ["ktvā", "lyap"],
  },
  {
    term: "agent",
    termRoman: "agent",
    meaning:
      "The doer of the action (@deva[कर्तृ]). Independent performer. Sanskrit: @deva[कर्ता].",
    category: "karaka",
    related: ["kartṛ"],
  },
  {
    term: "object",
    termRoman: "object",
    meaning:
      "What the action affects (@deva[कर्मन्]). What the agent most desires to reach. Sanskrit: @deva[कर्म].",
    category: "karaka",
    related: ["karman"],
  },
  {
    term: "instrument",
    termRoman: "instrument",
    meaning:
      "The means of the action (@deva[करण]). Most effective tool. Sanskrit: @deva[करणम्].",
    category: "karaka",
    related: ["karaṇa"],
  },
  {
    term: "recipient",
    termRoman: "recipient",
    meaning:
      "One who receives (@deva[सम्प्रदान]). Indirect object. Sanskrit: @deva[सम्प्रदानम्].",
    category: "karaka",
    related: ["sampradāna"],
  },
  {
    term: "source",
    termRoman: "source",
    meaning:
      "Point of separation (@deva[अपादान]). Fixed point from which something moves away. Sanskrit: @deva[अपादानम्].",
    category: "karaka",
    related: ["apādāna"],
  },
  {
    term: "locus",
    termRoman: "locus",
    meaning:
      "Location of the action (@deva[अधिकरण]). Where the action occurs. Sanskrit: @deva[अधिकरणम्].",
    category: "karaka",
    related: ["adhikaraṇa"],
  },
  {
    term: "masculine",
    termRoman: "masculine",
    meaning:
      "Masculine gender (@deva[पुंलिङ्ग]). One of three genders in Sanskrit. Sanskrit: @deva[पुंलिङ्गम्].",
    category: "samjna",
    related: ["puṃliṅga"],
  },
  {
    term: "feminine",
    termRoman: "feminine",
    meaning:
      "Feminine gender (@deva[स्त्रीलिङ्ग]). One of three genders in Sanskrit. Sanskrit: @deva[स्त्रीलिङ्गम्].",
    category: "samjna",
    related: ["strīliṅga"],
  },
  {
    term: "neuter",
    termRoman: "neuter",
    meaning:
      "Neuter gender (@deva[नपुंसकलिङ्ग]). One of three genders in Sanskrit. Sanskrit: @deva[नपुंसकलिङ्गम्].",
    category: "samjna",
    related: ["napuṃsakaliṅga"],
  },
  {
    term: "first person",
    termRoman: "first person",
    meaning:
      "The speaker (@deva[उत्तम पुरुष]). 'I/we' in English. Sanskrit: @deva[उत्तमपुरुषः].",
    category: "vibhakti",
    related: ["uttama"],
  },
  {
    term: "second person",
    termRoman: "second person",
    meaning:
      "The addressee (@deva[मध्यम पुरुष]). 'You' in English. Sanskrit: @deva[मध्यमपुरुषः].",
    category: "vibhakti",
    related: ["madhyama"],
  },
  {
    term: "third person",
    termRoman: "third person",
    meaning:
      "The one spoken about (@deva[प्रथम पुरुष]). 'He/she/it/they' in English. Sanskrit: @deva[प्रथमपुरुषः].",
    category: "vibhakti",
    related: ["prathama"],
  },
  {
    term: "root",
    termRoman: "root",
    meaning:
      "Verbal root (@deva[धातु]). The base form from which verbs are derived. Sanskrit: @deva[धातुः].",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "stem",
    termRoman: "stem",
    meaning:
      "Nominal stem (@deva[प्रातिपदिक]) or verbal base (@deva[अङ्ग]). What affixes attach to. Sanskrit: @deva[प्रातिपदिकम्], @deva[अङ्गम्].",
    category: "samjna",
    related: ["prātipadika", "aṅga"],
  },
  {
    term: "suffix",
    termRoman: "suffix",
    meaning:
      "Affix added after a base (@deva[प्रत्यय]). Includes case endings, verb endings, and derivational suffixes. Sanskrit: @deva[प्रत्ययः].",
    category: "pratyaya",
    related: ["pratyaya"],
  },
  {
    term: "prefix",
    termRoman: "prefix",
    meaning:
      "Element added before a root (@deva[उपसर्ग]). Verbal prefixes that modify meaning. Sanskrit: @deva[उपसर्गः].",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "compound",
    termRoman: "compound",
    meaning:
      "Multiple words joined as one (@deva[समास]). Sanskrit has several compound types. Sanskrit: @deva[समासः].",
    category: "samasa",
    related: ["samāsa"],
  },
  {
    term: "sandhi",
    termRoman: "sandhi",
    meaning:
      "Sound changes at junctions (@deva[सन्धि]). Euphonic combination of sounds. Sanskrit: @deva[सन्धिः].",
    category: "sandhi",
    related: ["sandhi"],
  },
  {
    term: "vowel",
    termRoman: "vowel",
    meaning:
      "A sound that can form a syllable alone (@deva[स्वर], @deva[अच्]). Sanskrit has 13 vowels. Sanskrit: @deva[स्वरः].",
    category: "samjna",
    related: ["svara", "ac"],
  },
  {
    term: "consonant",
    termRoman: "consonant",
    meaning:
      "A sound requiring a vowel (@deva[व्यञ्जन], @deva[हल्]). Sanskrit has 33 consonants. Sanskrit: @deva[व्यञ्जनम्].",
    category: "samjna",
    related: ["vyañjana", "hal"],
  },
  {
    term: "semivowel",
    termRoman: "semivowel",
    meaning:
      "Sounds between vowels and consonants (@deva[अन्तःस्थ]): @deva[य], @deva[र], @deva[ल], @deva[व]. Sanskrit: @deva[अन्तःस्थाः].",
    category: "samjna",
    related: ["yaṇ"],
  },
  {
    term: "sibilant",
    termRoman: "sibilant",
    meaning:
      "Fricative sounds (@deva[ऊष्मन्]): @deva[श], @deva[ष], @deva[स], @deva[ह]. Sanskrit: @deva[ऊष्माणः].",
    category: "samjna",
  },
  {
    term: "aspirate",
    termRoman: "aspirate",
    meaning:
      "Consonant with breath release (@deva[महाप्राण]): @deva[ख], @deva[घ], @deva[छ], etc. Sanskrit: @deva[महाप्राणः].",
    category: "samjna",
  },
  {
    term: "unaspirate",
    termRoman: "unaspirate",
    meaning:
      "Consonant without breath release (@deva[अल्पप्राण]): @deva[क], @deva[ग], @deva[च], etc. Sanskrit: @deva[अल्पप्राणः].",
    category: "samjna",
  },
  {
    term: "retroflex",
    termRoman: "retroflex",
    meaning:
      "Sounds made with tongue curled back (@deva[मूर्धन्य]): @deva[ट], @deva[ठ], @deva[ड], @deva[ढ], @deva[ण]. Sanskrit: @deva[मूर्धन्याः].",
    category: "samjna",
  },
  {
    term: "dental",
    termRoman: "dental",
    meaning:
      "Sounds made at teeth (@deva[दन्त्य]): @deva[त], @deva[थ], @deva[द], @deva[ध], @deva[न]. Sanskrit: @deva[दन्त्याः].",
    category: "samjna",
  },
  {
    term: "guttural",
    termRoman: "guttural",
    meaning:
      "Sounds made at throat (@deva[कण्ठ्य]): @deva[क], @deva[ख], @deva[ग], @deva[घ], @deva[ङ]. Sanskrit: @deva[कण्ठ्याः].",
    category: "samjna",
  },
  {
    term: "palatal",
    termRoman: "palatal",
    meaning:
      "Sounds made at palate (@deva[तालव्य]): @deva[च], @deva[छ], @deva[ज], @deva[झ], @deva[ञ]. Sanskrit: @deva[तालव्याः].",
    category: "samjna",
  },
  {
    term: "labial",
    termRoman: "labial",
    meaning:
      "Sounds made at lips (@deva[ओष्ठ्य]): @deva[प], @deva[फ], @deva[ब], @deva[भ], @deva[म]. Sanskrit: @deva[ओष्ठ्याः].",
    category: "samjna",
  },

  // Common anuvṛtti words - Sanskrit particles and case forms
  {
    term: "इति",
    termRoman: "iti",
    meaning:
      "Thus, so, end-quote marker. Used to mark the end of a quotation or to indicate 'in this sense'.",
    category: "general",
  },
  {
    term: "च",
    termRoman: "ca",
    meaning:
      "And, also. Conjunction indicating addition or inclusion of another element.",
    category: "general",
  },
  {
    term: "वा",
    termRoman: "vā",
    meaning:
      "Or, optionally. Indicates an alternative or optional application of a rule.",
    category: "general",
  },
  {
    term: "न",
    termRoman: "na",
    meaning: "Not. Negation particle blocking or excluding something.",
    category: "general",
  },
  {
    term: "परः",
    termRoman: "paraḥ",
    meaning:
      "Following, subsequent. Indicates that something comes after or is placed after another element.",
    category: "samjna",
  },
  {
    term: "तस्य",
    termRoman: "tasya",
    meaning:
      "Of that (genitive). Refers back to a previously mentioned element.",
    category: "general",
  },
  {
    term: "अस्य",
    termRoman: "asya",
    meaning:
      "Of this (genitive). Refers to the current or nearby element under discussion.",
    category: "general",
  },
  {
    term: "तत्",
    termRoman: "tat",
    meaning: "That. Demonstrative pronoun referring to something mentioned.",
    category: "general",
  },
  {
    term: "तत्र",
    termRoman: "tatra",
    meaning:
      "There, in that case. Locative adverb indicating context or condition.",
    category: "general",
  },
  {
    term: "अस्मिन्",
    termRoman: "asmin",
    meaning:
      "In this (locative). Indicates the context or domain of application.",
    category: "general",
  },

  // Common grammatical terms from anuvṛtti
  {
    term: "प्रत्ययः",
    termRoman: "pratyayaḥ",
    meaning:
      "Affix, suffix. The nominative form of @deva[प्रत्यय] used in sūtra statements.",
    category: "pratyaya",
    related: ["pratyaya"],
  },
  {
    term: "धातोः",
    termRoman: "dhātoḥ",
    meaning:
      "After a root (ablative). Indicates that something follows or is added after a @deva[धातु].",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "अङ्गस्य",
    termRoman: "aṅgasya",
    meaning:
      "Of the stem (genitive). Refers to operations on the @deva[अङ्ग] (stem before an affix).",
    category: "samjna",
    related: ["aṅga"],
  },
  {
    term: "अङ्गात्",
    termRoman: "aṅgāt",
    meaning:
      "After the stem (ablative). Indicates something follows the @deva[अङ्ग].",
    category: "samjna",
    related: ["aṅga"],
  },
  {
    term: "पदस्य",
    termRoman: "padasya",
    meaning:
      "Of the word (genitive). Refers to operations on a complete @deva[पद].",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "लोपः",
    termRoman: "lopaḥ",
    meaning:
      "Elision, deletion. The nominative form indicating that deletion occurs.",
    category: "samjna",
    related: ["lopa"],
  },
  {
    term: "आदेशः",
    termRoman: "ādeśaḥ",
    meaning:
      "Substitution. The nominative form indicating that a replacement occurs.",
    category: "samjna",
    related: ["ādeśa"],
  },
  {
    term: "विभाषा",
    termRoman: "vibhāṣā",
    meaning: "Option, alternative. Indicates that a rule applies optionally.",
    category: "samjna",
  },
  {
    term: "अन्यतरस्याम्",
    termRoman: "anyatarasyām",
    meaning:
      "Optionally, in one of two alternatives. Similar to @deva[विभाषा].",
    category: "samjna",
  },
  {
    term: "सार्वधातुके",
    termRoman: "sārvadhātuke",
    meaning:
      "When a @deva[सार्वधातुक] affix follows (locative). Condition for many rules.",
    category: "pratyaya",
    related: ["sārvadhātuka"],
  },
  {
    term: "आत्मनेपदम्",
    termRoman: "ātmanepadam",
    meaning:
      "Middle voice (nominative). Indicates @deva[आत्मनेपद] endings are used.",
    category: "samjna",
    related: ["ātmanepada"],
  },
  {
    term: "प्रातिपदिकात्",
    termRoman: "prātipadikāt",
    meaning:
      "After a nominal stem (ablative). Indicates affixes added after @deva[प्रातिपदिक].",
    category: "samjna",
    related: ["prātipadika"],
  },
  {
    term: "उपधायाः",
    termRoman: "upadhāyāḥ",
    meaning:
      "Of the penultimate (genitive). Refers to the letter before the final.",
    category: "samjna",
    related: ["upadhā"],
  },
  {
    term: "दीर्घः",
    termRoman: "dīrghaḥ",
    meaning: "Long (vowel). Nominative form indicating lengthening occurs.",
    category: "sandhi",
    related: ["dīrgha"],
  },
  {
    term: "वृद्धिः",
    termRoman: "vṛddhiḥ",
    meaning:
      "Strengthened vowel grade (nominative). Indicates @deva[वृद्धि] substitution.",
    category: "samjna",
    related: ["vṛddhi"],
  },
  {
    term: "गुणः",
    termRoman: "guṇaḥ",
    meaning:
      "Medium vowel grade (nominative). Indicates @deva[गुण] substitution.",
    category: "samjna",
    related: ["guṇa"],
  },
  {
    term: "उदात्तः",
    termRoman: "udāttaḥ",
    meaning:
      "High-pitched accent (nominative). Indicates @deva[उदात्त] accent is assigned.",
    category: "samjna",
    related: ["anudātta"],
  },
  {
    term: "सर्वनामस्थाने",
    termRoman: "sarvanāmasthāne",
    meaning:
      "In strong cases (locative). When nominative/accusative endings follow.",
    category: "samjna",
    related: ["sarvanāmasthāna"],
  },
  {
    term: "संहितायाम्",
    termRoman: "saṃhitāyām",
    meaning:
      "In close contact (locative). When sounds are in @deva[संहिता] proximity.",
    category: "sandhi",
    related: ["saṃhitā"],
  },
  {
    term: "छन्दसि",
    termRoman: "chandasi",
    meaning:
      "In Vedic (locative). Indicates a rule applies only in Vedic texts.",
    category: "general",
  },
  {
    term: "संज्ञायाम्",
    termRoman: "saṃjñāyām",
    meaning:
      "In a proper name (locative). Indicates a rule applies to proper nouns.",
    category: "samjna",
  },
  {
    term: "कर्त्तरि",
    termRoman: "kartari",
    meaning: "When the agent is expressed (locative). Active voice condition.",
    category: "karaka",
    related: ["kartṛ"],
  },
  {
    term: "कर्मणि",
    termRoman: "karmaṇi",
    meaning:
      "When the object is expressed (locative). Passive voice condition.",
    category: "karaka",
    related: ["karman"],
  },
  {
    term: "विभक्तौ",
    termRoman: "vibhaktau",
    meaning:
      "In a case ending (locative). When a particular @deva[विभक्ति] follows.",
    category: "vibhakti",
    related: ["vibhakti"],
  },
  {
    term: "प्रथमात्",
    termRoman: "prathamāt",
    meaning:
      "After the first (ablative). After something in nominative or the first element.",
    category: "vibhakti",
  },
  {
    term: "तिङः",
    termRoman: "tiṅaḥ",
    meaning: "Of @deva[तिङ्] (genitive). Referring to verbal personal endings.",
    category: "pratyaya",
    related: ["tiṅ"],
  },
  {
    term: "सुपि",
    termRoman: "supi",
    meaning:
      "When @deva[सुप्] follows (locative). When nominal case endings follow.",
    category: "pratyaya",
    related: ["sup"],
  },
  {
    term: "हलि",
    termRoman: "hali",
    meaning:
      "When a consonant follows (locative). Condition for many sandhi rules.",
    category: "pratyahara",
    related: ["hal"],
  },
  {
    term: "अचि",
    termRoman: "aci",
    meaning:
      "When a vowel follows (locative). Condition for many sandhi rules.",
    category: "pratyahara",
    related: ["ac"],
  },
  {
    term: "अचः",
    termRoman: "acaḥ",
    meaning: "Of a vowel (genitive/ablative). Refers to vowels in operations.",
    category: "pratyahara",
    related: ["ac"],
  },
  {
    term: "इकः",
    termRoman: "ikaḥ",
    meaning:
      "Of @deva[इक्] vowels (genitive). Refers to @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ].",
    category: "pratyahara",
    related: ["ik"],
  },
  {
    term: "आत्",
    termRoman: "āt",
    meaning:
      "The vowel @deva[आ] (with @deva[त्] as @deva[इत्]). Refers to long @deva[आ] specifically.",
    category: "pratyahara",
  },
  {
    term: "अत्",
    termRoman: "at",
    meaning:
      "The vowel @deva[अ] (with @deva[त्] as @deva[इत्]). Refers to short @deva[अ] specifically.",
    category: "pratyahara",
  },
  {
    term: "इत्",
    termRoman: "it",
    meaning:
      "Marker letter (nominative). Technical designation for indicatory letters.",
    category: "samjna",
    related: ["anubandha"],
  },
  {
    term: "क्ङिति",
    termRoman: "kṅiti",
    meaning:
      "When @deva[क्] or @deva[ङ्] marked affix follows (locative). Blocks @deva[गुण]/@deva[वृद्धि].",
    category: "samjna",
    related: ["kit", "ṅit"],
  },
  {
    term: "उपदेशे",
    termRoman: "upadeśe",
    meaning:
      "In original statement (locative). In the technical enunciation of roots/affixes.",
    category: "samjna",
  },
  {
    term: "उपसर्गात्",
    termRoman: "upasargāt",
    meaning: "After a prefix (ablative). When a verbal prefix precedes.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "समर्थानाम्",
    termRoman: "samarthānām",
    meaning:
      "Of those syntactically connected (genitive). Elements in grammatical relation.",
    category: "samjna",
  },
  {
    term: "पूर्वपरयोः",
    termRoman: "pūrvaparayoḥ",
    meaning:
      "Of the preceding and following (genitive dual). Both elements in a junction.",
    category: "sandhi",
  },
  {
    term: "तद्धितः",
    termRoman: "taddhitaḥ",
    meaning: "Secondary suffix (nominative). A @deva[तद्धित] affix is used.",
    category: "pratyaya",
    related: ["taddhita"],
  },
  {
    term: "भावः",
    termRoman: "bhāvaḥ",
    meaning:
      "Abstract state, being (nominative). The sense of abstract action or state.",
    category: "general",
    related: ["bhāva"],
  },
  {
    term: "लस्य",
    termRoman: "lasya",
    meaning:
      "Of @deva[ल] (genitive). Referring to the @deva[लकार] tense-mood markers.",
    category: "lakara",
  },
  {
    term: "भस्य",
    termRoman: "bhasya",
    meaning: "Of @deva[भ] (genitive). Technical term for certain stem forms.",
    category: "samjna",
  },
  {
    term: "तत्पुरुषस्य",
    termRoman: "tatpuruṣasya",
    meaning:
      "Of a @deva[तत्पुरुष] compound (genitive). Referring to determinative compounds.",
    category: "samasa",
    related: ["tatpuruṣa"],
  },
  {
    term: "द्विगोः",
    termRoman: "dvigoḥ",
    meaning:
      "Of a @deva[द्विगु] compound (genitive). Referring to numeral compounds.",
    category: "samasa",
    related: ["dvigu"],
  },
  {
    term: "गोत्रे",
    termRoman: "gotre",
    meaning:
      "In a clan name (locative). When forming patronymics or family names.",
    category: "samjna",
    related: ["gotra"],
  },
  {
    term: "अपत्यम्",
    termRoman: "apatyam",
    meaning:
      "Offspring, descendant (nominative). The meaning of patronymic suffixes.",
    category: "samjna",
    related: ["apatya"],
  },
  {
    term: "देशे",
    termRoman: "deśe",
    meaning: "In a region/place (locative). Geographic or locational context.",
    category: "general",
    related: ["deśa"],
  },
  {
    term: "समूहः",
    termRoman: "samūhaḥ",
    meaning:
      "Collection, group (nominative). Collective meaning of certain affixes.",
    category: "general",
  },
  {
    term: "निपात्यते",
    termRoman: "nipātyate",
    meaning:
      "Is listed as an exception. Irregular form that must be memorized.",
    category: "samjna",
  },
  {
    term: "प्राक्",
    termRoman: "prāk",
    meaning:
      "Before, prior to. Indicates scope extending up to a certain point.",
    category: "general",
  },
  {
    term: "च्लेः",
    termRoman: "cleḥ",
    meaning: "Of @deva[च्लि] (genitive). The aorist @deva[विकरण] marker.",
    category: "pratyaya",
  },
  {
    term: "सौ",
    termRoman: "sau",
    meaning:
      "When @deva[सु] follows (locative). The nominative singular ending.",
    category: "pratyaya",
  },

  // Common suffix names
  {
    term: "ठक्",
    termRoman: "ṭhak",
    meaning:
      "Taddhita suffix (= @deva[इक]). Forms derivatives like @deva[वैदिक] 'Vedic'.",
    category: "pratyaya",
  },
  {
    term: "ठञ्",
    termRoman: "ṭhañ",
    meaning:
      "Taddhita suffix (= @deva[इक]). Variant of @deva[ठक्] with different accent.",
    category: "pratyaya",
  },
  {
    term: "अण्",
    termRoman: "aṇ",
    meaning:
      "Taddhita suffix (= @deva[अ] with @deva[वृद्धि]). Forms patronymics and derivatives.",
    sutraRef: "4.1.83",
    category: "pratyaya",
  },
  {
    term: "अञ्",
    termRoman: "añ",
    meaning:
      "Taddhita suffix (= @deva[अ]). Forms derivatives with @deva[वृद्धि] of first vowel.",
    category: "pratyaya",
  },
  {
    term: "णः",
    termRoman: "ṇaḥ",
    meaning:
      "The suffix @deva[ण] (= @deva[अ]). Often a shortened reference to @deva[अण्].",
    category: "pratyaya",
  },
  {
    term: "कन्",
    termRoman: "kan",
    meaning:
      "Diminutive/affectionate suffix (= @deva[क]). @deva[पुत्र] → @deva[पुत्रक] 'little son'.",
    category: "pratyaya",
  },
  {
    term: "खः",
    termRoman: "khaḥ",
    meaning:
      "Taddhita suffix (= @deva[ईन]). Forms adjectives meaning 'relating to'.",
    category: "pratyaya",
  },
  {
    term: "छः",
    termRoman: "chaḥ",
    meaning: "Taddhita suffix (= @deva[ईय]). Forms adjectives of relation.",
    category: "pratyaya",
  },
  {
    term: "टच्",
    termRoman: "ṭac",
    meaning:
      "Taddhita suffix (= @deva[अ]). Forms derivatives in various senses.",
    category: "pratyaya",
  },
  {
    term: "नुम्",
    termRoman: "num",
    meaning:
      "Augment @deva[न्] inserted in certain forms. Appears before final consonant.",
    sutraRef: "7.1.58",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "मतुँप्",
    termRoman: "matup",
    meaning:
      "Possessive suffix (= @deva[मत्]/@deva[वत्]). 'Having X': @deva[धन] → @deva[धनवत्].",
    sutraRef: "5.2.94",
    category: "pratyaya",
  },
  {
    term: "कृञः",
    termRoman: "kṛñaḥ",
    meaning:
      "Of the root @deva[कृ] 'to do' (genitive). Special rules apply to this root.",
    category: "samjna",
  },

  // English grammatical terms
  {
    term: "augment",
    termRoman: "augment",
    meaning:
      "An element inserted into a form (@deva[आगम]). E.g., @deva[इट्] before certain affixes, @deva[अट्] in past tenses.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "elision",
    termRoman: "elision",
    meaning:
      "Deletion of a sound or element (@deva[लोप]). Complete removal from the form.",
    category: "samjna",
    related: ["lopa"],
  },
  {
    term: "substitution",
    termRoman: "substitution",
    meaning:
      "Replacement of one element by another (@deva[आदेश]). The substitute takes the place of the original.",
    category: "samjna",
    related: ["ādeśa"],
  },
  {
    term: "reduplication",
    termRoman: "reduplication",
    meaning:
      "Doubling of part of a root (@deva[द्वित्व]). Creates @deva[अभ्यास] (reduplicated portion). Used in perfect, intensive, etc.",
    category: "samjna",
    related: ["abhyāsa"],
  },
  {
    term: "governing rule",
    termRoman: "governing rule",
    meaning:
      "A rule whose scope extends over subsequent rules (@deva[अधिकार]). Its terms continue by @deva[अनुवृत्ति].",
    category: "samjna",
    related: ["adhikāra"],
  },
  {
    term: "exception",
    termRoman: "exception",
    meaning:
      "A rule that overrides a more general rule (@deva[अपवाद]). More specific rules take precedence.",
    category: "samjna",
  },
  {
    term: "paradigm",
    termRoman: "paradigm",
    meaning:
      "Complete set of inflected forms. All forms of a noun declension or verb conjugation.",
    category: "general",
  },
  {
    term: "conjugation",
    termRoman: "conjugation",
    meaning:
      "Verb inflection for person, number, tense, mood. The system of @deva[तिङन्त] forms.",
    category: "general",
    related: ["tiṅ"],
  },
  {
    term: "declension",
    termRoman: "declension",
    meaning:
      "Noun inflection for case and number. The system of @deva[सुबन्त] forms.",
    category: "general",
    related: ["sup"],
  },
  {
    term: "inflection",
    termRoman: "inflection",
    meaning:
      "Modification of a word for grammatical function. Adding @deva[विभक्ति] (case/verb endings).",
    category: "general",
    related: ["vibhakti"],
  },

  // High-frequency anuvṛtti terms
  {
    term: "प्रथमात्",
    termRoman: "prathamāt",
    meaning:
      "From the first (ablative). Indicates the starting point, typically the first vowel or sound of a pratyāhāra.",
    category: "samjna",
  },
  {
    term: "समर्थानाम्",
    termRoman: "samarthānām",
    meaning:
      "Of those that are semantically connected (genitive plural). Words that form a meaningful unit together.",
    sutraRef: "2.1.1",
    category: "samjna",
  },
  {
    term: "छन्दसि",
    termRoman: "chandasi",
    meaning:
      "In Vedic (locative). Indicates that a rule applies specifically to Vedic Sanskrit, not classical Sanskrit.",
    category: "samjna",
  },
  {
    term: "संज्ञायाम्",
    termRoman: "saṃjñāyām",
    meaning:
      "In a proper name (locative). Indicates that a rule applies when forming proper nouns or technical terms.",
    category: "samjna",
  },
  {
    term: "ठक्",
    termRoman: "ṭhak",
    meaning:
      "Taddhita suffix (= @deva[इक]). Forms derivatives meaning 'relating to'. @deva[विद्या] → @deva[वैदिक] 'relating to the Vedas'.",
    category: "pratyaya",
  },
  {
    term: "अन्यतरस्याम्",
    termRoman: "anyatarasyām",
    meaning:
      "Optionally (locative). Indicates that a rule may or may not apply - the speaker has a choice.",
    category: "general",
  },
  {
    term: "अचि",
    termRoman: "aci",
    meaning:
      "Before a vowel (locative of @deva[अच्]). Indicates the phonetic context where a rule applies.",
    category: "pratyahara",
    related: ["ac"],
  },
  {
    term: "पदस्य",
    termRoman: "padasya",
    meaning:
      "Of a word (genitive). Refers to operations that apply to a complete inflected word (@deva[पद]).",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "अङ्गात्",
    termRoman: "aṅgāt",
    meaning:
      "After the stem (ablative). Indicates that something is added after the @deva[अङ्ग] (stem before an affix).",
    category: "samjna",
    related: ["aṅga"],
  },
  {
    term: "कन्",
    termRoman: "kan",
    meaning:
      "Taddhita suffix (= @deva[क]). Diminutive or endearment suffix. @deva[पुत्र] → @deva[पुत्रक] 'little son'.",
    category: "pratyaya",
  },
  {
    term: "खः",
    termRoman: "khaḥ",
    meaning:
      "Taddhita suffix (= @deva[ईन]). Forms derivatives. @deva[कुल] → @deva[कुलीन] 'of good family'.",
    category: "pratyaya",
  },
  {
    term: "छः",
    termRoman: "chaḥ",
    meaning:
      "Taddhita suffix (= @deva[ईय]). Forms derivatives meaning 'belonging to'. @deva[पृथिवी] → @deva[पार्थिव] 'earthly'.",
    category: "pratyaya",
  },
  {
    term: "उपधायाः",
    termRoman: "upadhāyāḥ",
    meaning:
      "Of the penultimate (genitive). Refers to the vowel or letter before the final one in a form.",
    sutraRef: "1.1.65",
    category: "samjna",
    related: ["upadhā"],
  },
  {
    term: "णः",
    termRoman: "ṇaḥ",
    meaning:
      "Of @deva[ण] (genitive). Often refers to the retroflex nasal in sandhi or affix contexts.",
    category: "samjna",
  },
  {
    term: "पूर्वपरयोः",
    termRoman: "pūrvaparayoḥ",
    meaning:
      "Of the preceding and following (genitive dual). Both elements involved in a substitution or sandhi.",
    category: "samjna",
  },
  {
    term: "एकः",
    termRoman: "ekaḥ",
    meaning: "One, single. A single substitute replaces multiple elements.",
    category: "general",
  },
  {
    term: "टच्",
    termRoman: "ṭac",
    meaning:
      "Kṛt suffix (= @deva[अ]). Forms action nouns and agent nouns from roots.",
    category: "pratyaya",
  },
  {
    term: "हलि",
    termRoman: "hali",
    meaning:
      "Before a consonant (locative of @deva[हल्]). Phonetic context: when followed by a consonant.",
    category: "pratyahara",
    related: ["hal"],
  },
  {
    term: "भस्य",
    termRoman: "bhasya",
    meaning:
      "Of @deva[भ] (genitive). Refers to the technical designation for weak stem forms in certain nominal paradigms.",
    sutraRef: "1.4.18",
    category: "samjna",
  },
  {
    term: "लस्य",
    termRoman: "lasya",
    meaning:
      "Of @deva[ल] (genitive). Refers to the @deva[ल]-sound or @deva[ल]-initial elements in grammatical operations.",
    category: "samjna",
  },
  {
    term: "अञ्",
    termRoman: "añ",
    meaning:
      "Taddhita suffix (= @deva[अ] with vṛddhi). Forms patronymics and derivatives. @deva[दक्ष] → @deva[दाक्ष].",
    category: "pratyaya",
  },
  {
    term: "तत्पुरुषस्य",
    termRoman: "tatpuruṣasya",
    meaning:
      "Of a tatpuruṣa compound (genitive). Rules applying to determinative compounds.",
    category: "samasa",
    related: ["tatpuruṣa"],
  },
  {
    term: "सुपि",
    termRoman: "supi",
    meaning:
      "When a @deva[सुप्] (case ending) follows (locative). Context for operations before nominal endings.",
    category: "pratyaya",
    related: ["sup"],
  },
  {
    term: "अचः",
    termRoman: "acaḥ",
    meaning:
      "Of a vowel (genitive of @deva[अच्]). Refers to vowels as the domain of an operation.",
    category: "pratyahara",
    related: ["ac"],
  },
  {
    term: "उदात्तः",
    termRoman: "udāttaḥ",
    meaning:
      "High-pitched accent (udātta). The raised accent in Vedic recitation, marked by an upward tone.",
    category: "samjna",
    related: ["anudātta"],
  },
  {
    term: "सर्वनामस्थाने",
    termRoman: "sarvanāmasthāne",
    meaning:
      "In the strong cases (locative). The nominative and accusative cases where stems strengthen.",
    sutraRef: "1.1.42",
    category: "samjna",
    related: ["sarvanāmasthāna"],
  },
  {
    term: "विभक्तौ",
    termRoman: "vibhaktau",
    meaning:
      "In a case ending (locative). When a @deva[विभक्ति] (inflectional ending) is involved.",
    category: "vibhakti",
    related: ["vibhakti"],
  },
  {
    term: "कृञः",
    termRoman: "kṛñaḥ",
    meaning:
      "Of the root @deva[कृ] 'to do' (genitive). Special rules for this common root (class 8).",
    category: "gana",
  },
  {
    term: "कर्मणि",
    termRoman: "karmaṇi",
    meaning:
      "In the object/passive sense (locative). When the object is grammatical subject (passive voice).",
    category: "karaka",
    related: ["karman", "karmaṇi prayoga"],
  },
  {
    term: "प्रातिपदिकात्",
    termRoman: "prātipadikāt",
    meaning:
      "After a nominal stem (ablative). Indicates affixes added to @deva[प्रातिपदिक] (uninflected noun stems).",
    category: "samjna",
    related: ["prātipadika"],
  },
  {
    term: "गोत्रे",
    termRoman: "gotre",
    meaning:
      "In a clan name (locative). When forming patronymics or family names.",
    category: "samjna",
    related: ["gotra", "apatya"],
  },
  {
    term: "देशे",
    termRoman: "deśe",
    meaning:
      "In a place/region (locative). When referring to geographical or regional contexts.",
    category: "general",
    related: ["deśa"],
  },
  {
    term: "कर्त्तरि",
    termRoman: "karttari",
    meaning:
      "In the agent sense (locative). When the agent is grammatical subject (active voice).",
    category: "karaka",
    related: ["kartṛ", "kartari prayoga"],
  },
  {
    term: "द्विगोः",
    termRoman: "dvigoḥ",
    meaning:
      "Of a dvigu compound (genitive). Rules for numeral compounds like @deva[त्रिलोक] 'three worlds'.",
    category: "samasa",
    related: ["dvigu"],
  },
  {
    term: "समूहः",
    termRoman: "samūhaḥ",
    meaning:
      "Collection, group. Meaning 'a group of' when forming collective nouns.",
    category: "general",
  },
  {
    term: "उपसर्गात्",
    termRoman: "upasargāt",
    meaning:
      "After a prefix (ablative). Rules applying when a verbal prefix (@deva[उपसर्ग]) precedes.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "क्ङिति",
    termRoman: "kṅiti",
    meaning:
      "When @deva[क्] or @deva[ङ्] is an @deva[इत्] marker (locative). Condition blocking guṇa/vṛddhi.",
    sutraRef: "1.1.5",
    category: "samjna",
    related: ["kit", "ṅit"],
  },
  {
    term: "च्लेः",
    termRoman: "cleḥ",
    meaning:
      "Of @deva[च्लि] (genitive). The aorist marker, appears in @deva[लुङ्] formations.",
    category: "pratyaya",
    related: ["luṅ"],
  },
  {
    term: "आत्",
    termRoman: "āt",
    meaning:
      "After @deva[आ] / from @deva[आ] (ablative). Often indicates operations after the vowel @deva[आ].",
    category: "samjna",
  },
  {
    term: "इकः",
    termRoman: "ikaḥ",
    meaning:
      "Of an @deva[इक्] vowel (genitive). Refers to @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] vowels.",
    category: "pratyahara",
    related: ["ik"],
  },
  {
    term: "प्राक्",
    termRoman: "prāk",
    meaning:
      "Before, up to. Indicates the scope of a rule extends up to a certain point.",
    category: "samjna",
  },
  {
    term: "तिङः",
    termRoman: "tiṅaḥ",
    meaning:
      "Of a @deva[तिङ्] ending (genitive). Refers to the 18 verbal personal endings.",
    category: "pratyaya",
    related: ["tiṅ"],
  },
  {
    term: "सौ",
    termRoman: "sau",
    meaning:
      "When @deva[सु] (nominative singular ending) follows (locative). Context for stem changes before this ending.",
    category: "vibhakti",
  },
  {
    term: "झलि",
    termRoman: "jhali",
    meaning:
      "Before a @deva[झल्] consonant (locative). Obstruent consonants (stops and sibilants) as context.",
    category: "pratyahara",
    related: ["jhal"],
  },
  {
    term: "उपदेशे",
    termRoman: "upadeśe",
    meaning:
      "In original statement (locative). Refers to the form as originally taught/listed, before any operations.",
    sutraRef: "1.3.2",
    category: "samjna",
  },
  {
    term: "अतिशायने",
    termRoman: "atiśāyane",
    meaning:
      "In the superlative sense (locative). When expressing 'most' or extreme degree.",
    category: "general",
  },
  {
    term: "डाच्",
    termRoman: "ḍāc",
    meaning:
      "Taddhita suffix (= @deva[आ]). Forms feminine derivatives and abstracts.",
    category: "pratyaya",
  },
  {
    term: "असम्बुद्धौ",
    termRoman: "asambuddhau",
    meaning:
      "Not in vocative (locative). Indicates a rule does NOT apply in the vocative case.",
    category: "vibhakti",
    related: ["sambodhana"],
  },
  {
    term: "ह्रस्वः",
    termRoman: "hrasvaḥ",
    meaning:
      "Short (vowel). A vowel of one mātrā duration: @deva[अ], @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ].",
    category: "sandhi",
    related: ["hrasva", "dīrgha"],
  },
  {
    term: "स्त्रियाम्",
    termRoman: "striyām",
    meaning:
      "In the feminine (locative). When forming or referring to feminine gender forms.",
    category: "samjna",
    related: ["strīliṅga"],
  },
  {
    term: "सङ्ख्यायाः",
    termRoman: "saṅkhyāyāḥ",
    meaning:
      "Of a numeral (genitive). Rules applying to number words like @deva[एक], @deva[द्वि], @deva[त्रि].",
    category: "general",
  },
  {
    term: "अन्ते",
    termRoman: "ante",
    meaning:
      "At the end (locative). Indicates position at the end of a word or morpheme.",
    category: "general",
  },
  {
    term: "प्रगृह्यम्",
    termRoman: "pragṛhyam",
    meaning:
      "Exempt from sandhi. Vowels that don't undergo sandhi with following vowels (e.g., dual endings).",
    sutraRef: "1.1.11",
    category: "sandhi",
  },
  {
    term: "आदिः",
    termRoman: "ādiḥ",
    meaning:
      "Beginning, first. Refers to the initial element of a sequence or compound.",
    category: "general",
  },
  {
    term: "इनिः",
    termRoman: "iniḥ",
    meaning:
      "Taddhita suffix (= @deva[इन्]). Possessive meaning 'having'. @deva[धन] → @deva[धनिन्] 'wealthy'.",
    category: "pratyaya",
    related: ["in"],
  },
  {
    term: "नित्यम्",
    termRoman: "nityam",
    meaning:
      "Always, obligatorily. Indicates a rule applies without exception or option.",
    category: "general",
  },
  {
    term: "नलोपः",
    termRoman: "nalopaḥ",
    meaning:
      "Deletion of @deva[न]. The elision of the consonant @deva[न] in certain contexts.",
    category: "sandhi",
    related: ["lopa"],
  },
  {
    term: "सप्तम्याः",
    termRoman: "saptamyāḥ",
    meaning:
      "Of the locative (genitive). Rules concerning the seventh case (@deva[सप्तमी]).",
    category: "vibhakti",
    related: ["saptamī"],
  },
  {
    term: "कुप्वोः",
    termRoman: "kupvoḥ",
    meaning:
      "Of @deva[कु] and @deva[पु] (genitive dual). Refers to guttural and labial sounds in sandhi rules.",
    category: "pratyahara",
  },
  {
    term: "पूर्वस्य",
    termRoman: "pūrvasya",
    meaning:
      "Of the preceding (genitive). The prior element in a sequence or sandhi context.",
    category: "general",
  },
  {
    term: "परश्च",
    termRoman: "paraśca",
    meaning:
      "And following. Both the substitute is placed after (@deva[परः]) and (@deva[च]) another condition.",
    category: "general",
  },
  {
    term: "टेः",
    termRoman: "ṭeḥ",
    meaning:
      "Of @deva[टि] (genitive). The final portion of a word (last vowel and what follows).",
    sutraRef: "1.1.64",
    category: "samjna",
    related: ["ṭi"],
  },
  {
    term: "ठन्",
    termRoman: "ṭhan",
    meaning:
      "Taddhita suffix (= @deva[इक]). Similar to @deva[ठक्], forms relational derivatives.",
    category: "pratyaya",
    related: ["ṭhak"],
  },
  {
    term: "ष्ठन्",
    termRoman: "ṣṭhan",
    meaning:
      "Taddhita suffix (= @deva[इक]). Variant of @deva[ठन्] after certain stems.",
    category: "pratyaya",
    related: ["ṭhan"],
  },
  {
    term: "अनुकम्पायाम्",
    termRoman: "anukampāyām",
    meaning:
      "In compassion/pity (locative). When the meaning involves sympathy or endearment.",
    category: "general",
  },
  {
    term: "सर्वनामानि",
    termRoman: "sarvanāmāni",
    meaning:
      "Pronouns (nominative plural). The class of words like @deva[सर्व], @deva[विश्व], @deva[तद्], @deva[किम्].",
    sutraRef: "1.1.27",
    category: "samjna",
  },
  {
    term: "अपादानम्",
    termRoman: "apādānam",
    meaning:
      "The source kāraka (nominative). The fixed point from which separation occurs.",
    sutraRef: "1.4.24",
    category: "karaka",
    related: ["apādāna"],
  },
  {
    term: "सुपा",
    termRoman: "supā",
    meaning:
      "By a @deva[सुप्] ending (instrumental). Operations involving nominal case endings.",
    category: "pratyaya",
    related: ["sup"],
  },
  {
    term: "बहुलम्",
    termRoman: "bahulam",
    meaning:
      "Variously, in many ways. Indicates a rule has many exceptions or applies irregularly.",
    category: "general",
  },
  {
    term: "आतः",
    termRoman: "ātaḥ",
    meaning:
      "After @deva[आ] (ablative). Following a stem or element ending in the vowel @deva[आ].",
    category: "samjna",
  },
  {
    term: "यञ्",
    termRoman: "yañ",
    meaning:
      "Taddhita suffix (= @deva[य]). Forms patronymics with vṛddhi. @deva[गर्ग] → @deva[गार्ग्य].",
    category: "pratyaya",
  },
  {
    term: "क्षत्रियात्",
    termRoman: "kṣatriyāt",
    meaning:
      "After a kṣatriya name (ablative). Special suffixes for warrior-class proper names.",
    category: "general",
  },
  {
    term: "जनपदशब्दात्",
    termRoman: "janapadaśabdāt",
    meaning:
      "After a regional word (ablative). Derivatives from names of countries or regions.",
    category: "general",
  },
  {
    term: "निर्वृत्तम्",
    termRoman: "nirvṛttam",
    meaning:
      "Completed, finished. Something that has been produced or accomplished.",
    category: "general",
  },
  {
    term: "निवासः",
    termRoman: "nivāsaḥ",
    meaning:
      "Residence, dwelling. The meaning 'one who lives in' for taddhita derivatives.",
    category: "general",
  },
  {
    term: "प्राग्दीव्यतीयः",
    termRoman: "prāgdīvyatīyaḥ",
    meaning:
      "Before the 'dīvyati' section. Scope marker for taddhita rules in adhyāya 4.",
    category: "samjna",
  },
  {
    term: "खञ्",
    termRoman: "khañ",
    meaning:
      "Taddhita suffix (= @deva[ईन]). Forms adjectives meaning 'relating to'.",
    category: "pratyaya",
  },
  {
    term: "अह्नः",
    termRoman: "ahnaḥ",
    meaning: "Of day (genitive). Special rules for the word @deva[अहन्] 'day'.",
    category: "general",
  },
  {
    term: "नपुंसकात्",
    termRoman: "napuṃsakāt",
    meaning:
      "After a neuter (ablative). Rules applying after neuter gender stems.",
    category: "samjna",
    related: ["napuṃsakaliṅga"],
  },
  {
    term: "एकाचः",
    termRoman: "ekācaḥ",
    meaning:
      "Of a monosyllabic (genitive). Stems or roots having only one vowel.",
    category: "samjna",
  },
  {
    term: "दीर्घात्",
    termRoman: "dīrghāt",
    meaning:
      "After a long vowel (ablative). Following a vowel of two mātrā duration.",
    category: "sandhi",
    related: ["dīrgha"],
  },
  {
    term: "पदान्तात्",
    termRoman: "padāntāt",
    meaning:
      "After word-end (ablative). At the end of a complete word (@deva[पद]).",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "उभयथा",
    termRoman: "ubhayathā",
    meaning:
      "In both ways. Either option is acceptable; both alternatives are valid.",
    category: "general",
  },
  {
    term: "अभ्यासस्य",
    termRoman: "abhyāsasya",
    meaning:
      "Of the reduplication (genitive). The reduplicated portion in perfect, desiderative, etc.",
    category: "samjna",
    related: ["abhyāsa"],
  },
  {
    term: "अपदान्तस्य",
    termRoman: "apadāntasya",
    meaning: "Of non-word-final (genitive). Not at the end of a complete word.",
    category: "samjna",
  },
  {
    term: "हलः",
    termRoman: "halaḥ",
    meaning:
      "Of a consonant (genitive of @deva[हल्]). Refers to consonants as the domain of an operation.",
    category: "pratyahara",
    related: ["hal"],
  },
  {
    term: "शाकल्यस्य",
    termRoman: "śākalyasya",
    meaning:
      "Of Śākalya (genitive). According to the grammarian Śākalya; a variant teaching.",
    category: "general",
  },
  {
    term: "सम्बुद्धौ",
    termRoman: "sambuddhau",
    meaning:
      "In the vocative (locative). When the vocative case (direct address) applies.",
    category: "vibhakti",
    related: ["sambodhana"],
  },
  {
    term: "सर्वादीनि",
    termRoman: "sarvādīni",
    meaning:
      "Those beginning with @deva[सर्व] (nominative plural). The list of pronouns starting with @deva[सर्व].",
    sutraRef: "1.1.27",
    category: "samjna",
    related: ["sarvanāmāni"],
  },
  {
    term: "जसि",
    termRoman: "jasi",
    meaning:
      "When @deva[जस्] (nominative plural ending) follows (locative). Context for stem operations.",
    category: "vibhakti",
  },
  {
    term: "पूर्वः",
    termRoman: "pūrvaḥ",
    meaning: "Preceding, prior. The earlier element in a sequence.",
    category: "general",
  },
  {
    term: "वेः",
    termRoman: "veḥ",
    meaning: "Of @deva[वि] (genitive). Rules concerning the prefix @deva[वि].",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "क्रमः",
    termRoman: "kramaḥ",
    meaning:
      "Sequence, order. The order of application or arrangement of elements.",
    category: "general",
  },
  {
    term: "मत्वर्थे",
    termRoman: "matvarthe",
    meaning:
      "In the possessive sense (locative). When meaning 'having X', triggering @deva[मतुप्] etc.",
    category: "pratyaya",
    related: ["matup"],
  },
  {
    term: "त्रीणि",
    termRoman: "trīṇi",
    meaning:
      "Three (nominative neuter plural). The number three in neuter form.",
    category: "general",
  },
  {
    term: "हौ",
    termRoman: "hau",
    meaning:
      "When @deva[हि] follows (locative). Before the imperative particle @deva[हि].",
    category: "general",
  },
  {
    term: "ण्यः",
    termRoman: "ṇyaḥ",
    meaning:
      "Taddhita suffix (= @deva[य] with vṛddhi). Forms derivatives like @deva[वारुण्य] from @deva[वरुण].",
    category: "pratyaya",
  },
  {
    term: "वुञ्",
    termRoman: "vuñ",
    meaning:
      "Taddhita suffix (= @deva[अक]). Forms derivatives. @deva[नौ] → @deva[नाविक] 'sailor'.",
    category: "pratyaya",
  },
  {
    term: "तन्नाम्नि",
    termRoman: "tannāmni",
    meaning:
      "In that name (locative). When forming or referring to a proper name.",
    category: "general",
  },
  {
    term: "ऋतः",
    termRoman: "ṛtaḥ",
    meaning: "After @deva[ऋ] (ablative). Following the vowel @deva[ऋ].",
    category: "samjna",
  },
  {
    term: "ञ्यः",
    termRoman: "ñyaḥ",
    meaning:
      "Taddhita suffix (= @deva[य]). Variant of @deva[ण्यः] after certain stems.",
    category: "pratyaya",
    related: ["ṇyaḥ"],
  },
  {
    term: "काले",
    termRoman: "kāle",
    meaning:
      "In time (locative). When referring to temporal contexts or time expressions.",
    category: "general",
    related: ["kāla"],
  },
  {
    term: "प्रकारवचने",
    termRoman: "prakāravacane",
    meaning:
      "In expressing manner/type (locative). When indicating 'of this kind' or 'such'.",
    category: "general",
  },
  {
    term: "तसिः",
    termRoman: "tasiḥ",
    meaning:
      "The suffix @deva[तस्] (= @deva[तः]). Forms ablative adverbs: @deva[सर्व] → @deva[सर्वतः] 'from all sides'.",
    category: "pratyaya",
  },
  {
    term: "अकः",
    termRoman: "akaḥ",
    meaning:
      "Of @deva[अक्] vowels (genitive). The short vowels @deva[अ], @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ].",
    category: "pratyahara",
  },
  {
    term: "रोः",
    termRoman: "roḥ",
    meaning:
      "Of @deva[र] (genitive). Rules concerning the consonant @deva[र] (visarga sandhi etc.).",
    category: "samjna",
  },
  {
    term: "ङेः",
    termRoman: "ṅeḥ",
    meaning:
      "Of @deva[ङे] (genitive). The dative singular ending in operations.",
    category: "vibhakti",
  },
  {
    term: "सर्वनाम्नः",
    termRoman: "sarvanāmnaḥ",
    meaning: "Of a pronoun (genitive). Rules applying to the pronoun class.",
    category: "samjna",
    related: ["sarvanāmāni"],
  },
  {
    term: "ईट्",
    termRoman: "īṭ",
    meaning: "Augment @deva[ई]. Long @deva[ई] inserted in certain forms.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "मूर्धन्यः",
    termRoman: "mūrdhanyaḥ",
    meaning:
      "Retroflex (cerebral). Sounds made with tongue curled back: @deva[ट], @deva[ठ], @deva[ड], @deva[ढ], @deva[ण], @deva[ष].",
    category: "samjna",
  },
  {
    term: "यरः",
    termRoman: "yaraḥ",
    meaning:
      "Of @deva[यर्] (genitive). The semivowels and @deva[र] (all consonants except nasals).",
    category: "pratyahara",
  },
  {
    term: "सम्प्रसारणम्",
    termRoman: "samprasāraṇam",
    meaning:
      "Semivowel-to-vowel conversion. @deva[य]→@deva[इ], @deva[व]→@deva[उ], @deva[र]→@deva[ऋ], @deva[ल]→@deva[ऌ].",
    sutraRef: "1.1.45",
    category: "samjna",
    related: ["samprasāraṇa"],
  },
  {
    term: "अन्त्यस्य",
    termRoman: "antyasya",
    meaning: "Of the final (genitive). The last element in a sequence.",
    category: "general",
  },
  {
    term: "प्राचाम्",
    termRoman: "prācām",
    meaning:
      "Of the eastern grammarians (genitive plural). According to eastern grammatical tradition.",
    category: "general",
  },
  {
    term: "नेः",
    termRoman: "neḥ",
    meaning: "Of @deva[नि] (genitive). Rules concerning the prefix @deva[नि].",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "आङः",
    termRoman: "āṅaḥ",
    meaning:
      "Of @deva[आङ्] (genitive). The prefix @deva[आ] (used as @deva[आङ्] technically).",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "अकर्मकात्",
    termRoman: "akarmakāt",
    meaning:
      "After an intransitive (ablative). From a root that takes no object.",
    category: "samjna",
  },
  {
    term: "सुपः",
    termRoman: "supaḥ",
    meaning: "Of @deva[सुप्] (genitive). Refers to the nominal case endings.",
    category: "pratyaya",
    related: ["sup"],
  },
  {
    term: "श्नुः",
    termRoman: "śnuḥ",
    meaning:
      "The vikaraṇa @deva[श्नु] (nominative). Class 5 affix adding @deva[नु]/@deva[नो].",
    category: "pratyaya",
    related: ["śnu"],
  },
  {
    term: "आशिषि",
    termRoman: "āśiṣi",
    meaning:
      "In a benediction/blessing (locative). When expressing a wish or blessing (@deva[आशीर्लिङ्]).",
    category: "lakara",
    related: ["āśīrliṅ"],
  },
  {
    term: "ङितः",
    termRoman: "ṅitaḥ",
    meaning:
      "After a @deva[ङित्] element (ablative). Following something with @deva[ङ्] as @deva[इत्] marker.",
    category: "samjna",
    related: ["ṅit"],
  },
  {
    term: "फक्",
    termRoman: "phak",
    meaning:
      "Taddhita suffix (= @deva[आयन]). Forms patronymics. @deva[नड] → @deva[नाडायन].",
    category: "pratyaya",
  },
  {
    term: "फिञ्",
    termRoman: "phiñ",
    meaning: "Taddhita suffix (= @deva[आयनि]). Feminine patronymic suffix.",
    category: "pratyaya",
  },
  {
    term: "ओः",
    termRoman: "oḥ",
    meaning: "Of @deva[ओ] (genitive). Rules concerning the vowel @deva[ओ].",
    category: "samjna",
  },
  {
    term: "इनि",
    termRoman: "ini",
    meaning:
      "When @deva[इनि] follows (locative). The possessive suffix @deva[इन्] in context.",
    category: "pratyaya",
    related: ["in", "iniḥ"],
  },
  {
    term: "समासान्ताः",
    termRoman: "samāsāntāḥ",
    meaning:
      "Compound-final suffixes (nominative plural). Affixes added at the end of compounds.",
    category: "samasa",
  },
  {
    term: "तुक्",
    termRoman: "tuk",
    meaning:
      "Augment @deva[त्]. The consonant @deva[त्] inserted in certain forms.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "प्रथमयोः",
    termRoman: "prathamayoḥ",
    meaning:
      "Of the nominative and accusative (genitive dual). The first two cases (strong cases).",
    category: "vibhakti",
  },
  {
    term: "उत्तरपदे",
    termRoman: "uttarapade",
    meaning: "In the latter member (locative). The second part of a compound.",
    category: "samasa",
  },
  {
    term: "हन्तेः",
    termRoman: "hanteḥ",
    meaning:
      "Of the root @deva[हन्] 'to kill' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "इणः",
    termRoman: "iṇaḥ",
    meaning:
      "Of the root @deva[इ] 'to go' (genitive). Special rules for this root (class 2).",
    category: "gana",
  },
  {
    term: "एत्",
    termRoman: "et",
    meaning:
      "The vowel @deva[ए] as augment or substitute. Represents the sound @deva[ए].",
    category: "samjna",
  },
  {
    term: "आपः",
    termRoman: "āpaḥ",
    meaning:
      "Of @deva[आप्] (genitive). The root @deva[आप्] 'to obtain' or feminine marker @deva[आप्].",
    category: "samjna",
  },
  {
    term: "अपृक्ते",
    termRoman: "apṛkte",
    meaning:
      "When not joined (locative). When an element stands alone, not combined with another.",
    category: "general",
  },
  {
    term: "विसर्जनीयः",
    termRoman: "visarjanīyaḥ",
    meaning:
      "Visarga (@deva[ः]). The aspiration sound at end of words, derived from @deva[स्] or @deva[र्].",
    category: "sandhi",
    related: ["visarga"],
  },
  {
    term: "नः",
    termRoman: "naḥ",
    meaning:
      "Of @deva[न] (genitive). Rules concerning the dental nasal @deva[न].",
    category: "samjna",
  },
  {
    term: "समर्थानां",
    termRoman: "samarthānāṃ",
    meaning:
      "Of those semantically connected (genitive plural). Alternate spelling of @deva[समर्थानाम्].",
    category: "samjna",
    related: ["samarthānām"],
  },
  {
    term: "घः",
    termRoman: "ghaḥ",
    meaning:
      "Taddhita suffix (= @deva[अ] with special properties). Forms derivatives from nouns.",
    category: "pratyaya",
  },
  {
    term: "कालात्",
    termRoman: "kālāt",
    meaning:
      "After a time word (ablative). Derivatives from words denoting time.",
    category: "general",
    related: ["kāla"],
  },
  {
    term: "मः",
    termRoman: "maḥ",
    meaning:
      "Of @deva[म] (genitive). Rules concerning the labial nasal @deva[म].",
    category: "samjna",
  },
  {
    term: "लोटः",
    termRoman: "loṭaḥ",
    meaning:
      "Of @deva[लोट्] (genitive). Rules for the imperative mood endings.",
    category: "lakara",
    related: ["loṭ"],
  },
  {
    term: "लिङः",
    termRoman: "liṅaḥ",
    meaning: "Of @deva[लिङ्] (genitive). Rules for the optative mood endings.",
    category: "lakara",
    related: ["liṅ"],
  },
  {
    term: "किमः",
    termRoman: "kimaḥ",
    meaning:
      "Of @deva[किम्] (genitive). Special rules for the interrogative pronoun 'what/who'.",
    category: "samjna",
  },
  {
    term: "कारकम्",
    termRoman: "kārakam",
    meaning:
      "Semantic role (nominative). The relation of a noun to the verbal action.",
    category: "karaka",
    related: ["kāraka"],
  },
  {
    term: "षः",
    termRoman: "ṣaḥ",
    meaning: "Of @deva[ष] (genitive). Rules concerning the retroflex sibilant.",
    category: "samjna",
  },
  {
    term: "हः",
    termRoman: "haḥ",
    meaning:
      "Of @deva[ह] (genitive). Rules concerning the glottal fricative @deva[ह].",
    category: "samjna",
  },
  {
    term: "इवे",
    termRoman: "ive",
    meaning:
      "When @deva[इव] 'like' follows (locative). Context for operations before the comparison particle.",
    category: "general",
  },
  {
    term: "यू",
    termRoman: "yū",
    meaning: "Substitute @deva[यू]. Long @deva[ऊ] with preceding @deva[य्].",
    category: "samjna",
  },
  {
    term: "आमि",
    termRoman: "āmi",
    meaning:
      "When @deva[आम्] follows (locative). Context for genitive plural ending.",
    category: "vibhakti",
  },
  {
    term: "अपत्यम्",
    termRoman: "apatyam",
    meaning:
      "Offspring, descendant (nominative). The meaning of patronymic suffixes.",
    category: "samjna",
    related: ["apatya"],
  },
  {
    term: "अव्ययीभावे",
    termRoman: "avyayībhāve",
    meaning:
      "In an avyayībhāva compound (locative). Adverbial compounds with first member indeclinable.",
    category: "samasa",
    related: ["avyayībhāva"],
  },
  {
    term: "पिति",
    termRoman: "piti",
    meaning:
      "When @deva[प्] is @deva[इत्] marker (locative). Condition for certain operations.",
    category: "samjna",
    related: ["pit"],
  },
  {
    term: "नामि",
    termRoman: "nāmi",
    meaning:
      "When @deva[नाम्] 'by name' follows (locative). Or: 'having a name'.",
    category: "general",
  },
  {
    term: "वाक्यस्य",
    termRoman: "vākyasya",
    meaning: "Of a sentence (genitive). Rules concerning complete sentences.",
    category: "general",
  },
  {
    term: "इदमः",
    termRoman: "idamaḥ",
    meaning: "Of @deva[इदम्] (genitive). Special rules for the pronoun 'this'.",
    category: "samjna",
  },
  {
    term: "प्रत्ययस्य",
    termRoman: "pratyayasya",
    meaning: "Of a suffix (genitive). Rules applying to affixes.",
    category: "pratyaya",
    related: ["pratyaya"],
  },
  {
    term: "कः",
    termRoman: "kaḥ",
    meaning: "Suffix @deva[क]. Diminutive or secondary derivative suffix.",
    category: "pratyaya",
  },
  {
    term: "सः",
    termRoman: "saḥ",
    meaning:
      "He, that (nominative). The third-person pronoun @deva[तद्] in nominative singular masculine.",
    category: "general",
  },
  {
    term: "यः",
    termRoman: "yaḥ",
    meaning:
      "Who, which (nominative). The relative pronoun in nominative singular masculine.",
    category: "general",
  },
  {
    term: "अतः",
    termRoman: "ataḥ",
    meaning:
      "After @deva[अ] / from this (ablative). Following the short vowel @deva[अ]; or 'therefore'.",
    category: "samjna",
  },
  {
    term: "उत्",
    termRoman: "ut",
    meaning:
      "The prefix @deva[उद्] 'up, out'. Preverb indicating upward or outward motion.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "अपि",
    termRoman: "api",
    meaning: "Also, even, though. Emphatic or inclusive particle.",
    category: "general",
  },
  {
    term: "तेन",
    termRoman: "tena",
    meaning: "By that (instrumental). Instrumental case of @deva[तद्] 'that'.",
    category: "general",
  },
  {
    term: "सह",
    termRoman: "saha",
    meaning:
      "With, together with. Governs instrumental case for accompaniment.",
    category: "general",
    related: ["sahārtha"],
  },
  {
    term: "द्वे",
    termRoman: "dve",
    meaning: "Two (nominative/accusative dual neuter). The numeral two.",
    category: "general",
  },
  {
    term: "संज्ञायां",
    termRoman: "saṃjñāyāṃ",
    meaning: "In a proper name (locative). Variant form of @deva[संज्ञायाम्].",
    category: "samjna",
  },
  {
    term: "रषाभ्याम्",
    termRoman: "raṣābhyām",
    meaning:
      "After @deva[र्] and @deva[ष्] (ablative dual). Following retroflex @deva[ष्] or @deva[र्].",
    category: "samjna",
  },
  {
    term: "रषाभ्यां",
    termRoman: "raṣābhyāṃ",
    meaning:
      "After @deva[र्] and @deva[ष्] (ablative dual). Variant spelling of @deva[रषाभ्याम्].",
    category: "samjna",
  },

  // Additional high-frequency anuvṛtti terms
  {
    term: "विसर्जनीयस्य",
    termRoman: "visarjanīyasya",
    meaning:
      "Of the visarga (genitive). Rules concerning the aspiration @deva[ः] at word-end.",
    category: "sandhi",
    related: ["visarga", "visarjanīyaḥ"],
  },
  {
    term: "समासः",
    termRoman: "samāsaḥ",
    meaning:
      "Compound (nominative). Multiple words joined into a single grammatical unit.",
    sutraRef: "2.1.3",
    category: "samasa",
    related: ["samāsa"],
  },
  {
    term: "कर्तरि",
    termRoman: "kartari",
    meaning:
      "In the agent sense (locative). When the agent (@deva[कर्तृ]) is grammatical subject (active voice).",
    category: "karaka",
    related: ["kartṛ", "kartari prayoga"],
  },
  {
    term: "अव्ययीभावः",
    termRoman: "avyayībhāvaḥ",
    meaning:
      "Avyayībhāva compound (nominative). Adverbial compound where the first member is indeclinable.",
    sutraRef: "2.1.5",
    category: "samasa",
    related: ["avyayībhāva"],
  },
  {
    term: "परस्मैपदेषु",
    termRoman: "parasmaipadeṣu",
    meaning:
      "In the parasmaipada endings (locative plural). When active voice endings are used.",
    category: "samjna",
    related: ["parasmaipada"],
  },
  {
    term: "अङ्",
    termRoman: "aṅ",
    meaning:
      "Pratyāhāra for vowels @deva[अ], @deva[इ], @deva[उ]. Short simple vowels.",
    category: "pratyahara",
  },
  {
    term: "ढञ्",
    termRoman: "ḍhañ",
    meaning:
      "Taddhita suffix (= @deva[एय]). Forms patronymics. @deva[दिति] → @deva[दैतेय] 'son of Diti'.",
    category: "pratyaya",
    related: ["ḍhak"],
  },
  {
    term: "रुँ",
    termRoman: "rum̐",
    meaning:
      "Substitute @deva[र्] (with nasalization marker). Replaces visarga before voiced sounds.",
    category: "sandhi",
  },
  {
    term: "ङिति",
    termRoman: "ṅiti",
    meaning:
      "When @deva[ङ्] is an @deva[इत्] marker (locative). Condition that blocks guṇa/vṛddhi and indicates ātmanepada.",
    sutraRef: "1.1.5",
    category: "samjna",
    related: ["ṅit"],
  },
  {
    term: "पदम्",
    termRoman: "padam",
    meaning:
      "Word (nominative/accusative). A complete inflected form ending in @deva[सुप्] or @deva[तिङ्].",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "निपाताः",
    termRoman: "nipātāḥ",
    meaning:
      "Particles (nominative plural). Indeclinable words like @deva[च], @deva[वा], @deva[ह], @deva[अह].",
    sutraRef: "1.4.56",
    category: "samjna",
    related: ["avyaya"],
  },
  {
    term: "लुप्",
    termRoman: "lup",
    meaning:
      "Elision, deletion. Complete deletion where the element disappears without trace.",
    sutraRef: "1.1.61",
    category: "samjna",
    related: ["luk", "lopa"],
  },
  {
    term: "आ",
    termRoman: "ā",
    meaning:
      "The vowel @deva[आ]. Long form of @deva[अ]; also a prefix meaning 'up to, towards'.",
    category: "samjna",
  },
  {
    term: "रः",
    termRoman: "raḥ",
    meaning: "Of @deva[र] (genitive). Rules concerning the consonant @deva[र].",
    category: "samjna",
  },
  {
    term: "धः",
    termRoman: "dhaḥ",
    meaning:
      "Of @deva[ध] (genitive). Rules concerning the aspirated dental @deva[ध].",
    category: "samjna",
  },
  {
    term: "तद्युक्तात्",
    termRoman: "tadyuktāt",
    meaning:
      "After that which is connected with it (ablative). When the base has a specific semantic connection.",
    category: "general",
  },
  {
    term: "पररूपम्",
    termRoman: "pararūpam",
    meaning:
      "The form of the following (nominative). Substitution by the subsequent element in sandhi.",
    sutraRef: "6.1.94",
    category: "sandhi",
    related: ["pararūpa"],
  },
  {
    term: "अति",
    termRoman: "ati",
    meaning:
      "Beyond, exceedingly. Prefix indicating excess or surpassing; also 'very'.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "प्लुतः",
    termRoman: "plutaḥ",
    meaning:
      "Prolated (vowel). Extra-long vowel of three mātrās, used in calling from a distance.",
    category: "samjna",
    related: ["pluta"],
  },
  {
    term: "अनुनासिकः",
    termRoman: "anunāsikaḥ",
    meaning:
      "Nasal (nominative). Sound produced with airflow through the nose: @deva[ङ्], @deva[ञ्], @deva[ण्], @deva[न्], @deva[म्], or nasalized vowels.",
    category: "samjna",
  },
  {
    term: "इतौ",
    termRoman: "itau",
    meaning:
      "When @deva[इति] follows (locative). Before the quotative particle @deva[इति] 'thus'.",
    category: "general",
  },
  {
    term: "दः",
    termRoman: "daḥ",
    meaning:
      "Of @deva[द] (genitive). Rules concerning the dental stop @deva[द].",
    category: "samjna",
  },
  {
    term: "स्थः",
    termRoman: "sthaḥ",
    meaning:
      "Standing, being in (nominative). From root @deva[स्था] 'to stand'; often in compounds meaning 'situated in'.",
    category: "general",
  },
  {
    term: "युवा",
    termRoman: "yuvā",
    meaning:
      "Young descendant. Used for descendants closer in generation (son/grandson) vs. @deva[गोत्र] (remote ancestor).",
    category: "samjna",
    related: ["gotra", "apatya"],
  },
  {
    term: "भृतो",
    termRoman: "bhṛto",
    meaning:
      "Of one who is maintained (genitive). From @deva[भृ] 'to bear, maintain' in past passive sense.",
    category: "general",
  },
  {
    term: "भूतो",
    termRoman: "bhūto",
    meaning:
      "Of one who has become (genitive). From @deva[भू] 'to be, become' in past sense.",
    category: "general",
  },
  {
    term: "डटः",
    termRoman: "ḍaṭaḥ",
    meaning:
      "Of @deva[डत्] (genitive). Technical term for certain nominal endings.",
    category: "pratyaya",
  },
  {
    term: "अद्व्यादिभ्यः",
    termRoman: "advyādibhyaḥ",
    meaning:
      "After those in the @deva[अद्वि]-class (ablative plural). A specific list of stems.",
    category: "samjna",
  },
  {
    term: "अजाद्योः",
    termRoman: "ajādyoḥ",
    meaning:
      "Of vowel-initial (genitive dual). When an element begins with a vowel (@deva[अच्]).",
    category: "samjna",
  },
  {
    term: "नीतौ",
    termRoman: "nītau",
    meaning:
      "When led/taken (locative). In the sense of 'having been led' from @deva[नी] 'to lead'.",
    category: "general",
  },
  {
    term: "मनुष्यनाम्नः",
    termRoman: "manuṣyanāmnaḥ",
    meaning:
      "Of a human name (genitive). When forming derivatives from personal names.",
    category: "general",
  },
  {
    term: "ह्रस्वे",
    termRoman: "hrasve",
    meaning: "When short (locative). When a short vowel is involved.",
    category: "sandhi",
    related: ["hrasva"],
  },
  {
    term: "एकस्य",
    termRoman: "ekasya",
    meaning: "Of one (genitive). Referring to a single element.",
    category: "general",
  },
  {
    term: "हल्",
    termRoman: "hal",
    meaning:
      "Pratyāhāra for all consonants. From @deva[ह] to @deva[ल] in the Śiva Sūtras.",
    category: "pratyahara",
  },
  {
    term: "अत्",
    termRoman: "at",
    meaning:
      "The short vowel @deva[अ] (with @deva[त्] as @deva[इत्]). Used to refer to the basic short @deva[अ] vowel.",
    category: "samjna",
  },
  {
    term: "आत्मनेपदम्",
    termRoman: "ātmanepadam",
    meaning:
      "Middle voice endings (nominative). 'Word for oneself' - action for one's own benefit.",
    sutraRef: "1.4.100",
    category: "samjna",
    related: ["ātmanepada"],
  },
  {
    term: "ठञ्",
    termRoman: "ṭhañ",
    meaning:
      "Taddhita suffix (= @deva[इक]). Forms derivatives meaning 'relating to, coming from'.",
    category: "pratyaya",
    related: ["ṭhak"],
  },
  {
    term: "भावः",
    termRoman: "bhāvaḥ",
    meaning:
      "State, abstract action (nominative). The abstract sense or impersonal passive meaning.",
    category: "general",
    related: ["bhāva"],
  },
  {
    term: "दीर्घः",
    termRoman: "dīrghaḥ",
    meaning:
      "Long (vowel) (nominative). A vowel of two mātrās: @deva[आ], @deva[ई], @deva[ऊ], @deva[ॠ], @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ].",
    category: "sandhi",
    related: ["dīrgha"],
  },
  {
    term: "सार्वधातुके",
    termRoman: "sārvadhātuke",
    meaning:
      "When a sārvadhātuka affix follows (locative). Conjugational affixes that cause guṇa.",
    sutraRef: "3.4.113",
    category: "samjna",
    related: ["sārvadhātuka"],
  },
  {
    term: "ञिति",
    termRoman: "ñiti",
    meaning:
      "When @deva[ञ्] is an @deva[इत्] marker (locative). Condition affecting certain operations.",
    category: "samjna",
  },
  {
    term: "लिटि",
    termRoman: "liṭi",
    meaning:
      "When @deva[लिट्] (perfect) follows (locative). Context for perfect tense formations.",
    category: "lakara",
    related: ["liṭ"],
  },
  {
    term: "अयादेशः",
    termRoman: "ayādeśaḥ",
    meaning:
      "Substitution by @deva[अय्] etc. (nominative). Diphthongs → @deva[अय्], @deva[अव्] before vowels.",
    sutraRef: "6.1.78",
    category: "sandhi",
    related: ["āyādeśa"],
  },
  {
    term: "इण्",
    termRoman: "iṇ",
    meaning:
      "The root @deva[इ] 'to go' (class 2). Marked with @deva[ण्] indicating special properties.",
    category: "gana",
  },
  {
    term: "यत्",
    termRoman: "yat",
    meaning:
      "Future passive participle suffix (= @deva[य]). Forms gerundives: @deva[गेय] 'to be sung'.",
    sutraRef: "3.1.97",
    category: "pratyaya",
    related: ["kṛtya"],
  },
  {
    term: "अण्",
    termRoman: "aṇ",
    meaning:
      "Taddhita suffix (= @deva[अ] with vṛddhi). Forms patronymics and derivatives. @deva[दशरथ] → @deva[दाशरथि].",
    sutraRef: "4.1.83",
    category: "pratyaya",
  },

  // Remaining anuvṛtti terms (count >= 3)
  {
    term: "उतः",
    termRoman: "utaḥ",
    meaning: "After @deva[उ] (ablative). Following the vowel @deva[उ].",
    category: "samjna",
  },
  {
    term: "सि",
    termRoman: "si",
    meaning:
      "The future suffix @deva[स्य] or nominative singular ending @deva[सि].",
    category: "pratyaya",
  },
  {
    term: "अव्ययम्",
    termRoman: "avyayam",
    meaning: "Indeclinable (nominative). A word that doesn't change form.",
    sutraRef: "1.1.37",
    category: "samjna",
    related: ["avyaya"],
  },
  {
    term: "एचः",
    termRoman: "ecaḥ",
    meaning:
      "Of an @deva[एच्] vowel (genitive). The diphthongs @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ].",
    category: "pratyahara",
    related: ["ec"],
  },
  {
    term: "उः",
    termRoman: "uḥ",
    meaning: "Of @deva[उ] (genitive). Rules concerning the vowel @deva[उ].",
    category: "samjna",
  },
  {
    term: "अलः",
    termRoman: "alaḥ",
    meaning: "Of @deva[अल्] (genitive). All sounds (vowels and consonants).",
    category: "pratyahara",
  },
  {
    term: "सर्वस्य",
    termRoman: "sarvasya",
    meaning: "Of all (genitive). Referring to all instances or elements.",
    category: "general",
  },
  {
    term: "अपित्",
    termRoman: "apit",
    meaning:
      "Not having @deva[प्] as @deva[इत्] marker. Lacking the @deva[प्] anubandha.",
    category: "samjna",
    related: ["pit"],
  },
  {
    term: "इतः",
    termRoman: "itaḥ",
    meaning: "After @deva[इ] (ablative). Following the vowel @deva[इ].",
    category: "samjna",
  },
  {
    term: "समः",
    termRoman: "samaḥ",
    meaning: "Equal, same (nominative). Indicating sameness or equality.",
    category: "general",
  },
  {
    term: "समासे",
    termRoman: "samāse",
    meaning: "In a compound (locative). When forming or within a compound.",
    category: "samasa",
    related: ["samāsa"],
  },
  {
    term: "णौ",
    termRoman: "ṇau",
    meaning:
      "When @deva[णि] (causative) follows (locative). In causative formations.",
    category: "pratyaya",
    related: ["ṇic"],
  },
  {
    term: "शेषे",
    termRoman: "śeṣe",
    meaning: "In the remainder (locative). In other cases not already covered.",
    category: "general",
    related: ["śeṣa"],
  },
  {
    term: "आम्",
    termRoman: "ām",
    meaning:
      "The genitive plural ending @deva[आम्]. One of the @deva[सुप्] endings.",
    category: "vibhakti",
  },
  {
    term: "अः",
    termRoman: "aḥ",
    meaning:
      "Of @deva[अ] (genitive). Rules concerning the short vowel @deva[अ].",
    category: "samjna",
  },
  {
    term: "आद्युदात्तः",
    termRoman: "ādyudāttaḥ",
    meaning:
      "Having udātta on the first syllable (nominative). Initial-accented.",
    category: "samjna",
    related: ["udāttaḥ"],
  },
  {
    term: "अनद्यतने",
    termRoman: "anadyatane",
    meaning:
      "In non-today time (locative). Past or future not of the current day.",
    sutraRef: "3.2.111",
    category: "lakara",
    related: ["anadyatana"],
  },
  {
    term: "ङ्याप्प्रातिपदिकात्",
    termRoman: "ṅyāpprātipadikāt",
    meaning:
      "After a @deva[ङी]/@deva[आप्] feminine stem (ablative). After feminine-marked stems.",
    category: "samjna",
  },
  {
    term: "अणः",
    termRoman: "aṇaḥ",
    meaning:
      "Of @deva[अण्] vowels (genitive). The simple vowels @deva[अ], @deva[इ], @deva[उ].",
    category: "pratyahara",
    related: ["aṇ"],
  },
  {
    term: "कुक्",
    termRoman: "kuk",
    meaning: "Augment @deva[कु] (= @deva[क्]). Inserted in certain formations.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "जीवति",
    termRoman: "jīvati",
    meaning: "While living (locative). When the person is still alive.",
    category: "general",
  },
  {
    term: "तद्राजस्य",
    termRoman: "tadrājasya",
    meaning:
      "Of the king of that place (genitive). Forming names of regional rulers.",
    category: "general",
  },
  {
    term: "युक्तः",
    termRoman: "yuktaḥ",
    meaning:
      "Connected, joined (nominative). What is appropriate or connected.",
    category: "general",
  },
  {
    term: "संस्कृतं",
    termRoman: "saṃskṛtam",
    meaning: "Refined, Sanskrit (nominative). The refined/grammatical form.",
    category: "general",
  },
  {
    term: "घन्",
    termRoman: "ghan",
    meaning:
      "Taddhita suffix (= @deva[अ]). Forms derivatives from certain stems.",
    category: "pratyaya",
  },
  {
    term: "मतोः",
    termRoman: "matoḥ",
    meaning:
      "Of @deva[मत्] (genitive). After stems ending in possessive @deva[मत्].",
    category: "pratyaya",
    related: ["matup"],
  },
  {
    term: "बह्वचः",
    termRoman: "bahvacaḥ",
    meaning: "Of a polysyllabic (genitive). Having many vowels/syllables.",
    category: "samjna",
  },
  {
    term: "ढः",
    termRoman: "ḍhaḥ",
    meaning: "Of @deva[ढ] (genitive). The aspirated retroflex stop.",
    category: "samjna",
  },
  {
    term: "मतौ",
    termRoman: "matau",
    meaning:
      "When @deva[मत्] follows (locative). In possessive suffix context.",
    category: "pratyaya",
    related: ["matup"],
  },
  {
    term: "विकृतेः",
    termRoman: "vikṛteḥ",
    meaning: "Of a modification (genitive). A changed or derived form.",
    category: "general",
  },
  {
    term: "स्यात्",
    termRoman: "syāt",
    meaning: "Should be, let it be (optative). Indicating what applies.",
    category: "general",
  },
  {
    term: "पथः",
    termRoman: "pathaḥ",
    meaning: "Of @deva[पथ्] 'path' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "वयसि",
    termRoman: "vayasi",
    meaning: "In age (locative). When referring to age or life-stage.",
    category: "general",
  },
  {
    term: "वतिः",
    termRoman: "vatiḥ",
    meaning:
      "The suffix @deva[वत्] (nominative). Forms comparatives and possessives.",
    category: "pratyaya",
  },
  {
    term: "भवने",
    termRoman: "bhavane",
    meaning: "In a dwelling (locative). When meaning house or abode.",
    category: "general",
  },
  {
    term: "वः",
    termRoman: "vaḥ",
    meaning: "Of @deva[व] (genitive). Rules concerning the semivowel @deva[व].",
    category: "samjna",
  },
  {
    term: "वुन्",
    termRoman: "vun",
    meaning:
      "Taddhita suffix (= @deva[अक]). Forms agent nouns and derivatives.",
    category: "pratyaya",
  },
  {
    term: "वाचः",
    termRoman: "vācaḥ",
    meaning: "Of @deva[वाच्] 'speech' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "अन्",
    termRoman: "an",
    meaning: "Kṛt suffix (= @deva[अ]). Forms agent nouns from roots.",
    category: "pratyaya",
  },
  {
    term: "एकात्",
    termRoman: "ekāt",
    meaning: "After one (ablative). Following 'one' or a single element.",
    category: "general",
  },
  {
    term: "भागे",
    termRoman: "bhāge",
    meaning: "In a part/share (locative). When referring to portions.",
    category: "general",
  },
  {
    term: "प्रशंसायाम्",
    termRoman: "praśaṃsāyām",
    meaning: "In praise (locative). When expressing praise or approval.",
    category: "general",
  },
  {
    term: "निर्धारणे",
    termRoman: "nirdhāraṇe",
    meaning: "In specification (locative). When singling out from a group.",
    category: "general",
  },
  {
    term: "आयुधजीविसङ्घात्",
    termRoman: "āyudhajīvisaṅghāt",
    meaning:
      "After a warrior-guild name (ablative). From names of armed communities.",
    category: "general",
  },
  {
    term: "गोः",
    termRoman: "goḥ",
    meaning: "Of @deva[गो] 'cow' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "अनः",
    termRoman: "anaḥ",
    meaning: "Of @deva[अन्] (genitive). Stems ending in @deva[अन्].",
    category: "samjna",
  },
  {
    term: "अनभ्यासस्य",
    termRoman: "anabhyāsasya",
    meaning: "Of non-reduplicated (genitive). When there is no reduplication.",
    category: "samjna",
    related: ["abhyāsa"],
  },
  {
    term: "ह्रस्वस्य",
    termRoman: "hrasvasya",
    meaning: "Of a short vowel (genitive). Concerning short vowels.",
    category: "sandhi",
    related: ["hrasva"],
  },
  {
    term: "छे",
    termRoman: "che",
    meaning: "When @deva[छ] follows (locative). Before the palatal aspirate.",
    category: "sandhi",
  },
  {
    term: "पूर्वसवर्णः",
    termRoman: "pūrvasavarṇaḥ",
    meaning:
      "Homogeneous with the preceding (nominative). Same class as prior sound.",
    category: "sandhi",
    related: ["savarṇa"],
  },
  {
    term: "प्रकृत्या",
    termRoman: "prakṛtyā",
    meaning: "By nature, naturally (instrumental). In the original form.",
    category: "general",
    related: ["prakṛti"],
  },
  {
    term: "अट्",
    termRoman: "aṭ",
    meaning:
      "Augment @deva[अ] (with @deva[ट्] as marker). The past tense augment.",
    sutraRef: "6.4.71",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "असंयोगपूर्वस्य",
    termRoman: "asaṃyogapūrvasya",
    meaning:
      "Of one not preceded by a cluster (genitive). When no consonant cluster precedes.",
    category: "samjna",
  },
  {
    term: "तद्धिते",
    termRoman: "taddhite",
    meaning:
      "When a taddhita suffix follows (locative). In secondary derivation.",
    category: "pratyaya",
    related: ["taddhita"],
  },
  {
    term: "झः",
    termRoman: "jhaḥ",
    meaning: "Of @deva[झ] (genitive). The palatal aspirate voiced stop.",
    category: "samjna",
  },
  {
    term: "स्वमोः",
    termRoman: "svamoḥ",
    meaning:
      "Of @deva[सु] and @deva[अम्] (genitive dual). Nominative and accusative singular endings.",
    category: "vibhakti",
  },
  {
    term: "लभेः",
    termRoman: "labheḥ",
    meaning:
      "Of the root @deva[लभ्] 'to obtain' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "कुः",
    termRoman: "kuḥ",
    meaning:
      "Of @deva[कु] (genitive). Guttural sounds @deva[क], @deva[ख], @deva[ग], @deva[घ], @deva[ङ].",
    category: "pratyahara",
  },
  {
    term: "अशि",
    termRoman: "aśi",
    meaning:
      "When @deva[अश्] follows (locative). Before the @deva[अश्] pratyāhāra.",
    category: "pratyahara",
  },
  {
    term: "इण्कोः",
    termRoman: "iṇkoḥ",
    meaning:
      "Of @deva[इण्] root and @deva[कु] (genitive dual). Root @deva[इ] and gutturals.",
    category: "samjna",
  },
  {
    term: "पूर्वपदात्",
    termRoman: "pūrvapadāt",
    meaning:
      "After the prior member (ablative). Following the first part of a compound.",
    category: "samasa",
    related: ["pūrvapada"],
  },
  {
    term: "रषाभ्यामुपसर्गात्",
    termRoman: "raṣābhyāmupasargāt",
    meaning:
      "After @deva[र्]/@deva[ष्] following a prefix (ablative). Complex phonetic context.",
    category: "samjna",
  },
  {
    term: "ओत्",
    termRoman: "ot",
    meaning:
      "The vowel @deva[ओ] (with @deva[त्] as marker). Refers to the diphthong @deva[ओ].",
    category: "samjna",
  },
  {
    term: "अनार्षे",
    termRoman: "anārṣe",
    meaning: "In non-Vedic usage (locative). Not in mantras or sacred texts.",
    category: "samjna",
  },
  {
    term: "संख्या",
    termRoman: "saṃkhyā",
    meaning:
      "Number, numeral. Numerical words like @deva[एक], @deva[द्वि], @deva[त्रि].",
    category: "general",
  },
  {
    term: "षट्",
    termRoman: "ṣaṭ",
    meaning: "Six. The numeral six; also used in certain compounds.",
    category: "general",
  },
  {
    term: "बहुव्रीहौ",
    termRoman: "bahuvrīhau",
    meaning:
      "In a bahuvrīhi compound (locative). Possessive/exocentric compounds.",
    category: "samasa",
    related: ["bahuvrīhi"],
  },
  {
    term: "सुट्",
    termRoman: "suṭ",
    meaning: "Augment @deva[स्]. Inserted @deva[स्] in certain formations.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "परस्मिन्",
    termRoman: "parasmin",
    meaning:
      "In the following (locative). When a subsequent element is involved.",
    category: "general",
  },
  {
    term: "अदर्शनम्",
    termRoman: "adarśanam",
    meaning:
      "Non-appearance, invisibility (nominative). Deletion or non-application.",
    category: "samjna",
  },
  {
    term: "यस्य",
    termRoman: "yasya",
    meaning: "Of which (genitive). The relative pronoun in genitive singular.",
    category: "general",
  },
  {
    term: "वृद्धम्",
    termRoman: "vṛddham",
    meaning:
      "An elder, venerable one (nominative). Someone advanced in age or learning.",
    category: "general",
  },
  {
    term: "प्रातिपदिकस्य",
    termRoman: "prātipadikasya",
    meaning:
      "Of a nominal stem (genitive). Rules applying to base forms before inflection.",
    category: "samjna",
    related: ["prātipadika"],
  },
  {
    term: "उदः",
    termRoman: "udaḥ",
    meaning: "Of @deva[उद्] (genitive). The prefix meaning 'up, out'.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "उपात्",
    termRoman: "upāt",
    meaning:
      "After @deva[उप] (ablative). Following the prefix @deva[उप] 'near'.",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "अस्त्री",
    termRoman: "astrī",
    meaning: "Not feminine (nominative). When the word is not feminine gender.",
    category: "samjna",
  },
  {
    term: "शेषः",
    termRoman: "śeṣaḥ",
    meaning: "Remainder (nominative). What remains after other rules apply.",
    category: "general",
    related: ["śeṣa"],
  },
  {
    term: "भम्",
    termRoman: "bham",
    meaning:
      "Technical name for weak stem. Before endings like @deva[भ्याम्], @deva[भिः], etc.",
    sutraRef: "1.4.18",
    category: "samjna",
  },
  {
    term: "कर्म",
    termRoman: "karma",
    meaning: "Object, action (nominative). The grammatical object of a verb.",
    category: "karaka",
    related: ["karman"],
  },
  {
    term: "प्रादयः",
    termRoman: "prādayaḥ",
    meaning:
      "Those beginning with @deva[प्र] (nominative plural). The verbal prefixes.",
    sutraRef: "1.4.58",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "लः",
    termRoman: "laḥ",
    meaning: "Of @deva[ल] (genitive). Rules concerning the lateral @deva[ल].",
    category: "samjna",
  },
  {
    term: "विभक्तिः",
    termRoman: "vibhaktiḥ",
    meaning:
      "Case ending (nominative). Inflectional suffix for nouns or verbs.",
    sutraRef: "1.4.104",
    category: "vibhakti",
    related: ["vibhakti"],
  },
  {
    term: "उपपदे",
    termRoman: "upapade",
    meaning:
      "When an upapada is present (locative). Co-occurring word in the construction.",
    category: "samjna",
    related: ["upapada"],
  },
  {
    term: "समानाधिकरणे",
    termRoman: "samānādhikaraṇe",
    meaning: "In apposition (locative). When words refer to the same entity.",
    category: "samjna",
  },
  {
    term: "स्थानिनि",
    termRoman: "sthānini",
    meaning:
      "When the original is present (locative). When the replaced element is considered.",
    category: "samjna",
    related: ["sthānin"],
  },
  {
    term: "पञ्चम्याः",
    termRoman: "pañcamyāḥ",
    meaning: "Of the ablative (genitive). Rules for the fifth case.",
    category: "vibhakti",
    related: ["pañcamī"],
  },
  {
    term: "सिचः",
    termRoman: "sicaḥ",
    meaning:
      "Of @deva[सिच्] (genitive). The aorist suffix used in @deva[लुङ्].",
    category: "pratyaya",
  },
  {
    term: "क्सः",
    termRoman: "ksaḥ",
    meaning: "Of @deva[क्स] (genitive). An aorist suffix.",
    category: "pratyaya",
  },
  {
    term: "भूते",
    termRoman: "bhūte",
    meaning: "In the past (locative). When referring to past time.",
    category: "lakara",
    related: ["bhūta"],
  },
  {
    term: "भविष्यति",
    termRoman: "bhaviṣyati",
    meaning: "In the future (locative). When referring to future time.",
    category: "lakara",
    related: ["bhaviṣyat"],
  },
  {
    term: "आत्मनेपदानाम्",
    termRoman: "ātmanepadānām",
    meaning:
      "Of the ātmanepada endings (genitive plural). Middle voice endings.",
    category: "samjna",
    related: ["ātmanepada"],
  },
  {
    term: "लिटः",
    termRoman: "liṭaḥ",
    meaning: "Of @deva[लिट्] (genitive). Rules for the perfect tense.",
    category: "lakara",
    related: ["liṭ"],
  },
  {
    term: "ब्रुवः",
    termRoman: "bruvaḥ",
    meaning:
      "Of the root @deva[ब्रू] 'to speak' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "एतः",
    termRoman: "etaḥ",
    meaning: "After @deva[ए] (ablative). Following the vowel @deva[ए].",
    category: "samjna",
  },
  {
    term: "उत्तमस्य",
    termRoman: "uttamasya",
    meaning:
      "Of the first person (genitive). Rules for @deva[उत्तम पुरुष] (speaker).",
    category: "vibhakti",
    related: ["uttama"],
  },
  {
    term: "नित्यं",
    termRoman: "nityaṃ",
    meaning: "Always, invariably (adverb). Rule applies without option.",
    category: "general",
    related: ["nityam"],
  },
  {
    term: "झेः",
    termRoman: "jheḥ",
    meaning: "Of @deva[झि] (genitive). Third person plural ending.",
    category: "vibhakti",
  },
  {
    term: "जुस्",
    termRoman: "jus",
    meaning:
      "Substitute for @deva[झि] endings. Third person plural replacement.",
    category: "pratyaya",
  },
  {
    term: "प्राग्दीव्यतः",
    termRoman: "prāgdīvyataḥ",
    meaning:
      "Before @deva[दीव्यति] (ablative). Scope marker in taddhita section.",
    category: "samjna",
  },
  {
    term: "अस्त्रियाम्",
    termRoman: "astriyām",
    meaning: "Not in feminine (locative). When not applying to feminine forms.",
    category: "samjna",
  },
  {
    term: "आङ्गिरसे",
    termRoman: "āṅgirase",
    meaning: "In the Āṅgirasa lineage (locative). Related to sage Aṅgiras.",
    category: "general",
  },
  {
    term: "कुत्सने",
    termRoman: "kutsane",
    meaning: "In contempt (locative). When expressing disapproval or blame.",
    category: "general",
  },
  {
    term: "सौविरेषु",
    termRoman: "sauvireṣu",
    meaning: "Among the Sauvīras (locative plural). A regional reference.",
    category: "general",
  },
  {
    term: "वृद्धात्",
    termRoman: "vṛddhāt",
    meaning:
      "After a vṛddhi stem (ablative). Following a strengthened initial vowel.",
    category: "samjna",
    related: ["vṛddhi"],
  },
  {
    term: "पौत्रप्रभृतेः",
    termRoman: "pautraprabhṛteḥ",
    meaning: "From grandson onwards (ablative). Descendants beyond grandson.",
    category: "general",
  },
  {
    term: "दृष्टं",
    termRoman: "dṛṣṭam",
    meaning: "Seen, observed (nominative). What is found or attested in usage.",
    category: "general",
  },
  {
    term: "भक्षाः",
    termRoman: "bhakṣāḥ",
    meaning: "Edibles, food items (nominative plural). Types of food.",
    category: "general",
  },
  {
    term: "पौर्णमासी",
    termRoman: "paurṇamāsī",
    meaning: "Full moon day (nominative). The day of the full moon.",
    category: "general",
  },
  {
    term: "छ",
    termRoman: "cha",
    meaning: "The consonant @deva[छ]. Palatal aspirate voiceless stop.",
    category: "samjna",
  },
  {
    term: "समवायान्",
    termRoman: "samavāyān",
    meaning: "Combinations (accusative plural). Groups or assemblages.",
    category: "general",
  },
  {
    term: "अस्मै",
    termRoman: "asmai",
    meaning: "To/for this (dative). Dative singular of @deva[इदम्].",
    category: "general",
  },
  {
    term: "नियुक्तम्",
    termRoman: "niyuktam",
    meaning: "Appointed, designated (nominative). What is fixed or enjoined.",
    category: "general",
  },
  {
    term: "मन्त्रः",
    termRoman: "mantraḥ",
    meaning: "Vedic verse, hymn (nominative). Sacred recitation text.",
    category: "samjna",
  },
  {
    term: "इष्टकासु",
    termRoman: "iṣṭakāsu",
    meaning:
      "Among bricks (locative plural). In context of brick arrangements.",
    category: "general",
  },
  {
    term: "मये",
    termRoman: "maye",
    meaning:
      "When @deva[मय] 'made of' follows (locative). Suffix meaning 'composed of'.",
    category: "pratyaya",
  },
  {
    term: "तातिल्",
    termRoman: "tātil",
    meaning: "Suffix @deva[तातिल्]. Forms certain derivatives.",
    category: "pratyaya",
  },
  {
    term: "असमासे",
    termRoman: "asamāse",
    meaning: "Not in compound (locative). When outside of a compound.",
    category: "samasa",
  },
  {
    term: "निमित्तं",
    termRoman: "nimittam",
    meaning: "Cause, occasion (nominative). The triggering condition.",
    category: "general",
  },
  {
    term: "सम्भवति",
    termRoman: "sambhavati",
    meaning: "Is possible (indicative). When something can occur.",
    category: "general",
  },
  {
    term: "यप्",
    termRoman: "yap",
    meaning: "Suffix @deva[य]. Kṛt suffix forming verbal adjectives.",
    category: "pratyaya",
  },
  {
    term: "तत्पुरुषात्",
    termRoman: "tatpuruṣāt",
    meaning:
      "After a tatpuruṣa compound (ablative). Following determinative compounds.",
    category: "samasa",
    related: ["tatpuruṣa"],
  },
  {
    term: "सख्युः",
    termRoman: "sakhyuḥ",
    meaning: "Of @deva[सखि] 'friend' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "ब्रह्मणः",
    termRoman: "brahmaṇaḥ",
    meaning: "Of @deva[ब्रह्मन्] (genitive). The word for Brahman/Vedas.",
    category: "general",
  },
  {
    term: "भूतपूर्वे",
    termRoman: "bhūtapūrve",
    meaning: "In past-reference (locative). When referring to former state.",
    category: "general",
  },
  {
    term: "नासिकायाः",
    termRoman: "nāsikāyāḥ",
    meaning: "Of the nose (genitive). Concerning nasal sounds.",
    category: "samjna",
  },
  {
    term: "नते",
    termRoman: "nate",
    meaning: "When bowed/bent (locative). In the sense of bending.",
    category: "general",
  },
  {
    term: "अधिकम्",
    termRoman: "adhikam",
    meaning: "More, additional (nominative). Exceeding or extra.",
    category: "general",
  },
  {
    term: "डः",
    termRoman: "ḍaḥ",
    meaning: "Of @deva[ड] (genitive). The unaspirated retroflex stop.",
    category: "samjna",
  },
  {
    term: "मयट्",
    termRoman: "mayaṭ",
    meaning: "Taddhita suffix (= @deva[मय]). Meaning 'made of, consisting of'.",
    category: "pratyaya",
  },
  {
    term: "असङ्ख्यादेः",
    termRoman: "asaṅkhyādeḥ",
    meaning:
      "After non-numeral initial (ablative). Not beginning with a number.",
    category: "samjna",
  },
  {
    term: "डटि",
    termRoman: "ḍaṭi",
    meaning: "When @deva[डत्] follows (locative). Before certain endings.",
    category: "pratyaya",
  },
  {
    term: "त्रेः",
    termRoman: "treḥ",
    meaning:
      "Of @deva[त्रि] 'three' (genitive). Special rules for the numeral three.",
    category: "general",
  },
  {
    term: "तमट्",
    termRoman: "tamaṭ",
    meaning: "Superlative suffix (= @deva[तम]). Forms superlatives: 'most X'.",
    category: "pratyaya",
  },
  {
    term: "पूरणात्",
    termRoman: "pūraṇāt",
    meaning: "After an ordinal (ablative). Following ordinal numerals.",
    category: "general",
  },
  {
    term: "दिशः",
    termRoman: "diśaḥ",
    meaning: "Of direction (genitive). Concerning cardinal directions.",
    category: "general",
    related: ["deśa"],
  },
  {
    term: "प्राग्दिशः",
    termRoman: "prāgdiśaḥ",
    meaning: "Before the directions section (ablative). Scope marker.",
    category: "samjna",
  },
  {
    term: "तसिल्",
    termRoman: "tasil",
    meaning: "Suffix @deva[तसिल्] (= @deva[तस्]). Forms ablative adverbs.",
    category: "pratyaya",
    related: ["tasiḥ"],
  },
  {
    term: "दिक्शब्देभ्यः",
    termRoman: "dikśabdebhyaḥ",
    meaning:
      "After direction words (ablative plural). From words for directions.",
    category: "general",
  },
  {
    term: "आच्",
    termRoman: "āc",
    meaning: "Suffix @deva[आच्]. Used in certain formations.",
    category: "pratyaya",
  },
  {
    term: "धा",
    termRoman: "dhā",
    meaning:
      "Suffix @deva[धा]. Forms multiplicative adverbs: @deva[द्विधा] 'in two ways'.",
    category: "pratyaya",
  },
  {
    term: "कनः",
    termRoman: "kanaḥ",
    meaning: "Of @deva[कन्] suffix (genitive). The diminutive suffix.",
    category: "pratyaya",
    related: ["kan"],
  },
  {
    term: "लोहितात्",
    termRoman: "lohitāt",
    meaning: "After 'red' (ablative). From @deva[लोहित] 'red, blood'.",
    category: "general",
  },
  {
    term: "अभूततद्भावे",
    termRoman: "abhūtatadbhāve",
    meaning:
      "In becoming what was not (locative). Transformation to new state.",
    category: "general",
  },
  {
    term: "सातिः",
    termRoman: "sātiḥ",
    meaning: "The suffix @deva[साति]. Forms certain derivatives.",
    category: "pratyaya",
  },
  {
    term: "सम्पदा",
    termRoman: "sampadā",
    meaning: "With wealth/success (instrumental). By means of prosperity.",
    category: "general",
  },
  {
    term: "योगे",
    termRoman: "yoge",
    meaning: "In connection (locative). When in conjunction with.",
    category: "general",
  },
  {
    term: "झयः",
    termRoman: "jhayaḥ",
    meaning: "Of @deva[झय्] (genitive). Voiced aspirate stops.",
    category: "pratyahara",
  },
  {
    term: "द्वितीयस्य",
    termRoman: "dvitīyasya",
    meaning: "Of the second (genitive). The second in a series.",
    category: "general",
  },
  {
    term: "व्योः",
    termRoman: "vyoḥ",
    meaning: "Of @deva[व] and @deva[य] (genitive dual). The semivowels.",
    category: "samjna",
  },
  {
    term: "कृति",
    termRoman: "kṛti",
    meaning: "When a kṛt suffix follows (locative). In primary derivation.",
    category: "pratyaya",
    related: ["kṛt"],
  },
  {
    term: "ऋति",
    termRoman: "ṛti",
    meaning: "When @deva[ऋ] follows (locative). Before the vowel @deva[ऋ].",
    category: "samjna",
  },
  {
    term: "धातौ",
    termRoman: "dhātau",
    meaning: "In a root (locative). Within a verbal root.",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "इचि",
    termRoman: "ici",
    meaning:
      "When @deva[इच्] follows (locative). Before @deva[इ], @deva[उ] vowels.",
    category: "pratyahara",
  },
  {
    term: "एङः",
    termRoman: "eṅaḥ",
    meaning: "Of @deva[एङ्] (genitive). The vowels @deva[ए] and @deva[ओ].",
    category: "pratyahara",
  },
  {
    term: "असवर्णे",
    termRoman: "asavarṇe",
    meaning: "When non-homogeneous (locative). Different articulation class.",
    category: "sandhi",
    related: ["savarṇa"],
  },
  {
    term: "पदान्तस्य",
    termRoman: "padāntasya",
    meaning: "Of word-final (genitive). At the end of a word.",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "अप्रत्यये",
    termRoman: "apratyaye",
    meaning: "When no suffix follows (locative). Not before an affix.",
    category: "samjna",
  },
  {
    term: "अञ्चतौ",
    termRoman: "añcatau",
    meaning:
      "When @deva[अञ्च्] 'to go' is involved (locative). With verbs of motion.",
    category: "gana",
  },
  {
    term: "अत्र",
    termRoman: "atra",
    meaning: "Here, in this case. Referring to the current context.",
    category: "general",
  },
  {
    term: "लुङ्लङ्लृङ्क्षु",
    termRoman: "luṅlaṅlṛṅkṣu",
    meaning:
      "In @deva[लुङ्], @deva[लङ्], @deva[लृङ्] (locative plural). Aorist, imperfect, conditional.",
    category: "lakara",
  },
  {
    term: "य्वोः",
    termRoman: "yvoḥ",
    meaning: "Of @deva[य्] and @deva[व्] (genitive dual). The semivowels.",
    category: "samjna",
  },
  {
    term: "इयङ्",
    termRoman: "iyaṅ",
    meaning: "Substitute @deva[इय्]. Replaces @deva[इ] before vowels.",
    sutraRef: "6.1.77",
    category: "sandhi",
  },
  {
    term: "अनेकाचः",
    termRoman: "anekācaḥ",
    meaning: "Of polysyllabic (genitive). Having more than one vowel.",
    category: "samjna",
  },
  {
    term: "ऊत्",
    termRoman: "ūt",
    meaning: "The vowel @deva[ऊ] (with @deva[त्] as marker). Long @deva[ऊ].",
    category: "samjna",
  },
  {
    term: "हेः",
    termRoman: "heḥ",
    meaning: "Of @deva[हि] (genitive). The particle or ending @deva[हि].",
    category: "general",
  },
  {
    term: "करोतेः",
    termRoman: "karoteḥ",
    meaning: "Of @deva[कृ] 'to do' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "जहातेः",
    termRoman: "jahāteḥ",
    meaning:
      "Of @deva[हा] 'to abandon' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "यि",
    termRoman: "yi",
    meaning:
      "When @deva[य्] with @deva[इ] follows (locative). Specific phonetic context.",
    category: "samjna",
  },
  {
    term: "अन्तः",
    termRoman: "antaḥ",
    meaning: "End, final (nominative). The final portion.",
    category: "general",
  },
  {
    term: "शी",
    termRoman: "śī",
    meaning: "Substitute @deva[शी]. Replaces @deva[शा] in certain contexts.",
    category: "samjna",
  },
  {
    term: "पञ्चभ्यः",
    termRoman: "pañcabhyaḥ",
    meaning: "After five (ablative). Following the numeral five.",
    category: "general",
  },
  {
    term: "नपुंसकस्य",
    termRoman: "napuṃsakasya",
    meaning: "Of neuter (genitive). Rules for neuter gender.",
    category: "samjna",
    related: ["napuṃsakaliṅga"],
  },
  {
    term: "तृतीयादिषु",
    termRoman: "tṛtīyādiṣu",
    meaning: "In third and following cases (locative plural). Cases 3-7.",
    category: "vibhakti",
  },
  {
    term: "अनङ्",
    termRoman: "anaṅ",
    meaning:
      "Substitute @deva[अन्]. Replaces certain elements with @deva[अन्].",
    category: "samjna",
  },
  {
    term: "णित्",
    termRoman: "ṇit",
    meaning:
      "Having @deva[ण्] as @deva[इत्] marker. Indicates vṛddhi of first vowel.",
    category: "samjna",
  },
  {
    term: "इदः",
    termRoman: "idaḥ",
    meaning: "Of @deva[इद्] (genitive). Referring to @deva[इदम्] 'this'.",
    category: "samjna",
  },
  {
    term: "घेः",
    termRoman: "gheḥ",
    meaning:
      "Of @deva[घि] (genitive). Stems ending in short @deva[इ]/@deva[उ].",
    category: "samjna",
    related: ["ghi"],
  },
  {
    term: "पूर्वत्र",
    termRoman: "pūrvatra",
    meaning: "In the earlier part (locative). In a previous rule or section.",
    category: "general",
  },
  {
    term: "असिद्धम्",
    termRoman: "asiddham",
    meaning:
      "As if not effected (nominative). Rule result is 'invisible' to others.",
    sutraRef: "8.2.1",
    category: "samjna",
    related: ["asiddha"],
  },
  {
    term: "तथोः",
    termRoman: "tathoḥ",
    meaning: "Of @deva[त] and @deva[थ] (genitive dual). Dental stops.",
    category: "samjna",
  },
  {
    term: "झलाम्",
    termRoman: "jhalām",
    meaning: "Of @deva[झल्] sounds (genitive plural). Obstruent consonants.",
    category: "pratyahara",
    related: ["jhal"],
  },
  {
    term: "रुँः",
    termRoman: "rum̐ḥ",
    meaning: "Of @deva[रु] (genitive). The substitute with nasalization.",
    category: "sandhi",
  },
  {
    term: "र्वोः",
    termRoman: "rvoḥ",
    meaning:
      "Of @deva[र्] and @deva[व्] (genitive dual). Semivowels @deva[र] and @deva[व].",
    category: "samjna",
  },
  {
    term: "दूरात्",
    termRoman: "dūrāt",
    meaning: "From afar (ablative). At a distance.",
    category: "general",
  },
  {
    term: "अटि",
    termRoman: "aṭi",
    meaning: "When @deva[अट्] follows (locative). Before the past augment.",
    category: "samjna",
  },
  {
    term: "अनुस्वारः",
    termRoman: "anusvāraḥ",
    meaning:
      "Anusvāra (nominative). The nasal sound @deva[ं] written as a dot.",
    category: "samjna",
  },
  {
    term: "खरि",
    termRoman: "khari",
    meaning: "When @deva[खर्] follows (locative). Before voiceless stops.",
    category: "pratyahara",
  },
  {
    term: "अनुत्तरपदस्थस्य",
    termRoman: "anuttarapadasthyasya",
    meaning:
      "Of one not in the latter member (genitive). Not in second part of compound.",
    category: "samasa",
  },
  {
    term: "अत्पूर्वस्य",
    termRoman: "atpūrvasya",
    meaning:
      "Of one preceded by @deva[अत्] (genitive). Following short @deva[अ].",
    category: "samjna",
  },
  {
    term: "स्तोः",
    termRoman: "stoḥ",
    meaning:
      "Of @deva[स्] and @deva[त्] (genitive dual). Dental sibilant and stop.",
    category: "samjna",
  },
  {
    term: "ष्टुः",
    termRoman: "ṣṭuḥ",
    meaning:
      "Of @deva[ष्] and @deva[ट्] (genitive dual). Retroflex sibilant and stop.",
    category: "samjna",
  },
  {
    term: "तोः",
    termRoman: "toḥ",
    meaning:
      "Of @deva[त] (genitive). Dental stops @deva[त], @deva[थ], @deva[द], @deva[ध], @deva[न].",
    category: "pratyahara",
  },
  {
    term: "परसवर्णः",
    termRoman: "parasavarṇaḥ",
    meaning:
      "Homogeneous with the following (nominative). Same class as next sound.",
    category: "sandhi",
    related: ["savarṇa"],
  },

  // Words with 2 occurrences in anuvṛtti
  {
    term: "आर्धधातुके",
    termRoman: "ārdhadhātuke",
    meaning:
      "When an ārdhadhātuka suffix follows (locative). Non-conjugational affixes.",
    category: "samjna",
    related: ["ārdhadhātuka"],
  },
  {
    term: "गुणवृद्धी",
    termRoman: "guṇavṛddhī",
    meaning:
      "Guṇa and vṛddhi (nominative dual). The two vowel strengthening grades.",
    category: "samjna",
    related: ["guṇa", "vṛddhi"],
  },
  {
    term: "अदसः",
    termRoman: "adasaḥ",
    meaning:
      "Of @deva[अदस्] 'that' (genitive). The remote demonstrative pronoun.",
    category: "samjna",
  },
  {
    term: "शे",
    termRoman: "śe",
    meaning: "When @deva[श] follows (locative). Before the palatal sibilant.",
    category: "samjna",
  },
  {
    term: "निपातः",
    termRoman: "nipātaḥ",
    meaning: "Particle (nominative). An indeclinable word.",
    sutraRef: "1.4.56",
    category: "samjna",
    related: ["avyaya"],
  },
  {
    term: "द्वन्द्वे",
    termRoman: "dvandve",
    meaning: "In a dvandva compound (locative). Copulative compound (X and Y).",
    category: "samasa",
    related: ["dvandva"],
  },
  {
    term: "शि",
    termRoman: "śi",
    meaning: "When @deva[शि] follows (locative). Before certain endings.",
    category: "vibhakti",
  },
  {
    term: "सर्वनामस्थानम्",
    termRoman: "sarvanāmasthānam",
    meaning:
      "Strong case (nominative). Nominative and accusative where stems strengthen.",
    sutraRef: "1.1.42",
    category: "samjna",
    related: ["sarvanāmasthāna"],
  },
  {
    term: "यणः",
    termRoman: "yaṇaḥ",
    meaning:
      "Of @deva[यण्] (genitive). The semivowels @deva[य्], @deva[व्], @deva[र्], @deva[ल्].",
    category: "pratyahara",
    related: ["yaṇ"],
  },
  {
    term: "स्थाने",
    termRoman: "sthāne",
    meaning: "In place of (locative). In the position of the replaced element.",
    category: "samjna",
    related: ["sthānin"],
  },
  {
    term: "षष्ठ्याः",
    termRoman: "ṣaṣṭhyāḥ",
    meaning: "Of the genitive (genitive). Rules for the sixth case.",
    category: "vibhakti",
    related: ["ṣaṣṭhī"],
  },
  {
    term: "परस्य",
    termRoman: "parasya",
    meaning: "Of the following (genitive). The subsequent element.",
    category: "general",
  },
  {
    term: "पूर्वविधौ",
    termRoman: "pūrvavidhau",
    meaning: "In a prior rule (locative). When a previous rule applies.",
    category: "samjna",
  },
  {
    term: "प्रत्ययलोपे",
    termRoman: "pratyayalope",
    meaning:
      "When suffix deletion occurs (locative). After an affix is elided.",
    category: "samjna",
    related: ["lopa"],
  },
  {
    term: "निर्दिष्टे",
    termRoman: "nirdiṣṭe",
    meaning: "When specified (locative). What is explicitly stated.",
    category: "general",
  },
  {
    term: "स्वस्य",
    termRoman: "svasya",
    meaning: "Of one's own (genitive). Referring to the element itself.",
    category: "general",
  },
  {
    term: "येन",
    termRoman: "yena",
    meaning: "By which (instrumental). The relative pronoun in instrumental.",
    category: "general",
  },
  {
    term: "सार्वधातुकम्",
    termRoman: "sārvadhātukam",
    meaning:
      "A sārvadhātuka affix (nominative). Conjugational suffix causing guṇa.",
    sutraRef: "3.4.113",
    category: "samjna",
    related: ["sārvadhātuka"],
  },
  {
    term: "प्रातिपदिकम्",
    termRoman: "prātipadikam",
    meaning: "A nominal stem (nominative). Base form before case endings.",
    category: "samjna",
    related: ["prātipadika"],
  },
  {
    term: "धातवः",
    termRoman: "dhātavaḥ",
    meaning:
      "Verbal roots (nominative plural). The roots listed in the Dhātupāṭha.",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "नियः",
    termRoman: "niyaḥ",
    meaning: "Of @deva[नि] prefix (genitive). Rules for the prefix @deva[नि].",
    category: "samjna",
    related: ["upasarga"],
  },
  {
    term: "वृत्तिसर्गतायनेषु",
    termRoman: "vṛttisargatāyaneṣu",
    meaning:
      "In vṛtti, sarga, and tāyana meanings (locative plural). Specific semantic contexts.",
    category: "general",
  },
  {
    term: "परस्मैपदम्",
    termRoman: "parasmaipdam",
    meaning: "Parasmaipada (nominative). Active voice endings.",
    sutraRef: "1.4.99",
    category: "samjna",
    related: ["parasmaipada"],
  },
  {
    term: "स्त्र्याख्यौ",
    termRoman: "stryākhyau",
    meaning: "Feminine designations (nominative dual). Names for females.",
    category: "samjna",
  },
  {
    term: "ह्रस्वं",
    termRoman: "hrasvaṃ",
    meaning: "Short (accusative). A short vowel as result.",
    category: "sandhi",
    related: ["hrasva"],
  },
  {
    term: "बहुषु",
    termRoman: "bahuṣu",
    meaning: "Among many (locative plural). When referring to multiple items.",
    category: "general",
  },
  {
    term: "भुवः",
    termRoman: "bhuvaḥ",
    meaning: "Of @deva[भू] 'to be' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "क्रियायोगे",
    termRoman: "kriyāyoge",
    meaning: "In connection with action (locative). When related to a verb.",
    category: "general",
    related: ["kriyā"],
  },
  {
    term: "मध्यमः",
    termRoman: "madhyamaḥ",
    meaning: "Second person (nominative). The addressee.",
    category: "vibhakti",
    related: ["madhyama"],
  },
  {
    term: "प्रथमः",
    termRoman: "prathamaḥ",
    meaning: "Third person (nominative). The one spoken about.",
    category: "vibhakti",
    related: ["prathama"],
  },
  {
    term: "प्रथमस्य",
    termRoman: "prathamasya",
    meaning: "Of the third person (genitive). Rules for prathama puruṣa.",
    category: "vibhakti",
    related: ["prathama"],
  },
  {
    term: "श्नः",
    termRoman: "śnaḥ",
    meaning: "Of @deva[श्न] (genitive). Class 5 vikaraṇa or related element.",
    category: "pratyaya",
  },
  {
    term: "वर्तमाने",
    termRoman: "vartamāne",
    meaning: "In the present (locative). Present tense context.",
    category: "lakara",
    related: ["vartamāna"],
  },
  {
    term: "लटः",
    termRoman: "laṭaḥ",
    meaning: "Of @deva[लट्] (genitive). Rules for present tense.",
    category: "lakara",
    related: ["laṭ"],
  },
  {
    term: "माङि",
    termRoman: "māṅi",
    meaning:
      "When @deva[माङ्] follows (locative). With the prohibitive particle.",
    category: "general",
  },
  {
    term: "परस्मैपदानाम्",
    termRoman: "parasmaipādānām",
    meaning:
      "Of the parasmaipada endings (genitive plural). Active voice endings.",
    category: "samjna",
    related: ["parasmaipada"],
  },
  {
    term: "सेः",
    termRoman: "seḥ",
    meaning: "Of @deva[स] (genitive). Rules for the dental sibilant.",
    category: "samjna",
  },
  {
    term: "हि",
    termRoman: "hi",
    meaning: "Indeed, for. Emphatic particle; also imperative ending.",
    category: "general",
  },
  {
    term: "यासुट्",
    termRoman: "yāsuṭ",
    meaning: "Augment @deva[यासु]. Inserted in certain optative formations.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "यूनः",
    termRoman: "yūnaḥ",
    meaning: "Of @deva[युवन्] 'young' (genitive). Special rules for this stem.",
    category: "general",
    related: ["yuvā"],
  },
  {
    term: "वतण्डात्",
    termRoman: "vataṇḍāt",
    meaning: "After @deva[वतण्ड] (ablative). A specific stem reference.",
    category: "general",
  },
  {
    term: "फञ्",
    termRoman: "phañ",
    meaning: "Taddhita suffix (= @deva[आयन]). Forms patronymics.",
    category: "pratyaya",
  },
  {
    term: "द्व्यचः",
    termRoman: "dvyacaḥ",
    meaning: "Of a disyllabic (genitive). Having two vowels.",
    category: "samjna",
  },
  {
    term: "वुक्",
    termRoman: "vuk",
    meaning: "Augment @deva[वु]. Inserted in certain formations.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "पितृष्वसुः",
    termRoman: "pitṛṣvasuḥ",
    meaning: "Of paternal aunt (genitive). Special rules for @deva[पितृष्वसृ].",
    category: "general",
  },
  {
    term: "भ्रातुः",
    termRoman: "bhrātuḥ",
    meaning: "Of brother (genitive). Special rules for @deva[भ्रातृ].",
    category: "general",
  },
  {
    term: "भ्रातरि",
    termRoman: "bhrātari",
    meaning:
      "When brother is involved (locative). In context of @deva[भ्रातृ].",
    category: "general",
  },
  {
    term: "वृद्धस्य",
    termRoman: "vṛddhasya",
    meaning: "Of a vṛddha stem (genitive). One with initial vṛddhi vowel.",
    category: "samjna",
    related: ["vṛddhi"],
  },
  {
    term: "रक्तं",
    termRoman: "raktaṃ",
    meaning: "Red, dyed (nominative). Color or passionate sense.",
    category: "general",
  },
  {
    term: "परिवृतो",
    termRoman: "parivṛto",
    meaning: "Surrounded (nominative). Enclosed or accompanied.",
    category: "general",
  },
  {
    term: "भववत्",
    termRoman: "bhavavat",
    meaning: "Like existence (adverb). In the manner of being.",
    category: "general",
  },
  {
    term: "यन्",
    termRoman: "yan",
    meaning: "Kṛt suffix @deva[य]. Forms verbal adjectives.",
    category: "pratyaya",
  },
  {
    term: "विषयः",
    termRoman: "viṣayaḥ",
    meaning: "Domain, scope (nominative). The area of application.",
    category: "general",
  },
  {
    term: "ष्ठल्",
    termRoman: "ṣṭhal",
    meaning: "Taddhita suffix. Forms certain derivatives.",
    category: "pratyaya",
  },
  {
    term: "लवणात्",
    termRoman: "lavaṇāt",
    meaning: "After 'salt' (ablative). From @deva[लवण] 'salt'.",
    category: "general",
  },
  {
    term: "परिषदः",
    termRoman: "pariṣadaḥ",
    meaning: "Of assembly (genitive). Special rules for @deva[परिषद्].",
    category: "general",
  },
  {
    term: "वृत्तम्",
    termRoman: "vṛttam",
    meaning: "Occurred, happened (nominative). What has taken place.",
    category: "general",
  },
  {
    term: "भक्तात्",
    termRoman: "bhaktāt",
    meaning: "After a devotee/portion (ablative). From @deva[भक्त].",
    category: "general",
  },
  {
    term: "संज्ञायामण्",
    termRoman: "saṃjñāyāmaṇ",
    meaning: "In proper names with @deva[अण्] (locative). When forming names.",
    category: "pratyaya",
  },
  {
    term: "सभायाः",
    termRoman: "sabhāyāḥ",
    meaning: "Of assembly (genitive). Special rules for @deva[सभा].",
    category: "general",
  },
  {
    term: "मधोः",
    termRoman: "madhoḥ",
    meaning:
      "Of @deva[मधु] 'honey/sweet' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "भगात्",
    termRoman: "bhagāt",
    meaning: "After 'fortune/lord' (ablative). From @deva[भग].",
    category: "general",
  },
  {
    term: "वसोः",
    termRoman: "vasoḥ",
    meaning: "Of @deva[वसु] 'wealth' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "वतेः",
    termRoman: "vateḥ",
    meaning: "Of @deva[वत्] suffix (genitive). The possessive suffix.",
    category: "pratyaya",
  },
  {
    term: "प्राग्",
    termRoman: "prāg",
    meaning: "Before, eastward. Indicates prior scope or direction.",
    category: "samjna",
  },
  {
    term: "वतोः",
    termRoman: "vatoḥ",
    meaning: "Of @deva[वत्] (genitive). Possessive suffix context.",
    category: "pratyaya",
  },
  {
    term: "असंज्ञायाम्",
    termRoman: "asaṃjñāyām",
    meaning: "Not in a proper name (locative). When not forming a name.",
    category: "samjna",
  },
  {
    term: "निष्कात्",
    termRoman: "niṣkāt",
    meaning: "After @deva[निष्क] 'gold coin' (ablative). From currency terms.",
    category: "general",
  },
  {
    term: "शाणात्",
    termRoman: "śāṇāt",
    meaning: "After @deva[शाण] 'whetstone' (ablative). From this stem.",
    category: "general",
  },
  {
    term: "पात्रात्",
    termRoman: "pātrāt",
    meaning: "After 'vessel' (ablative). From @deva[पात्र].",
    category: "general",
  },
  {
    term: "वर्गे",
    termRoman: "varge",
    meaning: "In a class/group (locative). When referring to categories.",
    category: "general",
  },
  {
    term: "मासात्",
    termRoman: "māsāt",
    meaning: "After 'month' (ablative). From time expressions.",
    category: "general",
  },
  {
    term: "षण्मासात्",
    termRoman: "ṣaṇmāsāt",
    meaning: "After 'six months' (ablative). From this compound.",
    category: "general",
  },
  {
    term: "समायाः",
    termRoman: "samāyāḥ",
    meaning: "Of @deva[समा] 'year' (genitive). Time-related rules.",
    category: "general",
  },
  {
    term: "वर्षात्",
    termRoman: "varṣāt",
    meaning: "After 'year/rain' (ablative). From @deva[वर्ष].",
    category: "general",
  },
  {
    term: "वत्सरान्तात्",
    termRoman: "vatsarāntāt",
    meaning: "After year-end (ablative). From @deva[वत्सरान्त].",
    category: "general",
  },
  {
    term: "समयात्",
    termRoman: "samayāt",
    meaning: "After 'time/occasion' (ablative). From @deva[समय].",
    category: "general",
  },
  {
    term: "ष्यञ्",
    termRoman: "ṣyañ",
    meaning: "Taddhita suffix (= @deva[य]). Forms abstract nouns.",
    category: "pratyaya",
  },
  {
    term: "होत्राभ्यः",
    termRoman: "hotrābhyaḥ",
    meaning: "After hotra words (ablative plural). Priestly function terms.",
    category: "general",
  },
  {
    term: "समां",
    termRoman: "samāṃ",
    meaning: "Year (accusative). Duration of a year.",
    category: "general",
  },
  {
    term: "प्रमाणे",
    termRoman: "pramāṇe",
    meaning: "In measure (locative). When indicating size or extent.",
    category: "general",
  },
  {
    term: "परिमाणे",
    termRoman: "parimāṇe",
    meaning: "In measurement (locative). Quantity context.",
    category: "general",
  },
  {
    term: "नित्यमुदात्तः",
    termRoman: "nityamudāttaḥ",
    meaning: "Always acute-accented (nominative). Invariably has udātta.",
    category: "samjna",
  },
  {
    term: "नान्तात्",
    termRoman: "nāntāt",
    meaning:
      "After @deva[न]-final (ablative). Following stems ending in @deva[न्].",
    category: "samjna",
  },
  {
    term: "मट्",
    termRoman: "maṭ",
    meaning: "Augment @deva[म्]. Inserted in certain forms.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "प्राये",
    termRoman: "prāye",
    meaning: "In majority (locative). When something is common/usual.",
    category: "general",
  },
  {
    term: "पूर्वात्",
    termRoman: "pūrvāt",
    meaning: "After the preceding (ablative). Following an earlier element.",
    category: "general",
  },
  {
    term: "प्राणिस्थात्",
    termRoman: "prāṇisthāt",
    meaning: "After 'located in living beings' (ablative). Biological context.",
    category: "general",
  },
  {
    term: "वलच्",
    termRoman: "valac",
    meaning: "Taddhita suffix. Forms certain derivatives.",
    category: "pratyaya",
  },
  {
    term: "युस्",
    termRoman: "yus",
    meaning: "Substitute @deva[युस्]. Replaces certain elements.",
    category: "pratyaya",
  },
  {
    term: "र्हिल्",
    termRoman: "rhil",
    meaning: "Suffix @deva[र्हिल्]. Time-related suffix.",
    category: "pratyaya",
  },
  {
    term: "प्रशस्यस्य",
    termRoman: "praśasyasya",
    meaning: "Of the praiseworthy (genitive). Superlative context.",
    category: "general",
  },
  {
    term: "ष्टरच्",
    termRoman: "ṣṭarac",
    meaning: "Comparative suffix (= @deva[तर]). Forms comparatives.",
    category: "pratyaya",
  },
  {
    term: "द्वयोः",
    termRoman: "dvayoḥ",
    meaning: "Of two (genitive dual). When referring to a pair.",
    category: "general",
  },
  {
    term: "बहूनाम्",
    termRoman: "bahūnām",
    meaning: "Of many (genitive plural). When referring to multiple items.",
    category: "general",
  },
  {
    term: "संख्यादेः",
    termRoman: "saṃkhyādeḥ",
    meaning: "After a numeral-initial (ablative). Beginning with a number.",
    category: "samjna",
  },
  {
    term: "वीप्सायाम्",
    termRoman: "vīpsāyām",
    meaning: "In distribution (locative). When meaning 'each' or repetition.",
    category: "general",
  },
  {
    term: "सुच्",
    termRoman: "suc",
    meaning: "Suffix @deva[सु]. Forms certain derivatives.",
    category: "pratyaya",
  },
  {
    term: "वर्णे",
    termRoman: "varṇe",
    meaning: "In color/letter (locative). Color or phoneme context.",
    category: "general",
    related: ["varṇa"],
  },
  {
    term: "रक्ते",
    termRoman: "rakte",
    meaning: "In red/passion (locative). Color or emotion context.",
    category: "general",
  },
  {
    term: "मृदः",
    termRoman: "mṛdaḥ",
    meaning:
      "Of @deva[मृद्] 'soft/earth' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "शस्",
    termRoman: "śas",
    meaning: "Suffix @deva[शस्]. Forms distributive adverbs.",
    category: "pratyaya",
  },
  {
    term: "सम्पद्यकर्तरि",
    termRoman: "sampadyakartari",
    meaning: "When the agent becomes (locative). Transformation context.",
    category: "karaka",
  },
  {
    term: "नञः",
    termRoman: "nañaḥ",
    meaning: "Of @deva[नञ्] 'not' (genitive). The negative prefix.",
    category: "samjna",
  },
  {
    term: "समाहारे",
    termRoman: "samāhāre",
    meaning: "In collective sense (locative). When meaning 'group of'.",
    category: "samasa",
    related: ["samāhāra"],
  },
  {
    term: "नावः",
    termRoman: "nāvaḥ",
    meaning: "Of @deva[नौ] 'boat' (genitive). Special rules for this stem.",
    category: "general",
  },
  {
    term: "धात्वादेः",
    termRoman: "dhātvādeḥ",
    meaning: "Of root-initial (genitive). The first part of a root.",
    category: "samjna",
    related: ["dhātu"],
  },
  {
    term: "वान्तः",
    termRoman: "vāntaḥ",
    meaning: "Ending in @deva[व्] (nominative). @deva[व्]-final forms.",
    category: "samjna",
  },
  {
    term: "शक्यार्थे",
    termRoman: "śakyārthe",
    meaning: "In potential sense (locative). When meaning 'can be done'.",
    category: "general",
  },
  {
    term: "सवर्णे",
    termRoman: "savarṇe",
    meaning: "When homogeneous (locative). Same articulation class.",
    category: "sandhi",
    related: ["savarṇa"],
  },
  {
    term: "पुँसि",
    termRoman: "puṃsi",
    meaning: "In masculine (locative). When masculine gender applies.",
    category: "samjna",
    related: ["puṃliṅga"],
  },
  {
    term: "सर्वत्र",
    termRoman: "sarvatra",
    meaning: "Everywhere, always. In all cases.",
    category: "general",
  },
  {
    term: "सुलोपः",
    termRoman: "sulopaḥ",
    meaning:
      "Deletion of @deva[सु] (nominative). Elision of nominative ending.",
    category: "vibhakti",
    related: ["lopa"],
  },
  {
    term: "प्रत्ययात्",
    termRoman: "pratyayāt",
    meaning: "After a suffix (ablative). Following an affix.",
    category: "pratyaya",
    related: ["pratyaya"],
  },
  {
    term: "सङ्ख्यायामुत्तरपदे",
    termRoman: "saṅkhyāyāmuttarapade",
    meaning:
      "When a numeral is in the latter member (locative). Compound structure.",
    category: "samasa",
  },
  {
    term: "शपि",
    termRoman: "śapi",
    meaning: "When @deva[शप्] follows (locative). Before class 1 vikaraṇa.",
    category: "pratyaya",
    related: ["śap"],
  },
  {
    term: "रञ्जेः",
    termRoman: "rañjeḥ",
    meaning:
      "Of @deva[रञ्ज्] 'to color' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "भूसुधियोः",
    termRoman: "bhūsudhiyoḥ",
    meaning:
      "Of @deva[भू] and @deva[सुधी] (genitive dual). These specific stems.",
    category: "general",
  },
  {
    term: "म्वोः",
    termRoman: "mvoḥ",
    meaning: "Of @deva[म्] and @deva[व्] (genitive dual). These consonants.",
    category: "samjna",
  },
  {
    term: "भिसः",
    termRoman: "bhisaḥ",
    meaning: "Of @deva[भिस्] (genitive). Instrumental plural ending.",
    category: "vibhakti",
  },
  {
    term: "नुट्",
    termRoman: "nuṭ",
    meaning: "Augment @deva[नु]. Nasal insertion.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "स्त्रियां",
    termRoman: "striyāṃ",
    meaning: "In feminine (locative). When feminine gender applies.",
    category: "samjna",
    related: ["strīliṅga"],
  },
  {
    term: "रुदः",
    termRoman: "rudaḥ",
    meaning: "Of @deva[रुद्] 'to cry' (genitive). Special rules for this root.",
    category: "gana",
  },
  {
    term: "सर्वेषाम्",
    termRoman: "sarveṣām",
    meaning: "Of all (genitive plural). Referring to everything.",
    category: "general",
  },
  {
    term: "यञि",
    termRoman: "yañi",
    meaning: "When @deva[यञ्] follows (locative). Before this suffix.",
    category: "pratyaya",
  },
  {
    term: "नद्याः",
    termRoman: "nadyāḥ",
    meaning: "Of a @deva[नदी] stem (genitive). Feminine ī-stems.",
    category: "samjna",
    related: ["nadī"],
  },
  {
    term: "स्याट्",
    termRoman: "syāṭ",
    meaning: "Augment @deva[स्य]. Inserted before certain endings.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "रि",
    termRoman: "ri",
    meaning: "When @deva[रि] follows (locative). Specific phonetic context.",
    category: "samjna",
  },
  {
    term: "संयोगान्तस्य",
    termRoman: "saṃyogāntasya",
    meaning: "Of one ending in a cluster (genitive). Consonant cluster final.",
    category: "samjna",
  },
  {
    term: "बशः",
    termRoman: "baśaḥ",
    meaning: "Of @deva[बश्] (genitive). Voiced stops and nasals.",
    category: "pratyahara",
  },
  {
    term: "भष्",
    termRoman: "bhaṣ",
    meaning: "Pratyāhāra @deva[भष्]. Voiced aspirates and fricatives.",
    category: "pratyahara",
  },
  {
    term: "हुते",
    termRoman: "hute",
    meaning: "When offered (locative). In sacrificial context.",
    category: "general",
  },
  {
    term: "शाकटायनस्य",
    termRoman: "śākaṭāyanasya",
    meaning: "Of Śākaṭāyana (genitive). According to this grammarian.",
    category: "general",
  },
  {
    term: "हे",
    termRoman: "he",
    meaning: "O! (vocative particle). Exclamation for address.",
    category: "general",
  },
  {
    term: "शरि",
    termRoman: "śari",
    meaning:
      "When @deva[शर्] follows (locative). Before sibilants + @deva[र्].",
    category: "pratyahara",
  },
  {
    term: "धुट्",
    termRoman: "dhuṭ",
    meaning: "Augment @deva[धु]. Inserted in certain formations.",
    category: "samjna",
    related: ["āgama"],
  },
  {
    term: "समानपदे",
    termRoman: "samānapade",
    meaning: "In the same word (locative). Within a single pada.",
    category: "samjna",
    related: ["pada"],
  },
  {
    term: "अट्कुप्वाङ्नुम्व्यवाये",
    termRoman: "aṭkupvāṅnumvyavāye",
    meaning:
      "When @deva[अट्], @deva[कु], @deva[पु], @deva[आङ्], @deva[नुम्] intervene (locative). Complex phonetic condition.",
    category: "samjna",
  },
  {
    term: "श्चुः",
    termRoman: "ścuḥ",
    meaning: "Of @deva[श्चु] (genitive). Palatals and @deva[श].",
    category: "pratyahara",
  },
  {
    term: "ययि",
    termRoman: "yayi",
    meaning:
      "When @deva[य्] with @deva[इ] follows (locative). Specific context.",
    category: "samjna",
  },
  {
    term: "सवर्णः",
    termRoman: "savarṇaḥ",
    meaning: "Homogeneous (nominative). Same articulation place and effort.",
    category: "sandhi",
    related: ["savarṇa"],
  },
  {
    term: "अ",
    termRoman: "a",
    meaning: "The short vowel @deva[अ]. The most basic vowel in Sanskrit.",
    category: "samjna",
  },

  // Remaining 2-occurrence anuvṛtti terms
  {
    term: "अकच्",
    termRoman: "akac",
    meaning:
      "Taddhita suffix marking possession or relation. Forms adjectives.",
    category: "pratyaya",
  },
  {
    term: "अकर्तरि",
    termRoman: "akartari",
    meaning:
      "Not in agent sense (locative). When the grammatical subject is not the agent.",
    category: "karaka",
  },
  {
    term: "अकोः",
    termRoman: "akoḥ",
    meaning:
      "Of @deva[अक्] (genitive). Refers to @deva[अ] and gutturals in pratyāhāra.",
    category: "pratyahara",
  },
  {
    term: "अग्रात्",
    termRoman: "agrāt",
    meaning: "From the front/tip (ablative). Indicates initial position.",
    category: "general",
  },
  {
    term: "अघो",
    termRoman: "agho",
    meaning: "Of non-guttural (genitive). Not a @deva[क]-class consonant.",
    category: "samjna",
  },
  {
    term: "अचामादिः",
    termRoman: "acāmādiḥ",
    meaning: "The first of vowels (nominative). Initial vowel in a sequence.",
    category: "pratyahara",
  },
  {
    term: "अचामादेः",
    termRoman: "acāmādeḥ",
    meaning: "Of the first of vowels (genitive). Concerning the initial vowel.",
    category: "pratyahara",
  },
  {
    term: "अच्छन्दसि",
    termRoman: "acchandasi",
    meaning:
      "Not in Vedic (locative). Rule applies only to classical Sanskrit.",
    category: "samjna",
  },
  {
    term: "अजादेः",
    termRoman: "ajādeḥ",
    meaning: "Of what begins with a vowel (genitive). Vowel-initial forms.",
    category: "pratyahara",
  },
  {
    term: "अतद्धितलुकि",
    termRoman: "ataddhitaluki",
    meaning:
      "When taddhita is not elided (locative). Condition for certain rules.",
    category: "pratyaya",
  },
  {
    term: "अतसुच्",
    termRoman: "atasuc",
    meaning: "Taddhita suffix. Forms derivatives with specific meaning.",
    category: "pratyaya",
  },
  {
    term: "अदेशे",
    termRoman: "adeśe",
    meaning: "Not in a place (locative). When location is not specified.",
    category: "general",
  },
  {
    term: "अद्ड्",
    termRoman: "aḍḍ",
    meaning: "Taddhita suffix (= @deva[अ]). Forms derivatives.",
    category: "pratyaya",
  },
  {
    term: "अद्रव्यप्रकर्षे",
    termRoman: "adravyaprakarṣe",
    meaning:
      "Not in excellence of substance (locative). When quality, not substance, is emphasized.",
    category: "general",
  },
  {
    term: "अधः",
    termRoman: "adhaḥ",
    meaning: "Below, under. Spatial direction downward.",
    category: "general",
  },
  {
    term: "अधातोः",
    termRoman: "adhātoḥ",
    meaning: "Not from a root (genitive). When base is nominal, not verbal.",
    category: "samjna",
  },
  {
    term: "अधीष्ट",
    termRoman: "adhīṣṭa",
    meaning: "Requested, invited. Meaning of respectful request.",
    category: "general",
  },
  {
    term: "अध्",
    termRoman: "adh",
    meaning: "Above, over. Verbal prefix indicating superiority.",
    category: "samjna",
  },
  {
    term: "अध्ययने",
    termRoman: "adhyayane",
    meaning: "In study/recitation (locative). Context of Vedic study.",
    category: "general",
  },
  {
    term: "अध्यर्धपूर्वद्विगोः",
    termRoman: "adhyardhapūrvadvigoḥ",
    meaning:
      "Of dvigu with 'one and a half' as first member (genitive). Specific compound type.",
    category: "samasa",
  },
  {
    term: "अन",
    termRoman: "ana",
    meaning:
      "Kṛt suffix forming action nouns. @deva[गम्] → @deva[गमन] 'going'.",
    category: "pratyaya",
  },
  {
    term: "अनडुहोः",
    termRoman: "anaḍuhoḥ",
    meaning: "Of @deva[अनडुह्] 'bull' (genitive dual). Special stem forms.",
    category: "samjna",
  },
  {
    term: "अनन्त्यस्य",
    termRoman: "anantyasya",
    meaning:
      "Of what is not final (genitive). Non-ultimate element in sequence.",
    category: "samjna",
  },
  {
    term: "अनितेः",
    termRoman: "aniteḥ",
    meaning: "Of @deva[अनित्] (genitive). Root not marked with @deva[इ].",
    category: "samjna",
  },
  {
    term: "अनित्ये",
    termRoman: "anitye",
    meaning: "In optional cases (locative). When rule is not obligatory.",
    category: "general",
  },
  {
    term: "अनुपसर्गात्",
    termRoman: "anupasargāt",
    meaning: "Without prefix (ablative). When no @deva[उपसर्ग] is attached.",
    category: "samjna",
  },
  {
    term: "अनुपसर्जनात्",
    termRoman: "anupasarjanāt",
    meaning:
      "From non-subordinate (ablative). The primary, not secondary, member.",
    category: "samasa",
  },
  {
    term: "अनुस्वारस्य",
    termRoman: "anusvārasya",
    meaning:
      "Of anusvāra (genitive). Rules concerning the nasal mark @deva[ं].",
    category: "sandhi",
  },
  {
    term: "अन्तस्य",
    termRoman: "antasya",
    meaning: "Of the end (genitive). Final element of a word.",
    category: "samjna",
  },
  {
    term: "अन्त्यात्",
    termRoman: "antyāt",
    meaning: "From the final (ablative). Starting from the last element.",
    category: "samjna",
  },
  {
    term: "अन्नमस्मिन्",
    termRoman: "annamasmin",
    meaning: "Food is in this (locative). Meaning 'where food is present'.",
    category: "general",
  },
  {
    term: "अन्यतरस्यामञ्",
    termRoman: "anyatarasyāmañ",
    meaning: "Optionally @deva[अञ्] suffix. @deva[अञ्] may or may not apply.",
    category: "pratyaya",
  },
  {
    term: "अन्यतरस्यामण्",
    termRoman: "anyatarasyāmaṇ",
    meaning: "Optionally @deva[अण्] suffix. @deva[अण्] may or may not apply.",
    category: "pratyaya",
  },
  {
    term: "अपदादौ",
    termRoman: "apadādau",
    meaning: "Not at word beginning (locative). When position is not initial.",
    category: "samjna",
  },
  {
    term: "अपदान्तात्",
    termRoman: "apadāntāt",
    meaning: "Not from word-final (ablative). When not at end of @deva[पद].",
    category: "samjna",
  },
  {
    term: "अपान्नप्तृभ्याम्",
    termRoman: "apānnaptrībhyām",
    meaning:
      "Except for @deva[अप्] and @deva[नप्तृ] (ablative dual). Exclusion clause.",
    category: "samjna",
  },
  {
    term: "अपोनप्तृ",
    termRoman: "aponaptṛ",
    meaning: "Name of a Vedic deity. 'Son of waters'.",
    category: "general",
  },
  {
    term: "अप्",
    termRoman: "ap",
    meaning: "Water (noun). @deva[आपः] in plural. Also verbal prefix 'away'.",
    category: "general",
  },
  {
    term: "अप्रत्ययः",
    termRoman: "apratyayaḥ",
    meaning: "Not a suffix (nominative). When element is not an affix.",
    category: "pratyaya",
  },
  {
    term: "अप्लुतवत्",
    termRoman: "aplutavat",
    meaning: "Like non-prolated. Treated as if without prolation.",
    category: "sandhi",
  },
  {
    term: "अप्लुतात्",
    termRoman: "aplutāt",
    meaning: "From non-prolated (ablative). From vowel without prolongation.",
    category: "sandhi",
  },
  {
    term: "अबहुव्रीहि",
    termRoman: "abahuvrīhi",
    meaning: "Not a bahuvrīhi (nominative). When compound is not exocentric.",
    category: "samasa",
  },
  {
    term: "अभ्यस्तम्",
    termRoman: "abhyastam",
    meaning:
      "Reduplicated (nominative). Form that has undergone reduplication.",
    category: "samjna",
  },
  {
    term: "अभ्यस्तयोः",
    termRoman: "abhyastayoḥ",
    meaning:
      "Of reduplicated forms (genitive dual). Rules for both reduplicated elements.",
    category: "samjna",
  },
  {
    term: "अभ्यासलोपः",
    termRoman: "abhyāsalopaḥ",
    meaning:
      "Deletion of the reduplicative syllable (nominative). Loss of @deva[अभ्यास].",
    category: "samjna",
  },
  {
    term: "अम्परे",
    termRoman: "ampare",
    meaning: "When @deva[अम्] follows (locative). Before accusative ending.",
    category: "vibhakti",
  },
  {
    term: "अयच्",
    termRoman: "ayac",
    meaning: "Taddhita suffix. Forms patronymic derivatives.",
    category: "pratyaya",
  },
  {
    term: "अय्",
    termRoman: "ay",
    meaning: "The semivowel @deva[अय्]. Substitute in certain sandhi contexts.",
    category: "sandhi",
  },
  {
    term: "अरिष्टस्य",
    termRoman: "ariṣṭasya",
    meaning: "Of @deva[अरिष्ट] (genitive). Name or term in specific context.",
    category: "general",
  },
  {
    term: "अर्थ",
    termRoman: "artha",
    meaning: "Meaning, purpose. The semantic content of a word.",
    category: "general",
  },
  {
    term: "अर्थायाम्",
    termRoman: "arthāyām",
    meaning: "In the meaning of (locative). When expressing particular sense.",
    category: "general",
  },
  {
    term: "अर्थे",
    termRoman: "arthe",
    meaning: "In meaning (locative). When a specific sense is intended.",
    category: "general",
  },
  {
    term: "अर्यम्णामङ्गस्य",
    termRoman: "aryamṇāmaṅgasya",
    meaning:
      "Of the stem of @deva[अर्यमन्] names (genitive). Special stem forms.",
    category: "samjna",
  },
  {
    term: "अवङ्",
    termRoman: "avaṅ",
    meaning: "Augment @deva[अव्]. Added in certain derivational contexts.",
    category: "pratyaya",
  },
  {
    term: "अवसाने",
    termRoman: "avasāne",
    meaning: "At pause (locative). At end of utterance or sentence boundary.",
    category: "sandhi",
  },
  {
    term: "अव्यक्तानुकरणस्य",
    termRoman: "avyaktānukaraṇasya",
    meaning: "Of onomatopoeia (genitive). Rules for imitative sounds.",
    category: "general",
  },
  {
    term: "अशीत्योः",
    termRoman: "aśītyoḥ",
    meaning: "Of @deva[अशीति] 'eighty' (genitive dual). Number-specific rules.",
    category: "general",
  },
  {
    term: "अष्टनः",
    termRoman: "aṣṭanaḥ",
    meaning: "Of @deva[अष्टन्] 'eight' (genitive). Stem form rules.",
    category: "general",
  },
  {
    term: "अष्टमाभ्याम्",
    termRoman: "aṣṭamābhyām",
    meaning:
      "From eighth onwards (ablative dual). Starting from ordinal 'eighth'.",
    category: "general",
  },
  {
    term: "असत्वे",
    termRoman: "asatve",
    meaning:
      "In non-substance (locative). When not referring to concrete entity.",
    category: "general",
  },
  {
    term: "असमाप्तौ",
    termRoman: "asamāptau",
    meaning: "In incompletion (locative). When action is not finished.",
    category: "general",
  },
  {
    term: "असर्वनामस्थाने",
    termRoman: "asarvanāmasthāne",
    meaning: "Not in strong cases (locative). Weak case positions.",
    category: "samjna",
  },
  {
    term: "असुरस्य",
    termRoman: "asurasya",
    meaning: "Of @deva[असुर] 'demon' (genitive). Specific noun context.",
    category: "general",
  },
  {
    term: "अस्",
    termRoman: "as",
    meaning: "Root meaning 'to be'. @deva[अस्ति] 'is'.",
    category: "gana",
  },
  {
    term: "अस्तिसिचः",
    termRoman: "astiścaḥ",
    meaning:
      "Of @deva[अस्ति] and @deva[सिच्] (genitive). Rules for 'to be' and aorist.",
    category: "gana",
  },
  {
    term: "अहः",
    termRoman: "ahaḥ",
    meaning: "Day (nominative). @deva[अहन्] 'day' in certain forms.",
    category: "general",
  },
  {
    term: "अहन्",
    termRoman: "ahan",
    meaning: "Day (stem). Irregular noun 'day'.",
    category: "general",
  },
  {
    term: "आचित",
    termRoman: "ācita",
    meaning: "Collected, heaped. Past participle of @deva[आ-चि].",
    category: "general",
  },
  {
    term: "आढक",
    termRoman: "āḍhaka",
    meaning: "A measure of grain. Unit of measurement.",
    category: "general",
  },
  {
    term: "आत्मनेपदेषु",
    termRoman: "ātmanepadaṣu",
    meaning: "In ātmanepada endings (locative plural). Middle voice contexts.",
    category: "lakara",
  },
  {
    term: "आदयः",
    termRoman: "ādayaḥ",
    meaning: "And others, et cetera (nominative plural). 'Beginning with...'.",
    category: "general",
  },
  {
    term: "आदिषु",
    termRoman: "ādiṣu",
    meaning: "In initial positions (locative plural). At the beginning.",
    category: "general",
  },
  {
    term: "आदीनाम्",
    termRoman: "ādīnām",
    meaning: "Of initial elements (genitive plural). First items of a list.",
    category: "general",
  },
  {
    term: "आद्युदात्तश्च",
    termRoman: "ādyudāttaśca",
    meaning: "And initial-accented. First syllable has udātta.",
    category: "sandhi",
  },
  {
    term: "आपि",
    termRoman: "āpi",
    meaning: "Reaching to, pervading. Meaning 'extending to'.",
    category: "general",
  },
  {
    term: "आप्",
    termRoman: "āp",
    meaning: "Root meaning 'to obtain'. @deva[आप्नोति] 'obtains'.",
    category: "gana",
  },
  {
    term: "आमः",
    termRoman: "āmaḥ",
    meaning: "Of @deva[आम्] (genitive). First person plural ending context.",
    category: "pratyaya",
  },
  {
    term: "आमन्त्रण",
    termRoman: "āmantraṇa",
    meaning: "Invitation, address. Context of calling or summoning.",
    category: "general",
  },
  {
    term: "आर्धधातुकम्",
    termRoman: "ārdhadhātukam",
    meaning: "An ārdhadhātuka affix (nominative). Non-conjugational suffix.",
    category: "pratyaya",
  },
  {
    term: "आवहति",
    termRoman: "āvahati",
    meaning: "Brings (verb). Present tense of @deva[आ-वह्].",
    category: "general",
  },
  {
    term: "आहः",
    termRoman: "āhaḥ",
    meaning: "Day-related (nominative). Form in compound context.",
    category: "general",
  },
  {
    term: "आहिः",
    termRoman: "āhiḥ",
    meaning: "Snake (nominative). @deva[अहि] 'serpent' with vṛddhi.",
    category: "general",
  },
  {
    term: "इदुद्भ्याम्",
    termRoman: "idudbhyām",
    meaning:
      "From @deva[इ] and @deva[उ] (ablative dual). Short vowels as context.",
    category: "pratyahara",
  },
  {
    term: "इन",
    termRoman: "ina",
    meaning: "Possessive suffix @deva[इन्]. 'Having' or 'characterized by'.",
    category: "pratyaya",
  },
  {
    term: "इनङ्",
    termRoman: "inaṅ",
    meaning: "Taddhita suffix (= @deva[इन]). Forms possessive adjectives.",
    category: "pratyaya",
  },
  {
    term: "इयः",
    termRoman: "iyaḥ",
    meaning: "Of @deva[इय्] (genitive). Semivowel substitute form.",
    category: "sandhi",
  },
  {
    term: "इसुसोः",
    termRoman: "isusoḥ",
    meaning:
      "Of @deva[इ]-ending and @deva[उ]-ending (genitive dual). Short vowel stems.",
    category: "samjna",
  },
  {
    term: "ई",
    termRoman: "ī",
    meaning: "Long vowel @deva[ई]. Two mātrā duration.",
    category: "samjna",
  },
  {
    term: "ईकक्",
    termRoman: "īkak",
    meaning: "Taddhita suffix. Forms derivatives with specific meaning.",
    category: "pratyaya",
  },
  {
    term: "ईषद्",
    termRoman: "īṣad",
    meaning: "Slightly, a little. Indeclinable meaning 'somewhat'.",
    category: "general",
  },
  {
    term: "उ",
    termRoman: "u",
    meaning: "Short vowel @deva[उ]. One mātrā duration.",
    category: "samjna",
  },
  {
    term: "उञः",
    termRoman: "uñaḥ",
    meaning: "Of @deva[उञ्] (genitive). Taddhita suffix context.",
    category: "pratyaya",
  },
  {
    term: "उत्तरस्य",
    termRoman: "uttarasya",
    meaning: "Of the following (genitive). The subsequent element.",
    category: "general",
  },
  {
    term: "उदीचाम्",
    termRoman: "udīcām",
    meaning: "Of northern grammarians (genitive plural). Regional variant.",
    category: "general",
  },
  {
    term: "उप",
    termRoman: "upa",
    meaning: "Prefix meaning 'near, towards'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "उपधयोः",
    termRoman: "upadhayoḥ",
    meaning: "Of penultimates (genitive dual). Both penultimate elements.",
    category: "samjna",
  },
  {
    term: "उपमानात्",
    termRoman: "upamānāt",
    meaning: "From comparison/standard (ablative). The thing compared to.",
    category: "samasa",
  },
  {
    term: "उपसर्गाः",
    termRoman: "upasargāḥ",
    meaning: "Prefixes (nominative plural). The 22 verbal prefixes.",
    category: "samjna",
  },
  {
    term: "उवङौ",
    termRoman: "uvaṅau",
    meaning:
      "Augments @deva[उ] and @deva[व्] (nominative dual). Inserted sounds.",
    category: "pratyaya",
  },
  {
    term: "उवङ्",
    termRoman: "uvaṅ",
    meaning: "Augment @deva[उव्]. Inserted between certain sounds.",
    category: "pratyaya",
  },
  {
    term: "ऋक्षु",
    termRoman: "ṛkṣu",
    meaning: "In Ṛgvedic hymns (locative plural). Vedic textual context.",
    category: "general",
  },
  {
    term: "ऋतोः",
    termRoman: "ṛtoḥ",
    meaning: "Of @deva[ऋ] (genitive). Rules for vocalic r.",
    category: "samjna",
  },
  {
    term: "ऋत्",
    termRoman: "ṛt",
    meaning: "The vowel @deva[ऋ]. Short vocalic r.",
    category: "samjna",
  },
  {
    term: "ऋभुक्षामङ्गस्य",
    termRoman: "ṛbhukṣāmaṅgasya",
    meaning:
      "Of the stem of @deva[ऋभुक्षन्] (genitive). Vedic deity name forms.",
    category: "samjna",
  },
  {
    term: "एः",
    termRoman: "eḥ",
    meaning: "Of @deva[ए] (genitive). The diphthong e in rules.",
    category: "samjna",
  },
  {
    term: "एक",
    termRoman: "eka",
    meaning: "One. Numeral base.",
    category: "general",
  },
  {
    term: "एकदेश",
    termRoman: "ekadeśa",
    meaning: "One part, portion. Partial element of a whole.",
    category: "general",
  },
  {
    term: "एकशः",
    termRoman: "ekaśaḥ",
    meaning: "One by one, singly. Distributive sense.",
    category: "general",
  },
  {
    term: "एकाच्",
    termRoman: "ekāc",
    meaning: "Monosyllabic. Having one vowel.",
    category: "samjna",
  },
  {
    term: "एकादेशः",
    termRoman: "ekādeśaḥ",
    meaning: "Single substitute (nominative). One sound replaces multiple.",
    category: "sandhi",
  },
  {
    term: "एचि",
    termRoman: "eci",
    meaning:
      "Before @deva[एच्] vowels (locative). Before @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ].",
    category: "pratyahara",
  },
  {
    term: "एति",
    termRoman: "eti",
    meaning: "Goes (verb). Present of @deva[इ] 'to go'.",
    category: "general",
  },
  {
    term: "ऐस्",
    termRoman: "ais",
    meaning: "Instrumental plural ending. Third vibhakti plural.",
    category: "vibhakti",
  },
  {
    term: "ओतः",
    termRoman: "otaḥ",
    meaning: "Of @deva[ओ] (genitive). Rules for diphthong o.",
    category: "samjna",
  },
  {
    term: "ओसि",
    termRoman: "osi",
    meaning:
      "When @deva[ओस्] ending follows (locative). Genitive dual context.",
    category: "vibhakti",
  },
  {
    term: "ओस्",
    termRoman: "os",
    meaning: "Genitive-locative dual ending. Sixth/seventh vibhakti dual.",
    category: "vibhakti",
  },
  {
    term: "औ",
    termRoman: "au",
    meaning: "The diphthong @deva[औ]. Also nominative dual ending.",
    category: "samjna",
  },
  {
    term: "औङः",
    termRoman: "auṅaḥ",
    meaning: "Of @deva[औङ्] (genitive). Augment context.",
    category: "pratyaya",
  },
  {
    term: "कटच्",
    termRoman: "kaṭac",
    meaning: "Taddhita suffix. Forms derivatives in specific contexts.",
    category: "pratyaya",
  },
  {
    term: "कनौ",
    termRoman: "kanau",
    meaning:
      "When @deva[कन्] suffix applies (locative dual). Diminutive context.",
    category: "pratyaya",
  },
  {
    term: "कर्मणः",
    termRoman: "karmaṇaḥ",
    meaning: "Of the object (genitive). Rules concerning the karman.",
    category: "karaka",
  },
  {
    term: "कर्मव्यतिहारे",
    termRoman: "karmavyatihāre",
    meaning: "In reciprocal action (locative). Mutual action context.",
    category: "karaka",
  },
  {
    term: "कल्पप्",
    termRoman: "kalpap",
    meaning:
      "Taddhita suffix meaning 'almost like'. @deva[पटुकल्प] 'almost clever'.",
    category: "pratyaya",
  },
  {
    term: "कस्य",
    termRoman: "kasya",
    meaning: "Of @deva[क] (genitive). Rules for k-sound or @deva[क]-suffix.",
    category: "samjna",
  },
  {
    term: "कारकात्",
    termRoman: "kārakāt",
    meaning: "From a kāraka (ablative). From a semantic role.",
    category: "karaka",
  },
  {
    term: "कारिभ्यः",
    termRoman: "kāribhyaḥ",
    meaning: "From @deva[कारि]-ending (ablative plural). Agent noun context.",
    category: "pratyaya",
  },
  {
    term: "किति",
    termRoman: "kiti",
    meaning:
      "When @deva[क्] is an @deva[इत्] (locative). Kit-suffix condition.",
    category: "samjna",
  },
  {
    term: "कुत्सिते",
    termRoman: "kutsite",
    meaning: "In contempt/blame (locative). Pejorative meaning context.",
    category: "general",
  },
  {
    term: "कुरुभ्यः",
    termRoman: "kurubhyaḥ",
    meaning: "From the Kurus (ablative plural). Kuru people context.",
    category: "general",
  },
  {
    term: "कुलात्",
    termRoman: "kulāt",
    meaning: "From family/clan (ablative). Family derivation context.",
    category: "general",
  },
  {
    term: "कुशलः",
    termRoman: "kuśalaḥ",
    meaning: "Skilled, expert (nominative). Meaning of proficiency.",
    category: "general",
  },
  {
    term: "कूपेषु",
    termRoman: "kūpeṣu",
    meaning: "In wells (locative plural). Location context.",
    category: "general",
  },
  {
    term: "कृषौ",
    termRoman: "kṛṣau",
    meaning: "In plowing/agriculture (locative). Farming context.",
    category: "general",
  },
  {
    term: "केदारात्",
    termRoman: "kedārāt",
    meaning: "From a field (ablative). Agricultural land context.",
    category: "general",
  },
  {
    term: "क्त्वि",
    termRoman: "ktvi",
    meaning: "Kṛt suffix (= @deva[त्वा]) variant. Absolutive after prefix.",
    category: "pratyaya",
  },
  {
    term: "क्रियायाम्",
    termRoman: "kriyāyām",
    meaning: "In action (locative). When verbal action is involved.",
    category: "general",
  },
  {
    term: "क्रोष्टु",
    termRoman: "kroṣṭu",
    meaning: "Jackal (noun). Special noun with irregular forms.",
    category: "general",
  },
  {
    term: "ख",
    termRoman: "kha",
    meaning: "Aspirated guttural @deva[ख]. Also a taddhita suffix.",
    category: "samjna",
  },
  {
    term: "खार्याः",
    termRoman: "khāryāḥ",
    meaning: "Of @deva[खारी] measure (genitive). Unit of measurement.",
    category: "general",
  },
  {
    term: "गति",
    termRoman: "gati",
    meaning: "Motion, going. Also technical term for prefix-like words.",
    category: "samjna",
  },
  {
    term: "गतिः",
    termRoman: "gatiḥ",
    meaning: "Motion (nominative). Direction or prefix category.",
    category: "samjna",
  },
  {
    term: "गर्ह्यम्",
    termRoman: "garhyam",
    meaning: "Blameworthy (accusative). Meaning of censure.",
    category: "general",
  },
  {
    term: "गुरु",
    termRoman: "guru",
    meaning: "Heavy syllable. Metrically long: long vowel or short + conjunct.",
    category: "sandhi",
  },
  {
    term: "गृह्णाति",
    termRoman: "gṛhṇāti",
    meaning: "Takes, seizes (verb). Present of @deva[ग्रह्].",
    category: "general",
  },
  {
    term: "गोधायाः",
    termRoman: "godhāyāḥ",
    meaning: "Of @deva[गोधा] 'iguana' (genitive). Specific noun context.",
    category: "general",
  },
  {
    term: "घात्",
    termRoman: "ghāt",
    meaning: "After @deva[घ] (ablative). Post-aspirated velar context.",
    category: "samjna",
  },
  {
    term: "ङसिङसोः",
    termRoman: "ṅasiṅasoḥ",
    meaning:
      "Of @deva[ङसि] and @deva[ङस्] (genitive dual). Genitive endings context.",
    category: "vibhakti",
  },
  {
    term: "ङीप्",
    termRoman: "ṅīp",
    meaning: "Feminine suffix (= @deva[ई]). Forms feminine nouns.",
    category: "pratyaya",
  },
  {
    term: "ङ्योः",
    termRoman: "ṅyoḥ",
    meaning: "Of @deva[ङ्य्] (genitive dual). Consonant cluster context.",
    category: "samjna",
  },
  {
    term: "चङ्",
    termRoman: "caṅ",
    meaning: "Intensive/frequentative marker. Repeated action.",
    category: "pratyaya",
  },
  {
    term: "चतुर्",
    termRoman: "catur",
    meaning: "Four (stem). Numeral @deva[चतुर्].",
    category: "general",
  },
  {
    term: "चतुर्भ्यः",
    termRoman: "caturbhyaḥ",
    meaning: "From four (ablative plural). Numeral context.",
    category: "general",
  },
  {
    term: "चरट्",
    termRoman: "caraṭ",
    meaning: "Taddhita suffix. Forms derivatives with specific meaning.",
    category: "pratyaya",
  },
  {
    term: "चर्मणः",
    termRoman: "carmaṇaḥ",
    meaning: "Of skin/leather (genitive). @deva[चर्मन्] context.",
    category: "general",
  },
  {
    term: "चितः",
    termRoman: "citaḥ",
    meaning: "Of @deva[चित्] 'thought' (genitive). Mental activity context.",
    category: "general",
  },
  {
    term: "छण्",
    termRoman: "chaṇ",
    meaning: "Taddhita suffix (= @deva[ईय]). Forms relational adjectives.",
    category: "pratyaya",
  },
  {
    term: "छवि",
    termRoman: "chavi",
    meaning: "Skin, complexion. Noun meaning 'appearance'.",
    category: "general",
  },
  {
    term: "छौ",
    termRoman: "chau",
    meaning: "When @deva[छ] suffix follows (locative). Taddhita context.",
    category: "pratyaya",
  },
  {
    term: "जस्",
    termRoman: "jas",
    meaning: "Nominative plural ending. First vibhakti plural.",
    category: "vibhakti",
  },
  {
    term: "जातौ",
    termRoman: "jātau",
    meaning: "In species/type (locative). Generic category context.",
    category: "general",
  },
  {
    term: "ज्यः",
    termRoman: "jyaḥ",
    meaning: "Of @deva[ज्या] 'bowstring' (genitive). Specific noun.",
    category: "general",
  },
  {
    term: "झलां",
    termRoman: "jhalāṃ",
    meaning: "Of @deva[झल्] consonants (genitive plural). Obstruents.",
    category: "pratyahara",
  },
  {
    term: "झषन्तस्य",
    termRoman: "jhaṣantasya",
    meaning: "Of what ends in @deva[झष्] (genitive). Voiced aspirate-final.",
    category: "pratyahara",
  },
  {
    term: "ञः",
    termRoman: "ñaḥ",
    meaning: "Of @deva[ञ] (genitive). Palatal nasal context.",
    category: "samjna",
  },
  {
    term: "ञ्णिति",
    termRoman: "ñṇiti",
    meaning:
      "When @deva[ञ्] or @deva[ण्] is @deva[इत्] (locative). Marker condition.",
    category: "samjna",
  },
  {
    term: "टा",
    termRoman: "ṭā",
    meaning: "Instrumental singular ending. Third vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "टिठन्",
    termRoman: "ṭiṭhan",
    meaning: "Taddhita suffix. Forms derivatives.",
    category: "pratyaya",
  },
  {
    term: "टितः",
    termRoman: "ṭitaḥ",
    meaning: "Of what is @deva[टित्] (genitive). Marked with @deva[ट्].",
    category: "samjna",
  },
  {
    term: "ठ",
    termRoman: "ṭha",
    meaning: "Aspirated retroflex @deva[ठ]. Also taddhita marker.",
    category: "samjna",
  },
  {
    term: "ठस्य",
    termRoman: "ṭhasya",
    meaning: "Of @deva[ठ] (genitive). Rules for this consonant or suffix.",
    category: "samjna",
  },
  {
    term: "डतमच्",
    termRoman: "ḍatamac",
    meaning: "Superlative suffix (= @deva[तम]). 'Most' meaning.",
    category: "pratyaya",
  },
  {
    term: "डतरच्",
    termRoman: "ḍatarac",
    meaning: "Comparative suffix (= @deva[तर]). 'More' meaning.",
    category: "pratyaya",
  },
  {
    term: "डति",
    termRoman: "ḍati",
    meaning: "When @deva[ड]-marked suffix follows (locative). Suffix context.",
    category: "pratyaya",
  },
  {
    term: "डिति",
    termRoman: "ḍiti",
    meaning: "When @deva[ड्] is @deva[इत्] (locative). Marker condition.",
    category: "samjna",
  },
  {
    term: "ड्यत्",
    termRoman: "ḍyat",
    meaning: "Kṛt suffix (= @deva[य]). Forms potential passive participle.",
    category: "pratyaya",
  },
  {
    term: "ड्यौ",
    termRoman: "ḍyau",
    meaning: "When @deva[ड्य्] follows (locative dual). Suffix context.",
    category: "pratyaya",
  },
  {
    term: "ढकि",
    termRoman: "ḍhaki",
    meaning: "When @deva[ढक्] suffix follows (locative). Taddhita context.",
    category: "pratyaya",
  },
  {
    term: "ढे",
    termRoman: "ḍhe",
    meaning: "When @deva[ढ] follows (locative). Consonant context.",
    category: "samjna",
  },
  {
    term: "ढ्रक्",
    termRoman: "ḍhrak",
    meaning: "Taddhita suffix. Forms derivatives.",
    category: "pratyaya",
  },
  {
    term: "ढ्रलोपे",
    termRoman: "ḍhralope",
    meaning: "When @deva[ढ्र] is elided (locative). Deletion context.",
    category: "sandhi",
  },
  {
    term: "णि",
    termRoman: "ṇi",
    meaning: "Causative suffix. Makes verbs causative.",
    category: "pratyaya",
  },
  {
    term: "तदः",
    termRoman: "tadaḥ",
    meaning: "Of that (genitive). Demonstrative context.",
    category: "general",
  },
  {
    term: "तदधीनवचने",
    termRoman: "tadadhīnavacane",
    meaning: "In dependent expression (locative). Subordinate clause context.",
    category: "general",
  },
  {
    term: "तदस्मिन्",
    termRoman: "tadasmin",
    meaning: "That is in this (locative). Possessive meaning.",
    category: "general",
  },
  {
    term: "तद्धितस्य",
    termRoman: "taddhitasya",
    meaning: "Of a taddhita suffix (genitive). Secondary derivative context.",
    category: "pratyaya",
  },
  {
    term: "तद्धितेषु",
    termRoman: "taddhiteṣu",
    meaning: "In taddhita formations (locative plural). Secondary suffixes.",
    category: "pratyaya",
  },
  {
    term: "तद्राजाः",
    termRoman: "tadrājāḥ",
    meaning: "Kings of that region (nominative plural). Royal title formation.",
    category: "samjna",
  },
  {
    term: "तमधीष्टः",
    termRoman: "tamadhīṣṭaḥ",
    meaning: "Most requested (nominative). Superlative of request.",
    category: "general",
  },
  {
    term: "तमप्",
    termRoman: "tamap",
    meaning: "Superlative suffix (= @deva[तम]). 'Most' meaning.",
    category: "pratyaya",
  },
  {
    term: "तयस्य",
    termRoman: "tayasya",
    meaning: "Of @deva[तय] (genitive). Collective suffix context.",
    category: "pratyaya",
  },
  {
    term: "तरप्",
    termRoman: "tarap",
    meaning: "Comparative suffix (= @deva[तर]). 'More' meaning.",
    category: "pratyaya",
  },
  {
    term: "तस्",
    termRoman: "tas",
    meaning:
      "Ablative suffix forming adverbs. @deva[तत्र] → @deva[ततः] 'from there'.",
    category: "pratyaya",
  },
  {
    term: "तस्मात्",
    termRoman: "tasmāt",
    meaning: "From that (ablative). Therefore, consequently.",
    category: "general",
  },
  {
    term: "तादर्थ्ये",
    termRoman: "tādarthye",
    meaning: "In purpose relation (locative). 'For the sake of' meaning.",
    category: "general",
  },
  {
    term: "तिः",
    termRoman: "tiḥ",
    meaning: "Of @deva[ति] (genitive). Third person singular ending.",
    category: "pratyaya",
  },
  {
    term: "तिङि",
    termRoman: "tiṅi",
    meaning:
      "When @deva[तिङ्] ending follows (locative). Verbal ending context.",
    category: "pratyaya",
  },
  {
    term: "तिरसः",
    termRoman: "tirasaḥ",
    meaning: "Of @deva[तिरस्] 'across' (genitive). Indeclinable context.",
    category: "general",
  },
  {
    term: "तिल",
    termRoman: "tila",
    meaning: "Sesame (noun). Used in compound examples.",
    category: "general",
  },
  {
    term: "तिसृचतसृ",
    termRoman: "tisṛcatasṛ",
    meaning:
      "Three and four (feminine). Number stems @deva[तिसृ] and @deva[चतसृ].",
    category: "general",
  },
  {
    term: "तीयः",
    termRoman: "tīyaḥ",
    meaning: "Of ordinal suffix @deva[तीय] (genitive). Second, third, etc.",
    category: "pratyaya",
  },
  {
    term: "तुल्य",
    termRoman: "tulya",
    meaning: "Equal, similar. Comparison meaning.",
    category: "general",
  },
  {
    term: "तृच्",
    termRoman: "tṛc",
    meaning: "Kṛt suffix (= @deva[तृ]). Agent noun suffix.",
    category: "pratyaya",
  },
  {
    term: "तृज्वत्",
    termRoman: "tṛjvat",
    meaning: "Like @deva[तृच्] suffix. Behaving as @deva[तृ]-suffix.",
    category: "pratyaya",
  },
  {
    term: "त्रा",
    termRoman: "trā",
    meaning: "Suffix meaning 'protector'. @deva[गोत्रा] 'cow-protector'.",
    category: "pratyaya",
  },
  {
    term: "त्रिंशत्",
    termRoman: "triṃśat",
    meaning: "Thirty (numeral). Cardinal number.",
    category: "general",
  },
  {
    term: "त्र्योः",
    termRoman: "tryoḥ",
    meaning: "Of @deva[त्रि] 'three' (genitive dual). Numeral context.",
    category: "general",
  },
  {
    term: "त्वात्",
    termRoman: "tvāt",
    meaning: "After @deva[त्व] (ablative). Abstract noun suffix context.",
    category: "pratyaya",
  },
  {
    term: "थ",
    termRoman: "tha",
    meaning: "Aspirated dental @deva[थ]. Also ordinal suffix.",
    category: "samjna",
  },
  {
    term: "थः",
    termRoman: "thaḥ",
    meaning: "Of @deva[थ] (genitive). Consonant or suffix context.",
    category: "samjna",
  },
  {
    term: "थमुः",
    termRoman: "thamuḥ",
    meaning: "Of @deva[थमु] (genitive). First person plural ending.",
    category: "pratyaya",
  },
  {
    term: "थस्",
    termRoman: "thas",
    meaning: "Second person dual ending. @deva[भवथः] 'you two are'.",
    category: "pratyaya",
  },
  {
    term: "थाल्",
    termRoman: "thāl",
    meaning: "Kṛt suffix. Forms verbal derivatives.",
    category: "pratyaya",
  },
  {
    term: "थुक्",
    termRoman: "thuk",
    meaning: "Augment @deva[थ्]. Inserted consonant.",
    category: "pratyaya",
  },
  {
    term: "दघ्नच्",
    termRoman: "daghnac",
    meaning:
      "Taddhita suffix meaning 'reaching to'. @deva[जानुदघ्न] 'knee-deep'.",
    category: "pratyaya",
  },
  {
    term: "दानीम्",
    termRoman: "dānīm",
    meaning: "Now (indeclinable). Temporal adverb suffix.",
    category: "general",
  },
  {
    term: "दिवः",
    termRoman: "divaḥ",
    meaning: "Of @deva[दिव्] 'sky/day' (genitive). Noun context.",
    category: "general",
  },
  {
    term: "दूरे",
    termRoman: "dūre",
    meaning: "Far, distant (locative). Spatial distance.",
    category: "general",
  },
  {
    term: "देशीयरः",
    termRoman: "deśīyaraḥ",
    meaning: "Of regional variant @deva[देशीय] (genitive). Dialectal form.",
    category: "general",
  },
  {
    term: "देश्य",
    termRoman: "deśya",
    meaning: "Regional, local. Dialectal variant.",
    category: "general",
  },
  {
    term: "दोषः",
    termRoman: "doṣaḥ",
    meaning: "Fault, defect (nominative). Error or problem.",
    category: "general",
  },
  {
    term: "द्वन्द्वात्",
    termRoman: "dvandvāt",
    meaning: "From dvandva compound (ablative). Copulative compound.",
    category: "samasa",
  },
  {
    term: "द्वयसच्",
    termRoman: "dvayasac",
    meaning: "Taddhita suffix meaning 'pair'. @deva[शतद्वय] 'two hundreds'.",
    category: "pratyaya",
  },
  {
    term: "द्व्यच्",
    termRoman: "dvyac",
    meaning: "Disyllabic. Having two vowels.",
    category: "samjna",
  },
  {
    term: "धावति",
    termRoman: "dhāvati",
    meaning: "Runs, flows (verb). Present of @deva[धाव्].",
    category: "general",
  },
  {
    term: "धेट्",
    termRoman: "dheṭ",
    meaning: "Taddhita suffix. Forms derivatives.",
    category: "pratyaya",
  },
  {
    term: "नञ्",
    termRoman: "nañ",
    meaning: "Negative prefix @deva[न]/अ. Forms negation.",
    category: "samasa",
  },
  {
    term: "ना",
    termRoman: "nā",
    meaning: "Instrumental singular ending variant. Case ending.",
    category: "vibhakti",
  },
  {
    term: "नित्यमर्हति",
    termRoman: "nityamarhati",
    meaning: "Always deserves. Meaning 'constantly merits'.",
    category: "general",
  },
  {
    term: "निमन्त्रण",
    termRoman: "nimantraṇa",
    meaning: "Invitation. Act of inviting.",
    category: "general",
  },
  {
    term: "नियुक्तः",
    termRoman: "niyuktaḥ",
    meaning:
      "Appointed, assigned (nominative). Past participle of @deva[नि-युज्].",
    category: "general",
  },
  {
    term: "नौ",
    termRoman: "nau",
    meaning: "First person dual ending. 'We two'.",
    category: "pratyaya",
  },
  {
    term: "परे",
    termRoman: "pare",
    meaning: "When following (locative). In subsequent position.",
    category: "general",
  },
  {
    term: "पश्चात्",
    termRoman: "paścāt",
    meaning: "After, behind (indeclinable). Posterior position.",
    category: "general",
  },
  {
    term: "पुर्",
    termRoman: "pur",
    meaning: "City (noun stem). @deva[पुर्] before vowels.",
    category: "general",
  },
  {
    term: "पूष",
    termRoman: "pūṣa",
    meaning: "Name of sun deity. Vedic god name.",
    category: "general",
  },
  {
    term: "प्र",
    termRoman: "pra",
    meaning: "Prefix meaning 'forth, forward'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "प्रकृतवचने",
    termRoman: "prakṛtavacane",
    meaning: "In natural expression (locative). Unmarked usage.",
    category: "general",
  },
  {
    term: "प्रति",
    termRoman: "prati",
    meaning: "Prefix meaning 'towards, against'. Also 'each'.",
    category: "samjna",
  },
  {
    term: "प्रयच्छति",
    termRoman: "prayacchati",
    meaning: "Gives, offers (verb). Present of @deva[प्र-यम्].",
    category: "general",
  },
  {
    term: "प्रसिते",
    termRoman: "prasite",
    meaning: "In extension/spread (locative). Continuous action.",
    category: "general",
  },
  {
    term: "प्रातिपदिकान्त",
    termRoman: "prātipadikānta",
    meaning: "Stem-final. End of a nominal stem.",
    category: "samjna",
  },
  {
    term: "प्रार्थनेषु",
    termRoman: "prārthaneṣu",
    meaning: "In requests (locative plural). Entreaty contexts.",
    category: "general",
  },
  {
    term: "बहुभ्यः",
    termRoman: "bahubhyaḥ",
    meaning: "From many (ablative plural). Multiple source.",
    category: "general",
  },
  {
    term: "बहुवचनानि",
    termRoman: "bahuvacanāni",
    meaning: "Plural forms (nominative plural). Multiple number markers.",
    category: "vibhakti",
  },
  {
    term: "ब्राह्मण",
    termRoman: "brāhmaṇa",
    meaning: "Brahmin, priest. Also Vedic prose text.",
    category: "general",
  },
  {
    term: "भगो",
    termRoman: "bhago",
    meaning: "Of @deva[भग] 'fortune' (genitive). Deity name or prosperity.",
    category: "general",
  },
  {
    term: "भावे",
    termRoman: "bhāve",
    meaning: "In abstract sense (locative). Action noun meaning.",
    category: "karaka",
  },
  {
    term: "भृतः",
    termRoman: "bhṛtaḥ",
    meaning: "Borne, maintained (nominative). Past participle of @deva[भृ].",
    category: "general",
  },
  {
    term: "भो",
    termRoman: "bho",
    meaning: "Vocative particle. Term of address.",
    category: "general",
  },
  {
    term: "भ्यस्",
    termRoman: "bhyas",
    meaning: "Dative-ablative plural ending. Fourth/fifth vibhakti plural.",
    category: "vibhakti",
  },
  {
    term: "मनुष्य",
    termRoman: "manuṣya",
    meaning: "Human being. Person, man.",
    category: "general",
  },
  {
    term: "माः",
    termRoman: "māḥ",
    meaning: "Of @deva[मा] (genitive). Negative particle or root.",
    category: "general",
  },
  {
    term: "माणव",
    termRoman: "māṇava",
    meaning: "Youth, student. Young person.",
    category: "general",
  },
  {
    term: "मूल",
    termRoman: "mūla",
    meaning: "Root, origin. Base form.",
    category: "general",
  },
  {
    term: "मूले",
    termRoman: "mūle",
    meaning: "At the root (locative). In original form.",
    category: "general",
  },
  {
    term: "यक्",
    termRoman: "yak",
    meaning: "Passive suffix. Forms passive voice.",
    category: "pratyaya",
  },
  {
    term: "यथा",
    termRoman: "yathā",
    meaning: "As, like (indeclinable). Manner adverb.",
    category: "general",
  },
  {
    term: "यव",
    termRoman: "yava",
    meaning: "Barley (noun). Grain used in examples.",
    category: "general",
  },
  {
    term: "यश",
    termRoman: "yaśa",
    meaning: "Fame, glory. Abstract noun.",
    category: "general",
  },
  {
    term: "यसः",
    termRoman: "yasaḥ",
    meaning: "Of @deva[यस्] (genitive). Comparative suffix context.",
    category: "pratyaya",
  },
  {
    term: "युव",
    termRoman: "yuva",
    meaning: "You two (pronoun stem). Second person dual.",
    category: "general",
  },
  {
    term: "योगात्",
    termRoman: "yogāt",
    meaning: "From connection (ablative). By virtue of relation.",
    category: "general",
  },
  {
    term: "रथात्",
    termRoman: "rathāt",
    meaning: "From chariot (ablative). Vehicle context.",
    category: "general",
  },
  {
    term: "रागात्",
    termRoman: "rāgāt",
    meaning: "From attachment/color (ablative). Passion or dye.",
    category: "general",
  },
  {
    term: "राज",
    termRoman: "rāja",
    meaning: "King (stem). @deva[राजन्] in compounds.",
    category: "general",
  },
  {
    term: "रूपस्य",
    termRoman: "rūpasya",
    meaning: "Of form (genitive). Shape or appearance.",
    category: "general",
  },
  {
    term: "लक्षण",
    termRoman: "lakṣaṇa",
    meaning: "Characteristic, definition. Distinguishing mark.",
    category: "general",
  },
  {
    term: "लब्धा",
    termRoman: "labdhā",
    meaning: "Having obtained (nominative). Agent noun of @deva[लभ्].",
    category: "general",
  },
  {
    term: "लिटोः",
    termRoman: "liṭoḥ",
    meaning: "Of @deva[लिट्] (genitive dual). Perfect tense context.",
    category: "lakara",
  },
  {
    term: "लिपि",
    termRoman: "lipi",
    meaning: "Script, writing. Written form.",
    category: "general",
  },
  {
    term: "लुकौ",
    termRoman: "lukau",
    meaning:
      "The two @deva[लुक्] elisions (nominative dual). Two deletion types.",
    category: "samjna",
  },
  {
    term: "लृङ्क्षु",
    termRoman: "lṛṅkṣu",
    meaning: "In conditional mood (locative plural). @deva[लृङ्] contexts.",
    category: "lakara",
  },
  {
    term: "वतुँप्",
    termRoman: "vatup",
    meaning: "Taddhita suffix (= @deva[वत्]). Possessive meaning.",
    category: "pratyaya",
  },
  {
    term: "वलि",
    termRoman: "vali",
    meaning: "When @deva[वल्] follows (locative). Consonant context.",
    category: "pratyahara",
  },
  {
    term: "वस्न",
    termRoman: "vasna",
    meaning: "Price, value. Commercial meaning.",
    category: "general",
  },
  {
    term: "वापः",
    termRoman: "vāpaḥ",
    meaning: "Of sowing (genitive). Agricultural context.",
    category: "general",
  },
  {
    term: "विंशतेः",
    termRoman: "viṃśateḥ",
    meaning: "Of twenty (genitive). Numeral context.",
    category: "general",
  },
  {
    term: "विकर्ण",
    termRoman: "vikarṇa",
    meaning: "Class marker. Conjugational affix.",
    category: "pratyaya",
  },
  {
    term: "विजायते",
    termRoman: "vijāyate",
    meaning: "Is born (verb). Passive of @deva[वि-जन्].",
    category: "general",
  },
  {
    term: "विदितः",
    termRoman: "viditaḥ",
    meaning: "Known (nominative). Past participle of @deva[विद्].",
    category: "general",
  },
  {
    term: "विदिभ्यः",
    termRoman: "vidibhyaḥ",
    meaning: "From @deva[विद्]-class (ablative plural). Knowing verbs.",
    category: "gana",
  },
  {
    term: "विनि",
    termRoman: "vini",
    meaning: "Taddhita suffix (= @deva[विन्]). Possessive adjective.",
    category: "pratyaya",
  },
  {
    term: "विभक्तिषु",
    termRoman: "vibhaktiṣu",
    meaning: "In case endings (locative plural). Inflectional contexts.",
    category: "vibhakti",
  },
  {
    term: "विभ्यः",
    termRoman: "vibhyaḥ",
    meaning: "From @deva[वि]-prefixed (ablative plural). Prefix context.",
    category: "samjna",
  },
  {
    term: "वृद्धी",
    termRoman: "vṛddhī",
    meaning: "The two vṛddhi vowels (nominative dual). @deva[ऐ] and @deva[औ].",
    category: "samjna",
  },
  {
    term: "वेशो",
    termRoman: "veśo",
    meaning: "Of @deva[वेश] 'house/dress' (genitive). Noun context.",
    category: "general",
  },
  {
    term: "व्यवाये",
    termRoman: "vyavāye",
    meaning: "In intervention (locative). When something intervenes.",
    category: "general",
  },
  {
    term: "व्याहृता",
    termRoman: "vyāhṛtā",
    meaning:
      "Uttered (nominative feminine). Past participle of @deva[वि-आ-हृ].",
    category: "general",
  },
  {
    term: "शतस्य",
    termRoman: "śatasya",
    meaning: "Of hundred (genitive). Numeral context.",
    category: "general",
  },
  {
    term: "शतात्",
    termRoman: "śatāt",
    meaning: "From hundred (ablative). Numeral derivation.",
    category: "general",
  },
  {
    term: "शम्",
    termRoman: "śam",
    meaning: "Welfare, peace. Benedictory meaning.",
    category: "general",
  },
  {
    term: "शयितः",
    termRoman: "śayitaḥ",
    meaning: "Lying down (nominative). Past participle of @deva[शी].",
    category: "general",
  },
  {
    term: "शा",
    termRoman: "śā",
    meaning: "Root meaning 'to sharpen'. Also suffix element.",
    category: "gana",
  },
  {
    term: "शिल्पम्",
    termRoman: "śilpam",
    meaning: "Art, craft (accusative). Skill or handicraft.",
    category: "general",
  },
  {
    term: "शिव",
    termRoman: "śiva",
    meaning: "Auspicious, benevolent. Also deity name.",
    category: "general",
  },
  {
    term: "शीलम्",
    termRoman: "śīlam",
    meaning: "Character, habit (accusative). Nature or disposition.",
    category: "general",
  },
  {
    term: "ष",
    termRoman: "ṣa",
    meaning: "Retroflex sibilant @deva[ष]. Consonant.",
    category: "samjna",
  },
  {
    term: "षष्ठ",
    termRoman: "ṣaṣṭha",
    meaning: "Sixth. Ordinal numeral.",
    category: "general",
  },
  {
    term: "षष्ठ्या",
    termRoman: "ṣaṣṭhyā",
    meaning: "By the genitive (instrumental). With sixth case.",
    category: "vibhakti",
  },
  {
    term: "संख्यायाः",
    termRoman: "saṃkhyāyāḥ",
    meaning: "Of a number (genitive). Numeral context.",
    category: "general",
  },
  {
    term: "संवत्सरात्",
    termRoman: "saṃvatsarāt",
    meaning: "From a year (ablative). Annual context.",
    category: "general",
  },
  {
    term: "सङ्घस्य",
    termRoman: "saṅghasya",
    meaning: "Of a group (genitive). Community or assembly.",
    category: "general",
  },
  {
    term: "सम्पादिनि",
    termRoman: "sampādini",
    meaning: "In accomplishing (locative). Achievement context.",
    category: "general",
  },
  {
    term: "सम्प्रश्न",
    termRoman: "sampraśna",
    meaning: "Question, inquiry. Asking meaning.",
    category: "general",
  },
  {
    term: "सहस्रेण",
    termRoman: "sahasreṇa",
    meaning: "With thousand (instrumental). Numeral context.",
    category: "general",
  },
  {
    term: "सामर्थ्ये",
    termRoman: "sāmarthye",
    meaning: "In capability (locative). When ability is involved.",
    category: "general",
  },
  {
    term: "सिकता",
    termRoman: "sikatā",
    meaning: "Sand (noun). Grains of sand.",
    category: "general",
  },
  {
    term: "सिचि",
    termRoman: "sici",
    meaning: "When @deva[सिच्] follows (locative). Aorist marker context.",
    category: "pratyaya",
  },
  {
    term: "सिच्",
    termRoman: "sic",
    meaning: "Aorist marker @deva[स्]. Added in @deva[लुङ्] formation.",
    category: "pratyaya",
  },
  {
    term: "सेनान्त",
    termRoman: "senānta",
    meaning: "Army-final. End of compound @deva[सेना].",
    category: "general",
  },
  {
    term: "स्त्रियाः",
    termRoman: "striyāḥ",
    meaning: "Of a woman (genitive). Feminine context.",
    category: "general",
  },
  {
    term: "स्थानौ",
    termRoman: "sthānau",
    meaning: "The two places (nominative dual). Articulation points.",
    category: "sandhi",
  },
  {
    term: "स्मात्",
    termRoman: "smāt",
    meaning: "Ablative singular ending. Fifth vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "स्मिनौ",
    termRoman: "sminau",
    meaning: "Locative endings (nominative dual). Seventh vibhakti forms.",
    category: "vibhakti",
  },
  {
    term: "स्वम्",
    termRoman: "svam",
    meaning: "Own, self (accusative). Reflexive meaning.",
    category: "general",
  },
  {
    term: "हृदयस्य",
    termRoman: "hṛdayasya",
    meaning: "Of the heart (genitive). Emotional center.",
    category: "general",
  },
  {
    term: "है",
    termRoman: "hai",
    meaning: "Exclamation particle. Vocative interjection.",
    category: "general",
  },
  {
    term: "ह्रस्वात्",
    termRoman: "hrasvāt",
    meaning: "From a short vowel (ablative). Short vowel context.",
    category: "sandhi",
  },
  {
    term: "ह्वः",
    termRoman: "hvaḥ",
    meaning: "Of @deva[ह्वे] 'to call' (genitive). Root context.",
    category: "gana",
  },
  {
    term: "ॠतः",
    termRoman: "ṝtaḥ",
    meaning: "Of long @deva[ॠ] (genitive). Long vocalic r.",
    category: "samjna",
  },

  // Additional high-frequency anuvṛtti terms
  {
    term: "अस्तीति",
    termRoman: "astīti",
    meaning:
      "'There is' (quotative). Indicates existence or possession in compound meaning.",
    category: "general",
  },
  {
    term: "अर्हात्",
    termRoman: "arhāt",
    meaning: "From one who deserves (ablative). Meritorious context.",
    category: "general",
  },
  {
    term: "सा",
    termRoman: "sā",
    meaning: "She, that (feminine nominative). Demonstrative pronoun.",
    category: "general",
  },
  {
    term: "देवता",
    termRoman: "devatā",
    meaning: "Deity, divinity. God or goddess.",
    category: "general",
  },
  {
    term: "तद्",
    termRoman: "tad",
    meaning: "That (neuter nominative). Demonstrative pronoun stem.",
    category: "general",
  },
  {
    term: "पूरणे",
    termRoman: "pūraṇe",
    meaning: "In ordinal sense (locative). When forming ordinal numbers.",
    category: "general",
  },
  {
    term: "वहति",
    termRoman: "vahati",
    meaning: "Carries, bears (verb). Present of @deva[वह्].",
    category: "general",
  },
  {
    term: "तस्मै",
    termRoman: "tasmai",
    meaning: "To that (dative singular). Demonstrative pronoun.",
    category: "general",
  },
  {
    term: "किम्",
    termRoman: "kim",
    meaning: "What? (interrogative). Question pronoun.",
    category: "general",
  },
  {
    term: "तदस्य",
    termRoman: "tadasya",
    meaning: "That is his (genitive). Possessive relation.",
    category: "general",
  },
  {
    term: "दीयते",
    termRoman: "dīyate",
    meaning: "Is given (passive). Passive of @deva[दा] 'to give'.",
    category: "general",
  },
  {
    term: "साधुः",
    termRoman: "sādhuḥ",
    meaning: "Good, correct (nominative). Grammatically valid form.",
    category: "general",
  },
  {
    term: "भवे",
    termRoman: "bhave",
    meaning: "In becoming (locative). State of being.",
    category: "general",
  },
  {
    term: "प्रथमाभ्यः",
    termRoman: "prathamābhyaḥ",
    meaning: "From first cases (ablative plural). Nominative case context.",
    category: "vibhakti",
  },
  {
    term: "कालेषु",
    termRoman: "kāleṣu",
    meaning: "In times (locative plural). Temporal contexts.",
    category: "general",
  },
  {
    term: "द्वि",
    termRoman: "dvi",
    meaning: "Two (stem). Numeral base for 'two'.",
    category: "general",
  },
  {
    term: "तदस्मिन्नस्तीति",
    termRoman: "tadasminnastīti",
    meaning: "'That exists in this' (quotative). Possessive compound meaning.",
    category: "general",
  },
  {
    term: "अदूरभवश्च",
    termRoman: "adūrabhavaśca",
    meaning: "And one who is not far. Near or proximate.",
    category: "general",
  },
  {
    term: "हितम्",
    termRoman: "hitam",
    meaning: "Beneficial, good for (accusative). Welfare meaning.",
    category: "general",
  },
  {
    term: "सम्",
    termRoman: "sam",
    meaning: "Prefix meaning 'together, completely'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "तथा",
    termRoman: "tathā",
    meaning: "Thus, so (indeclinable). Manner adverb.",
    category: "general",
  },
  {
    term: "परिमाणम्",
    termRoman: "parimāṇam",
    meaning: "Measure, quantity (accusative). Size or extent.",
    category: "general",
  },
  {
    term: "अर्हति",
    termRoman: "arhati",
    meaning: "Deserves, is worthy (verb). Present of @deva[अर्ह्].",
    category: "general",
  },
  {
    term: "भूतः",
    termRoman: "bhūtaḥ",
    meaning: "Become, been (nominative). Past participle of @deva[भू].",
    category: "general",
  },
  {
    term: "भावी",
    termRoman: "bhāvī",
    meaning: "Future, about to be. Future participle of @deva[भू].",
    category: "general",
  },
  {
    term: "कृ",
    termRoman: "kṛ",
    meaning: "Root meaning 'to do, make'. One of the most common roots.",
    category: "gana",
  },
  {
    term: "दिग्",
    termRoman: "dig",
    meaning: "Direction (stem of @deva[दिश्]). Cardinal direction.",
    category: "general",
  },
  {
    term: "णल्",
    termRoman: "ṇal",
    meaning: "Perfect tense third person singular ending. @deva[लिट्] marker.",
    category: "pratyaya",
  },
  {
    term: "हरति",
    termRoman: "harati",
    meaning: "Takes, carries (verb). Present of @deva[हृ].",
    category: "general",
  },
  {
    term: "अस्ति",
    termRoman: "asti",
    meaning: "Is, exists (verb). Third person singular of @deva[अस्].",
    category: "general",
  },
  {
    term: "पथि",
    termRoman: "pathi",
    meaning: "On the path (locative). From @deva[पथिन्] 'path'.",
    category: "general",
  },
  {
    term: "भू",
    termRoman: "bhū",
    meaning: "Root meaning 'to be, become'. Class 1 paradigm root.",
    category: "gana",
  },
  {
    term: "जश्",
    termRoman: "jaś",
    meaning:
      "Pratyāhāra for voiced stops. @deva[ज्], @deva[ब्], @deva[ग्], @deva[ड्], @deva[द्].",
    category: "pratyahara",
  },
  {
    term: "वि",
    termRoman: "vi",
    meaning: "Prefix meaning 'apart, away'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "भ्याम्",
    termRoman: "bhyām",
    meaning:
      "Instrumental-dative-ablative dual ending. Third/fourth/fifth vibhakti dual.",
    category: "vibhakti",
  },
  {
    term: "त",
    termRoman: "ta",
    meaning: "Past participle suffix. Forms @deva[क्त] derivatives.",
    category: "pratyaya",
  },
  {
    term: "तम्",
    termRoman: "tam",
    meaning: "Him/that (accusative singular). Demonstrative pronoun.",
    category: "general",
  },
  {
    term: "अम्",
    termRoman: "am",
    meaning: "Accusative singular ending. Second vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "वत्स",
    termRoman: "vatsa",
    meaning: "Calf, dear one. Term of endearment.",
    category: "general",
  },
  {
    term: "ण",
    termRoman: "ṇa",
    meaning: "Retroflex nasal @deva[ण]. Also suffix marker.",
    category: "samjna",
  },
  {
    term: "चरति",
    termRoman: "carati",
    meaning: "Moves, walks (verb). Present of @deva[चर्].",
    category: "general",
  },
  {
    term: "दक्षिणात्",
    termRoman: "dakṣiṇāt",
    meaning: "From the south (ablative). Southern direction.",
    category: "general",
  },
  {
    term: "तमधीष्टो",
    termRoman: "tamadhīṣṭo",
    meaning: "Most requested (nominative). Superlative of 'requested'.",
    category: "general",
  },
  {
    term: "निपात्येते",
    termRoman: "nipātyete",
    meaning: "Are listed as irregular (passive dual). Exceptional forms.",
    category: "samjna",
  },
  {
    term: "दा",
    termRoman: "dā",
    meaning: "Root meaning 'to give'. @deva[ददाति] 'gives'.",
    category: "gana",
  },
  {
    term: "परि",
    termRoman: "pari",
    meaning: "Prefix meaning 'around, fully'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "अव",
    termRoman: "ava",
    meaning: "Prefix meaning 'down, away'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "कार्यम्",
    termRoman: "kāryam",
    meaning: "To be done, task (accusative). Gerundive of @deva[कृ].",
    category: "general",
  },
  {
    term: "उस्",
    termRoman: "us",
    meaning: "Third person plural perfect ending. @deva[लिट्] marker.",
    category: "pratyaya",
  },
  {
    term: "खञौ",
    termRoman: "khañau",
    meaning:
      "The suffixes @deva[ख] and @deva[अञ्] (nominative dual). Taddhita pair.",
    category: "pratyaya",
  },
  {
    term: "तु",
    termRoman: "tu",
    meaning: "But, however (particle). Contrastive conjunction.",
    category: "general",
  },
  {
    term: "नक्षत्रेण",
    termRoman: "nakṣatreṇa",
    meaning: "With a constellation (instrumental). Stellar context.",
    category: "general",
  },
  {
    term: "कालः",
    termRoman: "kālaḥ",
    meaning: "Time (nominative). Temporal period.",
    category: "general",
  },
  {
    term: "साम",
    termRoman: "sāma",
    meaning: "Sāmaveda chant. Vedic musical recitation.",
    category: "general",
  },
  {
    term: "संस्कृतम्",
    termRoman: "saṃskṛtam",
    meaning: "Refined, perfected (accusative). The Sanskrit language.",
    category: "general",
  },
  {
    term: "गो",
    termRoman: "go",
    meaning: "Cow (stem). @deva[गौ] in nominative.",
    category: "general",
  },
  {
    term: "प्रहरणम्",
    termRoman: "praharaṇam",
    meaning: "Weapon, striking (accusative). Instrument of attack.",
    category: "general",
  },
  {
    term: "संसृष्टे",
    termRoman: "saṃsṛṣṭe",
    meaning: "In combination (locative). Mixed or joined context.",
    category: "general",
  },
  {
    term: "पण्यम्",
    termRoman: "paṇyam",
    meaning: "Merchandise, goods (accusative). Trade item.",
    category: "general",
  },
  {
    term: "सर्व",
    termRoman: "sarva",
    meaning: "All, every (stem). Universal pronoun.",
    category: "general",
  },
  {
    term: "प्रकृतौ",
    termRoman: "prakṛtau",
    meaning: "In the original/base (locative). In primary sense.",
    category: "general",
  },
  {
    term: "ति",
    termRoman: "ti",
    meaning: "Third person singular present ending. @deva[तिङ्] marker.",
    category: "pratyaya",
  },
  {
    term: "पाद",
    termRoman: "pāda",
    meaning: "Foot, quarter. Part of a verse or measure.",
    category: "general",
  },
  {
    term: "अवहरति",
    termRoman: "avaharati",
    meaning: "Takes away (verb). Present of @deva[अव-हृ].",
    category: "general",
  },
  {
    term: "पचति",
    termRoman: "pacati",
    meaning: "Cooks (verb). Present of @deva[पच्].",
    category: "general",
  },
  {
    term: "गच्छति",
    termRoman: "gacchati",
    meaning: "Goes (verb). Present of @deva[गम्].",
    category: "general",
  },
  {
    term: "प्राप्तम्",
    termRoman: "prāptam",
    meaning:
      "Obtained, reached (accusative). Past participle of @deva[प्र-आप्].",
    category: "general",
  },
  {
    term: "प्रयोजनम्",
    termRoman: "prayojanam",
    meaning: "Purpose, cause (accusative). Reason or motive.",
    category: "general",
  },
  {
    term: "क्षेत्रे",
    termRoman: "kṣetre",
    meaning: "In a field (locative). Agricultural or spatial context.",
    category: "general",
  },
  {
    term: "लच्",
    termRoman: "lac",
    meaning: "Kṛt suffix. Forms verbal derivatives.",
    category: "pratyaya",
  },
  {
    term: "अधर",
    termRoman: "adhara",
    meaning: "Lower, inferior. Comparative meaning 'below'.",
    category: "general",
  },
  {
    term: "दिक्",
    termRoman: "dik",
    meaning: "Direction (stem). Cardinal point.",
    category: "general",
  },
  {
    term: "पूर्व",
    termRoman: "pūrva",
    meaning: "Prior, eastern. First or preceding.",
    category: "general",
  },
  {
    term: "तदोः",
    termRoman: "tadoḥ",
    meaning: "Of those two (genitive dual). Dual demonstrative.",
    category: "general",
  },
  {
    term: "सङ्ख्या",
    termRoman: "saṅkhyā",
    meaning: "Number, numeral. Counting or enumeration.",
    category: "general",
  },
  {
    term: "शसोः",
    termRoman: "śasoḥ",
    meaning: "Of @deva[शस्] (genitive dual). Accusative plural ending context.",
    category: "vibhakti",
  },
  {
    term: "ङसि",
    termRoman: "ṅasi",
    meaning: "Genitive singular ending. Sixth vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "एङ्",
    termRoman: "eṅ",
    meaning: "Pratyāhāra for @deva[ए] and @deva[ओ]. The guṇa diphthongs.",
    category: "pratyahara",
  },
  {
    term: "ईत्",
    termRoman: "īt",
    meaning: "Long @deva[ई] marker. Indicates long vowel.",
    category: "samjna",
  },
  {
    term: "मतेन",
    termRoman: "matena",
    meaning: "By opinion (instrumental). According to view.",
    category: "general",
  },
  {
    term: "आदि",
    termRoman: "ādi",
    meaning: "Beginning, et cetera. First of a series.",
    category: "general",
  },
  {
    term: "बहु",
    termRoman: "bahu",
    meaning: "Many, much (stem). Quantity word.",
    category: "general",
  },
  {
    term: "सर्वनाम",
    termRoman: "sarvanāma",
    meaning: "Pronoun. Words that substitute for nouns.",
    category: "samjna",
  },
  {
    term: "आदेः",
    termRoman: "ādeḥ",
    meaning: "Of the beginning (genitive). Initial element.",
    category: "general",
  },
  {
    term: "चर्",
    termRoman: "car",
    meaning: "Root meaning 'to move, go'. @deva[चरति] 'moves'.",
    category: "gana",
  },
  {
    term: "श",
    termRoman: "śa",
    meaning: "Palatal sibilant @deva[श]. Consonant.",
    category: "samjna",
  },
  {
    term: "कु",
    termRoman: "ku",
    meaning:
      "Pratyāhāra for guttural stops. @deva[क्], @deva[ख्], @deva[ग्], @deva[घ्], @deva[ङ्].",
    category: "pratyahara",
  },
  {
    term: "अनु",
    termRoman: "anu",
    meaning: "Prefix meaning 'after, along'. Verbal prefix.",
    category: "samjna",
  },
  {
    term: "तपः",
    termRoman: "tapaḥ",
    meaning: "Austerity, heat (nominative). Spiritual practice.",
    category: "general",
  },
  {
    term: "एव",
    termRoman: "eva",
    meaning: "Indeed, only (particle). Emphatic marker.",
    category: "general",
  },
  {
    term: "प्रत्यये",
    termRoman: "pratyaye",
    meaning: "In a suffix (locative). When affix is involved.",
    category: "pratyaya",
  },
  {
    term: "सुँ",
    termRoman: "suṁ",
    meaning:
      "Nominative singular ending with nasalization. First vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "उत्तमः",
    termRoman: "uttamaḥ",
    meaning: "Highest, best (nominative). Superlative; also first person.",
    category: "general",
  },
  {
    term: "आङ्",
    termRoman: "āṅ",
    meaning: "Prefix @deva[आ] with marker. 'Towards, up to'.",
    category: "samjna",
  },
  {
    term: "अतुस्",
    termRoman: "atus",
    meaning: "Third person dual perfect ending. @deva[लिट्] marker.",
    category: "pratyaya",
  },
  {
    term: "थल्",
    termRoman: "thal",
    meaning: "Second person singular perfect ending. @deva[लिट्] marker.",
    category: "pratyaya",
  },
  {
    term: "अथुस्",
    termRoman: "athus",
    meaning: "Second person dual perfect ending. @deva[लिट्] marker.",
    category: "pratyaya",
  },
  {
    term: "व",
    termRoman: "va",
    meaning: "The semivowel @deva[व]. Labial approximant.",
    category: "samjna",
  },
  {
    term: "ङि",
    termRoman: "ṅi",
    meaning: "Locative singular ending. Seventh vibhakti singular.",
    category: "vibhakti",
  },
  {
    term: "आगमः",
    termRoman: "āgamaḥ",
    meaning: "Augment (nominative). Inserted element in derivation.",
    category: "samjna",
  },
  {
    term: "यतौ",
    termRoman: "yatau",
    meaning: "The two @deva[य]-suffixes (nominative dual). Suffix pair.",
    category: "pratyaya",
  },
  {
    term: "रथः",
    termRoman: "rathaḥ",
    meaning: "Chariot (nominative). Vehicle example noun.",
    category: "general",
  },
  {
    term: "घ",
    termRoman: "gha",
    meaning: "Aspirated voiced guttural @deva[घ]. Also suffix marker.",
    category: "samjna",
  },
  {
    term: "जन",
    termRoman: "jana",
    meaning: "Person, people. Human being or group.",
    category: "general",
  },
  {
    term: "खल",
    termRoman: "khala",
    meaning: "Threshing floor. Agricultural term.",
    category: "general",
  },
  {
    term: "तन्नामा",
    termRoman: "tannāmā",
    meaning: "Having that name. Named thus.",
    category: "general",
  },
  {
    term: "देशः",
    termRoman: "deśaḥ",
    meaning: "Place, region (nominative). Location or country.",
    category: "general",
  },
  {
    term: "आदिभ्यः",
    termRoman: "ādibhyaḥ",
    meaning: "From those beginning with (ablative plural). Starting from.",
    category: "general",
  },
  {
    term: "तरति",
    termRoman: "tarati",
    meaning: "Crosses, overcomes (verb). Present of @deva[तॄ].",
    category: "general",
  },
  {
    term: "निर्वृत्ते",
    termRoman: "nirvṛtte",
    meaning: "When completed (locative). After accomplishment.",
    category: "general",
  },
  {
    term: "वर्तते",
    termRoman: "vartate",
    meaning: "Exists, happens (verb). Present of @deva[वृत्].",
    category: "general",
  },
  {
    term: "हन्ति",
    termRoman: "hanti",
    meaning: "Kills, strikes (verb). Present of @deva[हन्].",
    category: "general",
  },
  {
    term: "समवैति",
    termRoman: "samavaiti",
    meaning: "Comes together (verb). Present of @deva[सम्-अव-इ].",
    category: "general",
  },
  {
    term: "धर्म्यम्",
    termRoman: "dharmyam",
    meaning: "Righteous, lawful (accusative). According to dharma.",
    category: "general",
  },
  {
    term: "ठच्",
    termRoman: "ṭhac",
    meaning: "Taddhita suffix (= @deva[इक]). Forms relational adjectives.",
    category: "pratyaya",
  },
  {
    term: "वसति",
    termRoman: "vasati",
    meaning: "Dwells, lives (verb). Present of @deva[वस्].",
    category: "general",
  },
  {
    term: "धर्म",
    termRoman: "dharma",
    meaning: "Duty, law, righteousness. Moral order.",
    category: "general",
  },
  {
    term: "उरसः",
    termRoman: "urasaḥ",
    meaning: "Of the chest (genitive). Body part context.",
    category: "general",
  },
  {
    term: "उपधानः",
    termRoman: "upadhānaḥ",
    meaning: "Of placing near (genitive). Proximity context.",
    category: "general",
  },
  {
    term: "आसाम्",
    termRoman: "āsām",
    meaning: "Of these (genitive plural feminine). Demonstrative.",
    category: "general",
  },
  {
    term: "खौ",
    termRoman: "khau",
    meaning: "When @deva[ख] suffix follows (locative dual). Taddhita context.",
    category: "pratyaya",
  },
  {
    term: "क्रीतात्",
    termRoman: "krītāt",
    meaning: "From bought (ablative). Purchased item context.",
    category: "general",
  },
  {
    term: "माष",
    termRoman: "māṣa",
    meaning: "Bean, weight measure. Unit or legume.",
    category: "general",
  },
  {
    term: "तदर्थम्",
    termRoman: "tadartham",
    meaning: "For that purpose (accusative). Goal-oriented.",
    category: "general",
  },
  {
    term: "विंशति",
    termRoman: "viṃśati",
    meaning: "Twenty (numeral). Cardinal number.",
    category: "general",
  },
  {
    term: "त्रि",
    termRoman: "tri",
    meaning: "Three (stem). Numeral base.",
    category: "general",
  },
  {
    term: "संयोगोत्पातौ",
    termRoman: "saṃyogotpātau",
    meaning: "Conjunction and portent (nominative dual). Astrological context.",
    category: "general",
  },
  {
    term: "अञौ",
    termRoman: "añau",
    meaning:
      "When @deva[अञ्] suffix applies (locative dual). Taddhita context.",
    category: "pratyaya",
  },
  {
    term: "आय",
    termRoman: "āya",
    meaning: "Kṛt suffix forming action nouns. @deva[ए] → @deva[अय].",
    category: "pratyaya",
  },
  {
    term: "लाभ",
    termRoman: "lābha",
    meaning: "Gain, profit. Acquisition meaning.",
    category: "general",
  },
  {
    term: "शुल्क",
    termRoman: "śulka",
    meaning: "Tax, toll, bride-price. Payment meaning.",
    category: "general",
  },
  {
    term: "उपदाः",
    termRoman: "upadāḥ",
    meaning: "Subordinate gifts (nominative plural). Secondary offerings.",
    category: "general",
  },
  {
    term: "अर्धात्",
    termRoman: "ardhāt",
    meaning: "From half (ablative). Partial context.",
    category: "general",
  },
  {
    term: "प्रभवति",
    termRoman: "prabhavati",
    meaning: "Arises, is capable (verb). Present of @deva[प्र-भू].",
    category: "general",
  },
  {
    term: "चेत्",
    termRoman: "cet",
    meaning: "If (conditional particle). Hypothetical marker.",
    category: "general",
  },
  {
    term: "तलौ",
    termRoman: "talau",
    meaning:
      "The two @deva[तल्] suffixes (nominative dual). Abstract noun pair.",
    category: "pratyaya",
  },
  {
    term: "धान्यानाम्",
    termRoman: "dhānyānām",
    meaning: "Of grains (genitive plural). Cereals context.",
    category: "general",
  },
  {
    term: "अलङ्गामी",
    termRoman: "alaṅgāmī",
    meaning: "Not going (nominative). One who doesn't proceed.",
    category: "general",
  },
  {
    term: "अध्याय",
    termRoman: "adhyāya",
    meaning: "Chapter, lesson. Section of a text.",
    category: "general",
  },
  {
    term: "अनुवाकयोः",
    termRoman: "anuvākayoḥ",
    meaning: "Of two anuvākas (genitive dual). Vedic section context.",
    category: "general",
  },
  {
    term: "निपात्यन्ते",
    termRoman: "nipātyante",
    meaning: "Are listed as irregular (passive plural). Exceptional forms.",
    category: "samjna",
  },
  {
    term: "इनिठनौ",
    termRoman: "iniṭhanau",
    meaning:
      "The suffixes @deva[इनि] and @deva[ठन्] (nominative dual). Taddhita pair.",
    category: "pratyaya",
  },
  {
    term: "अनेन",
    termRoman: "anena",
    meaning: "By this (instrumental). Demonstrative pronoun.",
    category: "general",
  },
  {
    term: "इलच्",
    termRoman: "ilac",
    meaning: "Taddhita suffix. Forms adjectives.",
    category: "pratyaya",
  },
  {
    term: "सर्वनामबहुभ्यः",
    termRoman: "sarvanāmabahubhyaḥ",
    meaning:
      "From pronouns and @deva[बहु] (ablative plural). Pronoun class context.",
    category: "samjna",
  },
  {
    term: "उत्तर",
    termRoman: "uttara",
    meaning: "Upper, northern, subsequent. Directional or sequential.",
    category: "general",
  },
  {
    term: "अवः",
    termRoman: "avaḥ",
    meaning: "Of @deva[अव] prefix (genitive). Downward prefix context.",
    category: "samjna",
  },
  {
    term: "अजादौ",
    termRoman: "ajādau",
    meaning: "When vowel-initial (locative). Before vowel context.",
    category: "pratyahara",
  },
  {
    term: "अभ्यावृत्तिगणने",
    termRoman: "abhyāvṛttigaṇane",
    meaning: "In repeated counting (locative). Iterative enumeration.",
    category: "general",
  },
  {
    term: "अव्ययादेः",
    termRoman: "avyayādeḥ",
    meaning: "From indeclinable-initial (genitive). Starting with avyaya.",
    category: "samjna",
  },
  {
    term: "हन्",
    termRoman: "han",
    meaning: "Root meaning 'to kill, strike'. @deva[हन्ति] 'kills'.",
    category: "gana",
  },
  {
    term: "औत्",
    termRoman: "aut",
    meaning: "Augment @deva[औ]. Inserted diphthong.",
    category: "pratyaya",
  },
  {
    term: "मथि",
    termRoman: "mathi",
    meaning: "Of @deva[मथ्] 'to churn' (locative). Root context.",
    category: "gana",
  },
  {
    term: "शर्",
    termRoman: "śar",
    meaning: "Pratyāhāra for sibilants. @deva[श्], @deva[ष्], @deva[स्].",
    category: "pratyahara",
  },
  {
    term: "अपूर्वस्य",
    termRoman: "apūrvasya",
    meaning: "Of unprecedented (genitive). Without prior occurrence.",
    category: "general",
  },
  {
    term: "तृतीयायाः",
    termRoman: "tṛtīyāyāḥ",
    meaning: "Of the third case (genitive). Instrumental case context.",
    category: "vibhakti",
  },
];

// Build search index
const termIndex = new Map<string, Term>();
for (const t of terms) {
  termIndex.set(t.term, t);
  termIndex.set(t.termRoman.toLowerCase(), t);
  // Also index without diacritics for easier searching
  termIndex.set(
    t.termRoman
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""),
    t,
  );
}

/**
 * Common Sanskrit vibhakti endings to strip when looking up stems.
 * Ordered from longest to shortest to avoid partial matches.
 */
const VIBHAKTI_ENDINGS = [
  // Longer endings first (masculine/neuter a-stem, feminine ā-stem)
  // an-stem nouns (आत्मन्, ऊष्मन्, राजन्, etc.)
  "ाणः", // nominative plural an-stem with ṇatva (ऊष्माणः from ऊष्मन्)
  "ानः", // nominative plural an-stem (आत्मानः from आत्मन्)
  // Neuter plural (an-stem, i-stem, u-stem)
  "ानि", // neuter plural nominative/accusative (फलानि, वनानि)
  "ीनि", // neuter plural for ī-stems
  "ूनि", // neuter plural for ū-stems
  // Common masculine/feminine plural
  "ाः", // masculine nominative plural (देवाः, नराः) - note: includes preceding आ
  // Long compound endings
  "आभ्याम्",
  "एभ्यः",
  "आनाम्",
  "ीनाम्", // genitive plural for ī-stems (नदीनाम्)
  "आयाः",
  "आयाम्",
  "एषु",
  "ईषु", // locative plural for ī-stems
  "योः",
  "आयै",
  "आसु",
  "ईसु", // locative plural variant
  "अया",
  "ैः",
  "ीभिः", // instrumental plural for ī-stems
  "ान्",
  "ीन्", // accusative plural for ī-stems
  "ेन",
  "आत्",
  "स्य",
  "आः",
  "आय",
  "आम्",
  "ौ",
  "ः",
  "म्",
  "े",
  "ो",
  "ि",
  "ु",
  "ी",
  "ू",
  "ै",
  "ं",
];

/**
 * Try to find the stem by stripping vibhakti endings
 */
function tryStripEndings(word: string): string[] {
  const candidates: string[] = [];
  for (const ending of VIBHAKTI_ENDINGS) {
    if (word.endsWith(ending)) {
      const stem = word.slice(0, -ending.length);
      if (stem.length > 0) {
        candidates.push(stem);
        // For a-stem nouns, the stem ends in अ which may be implicit
        candidates.push(stem + "अ");
        candidates.push(stem + "आ");
        // For an-stem nouns (ऊष्मन्, आत्मन्, राजन्), try adding न्
        candidates.push(stem + "न्");
        // For consonant stems ending in retroflex ण (due to ṇatva), try न्
        if (stem.endsWith("म")) {
          candidates.push(stem + "न्"); // ऊष्म + न् = ऊष्मन्
        }
      }
    }
  }
  return candidates;
}

/**
 * Look up a term by Devanagari or Roman (with or without diacritics).
 * Also tries to find the stem by stripping common vibhakti endings.
 */
export function lookupTerm(query: string): Term | undefined {
  const normalized = query.toLowerCase().trim();
  const trimmed = query.trim();

  // Try exact match first
  let result = termIndex.get(normalized) || termIndex.get(trimmed);
  if (result) return result;

  // Try stripping vibhakti endings to find the stem
  const candidates = tryStripEndings(trimmed);
  for (const candidate of candidates) {
    result = termIndex.get(candidate);
    if (result) return result;
  }

  return undefined;
}

/**
 * Search terms by partial match
 */
export function searchTerms(query: string): Term[] {
  if (!query.trim()) return [];
  const normalized = query.toLowerCase().trim();
  const noDiacritics = normalized
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return terms.filter(
    (t) =>
      t.term.includes(query) ||
      t.termRoman.toLowerCase().includes(normalized) ||
      t.termRoman
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(noDiacritics) ||
      t.meaning.toLowerCase().includes(normalized),
  );
}

/**
 * Get terms by category
 */
export function getTermsByCategory(category: TermCategory): Term[] {
  return terms.filter((t) => t.category === category);
}

/**
 * Get all categories with counts
 */
export function getCategories(): {
  category: TermCategory;
  count: number;
  label: string;
}[] {
  const categoryLabels: Record<TermCategory, string> = {
    samjna: "Technical Terms",
    pratyahara: "Sound Groups",
    karaka: "Semantic Roles",
    vibhakti: "Case System",
    pratyaya: "Suffixes",
    sandhi: "Sound Changes",
    lakara: "Tenses & Moods",
    gana: "Verb Classes",
    samasa: "Compounds",
    general: "General",
  };

  const counts = new Map<TermCategory, number>();
  for (const t of terms) {
    counts.set(t.category, (counts.get(t.category) || 0) + 1);
  }

  return Object.entries(categoryLabels).map(([cat, label]) => ({
    category: cat as TermCategory,
    count: counts.get(cat as TermCategory) || 0,
    label,
  }));
}
