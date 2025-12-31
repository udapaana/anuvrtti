/**
 * Learning Paths for Ashtadhyayi
 *
 * AUTO-GENERATED from markdown files in src/lib/learning/paths/
 * To edit, modify the .md files and run: npx tsx scripts/sync-paths.ts --to-ts
 */

export type Track = "reading" | "grammar";

export type PathCategory =
  | "foundation"
  | "tinganta"
  | "subanta"
  | "taddhita"
  | "kridanta"
  | "sandhi"
  | "karaka"
  | "samasa";

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
  /** Short label for tree node display (Sanskrit) */
  label: string;
  /** Track this path belongs to: reading (fluency) or grammar (systematic) */
  track: Track;
  /** Category for color-coding in tree view */
  category: PathCategory;
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
  label: "प्रवेशः",
  track: "grammar",
  category: "foundation",
  description: "The essential concepts you need before any prakriya. We build understanding step by step.",
  difficulty: "beginner",
  estimatedTime: "2-3 hours",
  prerequisites: [],
  steps: [
    {
      sutraId: "concept",
      title: "Welcome to Paninian Grammar",
      commentary: "Pāṇini's Aṣṭādhyāyī is a grammar of about 4,000 rules that generates all of Sanskrit. But it's not a textbook—it's more like source code. Each rule is compressed to the minimum, assuming you know the system.\n\nWe'll build that knowledge piece by piece. By the end of this path, you'll understand:\n\n- How vowels \"strengthen\" (guṇa and vṛddhi)\n- How Pāṇini abbreviates groups of sounds (pratyāhāra)\n- How marker letters work (it-saṃjñā)\n- What makes a complete word (pada)\n- How affixes attach (pratyaya)\n\nLet's begin with something concrete: vowel grades.",
    },
    {
      sutraId: "concept",
      title: "Vowel Grades: The Core Idea",
      commentary: "Sanskrit vowels come in three \"grades\" or strengths. Think of it like gears—you shift up when forming derivatives:\n\n| Base vowel         | Guṇa (medium) | Vṛddhi (strong) |\n| ------------------ | ------------- | --------------- |\n| @deva[इ], @deva[ई] | @deva[ए]      | @deva[ऐ]        |\n| @deva[उ], @deva[ऊ] | @deva[ओ]      | @deva[औ]        |\n| @deva[ऋ], @deva[ॠ] | @deva[अर्]    | @deva[आर्]      |\n| @deva[ऌ]           | @deva[अल्]    | @deva[आल्]      |\n\nThe vowel @deva[अ] is special—it's both a base vowel AND a guṇa vowel. It strengthens to @deva[आ] for vṛddhi.\n\n**Why does this matter?**\n\nWhen you derive words, vowels often shift grade:\n\n- @deva[उपगु] (a sage's name) → @deva[औपगवः] \"son of Upagu\" — the @deva[उ] became @deva[औ] (vṛddhi)\n- @deva[नी] \"to lead\" + @deva[अति] → @deva[नयति] \"he leads\" — the @deva[ई] became @deva[ए] (guṇa), then @deva[ए] → @deva[अय्] before a vowel\n\nPāṇini needs names for these vowel sets. That's what the first two sūtras do.",
    },
    {
      sutraId: "1.1.1",
      title: "Vṛddhi Defined",
      commentary: "@deva[वृद्धिरादैच्] — The vowels @deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि].\n\nThis defines a technical term. Whenever a later rule says \"apply vṛddhi,\" it means: substitute one of these three vowels.\n\n**Examples of vṛddhi in action:**\n\n| Base         | Derivative     | Meaning                |\n| ------------ | -------------- | ---------------------- |\n| @deva[अङ्ग]  | @deva[आङ्गः]   | \"bodily\" (अ → आ)       |\n| @deva[इच्छा] | @deva[ऐच्छिकः] | \"optional\" (इ → ऐ)     |\n| @deva[उपगु]  | @deva[औपगवः]   | \"son of Upagu\" (उ → औ) |",
      keyTerms: ["vRddi"],
    },
    {
      sutraId: "1.1.2",
      title: "Guṇa Defined",
      commentary: "@deva[अदेङ्गुणः] — The vowels @deva[अ], @deva[ए], and @deva[ओ] are called @deva[गुण].\n\nThe \"medium\" grade. When rules say \"apply guṇa,\" substitute one of these.\n\n**Examples of guṇa in action:**\n\n| Root               | Form                   | What happened  |\n| ------------------ | ---------------------- | -------------- |\n| @deva[ऋ] \"to go\"   | @deva[अर्ति] \"he goes\" | ऋ → अर् (guṇa) |\n| @deva[इ] \"to go\"   | @deva[एति] \"he comes\"  | इ → ए (guṇa)   |\n| @deva[उख्] \"to go\" | @deva[ओखति] \"he goes\"  | उ → ओ (guṇa)   |\n\nNotice: @deva[ऋ] becomes @deva[अर्], not just @deva[अ]. The @deva[र्] stays because @deva[ऋ] is essentially @deva[र्] + a vowel coloring.",
      keyTerms: ["guRa"],
    },
    {
      sutraId: "1.1.3",
      title: "Guṇa and Vṛddhi Replace इक्",
      commentary: "@deva[इको गुणवृद्धी] — When @deva[गुण] or @deva[वृद्धि] is prescribed without specifying where, it replaces an @deva[इक्] vowel.\n\n@deva[इक्] means @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] (and their long forms). This is our first **pratyāhāra**—an abbreviation for a group of sounds. We'll learn how these work soon.\n\n**The correspondence:**\n\n| @deva[इक्] vowel | Its guṇa   | Its vṛddhi |\n| ---------------- | ---------- | ---------- |\n| @deva[इ/ई]       | @deva[ए]   | @deva[ऐ]   |\n| @deva[उ/ऊ]       | @deva[ओ]   | @deva[औ]   |\n| @deva[ऋ/ॠ]       | @deva[अर्] | @deva[आर्] |\n| @deva[ऌ]         | @deva[अल्] | @deva[आल्] |\n\n**Why this rule?**\n\nMany rules just say \"guṇa happens\" without saying what gets replaced. This rule fills in the blank: it's always an @deva[इक्] vowel.\n\nExample: @deva[नी] + @deva[अति] → @deva[ने] + @deva[अति] → @deva[नयति]\n\nThe @deva[ई] of @deva[नी] is an @deva[इक्] vowel, so it takes guṇa (becomes @deva[ए]).",
      keyTerms: ["iK"],
    },
    {
      sutraId: "concept",
      title: "How Pāṇini Abbreviates: Pratyāhāras",
      commentary: "You just saw @deva[इक्] used to mean \"इ, उ, ऋ, ऌ.\" How does that work?\n\nPāṇini created 14 seed-sūtras called the **Śivasūtras** (or Māheśvara Sūtras). They arrange all Sanskrit sounds in a special order:\n\n1. @deva[अ इ उ ण्]\n2. @deva[ऋ ऌ क्]\n3. @deva[ए ओ ङ्]\n4. @deva[ऐ औ च्]\n5. @deva[ह य व र ट्]\n6. @deva[ल ण्]\n7. @deva[ञ म ङ ण न म्]\n8. @deva[झ भ ञ्]\n9. @deva[घ ढ ध ष्]\n10. @deva[ज ब ग ड द श्]\n11. @deva[ख फ छ ठ थ च ट त व्]\n12. @deva[क प य्]\n13. @deva[श ष स र्]\n14. @deva[ह ल्]\n\nThe consonants at the end of each sūtra (@deva[ण्], @deva[क्], @deva[ङ्], etc.) are **markers**—they're not part of the sound inventory. They exist only to create abbreviations.\n\nA **pratyāhāra** combines:\n\n- A starting sound\n- An ending marker\n\nEverything between (inclusive of start, exclusive of marker) is included.",
    },
    {
      sutraId: "1.1.71",
      title: "How Pratyāhāras Work",
      commentary: "@deva[आदिरन्त्येन सहेता] — A beginning sound, combined with a final @deva[इत्] (marker), denotes all sounds between them.\n\n**Examples:**\n\n| Pratyāhāra | Start    | End marker | Includes                           |\n| ---------- | -------- | ---------- | ---------------------------------- |\n| @deva[अच्] | @deva[अ] | @deva[च्]  | All vowels: अ इ उ ऋ ऌ ए ओ ऐ औ      |\n| @deva[हल्] | @deva[ह] | @deva[ल्]  | All consonants                     |\n| @deva[इक्] | @deva[इ] | @deva[क्]  | इ उ ऋ ऌ (the \"replaceable\" vowels) |\n| @deva[यण्] | @deva[य] | @deva[ण्]  | The semivowels: य व र ल            |\n| @deva[अण्] | @deva[अ] | @deva[ण्]  | अ इ उ (short simple vowels)        |\n\nNow @deva[इक्] in sūtra 1.1.3 makes sense: it's the vowels from @deva[इ] (in sūtra 1) through the marker @deva[क्] (in sūtra 2) — that's @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ].",
      keyTerms: ["pratyAhAra", "Adir", "antyena", "it"],
    },
    {
      sutraId: "concept",
      title: "Marker Letters (इत्-संज्ञा)",
      commentary: "Those ending consonants in the Śivasūtras are \"markers\" — they indicate something but aren't part of the actual content. Pāṇini uses markers throughout his grammar, not just in pratyāhāras.\n\nHow do you know what's a marker? The next few rules define this.",
    },
    {
      sutraId: "1.3.2",
      title: "Nasal Vowels are इत्",
      commentary: "@deva[उपदेशेऽनुनासिक इत्] — In an @deva[उपदेश] (original statement), a nasal vowel is @deva[इत्] (a marker).\n\nAn @deva[उपदेश] is anything as originally taught—a root, an affix, or a sūtra. If a vowel is pronounced nasally (indicated by a dot: @deva[इँ]), it's a marker, not part of the real form.\n\n**Example:** The affix @deva[क्विँन्]\n\nThe @deva[इँ] is nasal, so it's a marker. The actual affix is just @deva[क्वन्].",
      keyTerms: ["upadeSa", "anunAsika", "it"],
    },
    {
      sutraId: "1.3.3",
      title: "Final Consonants are इत्",
      commentary: "@deva[हलन्त्यम्] — The final consonant (@deva[हल्]) of an @deva[उपदेश] is @deva[इत्].\n\nThis is why the Śivasūtras end in consonants like @deva[ण्], @deva[क्], @deva[ङ्]—those finals are markers.\n\n**Examples:**\n\n| As stated     | Marker                           | Real form                                   |\n| ------------- | -------------------------------- | ------------------------------------------- |\n| @deva[अइउण्]  | @deva[ण्]                        | @deva[अ], @deva[इ], @deva[उ]                |\n| @deva[क्त्वा] | @deva[आ]? No—@deva[आ] is a vowel | @deva[क्त्वा] (the @deva[क्] is the marker) |\n| @deva[तिप्]   | @deva[प्]                        | @deva[ति]                                   |\n\nWait—@deva[क्त्वा] has @deva[क्] as a marker? Yes! It's the final consonant when you read the cluster. The affix is really @deva[त्वा].",
      keyTerms: ["hal", "antya", "it"],
    },
    {
      sutraId: "1.3.9",
      title: "इत् Letters are Deleted",
      commentary: "@deva[तस्य लोपः] — The @deva[इत्] (of that which has an इत्) undergoes @deva[लोप] (deletion).\n\nMarkers serve their grammatical purpose, then vanish. They're never pronounced in the final word.\n\n**The process:**\n\n@deva[भू] + @deva[क्त्वा] (affix with marker @deva[क्])\n→ The @deva[क्] signals \"don't apply guṇa\" (that's what @deva[क्] means as a marker)\n→ Then @deva[क्] is deleted\n→ Result: @deva[भूत्वा] \"having become\"",
      keyTerms: ["lopa"],
    },
    {
      sutraId: "concept",
      title: "What is a Word? (पद)",
      commentary: "Sanskrit has stems (like @deva[राम]) and roots (like @deva[भू]). But these aren't complete words—you can't use @deva[राम] by itself in a sentence. You need endings.\n\nA **पद** (pada) is a complete, usable word. What makes it complete?",
    },
    {
      sutraId: "1.4.14",
      title: "Pada Defined",
      commentary: "@deva[सुप्तिङन्तं पदम्] — What ends in @deva[सुप्] (a case ending) or @deva[तिङ्] (a verb ending) is called @deva[पद].\n\n**@deva[सुप्]** = the 21 case endings for nouns (nominative, accusative, etc.)\n**@deva[तिङ्]** = the 18 verb endings (third person, second person, etc.)\n\n**Examples:**\n\n| Stem/Root       | + Ending                 | = Pada            | Type |\n| --------------- | ------------------------ | ----------------- | ---- |\n| @deva[राम]      | + @deva[सु] (nom. sg.)   | @deva[रामः]       | noun |\n| @deva[ब्राह्मण] | + @deva[जस्] (nom. pl.)  | @deva[ब्राह्मणाः] | noun |\n| @deva[पच्]      | + @deva[ति] (3rd sg.)    | @deva[पचति]       | verb |\n| @deva[पच्]      | + @deva[अन्ति] (3rd pl.) | @deva[पचन्ति]     | verb |\n\nOnly padas can stand in a sentence. That's why Sanskrit words change form—they need these endings.",
      keyTerms: ["sup", "tiN", "pada"],
    },
    {
      sutraId: "concept",
      title: "Affixes (प्रत्यय)",
      commentary: "You've seen endings like @deva[ति] and @deva[सु]. These are **affixes** (प्रत्यय). Books 3-5 of the Aṣṭādhyāyī are dedicated to affixes—which ones exist, when they apply, and what they mean.",
    },
    {
      sutraId: "3.1.1",
      title: "The Pratyaya Realm",
      commentary: "@deva[प्रत्ययः] — [From here to the end of Book 5, what follows is called] @deva[प्रत्यय].\n\nThis is a heading rule (अधिकार). It announces: \"everything I'm about to teach you is an affix.\"",
      keyTerms: ["pratyaya"],
    },
    {
      sutraId: "3.1.2",
      title: "Affixes Follow",
      commentary: "@deva[परश्च] — And [the pratyaya comes] after [the base].\n\nAffixes attach to the end of roots and stems. @deva[भू] + @deva[ति] = @deva[भवति], not @deva[तिभू].\n\n(There are rare exceptions, but this is the default.)",
      keyTerms: ["dhAtu", "para"],
    },
    {
      sutraId: "concept",
      title: "Words in Close Contact (संहिता)",
      commentary: "When sounds come together, they interact. @deva[दधि] + @deva[अत्र] doesn't stay as two separate words—the @deva[इ] and @deva[अ] merge into @deva[य], giving @deva[दध्यत्र].\n\nThis merging is called **संधि** (junction). But it only happens when sounds are in **संहिता** (close contact).",
    },
    {
      sutraId: "1.4.109",
      title: "Saṃhitā Defined",
      commentary: "@deva[परः सन्निकर्षः संहिता] — The closest proximity [of sounds] is @deva[संहिता].\n\nWhen sounds are within half a mātrā of each other (essentially: no pause between them), they're in saṃhitā, and sandhi rules apply.\n\n**In saṃhitā:** @deva[दधि] + @deva[अत्र] → @deva[दध्यत्र]\n**Not in saṃhitā:** @deva[दधि] । @deva[अत्र] (pause between = no change)",
      keyTerms: ["saMhitA"],
    },
    {
      sutraId: "concept",
      title: "Svarūpa: Form, Not Meaning",
      commentary: "One more crucial principle. In grammar, when we mention a word, we mean its **form**, not its meaning.",
    },
    {
      sutraId: "1.1.68",
      title: "Form Over Meaning",
      commentary: "@deva[स्वं रूपं शब्दस्याशब्दसंज्ञा] — A word [in a rule] denotes its own form, not [things with the same] meaning—except for technical terms.\n\nIf a rule mentions @deva[अग्नि] \"fire,\" it applies only to the word @deva[अग्नि]—not to synonyms like @deva[पावक] or @deva[वह्नि].\n\nBut technical terms like @deva[वृद्धि] or @deva[गुण] denote what they define, not their own letters.",
      keyTerms: ["svarUpa"],
    },
    {
      sutraId: "concept",
      title: "Review: The Building Blocks",
      commentary: "You now know the essential machinery:\n\n| Concept        | What it means                                     |\n| -------------- | ------------------------------------------------- |\n| **Vṛddhi**     | Strong vowels: आ, ऐ, औ                            |\n| **Guṇa**       | Medium vowels: अ, ए, ओ                            |\n| **इक्**        | Replaceable vowels: इ, उ, ऋ, ऌ                    |\n| **Pratyāhāra** | Sound-group abbreviation (start + end marker)     |\n| **इत्**        | Marker letter (deleted after serving its purpose) |\n| **Pada**       | Complete word (ends in सुप् or तिङ्)              |\n| **Pratyaya**   | Affix (comes after the base)                      |\n| **Saṃhitā**    | Close contact (triggers sandhi)                   |\n| **Svarūpa**    | Words mean their form, not their sense            |\n\nWith these concepts, you can start reading the Aṣṭādhyāyī. The next paths will show you how actual words are derived—verbs, nouns, compounds, and more.",
    },
    {
      sutraId: "concept",
      title: "What's Next?",
      commentary: "You're ready to see the system in action. Recommended next steps:\n\n1. **Verb Basics** (@deva[तिङन्त]) — How @deva[भू] becomes @deva[भवति]\n2. **Noun Basics** (@deva[सुबन्त]) — How @deva[राम] becomes @deva[रामः], @deva[रामम्], @deva[रामेण]...\n3. **Sandhi** — How sounds change when words meet\n\nEach path builds on what you've learned here. Take them in any order—or follow the Reading Fluency track for a structured sequence.",
    },
  ],
};

