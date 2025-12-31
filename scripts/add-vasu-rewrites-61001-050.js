import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '61001': `@deva[एकाच उदात्तात्] — This begins the adhikāra on reduplication. For a monosyllabic portion (containing a single vowel), there are two (i.e., it is reduplicated).

This governs sūtras through @ref[6.1.12]. The following are understood in subsequent rules:
- @deva[एकाचः] — of the portion containing a single vowel
- @deva[द्वे] — there are two
- @deva[प्रथमस्य] — of the first

Examples (with @deva[लिट्] affixes):
| Root | Reduplicated | Form |
|------|--------------|------|
| @deva[जागृ] | @deva[ज] + @deva[जागृ] | @deva[जजागार] |
| @deva[पच्] | @deva[प] + @deva[पच्] | @deva[पपाच] |
| @deva[इ] | @deva[इ] + @deva[इ] | @deva[इयाय] |

@note[Reduplication occurs through the force of affixes like @deva[लिट्] (Perfect), @deva[सन्] (Desiderative), @deva[यङ्] (Intensive), etc.]`,

  '61002': `@deva[अजादेर्द्वितीयस्य] — For a root beginning with a vowel and having more than one syllable, the second syllable is reduplicated (not the first).

This debars reduplication of the first syllable.

Examples (Desiderative with @deva[सन्]):
| Root + सन् | Second syllable | Reduplicated form |
|------------|-----------------|-------------------|
| @deva[अट्] + @deva[सन्] = @deva[अटिष्] | @deva[टिष्] | @deva[अटिटिषति] |
| @deva[अश्] + @deva[सन्] | @deva[शिष्] | @deva[अशिशिषति] |
| @deva[ॠ] + @deva[सन्] | @deva[रिष्] | @deva[अरिरिषति] |

@note[The @deva[ष्] is elided by @ref[7.4.60], and @deva[स] becomes @deva[ष] by @ref[8.3.59].]`,

  '61003': `@deva[न न्द्राः संयोगादयः] — The consonants @deva[न्], @deva[द्], and @deva[र्], when they begin a conjunct consonant and are part of the second syllable, are not reduplicated.

Examples:
| Root | Desiderative | Reduplication |
|------|--------------|---------------|
| @deva[उन्द] | @deva[उन्दिष्] | @deva[उन्दिदिषति] (not *उन्दिन्दिषति) |
| @deva[अड्ड्] | @deva[अड्डिष्] | @deva[अड्डिडिषति] |
| @deva[अर्च्] | @deva[अर्चिष्] | @deva[अर्चिचिषति] |

Why "conjunct-initial"? When @deva[न्], @deva[द्], @deva[र्] are not conjunct-initial:
- @deva[प्राणिणिषति] — @deva[ण्] is reduplicated

Why only @deva[न्], @deva[द्], @deva[र्]? Other consonants reduplicate:
- @deva[ईक्ष्] → @deva[ईचिक्षिषते] (@deva[क्] becomes @deva[च्] in reduplicate)`,

  '61004': `@deva[पूर्वोऽभ्यासः] — The first of the two (reduplicated syllables) is called @deva[अभ्यास] (the reduplicate).

The word @deva[अभ्यास] is used in sūtras like @ref[3.1.6], @ref[6.1.7], etc.

In @deva[पपाच]:
- @deva[प] = @deva[अभ्यास] (reduplicate)
- @deva[पाच्] = the original syllable`,

  '61005': `@deva[उभे अभ्यस्तम्] — Both (the reduplicate and the reduplicated syllable together) are called @deva[अभ्यस्त].

The word @deva[उभे] (both) indicates this term applies to the pair collectively, not to either separately.

Applications:
| Sūtra | Rule | Example |
|-------|------|---------|
| @ref[6.1.189] | First vowel of abhyasta gets udātta | @deva[द॑दति] — accent on first @deva[अ] |
| @ref[7.1.4] | @deva[अत्] replaces @deva[झ] after abhyasta | @deva[दद] + @deva[झि] = @deva[ददति] |
| @ref[6.4.112] | Special stem operations | @deva[ददत्] |`,

  '61006': `@deva[जक्षित्यादयः षट्] — The six roots beginning with @deva[जक्ष्] are also called @deva[अभ्यस्त].

These seven roots (Pāṇini counts six, overlooking @deva[वेवी]) get the @deva[अभ्यस्त] designation:

| Root | Meaning | Present tense (accent on first) |
|------|---------|--------------------------------|
| @deva[जक्ष्] | to eat | @deva[ज॑क्षति] |
| @deva[जागृ] | to be awake | @deva[जा॑ग्रति] |
| @deva[दरिद्रा] | to be poor | @deva[द॑रिद्रति] |
| @deva[चकास्] | to shine | @deva[चका॑सति] |
| @deva[शास्] | to teach | @deva[शा॑सति] |
| @deva[दीधी] | to shine | @deva[दी॑ध्यते] |
| @deva[वेवी] | to go | @deva[वे॑व्यते] |

By being @deva[अभ्यस्त], these get acute accent on the first syllable when followed by @deva[सार्वधातुक] affixes without @deva[इट्] and beginning with a vowel.`,

  '61007': `@deva[तुजादीनां दीर्घोऽभ्यासस्य] — In the reduplicate of @deva[तुज्]-class roots, a short vowel is replaced by its long counterpart.

There is no formal @deva[तुजादि] gaṇa. The word @deva[आदि] means "roots like @deva[तुज्]" — wherever we find a long vowel in the reduplicate, we accept it as valid.

Vedic examples:
| Root | Reduplicated form | Citation |
|------|-------------------|----------|
| @deva[तुज्] | @deva[तूतुजानः] | Ṛg I.3.6 |
| @deva[मह्] | @deva[मामहानः] | — |
| @deva[धृ] | @deva[दाधार] | @deva[अनड्वान् दाधार] |
| @deva[मा] | @deva[मीमाय] | @deva[स्वधां मीमाय] |
| @deva[तु] | @deva[तूताव] | @deva[स तूताव] |

@note[This lengthening occurs only in Vedic before certain affixes, not in secular Sanskrit. In secular: @deva[तुतोज शबलान् हरीन्].]`,

  '61008': `@deva[लिटि धातोरनभ्यासस्य] — When @deva[लिट्] (Perfect tense) affixes follow, there is reduplication of a root that is not already reduplicated.

The reduplication is of the first syllable (for consonant-initial roots) or second syllable (for vowel-initial roots).

Examples:
| Root | Reduplicated | Perfect 3rd sg. |
|------|--------------|-----------------|
| @deva[पच्] | @deva[प] + @deva[पच्] | @deva[पपाच] |
| @deva[पठ्] | @deva[प] + @deva[पठ्] | @deva[पपाठ] |
| @deva[ऊर्णु] | @deva[ऊर्] + @deva[णु] | @deva[प्रोर्ण्णुनाव] |

Why "non-reduplicated"? Already-reduplicated roots don't reduplicate again.

Why "@deva[धातोः]"? Not for non-roots: @deva[ससृवांसो विशृण्विरे] (participle, not root reduplication).`,

  '61009': `@deva[सन्यङोः] — A non-reduplicated root ending in @deva[सन्] (Desiderative) or @deva[यङ्] (Intensive) is reduplicated.

The phrase @deva[धातोरनभ्यासस्य] is understood. The genitive @deva[सन्यङोः] means "of a root ending in सन् or यङ्."

Desiderative examples:
| Root | + सन् | Reduplicated |
|------|-------|--------------|
| @deva[पच्] | @deva[पक्ष] | @deva[पिपक्षति] |
| @deva[पत्] | @deva[पतिष्] | @deva[पिपतिषति] |
| @deva[ॠ] | @deva[अरिष्] | @deva[अरिरिषति] |

Intensive examples:
| Root | + यङ् | Reduplicated |
|------|-------|--------------|
| @deva[पच्] | — | @deva[पापच्यते] |
| @deva[अट्] | — | @deva[अटाट्यते] |
| @deva[ऊर्णु] | — | @deva[प्रोर्ण्णोनूयते] |

@note[Already-reduplicated roots don't reduplicate: @deva[जुगुप्सते] (from @deva[जुगुप्स्], already formed with svārthika @deva[सन्]).]`,

  '61010': `@deva[श्लौ] — A non-reduplicated root is reduplicated when @deva[श्लु] (vikaraṇa of 3rd class) follows.

@deva[श्लु] causes elision of @deva[शप्] and is the characteristic sign of the Juhotyādi (3rd) class.

Examples:
| Root | Class | Present 3rd sg. |
|------|-------|-----------------|
| @deva[हु] | 3rd | @deva[जुहोति] |
| @deva[भी] | 3rd | @deva[बिभेति] |
| @deva[ह्री] | 3rd | @deva[जिह्रेति] |`,

  '61011': `@deva[चङि] — A non-reduplicated root is reduplicated when @deva[चङ्] (Aorist affix) follows.

Examples (Causative Aorist):
| Causative root | Reduplicated Aorist |
|----------------|---------------------|
| @deva[पाचि] | @deva[अपीपचत्] |
| @deva[पाठि] | @deva[अपीपठत्] |
| @deva[आटि] | @deva[आटिटत्] |
| @deva[आशि] | @deva[आशिशत्] |

Process:
1. Elide causative @deva[णि]
2. Shorten penultimate vowel
3. Reduplicate
4. Apply @ref[7.4.93] (as if @deva[सन्] followed)
5. Lengthen reduplicate vowel by @ref[7.4.94]`,

  '61012': `@deva[निष्ठिताद्दाश्वान्साह्वान्मीढ्वान्] — The participles @deva[दाश्वान्], @deva[साह्वान्], and @deva[मीढ्वान्] are irregularly formed without reduplication.

| Root | Affix | Irregular form | Irregularities |
|------|-------|----------------|----------------|
| @deva[दाशृ] (to give) | @deva[क्वसु] | @deva[दाश्वान्] | No reduplication, no @deva[इट्] |
| @deva[सह्] (to endure) | @deva[क्वसु] | @deva[साह्वान्] | No reduplication, no @deva[इट्], lengthened penultimate |
| @deva[मिह्] (to sprinkle) | @deva[क्वसु] | @deva[मीढ्वान्] | No reduplication, no @deva[इट्], lengthened penultimate, @deva[ह]→@deva[ड] |

Vedic citations:
- @deva[दाश्वांसो दाशुषः सुतम्] (Ṛg I.3.7)
- @deva[साह्वान् बलाहकः]
- @deva[मीड्वस्तोकाय तनयाय मृडय]

Vārtika: Reduplication occurs when @deva[कृञ्] etc. take affix @deva[क]: @deva[क्रियते] etc.`,

  '61013': `@deva[ष्यङः पुत्रपत्योस्तत्पुरुषे] — The semivowel @deva[य्] of the affix @deva[ष्यङ्] (@ref[4.1.78]) is vocalized (becomes @deva[इ]) when @deva[पुत्र] or @deva[पति] follows in a @deva[तत्पुरुष] compound.

Derivation example:
1. @deva[करीषगन्धि] (having smell like dung) + @deva[अण्] = @deva[कारीषगन्धः]
2. Feminine by @deva[ष्यङ्]: @deva[कारीषगन्ध्या]
3. + @deva[पुत्र] or @deva[पति]:
   - @deva[य्] → @deva[इ] (samprasāraṇa)
   - @deva[आ] merges into @deva[इ] by @ref[6.1.108]
   - Short @deva[इ] lengthened by @ref[6.3.139]

| Base | + पुत्र | + पति |
|------|---------|-------|
| @deva[कारीषगन्ध्या] | @deva[कारीषगन्धीपुत्रः] | @deva[कारीषगन्धीपतिः] |
| @deva[कौमुदगन्ध्या] | @deva[कौमुदगन्धीपुत्रः] | @deva[कौमुदगन्धीपतिः] |`,

  '61014': `@deva[बन्धुनि बहुव्रीहौ] — The @deva[य्] of @deva[ष्यङ्] is vocalized when @deva[बन्धु] follows in a @deva[बहुव्रीहि] compound.

Examples:
- @deva[कारीषगन्ध्या बन्धुरस्य] = @deva[कारीषगन्धीबन्धुः]
- @deva[कौमुदगन्ध्या बन्धुरस्य] = @deva[कौमुदगन्धीबन्धुः]

Why "bahuvrīhi"? In tatpuruṣa, no vocalization:
- @deva[कारीषगन्ध्याया बन्धुः] = @deva[कारीषगन्ध्याबन्धुः]

Vārtika: Vocalization is optional with @deva[मातृ], @deva[मातृक], @deva[मातच्]:
- @deva[कारीषगन्धीमाता] or @deva[कारीषगन्ध्यामाता]
- @deva[कारीषगन्धीमातृकः] or @deva[कारीषगन्ध्यामातृकः]`,

  '61015': `@deva[वचिस्वपियजादीनां किति] — The semivowels of @deva[वच्], @deva[स्वप्], and the @deva[यजादि] verbs are vocalized when followed by an affix with indicatory @deva[क्].

The @deva[यजादि] verbs are the last nine roots of the Bhvādi class:
@deva[यज्], @deva[वप्], @deva[वह्], @deva[वस्], @deva[वेञ्], @deva[व्येञ्], @deva[ह्वेञ्], @deva[वद्], @deva[श्वि].

With @deva[क्त] and @deva[क्तवतु]:
| Root | Past participle | Perfect participle |
|------|-----------------|-------------------|
| @deva[वच्] | @deva[उक्तः] | @deva[उक्तवान्] |
| @deva[स्वप्] | @deva[सुप्तः] | @deva[सुप्तवान्] |
| @deva[यज्] | @deva[इष्टः] | @deva[इष्टवान्] |
| @deva[वप्] | @deva[उप्तः] | @deva[उप्तवान्] |
| @deva[वह्] | @deva[ऊढः] | @deva[ऊढवान्] |
| @deva[वस्] | @deva[उषितः] | @deva[उषितवान्] |`,

  '61016': `@deva[ग्रहिज्यावयिव्यधिवष्टिव्यचिव्रश्चिप्रच्छिभृज्जीनां ङिति च] — The semivowels of @deva[ग्रह्], @deva[ज्या], @deva[वयि] (substitute of @deva[वेञ्]), @deva[व्यध्], @deva[वश्], @deva[व्यच्], @deva[व्रश्च्], @deva[प्रच्छ्], and @deva[भ्रस्ज्] are vocalized when followed by @deva[कित्] or @deva[ङित्] affixes.

With @deva[क्त], @deva[क्तवतु], and @deva[ङित्] affixes:
| Root | Meaning | क्त | Present (ङित्) |
|------|---------|-----|----------------|
| @deva[ग्रह्] | to take | @deva[गृहीतः] | @deva[गृह्णाति] |
| @deva[ज्या] | to grow old | @deva[जीनः] | @deva[जिनाति] |
| @deva[व्यध्] | to strike | @deva[विद्धः] | — |
| @deva[वश्] | to shine | @deva[उष्टः] | @deva[उशन्ति] |
| @deva[व्यच्] | to deceive | @deva[विचितः] | — |
| @deva[प्रच्छ्] | to ask | @deva[पृष्टः] | — |
| @deva[भ्रस्ज्] | to fry | @deva[भृष्टः] | — |`,

  '61017': `@deva[लिट्यभ्यासस्योभयेषाम्] — For both @deva[वाच्यादि] (@ref[6.1.15]) and @deva[ग्रहादि] (@ref[6.1.16]) roots, the semivowel of the reduplicate is also vocalized when @deva[लिट्] affixes follow.

| Root | Perfect 3rd sg. | Perfect 2nd sg. |
|------|-----------------|-----------------|
| @deva[वच्] | @deva[उवाच] | @deva[उवचिथ] |
| @deva[स्वप्] | @deva[सुष्वाप] | @deva[सुष्वपिथ] |
| @deva[यज्] | @deva[इयाज] | @deva[इयजिथ] |
| @deva[वप्] | @deva[उवाप] | @deva[उवपिथ] |
| @deva[ग्रह्] | @deva[जग्राह] | @deva[जग्रहिथ] |
| @deva[ज्या] | @deva[जिज्यौ] | @deva[जिज्यथ] |
| @deva[व्यध्] | @deva[विव्याध] | @deva[विव्यधिथ] |
| @deva[वश्] | @deva[उवाश] | @deva[उवशिथ] |

@note[By the maxim "punaḥprasaṅga," the reduplicate that would otherwise be elided is reinstated after vocalization.]`,

  '61018': `@deva[स्वापेश्चङि] — There is vocalization of the semivowel in the causative of @deva[स्वप्] when @deva[चङ्] (Reduplicated Aorist) follows.

Derivation of @deva[असूषुपत्]:
1. @deva[स्वापि] + @deva[चङ्]
2. @deva[सुपि] + @deva[चङ्] (vocalization)
3. @deva[सुप्] + @deva[चङ्] (@deva[इ] elided by @ref[6.4.51])
4. @deva[सोप्] + @deva[चङ्] (guṇa by @ref[7.3.86])
5. @deva[सुप्] + @deva[चङ्] (shortened by @ref[7.4.1])
6. @deva[सु] + @deva[सुप्] + @deva[चङ्] (reduplication by @ref[6.1.11])
7. @deva[सूषुप्] + @deva[अत्] (reduplicate lengthened by @ref[7.4.94])
8. @deva[असूषुपत्] (with augment @deva[अ])

Forms: @deva[असूषुपत्], @deva[असूषुपताम्], @deva[असूषुपन्].

Why "when चङ् follows"? Otherwise: @deva[स्वाप्यते], @deva[स्वापितः].`,

  '61019': `@deva[स्वपिस्यम्व्योर्यङि] — There is vocalization of the semivowel in @deva[स्वप्] (to sleep), @deva[स्यम्] (to shout), and @deva[व्ये] (to cover) when @deva[यङ्] (Intensive) follows.

| Root | Intensive |
|------|-----------|
| @deva[स्वप्] | @deva[सोषुप्यते] |
| @deva[स्यम्] | @deva[सेसिम्यते] |
| @deva[व्ये] | @deva[वेवीयते] |

@note[The short @deva[इ] of @deva[व्ये] is lengthened by @ref[7.4.25].]

Why "when यङ् follows"? With other affixes like @deva[नजिङ्] (@ref[3.2.172]): @deva[स्वप्नक्].`,

  '61020': `@deva[न वशेर्यङि] — There is no vocalization of the semivowel in @deva[वश्] when @deva[यङ्] follows.

This is an exception to @ref[6.1.16].

Intensive forms:
- @deva[वावश्यते]
- @deva[वावश्येते]
- @deva[वावश्यन्ते]

But with other @deva[कित्]/ङित्] affixes (by @ref[6.1.16]):
- @deva[उष्टः]
- @deva[उशन्ति]`,

  '61021': `@deva[चायृतौ की] — @deva[की] is substituted for @deva[चायृ] (to worship, observe) when @deva[यङ्] follows.

Intensive forms:
- @deva[चेकीयते]
- @deva[चेकीयेते]
- @deva[चेकीयन्ते]

The long @deva[ई] in @deva[की] indicates the vowel remains long even when @deva[यङ्] is elided:
- @deva[चेकीतः] (niṣṭhā)

If @deva[कि] (short @deva[इ]) were the substitute, the forms would be derived similarly (lengthened by @ref[7.4.25]), but the niṣṭhā would wrongly be *@deva[चेकितः].`,

  '61022': `@deva[स्फायो निष्ठायां स्फी] — @deva[स्फी] is substituted for @deva[स्फाय्] (to swell) when @deva[निष्ठा] affixes follow.

Examples:
- @deva[स्फीतः] — swollen
- @deva[स्फीतवान्] — one who has swollen

Without niṣṭhā: @deva[स्फातिः] (by @deva[क्तिन्]).

@note[The phrase @deva[निष्ठायाम्] governs subsequent sūtras through @ref[6.1.29].]`,

  '61023': `@deva[प्रात् स्त्यः] — The semivowel of @deva[स्त्या] (@deva[स्त्यै] or @deva[ष्ठ्यै]) is vocalized when preceded by @deva[प्र] and followed by @deva[निष्ठा] affixes.

Derivation:
@deva[प्र] + @deva[स्त्या] + @deva[क्त] = @deva[प्र] + @deva[स्ति] + @deva[त] (by @ref[6.1.108]) = @deva[प्रस्तीतः] (lengthened by @ref[6.4.2])

Forms:
- @deva[प्रस्तीतः]
- @deva[प्रस्तीतवान्]

@note[By vocalization, the @deva[यण्वत्] condition for @ref[8.2.43] (त→न) no longer exists, so @deva[त] is not changed. But @deva[त] optionally becomes @deva[म] by @ref[8.2.54]: @deva[प्रस्तीमः], @deva[प्रस्तीमवान्].]

Without @deva[प्र]: @deva[संस्त्यानः], @deva[संस्त्यानवान्].`,

  '61024': `@deva[द्रवमूर्तिशीतयोः श्याः] — The semivowel of @deva[श्या] (@deva[श्यै], to go) is vocalized before @deva[निष्ठा] when the meaning is "coagulation" or "cold."

@deva[द्रवमूर्ति] = hardening of a fluid (coagulation).

Coagulation examples:
- @deva[शीनं घृतम्] — coagulated butter
- @deva[शीना वसा] — coagulated fat
- @deva[शीनं मेदः] — coagulated marrow

@note[The @deva[त] of niṣṭhā changes to @deva[न] by @ref[8.2.47].]

Cold examples (त not changed):
- @deva[शीतं वर्त्तते] — it is cold
- @deva[शीतो वायुः] — cold wind
- @deva[शीतमुदकम्] — cold water

Other meanings (no vocalization):
- @deva[संश्यानो वृश्चिकः] — rolled-up scorpion`,

  '61025': `@deva[प्रतेः श्यः] — The semivowel of @deva[श्या] is vocalized when preceded by @deva[प्रति] and followed by @deva[निष्ठा] affixes.

This applies regardless of meaning (unlike @ref[6.1.24]).

Examples:
- @deva[प्रतिशीनः]
- @deva[प्रतिशीनवान्]`,

  '61026': `@deva[अभ्यवाभ्यां विभाषा पूर्वस्य] — Optionally, the semivowel of @deva[श्या] is vocalized when preceded by @deva[अभि] or @deva[अव] (even with intervening upasargas) before @deva[निष्ठा].

| Upasarga | With vocalization | Without |
|----------|-------------------|---------|
| @deva[अभि] | @deva[अभिशीनं घृतम्] | @deva[अभिश्यानं घृतम्] |
| @deva[अव] | @deva[अवशीनं वृश्चिकः] | @deva[अवश्यानं वृश्चिकः] |

With intervening upasargas:
- @deva[अभिसंशीनम्] or @deva[अभिसंश्यानम्]
- @deva[अवसंशीनम्] or @deva[अवसंश्यानम्]

According to Siddhānta Kaumudī, when @deva[अभि]/अव] are in the middle (not first), there's no option:
- @deva[समभिश्यानम्] (only, not *@deva[समभिशीनम्])`,

  '61027': `@deva[पक्वे श्रः स्थितौ वा] — Optionally, @deva[श्रित] is formed (with vocalization) in the sense of "cooked."

This applies to root @deva[श्रा] (to cook) with @deva[क्त].

| Meaning | With vocalization | Without |
|---------|-------------------|---------|
| cooked | @deva[श्रितम्] (optional) | @deva[श्रातम्] (optional) |

@note[The word @deva[पक्व] in the sūtra means "cooked."]`,

  '61028': `@deva[विभाषा प्यायो दीर्घात्] — @deva[पी] is optionally substituted for @deva[प्याय्] (to increase) before @deva[निष्ठा] affixes.

Examples:
- @deva[पीनं मुखम्] — swollen face
- @deva[पीनौ बाहू] — swollen arms
- @deva[पीनसुरः] — having swollen neck

This is a regulated option (@deva[व्यवस्थितविभाषा]):
- Without upasarga: substitution always occurs
- With upasarga: no substitution — @deva[प्रप्यानः], @deva[आप्यानः]

Exception: With @deva[आङ्] + @deva[अन्धुः] or @deva[ऊधस्]:
- @deva[आपीनोन्धुः] — swollen cartilage
- @deva[आपीनमूधः] — swollen udder`,

  '61029': `@deva[लिड्यङोश्च] — @deva[पी] is substituted for @deva[प्याय्] when @deva[लिट्] (Perfect) or @deva[यङ्] (Intensive) affixes follow.

The word @deva[विभाषा] (optionally) does not apply here — substitution is obligatory.

Perfect forms:
- @deva[आपिप्ये]
- @deva[आपिप्याते]
- @deva[आपिप्यिरे]

Derivation: @deva[पी] + @deva[लिट्] = @deva[पि] + @deva[पी] + @deva[त] → @deva[पि] + @deva[प्य] + @deva[ए] (by @ref[6.4.82]) = @deva[आपिप्ये]

Intensive forms:
- @deva[आपेपीयते]
- @deva[आपेपीयेते]
- @deva[आपेपीयन्ते]

@note[Reduplication occurs after substitution by the maxim @deva[पुनः प्रसङ्ग].]`,

  '61030': `@deva[श्वेर्लिट्यङोर्वा] — Optionally, the semivowel of @deva[श्वि] (to swell) is vocalized before @deva[लिट्] and @deva[यङ्] affixes.

Perfect forms:
| With vocalization | Without |
|-------------------|---------|
| @deva[शुशावे] | @deva[शिश्वाय] |
| @deva[शुशुवतुः] | @deva[शिश्वियतुः] |

Intensive forms:
| With vocalization | Without |
|-------------------|---------|
| @deva[शोशूयते] | @deva[शश्वीयते] |

@note[When vocalization doesn't occur, the reduplicate is also not vocalized (despite @ref[6.1.17]), explaining @deva[शिश्वाय] (not *@deva[शुश्वाय]).]`,

  '61031': `@deva[श्वेर्णौ सनि चङि च] — Optionally, the semivowel of causative @deva[श्वि] is vocalized when @deva[सन्] (Desiderative) or @deva[चङ्] (Reduplicated Aorist) follows.

Desiderative:
| With vocalization | Without |
|-------------------|---------|
| @deva[शुशावयिषति] | @deva[शिश्वाययिषति] |

Reduplicated Aorist:
| With vocalization | Without |
|-------------------|---------|
| @deva[अशुशवत्] | @deva[अशिश्वयत्] |

@note[By the maxim @deva[संप्रसारणं संप्रसारणाश्रयं च बलीयो भवति], samprasāraṇa supersedes antaraṅga operations like vṛddhi. Vṛddhi and @deva[आव्]-substitution occur after samprasāraṇa.]`,

  '61032': `@deva[ह्वेञ्णौ संप्रसारणम्] — There is vocalization of the semivowel in the causative of @deva[ह्वे] (to call) before @deva[सन्] and @deva[चङ्].

Desiderative forms:
- @deva[जुहावयिषति]
- @deva[जुहावयिषतः]
- @deva[जुहावयिषन्ति]

Reduplicated Aorist forms:
- @deva[अजूहवत्]
- @deva[अजूहवताम्]
- @deva[अजूहवन्]

@note[The word @deva[विभाषा] (optionally) doesn't apply here — vocalization is obligatory.]

@note[@deva[ह्वा] doesn't take augment @deva[य्] (@ref[7.3.37]) before @deva[णि] because samprasāraṇa is stronger.]

When another non-reduplicating affix intervenes:
- @deva[ह्वायकमिच्छति] = @deva[ह्वायकीयति]
- Desiderative: @deva[जिह्वायकीयिषति] (no vocalization)`,

  '61033': `@deva[ह्वोऽभ्यस्तस्योभयेषाम्] — In @deva[ह्वा], vocalization occurs in both syllables of the reduplicated form.

The vocalization occurs before reduplication.

Examples:
| Tense/mood | Form |
|------------|------|
| Perfect 3rd sg. | @deva[जुहाव] |
| Intensive | @deva[जोहूयते] |
| Desiderative | @deva[जुहुषति] |

@note[This sūtra and the previous were originally one in Pāṇini's text, divided by authority of a Vārtika.]`,

  '61034': `@deva[वा छन्दसि] — In Vedic, the semivowel of @deva[ह्वे] is variously vocalized (or not).

Vocalized forms:
- @deva[इन्द्राग्नी हुवे] — I invoke Indra and Agni
- @deva[देवीं सरस्वतीं हुवे] — I invoke divine Sarasvatī

@deva[हुवे] derivation: Present Ātmanepada 1st sg., with @deva[शप्] elided, vocalization, and @deva[उवङ्] substitution.

Non-vocalized forms:
- @deva[ह्वयामि मरुतः शिवान्]
- @deva[ह्वयामि विश्वान् देवान्]

Other forms: @deva[हवः] in @deva[श्रुधीहवम्] (Ṛg I.2.1) — hear the invocation.`,

  '61035': `@deva[विभाषा चायृतौ की छन्दसि] — In Vedic, @deva[की] is variously substituted for @deva[चाय्].

With substitution:
- @deva[विधुना निचिक्युः]
- @deva[नान्यं चिक्युर्न निचिक्युरन्यम्]

These are Perfect forms with affix @deva[उस्].

Without substitution:
- @deva[अग्निर्ज्योतिर्निचाय्यः]`,

  '61036': `@deva[अस्पृधेथामानृचुरानृहुश्चिच्युषे तित्याज श्राताः श्रितमाशीरितश्छन्दसि] — These irregular forms occur in Vedic:

| Form | Root | Analysis |
|------|------|----------|
| @deva[अपस्पृधेथाम्] | @deva[स्पर्ध्] | Imperfect 2nd dual Ātm., with @deva[र्] vocalized, @deva[अ] elided |
| @deva[आनृचुः] | @deva[अर्च्] | Perfect 3rd pl., vocalization + @deva[अ]-elision |
| @deva[आनृहुः] | @deva[अर्ह्] | Perfect 3rd pl., vocalization + @deva[अ]-elision |
| @deva[चिच्युषे] | @deva[च्यु] | Perfect with @deva[क्वसु] |
| @deva[तित्याज] | @deva[त्यज्] | Perfect with irregular reduplication |
| @deva[श्राताः] | @deva[श्रा] | Irregular niṣṭhā |
| @deva[श्रितम्] | @deva[श्रा] | Irregular niṣṭhā |
| @deva[आशीः] | — | Irregular form |
| @deva[आशीर्त्तः] | — | Irregular form |

Vedic citation: @deva[इन्द्रश्च विष्णो यदपस्पृधेथाम्].`,

  '61037': `@deva[न संप्रसारणे संप्रसारणम्] — When a semivowel has been vocalized, there is no vocalization of another semivowel that precedes it in the same word.

This prevents double vocalization in words with multiple semivowels.

| Root | Vocalized | Form |
|------|-----------|------|
| @deva[व्यध्] | @deva[य्]→@deva[इ] | @deva[विद्धः] (not *@deva[उइद्धः]) |
| @deva[व्यच्] | @deva[य्]→@deva[इ] | @deva[विचितः] |
| @deva[व्येञ्] | @deva[य्]→@deva[इ] | @deva[संवीतः] |

By the maxim that operations apply to the letter nearest the operator, the second semivowel is vocalized first. This sūtra then blocks vocalization of the preceding semivowel.

@note[This sūtra is a jñāpaka that vocalization begins with the second conjunct semivowel.]`,

  '61038': `@deva[न वयेर्लिटि] — In the substituted root @deva[वय्] (@ref[2.4.41]), the @deva[य्] is not vocalized in the Perfect.

@deva[वय्] is a substitute for @deva[वेञ्] (to weave) before @deva[लिट्].

Perfect forms:
- @deva[उवाय]
- @deva[ऊयतुः]
- @deva[ऊयुः]

@note[The word @deva[लिट्] here is for subsequent sūtras; this sūtra alone could function without it.]`,

  '61039': `@deva[किति वश्चास्यान्यतरस्याम्] — Before @deva[कित्] affixes of the Perfect, @deva[व्] may optionally be substituted for the @deva[य्] of @deva[वय्].

| With व् | With य् (no change) |
|---------|---------------------|
| @deva[ऊवतुः] | @deva[ऊयतुः] |
| @deva[ऊवुः] | @deva[ऊयुः] |

According to Patañjali, the phrase @deva[वश्चास्य] could be dispensed with. Alternative analysis:
- @deva[वे] + @deva[अतुस्] → @deva[वा] + @deva[वा] + @deva[अतुस्] = @deva[ववतुः], @deva[ववुः] (no vocalization)
- With vocalization: @deva[वा] + @deva[अतुस्] = @deva[उ] + @deva[अतुस्] = @deva[ऊवतुः] (by @ref[6.1.77])

Thus all three forms (@deva[ऊवतुः], @deva[ऊयतुः], @deva[ववतुः]) are derivable.`,

  '61040': `@deva[न वा लिटि] — The semivowel of @deva[वेञ्] (to weave, Bhvādi class) is not vocalized in the Perfect.

Forms:
- @deva[ववौ]
- @deva[ववतुः]
- @deva[ववुः]

This root belongs to the @deva[यजादि] class and would have been vocalized before @deva[कित्] affixes by @ref[6.1.15]. The reduplicate would also be vocalized by @ref[6.1.17]. Both vocalization are prohibited here.`,

  '61041': `@deva[ल्यपि च] — The semivowel of @deva[वेञ्] is not vocalized when @deva[ल्यप्] follows.

Examples:
- @deva[प्रवाय] — having woven forth
- @deva[उपवाय] — having woven near

@note[This sūtra is separated from the previous for subsequent sūtras where only @deva[ल्यप्]'s anuvrtti runs.]`,

  '61042': `@deva[ज्याया च] — The semivowel of @deva[ज्या] (to grow old) is not vocalized when @deva[ल्यप्] follows.

Examples:
- @deva[प्रज्याय] — having grown old
- @deva[उपज्याय] — having approached old age`,

  '61043': `@deva[व्येञश्च] — The semivowel of @deva[व्या] (@deva[व्ये], to cover) is not vocalized when @deva[ल्यप्] follows.

Examples:
- @deva[प्रव्याय] — having covered
- @deva[उपव्याय] — having covered near

@note[This sūtra is separated for the following sūtra where @deva[व्ये]'s anuvrtti runs.]`,

  '61044': `@deva[व्येञ्परितो वा] — Vocalization may optionally occur when @deva[व्ये] is preceded by @deva[परि] and takes @deva[ल्यप्].

| With vocalization | Without |
|-------------------|---------|
| @deva[परिवीय यूपम्] | @deva[परिव्याय] |

@note[The augment @deva[तुक्] (@ref[6.1.71]) is debarred by @ref[6.4.2] which lengthens the vowel, since @ref[6.4.2] is subsequent to @ref[6.1.71].]`,

  '61045': `@deva[आद्एच उपदेशेऽशिति] — In a root that ends with a diphthong (@deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]) in the Dhātupāṭha, @deva[आ] is substituted for the diphthong before non-@deva[शित्] affixes.

Examples:
| Root | + तृच् | + तुमुन् | + तव्य |
|------|--------|----------|--------|
| @deva[ग्लौ] | @deva[ग्लाता] | @deva[ग्लातुम्] | @deva[ग्लातव्यम्] |
| @deva[शौ] | @deva[निशाता] | @deva[निशातुम्] | @deva[निशातव्यम्] |

Why "ending with diphthong"? Roots ending otherwise: @deva[कर्त्ता] (from @deva[कृ]).

Why "in upadesa"? Secondary forms don't take this: @deva[चेता], @deva[स्तोता].

Why "non-शित्"? Before @deva[शप्]: @deva[ग्लायति], @deva[म्लायति].`,

  '61046': `@deva[न व्येर्लिटि] — The diphthong of @deva[व्ये] is not replaced by @deva[आ] before Perfect affixes.

Forms:
- @deva[संविव्याय]
- @deva[संविव्ययिथ]

The reduplicate of Perfect is vocalized by @ref[6.1.17]. Vṛddhi in @deva[संविव्याय] occurs by @ref[7.2.115] before @deva[णित्] affix @deva[णल्].`,

  '61047': `@deva[स्फुरस्फुलोर्घञि च] — In @deva[स्फुर्] and @deva[स्फुल्] (to move), @deva[आ] is substituted for the diphthong when @deva[घञ्] follows.

| Root | Expected | Actual |
|------|----------|--------|
| @deva[स्फुर्] | *@deva[विस्फोरः] | @deva[विस्फारः] |
| @deva[स्फुल्] | *@deva[विस्फोलः] | @deva[विस्फालः] |

@note[By @ref[8.3.76], @deva[स] optionally becomes @deva[ष] after @deva[वि]: @deva[विष्फारः], @deva[विष्फालः].]`,

  '61048': `@deva[क्रीञ्जीनां णौ] — @deva[आ] is substituted for the final in the causatives of @deva[क्री] (to buy), @deva[इ] (to study, with @deva[अधि]), and @deva[जि] (to conquer).

| Root | Causative |
|------|-----------|
| @deva[क्री] | @deva[क्रापयति] |
| @deva[अधि] + @deva[इ] | @deva[अध्यापयति] |
| @deva[जि] | @deva[जापयति] |

@note[The augment @deva[प्] is added by @ref[7.3.36] since these roots end in long @deva[आ].]`,

  '61049': `@deva[सिधेरापारलौकिके] — @deva[आ] is substituted for the diphthong in the causative of @deva[सिध्] when the meaning does not refer to the next world.

@deva[पारलौकिक] = pertaining to the next world (from @deva[परलोक] + @deva[ठञ्]).

Worldly meanings (with substitution):
- @deva[अन्नं साधयति] — prepares food
- @deva[ग्रामं साधयति] — conquers the village

Other-worldly meanings (no substitution):
- @deva[तपस्तापसं सेधयति] — austerity makes the ascetic perfect
- @deva[स्वान्येवनं कर्माणि सेधयन्ति] — one's own actions lead to spiritual success

@note[Here @deva[सिध्] has the sense of knowledge (@deva[ज्ञान]). Austerity leads to knowledge that produces results in the next life.]`,

  '61050': `@deva[मीमिदीनां च ल्यपि] — @deva[आ] is substituted for the finals of @deva[मी] (to hurt), @deva[मि] (to scatter), and @deva[दी] (to decay) when @deva[ल्यप्] follows, as well as before affixes that demand this substitution.

The @deva[च] indicates these roots behave as if enunciated with @deva[आ] in the Dhātupāṭha, so all @deva[आ]-related rules apply.

Examples:
| Root | + तृच् | + तव्य | + तुमुन् | + ल्यप् |
|------|--------|--------|----------|--------|
| @deva[मी] | @deva[प्रमाता] | @deva[प्रमातव्यम्] | @deva[प्रमातुम्] | @deva[प्रमाय] |
| @deva[मि] | @deva[निमाता] | @deva[निमातव्यम्] | @deva[निमातुम्] | @deva[निमाय] |
| @deva[दी] | @deva[उपदाता] | @deva[उपदातव्यम्] | @deva[उपदातुम्] | @deva[उपदाय] |`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.1.1-50). Total: ${Object.keys(vasu).length}`);
