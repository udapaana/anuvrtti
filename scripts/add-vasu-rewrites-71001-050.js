#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "71001": `@deva[युवोरनाकौ] — For nasalized @deva[यु] and @deva[वु] in affixes, @deva[अन] and @deva[अक] are substituted respectively.

The @deva[यु] and @deva[वु] here are stripped of other markers and are understood to be nasalized.

| Affix | Contains | Substitute | Example |
|-------|----------|------------|---------|
| @deva[ल्युँ] @ref[3.1.134] | @deva[यु] | @deva[अन] | @deva[नन्द् + ल्युँ] → @deva[नन्दनः] |
| @deva[व्युल्] @ref[4.3.23] | @deva[यु] | @deva[अन] | @deva[सायंतनः], @deva[चिरंतनः] |
| @deva[ण्वुल्] @ref[3.1.133] | @deva[वु] | @deva[अक] | @deva[कृ + ण्वुल्] → @deva[कारकः] |
| @deva[वुन्] @ref[4.3.98] | @deva[वु] | @deva[अक] | @deva[वासुदेवकः], @deva[अर्जुनकः] |

Why "nasalized"? Non-nasalized @deva[यु] does not change:
- @deva[ऊर्णायुस्] @ref[5.2.123] → @deva[ऊर्णायुः] (no substitution)
- @deva[भुज्युः], @deva[मृत्युः] (from @deva[युक्] and @deva[त्युक्], Uṇādi III.21)

The maxim applies: @deva[प्रतिज्ञानुनासिक्याः पाणिनीयाः] — "Pāṇinian affixes are nasalized by convention."`,

  "71002": `@deva[आयनेयीनीयियः फढखच्छघां प्रत्ययादीनाम्] — For the initial consonants @deva[फ्], @deva[ढ्], @deva[ख्], @deva[छ्], @deva[घ्] of affixes, the following substitutes apply:

| Initial | Substitute |
|---------|------------|
| @deva[फ्] | @deva[आयन्] |
| @deva[ढ्] | @deva[एय्] |
| @deva[ख्] | @deva[ईन्] |
| @deva[छ्] | @deva[ईय्] |
| @deva[घ्] | @deva[इय्] |

Examples:
- @deva[दाक्षि + फक्] → @deva[दाक्षायणः] (patronymic)
- @deva[दितिढक्] → @deva[दैतेयः]
- @deva[कुलालख] → @deva[कौलालीनः]
- @deva[ब्राह्मणछ] → @deva[ब्राह्मणीयः]`,

  "71003": `@deva[झोऽन्तः] — @deva[अन्त्] is substituted for @deva[झ] of an affix.

The word @deva[प्रत्यय] "affix" is understood. This applies to verbal endings:
- @deva[पचन्ति] (@deva[पच् + झि] → @deva[पच् + अन्ति])
- @deva[पचन्ते] (@deva[पच् + झ] → @deva[पच् + अन्ते])`,

  "71004": `@deva[अदभ्यस्तात्] — @deva[अत्] is the substitute for @deva[झ] after a reduplicated stem.

After reduplication, @deva[झ] → @deva[अत्] (not @deva[अन्त्]):
- @deva[दद् + झि] → @deva[ददति] (not @deva[*ददन्ति])
- @deva[बिभ्र् + झि] → @deva[बिभ्रति]
- @deva[जुह्व् + झि] → @deva[जुह्वति]`,

  "71005": `@deva[आत्मनेपदेष्वनतः] — @deva[अत्] always replaces @deva[झ] in ātmanepada when the stem does not end in @deva[अ].

For non-@deva[अ]-ending stems in ātmanepada, @deva[झ] → @deva[अत्]:
- @deva[दुह् + झ] → @deva[दुहते] (not @deva[*दुहन्ते])
- @deva[शेरते], @deva[आसते]

But after @deva[अ]-stems: @deva[लभन्ते], @deva[सेवन्ते] (normal @deva[अन्त्] applies).`,

  "71006": `@deva[शीङो रुट्] — The @deva[अत्] substitute of @deva[झ] gets the augment @deva[रुट्] after root @deva[शी] "to lie."

@deva[शी + झ] → @deva[शी + र् + अते] → @deva[शेरते]

The @deva[रुट्] augment is added before @deva[अत्].`,

  "71007": `@deva[वेत्तेर्विभाषा] — After @deva[विद्] "to know" (with @deva[इट्]), the @deva[रुट्] augment is optional.

@deva[विद् + झ] → @deva[विदन्ते] or @deva[विद्रते]

