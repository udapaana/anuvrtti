import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '44101': `@deva[परिषदो ण्यण्] — @deva[ण्य] and @deva[ण] come after @deva[परिषद्] meaning "excellent therein":

| Affix | Derivative | Meaning |
|-------|------------|---------|
| @deva[ण्य] | @deva[पारिषद्यः] | versed in council affairs |
| @deva[ण] | @deva[पारिषदः] | minister |

@note[Debars @deva[यत्].]`,

  '44102': `@deva[कथादिभ्यष्ठक्] — @deva[ठक्] comes after @deva[कथा]-class words meaning "excellent therein":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[कथा] | @deva[काथिकः] (@ref[6.4.148], @ref[7.2.116]) | story-narrator |
| @deva[विकथा] | @deva[वैकथिकः] | counter-narrator |
| @deva[वितण्डा] | @deva[वैतण्डिकः] | sophist |
| @deva[आयुर्वेद] | @deva[आयुर्वेदिकः] | physician |

The @deva[कथादि] class: @deva[कथा], @deva[विकथा], @deva[विश्वकथा], @deva[संकथा], @deva[वितण्डा], @deva[कुष्ठविद्], @deva[जनवाद], @deva[जनेवाद], @deva[वृत्ति], @deva[संग्रह], @deva[गुण], @deva[गण], @deva[आयुर्वेद]।`,

  '44103': `@deva[गुडादिभ्यष्ठञ्] — @deva[ठञ्] comes after @deva[गुड]-class words meaning "excellent therein":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[गुड] (sugar) | @deva[गौडिकः] | sugarcane (good for sugar) |
| @deva[कुल्माष] (gruel) | @deva[कौल्माषिकः] | pulse (good for gruel) |
| @deva[सक्तु] | @deva[साक्तुकः] | barley (good for saktu) |
| @deva[संग्राम] | @deva[सांग्रामिकः] | warrior |

The @deva[गुडादि] class: @deva[गुड], @deva[कुल्माष], @deva[सक्तु], @deva[अपूप], @deva[मांसौदन], @deva[इक्षु], @deva[वेणु], @deva[संग्राम], @deva[संघात], @deva[संक्राम], @deva[संवाह], @deva[प्रवास], @deva[निवास], @deva[उपवास]।`,

  '44104': `@deva[पथ्यतिथिवसतिस्वपतिभ्यष्ठञ्] — @deva[ठञ्] comes after @deva[पथि], @deva[अतिथि], @deva[वसति], @deva[स्वपति] meaning "excellent therein":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[पथि] (path) | @deva[पाथेयम्] (@ref[7.1.2]) | travel provisions |
| @deva[अतिथि] (guest) | @deva[आतिथेयम्] | hospitality |
| @deva[वसति] (dwelling) | @deva[वासतेयम्] | habitable (@deva[वासतेयी रात्रिः]) |
| @deva[स्वपति] | @deva[स्वापतेयम्] | wealth, property |

@note[Debars @deva[यत्].]`,

  '44105': `@deva[सभायाश्च] — @deva[यत्] comes after @deva[सभा] meaning "excellent therein":

@deva[सभायां साधुः] → @deva[सभ्यः] (refined, fit for society)

@note[Debars @deva[यत्] — difference is in accent (@ref[3.1.3], @ref[6.1.185]).]`,

  '44106': `@deva[छन्दसि ढः] — In @deva[छन्दस्] (Vedas), @deva[ढ] comes after @deva[सभा] meaning "excellent therein":

@deva[सभेयः] as in: @deva[सभेयोऽस्य युवा यजमानस्य वीरो जायताम्] (let a refined young hero be born to this sacrificer)

@note[Debars @deva[य].]`,

  '44107': `@deva[समानतीर्थे वासी] — @deva[यत्] comes after @deva[समानतीर्थ] (locative) meaning "resident therein":

@deva[समाने तीर्थे वासी] → @deva[सतीर्थ्यः] (@ref[6.3.87]) (fellow-student)

@note[@deva[साधुः] @deva[अनुवृत्ति] ceases. @deva[तीर्थ] = @deva[गुरु] (preceptor). Fellow-students dwell under the same teacher.]`,

  '44108': `@deva[समानोदरे शयितोकारादुदात्तः] — @deva[यत्] comes after @deva[समानोदर] (locative) meaning "who slept there," with @deva[उदात्त] on @deva[ओ]:

@deva[समानोदरे शयितः] → @deva[समानोदर्यः] (uterine brother)

@note[@deva[शयित] = @deva[स्थित] (remained). See @ref[6.3.88].]`,

  '44109': `@deva[सोदरे] — @deva[य] comes after @deva[सोदर] (locative) meaning "who slept there":

@deva[समानोदरे शयितः] → @deva[सोदर्यः] (@ref[6.3.88] optionally changes @deva[समान] → @deva[स])

@note[Here @deva[उदात्त] falls on @deva[य], not on @deva[ओ] as in previous sūtra.]`,

  '44110': `@deva[तत्र भवे छन्दसि] — In @deva[छन्दस्] (Vedas), @deva[यत्] comes after a locative-case word meaning "stays there":

Examples: @deva[मेघ्यः], @deva[विद्युत्यः] in: @deva[नमो मेघ्याय च विद्युत्याय च]

@note[Debars @deva[अण्], @deva[घ] etc. (@ref[4.3.53]). Those affixes also apply in Vedic usage. @deva[छन्दसि] governs all sūtras to end of chapter. @deva[भवे] governs through @ref[4.4.118].]`,

  '44111': `@deva[पाथोनद्योर्ड्यण् न्त्यलोपश्च] — @deva[ड्यण्] comes after @deva[पाथस्] and @deva[नदी] meaning "stays there," with elision of final vowel + consonant:

| Base | Derivative | Example |
|------|------------|---------|
| @deva[पाथस्] (firmament) | @deva[पाथ्यः] | @deva[तमुत्वा पाथ्यो वृषा] |
| @deva[नदी] (river) | @deva[नाद्यः] | @deva[च नो दधीत नाद्यो गिरो मे] |

@note[Debars @deva[यत्].]`,

  '44112': `@deva[वेशन्तहिमवतोरण्] — @deva[अण्] comes after @deva[वेशन्त] and @deva[हिमवत्] meaning "stays there" (Vedic):

| Base | Derivative |
|------|------------|
| @deva[वेशन्त] | @deva[वैशन्तीभ्यः स्वाहा] |
| @deva[हिमवत्] | @deva[हैमवतीभ्यः स्वाहा] |

@note[Debars @deva[यत्].]`,

  '44113': `@deva[स्रोतसो ड्यड्ड्यौ सलोपश्च] — @deva[ड्यत्] and @deva[ड्य] come after @deva[स्रोतस्] meaning "stays there," with elision of @deva[अस्]:

| Affix | Derivative | Note |
|-------|------------|------|
| @deva[ड्यत्] | @deva[स्रोत्यः] | different accent |
| @deva[ड्य] | @deva[स्रोत्यः] | different accent (@ref[3.1.3], @ref[6.1.185]) |
| @deva[यत्] | @deva[स्रोतस्यः] | alternative |

@note[@deva[ड] causes elision of @deva[अस्].]`,

  '44114': `@deva[सगर्भसयूथसनुतो यन्] — @deva[यन्] comes after @deva[सगर्भ], @deva[सयूथ], @deva[सनुत] meaning "stays there":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सगर्भ] | @deva[सगर्भ्यः] | younger brother (@deva[अनुभ्राता]) |
| @deva[सयूथ] | @deva[सयूथ्यः] | younger friend (@deva[अनुसखा]) |
| @deva[सनुत] | @deva[सनुत्यः] | thief (stays in concealment) |

@note[Debars @deva[यत्] — difference is accent (@ref[6.1.197]). @deva[समान] → @deva[स] in Vedas (@ref[6.3.84]). @deva[सनुत] = concealed.]`,

  '44115': `@deva[तुग्राद्धन्] — @deva[धन्] comes after @deva[तुग्र] meaning "stays there" (Vedic):

@deva[तुग्रियः] as in: @deva[त्वमग्रे वृषभस्तुग्रियाणाम्]

Also @deva[तुग्र्यः]: @deva[आवः शमं वृषभं तुग्र्यासु] (Ṛg I.34.15)

@note[Debars @deva[यत्]. @deva[तुग्र] = food, firmament, sacrifice, variṣṭha. @deva[तुग्र्य] = sunk in waters.]`,

  '44116': `@deva[अग्रे] — @deva[यत्] comes after @deva[अग्र] meaning "stays there" (Vedic):

@deva[अग्रे भवम्] → @deva[अग्र्यम्] (foremost)

@note[Repetition ensures @deva[यत्] isn't debarred by @deva[घ]/​@deva[छ] of next sūtra.]`,

  '44117': `@deva[घच्छौ च] — @deva[घच्] and @deva[छ] also come after @deva[अग्र] meaning "stays there" (Vedic):

| Affix | Derivative |
|-------|------------|
| @deva[यत्] | @deva[अग्र्यम्] |
| @deva[छ] | @deva[अग्रीयम्] |
| @deva[घच्] | @deva[अग्रियम्] |
| @deva[घन्] (@ref[4.4.115]) | @deva[अग्रियम्] |

Example: @deva[इहत्वष्टारमग्रियम्] (Ṛg I.13.10)`,

  '44118': `@deva[समुद्राभ्राद्घः] — @deva[घ] comes after @deva[समुद्र] and @deva[अभ्र] meaning "stays there" (Vedic):

| Base | Derivative | Example |
|------|------------|---------|
| @deva[समुद्र] | @deva[समुद्रियः] | @deva[समुद्रिया अप्सरसो मनीषिणम्] |
| @deva[अभ्र] | @deva[अभ्रियः] | @deva[नानदतो अभ्रियस्येव घोषाः] |

@note[Debars @deva[यत्]. @deva[अभ्र] should come first (fewer syllables) — irregular ordering.]`,

  '44119': `@deva[बर्हिषि दत्तम्] — @deva[यत्] comes after @deva[बर्हिष्] (locative) meaning "given there" (Vedic):

@deva[बर्हिष्येषु निधिषु प्रियेषु] (Ṛg I.15.5)

@note[@deva[तत्र भवः] @deva[अनुवृत्ति] ceases.]`,

  '44120': `@deva[दूतस्य भागकर्मणोः] — @deva[यत्] comes after @deva[दूत] (genitive) meaning "share" or "duty" (Vedic):

@deva[दूत्यम्] (messenger's share/duty) as in: @deva[यत्ते अग्रे दूत्यम्]

@note[Accent by @ref[6.1.213] should be @deva[दूत्यम्], but accented text reads @deva[दूत्यम्].]`,

  '44121': `@deva[रक्षोयातूनां हननी] — @deva[यत्] comes after @deva[रक्षस्] and @deva[यातु] (genitive) meaning "killer" (Vedic):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[रक्षस्] | @deva[रक्षस्यः] | demon-killer |
| @deva[यातु] | @deva[यातव्यः] | yātu-killer |

@deva[याते अग्ने रक्षस्या तनूः] = O Agni, thy bodies are Rākṣasa-killers.

@note[Plural shows respect.]`,

  '44122': `@deva[रेवतीजगतीहविष्यस्य प्रशंसा] — @deva[यत्] comes after @deva[रेवती], @deva[जगती], @deva[हविष्य] (genitive) meaning "praising" (Vedic):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[रेवती] | @deva[रेवत्यम्] | praising of Revatī |
| @deva[जगती] | @deva[जगत्यम्] | praising of Jagatī |
| @deva[हविष्य] | @deva[हविष्यम्] | praising of oblations |

@note[@deva[प्रशस्य] = @deva[प्रशंसन] (praising), by @deva[क्यप्] with @deva[भाव] sense. @deva[हविष्य] = things fit for offering (butter etc.).]`,

  '44123': `@deva[असुरस्य स्वम्] — @deva[यत्] comes after @deva[असुर] (genitive) meaning "property" (Vedic):

@deva[असुर्यम्] (belonging to Asuras) as in: @deva[असुर्यं वा एतत्पात्रं यच्चक्रधृतं कुलालकृतम्] (wheel-made potter's vessel belongs to Asuras)

@note[Debars @deva[अण्].]`,

  '44124': `@deva[मायायाम्] — @deva[अण्] comes after @deva[असुर] (genitive) meaning "glamour/illusion" (Vedic):

@deva[असुरस्य माया] → @deva[आसुरी] f. as in: @deva[आसुरी माया स्वधया कृतासि]

@note[Debars @deva[यत्].]`,

  '44125': `@deva[तद्वतो मत्वर्थे लुकि इष्टकाभ्य उपधानो मन्त्रः] — @deva[यत्] comes after @deva[मतुप्]-ending words (nominative) when meaning "mantra for putting up bricks" (Vedic), with @deva[लुक्] of @deva[मतुप्]:

@note[Complex rule for sacrificial brick mantras. When a @deva[मतुप्]-formed word describes the @deva[उपधान] (putting-up) mantra for @deva[इष्टका] (bricks), @deva[यत्] is added and @deva[मतुप्] is elided.]`,

  '44126': `@deva[अश्विमतोऽण्] — @deva[अण्] comes after @deva[अश्विमत्] for bricks (Vedic), with @deva[लुक्] of @deva[मतुप्]:

@deva[अश्विमान् उपधानो मन्त्रः आसाम् इष्टकानाम्] → @deva[आश्विनीः] (bricks put with Aśvin-mantras)

Process: @deva[अश्विमान्] + @deva[अण्] → @deva[अश्वि] (matup elided) + @deva[अण्] → @deva[अश्विन्] + @deva[अण्] (@ref[6.4.164]) → @deva[आश्विन]

Example: @deva[आश्विनीः उपदधाति] (Yajur Veda Tait. S. 5.3.1.1)`,

  '44127': `@deva[वयस्या मूर्धन्वतो मतुप्] — @deva[मतुप्] comes after @deva[मूर्धन्वत्] for @deva[वयस्]-containing bricks (Vedic):

@deva[मूर्धन्वतीः उपदधाति] (he collects Mūrdhanvatī bricks)

@note[Mantra containing both @deva[वयस्] and @deva[मूर्धन्] is both @deva[वयस्वान्] and @deva[मूर्धन्वान्]. @deva[यत्] would apply by @ref[4.4.125]; this ordains @deva[मतुप्] after @deva[मूर्धन्वान्].]`,

  '44128': `@deva[मासदेहयोर्मत्वर्थे] — @deva[यत्] with @deva[मतुप्] sense comes after nominative words when meaning "month" or "body" (Vedic):

**Months:**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[नभस्] (clouds) | @deva[नभस्यः] | month of clouds (June-July) |
| @deva[सहस्] | @deva[सहस्यः] | Pauṣa (Nov-Dec) |
| @deva[तपस्] | @deva[तपस्यः] | Phālguna (Feb-March) |
| @deva[मधु] | @deva[मधव्यः] (@ref[6.4.146], @ref[6.1.79]) | Vaiśākha (April-May) |

**Body:** @deva[ओजस्या तनूः] (bodies full of vigor)

@note[Debars @deva[मतुप्] and @deva[मत्वर्थ] affixes.]`,

  '44129': `@deva[मधोर्विभाषा षश्च] — @deva[यत्] and @deva[ष] optionally come after @deva[मधु] with @deva[मतुप्] sense (Vedic):

| Affix | Derivative |
|-------|------------|
| @deva[ष] | @deva[माधवः] |
| @deva[यत्] | @deva[मधव्यः] |
| (elided) | @deva[मधुः] |

All mean the month of Vaiśākha, or body (@deva[तनूः]).`,

  '44130': `@deva[ओजसोऽहनि खश्च] — @deva[यत्] and @deva[ख] with @deva[मतुप्] sense come after @deva[ओजस्] when meaning "day":

| Affix | Derivative |
|-------|------------|
| @deva[यत्] | @deva[ओजस्यम्] |
| @deva[ख] | @deva[ओजसीनम्] |

Both = @deva[अहः] (day, lit. full of heat).`,

  '44131': `@deva[वेशोयशसोर्भगाद्यल्] — @deva[यल्] with @deva[मतुप्] sense comes after @deva[भग] preceded by @deva[वेशस्] or @deva[यशस्] (Vedic):

| Compound | Derivative | Meaning |
|----------|------------|---------|
| @deva[वेशोभग] | @deva[वेशोभग्यः] | having strength and fortune |
| @deva[यशोभग] | @deva[यशोभग्यः] | having fame and fortune |

@note[@deva[ल्] shows accent on vowel before affix (@ref[6.1.193]). @deva[वेश] = strength; @deva[भग] = fortune/fame/virility.]`,

  '44132': `@deva[खश्च] — @deva[ख] also comes after @deva[वेशोभग] and @deva[यशोभग] with @deva[मतुप्] sense (Vedic):

| Compound | Derivative |
|----------|------------|
| @deva[वेशोभग] | @deva[वेशोभगीनः] |
| @deva[यशोभग] | @deva[यशोभगीनः] |

@note[Separate sūtra prevents @deva[यथासंख्य] (@ref[1.3.10]). @deva[ख] @deva[अनुवृत्ति] continues to next sūtra.]`,

  '44133': `@deva[पूर्वैः कृतमिनखयौ] — @deva[इन्], @deva[ख], and @deva[य] come after @deva[पूर्व] (instrumental) meaning "made by ancestors" (Vedic):

| Affix | Derivative | Meaning |
|-------|------------|---------|
| @deva[इन्] | @deva[पूर्विणः] | road made by ancestors |
| @deva[ख] | @deva[पूर्वीणः] | road made by ancestors |
| @deva[य] | @deva[पूर्व्यः] | road made by ancestors |

@deva[पूर्वैः] (plural) = @deva[पूर्वपुरुषाः] (past generations, ancestors)

Examples: @deva[गम्भीरेभिः पथिभिः पूर्विणेभिः]; @deva[ये ते पन्थाः सवितः पूर्व्यासः] (Ṛg I.35.11)

@note[@deva[मत्वर्थ] @deva[अनुवृत्ति] ceases.]`,

  '44134': `@deva[अद्भिः संस्कृतम्] — @deva[यत्] comes after @deva[अपस्] (instrumental) meaning "sanctified with water" (Vedic):

@deva[अप्यम्] (offering purified with water) as in: @deva[यस्येदमप्यं हविः]`,

  '44135': `@deva[सहस्रेण संमितं घः] — @deva[घ] comes after @deva[सहस्र] (instrumental) meaning "like/equal to" (Vedic):

@deva[सहस्रेण संमितः] → @deva[सहस्रियः] (like unto a thousand)

Examples: @deva[सहस्रियासोऽपां नोर्मयः]; @deva[अयमग्निः सहस्रियः]

@note[@deva[संमित] = @deva[तुल्य] (equal to).]`,

  '44136': `@deva[मत्वर्थे च] — @deva[घ] with @deva[मतुप्] sense also comes after @deva[सहस्र] (Vedic):

@deva[सहस्रस्य विद्यते] → @deva[सहस्रियः] (having a thousand)

@note[Debars @deva[मत्वर्थ] affixes @deva[विनि], @deva[इनि], and @deva[अण्] of @ref[5.2.102]-103.]`,

  '44137': `@deva[सोममर्हति घः] — @deva[घ] comes after @deva[सोम] (accusative) meaning "deserves that" (Vedic):

@deva[सोममर्हति] → @deva[सौम्याः ब्राह्मणाः] (Brāhmaṇas deserving Soma — honorable, learned, worthy of sacrifice)

@note[Difference between @deva[यत्] and @deva[घ] is accent.]`,

  '44138': `@deva[मत्वर्थे च] — @deva[य] with @deva[मतुप्] sense also comes after @deva[सोम] (Vedic):

@deva[सोम्यं मधुः पिबन्ति] = @deva[सोममयः मधुः] (honey from Soma)

@note[@deva[मयट्] sense includes @deva[आगत] (@ref[4.3.74], @ref[4.3.82]), @deva[विकारावयव] (@ref[4.3.134], @ref[4.3.143]), @deva[प्रकृत] (@ref[5.4.21]). Case varies by sense.]`,

  '44139': `@deva[मधोर्मत्वर्थे] — @deva[यत्] with @deva[मतुप्] sense comes after @deva[मधु] (Vedic):

@deva[मधव्यान् स्तोकान्] = @deva[मधुमयान्] (honey-drops)`,

  '44140': `@deva[वसोः समूहे च] — @deva[यत्] comes after @deva[वसु] meaning "collection" as well as with @deva[मतुप्] sense (Vedic):

@deva[वसव्यः] = @deva[समूहः] (collection)

**Vārttika:** @deva[यत्] comes after @deva[छन्दस्] without changing sense for letter-collections: @deva[सप्तादशाक्षरश्छन्दस्यः प्रजापतियज्ञो मन्त्रे विहिता]

**Vārttika:** @deva[यत्] comes after @deva[वसु] without changing sense: @deva[हस्तौ गृहीतस्य बहुभिर्वसव्यैः]`,

  '44141': `@deva[नक्षत्राद्घोऽर्थप्रत्ययौ] — @deva[घ] comes after @deva[नक्षत्र] without changing meaning (Vedic):

@deva[नक्षत्रियेभ्यः स्वाहा] = @deva[नक्षत्रेभ्यः स्वाहा]

@note[@deva[समूह] @deva[अनुवृत्ति] doesn't extend here.]`,

  '44142': `@deva[सर्वदेवयोस्तातिल्] — @deva[तातिल्] comes after @deva[सर्व] and @deva[देव] without changing meaning (Vedic):

| Base | Derivative | Example |
|------|------------|---------|
| @deva[सर्व] | @deva[सर्वतातिः] | @deva[सविता नः सुवतु सर्वतातिम्] |
| @deva[देव] | @deva[देवतातिः] | @deva[प्रदक्षिणिद्देवतातिर्मुराणः] |`,

  '44143': `@deva[शिवशमरिष्टेभ्यः करः] — @deva[तातिल्] comes after @deva[शिव], @deva[शम्], @deva[अरिष्ट] (genitive) meaning "does that" (Vedic):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शिव] | @deva[शिवतातिः] | doer of bliss |
| @deva[शम्] | @deva[शंतातिः] | doer of happiness |
| @deva[अरिष्ट] | @deva[अरिष्टतातिः] | doer of safety |

Example: @deva[याभिः शंतातीं भवथो ददाशुषे] (Ṛg I.112.20) — @deva[शंताती] (dual) = @deva[सुखस्य कर्तारौ]

@note[@deva[करः] = @deva[करोति] (by @deva[अच्] @ref[3.1.134]). Genitive has accusative force with kṛt-formed word.]`,

  '44144': `@deva[भावे च] — @deva[तातिल्] also comes after @deva[शिव], @deva[शम्], @deva[अरिष्ट] (genitive) meaning "condition/state" (Vedic):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शिव] | @deva[शिवतातिः] | state of blissfulness |
| @deva[शम्] | @deva[शंतातिः] | state of peace |
| @deva[अरिष्ट] | @deva[अरिष्टतातिः] | state of safety |

@note[Here words have force of verbal noun (@deva[भाव]).]`,

  '44145': `End of @deva[अध्याय] 4.

Summary of pāda 4.4:
- @deva[ठक्] @deva[अधिकार] (@ref[4.4.1]-74): plays, digs, conquers, refines, crosses, lives by, conveys, completes, mixes, gives, dwells, practices, etc.
- @deva[यत्] @deva[अधिकार] (@ref[4.4.75]-144): bears, pierces, obtains, excellent in, stays, given, kills, praises, property, mantra, month, made by, collection, etc.
- Vedic-specific affixes: @deva[ड्यण्], @deva[यन्], @deva[धन्], @deva[घ], @deva[तातिल्], etc.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.4.101-145). Total: ${Object.keys(vasu).length}`);
