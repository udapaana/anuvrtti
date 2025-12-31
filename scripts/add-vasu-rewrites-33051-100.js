import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '33051': `@deva[वर्षप्रतिबन्धे वाऽवस्य ग्रहः] — The affix @deva[घञ्] is optionally used after @deva[ग्रह्] preceded by @deva[अव] when the sense is "withholding of rain" (@deva[वर्षप्रतिबन्ध]).

| Drought-sense | Otherwise |
|---------------|-----------|
| @deva[अवग्राहः] or @deva[अवग्रहो देवस्य] — "the drought" | @deva[अवग्रहः पदस्य] |

The word @deva[वर्षप्रतिबन्ध] = absence of rain when the season has arrived.`,

  '33052': `@deva[वाणिज्ये वा प्रस्य ग्रहः] — The affix @deva[घञ्] is optionally used after @deva[ग्रह्] preceded by @deva[प्र] when the word relates to commerce (@deva[वाणिज्य]).

"Commerce" here refers specifically to the string of a balance, not trade in general.

| Commerce-related | Otherwise |
|------------------|-----------|
| @deva[तुलाप्रग्राहः] or @deva[तुलाप्रग्रहः] — "balance string" | @deva[प्रग्रहः] |

This can apply to any person using a balance, whether a trader or not.`,

  '33053': `@deva[रश्मौ प्रस्य वा ग्रहः] — The affix @deva[घञ्] is optionally used after @deva[ग्रह्] preceded by @deva[प्र] when the word means "rein" (@deva[रश्मि]).

Result: @deva[प्रग्रहः] or @deva[प्रग्राहः] — "a rein."

The word @deva[रश्मि] here = the bridle by which horses joined to a carriage are controlled.`,

  '33054': `@deva[प्रावारे वा प्रस्य वृञः] — The affix @deva[घञ्] is optionally used after @deva[वृ] ("to choose") preceded by @deva[प्र] when the word means "a covering" (@deva[प्रावार]).

| Covering-sense | Otherwise |
|----------------|-----------|
| @deva[प्रावारः] or @deva[प्रवरः] — "cloak, veil" | @deva[प्रवरागौ] |`,

  '33055': `@deva[अवज्ञाने परेर्भूञः] — The affix @deva[घञ्] is optionally used after @deva[भू] ("to be") preceded by @deva[परि] when the sense is "disregard" (@deva[अवज्ञान]).

| Disregard-sense | Otherwise |
|-----------------|-----------|
| @deva[परिभावः] or @deva[परिभवः] — "insult, humiliation" | @deva[परिभवः] = @deva[सर्वतोभवनं] ("surrounding") |

The word @deva[अवज्ञान] = contempt, neglect.`,

  '33056': `@deva[ईदूद्भ्योऽच्] — The affix @deva[अच्] applies after roots ending in @deva[इ] or @deva[ई].

This debars @deva[घञ्]. The @deva[च] in @deva[अच्] is qualitative (relevant for @ref[6.2.144]).

| Root | Result | Meaning |
|------|--------|---------|
| @deva[चि] | @deva[चयः] | collecting |
| @deva[इ] | @deva[अयः] | going |
| @deva[जि] | @deva[जयः] | victory |
| @deva[क्षि] | @deva[क्षयः] | destruction |

The conditions from @ref[3.3.18] and @ref[3.3.19] apply here through @ref[3.3.113].`,

  '33057': `@deva[ॠदुशनस्पृधः] — The affix @deva[अप्] applies after roots ending in long @deva[ॠ], short @deva[उ], or long @deva[ऊ].

This debars @deva[घञ्]. The @deva[प्] is indicatory for accent (@ref[3.1.3]).

| Root | Result | Meaning |
|------|--------|---------|
| @deva[कृ] | @deva[करः] | scattering |
| @deva[गॄ] | @deva[गरः] | beverage, poison |
| @deva[शॄ] | @deva[शरः] | arrow |
| @deva[यु] | @deva[यवः] | barley |
| @deva[लू] | @deva[लवः] | reaping |
| @deva[पू] | @deva[पवः] | winnowing |

@note[The @deva[द्] in @deva[ॠद्] is euphonic, not @deva[त्] changed to @deva[द्].]`,

  '33058': `@deva[ग्रहवृदृनिश्चिगमश्च] — The affix @deva[अप्] applies after @deva[ग्रह्], @deva[वृ], @deva[दृ], @deva[निश्चि], and @deva[गम्].

This debars @deva[घञ्] (and @deva[अच्] for @deva[निश्चि]).

| Root | Result | Meaning |
|------|--------|---------|
| @deva[ग्रह्] | @deva[ग्रहः] | planet |
| @deva[वृ] | @deva[वरः] | boon |
| @deva[दृ] | @deva[दरः] | tearing, cave |
| @deva[निश्चि] | @deva[निश्चयः] | certainty |
| @deva[गम्] | @deva[गमः] | march |

@note[By vārttika, @deva[वश्] and @deva[रण्] are also included: @deva[वशः] ("obedient"), @deva[रणः] ("battle").]`,

  '33059': `@deva[सोपसर्गादद्] — The affix @deva[अप्] applies after @deva[अद्] ("to eat") when an upasarga is in composition.

| With upasarga | Without |
|---------------|---------|
| @deva[विघसः] ("half-chewed morsel," by @ref[1.4.38]) | @deva[घासः] ("grass," @deva[अद् + घञ् → घस् + अ], @ref[2.4.38]) |
| @deva[प्रघसः] ("voracious") | — |`,

  '33060': `@deva[निरादेर्णश्च] — Both @deva[ण] and @deva[अप्] apply after @deva[अद्] when preceded by @deva[नि].

| Affix | Formation | Meaning |
|-------|-----------|---------|
| @deva[ण] | @deva[नि + आद् + अ] → @deva[न्यादः] (by @ref[7.2.116]) | feeding |
| @deva[अप्] | @deva[नि + घस् + अ] (by @ref[2.4.38]) → @deva[निघसः] | eating, food |`,

  '33061': `@deva[अनुपसर्गाद्व्यधजपोः] — The affix @deva[अप्] applies after @deva[व्यध्] ("to pierce") and @deva[जप्] ("to mutter") when not preceded by an upasarga.

| Without upasarga | With upasarga |
|------------------|---------------|
| @deva[व्यधः] ("wound") | @deva[आव्याघा] |
| @deva[जपः] ("muttering") | @deva[उपजाया] |

This debars @deva[घञ्].`,

  '33062': `@deva[स्वनहसोर्वा] — The affix @deva[अप्] optionally applies after @deva[स्वन्] and @deva[हस्] when not preceded by an upasarga.

| Optional forms | With upasarga (no option) |
|----------------|---------------------------|
| @deva[स्वनः] or @deva[स्वानः] ("sound") | @deva[प्रस्वानः] ("loud noise") |
| @deva[हसः] or @deva[हासः] ("laughter") | @deva[प्रहासः] ("loud laughter") |`,

  '33063': `@deva[संवोपनोर्विभाषायमः] — The affix @deva[अप्] optionally applies after @deva[यम्] ("to surround") when preceded by @deva[सम्], @deva[उप], @deva[नि], or @deva[वि], or even without an upasarga.

| Formation | Optional forms |
|-----------|----------------|
| @deva[सम् + यम्] | @deva[संयामः] or @deva[संयमः] ("restraint") |
| @deva[उप + यम्] | @deva[उपयामः] or @deva[उपयमः] ("marriage") |
| @deva[नि + यम्] | @deva[नियामः] or @deva[नियमः] ("restrictive rule") |
| @deva[वि + यम्] | @deva[वियामः] or @deva[वियमः] ("distress") |
| @deva[यम्] | @deva[यामः] or @deva[यमः] |

This debars @deva[घञ्].`,

  '33064': `@deva[निगदनदपठस्वनाम्] — The affix @deva[अप्] optionally applies after @deva[गद्], @deva[नद्], @deva[पठ्], and @deva[स्वन्] when preceded by @deva[नि].

| Root | Optional forms |
|------|----------------|
| @deva[गद्] | @deva[निगदः] or @deva[निगादः] ("recitation") |
| @deva[नद्] | @deva[निनदः] or @deva[निनादः] ("noise") |
| @deva[पठ्] | @deva[निपठः] or @deva[निपाठः] ("reading") |
| @deva[स्वन्] | @deva[निस्वनः] or @deva[निस्वानः] ("noise") |

This debars @deva[घञ्].`,

  '33065': `@deva[वंश्यां क्वणेर्नेश्चानुपसर्गाच्च] — The affix @deva[अप्] optionally applies after @deva[क्वन्] ("to jingle"):
1. When preceded by @deva[नि]
2. When without an upasarga
3. When meaning "flute" (@deva[वंशी])

| Context | Optional forms |
|---------|----------------|
| With @deva[नि] | @deva[निक्वणः] or @deva[निक्वाणः] ("musical tone") |
| Without upasarga | @deva[क्वणः] or @deva[क्वाणः] ("sound") |
| Flute (any upasarga) | @deva[कल्याणप्रक्वणा वीणा] |

But: @deva[अतिक्वाणो वर्तते] — with @deva[अति] and not referring to flute, no option.`,

  '33066': `@deva[परिमाणे पणेर्नित्यम्] — The affix @deva[अप्] invariably applies after @deva[पण्] ("to barter") when the sense is "measure" (@deva[परिमाण]).

| Measure-sense | Otherwise |
|---------------|-----------|
| @deva[मूलकपणः] ("handful of radishes") | @deva[पणः] ("trade") |
| @deva[शाकपणः] ("handful of vegetables") | — |

The word @deva[नित्यम्] ("invariably") stops the @deva[अनुवृत्ति] of "optionally." These words have come to mean "a handful measure" regardless of the thing measured.`,

  '33067': `@deva[अनुपसर्गान्मदः] — The affix @deva[अप्] applies after @deva[मद्] when not preceded by an upasarga.

| Without upasarga | With upasarga |
|------------------|---------------|
| @deva[विद्यामदः] ("pride of knowledge") | @deva[उन्मादः] ("madness") |
| @deva[धनमदः] ("pride of wealth") | @deva[प्रमादः] ("carelessness") |
| @deva[कुलमदः] ("pride of family") | — |

This debars @deva[घञ्].`,

  '33068': `@deva[हर्षे प्रसम्मदौ] — The words @deva[प्रमद] and @deva[सम्मद] are irregularly formed with the sense "joy" (@deva[हर्ष]).

| Joy-sense | Otherwise |
|-----------|-----------|
| @deva[कन्यानां प्रमदः] ("joy of girls") | @deva[प्रमादः] ("carelessness") |
| @deva[कोकिलानां सम्मदः] ("rejoicing of cuckoos") | @deva[सम्मादः] ("frenzy") |

The full forms are given in the sūtra to indicate these are @deva[रूढि] (conventionalized) — the root meaning is not transparent.`,

  '33069': `@deva[पश्वादिषु समुदजोः] — The affix @deva[अप्] applies after @deva[अज्] ("to go/throw") when preceded by @deva[सम्] or @deva[उत्], if the word refers to beasts (@deva[पशु]).

| Beast-related | Otherwise |
|---------------|-----------|
| @deva[समजः पशूनाम्] ("herd of cattle") | @deva[समाजो ब्राह्मणानाम्] ("assembly of Brahmins") |
| @deva[उदजः पशूनाम्] ("driving forth of cattle") | @deva[उदाजः क्षत्रियाणाम्] |

With @deva[सम्]: "collection"; with @deva[उत्]: "driving."`,

  '33070': `@deva[द्यूते ग्लहः] — The word @deva[ग्लह] is irregularly formed when the sense relates to gambling (@deva[द्यूत]).

Formation: @deva[ग्रह् + अप् → ग्रह], then @deva[र → ल] irregularly.

| Gambling-sense | Otherwise |
|----------------|-----------|
| @deva[अक्षस्य ग्लहः] ("cast of dice") | @deva[ग्रहः पादस्य] |

Some derive this regularly from a root @deva[ग्लह्] ("to gamble") + @deva[अप्].`,

  '33071': `@deva[प्रजने श्रितेः] — The affix @deva[अप्] applies after @deva[श्रि] ("to flow") in the sense of "impregnation" (@deva[प्रजन]) — the covering of cows, etc.

| Example | Meaning |
|---------|---------|
| @deva[गवामुपसरः] | impregnation of cows |
| @deva[पशूनामुपसरः] | impregnation of cattle |

This debars @deva[घञ्].`,

  '33072': `@deva[संप्रसारणं निभ्यव्युपेभ्योह्वः] — The affix @deva[अप्] applies after @deva[ह्वे] ("to call") when preceded by @deva[नि], @deva[अभि], @deva[उप], or @deva[वि], with samprasāraṇa (semivowel → vowel).

| Formation | Result | Meaning |
|-----------|--------|---------|
| @deva[नि + ह्वे + अप्] | @deva[निहवः] (by @ref[6.1.108], @ref[7.3.84], @ref[6.1.78]) | invocation |
| @deva[अभि + ह्वे] | @deva[अभिहवः] | invocation |
| @deva[उप + ह्वे] | @deva[उपहवः] | invitation |
| @deva[वि + ह्वे] | @deva[विहवः] | calling |

But: @deva[प्रह्वायः] ("summons") — no samprasāraṇa with @deva[प्र].`,

  '33073': `@deva[युद्धेऽनोर्ह्वः संप्रसारणं च] — The affix @deva[अप्] applies after @deva[ह्वे] preceded by @deva[आङ्], with samprasāraṇa, when the word means "battle" (@deva[युद्ध]).

| Battle-sense | Otherwise |
|--------------|-----------|
| @deva[आहवः] ("battle" — where they challenge each other) | @deva[आह्वायः] ("calling") |`,

  '33074': `@deva[द्रोण्यामाहावः] — The word @deva[आहाव] is irregularly formed when meaning "trough" (@deva[द्रोणी]).

Formation: @deva[आ + ह्वे + अप्] → samprasāraṇa → vṛddhi: @deva[आ + हु + अ → आहौ + अ → आहावः].

| Trough-sense | Otherwise |
|--------------|-----------|
| @deva[आहावः] ("trough for watering cattle near a well") | @deva[आह्वायः] ("calling") |

The sense of "calling" remains: the place where cattle are called to drink.`,

  '33075': `@deva[अनुपसर्गाद्भावेऽपि ह्वः संप्रसारणं च] — The affix @deva[अप्] applies after @deva[ह्वे] without an upasarga, with samprasāraṇa, when mere action (@deva[भाव]) is denoted.

Result: @deva[हवः] ("calling").

Example: @deva[हवे हवे सुहवं शूरमिन्द्रम्] — "calling again and again the hero Indra."

Why "without upasarga"? With upasarga: @deva[आह्वायः].

The repetition of @deva[भाव] here excludes the @deva[अनुवृत्ति] of @ref[3.3.19] — this applies only to mere action, not appellatives.`,

  '33076': `@deva[अनुपसर्गाद्भावे हनः वधश्चोदात्तः] — The affix @deva[अप्] applies after @deva[हन्] ("to kill") without an upasarga, in the sense of mere action, with @deva[वध] substituting for @deva[हन्]. The result has udātta accent on the final.

| Action-sense | Otherwise |
|--------------|-----------|
| @deva[वधश्चोराणाम्] ("killing of thieves") | @deva[घातः] ("blow") — @deva[घञ्] |
| @deva[वधोदस्यूनाम्] ("killing of robbers") | @deva[प्रघातः] — with upasarga |

The affix @deva[अप्] (normally anudātta) becomes udātta here.`,

  '33077': `@deva[मूर्त्तौ घनः] — The affix @deva[अप्] applies after @deva[हन्] when the word means "solidity" (@deva[मूर्त्ति]), with @deva[घन्] substituting.

| Example | Meaning |
|---------|---------|
| @deva[अभ्रघनः] | mass of cloud |
| @deva[दधिघनः] | solid curd |

The word @deva[मूर्त्ति] = hardness, solidity.

@note[@deva[घनं दधि] uses the quality for the thing qualified.]`,

  '33078': `@deva[अन्तर्हनो देशे] — The affix @deva[अप्] applies after @deva[हन्] preceded by @deva[अन्तर्], with @deva[घन्] substituting, when the word means "a country" (@deva[देश]).

Result: @deva[अन्तर्घनः] — name of a Bāhīka country; also "porch, open space before a house."

Some write @deva[अन्तर्घणः] (with @deva[ण]) — both are valid.

When not meaning a country: @deva[अन्तर्घातः] ("striking in the middle").`,

  '33079': `@deva[गृहस्थदेशे प्रघणप्रघाणौ] — The words @deva[प्रघण] and @deva[प्रघाण] are irregularly formed, meaning "portion of a dwelling house."

Result: @deva[प्रघणः] or @deva[प्रघाणः] — "porch before the door, portico."

Formed irregularly from @deva[प्र + हन्].

When not meaning a house portion: @deva[प्रघातः].`,

  '33080': `@deva[पीठेऽध्युद्घनः] — The word @deva[उद्घन] is irregularly formed meaning "bench" (@deva[पीठ]).

Result: @deva[उद्घनः] — "carpenter's bench" (the wood on which placing planks, the carpenter carves).

Formed irregularly from @deva[उत् + हन्].

When not having this sense: @deva[उद्घातः] ("uneven").`,

  '33081': `@deva[अङ्गेऽपघनः] — The word @deva[अपघन] is irregularly formed meaning "limb of the body" (@deva[अङ्ग]).

Result: @deva[अपघनः] — "a limb or member" (hand, foot, etc., not the whole body).

Formed irregularly from @deva[अप + हन्].

Otherwise: @deva[अपघातः].`,

  '33082': `@deva[करणेऽयोविद्रुभ्यो घनः] — The affix @deva[अप्] applies after @deva[हन्] when @deva[अयस्], @deva[वि], or @deva[द्रु] is in composition, the word is related as instrument (@deva[करण]), with @deva[घन्] substituting.

| Formation | Meaning |
|-----------|---------|
| @deva[अयोघनः] | forge-hammer (whereby iron is destroyed) |
| @deva[विघनः] | mallet |
| @deva[द्रुघनः] | axe |

Some write @deva[द्रुघणः] — @deva[न → ण] by @ref[8.4.3] or inclusion in @deva[आरोहणादि] (@ref[4.2.80]).`,

  '33083': `@deva[स्तम्बे कश्च] — Both @deva[क] and @deva[अप्] (with @deva[घन्]) apply after @deva[हन्] when @deva[स्तम्ब] ("clump") is in composition, the word being an instrument.

| Affix | Result | Meaning |
|-------|--------|---------|
| @deva[क] | @deva[स्तम्बघ्नः] | small hoe for weeding grass clumps |
| @deva[अप्] | @deva[स्तम्बघनः] | — |

Feminine: @deva[स्तम्बघ्ना] or @deva[स्तम्बघना].`,

  '33084': `@deva[करणे परेर्घः] — Both @deva[क] and @deva[अप्] apply after @deva[हन्] when preceded by @deva[परि], the word being an instrument, with @deva[घ] replacing @deva[हन्].

Result: @deva[परिघः] or @deva[पलिघः] (by @ref[8.2.22]) — "iron beam for locking a gate, iron club."`,

  '33085': `@deva[आश्रयोपघ्नम्] — The word @deva[उपघ्न] is irregularly formed meaning "inclined place for support" (@deva[आश्रय]).

Formation: @deva[उप + हन् + अप्] → elide penultimate @deva[अ] of @deva[हन्] (irregular) → @deva[हन् → घ्न] by sandhi.

| Example | Meaning |
|---------|---------|
| @deva[पर्वतोपघ्नः] | declivity of a mountain |
| @deva[ग्रामोपघ्नः] | bordering the village |

The word @deva[आश्रय] = proximity, contiguity.`,

  '33086': `@deva[संघौद्घौ संहतौ स्तुत्यां च] — The words @deva[संघ] ("collection") and @deva[उद्घ] ("praise") are irregularly formed.

Formation: @deva[सम् + हन् + अप्] → @deva[सं + ह् + अ] → @deva[सं + घ् + अ] → @deva[सङ्घः].

| Word | Meaning | Example |
|------|---------|---------|
| @deva[सङ्घः] | collection | @deva[सङ्घः पशूनाम्] ("herd of cattle") |
| @deva[उद्घः] | praise | @deva[उद्घो मनुष्यः] ("excellent man") |

The serial application follows @ref[1.3.10].

When not in these senses: @deva[सङ्घातः] ("union").`,

  '33087': `@deva[निमिते निघः] — The word @deva[निघ] is irregularly formed meaning "as high as broad" (@deva[निमित]).

The word @deva[निमित] = @deva[समन्तान्मितं] ("measured all around") — i.e., @deva[समारोहपरिणाहम्].

| Example | Meaning |
|---------|---------|
| @deva[निघा वृक्षाः] | trees as high as broad |
| @deva[निघा शालयः] | square/cubic/circular halls |

When not meaning "as high as broad": @deva[निघातः] ("blow").`,

  '33088': `@deva[डुधातोर्गेः क्त्रिः] — The affix @deva[क्त्रि] applies after a root marked with indicatory @deva[डु] when denoting mere action.

By @ref[4.4.20], @deva[मप्] is always added, so the form is always @deva[त्रिम].

| Root | Formation | Meaning |
|------|-----------|---------|
| @deva[डुपचष्] (to cook) | @deva[पक्त्रिमम्] | what is cooked |

The conditions from @ref[3.3.18] and @ref[3.3.19] apply.`,

  '33089': `@deva[टेरथुच्] — The affix @deva[अथुच्] applies after a root marked with indicatory @deva[टु] when denoting mere action.

| Root | Result | Meaning |
|------|--------|---------|
| @deva[टुवेपृ] | @deva[वेपथुः] | trembling |
| @deva[टुओश्वि] | @deva[श्वयथुः] | swelling |
| @deva[टुक्षु] | @deva[क्षवथुः] | sneezing |
| @deva[टुदु] | @deva[दवथुः] | burning |`,

  '33090': `@deva[यज्याच्यतविच्छप्रच्छरक्षो नङ्] — The affix @deva[नङ्] applies after @deva[यज्], @deva[याच्], @deva[यत्], @deva[विच्छ्], @deva[प्रच्छ्], and @deva[रक्ष्] when denoting mere action.

The @deva[ङ्] prohibits guṇa/vṛddhi (@ref[1.1.5]).

| Root | Result | Meaning |
|------|--------|---------|
| @deva[यज्] | @deva[यज्ञः] | sacrifice |
| @deva[याच्] | @deva[याच्ञा] | solicitation |
| @deva[यत्] | @deva[यत्नः] | effort |
| @deva[विच्छ्] | @deva[विश्नः] (by @ref[6.4.19]) | lustre |
| @deva[प्रच्छ्] | @deva[प्रश्नः] | question |
| @deva[रक्ष्] | @deva[रक्ष्णः] | protection |`,

  '33091': `@deva[स्वपश्च नन्] — The affix @deva[नन्] applies after @deva[स्वप्] ("to sleep").

The final @deva[न्] is indicatory, regulating accent (@ref[6.1.197]).

Result: @deva[स्वप्नः] — "dream."`,

  '33092': `@deva[सोपसर्गादघूकिः] — The affix @deva[कि] applies after a @deva[घु] verb (@deva[दा], @deva[धा], @deva[घ्वदाप्] per @ref[1.1.20]) when an upasarga is in composition.

The @deva[क्] is indicatory, causing elision of final @deva[आ] (@ref[6.4.64]).

| Formation | Result | Meaning |
|-----------|--------|---------|
| @deva[प्र + दा + कि] | @deva[प्रदिः] | present |
| @deva[प्र + धा + कि] | @deva[प्रधिः] | periphery of a wheel |
| @deva[उप + आ + धा + कि] | @deva[उपाधिः] | fraud |
| @deva[अन्तर् + धा + कि] | @deva[अन्तर्धिः] | vanishing |`,

  '33093': `@deva[आधारेऽर्द्वितीयायाश्च] — The affix @deva[कि] applies after a @deva[घु] verb when a word in the accusative case is in composition and the word denotes "location" (@deva[आधार]).

| Formation | Meaning |
|-----------|---------|
| @deva[जलधिः] | ocean ("in which water is held") |
| @deva[शरधिः] | quiver ("in which arrows are placed") |

The word "location" indicates the words should have no other significance. The @deva[च] draws @deva[कि] from the previous sūtra.`,

  '33094': `@deva[स्त्रियां क्तिन्] — The affix @deva[क्तिन्] applies after a root to express action in the feminine gender.

This supersedes @deva[घञ्], @deva[अच्], and @deva[अप्].

| Root | Result | Meaning |
|------|--------|---------|
| @deva[कृ] | @deva[कृतिः] | action |
| @deva[चि] | @deva[चितिः] | gathering |
| @deva[मन्] | @deva[मतिः] | understanding |

@note[By vārttika, @deva[क्तिन्] applies after @deva[आप्] etc. — forms like @deva[आप्तिः] ("getting"), @deva[राद्धिः] ("accomplishment"), @deva[दीप्तिः] ("brightness") are inferred from usage.]`,

  '33095': `@deva[स्थाभ्यां गापाभ्यां पचश्च] — The affix @deva[क्तिन्] applies after @deva[स्था], @deva[गा], @deva[पा], and @deva[पच्] to form feminine words denoting mere action.

This debars @deva[अङ्] (@ref[3.3.106]) which would otherwise supersede @deva[क्तिन्] for compound verbs ending in long @deva[आ].

| Formation | Result (by various rules) | Meaning |
|-----------|---------------------------|---------|
| @deva[प्र + स्था + क्तिन्] | @deva[प्रस्थितिः] (@ref[7.4.40]) | journey |
| @deva[उद् + गै + क्तिन्] | @deva[उद्गीतिः] (@ref[6.1.45], @ref[6.4.66]) | singing aloud |
| @deva[सम् + गै + क्तिन्] | @deva[सङ्गीतिः] | concert |
| @deva[प्र + पा + क्तिन्] | @deva[प्रपीतिः] | cistern |
| @deva[पच् + क्तिन्] | @deva[पक्तिः] | cooking |`,

  '33096': `@deva[मन्त्रे वृषेष्पच्मन्विद्भूवीराभ्य उदात्तः] — In mantras, @deva[क्तिन्] (with udātta accent) applies after @deva[वृष्], @deva[इष्], @deva[पच्], @deva[मन्], @deva[विद्], @deva[भू], @deva[वि], and @deva[रा] to form feminine words denoting mere action.

The sūtra anomalously puts bases in nominative rather than ablative case.

| Root | Result | Meaning |
|------|--------|---------|
| @deva[वृष्] | @deva[वृष्टिः] | raining |
| @deva[इष्] | @deva[इष्टिः] | wishing |
| @deva[पच्] | @deva[पक्तिः] | cooking |
| @deva[मन्] | @deva[मतिः] | thinking |
| @deva[विद्] | @deva[वित्तिः] | knowing |
| @deva[भू] | @deva[भूतिः] | being |
| @deva[वि] | @deva[वीतिः] | consuming |
| @deva[रा] | @deva[रातिः] | giving |`,

  '33097': `@deva[ऊतियूतिजूतिसातिहेतिकीर्तयश्चोदात्ताः] — These words are anomalous forms with udātta accent:

| Word | Root | Meaning |
|------|------|---------|
| @deva[ऊतिः] | @deva[अव्] + @deva[क्तिन्] (by @ref[6.4.20]) | preserving, sport |
| @deva[यूतिः] | @deva[यु] | joining |
| @deva[जूतिः] | @deva[जु] | velocity |
| @deva[सातिः] | @deva[षो] | destruction |
| @deva[हेतिः] | @deva[हि] | weapon |
| @deva[कीर्तिः] | @deva[कृत्] | fame |

The @deva[अनुवृत्ति] of @deva[मन्त्रे] does not apply; only @deva[उदात्त] is understood. The form @deva[ऊतिः] is regular but not its accent.`,

  '33098': `@deva[व्रज्यजोरुदात्तौ क्यप्] — The affix @deva[क्यप्] (with udātta accent) applies after @deva[व्रज्] and @deva[यज्] to form feminine words denoting action.

This supersedes @deva[क्तिन्].

| Formation | Result | Meaning |
|-----------|--------|---------|
| @deva[व्रज् + क्यप्] | @deva[व्रज्या] | wandering about |
| @deva[यज् + क्यप्] | @deva[इज्या] (by @ref[6.1.15]) | worshipping |

The @deva[प्] in @deva[क्यप्] is indicatory — it enables @deva[त] addition by @ref[5.1.7] in words formed in the next sūtra.`,

  '33099': `@deva[संज्ञायां समजनिषदनिपतमनविदषुञ्शीङ्भृञ्इण उदात्ताः क्यप्] — The affix @deva[क्यप्] (with udātta accent) applies after these roots to form feminine appellatives:

| Root | Result | Meaning |
|------|--------|---------|
| @deva[सम् + अज्] | @deva[समज्या] | assembly |
| @deva[नि + षद्] | @deva[निषद्या] | small bed, couch |
| @deva[नि + पत्] | @deva[निपत्या] | slippery ground |
| @deva[मन्] | @deva[मन्या] | thinking |
| @deva[विद्] | @deva[विद्या] | knowledge |
| @deva[षुञ्] | @deva[सुत्या] (by @ref[6.1.71]) | soma extraction, parturition |
| @deva[शीङ्] | @deva[शय्या] | bed |
| @deva[भृञ्] | @deva[भृत्या] | wages, service |
| @deva[इण्] | @deva[इत्या] | litter, palanquin |`,

  '33100': `@deva[कृञः शच] — After @deva[कृ], both @deva[श] and @deva[क्यप्] apply (as well as @deva[क्तिन्]).

By @deva[योगविभाग], this sūtra splits into:
1. @deva[कृञः] — @deva[क्तिन्] applies after @deva[कृ]
2. @deva[श च] — @deva[श] and @deva[क्यप्] also apply

| Affix | Result | Notes |
|-------|--------|-------|
| @deva[श] | @deva[क्रिया] | root becomes @deva[क्रिय] by @ref[3.1.67] |
| @deva[क्यप्] | @deva[कृत्या] (by @ref[6.1.71]) | — |
| @deva[क्तिन्] | @deva[कृतिः] | — |`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.3.51-100). Total: ${Object.keys(vasu).length}`);
