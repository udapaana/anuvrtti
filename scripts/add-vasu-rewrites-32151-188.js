import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '32151': `@deva[क्रुधमण्डार्थेभ्यश्च] — "After verbs with the meaning of @deva[क्रुध्] 'to be angry' or @deva[मण्ड्] 'to adorn', @deva[युच्] is used."

| Form | Meaning |
|------|---------|
| @deva[क्रोधनः] | wrathful |
| @deva[रोषणः] | irascible |
| @deva[मण्डनः] | adorning |
| @deva[भूषणः] | ornament |

@note[Does not apply to @deva[अलंकृ], which takes @deva[इष्णुच्] by @ref[3.2.136].]`,

  '32152': `@deva[न यद्वन्तः] — "@deva[युच्] is NOT used after verbs ending in @deva[य]."

These take @deva[तृन्] instead (@ref[3.2.135]):

| Form | Meaning |
|------|---------|
| @deva[क्नूयिता] | making creaking sound |
| @deva[क्षमायिता] | trembling |`,

  '32153': `@deva[न सूददीपदीक्षाः] — "@deva[युच्] does NOT come after @deva[सूद्], @deva[दीप्], or @deva[दीक्ष्]."

These take @deva[तृन्] instead:

| Form | Meaning |
|------|---------|
| @deva[सूदिता] | one who strikes |
| @deva[दीपिता] | one who shines |
| @deva[दीक्षिता] | one who initiates |

@note[@deva[दीप्] also takes @deva[र] by @ref[3.2.167].]`,

  '32154': `@deva[लषपतपदस्थाभूवृषहकमगमः उकञ्] — "After @deva[लष्], @deva[पत्], @deva[पद्], @deva[स्था], @deva[भू], @deva[वृष्], @deva[हन्], @deva[कम्], @deva[गम्], @deva[शॄ], @deva[उकञ्] is used."

| Form | Meaning |
|------|---------|
| @deva[अपलाषुकम्] | desirous |
| @deva[प्रपातुका गर्भाः] | wombs that miscarry |
| @deva[कामुकम्] | lustful |
| @deva[आगामुकम्] | coming |`,

  '32155': `@deva[जल्पभिक्षकुट्टलुण्टवृङः षाकन्] — "After @deva[जल्प्], @deva[भिक्ष्], @deva[कुट्ट्], @deva[लुण्ट्], @deva[वृ], @deva[षाकन्] is used."

| Form | Meaning | Feminine |
|------|---------|----------|
| @deva[जल्पाकः] | talkative | @deva[जल्पाकी] |
| @deva[भिक्षाकः] | beggar | @deva[भिक्षाकी] |
| @deva[लुण्टाकः] | thief, robber | @deva[लुण्टाकी] |
| @deva[वराकः] | low, miserable | @deva[वराकी] |

@note[The @deva[ष्] indicates feminine in @deva[ङीष्] (long @deva[ई]).]`,

  '32156': `@deva[प्रजवेरिनि] — "After @deva[प्रजु] 'to hasten forward', @deva[इनि] is used."

| Form | Meaning |
|------|---------|
| @deva[प्रजवी] | express, courier |
| @deva[प्रजविनौ] | two couriers |`,

  '32157': `@deva[जिदृक्षिविश्र्यत्ववमाव्यथाभ्यमपरिभूप्रसूभ्यः] — "After @deva[जि], @deva[दृ], @deva[क्षि], @deva[विश्रि], @deva[इ], @deva[वम्], @deva[अव्यथ्], @deva[अभ्यम्], @deva[परिभू], @deva[प्रसू], @deva[इनि] is used."

| Form | Meaning |
|------|---------|
| @deva[जयी] | conquering |
| @deva[दरी] | respecting |
| @deva[क्षयी] | wasting |
| @deva[अत्ययी] | exceeding |
| @deva[वमी] | vomiting |
| @deva[अव्यथी] | free from pain |`,

  '32158': `@deva[स्पृहिगृहिपतिदयिनिद्रातन्द्राश्रद्धाभ्य आलुच्] — "After @deva[स्पृह्], @deva[गृह्], @deva[पत्], @deva[दय्], @deva[निद्रा], @deva[तन्द्रा], @deva[श्रद्धा], @deva[आलुच्] is used."

| Form | Meaning |
|------|---------|
| @deva[स्पृहालुः] | desirous |
| @deva[गृहालुः] | grasping |
| @deva[निद्रालुः] | sleepy |
| @deva[तन्द्रालुः] | drowsy |
| @deva[श्रद्धालुः] | faithful |`,

  '32159': `@deva[दाधेट्सिशदसदो रु] — "After @deva[दा], @deva[धे], @deva[सि], @deva[शद्], @deva[सद्], @deva[रु] is used."

| Form | Meaning |
|------|---------|
| @deva[दारुः] | munificent man |
| @deva[धारुः] | sucking (child) |
| @deva[सारुः] | binding |
| @deva[शद्रुः] | falling |
| @deva[सद्रुः] | resting |`,

  '32160': `@deva[सृघसदः क्मरच्] — "After @deva[सृ], @deva[घस्], @deva[अद्], @deva[क्मरच्] is used."

| Form | Meaning |
|------|---------|
| @deva[सृमरः] | going, a kind of deer |
| @deva[घस्मरः] | gluttonous |
| @deva[अद्मरः] | voracious |`,

  '32161': `@deva[भञ्जोऽच्छभिद्यः घुरच्] — "After @deva[भञ्ज्], @deva[भास्], @deva[मिद्], @deva[घुरच्] is used."

| Form | Meaning |
|------|---------|
| @deva[भङ्गुरः] | brittle (naturally breaks) |
| @deva[भासुरं ज्योतिः] | splendid light |
| @deva[मेदुरः पशुः] | fat beast |

@note[@deva[घ] causes palatal → guttural change.]`,

  '32162': `@deva[विद्भिद्च्छिदेः कुरच्] — "After @deva[विद्], @deva[भिद्], @deva[छिद्], @deva[कुरच्] is used."

| Form | Meaning |
|------|---------|
| @deva[विदुरः पण्डितः] | a knowing Paṇḍit |
| @deva[भिदुरं काष्टम्] | fragile wood |
| @deva[छिदुरा रज्जुः] | cutting/breaking rope |

Also after @deva[व्यध्]: @deva[विधुरः] (with semivowel vocalization)`,

  '32163': `@deva[इनश्जिसृभ्यः क्वरप्] — "After @deva[इ], @deva[नश्], @deva[जि], @deva[सृ], @deva[क्वरप्] is used."

| Form | Feminine | Meaning |
|------|----------|---------|
| @deva[इत्वरः] | @deva[इत्वरी] | traveller |
| @deva[नश्वरः] | @deva[नश्वरी] | transitory |
| @deva[जित्वरः] | @deva[जित्वरी] | victorious |
| @deva[सृत्वरः] | @deva[सृत्वरी] | going, river |

@note[@deva[प्] introduces augment @deva[तुक्] between root and affix (by @ref[6.1.71]).]`,

  '32164': `@deva[गत्वरश्च] — "The word @deva[गत्वर] is irregularly formed."

@deva[गम्] loses @deva[म्] before @deva[क्वरप्]:

| Form | Feminine | Meaning |
|------|----------|---------|
| @deva[गत्वरः] | @deva[गत्वरी] | locomotive, transient |`,

  '32165': `@deva[जागरूक] — "After @deva[जागृ] 'to be awake', @deva[ऊक] is used."

@deva[जागरूकः] — "wakeful"`,

  '32166': `@deva[यज्जपदशो यङि] — "After @deva[यज्], @deva[जप्], @deva[दश्] with intensive (@deva[यङ्]), @deva[ऊक] is used."

| Form | Meaning |
|------|---------|
| @deva[यायजूकः] | performer of frequent sacrifices |
| @deva[जञ्जपूकः] | mutterer of repeated prayers |
| @deva[दन्दशूकः] | snake (bites frequently) |`,

  '32167': `@deva[नमिकम्पिस्म्यजसिकमिहिंसिदीपो र] — "After @deva[नम्], @deva[कम्प्], @deva[स्मि], @deva[अजस्], @deva[कम्], @deva[हिंस्], @deva[दीप्], @deva[र] is used."

| Form | Meaning |
|------|---------|
| @deva[नम्रं काष्टम्] | soft wood |
| @deva[कम्प्रा शाखा] | shaking branch |
| @deva[स्मेरं मुखम्] | smiling face |
| @deva[अजस्रम्] | perpetual |
| @deva[कम्रा युवती] | beautiful maiden |
| @deva[हिंस्रं रक्षः] | injuring Rākṣasa |
| @deva[दीप्रं काष्टम्] | bright wood |`,

  '32168': `@deva[सन्आशंसभिक्षाः उ] — "After desiderative (@deva[सन्]) verbs and @deva[आशंस्], @deva[भिक्ष्], @deva[उ] is used."

| Form | Meaning |
|------|---------|
| @deva[चिकीर्षुः] | desirous of doing |
| @deva[जिहीर्षुः] | desirous of taking |
| @deva[आशंसुः] | desirous |
| @deva[भिक्षुः] | beggar |`,

  '32169': `@deva[विन्दुरिच्छुश्च] — "The words @deva[विन्दु] and @deva[इच्छु] are irregularly formed with @deva[उ]."

| Word | Formation | Meaning |
|------|-----------|---------|
| @deva[विन्दुः] | @deva[विद्] + @deva[नुम्] + @deva[उ] | intelligent |
| @deva[इच्छुः] | @deva[इष्] (with @deva[ष] → @deva[छ]) + @deva[उ] | desirous |`,

  '32170': `@deva[क्यश्छन्दसि] — "In the Vedas, @deva[उ] comes after denominative (@deva[क्य]) verbs."

The term @deva[क्य] includes @deva[क्यच्], @deva[क्यङ्], @deva[क्यष्]:

| Form | Source |
|------|--------|
| @deva[मित्रयुः] | Ṛg Ved. I.3.4 |
| @deva[संस्वेदयुः] | — |
| @deva[सुम्नयुः] | Ṛg Ved. I.3.4 |

In classical Sanskrit: use @deva[तृन्] instead.`,

  '32171': `@deva[आद्ॠतो गमहनजनाः किकिनौ लिट्] — "In the Vedas, @deva[कि] and @deva[किन्] come after verbs ending in @deva[आ] or @deva[ऋ/ॠ], and after @deva[गम्], @deva[हन्], @deva[जन्]—with reduplication like @deva[लिट्]."

These operate like perfect tense, causing reduplication of the root.

| Example | Meaning |
|---------|---------|
| @deva[ददिकि] | giving |`,

  '32172': `@deva[स्वपितृषः नजिङ्] — "After @deva[स्वप्] 'to sleep' and @deva[तृष्] 'to be thirsty', @deva[नजिङ्] is used."

| Form | Meaning |
|------|---------|
| @deva[स्वप्नक्] | sleeping, drowsy |
| @deva[तृष्णक्] | covetous, thirsty |

Also after @deva[धृष्]: @deva[धृष्णक्] "bold, impudent"`,

  '32173': `@deva[शॄवन्दोः आरु] — "After @deva[शॄ] 'to injure' and @deva[वन्द्] 'to praise', @deva[आरु] is used."

| Form | Meaning |
|------|---------|
| @deva[शरारुः] | noxious, mischievous animal |
| @deva[वन्दारुः] | praising, a bard |`,

  '32174': `@deva[भियः क्रुक्लुकनौ] — "After @deva[भी] 'to fear', @deva[क्रु] and @deva[क्लुकन्] are used."

| Form | Meaning |
|------|---------|
| @deva[भीरुः] | fearful, timid |
| @deva[भीलुकः] | timorous; bear, tiger, jackal |

Also @deva[क्रुकन्]: @deva[भीरुकः]`,

  '32175': `@deva[स्थेशभासपिसकसः वरच्] — "After @deva[स्था], @deva[ईश्], @deva[भास्], @deva[पिस्], @deva[कस्], @deva[वरच्] is used."

| Form | Meaning |
|------|---------|
| @deva[स्थावरः] | immovable |
| @deva[ईश्वरः] | ruler, God |
| @deva[भास्वरः] | shining |
| @deva[पेस्वरः] | going, destructive |
| @deva[विकस्वरः] | opening, expanding |`,

  '32176': `@deva[यातेर्यङि] — "After @deva[या] with intensive (@deva[यङ्]), @deva[वरच्] is used."

@deva[यायावरः] — "vagrant, ascetic"`,

  '32177': `@deva[भ्राजभासधुर्विद्युतूर्जुपृजुग्रवस्तुः क्विप्] — "After @deva[भ्राज्], @deva[भास्], @deva[धुर्व्], @deva[द्युत्], @deva[ऊर्ज्], @deva[पॄ], @deva[जु], @deva[स्तु] (preceded by @deva[ग्रवन्]), @deva[क्विप्] is used."

| Form | Meaning |
|------|---------|
| @deva[विभ्राट्] | splendid |
| @deva[भाः] | light |
| @deva[धूः] | who injures |
| @deva[विद्युत्] | lightning |`,

  '32178': `@deva[अन्येभ्योऽपि दृश्यते] — "@deva[क्विप्] is seen after other verbs too."

| Form | Meaning |
|------|---------|
| @deva[युक्] | joining |
| @deva[छित्] | piercing |
| @deva[भित्] | dividing |

@note[Sometimes with vowel lengthening, reduplication, or samprasāraṇa.]`,

  '32179': `@deva[भुवः संज्ञाप्रतिभूयोः] — "After @deva[भू], @deva[क्विप्] is used when meaning a name or surety."

| Form | Meaning |
|------|---------|
| @deva[विभूः] | person named Vibhu |
| @deva[प्रतिभूः] | surety (between debtor and creditor) |`,

  '32180': `@deva[विप्रसम्भ्यो डु] — "After @deva[भू] with @deva[वि], @deva[प्र], or @deva[सम्], @deva[डु] is used when NOT a proper name."

| Form | Meaning |
|------|---------|
| @deva[विभुः] | all-pervading |
| @deva[प्रभुः] | lord |
| @deva[सम्भुः] | Creator |

Proper name: @deva[विभूः] (with @deva[क्विप्])

Also: @deva[मितद्रुः] "the sea," @deva[शम्भुः] "causing happiness"`,

  '32181': `@deva[धोः कर्मणि ष्ट्रन्] — "After @deva[धा] 'to suck/feed', @deva[ष्ट्रन्] is used with object meaning."

@deva[धात्री] — "nurse (whom children suck)" or "āmalakī fruit (which holds medicinal properties)"

@note[@deva[ष्] indicates feminine in @deva[ङीप्] (@deva[ई]).]`,

  '32182': `@deva[दापनीशसियुयुज्स्तुतुदसिसिचमिहपतिदशनहः ष्ट्रन् करणे] — "After @deva[दाप्], @deva[नी], @deva[शस्], @deva[यु], @deva[युज्], @deva[स्तु], @deva[तुद्], @deva[सि], @deva[सिच्], @deva[मिह्], @deva[पत्], @deva[दश्], @deva[नह्], @deva[ष्ट्रन्] is used with instrument meaning."

| Form | Meaning |
|------|---------|
| @deva[दात्रम्] | sickle |
| @deva[नेत्रम्] | eye |
| @deva[शस्त्रम्] | weapon |
| @deva[योत्रम्] | harness |
| @deva[स्तोत्रम्] | hymn of praise |`,

  '32183': `@deva[पूञः सीरे मुखे] — "After @deva[पू] 'to purify', @deva[ष्ट्रन्] is used when meaning part of a plough or hog."

| Form | Meaning |
|------|---------|
| @deva[पोत्रम्] | ploughshare |
| @deva[पोत्रम्] | snout of a hog |`,

  '32184': `@deva[ऋलुधूसूखनसहचरः इत्र] — "After @deva[ऋ], @deva[लू], @deva[धू], @deva[सू], @deva[खन्], @deva[सह्], @deva[चर्], @deva[इत्र] is used with instrument meaning."

| Form | Meaning |
|------|---------|
| @deva[अरित्रम्] | rudder |
| @deva[लवित्रम्] | sickle |
| @deva[धवित्रम्] | fan |
| @deva[सवित्रम्] | cause of production |
| @deva[खनित्रम्] | spade |
| @deva[सहित्रम्] | patience |
| @deva[चरित्रम्] | observance, narrative |`,

  '32185': `@deva[पूञः संज्ञायाम्] — "After @deva[पू], @deva[इत्र] is used when the word is a mere designation (not descriptive)."

@deva[पवित्रम्] — "instrument for purifying" (sieve, strainer, kuśa grass, sacred thread, ghee, rain, etc.)`,

  '32186': `@deva[ऋषिदेवतयोः कर्त्रर्थे] — "After @deva[पू], @deva[इत्र] is used with agent/instrument meaning for sages or deities."

| Context | Force | Example |
|---------|-------|---------|
| Sage | Instrument | @deva[पवित्रोऽयमृषिः] "this sage is sacred (purifies)" |
| Deity | Agent | @deva[अग्निः पवित्रम्] "Agni is sacred (purifier)" |`,

  '32187': `@deva[ञ्यदः क्तः] — "Roots marked with indicatory @deva[ञि] take @deva[क्त] with present meaning."

| Root | Form | Meaning |
|------|------|---------|
| @deva[ञिमिदा] | @deva[मिन्नः] | being affectionately inclined |
| @deva[ञिक्षिवदा] | @deva[क्षीवः] | being intoxicated |

@note[@deva[क्त] normally denotes past (@ref[3.2.102]), but with @deva[ञि]-marked roots it's present.]`,

  '32188': `@deva[मतिबुद्धिपूजार्थेभ्यश्च] — "After roots denoting inclination, understanding, or respect, @deva[क्त] is used with present meaning."

| Form | Meaning |
|------|---------|
| @deva[राज्ञां मतः] | the king wishes |
| @deva[इष्टः] | desires |
| @deva[बुद्धः] | thinks |
| @deva[ज्ञातः] | knows |
| @deva[पूजितः] | honors, respects |

@note[The @deva[च] includes other verbs with present-time @deva[क्त] usage.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.2.151-188). Total: ${Object.keys(vasu).length}`);