export const reading01AlphabetPath: LearningPath = {
  id: "reading-01-alphabet",
  title: "Alphabet & Sounds",
  titleSanskrit: "वर्णमाला",
  label: "वर्णाः",
  track: "reading",
  category: "foundation",
  description: "Learn the Sanskrit alphabet and sound system.",
  difficulty: "beginner",
  estimatedTime: "30 minutes",
  prerequisites: [],
  steps: [
    {
      sutraId: "concept",
      title: "The Sanskrit Alphabet",
      commentary: "Sanskrit has 46 basic sounds organized systematically:\n\n**Vowels (@deva[स्वराः])** — 13 sounds\n**Consonants (@deva[व्यञ्जनानि])** — 33 sounds\n\nThe alphabet is called @deva[वर्णमाला] — \"garland of letters.\"",
    },
    {
      sutraId: "concept",
      title: "Vowels (स्वराः)",
      commentary: "Simple vowels come in short and long pairs:\n\n| Short | Long | Sound |\n|-------|------|-------|\n| @deva[अ] | @deva[आ] | a / ā |\n| @deva[इ] | @deva[ई] | i / ī |\n| @deva[उ] | @deva[ऊ] | u / ū |\n| @deva[ऋ] | @deva[ॠ] | ṛ / ṝ |\n| @deva[ऌ] | — | ḷ |\n\nCompound vowels (diphthongs):\n| Letter | Sound |\n|--------|-------|\n| @deva[ए] | e |\n| @deva[ऐ] | ai |\n| @deva[ओ] | o |\n| @deva[औ] | au |",
    },
    {
      sutraId: "concept",
      title: "Consonants: Stops (स्पर्शाः)",
      commentary: "Organized by mouth position and voicing:\n\n|  | Unvoiced | Unvoiced Aspirated | Voiced | Voiced Aspirated | Nasal |\n|--|----------|-------------------|--------|-----------------|-------|\n| Velar | @deva[क] ka | @deva[ख] kha | @deva[ग] ga | @deva[घ] gha | @deva[ङ] ṅa |\n| Palatal | @deva[च] ca | @deva[छ] cha | @deva[ज] ja | @deva[झ] jha | @deva[ञ] ña |\n| Retroflex | @deva[ट] ṭa | @deva[ठ] ṭha | @deva[ड] ḍa | @deva[ढ] ḍha | @deva[ण] ṇa |\n| Dental | @deva[त] ta | @deva[थ] tha | @deva[द] da | @deva[ध] dha | @deva[न] na |\n| Labial | @deva[प] pa | @deva[फ] pha | @deva[ब] ba | @deva[भ] bha | @deva[म] ma |",
    },
    {
      sutraId: "concept",
      title: "Other Consonants",
      commentary: "**Semivowels (@deva[अन्तःस्थाः])**\n@deva[य] ya, @deva[र] ra, @deva[ल] la, @deva[व] va\n\n**Sibilants (@deva[ऊष्माणः])**\n@deva[श] śa (palatal), @deva[ष] ṣa (retroflex), @deva[स] sa (dental)\n\n**Aspirate**\n@deva[ह] ha\n\n**Special signs**\n@deva[ं] anusvāra (nasal), @deva[ः] visarga (breath)",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You now know:\n- The 13 vowels (short/long pairs + diphthongs)\n- The 25 stop consonants (5×5 grid)\n- Semivowels, sibilants, and special signs\n\n**Next:** Simple sentences — putting sounds into words and words into meaning.",
    },
  ],
};

