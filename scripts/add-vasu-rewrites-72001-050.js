#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "72001": `@deva[सिचि वृद्धिः परस्मैपदेषु] — Before the aorist marker @deva[सिच्], vṛddhi replaces the final @deva[इक्] vowel (@deva[इ], @deva[उ], @deva[ऋ], @deva[ॠ]) in parasmaipada.

| Root | Aorist |
|------|--------|
| @deva[चि] | @deva[अचैषीत्] |
| @deva[नी] | @deva[अनैषीत्] |
| @deva[लू] | @deva[अलावीत्] |
| @deva[पू] | @deva[अपावीत्] |
| @deva[कृ] | @deva[अकार्षीत्] |
| @deva[हृ] | @deva[अहार्षीत्] |

The express vṛddhi supersedes antaraṅga guṇa. In ātmanepada: @deva[अच्योष्ट], @deva[अप्लोष्ट] (no vṛddhi).`,

  "72002": `@deva[अतो ल्रान्तस्य] — In parasmaipada s-aorist, vṛddhi replaces short @deva[अ] when it immediately precedes final @deva[र्] or @deva[ल्] of a root.

| Root | Aorist |
|------|--------|
| @deva[क्षर्] | @deva[अक्षारीत्] |
| @deva[त्सर्] | @deva[अत्सारीत्] |
| @deva[ज्वल्] | @deva[अज्वालीत्] |
| @deva[ह्मल्] | @deva[अह्मालीत्] |

This debars the option of @ref[7.2.7]. Not applicable if @deva[अ] is long: @deva[न्यखारीत्], @deva[न्यमीलीत्].`,

  "72003": `@deva[वदव्रजहलन्तस्याचः] — In parasmaipada s-aorist, vṛddhi occurs for:
1. The @deva[अ] of @deva[वद्] and @deva[व्रज्]
2. Any vowel of a consonant-ending stem

| Root | Aorist |
|------|--------|
| @deva[वद्] | @deva[अवादीत्] |
| @deva[व्रज्] | @deva[अव्राजीत्] |
| @deva[पच्] | @deva[अपाक्षीत्] |
| @deva[भिद्] | @deva[अभैत्सीत्] |
| @deva[रुध्] | @deva[अरौत्सीत्] |

The word @deva[हलन्त] ensures the rule applies even with multiple final consonants: @deva[अराङ्क्षीत्], @deva[अभाङ्क्षीत्].`,

  "72004": `@deva[नेटि] — A consonant-ending stem does not get vṛddhi when @deva[सिच्] takes the @deva[इट्] augment.

With @deva[इट्] (no vṛddhi): @deva[अदेवीत्], @deva[असेवीत्], @deva[अकोषीत्], @deva[अमोषीत्]
Without @deva[इट्] (vṛddhi applies): @deva[अलावीत्] (vowel-final root)`,

  "72005": `@deva[ह्म्यन्तक्षणश्वसजागृणिश्व्येदिताम्] — No vṛddhi before @deva[इट्]-augmented s-aorist for:
1. Stems ending in @deva[ह्], @deva[म्], or @deva[य्]
2. Roots @deva[क्षण्], @deva[श्वस्], @deva[जागृ]
3. @deva[णि]-causative stems
4. Root @deva[श्वि]
5. Roots with indicatory @deva[ए]

| Root/Stem | Aorist |
|-----------|--------|
| @deva[ग्रह्] | @deva[अग्रहीत्] |
| @deva[व्यय्] | @deva[अव्ययीत्] |
| @deva[क्षण्] | @deva[अक्षणीत्] |
| @deva[श्वस्] | @deva[अश्वसीत्] |
| @deva[जागृ] | @deva[अजागरीत्] |
| @deva[ऊनि] (caus.) | @deva[ऊनयीत्] |
| @deva[श्वि] | @deva[अश्वयीत्] |`,

  "72006": `@deva[ऊर्णोतेर्विभाषा] — Before @deva[इट्]-augmented parasmaipada s-aorist, vṛddhi is optional for @deva[ऊर्णु].

@deva[प्रौर्णावीत्] (with vṛddhi) or @deva[प्रौर्णवीत्] (with guṇa)

