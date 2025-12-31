#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "71051": `@deva[अश्वक्षीरवृषलवणानामात्मप्रीतौ क्यचि] — The augment @deva[असुक्] is added after @deva[अश्व], @deva[क्षीर], @deva[वृष], and @deva[लवण] before the denominative affix @deva[क्यच्] when expressing the subject's delight in these things.

| Base | Denominative | Meaning |
|------|--------------|---------|
| @deva[अश्व] | @deva[अश्वस्यति] | "The mare delights in the stallion" |
| @deva[क्षीर] | @deva[क्षीरस्यति] | "The boy craves milk" |
| @deva[वृष] | @deva[वृषस्यति] | "The cow desires the bull" |
| @deva[लवण] | @deva[लवणस्यति] | "The camel craves salt" |

Without the sense of delight: @deva[अश्वीयति], @deva[क्षीरीयति].

Vārttika: For @deva[अश्व]/vṛṣa, the meaning is sexual desire; for @deva[क्षीर]/lavaṇa, intense craving.`,

  "71052": `@deva[आमि सर्वनाम्नः सुट्] — After a pronominal stem ending in @deva[अ] or @deva[आ], the genitive plural ending @deva[आम्] receives the augment @deva[स्] at the beginning.

| Pronoun | Genitive pl. |
|---------|--------------|
| @deva[सर्व] | @deva[सर्वेषाम्] |
| @deva[यद्] | @deva[येषाम्] |
| @deva[तद्] | @deva[तेषाम्] |
| @deva[सर्वा] (f.) | @deva[सर्वासाम्] |

But @deva[भवताम्] (from @deva[भवत्], not ending in @deva[अ]).`,

  "71053": `@deva[त्रेस्त्रयः] — @deva[त्रय] is substituted for @deva[त्रि] before the genitive plural ending.

@deva[त्रि + आम्] → @deva[त्रयाणाम्]

Vedic alternative: @deva[त्रीणाम्] (as in @deva[त्रीणाम् अपि समुद्राणाम्]).`,

  "71054": `@deva[ह्रस्वनद्यापो नुट्] — The augment @deva[नुट्] (= @deva[न्]) is added before the genitive plural @deva[आम्] after:
1. Stems ending in a short vowel
2. @deva[नदी]-stems
3. Stems ending in feminine @deva[आप्]

| Stem type | Example | Genitive pl. |
|-----------|---------|--------------|
| Short vowel | @deva[वृक्ष] | @deva[वृक्षाणाम्] |
| | @deva[अग्नि] | @deva[अग्नीणाम्] |
| | @deva[वायु] | @deva[वायूनाम्] |
| @deva[नदी] | @deva[कुमारी] | @deva[कुमारीणाम्] |
| @deva[आप्] | @deva[खट्वा] | @deva[खट्वानाम्] |

The short final vowel is lengthened by @ref[6.4.3].`,

  "71055": `@deva[षट्चतुर्भ्यश्च] — The augment @deva[नुट्] is added before the genitive plural @deva[आम्] after @deva[षष्]-numerals and @deva[चतुर्].

@deva[षष् + आम्] → @deva[षण्णाम्]
@deva[पञ्चन् + आम्] → @deva[पञ्चानाम्]
@deva[सप्तन् + आम्] → @deva[सप्तानाम्]
@deva[चतुर् + आम्] → @deva[चतुर्णाम्]

In compounds where the numeral is secondary (@deva[उपसर्जन]): @deva[प्रियषषाम्], @deva[प्रियचतुराम्].`,

  "71056": `@deva[श्रीग्रामण्योश्छन्दसि] — In the Vedas, @deva[श्री] and @deva[ग्रामणी] receive the @deva[नुट्] augment before genitive plural @deva[आम्].

Vedic: @deva[श्रीणाम् उदारो धरुणो रयीणाम्]
@deva[अन्यत्र सूतग्रामणीनाम्]`,

  "71057": `@deva[ऋचि गोः पादसमाप्तौ] — After @deva[गो], the @deva[नुट्] augment comes before genitive plural @deva[आम्] at the end of a @deva[ऋच्] (Vedic verse).