export const tingantaLatPath: LearningPath = {
  id: "tinganta-lat",
  title: "Present Tense",
  titleSanskrit: "लट्लकारः",
  label: "लट्",
  track: "grammar",
  category: "tinganta",
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
  label: "लोट्",
  track: "grammar",
  category: "tinganta",
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
  label: "लङ्",
  track: "grammar",
  category: "tinganta",
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
  label: "विधिलिङ्",
  track: "grammar",
  category: "tinganta",
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
  label: "गणाः",
  track: "grammar",
  category: "tinganta",
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
  label: "लुट्",
  track: "grammar",
  category: "tinganta",
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
  label: "लिट्",
  track: "grammar",
  category: "tinganta",
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
  label: "लुङ्",
  track: "grammar",
  category: "tinganta",
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
  label: "आशीर्लिङ्",
  track: "grammar",
  category: "tinganta",
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
  label: "मतुब्वतुबौ",
  track: "grammar",
  category: "taddhita",
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
  label: "त्वतलौ",
  track: "grammar",
  category: "taddhita",
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
  label: "अण्ठक्",
  track: "grammar",
  category: "taddhita",
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
  label: "प्रातिपदिकम्",
  track: "grammar",
  category: "subanta",
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
  label: "अकारान्तपुंनपुंसकम्",
  track: "grammar",
  category: "subanta",
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
  label: "आकारान्तस्त्री",
  track: "grammar",
  category: "subanta",
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
  label: "इकारोकारान्तम्",
  track: "grammar",
  category: "subanta",
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
  label: "हलन्तम्",
  track: "grammar",
  category: "subanta",
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
  label: "कारकम्",
  track: "grammar",
  category: "karaka",
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
  label: "समासः",
  track: "grammar",
  category: "samasa",
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
  label: "स्वरसन्धिः",
  track: "grammar",
  category: "sandhi",
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
  label: "विसर्गसन्धिः",
  track: "grammar",
  category: "sandhi",
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
  label: "व्यञ्जनसन्धिः",
  track: "grammar",
  category: "sandhi",
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

export const reading02SimpleSentencesPath: LearningPath = {
  id: "reading-02-simple-sentences",
  title: "Simple Sentences",
  titleSanskrit: "वाक्यानि",
  label: "वाक्यम्",
  track: "reading",
  category: "foundation",
  description: "Read your first Sanskrit sentences with present tense verbs.",
  difficulty: "beginner",
  estimatedTime: "25 minutes",
  prerequisites: ["reading-01-alphabet"],
  steps: [
    {
      sutraId: "concept",
      title: "Subject + Verb",
      commentary: "The simplest Sanskrit sentence has a subject and a verb:\n\n@deva[नरः गच्छति] — \"The man goes\"\n@deva[बालकः पठति] — \"The boy reads\"\n\nThe subject ends in @deva[-ः] (visarga). The verb ends in @deva[-ति].",
    },
    {
      sutraId: "concept",
      title: "Present Tense Endings",
      commentary: "For \"he/she/it\" actions, verbs end in @deva[-ति]:\n\n| Root | Meaning | Present |\n|------|---------|---------|\n| @deva[गम्] | go | @deva[गच्छति] |\n| @deva[पठ्] | read | @deva[पठति] |\n| @deva[वद्] | speak | @deva[वदति] |\n| @deva[खाद्] | eat | @deva[खादति] |\n| @deva[पश्] | see | @deva[पश्यति] |",
    },
    {
      sutraId: "concept",
      title: "Adding an Object",
      commentary: "Add an object with @deva[-म्] ending:\n\n@deva[नरः फलं खादति] — \"The man eats the fruit\"\n- @deva[नरः] = subject (the man)\n- @deva[फलम्] = object (the fruit)\n- @deva[खादति] = verb (eats)\n\n@deva[बालकः पुस्तकं पठति] — \"The boy reads the book\"",
    },
    {
      sutraId: "concept",
      title: "Word Order",
      commentary: "Sanskrit word order is flexible. These mean the same:\n\n@deva[नरः फलं खादति]\n@deva[फलं नरः खादति]\n@deva[खादति नरः फलम्]\n\nThe endings (not position) show who does what.",
    },
    {
      sutraId: "concept",
      title: "Practice Sentences",
      commentary: "Read these:\n\n1. @deva[देवः वदति] — \"The god speaks\"\n2. @deva[नरः जलं पिबति] — \"The man drinks water\"\n3. @deva[बालकः ग्रामं गच्छति] — \"The boy goes to the village\"\n4. @deva[गजः फलं खादति] — \"The elephant eats the fruit\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You can now read sentences with:\n- Subject (@deva[-ः] ending)\n- Object (@deva[-म्] ending)\n- Present tense verb (@deva[-ति] ending)\n\n**Next:** Your first reading passage!",
    },
  ],
};

export const reading03Practice1Path: LearningPath = {
  id: "reading-03-practice-1",
  title: "Reading Practice: Simple Sentences",
  titleSanskrit: "अभ्यासः",
  label: "अभ्यासः १",
  track: "reading",
  category: "foundation",
  description: "Apply what you've learned to read simple prose.",
  difficulty: "beginner",
  estimatedTime: "15 minutes",
  prerequisites: ["reading-02-simple-sentences"],
  steps: [
    {
      sutraId: "reading",
      title: "Pañcatantra Opening",
      commentary: "**Source:** Pañcatantra 1.intro.1\n\n@deva[अस्ति दक्षिणापथे महिलारोप्यं नाम नगरम्]\n\nParse this:\n- @deva[अस्ति] — \"there is\" (verb, present)\n- @deva[दक्षिणापथे] — \"in the southern region\" (locative)\n- @deva[महिलारोप्यं नाम] — \"named Mahilāropya\"\n- @deva[नगरम्] — \"a city\" (neuter nominative/accusative)\n\n**Translation:** \"In the southern region there is a city named Mahilāropya.\"",
    },
    {
      sutraId: "reading",
      title: "The King",
      commentary: "**Source:** Pañcatantra 1.intro.1\n\n@deva[तत्र अमरशक्तिः नाम राजा बभूव]\n\nParse this:\n- @deva[तत्र] — \"there\" (indeclinable)\n- @deva[अमरशक्तिः] — \"Amaraśakti\" (proper name, nominative)\n- @deva[नाम] — \"named\" (indeclinable)\n- @deva[राजा] — \"a king\" (nominative)\n- @deva[बभूव] — \"was/lived\" (past tense of @deva[भू])\n\n**Translation:** \"There lived a king named Amaraśakti.\"",
    },
    {
      sutraId: "concept",
      title: "Story Opening Pattern",
      commentary: "Notice the formula for starting stories in Sanskrit:\n\n1. @deva[अस्ति] + location + @deva[नाम] + noun — \"There is in [place] a [thing] named...\"\n2. @deva[तत्र] + name + @deva[नाम] + role + @deva[बभूव] — \"There lived [name], a [role]\"\n\nYou'll see this pattern in many Sanskrit tales.",
    },
    {
      sutraId: "reading",
      title: "A Simple Subhāṣita",
      commentary: "**Source:** Traditional\n\n@deva[विद्या ददाति विनयम्]\n\nParse:\n- @deva[विद्या] — \"learning\" (feminine nominative)\n- @deva[ददाति] — \"gives\" (present, 3rd singular)\n- @deva[विनयम्] — \"humility\" (accusative, the object)\n\n**Translation:** \"Learning gives humility.\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You've now read real Sanskrit! Key patterns:\n- Story openings with @deva[अस्ति...नाम]\n- Subject (@deva[-ः/-आ]) + Object (@deva[-म्]) + Verb (@deva[-ति])\n- Location in locative case (@deva[-ए])\n\n**Next:** We'll learn more verb forms to expand what you can read.",
    },
  ],
};

export const reading04MoreVerbsPath: LearningPath = {
  id: "reading-04-more-verbs",
  title: "More Present Tense",
  titleSanskrit: "लट्लकारः",
  label: "क्रियाः",
  track: "reading",
  category: "tinganta",
  description: "Learn all three persons and numbers for present tense verbs.",
  difficulty: "beginner",
  estimatedTime: "25 minutes",
  prerequisites: ["reading-03-practice-1"],
  steps: [
    {
      sutraId: "concept",
      title: "Person and Number",
      commentary: "Verbs change based on WHO is acting and HOW MANY:\n\n| Person | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| 3rd (he/she/it) | @deva[-ति] | @deva[-तः] | @deva[-न्ति] |\n| 2nd (you) | @deva[-सि] | @deva[-थः] | @deva[-थ] |\n| 1st (I/we) | @deva[-मि] | @deva[-वः] | @deva[-मः] |",
    },
    {
      sutraId: "concept",
      title: "Third Person (Most Common)",
      commentary: "You'll see third person most often in texts:\n\n| | Singular | Dual | Plural |\n|--|----------|------|--------|\n| @deva[गच्छ्] | @deva[गच्छति] | @deva[गच्छतः] | @deva[गच्छन्ति] |\n| | \"he goes\" | \"they two go\" | \"they go\" |",
    },
    {
      sutraId: "concept",
      title: "First and Second Person",
      commentary: "For dialogue and direct speech:\n\n**First person (I/we):**\n- @deva[गच्छामि] — \"I go\"\n- @deva[गच्छावः] — \"we two go\"\n- @deva[गच्छामः] — \"we go\"\n\n**Second person (you):**\n- @deva[गच्छसि] — \"you go\"\n- @deva[गच्छथः] — \"you two go\"\n- @deva[गच्छथ] — \"you (all) go\"",
    },
    {
      sutraId: "concept",
      title: "Common Verbs",
      commentary: "Master these high-frequency verbs:\n\n| Root | Meaning | He/She | They |\n|------|---------|--------|------|\n| @deva[गम्] | go | @deva[गच्छति] | @deva[गच्छन्ति] |\n| @deva[वद्] | speak | @deva[वदति] | @deva[वदन्ति] |\n| @deva[पठ्] | read | @deva[पठति] | @deva[पठन्ति] |\n| @deva[लिख्] | write | @deva[लिखति] | @deva[लिखन्ति] |\n| @deva[दृश्] | see | @deva[पश्यति] | @deva[पश्यन्ति] |\n| @deva[श्रु] | hear | @deva[शृणोति] | @deva[शृण्वन्ति] |",
    },
    {
      sutraId: "concept",
      title: "Practice Sentences",
      commentary: "1. @deva[बालकाः पठन्ति] — \"The boys read\"\n2. @deva[अहं गच्छामि] — \"I go\"\n3. @deva[त्वं पश्यसि] — \"You see\"\n4. @deva[वयं वदामः] — \"We speak\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You now know all present tense endings:\n- 3rd person: @deva[-ति/-तः/-न्ति]\n- 2nd person: @deva[-सि/-थः/-थ]\n- 1st person: @deva[-मि/-वः/-मः]\n\n**Next:** Nominative and accusative cases — the most essential noun forms.",
    },
  ],
};

export const reading05NomAccPath: LearningPath = {
  id: "reading-05-nom-acc",
  title: "Nominative & Accusative",
  titleSanskrit: "प्रथमाद्वितीये",
  label: "प्रथमा",
  track: "reading",
  category: "subanta",
  description: "Master the two most common cases — subject and object.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-04-more-verbs"],
  steps: [
    {
      sutraId: "concept",
      title: "The Two Essential Cases",
      commentary: "Most sentences need just two cases:\n- **Nominative** (@deva[प्रथमा]) — the subject, who acts\n- **Accusative** (@deva[द्वितीया]) — the object, what's acted upon\n\n@deva[नरः फलं खादति]\n- @deva[नरः] = nominative (the man — subject)\n- @deva[फलम्] = accusative (the fruit — object)",
    },
    {
      sutraId: "concept",
      title: "Masculine a-stems (देव type)",
      commentary: "| Case | Singular | Dual | Plural |\n|------|----------|------|--------|\n| Nom. | @deva[देवः] | @deva[देवौ] | @deva[देवाः] |\n| Acc. | @deva[देवम्] | @deva[देवौ] | @deva[देवान्] |\n\n**Pattern:** Nominative has @deva[-ः], accusative has @deva[-म्]",
    },
    {
      sutraId: "concept",
      title: "Neuter a-stems (फल type)",
      commentary: "Neuters use @deva[-म्] for BOTH nominative and accusative:\n\n| Case | Singular | Dual | Plural |\n|------|----------|------|--------|\n| Nom. | @deva[फलम्] | @deva[फले] | @deva[फलानि] |\n| Acc. | @deva[फलम्] | @deva[फले] | @deva[फलानि] |\n\nNeuter nominative = accusative (always!)",
    },
    {
      sutraId: "concept",
      title: "Feminine ā-stems (कन्या type)",
      commentary: "| Case | Singular | Dual | Plural |\n|------|----------|------|--------|\n| Nom. | @deva[कन्या] | @deva[कन्ये] | @deva[कन्याः] |\n| Acc. | @deva[कन्याम्] | @deva[कन्ये] | @deva[कन्याः] |\n\n**Pattern:** Singular accusative adds @deva[-म्] to the stem",
    },
    {
      sutraId: "concept",
      title: "Recognition Guide",
      commentary: "When reading, spot cases by endings:\n\n**Nominative clues:**\n- @deva[-ः] — masculine singular\n- @deva[-म्] — neuter singular\n- @deva[-आ] — feminine singular\n- @deva[-आः] — masculine/feminine plural\n\n**Accusative clues:**\n- @deva[-म्] — singular (all genders)\n- @deva[-न्] — masculine plural\n- @deva[-आनि] — neuter plural",
    },
    {
      sutraId: "concept",
      title: "Practice Parsing",
      commentary: "Parse these sentences:\n\n1. @deva[देवाः फलानि खादन्ति]\n   - @deva[देवाः] = nom. pl. (the gods — subject)\n   - @deva[फलानि] = acc. pl. (the fruits — object)\n   - \"The gods eat fruits\"\n\n2. @deva[कन्या पुस्तकं पठति]\n   - @deva[कन्या] = nom. sg. (the girl)\n   - @deva[पुस्तकम्] = acc. sg. (the book)\n   - \"The girl reads the book\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Two cases handle most sentences:\n- **Nominative** = subject (who does it)\n- **Accusative** = object (what's done to)\n\nKey markers:\n- Nom. sg. masc.: @deva[-ः]\n- Acc. sg.: @deva[-म्]\n- Neuter: nom. = acc.\n\n**Next:** Reading practice with what you've learned!",
    },
  ],
};

