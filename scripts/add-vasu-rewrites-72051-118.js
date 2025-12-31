#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "72051": `@deva[पूङश्च] — @deva[क्त्वा], @deva[क्त], and @deva[क्तवतु] optionally take @deva[इट्] after @deva[पू].

@deva[पूत्वा] or @deva[पवित्वा]
@deva[पूतः] or @deva[पवितः]
@deva[पूतवान्] or @deva[पवितवान्]

This allows the option where @ref[7.2.11] would otherwise prohibit @deva[इट्].`,

  "72052": `@deva[वसतिक्षुधोरिट्] — @deva[क्त्वा], @deva[क्त], and @deva[क्तवतु] always take @deva[इट्] after @deva[वस्] "to dwell" and @deva[क्षुध्].

@deva[उषित्वा], @deva[उषितः], @deva[उषितवान्]
@deva[क्षुधित्वा], @deva[क्षुधितः], @deva[क्षुधितवान्]

The repetition of @deva[इट्] indicates this rule is invariable.`,

  "72053": `@deva[अञ्चेः पूजायाम्] — @deva[क्त्वा], @deva[क्त], and @deva[क्तवतु] take @deva[इट्] after @deva[अञ्च्] when meaning "to honor."

@deva[अञ्चित्वा जानु जुहोति] "Having bent the knee, he offers"
@deva[अञ्चिता अस्य गुरवः] "His teachers are honored by him"

Without the sense of "honor": @deva[उदक्तम् उदकं कूपात्] "The water is raised from the well."`,

  "72054": `@deva[लुभो विमोहने] — @deva[क्त्वा], @deva[क्त], and @deva[क्तवतु] take @deva[इट्] after @deva[लुभ्] (tudādi) when meaning "entangled" or "confused."

@deva[लुभित्वा], @deva[लोभित्वा]
@deva[विलुभिताः केशाः] "entangled hair"
@deva[विलुभितानि पदानि] "confused steps"

Without this meaning: @deva[लुब्धः वृषलः] "the greedy man."`,

  "72055": `@deva[जॄव्रश्च्योः क्त्वि] — @deva[क्त्वा] takes @deva[इट्] after @deva[जॄ] and @deva[व्रश्च्].

@deva[जरित्वा] or @deva[जरीत्वा] (from @deva[जॄ])
@deva[व्रश्चित्वा] (from @deva[व्रश्च्])

This stops the anuvritti of @deva[क्त] and @deva[क्तवतु]—only @deva[क्त्वा] is affected.`,

  "72056": `@deva[उदितो वा] — @deva[क्त्वा] optionally takes @deva[इट्] after roots with indicatory short @deva[उ].

| Root | With @deva[इट्] | Without @deva[इट्] |
|------|----------------|-------------------|
| @deva[शमु] | @deva[शमित्वा] | @deva[शान्त्वा] |
| @deva[तमु] | @deva[तमित्वा] | @deva[तान्त्वा] |
| @deva[दमु] | @deva[दमित्वा] | @deva[दान्त्वा] |`,

  "72057": `@deva[सेऽसिचि कृतचृतच्छृदतृदनृतः] — An ārdhadhātuka affix beginning with @deva[स्] (except @deva[सिच्]) optionally takes @deva[इट्] after @deva[कृत्], @deva[चृत्], @deva[छृद्], @deva[तृद्], and @deva[नृत्].

| Root | Without @deva[इट्] | With @deva[इट्] |
|------|-------------------|-----------------|
| @deva[कृत्] | @deva[कर्त्स्यति] | @deva[कर्त्तिष्यति] |
| @deva[नृत्] | @deva[नर्त्स्यति] | @deva[नर्त्तिष्यति] |

But not before @deva[सिच्]: @deva[अकर्त्तीत्].`,

  "72058": `@deva[गमेरिट् परस्मैपदेषु] — An ārdhadhātuka affix beginning with @deva[स्] takes @deva[इट्] after @deva[गम्] in parasmaipada.

@deva[गमिष्यति], @deva[अगमिष्यत्], @deva[जिगमिषति]

