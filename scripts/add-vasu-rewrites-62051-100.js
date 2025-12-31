import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '62051': `@deva[तवैकारयोर्गतेः] — An immediately preceding @deva[गति] retains its accent before the infinitive @deva[तवै] @ref[3.4.14], while simultaneously the final also has acute.

**Examples:**
@deva[अन्वेतवै], @deva[परिस्तरितवै], @deva[परिपातवै], @deva[अभिचारितवै]

All upasargas have first-syllable acute except @deva[अभि] (which has final acute, Phiṭ IV.13).

This creates a word with two acute syllables — an exception to @ref[6.1.158] (one accent per word).`,

  '62052': `@deva[अनिवर्णाद्गतेरञ्चतावप्रत्यये] — An immediately preceding @deva[गति] not ending in @deva[इ] or @deva[उ] retains its accent before @deva[अञ्च्] with the @deva[व्] affix (@deva[क्विप्] etc.).

**Examples:**
@deva[प्राङ्], @deva[प्राञ्चौ], @deva[प्राञ्चः] — from @deva[प्र] + @deva[अञ्च्]
@deva[पराङ्], @deva[पराञ्चौ], @deva[पराञ्चः], @deva[पराचः], @deva[पराचा]

**When @deva[गति] ends in @deva[इ]:**
@deva[प्रत्यङ्], @deva[प्रत्यञ्चौ], @deva[प्रत्यञ्चः] — from @deva[प्रति]; second member retains accent by @ref[6.2.139]

**Restriction — "before @deva[व्] affix":**
@deva[उदञ्चनः] — not with @deva[व्] affix

When the nasal of @deva[अञ्च्] is elided, this rule (being later) supersedes @ref[6.1.222]: @deva[पराचः], @deva[पराचाः].`,

  '62053': `@deva[नि-अधिभ्यां तु] — However, @deva[नि] and @deva[अधि] retain their accent before @deva[अञ्च्] with @deva[व्] affix.

**Examples:**
@deva[न्यङ्], @deva[न्यञ्चौ], @deva[न्यञ्चः] — the @deva[अ] becomes svarita by @ref[8.2.4]
@deva[अध्यङ्], @deva[अध्यञ्चौ], @deva[अध्यञ्चः]
@deva[अधीचः], @deva[नीचः], @deva[नीचा]

These end in @deva[इ], so this is an exception to the previous rule.`,

  '62054': `@deva[ईषदर्थे] — @deva[ईषत्] as first member optionally preserves its accent.

**Examples:**
| Option 1 | Option 2 |
|----------|----------|
| @deva[ईषत्कडारः] | @deva[ईषत्कडारः] |
| @deva[ईषत्पिङ्गलः] | @deva[ईषत्पिङ्गलः] |

@deva[ईषत्] has end-acute.

@note[In @deva[ईषद्भेदः] etc., the kṛt-accent @ref[6.2.139] necessarily applies — no option. By @deva[प्रतिपदोक्त] maxim, this rule applies to non-kṛt compounds formed by @ref[2.2.7].]`,

  '62055': `@deva[सुवर्णप्रमाणे धने] — Before @deva[धन], the first member denoting quantity of gold optionally preserves its accent.

**Examples:**
@deva[द्विसुवर्णधनम्] or @deva[द्विसुवर्णधनम्] — "wealth of two suvarṇas"

This is a karmadhāraya: @deva[द्वौ सुवर्णौ परिमाणमस्य] = @deva[द्विसुवर्णम्], @deva[तदेव धनम्].

As a bahuvrīhi: @deva[द्विसुवर्णधनः] or @deva[द्विसुवर्णधनः]

**Restrictions:**
- "Gold" — @deva[प्रस्थधनम्] excluded (not gold)
- "Quantity" — @deva[कांचनधनम्] excluded (not quantity)
- "Before @deva[धन]" — @deva[निष्कमाला] excluded`,

  '62056': `@deva[प्रथममध्येतरि] — @deva[प्रथम] as first member optionally preserves its accent when meaning "novice."

**Examples:**
@deva[प्रथमवैयाकरणः] or @deva[प्रथमवैयाकरणः] — "one who has just begun to study grammar"

@deva[प्रथम] — formed by @deva[अमच्] (Uṇādi V.68), end-acute by @deva[चित्] accent.

**Without "novice" meaning:**
@deva[प्रथमवैयाकरणः] — "the first/chief grammarian" — always end-acute`,

  '62057': `@deva[कतरकतमौ कर्मधारये] — @deva[कतर] and @deva[कतम] as first members optionally preserve their accent in a karmadhāraya.

**Examples:**
@deva[कतरकठः] or @deva[कतरकठः] — "which Kaṭha?"
@deva[कतमकठः] or @deva[कतमकठः] — "which one of the Kaṭhas?"

The word "karmadhāraya" is used for the next sūtra's anuvrtti. By @deva[प्रतिपदोक्त] maxim, @deva[कतर] and @deva[कतम] form only karmadhāraya by @ref[2.1.63].`,

  '62058': `@deva[आर्यो ब्राह्मणकुमारयोः] — @deva[आर्य] optionally preserves its accent in a karmadhāraya before @deva[ब्राह्मण] and @deva[कुमार].

**Examples:**
@deva[आर्यब्राह्मणः] or @deva[आर्यब्राह्मणः]
@deva[आर्यकुमारः] or @deva[आर्यकुमारः]

@deva[आर्य] — formed by @deva[ण्यत्], svarita on final.

**Restrictions:**
- "@deva[आर्य]" — @deva[परमब्राह्मणः], @deva[परमकुमारः] excluded
- "Before @deva[ब्राह्मण]/कुमार]" — @deva[आर्यक्षत्रियः] excluded
- "Karmadhāraya" — @deva[आर्यस्य ब्राह्मणः] = @deva[आर्यब्राह्मणः] (genitive) — end-acute only`,

  '62059': `@deva[राजा च] — @deva[राजन्] also optionally preserves its accent in a karmadhāraya before @deva[ब्राह्मण] and @deva[कुमार].

**Examples:**
@deva[राजब्राह्मणः] or @deva[राजब्राह्मणः]
@deva[राजकुमारः] or @deva[राजकुमारः]

@deva[राजन्] — formed by @deva[कनिन्] (Uṇādi I.156).

**Genitive compound:**
@deva[राज्ञो ब्राह्मणः] = @deva[राजब्राह्मणः] — not karmadhāraya, so end-acute only.

This is a separate sūtra to prevent @deva[यथासंख्य] and for the next sūtra's anuvrtti.`,

  '62060': `@deva[षष्ठ्यन्तं प्रत्येनसि] — @deva[राजन्] in the genitive optionally preserves its accent before @deva[प्रत्येनस्].

**Examples:**
@deva[राज्ञः प्रत्येनाः] or @deva[राज्ञः प्रत्येनाः]

The genitive sign is not elided by @ref[6.3.21].

**Without genitive:**
@deva[राजा चासौ प्रत्येनाश्च] = @deva[राजप्रत्येनाः] — no option (karmadhāraya)`,

  '62061': `@deva[नित्यार्थे क्ते] — A word meaning "always" optionally preserves its accent before a @deva[क्त]-participle.

**Examples:**
@deva[नित्यप्रहसितः] or @deva[नित्यप्रहसितः] — "always laughing"
@deva[सततप्रहसितः] or @deva[सततप्रहसितः]

@deva[नित्य] — formed by @deva[त्यप्] added to @deva[नि] @ref[4.2.104] Vārtika; first-acute (upasarga retains accent).
@deva[सतत] — formed by @deva[क्त] with @deva[भाव] sense; end-acute by @ref[6.2.144].

**Without "always" meaning:**
@deva[मुहूर्त्तप्रहसितः] — end-acute only`,

  '62062': `@deva[ग्रामः शिल्पिनि] — @deva[ग्राम] as first member optionally preserves its accent before a word denoting a professional/artisan.

**Examples:**
@deva[ग्रामनापितः] or @deva[ग्रामनापितः] — "village barber"
@deva[ग्रामकुलालः] or @deva[ग्रामकुलालः] — "village potter"

@deva[ग्राम] — first-acute.

**Restrictions:**
- "@deva[ग्राम]" — @deva[परमनापितः] excluded
- "Professional" — @deva[ग्रामरथ्या] excluded (no option)`,

  '62063': `@deva[राजा शिल्पिनि प्रशंसायाम्] — @deva[राजन्] optionally preserves its accent before a professional word when praise is expressed.

**Examples:**
@deva[राजनापितः] or @deva[राजनापितः] — "a royal barber" (i.e., one skilled enough for a king)
@deva[राजकुलालः] or @deva[राजकुलालः]

This can be karmadhāraya or genitive compound.

**Restrictions:**
- "@deva[राजन्]" — @deva[परमनापितः] excluded
- "Praise" — @deva[राजनापितः] "the king's barber" — end-acute only
- "Professional" — @deva[राजहस्ती] "royal elephant" — end-acute`,

  '62064': `@deva[आदिर्यतः] — From here through @ref[6.2.91], supply the phrase "the first syllable has acute accent."

This is an @deva[अधिकार] (governing rule).

The first syllable of the first member gets the acute in the following sūtras.

@note[The word @deva[आदि] "first syllable" governs through @ref[6.2.91]; the word @deva[उदात्त] has a longer stretch through @ref[6.2.137].]`,

  '62065': `@deva[सप्तमीहारिणोर्धर्म्ये न हरणे] — If the first member is in the locative or denotes the receiver of a tax, it has first-syllable acute when the second member means "what is lawful" — but not before @deva[हरण].

**Locative examples:**
@deva[स्तूपेशाणः] — "a coin (due) at a stūpa"
@deva[मुकुटेकार्षापणम्] — "a kārṣāpaṇa (due) on a crown"
@deva[हलेद्विपदिका], @deva[हलेत्रिपदिका], @deva[दृषदिमाषकः]

**Tax-receiver examples:**
@deva[याज्ञिकाश्वः] — "the horse customarily due to the sacrificer"
@deva[वैयाकरणहस्ती], @deva[मातुलाश्वः], @deva[पितृव्यगवः]

**Restrictions:**
- "What is lawful" — @deva[स्तम्बेरमः], @deva[कर्मकरवर्द्धितकः] excluded
- "Not before @deva[हरण]" — @deva[वाडवहरणम्] — end-acute

@note[@deva[हरण] being a kṛt word is excluded here, but other kṛt words after @deva[हारी]-denoting words ARE governed by this rule: @deva[वाडवहार्यः] — first-syllable acute.]`,

  '62066': `@deva[युक्ते] — The first member has first-syllable acute when the second member denotes someone who regulates or keeps in order.

**Examples:**
@deva[गोबल्लवः] — "a cowherd"
@deva[अश्वबल्लवः] — "a horse-keeper"
@deva[गोमणिन्दः], @deva[अश्वमणिन्दः] — "cow/horse supervisor"
@deva[गोसंख्यः], @deva[अश्वसंख्यः] — "cow/horse accountant"

The words @deva[बल्लव], @deva[मणिन्द], @deva[संख्य] etc. mean @deva[पालक] "protector/supervisor."`,

  '62067': `@deva[अध्यक्षेऽन्यतरस्याम्] — Before @deva[अध्यक्ष] "superintendent," the first-syllable acute is optional.

**Examples:**
@deva[गवाध्यक्षः] or @deva[गवाध्यक्षः] — "superintendent of cows"
@deva[अश्वाध्यक्षः] or @deva[अश्वाध्यक्षः] — "superintendent of horses"`,

  '62068': `@deva[पापं शिल्पिनि] — @deva[पाप] optionally has first-syllable acute before a professional word.

**Examples:**
@deva[पापनापितः] or @deva[पापनापितः] — "wretched barber"
@deva[पापकुलालः] or @deva[पापकुलालः] — "wretched potter"

By @deva[प्रतिपदोक्त] maxim, this applies to the appositional compound of @ref[2.1.54] (censure), not to genitive: @deva[पापस्य नापितः] = @deva[पापनापितः] — end-acute only.`,

  '62069': `@deva[गोत्रान्तेवासिमाणवब्राह्मणेष्वाक्रोशे] — Before a gotra name, scholar name, @deva[माणव], or @deva[ब्राह्मण], the first member has first-syllable acute when reproach is expressed.

**With gotra:**
@deva[जंघावात्स्यः] — "a Vātsya who seeks leg-washing offerings (under false pretenses)"
@deva[भार्यासौश्रुतः] — "a Sauśruta under his wife's control"

**With scholar name:**
@deva[कुमारीदाक्षाः] — "those who become Dākṣa's pupils just for marriage prospects"
@deva[कम्बलचारायणीयाः], @deva[घृतरौढीयाः], @deva[ओदनपाणिनीयाः]

**With @deva[माणव]/ब्राह्मण]:**
@deva[भिक्षामाणवः] — "one who becomes a student just for alms"
@deva[दासीब्राह्मणः], @deva[वृषलीब्राह्मणः], @deva[भयब्राह्मणः]

**Restrictions:**
- "Gotra word" — @deva[दासीश्रोत्रियः] excluded
- "Reproach" — @deva[महाब्राह्मणः] excluded (praise)`,

  '62070': `@deva[मैरेये द्रव्यम्] — Before @deva[मैरेय] (a type of liquor), the first member denoting an ingredient has first-syllable acute.

**Examples:**
@deva[गुडमैरेयः] — "maireya made from molasses"
@deva[मधुमैरेयः] — "maireya made from honey"

**Restrictions:**
- "Ingredient" — @deva[परममैरेयः] excluded
- "Before @deva[मैरेय]" — @deva[पुष्पासवः] excluded

@note[@deva[मैरेय] refers to all spirituous liquors except @deva[सुरा].]`,

  '62071': `@deva[भोजने तदर्थेषु] — A word denoting food has first-syllable acute before a word denoting a suitable container.

**Examples:**
@deva[भिक्षावासः] — "alms-pot"
@deva[भक्तकंसः] — "rice bowl"
@deva[श्राणाकंसः], @deva[भाजीकंसः]

**Restrictions:**
- "Food" — @deva[समाशशालयः] excluded (@deva[समाश] = action, not substance)
- "Suitable container" — @deva[भिक्षाप्रियः] excluded (bahuvrīhi — first member gets end-acute)`,

  '62072': `@deva[उपमाने गोबिडालसिंहसैन्धवेषु] — Before @deva[गो], @deva[बिडाल], @deva[सिंह], or @deva[सैन्धव], the first member (denoting object of comparison) has first-syllable acute.

**Examples:**
@deva[धान्यगवः] — "grain (arranged) like a cow" (i.e., in the shape of a cow)
@deva[हिरण्यगवः] — "gold (shaped) like a cow"
@deva[भिक्षाबिडालः], @deva[ब्राह्मणबिडालः]
@deva[तृणसिंहः], @deva[काष्ठसिंहः]
@deva[सक्तुसैन्धवः], @deva[पानसैन्धवः]

Compounding by @ref[2.1.56] (Vyāghrādi is an ākṛtigaṇa).

**Restriction — "object of comparison":**
@deva[परमसिंहः] — end-acute (not a comparison)`,

  '62073': `@deva[अकः कारके जीविकार्थे] — Before an @deva[अक]-ending word denoting livelihood, the first member (denoting object of comparison) has first-syllable acute.

**Examples:**
@deva[दन्तलेखकः] — "tooth-cleaner (by profession)"
@deva[नखलेखकः] — "nail-polisher"
@deva[अवस्करशोधकः] — "refuse-cleaner"
@deva[रमणीयकारकः] — "one who makes things beautiful"

= @deva[दन्तलेखनादिभिर्येषां जीविका] — "those whose livelihood is tooth-cleaning etc."

Compounding by @ref[2.2.17].

**Restrictions:**
- "Livelihood" — @deva[इक्षुभक्षिकां मे धारयसि] excluded (not profession)
- "@deva[अक] affix" — @deva[रमणीयकर्त्ता] excluded (@deva[तृच्] affix)`,

  '62074': `@deva[प्राच्यक्रीडायाम्] — Before an @deva[अक]-ending word denoting sport of the Eastern people, the first member has first-syllable acute.

**Examples:**
@deva[उद्दालकपुष्पभञ्जिका] — "uddālaka-flower-breaking game"
@deva[वीरणपुष्पप्रचायिका] — "vīraṇa-flower-gathering game"
@deva[शालभञ्जिका], @deva[तालभञ्जिका]

Formed by @deva[ण्वुल्] @ref[3.3.109], compounding by @ref[2.2.17].

**Restrictions:**
- "Eastern people" — @deva[जीवपुत्रप्रचायिका] excluded (Western people's sport)
- "Sport" — @deva[तवपुष्पप्रचायिका] excluded ("your turn for..." — formed by @deva[ण्वुच्] @ref[3.3.111])`,

  '62075': `@deva[अणि कर्मव्यतिहारे] — Before an @deva[अण्]-formed word denoting a functionary, the first member has first-syllable acute.

**Examples:**
@deva[छत्रधारः] — "umbrella-bearer"
@deva[तूणीधारः] — "quiver-bearer"
@deva[कमण्डलुग्राहः] — "water-pot holder"
@deva[भृङ्गारधारः] — "pitcher-bearer"

**Restriction — "functionary":**
@deva[काण्डलावः], @deva[शरलावः] — end-acute (not functionaries)`,

  '62076': `@deva[शिल्पिनि च न कृकारात्] — Before an @deva[अण्]-formed word denoting a professional — but not when @deva[अण्] follows @deva[कृ] — the first member has first-syllable acute.

**Examples:**
@deva[तन्तुवायः] — "weaver"
@deva[तुन्नवायः] — "sewer/stitcher"
@deva[वालवायः] — "tail-worker"

**Restrictions:**
- "Professional" — @deva[काण्डलावः], @deva[शरलावः] excluded
- "Not @deva[कृ] + @deva[अण्]" — @deva[कुम्भकारः], @deva[अयस्कारः] — end-acute`,

  '62077': `@deva[संज्ञायां च न कृकारात्] — Before an @deva[अण्]-formed Name — but not when @deva[अण्] follows @deva[कृ] — the first member has first-syllable acute.

**Examples:**
@deva[तन्तुवायः] — "spider" (a creature name)
@deva[वालवायः] — "the hill Vālavāya"

**Exception — @deva[कृ] + @deva[अण्]:**
@deva[रथकारः] — "a Brāhmaṇa caste name" — end-acute`,

  '62078': `@deva[गोतन्तियवाः पाले] — @deva[गो], @deva[तन्ति], and @deva[यव] have first-syllable acute before @deva[पाल].

**Examples:**
@deva[गोपालः] — "cowherd"
@deva[तन्तिपालः] — "rope-tender" (@deva[तन्ति] = calf-tying rope)
@deva[यवपालः] — "barley-guard"

This applies to non-functionary compounds (functionaries are governed by @ref[6.2.75]).

**Restrictions:**
- "@deva[गो] etc." — @deva[वत्सपालः] excluded
- "Before @deva[पाल]" — @deva[गोरक्षः] excluded`,

  '62079': `@deva[णिन्यन्तः] — A compound ending in @deva[णिनि] (@deva[इन्]) has first-syllable acute on the first member.

**Examples:**
@deva[पुष्पहारिन्] — "flower-taker"
@deva[फलहारिन्] — "fruit-taker"
@deva[पर्णहारिन्] — "leaf-taker"`,

  '62080': `@deva[उपमानं शब्दार्थप्रकृतावेव] — An @deva[उपमान] (standard of comparison) as first member has first-syllable acute before a @deva[णिनि]-formed radical (without upasarga) that denotes a sound.

**Examples:**
@deva[उष्ट्रक्रोशिन्] — "crying like a camel"
@deva[ध्वाङ्क्षराविन्] — "cawing like a crow"
@deva[खरनादिन्] — "braying like a donkey"

The word @deva[उपमान] distinguishes this from the previous rule. When the second term is @deva[णिनि] but @deva[उपमान], the previous rule doesn't apply.

**Restrictions:**
- "Sound-denoting" — @deva[वृकवञ्चिन्], @deva[वृकप्रेक्षिन्] — kṛt accent @ref[6.2.139]
- "Radical without upasarga" — @deva[गर्दभोच्चारिन्], @deva[कोकिलाभिव्याहारिन्] — excluded (sound meaning comes from upasarga)

@note[According to Patañjali, first-syllable acute applies whether or not the first member is @deva[उपमान], when the second is a sound-denoting radical: @deva[पुष्कलजल्पिन्].]`,

  '62081': `@deva[युक्तारोह्यादयश्च] — The compounds @deva[युक्तारोहिन्] etc. have first-syllable acute.

**The list:**
| Compound | Notes |
|----------|-------|
| @deva[युक्तारोही] | Formed by @deva[णिनि] |
| @deva[आगतरोही], @deva[आगतयोधी], @deva[आगतवञ्ची], @deva[आगतनर्दी], @deva[आगतनन्दी], @deva[आगतप्रहारी] | |
| @deva[आगतमत्स्यः] | |
| @deva[क्षीरहोता], @deva[भगिनीभर्त्ता] | Genitive compounds @ref[2.2.9] |
| @deva[ग्रामगोधुक्] | Genitive |
| @deva[अश्वत्रिरात्रः], @deva[गर्गत्रिरात्रः], @deva[व्युष्टत्रिरात्रः] | Genitive |
| @deva[शणपादः], @deva[समपादः] | Genitive |
| @deva[एकशितिपात्] | Bahuvrīhi of three terms |

@note[The @deva[पात्रेसमित] compounds @ref[2.1.48] also belong to this class.]`,

  '62082': `@deva[जे दीर्घात्काशतुषभ्राष्ट्रवटेभ्यश्च] — Before @deva[ज], the first member has first-syllable acute if it ends in a long vowel or is @deva[काश], @deva[तुष], @deva[भ्राष्ट्र], or @deva[वट].

**Examples:**
@deva[कुटीजः], @deva[शमीजः] — long-vowel endings
@deva[काशजः], @deva[तुषजः], @deva[भ्राष्ट्रजः], @deva[वटजः] — listed words

These are formed by @deva[ड] added to @deva[जन्] @ref[3.2.97].`,

  '62083': `@deva[बहुषूपोत्तमम्] — Before @deva[ज], when the first member has more than two syllables, the penultimate syllable gets the acute.

**Examples:**
@deva[उपसरजः], @deva[मन्दुरजः], @deva[आमलकीजः], @deva[वडवाजः]

Though @deva[आमलकी] and @deva[वडवा] end in long vowels, the accent is governed by this rule, not the previous.

**Restriction — "more than two syllables":**
@deva[दग्धजानि तृणानि] — end-acute (only two syllables)`,

  '62084': `@deva[ग्रामे चानिवसताम्] — Before @deva[ग्राम], the first member has first-syllable acute when "inhabitants" are not meant.

**Examples:**
@deva[मल्लग्रामः], @deva[वणिग्ग्रामः] — @deva[ग्राम] = @deva[समूह] "assembly"
@deva[देवग्रामः] — = @deva[देवस्वामिकः] "belonging to gods"

**Meaning "inhabitants":**
@deva[दाक्षिग्रामः] — "village inhabited by Dakṣa's descendants" — end-acute
@deva[माहिकग्रामः] — "village inhabited by Māhikas" — end-acute`,

  '62085': `@deva[घोषादिषु च] — Before words in the @deva[घोषादि] class, the first member has first-syllable acute.

**Examples:**
@deva[दाक्षिघोषः], @deva[दाक्षिकटः], @deva[दाक्षिपल्वलः], @deva[दाक्षिबदरी], @deva[दाक्षिवल्लभः], @deva[दाक्षिह्रदः], @deva[दाक्षिपिङ्गलः], @deva[दाक्षिमाला], @deva[दाक्षिशाला], @deva[दाक्षिशिल्पी], @deva[कुन्दतृणम्], @deva[आश्रममुनिः], @deva[दाक्षिपुंसा], @deva[दाक्षिकूटः]

**The @deva[घोषादि] list:**
@deva[घोष], @deva[कट], @deva[पल्वल], @deva[ह्रद], @deva[बदरी], @deva[पिङ्गल], @deva[पिशङ्ग], @deva[माला], @deva[रक्षा], @deva[शाला], @deva[कूट], @deva[शाल्मली], @deva[अश्वत्थ], @deva[तृण], @deva[शिल्पी], @deva[मुनि], @deva[पुंसा]`,

  '62086': `@deva[छात्र्यादयः शालायाम्] — @deva[छात्रि] and similar words have first-syllable acute before @deva[शाला].

**Examples:**
@deva[छात्रिशाला], @deva[ऐलिशाला], @deva[भाण्डिशाला]

This applies even when the compound becomes neuter by @ref[2.4.25], superseding @ref[6.2.123]: @deva[छात्रिशालम्], @deva[ऐलिशालम्].

**The @deva[छात्र्यादि] list:**
@deva[छात्रि], @deva[ऐलि], @deva[भाण्डि], @deva[व्याडि], @deva[आखण्डि], @deva[आटि], @deva[गौमि]`,

  '62087': `@deva[अवृद्धाभ्यो न कर्क्यादिभ्यः प्रस्थे] — Before @deva[प्रस्थ], the first member has first-syllable acute if it lacks vṛddhi in the first syllable and is not from the @deva[कर्क्यादि] class.

**Examples:**
@deva[इन्द्रप्रस्थः], @deva[कुण्डप्रस्थः], @deva[ह्रदप्रस्थः], @deva[सुवर्णप्रस्थः]

**With vṛddhi — excluded:**
@deva[दाक्षिप्रस्थः], @deva[माहिकप्रस्थः]

**@deva[कर्क्यादि] — excluded:**
@deva[कर्कीप्रस्थः], @deva[मघीप्रस्थः]

**The @deva[कर्क्यादि] list:**
@deva[कर्की], @deva[मघी], @deva[मकरी], @deva[कर्कन्धू], @deva[शमी], @deva[करीर], @deva[कटुक], @deva[कुबल], @deva[बदरी]`,

  '62088': `@deva[मालादयश्च] — @deva[माला] and similar words have first-syllable acute before @deva[प्रस्थ].

**Examples:**
@deva[मालाप्रस्थः], @deva[शालाप्रस्थः]

This applies even though the first syllables have vṛddhi. In @deva[एक] and @deva[शोणा], the @deva[ए] and @deva[ओ] are treated as vṛddhi @ref[1.1.75].

**The @deva[मालादि] list:**
@deva[माला], @deva[शाला], @deva[शोणा], @deva[द्राक्षा], @deva[स्राक्षा], @deva[क्षामा], @deva[काञ्ची], @deva[एक], @deva[काम], @deva[क्षौमा]`,

  '62089': `@deva[नगरे न महानवयोरुदीचाम्] — Before @deva[नगर], the first member has first-syllable acute — but not if it is @deva[महत्] or @deva[नव], nor for cities of the Northern people.

**Examples:**
@deva[सुह्मनगरम्], @deva[पुण्ड्रनगरम्], @deva[विराटनगरम्]

**Exceptions:**
- @deva[महत्]/नव]: @deva[महानगरम्], @deva[नवनगरम्] — end-acute
- Northern cities: @deva[नान्दीनगरम्], @deva[कान्तीनगरम्] — end-acute`,

  '62090': `@deva[द्व्यच्त्र्यचोऽवर्णस्यार्मे] — Before @deva[अर्म], a word of 2-3 syllables ending in @deva[अ]/आ] (excluding @deva[महा] and @deva[नव]) has first-syllable acute.

**Examples:**
@deva[दत्तार्मम्], @deva[गुप्तार्मम्], @deva[कुक्कुटार्मम्], @deva[वायसार्मम्]

**Restrictions:**
- "Ending in @deva[अ]/@deva[आ]" — @deva[बृहदर्मम्] excluded
- "2-3 syllables" — @deva[कपिञ्जलार्मम्] excluded (4 syllables)
- "@deva[महा]/नव]" — @deva[महार्मम्], @deva[नवार्मम्] excluded`,

  '62091': `@deva[न भूताधिकसंजीवमद्राश्मकञ्जलम्] — Before @deva[अर्म] etc., the following do NOT get first-syllable acute: @deva[भूत], @deva[अधिक], @deva[संजीव], @deva[मद्र], @deva[अश्मन्], @deva[कञ्जल].

**Examples (end-acute by @ref[6.1.223]):**
@deva[भूतार्मम्], @deva[अधिकार्मम्], @deva[संजीवार्मम्], @deva[मद्रार्मम्], @deva[अश्मार्मम्], @deva[कञ्जलार्मम्]

**Vārtika:**
In the Vedas, @deva[दिवोदास] etc. have first-syllable acute: @deva[दिवोदासाय गायत], @deva[वध्र्यश्वाय दाशुषे].`,

  '62092': `@deva[अन्तोदात्तात्] — From here through @ref[6.2.110], supply: "the last syllable of the first member has acute accent."

This is an @deva[अधिकार].

In the succeeding sūtras, the final syllable of the first member gets the acute.`,

  '62093': `@deva[सर्वं गुणकार्त्स्न्ये] — @deva[सर्व] has end-acute as first member before an attributive word meaning "whole, through and through."

**Examples:**
@deva[सर्वश्वेतः] — "entirely white"
@deva[सर्वकृष्णः] — "entirely black"
@deva[सर्वमहान्] — "entirely great"

**Restrictions:**
- "@deva[सर्व]" — @deva[परमश्वेतः] excluded
- "Attributive" — @deva[सर्वसौवर्णः], @deva[सर्वरजतः] excluded (modification, not attribute)
- "Complete pervasion" — @deva[सर्वेषां श्वेततरः] = @deva[सर्वश्वेतः] excluded (comparative whiteness; @deva[कार्त्स्न्य] is of @deva[गुणिन्] not @deva[गुण])`,

  '62094': `@deva[गिरिनिकाययोः संज्ञायाम्] — Before @deva[गिरि] or @deva[निकाय], the first member has end-acute when the compound is a Name.

**Examples:**
@deva[अञ्जनागिरिः], @deva[भञ्जनागिरिः] — the finals are lengthened by @ref[6.3.117]
@deva[शापिण्डनिकायः], @deva[मौण्डिनिकायः], @deva[चिखिल्लिनिकायः]

**Not a Name:**
@deva[परमगिरिः], @deva[ब्राह्मणनिकायः] — end-acute @ref[6.1.223]`,

  '62095': `@deva[कुमार्यां वयसि] — Before @deva[कुमारी], the first member has end-acute when the compound denotes age.

**Examples:**
@deva[वृद्धकुमारी] — "old maid" (from @deva[वृद्धा] + @deva[कुमारी])
@deva[जरत्कुमारी] — "aged maiden" (from @deva[जरती])

The words become masculine by @ref[6.3.42]. @deva[कुमारी] here means "unmarried virgin," not "young maiden."

**Not denoting age:**
@deva[परमकुमारी] — end-acute`,

  '62096': `@deva[उदके मिश्रे] — Before @deva[उदक] meaning "mixture," the first member has end-acute.

**Examples:**
@deva[गुडोदकम्] or @deva[गुडोदकम्] — "molasses-water"
@deva[तिलोदकम्] or @deva[तिलोदकम्] — "sesame-water"

The svarita optionally results by @ref[8.2.6] (combination of acute + grave).

**Not mixture:**
@deva[शीतोदकम्], @deva[उष्णोदकम्] — end-acute (not mixtures, just qualities)`,

  '62097': `@deva[द्विगावध्वरे] — Before a @deva[द्विगु] compound denoting a sacrifice, the first member has end-acute.

**Examples:**
@deva[गर्गत्रिरात्रः] — "three-night sacrifice of the Gargas"
@deva[चारकत्रिरात्रः], @deva[कुसुरुविन्दसप्तरात्रः]

**Restrictions:**
- "Before dvigu" — @deva[अतिरात्रः] excluded (prādi-samāsa with @deva[अच्] @ref[5.4.87])
- "Denoting sacrifice" — @deva[बिल्वसप्तरात्रः] excluded (bilva-oblation, not sacrifice name)`,

  '62098': `@deva[नपुंसके सभायाम्] — Before @deva[सभा] when neuter, the first member has end-acute.

**Examples:**
@deva[गोपालसभम्], @deva[पशुपालसभम्], @deva[स्त्रीसभम्], @deva[दासीसभम्], @deva[गावडालसभम्]

**Restrictions:**
- "Before @deva[सभा]" — @deva[ब्राह्मणसभम्] excluded
- "When neuter" — @deva[राजसभा], @deva[ब्राह्मणसभा] excluded (feminine)

@deva[सभा] becomes neuter by @ref[2.4.23]-@ref[2.4.24]. By @deva[प्रतिपदोक्त] maxim, when @deva[सभा] is neuter not by those rules but by the referent being neuter, this rule doesn't apply: @deva[रमणीयसभम्] — end-acute.`,

  '62099': `@deva[पुरे प्राचाम्] — Before @deva[पुर] denoting an Eastern city, the first member has end-acute.

**Examples:**
@deva[ललाटपुरम्], @deva[काञ्चीपुरम्], @deva[शिवदत्तपुरम्], @deva[काणिपुरम्], @deva[नामपुरम्]

**Not Eastern:**
@deva[शिवपुरम्] — end-acute`,

  '62100': `@deva[अरिष्टगौडयोः पूर्वे] — Before @deva[पुर], when @deva[अरिष्ट] or @deva[गौड] is first, the first member has end-acute.

**Examples:**
@deva[अरिष्टपुरम्], @deva[गौडपुरम्]

By the word @deva[पूर्व], this extends to: @deva[अरिष्टश्रितपुरम्], @deva[गौडभृत्यपुरम्].`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (6.2.51-100). Total: ${Object.keys(vasu).length}`);
