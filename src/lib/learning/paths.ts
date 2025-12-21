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
  description: "Essential technical terms (samjna) you need before starting any prakriya.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: [],
  steps: [
    {
      sutraId: "concept",
      title: "About Anuvrtti",
      commentary: "@deva[अनुवृत्ति] means \"continuation\" or \"carrying forward.\" Panini's sutras are extremely compressed—words from earlier rules implicitly continue into later ones until explicitly cancelled. When you see a sutra like @deva[तस्य लोपः] @ref[1.3.9], the word @deva[इत्] from @ref[1.3.2] carries forward, making the full meaning \"the @deva[इत्] of that is elided.\" This app shows each sutra's full text with its anuvrtti filled in.",
      keyTerms: ["anuvrtti"],
    },
    {
      sutraId: "1.1.1",
      title: "Vrddhi defined",
      commentary: "@deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि]. These are the \"strengthened\" vowel grades. They appear in derivatives like @deva[आङ्गः] from @deva[अङ्ग], or @deva[औपगवः] from @deva[उपगु].",
      keyTerms: ["vRddi", "AT", "Ec"],
    },
    {
      sutraId: "1.1.2",
      title: "Guna defined",
      commentary: "@deva[अ], @deva[ए], and @deva[ओ] are called @deva[गुण]. These are the \"medium\" vowel grades. They appear when roots change before endings: @deva[ऋ] becomes @deva[अर्] in @deva[अर्त्ति], @deva[इ] becomes @deva[ए] in @deva[एति].",
      keyTerms: ["guRa", "at", "eN"],
    },
    {
      sutraId: "1.1.3",
      title: "Guna and Vrddhi replace iK",
      commentary: "When @deva[गुण] or @deva[वृद्धि] is prescribed without specifying where, it replaces @deva[इक्] (@deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ]). The @deva[गुण] of @deva[इ] is @deva[ए]; of @deva[उ] is @deva[ओ]; of @deva[ऋ] is @deva[अर्]. Thus @deva[नी] + @deva[अति] = @deva[नयति].",
      keyTerms: ["iK", "guRa", "vRddi"],
    },
    {
      sutraId: "1.1.68",
      title: "Svarupa: word form, not meaning",
      commentary: "In grammar, a word denotes its own form, not its meaning—except for technical terms. Rule @deva[अग्नेर्ढक्] @ref[4.2.33] applies to the word @deva[अग्नि] itself, not to synonyms like @deva[पावक].",
      keyTerms: ["svaM", "rUpam"],
    },
    {
      sutraId: "1.1.69",
      title: "Anudit includes savarnas",
      commentary: "@deva[अण्] vowels and letters marked with @deva[उ] include their @deva[सवर्ण] forms. Thus @deva[अ] includes @deva[आ]; @deva[कु] includes all five gutturals. Rule @deva[आद्गुणः] @ref[6.1.87] applies to both @deva[अ] and @deva[आ].",
      keyTerms: ["aRudit", "savarRa"],
    },
    {
      sutraId: "1.1.70",
      title: "Taparastatkaalasya",
      commentary: "A letter followed by @deva[त्] refers only to forms with the same prosodial length. @deva[अत्] means short @deva[अ] only, excluding @deva[आ]. Thus @deva[अतो भिस ऐस्] @ref[7.1.9] applies to @deva[वृक्ष] but not @deva[खट्वा].",
      keyTerms: ["taparaH", "kAla"],
    },
    {
      sutraId: "1.3.2",
      title: "Nasal vowels are it",
      commentary: "In @deva[उपदेश], a nasal vowel is @deva[इत्]. In @deva[क्विन्] or @deva[विद्], the nasal @deva[इ] is a marker, not part of the actual affix.",
      keyTerms: ["upadeSe", "anunAsika", "ac", "it"],
    },
    {
      sutraId: "1.3.3",
      title: "Final consonants are it",
      commentary: "The final consonant of an @deva[उपदेश] is @deva[इत्]. In the @deva[प्रत्याहार] @deva[अइउण्], the @deva[ण्] is indicatory. In @deva[ऋऌक्], the @deva[क्] is indicatory.",
      keyTerms: ["hal", "antyam", "it"],
    },
    {
      sutraId: "1.3.9",
      title: "Tasya lopah",
      commentary: "@deva[इत्] letters are elided. They serve only as mnemonics and indicators—they are not part of the final form. The @deva[लोप] applies to the whole @deva[इत्], not just its final letter.",
      keyTerms: ["tasya", "lopaH", "it"],
    },
    {
      sutraId: "1.4.14",
      title: "Suptiṅantam padam",
      commentary: "A @deva[पद] is what ends in @deva[सुप्] or @deva[तिङ्]. @deva[ब्राह्मणाः] ends in @deva[जस्], a @deva[सुप्]; @deva[पचन्ति] ends in @deva[झि], a @deva[तिङ्].",
      keyTerms: ["sup", "tiN", "padam"],
    },
    {
      sutraId: "1.4.109",
      title: "Samhita defined",
      commentary: "@deva[संहिता] is the closest proximity of letters. When sounds are within half a @deva[मात्रा] of each other, @deva[सन्धि] rules apply. @deva[दधि] + @deva[अत्र] = @deva[दद्ध्यत्र].",
      keyTerms: ["saMhitA", "padasya"],
    },
    {
      sutraId: "3.1.1",
      title: "Pratyayah",
      commentary: "From here to the end of Book 5, what we treat is called @deva[प्रत्यय]. This excludes @deva[प्रकृति], @deva[उपपद], and @deva[उपधि].",
      keyTerms: ["pratyayaH", "paraH"],
    },
    {
      sutraId: "3.1.2",
      title: "Paraś ca",
      commentary: "@deva[प्रत्यय] comes after the @deva[धातु] or @deva[प्रातिपदिक]. The word @deva[च] indicates that while affixes normally follow, they may sometimes appear initially or medially.",
      keyTerms: ["DAtuH", "pratyaya", "paraH"],
    },
  ],
};

export const tingantaLatPath: LearningPath = {
  id: "tinganta-lat",
  title: "Present Tense",
  titleSanskrit: "लट्लकारः",
  description: "Learn to derive present tense verb forms—the most common forms you'll encounter.",
  difficulty: "beginner",
  estimatedTime: "3-4 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "3.2.123",
      title: "Vartamane lat",
      commentary: "@deva[लट्] comes after a verb denoting present action. @deva[वर्तमान] means begun but not yet ended. @deva[पचति] \"he cooks\"; @deva[तिष्ठन्ति] @deva[पर्वताः] \"the mountains stand.\"",
      keyTerms: ["vartamAne", "laT"],
    },
    {
      sutraId: "3.4.77",
      title: "Lasya",
      commentary: "The @deva[ल] of the ten @deva[लकार] (@deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्], @deva[लङ्], @deva[लिङ्], @deva[लुङ्], @deva[लृङ्]) is replaced by personal endings. This @deva[अधिकार] governs all that follows.",
      keyTerms: ["lasya", "Adesha"],
    },
    {
      sutraId: "3.4.78",
      title: "Tiptasjhi...",
      commentary: "The 18 @deva[तिङ्] endings replace @deva[ल]: @deva[तिप्], @deva[तस्], @deva[झि] (3rd P); @deva[सिप्], @deva[थस्], @deva[थ] (2nd P); @deva[मिप्], @deva[वस्], @deva[मस्] (1st P); @deva[त], @deva[आताम्], @deva[झ] (3rd Ā); @deva[थास्], @deva[आथाम्], @deva[ध्वम्] (2nd Ā); @deva[इट्], @deva[वहि], @deva[महिङ्] (1st Ā).",
      keyTerms: ["tiN", "tip", "tas", "Ji"],
    },
    {
      sutraId: "1.4.99",
      title: "Lah parasmaipadam",
      commentary: "The first nine endings (@deva[तिप्] to @deva[मस्]) are called @deva[परस्मैपद]. Also @deva[शतृ] and @deva[क्वसु] @ref[3.2.107].",
      keyTerms: ["laH", "parasmEpadam"],
    },
    {
      sutraId: "1.4.100",
      title: "Taṅānāvātmanepadam",
      commentary: "The nine endings under @deva[तङ्] (@deva[त] to @deva[महिङ्]) plus @deva[शानच्] and @deva[कानच्] are called @deva[आत्मनेपद].",
      keyTerms: ["taN", "Atmanepadam"],
    },
    {
      sutraId: "1.4.101",
      title: "Tiṅas trīṇi trīṇi",
      commentary: "The @deva[तिङ्] endings group in threes: @deva[प्रथम] (3rd person), @deva[मध्यम] (2nd), @deva[उत्तम] (1st).",
      keyTerms: ["tiNaH", "trIRi", "praTama"],
    },
    {
      sutraId: "1.4.102",
      title: "Ekavacanadvivacanabahuvacanāni",
      commentary: "Within each triad: @deva[एकवचन], @deva[द्विवचन], @deva[बहुवचन].",
      keyTerms: ["ekavacanam", "dvivacanam", "bahuvacanam"],
    },
    {
      sutraId: "3.1.68",
      title: "Kartari śap",
      commentary: "@deva[शप्] comes after a root when a @deva[सार्वधातुक] follows and the agent is expressed. @deva[भू] + @deva[शप्] + @deva[तिप्] = @deva[भू] + @deva[अ] + @deva[ति] = @deva[भवति] @ref[7.3.84].",
      keyTerms: ["kartari", "Sap", "vikaraNa"],
    },
    {
      sutraId: "1.3.78",
      title: "Śeṣāt kartari parasmaipadam",
      commentary: "After the rest—verbs not covered by @deva[आत्मनेपद] rules (@ref[1.3.12]-@ref[1.3.77])—use @deva[परस्मैपद] when marking the agent. @deva[याति] \"he goes\"; @deva[वाति] \"it blows.\" In passive, use @deva[आत्मनेपद]: @deva[पच्यते] \"it is cooked.\"",
      keyTerms: ["SezAt", "kartari", "parasmEpadam"],
    },
    {
      sutraId: "6.1.77",
      title: "Iko yaṇ aci",
      commentary: "@deva[इक्] (@deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ]) becomes @deva[यण्] (@deva[य्], @deva[व्], @deva[र्], @deva[ल्]) before a vowel. @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र]; @deva[मधु] + @deva[अत्र] = @deva[मध्वत्र].",
      keyTerms: ["ikaH", "yaR", "aci"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlṛṅṣv aḍ udāttaḥ",
      commentary: "@deva[अट्] augments the verbal stem in @deva[लुङ्], @deva[लङ्], and @deva[लृङ्]. @deva[अकरोत्], @deva[अहरत्].",
      keyTerms: ["luN", "laN", "lFN", "aT"],
    },
    {
      sutraId: "7.3.84",
      title: "Sārvadhātukārdhadhātukayoḥ",
      commentary: "@deva[गुण] replaces the final @deva[इक्] of an @deva[अङ्ग] before @deva[सार्वधातुक] or @deva[आर्धधातुक] affixes. @deva[तरति], @deva[नयति], @deva[भवति].",
      keyTerms: ["sArvaDAtukaH", "ArDaDAtukaH", "guRa"],
    },
  ],
};

export const tingantaLotPath: LearningPath = {
  id: "tinganta-lot",
  title: "Imperative",
  titleSanskrit: "लोट्लकारः",
  description: "Derive imperative forms for commands, invitations, and blessings.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.3.162",
      title: "Loṭ ca",
      commentary: "@deva[लोट्] comes after a root for commands and related senses. @deva[कटं] @deva[भवान्] @deva[करोतु] \"make the mat\"; @deva[अमुत्र] @deva[भवान्] @deva[आस्ताम्] \"you may sit there.\"",
      keyTerms: ["loT", "viDi"],
    },
    {
      sutraId: "3.4.85",
      title: "Loṭo laṅvat",
      commentary: "@deva[लोट्] endings are like @deva[लङ्] endings. Thus @deva[ताम्], @deva[तम्], @deva[त], @deva[व], @deva[म] appear: @deva[पचताम्], @deva[पचतम्], @deva[पचत]. The analogy is limited—@deva[अट्] augment and @deva[जुस्] substitution don't apply.",
      keyTerms: ["loTaH", "laNvat"],
    },
    {
      sutraId: "3.4.86",
      title: "Eruh",
      commentary: "In @deva[लोट्], @deva[उ] replaces @deva[इ]. Thus @deva[ति] becomes @deva[तु], @deva[अन्ति] becomes @deva[अन्तु]. Exception: @deva[हि] and @deva[नि] keep their @deva[इ].",
      keyTerms: ["eH", "uH"],
    },
    {
      sutraId: "3.4.87",
      title: "Ser hy apic ca",
      commentary: "In @deva[लोट्], @deva[हि] replaces @deva[सि], and this @deva[हि] is not @deva[पित्]. Being @deva[अपित्], it becomes @deva[ङित्] by @ref[1.2.4], preventing @deva[गुण]: @deva[लुनीहि], @deva[पुनीहि].",
      keyTerms: ["seH", "hi", "apit"],
    },
    {
      sutraId: "3.4.88",
      title: "Vā chandasi",
      commentary: "In @deva[छन्दस्], @deva[हि] optionally keeps @deva[पित्] behavior. Thus @deva[प्रीणाहि] or @deva[प्रीणीहि]; @deva[युयुधि] or @deva[युयोधि].",
      keyTerms: ["vA", "Candasi"],
    },
    {
      sutraId: "6.4.105",
      title: "Ato heḥ",
      commentary: "After a stem ending in short @deva[अ], @deva[हि] is elided. @deva[पच], @deva[पठ], @deva[गच्छ]. But not after @deva[उ]: @deva[युहि], @deva[रुहि]. Not after long @deva[आ]: @deva[लुनीहि].",
      keyTerms: ["ataH", "heH", "lopa"],
    },
    {
      sutraId: "3.4.89",
      title: "Mā loṭi",
      commentary: "The particle @deva[मा] with @deva[लोट्] expresses prohibition. @deva[मा] @deva[भूत्] \"don't be.\"",
      keyTerms: ["mAN", "loTi"],
    },
    {
      sutraId: "7.1.35",
      title: "Tuhyos tātaṅ āśiṣi",
      commentary: "In benediction, @deva[तातङ्] optionally replaces @deva[तु] and @deva[हि]. @deva[जीवताद्] @deva[भवान्] or @deva[जीवतु] @deva[भवान्]; @deva[जीवतात्] @deva[त्वम्] or @deva[जीव] @deva[त्वम्]. The @deva[ङ्] prevents @deva[गुण] and @deva[वृद्धि].",
      keyTerms: ["tu", "hi", "tAtaN", "ASizi"],
    },
  ],
};

