#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "64001": `@deva[अङ्गस्य] — ADHIKĀRA: "Of the @deva[अङ्ग] (stem)" governs through the end of adhyāya 7.

This heading word determines the domain for all following rules. Operations in this section apply specifically to the @deva[अङ्ग]—the portion of a word to which affixes attach.

**Why this matters:**

| Rule | Operation | Applies to @deva[अङ्ग] only |
|------|-----------|---------------------------|
| @ref[6.4.2] | @deva[संप्रसारण] lengthening | @deva[हूतः] ✓, @deva[निरुतम्] ✗ |
| @ref[6.4.3] | Final lengthening before @deva[नाम्] | @deva[अग्नीनाम्] ✓ |
| @ref[7.1.9] | @deva[भिस्] → @deva[ऐस्] | @deva[वृक्षैः] ✓ |

The genitive @deva[अङ्गस्य] adapts its case-force as needed:
- Substitution sense (@deva[स्थानषष्ठी]) in @ref[6.4.36]
- Part-whole sense (@deva[अवयवषष्ठी]) in @ref[6.4.89]
- Condition sense in @ref[7.1.1]`,

  "64002": `@deva[हलः] — A @deva[संप्रसारण] vowel (@deva[अ/इ/उ]) at the end of an @deva[अङ्ग] is lengthened when preceded by a consonant of that @deva[अङ्ग].

Continues @ref[6.3.111] (@deva[दीर्घ]) and @ref[6.3.139] (@deva[संप्रसारण]).

**Examples:**
| Root | + @deva[क्त] | Result | Derivation |
|------|------------|--------|------------|
| @deva[ह्वा] | @deva[हुत] → | @deva[हूतः] | @deva[व्] → @deva[उ], lengthened |
| @deva[ज्या] | @deva[जित] → | @deva[जीनः] | @deva[य्] → @deva[इ], lengthened |
| @deva[व्या] | @deva[वित] → | @deva[संवीतः] | @deva[य्] → @deva[इ], lengthened |

**Exceptions:**
- @deva[उतः] from @deva[वेञ्] — no preceding consonant in @deva[अङ्ग]
- @deva[निरुतम्] — @deva[र्] belongs to @deva[उपसर्ग], not @deva[अङ्ग]
- @deva[विद्धः] from @deva[व्यध्] — @deva[इ] is mid-stem, not final
- @deva[तृतीयः] — @deva[ऋ] is not @deva[अण्] (@deva[अ/इ/उ])`,

  "64003": `@deva[नामि] — The final vowel of an @deva[अङ्ग] is lengthened before the genitive plural @deva[नाम्] (= @deva[आम्] + @deva[नुट्]).

**Examples:**
@deva[अग्नि] → @deva[अग्नीनाम्]
@deva[वायु] → @deva[वायूनाम्]
@deva[कर्तृ] → @deva[कर्तॄणाम्]

The @deva[नुट्] augment (@ref[7.1.54]) is added first, then lengthening occurs. If lengthening occurred first, the stem would no longer be short, and @deva[नुट्] would not apply.`,

  "64004": `@deva[न तिसृचतसृ] — @deva[तिसृ] "three" and @deva[चतसृ] "four" (feminine) do not lengthen before @deva[नाम्].

**Forms:**
@deva[तिसृणाम्] "of three"
@deva[चतसृणाम्] "of four"

This exception implies that @deva[ऋ] does not become @deva[र्] before genitive plural (@ref[7.2.100]), since @deva[नुट्] is added first, blocking that rule.`,

  "64005": `@deva[छन्दस्युभयथा] — In Vedic, @deva[तिसृ] and @deva[चतसृ] optionally lengthen before @deva[नाम्].

**Both forms valid in Veda:**
@deva[तिसृणाम्] or @deva[तिसॄणाम्]
@deva[चतसृणाम्] or @deva[चतसॄणाम्]`,

  "64006": `@deva[नृ च] — @deva[नृ] "man" also optionally lengthens before @deva[नाम्].