export const reading06Practice2Path: LearningPath = {
  id: "reading-06-practice-2",
  title: "Reading Practice: Narrative",
  titleSanskrit: "अभ्यासः",
  label: "अभ्यासः २",
  track: "reading",
  category: "foundation",
  description: "Read narrative prose with subjects, objects, and verbs.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-05-nom-acc"],
  steps: [
    {
      sutraId: "reading",
      title: "The Foolish Princes",
      commentary: "**Source:** Pañcatantra 1.intro.2\n\n@deva[तस्य त्रयः पुत्राः परमदुर्मेधसः बभूवुः]\n\nParse:\n- @deva[तस्य] — \"his\" (genitive — we'll learn this soon)\n- @deva[त्रयः] — \"three\" (nominative plural)\n- @deva[पुत्राः] — \"sons\" (nominative plural)\n- @deva[परमदुर्मेधसः] — \"extremely dull-witted\" (nominative plural)\n- @deva[बभूवुः] — \"were\" (past, plural)\n\n**Translation:** \"His three sons were extremely dull-witted.\"",
    },
    {
      sutraId: "reading",
      title: "The King Sees",
      commentary: "@deva[तान् दृष्ट्वा राजा चिन्तयामास]\n\nParse:\n- @deva[तान्] — \"them\" (accusative plural)\n- @deva[दृष्ट्वा] — \"having seen\" (absolutive — we'll learn this)\n- @deva[राजा] — \"the king\" (nominative)\n- @deva[चिन्तयामास] — \"reflected/thought\"\n\n**Translation:** \"Having seen them, the king reflected.\"",
    },
    {
      sutraId: "reading",
      title: "The Merchant Sets Out",
      commentary: "**Source:** Pañcatantra 1.1.1\n\n@deva[अस्ति मथुरायां वर्धमानो नाम वणिक्]\n\n- @deva[अस्ति] — \"there is\"\n- @deva[मथुरायाम्] — \"in Mathura\" (locative)\n- @deva[वर्धमानः] — \"Vardhamāna\" (nominative, name)\n- @deva[नाम] — \"named\"\n- @deva[वणिक्] — \"a merchant\" (nominative)\n\n**Translation:** \"In Mathura there is a merchant named Vardhamāna.\"",
    },
    {
      sutraId: "reading",
      title: "Taking Wealth",
      commentary: "@deva[स एकदा बहुधनं गृहीत्वा व्यापाराय प्रस्थितः]\n\n- @deva[सः] — \"he\" (nominative)\n- @deva[एकदा] — \"one day\"\n- @deva[बहुधनम्] — \"much wealth\" (accusative)\n- @deva[गृहीत्वा] — \"having taken\"\n- @deva[व्यापाराय] — \"for trade\" (dative — purpose)\n- @deva[प्रस्थितः] — \"set out\"\n\n**Translation:** \"One day, having taken much wealth, he set out for trade.\"",
    },
    {
      sutraId: "concept",
      title: "Patterns You're Seeing",
      commentary: "1. **Nominative plural** in @deva[-आः]: @deva[पुत्राः], @deva[देवाः]\n2. **Accusative plural** in @deva[-आन्]: @deva[तान्] (them)\n3. **Story formula**: @deva[अस्ति] + place + @deva[नाम] + character\n4. **Sequence words**: @deva[एकदा] (one day), @deva[तत्र] (there)",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You're reading real Pañcatantra prose! You can now:\n- Spot nominative subjects (@deva[-ः], @deva[-आः])\n- Spot accusative objects (@deva[-म्], @deva[-आन्])\n- Recognize story opening formulas\n- Follow basic narrative flow\n\n**Next:** Instrumental case — \"by\" or \"with\" something.",
    },
  ],
};

export const reading07InstrumentalPath: LearningPath = {
  id: "reading-07-instrumental",
  title: "Instrumental Case",
  titleSanskrit: "तृतीया",
  label: "तृतीया",
  track: "reading",
  category: "subanta",
  description: "Express \"by means of\" or \"with\" using the third case.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-06-practice-2"],
  steps: [
    {
      sutraId: "concept",
      title: "The Instrumental Case",
      commentary: "The instrumental (@deva[तृतीया]) expresses:\n- **Means/instrument**: \"by\" or \"with\"\n- **Agent** in passive: \"by whom\"\n- **Accompaniment**: \"together with\"\n\n@deva[हस्तेन लिखति] — \"writes **with** (his) hand\"",
    },
    {
      sutraId: "concept",
      title: "Instrumental Endings",
      commentary: "| Gender | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| Masc. (देव) | @deva[देवेन] | @deva[देवाभ्याम्] | @deva[देवैः] |\n| Neut. (फल) | @deva[फलेन] | @deva[फलाभ्याम्] | @deva[फलैः] |\n| Fem. (कन्या) | @deva[कन्यया] | @deva[कन्याभ्याम्] | @deva[कन्याभिः] |\n\n**Key markers:** @deva[-एन] (sg.), @deva[-आभ्याम्] (du.), @deva[-ऐः/-भिः] (pl.)",
    },
    {
      sutraId: "concept",
      title: "Meanings of Instrumental",
      commentary: "**1. Instrument/means:**\n- @deva[शस्त्रेण हन्ति] — \"kills with a weapon\"\n- @deva[वाचा वदति] — \"speaks with words\"\n\n**2. Cause:**\n- @deva[दुःखेन रोदिति] — \"cries from sorrow\"\n- @deva[भयेन पलायते] — \"flees from fear\"\n\n**3. Accompaniment (with सह or alone):**\n- @deva[पुत्रेण सह गच्छति] — \"goes with (his) son\"\n- @deva[मित्रैः आगच्छति] — \"comes with friends\"",
    },
    {
      sutraId: "concept",
      title: "Recognition",
      commentary: "When you see these endings, think \"by/with\":\n\n| Ending | Case |\n|--------|------|\n| @deva[-एन] | inst. sg. masc/neut |\n| @deva[-या] | inst. sg. fem |\n| @deva[-आभ्याम्] | inst. dual (all) |\n| @deva[-ऐः] | inst. pl. masc/neut |\n| @deva[-आभिः] | inst. pl. fem |",
    },
    {
      sutraId: "concept",
      title: "Practice Sentences",
      commentary: "1. @deva[नरः अश्वेन गच्छति]\n   - \"The man goes **by horse**\"\n\n2. @deva[बालकः पुस्तकेन पठति]\n   - \"The boy reads **with a book**\"\n\n3. @deva[राजा सैन्येन युध्यति]\n   - \"The king fights **with an army**\"\n\n4. @deva[कविः कलया रमते]\n   - \"The poet delights **in art**\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "The instrumental case (@deva[तृतीया]) shows:\n- The tool/means: @deva[हस्तेन] \"with hand\"\n- The cause: @deva[भयेन] \"from fear\"\n- Accompaniment: @deva[मित्रैः] \"with friends\"\n\nEndings: @deva[-एन] (sg.), @deva[-ऐः] (pl.)\n\n**Next:** Dative case — \"for\" or \"to\" someone.",
    },
  ],
};

export const reading08DativePath: LearningPath = {
  id: "reading-08-dative",
  title: "Dative Case",
  titleSanskrit: "चतुर्थी",
  label: "चतुर्थी",
  track: "reading",
  category: "subanta",
  description: "Express purpose and recipients with the fourth case.",
  difficulty: "beginner",
  estimatedTime: "15 minutes",
  prerequisites: ["reading-07-instrumental"],
  steps: [
    {
      sutraId: "concept",
      title: "The Dative Case",
      commentary: "The dative (@deva[चतुर्थी]) expresses:\n- **Recipient**: \"to\" someone\n- **Purpose**: \"for\" something\n- **Benefit**: \"for the sake of\"\n\n@deva[बालकाय ददाति] — \"gives **to** the boy\"",
    },
    {
      sutraId: "concept",
      title: "Dative Endings",
      commentary: "| Gender | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| Masc. (देव) | @deva[देवाय] | @deva[देवाभ्याम्] | @deva[देवेभ्यः] |\n| Neut. (फल) | @deva[फलाय] | @deva[फलाभ्याम्] | @deva[फलेभ्यः] |\n| Fem. (कन्या) | @deva[कन्यायै] | @deva[कन्याभ्याम्] | @deva[कन्याभ्यः] |\n\n**Key marker:** @deva[-आय] (sg. masc/neut), @deva[-एभ्यः] (pl.)",
    },
    {
      sutraId: "concept",
      title: "Meanings of Dative",
      commentary: "**1. Indirect object (recipient):**\n- @deva[गुरवे नमति] — \"bows to the teacher\"\n- @deva[देवाय फलं ददाति] — \"gives fruit to the god\"\n\n**2. Purpose:**\n- @deva[व्यापाराय गच्छति] — \"goes for trade\"\n- @deva[जलाय प्रयाति] — \"goes for water\"\n\n**3. Benefit:**\n- @deva[पुत्राय धनं रक्षति] — \"protects wealth for (his) son\"",
    },
    {
      sutraId: "concept",
      title: "Practice Sentences",
      commentary: "1. @deva[नरः देवाय पुष्पं यच्छति]\n   - \"The man offers a flower **to the god**\"\n\n2. @deva[राजा प्रजाभ्यः वदति]\n   - \"The king speaks **to the people**\"\n\n3. @deva[अध्ययनाय गच्छामि]\n   - \"I go **for study**\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "The dative case (@deva[चतुर्थी]):\n- Recipient: @deva[गुरवे] \"to the teacher\"\n- Purpose: @deva[व्यापाराय] \"for trade\"\n\nKey ending: @deva[-आय] (singular)\n\n**Next:** Reading practice with instrumental and dative!",
    },
  ],
};

export const reading09Practice3Path: LearningPath = {
  id: "reading-09-practice-3",
  title: "Reading Practice: Subhāṣitas",
  titleSanskrit: "सुभाषितम्",
  label: "अभ्यासः ३",
  track: "reading",
  category: "foundation",
  description: "Read wisdom verses using all four cases learned so far.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-08-dative"],
  steps: [
    {
      sutraId: "reading",
      title: "Learning Gives Humility",
      commentary: "**Source:** Traditional Subhāṣita\n\n@deva[विद्या ददाति विनयं विनयाद्याति पात्रताम्]\n\nParse:\n- @deva[विद्या] — \"learning\" (nom. — subject)\n- @deva[ददाति] — \"gives\" (present)\n- @deva[विनयम्] — \"humility\" (acc. — object)\n- @deva[विनयात्] — \"from humility\" (ablative — we'll learn this)\n- @deva[याति] — \"comes\"\n- @deva[पात्रताम्] — \"worthiness\" (acc.)\n\n**Translation:** \"Learning gives humility; from humility comes worthiness.\"",
    },
    {
      sutraId: "reading",
      title: "Continued Verse",
      commentary: "@deva[पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्]\n\nParse:\n- @deva[पात्रत्वात्] — \"from worthiness\" (ablative)\n- @deva[धनम्] — \"wealth\" (acc.)\n- @deva[आप्नोति] — \"obtains\"\n- @deva[धनात्] — \"from wealth\" (ablative)\n- @deva[धर्मम्] — \"dharma\" (acc.)\n- @deva[ततः] — \"from that\"\n- @deva[सुखम्] — \"happiness\" (acc.)\n\n**Translation:** \"From worthiness one obtains wealth; from wealth, dharma; from that, happiness.\"",
    },
    {
      sutraId: "concept",
      title: "The Chain of Causation",
      commentary: "This verse shows a causal chain using ablative (source):\n\nविद्या → विनय → पात्रता → धन → धर्म → सुख\n\nLearning → Humility → Worthiness → Wealth → Dharma → Happiness\n\nEach step flows from the previous using \"from X comes Y.\"",
    },
    {
      sutraId: "reading",
      title: "The Test of Friendship",
      commentary: "**Source:** Traditional Subhāṣita\n\n@deva[आपदि मित्रपरीक्षा]\n\n- @deva[आपदि] — \"in calamity\" (locative)\n- @deva[मित्रपरीक्षा] — \"test of a friend\" (compound, nominative)\n\n**Translation:** \"In calamity [is] the test of a friend.\"",
    },
    {
      sutraId: "reading",
      title: "More Tests",
      commentary: "@deva[शूरपरीक्षा रणाङ्गणे]\n\n- @deva[शूरपरीक्षा] — \"test of a hero\"\n- @deva[रणाङ्गणे] — \"on the battlefield\" (locative)\n\n**Translation:** \"The test of a hero [is] on the battlefield.\"",
    },
    {
      sutraId: "concept",
      title: "Nominal Sentences",
      commentary: "Notice: no verb in these sentences! Sanskrit often omits @deva[अस्ति] \"is\":\n\n@deva[आपदि मित्रपरीक्षा] = @deva[आपदि मित्रपरीक्षा अस्ति]\n\n\"In calamity is the test of a friend.\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You've read real subhāṣitas! Key patterns:\n- Ablative chains showing cause/source\n- Locative showing circumstances\n- Nominal sentences (implied \"is\")\n- Compound words (@deva[मित्रपरीक्षा] = मित्र + परीक्षा)\n\n**Next:** Past tense — reading about what happened.",
    },
  ],
};

