import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '51101': `@deva[संतापादिभ्यश्चतुर्थ्याः प्रभवति] — The affix @deva[ठञ्] comes after @deva[संतापादि] words in the dative in the sense of "what is able to effect that."

The word @deva[प्रभवति] means "able, capable." The dative has the force of @deva[अलम्] (@ref[2.3.16]).

| Base | Result | Meaning |
|------|--------|---------|
| @deva[संताप] | @deva[सांतापिकः] | capable of causing heat/affliction |
| @deva[सन्नाह] | @deva[सान्नाहिकः] | capable of causing armament |

@deva[संतापादि] class: @deva[संताप], @deva[सन्नाह], @deva[संग्राम], @deva[संयोग], @deva[संपराय], @deva[संवेशन], @deva[संपेष], @deva[निष्पेष], @deva[सर्ग], @deva[निसर्ग], @deva[विसर्ग], @deva[उपसर्ग], @deva[प्रवास], @deva[उपवास], @deva[संघात], @deva[संवेष], @deva[संवास], @deva[संमोदन], @deva[सक्तु], @deva[मांसौदन] (even in compound), @deva[असर्ग]`,

  '51102': `@deva[योगाच्च] — The affix @deva[यत्] (@deva[य]) is also added in the sense of "able to effect that" after @deva[योग].

| With @deva[यत्] | With @deva[ठञ्] |
|----------------|-----------------|
| @deva[योग्यः] | @deva[यौगिकः] |

Both mean "capable of effecting yoga/union."`,

  '51103': `@deva[कर्मणुकञ्] — The affix @deva[उकञ्] comes after @deva[कर्मन्] in the sense of "able to effect that."

This debars @deva[ठञ्].

@deva[कर्मणो प्रभवति] = @deva[कार्मुकं धनुः] — "a bow" (capable of action)

@note[This word @deva[कार्मुकम्] always means "a bow" and is never employed to designate anything else.]`,

  '51104': `@deva[समयस्य प्राप्तः] — The affix @deva[ठञ्] comes in the sense of "that has arrived for it" after @deva[समय] (time/occasion) in the nominative.

@deva[सामयिकं कर्म] — "a work for which the time has come"`,

  '51105': `@deva[ऋतोरण्] — The affix @deva[अण्] comes in the sense of "that has come for it" after @deva[ऋतु] (season).

@deva[ऋतुः प्राप्तो ऽस्य] = @deva[आर्त्तवं पुष्पम्] — "the flower for which the season has arrived"

Guṇa occurs by @ref[6.4.146].

**Vārttika:** Also after @deva[उपवस्त्र] etc.: @deva[औपवस्त्रम्], @deva[प्राशित्रम्]`,

  '51106': `@deva[छन्दसि घस्] — In the Vedas, the affix @deva[घस्] (@deva[इय]) comes in the sense of "season has come for it" after @deva[ऋतु].

This debars @deva[अण्].

@deva[अयं ते योनिर् ऋत्वियः] — "this is your proper seasonal place"

@note[There is no Guṇa by @ref[6.4.146] because @deva[ऋतु] before @deva[घस्] gets the designation @deva[पद] by @ref[1.4.16], and Guṇa (which applies to @deva[भ] by @ref[1.4.18]) does not apply to @deva[पद].]`,

  '51107': `@deva[कालात्यत्] — The affix @deva[यत्] (@deva[य]) comes in the sense of "time has come for it" after @deva[काल].

@deva[काल्यः तापः] — "heat for which the time has come"
@deva[काल्यं शीतम्] — "cold for which the time has come"

See @ref[6.1.213] for accent.`,

  '51108': `@deva[प्रकृष्टे च] — The affix @deva[यत्] (@deva[य]) comes in the sense of "long-standing" after @deva[काल] in the nominative.

@deva[प्रकृष्टो कालो ऽस्य] = @deva[काल्यम् ऋणम्] — "long-standing debt"
@deva[काल्यं वैरम्] — "long-standing enmity"

@note[In this sūtra, @deva[काल] and @deva[तदस्य] are understood, but not @deva[प्राप्तम्].]`,

  '51109': `@deva[प्रयोजनस्य ठञ्] — The affix @deva[ठञ्] comes in the sense of "that whose occasion or purpose is this" after a word in the nominative.

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[इन्द्रमहः प्रयोजनमस्य] | @deva[ऐन्द्रमहिकम्] | that whose purpose is the Indra festival |
| @deva[गाङ्गामहः प्रयोजनमस्य] | @deva[गाङ्गामहिकम्] | that whose purpose is the Gaṅgā festival |`,

  '51110': `@deva[विशाखाषाढाभ्यामण्मन्थदण्डयोः] — The affix @deva[अण्] comes in the sense of "that whose purpose is this" after @deva[विशाखा] and @deva[आषाढ] when the derivative is combined with @deva[मन्थ] and @deva[दण्ड] respectively.

| Base | Combined with | Result |
|------|---------------|--------|
| @deva[विशाखा] | @deva[मन्थ] | @deva[वैशाखो मन्थः] |
| @deva[आषाढ] | @deva[दण्ड] | @deva[आषाढो दण्डः] |

**Vārttika:** Also after @deva[चडादि] words: @deva[चडा प्रयोजनमस्य] = @deva[चौडम्]; @deva[श्रद्धा प्रयोजनमस्य] = @deva[श्राद्धम्]`,

  '51111': `@deva[अनुप्रवचनादिभ्यश्छ] — The affix @deva[छ] (@deva[ईय]) comes in the sense of "that whose purpose is this" after @deva[अनुप्रवचनादि] words.

This debars @deva[ठञ्].

| Base | Result | Meaning |
|------|--------|---------|
| @deva[अनुप्रवचन] | @deva[अनुप्रवचनीयम्] | that whose purpose is instruction |
| @deva[उत्थापन] | @deva[उत्थापनीयम्] | that whose purpose is raising up |

**Vārttikas:**
1. Also after derivatives formed by @deva[अन] (@deva[युच्]) from @deva[विश्], @deva[पूर्], @deva[पत्], @deva[रुह्] when preceded by a word: @deva[गृहप्रवेशनीयम्], @deva[प्रपापूरणीयम्], @deva[अश्वप्रपतनीयम्], @deva[प्रासादारोहणीयम्]
2. The affix @deva[यत्] comes after @deva[स्वर्गादि]: @deva[स्वर्ग्यम्], @deva[यशस्यम्], @deva[आयुष्यम्], @deva[काम्यम्], @deva[धन्यम्]`,

  '51112': `@deva[सपूर्वात्समापनात्] — The affix @deva[छ] (@deva[ईय]) comes in the sense of "that whose purpose is this" after @deva[समापन] when it has a word in composition preceding it.

This debars @deva[ठञ्].

| Compound | Result | Meaning |
|----------|--------|---------|
| @deva[छन्दः समापन] | @deva[छन्दः समापनीयम्] | that whose purpose is completing Vedic study |
| @deva[व्याकरण समापन] | @deva[व्याकरण समापनीयम्] | that whose purpose is completing grammar study |

@note[The specific mention of @deva[पद] indicates the rule won't apply when something other than a @deva[पद] (such as the affix @deva[बहुच्] @ref[5.3.68]) precedes @deva[समापन].]`,

  '51113': `@deva[ऐकागारिकट्] — The word @deva[ऐकागारिकः] is irregularly formed in the sense of "thief."

The feminine is in @deva[ङीप्].

@deva[एकागारं प्रयोजनमस्य] = @deva[ऐकागारिकः], fem. @deva[ऐकागारिकी] — "a thief" (one whose purpose is a single house)

@note[This word can be regularly formed by @deva[ठञ्], but it will always mean "thief." When any other meaning is intended, the affix does not apply. Some say the word is formed by adding @deva[इकट्] with irregular Vṛddhi of the first syllable.]`,

  '51114': `@deva[आकालिकट्] — The word @deva[आकालिकः] is irregularly formed in the sense of "what coincides with the beginning and end" (i.e., lasting only an instant).

The word @deva[आकाल] substitutes for @deva[समानकाल].

@deva[आकालिकः स्तनयित्नुः] — "thunder lasting an instant"
@deva[आकालिकी विद्युत्] — "lightning lasting a twinkle" (dying as soon as born)

**Vārttika:** The affixes @deva[ठन्] and @deva[ठञ्] also come after @deva[आकाल]: @deva[आकालिका विद्युत्]

This ends the governing power of @deva[ठञ्] (@ref[5.1.18]).`,

  '51115': `@deva[तेन तुल्यं क्रिया चेद्वतिः] — The affix @deva[वति] (@deva[वत्]) comes after a word in the instrumental in the sense of "like that" when the meaning is similarity of action.

@deva[ब्राह्मणेन तुल्यं वर्तते] = @deva[ब्राह्मणवत्] — "acts like a Brahmin"
@deva[राजवत्] — "acts like a king"

Why "action"? The affix doesn't apply for similarity in quality:
- @deva[पुत्रेण सह स्थूलः] "as big as the son" (not @deva[पुत्रवत्])
- @deva[पुत्रेण तुल्यः पिङ्गलः] "as tawny as the son" (not @deva[पुत्रवत्])`,

  '51116': `@deva[तत्रास्येव च] — The affix @deva[वति] (@deva[वत्]) also comes in the sense of "like what is therein or thereof."

| Derivation | Result | Meaning |
|------------|--------|---------|
| @deva[मथुरायाम् इव] | @deva[मथुरावत्] | like that in Mathura |

Examples:
- @deva[मथुरावत् स्रुघ्ने प्राकारः] "a wall in Srughna like that in Mathura"
- @deva[पाटलिपुत्रवत् साकेते परिखा] "a moat in Sāketa like that in Pāṭaliputra"
- @deva[देवदत्तस्येव देवदत्तवद् यज्ञदत्तस्य गावः] "Yajñadatta's cows like Devadatta's"`,

  '51117': `@deva[तदर्हम्] — The affix @deva[वति] (@deva[वत्]) comes after a word in the accusative in the sense of "befitting that or suited to that."

@deva[राजानम् अर्हति] = @deva[राजवत् पालनम्] — "protection as befits a king" (as a king should protect)

Also: @deva[ब्राह्मणवत्], @deva[ऋषिवत्], @deva[क्षत्रियवत्]`,

  '51118': `@deva[उपसर्गाद्धातुलक्षणे छन्दसि] — In the Vedas, the affix @deva[वति] (@deva[वत्]) is added to a preposition (@deva[उपसर्ग]) in the sense of a verbal root.

Examples from Ṛgveda X.142.4:
@deva[यद् उद्वतो निवतो यासि वप्सत् पृथगेषि प्रगर्धिनीव सेना]

- @deva[उद्वतः] = @deva[उद्गतान्] "those that have gone up"
- @deva[निवतः] = @deva[निगतान्] "those that have gone down"

"When thou, O Fire, goest burning high and low trees..."`,

  '51119': `@deva[तस्य भावस्त्वतलौ] — The affixes @deva[त्व] and @deva[तल्] come in the sense of "the nature thereof" after a word in the genitive.

| Base | With @deva[त्व] | With @deva[तल्] |
|------|-----------------|-----------------|
| @deva[अश्व] | @deva[अश्वत्वम्] | @deva[अश्वता] |
| @deva[गो] | @deva[गोत्वम्] | @deva[गोता] |

Both mean "the nature of a horse/cow."`,

  '51120': `@deva[प्राग्ब्रह्मणस्त्वात्] — From this sūtra forward through @ref[5.1.136] (@deva[ब्रह्मणस्त्वः]), the affixes @deva[त्व] and @deva[तल्] govern.

Thus in @ref[5.1.122], @deva[त्व] and @deva[तल्] are read, giving: @deva[पृथुत्वम्], @deva[पृथुता], etc.

@note[This rule ensures @deva[त्व] and @deva[तल्] are admitted despite other affixes being ordained. The @deva[च] includes their admission notwithstanding @deva[नञ्] and @deva[स्रञ्] (@ref[6.1.87]).]

Examples:
- @deva[स्त्रियाः भावः] = @deva[स्त्रैणम्], @deva[स्त्रीत्वम्], @deva[स्त्रीता] "the nature of a female"
- @deva[पुंस्त्वम्], @deva[पुंस्ता] "the nature of a male"`,

  '51121': `@deva[नञ्पूर्वान्न नपुंसकाच्चतुरसंगतलवणवटबुधकतरसलसैः] — The affixes denoting "nature" taught hereafter do *not* come after a @deva[तत्पुरुष] compound formed by the negative @deva[नञ्], with exceptions for @deva[चतुर], @deva[संगत], @deva[लवण], @deva[वट], @deva[बुध], @deva[कत], @deva[रस], and @deva[लस].

Thus @deva[अपति], @deva[अपटु], @deva[अरमणीय] have only two forms:
- @deva[अपतित्वम्] or @deva[अपतिता]
- @deva[अपटुत्वम्] or @deva[अपटुता]
- @deva[अरमणीयत्वम्] or @deva[अरमणीयता]

While by @ref[5.1.128], other compounds take @deva[यक्] also: @deva[सैनापत्यम्]

An exception: @deva[आविदूर्य] (@ref[7.2.25]), as used by the author himself.`,

  '51122': `@deva[पृथ्वादिभ्य इमनिच्वा] — The affix @deva[इमनिच्] (@deva[इमन्]) comes optionally in the sense of "nature thereof" after @deva[पृथ्वादि] words.

The word @deva[वा] "optionally" secures admission for @deva[अण्] etc.

| Base | With @deva[इमन्] | With @deva[अण्] | With @deva[त्व]/@ deva[तल्] |
|------|-----------------|-----------------|---------------------------|
| @deva[पृथु] | @deva[प्रथिमा] | @deva[पार्थवम्] | @deva[पृथुत्वम्], @deva[पृथुता] |
| @deva[मृदु] | @deva[म्रदिमा] | @deva[मार्दवम्] | @deva[मृदुत्वम्], @deva[मृदुता] |

The @deva[उ] of @deva[पृथु]/@ deva[मृदु] is elided by @ref[6.4.155]; @deva[र] replaces @deva[ऋ] by @ref[6.4.161].

@deva[पृथ्वादि] class: @deva[पृथु], @deva[मृदु]...`,

  '51123': `@deva[वर्णदृढादिभ्यः ष्यञ्] — The affixes @deva[ष्यञ्] and @deva[इमनिच्] come in the sense of "nature thereof" after words denoting color and after @deva[दृढादि] words.

| Base | With @deva[ष्यञ्] | With @deva[इमन्] | With @deva[त्व]/@ deva[तल्] |
|------|------------------|-----------------|---------------------------|
| @deva[शुक्ल] (white) | @deva[शौक्ल्यम्] | @deva[शुक्लिमन्] | @deva[शुक्लत्वम्], @deva[शुक्लता] |
| @deva[कृष्ण] (black) | @deva[कार्ष्ण्यम्] | @deva[कृष्णिमन्] | @deva[कृष्णत्वम्], @deva[कृष्णता] |
| @deva[दृढ] | @deva[दार्ढ्यम्] | @deva[द्रढिमा] | @deva[दृढत्वम्], @deva[दृढता] |

The @deva[ष्] of @deva[ष्यञ्] indicates the feminine by @deva[ङीष्] (@ref[4.1.41]): @deva[औचित्यः], fem. @deva[औचिती]

@deva[दृढादि] class: @deva[दृढ], @deva[वृढ], @deva[परिवृढ], @deva[भृश], @deva[कृश], @deva[वक्र], @deva[शुक्र], @deva[चुक्र], @deva[आम्र], @deva[कृष्ट], @deva[लवण], @deva[ताम्र], @deva[शीत]`,

  '51124': `@deva[गुणवचनब्राह्मणादिभ्यः कर्मणि च] — The affix @deva[ष्यञ्] comes after words expressive of quality and after @deva[ब्राह्मणादि] words in the sense of activity or occupation (as well as nature).

The @deva[च] includes @deva[भाव] "nature." The word @deva[कर्म] denotes activity.

| Derivation | Result |
|------------|--------|
| @deva[जडस्य भावः कर्म वा] | @deva[जाड्यम्] |
| @deva[ब्राह्मणस्य भावः कर्म वा] | @deva[ब्राह्मण्यम्] |
| @deva[माणवस्य भावः कर्म वा] | @deva[माणव्यम्] |

@note[The words @deva[भाव] and @deva[कर्म] govern through the end of the chapter. The @deva[ब्राह्मणादि] class is an @deva[आकृतिगण] (open class).]

**Vārttika:** The affix doesn't change the sense in @deva[चातुर्वर्ण्य] etc.: @deva[चत्वार एव वर्णाः] = @deva[चातुर्वर्ण्यम्], @deva[चातुराश्रम्यम्]`,

  '51125': `@deva[स्तेनात्यन्नलोपश्च] — The affix @deva[यत्] (@deva[य]) comes in the sense of "nature or action thereof" after @deva[स्तेन], and @deva[न] is elided before this affix.

@deva[स्तेनस्य भावः कर्म वा] = @deva[स्तेयम्] — "theft"

@note[Some divide the sūtra into two: (1) @deva[स्तेनात् ष्यञ् भवति], (2) @deva[ततो यत् न लोपश्च] — giving both @deva[स्तैन्यम्] and @deva[स्तेयम्].]`,

  '51126': `@deva[सख्युर्य] — The affix @deva[य] comes in the sense of "nature or action thereof" after @deva[सखि].

@deva[सख्यम्] — "friendship"

**Vārttika:** Also after @deva[दूत] and @deva[वणिक्]: @deva[दूत्यम्] and @deva[वणिज्यम्]

@note[The word @deva[वाणिज्यम्] is formed by @ref[5.1.124] since @deva[वणिक्] belongs to the @deva[ब्राह्मणादि] class.]`,

  '51127': `@deva[कपिज्ञात्योर्ढक्] — The affix @deva[ढक्] comes in the sense of "nature or action thereof" after @deva[कपि] and @deva[ज्ञाति].

| Base | Result |
|------|--------|
| @deva[कपि] | @deva[कापेयम्] |
| @deva[ज्ञाति] | @deva[ज्ञातेयम्] |

@note[The rule of @deva[यथासंख्य] (@ref[1.3.10]) does not apply under this head.]`,

  '51128': `@deva[पत्यन्तपुरोहितादिभ्यो यक्] — The affix @deva[यक्] comes in the sense of "nature or action thereof" after compounds ending in @deva[पति] and after @deva[पुरोहितादि] words.

| Base | Result |
|------|--------|
| @deva[सेनापति] | @deva[सैनापत्यम्] |
| @deva[गार्हपति] | @deva[गार्हपत्यम्] |
| @deva[प्राजापति] | @deva[प्राजापत्यम्] |
| @deva[पुरोहित] | @deva[पौरहित्यम्] |
| @deva[राजन्] (non-compound) | @deva[राज्यम्] |

@deva[पुरोहितादि] class: @deva[पुरोहित], @deva[राजन्] (non-compound), @deva[ग्रामिक], @deva[पिण्डिक], @deva[सुहित], @deva[बाल], @deva[मन्द], @deva[खण्डिक], @deva[दण्डिक], @deva[वर्मिक], @deva[कर्मिक], @deva[धर्मिक], @deva[शीलिक], @deva[सूतिक], @deva[मूलिक], @deva[तिलक], @deva[अज्जलिक], @deva[ऋषिक], @deva[पुत्रिक], @deva[अविक]...`,

  '51129': `@deva[जातेर्जानपदौद्गात्रादिभ्योऽञ्] — The affix @deva[अञ्] comes in the sense of "nature or action thereof" after class names of animals, words expressing age, and @deva[उद्गात्रादि] words.

| Base | Result |
|------|--------|
| @deva[अश्व] (horse) | @deva[आश्वम्] |
| @deva[उष्ट्र] (camel) | @deva[औष्ट्रम्] |
| @deva[कुमार] (young) | @deva[कौमारम्] |
| @deva[किशोर] (adolescent) | @deva[कैशोरम्] |
| @deva[उद्गातृ] | @deva[औद्गात्रम्] |
| @deva[उन्नेतृ] | @deva[औन्नेत्रम्] |

@deva[उद्गात्रादि] class: @deva[उद्गातृ], @deva[उन्नेतृ], @deva[प्रतिहर्तृ], @deva[प्रशास्तृ], @deva[होतृ], @deva[पोतृ], @deva[हर्तृ], @deva[रथगणक], @deva[पत्तिगणक], @deva[सुष्ठु], @deva[दुष्ठु], @deva[अध्वर्यु], @deva[वधू], @deva[सुभग] (in Mantra)`,

  '51130': `@deva[हायनान्तयुवादिभ्योऽण्] — The affix @deva[अण्] comes in the sense of "nature or action thereof" after compounds ending in @deva[हायन] and after @deva[युवादि] words.

| Base | Result |
|------|--------|
| @deva[द्विहायन] | @deva[द्वैहायनम्] |
| @deva[त्रिहायन] | @deva[त्रैहायनम्] |
| @deva[युवन्] | @deva[यौवनम्] |
| @deva[स्थविर] | @deva[स्थाविरम्] |

**Vārttika:** The @deva[य] of @deva[श्रोत्रिय] is elided: @deva[श्रोत्रियस्य भावः कर्म वा] = @deva[श्रौत्रम्]

@deva[युवादि] class: @deva[युवन्], @deva[स्थविर], @deva[होतृ], @deva[यजमान], @deva[पुरुष] (non-compound), @deva[भ्रातृ], @deva[कुतुक], @deva[श्रमण], @deva[कटुक], @deva[कमण्डलु], @deva[कुस्त्री], @deva[सुस्त्री], @deva[दुःस्त्री], @deva[सुहृदय], @deva[दुर्हृदय], @deva[सुहृद्], @deva[दुर्हृद्], @deva[सुभ्रातृ]...`,

  '51131': `@deva[लघुपूर्वादिकः] — The affix @deva[अण्] comes in the sense of "nature or action thereof" after a stem ending in @deva[इक्] (@deva[इ], @deva[ई], @deva[उ], @deva[ऊ], @deva[ऋ], or @deva[ऌ]) when the preceding syllable is prosodially light.

| Base | Result |
|------|--------|
| @deva[शुचि] | @deva[शौचम्] |
| @deva[मुनि] | @deva[मौनम्] |
| @deva[नगर] | @deva[नागरम्] |
| @deva[हरीतकी] | @deva[हारीतकम्] |
| @deva[पटु] | @deva[पाटवम्] |
| @deva[लघु] | @deva[लाघवम्] |

Why @deva[लघुपूर्वात्] "the preceding syllable being light"? Heavy syllables take @deva[त्व]/@ deva[तल्]: @deva[कण्डूत्वम्], @deva[पाण्डुत्वम्]

Why @deva[काव्यम्] from @deva[कवि]? The word @deva[कवि] takes @deva[ष्यञ्] as belonging to the @deva[ब्राह्मणादि] class (@ref[5.1.124]).`,

  '51132': `@deva[गुर्वोत्तमपदाद्योपधात्वुञ्] — The affix @deva[वुञ्] comes in the sense of "nature or action thereof" after a polysyllabic stem whose penultimate letter is @deva[य्] and whose penultimate syllable is prosodially heavy.

The word @deva[उपोत्तम] means the last syllable but one in a word of three or more syllables. @deva[गुर्वोत्तम] = whose penultimate syllable is heavy; @deva[योपधा] = having penultimate @deva[य्].

| Base | Result |
|------|--------|
| @deva[रमणीय] | @deva[रामणीयकम्] |
| @deva[वसनीय] | @deva[वासनीयकम्] |

Why "penultimate @deva[य्]"? Without it: @deva[विमानत्वम्] (from @deva[विमान])

Why "heavy penultimate"? When light: @deva[क्षत्रियत्वम्]

**Vārttika:** Optionally after @deva[सहाय]: @deva[साहायकम्] and @deva[साहाय्यम्]`,

  '51133': `@deva[द्वन्द्वमनोज्ञादिभ्यश्च] — The affix @deva[वुञ्] comes in the sense of "nature or action thereof" after a @deva[द्वन्द्व] compound and after @deva[मनोज्ञादि] words.

| Base | Result |
|------|--------|
| @deva[गोपालपशुपाल] (dvandva) | @deva[गोपालपशुपालिकम्] |
| @deva[शिष्योपाध्याय] (dvandva) | @deva[शैष्योपाध्यायिकम्] |
| @deva[कौत्सकुशिक] (dvandva) | @deva[कौत्सकुशिकिकम्] |
| @deva[मनोज्ञ] | @deva[मानोज्ञकम्] |
| @deva[कल्याण] | @deva[कल्याणकम्] |

@deva[मनोज्ञादि] class: @deva[मनोज्ञ], @deva[प्रियरूप], @deva[अभिरूप], @deva[कल्याण], @deva[मेधाविन्], @deva[आढ्य], @deva[कुलपुत्र], @deva[छान्दस], @deva[छात्र], @deva[श्रोत्रिय], @deva[चोर], @deva[धूर्त], @deva[विश्वदेव], @deva[युवन्], @deva[कुपुत्र], @deva[ग्रामपुत्र], @deva[ग्रामकुलाल], @deva[ग्रामषण्ड], @deva[ग्रामकुमार], @deva[सुकुमार], @deva[बहुल], @deva[अमुष्यपुत्र]...`,

  '51134': `@deva[गोत्रचरणाट्श्लाघात्याकारतद्वेतेभ्यो वुञ्] — The affix @deva[वुञ्] comes in the sense of "nature or action thereof" after a @deva[गोत्र] (patronymic/family-name) and after the name of a Vedic school when:
- one boasts thereby (@deva[श्लाघा])
- one manifests contempt thereby (@deva[अत्याकार])
- one has attained that (@deva[तदवेत])

Key terms:
- @deva[श्लाघा] = boasting
- @deva[अत्याकार] = contempt
- @deva[तदवेतः] = @deva[तत्प्राप्तः] "who has gained that" or @deva[तज्ज्ञः] "who inquires that"

Examples:
- @deva[गार्गिकया श्लाघते] — "boasts of belonging to the Garga family"
- @deva[काठिकया श्लाघते] — "boasts of belonging to the Kaṭha school"`,

  '51135': `@deva[होत्राभ्यश्छ] — The affix @deva[छ] (@deva[ईय]) comes in the sense of "nature or action thereof" after words expressing @deva[होत्रा] priests.

| Priest | Result |
|--------|--------|
| @deva[आच्छावाक] | @deva[आच्छावाकीयम्] |
| @deva[मैत्रावरुण] | @deva[मैत्रावरुणीयम्] |
| @deva[ब्राह्मणाच्छंसिन्] | @deva[ब्राह्मणाच्छंसीयम्] |
| @deva[आग्नीध्र] | @deva[आग्नीध्रीयम्] |
| @deva[प्रतिप्रस्थातृ] | @deva[प्रतिप्रस्थात्रीयम्] |
| @deva[नेष्टृ] | @deva[नेष्ट्रीयम्] |
| @deva[पोतृ] | @deva[पोत्रीयम्] |

@note[@ deva[होत्राभ्यः] is plural to prevent application of @ref[1.1.68], so the rule doesn't apply to the word-form @deva[होत्रा] itself (derived from @deva[हु] + @deva[त्वन] meaning a rite).]`,

  '51136': `@deva[ब्रह्मणस्त्वः] — The affix @deva[त्व] comes in the sense of "nature or action thereof" after @deva[ब्रह्मन्] when it denotes a kind of @deva[होत्रा] priest.

This debars @deva[छ] and @deva[तल्].

@deva[ब्रह्मणो भावः कर्म वा] = @deva[ब्रह्मत्वम्] — "the office of the Brahman priest"

@note[When @deva[ब्रह्मन्] means a Brahmin by caste, we have @deva[ब्रह्मत्वम्] or @deva[ब्रह्मता].]

This ends the province of the affixes @deva[त्व] and @deva[तल्] (@ref[5.1.119]).`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.1.101-136). Total: ${Object.keys(vasu).length}`);