**Both forms:**
@deva[नृणाम्] or @deva[नॄणाम्]

Some restrict this option to Vedic; others allow it in classical Sanskrit as well.`,

  "64007": `@deva[नोपधायाः] — In stems ending in @deva[न्], the penultimate vowel is lengthened before @deva[नाम्].

**Examples:**
@deva[पञ्चन्] → @deva[पञ्चानाम्] "of five"
@deva[सप्तन्] → @deva[सप्तानाम्] "of seven"
@deva[नवन्] → @deva[नवानाम्] "of nine"
@deva[दशन्] → @deva[दशानाम्] "of ten"

**But:** @deva[चतुर्णाम्] — stem ends in @deva[र्], not @deva[न्]
**But:** @deva[चर्मणाम्] — affix is @deva[आम्] without @deva[नुट्]`,

  "64008": `@deva[सर्वनामस्थाने चासम्बुद्धौ] — In stems ending in @deva[न्], the penultimate vowel is lengthened before @deva[सर्वनामस्थान] affixes, except vocative singular.

**Examples (@deva[राजन्]):**
| Case | Singular | Dual | Plural |
|------|----------|------|--------|
| Nom. | @deva[राजा] | @deva[राजानौ] | @deva[राजानः] |
| Acc. | @deva[राजानम्] | @deva[राजानौ] | — |

**Exception — vocative singular:**
@deva[हे राजन्]! @deva[हे तक्षन्]!

**Non-strong cases (no lengthening):**
@deva[राजनि] (locative singular)`,

  "64009": `@deva[वा षपूर्वस्य निगमे] — In Vedic, stems ending in @deva[न्] with @deva[ष्] before the penultimate optionally lengthen in strong cases.

**Vedic options:**
@deva[तक्षाणम्] or @deva[तक्षणम्]
@deva[ऋभुक्षाणम्] or @deva[ऋभुक्षणम्]

**Classical Sanskrit:** Always @deva[तक्षा], @deva[तक्षाणौ], @deva[तक्षाणः] (lengthening obligatory).`,

  "64010": `@deva[सान्तमहतः संयोगस्य] — Stems ending in @deva[न्स्] (nasal + @deva[स्]) and @deva[महत्] lengthen the penultimate in strong cases (except vocative singular).

The @deva[न्] is inserted by @ref[7.1.70].

**Comparative stems (@deva[ईयस्]):**
@deva[श्रेयान्], @deva[श्रेयांसौ], @deva[श्रेयांसः]
@deva[पयांसि], @deva[यशांसि]

**@deva[महत्]:**
@deva[महान्], @deva[महान्तौ], @deva[महान्तः]

**Vocative singular:** @deva[हे श्रेयन्], @deva[हे महन्]`,

  "64011": `@deva[अप्तृन्तृच्स्वसृनप्तृनेष्टृत्वष्टृक्षत्तृहोतृपोतृप्रशास्तॄणाम्] — These stems lengthen their penultimate in strong cases (except vocative singular):

| Stem | Meaning | Example |
|------|---------|---------|
| @deva[अप्] | water | @deva[आपः] |
| @deva[तृन्]-stems | agent nouns | @deva[कर्तारौ], @deva[कर्तारः] |
| @deva[तृच्]-stems | agent nouns | @deva[हर्तारौ], @deva[हर्तारः] |
| @deva[स्वसृ] | sister | @deva[स्वसा], @deva[स्वसारौ] |
| @deva[नप्तृ] | grandson | @deva[नप्ता], @deva[नप्तारौ] |
| @deva[नेष्टृ] | priest | @deva[नेष्टारौ] |
| @deva[त्वष्टृ] | creator | @deva[त्वष्टारौ] |
| @deva[क्षत्तृ] | carver | @deva[क्षत्तारौ] |
| @deva[होतृ] | invoker | @deva[होतारौ] |
| @deva[पोतृ] | purifier | @deva[पोतारौ] |
| @deva[प्रशास्तृ] | director | @deva[प्रशास्तारौ] |

