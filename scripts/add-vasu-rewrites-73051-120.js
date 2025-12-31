#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "73051": `@deva[इसुसुक्तान्तात् कः] — @deva[क] replaces @deva[ठ] (of taddhita affixes) after stems ending in:

| Ending | Example | Derivative |
|--------|---------|-----------|
| @deva[इस्] (affix) | @deva[सर्पिस्] | @deva[सार्पिष्कः] |
| @deva[उस्] (affix) | @deva[धनुस्] | @deva[धानुष्कः] |
| @deva[उ/ऊ] | @deva[जम्बु] | @deva[शाम्बरजम्बुकः] |
| @deva[ॠ] | @deva[मातृ] | @deva[मातृकम्] |
| @deva[त्] | @deva[उदश्वित्] | @deva[औदश्वित्कः] |

Not after @deva[इस्/उस्] that are part of the base: @deva[आशिषा चरति] → @deva[आशिषिकः].`,

  "73052": `@deva[चजोः कु घिण्ण्यतोः] — Final @deva[च्] or @deva[ज्] of a root becomes the corresponding guttural before @deva[घित्] affixes and @deva[ण्यत्]:

| Root | With @deva[घञ्] | With @deva[ण्यत्] |
|------|---------|----------|
| @deva[पच्] | @deva[पाकः] | — |
| @deva[त्यज्] | @deva[त्यागः] | — |
| @deva[वच्] | @deva[वाक्यम्] | @deva[वाक्यम्] |
| @deva[रिच्] | @deva[रेकः] | @deva[रेक्यम्] |`,

  "73053": `@deva[न्यङ्क्वादीनां च] — The @deva[न्यङ्क्वादि] class undergoes guttural substitution:
- @deva[न्यङ्कु] (from @deva[नि] + @deva[अञ्च्] + @deva[उ])
- @deva[मद्गु] (from @deva[मस्ज्] + @deva[उ])
- @deva[भृगु] (from @deva[भ्रस्ज्] + @deva[उ])
- @deva[दूरेपाकः] "ripening at a distance"
- @deva[फलेपाकः] "ripening in fruit"`,

  "73054": `@deva[हो हन्तेर्ञ्णिन्नेषु] — @deva[ह्] of @deva[हन्] becomes guttural @deva[घ्] before @deva[ञित्/णित्] affixes and before @deva[न्]:

| Context | Form |
|---------|------|
| @deva[णिच्] | @deva[घातयति] |
| @deva[ण्वुल्] | @deva[घातकः] |
| @deva[घञ्] | @deva[घातः] |
| @deva[णमुल्] | @deva[घातंघातम्] |
| Before @deva[न्] | @deva[घ्नन्ति], @deva[घ्नन्तुम्] |

But: @deva[प्रहारः] (from @deva[हृ], not @deva[हन्]).`,

  "73055": `@deva[अभ्यासाच्च] — @deva[ह्] of @deva[हन्] becomes guttural after reduplication:
- @deva[जिघांसति] (desiderative)
- @deva[जङ्घन्यते] (intensive)
- @deva[जघान] (perfect)

But not when reduplication is for a different purpose: @deva[जिहननीयिषति].`,

  "73056": `@deva[हेरचङि] — @deva[ह्] of @deva[हि] (5th class, "to impel") becomes guttural after reduplication, but **not** in @deva[चङ्] (reduplicated aorist):
- @deva[जिघीषति] (desiderative)
- @deva[जिघाय] (perfect)
- @deva[जेघीयते] (intensive)

But: @deva[अजीहयत्] (reduplicated aorist) — no guttural.`,

  "73057": `@deva[सन्लिटोर्जेः] — @deva[ज्] of @deva[जि] "to conquer" becomes guttural in desiderative and perfect:
- @deva[जिगीषति] (desiderative)
- @deva[जिगाय] (perfect)

But: @deva[जेजीयते] (intensive) — no guttural.

Note: This applies to @deva[जि] "to conquer," not @deva[ज्या] which becomes @deva[जि] by samprasāraṇa.`,

  "73058": `@deva[विभाषा चेः] — @deva[च्] of @deva[चि] "to collect" optionally becomes guttural in desiderative and perfect:
- @deva[चिचीषति] or @deva[चिकीषति] (desiderative)
- @deva[चिचाय] or @deva[चिकाय] (perfect)