Both forms are correct for the 3rd person plural ātmanepada.`,

  "71008": `@deva[बहुलं छन्दसि] — In the Vedas, [the application of @deva[रुट्]] is diverse.

The augment @deva[रुट्] appears irregularly in Vedic texts—sometimes added where not expected, sometimes omitted where expected.`,

  "71009": `@deva[अतो भिस ऐस्] — After a stem ending in @deva[अ], @deva[ऐस्] replaces the instrumental plural ending @deva[भिस्].

@deva[वृक्ष + भिस्] → @deva[वृक्षैः]
@deva[देव + भिस्] → @deva[देवैः]

The @deva[अ + ऐ] → @deva[ऐ] by vowel sandhi @ref[6.1.88].`,

  "71010": `@deva[बहुलं छन्दसि] — In the Vedas, this substitution [of @deva[ऐस्] for @deva[भिस्]] occurs diversely.

Sometimes @deva[ऐस्] appears after non-@deva[अ] stems: @deva[नद्यः]
Sometimes @deva[भिस्] is retained after @deva[अ]-stems: @deva[देवेभिः सर्वेभिः] (Ṛg Veda I.1.4)`,

  "71011": `@deva[नेदमदसोरकोः] — The @deva[ऐस्] substitution does not occur after @deva[इदम्] or @deva[अदस्], except when they end in @deva[क].

Regular forms:
- @deva[इदम् + भिस्] → @deva[एभिः] (not @deva[*इदैः])
- @deva[अदस् + भिस्] → @deva[अमीभिः]

But with @deva[क]-ending derivatives:
- @deva[इमकैः], @deva[अमुकैः] (substitution applies)`,

  "71012": `@deva[टाङसिङसामिनात्स्याः] — After a stem ending in @deva[अ], the following substitutions occur:

| Case | Original | Substitute | Example |
|------|----------|------------|---------|
| Instrumental sg. | @deva[टा] | @deva[इन्] | @deva[वृक्षेण] |
| Ablative sg. | @deva[ङसि] | @deva[आत्] | @deva[वृक्षात्] |
| Genitive sg. | @deva[ङस्] | @deva[स्य] | @deva[वृक्षस्य] |

After non-@deva[अ] stems, the original endings appear: @deva[पत्या], @deva[सख्या].`,

  "71013": `@deva[ङेर्यः] — After a stem ending in @deva[अ], @deva[य] is substituted for the dative ending @deva[ङे].

@deva[वृक्ष + ङे] → @deva[वृक्षाय] (with lengthening by @ref[7.3.102])
@deva[देव + ङे] → @deva[देवाय]

The @deva[ङे] here refers to the dative singular, not the locative @deva[ङि].`,

  "71014": `@deva[सर्वनाम्नः स्मै] — After a pronominal stem ending in @deva[अ], @deva[स्मै] is substituted for the dative ending @deva[ङे].

| Pronoun | Dative sg. |
|---------|------------|
| @deva[सर्व] | @deva[सर्वस्मै] |
| @deva[यद्] | @deva[यस्मै] |
| @deva[तद्] | @deva[तस्मै] |
| @deva[किम्] | @deva[कस्मै] |

But @deva[भवते] (from @deva[भवत्], not ending in @deva[अ]).`,

  "71015": `@deva[ङसिङ्योः स्मात्स्मिनौ] — After a pronominal stem ending in @deva[अ], @deva[स्मात्] and @deva[स्मिन्] replace the ablative @deva[ङसि] and locative @deva[ङि] endings.

| Pronoun | Ablative sg. | Locative sg. |
|---------|--------------|--------------|
| @deva[सर्व] | @deva[सर्वस्मात्] | @deva[सर्वस्मिन्] |
| @deva[यद्] | @deva[यस्मात्] | @deva[यस्मिन्] |
| @deva[तद्] | @deva[तस्मात्] | @deva[तस्मिन्] |

But non-pronouns: @deva[वृक्षात्], @deva[वृक्षे].`,

  "71016": `@deva[पूर्वादिभ्यो नवभ्यो वा] — After the nine words beginning with @deva[पूर्व], @deva[स्मात्] and @deva[स्मिन्] are optionally substituted.

The nine words: @deva[पूर्व], @deva[पर], @deva[अवर], @deva[दक्षिण], @deva[उत्तर], @deva[अपर], @deva[अधर], @deva[स्व], @deva[अन्तर].