**Vocative singular:** @deva[हे कर्तः], @deva[हे स्वसः]

**Note:** @deva[पितृ] and @deva[मातृ] are excluded: @deva[पितरौ], @deva[मातरौ] (no lengthening).`,

  "64012": `@deva[इन्हन्पूषार्यम्णां शौ] — Stems ending in @deva[इन्], @deva[हन्], @deva[पूषन्], or @deva[अर्यमन्] lengthen the penultimate before @deva[शि] (neuter nominative/accusative plural).

**Examples (in compounds):**
@deva[बहुदण्डीनि] "having many staffs"
@deva[बहुवृत्रहाणि] "having many Vṛtra-slayers"
@deva[बहुपूषाणि] "having many Pūṣans"
@deva[बह्वर्यमाणि] "having many Arya mans"

**Restriction:** This rule limits lengthening to @deva[शि] only. In other strong cases:
@deva[दण्डिनौ] (dual) — no lengthening
@deva[वृत्रहणौ] — no lengthening`,

  "64013": `@deva[सौ च] — Stems ending in @deva[इन्], @deva[हन्], @deva[पूषन्], or @deva[अर्यमन्] also lengthen before nominative singular @deva[सु] (except vocative).

**Examples:**
@deva[दण्डी] "staff-bearer"
@deva[वृत्रहा] "Vṛtra-slayer"
@deva[पूषा] "Pūṣan"
@deva[अर्यमा] "Aryaman"

The @deva[न्] is elided by @ref[8.2.7], the case-affix by @ref[6.1.68].

**Vocative singular:** @deva[हे दण्डिन्], @deva[हे पूषन्], @deva[हे वृत्रहन्]`,

  "64014": `@deva[अत्वसन्तस्य चाधातोः] — Stems ending in @deva[अतु] or @deva[अस्] (not from a root) lengthen the penultimate before nominative singular @deva[सु].

**@deva[अतु]-stems:**
@deva[भवान्] (from @deva[भा] + @deva[डवतु])
@deva[कृतवान्] (with @deva[क्तवतु])
@deva[गोमान्], @deva[यवमान्] (with @deva[मतुप्])

**@deva[अस्]-stems:**
@deva[सुपयाः] "having good water"
@deva[सुयशाः] "having good fame"

The @deva[नुम्] augment (@ref[7.1.70]) is added after lengthening.

**Exception — root-final @deva[अस्]:**
@deva[पिण्डग्रः] (from @deva[ग्रस्]) — no lengthening
@deva[चर्मवः] (from @deva[वस्]) — no lengthening`,

  "64015": `@deva[अनुनासिकस्य क्विझलोः क्ङिति] — A stem ending in a nasal lengthens its penultimate before:
1. @deva[क्वि] affix
2. A @deva[कित्] or @deva[ङित्] affix beginning with @deva[झल्] (non-nasal, non-semivowel consonant)

**Before @deva[क्वि]:**
@deva[प्रशान्] (from @deva[शम्])
@deva[प्रतान्] (from @deva[तम्])

**Before @deva[क्ङित्] + @deva[झल्]:**
| Affix | Example |
|-------|---------|
| @deva[क्त] | @deva[शान्तः] |
| @deva[क्तवतु] | @deva[शान्तवान्] |
| @deva[क्त्वा] | @deva[शान्त्वा] |
| @deva[क्तिन्] | @deva[शान्तिः] |

**Exceptions:**
@deva[गम्यते], @deva[रम्यते] — affix not @deva[झलादि]
@deva[गन्ता], @deva[रन्ता] — affix not @deva[कित्/ङित्]`,

  "64016": `@deva[अज्झनगमां सनि] — Vowel-final stems, @deva[हन्], and @deva[गम्] lengthen before @deva[सन्] (desiderative) when @deva[सन्] lacks @deva[इट्].