But ātmanepada: @deva[संगंसीष्ट], @deva[संगंस्यते]
Before non-@deva[स्]: @deva[गन्तास्मि]`,

  "72059": `@deva[न वृद्भ्यश्चतुर्भ्यः] — Parasmaipada ārdhadhātuka affixes beginning with @deva[स्] do not take @deva[इट्] after the four @deva[वृत्]-class roots: @deva[वृत्], @deva[वृध्], @deva[शृध्], @deva[स्यन्द्].

@deva[वृत्] → @deva[वर्त्स्यति], @deva[विवृत्सति]
@deva[वृध्] → @deva[वर्त्स्यति], @deva[विवृत्सति]
@deva[स्यन्द्] → @deva[स्यन्त्स्यति]

In ātmanepada: @deva[वर्त्तिषीष्ट], @deva[वर्तिष्यते] (@deva[इट्] applies).`,

  "72060": `@deva[तासि च कॢपः] — Parasmaipada ārdhadhātuka affixes beginning with @deva[स्], and the affix @deva[तास्] (periphrastic future), do not take @deva[इट्] after @deva[कॢप्].

@deva[कल्प्ता], @deva[कल्प्स्यति], @deva[चिक्लृप्सति]

But ātmanepada: @deva[कल्पितासे], @deva[कल्पिषीष्ट], @deva[कल्पिष्यते].`,

  "72061": `@deva[अचस्तास्वत् थल्यनिटो नित्यम्] — After a vowel-ending root whose periphrastic future @deva[तास्] is invariably without @deva[इट्], the perfect ending @deva[थल्] is also without @deva[इट्].

| Future | Perfect |
|--------|---------|
| @deva[याता] | @deva[ययाथ] |
| @deva[चेता] | @deva[चिचेथ] |
| @deva[नेता] | @deva[निनेथ] |
| @deva[होता] | @deva[जुहोथ] |

If @deva[तास्] optionally lacks @deva[इट्], @deva[थल्] is always seṭ: @deva[विधोता]/विधविता] → @deva[विदुधविथ].`,

  "72062": `@deva[उपदेशेऽत्वतः] — After a root with short @deva[अ] as its original vowel (in the Dhātupāṭha), if @deva[तास्] is invariably aniṭ, then @deva[थल्] is also aniṭ.

| Future | Perfect |
|--------|---------|
| @deva[पक्ता] | @deva[पपक्थ] |
| @deva[यष्टा] | @deva[इयष्ठ] |
| @deva[शक्ता] | @deva[शशक्थ] |

Not for guṇa-@deva[अ]: @deva[कर्ष्टा] → @deva[चकर्षिथ]
Not for long @deva[आ]: @deva[राद्धा] → @deva[रराधिथ]`,

  "72063": `@deva[ऋतो भारद्वाजस्य] — According to Bhāradvāja, only after short @deva[ऋ]-ending roots (whose @deva[तास्] is aniṭ) is @deva[थल्] also aniṭ.

@deva[स्मर्त्ता] → @deva[सस्मर्थ]
@deva[ध्वर्त्ता] → @deva[दध्वर्थ]

This makes the preceding two sūtras optional, except for @deva[ऋ]-ending roots.`,

  "72064": `@deva[बभूथाततन्थजगृम्भववर्थेति निगमे] — In Vedic, these irregular perfect forms occur: @deva[बभूथ], @deva[आततन्थ], @deva[जगृम्भ], @deva[ववर्थ].

@deva[त्वं हि होता प्रथमो बभूथ] (= @deva[बभूविथ])
@deva[जगृम्भा ते दक्षिणम् इन्द्र हस्तम्] (= @deva[जगृहिम])
@deva[ववर्थ त्वं हि ज्योतिषा] (= @deva[ववरिथ])`,

  "72065": `@deva[विभाषा सृजिदृशोः] — @deva[थल्] optionally takes @deva[इट्] after @deva[सृज्] and @deva[दृश्].

@deva[सस्रष्ठ] or @deva[ससर्जिथ]
@deva[दद्रष्ठ] or @deva[ददर्शिथ]`,

  "72066": `@deva[इडत्त्यर्तिव्ययतीनाम्] — @deva[थल्] takes @deva[इट्] after @deva[अद्], @deva[ऋ], and @deva[व्यय्].