| Word | Ablative | Locative |
|------|----------|----------|
| @deva[पूर्व] | @deva[पूर्वस्मात्] or @deva[पूर्वात्] | @deva[पूर्वस्मिन्] or @deva[पूर्वे] |
| @deva[उत्तर] | @deva[उत्तरस्मात्] or @deva[उत्तरात्] | @deva[उत्तरस्मिन्] or @deva[उत्तरे] |`,

  "71017": `@deva[जसः शी] — After a pronominal stem ending in @deva[अ], @deva[ई] is substituted for the nominative plural @deva[जस्].

@deva[सर्व + जस्] → @deva[सर्वे] (@deva[सर्व + ई])
@deva[ते], @deva[ये], @deva[के]

The long @deva[ई] is specified for use in subsequent rules forming @deva[त्रपुणी], @deva[जतुनी].`,

  "71018": `@deva[औङ आपः] — After a stem ending in feminine @deva[आप्] (@deva[आ]), @deva[ई] is substituted for the dual endings @deva[औ] of nominative and accusative.

@deva[रामा + औ] → @deva[रामे] (@deva[रामा + ई] with sandhi)
@deva[सीता + औ] → @deva[सीते]

This applies to feminine @deva[आ]-stems in the dual.`,

  "71019": `@deva[नपुंसकाच्च] — After a neuter stem also, @deva[ई] is substituted for the dual @deva[औ] in nominative and accusative.

@deva[कुण्ड + औ] → @deva[कुण्डे]
@deva[वन + औ] → @deva[वने]

The @deva[अ] of the stem is not elided before @deva[ई] (by vārttika to @ref[6.4.148]).`,

  "71020": `@deva[जश्शसोः शिः] — After a neuter stem, @deva[इ] is substituted for the plural endings @deva[जस्] (nominative) and @deva[शस्] (accusative).

@deva[कुण्ड + जस्] → @deva[कुण्डानि] (@deva[नुम्] by @ref[7.1.72])
@deva[दधि + शस्] → @deva[दधीनि]
@deva[मधु + जस्] → @deva[मधूनि]`,

  "71021": `@deva[अष्टाभ्य औश्] — After the stem @deva[अष्टा] (the form @deva[अष्टन्] assumes), @deva[औश्] is substituted for nominative and accusative endings.

@deva[अष्टा + जस्] → @deva[अष्टौ]
@deva[अष्टा + शस्] → @deva[अष्टौ]

This rule applies when @deva[अष्टन्] has become @deva[अष्टा] by @ref[7.2.84]. Without this change: @deva[अष्ट तिष्ठन्ति].`,

  "71022": `@deva[षड्भ्यो लुक्] — The nominative and accusative plural endings are elided after numerals called @deva[षष्] (six through ten).

@deva[षष् + जस्] → @deva[षट्]
@deva[पञ्चन् + जस्] → @deva[पञ्च]
@deva[सप्तन्], @deva[नवन्], @deva[दशन्] → @deva[सप्त], @deva[नव], @deva[दश]

In compounds where @deva[षष्] is secondary: @deva[प्रियषषः], @deva[प्रियपञ्चानः].`,

  "71023": `@deva[स्वमोर्नपुंसकात्] — The nominative singular @deva[सु] and accusative singular @deva[अम्] are elided after a neuter stem.

@deva[दधि + सु] → @deva[दधि]
@deva[मधु + अम्] → @deva[मधु]

Similarly @deva[त्रपु], @deva[जतु].`,

  "71024": `@deva[अतोऽम्] — After a neuter stem ending in @deva[अ], @deva[अम्] is substituted for both @deva[सु] (nom. sg.) and @deva[अम्] (acc. sg.).

@deva[कुण्ड + सु] → @deva[कुण्डम्]
@deva[वन + अम्] → @deva[वनम्]

Why @deva[अम्] and not just @deva[म्]? To prevent lengthening by @ref[7.3.101]: @deva[कुण्ड + अम्] → @deva[कुण्डम्] (not @deva[*कुण्डाम्]).`,

  "71025": `@deva[अद्ड् डतरादिभ्यः पञ्चभ्यः] — @deva[अद्] is substituted for nominative/accusative singular endings after five words: stems formed with @deva[डतर] and @deva[डतम], and @deva[इतर], @deva[अन्य], @deva[अन्यतर].

@deva[कतर + सु] → @deva[कतरत्]
@deva[कतम + अम्] → @deva[कतमत्]
@deva[इतर + सु] → @deva[इतरत्]
@deva[अन्य + सु] → @deva[अन्यत्]
@deva[अन्यतर + सु] → @deva[अन्यतरत्]`,

  "71026": `@deva[नेतराच्छन्दसि] — In the Vedas, @deva[अद्] is not substituted after @deva[इतर].