**Vowel-final roots:**
@deva[विवीषति] (from @deva[वि])
@deva[तुष्टूषति] (from @deva[स्तु])
@deva[चिकीर्षति] (from @deva[कृ])
@deva[जिहीर्षति] (from @deva[हृ])

**@deva[हन्] and @deva[गम्]:**
@deva[जिघांसति] "desires to kill"
@deva[अधिजिगांसते] "desires to study" (@deva[गम्] as substitute for @deva[इङ्])

**Note:** @deva[संजिगंसते] "desires to go" — @deva[गम्] meaning "go" does not lengthen.`,

  "64017": `@deva[तनोतेर्विभाषा] — @deva[तन्] optionally lengthens before @deva[सन्] (without @deva[इट्]).

**Both forms:**
@deva[तितांसति] or @deva[तितंसति]

**With @deva[इट्]:** @deva[तितनिषति] only (no option).`,

  "64018": `@deva[क्रमश्च क्त्वि] — @deva[क्रम्] optionally lengthens before @deva[क्त्वा] (without @deva[इट्]).

**Both forms:**
@deva[क्रान्त्वा] or @deva[क्रन्त्वा]

**With @deva[इट्]:** @deva[क्रमित्वा] only.

**With @deva[ल्यप्]:** @deva[प्रक्रम्य], @deva[उपक्रम्य] — no lengthening. The @deva[बहिरङ्ग] @deva[ल्यप्] substitution blocks lengthening.`,

  "64019": `@deva[च्छ्वोः शूडनुनासिके च] — @deva[छ्] and @deva[व्] of an @deva[अङ्ग] become @deva[शू] and @deva[ड्] respectively before a @deva[कित्/ङित्] affix beginning with a non-nasal consonant.

Continues the @deva[अनुनासिकस्य] context from @ref[6.4.15].

**@deva[छ्] → @deva[शू]:**
@deva[प्रच्छ्] + @deva[क्त] → @deva[पृष्टः]

**@deva[व्] → @deva[ड्]:**
@deva[दिव्] + @deva[क्त] → @deva[द्यूतः]

The @deva[ऊ] provides compensatory lengthening.`,

  "64020": `@deva[ज्वरत्वरस्रिव्यविमवामुपधायाश्च] — These roots lose their penultimate @deva[व्] before @deva[कित्/ङित्] @deva[झलादि] affixes, with the preceding vowel lengthened:

| Root | Meaning | + @deva[क्त] |
|------|---------|------------|
| @deva[ज्वर्] | fever | @deva[जूर्णः] |
| @deva[त्वर्] | hurry | @deva[तूर्णः] |
| @deva[स्रिव्] | flow | @deva[स्रूतः] |
| @deva[व्यध्] | pierce | @deva[वीध्] forms |
| @deva[वि] | go | — |
| @deva[मव्] | bind | — |
| @deva[आम्] | — | — |

The @deva[व्]-loss triggers compensatory lengthening of the preceding vowel.`,

  "64021": `@deva[राल्लोपः] — ADHIKĀRA: "@deva[र्] and @deva[ल्] deletion" — context for following rules.

This heading establishes that certain operations involve the loss of @deva[र्] or @deva[ल्] from stems.`,

  "64022": `@deva[असिद्धवदत्राभात्] — From this point (@ref[6.4.22]) onward, earlier rules are treated as @deva[असिद्ध] (not-yet-applied) with respect to later rules.

This is the "internal @deva[असिद्ध]" section. Operations here do not "see" each other for purposes of rule interaction.

**Scope:** @ref[6.4.22] through @ref[6.4.129].

This prevents cascading effects where one sound change would trigger another.`,

  "64023": `@deva[श्नान्नलोपः] — The @deva[न्] of @deva[श्ना] (class 9 vikaraṇa) is deleted.