export const reading10PastTensePath: LearningPath = {
  id: "reading-10-past-tense",
  title: "Past Tense (laṅ)",
  titleSanskrit: "लङ्लकारः",
  label: "लङ्",
  track: "reading",
  category: "tinganta",
  description: "Read about past events with the imperfect tense.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-09-practice-3"],
  steps: [
    {
      sutraId: "concept",
      title: "The Past Tense",
      commentary: "Sanskrit has several past tenses. The most common for narrative is @deva[लङ्] (laṅ), the imperfect.\n\n**Formation:** @deva[अ-] prefix + stem + endings\n\n@deva[गच्छति] \"goes\" → @deva[अगच्छत्] \"went\"",
    },
    {
      sutraId: "concept",
      title: "laṅ Endings",
      commentary: "| Person | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| 3rd | @deva[-त्] | @deva[-ताम्] | @deva[-न्] |\n| 2nd | @deva[-ः] | @deva[-तम्] | @deva[-त] |\n| 1st | @deva[-म्] | @deva[-व] | @deva[-म] |\n\nThird person is most common in stories.",
    },
    {
      sutraId: "concept",
      title: "Common Verbs in Past",
      commentary: "| Present | Past (3rd sg.) | Meaning |\n|---------|----------------|---------|\n| @deva[गच्छति] | @deva[अगच्छत्] | went |\n| @deva[वदति] | @deva[अवदत्] | said |\n| @deva[पश्यति] | @deva[अपश्यत्] | saw |\n| @deva[करोति] | @deva[अकरोत्] | did |\n| @deva[भवति] | @deva[अभवत्] | became |",
    },
    {
      sutraId: "concept",
      title: "The अ- Prefix (Augment)",
      commentary: "The @deva[अ-] prefix signals past tense:\n\n- @deva[गच्छति] → @deva[अगच्छत्]\n- @deva[पठति] → @deva[अपठत्]\n\nIf the verb starts with a vowel, the @deva[अ] combines:\n- @deva[इच्छति] → @deva[ऐच्छत्] (अ + इ → ऐ)",
    },
    {
      sutraId: "concept",
      title: "Reading Past Narrative",
      commentary: "When you see @deva[अ-] + verb stem + @deva[-त्], it's past tense:\n\n@deva[राजा अगच्छत्] — \"The king went\"\n@deva[नरः अपश्यत्] — \"The man saw\"\n@deva[बालकाः अपठन्] — \"The boys read\" (plural: @deva[-न्])",
    },
    {
      sutraId: "concept",
      title: "Practice Sentences",
      commentary: "1. @deva[स वनं अगच्छत्]\n   - \"He went to the forest\"\n\n2. @deva[राजा तं अपश्यत्]\n   - \"The king saw him\"\n\n3. @deva[ते अवदन्]\n   - \"They said\"\n\n4. @deva[अहं तत्र अगच्छम्]\n   - \"I went there\" (1st person: @deva[-म्])",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Past tense (@deva[लङ्]):\n- Add @deva[अ-] prefix\n- Change ending: @deva[-त्] (sg.), @deva[-न्] (pl.)\n- @deva[गच्छति] → @deva[अगच्छत्] \"went\"\n\n**Next:** Reading practice with past tense narrative!",
    },
  ],
};

export const reading11Practice4Path: LearningPath = {
  id: "reading-11-practice-4",
  title: "Reading Practice: Narrative",
  titleSanskrit: "कथा",
  label: "अभ्यासः ४",
  track: "reading",
  category: "foundation",
  description: "Read continuous narrative using past tense.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-10-past-tense"],
  steps: [
    {
      sutraId: "reading",
      title: "The Lion and Bull Story Begins",
      commentary: "**Source:** Pañcatantra 1.1\n\n@deva[तस्य गाडीं वहन्तौ द्वौ बलीवर्दौ बभूवतुः]\n\nParse:\n- @deva[तस्य] — \"his\" (genitive)\n- @deva[गाडीम्] — \"cart\" (accusative)\n- @deva[वहन्तौ] — \"pulling\" (present participle, dual)\n- @deva[द्वौ] — \"two\"\n- @deva[बलीवर्दौ] — \"oxen\" (nominative dual)\n- @deva[बभूवतुः] — \"were\" (perfect, dual)\n\n**Translation:** \"He had two oxen pulling his cart.\"",
    },
    {
      sutraId: "reading",
      title: "The Ox Falls",
      commentary: "@deva[तत्र एकः सञ्जीवको नाम पङ्के निमग्नः]\n\n- @deva[तत्र] — \"there\"\n- @deva[एकः] — \"one\" (nominative)\n- @deva[सञ्जीवकः] — \"Sañjīvaka\" (name)\n- @deva[नाम] — \"by name\"\n- @deva[पङ्के] — \"in the mud\" (locative)\n- @deva[निमग्नः] — \"sank\" (past participle)\n\n**Translation:** \"There one [ox] named Sañjīvaka sank in the mud.\"",
    },
    {
      sutraId: "reading",
      title: "The Merchant's Reaction",
      commentary: "@deva[वणिक् तं विहाय प्रस्थितः]\n\n- @deva[वणिक्] — \"the merchant\" (nominative)\n- @deva[तम्] — \"him\" (accusative)\n- @deva[विहाय] — \"having abandoned\" (absolutive)\n- @deva[प्रस्थितः] — \"departed\" (past participle)\n\n**Translation:** \"The merchant, having abandoned him, departed.\"",
    },
    {
      sutraId: "concept",
      title: "Participles Preview",
      commentary: "You're seeing past participles (@deva[निमग्नः], @deva[प्रस्थितः]) — verb forms used as adjectives:\n\n- @deva[निमग्न] — \"sunk\" (from @deva[नि-मज्ज्] \"to sink\")\n- @deva[प्रस्थित] — \"departed\" (from @deva[प्र-स्था] \"to set out\")\n\nThese agree with the noun they describe in gender/number/case.",
    },
    {
      sutraId: "reading",
      title: "The Ox Recovers",
      commentary: "@deva[सः च पुनः बलं प्राप्य उत्थितः]\n\n- @deva[सः] — \"he\"\n- @deva[च] — \"and\"\n- @deva[पुनः] — \"again\"\n- @deva[बलम्] — \"strength\" (accusative)\n- @deva[प्राप्य] — \"having obtained\" (absolutive)\n- @deva[उत्थितः] — \"rose\" (past participle)\n\n**Translation:** \"And he, having regained strength, rose.\"",
    },
    {
      sutraId: "concept",
      title: "Absolutives Preview",
      commentary: "The absolutive (@deva[-त्वा], @deva[-य]) means \"having done X\":\n\n- @deva[विहाय] — \"having abandoned\"\n- @deva[प्राप्य] — \"having obtained\"\n\nIt shows an action completed before the main action.",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You've read continuous Pañcatantra narrative! You've seen:\n- Past tense verbs (@deva[बभूवतुः])\n- Past participles (@deva[निमग्नः], @deva[प्रस्थितः])\n- Absolutives (@deva[विहाय], @deva[प्राप्य])\n- Narrative flow with @deva[तत्र], @deva[च], @deva[पुनः]\n\n**Next:** Genitive and ablative — possession and source.",
    },
  ],
};

export const reading12GenAblPath: LearningPath = {
  id: "reading-12-gen-abl",
  title: "Genitive & Ablative",
  titleSanskrit: "षष्ठीपञ्चम्यौ",
  label: "षष्ठी",
  track: "reading",
  category: "subanta",
  description: "Express possession and source with the fifth and sixth cases.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-11-practice-4"],
  steps: [
    {
      sutraId: "concept",
      title: "Genitive Case (षष्ठी)",
      commentary: "The genitive shows **possession** or **relation** — \"of\":\n\n@deva[रामस्य पुत्रः] — \"Rama's son\" / \"the son **of** Rama\"",
    },
    {
      sutraId: "concept",
      title: "Genitive Endings",
      commentary: "| Gender | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| Masc. (देव) | @deva[देवस्य] | @deva[देवयोः] | @deva[देवानाम्] |\n| Neut. (फल) | @deva[फलस्य] | @deva[फलयोः] | @deva[फलानाम्] |\n| Fem. (कन्या) | @deva[कन्यायाः] | @deva[कन्ययोः] | @deva[कन्यानाम्] |\n\n**Key marker:** @deva[-स्य] (sg. masc/neut), @deva[-आनाम्] (pl.)",
    },
    {
      sutraId: "concept",
      title: "Genitive Uses",
      commentary: "**1. Possession:**\n- @deva[नृपस्य गृहम्] — \"the king's house\"\n- @deva[वनस्य मध्ये] — \"in the middle of the forest\"\n\n**2. Partitive:**\n- @deva[तेषां एकः] — \"one of them\"\n- @deva[सर्वेषां श्रेष्ठः] — \"best of all\"",
    },
    {
      sutraId: "concept",
      title: "Ablative Case (पञ्चमी)",
      commentary: "The ablative shows **source**, **separation**, or **cause** — \"from\":\n\n@deva[ग्रामात् आगच्छति] — \"comes **from** the village\"",
    },
    {
      sutraId: "concept",
      title: "Ablative Endings",
      commentary: "| Gender | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| Masc. (देव) | @deva[देवात्] | @deva[देवाभ्याम्] | @deva[देवेभ्यः] |\n| Neut. (फल) | @deva[फलात्] | @deva[फलाभ्याम्] | @deva[फलेभ्यः] |\n| Fem. (कन्या) | @deva[कन्यायाः] | @deva[कन्याभ्याम्] | @deva[कन्याभ्यः] |\n\n**Key marker:** @deva[-आत्] (sg. masc/neut)",
    },
    {
      sutraId: "concept",
      title: "Ablative Uses",
      commentary: "**1. Source/Origin:**\n- @deva[नगरात् आगच्छति] — \"comes from the city\"\n- @deva[वृक्षात् पतति] — \"falls from the tree\"\n\n**2. Cause:**\n- @deva[भयात् पलायते] — \"flees from fear\"\n- @deva[दुःखात् रोदिति] — \"cries from sorrow\"\n\n**3. Comparison:**\n- @deva[रामात् बलवान्] — \"stronger than Rama\"",
    },
    {
      sutraId: "concept",
      title: "Genitive vs Ablative",
      commentary: "| Genitive (षष्ठी) | Ablative (पञ्चमी) |\n|------------------|-------------------|\n| \"of\" — relation | \"from\" — source |\n| @deva[राजस्य] \"of the king\" | @deva[राजात्] \"from the king\" |\n| @deva[-स्य] ending | @deva[-आत्] ending |",
    },
    {
      sutraId: "concept",
      title: "Practice",
      commentary: "1. @deva[तस्य पुत्रः वनं गच्छति]\n   - \"**His** son goes to the forest\"\n\n2. @deva[ग्रामात् नगरं गच्छति]\n   - \"Goes **from** village to city\"\n\n3. @deva[विद्यायाः फलं सुखम्]\n   - \"The fruit **of** learning is happiness\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Two related cases:\n- **Genitive** (@deva[षष्ठी]): \"of\" — @deva[-स्य]\n- **Ablative** (@deva[पञ्चमी]): \"from\" — @deva[-आत्]\n\n**Next:** Locative case — where things happen.",
    },
  ],
};