export const tingantaLangPath: LearningPath = {
  id: "tinganta-lang",
  title: "Imperfect",
  titleSanskrit: "लङ्लकारः",
  description: "Derive past imperfect forms with the augment अ.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.2.111",
      title: "Anadyatane laṅ",
      commentary: "@deva[लङ्] comes after a root for past action not of today. @deva[अनद्यतन] means \"not during the current day.\" @deva[अकरोत्] \"he did\"; @deva[अहरत्] \"he took.\"",
      keyTerms: ["anadyatane", "laN"],
    },
    {
      sutraId: "6.4.71",
      title: "Luṅlaṅlṛṅṣv aḍ udāttaḥ",
      commentary: "@deva[अट्] augments the verbal stem in @deva[लुङ्], @deva[लङ्], and @deva[लृङ्]. @deva[अकार्षीत्], @deva[अकरोत्], @deva[अहरत्].",
      keyTerms: ["aT", "udAttaH", "laN"],
    },
    {
      sutraId: "3.4.100",
      title: "Itaś ca",
      commentary: "The @deva[इ] of @deva[परस्मैपद] endings is elided when they substitute for a @deva[ल] with indicatory @deva[ङ्]. Thus @deva[ति] becomes @deva[त्], @deva[सि] becomes @deva[स्]. @deva[आत्मनेपद] @deva[इ] is not elided: @deva[अपचावहि], @deva[अपचामहि].",
      keyTerms: ["itaH", "ca", "lopa"],
    },
    {
      sutraId: "3.4.101",
      title: "Tasthasthāmipāṁ tāṁtaṁtāmāḥ",
      commentary: "@deva[ताम्], @deva[तम्], @deva[त], @deva[आम्] replace @deva[तस्], @deva[थस्], @deva[थ], @deva[मिप्] for @deva[ल] with indicatory @deva[ङ्]. @deva[अपचताम्], @deva[अपचतम्], @deva[अपचत], @deva[अपचम्].",
      keyTerms: ["tas", "Tas", "TAm", "mip"],
    },
    {
      sutraId: "3.4.108",
      title: "Jherjus",
      commentary: "@deva[जुस्] replaces @deva[झि] (3rd plural P) in @deva[लिङ्] and @deva[लङ्]. This blocks @deva[अन्त] @ref[7.1.3]. @deva[पचेयुः], @deva[अपचन्].",
      keyTerms: ["JeH", "jus"],
    },
    {
      sutraId: "6.4.72",
      title: "Āḍ ajādīnām",
      commentary: "@deva[आट्] augments stems beginning with a vowel in @deva[लुङ्], @deva[लङ्], @deva[लृङ्]. @deva[ऐक्षत], @deva[ऐज्यत]. @deva[वृद्धि] occurs by @ref[6.1.90].",
      keyTerms: ["AT", "ajAdi"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅaḥ salopah",
      commentary: "The @deva[स्] of non-final positions is elided in @deva[लिङ्]. This converts @deva[यास्] to @deva[या] in the optative.",
      keyTerms: ["liNaH", "salopaH"],
    },
    {
      sutraId: "8.4.68",
      title: "A a",
      commentary: "Two short @deva[अ] in proximity interact. Basic @deva[सन्धि] rule for augmented forms.",
      keyTerms: ["aH", "aH"],
    },
  ],
};

export const tingantaVidhilingPath: LearningPath = {
  id: "tinganta-vidhiling",
  title: "Optative",
  titleSanskrit: "विधिलिङ्",
  description: "Derive optative/potential forms expressing commands, wishes, and possibilities.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "3.3.161",
      title: "Vidhinimantraṇāmantraṇādhīṣṭasampraśnaprārthanēṣu liṅ",
      commentary: "@deva[लिङ्] comes after a verb for: command (@deva[विधि]), invitation (@deva[निमन्त्रण]), permission (@deva[आमन्त्रण]), polite wish (@deva[अधीष्ट]), question (@deva[सम्प्रश्न]), prayer (@deva[प्रार्थना]). @deva[कटं] @deva[कुर्यात्] \"let him make the mat\"; @deva[इह] @deva[भवान्] @deva[भुञ्जीत] \"you may dine here.\"",
      keyTerms: ["viDi", "liN", "nimantraRa"],
    },
    {
      sutraId: "3.4.103",
      title: "Yāsuṭ parasmaipadēṣūdāttō ṅicca",
      commentary: "@deva[यासुट्] augments @deva[परस्मैपद] affixes in the Potential. The endings are treated as @deva[ङित्]. The @deva[स्] is elided by @ref[7.2.79]: @deva[कुर्यात्], @deva[कुर्याताम्], @deva[कुर्युस्].",
      keyTerms: ["yAsut", "parasmEpade", "Nit"],
    },
    {
      sutraId: "3.4.116",
      title: "Liṅāśiṣi",
      commentary: "In benediction (@deva[आशीः]), @deva[लिङ्] substitutes are @deva[आर्धधातुक]. They take @deva[इट्] and don't require @deva[शप्]. From @deva[लू]: @deva[लविसीष्ट]; from @deva[पू]: @deva[पविषीष्ट]. But in @deva[विधिलिङ्]: @deva[लुनीयात्], @deva[पुनीयात्].",
      keyTerms: ["liN", "ASizi", "ArDaDAtukaH"],
    },
    {
      sutraId: "3.4.104",
      title: "Kidāśiṣi",
      commentary: "In benediction, @deva[यासुट्] also applies, and substitutes are treated as @deva[कित्]. Both @deva[ङित्] and @deva[कित्] block @deva[गुण] and @deva[वृद्धि], but differ in other effects. @deva[इष्यात्], @deva[जागर्यात्]. In Potential: @deva[वच्यात्]; in Benedictive: @deva[उच्यात्].",
      keyTerms: ["kit", "ASizi", "yAsut"],
    },
    {
      sutraId: "3.4.105",
      title: "Jhasya ran",
      commentary: "@deva[रन्] replaces @deva[झ] (3rd plural Ā) in @deva[लिङ्]. Elsewhere @deva[झ] becomes @deva[अन्त] @ref[7.1.3], but in @deva[लिङ्]: @deva[पचेरन्], @deva[यजेरन्], @deva[कृषीरन्].",
      keyTerms: ["Ja", "ran", "liN"],
    },
    {
      sutraId: "3.4.106",
      title: "Iṭōt",
      commentary: "Short @deva[अ] replaces @deva[इ] of @deva[आत्मनेपद] 1st singular in Potential and Benedictive. @deva[पचेय], @deva[यजेय], @deva[कृषीय].",
      keyTerms: ["iT", "at", "Atmanepade"],
    },
    {
      sutraId: "7.2.79",
      title: "Liṅaḥ salōpōnantyasya",
      commentary: "In @deva[सार्वधातुक] @deva[लिङ्], non-final @deva[स्] (from @deva[यासुट्], @deva[सीयुट्]) is elided. @deva[कुर्यात्], @deva[कुर्वीत]. But final @deva[स्] remains: @deva[कुर्युः], @deva[कुर्याः]. In Benedictive, @deva[स्] stays: @deva[क्रियास्ताम्].",
      keyTerms: ["liNaH", "salopaH", "anantya"],
    },
    {
      sutraId: "7.1.5",
      title: "Ātmanēpadēṣvanataḥ",
      commentary: "@deva[आत्मनेपद] endings not ending in @deva[अ] receive special treatment for the optative middle forms.",
      keyTerms: ["Atmanepada", "anataH"],
    },
  ],
};

export const dhatuGanasPath: LearningPath = {
  id: "dhatu-ganas",
  title: "The Ten Verb Classes",
  titleSanskrit: "दशगणाः",
  description: "Learn how the 10 dhatu classes (ganas) affect verb conjugation. Each gana has its own vikarana that appears between root and ending.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["tinganta-lat"],
  steps: [
    {
      sutraId: "1.3.1",
      title: "भूवादयो धातवः",
      commentary: "The words beginning with @deva[भू] \"to become\" and denoting action are called @deva[धातु]. The @deva[धातुपाठ] lists approximately 2000 roots organized into ten classes (@deva[गण]) according to the @deva[विकरण] they take before conjugational endings.",
      keyTerms: ["@deva[भू]", "@deva[धातु]", "@deva[गण]"],
    },
    {
      sutraId: "3.1.68",
      title: "कर्तरि शप्",
      commentary: "The affix @deva[शप्] comes after a root when a @deva[सार्वधातुक] affix follows, signifying the agent. This @deva[विकरण] (realized as @deva[अ]) is the default class marker. @deva[भू] + @deva[शप्] + @deva[ति] → @deva[भवति] \"he becomes.\"",
      keyTerms: ["@deva[शप्]", "@deva[विकरण]", "@deva[भ्वादि]"],
    },
    {
      sutraId: "3.1.69",
      title: "दिवादिभ्यः श्यन्",
      commentary: "The affix @deva[श्यन्] comes after roots of the @deva[दिवादि] class (4th conjugation) when a @deva[सार्वधातुक] affix denoting the agent follows. This debars @deva[शप्]. @deva[दिव्] + @deva[श्यन्] + @deva[ति] = @deva[दीव्यति] \"he plays.\"",
      keyTerms: ["@deva[श्यन्]", "@deva[दिवादि]"],
    },
    {
      sutraId: "3.1.73",
      title: "स्वादिभ्यः श्नुः",
      commentary: "The affix @deva[श्नु] comes after roots of the @deva[स्वादि] class (5th conjugation) when a @deva[सार्वधातुक] affix denoting an agent follows. This debars @deva[शप्]. @deva[सु] + @deva[श्नु] + @deva[ति] = @deva[सुनोति] \"he presses out.\"",
      keyTerms: ["@deva[श्नु]", "@deva[स्वादि]"],
    },
    {
      sutraId: "3.1.77",
      title: "तुदादिभ्यः शः",
      commentary: "The affix @deva[श] is used after roots of the @deva[तुदादि] class (6th conjugation) in denoting the agent when a @deva[सार्वधातुक] affix follows. This debars @deva[शप्]. @deva[तुद्] + @deva[श] + @deva[ति] = @deva[तुदति] \"he strikes.\"",
      keyTerms: ["@deva[श]", "@deva[तुदादि]"],
    },
    {
      sutraId: "3.1.78",
      title: "रुधादिभ्यः श्नम्",
      commentary: "The affix @deva[श्नम्] comes after roots of the @deva[रुधादि] class (7th conjugation) when a @deva[सार्वधातुक] affix follows. The indicatory @deva[म्] shows the affix is placed after the last vowel of the root. @deva[रुध्] + @deva[श्नम्] + @deva[ति] = @deva[रुणद्धि] \"he obstructs.\"",
      keyTerms: ["@deva[श्नम्]", "@deva[रुधादि]"],
    },
    {
      sutraId: "3.1.79",
      title: "तनादिकृञ्भ्य उः",
      commentary: "The affix @deva[उ] comes after roots of the @deva[तनादि] class (8th conjugation) and after the verb @deva[कृ] \"to make\" when a @deva[सार्वधातुक] affix follows. @deva[तन्] + @deva[उ] + @deva[ति] = @deva[तनोति] \"he stretches.\" @deva[कृ] + @deva[उ] + @deva[ति] = @deva[करोति] \"he makes.\"",
      keyTerms: ["@deva[उ]", "@deva[तनादि]"],
    },
    {
      sutraId: "3.1.80",
      title: "धिन्विकृण्व्योर च",
      commentary: "The affix @deva[उ] also comes after the roots @deva[धिन्व्] \"to please\" and @deva[कृण्व्] \"to hurt.\" @deva[धिन्व्] + @deva[उ] + @deva[ति] = @deva[धिनोति] \"he pleases.\"",
      keyTerms: ["@deva[उ]", "@deva[धिन्वि]", "@deva[कृण्वि]"],
    },
    {
      sutraId: "2.4.72",
      title: "अदिप्रभृतिभ्यः शपः",
      commentary: "After @deva[अद्] \"to eat\" and the rest (2nd conjugation), there is @deva[लुक्] of the @deva[विकरण] @deva[शप्]. The root directly takes endings: @deva[अद्] + @deva[ति] = @deva[अत्ति] \"he eats.\" Also @deva[हन्ति] \"he kills,\" @deva[द्वेष्टि] \"he hates.\"",
      keyTerms: ["@deva[अदादि]", "@deva[शप्]", "@deva[लुक्]"],
    },
    {
      sutraId: "2.4.75",
      title: "जुहोत्यादिभ्यः श्लुः",
      commentary: "After @deva[हु] \"to sacrifice\" and others (3rd conjugation), there is @deva[श्लु] elision of @deva[शप्]. The @deva[श्लु] causes reduplication of the root. @deva[हु] → @deva[जुहोति] \"he sacrifices.\" Also @deva[बिभेति] \"he fears,\" @deva[निनेक्ति] \"he cleanses.\"",
      keyTerms: ["@deva[श्लु]", "@deva[जुहोत्यादि]"],
    },
    {
      sutraId: "3.1.81",
      title: "क्र्यादिभ्यः श्ना",
      commentary: "The affix @deva[श्ना] comes after roots of the @deva[क्र्यादि] class (9th conjugation) when a @deva[सार्वधातुक] affix follows. This debars @deva[शप्]. @deva[क्री] + @deva[श्ना] + @deva[ति] = @deva[क्रीणाति] \"he buys.\" Also @deva[प्रीणाति] \"he pleases.\"",
      keyTerms: ["@deva[श्ना]", "@deva[क्र्यादि]"],
    },
    {
      sutraId: "3.1.25",
      title: "चुरादिभ्यो णिच्",
      commentary: "The affix @deva[णिच्] is used after verbs of the @deva[चुरादि] class (10th conjugation). This makes them formally causative in structure. @deva[चुर्] + @deva[णिच्] + @deva[शप्] + @deva[ति] = @deva[चोरयति] \"he steals.\"",
      keyTerms: ["@deva[णिच्]", "@deva[चुरादि]"],
    },
  ],
};

export const tingantaLutPath: LearningPath = {
  id: "tinganta-lut",
  title: "Periphrastic Future",
  titleSanskrit: "लुट्लकारः",
  description: "Derive periphrastic future forms using the 'tā' suffix. This future emphasizes the agent and uses a different formation strategy.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lrt"],
  steps: [
    {
      sutraId: "3.3.15",
      title: "अनद्यतने लुट्",
      commentary: "The affix @deva[लुट्] comes after a verbal root in the sense of what will happen but not in the course of the current day. @deva[श्वः कर्ता] \"he will do tomorrow.\" @deva[श्वो भोक्ता] \"he will eat tomorrow.\" This debars @deva[लृट्].",
      keyTerms: ["@deva[अनद्यतन]", "@deva[लुट्]"],
    },
    {
      sutraId: "3.1.33",
      title: "स्यतासी लृलुटोः",
      commentary: "When @deva[लृ] or @deva[लुट्] follows, @deva[स्य] and @deva[तासि] are respectively the affixes. For @deva[लुट्], the @deva[तासि] suffix is used (realized as @deva[ता]). @deva[कृ] + @deva[तासि] → @deva[कर्ता] \"he will do.\" The @deva[इ] of @deva[तासि] is indicatory, showing the nasal of the root is not dropped: @deva[मन्ता] \"he will think.\"",
      keyTerms: ["@deva[तासि]", "@deva[लुट्]"],
    },
    {
      sutraId: "2.4.85",
      title: "लुटः प्रथमस्य डारौरसः",
      commentary: "@deva[डा], @deva[रौ], and @deva[रस्] are substituted for the three affixes of the 3rd person of @deva[लुट्], in both @deva[परस्मैपद] and @deva[आत्मनेपद]. Thus: @deva[कर्ता] \"he will do,\" @deva[कर्तारौ] \"they two will do,\" @deva[कर्तारः] \"they will do.\" Also @deva[अध्येता], @deva[अध्येतारौ], @deva[अध्येतारः].",
      keyTerms: ["@deva[लुट्]", "@deva[प्रथम]", "@deva[डा]"],
    },
    {
      sutraId: "3.4.78",
      title: "तिप्तस्झिसिप्थस्थमिब्वस्मस्तातांझथासाथांध्वमिड्वहिमहिङ्",
      commentary: "These are the conjugational affixes (@deva[तिङ्]) that substitute for @deva[ल] in all ten tenses. In @deva[लुट्], the 3rd person endings are replaced by @deva[डा], @deva[रौ], @deva[रस्] per @ref[2.4.85].",
      keyTerms: ["@deva[तिप्]", "@deva[लुट्]"],
    },
    {
      sutraId: "7.2.10",
      title: "एकाच उपदेशेऽनुदात्तात्",
      commentary: "The augment @deva[इट्] is not added before an affix joined to a root which in the @deva[धातुपाठ] is monosyllabic and @deva[अनुदात्त]. These @deva[अनिट्] roots directly take @deva[तासि]: @deva[कर्ता] not \\*@deva[करिता].",
      keyTerms: ["@deva[इट्]", "@deva[अनुदात्त]"],
    },
  ],
};