**Example:**
@deva[क्री] + @deva[श्ना] + @deva[अन्ति] → @deva[क्रीणन्ति] (not *@deva[क्रीनन्ति])

The @deva[न्] of the vikaraṇa @deva[श्ना] disappears before the personal endings.`,

  "64024": `@deva[अनिदितां हल उपधायाः क्ङिति] — Roots not marked with @deva[इत्] as an indicatory letter delete their penultimate consonant before @deva[कित्/ङित्] affixes.

**Examples:**
@deva[अञ्च्] + @deva[क्त] → @deva[अक्तः] (penultimate @deva[ञ्] deleted)
@deva[रञ्ज्] + @deva[क्त] → — (follows special rules)

The @deva[इदित्] marking protects roots from this deletion.`,

  "64025": `@deva[दंशसञ्जस्वञ्जां शपि] — @deva[दंश्], @deva[सञ्ज्], and @deva[स्वञ्ज्] delete their nasal before @deva[शप्] (class 1 vikaraṇa).

**Examples:**
@deva[दंश्] + @deva[शप्] + @deva[ति] → @deva[दशति] "bites"
@deva[सञ्ज्] + @deva[शप्] + @deva[ति] → @deva[सजति] "clings"
@deva[स्वञ्ज्] + @deva[शप्] + @deva[ति] → @deva[स्वजति] "embraces"`,

  "64026": `@deva[रञ्जेश्च] — @deva[रञ्ज्] also deletes its nasal before @deva[शप्].

**Example:**
@deva[रञ्ज्] + @deva[शप्] + @deva[ति] → @deva[रजति] "is colored"

But: @deva[रङ्क्ता] with @deva[क्त] (nasal → @deva[ङ्] by assimilation).`,

  "64027": `@deva[घञि च भावकरणयोः] — @deva[रञ्ज्] also deletes its nasal before @deva[घञ्] when the meaning is @deva[भाव] (abstract) or @deva[करण] (instrument).

**Examples:**
@deva[रागः] "passion, color" (भाव)
@deva[रागः] "dye" (करण)

But: @deva[राङ्गः] when meaning an agent.`,

  "64028": `@deva[स्यदो जवे] — @deva[स्यद्] "go" deletes its penultimate when meaning "speed."

**Example:**
@deva[स्यद्] + @deva[घञ्] → @deva[सादः] "going quickly"

This applies only in the sense of rapid motion.`,

  "64029": `@deva[अवोदैधौद्मप्रश्रथहिमश्रथाः] — These stems show irregular forms:

@deva[अव] — @deva[उत]
@deva[ओद] — special forms
@deva[ऐध] — @deva[ऐधित]
@deva[औद्म] — special
@deva[प्रश्रथ] — forms with @deva[श्रथ्]
@deva[हिम] — cold
@deva[श्रथ] — loosen

These are listed as exceptions to regular penultimate-deletion rules.`,

  "64030": `@deva[नाञ्चेः पूजायाम्] — @deva[अञ्च्] does not delete its nasal before @deva[कित्/ङित्] affixes when meaning "worship."

**Example:**
@deva[अञ्चति] "worships" — nasal retained

**But:** @deva[अक्तः] "bent" — nasal deleted (non-worship sense)`,

  "64031": `@deva[क्त्वि स्कन्दिस्यन्दोः] — @deva[स्कन्द्] "fall" and @deva[स्यन्द्] "flow" delete their nasal before @deva[क्त्वा].

**Examples:**
@deva[स्कन्द्] + @deva[क्त्वा] → @deva[स्कत्त्वा] "having fallen"
@deva[स्यन्द्] + @deva[क्त्वा] → @deva[स्यत्त्वा] "having flowed"`,

  "64032": `@deva[जान्तनशां विभाषा] — Roots ending in @deva[ज्], @deva[अन्त्], @deva[अन्], and @deva[श्] optionally delete their nasal before @deva[क्त्वा].