When @deva[सिच्] is @deva[ङित्] by @ref[1.2.6], @deva[उवङ्] applies instead: @deva[प्रौर्णुवीत्].`,

  "72007": `@deva[अतो हलादेर्लघोः] — Before @deva[इट्]-augmented parasmaipada s-aorist, vṛddhi is optional for short @deva[अ] when:
1. The stem begins with a consonant
2. The @deva[अ] is prosodially light (followed by single consonant)

@deva[अकणीत्] or @deva[अकाणीत्]
@deva[अरणीत्] or @deva[अराणीत्]

Not applicable:
- Vowel-initial roots: @deva[अशीत्], @deva[अटीत्] (no option)
- Heavy @deva[अ]: @deva[अतक्षीत्], @deva[अरक्षीत्] (no vṛddhi)`,

  "72008": `@deva[नेड् वशि कृति] — A kṛt affix beginning with @deva[वश्] consonants (@deva[व], @deva[र], @deva[ल], @deva[म], @deva[न]) does not take the @deva[इट्] augment.

With @deva[इट्] (non-vaś): @deva[ईशिता], @deva[ईशितुम्]
Without @deva[इट्] (vaś): @deva[ईश्वरः] (@deva[वरच्])

Similarly: @deva[दीप्रम्] (not @deva[*दीपितम्]), @deva[भस्म], @deva[यत्नः]

This is an exception to @ref[7.2.35].`,

  "72009": `@deva[तितुत्रतथसिसुसरकसेषु च] — The following kṛt affixes do not take @deva[इट्]: @deva[ति], @deva[तु], @deva[त्र], @deva[त], @deva[थ], @deva[सि], @deva[सु], @deva[सर], @deva[क], @deva[स].

| Affix | Example | Compare |
|-------|---------|---------|
| @deva[क्तिन्] | @deva[दीप्तिः] | @deva[दीपिता] |
| @deva[तुन्] | @deva[सक्तुः] | @deva[सचिता] |
| @deva[ष्ट्रन्] | @deva[पत्त्रम्] | @deva[पतिता] |
| @deva[तन्] | @deva[हस्तः] | @deva[हसिता] |
| @deva[क्थन्] | @deva[कुष्ठम्] | @deva[कोषिता] |
| @deva[क्सि] | @deva[कुक्षिः] | @deva[कोषिता] |`,

  "72010": `@deva[एकाच उपदेशेऽनुदात्तात्] — The @deva[इट्] augment is not added after a monosyllabic root that is anudātta (unaccented) in the Dhātupāṭha.

Generally, monosyllabic roots ending in vowels except @deva[अ], @deva[ऊ], @deva[ॠ] are anudātta and do not take @deva[इट्]:
@deva[दातृ], @deva[नेतृ], @deva[चेतृ], @deva[स्तोतृ], @deva[कर्तृ], @deva[हर्तृ]

Exceptions (take @deva[इट्]):
- All @deva[अ]-ending roots are udātta: @deva[अवधिष्ट]`,

  "72011": `@deva[श्र्युकः किति] — A @deva[कित्] affix does not take @deva[इट्] after @deva[श्रि] or after monosyllabic roots ending in @deva[उ], @deva[ऊ], @deva[ऋ], or @deva[ॠ] in the Dhātupāṭha.

| Root | Without @deva[इट्] | With @deva[इट्] |
|------|-------------------|-----------------|
| @deva[श्रि] | @deva[श्रित्वा], @deva[श्रितः] | @deva[श्रयितृ], @deva[श्रयितुम्] |
| @deva[यु] | @deva[युत्वा], @deva[युतः] | — |
| @deva[लू] | @deva[लूत्वा], @deva[लूनः] | — |
| @deva[वृ] | @deva[वृत्वा], @deva[वृतः] | — |
| @deva[तॄ] | @deva[तीर्त्वा], @deva[तीर्णः] | — |`,

  "72012": `@deva[सनि ग्रहगुहोश्च] — The desiderative @deva[सन्] does not take @deva[इट्] after @deva[उक्]-ending roots, @deva[ग्रह्], and @deva[गुह्].

@deva[जिघृक्षति] (from @deva[ग्रह्])
@deva[जुघुक्षति] (from @deva[गुह्])