export const reading13LocativePath: LearningPath = {
  id: "reading-13-locative",
  title: "Locative Case",
  titleSanskrit: "सप्तमी",
  label: "सप्तमी",
  track: "reading",
  category: "subanta",
  description: "Express location and time with the seventh case.",
  difficulty: "beginner",
  estimatedTime: "15 minutes",
  prerequisites: ["reading-12-gen-abl"],
  steps: [
    {
      sutraId: "concept",
      title: "The Locative Case",
      commentary: "The locative (@deva[सप्तमी]) shows **where** or **when**:\n\n@deva[गृहे वसति] — \"lives **in** the house\"\n@deva[प्रातः काले] — \"**at** morning time\"",
    },
    {
      sutraId: "concept",
      title: "Locative Endings",
      commentary: "| Gender | Singular | Dual | Plural |\n|--------|----------|------|--------|\n| Masc. (देव) | @deva[देवे] | @deva[देवयोः] | @deva[देवेषु] |\n| Neut. (फल) | @deva[फले] | @deva[फलयोः] | @deva[फलेषु] |\n| Fem. (कन्या) | @deva[कन्यायाम्] | @deva[कन्ययोः] | @deva[कन्यासु] |\n\n**Key markers:** @deva[-ए] (sg. masc/neut), @deva[-एषु/-आसु] (pl.)",
    },
    {
      sutraId: "concept",
      title: "Locative Uses",
      commentary: "**1. Place:**\n- @deva[वने गच्छति] — \"goes in the forest\"\n- @deva[नगरे वसति] — \"lives in the city\"\n\n**2. Time:**\n- @deva[रात्रौ] — \"at night\"\n- @deva[वर्षे] — \"in a year\"\n\n**3. Circumstance:**\n- @deva[युद्धे] — \"in battle\"\n- @deva[आपदि] — \"in calamity\"",
    },
    {
      sutraId: "concept",
      title: "All Seven Cases Summary",
      commentary: "| Case | Name | Meaning | Marker |\n|------|------|---------|--------|\n| 1st | @deva[प्रथमा] | subject | @deva[-ः] |\n| 2nd | @deva[द्वितीया] | object | @deva[-म्] |\n| 3rd | @deva[तृतीया] | by/with | @deva[-एन] |\n| 4th | @deva[चतुर्थी] | to/for | @deva[-आय] |\n| 5th | @deva[पञ्चमी] | from | @deva[-आत्] |\n| 6th | @deva[षष्ठी] | of | @deva[-स्य] |\n| 7th | @deva[सप्तमी] | in/on/at | @deva[-ए] |",
    },
    {
      sutraId: "concept",
      title: "Practice",
      commentary: "1. @deva[बालकः वृक्षे तिष्ठति]\n   - \"The boy stands **on** the tree\"\n\n2. @deva[ग्रामेषु जनाः वसन्ति]\n   - \"People live **in** the villages\"\n\n3. @deva[तस्मिन् काले राजा आसीत्]\n   - \"**At** that time there was a king\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You now know all seven cases!\n\nThe locative (@deva[सप्तमी]):\n- Location: @deva[गृहे] \"in the house\"\n- Time: @deva[रात्रौ] \"at night\"\n- Endings: @deva[-ए] (sg.), @deva[-एषु] (pl.)\n\n**Next:** Basic vowel sandhi — how sounds change at word boundaries.",
    },
  ],
};

export const reading14VowelSandhiPath: LearningPath = {
  id: "reading-14-vowel-sandhi",
  title: "Vowel Sandhi",
  titleSanskrit: "स्वरसन्धिः",
  label: "स्वरसन्धिः",
  track: "reading",
  category: "sandhi",
  description: "Understand how vowels merge at word boundaries.",
  difficulty: "beginner",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-13-locative"],
  steps: [
    {
      sutraId: "concept",
      title: "What is Sandhi?",
      commentary: "When Sanskrit words come together, their sounds often merge. This is **sandhi** (@deva[सन्धि] \"joining\").\n\n@deva[च + अपि] → @deva[चापि] (a + a → ā)\n@deva[न + इति] → @deva[नेति] (a + i → e)",
    },
    {
      sutraId: "concept",
      title: "Similar Vowels Merge",
      commentary: "When two similar vowels meet, they become one long vowel:\n\n| Meeting | Result | Example |\n|---------|--------|---------|\n| a + a | ā | @deva[न अस्ति] → @deva[नास्ति] |\n| i + i | ī | @deva[गच्छति इति] → @deva[गच्छतीति] |\n| u + u | ū | @deva[साधु उक्तम्] → @deva[साधूक्तम्] |",
    },
    {
      sutraId: "concept",
      title: "Dissimilar Vowels: Guṇa",
      commentary: "When @deva[अ/आ] meets @deva[इ/ई], @deva[उ/ऊ], or @deva[ऋ], they form guṇa:\n\n| Meeting | Result | Example |\n|---------|--------|---------|\n| a + i/ī | e | @deva[च इति] → @deva[चेति] |\n| a + u/ū | o | @deva[न उचितम्] → @deva[नोचितम्] |\n| a + ṛ | ar | @deva[महा ऋषिः] → @deva[महर्षिः] |",
    },
    {
      sutraId: "concept",
      title: "Dissimilar Vowels: Vṛddhi",
      commentary: "When @deva[आ] meets @deva[ए/ऐ] or @deva[ओ/औ]:\n\n| Meeting | Result | Example |\n|---------|--------|---------|\n| ā + e | ai | @deva[सदा एव] → @deva[सदैव] |\n| ā + o | au | @deva[महा ओजस्] → @deva[महौजस्] |",
    },
    {
      sutraId: "concept",
      title: "i/u Become Semivowels",
      commentary: "When @deva[इ/ई] or @deva[उ/ऊ] come before a different vowel:\n\n| Meeting | Result | Example |\n|---------|--------|---------|\n| i + a | ya | @deva[इति अपि] → @deva[इत्यपि] |\n| u + a | va | @deva[मधु अस्ति] → @deva[मध्वस्ति] |\n\n@deva[इ] → @deva[य्], @deva[उ] → @deva[व्]",
    },
    {
      sutraId: "concept",
      title: "Reading Through Sandhi",
      commentary: "When reading, mentally split compounds:\n\n| Written | Split | Meaning |\n|---------|-------|---------|\n| @deva[नास्ति] | @deva[न अस्ति] | \"is not\" |\n| @deva[चेति] | @deva[च इति] | \"and thus\" |\n| @deva[तत्रैव] | @deva[तत्र एव] | \"right there\" |\n| @deva[इत्युक्त्वा] | @deva[इति उक्त्वा] | \"having said thus\" |",
    },
    {
      sutraId: "concept",
      title: "Common Sandhi Patterns",
      commentary: "Memorize these frequent combinations:\n\n| Pattern | Example |\n|---------|---------|\n| @deva[च + अपि] → @deva[चापि] | \"and also\" |\n| @deva[न + अस्ति] → @deva[नास्ति] | \"is not\" |\n| @deva[इति + उक्तम्] → @deva[इत्युक्तम्] | \"thus said\" |\n| @deva[तत्र + एव] → @deva[तत्रैव] | \"right there\" |",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Vowel sandhi rules:\n1. **Same vowel** → long: a+a=ā, i+i=ī\n2. **a + i/u** → guṇa: e, o\n3. **ā + e/o** → vṛddhi: ai, au\n4. **i/u + vowel** → y/v + vowel\n\n**Next:** Reading practice with sandhi!",
    },
  ],
};

export const reading15Practice5Path: LearningPath = {
  id: "reading-15-practice-5",
  title: "Reading Practice: Verses",
  titleSanskrit: "पद्यानि",
  label: "अभ्यासः ५",
  track: "reading",
  category: "foundation",
  description: "Read Sanskrit verses, splitting sandhi as you go.",
  difficulty: "intermediate",
  estimatedTime: "25 minutes",
  prerequisites: ["reading-14-vowel-sandhi"],
  steps: [
    {
      sutraId: "reading",
      title: "Time Devours All",
      commentary: "**Source:** Traditional Subhāṣita\n\n@deva[कालः पचति भूतानि कालः संहरते प्रजाः]\n\nSplit:\n- @deva[कालः पचति भूतानि] — no sandhi\n- @deva[कालः संहरते प्रजाः] — no sandhi\n\nParse:\n- @deva[कालः] — \"Time\" (nom.)\n- @deva[पचति] — \"cooks/ripens\" (present)\n- @deva[भूतानि] — \"beings\" (acc. pl. neut.)\n- @deva[संहरते] — \"gathers up\" (middle voice)\n- @deva[प्रजाः] — \"creatures\" (acc. pl.)\n\n**Translation:** \"Time cooks beings; Time gathers up creatures.\"",
    },
    {
      sutraId: "reading",
      title: "Time Never Sleeps",
      commentary: "@deva[कालः सुप्तेषु जागर्ति कालो हि दुरतिक्रमः]\n\nSplit:\n- @deva[कालो हि] = @deva[कालः हि] (visarga sandhi — we'll learn this)\n- @deva[दुरतिक्रमः] = @deva[दुः + अतिक्रमः] (compound)\n\nParse:\n- @deva[सुप्तेषु] — \"while [beings are] asleep\" (loc. pl.)\n- @deva[जागर्ति] — \"stays awake\"\n- @deva[हि] — \"indeed\"\n- @deva[दुरतिक्रमः] — \"hard to cross over\"\n\n**Translation:** \"Time stays awake while [all] sleep; Time indeed is hard to overcome.\"",
    },
    {
      sutraId: "concept",
      title: "Locative Absolute",
      commentary: "@deva[सुप्तेषु] is a **locative absolute** — \"while X-ing\":\n\n@deva[सुप्तेषु जागर्ति] = \"while [they are] sleeping, [Time] stays awake\"\n\nThe locative can express simultaneous action.",
    },
    {
      sutraId: "reading",
      title: "Truth and Kindness",
      commentary: "**Source:** Manusmṛti\n\n@deva[सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्]\n\nSplit:\n- @deva[सत्यमप्रियम्] = @deva[सत्यम् अप्रियम्] (a + a → ā)\n\nParse:\n- @deva[सत्यम्] — \"truth\" (acc.)\n- @deva[ब्रूयात्] — \"one should speak\" (optative)\n- @deva[प्रियम्] — \"pleasant\" (acc.)\n- @deva[अप्रियम्] — \"unpleasant\"\n\n**Translation:** \"One should speak truth; one should speak pleasantly; one should not speak truth that is unpleasant.\"",
    },
    {
      sutraId: "reading",
      title: "Continued",
      commentary: "@deva[प्रियं च नानृतं ब्रूयात् एष धर्मः सनातनः]\n\nSplit:\n- @deva[नानृतम्] = @deva[न अनृतम्] (a + a → ā)\n\nParse:\n- @deva[प्रियम्] — \"pleasant\"\n- @deva[च] — \"and\"\n- @deva[अनृतम्] — \"falsehood\"\n- @deva[एषः] — \"this\"\n- @deva[धर्मः] — \"dharma\"\n- @deva[सनातनः] — \"eternal\"\n\n**Translation:** \"Nor should one speak pleasant falsehood — this is the eternal dharma.\"",
    },
    {
      sutraId: "concept",
      title: "The Optative Mood",
      commentary: "@deva[ब्रूयात्] \"one should speak\" is the **optative** — expressing what ought to be done:\n\n- @deva[गच्छेत्] — \"one should go\"\n- @deva[वदेत्] — \"one should speak\"\n- @deva[कुर्यात्] — \"one should do\"\n\nWe'll learn this fully later.",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You've read verses with:\n- Sandhi splitting (@deva[नानृतम्] = @deva[न अनृतम्])\n- Locative absolute (@deva[सुप्तेषु])\n- Optative mood (@deva[ब्रूयात्])\n- Compounds (@deva[दुरतिक्रमः])\n\n**Next:** Simple compounds — tatpuruṣa and more.",
    },
  ],
};