**Optional forms:**
@deva[भुक्त्वा] or @deva[भुञ्क्त्वा]
@deva[हत्वा] or @deva[हन्त्वा]`,

  "64033": `@deva[भञ्जेश्च चिणि] — @deva[भञ्ज्] "break" deletes its nasal before @deva[चिण्] (causative aorist).

**Example:**
@deva[भञ्ज्] + @deva[णिच्] + @deva[चिण्] → @deva[अभाजि] "was caused to break"`,

  "64034": `@deva[शास इदङ्हलोः] — @deva[शास्] "teach, rule" becomes @deva[शिस्] before @deva[कित्/ङित्] affixes beginning with a consonant, and in @deva[आदेश] forms.

**Examples:**
@deva[शास्] + @deva[क्त] → @deva[शिष्टः] "taught, disciplined"
@deva[शास्] + @deva[तृन्] → @deva[शास्तृ] "teacher" (different context)

The @deva[आ] → @deva[इ] change occurs in specified environments.`,

  "64035": `@deva[शा हौ] — @deva[शास्] becomes @deva[शा] before @deva[हि] (imperative 2nd singular).

**Example:**
@deva[शास्] + @deva[हि] → @deva[शाधि] "teach! rule!"

The @deva[स्] is replaced by @deva[ध्] (@ref[8.4.62]).`,

  "64036": `@deva[हन्तेर्जः] — @deva[हन्] "kill" is replaced by @deva[ज्] before @deva[कित्/ङित्] affixes.

**Examples:**
@deva[हन्] + @deva[क्त] → @deva[हतः] (irregular)
@deva[हन्] + @deva[घञ्] → @deva[घातः] "killing"

The entire stem @deva[हन्] → @deva[ज्] or undergoes other replacements depending on context.`,

  "64037": `@deva[अनुदात्तोपदेशवनतितनोत्यादीनामनुनासिकलोपो झलि क्ङिति] — Roots with @deva[अनुदात्त] accent in @deva[उपदेश], plus @deva[वन्], @deva[तन्], and the @deva[तनोति]-class, delete their nasal before @deva[कित्/ङित्] @deva[झलादि] affixes.

**Examples:**
@deva[गम्] + @deva[क्त] → @deva[गतः] "gone"
@deva[हन्] + @deva[क्त] → @deva[हतः] "killed"
@deva[मन्] + @deva[क्त] → @deva[मतः] "thought"
@deva[तन्] + @deva[क्त] → @deva[ततः] "stretched"

