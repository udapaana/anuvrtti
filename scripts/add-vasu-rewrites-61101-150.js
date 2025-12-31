import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '61101': `@deva[अकः सवर्णे दीर्घः] — When a simple vowel (@deva[अक्]) is followed by a homogeneous vowel, the corresponding long vowel is the single substitute.

Examples:
| Combination | Result |
|-------------|--------|
| @deva[दण्ड] + @deva[अग्रम्] | @deva[दण्डाग्रम्] |
| @deva[दधि] + @deva[इन्द्रः] | @deva[दधीन्द्रः] |
| @deva[मधु] + @deva[उदके] | @deva[मधूदके] |
| @deva[होतृ] + @deva[ऋश्य] | @deva[होतॄश्यः] |

Why "simple vowel (@deva[अक्])"? Diphthongs don't lengthen: @deva[अग्ने] + @deva[ए] = @deva[अग्नये].

Why "homogeneous"? Non-homogeneous: @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र].

@note[Homogeneity applies only to vowels, not consonants. @deva[कुमारी शेते] — @deva[ई] and @deva[श] are not considered homogeneous for this rule.]`,

  '61102': `@deva[प्रथमयोः पूर्वसवर्णः] — For a simple vowel of a nominal stem + vowel of nominative/accusative case affixes, the long vowel homogeneous with the first is the single substitute.

Examples:
| Stem + Affix | Result |
|--------------|--------|
| @deva[अग्नि] + @deva[औ] | @deva[अग्नी] |
| @deva[वायु] + @deva[औ] | @deva[वायू] |
| @deva[वृक्ष] + @deva[अस्] | @deva[वृक्षाः] |
| @deva[वृक्ष] + @deva[अन्] | @deva[वृक्षान्] |

This debars pararūpa (@ref[6.1.97]) which would give *@deva[वृक्षः] for @deva[वृक्ष] + @deva[अस्].`,

  '61103': `@deva[तस्माच्छसो नः पुंसि] — After the long vowel of @ref[6.1.102], @deva[न्] replaces @deva[स्] of accusative plural @deva[शस्] in masculine.

Examples:
| Stem | Accusative Plural |
|------|-------------------|
| @deva[वृक्ष] | @deva[वृक्षान्] |
| @deva[अग्नि] | @deva[अग्नीन्] |
| @deva[वायु] | @deva[वायून्] |
| @deva[कर्तृ] | @deva[कर्तॄन्] |

Why "after such long vowel"? If the long vowel results from a different rule, @deva[न्] doesn't apply.

Why "masculine"? Feminine: @deva[चंचाः पश्य] (not *@deva[चंचान्]).`,

  '61104': `@deva[नादिचि विभक्तौ तुक्] — The pūrvasavarṇa long vowel substitution does not occur when @deva[अ]/आ] is followed by a vowel other than @deva[अ] in nominative/accusative affixes.

Examples:
| Combination | Result | Rule applied |
|-------------|--------|--------------|
| @deva[वृक्ष] + @deva[औ] | @deva[वृक्षौ] | guṇa (@ref[6.1.87]) |
| @deva[खट्वा] + @deva[ए] | @deva[खट्वे] | guṇa |

Why "after @deva[अ]/आ]"? @deva[अग्नि] + @deva[औ] = @deva[अग्नी] (lengthening applies).

Why "vowel other than @deva[अ]"? @deva[वृक्ष] + @deva[अस्] = @deva[वृक्षाः] (lengthening applies).`,

  '61105': `@deva[दीर्घाज्जसि च] — The pūrvasavarṇa long vowel substitution does not occur when a long vowel is followed by nominative/accusative affixes beginning with a vowel other than @deva[अ], or by nominative plural @deva[अस्].

Examples:
- @deva[कुमारी] + @deva[औ] = @deva[कुमार्यौ] (not *@deva[कुमारी])
- @deva[कुमारी] + @deva[अस्] = @deva[कुमार्यः] (not *@deva[कुमारीः])
- @deva[ब्रह्मबन्धु] + @deva[औ] = @deva[ब्रह्मबन्ध्वौ]
- @deva[ब्रह्मबन्धु] + @deva[अस्] = @deva[ब्रह्मबन्ध्वः]`,

  '61106': `@deva[वा छन्दसि] — In Vedic, the long vowel substitution may optionally occur in the cases of @ref[6.1.104] and @ref[6.1.105].

| With lengthening | Without |
|------------------|---------|
| @deva[मारुतीः] | @deva[मारुत्यः] |
| @deva[पिण्डीः] | @deva[पिण्ड्यः] |
| @deva[वाराही] | @deva[वाराह्यौ] |
| @deva[उपानही] | @deva[उपानह्यौ] |`,

  '61107': `@deva[अमि पूर्वः] — When a simple vowel is followed by @deva[अ] of the accusative affix @deva[अम्], the first vowel alone is the single substitute.

Examples:
| Stem + अम् | Result |
|------------|--------|
| @deva[वृक्ष] + @deva[अम्] | @deva[वृक्षम्] |
| @deva[अग्नि] + @deva[अम्] | @deva[अग्निम्] |
| @deva[वायु] + @deva[अम्] | @deva[वायुम्] |

The word @deva[पूर्व] (first) means the first vowel itself is substituted, not a homogeneous long. Otherwise @deva[कुमारी] + @deva[अम्] = @deva[कुमारीम्] would have three mātrās.

In Vedic, optional: @deva[शमीम्] or @deva[शम्यम्]; @deva[गौरीम्] or @deva[गौर्यम्].`,

  '61108': `@deva[संप्रसारणाच्च] — When a vocalized semivowel (samprasāraṇa) is followed by a vowel, the vocalized vowel alone (pūrvarūpa) is the single substitute.

Examples:
| Root + Affix | Vocalization | Result |
|--------------|--------------|--------|
| @deva[यज्] + @deva[क्त] | @deva[इ] + @deva[अ] | @deva[इष्टम्] |
| @deva[वप्] + @deva[क्त] | @deva[उ] + @deva[अ] | @deva[उप्तम्] |
| @deva[ग्रह्] + @deva[इत] | @deva[गृ] + @deva[इ] | @deva[गृहीतम्] |

Without this merging, vocalization would be undone — @deva[उ] + @deva[अ] would become @deva[व] + @deva[अ] by @ref[6.1.77], restoring the original form.`,

  '61109': `@deva[एङः पदान्तादति] — For pada-final @deva[ए] or @deva[ओ] + following short @deva[अ], pūrvarūpa (the first vowel) is the single substitute.

Examples:
| Combination | Result |
|-------------|--------|
| @deva[अग्ने] + @deva[अत्र] | @deva[अग्नेऽत्र] |
| @deva[वायो] + @deva[अत्र] | @deva[वायोऽत्र] |

This supersedes @deva[अय्]/अव्] substitution.

Why "ए or ओ"? @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र].

Why "pada-final"? Mid-word: @deva[चे] + @deva[अन] = @deva[चयनम्].

Why "short अ"? @deva[वायो] + @deva[इति] = @deva[वायविति].

Why "short"? @deva[वायो] + @deva[आयाहि] = @deva[वायवायाहि].`,

  '61110': `@deva[ङसिङसोश्च] — For mid-word @deva[ए] or @deva[ओ] + @deva[अ] of ablative/genitive singular @deva[अस्], pūrvarūpa is the single substitute.

The @deva[इ]/उ] of @deva[अग्नि]/वायु] become guṇa by @ref[7.3.111].

Examples:
| Stem | Ablative/Genitive |
|------|-------------------|
| @deva[अग्नि] | @deva[अग्नेः] |
| @deva[वायु] | @deva[वायोः] |

Usage:
- @deva[अग्नेरागच्छति] — comes from fire
- @deva[वायोः स्वम्] — property of wind`,

  '61111': `@deva[ऋत उत्] — For @deva[ऋ] + @deva[अ] of ablative/genitive singular @deva[अस्], short @deva[उ] is the single substitute.

Derivation: @deva[होतृ] + @deva[अस्] = @deva[होतुर्स्] (by @ref[1.1.51], @deva[उ] must be followed by @deva[र्])
→ @deva[होतुर्] → @deva[होतुः] (final @deva[स्] elided by @ref[8.2.24])

Examples:
- @deva[होतुरागच्छति] — comes from the invoker
- @deva[होतुः स्वम्] — property of the invoker

@note[Though @deva[उ] replaces both @deva[ऋ] and @deva[अ], it can be called substitute of either (like a child of both father and mother).]`,

  '61112': `@deva[ख्यत्यात्परस्य] — @deva[उ] replaces @deva[अ] of ablative/genitive @deva[अस्] after @deva[सखि] and @deva[पति] when their @deva[इ] becomes @deva[य्].

@deva[ख्य] = @deva[खि]/खी] with @deva[इ]→@deva[य्]; @deva[त्य] = @deva[ति]/ती] with @deva[इ]→@deva[य्].

Examples:
| Stem | Ablative/Genitive |
|------|-------------------|
| @deva[सखि] | @deva[सख्युः] |
| @deva[पति] | @deva[पत्युः] |

Usage:
- @deva[सख्युरागच्छति] — comes from friend
- @deva[पत्युः स्वम्] — property of husband

Denominative @deva[सखीः] (one who desires a friend, from @deva[सखीय्] + @deva[क्विप्]): @deva[सख्युः] or @deva[सखीयोः].`,

  '61113': `@deva[अतोरोरप्लुतादप्लुते] — @deva[उ] replaces @deva[रु] (the @deva[र्]-substitute of final @deva[स्] by @ref[8.2.66]) when non-prolated @deva[अ] both precedes and follows.

Derivation: @deva[वृक्षस्] + @deva[अत्र]
→ @deva[वृक्षर्] + @deva[अत्र] (@deva[स्]→@deva[र्] by @ref[8.2.66])
→ @deva[वृक्ष] + @deva[उ] + @deva[अत्र]
→ @deva[वृक्षो] + @deva[अत्र] (guṇa)
→ @deva[वृक्षोऽत्र] (pūrvarūpa by @ref[6.1.109])

Why "after अ"? @deva[अग्निर्] + @deva[अत्र] = @deva[अग्निरत्र].

Why "short अ"? @deva[वृक्षाः] + @deva[अत्र] = @deva[वृक्षा अत्र].`,

  '61114': `@deva[हशि च] — @deva[उ] replaces @deva[रु] when followed by a soft consonant (@deva[हश्]) and preceded by non-prolated short @deva[अ].

@deva[हश्] = all voiced consonants.

Examples:
- @deva[पुरुषो याति]
- @deva[पुरुषो हसति]
- @deva[पुरुषो ददाति]`,

  '61115': `@deva[अन्तः पादमव्यपरे] — In Vedic, when @deva[ए]/ओ] + @deva[अ] occur in the middle half of a verse foot, they retain their original forms — except when @deva[अ] is followed by @deva[ख्] or @deva[य्].

Vedic examples (no sandhi):
- @deva[ते अग्ने अश्वमायुञ्जन्]
- @deva[उपप्रयन्तो अध्वरम्]
- @deva[शिरो अपश्यम्]
- @deva[अध्वर्यो अद्रिभिः सुतम्] (Ṛg IX.51.1)

@note[This applies to Vedic verses, not secular poetry.]`,

  '61116': `@deva[तत्प्रकृतवाच्यादेः अव्यादीनाम्] — In Vedic, @deva[ए]/ओ] retain original form mid-verse before @deva[अव्यात्], @deva[अवद्यात्], @deva[अवक्रमुः], @deva[अव्रत], @deva[अवन्तु], @deva[अवस्यु].

Though these words have @deva[व्] or @deva[य्] after @deva[अ], prakṛtibhāva still occurs.

Examples:
- @deva[अग्निः प्रथमो वसुभिर्नो अव्यात्]
- @deva[मित्रमहो अवद्यात्] (Ṛg IV.4.15)
- @deva[मा शिवासो अवक्रमुः] (Ṛg VII.32.27)`,

  '61117': `@deva[उरस्तच्छन्दसि] — In Yajurveda, @deva[उरस्] (changed to @deva[उरो]) retains original form before short @deva[अ].

Example: @deva[उरो अन्तरिक्षम्] (Yaj. Veda IV.7)

Some read the sūtra as @deva[यजुष्युरोः], taking the word as @deva[उरू] ending in @deva[उ], vocative @deva[उरो].

@note[In Yajurveda, without stanzas, the "mid-foot" condition doesn't apply.]`,

  '61118': `@deva[आपो जुषाणो वृष्णो वर्षिष्ठे अम्बे वाम्बाले अम्बिके] — In Yajurveda, short @deva[अ] is retained (prakṛtibhāva) after @deva[आपो], @deva[जुषाणो], @deva[वृष्णो], @deva[वर्षिष्ठे], and in @deva[अम्बे] or @deva[अम्बाले] before @deva[अम्बिके].

Examples:
- @deva[आपो अस्मान् प्रातरः शुन्धयन्तु] (Yaj. IV.2)
- @deva[जुषाणो अप्तुराज्यस्य] (Yaj. V.35)
- @deva[वृष्णो अंशुभ्यां गभस्ति पूतः] (Yaj. VII.1)
- @deva[वर्षिष्ठे अधिनाके]
- @deva[अम्बे अम्बाले अम्बिके]

@note[@deva[अम्बे] etc. don't shorten their vowel by @ref[7.3.107] because they're read this way in the text.]`,

  '61119': `@deva[अङ्गेऽङ्गे] — In Yajurveda, when @deva[अङ्गे] is followed by @deva[अङ्गे], both @deva[ए] and @deva[अ] retain original form.

Examples:
- @deva[ऐन्द्रः प्राणो अङ्गे अङ्गे अदाध्यत्]
- @deva[ऐन्द्रः प्राणो अङ्गे अङ्गे निदिष्यत्]
- @deva[ऐन्द्रः प्राणो अङ्गे अङ्गे अशोचिषम्] (Yaj. 6.20)`,

  '61120': `@deva[कुधात्परस्यानुदात्तस्य] — In Yajurveda, when anudātta @deva[अ] is followed by a guttural or @deva[ध], the preceding @deva[ए]/ओ] and the @deva[अ] retain original form.

Examples:
- @deva[अयं सो अग्निः] (Yaj. 12.47)
- @deva[अयं सो अध्वरः]

Why "anudātta @deva[अ]"? @deva[अधोऽग्रे] — @deva[अग्रे] has acute on first syllable, so sandhi occurs.

Why "guttural or ध"? @deva[सोऽयमग्निः सहस्त्रियः] — sandhi occurs.`,

  '61121': `@deva[अवपथासो यजुषि] — In Yajurveda, when anudātta @deva[अ] of @deva[अवपथास्] follows @deva[ए]/ओ], prakṛtibhāva occurs.

Example: @deva[त्री रुद्रेभ्यो अवपथाः]

@deva[अवपथास्] = 2nd person singular imperfect Ātmanepada of @deva[वप्] with @deva[आ].

The @deva[अ] is grave by @ref[8.1.28]. When not grave by @ref[8.1.30], sandhi occurs: @deva[यद्रुद्रेभ्योऽवपथाः].`,

  '61122': `@deva[गोतो णित्] — After @deva[गो], the following @deva[अ] may optionally be retained everywhere (Vedic and secular).

| With prakṛtibhāva | With sandhi |
|-------------------|-------------|
| @deva[गो अग्रम्] | @deva[गोऽग्रम्] |

Vedic: @deva[अपशवो वा अन्ये गो अश्वेभ्यः], @deva[पशवो गोऽश्वाः].`,

  '61123': `@deva[अवङ् स्फोटायनस्य] — According to Sphoṭāyana, @deva[अवङ्] replaces @deva[ओ] of @deva[गो] when followed by any vowel.

Examples:
| With अवङ् | Without |
|-----------|---------|
| @deva[गवाग्रम्] | @deva[गोऽग्रम्] |
| @deva[गवाजिनम्] | @deva[गोऽजिनम्] |
| @deva[गवौदनम्] | @deva[गवोदनम्] |

@deva[अवङ्] has acute on first syllable. In bahuvrīhi (@ref[6.2.1]): @deva[गावा अग्रमस्य] = @deva[गवाग्रः] (original accent).

This is vyavasthita-vibhāṣā: in @deva[गवाक्षः], @deva[अवङ्] is compulsory.`,

  '61124': `@deva[इन्द्रे च] — The substitution of @deva[अव] for @deva[ओ] of @deva[गो] is compulsory when followed by a vowel found in @deva[इन्द्र] (i.e., @deva[इ]).

Examples:
- @deva[गो] + @deva[इन्द्रः] = @deva[गवेन्द्रः]
- @deva[गवन्द्र यज्ञः]

@note[Some texts don't have @deva[नित्य] (compulsory) in this sūtra.]`,

  '61125': `@deva[प्लुतप्रगृह्या अचि नित्यम्] — Prolated (@deva[प्लुत]) and pragrḥya vowels remain unchanged when followed by a vowel.

Prolated examples:
- @deva[देवदत्ता३ अत्र न्वसि]
- @deva[यज्ञदत्ता३ इदम् आनय]

Pragrḥya examples:
- @deva[अग्नी इति]
- @deva[वायू इति]
- @deva[खट्वे इति]

@note[Tripādī rules are asiddha for prior sūtras (@ref[8.2.1]), but this sūtra specifically mentions pluta to ensure it applies.]`,

  '61126': `@deva[आङ्विभक्ते छन्दसि] — In Vedic, the adverb @deva[आ] becomes nasalized @deva[आँ] before a vowel and retains original form (prakṛtibhāva).

Examples:
- @deva[अभ्र आं अपः] (Ṛg V.48.1)
- @deva[गभीर आं उग्रपुत्रे जिघांसतः] (Ṛg VIII.67.11)

Some read @deva[बहुलम्] into this sūtra, making it optional. Then sandhi can occur: @deva[इन्द्रो बाहुभ्यामातरत्] = @deva[आ अतरत्].`,

  '61127': `@deva[इको यणचि] — According to Śākalya, simple vowels except @deva[अ] (@deva[इक्]), when followed by non-homogeneous vowels, optionally retain original form (long vowels shortened).

| With prakṛtibhāva | With sandhi |
|-------------------|-------------|
| @deva[दधि अत्र] | @deva[दध्यत्र] |
| @deva[मधु अत्र] | @deva[मध्वत्र] |
| @deva[कुमारि अत्र] | @deva[कुमार्यत्र] |

Why "@deva[इक्]"? @deva[खट्वेन्द्रः] (sandhi only for @deva[अ]/आ]).

Why "non-homogeneous"? @deva[कुमारीन्द्रः] (lengthening for homogeneous).

Vārtika: This doesn't apply to words with indicatory @deva[स्] or nitya-samāsa: @deva[अयं ते योनिर्ऋत्वियः].`,

  '61128': `@deva[ऋत्यकः] — According to Śākalya, simple vowels followed by @deva[ऋ] optionally retain original form (long shortened).

Examples:
| With prakṛtibhāva | With sandhi |
|-------------------|-------------|
| @deva[खट्वा ऋश्यः] | @deva[खट्वर्श्यः] |
| @deva[कुमारि ऋश्यः] | @deva[कुमारर्श्यः] |
| @deva[होतृ ऋश्यः] | @deva[होतॄश्यः] |

Why "followed by ऋ"? @deva[खट्वेन्द्रः] (sandhi applies before other vowels).

This applies to all simple vowels including @deva[अ]/आ], unlike @ref[6.1.127].`,

  '61129': `@deva[प्लुत इत्युपस्थिते] — In Padapāṭha, a prolated vowel is treated like an ordinary (non-prolated) vowel before @deva[इति].

When Vedic text is split into words and @deva[इति] is added, there's sandhi:
- @deva[सुश्लोका३ इति] = @deva[सुश्लोकेति]
- @deva[सुमङ्गला३ इति] = @deva[सुमंगलेति]

Why @deva[वत्] (like) instead of direct change? Pluta need not be pragrḥya and vice versa. Using @deva[वत्] allows proper treatment of each case.`,

  '61130': `@deva[ईदूतौ च सप्तम्यर्थे] — According to Cākravarmaṇa, prolated @deva[ई३] followed by a vowel is optionally treated like an ordinary vowel.

| With sandhi | Without |
|-------------|---------|
| @deva[अस्तु हीत्यब्रवीत्] | @deva[अस्तु ही३ इत्यब्रवीत्] |
| @deva[चिनु हीदम्] | @deva[चिनु ही३ इदम्] |

This applies to @deva[इति] (making sandhi optional where @ref[6.1.129] made it obligatory) and to other words (making sandhi optional where @ref[6.1.125] forbade it).

Iṣṭi: This apluta-vad-bhāva also applies to prolated vowels other than @deva[इ]: @deva[वशा३ इयम्] or @deva[वशेयम्].`,

  '61131': `@deva[दिव उत्] — @deva[उ] replaces the final of the nominal stem @deva[दिव्] when it is pada-final.

@deva[दिव्] here is a prātipadika (nominal stem), not a dhātu (root).

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[दिवि कामो यस्य] | @deva[द्युकामः] |
| — | @deva[द्युमान्] |
| — | @deva[विमलद्यु दिनम्] |
| — | @deva[द्युभ्याम्], @deva[द्युभिः] |

When @deva[दिव्] is a verbal root, @deva[ऊ] replaces @deva[व्] by @ref[6.4.19]: @deva[अक्षद्यूभ्याम्].

The @deva[त्] in @deva[उत्] indicates short @deva[उ], debarring @deva[ऊठ्] (@ref[6.4.19]).`,

  '61132': `@deva[एतत्तदोः सुलोपोऽकोरनञ्समासे हलि] — The nominative singular @deva[स्] of @deva[एतद्] and @deva[तद्] is elided when a consonant follows, provided they're not combined with @deva[क] (@ref[5.3.71]) and don't have the negative particle.

| Full form | Before consonant |
|-----------|------------------|
| @deva[एषः ददाति] | @deva[एष ददाति] |
| @deva[सः ददाति] | @deva[स ददाति] |

Why "एतद् and तद्"? @deva[यो ददाति] (no elision).

Why "nominative singular"? @deva[एतौ गावौ चरतः] (dual — no elision).

Why "without क"? @deva[एषको ददाति] (no elision).`,

  '61133': `@deva[स्यतिपरिक्षिप्तं स्यात्] — In Vedic, the nominative singular affix is variously elided after @deva[स्य] (he) when a consonant follows.

With elision:
- @deva[उत स्य वाजी क्षिपणिं तुरण्यति] (Ṛg IV.40.4)
- @deva[एष स्य ते मधुमी इन्द्र सोमः] (Ṛg IX.87.4)

Without elision: @deva[यत्र स्यो निपतेत्]`,

  '61134': `@deva[सोऽचि लोपे चेत्पादपूरणम्] — The nominative affix of @deva[सस्] (he) is elided before a vowel if the elision completes the meter of the verse foot.

Kārikā: @deva[सैष दाशरथी रामः, सैष राजा युधिष्ठिरः। सैष कर्णो महात्यागी सैष भीमो महाबलः॥]

Examples:
- @deva[सेदु राजा क्षयति चर्षणीनाम्] (Ṛg I.32.15)
- @deva[सौषधीरनुरुध्यसे] (Ṛg VIII.43.9)

Why "completing meter"? Otherwise: @deva[स इव व्याघ्रो भवेत्].`,

  '61135': `@deva[सुट्कात्परः] — From here through @ref[6.1.157], understand: "The augment @deva[सुट्] (@deva[स्]) is placed before @deva[क्]."

This is an adhikāra (governing) sūtra.

Example from @ref[6.1.137]: @deva[सम्] + @deva[कृ] → @deva[सम्] + @deva[स्] + @deva[कृ]
→ @deva[संस्कर्ता], @deva[संस्कर्तुम्], @deva[संस्कर्तव्यम्]

All subsequent sūtras teach contexts where @deva[सुट्] is added before roots beginning with @deva[क्].`,

  '61136': `@deva[अडभ्यासव्यवायेऽपि] — The augment @deva[सुट्] is added even when @deva[अट्] (@ref[6.4.71]) or the reduplicate intervenes between preposition and verb.

Examples:
| Form | Analysis |
|------|----------|
| @deva[समस्करोत्] | @deva[सम्] + @deva[अ] + @deva[स्कृ] + imperfect |
| @deva[समस्कार्षीत्] | @deva[सम्] + @deva[अ] + @deva[स्कृ] + aorist |
| @deva[संचस्कार] | @deva[सम्] + reduplicate + @deva[स्कृ] + perfect |
| @deva[परिचस्कार] | @deva[परि] + reduplicate + @deva[स्कृ] + perfect |

@note[This sūtra is derived from two Vārtikas: @deva[अड्व्यवाय उपसंख्यानम्] and @deva[अभ्यासव्यवाये च].]`,

  '61137': `@deva[संपर्युपेभ्यः करोतौ भूषणे] — @deva[सुट्] is placed before @deva[क्] when @deva[कृ] is preceded by @deva[सम्], @deva[परि], or @deva[उप] and the meaning is "to adorn/prepare."

Examples:
| Preposition | Agent | Infinitive | Gerundive |
|-------------|-------|------------|-----------|
| @deva[सम्] | @deva[संस्कर्ता] | @deva[संस्कर्तुम्] | @deva[संस्कर्तव्यम्] |
| @deva[परि] | @deva[परिष्कर्ता] | @deva[परिष्कर्तुम्] | @deva[परिष्कर्तव्यम्] |
| @deva[उप] | @deva[उपष्कर्ता] | @deva[उपष्कर्तुम्] | @deva[उपष्कर्तव्यम्] |

Why "meaning adorn"? @deva[उपकरोति] (no @deva[सुट्] in other meanings).

@note[@deva[म्]→anusvāra by @ref[8.3.5]; @deva[स्]→@deva[ष्] by @ref[8.3.70].]`,

  '61138': `@deva[समवाये च] — @deva[सुट्] is also placed before @deva[क्] when @deva[कृ] follows @deva[सम्], @deva[परि], or @deva[उप] and the meaning is "to assemble."

@deva[समवाय] = aggregation, combining.

Examples:
- @deva[तत्र नः संष्कृतम्] — we assembled there
- @deva[तत्र नः परिष्कृतम्]
- @deva[तत्र नः उपष्कृतम्]

All = @deva[समुदितम्] (assembled).`,

  '61139': `@deva[उपात्प्रतियत्ने वैकृतेऽध्याहारे च] — @deva[सुट्] is placed before @deva[क्] when @deva[कृ] follows @deva[उप] with meanings: (1) to take pains, (2) to prepare/alter, (3) to supply an ellipsis.

| Meaning | Example |
|---------|---------|
| Taking pains | @deva[एधोदकस्योपस्कुरुते] (attends to fuel and water) |
| Preparing | @deva[उपस्कृतं भुङ्क्ते] (eats prepared food) |
| Supplying ellipsis | @deva[उपस्क्रियते] (a thesis is supplied) |

@note[@deva[प्रतियत्न] = effort to improve quality or prevent deterioration. @deva[वैकृत] = something prepared/altered. @deva[अध्याहार] = supplying unstated meaning.]`,

  '61140': `@deva[छेदने च] — @deva[सुट्] is placed before @deva[क्] when @deva[कृ] follows @deva[उप] and the meaning is "to cut/split."

Examples:
- @deva[उपस्कारं मद्रका लुनन्ति] — the Madrakas cut by splitting
- @deva[उपस्कारं काश्मीरका लुनन्ति]

@deva[उपस्कारम्] = @deva[विक्षिप्य] (having split apart).

Vārtika: This occurs when @deva[णमुल्] is added. When meaning isn't "to cut": @deva[उपकिरति].`,

  '61141': `@deva[उप्रत्योरुपसर्गयोः पीडायाम्] — @deva[सुट्] is placed before @deva[क्] when @deva[कृ] follows @deva[उप] or @deva[प्रति] and the meaning is "to cause suffering."

Example: @deva[उपस्कीर्णं] or @deva[प्रतिस्कीर्णं हन्त ते वृषल भूयात्] = may such a scattering befall you, O Śūdra, that it causes pain.

Why "causing suffering"? @deva[प्रतिकीर्णम्] (no @deva[सुट्] in other meanings).`,

  '61142': `@deva[अपादाने चतुष्पदाखुपक्षिणाम्] — @deva[सुट्] is placed before @deva[क्] when @deva[कृ] follows @deva[अप] and the meaning is "scraping of earth by quadrupeds or birds."

Examples:
- @deva[अपस्किरते वृषभो हृष्टः] — the excited bull scrapes
- @deva[अपस्किरते कुक्कुटो भक्ष्यार्थी] — the cock scrapes seeking food
- @deva[अपस्किरते श्वा आश्रयार्थी] — the dog scrapes seeking shelter

Why "quadrupeds/birds"? @deva[अपकिरति देवदत्तः] (no @deva[सुट्] for humans).

Vārtika: Only for scraping through pleasure, seeking food, or making shelter. Not: @deva[अपकिरति श्वा ओदनपिण्डमाशितः].

@note[In these senses, root takes Ātmanepada; otherwise Parasmaipada (@ref[1.3.21]).]`,

  '61143': `@deva[कुस्तुम्बुरु] — The word @deva[कुस्तुम्बुरु] is irregularly formed with @deva[सुट्], meaning "coriander" (a species of herb).

@deva[कुस्तुम्बुरु] = @deva[धान्यकम्] (coriander seeds or plant).

The word is shown in neuter but can be other genders too.

When not meaning coriander: @deva[कुतुम्बुरु] (@deva[कुत्सितानि तुम्बुरूणि] — bad ebony fruits).`,

  '61144': `@deva[अपरस्परं सातत्ये] — The word @deva[अपस्पराः] is formed with @deva[सुट्] when meaning "uninterrupted action."

@deva[सातत्य] = continuity (from @deva[सततम्] + @deva[ष्यञ्]).

Continuous action: @deva[अपरस्पराः सार्था गच्छन्ति] = caravans go continuously without break.

Non-continuous: @deva[अपरपराः सार्था गच्छन्ति] = some and others go just once.

Kārikā on @deva[म्]-elision: @deva[लुम्पेदवश्यमः कृत्ये तुंकाममनसोरपि। समो वा हितततयोर्मांसस्य पचियुड्घञोः॥]`,

  '61145': `@deva[गोष्पदं सेवितासेवितयोः प्रमाणे च] — The word @deva[गोष्पद] is formed with @deva[सुट्] when meaning (1) a place visited by cows, (2) not visited by cows, or (3) quantity.

| Meaning | Example |
|---------|---------|
| Visited by cows | @deva[गोष्पदो देशः] |
| Not visited | @deva[अगोष्पदान्यरण्यानि] |
| Quantity | @deva[गोष्पदमात्रं क्षेत्रम्], @deva[गोष्पदपूरं वृष्टो देवः] |

Without these meanings: @deva[गोपदम्] = @deva[गोः पदम्] (cow's foot).`,

  '61146': `@deva[आस्पदं प्रतिष्ठायाम्] — The word @deva[आस्पद] is formed with @deva[सुट्] when meaning "a place/position."

@deva[प्रतिष्ठा] = firm place, established position, rank, dignity.

Example: @deva[आस्पदम् अनेन लब्धम्] — a position was obtained by him.

Without this meaning: @deva[आ पदात्] = @deva[आपदम्].`,

  '61147': `@deva[आश्चर्यमप्रतीतार्थे] — The word @deva[आश्चर्य] is formed with @deva[सुट्] when meaning "something unusual/wonderful."

Derivation: @deva[आ] + @deva[सुट्] + @deva[चर्] + @deva[यत्]

Unusual meaning:
- @deva[आश्चर्यं यदि स भुंजीत] — surprising if he eats
- @deva[आश्चर्यं यदि सोऽधीयीत] — surprising if he studies

Other meaning: @deva[आचर्यं कर्म शोभनम्] — conduct that is beautiful.`,

  '61148': `@deva[अवस्करः कुत्सायाम्] — The word @deva[अवस्कर] is formed with @deva[सुट्] meaning "excrement."

Derivation: @deva[अव] + @deva[सुट्] + @deva[कृ] + @deva[अप्] (@ref[3.3.57])

@deva[अवस्करः] = @deva[अन्नमलम्] (food waste, excreta). Also: the rectum.

Without this meaning: @deva[अवकरः] (sweepings).`,

  '61149': `@deva[अपस्करश्च रथस्याङ्गे] — The word @deva[अपस्कर] is formed with @deva[सुट्] meaning "a part of a chariot."

Derivation: @deva[अप] + @deva[सुट्] + @deva[कृ] + @deva[अप्] (@ref[3.3.57])

Without this meaning: @deva[अपकरः].`,

  '61150': `@deva[विष्किरोवा शकुनौ] — The word @deva[विष्किर] is optionally formed with @deva[सुट्] when denoting a kind of bird; the other form is @deva[विकिर].

Derivation: @deva[वि] + @deva[सुट्] + @deva[कृ] + @deva[क] (@ref[3.1.135])

Verse: @deva[सर्वे शकुनयो भक्ष्या विष्किराः कुक्कुटादृते।]

Both @deva[विष्किर] and @deva[विकिर] mean a kind of cock/bird.

The specific mention of @deva[विकिर] indicates it always means "bird" exclusively.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.1.101-150). Total: ${Object.keys(vasu).length}`);