These follow the pattern of @deva[उक्]-ending roots like @deva[चिकीर्षति].`,

  "72013": `@deva[कृसृभृवृस्तुद्रुस्रुश्रुवो लिटि] — In the perfect (@deva[लिट्]), @deva[इट्] is not added after @deva[कृ], @deva[सृ], @deva[भृ], @deva[वृ], @deva[स्तु], @deva[द्रु], @deva[स्रु], @deva[श्रु].

@deva[चकृव], @deva[चकृम] (not @deva[*चकरिव])
@deva[बभृव], @deva[बभृम]
@deva[तुष्टुव], @deva[तुष्टुम]
@deva[शुश्रुव], @deva[शुश्रुम]

This ensures the short vowel is retained before perfect endings.`,

  "72014": `@deva[श्वीदितो निष्ठायाम्] — Before niṣṭhā (@deva[क्त], @deva[क्तवतु]), @deva[इट्] is not added after @deva[श्वि] or roots with indicatory @deva[इ].

@deva[श्वि] → @deva[श्वित], @deva[श्वितवत्] (not @deva[*श्वयित])
@deva[इदित्] roots: no @deva[इट्] before @deva[क्त]/क्तवतु]

The indicatory @deva[इ] marks roots as anit before niṣṭhā.`,

  "72015": `@deva[यस्य विभाषा] — When desiderative @deva[सन्] optionally takes @deva[इट्] (by @ref[7.2.49]), the niṣṭhā is also optionally without @deva[इट्].

If @deva[सन्] can be seṭ or aniṭ, then @deva[क्त]/क्तवतु] follow the same pattern.`,

  "72016": `@deva[आदितश्च] — Roots with indicatory initial @deva[आ] also [take no @deva[इट्] before niṣṭhā].

The initial @deva[आ] in the Dhātupāṭha marks roots as aniṭ before @deva[क्त]/क्तवतु].`,

  "72017": `@deva[विभाषा भावादिकर्मणोः] — Before niṣṭhā, roots [with indicatory आ] optionally take @deva[इट्] when used in bhāva (impersonal) or karma (passive) sense.

Active: fixed form (usually aniṭ)
Bhāva/karma: optional @deva[इट्]`,

  "72018": `@deva[क्षुब्धस्वान्तध्वान्तलग्नम्लिष्टविरिब्धफाण्टबाढानि...] — The following irregular participles are fixed forms:

| Form | From | Meaning |
|------|------|---------|
| @deva[क्षुब्ध] | @deva[क्षुभ्] | agitated |
| @deva[स्वान्त] | @deva[स्वन्] | sounded |
| @deva[ध्वान्त] | @deva[ध्वन्] | dark |
| @deva[लग्न] | @deva[लग्] | attached |
| @deva[म्लिष्ट] | @deva[म्लिश्] | hurt |
| @deva[बाढ] | @deva[बाध्] | strong |

These have fixed irregularities in formation.`,

  "72019": `@deva[धृषिशसी वैयात्ये] — @deva[धृष्] and @deva[शस्] [have irregular niṣṭhā forms] when not meaning "diverse going."

Standard participles apply in normal senses.`,

  "72020": `@deva[दृढः स्थूलबलयोः] — @deva[दृढ] (from @deva[दृह्]) is used when meaning "thick" or "strong."

@deva[दृढः काष्ठम्] "thick wood"
@deva[दृढः पुरुषः] "strong man"`,

  "72021": `@deva[प्रभौ परिवृढः] — @deva[परिवृढ] (from @deva[वृह्]) is used when meaning "master" or "lord."

@deva[परिवृढः] when referring to a master/chief.`,

  "72022": `@deva[कृच्छ्रगहनयोः कषः] — @deva[कष्ट] is used when meaning "difficult" or "dense."

@deva[कष्टम्] "difficulty"
@deva[कष्टं वनम्] "dense forest"`,

  "72023": `@deva[घुषिरविशब्दने] — @deva[घुष्] [has irregular participle] when not meaning "sound-making."

@deva[घुष्ट] only when not in the sense of "proclaiming."`,

  "72024": `@deva[अर्देः संनिविभ्यः] — @deva[अर्द्] takes a special form when preceded by @deva[सम्], @deva[नि], or @deva[वि].

@deva[संअर्द्], @deva[न्यर्द्], @deva[व्यर्द्] → special niṣṭhā forms.`,

  "72025": `@deva[अभेश्चाविदूर्ये] — @deva[अभ्] [has special form] when meaning "not far" (i.e., "near").