Vedic: @deva[इतरम् इतरम् अण्डम् अजायत]
Classical: @deva[इतरत् काष्ठम्], @deva[इतरत् कुड्यम्]

For @deva[एकतर], the @deva[अद्] substitution never applies: @deva[एकतरम्].`,

  "71027": `@deva[युष्मदस्मद्भ्यां ङसोऽश्] — @deva[अश्] replaces the genitive singular ending @deva[अस्] after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + अस्] → @deva[तव] (with stem change by @ref[7.2.96])
@deva[अस्मद् + अस्] → @deva[मम]

The @deva[श्] indicates whole-affix replacement by @ref[1.1.55].`,

  "71028": `@deva[ङे प्रथमयोरम्] — @deva[अम्] is substituted for the dative ending @deva[ङे] and for nominative/accusative endings after @deva[युष्मद्] and @deva[अस्मद्].

| Case | @deva[युष्मद्] | @deva[अस्मद्] |
|------|---------------|---------------|
| Dative sg. | @deva[तुभ्यम्] | @deva[मह्यम्] |
| Nom. sg. | @deva[त्वम्] | @deva[अहम्] |
| Nom. dual | @deva[युवाम्] | @deva[आवाम्] |
| Nom. pl. | @deva[यूयम्] | @deva[वयम्] |`,

  "71029": `@deva[शसो न] — @deva[न्] is substituted for the @deva[स्] of accusative plural @deva[शस्] after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + शस्] → @deva[युष्मान्] (with lengthening by @ref[7.2.87])
@deva[अस्मद् + शस्] → @deva[अस्मान्]`,

  "71030": `@deva[भ्यसो भ्यम्] — @deva[अभ्यम्] is substituted for the dative plural ending @deva[भ्यस्] after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + भ्यस्] → @deva[युष्मभ्यम्]
@deva[अस्मद् + भ्यस्] → @deva[अस्मभ्यम्]`,

  "71031": `@deva[पञ्चम्या अत्] — @deva[अत्] is substituted for the ablative plural ending @deva[भ्यस्] after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + भ्यस्] → @deva[युष्मत्]
@deva[अस्मद् + भ्यस्] → @deva[अस्मत्]`,

  "71032": `@deva[एकवचनस्य च] — The @deva[अत्] substitution also applies in the ablative singular after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + ङसि] → @deva[त्वत्] (stem @deva[त्व] by @ref[7.2.97])
@deva[अस्मद् + ङसि] → @deva[मत्] (stem @deva[म] by @ref[7.2.97])`,

  "71033": `@deva[साम आकम्] — @deva[आकम्] is substituted for the genitive plural ending @deva[साम्] (= @deva[आम्] + @deva[सुट्]) after @deva[युष्मद्] and @deva[अस्मद्].

@deva[युष्मद् + आम्] → @deva[युष्माकम्]
@deva[अस्मद् + आम्] → @deva[अस्माकम्]

The form @deva[साम्] indicates that @deva[आकम्] does not receive the @deva[सुट्] augment.`,

  "71034": `@deva[आत औ णलः] — @deva[औ] is substituted for @deva[णल्] (the 1st/3rd person singular perfect ending) after roots ending in long @deva[आ].

@deva[पा + णल्] → @deva[पपौ]
@deva[स्था + णल्] → @deva[तस्थौ]
@deva[ग्लै + णल्] → @deva[जग्लौ]
@deva[म्लै + णल्] → @deva[मम्लौ]

The @deva[औ] substitution occurs first, then the vṛddhi-ekādeśa @deva[आ + औ] → @deva[औ], then reduplication.`,

  "71035": `@deva[तुह्योस्तातङ्ङाशिष्यन्यतरस्याम्] — @deva[तातङ्] is optionally substituted for the imperative endings @deva[तु] and @deva[हि] when benediction is intended.

With benediction:
- @deva[जीवतात् भवान्] or @deva[जीवतु भवान्]
- @deva[जीवतात् त्वम्] or @deva[जीव त्वम्]

Without benediction: @deva[ग्रामं गच्छतु भवान्] (no option).

The @deva[ङ्] prevents guṇa/vṛddhi.`,

  "71036": `@deva[विदेः शतुर्वसुः] — @deva[वसु] is substituted for the present participle affix @deva[शतृ] after root @deva[विद्] "to know."

