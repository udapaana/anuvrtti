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
    term: "सवर्ण",
    termRoman: "savarṇa",
    meaning: "Homogeneous sounds - same place and effort of articulation.",
    sutraRef: "1.1.9",
    category: "samjna",
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
 * Look up a term by Devanagari or Roman (with or without diacritics)
 */
export function lookupTerm(query: string): Term | undefined {
  const normalized = query.toLowerCase().trim();
  return termIndex.get(normalized) || termIndex.get(query.trim());
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