When @deva[अभ्] means "near" or "close," special participle applies.`,

  "72026": `@deva[णेरध्ययने वृत्तम्] — @deva[वृत्त] is formed from causative @deva[वृत्] when meaning "studied" or "read through."

@deva[वृत्तो गुणो देवदत्तेन] "Devadatta has studied the Guṇa (a text)."
@deva[वृत्तं पारायणम्] "The recitation has been completed."

Without the sense of "study": @deva[वर्त्तितम्].`,

  "72027": `@deva[वा दान्तशान्तपूर्णदस्तस्पष्टच्छन्नज्ञप्ताः] — The following causative participles optionally take @deva[इट्]: @deva[दान्त], @deva[शान्त], @deva[पूर्ण], @deva[दस्त], @deva[स्पष्ट], @deva[छन्न], @deva[ज्ञप्त].

| Without @deva[इट्] | With @deva[इट्] |
|-------------------|-----------------|
| @deva[दान्त] | @deva[दमितः] |
| @deva[शान्त] | @deva[शमितः] |
| @deva[पूर्ण] | @deva[पूरितः] |
| @deva[छन्न] | @deva[छादितः] |
| @deva[ज्ञप्त] | @deva[ज्ञपितः] |

These are formed by @deva[लुक्]-elision of @deva[णि].`,

  "72028": `@deva[रुष्यमत्वरसंघुषास्वनाम्] — The niṣṭhā affix optionally takes @deva[इट्] after @deva[रुष्], @deva[अम्], @deva[त्वर्], @deva[संघुष्], and @deva[आस्वन्].

| Root | Without @deva[इट्] | With @deva[इट्] |
|------|-------------------|-----------------|
| @deva[रुष्] | @deva[रुष्टः] | @deva[रुषितः] |
| @deva[अम्] | @deva[अभ्यान्तः] | @deva[अभ्यमितः] |
| @deva[त्वर्] | @deva[तूर्णः] | @deva[त्वरितः] |
| @deva[संघुष्] | @deva[संघुष्टः] | @deva[संघुषितः] |
| @deva[आस्वन्] | @deva[आस्वान्तः] | @deva[आस्वनितः] |`,

  "72029": `@deva[हृषेर्लोमसु] — @deva[हृष्] optionally takes @deva[इट्] before niṣṭhā when @deva[लोमन्] "hair" (or a synonym) is in construction.

@deva[हृष्टानि लोमानि] or @deva[हृषितानि लोमानि] "bristling hair"
@deva[हृष्टाः केशाः] or @deva[हृषिताः केशाः]

Without @deva[लोमन्]: @deva[हृष्टो देवदत्तः] "the deceived Devadatta" (no option).`,

  "72030": `@deva[अपचितश्च] — @deva[अपचित] (from @deva[अप + चाय्]) optionally has a second form with @deva[इट्].

@deva[अपचितः] or @deva[अपचायितः] "feared, honored"

Before @deva[क्तिन्], @deva[चाय्] always becomes @deva[चि]: @deva[अपचितिः].`,

  "72031": `@deva[ह्रु ह्वरेश्छन्दसि] — In the Vedas, @deva[ह्रु] is substituted for @deva[ह्वर्] before the niṣṭhā affix.

Vedic: @deva[ह्रुतस्य चाह्रुतस्य च], @deva[आह्रुतम्]
Classical: @deva[ह्वृत्तम्]`,

  "72032": `@deva[अपरिह्वृताश्च] — @deva[अपरिह्वृता] is an irregular Vedic form where the @deva[ह्रु] substitution does not occur.

Vedic: @deva[अपरिह्वृताः सनुयाम वाजम्] (Ṛg I.100.19)`,

  "72033": `@deva[सोमे ह्वरितः] — In Vedic, @deva[ह्वरित्] is formed with guṇa and @deva[इट्] when referring to @deva[सोम].

Vedic: @deva[मा नः सोमो ह्वरितः], @deva[विह्वरितस्त्वम्]`,

  "72034": `@deva[ग्रसितस्कभितस्तभितोत्तभितचत्तविकस्त...] — The following are irregular Vedic participles:

| Form | Standard | From |
|------|----------|------|
| @deva[ग्रसित] | @deva[ग्रस्त] | @deva[ग्रसु] |
| @deva[स्कभित] | @deva[स्कब्ध] | @deva[स्कम्भु] |
| @deva[स्तभित] | @deva[स्तब्ध] | @deva[स्तम्भु] |
| @deva[उत्तभित] | @deva[उत्तब्ध] | @deva[स्तम्भु] |
| @deva[चत्त] | @deva[चतित] | @deva[चते] |
| @deva[विकस्त] | @deva[विकसित] | @deva[कस्] |

Also irregular agent nouns: @deva[विशस्तृ], @deva[शंस्तृ], @deva[तरुतृ], etc.`,

  "72035": `@deva[आर्धधातुकस्येड् वलादेः] — An ārdhadhātuka affix beginning with a @deva[वल्] consonant (consonant except @deva[य]) takes the @deva[इट्] augment.

@deva[लू + तृच्] → @deva[लविता]
@deva[लू + तुमुन्] → @deva[लवितुम्]
@deva[पू + तव्यत्] → @deva[पवितव्यम्]

Not before @deva[य]-initial: @deva[लव्यम्], @deva[पव्यम्].`,

  "72036": `@deva[स्नुक्रमोरनात्मनेपदनिमित्ते] — @deva[इट्] is added after @deva[स्नु] and @deva[क्रम्] only when they do not cause ātmanepada endings.

With @deva[इट्] (not causing ātmanepada):
@deva[प्रस्नविता], @deva[प्रक्रमिता]

Without @deva[इट्] (causing ātmanepada):
@deva[प्रस्नोषीष्ट], @deva[प्रक्रंसीष्ट], @deva[प्रस्नोष्यते], @deva[प्रक्रंस्यते]`,

  "72037": `@deva[ग्रहोऽलिटि दीर्घः] — The @deva[इट्] added to ārdhadhātuka affixes is lengthened after @deva[ग्रह्], except in the perfect.

@deva[ग्रह् + तृच्] → @deva[ग्रहीता]
@deva[ग्रह् + तुमुन्] → @deva[ग्रहीतुम्]
@deva[ग्रह् + तव्यत्] → @deva[ग्रहीतव्यम्]

But perfect: @deva[जगृहिव], @deva[जगृहिम] (short @deva[इ]).`,

  "72038": `@deva[वॄतो वा] — The @deva[इट्] is optionally lengthened after @deva[वृ] (@deva[वृञ्]) and after roots ending in long @deva[ॠ], except in the perfect.

@deva[वृ] → @deva[वरिता] or @deva[वरीता]
@deva[तॄ] → @deva[तरिता] or @deva[तरीता]
@deva[स्तॄ] → @deva[आस्तरिता] or @deva[आस्तरीता]

But perfect: @deva[ववरिथ], @deva[तैरिथ] (no lengthening).`,

  "72039": `@deva[न लिङि] — The @deva[इट्] is not lengthened after @deva[वृ] and @deva[ॠ]-ending roots in the benedictive (@deva[लिङ्]).

@deva[विवरिषीष्ठ] (not @deva[*विवरीषीष्ठ])
@deva[आस्तरिषीष्ठ]
@deva[विस्तरिषीष्ठ]`,

  "72040": `@deva[सिचि च परस्मैपदेषु] — The @deva[इट्] is not lengthened after @deva[वृ] and @deva[ॠ]-ending roots in the parasmaipada s-aorist.

@deva[प्रावारिष्टाम्], @deva[प्रावारिषुः]
@deva[अतारिष्टाम्] (from @deva[तॄ])
@deva[आस्तारिष्टाम्], @deva[आस्तारिषुः] (from @deva[स्तृञ्])

But ātmanepada: @deva[प्रावरिष्ट] or @deva[प्रावरीष्ट] (optional).`,

  "72041": `@deva[इट् सनि वा] — The desiderative @deva[सन्] optionally takes @deva[इट्] (which may be lengthened) after @deva[वृ] and @deva[ॠ]-ending roots.

@deva[वृ] → @deva[वुवूर्षति] or @deva[विवरिषते] or @deva[विवरीषते]
@deva[तॄ] → @deva[तितीर्षति] or @deva[तितरिषति] or @deva[तितरीषति]