At verse end: @deva[विद्माहि त्वा सत्पतिं शूरगोनाम्]
At verse beginning: @deva[गवां गोत्रम् उदसृजो यद् अङ्गिरः] (no @deva[नुट्])`,

  "71058": `@deva[इदितो नुम् धातोः] — The augment @deva[नुम्] is inserted after the vowel of a root that has indicatory @deva[इ] in the Dhātupāṭha.

@deva[कुडि] → @deva[कुण्ड्] → @deva[कुण्डितृ], @deva[कुण्डितुम्]
@deva[हुडि] → @deva[हुण्ड्] → @deva[हुण्डितृ], @deva[हुण्डितुम्]

But @deva[पचति], @deva[पठति] (no indicatory @deva[इ]).

The @deva[नुम्] is added from the root's inception for grammatical operations.`,

  "71059": `@deva[शे मुचादीनाम्] — Before the @deva[श] vikaraṇa of the 6th conjugation (tudādi), @deva[नुम्] is added after the vowel of @deva[मुच्]-class roots.

| Root | With @deva[श] | Without @deva[श] |
|------|--------------|-----------------|
| @deva[मुच्] | @deva[मुञ्चति] | @deva[मोक्ता], @deva[मोक्तुम्] |
| @deva[लुप्] | @deva[लुम्पति] | @deva[लोप्ता] |
| @deva[विद्] | @deva[विन्दति] | @deva[वेत्ता] |
| @deva[सिच्] | @deva[सिञ्चति] | @deva[सेक्ता] |

Vārttika: @deva[तृम्फ्] etc. should also be included: @deva[तृम्फति], @deva[गुम्फति].`,

  "71060": `@deva[मस्जिनशोर्झलि] — The augment @deva[नुम्] is added after the vowel of @deva[मस्ज्] and @deva[नश्] before an affix beginning with a consonant other than a semivowel or nasal.

@deva[मस्ज् + तृच्] → @deva[मङ्क्ता]
@deva[मस्ज् + तुमुन्] → @deva[मङ्क्तुम्]
@deva[नश् + तृच्] → @deva[नंष्टा]

But before semivowel/nasal: @deva[मज्जनम्], @deva[मग्न].`,

  "71061": `@deva[रधजभोः शकि] — The augment @deva[नुम्] is added after the vowel of @deva[रध्] and @deva[जभ्] before affixes beginning with a consonant.

@deva[रध् + णिच्] → @deva[रन्धयति]
@deva[रध् + ण्वुल्] → @deva[रन्धकः]
@deva[जभ् + णिच्] → @deva[जम्भयति]
@deva[जभ् + ण्वुल्] → @deva[जम्भकः]

But before vowels: @deva[रद्धा], @deva[जभ्यम्].`,

  "71062": `@deva[इटो ऽत् रधेर्लिटि च] — @deva[नुम्] is not added to @deva[रध्] before an @deva[इट्]-augmented affix, except in the perfect (@deva[लिट्]).

Without @deva[नुम्]: @deva[रधिता], @deva[रधितुम्], @deva[रधितव्यम्]
With @deva[नुम्] (non-@deva[इट्]): @deva[रन्धनम्], @deva[रन्धकः]
In perfect (with @deva[इट्]): @deva[ररन्धिव], @deva[ररन्धिम]`,

  "71063": `@deva[रभो विशौ शपि लिटि च] — @deva[नुम्] is added to @deva[रभ्] "to begin" before consonant-initial affixes, except before @deva[शप्] vikaraṇa and @deva[लिट्] endings.

With @deva[नुम्]: @deva[आरम्भयति], @deva[आरम्भकः], @deva[आरम्भः]
Without @deva[नुम्] (in @deva[शप्]): @deva[आरभते]
Without @deva[नुम्] (in @deva[लिट्]): @deva[आरेभे]
Without @deva[नुम्] (before vowel): @deva[आरब्धा]`,

  "71064": `@deva[लभेश्च] — Similarly, @deva[लभ्] "to get" takes @deva[नुम्] before consonant-initial affixes, except in @deva[शप्] and @deva[लिट्].

With @deva[नुम्]: @deva[लम्भयति], @deva[लम्भकः]
Without @deva[नुम्] (in @deva[शप्]): @deva[लभते]
Without @deva[नुम्] (in @deva[लिट्]): @deva[लेभे]
Without @deva[नुम्] (before vowel): @deva[लब्धा]`,

  "71065": `@deva[आतो लभेर्यि] — @deva[नुम्] is added to @deva[लभ्] when preceded by @deva[आ] before an affix beginning with @deva[य].

@deva[आ + लभ् + ण्यत्] → @deva[आलम्भ्यः] (with @deva[ण्यत्] by @ref[3.1.124])

Without @deva[आ]: @deva[लभ्यः] (with @deva[यत्] by @ref[3.1.98]).`,

  "71066": `@deva[श्लाघोपलभ्योर्निमित्तहेतोः] — @deva[नुम्] is added to @deva[लभ्] preceded by @deva[उप] before @deva[य] when referring to something praiseworthy.

Praiseworthy: @deva[उपलम्भ्या भवता विद्या] "Knowledge obtainable by you"
Not praiseworthy: @deva[उपलभ्यम् अस्माद् वृषलात् किञ्चित्]`,

  "71067": `@deva[उपादिभ्यो लभेः खल्घञ्योः] — @deva[नुम्] is added to @deva[लभ्] when preceded by a preposition, before affixes @deva[खल्] and @deva[घञ्].

With preposition: @deva[ईषत्प्रलम्भः], @deva[सुप्रलम्भः], @deva[दुष्प्रलम्भः], @deva[प्रलम्भः]
Without preposition: @deva[ईषल्लभः], @deva[लाभः] (no @deva[नुम्])

This is a restrictive rule (@deva[नियम]).`,

  "71068": `@deva[न सुदुर्भ्यां केवलाभ्याम्] — @deva[नुम्] is not added when @deva[सु] or @deva[दुस्] alone (without another preposition) precedes @deva[लभ्] before @deva[खल्] and @deva[घञ्].

@deva[सु] or @deva[दुस्] alone: @deva[सुलभम्], @deva[दुर्लभम्], @deva[सुलाभः], @deva[दुर्लाभः]
With additional preposition: @deva[सुप्रलम्भः], @deva[दुष्प्रलम्भः]`,

  "71069": `@deva[अनुपसर्गाल्लभेश्चिण्णमुलोर्वा] — Without a preposition, @deva[नुम्] is optionally added to @deva[लभ्] before @deva[चिण्] (aorist) and @deva[णमुल्].

Optional: @deva[अलाभि] or @deva[अलम्भि]
@deva[लाभंलाभम्] or @deva[लम्भंलम्भम्]

With preposition (no option): @deva[प्रालम्भि], @deva[प्रलम्भम्]`,

  "71070": `@deva[उगिदचां सर्वनामस्थानेऽधातोः] — Affixes with indicatory @deva[उ], @deva[ऋ], or @deva[ऌ] (except roots), and the stem @deva[अञ्च्], receive @deva[नुम्] in the strong cases.

| Affix/Stem | Strong forms |
|------------|--------------|
| @deva[डवतुप्] (उगित्) | @deva[भवान्], @deva[भवन्तौ], @deva[भवन्तः] |
| @deva[ईयसुन्] (उगित्) | @deva[श्रेयान्], @deva[श्रेयांसौ], @deva[श्रेयांसः] |
| @deva[शतृ] (ऋगित्) | @deva[पचन्], @deva[पचन्तौ], @deva[पचन्तः] |
| @deva[अञ्च्] | @deva[प्राङ्], @deva[प्राञ्चौ], @deva[प्राञ्चः] |

But @deva[दृषत्], @deva[दृषदौ] (no indicatory vowel).`,

  "71071": `@deva[युजेरसमासे] — The stem @deva[युज्] receives @deva[नुम्] in the strong cases when not in a compound.

Not in compound: @deva[युङ्], @deva[युञ्जौ], @deva[युञ्जः]
In compound: @deva[अश्वयुक्], @deva[अश्वयुजौ], @deva[अश्वयुजः]

The root @deva[युज् समाधौ] (Divādi 68) is not meant here.`,

  "71072": `@deva[नपुंसकस्य झलचः] — A neuter stem ending in a consonant (other than a nasal or semivowel) or in a vowel receives @deva[नुम्] in the strong cases.

| Stem | Nom./Acc. pl. |
|------|---------------|
| @deva[यशस्] | @deva[यशांसि] |
| @deva[पयस्] | @deva[पयांसि] |
| @deva[कुण्ड] | @deva[कुण्डानि] |
| @deva[त्रपु] | @deva[त्रपूणि] |

But @deva[बहुपुरि], @deva[अहानि] (ending in semivowel/nasal).`,

  "71073": `@deva[इको ऽचि विभक्तौ] — A neuter stem ending in a simple vowel (except @deva[अ]) receives @deva[नुम्] before a case ending beginning with a vowel.

@deva[त्रपु + इन्] → @deva[त्रपुणा]
@deva[जतु + ए] → @deva[जतुने]
@deva[त्रपु + ई] → @deva[त्रपुणी]

Exception @deva[अ]-stems: @deva[कुण्डे], @deva[पीठे].

In vocative: @deva[हे त्रपो] or @deva[हे त्रपु] (no @deva[नुम्] since ending is elided).`,

  "71074": `@deva[तृतीयादिषु भाषितपुंस्कं पुंवद्गालवस्य] — According to Gālava, a neuter stem ending in a vowel (except @deva[अ]) that has a corresponding masculine form may optionally follow the masculine pattern in the instrumental and subsequent cases.

| Case | Neuter @deva[ग्रामणि] | Masculine-like |
|------|----------------------|----------------|
| Instr. sg. | @deva[ग्रामण्या] | @deva[ग्रामणिना] |
| Dat. sg. | @deva[ग्रामण्ये] | @deva[ग्रामणिने] |
| Gen. sg. | @deva[ग्रामण्यः] | @deva[ग्रामणिनः] |

Similarly @deva[शुचि] (neut.) may follow @deva[शुचि] (masc.).`,

  "71075": `@deva[अस्थिदधिसक्थ्यक्ष्णामनङुदात्तः] — Acute-accented @deva[अन्] (@deva[अनङ्]) replaces the final of @deva[अस्थि], @deva[दधि], @deva[सक्थि], and @deva[अक्षि] before vowel-initial endings of the instrumental and subsequent cases.

@deva[अस्थि + टा] → @deva[अस्थ्ना꣡]
@deva[दधि + ङे] → @deva[दध्ने꣡]
@deva[अक्षि + टा] → @deva[अक्ष्णा꣡]

The @deva[अ] of @deva[अन्] is elided by @ref[6.4.134], and the following ending becomes udātta by @ref[6.1.161].`,

  "71076": `@deva[छन्दस्यपि दृश्यते] — In the Vedas, @deva[अस्थि], @deva[दधि], @deva[सक्थि], and @deva[अक्षि] take @deva[अनङ्] in other cases as well.

Before consonant-initial endings: @deva[इन्द्रो दधीचो अस्थ꣡भिः]
In accusative: @deva[अस्थानि] (for @deva[अस्थान्युत्कृत्य जुहोति])
Before non-case affixes: @deva[अक्षण्व꣡ता लाङ्गलेन]`,

  "71077": `@deva[ईद्विभक्तौ द्विवचनस्य छन्दसि] — In the Vedas, acute @deva[ई] replaces the final of @deva[अस्थि], @deva[दधि], @deva[सक्थि], and @deva[अक्षि] before dual case endings.

Vedic: @deva[अक्षी꣡ ते इन्द्रपिङ्गले कपेरिव]
@deva[अक्षी꣡भ्याम् ते नासिकाभ्याम्]

The @deva[नुम्] augment is not added since this rule supersedes @ref[7.1.73].`,

  "71078": `@deva[नाभ्यस्ताच्छतुः] — The participle affix @deva[शतृ] does not take @deva[नुम्] after a reduplicated stem.

@deva[दद् + शतृ] → @deva[ददत्], @deva[ददतौ], @deva[ददतः] (not @deva[*ददन्त्])
@deva[जुह्व् + शतृ] → @deva[जुह्वत्], @deva[जुह्वतौ]
@deva[जागृ + शतृ] → @deva[जाग्रत्], @deva[जाग्रतौ]

This is an exception to @ref[7.1.70] for strong cases.`,

  "71079": `@deva[वानपुंसकस्य] — After a reduplicated stem, @deva[शतृ] optionally takes @deva[नुम्] in neuter nouns.

@deva[दद् + शतृ] (neut.) → @deva[ददति] or @deva[ददन्ति] @deva[कुलानि]
@deva[दध् + शतृ] (neut.) → @deva[दधति] or @deva[दधन्ति] @deva[कुलानि]`,

  "71080": `@deva[आतो वा शीनद्योः] — After a stem ending in @deva[अ] or @deva[आ], @deva[शतृ] optionally takes @deva[नुम्] before the neuter @deva[शी] ending and the feminine @deva[ई].

| Stem | Optional forms |
|------|----------------|
| @deva[तुद् + श + शतृ] | @deva[तुदती] or @deva[तुदन्ती] @deva[कुले] |
| @deva[तुद् + श + शतृ] (f.) | @deva[तुदती] or @deva[तुदन्ती] @deva[ब्राह्मणी] |
| @deva[या + शतृ] | @deva[याती] or @deva[यान्ती] |

But @deva[कुर्वती], @deva[सुन्वती] (not from @deva[अ]-stem).`,

  "71081": `@deva[शप्श्यनोर्नित्यम्] — After stems ending in @deva[शप्] or @deva[श्यन्] vikaraṇas, @deva[शतृ] always takes @deva[नुम्] before @deva[शी] and @deva[नदी].

@deva[पच् + शप् + शतृ] → @deva[पचन्ती कुले], @deva[पचन्ती ब्राह्मणी]
@deva[दिव् + श्यन् + शतृ] → @deva[दीव्यन्ती कुले], @deva[दीव्यन्ती ब्राह्मणी]

The word @deva[नित्यम्] stops the @deva[वा] (optionality) of the previous sūtra.`,

  "71082": `@deva[अनडुहः सौ] — @deva[अनडुह्] receives @deva[नुम्] before the nominative singular ending @deva[सु].

@deva[अनडुह्] + @deva[आम्] @ref[7.1.98] → @deva[अनड्वाह्] + @deva[नुम्] + @deva[सु] → @deva[अनड्वान्]
Vocative: @deva[हे अनड्वन्] (with @deva[अम्] by @ref[7.1.99])

The augments @deva[आम्]/@deva[अम्] and @deva[नुम्] both apply.`,

  "71083": `@deva[दृक्स्वस्स्वतवसश्छन्दसि सौ] — In the Vedas, @deva[दृश्], @deva[स्वस्], and @deva[स्वतवस्] take @deva[नुम्] before nominative singular @deva[सु].

@deva[ईदृश् + नुम् + सु] → @deva[ईदृङ्] (with @deva[श्] → @deva[क्] by @ref[8.2.23])
@deva[स्वस् + नुम् + सु] → @deva[स्ववान्]
@deva[स्वतवस् + नुम् + सु] → @deva[स्वतवान्]`,

  "71084": `@deva[दिव औत्] — @deva[औ] replaces the final of @deva[दिव्] before nominative singular @deva[सु].

@deva[दिव् + सु] → @deva[द्यौः]

This applies to the nominal stem @deva[दिव्], not the root @deva[दिवु] (which would give @deva[द्युः]).`,

  "71085": `@deva[पथिमथ्यृभुक्षामात्] — @deva[आ] (@deva[आत्]) replaces the final of @deva[पथिन्], @deva[मथिन्], and @deva[ऋभुक्षिन्] before nominative singular @deva[सु].

@deva[पथिन् + सु] → @deva[पन्थाः] (with @deva[न्थ] by @ref[7.1.87])
@deva[मथिन् + सु] → @deva[मन्थाः]
@deva[ऋभुक्षिन् + सु] → @deva[ऋभुक्षाः]`,

  "71086": `@deva[इतोऽत् सर्वनामस्थाने] — @deva[अ] replaces the @deva[इ] of @deva[पथिन्], @deva[मथिन्], and @deva[ऋभुक्षिन्] in the strong cases.

@deva[पथिन्] → @deva[पन्थाः], @deva[पन्थानौ], @deva[पन्थानः], @deva[पन्थानम्]
@deva[मथिन्] → @deva[मन्थाः], @deva[मन्थानौ], @deva[मन्थानः]
@deva[ऋभुक्षिन्] → @deva[ऋभुक्षाः], @deva[ऋभुक्षाणौ], @deva[ऋभुक्षाणम्]`,

  "71087": `@deva[पथिमथोः शसादौ थः] — @deva[न्थ्] replaces the @deva[थ्] of @deva[पथिन्] and @deva[मथिन्] in the strong cases.

@deva[पथिन्] → @deva[पन्थाः], @deva[पन्थानौ], @deva[पन्थानः]
@deva[मथिन्] → @deva[मन्थाः], @deva[मन्थानौ], @deva[मन्थानः]

This accounts for the nasal before @deva[थ].`,

  "71088": `@deva[भसंज्ञायां लोपः] — The final vowel along with its following consonant is dropped in @deva[पथिन्], @deva[मथिन्], and @deva[ऋभुक्षिन्] in @deva[भ]-designated cases (weak cases before vowel-initial endings).

@deva[पथिन्] → @deva[पथः], @deva[पथा], @deva[पथे]
@deva[मथिन्] → @deva[मथः], @deva[मथा], @deva[मथे]
@deva[ऋभुक्षिन्] → @deva[ऋभुक्षः], @deva[ऋभुक्षा], @deva[ऋभुक्षे]`,

  "71089": `@deva[पुंसोऽसुङ्] — @deva[असुङ्] (= @deva[अस्]) replaces the final of @deva[पुंस्] in the strong cases.

@deva[पुंस्] → @deva[पुमस्] + @deva[नुम्] (by @ref[7.1.70]) → @deva[पुमान्], @deva[पुमांसौ], @deva[पुमांसः]

The @deva[उ] in @deva[असुङ्] indicates @deva[नुम्] should be added.`,

  "71090": `@deva[गोतो णित्] — The strong case endings after @deva[गो] are treated as @deva[णित्] (causing vṛddhi).

@deva[गो + सु] → @deva[गौः] (vṛddhi @deva[ओ] → @deva[औ])
@deva[गो + औ] → @deva[गावौ]
@deva[गो + जस्] → @deva[गावः]

In compounds where @deva[गो] becomes @deva[गु]: @deva[चित्रगुः] (no vṛddhi).`,

  "71091": `@deva[मसो लिटि वा] — In the perfect (@deva[लिट्]), the 1st person singular ending optionally acts as @deva[णित्].

@deva[कृ + णल्] → @deva[चकार] or @deva[चकर]
@deva[पच् + णल्] → @deva[पपाच] or @deva[पपच]

The vṛddhi is optional.`,

  "71092": `@deva[सख्युरसंबोधने] — The strong case endings after @deva[सखि] are @deva[णित्], except in the vocative singular.

@deva[सखि + औ] → @deva[सखायौ] (vṛddhi)
@deva[सखि + जस्] → @deva[सखायः]

But vocative: @deva[हे सखे] (no vṛddhi).`,

  "71093": `@deva[अनङ्सौ] — @deva[अनङ्] (= @deva[अन्]) replaces the @deva[इ] of @deva[सखि] before nominative singular @deva[सु] (but not in vocative).

@deva[सखि + सु] → @deva[सखा]

But vocative: @deva[हे सखे].`,

  "71094": `@deva[ॠत उशनसपुरुदंससनेहसां च] — @deva[अनङ्] (= @deva[अन्]) replaces the final of @deva[ॠ]-ending stems and of @deva[उशनस्], @deva[पुरुदंशस्], and @deva[अनेहस्] in nominative singular (not vocative).

| Stem | Nom. sg. | Voc. sg. |
|------|----------|----------|
| @deva[कर्तृ] | @deva[कर्ता] | @deva[हे कर्तः] |
| @deva[पितृ] | @deva[पिता] | @deva[हे पितः] |
| @deva[उशनस्] | @deva[उशना] | @deva[हे उशनः] |
| @deva[पुरुदंशस्] | @deva[पुरुदंशा] | @deva[हे पुरुदंशः] |`,

  "71095": `@deva[क्रोष्टुर्विभाषेतौ तृचि] — @deva[क्रोष्टु] "jackal" is optionally treated like a @deva[तृच्]-ending word in the strong cases (except vocative singular).

Like @deva[तृ]-stem: @deva[क्रोष्टा꣡], @deva[क्रोष्टा꣡रौ], @deva[क्रोष्टा꣡रः]

But vocative: @deva[हे क्रो꣡ष्टो]

In weak cases: @deva[क्रो꣡ष्टून्].`,

  "71096": `@deva[स्त्रियां च] — @deva[क्रोष्टु] is treated like a @deva[तृच्]-stem in the feminine in all cases.

@deva[क्रोष्ट्री꣡], @deva[क्रोष्ट्री꣡भ्याम्], @deva[क्रोष्ट्रीभिः]

The feminine is formed with @deva[ङीप्] by @ref[4.1.5].`,

  "71097": `@deva[तृतीयादिष्वपि क्वचित्] — @deva[क्रोष्टु] may optionally be treated as @deva[क्रोष्टृ] in the instrumental and subsequent cases before vowel-initial endings.

Optional: @deva[क्रोष्ट्रा] or @deva[क्रोष्टुना]
@deva[क्रोष्ट्रे] or @deva[क्रोष्टवे]`,

  "71098": `@deva[अनडुहोऽनड्वाहौ] — The stems @deva[अनड्वाह्] and @deva[अनड्वह्] are substituted for @deva[अनडुह्] (with augments @deva[आम्] and @deva[अम्] respectively) in the strong cases.

Strong: @deva[अनड्वाह्] → @deva[अनड्वान्], @deva[अनड्वाहौ], @deva[अनड्वाहः]
Vocative sg.: @deva[हे अनड्वन्] (with @deva[अम्])`,

  "71099": `@deva[अमि संबुद्धौ] — In the vocative singular, @deva[अम्] is the augment for @deva[अनडुह्].

@deva[अनडुह्] + @deva[अम्] → @deva[अनड्वह्] → @deva[हे अनड्वन्]

(Compare @deva[आम्] in other strong cases.)`,

  "71100": `@deva[अम्राडनडुहो बहुवचनस्य] — @deva[राट्] is optionally added after @deva[अम्] of @deva[अनडुह्] in the plural.

@deva[अनडुहः] (gen. sg.) or @deva[अनड्वाराट्] (rare Vedic form)`,

  "71101": `@deva[आद्यादनुदात्तस्य विभाषा] — When the stem has initial udātta accent, the augment @deva[राट्] is optional.

This is a conditioning rule for @ref[7.1.100].`,

  "71102": `@deva[द्व्यचोऽतस्तिङः] — After a disyllabic stem ending in @deva[अ], the @deva[द्] of @deva[युष्मद्] and @deva[अस्मद्] is dropped before tiṅ (verb) endings.

@deva[युष्मद्] → @deva[युष्म] before tiṅ endings
@deva[अस्मद्] → @deva[अस्म] before tiṅ endings`,

  "71103": `@deva[बह्वचः संबुद्धावात्वं वा] — For a polysyllabic stem, @deva[आ] is optionally substituted in the vocative singular.

This applies to @deva[युष्मद्] and @deva[अस्मद्] in vocative contexts.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.1.51-103)`);
console.log(`Total entries: ${Object.keys(data).length}`);
