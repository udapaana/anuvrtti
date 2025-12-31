import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '61051': `@deva[विभाषा लीयतेर्ल्यपि चादेचउपदेशे] — Optionally, @deva[आ] is substituted for the final of @deva[ली] (to adhere) when @deva[ल्यप्] follows or before affixes requiring diphthong substitution.

The @deva[ली] of both Divādi and Kriyādi classes is included.

| With substitution | Without |
|-------------------|---------|
| @deva[विलाता] | @deva[विलेता] |
| @deva[विलातुम्] | @deva[विलेतुम्] |
| @deva[विलातव्यम्] | @deva[विलेतव्यम्] |
| @deva[विलाय] | @deva[विलीय] |

Vārtika: The @deva[आ]-substitution is compulsory when @deva[वि] precedes with intensive force: @deva[विलाय] only.`,

  '61052': `@deva[खिदश्छन्दसि] — In Vedic, @deva[आ] is optionally substituted for the diphthong of @deva[खिद्] (to suffer pain).

| With substitution | Without |
|-------------------|---------|
| @deva[चित्तं चिखाद] | @deva[चित्तं चिखेद] |

In secular Sanskrit: @deva[चित्तं खेदयति].`,

  '61053': `@deva[अपगुरो णमुलि] — @deva[आ] is optionally substituted for the diphthong of @deva[गुर्] (to exert) when preceded by @deva[अप] and taking @deva[णमुल्].

@deva[णमुल्] forms the absolutive participle (@ref[3.4.22], @ref[3.4.53]), and the word is repeated.

| With substitution | Without |
|-------------------|---------|
| @deva[अपगारमपगारम्] | @deva[अपगोरमपगोरम्] |

Usage: @deva[अस्यपगारं युध्यन्ते] or @deva[अस्यपगोरं युध्यन्ते] — they fight with raised swords.`,

  '61054': `@deva[चिस्फुरोर्णौ] — @deva[आ] is optionally substituted for the diphthong in the causatives of @deva[चि] (to collect) and @deva[स्फुर्] (to throb).

| Root | With substitution | Without |
|------|-------------------|---------|
| @deva[चि] | @deva[चापयति] | @deva[चाययति] |
| @deva[स्फुर्] | @deva[स्फारयति] | @deva[स्फोरयति] |

@note[For @deva[चि], the augment @deva[प्] is added by @ref[7.3.36].]`,

  '61055': `@deva[प्रजने वीञो विभाषा] — @deva[आ] is optionally substituted for the diphthong in the causative of @deva[वी] when meaning "to conceive an embryo."

@deva[वी] (Adādi 39) means: to go, to conceive, to shine, to eat, to desire.

| With substitution | Without |
|-------------------|---------|
| @deva[प्रवापयति] | @deva[प्रवाययति] |

Example: @deva[पुरो वानो गाः प्रवापयति] = @deva[गर्भे ग्राहयति] — makes the cows conceive.

@note[@deva[प्रजन] = receiving of the embryo leading to birth.]`,

  '61056': `@deva[हेतुभये भीषयस्तदर्थे वा] — @deva[आ] is optionally substituted for the diphthong in the causative of @deva[भी] (to fear) when the fear is produced directly by the agent of the causative (@deva[हेतु]).

@deva[हेतु] = the independent cause (@ref[1.4.54], @ref[1.4.55]).

| With substitution | Without |
|-------------------|---------|
| @deva[मुण्डो भापयते] | @deva[मुण्डो भीषयते] |
| @deva[जटिलो भापयते] | @deva[जटिलो भीषयते] |

@note[This root takes Ātmanepada by @ref[1.3.68]. The augment @deva[ष] (@ref[7.3.40]) doesn't come with @deva[आ]-substitution since @deva[भी] then ends in @deva[आ], not @deva[ई].]`,

  '61057': `@deva[स्मेर्नित्यम्] — @deva[आ] is invariably substituted for the diphthong in the causative of @deva[स्मि] (to smile) when the astonishment is produced directly by the agent.

The word @deva[नित्य] shows optionality (@deva[विभाषा]) ceases.

When the agent is direct cause:
- @deva[मुण्डो जटिलो वा विस्मापयते]

When something else is the cause (no substitution):
- @deva[कुञ्चिकयैनं विस्माययति] — amazes him with a key

@note[@deva[भय] here extends to mean @deva[स्मय] (wonder) by connection with @deva[भीस्मि] (@ref[1.3.68]).]`,

  '61058': `@deva[सृजिदृशोर्झल्यमकिति] — The augment @deva[अम्] (@deva[अ]) is added after the @deva[ऋ] of @deva[सृज्] (to create) and @deva[दृश्] (to see) when an affix beginning with @deva[झल्] (mute or sibilant) follows, provided it has no indicatory @deva[क्].

Examples with @deva[तृन्], @deva[तुमुन्], @deva[तव्य]:
| Root | Agent noun | Infinitive | Gerundive |
|------|------------|------------|-----------|
| @deva[सृज्] | @deva[स्रष्टा] | @deva[स्रष्टुम्] | @deva[स्रष्टव्यम्] |
| @deva[दृश्] | @deva[द्रष्टा] | @deva[द्रष्टुम्] | @deva[द्रष्टव्यम्] |

This @deva[अम्] prevents guṇa by @ref[7.3.86]. But in Aorist (@deva[अस्राक्षीत्], @deva[अद्राक्षीत्]), vṛddhi still occurs.

Why "beginning with झल्"? @deva[सर्ज्जनम्], @deva[दर्सनम्] (with @deva[युच्]).
Why "not कित्"? @deva[सृष्टः], @deva[दृष्टः] (with @deva[क्त]).`,

  '61059': `@deva[अनुदात्तस्य चर्द्धधातुकवदिड्वलादेः] — The augment @deva[अम्] optionally comes after @deva[ऋ] of roots that are @deva[अनुदात्त] in the Dhātupāṭha, when ending in a consonant with @deva[ऋ] as penultimate, before affixes beginning with झल् and not having indicatory @deva[क्].

Examples (@deva[तृप्], @deva[दृप्] — Divādi, Rādhādi subclass, optionally taking @deva[इट्] by @ref[7.2.45]):

| Root | With अम् | With इट् | Without both |
|------|----------|----------|--------------|
| @deva[तृप्] | @deva[त्रप्ता] | @deva[तर्पिता] | @deva[तर्प्ता] |
| @deva[दृप्] | @deva[द्रप्ता] | @deva[दर्पिता] | @deva[दर्प्ता] |

Why "anudātta in upadesa"? @deva[वृहू] (udyamane) is udātta: @deva[वर्ढा], @deva[वर्ढुम्] (no @deva[अम्]).`,

  '61060': `@deva[शीर्षन्नुदात्तश्छन्दसि] — The word @deva[शीर्षन्] (head) is found in Vedic.

This is another form of @deva[शिरस्], not a substitute — both forms occur in Vedic.

Vedic usage:
- @deva[शीर्ष्णा हि तत्र सोमं क्रीतं हरन्ति]
- @deva[यत्ते शीर्ष्णो दौर्भाग्यम्]

In secular Sanskrit, only @deva[शिरः] is used.`,

  '61061': `@deva[यचि] — @deva[शीर्षन्] is substituted for @deva[शिरस्] when a taddhita affix beginning with @deva[य] follows.

Examples (with @deva[यत्] by @ref[4.3.55]):
- @deva[शीर्षण्यो हि मुख्यो भवति]
- @deva[शीर्षण्यः स्वरः]

The final @deva[अन्] is retained before @deva[यत्] by @ref[6.4.168].

Why "taddhita"? With denominative @deva[य]: @deva[शिर इच्छति] = @deva[शिरस्यति] (no substitution).

Vārtika: Optional when meaning "hair": @deva[शीर्षण्याः केशाः] or @deva[शिरस्याः केशाः].`,

  '61062': `@deva[शीर्षं तद्धितेऽचि] — @deva[शीर्ष] (not @deva[शीर्षन्]) is substituted for @deva[शिरस्] when a taddhita affix beginning with a vowel follows.

Examples:
| Base | Affix | Result |
|------|-------|--------|
| @deva[हस्तिशिरसोऽपत्यम्] | @deva[इञ्] (@ref[4.1.96]) | @deva[हास्तिशीर्षिः] |
| @deva[स्थूलशिरस इदम्] | — | @deva[स्थौलशीर्षम्] |

Why @deva[शीर्ष] (not @deva[शीर्षन्])? With @deva[शीर्षन्], the final @deva[न्] would be retained (@ref[6.4.168]), giving wrong forms.

Feminine of @deva[हास्तिशीर्षिः] with @deva[ष्यङ्]: @deva[हास्तिशीर्षी] (not *@deva[हास्तिशीर्ष्णी]).`,

  '61063': `@deva[पादो ज्ञाप्रसवयोः पूर्वपदस्य दीर्घात्] — In weak cases (from accusative plural onward), the following substitutions occur:

| Original | Substitute | Example |
|----------|------------|---------|
| @deva[पाद] | @deva[पद्] | @deva[निपदश्चतुरो जहि] |
| @deva[दन्त] | @deva[दत्] | — |
| @deva[नासिका] | @deva[नस्] | — |
| @deva[मास] | @deva[मास्] | — |
| @deva[हृदय] | @deva[हृद्] | — |
| @deva[निशा] | @deva[निश] | — |
| @deva[असृज्] | @deva[असन्] | — |
| @deva[यूष] | @deva[यूषन्] | — |
| @deva[दोस्] | @deva[दोषन्] | — |
| @deva[यकृत्] | @deva[यकन्] | — |
| @deva[शकृत्] | @deva[शकन्] | — |
| @deva[उदक] | @deva[उदन्] | — |
| @deva[आस्य] | @deva[आसन्] | — |

@note[Some say these apply only in Vedic; others say they're general; still others read @deva[विभाषा] making them optional.]`,

  '61064': `@deva[धात्वादेः षः सः] — The initial @deva[ष्] of a root in the Dhātupāṭha is replaced by @deva[स्].

Examples:
| Root (as listed) | Becomes |
|------------------|---------|
| @deva[षह्] | @deva[सहते] |
| @deva[षिच्] | @deva[सिंचति] |

Why "root"? Non-roots retain @deva[ष्]: @deva[षोडश], @deva[षडिकः], @deva[षण्डः].

Why "initial"? Non-initial @deva[ष्] remains: @deva[कर्षति], @deva[कृषति].

Why list roots with @deva[ष्]? For brevity — certain roots change @deva[स्] to @deva[ष्] after certain letters. By teaching them with @deva[ष्], rule @ref[8.3.111] (@deva[स्थानेऽन्तरतमः]) applies to justify the change.`,

  '61065': `@deva[णो नः] — The initial @deva[ण्] of a root in the Dhātupāṭha is replaced by @deva[न्].

Examples:
| Root (as listed) | Becomes |
|------------------|---------|
| @deva[णीञ्] | @deva[नयति] |
| @deva[णम्] | @deva[नमति] |
| @deva[णह्] | @deva[नह्यति] |

But not non-initial: @deva[अण्] → @deva[अणति].

This doesn't apply to denominatives: @deva[णकारमिच्छति] = @deva[णकारीयति].

Roots are listed with @deva[ण्] because @ref[8.4.14] changes @deva[न्] to @deva[ण्] after certain prepositions.

Exceptions (listed with @deva[न्]): @deva[नृ], @deva[नन्दि], @deva[नर्दि], @deva[नक्क], @deva[नाटि], @deva[नाधृ], @deva[नाथृ].`,

  '61066': `@deva[लोपो व्योर्वलि] — The final @deva[व्] or @deva[य्] of a stem is elided when followed by any consonant except @deva[य्] (@deva[वल्] consonants).

Examples:
| Base | + Affix | Result |
|------|---------|--------|
| @deva[दिव्] | + @deva[क्वसु] | @deva[दिदिवान्] (@deva[व्] of root elided after reduplication) |
| @deva[ऊय्] | + @deva[त] | @deva[ऊतम्] (spun) |
| @deva[क्नूय्] | + @deva[त] | @deva[क्नूतम्] (made a noise) |
| @deva[गोधा] + @deva[एय्र] | → | @deva[गौधेरः] (@deva[य्] elided before @deva[र्]) |
| @deva[पचेय्] + @deva[रन्] | → | @deva[पचेरन्] |`,

  '61067': `@deva[वेरपृक्तस्य] — An affix @deva[वि] reduced to a single letter @deva[व्] (apṛkta) is elided.

Affixes containing @deva[वि] include @deva[क्विप्], @deva[क्विन्], @deva[ण्वि], etc. The real affix is just @deva[व्], which being a single-letter affix (@ref[1.2.41]), is elided.

Examples:
| Affix | Example |
|-------|---------|
| @deva[क्विप्] (@ref[3.2.87]) | @deva[ब्रह्महा], @deva[भ्रूणहा] |
| @deva[क्विन्] (@ref[3.2.58]) | @deva[घृतस्पृक्], @deva[तैलस्पृक्] |
| @deva[ण्वि] (@ref[3.2.62]) | @deva[अर्धभाक्], @deva[पादभाक्] |

Why "single-letter"? Multi-letter affixes remain: @deva[दर्विः] (by @deva[विन्]), @deva[जागृविः] (by @deva[क्विन्], Uṇādi IV.53.44).`,

  '61068': `@deva[हलस्तद्धितस्य] — After a consonant, or after long @deva[ई] or @deva[आ] of feminine affixes @deva[ङी] and @deva[आप्], the nominative @deva[स्] is elided. Also, @deva[ति] and @deva[सि] reduced to @deva[त्] and @deva[स्] are elided after consonants.

Nominative @deva[स्] elision:
| After consonant | After ङी | After आप् |
|-----------------|----------|-----------|
| @deva[राजा] (from @deva[राजान्] + @deva[स्]) | @deva[कुमारी] | @deva[खट्वा] |
| @deva[तक्षा] | @deva[गौरी] | @deva[मालिका] |

Verb ending elision after consonants:
| Form | Analysis |
|------|----------|
| @deva[अभवत्] | @deva[अभव] + @deva[त्] (from @deva[ति]) |`,

  '61069': `@deva[एङ्ह्रस्वात्संबुद्धेः] — After @deva[ए], @deva[ओ], or a short vowel, the consonant of the vocative singular affix (@deva[स्] or @deva[अम्]) is elided.

By @ref[7.3.108], short vowels become guṇa in vocative singular. By @ref[7.3.107], long @deva[ई]/ऊ] become short.

Examples:
| Stem | Vocative |
|------|----------|
| @deva[अग्नि] → @deva[अग्ने] | @deva[हे अग्ने] |
| @deva[वायु] → @deva[वायो] | @deva[हे वायो] |
| @deva[नदी] → @deva[नदि] | @deva[हे नदि] |
| @deva[वधू] → @deva[वधु] | @deva[हे वधु] |`,

  '61070': `@deva[विभाषाऽशिष्टे छन्दसि] — In Vedic, the case-ending @deva[इ] (@deva[शि]) of nominative/accusative plural neuter is optionally elided.

| With elision | Without |
|--------------|---------|
| @deva[या क्षेत्रा] | @deva[यानि क्षेत्राणि] |
| @deva[या वना] | @deva[यानि वनानि] |`,

  '61071': `@deva[ह्रस्वस्य पिति कृति तुक्] — The augment @deva[त्] (@deva[तुक्]) is added to a root ending in a short vowel when a kṛt affix with indicatory @deva[प्] follows.

Examples:
| Root | + Affix | Result |
|------|---------|--------|
| @deva[चि] | + @deva[क्विप्] | @deva[अग्निचित्] |
| @deva[सु] | + @deva[क्विप्] | @deva[सोमसुत्] |
| @deva[कृ] | + @deva[ल्यप्] | @deva[प्रकृत्य] |
| @deva[हृ] | + @deva[ल्यप्] | @deva[प्रहृत्य] |

Why "short vowel"? @deva[आलूय], @deva[ग्रामणीः] (no @deva[तुक्]).
Why "indicatory प्"? @deva[कूतम्], @deva[हृतम्] (no @deva[तुक्]).
Why "kṛt"? @deva[पटुतरः], @deva[पटुतमः] (taddhita — no @deva[तुक्]).`,

  '61072': `@deva[संहितायाम्] — From here through @ref[6.1.157], the rules apply in @deva[संहिता] (continuous speech, without pause).

This is an adhikāra (governing) sūtra.

Example:
| In saṃhitā | With pause |
|------------|------------|
| @deva[दध्यत्र] | @deva[दधि अत्र] |
| @deva[मध्वत्र] | @deva[मधु अत्र] |

@deva[इ] and @deva[उ] change to @deva[य्] and @deva[व्] only when pronounced together without hiatus.`,

  '61073': `@deva[छे च] — The augment @deva[त्] is also added to a preceding short vowel when @deva[छ] follows in continuous speech.

Examples:
- @deva[इच्छति] (from @deva[इष्] + @deva[छ])
- @deva[गच्छति] (from @deva[गम्] + @deva[छ])

The @deva[त्] becomes @deva[च्] by @ref[8.4.40].

The augment belongs to the short vowel, not the whole syllable. In @deva[चिच्छिदतुः], @deva[त्] is part of @deva[इ], not of the reduplicate @deva[चि], so it's not elided by @ref[7.4.60].

Maxim: @deva[नावयवावयवः समुदायावयवो भवति] — a part of a part is not considered a part of the whole.`,

  '61074': `@deva[आङो मा च] — The augment @deva[त्] is necessarily added to @deva[आ] (the particle/preverb) and @deva[मा] (prohibitive particle) when @deva[छ] follows.

This makes @deva[तुक्] obligatory where @ref[6.1.76] would make it optional.

With @deva[आङ्]:
- @deva[ईषच्छाया] = @deva[आच्छाया] (slight shade)
- @deva[आच्छादयति] (covers)

With @deva[माङ्]:
- @deva[माच्छैत्सीत्] (don't cut!)
- @deva[माच्छिदत्]

When @deva[आ] is not a gati/karmapravachanīya: @deva[आछाया] optionally (by @ref[6.1.76]).`,

  '61075': `@deva[दीर्घात्] — The augment @deva[त्] is added to a long vowel when followed by @deva[छ] in continuous speech.

Examples:
- @deva[ह्रीच्छति] (from @deva[ह्री] + @deva[छ])
- @deva[म्लेच्छति]
- @deva[अपचाच्छायते]
- @deva[विचाच्छायते]

The augment belongs to the long vowel, not the whole syllable ending in that vowel.`,

  '61076': `@deva[पदान्ताद्वा] — The augment @deva[त्] is optionally added to a long vowel that is final in a pada (complete word) when @deva[छ] follows.

This makes optional what @ref[6.1.75] made obligatory.

| With तुक् | Without |
|-----------|---------|
| @deva[कूटीच्छाया] | @deva[कुटीछाया] |
| @deva[कुवलीच्छाया] | @deva[कुवलीछाया] |

This is a padānta rule, not a pada-vidhi, so the words need not be in syntactic construction.

Vārtika: In Vedic, optional after @deva[विश्वजन] etc.: @deva[विश्वजनच्छत्रम्] or @deva[विश्वजनछत्रम्].`,

  '61077': `@deva[इको यणचि] — When followed by a vowel, the vowels @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] (short or long) are replaced by their corresponding semivowels @deva[य्], @deva[व्], @deva[र्], @deva[ल्].

This is restricted by @ref[6.1.101] — the following vowel must not be of the same class.

Examples:
| Combination | Result |
|-------------|--------|
| @deva[दधि] + @deva[अत्र] | @deva[दध्यत्र] |
| @deva[मधु] + @deva[अत्र] | @deva[मध्वत्र] |
| @deva[कर्तृ] + @deva[अर्थम्] | @deva[कर्त्रर्थम्] |
| @deva[लृ] + @deva[आकृति] | @deva[लाकृतिः] |

Vārtika: This substitution occurs even after a prolated vowel, superseding lengthening (@ref[6.1.101]): @deva[अग्ना३इ इन्द्रम्] = @deva[अग्ना३यिन्द्रम्].`,

  '61078': `@deva[एचोऽयवायावः] — When followed by a vowel, the diphthongs @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ] are replaced by @deva[अय्], @deva[आय्], @deva[अव्], @deva[आव्] respectively.

Examples:
| Combination | Result |
|-------------|--------|
| @deva[चे] + @deva[अन] (@deva[ल्युट्]) | @deva[चयनम्] |
| @deva[लो] + @deva[अन] | @deva[लवनम्] |
| @deva[चै] + @deva[अक] | @deva[चायकः] |
| @deva[लौ] + @deva[अक] | @deva[लावकः] |
| @deva[रो] + @deva[अण] (@deva[युच्]) | @deva[रवणः] |`,

  '61079': `@deva[वान्तो यि प्रत्यये] — The substitutes @deva[अव्] and @deva[आव्] (for @deva[ओ] and @deva[औ]) also occur before an affix beginning with @deva[य्].

Examples:
| Base | + Affix | Result |
|------|---------|--------|
| @deva[बभ्रु] + @deva[यञ्] | @deva[बाभ्रो] + @deva[य] | @deva[बाभ्रव्यः] |
| @deva[माण्डु] + @deva[यञ्] | — | @deva[माण्डव्यः] |
| @deva[नौ] + @deva[य] (@ref[4.4.91]) | — | @deva[नाव्यो हृदः] |

Why "@deva[अव्]/आव्]" only? @deva[ऐ] before @deva[य] doesn't change: @deva[रायमिच्छति] = @deva[रैयति].
Why "affix"? @deva[गोयानम्], @deva[नौयानम्] (no change before non-affix @deva[य]).`,

  '61080': `@deva[धातोर्यण्वलावचः तन्निमित्तस्यैव] — Before an affix beginning with @deva[य्], @deva[अव्]/आव्] replaces @deva[ओ]/औ] of a root only when the diphthong was itself caused by that affix.

Examples:
| Root | + Affix | Guṇa → | Result |
|------|---------|--------|--------|
| @deva[लू] | @deva[यत्] | @deva[लू] → @deva[लो] | @deva[लव्यम्] |
| @deva[पू] | @deva[यत्] | @deva[पू] → @deva[पो] | @deva[पव्यम्] |
| @deva[लू] | @deva[ण्यत्] | @deva[लू] → @deva[लौ] | @deva[लाव्यम्] |

Why "of a root"? For nominal stems like @deva[बभ्रु], the previous rule (@ref[6.1.79]) applies directly.`,

  '61081': `@deva[क्षय्यजय्यौ शक्यार्थे] — In @deva[क्षय्य] and @deva[जय्य], @deva[अय्] replaces @deva[ए] only when the meaning is "possible to do."

| Root | With यत् | Meaning |
|------|----------|---------|
| @deva[क्षि] | @deva[क्षय्यः] | capable of being destroyed |
| @deva[जि] | @deva[जय्यः] | capable of being conquered |

Analysis: @deva[शक्यः क्षेतुम्] = @deva[क्षय्यः].

Why "possible to do"? For necessity, no change:
- @deva[क्षेयं पापम्] — sin that must be destroyed
- @deva[जेयो वृषलः] — the Śūdra who must be conquered`,

  '61082': `@deva[क्रय्यं विक्रयणे] — In @deva[क्रय्य], @deva[अय्] replaces @deva[ए] when meaning "exposed for sale, saleable."

@deva[तदर्थ] = for the purpose of being bought.

Examples:
- @deva[क्रय्या गौः] — a cow for sale
- @deva[क्रय्यः कम्बलः] — a blanket for sale

Why "saleable"? In other meanings:
- @deva[क्रेयं नो धान्यं न चास्ति क्रय्यम्] — we want to buy grain, but none is for sale`,

  '61083': `@deva[भय्यप्रवय्यौ छन्दसि] — The forms @deva[भय्य] and @deva[प्रवय्य] occur in Vedic.

| Base | Analysis | Vedic form |
|------|----------|------------|
| @deva[भी] + @deva[यत्] | @deva[भे] → @deva[भय्] | @deva[भय्यम्] |
| @deva[प्र] + @deva[वी] + @deva[यत्] | @deva[वे] → @deva[वय्] | @deva[प्रवय्या] |

Vedic usage:
- @deva[भय्यं किलासीत्]
- @deva[वत्सतरी प्रवय्या]

In secular Sanskrit: @deva[भेयम्], @deva[प्रवेयम्].

Vārtika: @deva[हृदय्या] also occurs with water: @deva[हृदे भवा] = @deva[हृदय्या आपः] (by @ref[4.4.110]).`,

  '61084': `@deva[एकः पूर्वपरयोः] — From here through @ref[6.1.111], it should be understood that "one (substitute) replaces both the preceding and following."

This is an adhikāra for ekādeśa (single substitute) rules.

Example from @ref[6.1.87]: "There is guṇa when @deva[अ]/आ] is followed by a vowel."

@deva[खट्वा] + @deva[इन्द्रः] = @deva[खट्वेन्द्रः]

Here @deva[ए] is the single substitute for both @deva[आ] (preceding) and @deva[इ] (following).`,

  '61085': `@deva[अन्त्यादाप्तेः] — This single substitute is treated as both the final of the preceding form and the initial of the following form.

Since in ekādeśa the sthānin (original) is the combined preceding + following, this sūtra clarifies the substitute's behavior.

Example: @deva[ब्रह्मबन्धु] + @deva[ऊ] (feminine, @ref[4.1.66])
- @deva[उ] + @deva[ऊ] = @deva[ऊ] (by @ref[6.1.101])
- Result: @deva[ब्रह्मबन्धू]

The @deva[ऊ] counts as:
- Final of @deva[ब्रह्मबन्धु] (so it's a prātipadika)
- Initial of the affix @deva[ऊ] (so it's an affix)`,

  '61086': `@deva[षत्वतुकोरसिद्धः] — The ekādeśa is treated as not having occurred (asiddha) for purposes of @deva[ष]-substitution and @deva[तुक्]-augmentation.

Example: @deva[कांसिचत्]
Derivation: @deva[कस्] + @deva[असिचत्]
→ @deva[कर्] + @deva[असिचत्] (@deva[स]→@deva[र्] by @ref[8.2.66])
→ @deva[कं] + @deva[उ] + @deva[असिचत्] (@deva[र्]→@deva[उ] by @ref[6.1.113])
→ @deva[को] + @deva[असिचत्] (@deva[अ]+@deva[उ]=@deva[ओ])
→ @deva[कोऽसिचत्] (@deva[ओ]+@deva[अ]=@deva[ओ])

Now: is @deva[स] changed to @deva[ष] after @deva[ओ]? No — by this rule, the ekādeśa @deva[ओ] is asiddha for ṣatva purposes.`,

  '61087': `@deva[आद्गुणः] — Guṇa is the single substitute when @deva[अ] or @deva[आ] is followed by a simple vowel.

@deva[अ]/आ + इ/ई = ए]
@deva[अ]/आ + उ/ऊ = ओ]
@deva[अ]/आ + ऋ/ॠ = अर्]
@deva[अ]/आ + ऌ = अल्]

Examples:
| Combination | Result |
|-------------|--------|
| @deva[तव] + @deva[इदम्] | @deva[तवेदम्] |
| @deva[खट्वा] + @deva[इन्द्रः] | @deva[खट्वेन्द्रः] |
| @deva[तव] + @deva[उदकम्] | @deva[तवोदकम्] |
| @deva[खट्वा] + @deva[ऋश्यः] | @deva[खट्वर्श्यः] |

By @ref[1.1.51], the guṇa substitute for @deva[ऋ]/ऌ] is treated like @deva[ऋ]/ऌ].`,

  '61088': `@deva[वृद्धिरेचि] — Vṛddhi is the single substitute when @deva[अ] or @deva[आ] is followed by a diphthong.

@deva[अ]/आ + ए = ऐ]
@deva[अ]/आ + ऐ = ऐ]
@deva[अ]/आ + ओ = औ]
@deva[अ]/आ + औ = औ]

Examples:
| Combination | Result |
|-------------|--------|
| @deva[ब्रह्म] + @deva[एडका] | @deva[ब्रह्मैडका] |
| @deva[खट्वा] + @deva[ओदनः] | @deva[खट्वौदनः] |
| @deva[ब्रह्म] + @deva[औपगवः] | @deva[ब्रह्मौपगवः] |

This debars guṇa (@ref[6.1.87]).`,

  '61089': `@deva[एत्येधत्यूठ्सु] — Vṛddhi is the single substitute when @deva[अ]/आ] is followed by:
1. @deva[ए] of @deva[एति] (root @deva[इ])
2. @deva[ए] of @deva[एधते] (root @deva[एध्])
3. @deva[ऊ] of @deva[ऊह्] (substitute of @deva[वाह्] by @ref[6.4.132])

Examples:
| Combination | Result |
|-------------|--------|
| @deva[उप] + @deva[एति] | @deva[उपैति] |
| @deva[उप] + @deva[एधते] | @deva[उपैधते] |
| @deva[प्रष्ठ] + @deva[ऊहा] | @deva[प्रष्ठौहा] |

@note[@deva[एच्] (diphthong) qualifies @deva[इ] in @deva[एति] (when @deva[इ] → @deva[ए] by internal change), not @deva[एध्] (always diphthong) or @deva[ऊठ्] (@deva[ऊ] is not a diphthong).]`,

  '61090': `@deva[आटश्च] — Vṛddhi is the single substitute when the augment @deva[आट्] is followed by any vowel.

@deva[आट्] is added to vowel-initial roots in Imperfect, Aorist, and Conditional (@ref[6.4.72]).

Examples:
| Root | Tense | Form |
|------|-------|------|
| @deva[ईक्ष्] | Aorist | @deva[ऐक्षिष्ट] |
| @deva[उभ्] | Aorist | @deva[औभीत्] |
| @deva[ऊर्ध्रा] | Aorist | @deva[और्ध्रीत्] |

According to Siddhānta Kaumudī, @deva[आट्] also refers to the augment @deva[ङित्] affixes take after nadī-words (@ref[7.3.112]).`,

  '61091': `@deva[उपसर्गादृति धातौ] — Vṛddhi is the single substitute when @deva[अ]/आ] of a preposition is followed by short @deva[ऋ] of a verbal root.

Examples:
| Preverb + Root | Result |
|----------------|--------|
| @deva[उप] + @deva[ऋच्छति] | @deva[उपार्च्छति] |
| @deva[प्र] + @deva[ऋच्छति] | @deva[प्रार्च्छति] |

Why "preposition"? Without upasarga: @deva[खट्वर्च्छति], @deva[मालर्च्छति] (guṇa only).

Why "ऋ"? With @deva[इ]: @deva[उप] + @deva[इत] = @deva[उपेतः] (guṇa only).

Why "short ऋ"? With long @deva[ॠ], only guṇa applies.`,

  '61092': `@deva[वा नामधातोराऽपिशलेः] — According to Āpiśali, vṛddhi is optionally the single substitute when @deva[अ]/आ] of a preposition is followed by a denominative verb beginning with @deva[ऋ] (or @deva[ऌ], by homogeneity).

| With vṛddhi | Without |
|-------------|---------|
| @deva[उपार्षभीयति] | @deva[उपर्षभीयति] |
| @deva[उपाल्कारीयति] | @deva[उपल्कारीयति] |

@note[Āpiśali's name is mentioned for respect; @deva[वा] alone would make it optional.]`,

  '61093': `@deva[औतोऽम्शसोः] — For @deva[ओ] of a nominal stem + @deva[अ] of accusative @deva[अम्] or @deva[अस्], the single substitute is @deva[आ].

@deva[औत] = @deva[आ] + @deva[ओत].

| Stem | + Affix | Result |
|------|---------|--------|
| @deva[गो] | + @deva[अम्] | @deva[गाम्] |
| @deva[गो] | + @deva[अस्] | @deva[गाः] |
| @deva[द्यो] | + @deva[अम्] | @deva[द्याम्] |

This debars vṛddhi of @ref[7.1.90].

@note[@deva[अम्] here is the accusative singular affix, not the imperfect verbal ending: @deva[अचिनवम्], @deva[असुनवम्] (no change).]`,

  '61094': `@deva[एङि पररूपम्] — When @deva[अ]/आ] of a preposition is followed by @deva[ए] or @deva[ओ] of a verbal root, the second vowel (pararūpa) is the single substitute.

This debars vṛddhi of @ref[6.1.88].

| Preverb + Root | Result |
|----------------|--------|
| @deva[उप] + @deva[एलयति] | @deva[उपेलयति] |
| @deva[प्र] + @deva[ओषति] | @deva[प्रोषति] |

Some extend optionality (@ref[6.1.92]) to denominatives:
| With pararūpa | With vṛddhi |
|---------------|-------------|
| @deva[उपेडकीयति] | @deva[उपैडकीयति] |

Vārtika: Pararūpa in @deva[शकन्धुः] etc.: @deva[शक] + @deva[अन्धुः] = @deva[शकन्धुः]; @deva[कुल] + @deva[अटा] = @deva[कुलटा]; @deva[सीम] + @deva[अन्तः] = @deva[सीमन्तः].`,

  '61095': `@deva[ओमाङोश्च] — For @deva[अ]/आ] + the vowel of @deva[ओम्] or the preverb @deva[आङ्], pararūpa (the second vowel) is the single substitute.

Examples:
| Combination | Result |
|-------------|--------|
| @deva[का] + @deva[ओम्] | @deva[कोम्] |
| @deva[या] + @deva[ओम्] | @deva[योम्] |
| @deva[आ] + @deva[ऊढा] | @deva[ओढा] |
| @deva[अद्य] + @deva[ओढा] | @deva[अद्योढा] |
| @deva[आ] + @deva[ऋश्यात्] | @deva[अर्श्यात्] |

This supersedes both vṛddhi (@ref[6.1.88]) and lengthening (@ref[6.1.101]).`,

  '61096': `@deva[उसि च पदान्तात्] — For @deva[अ]/आ] (not pada-final) + @deva[उ] of the tense-affix @deva[उस्], pararūpa is the single substitute.

This debars guṇa of @ref[6.1.87].

Examples (Potential @deva[लिङ्] and Imperfect @deva[लङ्]):
| Base | + उस् | Result |
|------|-------|--------|
| @deva[भिन्द्या] | + @deva[उस्] | @deva[भिन्द्युः] |
| @deva[छिन्द्या] | + @deva[उस्] | @deva[छिन्द्युः] |
| @deva[अदा] | + @deva[उस्] | @deva[अदुः] |

Derivation: @deva[भिन्द्] + @deva[यासुट्] + @deva[झि] → @deva[भिन्द्] + @deva[य] + @deva[उस्] (@deva[जुस्] replaces @deva[झि]) = @deva[भिन्द्युः].`,

  '61097': `@deva[अतो गुणे] — When short @deva[अ] (not pada-final) is followed by a guṇa vowel, pararūpa (the guṇa) is the single substitute.

This debars lengthening (@ref[6.1.101]) and vṛddhi before @deva[ए] (@ref[6.1.88]).

Examples:
| Combination | Result |
|-------------|--------|
| @deva[पच] + @deva[अन्ति] | @deva[पचन्ति] |
| @deva[पच] + @deva[ए] | @deva[पचे] |

Why "short अ"? @deva[या] + @deva[अन्ति] = @deva[यान्ति] (lengthening applies).

Why "guṇa"? @deva[अपच] + @deva[इ] = @deva[अपचे] (vṛddhi, not pararūpa).

When pada-final: @deva[दण्ड] + @deva[अग्रम्] = @deva[दण्डाग्रम्] (lengthening applies).`,

  '61098': `@deva[अव्यक्तानुकरणस्यात इतौ] — For @deva[अत्] of a word imitating an inarticulate sound + @deva[इति], the @deva[इ] of @deva[इति] is the single substitute.

@deva[अव्यक्त] = indistinct sound; @deva[अनुकरण] = imitation.

Examples:
| Imitation + इति | Result |
|-----------------|--------|
| @deva[पटत्] + @deva[इति] | @deva[पटिति] |
| @deva[घटत्] + @deva[इति] | @deva[घटिति] |
| @deva[छमत्] + @deva[इति] | @deva[छमिति] |

Why "sound imitation"? @deva[जगत्] + @deva[इति] = @deva[जगदिति] (no pararūpa).

Why "@deva[अत्]"? @deva[मरट्] + @deva[इति] = @deva[मरडिति].

Why "+ इति"? @deva[पटत्] + @deva[अत्र] = @deva[पटदत्र].

Vārtika: Only for polysyllabic words. Monosyllabic: @deva[स्रत्] + @deva[इति] = @deva[स्रदिति].`,

  '61099': `@deva[आम्रेडितस्यामन्त्रितस्य च] — When a sound-imitation word is doubled, the pararūpa substitution does not occur. However, for final @deva[त्] + @deva[इ], pararūpa is optionally substituted.

| Form | Analysis |
|------|----------|
| @deva[पटत्पटदिति] | no pararūpa (regular sandhi) |
| @deva[पटत्पटेति] | optional @deva[त्]+@deva[इ] → @deva[ए] |
| @deva[पटत्पटिति] | full word pararūpa by @ref[6.1.98] |

The word is doubled by @ref[8.1.4]. @deva[आम्रेडित] = the second member of a doubled word (@ref[8.1.2]).`,

  '61100': `@deva[अतो लोपोऽत्यादाविति चेत्पादादेः] — When the affix @deva[आ] (@deva[डाच्]) causes elision of final @deva[अत्] in a doubled sound-imitation word, the final @deva[त्] of the first member + initial consonant of the second = the second consonant alone (pararūpa).

Derivation: @deva[पटत्पटत्] + @deva[डाच्] (@ref[5.4.57])
→ @deva[पटत्पटा] (final @deva[अत्] elided)
→ @deva[पटपटा] (@deva[त्] + @deva[प्] = @deva[प्])

Examples:
- @deva[पटपटा करोति]
- @deva[दमदमा करोति]

@note[This sūtra is actually a Vārtika. The doubling occurs before @deva[अत्]-elision.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.1.51-100). Total: ${Object.keys(vasu).length}`);