@deva[आदिथ] (from @deva[अद्])
@deva[आरिथ] (from @deva[ऋ])
@deva[संविव्ययिथ] (from @deva[व्यय्])

The repetition of @deva[इट्] makes this invariable.`,

  "72067": `@deva[वस्वेकाजाद्घसाम्] — The participial affix @deva[वस्] takes @deva[इट्] only when the reduplicated root is monosyllabic, or after @deva[आ]-ending roots and @deva[घस्].

Monosyllabic reduplicates: @deva[पेचिवान्], @deva[शेकिवान्]
After @deva[आ]-stems: @deva[ययिवान्], @deva[तस्थिवान्]
After @deva[घस्]: @deva[जक्षिवान्]

Polysyllabic reduplicates: @deva[बिभिद्वान्], @deva[बभूवान्] (no @deva[इट्]).`,

  "72068": `@deva[विभाषा गमहनविदविशाम्] — @deva[वस्] optionally takes @deva[इट्] after @deva[गम्], @deva[हन्], @deva[विद्], and @deva[विश्].

| Root | With @deva[इट्] | Without @deva[इट्] |
|------|----------------|-------------------|
| @deva[गम्] | @deva[जग्मिवान्] | @deva[जगन्वान्] |
| @deva[हन्] | @deva[जघ्निवान्] | @deva[जघन्वान्] |
| @deva[विद्] | @deva[विविदिवान्] | @deva[विविद्वान्] |
| @deva[विश्] | @deva[विविशिवान्] | @deva[विविश्वान्] |`,

  "72069": `@deva[सनिंससनिवांसम्] — The form @deva[सनिवांसम्] (with @deva[सनि]) is an irregular Vedic formation.

Vedic: @deva[अञ्जित्वाग्ने सनिं ससनिवांसम्]
Classical: @deva[सैनिवांसम्]

The @deva[इट्] is added without the expected vowel changes.`,

  "72070": `@deva[ऋद्धनोः स्ये] — The future marker @deva[स्य] takes @deva[इट्] after short @deva[ऋ]-ending roots and after @deva[हन्].

@deva[करिष्यति] (from @deva[कृ])
@deva[हरिष्यति] (from @deva[हृ])
@deva[हनिष्यति] (from @deva[हन्])
@deva[स्वरिष्यति] (from @deva[स्वृ], always @deva[इट्] here)`,

  "72071": `@deva[अञ्जेः सिचि] — @deva[सिच्] (aorist marker) always takes @deva[इट्] after @deva[अञ्ज्] (rudhādi).

@deva[आञ्जीत्], @deva[आञ्जिष्टाम्], @deva[आञ्जिषुः]

But other tenses are optional: @deva[अङ्क्ता] or @deva[अञ्जिता].`,

  "72072": `@deva[स्तुसुधूञ्भ्यः परस्मैपदेषु] — @deva[सिच्] takes @deva[इट्] in parasmaipada after @deva[स्तु], @deva[सु], and @deva[धूञ्].

@deva[आस्तावीत्], @deva[असावीत्], @deva[अधावीत्]

But ātmanepada: @deva[अस्तोष्ट], @deva[असोष्ट], @deva[अधविष्ट] or @deva[आधोष्ट].`,

  "72073": `@deva[यमरमनमातां सक् च] — @deva[सिच्] takes @deva[इट्] and @deva[सक्] augment after @deva[यम्], @deva[रम्], @deva[नम्], and @deva[आ].

@deva[अयांसीत्], @deva[अरंसीत्], @deva[अनंसीत्]

The @deva[सक्] augment is added before @deva[सिच्].`,

  "72074": `@deva[स्मिपूङ्रञ्ज्वशां सनि] — @deva[सन्] (desiderative) takes @deva[इट्] after @deva[स्मि], @deva[पूङ्], @deva[रञ्ज्], and @deva[वश्].

@deva[सिस्मयिषते], @deva[पुपूषति], @deva[रिरञ्जिषति], @deva[विवशिषति]`,

  "72075": `@deva[किरश्च पञ्चभ्यः] — @deva[सन्] takes @deva[इट्] after @deva[कॄ] and the five roots [that follow].