export const reading16CompoundsPath: LearningPath = {
  id: "reading-16-compounds",
  title: "Simple Compounds",
  titleSanskrit: "समासः",
  label: "समासः",
  track: "reading",
  category: "samasa",
  description: "Recognize and split common compound types.",
  difficulty: "intermediate",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-15-practice-5"],
  steps: [
    {
      sutraId: "concept",
      title: "Why Compounds?",
      commentary: "Sanskrit loves compounds. Instead of @deva[राजस्य पुत्रः] \"the king's son,\" Sanskrit often writes @deva[राजपुत्रः] — one word.\n\nRecognizing compounds is essential for reading fluency.",
    },
    {
      sutraId: "concept",
      title: "Tatpuruṣa: \"Of/For/From\" Compounds",
      commentary: "The most common type. The first word modifies the second:\n\n| Compound | Split | Meaning |\n|----------|-------|---------|\n| @deva[राजपुत्रः] | @deva[राजस्य पुत्रः] | \"king's son\" |\n| @deva[ग्रामगमनम्] | @deva[ग्रामं गमनम्] | \"going to village\" |\n| @deva[विद्याधनम्] | @deva[विद्यायाः धनम्] | \"wealth of learning\" |\n\nThe case relationship is hidden inside.",
    },
    {
      sutraId: "concept",
      title: "Recognizing Tatpuruṣa",
      commentary: "The **last member** determines:\n- Gender and number\n- The \"head\" meaning\n\n@deva[राजपुत्रः] — masculine because @deva[पुत्र] is masculine\n@deva[राजपुत्री] — feminine, \"king's daughter\"",
    },
    {
      sutraId: "concept",
      title: "Karmadhāraya: Adjective + Noun",
      commentary: "When an adjective combines with a noun:\n\n| Compound | Split | Meaning |\n|----------|-------|---------|\n| @deva[महाराजः] | @deva[महान् राजा] | \"great king\" |\n| @deva[नीलकमलम्] | @deva[नीलं कमलम्] | \"blue lotus\" |\n| @deva[सज्जनः] | @deva[सत् जनः] | \"good person\" |\n\nBoth parts refer to the same thing.",
    },
    {
      sutraId: "concept",
      title: "Dvandva: \"And\" Compounds",
      commentary: "Two or more items joined with \"and\":\n\n| Compound | Split | Meaning |\n|----------|-------|---------|\n| @deva[रामलक्ष्मणौ] | @deva[रामः च लक्ष्मणः च] | \"Rama and Lakṣmaṇa\" |\n| @deva[सुखदुःखे] | @deva[सुखं च दुःखं च] | \"pleasure and pain\" |\n| @deva[पाणिपादम्] | @deva[पाणी च पादौ च] | \"hands and feet\" |\n\nThe compound takes dual/plural based on count.",
    },
    {
      sutraId: "concept",
      title: "Bahuvrīhi: Possessive Compounds",
      commentary: "Describes something by what it HAS. The compound is an adjective:\n\n| Compound | Meaning | Describes |\n|----------|---------|-----------|\n| @deva[महाबाहुः] | \"having great arms\" | a person |\n| @deva[चक्रपाणिः] | \"having a discus in hand\" | Viṣṇu |\n| @deva[पीताम्बरः] | \"having yellow garments\" | Viṣṇu/Kṛṣṇa |\n\nThe compound doesn't mean \"great arm\" but \"one with great arms.\"",
    },
    {
      sutraId: "concept",
      title: "Splitting Practice",
      commentary: "Split these compounds:\n\n1. @deva[वनगजः] = @deva[वनस्य गजः] \"forest elephant\"\n2. @deva[पुष्पवृष्टिः] = @deva[पुष्पाणां वृष्टिः] \"rain of flowers\"\n3. @deva[दीर्घबाहुः] = \"having long arms\" (bahuvrīhi)\n4. @deva[धनधान्यम्] = @deva[धनं च धान्यं च] \"wealth and grain\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Four common compound types:\n1. **Tatpuruṣa**: case relationship (@deva[राजपुत्रः])\n2. **Karmadhāraya**: adjective + noun (@deva[महाराजः])\n3. **Dvandva**: X and Y (@deva[सुखदुःखे])\n4. **Bahuvrīhi**: \"having X\" (@deva[महाबाहुः])\n\n**Next:** Reading Meghadūta with complex compounds!",
    },
  ],
};

export const reading17Practice6Path: LearningPath = {
  id: "reading-17-practice-6",
  title: "Reading Practice: Kāvya",
  titleSanskrit: "काव्यम्",
  label: "अभ्यासः ६",
  track: "reading",
  category: "foundation",
  description: "Read verses from Kālidāsa's Meghadūta.",
  difficulty: "intermediate",
  estimatedTime: "25 minutes",
  prerequisites: ["reading-16-compounds"],
  steps: [
    {
      sutraId: "reading",
      title: "The Exiled Yakṣa",
      commentary: "**Source:** Meghadūta 1.1\n\n@deva[कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः]\n\nSplit the compounds:\n- @deva[कश्चित्] — \"a certain\" (indefinite pronoun)\n- @deva[कान्ताविरहगुरुणा] = @deva[कान्ता-विरह-गुरुणा]\n  - @deva[कान्ता] — \"beloved\"\n  - @deva[विरह] — \"separation\"\n  - @deva[गुरुणा] — \"by heaviness\" (inst.)\n- @deva[स्वाधिकारात्] = @deva[स्व-अधिकारात्] — \"from his own duty\"\n- @deva[प्रमत्तः] — \"negligent\" (past participle)\n\n**Translation:** \"A certain [yakṣa], negligent of his duties, weighed down by separation from his beloved...\"",
    },
    {
      sutraId: "concept",
      title: "Bahuvrīhi in Action",
      commentary: "@deva[कान्ताविरहगुरुणा] is a bahuvrīhi compound:\n\n\"heavy with separation from beloved\" — describes the yakṣa, not the heaviness itself.\n\nIt answers: \"What kind of yakṣa?\" → \"One heavy with separation.\"",
    },
    {
      sutraId: "reading",
      title: "The Curse",
      commentary: "@deva[शापेनास्तंगमितमहिमा वर्षभोग्येण भर्तुः]\n\nSplit:\n- @deva[शापेन] — \"by a curse\" (inst.)\n- @deva[अस्तंगमितमहिमा] = @deva[अस्तंगमित-महिमा]\n  - \"eclipsed-glory\" (bahuvrīhi: \"whose glory was eclipsed\")\n- @deva[वर्षभोग्येण] = @deva[वर्ष-भोग्येण]\n  - \"to-be-experienced-for-a-year\" (duration)\n- @deva[भर्तुः] — \"of/from the master\" (gen./abl.)\n\n**Translation:** \"...his glory eclipsed by a curse from his master, [lasting] a year...\"",
    },
    {
      sutraId: "reading",
      title: "His Dwelling",
      commentary: "@deva[यक्षश्चक्रे जनकतनयास्नानपुण्योदकेषु]\n\nSplit:\n- @deva[यक्षः] — \"the yakṣa\" (nom.)\n- @deva[चक्रे] — \"made\" (perfect middle)\n- @deva[जनकतनयास्नानपुण्योदकेषु] — a long compound!\n  - @deva[जनक-तनया] — \"Janaka's daughter\" (= Sītā)\n  - @deva[स्नान] — \"bathing\"\n  - @deva[पुण्य] — \"holy/purified\"\n  - @deva[उदकेषु] — \"in waters\" (loc. pl.)\n\n**Translation:** \"...the yakṣa made [his dwelling] in waters sanctified by Sītā's bathing...\"",
    },
    {
      sutraId: "reading",
      title: "The Trees",
      commentary: "@deva[स्निग्धच्छायातरुषु वसतिं रामगिर्याश्रमेषु]\n\nSplit:\n- @deva[स्निग्धच्छायातरुषु] = @deva[स्निग्ध-छाया-तरुषु]\n  - @deva[स्निग्ध] — \"cool/pleasant\"\n  - @deva[छाया] — \"shade\"\n  - @deva[तरुषु] — \"among trees\" (loc. pl.)\n- @deva[वसतिम्] — \"dwelling\" (acc.)\n- @deva[रामगिर्याश्रमेषु] = @deva[रामगिरि-आश्रमेषु]\n  - \"in the hermitages of Rāmagiri\"\n\n**Translation:** \"...beneath trees of cool shade, in the hermitages of Rāmagiri.\"",
    },
    {
      sutraId: "concept",
      title: "The Full Verse",
      commentary: "Putting it together:\n\n> A certain yakṣa, negligent of his duties due to the weight of separation from his beloved, his glory eclipsed by a year-long curse from his master, made his dwelling in the hermitages of Rāmagiri — where the waters are sanctified by Sītā's bathing, beneath trees of cool shade.",
    },
    {
      sutraId: "concept",
      title: "Compound-Heavy Style",
      commentary: "Kāvya poetry uses **long compounds** for:\n- Compression (one word = many relationships)\n- Sound beauty (smooth flow)\n- Multiple meanings (puns)\n\nWith practice, you'll split these naturally.",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "You've read real Meghadūta! Key skills:\n- Splitting long compounds\n- Recognizing bahuvrīhi (\"whose X is Y\")\n- Following poetic word order\n- Parsing instrumental cause (@deva[शापेन])\n\n**Next:** Past participles — verbal adjectives.",
    },
  ],
};

export const reading18ParticiplesPath: LearningPath = {
  id: "reading-18-participles",
  title: "Participles",
  titleSanskrit: "कृदन्तम्",
  label: "कृदन्तम्",
  track: "reading",
  category: "kridanta",
  description: "Verbal adjectives that describe actions completed or ongoing.",
  difficulty: "intermediate",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-17-practice-6"],
  steps: [
    {
      sutraId: "concept",
      title: "What Are Participles?",
      commentary: "Participles are **verbs used as adjectives**. They describe nouns by their action:\n\n@deva[गतः नरः] — \"the man **who went**\" / \"the **gone** man\"\n@deva[पठन् बालकः] — \"the boy **who is reading**\" / \"the **reading** boy\"",
    },
    {
      sutraId: "concept",
      title: "Past Passive Participle (kta)",
      commentary: "The @deva[क्त] suffix creates \"was X-ed\" or \"having X-ed\":\n\n| Root | Participle | Meaning |\n|------|------------|---------|\n| @deva[गम्] | @deva[गत] | gone |\n| @deva[कृ] | @deva[कृत] | done, made |\n| @deva[उक्त] | @deva[वच्] | said, spoken |\n| @deva[दृश्] | @deva[दृष्ट] | seen |\n| @deva[श्रु] | @deva[श्रुत] | heard |\n\nThese decline like @deva[देव] (masc.), @deva[फल] (neut.), @deva[कन्या] (fem.).",
    },
    {
      sutraId: "concept",
      title: "Using kta Participles",
      commentary: "**As adjectives:**\n- @deva[कृतं कर्म] — \"done work\"\n- @deva[गता रात्रिः] — \"the gone night\" / \"the night that passed\"\n\n**As perfect tense:**\n- @deva[स गतः] — \"he went\" / \"he has gone\"\n- @deva[तत् कृतम्] — \"that was done\"",
    },
    {
      sutraId: "concept",
      title: "Present Active Participle (śatṛ)",
      commentary: "The @deva[शतृ] suffix creates \"-ing\" (active):\n\n| Root | Participle | Meaning |\n|------|------------|---------|\n| @deva[गम्] | @deva[गच्छत्] | going |\n| @deva[पठ्] | @deva[पठत्] | reading |\n| @deva[खाद्] | @deva[खादत्] | eating |\n| @deva[वद्] | @deva[वदत्] | speaking |\n\nStem ends in @deva[-त्]; declines like @deva[महत्].",
    },
    {
      sutraId: "concept",
      title: "śatṛ Forms",
      commentary: "| Case | Masculine | Neuter |\n|------|-----------|--------|\n| Nom. sg. | @deva[गच्छन्] | @deva[गच्छत्] |\n| Nom. pl. | @deva[गच्छन्तः] | @deva[गच्छन्ति] |\n| Acc. sg. | @deva[गच्छन्तम्] | @deva[गच्छत्] |\n\n**Example:** @deva[गच्छन् नरः पश्यति] — \"The going man sees\" / \"The man, going, sees\"",
    },
    {
      sutraId: "concept",
      title: "Absolutive (ktvā / ya)",
      commentary: "\"Having done X, [then] Y\":\n\n| Suffix | After | Example |\n|--------|-------|---------|\n| @deva[-त्वा] | simple root | @deva[गत्वा] \"having gone\" |\n| @deva[-य] | prefixed root | @deva[आगम्य] \"having come\" |\n\n@deva[भुक्त्वा गच्छति] — \"Having eaten, he goes\"\n@deva[आगम्य वदति] — \"Having come, he speaks\"",
    },
    {
      sutraId: "concept",
      title: "Participles in Reading",
      commentary: "Participles are everywhere in Sanskrit prose:\n\n@deva[स तं दृष्ट्वा उक्तवान्] — \"He, **having seen** him, **said**\"\n\nMultiple participles can chain:\n@deva[आगत्य उपविश्य भुक्त्वा गतः] — \"**Having come**, **having sat**, **having eaten**, he went\"",
    },
    {
      sutraId: "concept",
      title: "Practice",
      commentary: "Parse these:\n\n1. @deva[पठन् बालकः हसति]\n   - \"The reading boy laughs\"\n\n2. @deva[कृतं कार्यम्]\n   - \"The done task\" / \"The task is done\"\n\n3. @deva[गत्वा आगच्छति]\n   - \"Having gone, he comes [back]\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Three key participles:\n1. **kta** (@deva[गत]): past passive, \"X-ed\"\n2. **śatṛ** (@deva[गच्छत्]): present active, \"-ing\"\n3. **ktvā** (@deva[गत्वा]): absolutive, \"having X-ed\"\n\n**Next:** Visarga sandhi — the other common sound change.",
    },
  ],
};