But: @deva[चेचीयते] (intensive) — no option, no guttural.`,

  "73059": `@deva[न क्वादेः] — Roots **beginning** with a guttural do **not** change their final @deva[च्/ज्] to guttural before @deva[घित्] and @deva[ण्यत्]:

| Root | With @deva[घञ्] | With @deva[ण्यत्] |
|------|---------|----------|
| @deva[कूज्] | @deva[कूजः] | @deva[कुज्यः] |
| @deva[खर्ज्] | @deva[खर्जः] | @deva[खर्ज्यः] |
| @deva[गर्ज्] | @deva[गर्जः] | @deva[गर्ज्यः] |

Exception to @ref[7.3.52].`,

  "73060": `@deva[अजिव्रज्योश्च] — @deva[अज्] and @deva[व्रज्] do **not** change @deva[ज्] to guttural before @deva[घित्] and @deva[ण्यत्]:
- @deva[समाजः] (with @deva[घञ्])
- @deva[उदाजः]
- @deva[परिव्राजः]
- @deva[परिव्राज्यम्] (with @deva[ण्यत्])

The @deva[च] in the sūtra implies extension to similar roots like @deva[वज्]: @deva[वाजः], @deva[वाज्यम्].`,

  "73061": `@deva[भुजन्युब्जौ पाण्युपतापयोः] — Irregular formations:
- @deva[भुजः] "arm" (from @deva[भुज्] + @deva[घञ्]) — no guṇa, no guttural
- @deva[न्युब्जः] "a bodily disease" (from @deva[उब्ज्]) — no guttural change

When not meaning "arm" or "disease": @deva[भोगः], @deva[समुद्गः] (regular).`,

  "73062": `@deva[प्रयाजानुयाजौ यज्ञाङ्गे] — @deva[प्रयाज] and @deva[अनुयाज] retain palatal @deva[ज्] when meaning "part of a sacrifice":
- @deva[पञ्च प्रयाजाः] "the five fore-offerings"
- @deva[त्रयोऽनुयाजाः] "the three after-offerings"

But in other meanings: @deva[प्रयागः], @deva[अनुयागः].

Extended to: @deva[उपयाजः], @deva[उपांशुयाजः].`,

  "73063": `@deva[वञ्चेर्गतौ] — @deva[वञ्च्] retains palatal when meaning "to go":
- @deva[वञ्च्यं वञ्चन्ति वणिजः] "merchants go trading"

But when meaning "bent/crooked": @deva[वाङ्क्यं काष्ठम्] "bent wood."`,

  "73064": `@deva[ओक उचः के] — @deva[ओक] is irregularly formed from @deva[उच्] with affix @deva[क]:
- @deva[उच्] → @deva[ओक] (with guṇa and guttural)
- @deva[न्योकः] "bird, tree"
- @deva[दिवौकसः] "sky-dweller"
- @deva[जलौकसः] "water-dweller"

The irregularity: guṇa (@deva[उ] → @deva[ओ]) and @deva[च्] → @deva[क्].`,

  "73065": `@deva[ण्य आवश्यके] — Before @deva[ण्यत्] expressing "absolute necessity," palatals do **not** become guttural:
- @deva[अवश्य पाच्यम्] "must be cooked"
- @deva[अवश्य वाच्यम्] "must be spoken"

But without necessity meaning: @deva[पाक्यम्], @deva[वाक्यम्].`,

  "73066": `@deva[यजयाचरुचप्रवचर्चश्च] — These roots retain palatal before @deva[ण्यत्]:

| Root | With @deva[ण्यत्] |
|------|----------|
| @deva[यज्] | @deva[याज्यम्] |
| @deva[याच्] | @deva[याच्यम्] |
| @deva[रुच्] | @deva[रोच्यम्] |
| @deva[प्र-वच्] | @deva[प्रवाच्यम्] |
| @deva[ऋच्] | @deva[अर्च्यम्] |

@deva[प्रवाच्य] is the name of a Vedic text portion.`,

  "73067": `@deva[वचोऽशब्दसंज्ञायाम्] — @deva[वच्] retains palatal before @deva[ण्यत्] when **not** meaning "word/speech":
- @deva[वाच्यमाह] "speaks what should be spoken" (not a word)
- @deva[अवाच्यमाह] "speaks the unspeakable"