The @deva[अनुदात्त] accent in the root's listing marks it for nasal deletion.`,

  "64038": `@deva[वा ल्यपि] — Nasal deletion is optional before @deva[ल्यप्] (the @deva[क्त्वा] substitute after prefixes).

**Both forms valid:**
@deva[प्रगम्य] or @deva[प्रगत्य]
@deva[प्रहन्य] or @deva[प्रहत्य]`,

  "64039": `@deva[न क्तिचि दीर्घश्च] — Before @deva[क्तिच्], nasal deletion does not occur, and the preceding vowel is lengthened.

**Examples:**
@deva[गम्] + @deva[क्तिच्] → @deva[गान्ति] (nasal kept, vowel long)
@deva[हन्] + @deva[क्तिच्] → @deva[हान्ति]

The @deva[क्तिच्] affix blocks nasal-deletion and triggers compensatory lengthening.`,

  "64040": `@deva[गमः क्वौ] — @deva[गम्] does not delete its nasal before @deva[क्वि].

**Example:**
@deva[प्रगम्] "going forth"

The nasal is retained when @deva[क्वि] follows.`,

  "64041": `@deva[विड्वनोरनुनासिकस्यात्] — Before @deva[विड्] and @deva[वन्] affixes, a stem-final nasal becomes @deva[अत्] (@deva[अ]).

**Example:**
@deva[हन्] + @deva[विन्] → @deva[हविन्] forms

The nasal is replaced by @deva[अ].`,

  "64042": `@deva[जनसनखनां सञ्झलोः] — @deva[जन्], @deva[सन्], and @deva[खन्] delete their nasal before @deva[सन्] (desiderative) and @deva[झलादि] @deva[कित्/ङित्] affixes.

**Examples:**
@deva[जन्] + @deva[क्त] → @deva[जातः] "born"
@deva[खन्] + @deva[क्त] → @deva[खातः] "dug"

**Desiderative:**
@deva[जन्] + @deva[सन्] → @deva[जिजासति] (not *@deva[जिजंसति])`,

  "64043": `@deva[ये विभाषा] — Nasal deletion is optional before @deva[य] (passive/denominative marker).

**Both forms:**
@deva[हन्यते] or @deva[हायते]
@deva[जन्यते] or @deva[जायते]`,

  "64044": `@deva[तनोतेर्यकि] — @deva[तन्] deletes its nasal before @deva[यक्] (intensive).

**Example:**
@deva[तन्] + @deva[यक्] → @deva[तातन्यते] → forms without nasal in certain positions`,

  "64045": `@deva[सनः क्तिचि लोपश्चास्यान्यतरस्याम्] — The @deva[सन्] (desiderative) optionally loses its @deva[न्] before @deva[क्तिच्], with the vowel optionally lengthened.

**Optional forms:**
@deva[जिगासा] or @deva[जिगांसा] "desire to go"

The @deva[न्]-deletion and lengthening are both optional.`,

  "64046": `@deva[आर्धधातुके] — ADHIKĀRA: "Before @deva[आर्धधातुक] affixes" governs subsequent rules.

@deva[आर्धधातुक] affixes are those not marked with @deva[श्] (= non-@deva[सार्वधातुक]). This includes @deva[क्त], @deva[क्त्वा], @deva[तुमुन्], @deva[तृच्], etc.

Rules following apply specifically in @deva[आर्धधातुक] contexts.`,

  "64047": `@deva[भ्रस्जो रोपधयोः रमन्यतरस्याम्] — @deva[भ्रस्ज्] "roast" optionally shows @deva[र] for both its @deva[र्] sounds before @deva[आर्धधातुक] affixes.

**Optional forms:**
@deva[भ्रष्टः] or @deva[भृष्टः]
@deva[भ्रष्ट्वा] or @deva[भृष्ट्वा]

The two @deva[र्]-sounds in @deva[भ्रस्ज्] can independently be retained or changed.`,

  "64048": `@deva[अतो लोपः] — A final @deva[अ] of an @deva[अङ्ग] is deleted before @deva[आर्धधातुक] affixes.

**Examples:**
@deva[भू] + @deva[तुम्] → @deva[भवितुम्] (but @deva[पच्] + @deva[तुम्] → @deva[पक्तुम्], @deva[अ] lost)
@deva[नी] + @deva[क्त] → @deva[नीतः]

Root-final @deva[अ] disappears before these affixes.`,

  "64049": `@deva[यस्य हलः] — Applies @ref[6.4.48] specifically: @deva[अ] following a consonant in the @deva[अङ्ग] is deleted before @deva[आर्धधातुक] affixes beginning with @deva[य्].

**Examples:**
@deva[पच्] + @deva[यत्] → @deva[पच्य] (not *@deva[पचय])
@deva[वद्] + @deva[यत्] → @deva[वद्य]

The @deva[अ] between consonant and @deva[य्] is elided.`,

  "64050": `@deva[क्यस्य विभाषा] — @deva[अ]-deletion is optional before the @deva[क्यच्] (denominative) affix.

**Both forms:**
@deva[पुत्रीयति] or @deva[पुत्रयति] "desires a son"

The @deva[अ] may or may not be deleted.`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.4.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