Not for @deva[कृ], @deva[हृ]: @deva[चिकीर्षति], @deva[जिहीर्षति] (lengthening is by @ref[6.4.16], not this rule).`,

  "72042": `@deva[लिङ्सिचोरात्मनेपदेषु] — The @deva[इट्] is optionally added to ātmanepada benedictive and s-aorist endings after @deva[वृ] and @deva[ॠ]-ending roots.

Benedictive: @deva[वृषीष्ट] or @deva[वरिषीष्ट]
S-aorist: @deva[अवृत] or @deva[अवरिष्ट] or @deva[अवरीष्ट]

Parasmaipada: @deva[प्रावारिष्टाम्] (no option—rule doesn't apply).`,

  "72043": `@deva[ऋतश्च संयोगादेः] — The @deva[इट्] is optionally added to ātmanepada benedictive and s-aorist after a short @deva[ऋ]-ending root that begins with a conjunct consonant.

@deva[ध्वृ] → @deva[ध्वृषीष्ट] or @deva[ध्वरिषीष्ट]
@deva[स्मृ] → @deva[स्मृषीष्ट] or @deva[स्मरिषीष्ट]
Aorist: @deva[अध्वृषाताम्] or @deva[अध्वरिषाताम्]

Not applicable:
- Non-@deva[ऋ] roots: @deva[च्योषीष्ट] (no option)
- Non-conjunct initial: @deva[कृषीष्ट] (no option)`,

  "72044": `@deva[स्वरतिसूतिसूयतिधूञूदितो वा] — An ārdhadhātuka @deva[वलादि] affix optionally takes @deva[इट्] after @deva[स्वृ], @deva[सू] (@deva[सूति] and @deva[सूयति]), @deva[धूञ्], and roots with indicatory long @deva[ऊ].

| Root | Without @deva[इट्] | With @deva[इट्] |
|------|-------------------|-----------------|
| @deva[स्वृ] | @deva[स्वर्त्ता] | @deva[स्वरिता] |
| @deva[सू] | @deva[सोता] | @deva[सविता] |
| @deva[धूञ्] | @deva[धोता] | @deva[धविता] |
| @deva[गाहू] | @deva[विगाढा] | @deva[विगाहिता] |
| @deva[गुपू] | @deva[गोप्ता] | @deva[गोपिता] |`,

  "72045": `@deva[रधादिभ्यश्च] — An ārdhadhātuka @deva[वलादि] affix optionally takes @deva[इट्] after the @deva[रध्]-class roots.

These roots have optional @deva[इट्] before @deva[वलादि] affixes.`,

  "72046": `@deva[निरः कुषः] — @deva[कुष्] preceded by @deva[निर्] [optionally takes @deva[इट्]].

@deva[निष्कोष्टा] or @deva[निष्कोषिता]`,

  "72047": `@deva[इण्निष्ठायाम्] — @deva[इ] (root @deva[इण्] "to go") [optionally takes @deva[इट्]] before niṣṭhā.

@deva[इत] or @deva[इयित]`,

  "72048": `@deva[तीषसहलुभरुषरिषः] — The following roots [optionally take @deva[इट्]]: @deva[तीष्], @deva[सह्], @deva[लुभ्], @deva[रुष्], @deva[रिष्].

Each has optional @deva[इट्] before ārdhadhātuka affixes.`,

  "72049": `@deva[सनीवन्तर्धभ्रस्जदम्भुश्रिस्वृयूर्णुभरज्ञपिसनाम्] — The desiderative @deva[सन्] optionally takes @deva[इट्] after @deva[अन्तर्ध], @deva[भ्रस्ज्], @deva[दम्भ्], @deva[श्रि], @deva[स्वृ], @deva[यु], @deva[ऊर्णु], @deva[भर्], @deva[ज्ञप्].

These roots have optional @deva[इट्] specifically before desiderative @deva[सन्].`,

  "72050": `@deva[क्लिशः क्त्वानिष्ठयोः] — @deva[क्लिश्] optionally takes @deva[इट्] before @deva[क्त्वा] and niṣṭhā.

@deva[क्लिश्] → @deva[क्लिष्ट्वा] or @deva[क्लेशित्वा]
@deva[क्लिश्] → @deva[क्लिष्ट] or @deva[क्लेशित]`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.2.1-50)`);
console.log(`Total entries: ${Object.keys(data).length}`);