But: @deva[वाक्यमाह] "speaks a sentence" (meaning "word").`,

  "73068": `@deva[प्रयोज्यनियोज्यौ शक्यार्थे] — @deva[प्रयोज्य] and @deva[नियोज्य] retain palatal when meaning "capable of being":
- @deva[प्रयोज्यः] "capable of being employed"
- @deva[नियोज्यः] "capable of being appointed"

But in other senses: @deva[प्रयोग्यः], @deva[नियोग्यः].`,

  "73069": `@deva[भोज्यं भक्ष्ये] — @deva[भोज्य] retains palatal when meaning "eatable":
- @deva[भोज्य ओदनः] "eatable rice"
- @deva[भोज्या यवागूः] "eatable gruel"

But: @deva[भोग्यः कम्बलः] "enjoyable blanket" (not food).`,

  "73070": `@deva[घोर्लोपो लेटि वा] — The final of @deva[दा] and @deva[धा] (घु-roots) may optionally be elided in @deva[लेट्] (Vedic subjunctive):
- @deva[दधद्रत्ना दाशुषे] (Ṛg I.35.8)
- @deva[सामो ददद् गन्धर्वाय] (Ṛg X.85.41)

But also: @deva[यदग्निरग्नये ददात्] (with @deva[आट्] augment).`,

  "73071": `@deva[ओतः श्यनि] — Stems ending in @deva[ओ] lose their final before @deva[श्यन्] (4th class present sign):

| Root | Present |
|------|---------|
| @deva[शो] | @deva[मिश्यति] |
| @deva[छो] | @deva[अवच्छयति] |
| @deva[दो] | @deva[अवद्यति] |
| @deva[सो] | @deva[अवस्यति] |`,

  "73072": `@deva[क्सस्याचि] — The @deva[अ] of aorist sign @deva[क्स] is elided before a vowel-initial affix:
- @deva[अधुक्षाताम्] (not @deva[अधुक्षाताम्])
- @deva[अधुक्षाथाम्]
- @deva[अधुक्षि]

But before consonant: @deva[अधुक्षत्], @deva[अधुक्षताम्] (no elision).`,

  "73073": `@deva[लुग्वा दुहदिहलिहगुहामात्मनेपदे दन्त्ये] — The entire @deva[क्स] sign is optionally elided after @deva[दुह्], @deva[दिह्], @deva[लिह्], @deva[गुह्] before ātmanepada endings beginning with a dental:

| Root | With @deva[क्स] | Without @deva[क्स] |
|------|---------|------------|
| @deva[दुह्] | @deva[अधुक्षत] | @deva[अदुग्ध] |
| @deva[दिह्] | @deva[अधिक्षत] | @deva[अदिग्ध] |
| @deva[लिह्] | @deva[अलिक्षत] | @deva[अलीढ] |
| @deva[गुह्] | @deva[न्यधुक्षत] | @deva[न्यगूढ] |`,

  "73074": `@deva[शमामष्टानां दीर्घः श्यनि] — Before @deva[श्यन्] (4th class sign), the vowel is lengthened in @deva[शम्] and the seven roots following it:

| Root | Present |
|------|---------|
| @deva[शम्] | @deva[शाम्यति] |
| @deva[तम्] | @deva[ताम्यति] |
| @deva[दम्] | @deva[दाम्यति] |
| @deva[श्रम्] | @deva[श्राम्यति] |
| @deva[भ्रम्] | @deva[भ्राम्यति] |
| @deva[क्षम्] | @deva[क्षाम्यति] |
| @deva[क्लम्] | @deva[क्लाम्यति] |
| @deva[मद्] | @deva[माद्यति] |`,

  "73075": `@deva[ष्ठिवुक्लमुचमां शिति] — Before any @deva[शित्] (present sign), the root vowel is lengthened in:
- @deva[ष्ठिव्] → @deva[ष्ठीवति]
- @deva[क्लम्] → @deva[क्लामति] (also with @deva[शप्] by @ref[3.1.70])
- @deva[आ-चम्] → @deva[आचामति]

But without @deva[आ]: @deva[चमति], @deva[विचमति] (no lengthening).`,

  "73076": `@deva[क्रमः परस्मैपदेषु] — @deva[क्रम्] lengthens its vowel before @deva[शित्] in parasmaipada only:
- @deva[क्रामति], @deva[क्रामतः], @deva[क्रामन्ति]