export const tingantaLitPath: LearningPath = {
  id: "tinganta-lit",
  title: "Perfect",
  titleSanskrit: "लिट्लकारः",
  description: "Derive perfect tense forms with reduplication. The liṭ is unique - it requires doubling the root and has special endings.",
  difficulty: "intermediate",
  estimatedTime: "3-4 hours",
  prerequisites: ["tinganta-lrt"],
  steps: [
    {
      sutraId: "3.2.115",
      title: "परोक्षे लिट्",
      commentary: "The affix @deva[लिट्] comes after the verb in the sense of past action before the current day and unperceived by the narrator. The word @deva[परोक्ष] \"unperceived\" qualifies @deva[भूत] \"past\" and @deva[अनद्यतन] \"non-current day.\"",
      keyTerms: ["@deva[परोक्ष]", "@deva[लिट्]"],
    },
    {
      sutraId: "6.1.8",
      title: "लिटि धातोरनभ्यासस्य",
      commentary: "When the tense-affixes of the Perfect follow, there is reduplication of the root which is not already reduplicated. @deva[पच्] + @deva[णल्] = @deva[पच् पच्] + @deva[णल्] = @deva[पपाच].",
      keyTerms: ["@deva[लिट्]", "@deva[धातु]", "@deva[अभ्यास]"],
    },
    {
      sutraId: "6.1.1",
      title: "एकाचो द्वे प्रथमस्य",
      commentary: "For the first portion containing a single vowel, there are two—the first syllable is reduplicated. This @deva[अधिकार] governs reduplication rules through @ref[6.1.12].",
      keyTerms: ["@deva[एकाच्]", "@deva[द्वे]", "@deva[प्रथम]"],
    },
    {
      sutraId: "6.1.2",
      title: "अजादेर्द्वितीयस्य",
      commentary: "For a root beginning with a vowel and having more than one syllable, the second syllable is reduplicated, not the first. The @deva[सनन्त] root @deva[अटिष] (@deva[अट्] + @deva[सन्]) reduplicates @deva[टिष्].",
      keyTerms: ["@deva[अजादि]", "@deva[द्वितीय]"],
    },
    {
      sutraId: "7.4.59",
      title: "ह्रस्वः",
      commentary: "A short vowel is substituted for the long vowel of the reduplicate. @deva[डुढौके], @deva[तुत्रौके].",
      keyTerms: ["@deva[ह्रस्व]", "@deva[अभ्यास]"],
    },
    {
      sutraId: "7.4.60",
      title: "हलादिः शेषः",
      commentary: "Of the consonants of the reduplicate, only the first is retained; the rest are elided. @deva[ग्लौ] → @deva[जग्लौ], @deva[म्लौ] → @deva[मम्लौ], @deva[पाच्] → @deva[पपाच].",
      keyTerms: ["@deva[हलादि]", "@deva[शेष]", "@deva[अभ्यास]"],
    },
    {
      sutraId: "7.4.62",
      title: "कुहोश्चुः",
      commentary: "For gutturals (@deva[क्], @deva[ख्], @deva[ग्], @deva[घ्]) and @deva[ह्] in the reduplicate, palatals are substituted. @deva[चकार], @deva[जगाम], @deva[जघान], @deva[जहार].",
      keyTerms: ["@deva[कु]", "@deva[हु]", "@deva[चु]", "@deva[अभ्यास]"],
    },
    {
      sutraId: "3.4.82",
      title: "परस्मैपदानां णलतुसुस्थलथुसणल्वमाः",
      commentary: "In @deva[लिट्], these @deva[परस्मैपद] substitutes apply:\n\n- 3rd person: @deva[णल्] (@deva[अ]), @deva[अतुस्] (@deva[अतुः]), @deva[उस्] (@deva[उः])\n- 2nd person: @deva[थल्] (@deva[थ]), @deva[अथुस्] (@deva[अथुः]), @deva[अ]\n- 1st person: @deva[णल्] (@deva[अ]), @deva[व], @deva[म]",
      keyTerms: ["@deva[णल्]", "@deva[अतुस्]", "@deva[थल्]"],
    },
    {
      sutraId: "3.4.81",
      title: "लिटस्तझयोरेशिरेच्",
      commentary: "@deva[एश्] and @deva[इरेच्] substitute for @deva[त] and @deva[झ] respectively in @deva[लिट्] @deva[आत्मनेपद]. @deva[पेचे], @deva[पेचाते], @deva[पेचिरे].",
      keyTerms: ["@deva[लिट्]", "@deva[एश्]", "@deva[इरेच्]"],
    },
    {
      sutraId: "7.1.34",
      title: "आत औ णलः",
      commentary: "@deva[औ] substitutes for @deva[णल्] (1st and 3rd person singular of @deva[लिट्]) after roots ending in long @deva[आ]. @deva[पपौ] from @deva[पा], @deva[तस्थौ] from @deva[स्था], @deva[जग्लौ] from @deva[ग्लै].",
      keyTerms: ["@deva[आत्]", "@deva[औ]", "@deva[णल्]"],
    },
    {
      sutraId: "6.4.120",
      title: "अत एकहल्मध्येऽनादेशादेर्लिटि",
      commentary: "@deva[ए] substitutes for short @deva[अ] standing between two simple consonants before @deva[कित्] endings of @deva[लिट्], provided no substitution occurred at the beginning of the root. When @deva[ए] is substituted, the reduplicate is elided. @deva[रेणतुः], @deva[रेणुः], @deva[येमतुः].",
      keyTerms: ["@deva[अत्]", "@deva[एकहल्]", "@deva[लिट्]"],
    },
    {
      sutraId: "6.4.126",
      title: "न शसददवादिगुणानाम्",
      commentary: "@deva[ए] is not substituted for @deva[अ] of @deva[शस्], @deva[दद्], or roots beginning with @deva[व्], nor is the reduplicate elided. @deva[विशशसतुः], @deva[दददे], @deva[ववमतुः].",
      keyTerms: ["@deva[न]", "@deva[शस्]", "@deva[लिट्]"],
    },
  ],
};

export const tingantaLungPath: LearningPath = {
  id: "tinganta-lung",
  title: "Aorist",
  titleSanskrit: "लुङ्लकारः",
  description: "Derive aorist (past tense) forms. The luṅ has multiple formation types - this path covers the seven aorist varieties.",
  difficulty: "advanced",
  estimatedTime: "4-5 hours",
  prerequisites: ["tinganta-lit"],
  steps: [
    {
      sutraId: "3.2.110",
      title: "लुङ्",
      commentary: "The affix @deva[लुङ्] comes after the verb in the sense of past time. The aorist refers to past action indefinitely or generally, without reference to a particular time.",
      keyTerms: ["@deva[लुङ्]", "@deva[भूत]"],
    },
    {
      sutraId: "6.4.71",
      title: "लुङ्लङ्लृङ्क्ष्वडुदात्तः",
      commentary: "@deva[अट्] (= @deva[अ]) with acute accent is the augment of the verbal stem in Aorist, Imperfect, and Conditional. @deva[अकार्षीत्] \"he did,\" @deva[अहार्षीत्] \"he took.\"",
      keyTerms: ["@deva[अट्]", "@deva[लुङ्]"],
    },
    {
      sutraId: "3.1.43",
      title: "च्लि लुङि",
      commentary: "When @deva[लुङ्] follows, the affix @deva[च्लि] is added to the verbal root. The @deva[च्लि] is the common name for all Aorist affixes and is replaced by specific forms.",
      keyTerms: ["@deva[च्लि]", "@deva[लुङ्]"],
    },
    {
      sutraId: "3.1.44",
      title: "च्लेः सिच्",
      commentary: "@deva[सिच्] (= @deva[स्]) substitutes for @deva[च्लि]. This creates the sigmatic aorist: @deva[अकार्षीत्] \"he did.\" The @deva[इ] is for pronunciation, @deva[च्] for accent.",
      keyTerms: ["@deva[च्लि]", "@deva[सिच्]"],
    },
    {
      sutraId: "7.2.1",
      title: "सिचि वृद्धिः परस्मैपदेषु",
      commentary: "Before the Aorist characteristic @deva[स्] (@deva[सिच्]), @deva[वृद्धि] substitutes for the final @deva[इक्] vowel of the stem in @deva[परस्मैपद]. @deva[अचैषीत्], @deva[अनैषीत्], @deva[अकार्षीत्].",
      keyTerms: ["@deva[सिच्]", "@deva[वृद्धि]", "@deva[परस्मैपद]"],
    },
    {
      sutraId: "2.4.77",
      title: "गातिस्थाघुपाभूभ्यः सिचः परस्मैपदेषु",
      commentary: "There is @deva[लुक्] of @deva[सिच्] in @deva[परस्मैपद] after @deva[गा] \"to go,\" @deva[स्था] \"to stand,\" @deva[घु] verbs, @deva[पा] \"to drink,\" and @deva[भू] \"to be.\" @deva[अगात्] \"he went,\" @deva[अस्थात्] \"he stood,\" @deva[अदात्] \"he gave.\"",
      keyTerms: ["@deva[सिच्]", "@deva[लुक्]", "@deva[गा]"],
    },
    {
      sutraId: "3.1.45",
      title: "शल इगुपधादनिटः क्सः",
      commentary: "After a verb ending in a @deva[शल्] consonant with @deva[इक्] penultimate that doesn't take @deva[इट्], @deva[क्स] substitutes for @deva[च्लि]. This is the @deva[क्स]-aorist.",
      keyTerms: ["@deva[क्स]", "@deva[शल्]", "@deva[इक्]"],
    },
    {
      sutraId: "3.1.48",
      title: "णिश्रिद्रुस्रुभ्यः कर्तरि चङ्",
      commentary: "After roots ending in @deva[णि] and after @deva[श्रि] \"to serve,\" @deva[द्रु] \"to run,\" and @deva[स्रु] \"to flow,\" @deva[चङ्] substitutes for @deva[च्लि] when the agent is denoted. The @deva[ङ्] prevents @deva[गुण] and @deva[वृद्धि].",
      keyTerms: ["@deva[चङ्]", "@deva[णि]", "@deva[श्रि]"],
    },
    {
      sutraId: "3.1.52",
      title: "अस्यतिवक्तिख्यातिभ्योऽङ्",
      commentary: "After @deva[अस्] \"to throw,\" @deva[वच्] \"to speak,\" and @deva[ख्या] \"to speak,\" @deva[अङ्] substitutes for @deva[च्लि] when the agent is denoted.",
      keyTerms: ["@deva[अङ्]", "@deva[अस्]", "@deva[वच्]"],
    },
    {
      sutraId: "3.1.55",
      title: "पुषादिद्युताद्यॢदितः परस्मैपदेषु",
      commentary: "@deva[अङ्] substitutes for @deva[च्लि] after @deva[पुष्] \"to nourish\" class, @deva[द्युत्] \"to shine\" class, and verbs with indicatory @deva[ऌ], in @deva[परस्मैपद]. @deva[अपुषत्] \"he nourished,\" @deva[अद्युतत्] \"he shone,\" @deva[अगमत्] \"he went.\"",
      keyTerms: ["@deva[अङ्]", "@deva[पुष्]", "@deva[द्युत्]"],
    },
    {
      sutraId: "7.3.96",
      title: "अस्तिसिचोऽपृक्ते",
      commentary: "A single-consonant @deva[सार्वधातुक] affix gets augment @deva[ईट्] after @deva[अस्] and after the Aorist character @deva[सिच्]. @deva[आसीः], @deva[अकार्षीत्].",
      keyTerms: ["@deva[अस्ति]", "@deva[सिच्]", "@deva[ईट्]"],
    },
    {
      sutraId: "6.4.104",
      title: "चिणो लुक्",
      commentary: "Personal endings are elided after @deva[चिण्], the 3rd person singular passive Aorist. @deva[अहारि] \"it was taken,\" @deva[अकारि] \"it was made,\" @deva[अपाचि] \"it was cooked.\"",
      keyTerms: ["@deva[चिण्]", "@deva[लुक्]"],
    },
  ],
};

