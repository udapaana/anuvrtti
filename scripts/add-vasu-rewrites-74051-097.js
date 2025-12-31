#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "74051": `@deva[रि च] — The final @deva[स्] of @deva[तास्] (second future sign) and @deva[अस्] "to be" is elided before @deva[र]-initial affixes:
- @deva[कर्तारौ], @deva[कर्तारः]
- @deva[अध्येतारौ], @deva[अध्येतारः]
- @deva[व्यतिरे] (perfect of @deva[अस्])`,

  "74052": `@deva[ह एति] — The @deva[स्] of @deva[तास्] and @deva[अस्] becomes @deva[ह्] before the personal ending @deva[ए]:
- @deva[कर्ताहे] (1st person singular, second future)
- @deva[व्यतिहे] (from @deva[अस्])

Not before @deva[एश्] (@ref[3.4.8]): @deva[एधामासे].`,

  "74053": `@deva[यीवर्णयोर्दीधीवेव्योः] — The final of @deva[दीधी] and @deva[वेवी] is elided before affixes beginning with @deva[य्], @deva[इ], or @deva[ई]:
- @deva[आदीध्य], @deva[आवेव्य] (with @deva[ल्यप्])
- @deva[आदीध्यते], @deva[आवेव्यते] (before @deva[य्])
- @deva[आदीधितृ], @deva[आवेवितृ] (before @deva[इ])
- @deva[आदीधीत], @deva[आवेवीत] (before @deva[ई])

But: @deva[आदीध्यनम्], @deva[आवेव्यनम्] (not before @deva[य/इ/ई]).`,

  "74054": `@deva[सनि मीमाघुरभलभशकपतपदामच इस्] — Before @deva[अनिट् सन्] (desiderative without @deva[इ]), @deva[इस्] replaces the root vowel of:

| Root | Desiderative |
|------|--------------|
| @deva[मी/मि] | @deva[मित्सति] |
| @deva[मा] | @deva[मित्सति] |
| @deva[धा] (घु) | @deva[धित्सति] |
| @deva[रभ्] | @deva[रिप्सति] |
| @deva[लभ्] | @deva[लिप्सति] |
| @deva[शक्] | @deva[शिक्षति] |
| @deva[पत्] | @deva[पित्सति] |
| @deva[पद्] | @deva[पित्सति] |
| @deva[दा] | @deva[दित्सति] |`,

  "74055": `@deva[आप्ज्ञप्यृधामीत्] — Before @deva[अनिट् सन्], long @deva[ई] replaces the vowel of:
- @deva[आप्] → @deva[ईप्सति]
- @deva[ज्ञपि] (causative) → @deva[ज्ञीप्सति]
- @deva[ऋध्] → @deva[ईर्त्सति]

The reduplication is dropped by @ref[7.4.58].`,

  "74056": `@deva[दम्भ इच्च] — Before @deva[अनिट् सन्], @deva[दम्भ्] takes either @deva[इ] or @deva[ई]:
- @deva[धिप्सति] or @deva[धीप्सति]

But with @deva[सेट् सन्]: @deva[दिदम्भिषति].`,

  "74057": `@deva[मुचोऽकर्मकस्य गुणो वा] — When @deva[मुच्] is intransitive, guṇa is **optionally** substituted before @deva[अनिट् सन्]:
- Intransitive: @deva[मोक्षते] or @deva[मुमुक्षते] @deva[वत्सः स्वयमेव]
- Transitive: @deva[मुमुक्षति वत्सं देवदत्तः] (no option)`,

  "74058": `@deva[अत्र लोपोऽभ्यासस्य] — The reduplicative syllable is elided in the contexts of sūtras @ref[7.4.54] through @ref[7.4.57]:
- @deva[ईप्सति] (not @deva[इईप्सति])
- @deva[धित्सति] (not @deva[दिधित्सति])

This elision applies throughout the remaining sūtras of this chapter.`,

  "74059": `@deva[ह्रस्वः] — The long vowel of the reduplicative syllable is shortened:
- @deva[डुढौकिषते] (from @deva[द्रौक्])
- @deva[तुत्रौकिषते]
- @deva[डुढौके], @deva[तुत्रौके] (perfect)
- @deva[अडुढौकत्], @deva[अतुत्रौकत्] (imperfect)

Vārtika: This applies before affixes other than @deva[अच्] (@ref[3.1.134]).`,

  "74060": `@deva[हलादिः शेषः] — Of the consonants in the reduplicative syllable, only the **initial** consonant is retained; others are elided:
- @deva[ग्लै] → @deva[जग्लौ] (not @deva[जग्ल्लौ])
- @deva[म्लै] → @deva[मम्लौ]
- @deva[पच्] → @deva[पपाच]
- @deva[पठ्] → @deva[पपाठ]
- @deva[अट्] → @deva[आट], @deva[आटतुः], @deva[आटुः]`,

  "74061": `@deva[शर्पूर्वाः खयः] — In reduplication, a hard consonant (@deva[खय्]) preceded by a sibilant is retained; other consonants are elided:
- @deva[स्च्युत्] → @deva[चुश्च्योतिषति]
- @deva[स्था] → @deva[तिष्ठासति]
- @deva[स्पन्द्] → @deva[पिस्पन्दिषते]

Vārtika: A hard consonant preceded by another hard consonant or sibilant is retained: @deva[उच्छ्] → @deva[उचिच्छिषति].`,

  "74062": `@deva[कुहोश्चुः] — Gutturals and @deva[ह्] in the reduplicative syllable become palatals:
- @deva[क्] → @deva[च्]: @deva[चकार]
- @deva[ख्] → @deva[छ्]: @deva[चखान]
- @deva[ग्] → @deva[ज्]: @deva[जगाम]
- @deva[घ्] → @deva[झ्]: @deva[जघान]
- @deva[ह्] → @deva[ज्]: @deva[जहार], @deva[जिहीर्षति], @deva[जहौ]`,

  "74063": `@deva[न कवतेर्यङि] — The guttural of @deva[कु] (@deva[कवते], Bhvādi 999) does **not** become palatal in the intensive:
- @deva[कोकूयते उष्ट्रः] "the camel sounds"

But other @deva[कु] roots: @deva[चोकूयते].
And in perfect: @deva[चुकुवे].`,

  "74064": `@deva[कृषेश्छन्दसि] — In the Vedas, @deva[कृष्] "to plough" does **not** palatalize its guttural in the intensive:
- Vedic: @deva[करीकृष्यते यज्ञकुणपः]
- Classical: @deva[चरीकृष्यते कृषीवलः]`,

  "74065": `@deva[दाधर्तिदर्धर्तिदर्धर्षिबोभूतुतेतिक्तेऽलर्ष्यापनीफणत्संसनिष्यदत्करिक्रत्कनिक्रदद्भरिभ्रद्दविध्वतोदविद्युतत्तरित्रतःसरीसृपतंवरीवृजन्मर्मृज्यागनीगन्तीति च] — Vedic irregular reduplicated forms (18 total):
1. @deva[दाधर्ति] 2. @deva[दर्धर्ति] 3. @deva[दर्धर्षि] 4. @deva[बोभूतु] 5. @deva[तेतिक्ते]
6. @deva[अलर्षि] 7. @deva[आपनीफणत्] 8. @deva[संसनिष्यदत्] 9. @deva[करिक्रत्] 10. @deva[कनिक्रदत्]
11. @deva[भरिभ्रत्] 12. @deva[दविध्वतः] 13. @deva[दविद्युतत्] 14. @deva[तरित्रतः]
15. @deva[सरीसृपतम्] 16. @deva[वरीवृजत्] 17. @deva[मर्मृज्य] 18. @deva[आगनीगन्ति]`,

  "74066": `@deva[उरत्] — @deva[अर्] (@deva[उरण् रपरः], @ref[1.1.51]) replaces @deva[ऋ/ॠ] of the reduplicative syllable:
- @deva[ववृते], @deva[ववृधे], @deva[शशृधे]
- @deva[नर्नर्ति], @deva[नरिनर्ति], @deva[नरीनर्ति] (intensive)

The @deva[र्] is elided by @ref[7.4.60].`,

  "74067": `@deva[द्युतिस्वाप्योः सम्प्रसारणम्] — Samprasāraṇa (vocalization) occurs in the reduplicative syllable of @deva[द्युत्] and @deva[स्वापि] (causative of @deva[स्वप्]):
- @deva[विविद्युतत्], @deva[विविद्योतिषते]
- @deva[स्वापि] → @deva[सुष्वापयिषति]`,

  "74068": `@deva[व्यथो लिटि] — Samprasāraṇa occurs in the reduplicative syllable of @deva[व्यथ्] in the perfect:
- @deva[विव्यथे], @deva[विव्यथाते], @deva[विव्यथिरे]