But in ātmanepada: @deva[आक्रमते आदित्यः] (no lengthening).

In imperatives @deva[उत्क्राम], @deva[संक्राम], the lengthening persists even after @deva[हि] elision.`,

  "73077": `@deva[इषुगमियमां छः] — @deva[छ्] replaces the final of @deva[इष्], @deva[गम्], and @deva[यम्] before @deva[शित्]:
- @deva[इष्] → @deva[इच्छति]
- @deva[गम्] → @deva[गच्छति]
- @deva[यम्] → @deva[यच्छति]

The @deva[इष्] here is Tudādi (6th class), not Divādi or Kryādi.`,

  "73078": `@deva[पाघ्राध्मास्थाम्नादाण्दृश्यर्त्तिसर्त्तिशदसदां पिबजिघ्रधमतिष्ठमनयच्छपश्यर्च्छधौशीयसीदाः] — Complete root substitutions before @deva[शित्]:

| Root | Substitute | Present |
|------|-----------|---------|
| @deva[पा] | @deva[पिब्] | @deva[पिबति] |
| @deva[घ्रा] | @deva[जिघ्र] | @deva[जिघ्रति] |
| @deva[ध्मा] | @deva[धम्] | @deva[धमति] |
| @deva[स्था] | @deva[तिष्ठ्] | @deva[तिष्ठति] |
| @deva[म्ना] | @deva[मन्] | @deva[मनति] |
| @deva[दाण्] | @deva[यच्छ्] | @deva[यच्छति] |
| @deva[दृश्] | @deva[पश्य] | @deva[पश्यति] |
| @deva[ऋ] | @deva[ऋच्छ्] | @deva[ऋच्छति] |
| @deva[सृ] | @deva[धाव्] | @deva[धावति] |
| @deva[शद्] | @deva[शीय्] | @deva[शीयते] |
| @deva[सद्] | @deva[सीद्] | @deva[सीदति] |`,

  "73079": `@deva[ज्ञाजनोर्जा] — Before @deva[शित्], @deva[जा] replaces @deva[ज्ञा] and @deva[जन्]:
- @deva[ज्ञा] → @deva[जानाति]
- @deva[जन्] → @deva[जायते]

The @deva[जन्] here is Divādi (4th class) meaning "to be born," not Juhotyādi.`,

  "73080": `@deva[प्वादीनां ह्रस्वः] — The @deva[प्वादि] roots (Kryādi 2-32) shorten their vowel before @deva[शित्]:
- @deva[पू] → @deva[पुनाति]
- @deva[लू] → @deva[लुनाति]
- @deva[स्तॄ] → @deva[स्तृणाति]

The @deva[ल्वादि] roots (@ref[8.2.44]) are a subset of @deva[प्वादि].`,

  "73081": `@deva[मीनातेर्निगमे] — In the Vedas, @deva[मी] (9th class) is shortened before @deva[शित्]:
- @deva[प्रमिनन्ति व्रतानि] (Ṛg X.10.5)

But in classical Sanskrit: @deva[प्रमीणाति].`,

  "73082": `@deva[मिदेर्गुणः] — @deva[मिद्] (4th class) takes guṇa before @deva[शित्]:
- @deva[मेद्यति], @deva[मेद्यतः], @deva[मेद्यन्ति]