export const tingantaAshirlingPath: LearningPath = {
  id: "tinganta-ashirling",
  title: "Benedictive",
  titleSanskrit: "आशीर्लिङ्",
  description: "Derive benedictive forms expressing blessings and wishes. This special use of liṅ has its own distinctive formation.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-vidhiling"],
  steps: [
    {
      sutraId: "3.3.173",
      title: "आशिषि लिङ्लोटौ",
      commentary: "The affixes @deva[लिङ्] and @deva[लोट्] come after a verb by which benediction is intended. @deva[आशीस्] means a blessing, an expression of good wishes. @deva[चिरं जीव्यात्] \"may he live long.\"",
      keyTerms: ["@deva[आशीस्]", "@deva[लिङ्]"],
    },
    {
      sutraId: "3.4.103",
      title: "यासुट् परस्मैपदेषूदात्तो ङिच्च",
      commentary: "When @deva[परस्मैपद] affixes of the Benedictive follow, @deva[यासुट्] (= @deva[यास्]) with acute accent is their augment, and the termination is treated as having indicatory @deva[ङ्]. This debars @deva[सीयुट्].",
      keyTerms: ["@deva[यासुट्]", "@deva[परस्मैपद]", "@deva[ङित्]"],
    },
    {
      sutraId: "3.4.102",
      title: "लिङस्सीयुट्",
      commentary: "The @deva[तिङ्] endings of @deva[लिङ्] take the augment @deva[सीयुट्]. This applies to @deva[आत्मनेपद] affixes. The @deva[ट्] indicates placement before the affixes.",
      keyTerms: ["@deva[सीयुट्]", "@deva[आत्मनेपद]"],
    },
    {
      sutraId: "3.4.104",
      title: "किदाशिषि",
      commentary: "The augment @deva[यासुट्] also comes after @deva[लिङ्] denoting benediction; it is acutely accented and the substitutes of this @deva[लिङ्] are treated as if they had indicatory @deva[क्]. Being @deva[कित्] prevents @deva[गुण] and @deva[वृद्धि].",
      keyTerms: ["@deva[कित्]", "@deva[आशीस्]"],
    },
    {
      sutraId: "3.4.116",
      title: "लिङाशिषि",
      commentary: "When the sense is benediction, the substitutes of @deva[लिङ्] are called @deva[आर्धधातुक]. Being @deva[आर्धधातुक], they take augment @deva[इट्], and the root does not take @deva[विकरण]s like @deva[शप्]. From @deva[लू] \"to cut\": @deva[लविसीष्ट].",
      keyTerms: ["@deva[लिङ्]", "@deva[आशीस्]", "@deva[आर्धधातुक]"],
    },
    {
      sutraId: "6.4.67",
      title: "एर्लिङि",
      commentary: "@deva[ए] substitutes for the @deva[आ] of roots @deva[मा], @deva[स्था], @deva[गा], @deva[पा], @deva[हा], and @deva[सा] in the Benedictive Active. @deva[देयात्], @deva[स्थेयात्], @deva[गेयात्], @deva[पेयात्].",
      keyTerms: ["@deva[ए]", "@deva[आ]", "@deva[लिङ्]"],
    },
    {
      sutraId: "7.2.79",
      title: "लिङः सलोपोऽनन्त्यस्य",
      commentary: "In the @deva[सार्वधातुक] @deva[लिङ्], the non-final @deva[स्] (of augments @deva[यास्] and @deva[सीय्]) is elided. @deva[कुर्यात्], @deva[कुर्याताम्], @deva[कुर्युः].",
      keyTerms: ["@deva[स्]", "@deva[लोप]", "@deva[लिङ्]"],
    },
    {
      sutraId: "7.2.80",
      title: "अतो येयः",
      commentary: "After a stem ending in short @deva[अ], @deva[इय्] substitutes for the @deva[सार्वधातुक] @deva[या] of the @deva[यास्] augment. @deva[पचेत्], @deva[पचेताम्], @deva[पचेयुः].",
      keyTerms: ["@deva[अत्]", "@deva[इय्]", "@deva[या]"],
    },
  ],
};

export const taddhitaMatupPath: LearningPath = {
  id: "taddhita-matup",
  title: "Possessive Suffixes",
  titleSanskrit: "मतुब्वतुबौ",
  description: "Derive possessive adjectives using matup and vatup. \"Having X\" - create words like dhīmat (wise), balavat (strong).",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "5.2.94",
      title: "तदस्यास्त्यस्मिन्निति मतुप्",
      commentary: "The affix @deva[मतुप्] comes in the sense of \"whose it is\" or \"in whom it is\" after a word in the Nominative case. @deva[गावोऽस्य सन्ति] = @deva[गोमत्], nom. @deva[गोमान्] \"having cows.\" @deva[वृक्षा अस्मिन् सन्ति] = @deva[वृक्षवत्].",
      keyTerms: ["@deva[मतुप्]", "@deva[अस्ति]", "@deva[अस्मिन्]"],
    },
    {
      sutraId: "8.2.9",
      title: "मादुपधायाश्च मतोर्वोऽयवादिभ्यः",
      commentary: "For the @deva[म्] of @deva[मत्], @deva[व] substitutes if the stem ends in @deva[म्] or @deva[अ]/आ, or has these in penultimate position. @deva[बल] + @deva[मतुप्] = @deva[बलवत्], @deva[धन] + @deva[मतुप्] = @deva[धनवत्].",
      keyTerms: ["@deva[मतुप्]", "@deva[वत्]"],
    },
    {
      sutraId: "6.4.138",
      title: "अचः",
      commentary: "Before @deva[मतुप्], stems ending in vowels follow specific sandhi rules. The feminine suffix @deva[ङीप्] applies to create @deva[बलवती], @deva[धनवती].",
      keyTerms: ["@deva[अच्]", "@deva[मतुप्]"],
    },
    {
      sutraId: "7.1.70",
      title: "उगिदचां सर्वनामस्थानेऽधातोः",
      commentary: "In @deva[सर्वनामस्थान] cases (Nominative, Vocative, Accusative singular), stems with @deva[मतुप्] take special endings. @deva[गोमान्], @deva[बलवान्].",
      keyTerms: ["@deva[मतुप्]", "@deva[सर्वनामस्थान]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for @deva[इक्] vowels before suffixes. @deva[धी] + @deva[मतुप्] = @deva[धीमत्], nom. @deva[धीमान्] \"wise.\"",
      keyTerms: ["@deva[गुण]", "@deva[मतुप्]"],
    },
    {
      sutraId: "6.1.68",
      title: "हलः",
      commentary: "After consonant-final stems, @deva[मतुप्] is added directly. @deva[विद्वत्] + @deva[मतुप्] patterns.",
      keyTerms: ["@deva[हल्]", "@deva[मतुप्]"],
    },
    {
      sutraId: "8.2.10",
      title: "वान्तो य्यि प्रत्यये",
      commentary: "At word boundaries, the @deva[व्] of @deva[वत्] forms may undergo changes before certain suffixes.",
      keyTerms: ["@deva[वत्]", "@deva[पद]"],
    },
  ],
};

export const taddhitaTvaTalPath: LearningPath = {
  id: "taddhita-tva-tal",
  title: "Abstract Noun Suffixes",
  titleSanskrit: "त्वतलौ",
  description: "Derive abstract nouns using tva and tal. Create \"-ness/-ity\" words like gurutva (heaviness), gurutā.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "5.1.119",
      title: "तस्य भावस्त्वतलौ",
      commentary: "The affixes @deva[त्व] and @deva[तल्] (= @deva[ता]) come in the sense of \"the nature thereof\" after a word in the Genitive case. @deva[अश्वस्य भावः] = @deva[अश्वत्वम्] or @deva[अश्वता], @deva[गोत्वम्] or @deva[गोता].",
      keyTerms: ["@deva[भाव]", "@deva[त्व]", "@deva[तल्]"],
    },
    {
      sutraId: "6.4.164",
      title: "इनण्यनपत्ये",
      commentary: "The final @deva[इन्] of a stem remains unaltered before non-Patronymic @deva[अण्] affix. @deva[सांकुटिनम्], @deva[स्राग्विणम्].",
      keyTerms: ["@deva[इन्]", "@deva[त्व]"],
    },
    {
      sutraId: "6.4.155",
      title: "त्वातलोः",
      commentary: "Specific stem changes occur before @deva[त्व] and @deva[ता]. These suffixes follow parallel formation patterns.",
      keyTerms: ["@deva[त्व]", "@deva[ता]"],
    },
    {
      sutraId: "7.4.32",
      title: "अस्य च्वौ",
      commentary: "The @deva[अ] of certain stems undergoes changes before @deva[त्व]. Affects a-ending stems.",
      keyTerms: ["@deva[अ]", "@deva[त्व]"],
    },
    {
      sutraId: "6.1.66",
      title: "लोपो व्योर्वलि",
      commentary: "The semi-vowels @deva[व्] and @deva[य्] are elided before @deva[वल्] consonants. Affects junction with @deva[त्व].",
      keyTerms: ["@deva[लोप]", "@deva[त्व]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for @deva[इक्] before certain affixes. @deva[गुरु] + @deva[त्व] = @deva[गुरुत्वम्] \"heaviness.\"",
      keyTerms: ["@deva[गुण]", "@deva[त्व]"],
    },
    {
      sutraId: "5.1.121",
      title: "तेः समुदाये",
      commentary: "The suffix may express collective sense. @deva[बहुत्वम्] = \"plurality, manyness.\"",
      keyTerms: ["@deva[समुदाय]", "@deva[त्व]"],
    },
  ],
};

export const taddhitaAnIkaPath: LearningPath = {
  id: "taddhita-an-ika",
  title: "Relational Suffixes",
  titleSanskrit: "अण्ठक्",
  description: "Derive words expressing relation, origin, or connection. Create patronymics, place-derivatives, and professional terms.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "4.1.83",
      title: "प्राग्दीव्यतोऽण्",
      commentary: "The affix @deva[अण्] governs the rules up to @ref[4.4.2]. This is the primary relational suffix creating derivatives with @deva[वृद्धि] of the first vowel.",
      keyTerms: ["@deva[अण्]", "@deva[तद्धित]"],
    },
    {
      sutraId: "4.1.92",
      title: "तस्यापत्यम्",
      commentary: "The affix @deva[अण्] and those following denote \"the descendant of someone.\" @deva[उपगु] + @deva[अण्] = @deva[औपगवः] \"descendant of Upagu.\"",
      keyTerms: ["@deva[अपत्य]", "@deva[अण्]"],
    },
    {
      sutraId: "7.2.117",
      title: "तद्धितेष्वचामादेः",
      commentary: "@deva[वृद्धि] substitutes for the first vowel of the stem when a @deva[तद्धित] affix with indicatory @deva[ञ्] or @deva[ण्] follows. @deva[गर्ग] + @deva[यञ्] = @deva[गार्ग्यः], @deva[दक्ष] + @deva[इञ्] = @deva[दाक्षिः].",
      keyTerms: ["@deva[तद्धित]", "@deva[वृद्धि]"],
    },
    {
      sutraId: "4.1.95",
      title: "अत इञ्",
      commentary: "The affix @deva[इञ्] (= @deva[इ]) comes after stems ending in short @deva[अ] to denote a descendant. This debars @deva[अण्]. @deva[दक्षस्यापत्यम्] = @deva[दाक्षिः] \"descendant of Daksha.\"",
      keyTerms: ["@deva[अत्]", "@deva[इञ्]"],
    },
    {
      sutraId: "4.3.120",
      title: "तस्येदम्",
      commentary: "After a word in the Genitive case, an affix comes in the sense of \"this is his.\" @deva[उपगोरिदम्] = @deva[औपगवम्] \"of Upagu.\"",
      keyTerms: ["@deva[इदम्]", "@deva[अण्]"],
    },
    {
      sutraId: "4.3.53",
      title: "तत्र भवः",
      commentary: "An affix comes after a word in the Locative case in the sense of \"who stays there.\" @deva[स्रुघ्ने भवः] = @deva[स्रौघ्नः] \"one who stays in Srughna.\" @deva[माथुरः] \"of Mathura.\"",
      keyTerms: ["@deva[भव]", "@deva[ठक्]"],
    },
    {
      sutraId: "6.4.148",
      title: "यस्येति च",
      commentary: "Final @deva[य] of a stem is deleted before @deva[अण्]. Stem simplification before the suffix.",
      keyTerms: ["@deva[य]", "@deva[अण्]"],
    },
    {
      sutraId: "4.2.80",
      title: "वुञ्छण्कठजिलसेनिरढञ्...",
      commentary: "Various suffixes like @deva[ठक्] (= @deva[इक]) create professional and relational terms. @deva[नाविकः] \"boatman,\" @deva[वैदिकः] \"relating to the Vedas.\"",
      keyTerms: ["@deva[ठक्]", "@deva[वुञ्]"],
    },
  ],
};

export const subantaPratipadikaPath: LearningPath = {
  id: "subanta-pratipadika",
  title: "Nominal Stems",
  titleSanskrit: "प्रातिपदिकम्",
  description: "Understand nominal stems before adding case endings. What qualifies as a pratipadika and how stems are classified.",
  difficulty: "beginner",
  estimatedTime: "2 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "1.2.45",
      title: "अर्थवदधातुरप्रत्ययः प्रातिपदिकम्",
      commentary: "A significant form of a word, not being a verbal root (@deva[धातु]) or an affix (@deva[प्रत्यय]), is called @deva[प्रातिपदिक]. This is the intermediate stage capable of receiving case-affixes.",
      keyTerms: ["@deva[अर्थवत्]", "@deva[अधातु]", "@deva[प्रातिपदिक]"],
    },
    {
      sutraId: "1.2.46",
      title: "कृत्तद्धितसमासाश्च",
      commentary: "Forms ending in @deva[कृत्] affixes, @deva[तद्धित] affixes, or compounds are also called @deva[प्रातिपदिक]. Primary suffixes derive nouns from roots; secondary suffixes derive nouns from other nouns.",
      keyTerms: ["@deva[कृत्]", "@deva[तद्धित]", "@deva[समास]"],
    },
    {
      sutraId: "1.4.14",
      title: "सुप्तिङन्तं पदम्",
      commentary: "That which ends in @deva[सुप्] or @deva[तिङ्] is called @deva[पद]. @deva[ब्राह्मण] + @deva[जस्] = @deva[ब्राह्मणाः] \"the Brahmanas.\"",
      keyTerms: ["@deva[सुप्]", "@deva[तिङ्]", "@deva[पद]"],
    },
    {
      sutraId: "4.1.1",
      title: "ङ्याप्प्रातिपदिकात्",
      commentary: "From this point forward, what we teach should be understood to come after feminine affixes @deva[ङी] or @deva[आप्], or after a @deva[प्रातिपदिक]. This governs the entire noun formation section.",
      keyTerms: ["@deva[ङी]", "@deva[आप्]", "@deva[प्रातिपदिक]"],
    },
    {
      sutraId: "4.1.2",
      title: "स्वौजसमौट्छष्टाभ्याम्भिस्ङेभ्याम्भ्यस्ङसिभ्याम्भ्यस्ङसोसाङ्ङ्योस्सुप्",
      commentary: "The 21 @deva[सुप्] endings (7 cases × 3 numbers):\n\n- 1st: @deva[सु], @deva[औ], @deva[जस्]\n- 2nd: @deva[अम्], @deva[औट्], @deva[शस्]\n- 3rd: @deva[टा], @deva[भ्याम्], @deva[भिस्]\n- 4th: @deva[ङे], @deva[भ्याम्], @deva[भ्यस्]\n- 5th: @deva[ङसि], @deva[भ्याम्], @deva[भ्यस्]\n- 6th: @deva[ङस्], @deva[ओस्], @deva[आम्]\n- 7th: @deva[ङि], @deva[ओस्], @deva[सुप्]",
      keyTerms: ["@deva[सुप्]", "@deva[विभक्ति]"],
    },
    {
      sutraId: "1.4.103",
      title: "सुपः",
      commentary: "The @deva[सुप्] endings are called @deva[विभक्ति]. They express case relations between nouns and verbs in a sentence.",
      keyTerms: ["@deva[सुप्]", "@deva[विभक्ति]"],
    },
    {
      sutraId: "1.1.68",
      title: "स्वं रूपं शब्दस्याशब्दसंज्ञा",
      commentary: "A word denotes its own form unless context indicates otherwise. In grammar, technical terms refer to themselves, not their meanings.",
      keyTerms: ["@deva[स्व]", "@deva[रूप]"],
    },
  ],
};