@deva[चिकरिषति] (from @deva[कॄ], not @deva[कृ])

This applies to specific roots in the @deva[कॄ]-class.`,

  "72076": `@deva[रुदादिभ्यः सार्वधातुके] — Sārvadhātuka affixes beginning with @deva[वल्] take @deva[इट्] after @deva[रुद्]-class roots.

@deva[रोदिति], @deva[स्वपिति], @deva[श्वसिति]

This is a niyama rule for sārvadhātuka affixes.`,

  "72077": `@deva[ईशः से] — The affix @deva[से] (@deva[सिप्] of ātmanepada) takes @deva[इट्] after @deva[ईश्] "to rule."

@deva[ईशिषे] "you rule"`,

  "72078": `@deva[ईडजनोर्ध्वे च] — @deva[ध्वे] takes @deva[इट्] after @deva[ईड्] and @deva[जन्].

@deva[ईडिध्वे], @deva[जनिध्वे]`,

  "72079": `@deva[लिङः सलोपोऽनन्त्यस्य] — In the benedictive (@deva[लिङ्]), the non-final @deva[स्] is elided.

@deva[भूयात्] (from @deva[भू + यास् + त्])

The @deva[स्] of @deva[यास्] that is not final is elided.`,

  "72080": `@deva[अतो येयः] — After a stem ending in @deva[अ], @deva[येय्] is substituted [for the benedictive marker].

@deva[पचेय] → @deva[पचेयम्], @deva[पचेयाः], @deva[पचेयात्]`,

  "72081": `@deva[आतो ङितः] — After a stem ending in @deva[आ], [special benedictive forms occur] when the affix is @deva[ङित्].

This affects the benedictive formation after @deva[आ]-stems.`,

  "72082": `@deva[आने मुक्] — Before @deva[आन] (middle participle), @deva[मुक्] augment [is added in certain contexts].

Relevant to participle formation.`,

  "72083": `@deva[ईदासः] — @deva[ईट्] [lengthening occurs] for @deva[आस्] [in certain contexts].

Affects specific forms of @deva[आस्] "to sit."`,

  "72084": `@deva[अष्टन आ विभक्तौ] — @deva[आ] replaces [the final of] @deva[अष्टन्] before a case ending.

@deva[अष्टन्] → @deva[अष्टा] before case affixes
@deva[अष्टौ] (nominative/accusative dual by @ref[7.1.21])`,

  "72085": `@deva[रायो हलि] — Before a consonant-initial [affix], @deva[राय्] [undergoes changes].

Affects the declension of @deva[राय्] "wealth."`,

  "72086": `@deva[युष्मदस्मदोरनादेशे] — For @deva[युष्मद्] and @deva[अस्मद्], [certain substitutes apply] when no specific substitute is taught.

General rule for personal pronoun substitutions.`,

  "72087": `@deva[द्वितीयायां च] — In the accusative also [the substitution applies].

Extends the previous rule to accusative case.`,

  "72088": `@deva[प्रथमायाश्च द्विवचने भाषायाम्] — In classical language, [the substitution applies] in the nominative dual also.

Applies to nominative dual of @deva[युष्मद्]/अस्मद्] in non-Vedic usage.`,

  "72089": `@deva[योऽचि] — @deva[य] is substituted [for the final] before a vowel-initial [affix].

@deva[युष्मद्] + vowel → @deva[युष्मय्...]
@deva[अस्मद्] + vowel → @deva[अस्मय्...]`,

  "72090": `@deva[शेषे लोपः] — In the remaining [cases], elision [of the final occurs].

The final @deva[द्] of @deva[युष्मद्]/अस्मद्] is elided in remaining cases.`,

  "72091": `@deva[मपर्यन्तस्य] — The substitutes [taught hereafter] replace the portion up to @deva[म्] (i.e., @deva[युष्म्] and @deva[अस्म्]).

@deva[युष्मद्] → substitute replaces @deva[युष्म्]
@deva[अस्मद्] → substitute replaces @deva[अस्म्]