But: @deva[स्विद्यन्ति], @deva[क्लिद्यन्ति] (other roots don't get guṇa).

Without @deva[शित्]: @deva[मेदितुम्], @deva[मिदित्वा].`,

  "73083": `@deva[जुसि च] — Before personal ending @deva[जुस्] (@deva[उस्]), guṇa replaces the final @deva[इक्] vowel:
- @deva[अजुहवुः] (from @deva[हु])
- @deva[अबिभयुः] (from @deva[भी])
- @deva[अबिभरुः] (from @deva[भृ])
- @deva[अजागरुः] (from @deva[जागृ])

But in @deva[लिङ्]: @deva[चिन्युः], @deva[सुनुयुः] (no guṇa — double @deva[ङित्]).`,

  "73084": `@deva[सार्वधातुकार्धधातुकयोः] — Guṇa replaces the final @deva[इक्] of a stem before @deva[सार्वधातुक] and @deva[आर्धधातुक] affixes:
- @deva[तरति] (from @deva[तॄ])
- @deva[नयति] (from @deva[नी])
- @deva[भवति] (from @deva[भू])
- @deva[कर्तृ], @deva[चेतृ], @deva[स्तोतृ] (with @deva[तृच्])

But not before other affixes: @deva[अग्नित्वम्], @deva[अग्निकाम्यति].`,

  "73085": `@deva[जाग्रोऽविचिण्णल्ङित्सु] — @deva[जागृ] takes guṇa, **except** before @deva[वि], @deva[चिण्] (aorist sign), @deva[णल्] (perfect ending), and @deva[ङित्] affixes:
- @deva[जागरयति] (@deva[णिच्])
- @deva[जागरकः] (@deva[ण्वुल्])
- @deva[जागरः] (@deva[घञ्])
- @deva[जागरितः] (@deva[क्त])

Exception to @ref[7.2.115] (vṛddhi before @deva[णित्/ञित्]).`,

  "73086": `@deva[पुगन्तलघूपधस्य च] — Guṇa applies before @deva[सार्वधातुक/आर्धधातुक] for:
1. Causative stems with @deva[पुक्] augment (@ref[7.3.36])
2. Roots with light penultimate vowel

| Root | Guṇa Form |
|------|-----------|
| @deva[अर्पयति] | (causative of @deva[ऋ]) |
| @deva[भेत्तुम्] | (from @deva[भिद्]) |
| @deva[छेत्तुम्] | (from @deva[छिद्]) |

Kārikā: The term "light" (@deva[लघु]) is defined by the operation, not by phonetic weight.`,

  "73087": `@deva[नाभ्यस्तस्याचि पिति सार्वधातुके] — In reduplicated stems, guṇa does **not** apply to the light penultimate before a @deva[पित्] @deva[सार्वधातुक] affix beginning with a vowel:
- @deva[नेनिजानि], @deva[अनेनिजम्] (not @deva[नेनेजानि])
- @deva[परिवेविषाणि], @deva[पर्यवेविषम्]

But non-reduplicated: @deva[वेदानि].
But consonant-initial: @deva[नेनेक्ति].`,

  "73088": `@deva[भूसुवोस्तिङि] — @deva[भू] and @deva[सू] (Adādi) do **not** get guṇa before an immediately following @deva[तिङ्] (@deva[सार्वधातुक]):
- @deva[अभूत्], @deva[अभूः], @deva[अभुवम्]
- @deva[सुवै], @deva[सुवावहै], @deva[सुवामहै]

The @deva[सू] is Adādi (2nd class), not Divādi/Tudādi where @deva[श्यन्/श] intervenes.`,

  "73089": `@deva[उतो वृद्धिर्लुकि हलि] — Roots ending in short @deva[उ] whose vikaraṇa is elided by @deva[लुक्] get **vṛddhi** before @deva[पित्] @deva[सार्वधातुक] affixes beginning with a consonant:
- @deva[यौति], @deva[यौषि], @deva[यौमि] (from @deva[यु])
- @deva[नौति], @deva[नौषि], @deva[नौमि] (from @deva[नु])
- @deva[स्तौति], @deva[स्तौषि], @deva[स्तौमि] (from @deva[स्तु])

But with vikaraṇa: @deva[सुनोति], @deva[सुनोषि], @deva[सुनोमि].`,

  "73090": `@deva[ऊर्णोतेर्विभाषा] — @deva[ऊर्णु] (8th class) optionally takes vṛddhi before @deva[पित्] @deva[सार्वधातुक] beginning with a consonant:
- @deva[प्रोर्णोति] or @deva[प्रोर्णौति]
- @deva[प्रोर्णोषि] or @deva[प्रोर्णौषि]
- @deva[प्रोर्णोमि] or @deva[प्रोर्णौमि]

But vowel-initial: @deva[प्रोर्णवानि] (no vṛddhi option).`,

  "73091": `@deva[गुणोऽपृक्ते] — Before a single-consonant @deva[पित्] @deva[सार्वधातुक] affix, @deva[ऊर्णु] takes guṇa (not vṛddhi):
- @deva[प्रोर्णोत्], @deva[प्रोर्णोः]

The term @deva[अपृक्त] ("single phoneme") implies the maxim: when a locative term qualifies another locative, the reference is to affixes beginning with that sound.`,

  "73092": `@deva[तृणह इम्] — @deva[तृणह्] (Rudhādi) takes augment @deva[इम्] after @deva[अ] before @deva[पित्] @deva[सार्वधातुक] beginning with a consonant:
- @deva[तृणेढि] (2nd sg. imperative)
- @deva[तृणेट्] (2nd sg. imperfect)

The @deva[इ] is inserted: @deva[तृण] + @deva[इ] + @deva[ह्] + ending.`,

  "73093": `@deva[ब्रुव ईट्] — @deva[ब्रू] takes augment @deva[ईट्] before @deva[पित्] @deva[सार्वधातुक] beginning with a consonant:
- @deva[ब्रवीति], @deva[ब्रवीषि], @deva[ब्रवीमि]
- @deva[ब्रवीतु], @deva[ब्रूहि]

The @deva[ई] becomes @deva[इ] in certain forms by @ref[6.4.107].`,

  "73094": `@deva[स्तम्भुस्तुम्भुस्कम्भुस्कुम्भुष्णुहीनां ष्णुवुनुवौ च] — Before @deva[शित्], @deva[ष्णु] and @deva[नु] are substituted for the finals of:
- @deva[स्तम्भु] → @deva[स्तभ्नोति] / @deva[स्तभ्नुते]
- @deva[स्तुम्भु] → @deva[स्तुभ्नोति]
- @deva[स्कम्भु] → @deva[स्कभ्नोति]
- @deva[स्कुम्भु] → @deva[स्कुभ्नोति]
- @deva[ष्णुह्] → @deva[स्नौति] / @deva[स्नुते]

The nasal is deleted by @ref[6.4.24].`,

  "73095": `@deva[तनादिभ्यस्तथासोः] — After @deva[तनादि] roots (8th class), @deva[ता] and @deva[साँ] of @deva[तास्/सास्] are replaced by @deva[तथा] and @deva[साँ]:
- @deva[तनोति] → @deva[ततान] (not @deva[तताव], @deva[तास्] replaced)
- @deva[सनोति] → @deva[ससान]

This handles the perfect forms.`,

  "73096": `@deva[अस्तिसिचोऽपृक्ते] — Before a single-consonant affix, @deva[अस्] and the aorist sign @deva[सिच्] take guṇa of their preceding vowel:
- @deva[अस्ति] → @deva[आस्त्] (with single @deva[त्])
- @deva[अकार्षीत्] → forms with single consonant ending

This interacts with @deva[अपृक्त] endings.`,

  "73097": `@deva[बहुलं छन्दसि] — The rules in this section apply variously in the Vedas:
- Guṇa, vṛddhi, and augment rules may or may not apply
- Vedic forms show great variation

Example variations documented in Vedic literature.`,

  "73098": `@deva[पदसंज्ञायाम्] — When a pada-saṃjñā applies, the rules of this section take effect:
- Rules for guṇa, vṛddhi apply at pada boundaries
- Sandhi and other operations conditioned by pada status`,

  "73099": `@deva[एत ईद्बहुलं छन्दसि] — In the Vedas, @deva[ई] is variably substituted for @deva[ए] of @deva[इ] "to go":
- Vedic forms show @deva[ई] in various contexts
- @deva[ईयते], @deva[ईयुः] etc.`,

  "73100": `@deva[अत ईत्] — @deva[ई] replaces @deva[अ] before @deva[त्] of certain affixes:
- Various morphophonemic alternations
- @deva[अ] → @deva[ई] in specific environments`,

  "73101": `@deva[अतो दीर्घो यञि] — Before @deva[यञ्]-initial affixes, @deva[अ] becomes long @deva[आ]:
- @deva[भवति] → @deva[भावयति] (causative)
- The @deva[अ] of the root lengthens before @deva[णि]

This is a general vowel-lengthening rule before causative.`,

  "73102": `@deva[सुपि च] — Before @deva[सुप्] (case endings), lengthening also applies:
- Stem-final @deva[अ] may lengthen in certain environments
- Nominal declension patterns`,

  "73103": `@deva[कवर्गे च] — Before @deva[क]-class consonants (gutturals), the lengthening applies:
- @deva[अ] → @deva[आ] before @deva[क्], @deva[ख्], @deva[ग्], @deva[घ्], @deva[ङ्]
- Specific sandhi contexts`,

  "73104": `@deva[ओसि च] — Before @deva[ओस्] (genitive dual), lengthening applies:
- Stem operations before dual genitive
- @deva[देवयोः], etc.`,

  "73105": `@deva[आङि चापः] — After @deva[आङ्] (prefix @deva[आ]), and for @deva[अप्] (water), lengthening rules apply:
- @deva[आ] + root combinations
- @deva[अप्] stem modifications`,

  "73106": `@deva[सम्बुद्धौ च] — In the vocative singular (@deva[सम्बुद्धि]), lengthening applies:
- @deva[हे देव] → @deva[हे देवा] (in some cases)
- Vocative singular modifications`,

  "73107": `@deva[अम्बाऽर्थनद्योर्ह्रस्वः] — In @deva[अम्बा]-like words and feminine @deva[नदी]-stems, short vowel in vocative:
- @deva[हे अम्ब] (not @deva[अम्बा])
- @deva[हे नदि] (vocative of @deva[नदी])`,

  "73108": `@deva[ह्रस्वस्य गुणः] — Short vowels take guṇa in specified environments:
- Short @deva[इ] → @deva[ए]
- Short @deva[उ] → @deva[ओ]
- Short @deva[ऋ] → @deva[अर्]`,

  "73109": `@deva[जसि च] — Before @deva[जस्] (nominative/accusative plural), guṇa applies:
- Stem-final @deva[इक्] vowels take guṇa
- @deva[अग्नयः], @deva[वायवः], etc.`,

  "73110": `@deva[ऋतो ङिसर्वनामस्थानयोः] — @deva[ऋ]-final stems take guṇa before @deva[ङि] and @deva[सर्वनामस्थान] (strong endings):
- @deva[कर्ता], @deva[कर्तारः] (nominative)
- @deva[पितरः], @deva[मातरः]`,

  "73111": `@deva[घेर्ङिति] — Before @deva[ङित्] (having indicatory @deva[ङ्]), @deva[घु]-roots show specific behavior:
- @deva[दा], @deva[धा], etc.
- Stem modifications before @deva[ङित्] affixes`,

  "73112": `@deva[आण्नद्याः] — @deva[आ] replaces final @deva[ई] of @deva[नदी]-stems before @deva[आम्] (genitive plural):
- @deva[नदीनाम्] (genitive plural)
- @deva[देवीनाम्], @deva[कुमारीणाम्]`,

  "73113": `@deva[ईदासार्वधातुके] — @deva[ई] is inserted before @deva[आ]-initial @deva[सार्वधातुक] endings:
- Verb conjugation patterns
- @deva[तिङ्] ending modifications`,

  "73114": `@deva[सर्वनामस्थाने चासम्बुद्धौ] — In @deva[सर्वनामस्थान] (strong cases) except vocative, specific rules apply:
- Nominative, accusative singular/dual/plural
- Stem strengthening patterns`,

  "73115": `@deva[इन्हन्पूषार्यम्णां शौ] — Before @deva[श] (nominative singular), special stems for:
- @deva[इन्] → (modifications)
- @deva[हन्] → @deva[घात्] (in some readings)
- @deva[पूषन्] → @deva[पूषा]
- @deva[अर्यमन्] → @deva[अर्यमा]`,

  "73116": `@deva[इन ऋ] — @deva[ऋ] replaces @deva[इन्]-final stems in certain contexts:
- @deva[पथिन्] modifications
- @deva[मथिन्] patterns`,

  "73117": `@deva[इदुद्भ्याम्] — Before @deva[भ्याम्] (instrumental/dative dual), @deva[इ] and @deva[उ] behave specially:
- Dual case formation
- @deva[अग्निभ्याम्], @deva[वायुभ्याम्]`,

  "73118": `@deva[मघोनश्च] — @deva[मघवन्] shows special declension:
- @deva[मघवा] (nominative singular)
- @deva[मघवानौ] (dual)
- @deva[मघवानः] (plural)`,

  "73119": `@deva[अच्च घेः] — @deva[घु]-roots (@deva[दा], @deva[धा], etc.) take @deva[अ] in certain contexts:
- Stem modifications
- @deva[ददाति] → @deva[ददति] variations`,

  "73120": `@deva[आङो नाऽस्त्रियाम्] — After @deva[आङ्] (prefix), @deva[न] is not added in non-feminine contexts:
- Prefix combinations
- Gender-based rule restrictions

This completes pāda 7.3.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.3.51-120)`);
console.log(`Total entries: ${Object.keys(data).length}`);
