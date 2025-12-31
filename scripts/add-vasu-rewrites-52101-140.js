import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '52101': `@deva[प्रज्ञाश्रद्धार्चाभ्यो वा ण्] — The affix @deva[ण्] optionally comes after @deva[प्रज्ञा], @deva[श्रद्धा], and @deva[अर्चा] in the matvarthīya sense. Examples:

| Base | With @deva[ण्] | With @deva[मतुप्] | Meaning |
|------|--------------|------------------|---------|
| @deva[प्रज्ञा] | @deva[प्राज्ञः] | @deva[प्रज्ञावान्] | wise, intelligent |
| @deva[श्रद्धा] | @deva[श्राद्धः] | @deva[श्रद्धावान्] | faithful |
| @deva[अर्चा] | @deva[आर्चः] | @deva[अर्चावान्] | reverent |

@note[A vārttika extends this to @deva[वृत्ति]: @deva[वार्त्तः] or @deva[वृत्तिमान्] "well-behaved."]`,

  '52102': `@deva[तपःसहस्राभ्यां विन्यण्] — @deva[तपस्] takes @deva[विनि], and @deva[सहस्र] takes @deva[इनि], in the matvarthīya sense. @deva[अण्] also applies to both (next sūtra).

| Base | With @deva[विनि]/@deva[इनि] | Meaning |
|------|---------------------------|---------|
| @deva[तपस्] | @deva[तपस्विन्] (nom. @deva[तपस्वी]) | one who has austerity |
| @deva[सहस्र] | @deva[सहस्रिन्] (nom. @deva[सहस्री]) | possessing a thousand |

This sūtra preempts the default affixes. Without it, @deva[अण्] from the next sūtra would block @deva[विनि] (@ref[5.2.121]) and @deva[इनि] (@ref[5.2.115]).`,

  '52103': `@deva[अण् च] — @deva[अण्] also comes after @deva[तपस्] and @deva[सहस्र] (in addition to @deva[विनि]/@deva[इनि]).

| Base | With @deva[अण्] | Meaning |
|------|---------------|---------|
| @deva[तपस्] | @deva[तापसः] | ascetic |
| @deva[सहस्र] | @deva[साहस्रः] | having a thousand |

This sūtra is stated separately so that @deva[अण्] carries forward (anuvṛtti) to subsequent sūtras.

@note[A vārttika lists additional words taking @deva[अण्]: @deva[ज्यौत्स्नः] @deva[पक्षः] (moonlit fortnight), @deva[तामिस्रः] (a hell), @deva[कौण्डलः], @deva[कौतपः], @deva[वैसर्पः], @deva[वैपादिकः].]`,

  '52104': `@deva[सिकताशर्कराभ्यामण्] — @deva[अण्] comes after @deva[सिकता] (sand) and @deva[शर्करा] (gravel) in the matvarthīya sense.

| Base | Derivative | Example | Meaning |
|------|-----------|---------|---------|
| @deva[सिकता] | @deva[सैकटः] | @deva[सैकटो घटः] | sandy pot |
| @deva[शर्करा] | @deva[शार्करम्] | @deva[शार्करं मधु] | gravelly honey |

These examples apply when the words do not denote a place. For places, see the next sūtra.`,

  '52105': `@deva[ताभ्यां देशे लुबिलचौ च] — When denoting a locality, words formed from @deva[सिकता] and @deva[शर्करा] may show:
- @deva[लुप्] (affix deletion with gender/number preserved)
- @deva[इलच्]
- @deva[अण्]
- @deva[मतुप्]

| Base | Forms | Meaning |
|------|-------|---------|
| @deva[सिकता] | @deva[सिकता देशः], @deva[सिकतिलः], @deva[सैकतः], @deva[सिकतावान्] | sandy region |
| @deva[शर्करा] | @deva[शर्करा देशः], @deva[शर्करिलः], @deva[शार्करः], @deva[शर्करावान्] | gravelly region |

When not denoting locality: @deva[सैकटः] (sandy vessel), @deva[शार्करम्] (gravelly honey).`,

  '52106': `@deva[दन्तस्योन्नतौ उरच्] — The affix @deva[उरच्] comes after @deva[दन्त] when the meaning is "having projecting teeth."

@deva[दन्ता उन्नता अस्य सन्ति] = @deva[दन्तुरः] — one with projecting teeth

When teeth are merely present (not projecting): @deva[दन्तवान्] "having teeth."`,

  '52107': `@deva[ऊषसुषिमुष्कमधुभ्यो रः इति च] — The affix @deva[र] comes after @deva[ऊष], @deva[सुषि], @deva[मुष्क], and @deva[मधु]. The word @deva[इति] indicates these are fixed names.

| Base | Derivative | Example | Meaning |
|------|-----------|---------|---------|
| @deva[ऊष] | @deva[ऊषरम्] | @deva[ऊषरं क्षेत्रम्] | barren, salty land |
| @deva[सुषि] | @deva[सुषिरम्] | @deva[सुषिरं काष्ठम्] | hollow wood |
| @deva[मुष्क] | @deva[मुष्करः] | @deva[मुष्करो वृषः] | testicled bull |
| @deva[मधु] | @deva[मधुरः] | @deva[मधुरो गुडः] | sweet sugar |

Being names, these don't apply freely: *@deva[ऊषरो घटः] is wrong for "pot containing salt."

@note[A vārttika adds @deva[र] after @deva[ख], @deva[मुख], @deva[कुञ्च], etc.]`,

  '52108': `@deva[द्युद्रुभ्यां मः] — The affix @deva[म] comes after @deva[द्यु] (sky) and @deva[द्रु] (tree) in the matvarthīya sense.

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[द्यु] | @deva[द्युमः] | luminous, brilliant |
| @deva[द्रु] | @deva[द्रुमः] | tree (having wood) |

These are primitive words and do not alternatively take @deva[मतुप्].`,

  '52109': `@deva[केशादण्यतरस्याम्] — The affix @deva[व] comes optionally after @deva[केश] etc.

The repetition of @deva[अन्यतरस्याम्] shows that in the alternative, not only @deva[मतुप्] but also @deva[इनि] and @deva[ठन्] (@ref[5.2.115]) apply.

| Derivative | Formation |
|-----------|-----------|
| @deva[केशवः] | with @deva[व] |
| @deva[केशी] | with @deva[इनि] |
| @deva[केशिकः] | with @deva[ठन्] |
| @deva[केशवान्] | with @deva[मतुप्] |

@note[Vārttikas extend @deva[व] to: @deva[मणिवः] (a serpent), @deva[हिरण्यवः] (a gem), @deva[अर्णवः] (ocean, with elision of @deva[अस्] final).]`,

  '52110': `@deva[गाण्ड्यजगाभ्यां वः संज्ञायाम्] — @deva[व] comes after @deva[गाण्डी] and @deva[अजग] when forming a proper name.

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[गाण्डी] | @deva[गाण्डीवम्] / @deva[गाण्डिवम्] | Arjuna's bow Gāṇḍīva |
| @deva[अजग] | @deva[अजगवम्] | Śiva's bow Ajagava |

The final vowel may be shortened: @deva[गाण्डिवम्].`,

  '52111': `@deva[काण्डादण्डाच्च ईरन्ईरचौ] — The affixes @deva[ईरन्] and @deva[ईरच्] come after @deva[काण्ड] and @deva[अण्ड] respectively.

| Base | Affix | Derivative |
|------|-------|-----------|
| @deva[काण्ड] | @deva[ईरन्] | @deva[काण्डीरः] |
| @deva[अण्ड] | @deva[ईरच्] | @deva[अण्डीरः] |

Another reading: @deva[आण्ड] → @deva[आण्डीरः].`,

  '52112': `@deva[रजःकृष्यासुतिपरिषदो वलच्] — The affix @deva[वलच्] comes after @deva[रजस्], @deva[कृषि], @deva[आसुति], and @deva[परिषद्].

| Base | Derivative | Example | Meaning |
|------|-----------|---------|---------|
| @deva[रजस्] | @deva[रजस्वला] | @deva[रजस्वला स्त्री] | menstruating woman |
| @deva[कृषि] | @deva[कृषीवलः] | @deva[कृषीवलः कुटुम्बी] | farmer, householder |
| @deva[आसुति] | @deva[आसुतीवलः] | @deva[आसुतीवलः शौण्डिकः] | distiller |
| @deva[परिषद्] | @deva[परिषद्वलः] | @deva[परिषद्वलो राजा] | king with an assembly |

The final vowel is lengthened in @deva[कृषि] and @deva[आसुति] by @ref[6.3.118].

@note[A vārttika extends @deva[वलच्] to: @deva[भ्रातृवलः], @deva[पुत्रवलः], @deva[पितृवलः], @deva[उत्साहवलः].]`,

  '52113': `@deva[दन्तशिखाभ्यां संज्ञायाम्] — @deva[वलच्] comes after @deva[दन्त] and @deva[शिखा] when forming a proper name.

| Base | Derivative | Example |
|------|-----------|---------|
| @deva[दन्त] | @deva[दन्तावलः] | @deva[दन्तावलो गजः] (an elephant's name) |
| @deva[शिखा] | @deva[शिखावलम्] | @deva[शिखावलं नगरम्] (a city's name) |

The final vowel of @deva[दन्त] is lengthened before @deva[वल] by @ref[6.3.118].`,

  '52114': `@deva[ज्योत्स्नादयश्च संज्ञायाम्] — The following irregularly formed words are proper names:

| Word | Formation | Meaning |
|------|-----------|---------|
| @deva[ज्योत्स्ना] | @deva[ज्योतिस्] + @deva[न] | moonlight |
| @deva[तमिस्रा] | @deva[तमस्] + @deva[र] (with @deva[इ] augment) | night, darkness |
| @deva[शृङ्गिणः] | @deva[शृङ्ग] + @deva[इनच्] | horned |
| @deva[ऊर्जस्विन्] | @deva[ऊर्ज्] + @deva[असुक्] + @deva[विनि] | powerful |
| @deva[ऊर्जस्वलः] | @deva[ऊर्ज्] + @deva[असुक्] + @deva[वलच्] | powerful |
| @deva[गोमिन्] | @deva[गो] + @deva[मिनि] | possessing cows |
| @deva[मलिनः] | @deva[मल] + @deva[इनच्] | dirty |
| @deva[मलीमसः] | (irregular) | dirty |`,

  '52115': `@deva[अत इनिठनौ] — After stems ending in short @deva[अ], @deva[इनि] and @deva[ठन्] come in the matvarthīya sense, with @deva[मतुप्] as an alternative.

| Base | @deva[इनि] | @deva[ठन्] | @deva[मतुप्] |
|------|----------|----------|------------|
| @deva[दण्ड] | @deva[दण्डिन्] (nom. @deva[दण्डी]) | @deva[दण्डिकः] | @deva[दण्डवान्] |
| @deva[छत्र] | @deva[छत्रिन्] (nom. @deva[छत्री]) | @deva[छत्रिकः] | @deva[छत्रवान्] |

Condition: "short @deva[अ]" — after long @deva[आ], only @deva[मतुप्]: @deva[खट्वावान्].

Exceptions: @deva[इनि]/@deva[ठन्] do not come after:
- monosyllables (@deva[स्व] → @deva[स्ववान्], not *@deva[स्वी])
- kṛt-derivatives
- words denoting genus (jāti)
- locative constructions`,

  '52116': `@deva[व्रीह्यादिभ्यश्च] — @deva[इनि] and @deva[ठन्] come after @deva[व्रीहि] etc., with @deva[मतुप्] as an alternative.

| Base | @deva[इनि] | @deva[ठन्] | @deva[मतुप्] |
|------|----------|----------|------------|
| @deva[व्रीहि] | @deva[व्रीही] | @deva[व्रीहिकः] | @deva[व्रीहिमान्] |
| @deva[माया] | @deva[मायी] | @deva[मायिकः] | @deva[मायावान्] |

According to Patañjali:
- @deva[शिखादि] subdivision takes only @deva[इनि]
- @deva[यवखदादि] subdivision takes only @deva[इकन्] (= @deva[ठन्])
- Remaining words take both`,

  '52117': `@deva[तुन्दादिभ्य इलच् च] — The affix @deva[इलच्] also comes after @deva[तुन्द] etc., in addition to @deva[इनि], @deva[ठन्], and @deva[मतुप्].

| Base | @deva[इलच्] | @deva[इनि] | @deva[ठन्] | @deva[मतुप्] |
|------|----------|----------|----------|------------|
| @deva[तुन्द] | @deva[तुन्दिलः] | @deva[तुन्दी] | @deva[तुन्दिकः] | @deva[तुन्दवान्] |
| @deva[उदर] | @deva[उदरिलः] | @deva[उदरी] | @deva[उदरिकः] | @deva[उदरवान्] |

The @deva[तुन्दादि] list: @deva[तुन्द], @deva[उदर], @deva[पिचण्ड], @deva[घट], @deva[यव], @deva[व्रीहि], and words for body parts when largeness (@deva[विवृद्धि]) is implied: @deva[कर्णिलः] "having large ears."`,

  '52118': `@deva[एकगोपूर्वाद्द्ठन्] — @deva[ठञ्] always comes after a stem preceded by @deva[एक] or @deva[गो].

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[एकशतम्] | @deva[ऐकशतिकः] | possessing 101 |
| @deva[गोशतम्] | @deva[गौशतिकः] | possessing 100 cows |
| @deva[गोसहस्रम्] | @deva[गौसहस्रिकः] | possessing 1000 cows |

The condition @deva[अतः] from @ref[5.2.115] continues: stems not ending in @deva[अ] are excluded.`,

  '52119': `@deva[निष्कादठञ्] — @deva[ठञ्] comes after @deva[शत] and @deva[सहस्र] when preceded by @deva[निष्क] (a gold coin).

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[निष्कशतम्] | @deva[नैष्कशतिकः] | possessing 100 niṣkas |
| @deva[निष्कसहस्रम्] | @deva[नैष्कसहस्रिकः] | possessing 1000 niṣkas |

But not after compounds like @deva[सुवर्णनिष्कशतम्] — such usage is not found.`,

  '52120': `@deva[रूपादाहतप्रशंसयोर्यप्] — The affix @deva[यप्] comes after @deva[रूप] when stamping (coining) or praise is denoted.

| Meaning | Example |
|---------|---------|
| Stamping | @deva[आहतं रूपम् अस्य] = @deva[रूप्यो दीनारः] "stamped dinar" |
| | @deva[रूप्यं कार्षापणम्] "stamped coin" |
| Praise | @deva[प्रशस्तं रूपम् अस्य] = @deva[रूप्यः पुरुषः] "handsome person" |

When meaning merely "having form": @deva[रूपवान्].

@note[A vārttika extends @deva[यप्] to: @deva[हिम्याः पर्वताः] "icy mountains," @deva[गुण्या ब्राह्मणाः] "virtuous brāhmaṇas."]`,

  '52121': `@deva[असरूपयामायामेधास्रजो विनिः] — The affix @deva[विनि] comes after stems ending in @deva[अस्], and after @deva[माया], @deva[मेधा], and @deva[स्रज्].

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[पयस्] | @deva[पयस्विन्] | having milk |
| @deva[यशस्] | @deva[यशस्विन्] | famous |
| @deva[माया] | @deva[मायाविन्] | deceitful |
| @deva[मेधा] | @deva[मेधाविन्] | intelligent |
| @deva[स्रज्] | @deva[स्रग्विन्] | garlanded |

Since @deva[माया] is in the @deva[व्रीह्यादि] class, it also takes @deva[इनि] and @deva[ठञ्] (@ref[5.2.116]): @deva[मायी], @deva[मायिकः].`,

  '52122': `@deva[छन्दसि विनिर्बहुलम्] — In the Vedas, @deva[विनि] comes diversely (irregularly).

Example with @deva[विनि]: @deva[अग्ने तेजस्विन्]
Example without: @deva[सूर्यो वर्चस्वान्]

Vārttikas for Vedic usage:
- Final @deva[अ] of @deva[इय], @deva[उभय], @deva[हृदय] optionally lengthened before @deva[विनि]: @deva[इयावी], @deva[उभयावी], @deva[हृदयावी]
- @deva[विनि] after @deva[अष्ट्रा], @deva[मेखला], @deva[रुजा]: @deva[अष्ट्रावी], @deva[मेखलावी], @deva[रुजावी]
- After @deva[मर्मन्]: @deva[मर्मावी]
- Always after @deva[आमय] (sacred and secular): @deva[आमयाविन्]`,

  '52123': `@deva[ऊर्णायाश्छन्दसि युस्] — In the Vedas, @deva[युस्] comes after @deva[ऊर्णा] (wool).

@deva[ऊर्णा] + @deva[युस्] = @deva[ऊर्णायुः] — woolly

The @deva[स्] of @deva[युस्] makes @deva[ऊर्णा] a pada (@ref[1.4.16]), preventing the vowel deletion that would otherwise occur by @ref[6.1.148].

@note[Some hold @deva[छन्दसि] applies here, making this Vedic-only. The Siddhānta Kaumudī considers this reasonable — if @deva[युस्] applied in secular usage, this sūtra would be unnecessary, since @deva[ऊर्णा] could be listed with @deva[अहम्] and @deva[शुभम्] in @ref[5.2.140].]`,

  '52124': `@deva[वाचो ग्मिनिः] — The affix @deva[ग्मिनि] comes after @deva[वाच्] (speech).

@deva[वाग्मी], @deva[वाग्मिनौ], @deva[वाग्मिनः] — eloquent

The affix is specifically @deva[ग्मिन्], not @deva[मिन्] — if it were @deva[मिन्], the form would be *@deva[वाङ्मिन्] by @ref[8.4.45] vārttika.`,

  '52125': `@deva[प्राचुर्ये वाच आलच् वाटच् च] — When "talkativeness" is meant, @deva[आलच्] and @deva[आटच्] come after @deva[वाच्], debarring @deva[ग्मिन्].

| Derivative | Meaning |
|-----------|---------|
| @deva[वाचालः] | garrulous, talkative |
| @deva[वाचाटः] | garrulous |

@note[A vārttika notes: these affixes imply contempt. An orator (@deva[वाग्मी]) speaks much but purposefully — he is not called @deva[वाचाल] or @deva[वाचाट].]`,

  '52126': `@deva[ऐश्वर्ये स्वाम्यामिन्] — The irregular form @deva[स्वामिन्] denotes "lord, master."

@deva[स्वम् अस्य अस्ति] = @deva[ऐश्वर्यम् अस्य अस्ति] = @deva[स्वामिन्] — lord, owner

The affix @deva[आमिन्] comes after @deva[स्व] in the sense of lordship.

When not meaning "lord": @deva[स्ववान्] — "possessing property."`,

  '52127': `@deva[अर्शआदिभ्योऽच्] — The affix @deva[अच्] comes after @deva[अर्शस्] etc.

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[अर्शस्] | @deva[अर्शसः] | having hemorrhoids |
| @deva[उरस्] | @deva[उरसः] | broad-chested |

The @deva[अर्शआदि] list includes:
- Words for body parts when defect is meant: @deva[खञ्जः] "lame" (defective foot)
- Color words: @deva[शुक्लः पटः] "white cloth"

List: @deva[अर्शस्], @deva[उरस्], @deva[तुन्द], @deva[चतुर], @deva[पलित], @deva[जटा], @deva[घटा], @deva[घाटा], @deva[अघ]/(@deva[अभ्र]), @deva[कर्दम], @deva[अम्ल]/(@deva[आम]), @deva[लवण], body-part-with-defect, colors (ākṛtigaṇa).`,

  '52128': `@deva[सत्त्वे द्वन्द्वमनोज्ञातिभ्य इनिः] — The affix @deva[इनि] comes after:
1. Dvandva compounds
2. Names of diseases
3. Words denoting fault

...when the thing is found in a living being.

| Type | Example | Meaning |
|------|---------|---------|
| Dvandva | @deva[कटकवलयिनी] | woman with bracelet and armlet |
| Disease | @deva[कुष्ठी] | leper |
| | @deva[किलासी] | one with white leprosy |
| Fault | @deva[ककुदावर्ती], @deva[काकतालुकी] | (defects in animals) |

When not in a living being: @deva[पुष्पफलवान् वृक्षः] "tree with flowers and fruits."

Exception: not after body-part words: @deva[पाणिपादवती] (not *@deva[पाणिपादिनी]).`,

  '52129': `@deva[वातातीसाराभ्यां कुक्] — The augment @deva[कुक्] is added before @deva[इनि] after @deva[वात] and @deva[अतिसार] (when they denote diseases).

| Disease | Derivative | Meaning |
|---------|-----------|---------|
| @deva[वात] | @deva[वातकी] | one afflicted with rheumatism |
| @deva[अतिसार] | @deva[अतिसारकी] | one with diarrhea |

Another reading: @deva[अतीसारकी].

When not a disease: @deva[वातवती गुहा] "windy cave."

@note[A vārttika adds: @deva[पिशाचकी वैश्रवणः] "Kubera, lord of piśācas."]`,

  '52130': `@deva[पूरणे इनिः] — @deva[इनि] comes after ordinal numerals when age is denoted.

@deva[पञ्चमः अस्य अस्ति मासः संवत्सरो वा] = @deva[पञ्चमिन्] (nom. @deva[पञ्चमी]) — five months/years old

Example: @deva[पञ्चमी उष्ट्रः] — a five-year-old camel

Similarly: @deva[नवमी], @deva[दशमी], etc.

This is a restrictive rule: only @deva[इनि] comes here, not @deva[ठन्] (which @ref[5.2.115] would otherwise allow).

When not denoting age: @deva[पञ्चमवान् ग्रामरागः] "music with the fifth note."`,

  '52131': `@deva[सुखादिभ्य इनिः] — @deva[इनि] comes (exclusively) after @deva[सुख] etc.

| Base | Derivative |
|------|-----------|
| @deva[सुख] | @deva[सुखिन्] (nom. @deva[सुखी]) — happy |
| @deva[दुःख] | @deva[दुःखिन्] (nom. @deva[दुःखी]) — suffering |

When censure is implied, @deva[इन्] comes after @deva[माला] exclusively: @deva[माली].

The @deva[सुखादि] list: @deva[सुख], @deva[दुःख], @deva[तृप्त], @deva[कृच्छ], @deva[आश्र]/(@deva[आम्र]), @deva[अस्र], @deva[अलीक], @deva[करुण]/(@deva[करुणा]), @deva[सोढ], @deva[प्रतीप]/(@deva[प्रमीप]), @deva[शील], @deva[हल], @deva[माला] (in censure), @deva[कृपण], @deva[प्रणय]/(@deva[प्रणाय]), @deva[वल], @deva[कक्ष].`,

  '52132': `@deva[धर्मशीलवर्णान्तात्] — @deva[इनि] comes (exclusively) after compounds ending in @deva[धर्म], @deva[शील], or @deva[वर्ण].

| Compound | Derivative | Meaning |
|----------|-----------|---------|
| @deva[ब्राह्मणधर्मः] | @deva[ब्राह्मणधर्मी] | following brāhmaṇa customs |
| @deva[ब्राह्मणशीलम्] | @deva[ब्राह्मणशीलिन्] | having brāhmaṇa conduct |
| @deva[ब्राह्मणवर्णः] | @deva[ब्राह्मणवर्णिन्] | having brāhmaṇa appearance |`,

  '52133': `@deva[हस्ते जातौ] — @deva[इनि] comes after @deva[हस्त] when the word denotes a genus (jāti).

@deva[हस्तः अस्य अस्ति] = @deva[हस्तिन्] — elephant (the species characterized by trunk)

When not meaning genus: @deva[हस्तवान् पुरुषः] — "a man with a hand."`,

  '52134': `@deva[ब्रह्मचारिणि वर्णे] — @deva[इनि] comes after @deva[वर्ण] when the word means brahmacārin (student).

@deva[वर्णिन्] — brahmacārin, one invested with the sacred thread

The first three varṇas (brāhmaṇa, kṣatriya, vaiśya), entitled to upanayana, are called @deva[वर्णिन्] when leading the student life.

When not meaning brahmacārin: @deva[वर्णवान्] — "having color/caste."`,

  '52135': `@deva[पुष्करादिभ्यो देशे] — @deva[इनि] comes after @deva[पुष्कर] etc. when denoting a locality.

@deva[पुष्करिणी] — lotus pond (a place having lotuses)
@deva[पद्मिनी] — lotus pond

When not locality: @deva[पुष्करवान् हस्ती] — "elephant with lotuses."

Vārttikas:
- @deva[इन्] after @deva[बल] preceded by @deva[बाहु]/@deva[ऊरु]: @deva[बाहुबलिन्], @deva[ऊरुबलिन्]
- After words preceded by @deva[सर्व]: @deva[सर्वधनिन्], @deva[सर्वबीजिन्]
- After @deva[अर्थ] meaning "distant from": @deva[अर्थिन्] (otherwise @deva[अर्थवान्])
- After compounds ending in @deva[अर्थ]: @deva[धान्यार्थी], @deva[हिरण्यार्थी]`,

  '52136': `@deva[बलादिभ्यो मतुप् इनिश्च] — Both @deva[मतुप्] and @deva[इनि] come after @deva[बल] etc.

| Base | With @deva[मतुप्] | With @deva[इनि] |
|------|-----------------|----------------|
| @deva[बल] | @deva[बलवान्] | @deva[बलिन्] (nom. @deva[बली]) |
| @deva[उत्साह] | @deva[उत्साहवान्] | @deva[उत्साहिन्] (nom. @deva[उत्साही]) |

The @deva[बलादि] list: @deva[बल], @deva[उत्साह], @deva[उद्भास]/(@deva[उद्भाव]), @deva[उद्वास], @deva[उद्दास], @deva[शिखा], @deva[कुल], @deva[चूडा], @deva[सुल], @deva[कूल], @deva[आयाम], @deva[व्यायाम], @deva[उपयाम], @deva[आरोह], @deva[अवरोह], @deva[परिणाह], @deva[युद्ध], @deva[उद्वाम], @deva[शिखाबल], @deva[वूगमूल], @deva[वंश].`,

  '52137': `@deva[मन्मन्तान्नाम्नि] — @deva[इनि] comes after stems ending in @deva[मन्] or @deva[म] when forming a proper name.

| Base | Derivative | Use |
|------|-----------|-----|
| @deva[प्रथिमन्] | @deva[प्रथिमिन्] (fem. @deva[प्रथिमिनी]) | name |
| @deva[दामन्] | @deva[दामिनी] | name |
| @deva[होम] | @deva[होमिनी] | name |
| @deva[सोम] | @deva[सोमिनी] | name |

When not a name: @deva[सोमवान्], @deva[होमवान्].

The @deva[मन्] is shortened to @deva[म्] before @deva[इन्] by @ref[6.4.144].`,

  '52138': `@deva[कंशब्भ्युस्तितुतयसः] — Seven affixes come after @deva[कम्] (water, happiness) and @deva[शम्] (happiness):

| Affix | From @deva[कम्] | From @deva[शम्] |
|-------|----------------|----------------|
| @deva[ब] | @deva[कम्बः] | @deva[शम्बः] |
| @deva[भ] | @deva[कम्भः] | @deva[शम्भः] |
| @deva[युस्] | @deva[कंयुः] | @deva[शंयुः] |
| @deva[ति] | @deva[कन्तिः] | @deva[शन्तिः] |
| @deva[तु] | @deva[कन्तुः] | @deva[शन्तुः] |
| @deva[त] | @deva[कन्तः] | @deva[शन्तः] |
| @deva[यस्] | @deva[कंयः] | @deva[शंयः] |

The @deva[स्] in @deva[युस्] and @deva[यस्] makes the stem a pada (@ref[1.4.16]), so @deva[म्] becomes anusvāra by @ref[8.3.23].

When forming names: @deva[कम्यः], @deva[शम्यः].`,

  '52139': `@deva[तुन्दिबलिवटिभ्यो भः] — The affix @deva[भ] comes after @deva[तुन्दि], @deva[वलि], and @deva[वटि].

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[तुन्दि] | @deva[तुन्दिभः] | pot-bellied |
| @deva[बलि] / @deva[वलि] | @deva[बलिभः] / @deva[वलिभः] | wrinkled |
| @deva[वटि] | @deva[वटिभः] | (having vati) |

@deva[बलि] is also in the @deva[पामादि] class (@ref[5.2.100]), giving another form @deva[बलिभः].

The forms @deva[तुन्दिलः] etc. are also valid by @ref[5.2.117].`,

  '52140': `@deva[अहंशुभभ्यां युस्] — The affix @deva[युस्] comes after @deva[अहम्] and the indeclinable @deva[शुभम्].

| Base | Derivative | Meaning |
|------|-----------|---------|
| @deva[अहम्] | @deva[अहंयुः] | egoistic, haughty |
| @deva[शुभम्] | @deva[शुभंयुः] | auspicious, blessed |

@deva[अहंयुः] = @deva[अहंकारवान्] — possessing ego
@deva[शुभंयुः] = @deva[कल्याणवान्] — possessing auspiciousness

The @deva[स्] of @deva[युस्] makes these stems padas (@ref[1.4.16]), and @deva[म्] becomes anusvāra by @ref[8.3.23]. See @ref[5.2.123].`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (5.2.101-140). Total: ${Object.keys(vasu).length}`);