export const subantaAStemsPath: LearningPath = {
  id: "subanta-a-stems",
  title: "A-stem Declension",
  titleSanskrit: "अकारान्तपुंनपुंसकम्",
  description: "Master the most common declension - masculine and neuter a-stems like deva, phala. The paradigm foundation.",
  difficulty: "beginner",
  estimatedTime: "3 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "7.1.9",
      title: "अतो भिस ऐस्",
      commentary: "After a nominal stem ending in @deva[अ], @deva[ऐस्] substitutes for the case-ending @deva[भिस्] (I.pl). @deva[वृक्षैः], @deva[देवैः] not \\*@deva[देवभिः].",
      keyTerms: ["@deva[अत्]", "@deva[भिस्]", "@deva[ऐस्]"],
    },
    {
      sutraId: "7.3.102",
      title: "सुपि च",
      commentary: "Before certain @deva[सुप्] endings, @deva[अ] becomes @deva[ओ]. Affects genitive/locative dual: @deva[देवयोः].",
      keyTerms: ["@deva[सुप्]", "@deva[अत्]", "@deva[ओ]"],
    },
    {
      sutraId: "7.3.103",
      title: "बहुवचने झल्येत्",
      commentary: "In plural, before @deva[झल्]-initial endings (@deva[भ्यस्], @deva[सुप्]), @deva[अ] becomes @deva[ए]. @deva[देवेभ्यः], @deva[देवेषु].",
      keyTerms: ["@deva[बहुवचन]", "@deva[झल्]", "@deva[एत्]"],
    },
    {
      sutraId: "7.3.105",
      title: "आङि चापः",
      commentary: "Before @deva[ङि] (L.sg), @deva[अ] becomes @deva[ए]. @deva[देवे] \"in the god.\"",
      keyTerms: ["@deva[आङ्]", "@deva[ए]"],
    },
    {
      sutraId: "6.1.102",
      title: "प्रथमयोः पूर्वसवर्णः",
      commentary: "For the vowel of a nominal stem and the vowel of Nominative/Accusative endings, there is substitution of a long vowel corresponding to the first. @deva[देव] + @deva[सु] = @deva[देवः].",
      keyTerms: ["@deva[प्रथमा]", "@deva[पूर्व]", "@deva[सवर्ण]"],
    },
    {
      sutraId: "7.1.24",
      title: "अतोऽम्",
      commentary: "After a neuter stem ending in @deva[अ], @deva[अम्] substitutes for @deva[सु] and @deva[अम्] (N.sg, A.sg). @deva[कुण्डम्] \"the pot,\" @deva[वनम्] \"the forest.\"",
      keyTerms: ["@deva[अत्]", "@deva[अम्]", "@deva[नपुंसक]"],
    },
    {
      sutraId: "7.1.20",
      title: "जश्शसोः शिः",
      commentary: "After a neuter stem, @deva[इ] substitutes for @deva[जस्] and @deva[शस्] (N.pl, A.pl). @deva[कुण्डानि], @deva[वनानि].",
      keyTerms: ["@deva[जस्]", "@deva[शस्]", "@deva[शि]"],
    },
    {
      sutraId: "7.1.19",
      title: "नपुंसकाच्च",
      commentary: "After a neuter stem, @deva[ई] substitutes for dual endings @deva[औ] (N.du, A.du). @deva[कुण्डे] \"the two pots.\"",
      keyTerms: ["@deva[नपुंसक]", "@deva[ई]"],
    },
    {
      sutraId: "7.1.72",
      title: "नपुंसकस्य झलचः",
      commentary: "For neuters before @deva[झल्]-initial endings, the augment @deva[नुम्] is added. Creates @deva[कुण्डानि] with the @deva[न्].",
      keyTerms: ["@deva[नपुंसक]", "@deva[झल्]"],
    },
  ],
};

export const subantaAaStemsPath: LearningPath = {
  id: "subanta-aa-stems",
  title: "Aa-stem Declension",
  titleSanskrit: "आकारान्तस्त्री",
  description: "Decline feminine ā-stems like senā, vidyā, kanyā. The primary feminine noun pattern.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: ["subanta-pratipadika"],
  steps: [
    {
      sutraId: "7.3.105",
      title: "आङि चापः",
      commentary: "Before the case-ending @deva[ओस्] and before @deva[आ] of the Instrumental (3rd case), @deva[ए] substitutes for the final @deva[आ] of the feminine affix. @deva[सेनया], @deva[सेनयोः].",
      keyTerms: ["@deva[ओस्]", "@deva[आ]", "@deva[ए]"],
    },
    {
      sutraId: "7.3.106",
      title: "सम्बुद्धौ च",
      commentary: "In Vocative singular, @deva[आ]-stems have a distinctive addressing form. @deva[हे सेने] \"O army!\"",
      keyTerms: ["@deva[सम्बुद्धि]", "@deva[आ]"],
    },
    {
      sutraId: "6.1.102",
      title: "प्रथमयोः पूर्वसवर्णः",
      commentary: "In Nominative singular, the stem-final @deva[आ] and ending merge. @deva[सेना] + @deva[सु] = @deva[सेना].",
      keyTerms: ["@deva[प्रथमा]", "@deva[आ]"],
    },
    {
      sutraId: "7.1.18",
      title: "औङ आपः",
      commentary: "Before @deva[औ] (N.du, A.du), @deva[आप्] stems show specific behavior. @deva[सेने] \"the two armies.\"",
      keyTerms: ["@deva[औ]", "@deva[आप्]"],
    },
    {
      sutraId: "7.3.104",
      title: "ओसि च",
      commentary: "Before @deva[ओस्] endings (G.du, L.du), @deva[आ]-stem sandhi applies. @deva[सेनयोः] \"of/in the two armies.\"",
      keyTerms: ["@deva[ओस्]", "@deva[आ]"],
    },
    {
      sutraId: "7.3.112",
      title: "आण्नद्याः",
      commentary: "The accusative plural @deva[शस्] and genitive plural @deva[आम्] have specific forms after @deva[आ]-stems. @deva[सेनाः] (A.pl), @deva[सेनानाम्] (G.pl).",
      keyTerms: ["@deva[आम्]", "@deva[नदी]"],
    },
    {
      sutraId: "7.1.54",
      title: "ह्रस्वनद्यापो नुट्",
      commentary: "Short feminine stems (@deva[नदी], etc.) take @deva[नुट्] augment before certain endings. Affects G.pl: @deva[नदीनाम्].",
      keyTerms: ["@deva[ह्रस्व]", "@deva[नदी]", "@deva[नुट्]"],
    },
    {
      sutraId: "7.1.50",
      title: "आज्जसेरसुक्",
      commentary: "After @deva[आ]-final stems, @deva[जस्] (N.pl) takes @deva[असुक्] augment. @deva[सेनाः] \"the armies.\"",
      keyTerms: ["@deva[आ]", "@deva[जस्]", "@deva[असुक्]"],
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
      title: "घेर्ङिति",
      commentary: "For the @deva[इ] and @deva[उ] of stems called @deva[घि], @deva[गुण] substitutes in Dative, Ablative, and Genitive singular. @deva[अग्नये], @deva[वायवे], @deva[अग्नेः], @deva[वायोः].",
      keyTerms: ["@deva[घि]", "@deva[गुण]"],
    },
    {
      sutraId: "7.3.110",
      title: "ऋतो ङिसर्वनामस्थानयोः",
      commentary: "@deva[गुण] substitutes for the final @deva[ऋ] of a stem in Locative singular and in strong cases. @deva[मातरि], @deva[पितरि]; @deva[मातरौ], @deva[पितरौ], @deva[कर्तारः].",
      keyTerms: ["@deva[ऋ]", "@deva[गुण]", "@deva[सर्वनामस्थान]"],
    },
    {
      sutraId: "7.1.73",
      title: "इकोऽचि विभक्तौ",
      commentary: "The augment @deva[नुम्] is added to a neuter stem ending in a simple vowel (except @deva[अ]) before a case-affix beginning with a vowel. @deva[वारि] + @deva[इ] = @deva[वारिणि].",
      keyTerms: ["@deva[इक्]", "@deva[अच्]", "@deva[विभक्ति]"],
    },
    {
      sutraId: "6.1.77",
      title: "इको यणचि",
      commentary: "The semi-vowels @deva[य्], @deva[व्], @deva[र्], @deva[ल्] substitute for the corresponding vowels @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] when followed by a vowel. @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र].",
      keyTerms: ["@deva[इक्]", "@deva[यण्]", "@deva[अच्]"],
    },
    {
      sutraId: "7.1.75",
      title: "अस्थिदधिसक्थ्यक्ष्णामनङुदात्तः",
      commentary: "The acutely accented @deva[अन्] (@deva[अनङ्]) substitutes for the finals of @deva[अस्थि], @deva[दधि], @deva[सक्थि], and @deva[अक्षि] before Instrumental and following cases beginning with a vowel. @deva[अस्थ्ना], @deva[दध्ना], @deva[अक्ष्णा].",
      keyTerms: ["@deva[अस्थि]", "@deva[दधि]", "@deva[अनङ्]"],
    },
    {
      sutraId: "6.4.77",
      title: "अचि श्नुधातुभ्रुवां य्वोरियङुवङौ",
      commentary: "Before vowel-initial endings, @deva[इ] becomes @deva[इय्] and @deva[उ] becomes @deva[उव्] in certain contexts. @deva[भ्रू] → @deva[भ्रुवः].",
      keyTerms: ["@deva[अच्]", "@deva[इयङ्]", "@deva[उवङ्]"],
    },
    {
      sutraId: "7.1.70",
      title: "उगिदचां सर्वनामस्थानेऽधातोः",
      commentary: "Stems with indicatory @deva[उ], @deva[ऋ], @deva[ऌ] and @deva[अञ्च्] stems get augment @deva[नुम्] in strong cases. @deva[भवान्], @deva[भवन्तौ], @deva[भवन्तः]; @deva[श्रेयान्].",
      keyTerms: ["@deva[उगित्]", "@deva[सर्वनामस्थान]", "@deva[नुम्]"],
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
      title: "संयोगान्तस्य लोपः",
      commentary: "When a word ends in a consonant cluster, the last consonant is dropped. @deva[गोमान्], @deva[यवमान्], @deva[कृतवान्], @deva[श्रेयान्].",
      keyTerms: ["@deva[संयोग]", "@deva[अन्त]", "@deva[लोप]"],
    },
    {
      sutraId: "8.2.30",
      title: "चोः कुः",
      commentary: "A guttural substitutes for a palatal before a @deva[झल्] affix or at word-end. @deva[पच्] → @deva[पक्ता], @deva[पक्तुम्], @deva[वाक्] from @deva[वच्].",
      keyTerms: ["@deva[चु]", "@deva[कु]", "@deva[पद]"],
    },
    {
      sutraId: "7.1.70",
      title: "उगिदचां सर्वनामस्थानेऽधातोः",
      commentary: "Stems with indicatory @deva[उ] and @deva[अञ्च्]-type stems get @deva[नुम्] in strong cases. @deva[भवान्], @deva[भवन्तौ], @deva[भवन्तः].",
      keyTerms: ["@deva[उगित्]", "@deva[अञ्च्]", "@deva[नुम्]"],
    },
    {
      sutraId: "6.4.8",
      title: "सर्वनामस्थाने चासम्बुद्धौ",
      commentary: "In a stem ending in @deva[न्], the preceding vowel is lengthened in strong cases except Vocative singular. @deva[राजा], @deva[राजानौ], @deva[राजानः], @deva[राजानम्].",
      keyTerms: ["@deva[सर्वनामस्थान]", "@deva[दीर्घ]"],
    },
    {
      sutraId: "8.2.7",
      title: "नलोपः प्रातिपदिकान्तस्य",
      commentary: "The @deva[न्] at the end of a nominal stem which is a @deva[पद] is elided. @deva[राजन्] → @deva[राजा], @deva[राजभ्याम्], @deva[राजभिः].",
      keyTerms: ["@deva[न]", "@deva[लोप]", "@deva[पद]"],
    },
    {
      sutraId: "8.4.55",
      title: "खरि च",
      commentary: "For @deva[झल्], there is the substitute @deva[चर्] when @deva[खर्] follows. A sonant non-aspirate mute substitutes when a surd mute or sibilant follows. @deva[भेद्] + @deva[ता] = @deva[भेत्ता].",
      keyTerms: ["@deva[झल्]", "@deva[चर्]", "@deva[खर्]"],
    },
    {
      sutraId: "8.2.62",
      title: "क्विन्प्रत्ययस्य कुः",
      commentary: "Stems formed with @deva[क्विन्] affix show guttural substitution at word-end. @deva[वाच्] → @deva[वाक्].",
      keyTerms: ["@deva[क्विन्]", "@deva[कु]"],
    },
    {
      sutraId: "6.1.68",
      title: "हलोऽनन्तरायां संयोगः",
      commentary: "Consonants combine into clusters when no vowel intervenes. Governs consonant stem behavior before endings.",
      keyTerms: ["@deva[हल्]", "@deva[संयोग]"],
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
      title: "कारके",
      commentary: "The phrase @deva[कारक] governs the following rules. Anything that helps accomplish an action is a @deva[कारक]—fire, furnace, vessel, cook all help in the act of cooking.",
      keyTerms: ["@deva[कारक]", "@deva[क्रिया]"],
    },
    {
      sutraId: "1.4.54",
      title: "स्वतन्त्रः कर्ता",
      commentary: "Whatever the speaker chooses as the independent, principal, and absolute source of action is called @deva[कर्ता]. @deva[देवदत्तः पचति] \"Devadatta cooks.\" @deva[स्थाली पचति] \"the pot cooks.\"",
      keyTerms: ["@deva[स्वतन्त्र]", "@deva[कर्तृ]"],
    },
    {
      sutraId: "1.4.49",
      title: "कर्तुरीप्सिततमं कर्म",
      commentary: "That which the agent especially desires to accomplish through the action is called @deva[कर्मन्]. @deva[कटं करोति] \"he makes the mat.\" @deva[ग्रामं गच्छति] \"he goes to the village.\"",
      keyTerms: ["@deva[कर्तृ]", "@deva[ईप्सिततम]", "@deva[कर्मन्]"],
    },
    {
      sutraId: "1.4.42",
      title: "साधकतमं करणम्",
      commentary: "That which is especially auxiliary in accomplishing the action is called @deva[करण]. @deva[दात्रेण लुनाति] \"he cuts with the sickle.\" @deva[परशुना छिनत्ति] \"he divides with the axe.\"",
      keyTerms: ["@deva[साधकतम]", "@deva[करण]"],
    },
    {
      sutraId: "1.4.32",
      title: "कर्मणा यमभिप्रैति स सम्प्रदानम्",
      commentary: "The person whom one wishes to connect with the object of giving is called @deva[सम्प्रदान]. @deva[उपाध्यायाय गां ददाति] \"he gives the cow to the teacher.\"",
      keyTerms: ["@deva[कर्मन्]", "@deva[अभिप्रैति]", "@deva[सम्प्रदान]"],
    },
    {
      sutraId: "1.4.24",
      title: "ध्रुवमपायेऽपादानम्",
      commentary: "A noun whose relation to action is that of a fixed point from which departure takes place is called @deva[अपादान]. @deva[ग्रामादागच्छति] \"he comes from the village.\" @deva[पर्वतादवरोहति] \"he descends from the mountain.\"",
      keyTerms: ["@deva[ध्रुव]", "@deva[अपाय]", "@deva[अपादान]"],
    },
    {
      sutraId: "1.4.45",
      title: "आधारोऽधिकरणम्",
      commentary: "That which is the site where the action is performed is called @deva[अधिकरण]. @deva[कटे आस्ते] \"he sits on the mat.\" @deva[स्थाल्यां पचति] \"he cooks in the pot.\"",
      keyTerms: ["@deva[आधार]", "@deva[अधिकरण]"],
    },
    {
      sutraId: "2.3.1",
      title: "अनभिहिते",
      commentary: "The word @deva[अनभिहित] \"not being specified\" governs the following rules. Case-affixes apply to nouns only when the case meaning is not otherwise denoted by the verb ending.",
      keyTerms: ["@deva[अनभिहित]", "@deva[कारक]"],
    },
    {
      sutraId: "2.3.2",
      title: "कर्मणि द्वितीया",
      commentary: "When the object is not denoted by the verb termination, the 2nd case-affix is used. @deva[कटं करोति] \"he makes the mat.\" @deva[ग्रामं गच्छति] \"he goes to the village.\"",
      keyTerms: ["@deva[कर्मन्]", "@deva[द्वितीया]"],
    },
    {
      sutraId: "2.3.18",
      title: "कर्तृकरणयोस्तृतीया",
      commentary: "In denoting agent or instrument, the 3rd case is used. @deva[देवदत्तेन कृतम्] \"done by Devadatta.\" @deva[दात्रेण लुनाति] \"he cuts with the sickle.\"",
      keyTerms: ["@deva[कर्तृ]", "@deva[करण]", "@deva[तृतीया]"],
    },
    {
      sutraId: "2.3.28",
      title: "अपादाने पञ्चमी",
      commentary: "When @deva[अपादान] @deva[कारक] is denoted, the 5th case-affix is used. @deva[ग्रामादागच्छति] \"he comes from the village.\"",
      keyTerms: ["@deva[अपादान]", "@deva[पञ्चमी]"],
    },
    {
      sutraId: "2.3.36",
      title: "सप्तम्यधिकरणे च",
      commentary: "The 7th case expresses @deva[अधिकरण] and other relations. @deva[कटे आस्ते] \"he sits on the mat.\"",
      keyTerms: ["@deva[सप्तमी]", "@deva[अधिकरण]"],
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
      title: "सह सुपा",
      commentary: "The words @deva[सह सुपा] meaning \"with a word ending in a case-affix\" govern the succeeding rules. This establishes that compounds are formed from case-inflected words.",
      keyTerms: ["@deva[सह]", "@deva[सुप्]", "@deva[समास]"],
    },
    {
      sutraId: "2.1.6",
      title: "अव्ययं विभक्तिसमीपसमृद्धि...",
      commentary: "An @deva[अव्यय] forms a compound with a case-inflected word when expressing case-relation, nearness, prosperity, diversity, absence, departure, etc. The compound is neuter singular.",
      keyTerms: ["@deva[अव्ययीभाव]"],
    },
    {
      sutraId: "2.1.22",
      title: "तत्पुरुषः",
      commentary: "From this @deva[सूत्र] through @ref[2.2.23], the word @deva[तत्पुरुष] governs. In @deva[तत्पुरुष], the second member is primary and the first qualifies it. @deva[राजपुरुषः] \"king's man.\"",
      keyTerms: ["@deva[तत्पुरुष]"],
    },
    {
      sutraId: "2.2.6",
      title: "नञ्",
      commentary: "The negative particle @deva[नञ्] is compounded with a case-inflected word, and the compound is @deva[तत्पुरुष]. @deva[न ब्राह्मणः] = @deva[अब्राह्मणः] \"non-Brahmin.\"",
      keyTerms: ["@deva[नञ्]", "@deva[तत्पुरुष]"],
    },
    {
      sutraId: "2.2.24",
      title: "अनेकमन्यपदार्थे",
      commentary: "Two or more words ending in case-affixes form a compound denoting something new not connoted individually—this is called @deva[बहुव्रीहि]. @deva[प्राप्तोदकः ग्रामः] \"a village to which water has come.\"",
      keyTerms: ["@deva[अनेक]", "@deva[अन्यपदार्थ]", "@deva[बहुव्रीहि]"],
    },
    {
      sutraId: "2.2.29",
      title: "चार्थे द्वन्द्वः",
      commentary: "When words ending in case-affixes stand in a relation expressible by \"and,\" the compound is called @deva[द्वन्द्व]. Four types: @deva[समुच्चय], @deva[अन्वाचय], @deva[इतरेतरयोग], @deva[समाहार].",
      keyTerms: ["@deva[च]", "@deva[अर्थ]", "@deva[द्वन्द्व]"],
    },
    {
      sutraId: "2.1.57",
      title: "विशेषणं विशेष्येण बहुलम्",
      commentary: "An adjective optionally compounds with its substantive—this is @deva[कर्मधारय]. Both members are in the same case. @deva[नीलोत्पलम्] \"blue lotus.\"",
      keyTerms: ["@deva[विशेषण]", "@deva[विशेष्य]", "@deva[कर्मधारय]"],
    },
    {
      sutraId: "2.1.61",
      title: "सन्महत्परमोत्तमोत्कृष्टाः पूज्यमानैः",
      commentary: "Words like @deva[सत्], @deva[महत्], @deva[परम] compound with what is being honored. @deva[दिगु]: number as first member. @deva[पञ्चगवम्] \"five cows.\"",
      keyTerms: ["@deva[सत्]", "@deva[महत्]", "@deva[दिगु]"],
    },
    {
      sutraId: "2.4.71",
      title: "सुपो धातुप्रातिपदिकयोः",
      commentary: "There is @deva[लुक्] of the case-affix when a word becomes a root (@deva[धातु]) or crude-form (@deva[प्रातिपदिक]). Case endings are deleted in compound formation: @deva[राज + पुरुष → राजपुरुषः].",
      keyTerms: ["@deva[सुप्]", "@deva[धातु]", "@deva[लुक्]"],
    },
    {
      sutraId: "6.2.1",
      title: "बहुव्रीहौ प्रकृत्या पूर्वपदम्",
      commentary: "In @deva[बहुव्रीहि], the first member retains its original form. This is a preservation rule for possessive compounds.",
      keyTerms: ["@deva[बहुव्रीहि]", "@deva[पूर्वपद]"],
    },
  ],
};

