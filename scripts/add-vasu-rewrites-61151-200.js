import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '61151': `@deva[चन्द्रस्योपसर्जनस्य सुट् छन्दसि] — In the Vedas, @deva[सुट्] is added to @deva[चन्द्र] when it is the second member of a compound and follows a short vowel.

**Examples:**
| Context | Form | Meaning |
|---------|------|---------|
| Mantra | @deva[सुश्चन्द्रः] | "beautiful-moon" (from @deva[सु] + @deva[चन्द्र]) |
| After long vowel | @deva[सूर्याचन्द्रमसाविव] | No @deva[सुट्] — long @deva[आ] precedes |
| Secular | @deva[सुचन्द्रा पौर्णमासी] | No @deva[सुट्] — not in a Mantra |

@note[The term @deva[उत्तरपद] means "second member of a compound," not just "second word." Therefore @deva[शुक्रमसि चन्द्रमसि] does not trigger this rule — the words are not compounded.]`,

  '61152': `@deva[प्रातिष्कशः] — @deva[सुट्] is added to the root @deva[कश्] "to go, to punish" when preceded by @deva[प्रति], forming @deva[प्रतिष्कश] "emissary, herald."

**Derivation:**
@deva[प्रति] + @deva[कश्] + @deva[अच्] @ref[3.1.134] → @deva[प्रतिष्कशः]

**Example:**
@deva[ग्राममद्य प्रवेक्ष्यामि भव मे त्वं प्रतिष्कशः]
"I shall inspect the town today; be my emissary."

@note[The augment applies to the root @deva[कश्] itself, not to derivatives. Thus @deva[प्रतिगतः कशां] = @deva[प्रतिकशोऽश्वः] "a horse guided by the whip" — no @deva[सुट्], since @deva[कशा] is a derived noun, not the root.]`,

  '61153': `@deva[प्रस्कण्वहरिश्चन्द्रावृषी] — The names @deva[प्रस्कण्व] and @deva[हरिश्चन्द्र] are formed with @deva[सुट्] when referring to the Ṛṣis of those names.

**Forms:**
| Meaning | Form | Analysis |
|---------|------|----------|
| The Ṛṣi | @deva[प्रस्कण्व ऋषिः] | With @deva[सुट्] |
| The Ṛṣi | @deva[हरिश्चन्द्र ऋषिः] | With @deva[सुट्] |
| A region | @deva[प्रकण्वो देशः] | Without @deva[सुट्] |
| A naive person | @deva[हरिश्चन्द्रो मानवकः] | Without @deva[सुट्] (from @deva[हरिः चन्द्रो यस्य] "whose complexion is bright") |

@note[@deva[हरिश्चन्द्र] could be formed by @ref[6.1.151] in Mantras; this rule extends the @deva[सुट्] to secular usage when referring to the Ṛṣi.]`,

  '61154': `@deva[मस्करो वंशे मस्करी परिव्राजके] — The word @deva[मस्कर] means "bamboo" and @deva[मस्करिन्] means "mendicant monk" — both formed with @deva[सुट्].

**Forms:**
| Word | Meaning | Formation |
|------|---------|-----------|
| @deva[मस्करः] | bamboo | @deva[मकर] + @deva[सुट्] |
| @deva[मस्करी] | mendicant | @deva[मस्कर] + @deva[इनि] |
| @deva[मकरः] | alligator | No @deva[सुट्] — different meaning |

**Etymology of @deva[मस्करिन्]:**
Some derive it from @deva[मा] + @deva[कृ] + @deva[इनि]: @deva[मा करोति] = "one who says 'do not act'" — i.e., a monk who renounces all works, teaching @deva[मा कुरुतः कर्माणि शान्तिर्वः श्रेयसी] "Do no works; peace is your highest end."`,

  '61155': `@deva[कास्तरोऽजस्तुन्दश्च नगरे] — @deva[कास्तर] and @deva[अजस्तुन्द] are city names formed with @deva[सुट्].

| Meaning | Form |
|---------|------|
| The city | @deva[कास्तरम्] |
| The city | @deva[अजस्तुन्दम्] |
| "Slightly a shore" | @deva[कातीरम्] (from @deva[ईषत् तीरम् अस्य]) |
| "Having a belly like a goat's" | @deva[अजतुन्दम्] (from @deva[अजस्येव तुन्दम् अस्य]) |`,

  '61156': `@deva[कारस्करो वृक्षे] — @deva[कारस्कर] means "a tree" and is formed with @deva[सुट्].

**Derivation:**
@deva[कार] + @deva[कृ] + @deva[ट] @ref[3.2.21] → @deva[कारस्करः]

When not meaning a tree: @deva[कारकरः] (no @deva[सुट्]).`,

  '61157': `@deva[पारस्करादयो निपात्यन्ते] — The words @deva[पारस्कर] and others are irregularly formed Names with @deva[सुट्].

**The List:**
| Word | Meaning | Notes |
|------|---------|-------|
| @deva[पारस्करः] | a country | |
| @deva[कारस्करः] | a tree | |
| @deva[रथस्या] | a river | |
| @deva[किष्कुः] | a measure | |
| @deva[किष्किन्धा] | a cave | |
| @deva[तस्करः] | a thief | From @deva[तत्] + @deva[कर] with @deva[सुट्] and elision of @deva[त्] |
| @deva[बृहस्पतिः] | a deity | From @deva[बृहत्] + @deva[पति] with @deva[सुट्] and elision of @deva[त्] |
| @deva[प्रस्तुम्पति गौः] | a cow that tramples | @deva[सुट्] added to @deva[प्र] before @deva[तुम्प्] when a cow is the agent |

When not a thief/deity: @deva[तत्करः], @deva[बृहत्पतिः] — no @deva[सुट्].

@note[This is an @deva[आकृतिगण] — words like @deva[प्रायश्चित्तम्] and @deva[प्रायश्चित्तिः] follow the same pattern.]`,

  '61158': `@deva[एकवर्जं पदस्वरः] — A word has only one accented syllable; all others are @deva[अनुदात्त] (unaccented).

This is the fundamental principle of Vedic accent: wherever an acute (@deva[उदात्त]) or circumflex (@deva[स्वरित]) is taught, all remaining syllables become unaccented.

**Hierarchy of accent rules:**
1. A later rule supersedes an earlier one (@deva[पर])
2. A @deva[नित्य] rule supersedes @deva[अनित्य]
3. An @deva[अन्तरङ्ग] rule supersedes @deva[बहिरङ्ग]
4. An @deva[अपवाद] (exception) supersedes @deva[उत्सर्ग] (general rule)
5. When all else is equal, apply @deva[सतिशिष्ट]: the rule that still has scope after another is applied prevails

**Example:**
@deva[गोपायति] — The root @deva[गुप्] has acute on @deva[गु] @ref[6.1.162]. When @deva[आय] is added @ref[3.1.28], the affix gets accent @ref[3.1.3], making @deva[पा] acute. But @ref[3.1.32] declares the @deva[आय]-derivative a @deva[धातु], so @ref[6.1.162] reapplies — the final @deva[य] becomes acute: @deva[गोपायति].`,

  '61159': `@deva[कर्षात्कृषेर्दीर्घाच्च] — A stem formed with @deva[घञ्] has acute on the final if:
1. Derived from @deva[कृष्] (of @deva[भ्वादि] class, meaning "to plough")
2. Contains a long @deva[आ]

**Examples:**
| From @deva[कृष्] | With long @deva[आ] |
|-----------------|------------------|
| @deva[कर्षः] | @deva[पाकः], @deva[त्यागः], @deva[रागः], @deva[दायः], @deva[धायः] |

This overrides @ref[6.1.197] (which gives @deva[ञित्] affixes first-syllable accent).

@note[The sūtra uses @deva[कर्ष] rather than @deva[कृष्] to indicate the @deva[भ्वादि] root @deva[कृष्] "to plough," not the @deva[तुदादि] root @deva[कृष्]. From @deva[तुदादि] @deva[कृष्]: @deva[कर्षः] with accent on the first.]`,

  '61160': `@deva[उञ्छादयोऽन्तोदात्ताः] — Words in the @deva[उञ्छादि] class have acute on the final syllable.

**The List:**
| Word | Formation | Notes |
|------|-----------|-------|
| @deva[उञ्छः], @deva[म्लेच्छः], @deva[जञ्जः], @deva[जल्पः] | @deva[घञ्] | Would otherwise have first-syllable accent |
| @deva[जपः], @deva[वधः] | @deva[अप्] @ref[3.3.61] | Would have @deva[धातु]-accent on first |
| @deva[युगः] | @deva[घञ्] from @deva[युज्] | "Cycle of time"; without guṇa; @deva[योगः] in other senses |
| @deva[गरः] | @deva[अप्] | "Poison" — in other senses, first-syllable accent |
| @deva[वेगः], @deva[वेदः], @deva[वेष्टः], @deva[बन्धः] | @deva[घञ्] @ref[3.3.121] | When meaning "instrument" (@deva[करण]); @deva[भाव] sense has first-syllable accent |
| @deva[भक्षमन्थः], @deva[भोगमन्थाः] | @deva[घञ्] | End-accented |

@note[This is an @deva[आकृतिगण].]`,

  '61161': `@deva[यत्रोदात्तलोपस्तत्रानुदात्तं स्वरितम्] — When an @deva[उदात्त] vowel is elided, the following @deva[अनुदात्त] vowel becomes @deva[उदात्त].

**Examples:**
| Base + Affix | Result | Explanation |
|--------------|--------|-------------|
| @deva[कुमार] + @deva[ई] | @deva[कुमारी] | @deva[अ] of @deva[मार] (udātta) is elided @ref[6.1.148]; the anudātta @deva[ई] becomes udātta |
| @deva[पथिन्] + @deva[अस्] | @deva[पथः] | @deva[इ] (udātta) elided @ref[7.1.88]; @deva[अस्] becomes udātta |
| @deva[कुमुद] + @deva[मतुप्] | @deva[कुमुद्वान्] | @deva[अ] (udātta) elided; anudātta @deva[मत्] becomes udātta |

**Key restriction:**
The rule applies only when the @deva[अनुदात्त] vowel directly causes the elision. In @deva[प्रासङ्ग्यः] (from @deva[प्रासङ्ग] + @deva[यत्]), the @deva[यत्] is @deva[स्वरित], not @deva[अनुदात्त], so this rule doesn't apply.`,

  '61162': `@deva[अन्त उदात्तो धातुः] — A root has acute accent on its final syllable.

**Examples:**
@deva[पचति], @deva[पठति], @deva[ऊर्णोति], @deva[गोपायति], @deva[याति]

This establishes the basic accent pattern for all verbal forms before affix-accent rules apply.`,

  '61163': `@deva[चितः] — A stem formed by an affix, augment, or substitute having indicatory @deva[च्] gets acute on the final syllable.

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[भंगुरम्], @deva[भासुरम्], @deva[मेदुरम्] | @deva[घुरच्] | @ref[3.2.161] |
| @deva[कुण्डिनाः] | @deva[कुण्डिनच्] substitute | @ref[2.4.70] |
| @deva[बहुपटुः] | @deva[बहुच्] | @ref[5.3.68] |
| @deva[उच्चैकः] | @deva[अकच्] | @ref[5.3.71] |

@note[The accent falls on the final syllable of the complete word (stem + affix), not just on the affix itself. For prefixing affixes like @deva[बहुच्], the accent still falls on the final of the whole compound.]`,

  '61164': `@deva[तद्धितश्चित्] — A stem formed by a @deva[तद्धित] affix with indicatory @deva[च्] has acute on the final syllable.

**Example:**
@deva[कुञ्ज] + @deva[च्फञ्] @ref[4.1.98] → @deva[कौञ्जायन्यः] (singular) → @deva[कौञ्जायनाः] (plural, after @deva[ञ्य] elision by @ref[2.4.62])

**Why @deva[च्] wins over @deva[ञ्]:**
The affix @deva[च्फञ्] has two indicatory letters: @deva[च्] and @deva[ञ्]. The @deva[ञ्] serves two functions (accent by @ref[6.1.197] and vṛddhi by @ref[7.2.117]), while @deva[च्] serves only one (accent). If @deva[ञ्] governed accent, @deva[च्] would have no function. Therefore @deva[च्] takes priority for accent.`,

  '61165': `@deva[तद्धितस्य किन्निष्ठयोरन्त्यात्पूर्वम्] — A stem formed by a @deva[तद्धित] affix with indicatory @deva[क्] has acute on the final syllable.

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[नाडायनः], @deva[चारायणः] | @deva[फक्] | @ref[4.1.99] |
| @deva[आक्षिकः], @deva[शालाकिकः] | @deva[ठक्] | @ref[4.4.1] |`,

  '61166': `@deva[जसस्तिसृभ्यः] — The nominative plural @deva[जस्] after @deva[तिसृ] has acute on the final.

@deva[तिस्रस्तिष्ठन्ति] — "Three (feminine) stand"

This overrides the @deva[स्वरित] accent of @ref[8.2.4].

**Why @deva[जस्] is specified:**
@deva[तिसृ] (feminine of @deva[त्रि]) is always plural. Of the seven plural cases:
- Accusative: final acute by @ref[6.1.174]
- Instrumental through Locative: consonant-initial affixes are @deva[उदात्त] by @ref[6.1.179]
- Only nominative (@deva[जस्]) was not otherwise covered

Specifying @deva[जस्] prevents the rule from applying to compounds where @deva[तिसृ] appears as a subordinate member (e.g., @deva[अतितिस्रौ] — @deva[स्वरित] on final by @ref[8.2.4]).`,

  '61167': `@deva[चतुरश्शसि] — @deva[चतुर्] followed by accusative plural @deva[शस्] has acute on the final.

@deva[चतुरः पश्य] — "See four (masculine)"

The accent falls on @deva[तु].

**Does not apply to @deva[चतसृ]:**
The feminine @deva[चतसृ] @ref[7.2.99] has acute on the first by a Vārtika. When @deva[शस्] follows:
@deva[चतसृ] + @deva[शस्] → @deva[चतस्रः पश्य]

The @deva[ऋ] → @deva[र्] change is @deva[स्थानिवत्], preventing the accent rule from applying.`,

  '61168': `@deva[तृतीयादिषु भाषितपुंस्कादनूदात्तं ङेरसम्बुद्धौ] — Case affixes from instrumental onward are accented when the stem in the locative plural is monosyllabic.

**Examples:**
| Stem | Instrumental | Dual | Plural |
|------|--------------|------|--------|
| @deva[वाच्] | @deva[वाचा] | @deva[वाग्भ्याम्] | @deva[वाग्भिः], @deva[वाग्भ्यः] |
| @deva[याद्] | @deva[याता] | @deva[याद्भ्याम्] | @deva[याद्भिः] |

**Conditions:**
- "In locative plural" — @deva[राज्ञा], @deva[राज्ञे] do not qualify (polysyllabic in loc. pl. @deva[राजसु])
- "Monosyllabic" — @deva[हरिणा], @deva[गिरिणा] excluded
- "Instrumental and later" — @deva[वाचौ], @deva[वाचः] (nom./acc.) excluded
- "Case endings" — @deva[वाक्तरा], @deva[वाक्तमा] (tarap/tamap) excluded`,

  '61169': `@deva[अन्तोदात्तात्समासादन्यतरस्यामनित्यसमासे] — The same case endings may optionally be accented when a monosyllabic oxytone stands at the end of a non-permanent compound.

**Examples:**
| Compound | Instrumental (options) |
|----------|----------------------|
| @deva[परमवाच्] | @deva[परमवाचा] or @deva[परमवाचा] |
| @deva[परमत्वच्] | @deva[परमत्वचा] or @deva[परमत्वचा] |

**Restrictions:**
- "Oxytone" — @deva[अवाचा], @deva[सुवाचा], @deva[सुत्वचा] (tatpuruṣa with first-member accent by @ref[6.2.2]) are excluded
- "Non-permanent compound" — @deva[अग्निचिता], @deva[सोमसुता] (nitya-samāsa by @ref[2.2.19]) retain original second-member accent`,

  '61170': `@deva[अञ्चेश्छन्दस्यसर्वनामस्थाने] — In the Vedas, case endings other than @deva[सर्वनामस्थान] are accented after stems ending in @deva[अञ्च्].

@deva[इन्द्रा दधीची अस्थभिः] (Ṛg I.84.13) — @deva[दधीच्] had accent on @deva[धी] by @ref[6.1.222], but the case affix @deva[अस्] takes accent here.

@note[Though "instrumental and later" was already understood, @deva[असर्वनामस्थान] is used to include @deva[शस्] (accusative plural) as well: @deva[प्रतीचा बाहून् प्रतिभङ्व्येषाम्].]`,

  '61171': `@deva[ऊठ्स्विदमापद्ग्नोः सर्वनामस्थानेऽसर्वनामस्थाने] — The @deva[असर्वनामस्थान] endings are accented after these stems:

| Stem | Examples |
|------|----------|
| Stems with @deva[ऊठ्] substitute (for @deva[वाह्]) @ref[6.4.132] | @deva[प्रष्ठौहः], @deva[प्रष्ठौहा] |
| @deva[इदम्] (when oxytone) | @deva[आभ्याम्], @deva[एभिः] |
| @deva[पद्], @deva[दत्], etc. through @deva[निश्] @ref[6.1.63] | @deva[निपदश्चतुरो], @deva[या दताधावति] |
| @deva[अप्] | @deva[अपः], @deva[अद्भिः], @deva[अद्भ्यः] |
| @deva[पुंस्] | @deva[पुंसः], @deva[पुम्भ्याम्], @deva[पुंसा] |
| @deva[रै] | @deva[रायः], @deva[राभ्याम्], @deva[राभिः] |
| @deva[दिव्] | @deva[दिवः], @deva[दिवा], @deva[दिवे] |

@note[For @deva[इदम्] with @deva[अन्वादेश] @ref[2.4.32], the final is @deva[अनुदात्त], so this rule doesn't apply: @deva[अथो आभ्यां निपुणमधीत].]`,

  '61172': `@deva[अष्टाभ्य औश्] — The @deva[असर्वनामस्थान] endings after @deva[अष्टन्] "eight" are accented when it takes the long form @deva[अष्टा].

| Long form | Short form |
|-----------|------------|
| @deva[अष्टाभिः] | @deva[अष्टभिः] |
| @deva[अष्टाभ्यः] | @deva[अष्टभ्यः] |
| @deva[अष्टासु] | @deva[अष्टसु] |

The use of @deva[दीर्घात्] indicates that the @deva[आ]-lengthening of @ref[7.2.84] is optional. It also ensures that @deva[अष्टान्] (with long @deva[आ]) receives the @deva[षट्] designation, preventing @ref[6.1.180] from applying.`,

  '61173': `@deva[अतोऽनुपधायाः] — After an oxytone participle in @deva[अत्] (without @deva[नुट्] augment), the feminine @deva[ई] and vowel-initial weak case endings are accented.

**Examples:**
| Participle | Feminine | Instrumental |
|------------|----------|--------------|
| @deva[तुदत्] | @deva[तुदती] | @deva[तुदता] |
| @deva[नुदत्] | @deva[नुदती] | @deva[नुदता] |
| @deva[लुनत्] | @deva[लुनती] | @deva[लुनता] |
| @deva[पुनत्] | @deva[पुनती] | @deva[पुनता] |

**When @deva[नुट्] is present:**
@deva[तुदन्ती], @deva[नुदन्ती] — the rule does not apply.

**Vārtika:**
The words @deva[बृहती] and @deva[महती] are also included: @deva[बृहती], @deva[महती], @deva[बृहता], @deva[महता].`,

  '61174': `@deva[हलन्ताच्च] — The same endings are accented when a semivowel substitutes for an accented final vowel and is preceded by a consonant.

**Examples:**
| Base | Feminine | Instrumental |
|------|----------|--------------|
| @deva[कर्तृ] + @deva[ई] | @deva[कर्त्री] | @deva[कर्त्रा] |
| @deva[हर्तृ] + @deva[ई] | @deva[हर्त्री] | @deva[हर्त्रा] |
| @deva[प्रलवितृ] | @deva[प्रलवित्री] | @deva[प्रलवित्रा] |

These @deva[तृच्]-ending words have acute on the final by @ref[6.1.163].

**Restriction — "preceded by consonant":**
@deva[बहुतितउ] → @deva[बहुतितवा] — the @deva[व्] is preceded by a vowel, so the affix gets @deva[स्वरित] by @ref[8.2.4], not @deva[उदात्त].

**Vārtika:**
Also applies when the stem ends in @deva[न्]: @deva[वाक्पत्नी], @deva[चित्पत्नी].`,

  '61175': `@deva[ऊङुत्तरपदे] — But not when the vowel is the feminine @deva[ऊ] @ref[4.1.66] or the final of a root.

**Feminine @deva[ऊ] examples:**
@deva[ब्रह्मबन्धू] → @deva[ब्रह्मबन्ध्वा], @deva[ब्रह्मबन्ध्वे] — affix is @deva[स्वरित], not @deva[उदात्त]

**Root-final examples:**
@deva[सकृल्लू] → @deva[सकृल्ल्वा], @deva[सकृल्ल्वे] — the @deva[ऊ] being the root final, the semivowel substitute doesn't trigger affix accent

The general rule @ref[8.2.4] applies, making the affix @deva[स्वरित].`,

  '61176': `@deva[ह्रस्वस्य गुणः] — The otherwise unaccented @deva[मत्] (@deva[वत्]) takes acute when the oxytone stem ends in a light vowel, or when the affix has the @deva[नुट्] augment.

**After light vowel:**
@deva[अग्निमान्], @deva[वायुमान्], @deva[कर्तृमान्], @deva[हर्तृमान्]

**With @deva[नुट्]:**
@deva[अक्षण्वता], @deva[शीर्षण्वता] — @deva[अक्षि] takes @deva[अनङ्] substitute @ref[7.1.76], then @deva[नुट्] @ref[8.2.16]

**Exceptions:**
- Not oxytone: @deva[वसुमान्] (@deva[वसु] has first-syllable accent)
- Heavy intervening: @deva[मरुत्वान्] — the @deva[त्] makes @deva[उ] heavy

**Vārtikas:**
- @deva[मतुप्] is accented after @deva[रे]: @deva[आरेवान्] (from @deva[रयि])
- Prohibition after @deva[त्रि]: @deva[त्रिवतीर्याज्यानुवाक्या भवन्ति]`,

  '61177': `@deva[हृस्वस्य गुणः नाम्नः] — After an oxytone stem ending in a light vowel, the genitive ending @deva[नाम्] is optionally accented.

**Examples:**
| Genitive (options) |
|-------------------|
| @deva[अग्नीनाम्] or @deva[अग्नीनाम्] |
| @deva[वायूनाम्] or @deva[वायूनाम्] |
| @deva[कर्तॄणाम्] or @deva[कर्तॄणाम्] |

**Restrictions:**
- "Light vowel" (before @deva[मतुप्]) — @deva[कुमारीणाम्] excluded (ends in long vowel)
- "Oxytone" — @deva[त्रपूणाम्], @deva[वसूनाम्] excluded (first-syllable accent)`,

  '61178': `@deva[ङीबन्ताद्वा छन्दसि] — In the Vedas, @deva[नाम्] is optionally accented after feminine stems in @deva[ई].

**Examples:**
| Accented | Unaccented |
|----------|------------|
| @deva[अभिभञ्जतीनाम्] | @deva[नदीनाम् परि] |
| @deva[बह्वीनाम् पिता] | @deva[जयन्तीनाम् मरुतः] |`,

  '61179': `@deva[षट्त्रिचतुर्भ्यो हलादेः] — Case endings beginning with a consonant are accented after the @deva[षट्] numerals @ref[1.1.24] and after @deva[त्रि] and @deva[चतुर्].

**Examples:**
@deva[षण्णाम्], @deva[षड्भिः], @deva[षड्भ्यः], @deva[पञ्चानाम्], @deva[सप्तानाम्], @deva[त्रिभिः], @deva[त्रिभ्यः], @deva[त्रयाणाम्], @deva[चतुर्णाम्]

@note[The @deva[अन्तोदात्त] requirement is lifted — this applies even to @deva[पञ्चन्] and @deva[नवन्] which have first-syllable accent.]

**Restriction — "consonant-initial":**
@deva[चतस्रः पश्य] — vowel-initial @deva[शस्] is governed by @ref[6.1.167] and @ref[7.2.99].`,

  '61180': `@deva[बहुषु बहुवचने झल्युपोत्तमम्] — These numerals, when taking @deva[भ]- or @deva[स]-initial endings, get acute on the penultimate syllable if the word has three or more syllables.

**Examples:**
@deva[पञ्चभिः], @deva[सप्तभिः], @deva[तिसृभिः], @deva[चतुर्भिः]

**Why "penultimate"?**
The term presupposes at least three syllables.

**Restriction — "@deva[भ]- and @deva[स]-initial":**
@deva[पञ्चानाम्], @deva[सप्तानाम्] — @deva[नाम्] is not @deva[भ]- or @deva[स]-initial

**Monosyllabic result:**
@deva[षड्भिः], @deva[षड्भ्यः] — only two syllables, so accent falls on the final by @ref[6.1.179]`,

  '61181': `@deva[भाषायामन्यतरस्याम्] — In secular language, this penultimate accent is optional.

**Examples:**
| Obligatory (Vedic) | Optional (secular) |
|--------------------|-------------------|
| @deva[पञ्चभिः] | @deva[पञ्चभिः] or @deva[पञ्चभिः] |
| @deva[सप्तभिः] | @deva[सप्तभिः] or @deva[सप्तभिः] |
| @deva[तिसृभिः] | @deva[तिसृभिः] or @deva[तिसृभिः] |

In the alternative, @ref[6.1.179] applies.`,

  '61182': `@deva[गोश्वन्साववर्णाद्राजञ्चक्रुङ्कृतः] — The foregoing rules (@ref[6.1.168] onward) do not apply after @deva[गो], @deva[श्वन्], stems ending in @deva[अ]/आ before @deva[सु], @deva[राज्], @deva[अञ्च्] (with nasal), @deva[क्रुञ्च्], or @deva[कृत्].

**Examples:**
| Stem | Forms | Notes |
|------|-------|-------|
| @deva[गो] | @deva[गवा], @deva[गवे], @deva[गोभ्याम्] | @ref[6.1.168] blocked |
| @deva[श्वन्] | @deva[शुना], @deva[शुने], @deva[श्वभ्याम्] | |
| @deva[साववर्ण] | @deva[येभ्यः], @deva[तेभ्यः], @deva[केभ्यः] | Stems with @deva[अ]/आ before nom. sg. @deva[सु] |
| @deva[राज्] | @deva[राजा], @deva[राजे], @deva[पराराजा] | |
| @deva[अञ्च्] (with nasal) | @deva[प्राञ्चा], @deva[प्राङ्भ्याम्] | When nasal is elided: @deva[प्राचा], @deva[प्राग्भ्याम्] — affix IS accented |
| @deva[क्रुञ्च्] | @deva[क्रुञ्चा], @deva[क्रुञ्चे] | |
| @deva[कृत्] | @deva[कृता], @deva[कृते] | |

@note[@deva[श्वन्] is explicitly mentioned though it is @deva[साववर्ण] (nom. sg. @deva[श्वा]) to show that @deva[न]-elision is not @deva[असिद्ध] for this rule. Thus @deva[नृ] and @deva[पितृ] (which become @deva[ना], @deva[पिता] after @deva[न]-elision) ARE subject to the accent rules.]`,

  '61183': `@deva[दिवो झलादेरनुदात्तम्] — After @deva[दिव्], case endings beginning with @deva[भ] or @deva[स] are unaccented.

**Examples:**
@deva[द्युभ्याम्], @deva[द्युभिः]

This overrides @ref[6.1.168] and @ref[6.1.171].

**Restriction — "@deva[झल्]-initial":**
@deva[दिवा], @deva[दिवे] — vowel-initial endings ARE accented by @ref[6.1.171].`,

  '61184': `@deva[नृतोऽन्यतरस्याम्] — After @deva[नृ], @deva[भ]- or @deva[स]-initial endings are optionally unaccented.

| Accented | Unaccented |
|----------|------------|
| @deva[नृभिः] | @deva[नृभिः] |
| @deva[नृभ्यः] | @deva[नृभ्यः] |
| @deva[नृभ्याम्] | @deva[नृभ्याम्] |
| @deva[नृषु] | @deva[नृषु] |

Vowel-initial: @deva[नरा], @deva[नरे] — accent rules apply normally.`,

  '61185': `@deva[तित्स्वरितम्] — An affix with indicatory @deva[त्] has @deva[स्वरित] (circumflex) accent.

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[चिकीर्ष्यम्], @deva[जिहीर्ष्यम्] | @deva[यत्] | @ref[3.1.97] |
| @deva[कार्यम्], @deva[हार्यम्] | @deva[ण्यत्] | @ref[3.1.124] |

This overrides @ref[3.1.3] which gives all affixes first-syllable acute. Exceptions are given from @ref[6.1.213] onward.`,

  '61186': `@deva[लसार्वधातुकमनुदात्तं ङित्यनङि सानुबन्धके शित्येवानुदात्तं] — The @deva[सार्वधातुक] personal endings are unaccented after:
1. The periphrastic future marker @deva[तासि]
2. A root with unaccented vowel or indicatory @deva[ङ्] in the Dhātupāṭha (except @deva[ह्नुङ्] and @deva[इङ्])
3. What has final @deva[अ] in grammatical instruction (@deva[उपदेश])

This is a key rule for verbal accent, making the endings lose their accent after these specific conditions.`,

  '61187': `@deva[सिचश्च परे] — In the @deva[सिच्] Aorist, the first syllable may optionally be acute.

**Examples:**
| Option 1 | Option 2 |
|----------|----------|
| @deva[मा हि कार्ष्टाम्] | @deva[मा हि कार्ष्टाम्] |
| @deva[मा हि लाविष्टाम्] | @deva[मा हि लाविष्टाम्] |

The indicatory @deva[च्] of @deva[सिच्] causes the otherwise unaccented @deva[इट्] augment to become acute @ref[6.1.163].

**Vārtika:**
A @deva[पित्] affix after @deva[अनिट्] @deva[सिच्] is optionally @deva[उदात्त]: @deva[मा हि कार्षम्] or @deva[मा हि कार्षम्]. But with @deva[इट्], accent is on @deva[इ]: @deva[मा हि लाविषम्] or @deva[मा हि लाविषम्].`,

  '61188': `@deva[स्वपाद्यनिटामुपदेशेऽनुदात्तात्] — Before vowel-initial @deva[सार्वधातुक] endings (without @deva[इट्]), the first syllable is optionally acute after @deva[स्वप्] etc. or @deva[हिंस्].

**Examples:**
| Option 1 | Option 2 |
|----------|----------|
| @deva[स्वपन्ति] | @deva[स्वपन्ति] |
| @deva[श्वसन्ति] | @deva[श्वसन्ति] |
| @deva[हिंसन्ति] | @deva[हिंसन्ति] |

**Restrictions:**
- "Vowel-initial" — @deva[स्वप्यात्], @deva[हिंस्यात्] (consonant-initial) excluded
- "Without @deva[इट्]" — @deva[स्वपितः], @deva[श्वसितः] excluded
- Applies to @deva[ङित्] affixes; not to @deva[स्वपानि], @deva[हिनसानि]`,

  '61189': `@deva[आद्यन्तौ टकितौ] — Reduplicated verbs have acute on the first syllable before vowel-initial (non-@deva[इट्]) @deva[सार्वधातुक] endings.

**Examples:**
@deva[ददति], @deva[ददतु], @deva[दधति], @deva[दधतु], @deva[जक्षति], @deva[जक्षतुः], @deva[जाग्रति], @deva[जाग्रतुः]

**Before consonant affixes:** @deva[दद्यात्]
**Before @deva[सेट्] affixes:** @deva[जक्षितः]

@note[Though @deva[आदि] was understood from the previous sūtra, its repetition makes this rule obligatory, not optional.]`,

  '61190': `@deva[पितश्च] — The first syllable of reduplicates is also acute before the unaccented singular endings @deva[तिप्], @deva[सिप्], @deva[मिप्].

**Examples:**
@deva[ददाति], @deva[जहाति], @deva[दधाति], @deva[जिहीते], @deva[मिमीते]

These endings are @deva[अनुदात्त] by @ref[3.1.4]. The word @deva[अनुदात्त] is construed as a bahuvrīhi: "an affix in which there is no udātta vowel." This allows the rule to apply when part of the affix is elided or a semivowel is substituted: @deva[मा हि दधात्], @deva[दधात्यत्र].`,

  '61191': `@deva[सर्वस्य सौ] — @deva[सर्व] has acute on the first syllable when case endings follow.

**Examples:**
@deva[सर्वः], @deva[सर्वाः], @deva[सर्वे]

**Before taddhita:**
@deva[सर्वतरः], @deva[सर्वतमः] — accent on @deva[र्व] (by affix accent)

@deva[सर्व] is end-acute by nipātana in the Uṇādi list. Being @deva[अनुदात्तादि], it takes @deva[अञ्] to form @deva[सार्वः] "derivative of sarva."

**Vārtika:**
Does not apply with @deva[अकच्]: @deva[सर्वकः] — final accent by @ref[6.1.163].`,

  '61192': `@deva[ताजब्ब्राह्मणादीनां च] — In @deva[भी], @deva[ह्री], @deva[भृ], @deva[हु], @deva[मद्], @deva[जन्], @deva[धन्], @deva[दरिद्रा], @deva[जागृ] and their reduplicates, the accent falls on the syllable before the @deva[पित्] @deva[सार्वधातुक] ending.

**Examples:**
| Root | Form |
|------|------|
| @deva[भी] | @deva[बिभेति] |
| @deva[ह्री] | @deva[जिहेति] |
| @deva[भृ] | @deva[बिभर्त्ति] |
| @deva[हु] | @deva[जुहोति] |
| @deva[मद्] | @deva[ममत्तु] (Vedic, with @deva[श्लु]) |
| @deva[जन्] | @deva[जजनत्] (leṭ) |
| @deva[धन्] | @deva[दधनत्] (leṭ) |
| @deva[दरिद्रा] | @deva[दरिद्राति] |
| @deva[जागृ] | @deva[जागर्त्ति] |

This overrides first-syllable accent. Before non-@deva[पित्] affixes: @deva[दरिद्रति] (first-syllable accent).`,

  '61193': `@deva[लिति] — The acute falls on the syllable immediately preceding an affix with indicatory @deva[ल्].

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[चिकीर्षकः], @deva[जिहीर्षकः] | @deva[ण्वुल्] | @ref[3.1.133] |
| @deva[भौरिकिविधम्] | @deva[विधल्] | @ref[4.2.54] |
| @deva[ऐषुकारिभक्तम्] | @deva[भक्तल्] | @ref[4.2.54] |

Accent falls on @deva[कि] and @deva[रि] respectively.`,

  '61194': `@deva[णमुलोर्वा] — The first syllable may optionally be acute when the absolutive affix @deva[णमुल्] follows.

**Examples:**
@deva[लोलूयम्] or @deva[लोलूयम्]

In the reduplicate @deva[लोलू], the second part @deva[लू] is unaccented by @ref[8.1.3]. This rule makes @deva[लो] optionally accented. When @deva[लो] is not accented, @deva[लू] gets accent by @deva[लित्] accent.

@note[This applies to polysyllabic absolutives, i.e., reduplicated forms @ref[8.1.4].]`,

  '61195': `@deva[वस्वेकाजाद्घसाम्] — Roots shown with a final vowel in the Dhātupāṭha may optionally have first-syllable acute before Passive @deva[यक्] when the sense is reflexive.

**Examples:**
| Reflexive (options) | Passive |
|---------------------|---------|
| @deva[लूयते] or @deva[लूयते] | @deva[लूयते देवदत्तेन] (passive — no option) |
| @deva[स्तीर्यते] or @deva[स्तीर्यते] | |
| @deva[जायते] or @deva[जायते] | |

@deva[केदारः स्वयमेव] "the field (does it) by itself" — reflexive meaning.

This applies to @deva[जन्], @deva[खन्], @deva[सन्] with long @deva[आ] substitute @ref[6.4.43].

**Restriction — "vowel-final in upadesa":**
@deva[भिद्यते स्वयमेव] — consonant-final root, no option.`,

  '61196': `@deva[सेटीत्थलि] — Before the Perfect 2nd sg. @deva[थ] with @deva[इ] augment, the accent may fall on the first syllable, on @deva[इ], or on the ending.

**Examples:**
@deva[लुलविथ], @deva[लुलविथ], @deva[लुलविथ], @deva[लुलविथ]

Since @deva[थल्] has indicatory @deva[ल्], the pre-affix syllable may also be accented @ref[6.1.193], giving four possible forms.

When @deva[थ] is @deva[अनिट्]: @deva[ययाथ] — only @deva[लिट्] accent applies.`,

  '61197': `@deva[ञ्नित्यादिर्नित्यम्] — What is derived with an affix having indicatory @deva[ञ्] or @deva[न्] has acute on the first syllable invariably.

**Examples:**
| Form | Affix | Reference |
|------|-------|-----------|
| @deva[गार्ग्यः] | @deva[यञ्] | @ref[4.1.105] |
| @deva[वासुदेवकः], @deva[अर्जुनकः] | @deva[थुन्] | @ref[4.3.98] |

This overrides @ref[3.1.3].

**When affix is elided:**
@deva[गर्गाः], @deva[बिदाः], @deva[चञ्चाः] — having lost @deva[यञ्], @deva[अञ्], @deva[कन्], they lose this accent too. The affix effect does not remain after elision.`,

  '61198': `@deva[आमन्त्रितस्य च] — The first syllable of a Vocative has acute accent.

**Examples:**
@deva[देवदत्त]!, @deva[देवदत्तौ]!, @deva[देवदत्ताः]!

This overrides the final accent of @ref[6.2.148].

@note[Even when the affix is elided by @deva[लुक्] etc., this accent effect remains by @ref[1.1.62]: @deva[सर्पिरागच्छ]!, @deva[सप्ता गच्छत]!]`,

  '61199': `@deva[पथिमथ्योः सर्वनामस्थाने] — @deva[पथिन्] and @deva[मथिन्] have first-syllable acute before strong case endings.

| Strong cases | Weak cases |
|--------------|------------|
| @deva[पन्थाः], @deva[पन्थानौ], @deva[पन्थानः] | @deva[पथः पश्य] |
| @deva[मन्थाः], @deva[मन्थानौ], @deva[मन्थानः] | @deva[मथः पश्य] |

These are derived by Uṇādi @deva[इनि] (IV.12-13) and are normally oxytone by @ref[3.1.3]. Before weak cases, the accented @deva[इन्] is elided, so @ref[6.1.162] applies: @deva[पथिप्रियः] has final accent on first member.`,

  '61200': `@deva[तवैकारयोश्च] — The infinitive in @deva[तवै] has acute on both the first and last syllables simultaneously.

**Examples:**
@deva[कर्तवै], @deva[हर्तवै]

This overrides @ref[3.1.3] (which would accent @deva[त]) and also overrules @ref[6.1.158] (single accent per word). The infinitive @deva[तवै] is exceptional in having two accents.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.1.151-200). Total: ${Object.keys(vasu).length}`);