The @deva[अद्] portion remains and may undergo @deva[य]-substitution.`,

  "72092": `@deva[युवावौ द्विवचने] — In the dual, @deva[युव] replaces @deva[युष्म्] and @deva[आव] replaces @deva[अस्म्].

@deva[युवाम्], @deva[युवाभ्याम्], @deva[युवयोः]
@deva[आवाम्], @deva[आवाभ्याम्], @deva[आवयोः]`,

  "72093": `@deva[यूयवयौ जसि] — In the nominative plural, @deva[यूय] replaces @deva[युष्म्] and @deva[वय] replaces @deva[अस्म्].

@deva[यूयम्], @deva[वयम्]`,

  "72094": `@deva[त्वाहौ सौ] — In the nominative singular, @deva[त्व] replaces @deva[युष्म्] and @deva[अह] replaces @deva[अस्म्].

@deva[त्वम्], @deva[अहम्]`,

  "72095": `@deva[तुभ्यमह्यौ ङयि] — In the dative singular, @deva[तुभ्य] replaces @deva[युष्म्] and @deva[मह्य] replaces @deva[अस्म्].

@deva[तुभ्यम्], @deva[मह्यम्]`,

  "72096": `@deva[तवममौ ङसि] — In the genitive singular, @deva[तव] replaces @deva[युष्म्] and @deva[मम] replaces @deva[अस्म्].

@deva[तव], @deva[मम]`,

  "72097": `@deva[त्वमावेकवचने] — In the remaining singular cases, @deva[त्व] replaces @deva[युष्म्] and @deva[म] replaces @deva[अस्म्].

@deva[त्वाम्], @deva[त्वया], @deva[त्वत्], @deva[त्वयि]
@deva[माम्], @deva[मया], @deva[मत्], @deva[मयि]`,

  "72098": `@deva[प्रत्ययोत्तरपदयोश्च] — @deva[त्व] replaces @deva[युष्म्] and @deva[म] replaces @deva[अस्म्] (singular meaning) when an affix or a following compound member is present.

With affix: @deva[त्वदीयः], @deva[मदीयः]
In compound: @deva[त्वत्पुत्रः], @deva[मत्पुत्रः]

For plural meaning: @deva[युष्मदीयम्], @deva[अस्मत्पुत्रः].`,

  "72099": `@deva[त्रिचतुरोः स्त्रियां तिसृचतसृ] — In the feminine, @deva[तिसृ] replaces @deva[त्रि] and @deva[चतसृ] replaces @deva[चतुर्] before a case ending.

@deva[तिस्रः], @deva[चतस्रः]
@deva[तिसृभिः], @deva[चतसृभिः]

Masculine: @deva[त्रयः], @deva[चत्वारः]`,

  "72100": `@deva[अचि र ऋतः] — @deva[र्] replaces the @deva[ऋ] of @deva[तिसृ] and @deva[चतसृ] before a vowel-initial case affix.

@deva[तिस्रः], @deva[चतस्रः] (nom./acc.)

This supersedes guṇa (@ref[7.3.110]) and ekādeśa rules.`,

  "72101": `@deva[जराया जरसन्यतरस्याम्] — @deva[जरस्] may optionally replace @deva[जरा] before a vowel-initial case affix.

@deva[जरया] or @deva[जरसा]
@deva[जरायै] or @deva[जरसे]

Before consonant: only @deva[जराभ्याम्], @deva[जराभिः].`,

  "72102": `@deva[त्यदादीनामः] — For the final of @deva[त्यद्]-class words, @deva[अ] is substituted before a case ending.

@deva[त्यद्] → @deva[त्यः], @deva[त्यौ], @deva[त्ये]
@deva[तद्] → @deva[सः], @deva[तौ], @deva[ते]
@deva[यद्] → @deva[यः], @deva[यौ], @deva[ये]`,

  "72103": `@deva[किमः कः] — @deva[क] replaces @deva[किम्] before a case ending.

@deva[कः], @deva[कौ], @deva[के]

This also applies when @deva[अकच्] augment is added.`,

  "72104": `@deva[कु तिहोः] — @deva[कु] replaces @deva[किम्] before an affix beginning with @deva[त] or @deva[ह].