export const sandhiVowelPath: LearningPath = {
  id: "sandhi-vowel",
  title: "Vowel Sandhi",
  titleSanskrit: "अच्सन्धिः",
  description: "Master the rules of vowel combination. When vowels meet at word boundaries or within words, these rules apply.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["introduction"],
  steps: [
    {
      sutraId: "6.1.101",
      title: "अकः सवर्णे दीर्घः",
      commentary: "When a simple vowel is followed by a homogeneous vowel, the corresponding long vowel is the single substitute for both. @deva[दण्ड] + @deva[अग्रम्] = @deva[दण्डाग्रम्], @deva[दधि] + @deva[इन्द्रः] = @deva[दधीन्द्रः], @deva[मधु] + @deva[उदके] = @deva[मधूदके].",
      keyTerms: ["@deva[अक्]", "@deva[सवर्ण]", "@deva[दीर्घ]"],
    },
    {
      sutraId: "6.1.77",
      title: "इको यणचि",
      commentary: "The semi-vowels @deva[य्], @deva[व्], @deva[र्], @deva[ल्] substitute for the corresponding vowels @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] when followed by a dissimilar vowel. @deva[इति] + @deva[अपि] = @deva[इत्यपि].",
      keyTerms: ["@deva[इक्]", "@deva[यण्]", "@deva[अच्]"],
    },
    {
      sutraId: "6.1.78",
      title: "एचोऽयवायावः",
      commentary: "For the diphthongs @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ], the substitutes @deva[अय्], @deva[आय्], @deva[अव्], @deva[आव्] are used when a vowel follows. @deva[चे] + @deva[अन] = @deva[चयनम्], @deva[लो] + @deva[अन्] = @deva[लवनम्].",
      keyTerms: ["@deva[एच्]", "@deva[अयवायाव]"],
    },
    {
      sutraId: "6.1.87",
      title: "आद्गुणः",
      commentary: "@deva[गुण] is the single substitute of final @deva[अ] or @deva[आ] and the following simple vowel. @deva[अ]/आ + @deva[इ]/ई = @deva[ए], @deva[अ]/आ + @deva[उ]/ऊ = @deva[ओ], @deva[अ]/आ + @deva[ऋ]/ॠ = @deva[अर्]. @deva[न] + @deva[ईश] = @deva[नेश].",
      keyTerms: ["@deva[आत्]", "@deva[गुण]"],
    },
    {
      sutraId: "6.1.88",
      title: "वृद्धिरेचि",
      commentary: "@deva[वृद्धि] is the single substitute of @deva[अ] or @deva[आ] and the following diphthong. @deva[अ]/आ + @deva[ए]/ऐ = @deva[ऐ], @deva[अ]/आ + @deva[ओ]/औ = @deva[औ]. @deva[महा] + @deva[ऐश्वर्य] = @deva[महैश्वर्यम्].",
      keyTerms: ["@deva[वृद्धि]", "@deva[एच्]"],
    },
    {
      sutraId: "6.1.109",
      title: "एङः पदान्तादति",
      commentary: "For word-final @deva[ए] or @deva[ओ] and following short @deva[अ], the first vowel (@deva[ए] or @deva[ओ]) is substituted (and @deva[अ] elided). @deva[अग्ने] + @deva[अत्र] = @deva[अग्नेऽत्र], @deva[वायो] + @deva[अत्र] = @deva[वायोऽत्र].",
      keyTerms: ["@deva[एङ्]", "@deva[पदान्त]", "@deva[अत्]"],
    },
    {
      sutraId: "6.1.127",
      title: "इकोऽसवर्णे शाकल्यस्य हृस्वश्च",
      commentary: "Before dissimilar vowels, optional shortening may occur according to Śākalya. @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र] or @deva[दधियत्र].",
      keyTerms: ["@deva[इक्]", "@deva[असवर्ण]", "@deva[ह्रस्व]"],
    },
    {
      sutraId: "6.1.94",
      title: "अन्तादिवच्च",
      commentary: "Certain dual endings (@deva[ई], @deva[ऊ], @deva[ए]) are @deva[प्रगृह्य]—they don't undergo sandhi. @deva[हरी एतौ] (not \\*@deva[हर्येतौ]).",
      keyTerms: ["@deva[प्रगृह्य]", "@deva[द्विवचन]"],
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
      sutraId: "8.2.66",
      title: "ससजुषो रुः",
      commentary: "For final @deva[स्] (and the @deva[ष्] of @deva[ससजुष्]), @deva[रु] substitutes at word-end. @deva[अग्निस्] → @deva[अग्निरु] → @deva[अग्निरत्र], @deva[वायुरत्र]. This is an intermediate stage before visarga.",
      keyTerms: ["@deva[सस्]", "@deva[रु]"],
    },
    {
      sutraId: "8.3.15",
      title: "खरवसानयोर्विसर्जनीयः",
      commentary: "@deva[विसर्ग] substitutes for @deva[र्] (from @deva[रु]) before voiceless consonants (@deva[खर्]) or at pause. @deva[रामस्] + @deva[तिष्ठति] = @deva[रामः तिष्ठति].",
      keyTerms: ["@deva[खर्]", "@deva[अवसान]", "@deva[विसर्जनीय]"],
    },
    {
      sutraId: "8.3.17",
      title: "भोभगोअघोअपूर्वस्य योऽशि",
      commentary: "@deva[य्] substitutes for @deva[रु] when preceded by @deva[भो], @deva[भगो], @deva[अघो], @deva[अ], or @deva[आ], before voiced sounds (@deva[अश्]). @deva[भो अत्र], @deva[रामो गच्छति].",
      keyTerms: ["@deva[भो]", "@deva[य्]", "@deva[अश्]"],
    },
    {
      sutraId: "8.3.19",
      title: "लोपः शाकल्यस्य",
      commentary: "@deva[व्] and @deva[य्] preceded by @deva[अ] or @deva[आ] at word-end are optionally elided before voiced sounds according to Śākalya. @deva[क आस्ते] or @deva[कयास्ते].",
      keyTerms: ["@deva[लोप]", "@deva[अस्]", "@deva[रु]"],
    },
    {
      sutraId: "8.3.34",
      title: "विसर्जनीयस्य सः",
      commentary: "@deva[स्] substitutes for @deva[विसर्ग] before a voiceless consonant that precedes a sibilant. @deva[वृक्षः] + @deva[छादयति] = @deva[वृक्षश्छादयति].",
      keyTerms: ["@deva[विसर्जनीय]", "@deva[स]"],
    },
    {
      sutraId: "8.3.36",
      title: "वा शरि",
      commentary: "@deva[विसर्ग] optionally remains unchanged before sibilants. @deva[वृक्षः शेते] or @deva[वृक्षश्शेते], @deva[वृक्षः षण्डे] or @deva[वृक्षष्षण्डे].",
      keyTerms: ["@deva[वा]", "@deva[शर्]", "@deva[विसर्ग]"],
    },
    {
      sutraId: "8.3.23",
      title: "मोऽनुस्वारः",
      commentary: "@deva[अनुस्वार] substitutes for @deva[म्] at word-end before a consonant. @deva[कुण्डं हसति], @deva[वनं याति]. The @deva[म्] must be at word-end (@deva[पद]).",
      keyTerms: ["@deva[म]", "@deva[अनुस्वार]"],
    },
    {
      sutraId: "8.4.58",
      title: "अनुस्वारस्य ययि परसवर्णः",
      commentary: "For @deva[अनुस्वार] before stops (@deva[यय्]), a homorganic nasal substitutes. @deva[सं] + @deva[खिता] = @deva[शङ्किता], @deva[सं] + @deva[चित] = @deva[सञ्चित].",
      keyTerms: ["@deva[अनुस्वार]", "@deva[यय्]", "@deva[परसवर्ण]"],
    },
  ],
};

