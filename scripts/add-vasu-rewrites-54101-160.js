import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '54101': `@deva[खार्याः प्राचां द्विगोरर्धाच्च] — The affix @deva[टच्] comes after @deva[खारी] in a @deva[द्विगु] compound or when preceded by @deva[अर्ध] in a @deva[तत्पुरुष], according to Eastern grammarians.

Examples:
| Meaning | Compound |
|---------|----------|
| two khārīs combined | @deva[द्विखारम्] or @deva[द्विखारि] |
| half a khārī | @deva[अर्धखारम्] or @deva[अर्धखारी] |

@note[The Padamañjarī notes this sūtra could be dispensed with since @deva[खार] is synonymous with @deva[खारी].]`,

  '54102': `@deva[अञ्जलेर्द्वित्रिभ्याम्] — The affix @deva[टच्] comes after @deva[अञ्जलि] when preceded by @deva[द्वि] or @deva[त्रि] in a @deva[द्विगु] compound.

Examples:
| Analysis | Compound |
|----------|----------|
| two añjalis combined | @deva[द्व्यञ्जलम्] |
| three añjalis combined | @deva[त्र्यञ्जलम्] |

Counter-example (not dvigu):
- @deva[द्वयोरञ्जलिः] → @deva[द्वञ्जलिः] (añjali for two)

@note[When a taddhita is not elided (@ref[5.4.92]), the affix @deva[टाच्] does not apply: @deva[द्व्यञ्जलिः] (bought for two añjalis).]`,

  '54103': `@deva[तत्पुरुषे नपुंसकादनोऽसश्छन्दसि] — In Vedic, the affix @deva[टच्] comes after neuter @deva[तत्पुरुष] compounds ending in @deva[अन्] or @deva[अस्].

Examples:
| Base | Compound | Usage |
|------|----------|-------|
| @deva[हस्ति] + @deva[चर्मन्] | @deva[हस्तिचर्मम्] | @deva[हस्तिचर्मे जुहोति] |
| @deva[देव] + @deva[छन्दस्] | @deva[देवच्छन्दसम्] | @deva[देवच्छन्दसानि] |

Counter-examples:
- Not ending in @deva[अन्]/अस्]: @deva[बिल्वदारु जुहोति] (no affix)
- Not neuter: @deva[सुत्रामाणं पृथिवीं द्यामनेहसम्]

@note[Vārtika: The word @deva[वा] (optionally) should be read into this sūtra: @deva[ब्रह्मसाम]/ब्रह्मसामम्], @deva[देवच्छन्दः]/देवच्छन्दसम्].]`,

  '54104': `@deva[ब्रह्मणो जानपदे] — The affix @deva[टच्] comes after @deva[ब्रह्मन्] in a @deva[तत्पुरुष] denoting a person belonging to a country.

Examples:
| Country | Compound | Meaning |
|---------|----------|---------|
| @deva[सुराष्ट्र] | @deva[सुराष्ट्रब्रह्मः] | a Brāhmaṇa of Surāṣṭra |
| @deva[अवन्ति] | @deva[अवन्तिब्रह्मः] | a Brāhmaṇa of Avanti |

This is a locative tatpuruṣa compound.

Counter-example (not country-related):
- @deva[देवब्रह्मा नारदः] — Nārada the bard of the gods`,

  '54105': `@deva[वा कुमहद्भ्याम्] — The affix @deva[टच्] comes optionally after @deva[ब्रह्मन्] when preceded by @deva[कु] or @deva[महत्].

Examples:
| First member | With टच् | Without टच् |
|--------------|----------|-------------|
| @deva[कु] | @deva[कुब्रह्मः] | @deva[कुब्रह्मा] |
| @deva[महत्] | @deva[महाब्रह्मः] | @deva[महाब्रह्मा] |

@note[@deva[ब्रह्मम्] is a synonym of @deva[ब्राह्मण].]`,

  '54106': `@deva[द्वन्द्वाच्चुदषहान्तात्समाहारे] — The affix @deva[टच्] comes after a @deva[समाहार द्वन्द्व] (collective dvandva) ending in a palatal consonant, @deva[द्], @deva[ष्], or @deva[ह्].

Palatal-final examples:
| Analysis | Compound |
|----------|----------|
| @deva[वाक् च त्वक् च] | @deva[वाक्त्वचम्] |
| @deva[स्रक् च त्वक् च] | @deva[स्रक्त्वचम्] |

@deva[द्]-final:
| @deva[समित् च दृषत् च] | @deva[समिद्दृषदम्] |

@deva[ह्]-final:
| @deva[धेनु च गोदुह् च] | @deva[धेनुगोदुहम्] |

Why "samāhāra"? The rule doesn't apply to @deva[इतरेतर द्वन्द्व]: @deva[प्रावृट्शरदौ].

Why "dvandva"? Not in tatpuruṣa: @deva[पञ्च वाचः समाहृताः] = @deva[पंचवाक्] (no affix).`,

  '54107': `@deva[शरदादिभ्योऽव्ययीभावे] — The affix @deva[टच्] comes after @deva[शरद्]-class words when forming an @deva[अव्ययीभाव] compound.

Examples:
| Analysis | Compound |
|----------|----------|
| near autumn | @deva[उपशरदम्], @deva[प्रतिशरदम्] |
| near the Vipāś river | @deva[उपविपाशम्] |

Why "avyayībhāva"? In other compounds: @deva[परमशरत्] (no affix).

@deva[शरदादि] list (23 words):
@deva[शरद्], @deva[विपाश्], @deva[अनस्], @deva[मनस्], @deva[उपानह्], @deva[अनडुह्], @deva[दिव्], @deva[हिमवत्], @deva[हिरुक्], @deva[विद्], @deva[सद्], @deva[दिश्], @deva[दृश्], @deva[विश्], @deva[चतुर्], @deva[त्यद्], @deva[तद्], @deva[यद्], @deva[कियत्], @deva[जरस्] (from @deva[जरा]), @deva[अक्ष्णः] (with @deva[प्रति/पर/सम/अनु]), @deva[पथिन्], @deva[सदृश्].

@note[Words ending in @deva[झय्] consonants invariably add the affix despite @ref[5.4.111].]`,

  '54108': `@deva[अमः] — The affix @deva[टच्] comes after an @deva[अव्ययीभाव] compound ending in @deva[अम्].

Examples:
| Compound | Base |
|----------|------|
| @deva[उपराजम्] | near the king |
| @deva[अध्यात्मम्] | concerning the self |
| @deva[प्रत्यात्मम्] | for each self |

@note[The final @deva[अन्] is elided by @ref[6.4.144].]`,

  '54109': `@deva[नपुंसकान्नस्तद्धितार्थोत्तरपदे] — The affix @deva[टच्] comes optionally after an @deva[अव्ययीभाव] ending in a neuter word whose final syllable is @deva[अन्].

Examples:
| Analysis | With टच् | Without |
|----------|----------|---------|
| near the skin | @deva[प्रतिचर्मम्] | @deva[प्रतिचर्म] |
| upon the skin | @deva[उपचर्मम्] | @deva[उपचर्म] |

This sūtra makes the affix optional where @ref[5.4.108] made it compulsory.`,

  '54110': `@deva[नद्याः पौर्णमास्याग्रहायण्याश्च] — The affix @deva[टच्] comes optionally after an @deva[अव्ययीभाव] ending in @deva[नदी], @deva[पौर्णमासी], or @deva[आग्रहायणि].

| Analysis | With टच् | Without |
|----------|----------|---------|
| near the river | @deva[उपनदम्] | @deva[उपनदि] |
| at full moon | @deva[उपपौर्णमासम्] | @deva[उपपौर्णमासि] |
| at Āgrahāyaṇī | @deva[उपाग्रहायणम्] | @deva[उपाग्रहायणि] |`,

  '54111': `@deva[झयो होऽन्यतरस्याम्] — The affix @deva[टच्] comes optionally after an @deva[अव्ययीभाव] ending in a @deva[झय्] (mute) consonant.

The pratyāhāra @deva[झय्] covers all mute consonants (stops).

| Analysis | With टच् | Without |
|----------|----------|---------|
| near the fuel | @deva[उपसमिधम्] | @deva[उपसमित्] |
| near the grinding stone | @deva[उपदृषदम्] | @deva[उपदृषत्] |`,

  '54112': `@deva[गिरेः सेनकस्य] — The affix @deva[टच्] comes after an @deva[अव्ययीभाव] ending in @deva[गिरि], according to Senaka.

| Analysis | With टच् | Without |
|----------|----------|---------|
| within the mountain | @deva[अन्तर्गिरम्] | @deva[अन्तर्गिरि] |
| near the mountain | @deva[उपगिरम्] | @deva[उपगिरि] |

@note[Senaka's name is mentioned for respect (@deva[पूजार्थ]), since the word "optionally" was already understood here.]`,

  '54113': `@deva[सक्थ्नोऽक्ष्णश्च षच् स्वाङ्गात्] — The affix @deva[षच्] comes after @deva[सक्थि] (thigh) and @deva[अक्षि] (eye) at the end of a @deva[बहुव्रीहि] denoting a body part.

Examples:
| Analysis | Compound |
|----------|----------|
| having long thighs | @deva[दीर्घसक्थः] |
| having beautiful eyes | @deva[कल्याणाक्षः] |
| having red eyes | @deva[लोहिताक्षः] |
| having large eyes | @deva[विशालाक्षः] |

Why @deva[षच्] instead of @deva[टच्]? For accent. The @deva[ष्] triggers @deva[ङीष्] in feminine (@ref[4.1.41]): @deva[दीर्घसक्थी] (f.).

Why "body part"? Not for other objects: @deva[दीर्घसक्थि शकटम्] (a cart with long axle-pins).`,

  '54114': `@deva[अङ्गुलेर्दारुणि] — The affix @deva[षच्] comes after @deva[अङ्गुलि] (finger) at the end of a @deva[बहुव्रीहि] when the compound means "a piece of wood."

Examples:
- @deva[द्व्यंगुलंदारु] — two-finger-length wood
- @deva[त्र्यंगुलंदारु] — three-finger-length wood
- @deva[पंचांगुलम्] — wooden fork shaped like fingers (for scattering grain)

Why "in a bahuvrīhi"? In tatpuruṣa by @ref[5.4.86]: @deva[द्व्यंगुलयष्टिः] (a rod two fingers in measure).

Why "meaning wood"? Not here: @deva[पंचांगुलिर्हस्तः] (a five-fingered hand).`,

  '54115': `@deva[द्वित्रिभ्यां मूर्ध्नः षः] — The affix @deva[ष] comes after @deva[मूर्धन्] (head) when preceded by @deva[द्वि] or @deva[त्रि] in a @deva[बहुव्रीहि].

Examples:
- @deva[द्विमूर्धः] — two-headed
- @deva[त्रिमूर्धः] — three-headed

Why only @deva[द्वि] and @deva[त्रि]? Otherwise: @deva[उच्चैर्मूर्धा] (high-headed).

@note[The feminine is formed by @deva[ङीष्], and accent follows @ref[6.2.197].]`,

  '54116': `@deva[पूरण्याः प्रमाण्याश्चाप्] — The affix @deva[अप्] comes after a @deva[बहुव्रीहि] ending in a feminine ordinal numeral or in @deva[प्रमाणी] (authority).

Examples:
| Analysis | Compound |
|----------|----------|
| nights whose fifth is auspicious | @deva[कल्याणीपंचमा रात्रयः] |
| householders having a woman as authority | @deva[स्त्रीप्रमाणाः कुटुम्बिनः] |

Vārtika: The affix applies when the ordinal is the principal member. Therefore not: @deva[कल्याणपंचमीकः पक्षः] (a fortnight in which the fifth is auspicious).`,

  '54117': `@deva[अन्तर्बहिर्भ्यां लोम्नः] — The affix @deva[अप्] comes after @deva[लोमन्] (hair) when preceded by @deva[अन्तर्] or @deva[बहिस्] in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound | Meaning |
|----------|----------|---------|
| hair inside | @deva[अन्तर्लोमः प्रावारः] | cloak with hairy side inside |
| hair outside | @deva[बहिर्लोमः पटः] | cloth with hairy side outside |`,

  '54118': `@deva[नासिकाया नसंज्ञायां स्थूलादिभ्योऽच्] — The affix @deva[अच्] comes after @deva[नासिका] in a @deva[बहुव्रीहि] that is a name, with @deva[नस्] substituted for @deva[नासिका], but not after @deva[स्थूल].

Examples (names):
| Analysis | Compound |
|----------|----------|
| wood-like nose | @deva[द्रुणसः] |
| leather-like nose | @deva[वाद्ध्रीणसः] |
| cow-like nose | @deva[गोनसः] |

Why "name"? Otherwise: @deva[तुंगनासिकः] (high-nosed).

Why not after @deva[स्थूल]? @deva[स्थूलनासिको वराह] (thick-nosed boar).

Vārtika: After @deva[खुर] and @deva[खर], @deva[मस्] is substituted for @deva[नासिका] without affix: @deva[खुरणाः], @deva[खरणाः]. Optionally with @deva[अच्]: @deva[खुरणसः], @deva[खरणसः].`,

  '54119': `@deva[उपसर्गाच्च] — The affix @deva[अच्] also comes after @deva[नासिका] when an @deva[उपसर्ग] (preverb) precedes, with @deva[नस्] substituted.

This rule applies when the compound is not a name (unlike the previous sūtra).

Examples:
| Analysis | Compound |
|----------|----------|
| raised nose | @deva[उन्नसः] |
| prominent nose | @deva[प्रणसः] |

@note[@deva[न] changes to @deva[ण] by @ref[8.4.28].]

Vārtika: When @deva[वि] precedes, @deva[ग्र] is substituted: @deva[विगतानासिकाऽस्य] = @deva[विग्रः] or @deva[विख्यः].`,

  '54120': `@deva[सुप्रातादयोऽच्] — The following @deva[बहुव्रीहि] compounds are irregularly formed with @deva[अच्]:

| Compound | Analysis |
|----------|----------|
| @deva[सुप्रातः] | @deva[शोभनं प्रातरस्य] — having good morning |
| @deva[सुश्वः] | @deva[शोभनं श्वोऽस्य] — having good morrow |
| @deva[सुदिवः] | @deva[शोभनं दिवाऽस्य] — having good day |
| @deva[शारिकुक्षः] | @deva[शारेरिव कुक्षिरस्य] — having belly like a śāri bird |
| @deva[चतुरश्रः] | @deva[चतस्रोऽश्रयोऽस्य] — having four corners |
| @deva[एणीपदः] | @deva[एण्या इव पादावस्य] — having feet like a doe |
| @deva[अजपदः] | having goat-like feet |
| @deva[प्रोष्ठपदः] | @deva[प्रोष्ठो गौः, तस्येव पादावस्य] — having feet like a proṣṭha ox |

@note[In some compounds, the @deva[टि] (final syllable) is elided.]`,

  '54121': `@deva[नञोदुःसोर्हलिसक्थ्योर्वा] — The affix @deva[अच्] comes optionally after @deva[हलि] (plough) and @deva[सक्थि] (thigh) in a @deva[बहुव्रीहि] when preceded by @deva[नञ्] (negative), @deva[दुस्], or @deva[सु].

| First member | With अच् | Without |
|--------------|----------|---------|
| @deva[अ] | @deva[अहलः] | @deva[अहलिः] |
| @deva[दुर्] | @deva[दुर्हलः] | @deva[दुर्हलिः] |
| @deva[सु] | @deva[सुहलः] | @deva[सुहलिः] |
| @deva[अ] | @deva[असक्थः] | @deva[असक्थिः] |
| @deva[दुः] | @deva[दुःसक्थः] | @deva[दुःसक्थिः] |

@note[Some read the text as @deva[हलिशक्त्योः], giving forms like @deva[अशक्तः]/अशक्तिः].]`,

  '54122': `@deva[नित्यं प्रजामेधयोः] — The affix @deva[असिच्] (@deva[अस्]) comes invariably after @deva[प्रजा] and @deva[मेधा] in a @deva[बहुव्रीहि] when preceded by @deva[नञ्], @deva[दुस्], or @deva[सु].

Examples:
| First member | @deva[प्रजा] | @deva[मेधा] |
|--------------|-------------|-------------|
| @deva[अ] | @deva[अप्रजाः] → nom. @deva[अप्रजा] | @deva[अमेधाः] → @deva[अमेधा] |
| @deva[दुस्] | @deva[दुष्प्रजा] | @deva[दुर्मेधा] |
| @deva[सु] | @deva[सुप्रजा] | @deva[सुमेधा] |

Why @deva[नित्यम्]?
1. The optionality of the previous sūtra doesn't apply here
2. The affix comes even with other prefixes: @deva[अल्पमेधसः]`,

  '54123': `@deva[बहुप्रजास्छन्दसि] — The form @deva[बहुप्रजास्] is valid in Vedic.

Vedic usage: @deva[बहुप्रजा निर्ऋतिमाविवेश]

In secular Sanskrit, the form is @deva[बहुप्रजः]:
- @deva[बहुप्रजो ब्राह्मणः] — a Brāhmaṇa with many offspring`,

  '54124': `@deva[केवलादेकादधर्मान्] — The affix @deva[अनिच्] (@deva[अन्]) comes after @deva[धर्म] in a @deva[बहुव्रीहि] when the first member is a single word (not itself a compound).

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[कल्याणो धर्मोऽस्य] | @deva[कल्याणधर्मा] |
| having dear dharma | @deva[प्रियधर्मा] |

Why @deva[केवलात्]? When the first member is a compound, no affix: @deva[परमः स्वो धर्मोऽस्य] = @deva[परमस्वधर्मः].

The Kaumudī allows compound first members if they function as a single unit: @deva[अनुच्छित्तिधर्मा] (having the nature of non-destruction).`,

  '54125': `@deva[सुहरिततृणसोमेभ्यो जम्भन्] — The word @deva[जम्भन्] (food/tooth) stands at the end of a @deva[बहुव्रीहि] when preceded by @deva[सु], @deva[हरित], @deva[तृण], or @deva[सोम].

@deva[जम्भन्] has already taken the irregular samāsānta affix @deva[अम्].

Examples:
| Analysis | Compound |
|----------|----------|
| good food/teeth | @deva[सुजम्भा] |
| green food | @deva[हरितजम्भा] |
| grass as food | @deva[तृणजम्भा] |
| soma as food | @deva[सोमजम्भा] |

Without these prefixes: @deva[पतितजम्भः] (fallen teeth).`,

  '54126': `@deva[लुब्धे दक्षिणेर्मन्] — The form @deva[दक्षिणेर्मन्] is an irregular @deva[बहुव्रीहि] used in connection with a hunter.

@deva[लुब्ध] means @deva[व्याध] (fowler, hunter). @deva[ईर्मम्] means "wound."

Example:
- @deva[दक्षिणेर्मा मृगः] — a stag wounded on the right flank by the hunter

When not referring to a hunter: @deva[दक्षिणेर्मम् शकटम्] (a cart wounded on the right).`,

  '54127': `@deva[व्यर्थे चेच्] — The affix @deva[इच्] comes after a @deva[बहुव्रीहि] denoting reciprocal action.

Such compounds are formed by @ref[2.2.27].

Examples:
| Compound | Meaning |
|----------|---------|
| @deva[केशाकेशि] | seizing each other by the hair |
| @deva[कचाकचि] | hair against hair |
| @deva[मुसलामुसलि] | club against club |
| @deva[दण्डादण्डि] | stick against stick |

@note[This affix also forms avyayībhāva compounds, as it appears in the @deva[तिष्ठद्गु] list (@ref[2.1.17]).]`,

  '54128': `@deva[द्विदण्ड्यादिभ्यः] — The affix @deva[इच्] is added to form the @deva[द्विदण्डि]-class words.

These words are used in fixed senses:
| Compound | Usage |
|----------|-------|
| @deva[द्विदण्डि प्रहरति] | strikes with two sticks |
| @deva[द्विमुसलि प्रहरति] | strikes with two clubs |
| @deva[उभाञ्जलि] | with both hands cupped |
| @deva[उभयाहस्ति] | with both hands |
| @deva[एकपदि] | on one foot |

But not here: @deva[द्विदण्डा शाला] (a hall with two pillars).

Some words in this class are tatpuruṣa:
- @deva[निकुच्य कर्णौ धावति] = @deva[निकुच्यकर्णि धावति] (runs with ears pricked)

@deva[द्विदण्ड्यादि] list includes: @deva[द्विदण्डि], @deva[द्विमुसलि], @deva[उभाञ्जलि], @deva[उभयाञ्जलि], @deva[उभादन्ति], @deva[उभयादन्ति], @deva[उभाहस्ति], @deva[उभयाहस्ति], @deva[उभाकर्णि], @deva[उभयाकर्णि], @deva[उभापाणि], @deva[उभयापाणि], @deva[उभाबाहु], @deva[उभयाबाहु], @deva[एकपदि]...`,

  '54129': `@deva[प्रसमोर्जानुनो ज्ञुः] — After @deva[प्र] and @deva[सम्], @deva[ज्ञु] is substituted for @deva[जानु] (knee) in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[प्रकृष्टे जानुनी अस्य] | @deva[प्रज्ञुः] (having prominent knees) |
| @deva[संगते जानुनी अस्य] | @deva[संज्ञुः] (having joined knees) |`,

  '54130': `@deva[ऊर्ध्वाद्वा] — The substitution of @deva[ज्ञु] for @deva[जानु] is optional when @deva[ऊर्ध्व] precedes.

| Analysis | With substitution | Without |
|----------|-------------------|---------|
| having upraised knees | @deva[ऊर्ध्वज्ञुः] | @deva[ऊर्ध्वजानुः] |`,

  '54131': `@deva[ऊधसोऽनङ्] — The affix @deva[अनङ्] is substituted for the final of @deva[ऊधस्] (udder) in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[कुण्डमिव ऊधोऽस्याः] | @deva[कुण्डोध्नी] (pot-uddered) |
| @deva[घटमिव ऊधोऽस्याः] | @deva[घटोध्नी] (jar-uddered) |

Derivation:
@deva[ऊधस्] + @deva[अन्] = @deva[ऊधन्] (by @ref[6.4.148])
@deva[ऊधन्] + @deva[ङीष्] = @deva[ऊध्नी] (@deva[अ] elided by @ref[6.4.134])

@note[These forms are always feminine. In masculine: @deva[महोधाः पर्जन्यः].]`,

  '54132': `@deva[धनुषश्च] — The affix @deva[अनङ्] is also substituted for the final of @deva[धनुस्] (bow) in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[शार्ङ्गे धनुरस्य] | @deva[शार्ङ्गधन्वा] |
| having the Gāṇḍīva bow | @deva[गाण्डीवधन्वा] |
| having a flower bow | @deva[पुष्पधन्वा] |
| having bow strung | @deva[अधिज्यधन्वा] |`,

  '54133': `@deva[संज्ञायां वा] — The substitution of @deva[अनङ्] for @deva[धनुस्] is optional when the compound is a name.

This introduces optionality where the previous sūtra made it obligatory.

| Analysis | With अनङ् | Without |
|----------|-----------|---------|
| @deva[शतं धनूंषि यस्य] (name) | @deva[शतधन्वा] | @deva[शतधनुः] |
| @deva[दृढं धनुरस्य] (name) | @deva[दृढधन्वा] | @deva[दृढधनुः] |`,

  '54134': `@deva[जायाया निङ्] — The affix @deva[निङ्] is substituted for the final of @deva[जाया] (wife) in a @deva[बहुव्रीहि].

Derivation:
@deva[जाया] + @deva[निङ्] = @deva[जाय्नि] → @deva[जानि] (@deva[य्] elided by @ref[6.1.66])

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[युवतिर्जाया यस्य] | @deva[युवजानिः] (having a young wife) |
| @deva[वृद्धा जाया यस्य] | @deva[वृद्धजानिः] (having an old wife) |

@note[There is also puṃvadbhāva (treatment as masculine).]`,

  '54135': `@deva[उत्पूतिसुसुरभिभ्यो गन्धस्येः] — The final @deva[अ] of @deva[गन्ध] (smell) is replaced by @deva[इ] when preceded by @deva[उत्], @deva[पूति], @deva[सु], or @deva[सुरभि] in a @deva[बहुव्रीहि].

Examples:
| Prefix | Compound |
|--------|----------|
| @deva[उत्] | @deva[उद्गन्धिः] (having risen smell) |
| @deva[पूति] | @deva[पूतिगन्धिः] (having foul smell) |
| @deva[सु] | @deva[सुगन्धिः] (having good smell) |
| @deva[सुरभि] | @deva[सुरभिगन्धिः] (having fragrant smell) |

Why only these? With others: @deva[तीव्रगन्धा वातः] (wind with strong smell).

Vārtika: The rule applies when @deva[गन्ध] is used as an attribute, not a substance. Therefore not: @deva[सुगन्ध आपणिकः] (a shopkeeper selling perfumes).`,

  '54136': `@deva[आत्मनश्चैकस्य] — The @deva[इ] substitution for the final @deva[अ] of @deva[गन्ध] also occurs in a @deva[बहुव्रीहि] when @deva[गन्ध] means "a little."

The word @deva[गन्धमात्र] or "mere trace" indicates minimal amount.

Example: @deva[लवणगन्धि] — having just a trace of salt`,

  '54137': `@deva[पादोऽष्टमभागे] — The word @deva[पाद] in a @deva[बहुव्रीहि] optionally takes the @deva[इ] substitution when meaning "one-eighth."

@deva[पाद] literally means "foot" or "quarter."

| Meaning | With इ | Without |
|---------|--------|---------|
| eighth-part measure | @deva[प्रस्थपादि] | @deva[प्रस्थपादः] |

@note[The @deva[इ] substitution applies to the meaning of eighth-part, not to all uses of @deva[पाद].]`,

  '54138': `@deva[सुस्नातव्रतस्नातत्रिककुदुत्तमाश्वविद्धोपाच्छन्दसि] — In Vedic, the following forms are valid:

| Compound | Meaning |
|----------|---------|
| @deva[सुस्नात] | well-bathed |
| @deva[व्रतस्नात] | bathed after vow completion |
| @deva[त्रिककुद्] | three-humped |
| @deva[उत्तमाश्व] | having best horses |
| @deva[विद्ध] | pierced |
| @deva[उप] | near |

These are irregular Vedic forms in @deva[बहुव्रीहि] compounds.`,

  '54139': `@deva[एकत्रयान्तानि च] — In Vedic, compounds ending in @deva[एक] (one), @deva[द्वि] (two), or @deva[त्रि] (three) are valid @deva[बहुव्रीहि] forms.

These refer to compounds where the numerals appear at the end.`,

  '54140': `@deva[रायो हलादेरम्] — The affix @deva[अम्] comes after @deva[राय्] (wealth) when it follows a word beginning with a consonant in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[बहवो रायोऽस्य] | @deva[बहुरायः] (having much wealth) |
| @deva[चित्रा रायोऽस्य] | @deva[चित्ररायः] (having wonderful wealth) |

Why "beginning with a consonant"? When the first member begins with a vowel, no affix: @deva[अल्पराः] (having little wealth).`,

  '54141': `@deva[संख्यासोर्द्वन्द्वे वयसि] — When denoting age, @deva[दत्] is substituted for @deva[दन्त] (tooth) in a @deva[बहुव्रीहि] when preceded by a numeral or @deva[सु].

The @deva[ऋ] in @deva[दतृ] is indicatory, triggering @ref[7.1.70] (nasal insertion) and @ref[4.1.6].

Examples:
| Analysis | Compound | Meaning |
|----------|----------|---------|
| @deva[द्वौ दन्तावस्य] | @deva[द्विदन्] | child with two teeth (age) |
| three teeth | @deva[त्रिदन्] | child with three teeth |
| beautiful teeth fully grown | @deva[सुदन्] कुमारः | boy with all teeth |

Why "denoting age"? Not for other meanings: @deva[द्विदन्तः कुंजरः] (two-tusked elephant).`,

  '54142': `@deva[छन्दसि च] — In Vedic, @deva[दत्] is substituted for @deva[दन्त] in @deva[बहुव्रीहि] compounds (regardless of meaning).

Vedic examples:
- @deva[पत्रदत्] — leaf-toothed
- @deva[उभयदत्] — having teeth on both sides`,

  '54143': `@deva[स्त्रियां संज्ञायां दत्] — When denoting a name, @deva[दत्] is substituted for @deva[दन्त] in the feminine.

Examples:
- @deva[अयोदती] — iron-toothed (name)
- @deva[फालदती] — plough-blade-toothed (name)

Why "name"? Not for ordinary adjectives: @deva[समदन्ती], @deva[स्निग्धदन्ती].`,

  '54144': `@deva[श्यावारोकाभ्यां वा] — The substitution of @deva[दत्] for @deva[दन्त] is optional when preceded by @deva[श्याव] (dark) or @deva[अरोक] (non-luminous).

| Prefix | With दत् | Without |
|--------|----------|---------|
| @deva[श्याव] | @deva[श्यावदन्] | @deva[श्यावदन्तः] |
| @deva[अरोक] | @deva[अरोकदन्] | @deva[अरोकदन्तः] |

@note[The word @deva[संज्ञायाम्] from the previous sūtra applies here too. When not a name: @deva[श्यावदन्तः] only.]`,

  '54145': `@deva[अग्रान्ताच्छुद्धशुभ्रवराहेभ्यश्च] — The substitution of @deva[दत्] for @deva[दन्त] is optional after words ending in @deva[अग्र], or after @deva[शुद्ध], @deva[शुभ्र], and @deva[वराह].

| First member | With दत् | Without |
|--------------|----------|---------|
| @deva[कुड्मलाग्र] | @deva[कुड्मलाग्रदन्] | @deva[कुड्मलाग्रदन्तः] |
| @deva[शुद्ध] | @deva[शुद्धदन्] | @deva[शुद्धदन्तः] |
| @deva[शुभ्र] | @deva[शुभ्रदन्] | @deva[शुभ्रदन्तः] |
| @deva[वराह] | @deva[वराहदन्] | @deva[वराहदन्तः] |

The @deva[च] in the sūtra indicates extension to other cases:
@deva[अहिदन्]/अहिदन्तः], @deva[मूषिकदन्]/मूषिकदन्तः], @deva[गर्दभदन्]/गर्दभदन्तः], @deva[शिखरदन्]/शिखरदन्तः].`,

  '54146': `@deva[ककुदोऽवस्थायाम्] — The final letter of @deva[ककुद] (hump) is dropped in a @deva[बहुव्रीहि] when denoting age or condition of animals.

@deva[अवस्था] = changes undergone by lapse of time (age).

| Condition | Compound | Meaning |
|-----------|----------|---------|
| hump not grown | @deva[असंजातककुत्] | young animal |
| full hump | @deva[पूर्णककुत्] | middle-aged |
| raised hump | @deva[उन्नतककुत्] | old animal |
| thick hump | @deva[स्थूलककुत्] | strong |
| rod-like hump | @deva[यष्टिककुत्] | neither too thick nor thin |

Why "condition"? Otherwise: @deva[श्वेतककुदः] (white-humped).`,

  '54147': `@deva[त्रिककुत्पर्वतस्य] — The @deva[बहुव्रीहि] @deva[त्रिककुत्] (formed with final @deva[अ] elision) is the name of a mountain.

Analysis: @deva[त्रीणि ककुदान्यस्य] = three peaks (shaped like humps).

This is the name of a specific three-peaked hill, not any hill with three peaks. For non-names: @deva[त्रिककुदः].`,

  '54148': `@deva[उद्विभ्यां काकुदात्] — After @deva[उत्] and @deva[वि], the final of @deva[काकुद] (palate) is elided in a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| @deva[उद्गतं काकुदमस्य] | @deva[उत्काकुत्] (raised palate) |
| @deva[विगतं काकुदमस्य] | @deva[विकाकुत्] (distorted palate) |`,

  '54149': `@deva[पूर्णाद्वा] — After @deva[पूर्ण], the final of @deva[काकुद] is optionally elided in a @deva[बहुव्रीहि].

| Analysis | With elision | Without |
|----------|--------------|---------|
| @deva[पूर्णं काकुदमस्य] | @deva[पूर्णकाकुत्] | @deva[पूर्णकाकुदः] |`,

  '54150': `@deva[सुहृद्दुर्हृदौ मित्रामित्रयोः] — The forms @deva[सुहृत्] and @deva[दुर्हृत्] are irregular @deva[बहुव्रीहि] compounds meaning "friend" and "foe."

Derivation:
- @deva[सुहृत्] from @deva[सु] + @deva[हृदय] (one whose heart is well-disposed)
- @deva[दुर्हृत्] from @deva[दुर्] + @deva[हृदय] (one whose heart is ill-disposed)

The @deva[अय] of @deva[हृदय] is elided.

Why only for friend/foe? In other senses:
- @deva[सुहृदयः कारुणिकः] — the compassionate one
- @deva[दुर्हृदयश्चोरः] — the evil-hearted thief`,

  '54151': `@deva[उरसादिभ्यः कप्] — The affix @deva[कप्] comes after @deva[उरस्]-class words at the end of a @deva[बहुव्रीहि].

Examples:
| Analysis | Compound |
|----------|----------|
| having broad chest | @deva[व्यूढोरस्कः] |
| having beloved ghee | @deva[प्रियसर्पिष्कः] |
| having removed shoes | @deva[अवमुक्तोपानत्कः] |

@deva[उरसादि] list (12 words):
@deva[उरस्], @deva[सर्पिस्], @deva[उपानह्], @deva[पुमान्], @deva[अनड्वान्], @deva[पयस्], @deva[नौः], @deva[लक्ष्मीः], @deva[दधि], @deva[मधु], @deva[शालि], @deva[अर्थ] (after @deva[नञ्], as @deva[अनर्थकः]).

@note[Words like @deva[पुमान्], @deva[अनड्वान्], etc. are listed in nominative singular because @deva[कप्] applies to singular only. For dual/plural, @deva[कप्] is optional by @ref[5.4.154].]`,

  '54152': `@deva[इनो यत्स्त्रियाम्] — The affix @deva[कप्] is added to a @deva[बहुव्रीहि] ending in @deva[इन्] when a feminine word is denoted.

Examples:
| Analysis | Compound |
|----------|----------|
| hall having many staff-bearers | @deva[बहुदण्डिका शाला] |
| city having many lords | @deva[बहुस्वामिका नगरी] |
| assembly having many orators | @deva[बहुवाग्मिका सभा] |

Why "feminine"? For masculine: @deva[बहुदण्डी राजा] or optionally @deva[बहुदण्डिकः] (by @ref[5.4.154]).`,

  '54153': `@deva[नदीनां ऋतश्च] — The affix @deva[कप्] is added to a @deva[बहुव्रीहि] ending in feminine @deva[नदी]-words (long @deva[ई] or @deva[ऊ]) or in short @deva[ऋ].

@deva[नदी] is defined in @ref[1.4.3].

Examples:
| Analysis | Compound |
|----------|----------|
| region having many maidens | @deva[बहुकुमारीको देशः] |
| having many brahmabandhus | @deva[बहुब्रह्मबन्धूकः] |
| having many agents | @deva[बहुकर्तृकः] |

The @deva[त] in @deva[ऋत्] is euphonic.`,

  '54154': `@deva[शेषाद्वा] — After all other @deva[बहुव्रीहि] compounds not covered by the foregoing rules, the affix @deva[कप्] may optionally be added.

Examples:
| With कप् | Without | Alternative |
|----------|---------|-------------|
| @deva[बहुखट्वकः] | @deva[बहुखट्वः] | @deva[बहुखट्वाकः] |
| @deva[बहुमालकः] | @deva[बहुमालः] | @deva[बहुमालाकः] |
| @deva[बहुवीणकः] | @deva[बहुवीणः] | @deva[बहुवीणाकः] |

@note[The word @deva[शेष] denotes all bahuvrīhis not covered by special rules above.]

Special meanings require @deva[अ] by @ref[5.4.74]: @deva[अनृचः] (boy), @deva[बह्वृचः] (a charaṇa).`,

  '54155': `@deva[संज्ञायां न] — The affix @deva[कप्] does not come after a @deva[बहुव्रीहि] when a name is meant.

This debars @deva[कप्] ordained by the previous rule.

Examples:
- @deva[विश्वेदेवा अस्य] = @deva[विश्वदेवः] (not *@deva[विश्वदेवकः])
- @deva[विश्वयशाः] — all-famous (name)`,

  '54156': `@deva[ईयसश्च] — The affix @deva[कप्] does not come after a @deva[बहुव्रीहि] ending in the comparative affix @deva[ईयस्].

This debars all previous rules about @deva[कप्].

Examples:
- @deva[बहवः श्रेयांसोऽस्य] = @deva[बहुश्रेयान्] (not *@deva[बहुश्रेयस्कः])
- @deva[बह्व्यः श्रेयस्योऽस्य] = @deva[बहुश्रेयसी] (not *@deva[बहुश्रेयसीकः])

@note[The long final @deva[ई] is not shortened by @ref[1.2.48] because it's treated as masculine (@deva[ईयसो बहुव्रीहौ पुंवत्]).]`,

  '54157': `@deva[वन्दिते भ्रातरि] — The affix @deva[कप्] does not come after a @deva[बहुव्रीहि] ending in @deva[भ्रातृ] when it means "praised" or "respected."

Example:
- @deva[शोभना भ्राताऽस्य] = @deva[सुभ्राता] (one having a good brother)

Why "when meaning praised"? In other contexts:
- @deva[मूर्खभ्रातृकः] — having a foolish brother
- @deva[दुष्टभ्रातृकः] — having a wicked brother`,

  '54158': `@deva[ऋत्विक्छन्दसि] — In Vedic, the affix @deva[कप्] does not come after a @deva[बहुव्रीहि] ending in short @deva[ऋ].

Vedic examples:
- @deva[हतमाता] — whose mother is slain
- @deva[हतपिता] — whose father is slain
- @deva[हतस्वसा] — whose sister is slain
- @deva[सुहोता] — having good invoker`,

  '54159': `@deva[नाड्यास्तन्त्र्याश्चाङ्गस्य] — The affix @deva[कप्] does not come after @deva[नाडी] (tube) and @deva[तन्त्री] (artery) at the end of a @deva[बहुव्रीहि] when they mean organs of the body.

Examples:
| Analysis | Compound |
|----------|----------|
| body having many tubes | @deva[बहुनाडिः कायः] |
| neck having many arteries | @deva[बहुतन्त्रीर्ग्रीवा] |

Why "body parts"? For other meanings:
- @deva[बहुनाडीकः स्तम्भः] — pillar with many tubes
- @deva[बहुतन्त्रीका वीणा] — vīṇā with many strings

@note[The long @deva[ई] of @deva[नाडी] is shortened as upasarjana by @ref[1.2.48], but @deva[ई] of @deva[तन्त्री] is not shortened as it's a kṛt affix, not feminine.]`,

  '54160': `@deva[निष्प्रवाणिः] — The word @deva[निष्प्रवाणि] is irregularly formed without @deva[कप्] though the last word is a @deva[नदी]-word.

@deva[प्रवाणी] = shuttle (instrument of weaving, from @deva[वि] "to weave" + @deva[ल्युट्]).

Analysis: @deva[निर्गता प्रवाणी अस्य] = from which the shuttle has been removed.

Examples:
- @deva[निष्प्रवाणिः पटः] — fresh cloth from the loom
- @deva[निष्प्रवाणिः कम्बलः] — unbleached blanket

@note[The @deva[न] changes to @deva[ण] by @ref[8.4.29].]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.4.101-160). Total: ${Object.keys(vasu).length}`);
