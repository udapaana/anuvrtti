import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '31101': `@deva[अवद्यपण्यवर्याश्च] — "The words @deva[अवद्य], @deva[पण्य], and @deva[वर्या] are irregularly formed."

| Word | Meaning | Regular Form |
|------|---------|--------------|
| @deva[अवद्य] | condemnable | @deva[अनुद्य] (from @deva[वद्] + @deva[क्यप्]) |
| @deva[पण्य] | saleable | @deva[पाण्य] (from @deva[पण्] + @deva[ण्यत्]) |
| @deva[वर्या] | unobstructable | @deva[वृत्या] (from @deva[वृत्] + @deva[यत्]) |

**Examples:**
- @deva[अवद्यं पापं] "condemnable sin"
- @deva[पण्यः कम्बलः] "saleable blanket"
- @deva[शतेन वर्या] "unobstructed by a hundred"`,

  '31102': `@deva[वाहनं वह्यम्] — "The word @deva[वह्य] is irregularly formed when meaning 'a vehicle'."

| Context | Form | Meaning |
|---------|------|---------|
| Vehicle | @deva[वह्यं शकटम्] | a cart (instrument of carrying) |
| Other | @deva[वाह्यः] (with @deva[ण्यत्]) | an ox |`,

  '31103': `@deva[स्वाम्यर्थे च] — "The word @deva[अर्य] is irregularly formed when meaning 'lord' or 'a Vaiśya'."

The root @deva[ऋ] "to go" takes @deva[यत्] (not @deva[ण्यत्]) for these meanings:
- @deva[अर्यः स्वामी] "honored lord"
- @deva[अर्यो वैश्यः] "honored Vaiśya"

@note[Per @ref[6.1.213], @deva[यत्] normally places accent on the first syllable, but when @deva[अर्य] means "lord," the accent falls on the last syllable.]`,

  '31104': `@deva[उपसर्या काल्यप्रजने] — "The word @deva[उपसर्या] is irregularly formed when meaning 'ready for conception'."

Formed from @deva[उप] + @deva[सृ] "to move" + @deva[यत्]:
- @deva[उपसर्या गौः] "cow fit for the bull"
- @deva[उपसर्या वडवा] "mare fit for the horse"

When meaning simply "approachable": @deva[उपसार्या] (regular @deva[ण्यत्] form)`,

  '31105': `@deva[अजर्यं सङ्गते] — "The word @deva[अजर्य] 'imperishable' is irregular when qualifying @deva[सङ्गत] 'friendship'."

**Formation:** @deva[अ] + @deva[जृ] + @deva[यत्] → @deva[अजर्यम्]

**Example:** @deva[अजर्यं नोऽस्तु सङ्गतम्] "May our friendship be imperishable."

When not qualifying friendship: @deva[अजरिता कम्बलः] "undecaying blanket"`,

  '31106': `@deva[सुपि च क्यप्] — "After @deva[वद्] 'to speak', @deva[क्यप्] is also used when governing an @deva[उपपद] and without a preposition."

Both @deva[क्यप्] and @deva[यत्] are valid:

| With @deva[क्यप्] | With @deva[यत्] | Meaning |
|-----------------|---------------|---------|
| @deva[ब्रह्मोद्यम्] | @deva[ब्रह्मवद्यम्] | told by Brahman/Vedas |
| @deva[सत्योद्यम्] | @deva[सत्यवद्यम्] | speaking truth |`,

  '31107': `@deva[भावे भूवः] — "After @deva[भू] 'to be', @deva[क्यप्] is used with an @deva[उपपद] (no preposition) to denote condition (@deva[भाव])."

| Formation | Meaning |
|-----------|---------|
| @deva[ब्रह्मभुवं गतः] = @deva[ब्रह्मत्वं गतः] | gone to Brahman-hood |
| @deva[देवभुवं गतः] = @deva[देवत्वं गतः] | gone to divinity |

@note[The @deva[भाव] sense governs subsequent sūtras as well.]`,

  '31108': `@deva[हनस्तश्च] — "After @deva[हन्] 'to kill', @deva[क्यप्] is used (with @deva[उपपद], no preposition, @deva[भाव] sense), and @deva[त] replaces the final."

**Derivation:**
@deva[ब्रह्म] + @deva[हन्] + @deva[क्यप्] → @deva[ब्रह्म] + @deva[हत्] + @deva[य] → @deva[ब्रह्महत्या] "Brahman-murder"

Similarly: @deva[अश्वहत्या] "killing a horse"

Without @deva[उपपद]: @deva[घातः] "a blow" (from @deva[हन्] + @deva[णिच्] + @deva[घञ्])`,

  '31109': `@deva[इष्टुशासवृजुषः क्यप्] — "After @deva[इ], @deva[स्तु], @deva[शास्], @deva[वृ], and @deva[जुष्], the affix @deva[क्यप्] is used."

| Root | Meaning | Form | Translation |
|------|---------|------|-------------|
| @deva[इ] | to go | @deva[इत्यः] | to be gone |
| @deva[स्तु] | to praise | @deva[स्तुत्यः] | to be praised |
| @deva[शास्] | to govern | @deva[शिष्यः] | to be governed (pupil) |
| @deva[वृ] | to respect | @deva[वृत्यः] | to be respected |
| @deva[जुष्] | to please | @deva[जुष्यः] | to be pleased |

@note[@deva[त] is added before @deva[य] by @ref[6.1.71] for short-vowel roots.]`,

  '31110': `@deva[ऋतश्च] — "After roots with penultimate short @deva[ऋ], @deva[क्यप्] is used—except @deva[कॢप्] and @deva[चृत्]."

| Root | With @deva[क्यप्] | Exception |
|------|-----------------|-----------|
| @deva[वृत्] | @deva[वृत्यम्] | — |
| @deva[वृध्] | @deva[वृध्यम्] | — |
| @deva[कॢप्] | — | @deva[कल्प्यम्] (with @deva[ण्यत्]) |
| @deva[चृत्] | — | @deva[चर्त्यम्] (with @deva[ण्यत्]) |

@note[The @deva[त्] in @deva[ऋत्] indicates short @deva[ऋ] (not long @deva[ॠ]) per @ref[1.1.70].]`,

  '31111': `@deva[खनश्च ईत्] — "After @deva[खन्] 'to dig', @deva[क्यप्] is used, with long @deva[ई] replacing the final."

**Derivation:** @deva[खन्] + @deva[क्यप्] → @deva[ख] + @deva[ई] + @deva[य] → @deva[खेयम्] "to be dug"

@note[Long @deva[ई] prevents the lengthening of @deva[अ] to @deva[आ] that would occur by @ref[6.4.43].]`,

  '31112': `@deva[भृञोऽसंज्ञायाम्] — "After @deva[भृञ्] 'to bear', @deva[क्यप्] is used when not a proper name."

@deva[भृ] + @deva[क्यप्] → @deva[भृत्यः] (pl. @deva[भृत्याः]) "servants" — those who ought to be supported

**When a proper name:** @deva[भार्यः] (with @deva[ण्यत्])

@note[With @deva[सम्], the option exists: @deva[सम्भृत्याः] or @deva[सम्भार्याः].]`,

  '31113': `@deva[मृजेर्वा] — "After @deva[मृज्] 'to cleanse', @deva[क्यप्] is optionally used."

| With @deva[क्यप्] | With @deva[ण्यत्] |
|-----------------|-----------------|
| @deva[परिमृज्यः] | @deva[परिमार्ग्यः] |

**Derivation of @deva[परिमार्ग्य]:**
@deva[परिमृज्] + @deva[ण्यत्] → @deva[परिमृग्] + @deva[य] (by @ref[7.3.52]) → @deva[परिमार्ग्य] (by @ref[7.2.114])`,

  '31114': `@deva[राजसूयसूर्यमृषोद्यादयश्च] — "The words @deva[राजसूय], @deva[सूर्य], @deva[मृषोद्य], @deva[रुच्य], @deva[कुप्य], @deva[कृष्ट], @deva[पच्य], and @deva[अव्यथ्य] are irregularly formed with @deva[क्यप्]."

| Word | Derivation | Meaning |
|------|------------|---------|
| @deva[राजसूयः] | @deva[राज] + @deva[सू] + @deva[क्यप्] | coronation sacrifice |
| @deva[सूर्यः] | @deva[सृ]/सू + @deva[क्यप्] | sun (that which moves/impels) |
| @deva[मृषोद्यम्] | @deva[मृष] + @deva[वद्] + @deva[क्यप्] | false speech |`,

  '31115': `@deva[भिद्योद्ध्यौ नद्यार्थे] — "The words @deva[भिद्य] and @deva[उद्ध्य] are irregularly formed with @deva[क्यप्] when meaning 'river'."

| Word | Derivation | Meaning |
|------|------------|---------|
| @deva[भिद्यः] | @deva[भिद्] + @deva[क्यप्] | river that breaks its banks |
| @deva[उद्ध्यः] | @deva[ऊज्झ्] + @deva[क्यप्] | river whose waters overflow |

When not meaning "river": @deva[भेत्ता], @deva[उज्झिता] (regular forms)`,

  '31116': `@deva[पुष्यसिध्यौ नक्षत्रे] — "The words @deva[पुष्य] and @deva[सिद्ध्य] are irregularly formed with @deva[क्यप्] when names of asterisms."

| Word | Derivation | Meaning |
|------|------------|---------|
| @deva[पुष्यः] | @deva[पुष्] + @deva[क्यप्] | asterism where things are nourished |
| @deva[सिद्ध्यः] | @deva[सिध्] + @deva[क्यप्] | asterism where things are accomplished |

When not asterism names: @deva[पोषणम्] "nourishing," @deva[सेधनम्] "accomplishing"`,

  '31117': `@deva[विपूयविनीयजित्याश्च] — "The words @deva[विपूय], @deva[विनीय], and @deva[जित्या] are irregularly formed meaning 'muñja grass', 'sediment', and 'plough'."

| Irregular | Regular | Meaning |
|-----------|---------|---------|
| @deva[विपूयः] | @deva[विपाव्यम्] | muñja grass (to be purified for rope) |
| @deva[विनीयः] | @deva[विनेयम्] | sediment/sin |
| @deva[जित्यः] | @deva[जेयम्] | plough (to be conquered by strength) |`,

  '31118': `@deva[प्रत्यपिभ्यां ग्रहश्छन्दसि] — "In the Vedas, @deva[ग्रह्] 'to seize' takes @deva[क्यप्] after @deva[प्रति] and @deva[अपि]."

**Vedic:** @deva[मत्तस्य न प्रतिगृह्यम्], @deva[नापिगृह्यम्]
**Classical:** @deva[प्रतिग्राह्यम्], @deva[अपिग्राह्यम्] (with @deva[ण्यत्])`,

  '31119': `@deva[शब्दाश्रयबाह्यपक्षेषु ग्रहः] — "@deva[ग्रह्] takes @deva[क्यप्] when meaning 'word', 'dependent', 'outside', or 'partisan'."

| Context | Form | Meaning |
|---------|------|---------|
| Word | @deva[प्रगृह्यम्] | words that don't undergo sandhi (@ref[1.1.11]) |
| Dependent | @deva[गृह्यकाः शुकाः] | captive parrots |
| Outside | @deva[ग्रामगृह्या सेना] | army outside the village |`,

  '31120': `@deva[कृवृषोः वा] — "After @deva[कृ] and @deva[वृष्], @deva[क्यप्] is optionally used."

| Root | With @deva[क्यप्] | With @deva[ण्यत्] |
|------|-----------------|-----------------|
| @deva[कृ] | @deva[कृत्यम्] | @deva[कार्यम्] |
| @deva[वृष्] | @deva[वृष्यम्] | @deva[वर्ष्यम्] |`,

  '31121': `@deva[युज्युग्यम्] — "The word @deva[युग्य] is irregularly formed meaning 'a vehicle'."

@deva[युज्] + @deva[क्यप्] → @deva[युग्यम्] (with @deva[ज] → @deva[ग])

**Examples:**
- @deva[युग्यो गौ] "the yoked bull"
- @deva[युग्यो हस्ती] "the harnessed elephant"

When not meaning vehicle: @deva[योग्यम्] "suitable"`,

  '31122': `@deva[अमावास्यापूर्वपक्षाभ्यां वा] — "The word @deva[अमावस्या] is optionally irregular."

@deva[अमा] "together" + @deva[वस्] "to dwell" + @deva[ण्यत्]

Both forms are valid:
- @deva[अमावस्या] (without vṛddhi)
- @deva[अमावास्या] (with vṛddhi)

This refers to the day when sun and moon dwell together in the same constellation.`,

  '31123': `@deva[निष्टर्क्यदेवहूयादयश्छन्दसि] — "In the Vedas, the following irregular forms occur: @deva[निष्टर्क्य], @deva[देवहूय], @deva[प्रणीय], @deva[उन्नीय], @deva[उच्छिष्य], @deva[मर्य], @deva[स्तर्या], @deva[ध्वर्य], @deva[खन्य], @deva[खान्य], @deva[देवयज्या], @deva[आपृच्छ्य], @deva[प्रतिषीव्य], @deva[ब्रह्मवाद्य], @deva[भाव्य], @deva[स्ताव्य], and @deva[पचाय्यपृड्]."

These are extremely irregular formations found only in Vedic literature.`,

  '31124': `@deva[ॠहलोर्ण्यत्] — "The affix @deva[ण्यत्] comes after roots ending in @deva[ऋ] (long or short) or a consonant."

| Root | Form | Meaning |
|------|------|---------|
| @deva[कृ] | @deva[कार्यम्] | to be made |
| @deva[हृ] | @deva[हार्यम्] | to be taken |
| @deva[धृ] | @deva[धार्यम्] | to be held |
| @deva[वच्] | @deva[वाक्यम्] | to be spoken |
| @deva[पच्] | @deva[पाक्यम्] | to be cooked |`,

  '31125': `@deva[उदावश्यके] — "After roots ending in @deva[उ] (long or short), @deva[ण्यत्] is used when 'necessity' is meant."

| Root | Form | Meaning |
|------|------|---------|
| @deva[लु] | @deva[लाव्यम्] | must be cut |
| @deva[पु] | @deva[पाव्यम्] | must be purified |

When necessity is not indicated: @deva[लव्यम्] "to be cut" (with @deva[यत्])`,

  '31126': `@deva[आसुयुवपिरपिलपित्रपिचमश्च] — "After @deva[आसु], @deva[यु], @deva[वप्], @deva[रप्], @deva[लप्], @deva[त्रप्], and @deva[चम्], @deva[ण्यत्] is used."

| Root | Meaning | Form |
|------|---------|------|
| @deva[आसु] | to distill | @deva[आसाव्यम्] |
| @deva[यु] | to join | @deva[याव्यम्] |
| @deva[वप्] | to sow | @deva[वाप्यम्] |
| @deva[लप्] | to prate | @deva[लाप्यम्] |
| @deva[चम्] | to drink | @deva[आचाम्यम्] |`,

  '31127': `@deva[आनाय्योऽप्रतिष्ठायाम्] — "The word @deva[आनाय्य] is irregularly formed meaning 'impermanent'."

**Derivation:** @deva[आङ्] + @deva[नी] + @deva[ण्यत्] → @deva[आनाय्यः]

**Example:** @deva[आनाय्यो दक्षिणाग्निः] — a kind of Dakṣiṇāgni fire that is brought from the Gārhapatya fire and not permanently kept alive.`,

  '31128': `@deva[प्रणाय्योऽसम्मतौ] — "The word @deva[प्रणाय्य] is irregularly formed meaning 'disapproved'."

**Example:** @deva[प्रणाय्यश्चोरः] "the thief is to be disliked"

Regular form (when meaning "tractable"): @deva[प्रणेयः] (from @deva[प्र] + @deva[नी] + @deva[यत्])`,

  '31129': `@deva[पाय्यसान्नाय्यनिकाय्यधाय्याश्च] — "The words @deva[पाय्य], @deva[सान्नाय्य], @deva[निकाय्य], and @deva[धाय्या] are irregularly formed."

| Irregular | Regular | Meaning |
|-----------|---------|---------|
| @deva[पाय्यम्] | @deva[मेयम्] | a measure (from @deva[मा]) |
| @deva[सान्नाय्यम्] | @deva[सन्नेयम्] | oblation to fire |
| @deva[निकाय्यम्] | — | a dwelling |
| @deva[धाय्या] | — | sacrificial prayer |`,

  '31130': `@deva[कुण्डपाय्यसञ्चाय्यौ यज्ञे] — "The words @deva[कुण्डपाय्य] and @deva[सञ्चाय्य] are irregular when meaning 'a sacrifice'."

| Word | Derivation | Meaning |
|------|------------|---------|
| @deva[कुण्डपाय्यः] | @deva[कुण्ड] + @deva[पा] + @deva[यत्] + @deva[य] | sacrifice where Soma is drunk from a bowl |
| @deva[सञ्चाय्यः] | @deva[सम्] + @deva[चि] + @deva[ण्यत्] | sacrifice where Soma is collected |

When not sacrifices: @deva[कुण्डपानम्], @deva[सञ्चेयः]`,

  '31131': `@deva[परिचाय्योपचाय्यसमूह्या अग्नौ] — "The words @deva[परिचाय्य], @deva[उपचाय्य], and @deva[समूह्य] are irregular when naming fires."

| Word | Meaning |
|------|---------|
| @deva[परिचाय्यः] | sacrificial fire arranged in a circle |
| @deva[उपचाय्यः] | a kind of sacred fire |
| @deva[समूह्यः] | a kind of fire |

@note[@deva[समूह्यं चिन्वीत पशुकामः] — "One desiring cattle should pile the Samūhya fire."]`,

  '31132': `@deva[चित्याग्निचित्याश्च] — "The words @deva[चित्य] and @deva[अग्निचित्या] are also irregularly formed."

| Word | Meaning | Regular Form |
|------|---------|--------------|
| @deva[चित्यः] | fire (what is collected) | @deva[चेयम्] |
| @deva[अग्निचित्या] | arranging the fire | — |

@deva[चित्योऽग्निः] — "the funeral pile fire"

@note[The affix @deva[य] is added with augment @deva[तुक्] to denote condition. Accent is @deva[उदात्त] on the last vowel.]`,

  '31133': `@deva[ण्वुल्तृचौ] — "The affixes @deva[ण्वुल्] (@deva[अक]) and @deva[तृच्] (@deva[तृ]) come after all roots, expressing the agent."

| Root | With @deva[ण्वुल्] | With @deva[तृच्] |
|------|------------------|-----------------|
| @deva[कृ] | @deva[कारकः] | @deva[कर्ता] |
| @deva[हृ] | @deva[हारकः] | @deva[हर्ता] |

**Derivation of @deva[कारकः]:**
@deva[कृ] + @deva[ण्वुल्] → @deva[कार] + @deva[युँ] (by @ref[7.2.115]) → @deva[कार] + @deva[अक] (by @ref[7.1.1]) → @deva[कारकः]`,

  '31134': `@deva[नन्द्यादिभ्यो ल्युणिन्यचश्च] — "After @deva[नन्दादि], @deva[ग्रहादि], and @deva[पचादि] roots, the affixes @deva[ल्यु], @deva[णिनि], and @deva[अच्] are used respectively."

| Class | Affix | Example |
|-------|-------|---------|
| @deva[नन्दादि] | @deva[ल्यु] (@deva[अन]) | @deva[नन्दनः] |
| @deva[ग्रहादि] | @deva[णिनि] (@deva[इन्]) | @deva[ग्राहिन्] |
| @deva[पचादि] | @deva[अच्] (@deva[अ]) | @deva[पचः] |`,

  '31135': `@deva[इग्उपधज्ञाप्रीकिरः कः] — "After roots with @deva[इ], @deva[उ], or @deva[ऋ] before a final consonant, and after @deva[ज्ञा], @deva[प्री], and @deva[कॄ], the affix @deva[क] (@deva[अ]) is used."

| Root | Form | Meaning |
|------|------|---------|
| @deva[विक्षिप्] | @deva[विक्षिपः] | who throws |
| @deva[बुध्] | @deva[बुधः] | who knows |
| @deva[ज्ञा] | @deva[ज्ञः] | who knows |
| @deva[प्री] | @deva[प्रियः] | what pleases |
| @deva[कॄ] | @deva[किरः] | who scatters (a hog) |`,

  '31136': `@deva[आतश्चोपसर्गे] — "After roots ending in long @deva[आ] with a preposition, the affix @deva[क] is used."

| Formation | Meaning |
|-----------|---------|
| @deva[प्रस्थः] | from @deva[प्र] + @deva[स्था] + @deva[क] |
| @deva[सुग्लः] | from @deva[सु] + @deva[ग्लै] + @deva[क] (very weary) |
| @deva[सुम्लः] | from @deva[सु] + @deva[म्लै] + @deva[क] (very languid) |

@note[Final @deva[आ] is dropped before @deva[क] by @ref[6.4.64].]`,

  '31137': `@deva[पाघ्राध्मास्थाद्भ्यः शः] — "After @deva[पा], @deva[घ्रा], @deva[ध्मा], @deva[धे], and @deva[दृश्] with a preposition, the affix @deva[श] (@deva[अ]) is used."

| Root | With Prefix | Form |
|------|-------------|------|
| @deva[पा] | @deva[उत्] | @deva[उत्पिबः] |
| @deva[घ्रा] | @deva[उत्] | @deva[उज्जिघ्रः] |
| @deva[ध्मा] | @deva[उत्] | @deva[उद्धमः] |
| @deva[धे] | @deva[उत्] | @deva[उद्धयः] |
| @deva[दृश्] | @deva[उत्] | @deva[उत्पश्यः] |`,

  '31138': `@deva[लिम्पविन्ददारिपारिवेदिउदेजिचेतिसातिसाहिभ्यः] — "After @deva[लिम्प्], @deva[विन्द्], @deva[धारि], @deva[पारि], @deva[वेदि], @deva[उदेजि], @deva[चेति], @deva[साति], and @deva[साहि], @deva[श] is used without a preposition."

| Root | Meaning | Form |
|------|---------|------|
| @deva[लिम्प्] | to smear | @deva[लिम्पः] |
| @deva[विन्द्] | to acquire | @deva[विन्दः] |
| @deva[धारि] | to hold | @deva[धारयः] |
| @deva[वेदि] | to know | @deva[वेदयः] |

@note[With preposition: @deva[प्रलिपः] (affix @deva[क] instead).]`,

  '31139': `@deva[दाधाघ्वोः अनुपसर्गे वा] — "After @deva[दा] and @deva[धा] without a preposition, @deva[श] is optionally used."

| Root | With @deva[श] | With @deva[ण] |
|------|-------------|-------------|
| @deva[दा] | @deva[ददः] | @deva[दायः] |
| @deva[धा] | @deva[दधः] | @deva[धायः] |

With preposition: @deva[प्रदः], @deva[प्रधः] (no @deva[श])`,

  '31140': `@deva[ज्वलितिकसन्तेभ्यो णः] — "After roots from @deva[ज्वल्] to @deva[कस्] (about 56 roots) without a preposition, @deva[ण] is optionally used."

| Root | With @deva[ण] | With @deva[अच्] |
|------|-------------|---------------|
| @deva[ज्वल्] | @deva[ज्वालः] | @deva[ज्वलः] |
| @deva[चल्] | @deva[चालः] | @deva[चलः] |

@note[These are Bhvādi roots (Nos. 804-860 in Dhātupāṭha). With preposition, only @deva[अच्] is used.]`,

  '31141': `@deva[श्यैआभ्याद्यव्याद्या आस्रुसंत्रुअतीण्अवसाअवहलिहश्लिषश्वसश्च] — "@deva[ण] is also used after @deva[श्यै], roots ending in @deva[आ], and @deva[व्यद्], @deva[आस्रु], @deva[संत्रु], @deva[अतीण्], @deva[अवसा], @deva[अवह], @deva[लिह्], @deva[श्लिष्], @deva[श्वस्]."

@note[@deva[श्यै] becomes @deva[श्या] before affixes (by @ref[6.1.45]) and is thus included in "roots ending in @deva[आ]." Its separate mention excludes other prohibitive rules.]`,

  '31142': `@deva[दुनीभ्यामनुपसर्गे] — "After @deva[दु] and @deva[नी] without a preposition, @deva[ण] is used."

| Root | Form | Meaning |
|------|------|---------|
| @deva[दु] | @deva[दावः] | burning |
| @deva[नी] | @deva[नायः] | leading |

With preposition: @deva[प्रदयः] "burning," @deva[प्रणयः] "friendship"`,

  '31143': `@deva[ग्रहो वा] — "After @deva[ग्रह्] 'to seize', @deva[ण] is optionally used."

| With @deva[ण] | With @deva[अच्] | Meaning |
|-------------|---------------|---------|
| @deva[ग्राहः] | @deva[ग्रहः] | seizing/crocodile vs. planet |

@note[This is @deva[व्यवस्थितविभाषा] (definite option): @deva[ण] for water-animals (crocodile, shark), @deva[अच्] for celestial bodies.]`,

  '31144': `@deva[गृहे कः] — "After @deva[ग्रह्], @deva[क] is used when the agent denotes 'a house'."

@deva[ग्रह्] + @deva[क] → @deva[गृहम्] "house" (with samprasāraṇa: @deva[र] → @deva[ॠ])

| Form | Meaning |
|------|---------|
| @deva[गृहम्] (sg.) | house |
| @deva[गृहाः] (pl.) | wife |
| @deva[गृहाणि] (pl.) | houses |`,

  '31145': `@deva[शिल्पिनि ष्वुन्] — "After a root, @deva[ष्वुन्] (@deva[अक]) is used when the agent denotes an artist."

This applies specifically to @deva[नृत्], @deva[खन्], and @deva[रञ्ज्]:

| Root | Meaning | Form (m.) | Form (f.) |
|------|---------|-----------|-----------|
| @deva[नृत्] | to dance | @deva[नर्तकः] | @deva[नर्तकी] |
| @deva[खन्] | to dig | @deva[खनकः] | @deva[खनकी] |
| @deva[रञ्ज्] | to dye | @deva[रजकः] | @deva[रजकी] |`,

  '31146': `@deva[गाथकन्] — "After @deva[गै] 'to sing', @deva[थकन्] (@deva[थक]) is used when the agent denotes an artist."

@deva[गै] + @deva[थकन्] → @deva[गाथकः] "singer" (f. @deva[गाथिका])`,

  '31147': `@deva[ण्युट् च] — "After @deva[गै], @deva[ण्युट्] is also used when the agent denotes an artist."

@deva[गै] + @deva[ण्युट्] → @deva[गायनः] (f. @deva[गायनी]) "singer"

@note[The @deva[य] is added by @ref[7.3.33]. The separation of this rule from the previous allows @deva[ण्युट्] (not @deva[थकन्]) to extend to subsequent sūtras.]`,

  '31148': `@deva[हाश्छन्दसोर्व्रीहिकालयोः] — "After @deva[हा], @deva[ण्युट्] is used when the agent denotes 'rice' or 'time'."

| Formation | Meaning | Etymology |
|-----------|---------|-----------|
| @deva[हायनः] | a kind of rice | that which leaves off (@deva[जहाति]) water |
| @deva[हायनः] | a year | that which goes through (@deva[जिहीते]) conditions |

@note[The two roots are @deva[हाक्] "to abandon" (3P) and @deva[हाङ्] "to go" (3Ā). Accent differs between the two meanings.]`,

  '31149': `@deva[प्रुस्रुवुलूनां सम्यग्अभिहारे वुन्] — "After @deva[प्रु], @deva[सृ], @deva[स्रु], and @deva[लू], @deva[वुन्] is used when repetition (well-performed action) is meant."

| Root | Meaning | Form |
|------|---------|------|
| @deva[प्रु] | to go | @deva[प्रवकः] |
| @deva[सृ] | to move | @deva[सरकः] |
| @deva[स्रु] | to flow | @deva[स्रवकः] |
| @deva[लू] | to cut | @deva[लवकः] |

@note[@deva[सम्यग्अभिहार] means well-performed action—the affix applies even without repetition if the action is performed well.]`,

  '31150': `@deva[आशिषि वुन्] — "When benediction is intended, @deva[वुन्] is used after all roots."

| Root | Form | Meaning |
|------|------|---------|
| @deva[जीव्] | @deva[जीवकः] | "may he live" |
| @deva[नन्द्] | @deva[नन्दकः] | "may he be happy" |

The affix expresses an agent whose action is the object of a prayer or blessing.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.1.101-150). Total: ${Object.keys(vasu).length}`);