@deva[विद् + शतृ] → @deva[विद्वस्]
- Nom. sg.: @deva[विद्वान्]
- Nom. du.: @deva[विद्वांसौ]
- Nom. pl.: @deva[विद्वांसः]
- Fem.: @deva[विदुषी]

The @deva[उ] in @deva[वसु] marks it as @deva[उगित्], triggering @deva[नुम्] in strong cases.`,

  "71037": `@deva[समासेऽनञ्पूर्वे क्त्वो ल्यप्] — In a compound whose first member is an indeclinable (but not @deva[नञ्]), @deva[ल्यप्] is substituted for @deva[क्त्वा].

@deva[प्र + कृत्य] → @deva[प्रकृत्य] (not @deva[*प्रकृत्वा])
@deva[आ + गम्य] → @deva[आगम्य]
@deva[सम् + भूय] → @deva[संभूय]

But with @deva[नञ्]: @deva[अकृत्वा] (not @deva[*अकृत्य]).`,

  "71038": `@deva[क्त्वाऽपि छन्दसि] — In the Vedas, @deva[क्त्वा] also [may be used] like @deva[ल्यप्] in compounds.

Vedic usage permits both forms:
- @deva[प्रकृत्वा] alongside @deva[प्रकृत्य]`,

  "71039": `@deva[सुपां सुलुक्पूर्वसवर्णाऽऽच्छेयाडाड्यायाजालः] — In the Vedas, the following irregular case-ending substitutions occur: @deva[सुलुक्], @deva[पूर्वसवर्ण], @deva[आ], @deva[छि], @deva[एय], @deva[आट्], @deva[आट्य], @deva[आय], @deva[आ], @deva[जाल्].

This sūtra catalogs Vedic irregularities in case endings.`,

  "71040": `@deva[अमो मश्] — @deva[म] replaces the 1st person singular ending @deva[अम्] (in the aorist).

@deva[अ + भू + अम्] → @deva[अभूवम्]

The @deva[श्] indicates whole-affix replacement.`,

  "71041": `@deva[लोपस्त आत्मनेपदेषु] — In the Vedas, the @deva[त] of ātmanepada endings is elided.

Vedic: @deva[देवा अदृश्र] for @deva[अदृश्रत]`,

  "71042": `@deva[ध्वमो ध्वात्] — In the Vedas, @deva[ध्वात्] is substituted for the ending @deva[ध्वम्].

Vedic: @deva[अविन्द्ध्वात्] for @deva[अविन्द्ध्वम्]`,

  "71043": `@deva[यजध्वैनमिति च] — The Vedic form @deva[यजध्वैनम्] is an irregular formation.

This is a special case noted for @deva[यजध्वम् + एनम्] → @deva[यजध्वैनम्].`,

  "71044": `@deva[तस्य तात्] — In the Vedas, @deva[तात्] is substituted for the 2nd person plural imperative ending @deva[त].

Vedic: @deva[गृहणीतात्] for @deva[गृहणीत]`,

  "71045": `@deva[तप्तनप्तनथनाश्च] — In the Vedas, @deva[त], @deva[तन], and @deva[थन] [also occur as substitutes].

Alternative Vedic endings alongside @deva[तात्].`,

  "71046": `@deva[इदन्तो मसि] — In the Vedas, the ending @deva[मस्] becomes @deva[मसि] (ending in @deva[इ]).

Vedic: @deva[स्तोमसि] for @deva[स्तोमस्]`,

  "71047": `@deva[क्त्वो यक्] — In the Vedas, the absolutive affix @deva[क्त्वा] receives the augment @deva[य] at the end.

Vedic: @deva[कृत्व्य] for @deva[कृत्वा]`,

  "71048": `@deva[इष्ट्वीनमिति च] — In the Vedas, @deva[इष्ट्वीनम्] is an irregular absolutive form.

For @deva[इष्ट्वा] + following word.`,

  "71049": `@deva[स्नात्व्यादयश्च] — Forms like @deva[स्नात्वी] etc. are irregular Vedic absolutives.

Including @deva[स्नात्वी], @deva[दत्वी], @deva[हित्वी].`,

  "71050": `@deva[आज्जसेरसुक्] — After a stem ending in @deva[अ] or @deva[आ], the nominative plural ending @deva[जस्] receives the augment @deva[असुक्].

This applies specifically in Vedic contexts to create forms like @deva[देवासः] alongside @deva[देवाः].`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.1.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