export const reading19VisargaSandhiPath: LearningPath = {
  id: "reading-19-visarga-sandhi",
  title: "Visarga Sandhi",
  titleSanskrit: "विसर्गसन्धिः",
  label: "विसर्गः",
  track: "reading",
  category: "sandhi",
  description: "How the visarga changes before different sounds.",
  difficulty: "intermediate",
  estimatedTime: "20 minutes",
  prerequisites: ["reading-18-participles"],
  steps: [
    {
      sutraId: "concept",
      title: "The Visarga (ः)",
      commentary: "The visarga @deva[ः] is a breath sound at word end. It changes based on what follows.\n\n@deva[नरः गच्छति] — visarga stays\n@deva[नरो वदति] — visarga → @deva[ओ]",
    },
    {
      sutraId: "concept",
      title: "Visarga Before Vowels",
      commentary: "Before @deva[अ], visarga often disappears and @deva[अ] lengthens:\n\n| Before | Change | Example |\n|--------|--------|---------|\n| @deva[अ] | @deva[ः अ] → @deva[ो ऽ] | @deva[नरः अस्ति] → @deva[नरोऽस्ति] |\n\nThe @deva[ऽ] (avagraha) shows a dropped @deva[अ].",
    },
    {
      sutraId: "concept",
      title: "Visarga Before Voiced Sounds",
      commentary: "Before voiced consonants and vowels (except @deva[अ]):\n\n| Before | Change | Example |\n|--------|--------|---------|\n| Voiced cons. | @deva[ः] → @deva[ओ/र्] | @deva[देवः ददाति] → @deva[देवो ददाति] |\n| @deva[आ, इ, उ...] | @deva[ः] → @deva[र्] | @deva[पुनः आगच्छति] → @deva[पुनरागच्छति] |",
    },
    {
      sutraId: "concept",
      title: "Visarga Before Unvoiced Sounds",
      commentary: "Before unvoiced consonants, visarga often becomes @deva[श्/ष्/स्]:\n\n| Before | Change | Example |\n|--------|--------|---------|\n| @deva[च/छ] | @deva[ः] → @deva[श्] | @deva[नरः च] → @deva[नरश्च] |\n| @deva[ट/ठ] | @deva[ः] → @deva[ष्] | @deva[नरः टीकते] → @deva[नरष्टीकते] |\n| @deva[त/थ] | @deva[ः] → @deva[स्] | @deva[नरः तत्र] → @deva[नरस्तत्र] |\n| @deva[क/ख/प/फ] | @deva[ः] stays | @deva[नरः करोति] (no change) |",
    },
    {
      sutraId: "concept",
      title: "Common Patterns",
      commentary: "Memorize these frequent patterns:\n\n| Written | Split |\n|---------|-------|\n| @deva[नमस्ते] | @deva[नमः ते] |\n| @deva[नरश्च] | @deva[नरः च] |\n| @deva[कालो हि] | @deva[कालः हि] |\n| @deva[तपोवनम्] | @deva[तपः वनम्] |\n| @deva[मनोहरम्] | @deva[मनः हरम्] |",
    },
    {
      sutraId: "concept",
      title: "Reading Strategy",
      commentary: "When you see @deva[ो], @deva[र्], @deva[श्], @deva[ष्], or @deva[स्] connecting words, consider if it was originally @deva[ः]:\n\n@deva[देवो वदति] ← @deva[देवः वदति]\n@deva[पुनरागच्छति] ← @deva[पुनः आगच्छति]\n@deva[नमस्कारः] ← @deva[नमः कारः]",
    },
    {
      sutraId: "concept",
      title: "Practice Splitting",
      commentary: "Split these:\n\n1. @deva[रामश्च लक्ष्मणश्च]\n   - @deva[रामः च लक्ष्मणः च] — \"Rama and Lakṣmaṇa\"\n\n2. @deva[तपोवने]\n   - @deva[तपः वने] — \"in the ascetic's forest\"\n\n3. @deva[मनोरथः]\n   - @deva[मनः रथः] — \"wish\" (lit. \"mind's chariot\")\n\n4. @deva[पुनरुक्तम्]\n   - @deva[पुनः उक्तम्] — \"said again\"",
    },
    {
      sutraId: "concept",
      title: "Lesson Summary",
      commentary: "Visarga sandhi rules:\n1. Before @deva[अ]: @deva[ः अ] → @deva[ो ऽ]\n2. Before voiced: @deva[ः] → @deva[ओ/र्]\n3. Before @deva[च/त]: @deva[ः] → @deva[श्/स्]\n4. Before @deva[क/प]: @deva[ः] stays\n\n**Next:** Final reading practice — putting it all together!",
    },
  ],
};

export const reading20FinalPracticePath: LearningPath = {
  id: "reading-20-final-practice",
  title: "Reading Practice: Extended Passage",
  titleSanskrit: "समाप्तिः",
  label: "समाप्तिः",
  track: "reading",
  category: "foundation",
  description: "Apply everything you've learned to read an extended passage.",
  difficulty: "intermediate",
  estimatedTime: "30 minutes",
  prerequisites: ["reading-19-visarga-sandhi"],
  steps: [
    {
      sutraId: "concept",
      title: "What You've Learned",
      commentary: "Over 19 lessons, you've mastered:\n- All 7 cases and their meanings\n- Present and past tense verbs\n- Vowel and visarga sandhi\n- Four compound types\n- Participles and absolutives\n\nNow let's read a continuous passage.",
    },
    {
      sutraId: "reading",
      title: "Meghadūta: The Cloud Arrives",
      commentary: "**Source:** Meghadūta 1.2\n\n@deva[तस्मिन्नद्रौ कतिचिदबलाविप्रयुक्तः स कामी]\n\nSplit:\n- @deva[तस्मिन् अद्रौ] — \"on that mountain\" (loc.)\n- @deva[कतिचित्] — \"some\" (indefinable)\n- @deva[अबला-विप्रयुक्तः] — \"separated from [his] slender [wife]\"\n- @deva[सः कामी] — \"that love-sick one\"\n\n**Translation:** \"On that mountain, that love-sick one, separated from his slender wife...\"",
    },
    {
      sutraId: "reading",
      title: "Months Pass",
      commentary: "@deva[नीत्वा मासान्कनकवलयभ्रंशरिक्तप्रकोष्ठः]\n\nSplit:\n- @deva[नीत्वा] — \"having passed\" (absolutive)\n- @deva[मासान्] — \"months\" (acc. pl.)\n- @deva[कनक-वलय-भ्रंश-रिक्त-प्रकोष्ठः]\n  - \"gold-bracelet-falling-empty-forearms\"\n  - Bahuvrīhi: \"whose forearms are empty from the falling of golden bracelets\"\n\n**Translation:** \"...having passed some months, his forearms empty from slipping bracelets...\"",
    },
    {
      sutraId: "concept",
      title: "Physical Grief",
      commentary: "The compound @deva[कनकवलयभ्रंशरिक्तप्रकोष्ठः] shows:\n\nThe yakṣa has wasted away from grief — his bracelets no longer fit. Sanskrit poetry often shows emotion through physical description.",
    },
    {
      sutraId: "reading",
      title: "The First Day of Āṣāḍha",
      commentary: "@deva[आषाढस्य प्रथमदिवसे मेघमाश्लिष्टसानुं]\n\nSplit:\n- @deva[आषाढस्य प्रथम-दिवसे] — \"on the first day of Āṣāḍha\"\n- @deva[मेघम्] — \"a cloud\" (acc.)\n- @deva[आश्लिष्ट-सानुम्] — \"embracing the peak\" (bahuvrīhi modifying cloud)\n\n**Translation:** \"...on the first day of Āṣāḍha, [he saw] a cloud embracing the mountain peak...\"",
    },
    {
      sutraId: "reading",
      title: "The Vision",
      commentary: "@deva[वप्रक्रीडापरिणतगजप्रेक्षणीयं ददर्श]\n\nSplit:\n- @deva[वप्र-क्रीडा-परिणत-गज-प्रेक्षणीयम्]\n  - \"rampart-play-bent-elephant-worth-seeing\"\n  - \"resembling an elephant bent from playing against a rampart\"\n- @deva[ददर्श] — \"he saw\" (perfect tense)\n\n**Translation:** \"...resembling an elephant playfully butting a rampart — he saw [this cloud].\"",
    },
    {
      sutraId: "concept",
      title: "The Full Verse",
      commentary: "> On that mountain, that love-sick one, separated from his slender wife, having passed some months with forearms empty from slipping bracelets, on the first day of Āṣāḍha saw a cloud embracing the peak — resembling an elephant playfully butting a rampart.\n\nThis sets up the entire poem: the cloud will become the yakṣa's messenger.",
    },
    {
      sutraId: "reading",
      title: "A Final Subhāṣita",
      commentary: "@deva[उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।]\n@deva[न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥]\n\nParse:\n- @deva[उद्यमेन] — \"by effort\" (inst.)\n- @deva[सिध्यन्ति] — \"succeed\" (present)\n- @deva[कार्याणि] — \"tasks\" (nom. pl.)\n- @deva[मनोरथैः] — \"by wishes\" (inst. pl.)\n- @deva[सुप्तस्य सिंहस्य] — \"of a sleeping lion\" (gen.)\n- @deva[प्रविशन्ति] — \"enter\"\n- @deva[मुखे] — \"into the mouth\" (loc.)\n- @deva[मृगाः] — \"deer\" (nom. pl.)\n\n**Translation:** \"Tasks succeed by effort, not by wishes. Deer do not walk into the mouth of a sleeping lion.\"",
    },
    {
      sutraId: "concept",
      title: "Congratulations!",
      commentary: "You can now read Sanskrit! You've learned:\n\n| Skill | You Can Now |\n|-------|-------------|\n| Cases | Identify all 7 cases by endings |\n| Verbs | Read present and past tense |\n| Sandhi | Split vowel and visarga combinations |\n| Compounds | Analyze tatpuruṣa, bahuvrīhi, etc. |\n| Participles | Recognize kta, śatṛ, ktvā |\n| Passages | Read Pañcatantra, Meghadūta, subhāṣitas |",
    },
    {
      sutraId: "concept",
      title: "What's Next?",
      commentary: "To continue improving:\n1. **Grammar Track** — Deep dive into systematic Pāṇinian grammar\n2. **More Reading** — Expand to Rāmāyaṇa, Gītā, more kāvya\n3. **Reference** — Look up any sūtra in the complete browser\n\nYour Sanskrit journey has begun. @deva[शुभमस्तु] — May it be auspicious!",
    },
  ],
};

export const tingantaLrtPath: LearningPath = {
  id: "tinganta-lrt",
  title: "Simple Future",
  titleSanskrit: "लृट्लकारः",
  label: "लृट्",
  track: "grammar",
  category: "tinganta",
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
  label: "लृङ्",
  track: "grammar",
  category: "tinganta",
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
  label: "क्त्वा",
  track: "grammar",
  category: "kridanta",
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
  label: "तुमुन्",
  track: "grammar",
  category: "kridanta",
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
  label: "शतृ",
  track: "grammar",
  category: "kridanta",
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
  label: "क्त",
  track: "grammar",
  category: "kridanta",
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
  label: "तव्य",
  track: "grammar",
  category: "kridanta",
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

export const learningPaths: LearningPath[] = [introductionPath, reading01AlphabetPath, tingantaLatPath, tingantaLotPath, tingantaLangPath, tingantaVidhilingPath, dhatuGanasPath, tingantaLutPath, tingantaLitPath, tingantaLungPath, tingantaAshirlingPath, taddhitaMatupPath, taddhitaTvaTalPath, taddhitaAnIkaPath, subantaPratipadikaPath, subantaAStemsPath, subantaAaStemsPath, subantaIUStemsPath, subantaConsonantStemsPath, karakaIntroPath, samasaIntroPath, sandhiVowelPath, sandhiVisargaPath, sandhiConsonantPath, reading02SimpleSentencesPath, reading03Practice1Path, reading04MoreVerbsPath, reading05NomAccPath, reading06Practice2Path, reading07InstrumentalPath, reading08DativePath, reading09Practice3Path, reading10PastTensePath, reading11Practice4Path, reading12GenAblPath, reading13LocativePath, reading14VowelSandhiPath, reading15Practice5Path, reading16CompoundsPath, reading17Practice6Path, reading18ParticiplesPath, reading19VisargaSandhiPath, reading20FinalPracticePath, tingantaLrtPath, tingantaLrngPath, kridantaKtvaPath, kridantaTumunPath, kridantaShatrShanacPath, kridantaKtaKtavatuPath, kridantaTavyaAniyaPath];

export function getPath(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}

export function getAvailablePaths(completedPaths: string[]): LearningPath[] {
  return learningPaths.filter((path) =>
    path.prerequisites.every((prereq) => completedPaths.includes(prereq)),
  );
}