export const sandhiConsonantPath: LearningPath = {
  id: "sandhi-consonant",
  title: "Consonant Sandhi",
  titleSanskrit: "हल्सन्धिः",
  description: "Master consonant junction rules. How stops, nasals, and other consonants interact at boundaries.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["sandhi-vowel"],
  steps: [
    {
      sutraId: "8.4.40",
      title: "स्तोः श्चुना श्चुः",
      commentary: "@deva[स्] and dentals, when contacting @deva[श्] and palatals, become @deva[श्] and palatals respectively. @deva[सत्] + @deva[चित्] = @deva[सच्चित्], @deva[तत्] + @deva[जय] = @deva[तज्जय].",
      keyTerms: ["@deva[स्तु]", "@deva[श्चु]"],
    },
    {
      sutraId: "8.4.41",
      title: "ष्टुना ष्टुः",
      commentary: "@deva[स्] and dentals, when contacting @deva[ष्] and retroflexes, become @deva[ष्] and retroflexes respectively. @deva[तत्] + @deva[टीका] = @deva[तट्टीका].",
      keyTerms: ["@deva[ष्टु]"],
    },
    {
      sutraId: "8.4.53",
      title: "झलां जश् झशि",
      commentary: "For @deva[झल्] letters, @deva[जश्] letters substitute when @deva[झश्] letters follow. A mute becomes a voiced non-aspirate before a voiced mute. @deva[लभ्] + @deva[ता] = @deva[लब्धा].",
      keyTerms: ["@deva[झल्]", "@deva[जश्]", "@deva[झश्]"],
    },
    {
      sutraId: "8.4.55",
      title: "खरि च",
      commentary: "For @deva[झल्], @deva[चर्] substitutes when @deva[खर्] follows. A voiced mute becomes voiceless before a voiceless consonant. @deva[भेद्] + @deva[ता] = @deva[भेत्ता].",
      keyTerms: ["@deva[झल्]", "@deva[चर्]", "@deva[खर्]"],
    },
    {
      sutraId: "8.2.30",
      title: "चोः कुः",
      commentary: "A guttural substitutes for a palatal before @deva[झल्] or at word-end. @deva[पच्] → @deva[पक्ता], @deva[वच्] → @deva[वाक्].",
      keyTerms: ["@deva[चु]", "@deva[कु]", "@deva[पद]"],
    },
    {
      sutraId: "8.2.39",
      title: "झलां जशोऽन्ते",
      commentary: "A corresponding @deva[जश्] (@deva[ज], @deva[ब], @deva[ग], @deva[ड], @deva[द]) substitutes for all @deva[झल्] consonants at word-end. @deva[वाच्] → @deva[वाग्], @deva[अग्निचित्] → @deva[अग्निचिद्].",
      keyTerms: ["@deva[झल्]", "@deva[जश्]", "@deva[अन्त]"],
    },
    {
      sutraId: "8.4.45",
      title: "यरोऽनुनासिकेऽनुनासिको वा",
      commentary: "For a word-final @deva[यर्] letter before a nasal, there is optionally a nasal substitute. @deva[वाक्] + @deva[नयति] = @deva[वाग्नयति] or @deva[वाङ्नयति].",
      keyTerms: ["@deva[यर्]", "@deva[अनुनासिक]", "@deva[वा]"],
    },
    {
      sutraId: "8.4.2",
      title: "अट्कुप्वाङ्नुम्व्यवायेऽपि",
      commentary: "@deva[ण्] substitutes for @deva[न्] when @deva[र्] or @deva[ष्] precedes, even with intervening @deva[अट्] (vowels, @deva[ह्], @deva[य्], @deva[व्]), gutturals, labials, @deva[आङ्], or @deva[नुम्]. @deva[करणम्], @deva[ब्राह्मण].",
      keyTerms: ["@deva[अट्]", "@deva[ण]", "@deva[न]"],
    },
    {
      sutraId: "8.3.23",
      title: "मोऽनुस्वारः",
      commentary: "@deva[अनुस्वार] substitutes for word-final @deva[म्] before consonants. @deva[फलम्] + @deva[करोति] = @deva[फलं करोति].",
      keyTerms: ["@deva[म]", "@deva[अनुस्वार]"],
    },
  ],
};

export const tingantaLrtPath: LearningPath = {
  id: "tinganta-lrt",
  title: "Simple Future",
  titleSanskrit: "लृट्लकारः",
  description: "Derive simple future tense forms. This is the first ardhadhatuka lakara - note the different vikarana and ending patterns.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.3.13",
      title: "लृट् शेषे च",
      commentary: "The affix @deva[लृट्] is used after a verb to express futurity. @deva[करिष्यति] \"he will do,\" @deva[हरिष्यति] \"he will take.\" This is the simple future tense.",
      keyTerms: ["@deva[लृट्]", "@deva[भविष्यत्]"],
    },
    {
      sutraId: "3.1.33",
      title: "स्यतासी लृलुटोः",
      commentary: "When @deva[लृ] (@deva[लृट्] or @deva[लृङ्]) and @deva[लुट्] follow, the affixes @deva[स्य] and @deva[तासि] are respectively added after the verbal root. @deva[कृ] + @deva[स्य] + @deva[ति] → @deva[करिष्यति] \"he will do.\"",
      keyTerms: ["@deva[स्य]", "@deva[तासि]", "@deva[लृट्]"],
    },
    {
      sutraId: "7.2.35",
      title: "आर्धधातुकस्येड् वलादेः",
      commentary: "An @deva[आर्धधातुक] affix beginning with a consonant (except @deva[य]) gets the augment @deva[इट्]. Thus @deva[लविता], @deva[लवितुम्], @deva[पविता], @deva[पवितुम्].",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[इट्]", "@deva[वल्]"],
    },
    {
      sutraId: "7.2.10",
      title: "एकाच उपदेशेऽनुदात्तात्",
      commentary: "The augment @deva[इट्] is not added before an affix joined to a root which in the @deva[धातुपाठ] is monosyllabic and @deva[अनुदात्त]. These are called @deva[अनिट्] roots.",
      keyTerms: ["@deva[इट्]", "@deva[अनुदात्त]"],
    },
    {
      sutraId: "1.2.4",
      title: "सार्वधातुकमपित्",
      commentary: "A @deva[सार्वधातुक] affix not marked with indicatory @deva[प्] is treated as if marked with @deva[ङ्]. This prevents @deva[गुण] substitution in certain forms.",
      keyTerms: ["@deva[सार्वधातुक]", "@deva[अपित्]", "@deva[ङित्]"],
    },
    {
      sutraId: "3.4.77",
      title: "लस्य",
      commentary: "In the place of @deva[ल] will be substituted the affixes announced hereafter. The @deva[ल] stands for the ten @deva[लकार]s: @deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्], @deva[लङ्], @deva[लिङ्] (potential/benedictive), @deva[लुङ्], @deva[लृङ्].",
      keyTerms: ["@deva[ल]", "@deva[आदेश]"],
    },
    {
      sutraId: "8.4.1",
      title: "रषाभ्यां नो णः समानपदे",
      commentary: "After @deva[र्] and @deva[ष्], the letter @deva[न्] becomes @deva[ण्] when they occur in the same word. @deva[करिष्यन्ति] → @deva[करिष्यन्ति] (retroflex @deva[ण] in @deva[आस्तीर्णम्], @deva[कृष्णाति]).",
      keyTerms: ["@deva[र्]", "@deva[ष्]", "@deva[ण]"],
    },
    {
      sutraId: "6.4.62",
      title: "स्यसिच्सीयुट्तासिषु भावकर्मणोः",
      commentary: "Before the affixes @deva[स्य], @deva[सिच्], @deva[सीयुट्], and @deva[तासि], when used in @deva[भाव] and @deva[कर्मन्] voices, stems ending in a vowel and the verbs @deva[हन्], @deva[ग्रह्], and @deva[दृश्] are optionally treated like @deva[चिण्] forms with augment @deva[इट्].",
      keyTerms: ["@deva[स्य]", "@deva[तासि]", "@deva[भाव]", "@deva[कर्मन्]"],
    },
  ],
};

export const tingantaLrngPath: LearningPath = {
  id: "tinganta-lrng",
  title: "Conditional",
  titleSanskrit: "लृङ्लकारः",
  description: "Derive conditional mood forms expressing \"would have\" - unrealized conditions and hypotheticals.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lrt", "tinganta-lang"],
  steps: [
    {
      sutraId: "3.3.139",
      title: "लिङ्निमित्ते लृङ् क्रियातिपत्तौ",
      commentary: "Where there is a reason for affixing @deva[लिङ्], the affix @deva[लृङ्] is used in future tense when non-completion of the action is understood. It comes in conditional sentences where the falsity of the antecedent is implied. @deva[यद्यभविष्यदधारिष्यत्] \"if it had been, it would have held.\"",
      keyTerms: ["@deva[लिङ्]", "@deva[निमित्त]", "@deva[लृङ्]"],
    },
    {
      sutraId: "3.3.140",
      title: "भूते च",
      commentary: "@deva[लृङ्] is also used when the sense is past time—when the unrealized condition was in the past. The Conditional has both future and past significations.",
      keyTerms: ["@deva[भूत]", "@deva[लृङ्]"],
    },
    {
      sutraId: "6.4.71",
      title: "लुङ्लङ्लृङ्क्ष्वडुदात्तः",
      commentary: "@deva[अट्] (= @deva[अ]) with acute accent is the augment of the verbal stem in Aorist, Imperfect, and Conditional. @deva[अकरिष्यत्] \"he would have done.\"",
      keyTerms: ["@deva[अट्]", "@deva[लृङ्]"],
    },
    {
      sutraId: "3.1.33",
      title: "स्यतासी लृलुटोः",
      commentary: "When @deva[लृ] (@deva[लृङ्] or @deva[लृट्]) follows, the affix @deva[स्य] is added to the root. @deva[लृ] is the common form for both Second Future and Conditional. @deva[करिष्यति], @deva[अकरिष्यत्].",
      keyTerms: ["@deva[स्य]", "@deva[लृ]"],
    },
    {
      sutraId: "3.4.78",
      title: "तिप्तस्झिसिप्थस्थमिब्वस्मस्तातांझथासाथांध्वमिड्वहिमहिङ्",
      commentary: "The standard @deva[तिङ्] endings substitute for @deva[ल]. In @deva[लृङ्], these combine with the @deva[अट्] augment and @deva[स्य] vikarana to form conditional forms.",
      keyTerms: ["@deva[तिप्]", "@deva[तिङ्]"],
    },
    {
      sutraId: "7.2.35",
      title: "आर्धधातुकस्येड् वलादेः",
      commentary: "An @deva[आर्धधातुक] affix beginning with a consonant (except @deva[य]) gets the augment @deva[इट्]. Applies to @deva[स्य] in conditional: @deva[अकरिष्यत्].",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[इट्]"],
    },
    {
      sutraId: "7.2.10",
      title: "एकाच उपदेशेऽनुदात्तात्",
      commentary: "The augment @deva[इट्] is not added before an affix joined to a monosyllabic @deva[अनुदात्त] root. These @deva[अनिट्] roots form conditionals without @deva[इट्].",
      keyTerms: ["@deva[इट्]", "@deva[अनुदात्त]"],
    },
  ],
};

export const kridantaKtvaPath: LearningPath = {
  id: "kridanta-ktva",
  title: "Absolutive",
  titleSanskrit: "क्त्वान्तम्",
  description: "Derive absolutive forms (having done X). The ktva and lyap suffixes create indeclinable forms expressing prior action.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.4.21",
      title: "समानकर्तृकयोः पूर्वकाले",
      commentary: "When two actions have the same agent, the affix @deva[क्त्वा] comes after the verb which takes place anterior to the other. @deva[भुक्त्वा व्रजति] \"having eaten, he goes.\" @deva[स्नात्वा पीत्वा भुक्त्वा दत्वा व्रजति] \"having bathed, drunk, eaten, and given, he goes.\"",
      keyTerms: ["@deva[समानकर्तृक]", "@deva[पूर्वकाल]", "@deva[क्त्वा]"],
    },
    {
      sutraId: "1.1.40",
      title: "क्त्वातोसुन्कसुनः",
      commentary: "Words ending in @deva[क्त्वा], @deva[तोसुन्], and @deva[कसुन्] are @deva[अव्यय]. @deva[कृत्वा] \"having done,\" @deva[उदेतोः] \"having risen.\"",
      keyTerms: ["@deva[क्त्वा]", "@deva[अव्यय]"],
    },
    {
      sutraId: "3.4.18",
      title: "अलङ्खल्वोः प्रतिषेधयोः प्राचां क्त्वा",
      commentary: "According to Eastern Grammarians, @deva[क्त्वा] comes after the verb when combined with @deva[अलम्] or @deva[खलु] expressing prohibition. @deva[अलं कृत्वा] \"do not make,\" @deva[खलु पीत्वा] \"do not drink.\"",
      keyTerms: ["@deva[अलम्]", "@deva[खलु]", "@deva[क्त्वा]"],
    },
    {
      sutraId: "7.2.56",
      title: "उदितो वा",
      commentary: "The affix @deva[क्त्वा] optionally gets the @deva[इट्] augment after a root with indicatory short @deva[उ]. @deva[शमु] → @deva[शमित्वा] or @deva[शान्त्वा]; @deva[दमु] → @deva[दमित्वा] or @deva[दान्त्वा].",
      keyTerms: ["@deva[उदित्]", "@deva[इट्]", "@deva[क्त्वा]"],
    },
    {
      sutraId: "6.1.71",
      title: "ह्रस्वस्य पिति कृति तुक्",
      commentary: "To a root ending in a short vowel, the augment @deva[तुक्] (= @deva[त्]) is added when a @deva[कृत्] affix with indicatory @deva[प्] follows. @deva[प्रकृत्य], @deva[प्रहृत्य] with @deva[ल्यप्].",
      keyTerms: ["@deva[ह्रस्व]", "@deva[पित्]", "@deva[तुक्]"],
    },
    {
      sutraId: "6.4.15",
      title: "अनुनासिकस्य क्विझलोः क्ङिति",
      commentary: "The penultimate vowel of a stem ending in a nasal is lengthened before @deva[क्वि] and before @deva[कित्] or @deva[ङित्] affixes beginning with @deva[झल्]. @deva[शान्तः] from @deva[शम्] + @deva[क्त].",
      keyTerms: ["@deva[अनुनासिक]", "@deva[क्वि]", "@deva[झल्]"],
    },
    {
      sutraId: "7.4.40",
      title: "द्यतिस्यतिमास्थामित्ति किति",
      commentary: "Short @deva[इ] substitutes for the final of @deva[दो], @deva[सो], @deva[मा], and @deva[स्था] before an affix beginning with @deva[त्] and having indicatory @deva[क्]. @deva[मितः], @deva[स्थितः], @deva[अवसितः].",
      keyTerms: ["@deva[दो]", "@deva[सो]", "@deva[मा]", "@deva[स्था]"],
    },
    {
      sutraId: "8.4.17",
      title: "नेर्गदनदपतपदघुमास्यतिहन्तियातिवातिद्रातिप्सातिवपतिवहतिशाम्यतिचिनोतिदेग्धिषु च",
      commentary: "@deva[ण] substitutes for @deva[न्] of the prefix @deva[नि] when followed by certain roots including @deva[गद्], @deva[नद्], @deva[पत्], @deva[पद्], @deva[घु] verbs, @deva[हन्], @deva[या], @deva[वा], @deva[शम्], etc.",
      keyTerms: ["@deva[नि]", "@deva[ण]"],
    },
  ],
};