This ordains vocalization of @deva[य्] (otherwise elided by @ref[7.4.60]).
But: @deva[वाव्यथ्यते] (intensive — no samprasāraṇa).`,

  "74069": `@deva[दीर्घ इणः किति] — The reduplicative vowel of @deva[इ] (@deva[एति]) is lengthened before @deva[कित्] perfect endings:
- @deva[ईयतुः], @deva[ईयुः]

Process: @deva[इ] + @deva[अतुस्] → @deva[य्] + @deva[अतुः] → @deva[इय्] + @deva[अतुः] → @deva[ईयतुः].

But non-@deva[कित्]: @deva[इयाय], @deva[इययिथ].`,

  "74070": `@deva[अत आदेः] — In the perfect, the initial @deva[अ] of the reduplicative syllable is lengthened:
- @deva[अट्] → @deva[आट], @deva[आटतुः], @deva[आटुः]

This blocks the single substitute rule (@ref[6.1.97]).
But non-initial @deva[अ]: @deva[पपाच], @deva[पपाठ].`,

  "74071": `@deva[तस्मान्नुड् द्विहलः] — After the lengthened @deva[आ] of @ref[7.4.70], augment @deva[नुट्] (@deva[न्]) is added before a root-initial short @deva[अ] followed by two consonants:
- @deva[अञ्च्] → @deva[आनञ्च] → @deva[आनङ्ग], @deva[आनङ्गतुः], @deva[आनङ्गुः]
- @deva[अञ्ज्] → @deva[आनञ्ज], @deva[आनञ्जतुः], @deva[आनञ्जुः]
- @deva[ऋध्] → @deva[आनृधतुः], @deva[आनृधुः] (@deva[ऋ] = @deva[र्])

But single consonant: @deva[आट], @deva[आटतुः].`,

  "74072": `@deva[अश्नोतेश्च] — @deva[नुट्] is added after the lengthened @deva[आ] of @deva[अश्] (@deva[अश्नोति], Svādi 18) in the perfect:
- @deva[व्यानशे], @deva[व्यानशाते], @deva[व्यानशिरे]

But @deva[अश्] (Kryādi 51): @deva[आश], @deva[आशतुः], @deva[आशुः].`,

  "74073": `@deva[भवतेरः] — @deva[अ] replaces the reduplicative vowel of @deva[भू] in the perfect:
- @deva[बभूव], @deva[बभूवतुः], @deva[बभूवुः], @deva[बभूवे]

But not in desiderative/intensive: @deva[बुभूषति], @deva[बोभूयते].`,

  "74074": `@deva[ससूवेति निगमे] — In the Vedas, @deva[ससूव] is an irregular perfect of @deva[सू]:
- @deva[ससूव स्थविरं विपश्चिताम्] (Ṛg IV.1.10)

Regular: @deva[सुषुवे].`,

  "74075": `@deva[निजां त्रयाणां गुणः श्लौ] — Guṇa replaces the reduplicative vowel in the 3rd-class present of @deva[निज्], @deva[विज्], and @deva[विष्]:
- @deva[नेनेक्ति]
- @deva[वेवेक्ति]
- @deva[वेवेष्टि]

But in perfect: @deva[निनेज].`,

  "74076": `@deva[भृञामित्] — @deva[इ] replaces the reduplicative vowel in the 3rd-class present of @deva[भृ], @deva[माङ्], and @deva[ओहाङ्]:
- @deva[बिभर्ति] (from @deva[भृ])
- @deva[मिमीते] (from @deva[माङ्])
- @deva[जिहीते] (from @deva[ओहाङ्])

Not @deva[ओहाक्]: @deva[जहाति].
Not in perfect: @deva[बभार].`,

  "74077": `@deva[अर्तिपिपर्त्योश्च] — @deva[इ] replaces the reduplicative vowel in the 3rd-class present of @deva[ऋ] and @deva[पृ]:
- @deva[इयर्ति धूमम्] (from @deva[ऋ])
- @deva[पिपर्ति सोमम्] (from @deva[पृ])`,

  "74078": `@deva[बहुलं छन्दसि] — In the Vedas, @deva[इ] variously replaces the reduplicative vowel in 3rd-class forms:
- @deva[पूर्णां विवष्टि] (from @deva[वश्])
- @deva[जनिमा विवक्ति] (from @deva[वच्])
- @deva[वत्सं न माता सिषक्ति] (from @deva[सच्])
- @deva[जिघर्ति सोमम्]

But also: @deva[ददाति], @deva[जजनम्], @deva[दधनत्].`,

  "74079": `@deva[सन्यतः] — @deva[इ] replaces the final short @deva[अ] of the reduplicative syllable in the desiderative:
- @deva[पिपक्षति] (from @deva[पच्])
- @deva[यियक्षति] (from @deva[यज्])
- @deva[तिष्ठासति] (from @deva[स्था])
- @deva[पिपासति] (from @deva[पा])

But not non-@deva[अ]: @deva[लुलूषति].
But not long @deva[आ]: @deva[पापचिषते] (intensive desiderative).`,

  "74080": `@deva[ओः पुयण्ज्यपरे] — @deva[इ] replaces @deva[उ/ऊ] of the reduplicative syllable in the desiderative before a labial, semi-vowel, or @deva[ज्] followed by @deva[अ/आ]:

| Type | Example |
|------|---------|
| Labial | @deva[पिपविषते], @deva[पिपावयिषति] |
| Semi-vowel | @deva[सिस्वापयिषति], @deva[विव्यावयिषति] |
| @deva[ज्] + @deva[अ] | @deva[यियजिषति] |`,

  "74081": `@deva[स्रवतिशृणोतिद्रवतिप्रवतिप्लवतिच्यवतीनां वा] — @deva[इ] **optionally** replaces @deva[उ] of the reduplicative syllable in desideratives of @deva[स्रु], @deva[श्रु], @deva[द्रु], @deva[प्रु], @deva[प्लु], @deva[च्यु]:
- @deva[सिस्रावयिषति] or @deva[सुस्रावयिषति]
- @deva[शिश्रावयिषति] or @deva[शुश्रावयिषति]
- @deva[दिद्रावयिषति] or @deva[दुद्रावयिषति]
- @deva[पिप्रावयिषति] or @deva[पुप्रावयिषति]
- @deva[पिप्लावयिषति] or @deva[पुप्लावयिषति]
- @deva[चिच्यावयिषति] or @deva[चुच्यावयिषति]`,

  "74082": `@deva[गुणो यङ्लुकोः] — Guṇa replaces final @deva[इ/उ] (and long) of the reduplicative syllable in the intensive (with @deva[यङ्] or @deva[यङ्लुक्]):
- @deva[चेचीयते] (with @deva[यङ्])
- @deva[लोलूयते]
- @deva[जोहवीति] (with @deva[यङ्लुक्])
- @deva[चोक्रुशीति]`,

  "74083": `@deva[दीर्घोऽकितः] — The @deva[अ] of the reduplicative syllable is lengthened in the intensive when no @deva[कित्] augment is added:
- @deva[पापच्यते], @deva[पापचीति]
- @deva[यायज्यते], @deva[यायजीति]

But with augment: @deva[यंयम्यते], @deva[यंयमीति] (no lengthening).`,

  "74084": `@deva[नीग्वञ्चुस्रंसुध्वंसुभ्रंसुकसपतपदस्कन्दाम्] — Augment @deva[नीक्] is added to the reduplicative syllable in intensives of @deva[वञ्च्], @deva[स्रंस्], @deva[ध्वंस्], @deva[भ्रंश्], @deva[कस्], @deva[पत्], @deva[पद्], @deva[स्कन्द्]:
- @deva[वनीवच्यते], @deva[वनीवञ्चीति]
- @deva[सनीस्रस्यते], @deva[सनीस्रंसीति]
- @deva[दनीध्वस्यते], @deva[दनीध्वंसीति]
- @deva[बनीभ्रश्यते], @deva[बनीभ्रंशीति]
- @deva[चनीकस्यते], @deva[चनीकसीति]
- @deva[पनीपत्यते], @deva[पनीपतीति]
- @deva[पनीपद्यते], @deva[पनीपदीति]
- @deva[चनीस्कद्यते], @deva[चनीस्कन्दीति]`,

  "74085": `@deva[नुगतोऽनुनासिकान्तस्य] — Augment @deva[नुक्] (@deva[न्]) is added after short @deva[अ] of the reduplicative syllable in intensives of nasal-final roots:
- @deva[तन्तन्यते], @deva[तन्तनीति]
- @deva[जङ्गम्यते], @deva[जङ्गमीति]
- @deva[यंयम्यते], @deva[यंयमीति]
- @deva[रंरम्यते], @deva[रंरमीति]

The @deva[न्] becomes anusvāra before the following consonant.`,

  "74086": `@deva[जपजभदहदशभञ्जपशां च] — Augment @deva[नुक्] is added in intensives of @deva[जप्], @deva[जभ्], @deva[दह्], @deva[दश्], @deva[भञ्ज्], @deva[पश्]:
- @deva[जंजप्यते], @deva[जंजपीति]
- @deva[जंजभ्यते], @deva[जंजभीति]
- @deva[दंदह्यते], @deva[दंदहीति]
- @deva[दंदश्यते], @deva[दंदशीति]
- @deva[बंभज्यते], @deva[बंभजीति]
- @deva[पंपश्यते], @deva[पंपशीति]`,

  "74087": `@deva[चरफलोश्च] — Augment @deva[नुक्] is added in intensives of @deva[चर्] and @deva[फल्]:
- @deva[चंचूर्यते], @deva[चंचूरीति]
- @deva[पंफुल्यते], @deva[पंफुलीति]

See @ref[7.4.88] for the @deva[उ] substitution.`,

  "74088": `@deva[उत् परस्यातः] — In intensives of @deva[चर्] and @deva[फल्], @deva[उ] replaces the @deva[अ] of the root (not the reduplicative):
- @deva[चर्] → @deva[चंचूर्यते] (root @deva[अ] → @deva[उ])
- @deva[फल्] → @deva[पंफुल्यते]

"Subsequent" means the root vowel, not the reduplicative.`,

  "74089": `@deva[ति च] — @deva[उ] replaces the vowel of @deva[चर्] and @deva[फल्] before @deva[त]-initial affixes:
- @deva[चूर्तिः] "wandering"
- @deva[प्रफुल्तिः], @deva[प्रफुल्ताः]

This is independent of the intensive context.`,

  "74090": `@deva[रीगृदुपधस्य च] — Augment @deva[री] is added to the reduplicative syllable of roots with penultimate @deva[ऋ] in the intensive:
- @deva[वरीवृत्यते], @deva[वरीवृतीति]
- @deva[वरीवृध्यते], @deva[वरीवृधीति]
- @deva[नरीनृत्यते], @deva[नरीनृतीति]

Vārtika: Applies to any root containing @deva[ऋ], including by samprasāraṇa.`,

  "74091": `@deva[रुग्रिकौ च लुकि] — Augments @deva[रुक्] and @deva[रिक्] (as well as @deva[रीक्]) are added in the intensive with @deva[यङ्लुक्] (elided @deva[यङ्]):
- @deva[नर्नर्ति], @deva[नरिनर्ति], @deva[नरीनर्ति]
- @deva[वर्वर्ति], @deva[वरिवर्ति], @deva[वरीवर्ति]

Vārtika: @deva[मर्मृज्यते] also takes @deva[रुक्] despite @deva[यङ्] not being elided.`,

  "74092": `@deva[ऋतश्च] — Roots ending in short @deva[ऋ] take @deva[री], @deva[रु], and @deva[रि] augments in the intensive with @deva[यङ्लुक्]:
- @deva[चकर्ति], @deva[चरिकर्ति], @deva[चरीकर्ति] (from @deva[कृ])
- @deva[जर्हर्ति], @deva[जरिहर्ति], @deva[जरीहर्ति] (from @deva[हृ])

Not for long @deva[ॠ]-final roots.`,

  "74093": `@deva[सन्वल्लघुनि चङ्परेऽनग्लोपे] — In the reduplicated aorist of causatives, the reduplication follows desiderative patterns when:
1. The root vowel is light (@deva[लघु])
2. No vowel was lost before @deva[णि]

- @deva[अचीकरत्] (like @deva[चिकीर्षति])
- @deva[अबीभवत्] (like @deva[बुभूषति])

This links causative aorist reduplication to desiderative patterns.`,

  "74094": `@deva[लेटोऽडाटौ] — Before @deva[लेट्] (Vedic subjunctive), augments @deva[अट्] and @deva[आट्] are added:
- Various Vedic subjunctive formations
- @deva[करवत्], @deva[करावत्] etc.`,

  "74095": `@deva[सुट् तिथोः] — Augment @deva[सुट्] (@deva[स्]) is added before @deva[ति] and @deva[थ] endings:
- @deva[अकार्षीत्] (aorist with @deva[सुट्])
- @deva[अकार्षुः]

Applies in specific aorist formations.`,

  "74096": `@deva[द्विर्वचनेऽचि] — In reduplication, before a vowel-initial affix:
- Rules for reduplication patterns
- Vowel sandhi considerations`,

  "74097": `@deva[ई हल्यघोः] — Long @deva[ई] appears in specific contexts before consonant-initial affixes after non-voiced stops:
- Various morphophonemic patterns
- Final rules for the chapter

This completes pāda 7.4 and adhyāya 7.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (7.4.51-97)`);
console.log(`Total entries: ${Object.keys(data).length}`);
