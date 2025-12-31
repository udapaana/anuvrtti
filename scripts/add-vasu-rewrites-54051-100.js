import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '54051': `@deva[अरुर्मनश्चक्षुश्चेतोरहोरजसां हलः] — @deva[च्वि] comes after @deva[अरुस्], @deva[मनस्], @deva[चक्षुस्], @deva[चेतस्], @deva[रहस्], and @deva[रजस्], with elision of their final consonant.

| Base | + @deva[च्वि] | Example |
|------|-------------|---------|
| @deva[अरुस्] | @deva[अरू] | @deva[अरू करोति/भवति/स्यात्] |
| @deva[मनस्] | @deva[उन्मनी] | @deva[उन्मनी करोति/भवति/स्यात्] |
| @deva[चक्षुस्] | @deva[चक्षू] | — |
| @deva[चेतस्] | @deva[चेतो] | — |
| @deva[रहस्] | @deva[रहो] | — |
| @deva[रजस्] | @deva[रजो] | — |

The final consonant is elided before @deva[च्वि].`,

  '54052': `@deva[साति कृत्स्नस्य विभाषा] — @deva[साति] optionally comes (in place of @deva[च्वि]) when the original is changed in its totality.

@deva[कृत्स्न] = whole, entire

| Expression | With @deva[साति] | With @deva[च्वि] |
|-----------|-----------------|----------------|
| weapon becomes fire | @deva[अग्निसाद् भवति शस्त्रम्] | @deva[अग्नी भवति शस्त्रम्] |
| salt dissolves in water | @deva[उदकसाद् भवति लवणम्] | @deva[उदकी भवति लवणम्] |`,

  '54053': `@deva[सम्पदि च संख्यान्ताभिविधौ] — @deva[साति] comes with @deva[सम्पद्] when the meaning is that all things of a kind are changed, though partially.

@deva[अभिविधि] = pervasion, all instances

By @deva[च], verbs @deva[कृ], @deva[भू], @deva[अस्] are also included.

Example: @deva[लवणसाद् संपद्यते] — "it becomes like salt" (referring to all instances)

The @deva[च्वि] affix can also optionally be used in the same sense.`,

  '54054': `@deva[स्वामिन ईश्वरेऽधिने] — @deva[साति] comes after words expressing "master/lord" in the sense of "dependent upon" with verbs @deva[कृ], @deva[भू], @deva[अस्], @deva[सम्पद्].

@deva[तदधीन] = under the control/supremacy of that

| Expression | Meaning |
|-----------|---------|
| @deva[देवदत्तसात् करोति] | makes dependent on Devadatta |
| @deva[राजसात् करोति] | places under the king's control |`,

  '54055': `@deva[देये त्रा च] — @deva[त्रा] (and @deva[साति]) come in the sense of "to be given" with verbs @deva[कृ], @deva[भू], @deva[अस्], @deva[सम्पद्].

When a proper gift is offered to brāhmaṇas etc.

| Expression | Meaning |
|-----------|---------|
| @deva[ब्राह्मणत्रा करोति] | gives to the brāhmaṇas |
| @deva[ब्राह्मणसात् करोति] | gives to the brāhmaṇas |`,

  '54056': `@deva[देवमनुष्यपुरुषपुरुमर्त्येभ्यो द्वितीयासप्तम्योर्बहुलम्] — @deva[त्रा] comes diversely after @deva[देव], @deva[मनुष्य], @deva[पुरुष], @deva[पुरु], @deva[मर्त्य] in accusative or locative construction.

The @deva[त्रा] has accusative/locative force.

| Expression | Meaning |
|-----------|---------|
| @deva[देवान् गच्छति] = @deva[देवत्रा गच्छति] | goes to the gods |
| @deva[देवेषु वसति] = @deva[देवत्रा वसति] | dwells among the gods |
| @deva[मनुष्यत्रा], @deva[पुरुषत्रा], @deva[पुरुत्रा], @deva[मर्त्यत्रा] | similarly |`,

  '54057': `@deva[अव्यक्तानुकरणस्यात इतौ डाच् द्व्यजवरार्धात्] — @deva[डाच्] comes after the half of a polysyllabic word imitating an inarticulate sound, when NOT followed by @deva[इति].

@deva[अव्यक्त] = inarticulate sound (where vowels are not clearly pronounced)
@deva[द्व्यजवरार्ध] = whose half has at least two syllables (4+ syllable words)

Example: @deva[पटपटा करोति] — "makes pattering sound"

When followed by @deva[इति]: @deva[पटपट इति करोति]`,

  '54058': `@deva[द्वितीयतृतीयशम्बबीजात् कृषौ कृञः] — @deva[डाच्] comes after @deva[द्वितीय], @deva[तृतीय], @deva[शम्ब], @deva[बीज] with verb @deva[कृ] when meaning "to plough."

| Expression | Meaning |
|-----------|---------|
| @deva[द्वितीया करोति] | makes the second ploughing |
| @deva[तृतीया करोति] | makes the third ploughing |
| @deva[शम्बा करोति] | ploughs contrariwise |
| @deva[बीजा करोति] | sows seeds |

Only @deva[कृ] (not @deva[भू], @deva[अस्]).`,

  '54059': `@deva[संख्यागुणात् कृषौ] — @deva[डाच्] comes after a numeral followed by @deva[गुण] when meaning "to plough."

@deva[द्विगुणा करोति क्षेत्रम्] — "he ploughs the field twice"
@deva[त्रिगुणा करोति क्षेत्रम्] — "he ploughs the field thrice"

When not ploughing: @deva[द्विगुणां करोति रज्जुम्] — "he doubles the rope" (no @deva[डाच्])`,

  '54060': `@deva[समयाद्यापनायां कृञः] — @deva[डाच्] comes after @deva[समय] with @deva[कृ] when meaning "neglecting" or "wasting time."

@deva[यापना] = wasting, neglecting

@deva[समया करोति] = @deva[कालक्षेपं करोति] — "he wastes time"

(One who postpones saying "today I'm busy, tomorrow or day after I'll find time")`,

  '54061': `@deva[सपत्रनिष्पत्राभ्यामतिव्यथने कृञः] — @deva[डाच्] comes after @deva[सपत्र] and @deva[निष्पत्र] with @deva[कृ] when meaning "intense pain."

@deva[अतिव्यथन] = violent pain

| Expression | Meaning |
|-----------|---------|
| @deva[सपत्रा करोति मृगम्] | pierces so deep the feathers enter the body |
| @deva[निष्पत्रा करोति] | arrow exits the other side |`,

  '54062': `@deva[निष्कुलान्निष्कोषणे] — @deva[डाच्] comes after @deva[निष्कुल] with @deva[कृ] when meaning "to disembowel."

@deva[निष्कोषण] = bringing out inner organs, eviscerating

| Expression | Meaning |
|-----------|---------|
| @deva[निष्कुला करोति पशून्] | disembowels the animals |
| @deva[निष्कुला करोति दाडिमम्] | takes out pomegranate seeds |

When not "disembowel": @deva[निष्कुलान् करोति शत्रून्] — "makes enemies without family" (no @deva[डाच्])`,

  '54063': `@deva[सुखप्रियाभ्यामानुलोम्ये] — @deva[डाच्] comes after @deva[सुख] and @deva[प्रिय] with @deva[कृ] when meaning "to please" (going with the grain).

@deva[आनुलोम्य] = conforming to wishes, agreeableness

| Expression | Meaning |
|-----------|---------|
| @deva[सुखा करोति स्वामिन्] | pleases the master |
| @deva[प्रिया करोति स्वामिन्] | gratifies the master |

When not "please": @deva[सुखं करोति] (no @deva[डाच्])`,

  '54064': `@deva[दुःखात् प्रातिलोम्ये] — @deva[डाच्] comes after @deva[दुःख] with @deva[कृ] when meaning "going against the grain."

@deva[प्रातिलोम्य] = opposing, paining

@deva[दुःखा करोति भृत्यः] — "the servant pains the master"

When not "opposing": @deva[दुःखं करोति कदन्नम्] — "bad food causes suffering" (no @deva[डाच्])`,

  '54065': `@deva[शूलाद्भर्जने] — @deva[डाच्] comes after @deva[शूल] with @deva[कृ] when meaning "roasting."

@deva[शूले पचति] = @deva[शूला करोति मांसम्] — "roasts meat on a spit"

When not "roasting": @deva[शूलं करोति कदन्नम्] — "bad food causes colic" (no @deva[डाच्])`,

  '54066': `@deva[सत्यादन्यत्रानृतात्] — @deva[डाच्] comes after @deva[सत्य] with @deva[कृ] when NOT meaning "to swear."

@deva[सत्या करोति वणिक् भाण्डम्] — "the merchant concludes the bargain" (settles purchase)

When "swearing": @deva[सत्यं करोति ब्राह्मणः] — "the brāhmaṇa swears" (no @deva[डाच्])

Compare: @deva[सत्येन शापयेद् विप्रम्] — "swear a brāhmaṇa by truth"`,

  '54067': `@deva[मद्राद् परिवापणे] — @deva[डाच्] comes after @deva[मद्र] with @deva[कृ] when meaning "to shave."

@deva[परिवापण] = shaving

@deva[मद्रा करोति] = @deva[मङ्गलं मुण्डनं करोति] — "performs auspicious shaving"

@note[Vārttika: Also after @deva[भद्र]: @deva[भद्रा करोति नापितं कुमारम्] — "barber shaves the boy on auspicious occasion."]

When not "shaving": @deva[मद्रं करोति] or @deva[भद्रं करोति] (no @deva[डाच्])`,

  '54068': `@deva[समासान्ताः] — The following affixes are added to the ends of compounds without changing their sense.

This is an adhikāra (governing rule) extending to the end of this chapter. All affixes taught hereafter become the final integral part of a compound.

These affixes apply to:
- Avyayībhāva
- Dvigu
- Dvandva
- Tatpuruṣa
- Bahuvrīhi

Until these affixes are added, compounds are not complete.`,

  '54069': `@deva[प्रशंसावचनं शेषे न प्रयुज्यते] — Samāsānta affixes are NOT applied when the first member expresses praise.

Example: @ref[5.4.91] ordains @deva[टच्] after @deva[राजन्] in compounds:
- @deva[महा] + @deva[राजन्] = @deva[महाराजः] (with @deva[टच्])

But with praise words:
- @deva[सुराजा], @deva[अतिराजा] (no @deva[टच्])
- @deva[सुसखा], @deva[अतिसखा]
- @deva[सुगौः], @deva[अतिगौः]`,

  '54070': `@deva[कुत्सिते किमः] — Samāsānta affix is NOT applied when @deva[किम्] precedes and reproach is meant.

| Compound | Meaning |
|----------|---------|
| @deva[किंराजा] | no-king (who doesn't protect) |
| @deva[किंसखा] | no-friend (who betrays) |
| @deva[किंगौः] | no-ox (that doesn't pull) |

@deva[किंराजा यो न रक्षति] — "He is no king who does not protect."

Compounding by @ref[2.1.64].

When not reproach: @deva[किंराजः] (= @deva[कस्य राजा]) — "whose king?"`,

  '54071': `@deva[न नञो राजादिषु तत्पुरुषे] — Samāsānta affix does NOT come after @deva[राजन्] etc. in a Tatpuruṣa with negative @deva[न].

| Compound | Form |
|----------|------|
| @deva[न राजा] | @deva[अराजा] (no @deva[टच्]) |
| @deva[न सखा] | @deva[असखा] |
| @deva[न गौः] | @deva[अगौः] |

Why "Tatpuruṣa"? In other compounds, the affix applies:
@deva[अनृचो मानवकः], @deva[अधुरं शकटम्] (@ref[5.4.74] applied)`,

  '54072': `@deva[तत्पुरुषे नञो वा पथिः] — @deva[पथिन्] with @deva[नञ्] in Tatpuruṣa optionally takes the samāsānta affix.

This declares option where @ref[5.4.71] would prohibit.

| With affix | Without |
|-----------|---------|
| @deva[अपथम्] | @deva[अपन्थाः] |

(See @ref[5.4.74] and @ref[2.4.30])`,

  '54073': `@deva[संख्याबहुगणान्ताद्बहुव्रीहेर्डाच्] — @deva[डाच्] comes after a Bahuvrīhi denoting a numeral, EXCEPT when the final member is @deva[बहु] or @deva[गण].

This Bahuvrīhi is formed by @ref[2.2.25].

| Compound | Meaning |
|----------|---------|
| @deva[उपदशाः] | about ten |
| @deva[उपविंशाः] | about twenty |
| @deva[द्वित्राः] | two or three |
| @deva[पञ्चषाः] | five or six |

Why "denoting numeral"? → @deva[चित्रगुः], @deva[शबलगुः] (no @deva[डाच्])
Why "not @deva[बहु]/गण"? → @deva[उपबहवः], @deva[उपगणाः] (no @deva[डाच्])`,

  '54074': `@deva[ऋगपधुःपथां कः अनक्षे] — @deva[अ] (= @deva[क]) comes after @deva[ऋक्], @deva[पुर्], @deva[अप्], @deva[धुर्], @deva[पथिन्] when final in a compound — but NOT after @deva[धुर्] with @deva[अक्ष].

| Base | Compound examples |
|------|------------------|
| @deva[ऋक्] | @deva[अनृचः], @deva[बह्वृचः], @deva[अर्धर्चः] |
| @deva[पुर्] | @deva[ललाटपुरम्], @deva[नान्दीपुरम्] |
| @deva[अप्] | @deva[द्वीपम्] (= @deva[द्वि] + @deva[अप्]) |
| @deva[धुर्] | @deva[प्रधुरम्] (but @deva[अक्षधूः]) |
| @deva[पथिन्] | @deva[सुपथम्], @deva[विपथम्] |`,

  '54075': `@deva[प्रत्यनुअवेभ्यः सामलोम्नोरच्] — @deva[अच्] comes after @deva[सामन्] and @deva[लोमन्] when preceded by @deva[प्रति], @deva[अनु], @deva[अव].

| Base | Forms |
|------|-------|
| @deva[सामन्] | @deva[प्रतिसामम्], @deva[अनुसामम्], @deva[अवसामम्] |
| @deva[लोमन्] | @deva[प्रतिलोमम्], @deva[अनुलोमम्], @deva[अवलोमम्] |

@note[Vārttika: @deva[अच्] after @deva[भूमि] preceded by @deva[कृष्ण], @deva[उदक्], @deva[पाण्डु]: @deva[कृष्णभूमः], @deva[पाण्डुभूमः], @deva[उदग्भूमः]. Also: @deva[पञ्चनदम्], @deva[सप्तगोदावरम्].]`,

  '54076': `@deva[अक्षौहिन्यां अनक्ष्णः] — @deva[अच्] comes after @deva[अक्षि] when NOT meaning "the eye."

@deva[लवणाक्षम्], @deva[पुष्कराक्षम्] — Tatpuruṣa metaphors (@ref[2.1.56])

When meaning "eye": @deva[ब्राह्मणाक्षि] (no @deva[अच्])

Note: @deva[कबराक्षः] (leather horse-veil with holes), @deva[गवाक्षः] (window) — these use @deva[दर्शन] sense, not actual eye.`,

  '54077': `@deva[अचतुरविचतुरसुचतुरस्त्रीपुंसधेन्वनडुहऋक्सामवाङ्मनसाक्षिभ्रुवदारगवोर्वष्ठीवपदष्ठीवनक्तंदिवरात्रिंदिवाहर्दिवसरजोनिःश्रेयसपुरुषायुषद्व्यायुषत्र्यायुषर्यजुषः जातोक्षमहोक्षवृद्धोक्षोपशुनगोष्ठश्वाश्च] — The following irregularly formed words take @deva[अच्]:

1. @deva[अचतुरम्], @deva[विचतुरम्], @deva[सुचतुरम्]
2. @deva[स्त्रीपुंसम्] (Dvandva)
3. @deva[धेन्वनडुहम्]
4. @deva[ऋक्सामम्]
5. @deva[वाङ्मनसम्]
6. @deva[अक्षिभ्रुवम्]
7. @deva[दारगवम्]
8. @deva[ऊर्वष्ठीवम्], @deva[पदष्ठीवम्]
9. @deva[नक्तंदिवम्], @deva[रात्रिंदिवम्], @deva[अहर्दिवम्]
10. @deva[सरजसम्]
11. @deva[निःश्रेयसम्]
12. @deva[पुरुषायुषम्], @deva[द्व्यायुषम्], @deva[त्र्यायुषम्]
13. @deva[ऋयजुषम्]
14. @deva[जातोक्षः], @deva[महोक्षः], @deva[वृद्धोक्षः]
15. @deva[उपशुनम्]
16. @deva[गोष्ठश्वाः]`,

  '54078': `@deva[ब्रह्महस्तिवर्चसः] — @deva[अच्] comes after @deva[वर्चस्] when preceded by @deva[ब्रह्म] or @deva[हस्ति].

@deva[ब्रह्मवर्चसम्] — spiritual radiance
@deva[हस्तिवर्चसम्] — elephant's splendor

@note[Vārttika: Also after @deva[पल्ल्य] and @deva[राजन्]: @deva[पल्ल्यवर्चसम्], @deva[राजवर्चसम्].]`,

  '54079': `@deva[अवसमन्धतमसः] — @deva[अच्] comes after @deva[तमस्] when preceded by @deva[अव], @deva[सम्], @deva[अन्ध].

@deva[अवतमसम्] — descending darkness
@deva[सन्तमसम्] — complete darkness
@deva[अन्धतमसम्] — blind darkness, pitch dark`,

  '54080': `@deva[श्वोवसीयःश्रेयसः] — @deva[अच्] comes after @deva[वसीयस्] and @deva[श्रेयस्] when following @deva[श्वस्].

@deva[श्वोवसीयसम्], @deva[श्वःश्रेयसम्] — auspicious tomorrow

These compounds belong to @deva[मयूरव्यंसकादि] (@ref[2.1.72]).

@deva[श्वः] is used in blessing: @deva[श्वः श्रेयसं ते भूयात्] — "may tomorrow be auspicious for you."`,

  '54081': `@deva[अन्ववतप्तरहसः] — @deva[अच्] comes after @deva[रहस्] when following @deva[अनु], @deva[अव], @deva[तप्त].

@deva[अनुरहसम्] — following in secret
@deva[अवरहसम्] — descending secret
@deva[तप्तरहसम्] — heated secret`,

  '54082': `@deva[प्रत्युरसो विभाषा सप्तम्याः] — @deva[अच्] comes after @deva[उरस्] following @deva[प्रति] when it has locative sense.

@deva[प्रत्युरसम्] = @deva[उरसि वर्तते] — "on the chest" (Avyayībhāva, @ref[2.1.6])

When not locative: @deva[प्रत्युरः] = @deva[प्रतिगतम् उरः] — "chest gone towards"`,

  '54083': `@deva[अनुगवमायामे] — @deva[अनुगव] is irregularly formed with @deva[अच्], meaning "suited to the length of cows."

@deva[अनुगवं यानम्] — "chariot suited to the oxen's length"

Compound by @ref[2.1.16].

When not "length": @deva[गवां पश्चात्] = @deva[अनुगु]`,

  '54084': `@deva[द्विस्तावात्रिस्तावावेद्यां टिलोपश्च] — @deva[द्विस्तावा] and @deva[त्रिस्तावा] are irregularly formed with @deva[अच्] and @deva[टि]-elision, meaning an altar (@deva[वेदि]).

| Form | Meaning |
|------|---------|
| @deva[द्विस्तावा वेदिः] | altar twice as big |
| @deva[त्रिस्तावा वेदिः] | altar thrice as big |

Compounds of @deva[द्विस्]/त्रिस् + @deva[तावत्].

When not altar: @deva[द्विस्तावती रज्जुः], @deva[त्रिस्तावती रज्जुः] (no special form)`,

  '54085': `@deva[उपसर्गादध्वनः] — @deva[अच्] comes after @deva[अध्वन्] when preceded by an upasarga.

| Compound | Meaning |
|----------|---------|
| @deva[प्राध्वः रथः] | chariot that has gone on the road |
| @deva[प्राध्वं शकटम्] | cart that has traveled |
| @deva[निरध्वम्], @deva[प्रत्यध्वम्] | similarly |

When not upasarga: @deva[परमाध्वा], @deva[उत्तमाध्वा] (no @deva[अच्])`,

  '54086': `@deva[तत्पुरुषे संख्याव्ययादेरङ्गुलेः] — @deva[अच्] comes after @deva[अङ्गुलि] in Tatpuruṣa when preceded by a numeral or indeclinable.

| Compound | Meaning |
|----------|---------|
| @deva[द्व्यङ्गुलम्] | two fingers' measure |
| @deva[त्र्यङ्गुलम्] | three fingers' measure |

This is a taddhitārtha compound (@ref[2.1.51]); the @deva[मात्रच्] affix is elided.`,

  '54087': `@deva[अहस्सर्वैकदेशसंख्यातपुण्याद्राश्रेश्च संख्याव्ययादेः] — @deva[अच्] comes after @deva[रात्रि] when preceded by @deva[अहन्], @deva[सर्व], a portion-of-night word, @deva[संख्यात], @deva[पुण्य], or a numeral/indeclinable.

| Compound | Meaning |
|----------|---------|
| @deva[अहोरात्रः] | day and night (Dvandva) |
| @deva[सर्वरात्रः] | all night |
| @deva[पूर्वरात्रः] | first part of night |
| @deva[द्विरात्रम्] | two nights |
| @deva[पुण्यरात्रम्] | auspicious night |`,

  '54088': `@deva[अह्नोऽह्न एतेभ्यः] — @deva[अह्न] substitutes for @deva[अहन्] when preceded by the above words and taking @deva[टच्] (@ref[5.4.91]).

| Compound | Form |
|----------|------|
| @deva[सर्वाह्नः] | all day |
| @deva[पूर्वाह्नः] | forenoon |
| @deva[अपराह्नः] | afternoon |
| @deva[मध्याह्नः] | midday |
| @deva[द्व्यह्नः], @deva[त्र्यह्नः] | (with numerals) |`,

  '54089': `@deva[समाहारे न संख्यायाः] — The substitution of @deva[अह्न] for @deva[अहन्] does NOT occur with numerals in samāhāra (collective) compounds.

| Samāhāra | Form |
|----------|------|
| @deva[द्वे अहनी समाहृते] | @deva[द्व्यहः] (not *@deva[द्व्यह्नः]) |
| @deva[त्रीणि अहानि] | @deva[त्र्यहः] |

When not samāhāra (taddhitārtha): @deva[द्व्यह्नः], @deva[त्र्यह्नः] (= "occurring in two/three days")`,

  '54090': `@deva[न पुण्याहैकाहयोः] — The substitution also does NOT occur after @deva[पुण्य] (last word) and @deva[एक].

| Compound | Form |
|----------|------|
| @deva[पुण्याहः] | auspicious day |
| @deva[एकाहः] | one day |

@note[Some include @deva[संख्यात] (penultimate) in the prohibition: @deva[संख्याताहः], not *@deva[संख्याताह्नः].]`,

  '54091': `@deva[राजाहस्सखिभ्यष्टच्] — @deva[टच्] comes after @deva[राजन्], @deva[अहन्], @deva[सखि] at the end of a Tatpuruṣa.

| Base | Compound |
|------|----------|
| @deva[राजन्] | @deva[महाराजः], @deva[मद्रराजः] |
| @deva[अहन्] | @deva[परमाहः], @deva[उत्तमाहः] (@ref[6.4.145]) |
| @deva[सखि] | @deva[राजसखः], @deva[ब्राह्मणसखः] |

Note: @deva[मद्राणां राज्ञी] = @deva[मद्रराज्ञी], not *@deva[मद्रराजी] — feminine forms retain @deva[ङीप्].`,

  '54092': `@deva[तद्धितलुकि गोः] — @deva[टच्] comes after @deva[गो] at the end of a Tatpuruṣa when NO taddhita affix has been elided.

| Compound | Form |
|----------|------|
| @deva[परमगवः], @deva[उत्तमगवः] | (with @deva[टच्]) |
| @deva[पञ्चगवम्], @deva[दशगवम्] | (with @deva[टच्]) |

When taddhita elided:
| @deva[पञ्चभिर्गोभिः क्रीतः] | @deva[पञ्चगुः] (no @deva[टच्]) |
| | (@deva[ठक्] elided by @ref[5.1.28]) |`,

  '54093': `@deva[उरसोऽग्रे] — @deva[टच्] comes after @deva[उरस्] in Tatpuruṣa when meaning "most excellent."

@deva[अग्र] = principal, chief

@deva[अश्वानाम् उरः] = @deva[अश्वोरसम्] — "the best of horses"
@deva[हस्त्युरसम्] — "the best of elephants"

When not "excellent": @deva[देवदत्तस्य उरः] = @deva[देवदत्तोरः] — "Devadatta's chest"`,

  '54094': `@deva[अनोऽश्मायोऽसरसः जातिसंज्ञयोः] — @deva[टच्] comes after @deva[अनस्], @deva[अश्मन्], @deva[अयस्], @deva[सरस्] in Tatpuruṣa when denoting genus or name.

**Jāti examples:**
@deva[उपानसम्], @deva[अमृताश्मः], @deva[कालायसम्], @deva[मण्डूकसरसम्]

**Saṃjñā examples:**
@deva[महानसम्], @deva[पिण्डाश्मः], @deva[लोहितायसम्], @deva[जलसरसम्]

When not jāti/saṃjñā: @deva[सदनः], @deva[सदश्माः], @deva[सत्सरः]`,

  '54095': `@deva[ग्रामकौटतक्षाच्च] — @deva[टच्] comes after @deva[तक्ष] when preceded by @deva[ग्राम] or @deva[कौट].

@deva[ग्रामतक्षः] — village carpenter
@deva[कौटतक्षः] — house carpenter`,

  '54096': `@deva[रात्रेरह्नस्य वा] — @deva[टच्] optionally comes after @deva[अहन्] following @deva[रात्रि].

| With @deva[टच्] | Without |
|---------------|---------|
| @deva[रात्र्यहः] | @deva[रात्र्यहन्] |

Either form is valid.`,

  '54097': `@deva[अक्षरसमूहस्य त्रातन्] — @deva[त्रातन्] comes after a collection of syllables.

@deva[अक्षरसमूह] = collection of syllables (alphabet section)

This forms technical terms for phonetic groups.`,

  '54098': `@deva[तत्र विद्याधिकृतेषु पूजायाम्] — @deva[त्रातन्] comes in the sense of "there" (location) when knowledge or authority is involved with honor.

This applies to educational and administrative contexts.`,

  '54099': `@deva[पापमन्त्रपुण्यात्] — @deva[त्रातन्] comes after @deva[पाप], @deva[मन्त्र], @deva[पुण्य].

Forms: @deva[पापत्रातम्], @deva[मन्त्रत्रातम्], @deva[पुण्यत्रातम्]`,

  '54100': `@deva[छन्दसः] — In the Vedas, @deva[त्रातन्] comes (with various applications).

Vedic usage extends the above rules in various contextual ways.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.4.51-100). Total: ${Object.keys(vasu).length}`);