@deva[कुतः] @ref[5.3.13]
@deva[कुत्र] @ref[5.3.7]
@deva[कुह]`,

  "72105": `@deva[क्वाति] — @deva[क्व] replaces @deva[किम्] before the affix @deva[अत्].

@deva[क्व गमिष्यसि] "Where will you go?"

The substitute @deva[क्व] prevents guṇa that @deva[कु + अ] would cause.`,

  "72106": `@deva[तदोः सः सावनन्त्ययोः] — @deva[स्] replaces the non-final @deva[त्] or @deva[द्] of @deva[त्यद्]-class words in the nominative singular.

@deva[त्यद्] → @deva[स्यः]
@deva[तद्] → @deva[सः]
@deva[एतद्] → @deva[एषः]`,

  "72107": `@deva[अदस औ सुलोपश्च] — @deva[औ] replaces the @deva[स्] of @deva[अदस्] in the nominative singular, and @deva[सु] is elided.

@deva[अदस्] + @deva[सु] → @deva[असौ]`,

  "72108": `@deva[इदमो मः] — @deva[म्] replaces the final @deva[म्] of @deva[इदम्] in the nominative singular.

@deva[इयम्], @deva[अयम्]

This prevents the @deva[अ] substitution of @ref[7.2.102].`,

  "72109": `@deva[दश्च] — @deva[म्] replaces the @deva[द्] of @deva[इदम्] before a case ending.

@deva[इमौ], @deva[इमे], @deva[इमम्], @deva[इमान्]`,

  "72110": `@deva[यः सौ] — @deva[य] replaces [the @deva[इ]] of @deva[इदम्] in the nominative singular [feminine].

@deva[इयम्] (feminine nominative singular)`,

  "72111": `@deva[इदोऽय् पुंसि] — @deva[अय्] replaces @deva[इद्] of @deva[इदम्] in the masculine nominative singular.

@deva[अयम्] (masculine)

Compare feminine: @deva[इयम्].`,

  "72112": `@deva[अनाप्यकः] — @deva[अन] replaces @deva[इद्] of @deva[इदम्] in the instrumental and following cases, unless @deva[अकच्] is added.

@deva[अनेन], @deva[अनयोः]

With @deva[अकच्]: @deva[इमकेन], @deva[इमकयोः].`,

  "72113": `@deva[हलि लोपः] — Before a consonant-initial [affix], elision [of the final vowel occurs].

Affects stems before consonant-initial endings in specific contexts.`,

  "72114": `@deva[मृजेर्वृद्धिः] — Vṛddhi [of the vowel] occurs for @deva[मृज्] [in specific contexts].

@deva[मृज्] → @deva[मार्ज्...] with vṛddhi`,

  "72115": `@deva[अचो ञ्णिति] — Before an affix marked with @deva[ञ्] or @deva[ण्], vṛddhi replaces the vowel [of the stem].

This is the general vṛddhi rule for @deva[ञित्] and @deva[णित्] affixes.

@deva[पच् + णिच्] → @deva[पाचयति]
@deva[कृ + णिच्] → @deva[कारयति]`,

  "72116": `@deva[अत उपधायाः] — Vṛddhi replaces the penultimate @deva[अ] [before @deva[ञित्]/णित्] affixes].

@deva[पच् + णिच्] → @deva[पाचयति] (penultimate @deva[अ] → @deva[आ])
@deva[वद् + णिच्] → @deva[वादयति]

Not for other vowels: @deva[बोधयति] (not @deva[*बौधयति]).`,

  "72117": `@deva[तद्धितेष्वचामादेः] — In taddhita affixes, vṛddhi replaces the initial vowel [of the base].

@deva[दशरथ + अण्] → @deva[दाशरथिः]
@deva[उपगु + अण्] → @deva[औपगवः]`,

  "72118": `@deva[किति च] — Before a @deva[कित्] affix also [vṛddhi of the initial vowel occurs in taddhitas].

This extends @ref[7.2.117] to @deva[कित्] affixes as well.

@deva[उपगु + क] → @deva[औपगवक]`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.2.51-118)`);
console.log(`Total entries: ${Object.keys(data).length}`);