export const kridantaTumunPath: LearningPath = {
  id: "kridanta-tumun",
  title: "Infinitive",
  titleSanskrit: "तुमन्तम्",
  description: "Derive infinitive forms (to do X). The tumun suffix creates purpose expressions and complements.",
  difficulty: "intermediate",
  estimatedTime: "2 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.3.10",
      title: "तुमुन्ण्वुलौ क्रियायां क्रियार्थायाम्",
      commentary: "The affixes @deva[तुमुन्] and @deva[ण्वुल्] are placed after a verbal root with the force of the future when the word in construction is another verb denoting an action performed for the sake of that future action. @deva[भोक्तुं व्रजति] \"he goes to eat.\"",
      keyTerms: ["@deva[तुमुन्]", "@deva[क्रिया]", "@deva[क्रियार्था]"],
    },
    {
      sutraId: "3.4.65",
      title: "शकधृषज्ञाग्लाघटरभलभक्रमसहार्हास्त्यर्थेषु तुमुन्",
      commentary: "The affix @deva[तुमुन्] is added to a verb when another verb follows with the sense of @deva[शक्] \"to be able,\" @deva[धृष्] \"to dare,\" @deva[ज्ञा] \"to know,\" @deva[ग्लै] \"to be weary,\" @deva[रभ्] \"to begin,\" @deva[लभ्] \"to obtain,\" @deva[सह्] \"to bear,\" @deva[अर्ह्] \"to deserve,\" or @deva[अस्] \"to be.\"",
      keyTerms: ["@deva[तुमुन्]", "@deva[शक्]", "@deva[अर्ह्]"],
    },
    {
      sutraId: "7.2.35",
      title: "आर्धधातुकस्येड् वलादेः",
      commentary: "An @deva[आर्धधातुक] affix beginning with a consonant (except @deva[य]) gets the augment @deva[इट्]. @deva[लवितुम्], @deva[पवितुम्].",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[इट्]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for the final @deva[इक्] vowel of a stem before @deva[सार्वधातुक] and @deva[आर्धधातुक] affixes. @deva[तरति], @deva[नयति], @deva[भवति], @deva[कर्तुम्], @deva[नेतुम्].",
      keyTerms: ["@deva[गुण]", "@deva[तुमुन्]"],
    },
    {
      sutraId: "6.1.15",
      title: "वचिस्वपियजादीनां किति",
      commentary: "The semi-vowels of @deva[वच्], @deva[स्वप्], and @deva[यजादि] verbs are vocalized (@deva[सम्प्रसारण]) when followed by an affix with indicatory @deva[क्]. @deva[वच्] → @deva[उक्तम्].",
      keyTerms: ["@deva[वच्]", "@deva[स्वप्]", "@deva[सम्प्रसारण]"],
    },
    {
      sutraId: "6.4.66",
      title: "घुमास्थागापाजहातिसां हलि",
      commentary: "For the final of @deva[घु] roots (@deva[दा], @deva[धा]) and @deva[मा], @deva[स्था], @deva[गा], @deva[पा], @deva[हा], @deva[सा]—@deva[ई] substitutes before an @deva[आर्धधातुक] affix beginning with a consonant having indicatory @deva[क्] or @deva[ङ्]. @deva[दातुम्] → @deva[दीयते].",
      keyTerms: ["@deva[घु]", "@deva[मा]", "@deva[स्था]"],
    },
    {
      sutraId: "7.2.44",
      title: "स्वरतिसूतिसूयतिधूञूदितो वा",
      commentary: "A @deva[वलादि] @deva[आर्धधातुक] affix optionally takes @deva[इट्] after @deva[स्वृ], @deva[सू], @deva[धूञ्], and roots with indicatory long @deva[ऊ]. @deva[स्वरिता] or @deva[स्वर्त्ता]; @deva[गोप्ता] or @deva[गोपिता].",
      keyTerms: ["@deva[स्वृ]", "@deva[सू]", "@deva[इट्]"],
    },
  ],
};

export const kridantaShatrShanacPath: LearningPath = {
  id: "kridanta-shatr-shanac",
  title: "Present Participles",
  titleSanskrit: "शतृशानचौ",
  description: "Derive present active and middle participles. These verbal adjectives describe ongoing action.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.2.124",
      title: "लटः शतृशानचावप्रथमासमानाधिकरणे",
      commentary: "The affixes @deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] when agreeing with what does not end with the Nominative case. @deva[पचमानं देवदत्तं पश्य] \"behold Devadatta who is cooking.\" @deva[पचता कृतम्] \"done by one who is cooking.\"",
      keyTerms: ["@deva[लट्]", "@deva[शतृ]", "@deva[शानच्]"],
    },
    {
      sutraId: "3.2.125",
      title: "सम्बोधने च",
      commentary: "@deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] even with Nominative case when in Vocative. @deva[हे पचन्] or @deva[हे पचमान] \"O thou who art cooking.\"",
      keyTerms: ["@deva[शतृ]", "@deva[शानच्]", "@deva[सम्बोधन]"],
    },
    {
      sutraId: "1.4.99",
      title: "लः परस्मैपदम्",
      commentary: "The substitutes of @deva[ल] are called @deva[परस्मैपद]. The term @deva[ल] covers all ten @deva[लकार]s. @deva[शतृ] creates active participles: @deva[पचत्], @deva[भवत्].",
      keyTerms: ["@deva[शतृ]", "@deva[परस्मैपद]"],
    },
    {
      sutraId: "1.4.100",
      title: "तङानावात्मनेपदम्",
      commentary: "The nine affixes in the @deva[तङ्] @deva[प्रत्याहार] and the two ending in @deva[आन] (@deva[शानच्] and @deva[कानच्]) are called @deva[आत्मनेपद]. @deva[शानच्] creates middle participles: @deva[पचमान].",
      keyTerms: ["@deva[शानच्]", "@deva[आत्मनेपद]"],
    },
    {
      sutraId: "3.2.127",
      title: "तौ सत्",
      commentary: "These two—@deva[शतृ] and @deva[शानच्]—are collectively called @deva[सत्]. They replace not only Present tense affixes but sometimes Future too. @deva[कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः].",
      keyTerms: ["@deva[शतृ]", "@deva[शानच्]", "@deva[सत्]"],
    },
    {
      sutraId: "6.4.98",
      title: "गमहनजनखनघसां लोपः क्ङित्यनङि",
      commentary: "The root-vowel of @deva[गम्], @deva[हन्], @deva[जन्], @deva[खन्], and @deva[घस्] is elided before an affix beginning with a vowel having indicatory @deva[क्] or @deva[ङ्], but not before Aorist @deva[अङ्]. @deva[गच्छत्] (not \\*@deva[गमत्]).",
      keyTerms: ["@deva[गम्]", "@deva[हन्]", "@deva[लोप]"],
    },
    {
      sutraId: "6.1.67",
      title: "वेरपृक्तस्य",
      commentary: "There is elision of the affix @deva[वि] when reduced to the single letter @deva[व्]. The affixes @deva[क्विप्], @deva[क्विन्], @deva[ण्वि] have their @deva[व्] elided. @deva[ब्रह्महा], @deva[घृतस्पृक्].",
      keyTerms: ["@deva[वि]", "@deva[लोप]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for the final @deva[इक्] vowel of a stem before @deva[सार्वधातुक] and @deva[आर्धधातुक] affixes. @deva[शतृ] and @deva[शानच्] are @deva[सार्वधातुक], so @deva[गुण] applies: @deva[भवत्] from @deva[भू].",
      keyTerms: ["@deva[गुण]", "@deva[शतृ]"],
    },
  ],
};

export const kridantaKtaKtavatuPath: LearningPath = {
  id: "kridanta-kta-ktavatu",
  title: "Past Participles",
  titleSanskrit: "क्तक्तवतू",
  description: "Derive past passive participle (kta) and past active participle (ktavatu). Essential forms for describing completed actions.",
  difficulty: "intermediate",
  estimatedTime: "3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.2.102",
      title: "निष्ठा",
      commentary: "The affixes called @deva[निष्ठा] come after a verbal root used in the sense of past time. @deva[कृ] + @deva[क्त] = @deva[कृतम्] \"made\"; @deva[कृ] + @deva[क्तवतु] = @deva[कृतवान्] \"one who made.\" Also @deva[भुक्तम्], @deva[भुक्तवान्] \"eaten.\"",
      keyTerms: ["@deva[निष्ठा]", "@deva[क्त]", "@deva[क्तवतु]"],
    },
    {
      sutraId: "3.4.114",
      title: "आर्धधातुकं शेषः",
      commentary: "Affixes other than @deva[तिङ्] and those with indicatory @deva[श्] are called @deva[आर्धधातुक]. @deva[तृ], @deva[तुम्], @deva[तव्य], @deva[क्त], @deva[क्तवतु] are @deva[आर्धधातुक]. @deva[लविता], @deva[लवितुम्], @deva[लवितव्यम्].",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[क्त]"],
    },
    {
      sutraId: "3.4.72",
      title: "गत्यर्थाकर्मकश्लिषशीङ्स्थाऽऽसवसजनरुहजीर्यतिभ्यश्च",
      commentary: "The affix @deva[क्त] denotes the agent as well as act and object after verbs of motion, intransitive roots, and @deva[श्लिष्], @deva[शी], @deva[स्था], @deva[आस्], @deva[वस्], @deva[जन्], @deva[रुह्], @deva[जृ]. @deva[गतः] \"one who went.\"",
      keyTerms: ["@deva[क्त]", "@deva[कर्तृ]", "@deva[गति]"],
    },
    {
      sutraId: "7.2.14",
      title: "श्वीदितो निष्ठायाम्",
      commentary: "The participial affixes @deva[क्त] and @deva[क्तवतु] do not get @deva[इट्] after @deva[श्वि] and roots with indicatory @deva[ई]. @deva[शूनः], @deva[लग्नः], @deva[उद्विग्नः].",
      keyTerms: ["@deva[श्वि]", "@deva[ईदित्]", "@deva[इट्]"],
    },
    {
      sutraId: "8.2.42",
      title: "रदाभ्यां निष्ठातो नः पूर्वस्य च दः",
      commentary: "After @deva[र] and @deva[द], the @deva[त] of @deva[निष्ठा] becomes @deva[न], and preceding @deva[द] also becomes @deva[न]. After @deva[र]: @deva[आस्तीर्णम्], @deva[विस्तीर्णम्]. After @deva[द]: @deva[भिन्नः], @deva[छिन्नः] from @deva[भिद्], @deva[छिद्].",
      keyTerms: ["@deva[र]", "@deva[द]", "@deva[न]"],
    },
    {
      sutraId: "6.4.64",
      title: "आतो लोप इटि च",
      commentary: "The final @deva[आ] of a root is elided before an @deva[आर्धधातुक] affix with @deva[इट्] or beginning with a vowel having indicatory @deva[क्] or @deva[ङ्]. @deva[पपिथ], @deva[तस्थिथ]; @deva[पपतुः], @deva[तस्थुः].",
      keyTerms: ["@deva[आ]", "@deva[लोप]", "@deva[इट्]"],
    },
    {
      sutraId: "6.1.15",
      title: "वचिस्वपियजादीनां किति",
      commentary: "The semi-vowels of @deva[वच्], @deva[स्वप्], and @deva[यजादि] verbs are vocalized before affixes with indicatory @deva[क्]. @deva[वच्] → @deva[उक्तम्], @deva[वप्] → @deva[उप्तम्].",
      keyTerms: ["@deva[वच्]", "@deva[स्वप्]", "@deva[सम्प्रसारण]"],
    },
    {
      sutraId: "6.4.52",
      title: "निष्ठायां सेटि",
      commentary: "The affix @deva[णि] is elided before @deva[क्त] and @deva[क्तवतु] when these take the augment @deva[इट्]. @deva[कारितम्], @deva[हारितम्], @deva[गणितम्].",
      keyTerms: ["@deva[णि]", "@deva[निष्ठा]", "@deva[इट्]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for the final @deva[इक्] of a stem before @deva[आर्धधातुक] affixes. But @deva[क्त] and @deva[क्तवतु] are @deva[कित्], preventing @deva[गुण]: @deva[भुक्त] not \\*@deva[भोक्त].",
      keyTerms: ["@deva[गुण]", "@deva[क्त]"],
    },
  ],
};

export const kridantaTavyaAniyaPath: LearningPath = {
  id: "kridanta-tavya-aniya",
  title: "Future Passive Participles",
  titleSanskrit: "तव्यानीययाः",
  description: "Derive gerundives expressing necessity or obligation. \"To be done\" - essential for expressing duty and propriety.",
  difficulty: "intermediate",
  estimatedTime: "2-3 hours",
  prerequisites: ["tinganta-lat", "dhatu-ganas"],
  steps: [
    {
      sutraId: "3.1.96",
      title: "तव्यत्तव्यानीयरः",
      commentary: "The affixes @deva[तव्यत्], @deva[तव्य], and @deva[अनीयर्] come after verbal roots. The final @deva[त्] and @deva[र्] are indicatory for accent. @deva[कर्तव्यम्] \"to be done,\" @deva[करणीयम्] \"to be done.\"",
      keyTerms: ["@deva[तव्य]", "@deva[अनीयर्]"],
    },
    {
      sutraId: "3.1.97",
      title: "अचो यत्",
      commentary: "The affix @deva[यत्] comes after a root ending in a vowel. @deva[गा] + @deva[यत्] = @deva[गेयम्] \"to be sung,\" @deva[पेयम्] \"to be drunk,\" @deva[जेयम्] \"to be conquered.\"",
      keyTerms: ["@deva[यत्]", "@deva[अच्]"],
    },
    {
      sutraId: "3.4.114",
      title: "आर्धधातुकं शेषः",
      commentary: "Affixes other than @deva[तिङ्] and @deva[शित्] are @deva[आर्धधातुक]. @deva[तव्य], @deva[अनीय], @deva[यत्] are @deva[आर्धधातुक], so @deva[इट्] and @deva[गुण] rules apply.",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[तव्य]"],
    },
    {
      sutraId: "7.2.35",
      title: "आर्धधातुकस्येड् वलादेः",
      commentary: "An @deva[आर्धधातुक] affix beginning with a consonant (except @deva[य]) gets @deva[इट्]. @deva[लवितव्यम्], @deva[पवितव्यम्].",
      keyTerms: ["@deva[आर्धधातुक]", "@deva[इट्]", "@deva[तव्य]"],
    },
    {
      sutraId: "7.3.84",
      title: "सार्वधातुकार्धधातुकयोः",
      commentary: "@deva[गुण] substitutes for the final @deva[इक्] of a stem before @deva[आर्धधातुक] affixes. @deva[भवितव्यम्] from @deva[भू], @deva[नेतव्यम्] from @deva[नी].",
      keyTerms: ["@deva[गुण]", "@deva[तव्य]"],
    },
    {
      sutraId: "6.4.65",
      title: "एचोऽयवायावः",
      commentary: "Before @deva[यत्], the diphthongs @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ] undergo @deva[आयादेश]. @deva[गा] + @deva[यत्] = @deva[गेयम्] (via @deva[ग् + आय् + य]).",
      keyTerms: ["@deva[एच्]", "@deva[यत्]"],
    },
    {
      sutraId: "6.4.66",
      title: "घुमास्थागापाजहातिसां हलि",
      commentary: "For @deva[घु] roots (@deva[दा], @deva[धा]) and @deva[मा], @deva[स्था], @deva[गा], @deva[पा], @deva[हा], @deva[सा]—@deva[ई] substitutes before consonant-initial @deva[कित्] or @deva[ङित्] affixes. @deva[देयम्], @deva[धेयम्].",
      keyTerms: ["@deva[घु]", "@deva[अनीय]"],
    },
    {
      sutraId: "3.1.100",
      title: "गदमदचरयमश्चानुपसर्गे",
      commentary: "After certain roots without @deva[उपसर्ग], @deva[ण्यत्] (= @deva[य]) with @deva[वृद्धि] applies. @deva[गद्यम्], @deva[मद्यम्].",
      keyTerms: ["@deva[ण्यत्]", "@deva[गद्]"],
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
