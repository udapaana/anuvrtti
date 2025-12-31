import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '32001': `@deva[कर्मण्यण्] — "The affix @deva[अण्] comes after a root when the object is in composition as an @deva[उपपद]."

**Three types of object (@deva[कर्म]):**

| Type | Definition | Example |
|------|------------|---------|
| @deva[निवर्त्य] | Material cause unexpressed | @deva[कुम्भं करोति] (mud unexpressed) |
| @deva[विकार्य] | Material cause is modified | @deva[काण्डलावः] "branch-cutter" |
| @deva[प्राप्य] | Object is reached | @deva[ग्रामं गच्छति] |

This is the default affix for agent nouns with objects.`,

  '32002': `@deva[हनो वध लिङि] — "After @deva[हू], @deva[वे], and @deva[मा], @deva[अण्] comes when the object is in composition."

This debars @deva[क] (by @ref[3.2.3]).

| Root | Meaning | Example |
|------|---------|---------|
| @deva[ह्वे] | to call | @deva[स्वर्गह्वायः] "caller to heaven" |
| @deva[वे] | to weave | @deva[तन्तुवायः] "weaver" |
| @deva[मा] | to measure | @deva[धान्यमायः] "grain-measurer" |

@note[The augment @deva[य] is added by @ref[7.3.33] after roots ending in @deva[आ] before @deva[कृत्] affixes with @deva[ण्] or @deva[म्].]`,

  '32003': `@deva[आतोऽनुपसर्गे कः] — "After roots ending in @deva[आ] without a prefix, @deva[क] comes when the object is in composition."

This debars @deva[अण्].

| Root | Example | Meaning |
|------|---------|---------|
| @deva[दा] | @deva[गोदः] | giver of cows |
| @deva[दा] | @deva[कम्बलदः] | giver of blankets |
| @deva[त्रै] | @deva[पार्ष्णित्रम्] | what protects the rear |
| @deva[त्रै] | @deva[अङ्गुलित्रम्] | thimble (finger-protector) |

With prefix: @deva[गोसन्दायः] (takes @deva[अण्] instead)`,

  '32004': `@deva[सुपि स्थः] — "After @deva[स्था], @deva[क] comes when a case-inflected word is in composition."

Unlike the previous sūtras, the @deva[उपपद] need not be accusative—any case works.

| Example | Meaning | Analysis |
|---------|---------|----------|
| @deva[समस्थः] | in accessible position | @deva[समे तिष्ठति] |
| @deva[विषमस्थः] | in inaccessible position | @deva[विषमे तिष्ठति] |

@note[This sūtra can be split: (1) @deva[सुपि] extends @deva[क] to all @deva[आ]-final roots with case-inflected @deva[उपपद]; (2) @deva[स्थः] specifies @deva[स्था].]`,

  '32005': `@deva[तुन्दपरिमृजः शोकापनुदश्च] — "After @deva[परिमृज्] and @deva[अपनुद्] with @deva[तुन्द] and @deva[शोक] respectively, @deva[क] is used."

| Compound | Meaning |
|----------|---------|
| @deva[तुन्दपरिमृजः] | lazy person (one who rubs his belly) |
| @deva[शोकापनुदः] | remover of grief (e.g., a son) |

@note[This applies only when meaning "lazy" or "giver of happiness." Otherwise: @deva[तुन्दपरिमार्जः] "one who cleans his navel," @deva[शोकापनोदः] "one who drives away grief."]`,

  '32006': `@deva[प्रादाज्ज्ञः] — "After @deva[दा] and @deva[ज्ञा] with prefix @deva[प्र], @deva[क] comes when the accusative object is in composition."

| Formation | Meaning |
|-----------|---------|
| @deva[सर्वप्रदः] | giver of all, liberal |
| @deva[पथिप्रज्ञः] | acquainted with roads |

With other prefixes: @deva[गोसन्दायः] (general @deva[अण्])`,

  '32007': `@deva[सम्पृक्तात्ख्याञः] — "After @deva[ख्या] with prefix @deva[सम्], @deva[क] comes when the object is in composition."

@deva[गोसङ्ख्यः] — "cowherd" (@deva[गाः सञ्चष्टे] "one who enumerates cows")

This debars @deva[अण्] which would otherwise apply to @deva[आ]-final roots with prefixes.`,

  '32008': `@deva[गापाभ्यां टक्] — "After @deva[गै] and @deva[पा] without a prefix, @deva[टक्] comes when the object is in composition."

| Root | Example | Meaning |
|------|---------|---------|
| @deva[गै] | @deva[शक्रगः] | singer of Śakra hymns |
| @deva[गै] | @deva[सामगः] | singer of Sāma |
| @deva[पा] | @deva[सोमपः] | Soma-drinker |

@note[The @deva[ट्] indicates feminine in @deva[ङीप्] (by @ref[4.1.14]): @deva[सामगी].]`,

  '32009': `@deva[उद्यमनादहृञोऽच्] — "After @deva[हृ] when NOT meaning 'to raise up', @deva[अच्] comes with the object in composition."

| Example | Meaning |
|---------|---------|
| @deva[अंशहरः] | who takes a share, sharer |
| @deva[रिक्थहरः] | heir |

When meaning "raise up": @deva[भारहारः] "burden-bearer, porter" (with @deva[अण्])`,

  '32010': `@deva[वयसि च] — "After @deva[हृ], @deva[अच्] comes when the meaning relates to age."

The word @deva[वयस्] refers to age-appropriate capacity.

| Example | Meaning |
|---------|---------|
| @deva[अस्थिहरः श्वा] | dog old enough to chew bones |
| @deva[भारहरो गौः] | ox old enough to carry loads |`,

  '32011': `@deva[आङि ताच्छील्ये] — "After @deva[हृ] with prefix @deva[आ], @deva[अच्] comes when the meaning is habitual inclination."

@deva[ताच्छील्य] = natural tendency or habitual occupation.

| Example | Meaning |
|---------|---------|
| @deva[पुष्पाहरः] | one who habitually collects flowers |
| @deva[फलाहरः] | one who habitually gathers fruits |

Without habitual sense: @deva[भाराहारः] "one who brings a load" (with @deva[अण्])`,

  '32012': `@deva[अर्हः] — "After @deva[अर्ह्] 'to deserve', @deva[अच्] comes when the object is in composition."

These are especially feminine:

| Example | Meaning |
|---------|---------|
| @deva[पूजार्हा] | deserving of respect |
| @deva[गन्धार्हा] | deserving of perfume |
| @deva[मालार्हा] | deserving of garlands |`,

  '32013': `@deva[स्तम्भेरमः कर्णेजपश्च] — "After @deva[रम्] with @deva[स्तम्भ] and @deva[जप्] with @deva[कर्ण], @deva[अच्] is used."

| Compound | Derivation | Meaning |
|----------|------------|---------|
| @deva[स्तम्बेरमः] | @deva[स्तम्बे रमते] | one who delights in grass clumps |
| @deva[कर्णेजपः] | @deva[कर्णे जपति] | one who whispers in the ear |

@note[Since @deva[रम्] is intransitive and @deva[जप्] rarely takes objects, the @deva[उपपद] here is a general case-inflected word, not accusative.]`,

  '32014': `@deva[शमि धातुः संज्ञायाम्] — "After roots with @deva[शम्] 'well' in composition, @deva[अच्] is used when forming proper names."

| Example | Meaning |
|---------|---------|
| @deva[शङ्करः] | "who does good" (name of Śiva) |
| @deva[सम्भवः] | "well-born" (proper name) |
| @deva[संवहः] | "who carries well" (proper name) |

@note[The repetition of @deva[धातु] excludes the affix @deva[ट] that would otherwise apply to @deva[कृ] by @ref[3.2.20].]`,

  '32015': `@deva[अधिकरणे शेतेः] — "After @deva[शी] 'to lie down', @deva[अच्] comes when a locative @deva[उपपद] is in composition."

@deva[खे शेते] → @deva[खशयः] "one who lies in the sky"

**Extension:** @deva[अच्] also applies with @deva[पार्श्व] etc., even without strict locative sense:
- @deva[पार्श्वशयः] "who reclines on his sides"
- @deva[उदरशयः] "who lies on his stomach"
- @deva[पृष्ठशयः] "who lies on his back"`,

  '32016': `@deva[चरेऽधिकरणे ट] — "After @deva[चर्] 'to go', @deva[ट] comes when a locative @deva[उपपद] is in composition."

| Example | Meaning |
|---------|---------|
| @deva[कुरुचरः] | one who travels among the Kurus |
| @deva[मद्रचरः] | one who travels among the Madras |

@note[The @deva[ट] indicates feminine @deva[ङीप्] (by @ref[4.1.14]): @deva[कुरुचरी], @deva[मद्रचरी].]`,

  '32017': `@deva[भिक्षासेनादायेषु च] — "After @deva[चर्], @deva[ट] comes when @deva[भिक्षा], @deva[सेना], or @deva[आदाय] is in composition."

| Example | Meaning |
|---------|---------|
| @deva[भिक्षाचरः] | beggar (one who goes for alms) |
| @deva[सेनाचरः] | one who goes with an army |
| @deva[आदायचरः] | one who goes after having taken |

@note[The locative restriction of the previous sūtra does not apply here.]`,

  '32018': `@deva[पुरोऽग्रतोऽग्रेसृणः] — "After @deva[सृ] 'to move', @deva[ट] comes when @deva[पुरः], @deva[अग्रतः], or @deva[अग्रे] is in composition."

| Example | Meaning |
|---------|---------|
| @deva[पुरःसरः] | harbinger, one who goes in front |
| @deva[अग्रतःसरः] | one going ahead |
| @deva[अग्रसरः] | leader, one going in front |`,

  '32019': `@deva[पूर्वसृकर्तरि] — "After @deva[सृ] with @deva[पूर्व], @deva[ट] comes when denoting the agent."

@deva[पूर्वः सरति] → @deva[पूर्वसरः] "going in front"

When denoting an object: @deva[पूर्वदेशं सरति] → @deva[पूर्वसारः] "going to the east" (with @deva[अण्])`,

  '32020': `@deva[कृञो हेतुताच्छील्यानुलोम्येषु ट] — "After @deva[कृ] 'to make', @deva[ट] comes when the meaning is cause, habit, or compliance."

| Meaning | Example |
|---------|---------|
| @deva[हेतु] (cause) | @deva[शोककरी कन्या] "daughter who causes sorrow" |
| @deva[ताच्छील्य] (habit) | @deva[यशस्करी विद्या] "knowledge that brings honor" |
| @deva[आनुलोम्य] (compliance) | following the natural order |`,

  '32021': `@deva[दिवाभाः...] — "After @deva[कृ], @deva[ट] comes with @deva[दिवा], @deva[विभा], @deva[निशा], @deva[प्रभा], @deva[भाः], @deva[कार], @deva[अन्त], @deva[अनन्त], @deva[आदि], @deva[बहु], @deva[नान्दी], @deva[किम्], @deva[लिपि], @deva[लिबि], @deva[बलि], @deva[भक्ति], @deva[कर्तृ], @deva[चित्र], @deva[क्षेत्र], @deva[संख्या]-words, @deva[जङ्घा], @deva[बाहु], @deva[अहः]..."

| Example | Meaning |
|---------|---------|
| @deva[दिवाकरः] | sun (day-maker) |
| @deva[निशाकरः] | moon (night-maker) |
| @deva[अन्तकरः] | death (end-maker) |
| @deva[बहुकरः] | multiplying |`,

  '32022': `@deva[कर्मणि भृतौ] — "After @deva[कृ] with @deva[कर्म], @deva[ट] comes when the meaning is 'wages'."

@deva[कर्मकरः] — "hired laborer" (not a slave)

When not meaning wages: @deva[कर्मकारः] — "artisan" (with @deva[अण्])`,

  '32023': `@deva[शब्दश्लोककलहगाथावैरचाटुसूत्रमन्त्रपदेषु न] — "After @deva[कृ], @deva[ट] is NOT used with @deva[शब्द], @deva[श्लोक], @deva[कलह], @deva[गाथा], @deva[वैर], @deva[चाटु], @deva[सूत्र], @deva[मन्त्र], @deva[पद]."

| Example | Meaning |
|---------|---------|
| @deva[शब्दकारः] | sounding, sonorous |
| @deva[श्लोककारः] | verse-maker |
| @deva[कलहकारः] | quarrel-fomenter |
| @deva[मन्त्रकारः] | hymn-composer |

These take @deva[अण्] instead.`,

  '32024': `@deva[स्तम्बशकृतोः इन्] — "After @deva[कृ] with @deva[स्तम्ब] 'sheaf' or @deva[शकृत्] 'ordure', @deva[इन्] is used."

| Example | Meaning |
|---------|---------|
| @deva[स्तम्बकरिः] | rice (that which makes sheaves) |
| @deva[शकृत्करिः] | calf (that which makes ordure) |

When not these meanings: @deva[स्तम्बकारः] "sheaf-maker," @deva[शकृत्कारः] "ordure-maker" (with @deva[अण्])`,

  '32025': `@deva[दृतिनाथयोर्हृञः पशौ] — "After @deva[हृ] with @deva[दृति] 'leather bag' or @deva[नाथ] 'master', @deva[इन्] is used when denoting an animal."

| Example | Meaning |
|---------|---------|
| @deva[दृतिहरिः] | dog (carrier of skin) |
| @deva[नाथहरिः] | beast (that carries its master) |

When not an animal: @deva[दृतिहारः] "water-carrier," @deva[नाथहारः] "master-carrier" (with @deva[अण्])`,

  '32026': `@deva[फलेग्रह्यात्मम्भरिश्च] — "The words @deva[फलेग्रहि] and @deva[आत्मम्भरि] are irregularly formed."

| Word | Formation | Meaning |
|------|-----------|---------|
| @deva[फलेग्रहिः] | @deva[फलानि गृह्णाति] | fruit-bearer (tree); @deva[उपपद] ends in @deva[ए] |
| @deva[आत्मम्भरिः] | @deva[आत्मानं बिभर्ति] | selfish one; augment @deva[मुम्] |

Also: @deva[कुक्षिम्भरिः] "glutton"`,

  '32027': `@deva[वन्सन्रक्षोऽथश्छन्दसि] — "In the Vedas, @deva[इन्] comes after @deva[वन्], @deva[सन्], @deva[रक्ष्], and @deva[अथ्] when the object is in composition."

| Example | Source |
|---------|--------|
| @deva[ब्रह्मवनिम्] | Vāj. Saṃ. I.17 |
| @deva[गोषणिम्] | Ṛg Veda VI.53.10 |
| @deva[पथिरक्षी] | Ṛg Veda X.14.11 |
| @deva[हविर्मथीनाम्] | Ṛg Veda VII.104.21 |`,

  '32028': `@deva[एजेः खश्] — "After the causative of @deva[एज्] 'to tremble', @deva[खश्] comes when the object is in composition."

@deva[अङ्गमेजयति] → @deva[अङ्गमेजयः] "one who makes the body tremble"

@note[The @deva[ख्] indicates augment @deva[मुम्] (by @ref[6.3.67]). The @deva[श] makes it @deva[सार्वधातुक], so @deva[शप्] etc. are used.]`,

  '32029': `@deva[नासिकास्तनयोर्ध्माधेटोः] — "After @deva[ध्मा] and @deva[धे] with @deva[नासिका] 'nose' or @deva[स्तन] 'breast', @deva[खश्] is used."

| Root | @deva[उपपद] | Example | Meaning |
|------|-----------|---------|---------|
| @deva[ध्मा] | @deva[नासिका] | @deva[नासिकन्धमः] | nose-blower |
| @deva[धे] | @deva[नासिका] | @deva[नासिकन्धयः] | nose-sucker |
| @deva[धे] | @deva[स्तन] | @deva[स्तनन्धयः] | infant (breast-sucker) |

@note[@deva[यथासंख्य] does not apply—@deva[नासिका] compounds with both roots.]`,

  '32030': `@deva[नाडीमुष्ट्योश्च] — "After @deva[ध्मा] and @deva[धे] with @deva[नाडी] 'tube' or @deva[मुष्टि] 'fist', @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[नाडिन्धमः] | blowing through a tube |
| @deva[मुष्टिन्धमः] | blowing through a fist |
| @deva[नाडिन्धयः] | sucking through a tube (infant) |
| @deva[मुष्टिन्धयः] | infant |

Also: @deva[घटिन्धमः], @deva[घटिन्धयः]`,

  '32031': `@deva[कूलमुद्रुजो वहश्च] — "After @deva[रुज्] and @deva[वह्] with prefix @deva[उद्] and @deva[कूल] 'bank', @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[कूलमुद्रुजः] | breaking down banks (chariot, river, elephant) |
| @deva[कूलमुद्वहः] | tearing up/carrying away the bank |`,

  '32032': `@deva[वहाभ्रयोर्लिहः] — "After @deva[लिह्] 'to lick' with @deva[वह] 'ox-shoulder' or @deva[अभ्र] 'cloud', @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[वहंलिहो गौः] | the shoulder-licking cow |
| @deva[अभ्रंलिहो वायुः] | the cloud-licking wind |`,

  '32033': `@deva[मानिनि पचः] — "After @deva[पच्] 'to cook' with a measure-word, @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[प्रस्थम्पचः] | pot that cooks a prastha of food |
| @deva[द्रोणम्पचः] | pot that cooks a droṇa |
| @deva[खारिम्पचः] | kettle |`,

  '32034': `@deva[मितनखयोश्च] — "After @deva[पच्] with @deva[मित] 'measured portion' or @deva[नख] 'nail', @deva[खश्] is used."

(When not a measure-word)

| Example | Meaning |
|---------|---------|
| @deva[मितम्पचा ब्राह्मणी] | the niggardly Brāhmaṇī who cooks little |
| @deva[नखम्पचा यवागूः] | nail-scorching barley gruel |`,

  '32035': `@deva[विध्वरुषोस्तुदः] — "After @deva[तुद्] 'to strike' with @deva[विधु] 'moon' or @deva[अरुस्] 'wound', @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[विधुन्तुदः राहुः] | Rāhu who eclipses the moon |
| @deva[अरुन्तुदः] | corrosive, wounding vital parts |

@note[Augment @deva[मुम्] after @deva[अरुस्] by @ref[6.3.67].]`,

  '32036': `@deva[असूर्यपश्याल्ललाटन्तपायोश्च] — "After @deva[दृश्] with @deva[असूर्य] and @deva[तप्] with @deva[ललाट], @deva[खश्] is used."

| Example | Meaning |
|---------|---------|
| @deva[असूर्यम्पश्या राजदाराः] | king's wives who don't see the sun (secluded) |
| @deva[ललाटन्तपः] | heating the forehead (the sun) |

@note[@deva[असूर्य] is an irregular compound—the negative applies to the verb, not the noun.]`,

  '32037': `@deva[उग्रम्पश्येरम्मदपाणिन्धमाश्च] — "The words @deva[उग्रम्पश्य], @deva[इरम्मद], and @deva[पाणिन्धम] are irregularly formed."

| Word | Meaning |
|------|---------|
| @deva[उग्रम्पश्यः] | fierce-looking |
| @deva[इरम्मदः] | delighting in drinking (epithet of Agni) |
| @deva[पाणिन्धमाः पन्थानः] | chilly roads |`,

  '32038': `@deva[प्रियवशयोर्वदः खच्] — "After @deva[वद्] 'to speak' with @deva[प्रिय] or @deva[वश], @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[प्रियंवदः] | one who speaks kindly |
| @deva[वशंवदः] | one who professes submission |

@note[@deva[ख्] indicates @deva[मुम्] (by @ref[6.3.67]). @deva[च्] indicates vowel shortening (by @ref[6.4.94]).]`,

  '32039': `@deva[द्विषत्परयोस्तापेः] — "After @deva[तापि] (causative of @deva[तप्]) with @deva[द्विषत्] or @deva[पर], @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[द्विषन्तपः] | one who destroys enemies |
| @deva[परन्तपः] | one who subdues enemies, a hero |

@note[Does not apply when @deva[उपपद] is feminine—then @deva[अण्] is used.]`,

  '32040': `@deva[व्रते वाचंयमः] — "After @deva[यम्] 'to curb' with @deva[वाच्] 'speech', @deva[खच्] is used when meaning a vow."

@deva[वाचंयम आस्ते] — "he has taken the vow of rigid silence"

Without vow-meaning: @deva[वाग्यामः] "restraining speech" (by @ref[6.3.69])`,

  '32041': `@deva[पुरन्दरसर्वसहौ च] — "After @deva[दॄ] 'to split' with @deva[पुर्] and @deva[सह्] with @deva[सर्व], @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[पुरन्दरः] | Indra (city-splitter) |
| @deva[सर्वंसहो राजा] | the all-forbearing king |

Also: @deva[भगन्दरः] "fistula in the anus"`,

  '32042': `@deva[सर्वकूलाभ्रकरीषेषु कषः] — "After @deva[कष्] 'to rub' with @deva[सर्व], @deva[कूल], @deva[अभ्र], or @deva[करीष], @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[सर्वङ्कषः खलः] | villain, rogue |
| @deva[कूलङ्कषा नदी] | a river (bank-eroder) |
| @deva[अभ्रङ्कषो गिरिः] | a mountain (cloud-scraper) |
| @deva[करीषङ्कषा वात्या] | strong wind |`,

  '32043': `@deva[मेघार्तिभयेषु कृञः] — "After @deva[कृ] with @deva[मेघ] 'cloud', @deva[अर्ति] 'misfortune', or @deva[भय] 'fear', @deva[खच्] is used."

| Example | Meaning |
|---------|---------|
| @deva[मेघङ्करः] | producing clouds |
| @deva[अर्तिङ्करः] | giving pain |
| @deva[भयङ्करः] | frightful |

Also: @deva[अभयङ्करः] "who causes security" (@deva[तदन्तविधि] applies exceptionally)`,

  '32044': `@deva[क्षेमप्रियभद्रेष्वण्च] — "After @deva[कृ] with @deva[क्षेम], @deva[प्रिय], or @deva[भद्र], both @deva[अण्] and @deva[खच्] are used."

| With @deva[अण्] | With @deva[खच्] | Meaning |
|---------------|----------------|---------|
| @deva[क्षेमकारः] | @deva[क्षेमङ्करः] | propitious |
| @deva[प्रियकारः] | @deva[प्रियङ्करः] | showing kindness |
| @deva[भद्रकारः] | @deva[भद्रङ्करः] | causing delight |

@note[The explicit @deva[अण्] excludes @deva[ट] (of @ref[3.2.20]) even when cause/habit applies.]`,

  '32045': `@deva[आशिते भावकरणयोः] — "After @deva[भू] with case-inflected @deva[आशित] 'satisfied by eating', @deva[खच्] is used when meaning instrument or condition."

@deva[आशितम्भवः] — with sense of instrument or condition

@note[The word @deva[सुपि] from @ref[3.2.4] is understood here.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.2.1-45). Total: ${Object.keys(vasu).length}`);
