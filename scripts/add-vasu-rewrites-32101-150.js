import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '32101': `@deva[अन्येष्वपि दृश्यते] — "The affix @deva[ड] is seen after @deva[जन्] with case-inflected words other than those previously mentioned."

| Example | Meaning |
|---------|---------|
| @deva[अजः] | unborn (@deva[न जायते]) |
| @deva[द्विजः] | twice-born (@deva[द्विर्जातः]) |

The previous sūtras specified locative (@ref[3.2.97]) and ablative (@ref[3.2.98]), but @deva[ड] appears with other cases too.`,

  '32102': `@deva[निष्ठा] — "The @deva[निष्ठा] affixes (@deva[क्त] and @deva[क्तवतु]) come after a root with past meaning."

| Root | With @deva[क्त] | With @deva[क्तवतु] |
|------|---------------|-------------------|
| @deva[कृ] | @deva[कृतम्] "made" | @deva[कृतवान्] "has made" |
| @deva[भुज्] | @deva[भुक्तम्] "eaten" | @deva[भुक्तवान्] "has eaten" |

@note[@deva[निष्ठा] also applies when @deva[आदिकर्म] (initial object) is meant—see @ref[3.4.71].]`,

  '32103': `@deva[सुयजोर्ङ्वनिप्] — "After @deva[सु] 'to extract juice' and @deva[यज्] 'to sacrifice', @deva[ङ्वनिप्] is used with past meaning."

| Root | Form | Meaning |
|------|------|---------|
| @deva[सु] | @deva[सुत्वा] | one who has extracted juice |
| @deva[यज्] | @deva[यज्वा] | one who has sacrificed |

**Derivation:** @deva[सु] + @deva[ङ्वनिप्] → @deva[सुत्] + @deva[वन्] (by @ref[6.1.71]) → @deva[सुत्वन्]`,

  '32104': `@deva[जॄ अतृन्] — "After @deva[जृ] 'to grow old', @deva[अतृन्] is used with past meaning."

**Derivation:** @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] (by @ref[7.3.84]) → @deva[जरत्]

| 1st sg. | 1st du. | 1st pl. |
|---------|---------|---------|
| @deva[जरन्] | @deva[जरन्तौ] | @deva[जरन्तः] |

By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] also applies: @deva[जीर्णः], @deva[जीर्णवान्]`,

  '32105': `@deva[लिट् छन्दसि] — "In the Vedas, @deva[लिट्] (perfect) comes after a verb with past meaning."

**Examples:**
- @deva[अहं सूर्यमुभयतो ददर्श] "I saw the sun from both sides"
- @deva[अहं द्यावापृथिवी आततान] "I stretched heaven and earth"

Here @deva[ददर्श] and @deva[आततान] have @deva[निष्ठा]-like force.`,

  '32106': `@deva[लिटः कानच् वा] — "In the Vedas, @deva[कानच्] optionally replaces @deva[लिट्]."

| With @deva[कानच्] | Meaning |
|------------------|---------|
| @deva[चिक्यानः] | he consecrated the fire |
| @deva[सुषुवाणः] | he pressed the soma juice |

When not applied, regular @deva[लिट्] forms are used.`,

  '32107': `@deva[क्वसुश्च] — "In the Vedas, @deva[क्वसु] optionally replaces @deva[लिट्]."

| Form | Meaning | Source |
|------|---------|--------|
| @deva[जक्षिवान्] | eaten | Yaj. VIII.19 |
| @deva[पपिवान्] | drunk | — |

Without @deva[क्वसु]: @deva[ददर्श] (as in @ref[3.2.105])`,

  '32108': `@deva[भाषे च सदवश्रुवः] — "In classical Sanskrit, @deva[क्वसु] optionally replaces @deva[लिट्] after @deva[सद्], @deva[वस्], and @deva[श्रु]."

| Root | With @deva[क्वसु] | Alternative |
|------|-----------------|-------------|
| @deva[सद्] | @deva[उपसेदिवान्] | @deva[उपससाद] |
| @deva[वस्] | @deva[अनूषिवान्] | @deva[अन्ववासीत्] |
| @deva[श्रु] | @deva[शुश्रुवान्] | @deva[शुश्राव] |`,

  '32109': `@deva[उपेयिवाननश्वाननूचानश्च] — "The forms @deva[उपेयिवान्], @deva[नाश्वान्], @deva[नूचान्] are irregular."

| Form | Derivation | Irregularity |
|------|------------|--------------|
| @deva[उपेयिवान्] | @deva[उप] + @deva[इ] + @deva[क्वसु] | @deva[इट्] augment added unexpectedly |
| @deva[नाश्वान्] | @deva[नश्] + @deva[क्वसु] | irregular form |
| @deva[नूचान्] | @deva[वच्] + @deva[क्वसु] | @deva[वच्] → @deva[ऊच्] |`,

  '32110': `@deva[लुङ्] — "The affix @deva[लुङ्] (aorist) comes after a verb with past meaning."

The aorist expresses:
- Past action done recently (today)
- Past action with indefinite/general reference

The entire @deva[लुङ्] affix is replaced by personal terminations (see @ref[3.1.43] ff.).`,

  '32111': `@deva[अनद्यतने लङ्] — "The affix @deva[लङ्] (imperfect) comes after a verb with past meaning when the action was before today."

| Example | Meaning |
|---------|---------|
| @deva[अकरोत्] | he did (yesterday/before) |
| @deva[अहरत्] | he took (yesterday/before) |

@deva[अनद्यतन] = "not of the current day" (Bahuvrīhi compound)`,

  '32112': `@deva[लृट् अभिज्ञावचने] — "When 'recollection' is expressed, @deva[लृट्] (future) is used with past meaning (before today)."

@deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः] — "Rememberest thou, Devadatta, we were dwelling in Kashmir?"

This overrides @deva[लङ्]. The future tense expresses recalled past.`,

  '32113': `@deva[यदि न] — "@deva[लृट्] is NOT used with recollection-words when the particle @deva[यत्] is present."

@deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम] — "Thou rememberest, Devadatta, how we did dwell in Kashmir."

With @deva[यत्], use @deva[लङ्] instead of @deva[लृट्].`,

  '32114': `@deva[साकाङ्क्षे वा] — "@deva[लृट्] is optionally used with recollection-words (with or without @deva[यत्]) when two verbs are interdependent in the sentence."

@deva[साकाङ्क्ष] = when one verb requires another to complete the speaker's meaning.

Both @deva[लृट्] and @deva[लङ्] are valid when the verbs are mutually dependent.`,

  '32115': `@deva[परोक्षे लिट्] — "@deva[लिट्] (perfect) comes after a verb with past meaning (before today) when unperceived by the narrator."

@deva[परोक्ष] = not directly witnessed by the speaker.

The perfect tense is used for past actions the speaker did not personally observe.`,

  '32116': `@deva[हशश्वतोः किम्] — "When @deva[ह] or @deva[शश्वत्] is present, both @deva[लङ्] and @deva[लिट्] may be used (for unperceived past before today)."

| With @deva[लङ्] | With @deva[लिट्] | Meaning |
|----------------|-----------------|---------|
| @deva[इति हाकरोत्] | @deva[इति ह चकार] | "Alas! he did it" |
| @deva[शश्वदकरोत्] | @deva[शश्वच्चकार] | "again and again he did it" |`,

  '32117': `@deva[आसन्नकाले प्रश्ने च] — "When the past is recent and the sentence is interrogative, both @deva[लङ्] and @deva[लिट्] may be used (for unperceived past before today)."

| Question | Meaning |
|----------|---------|
| @deva[अगच्छत् देवदत्तः] | Did Devadatta go? |
| @deva[जगाम देवदत्तः] | Has Devadatta gone? |

Both are valid for recently-past, unperceived actions.`,

  '32118': `@deva[स्मे लट्] — "When @deva[स्म] is present, @deva[लट्] (present) is used with past meaning (before today, unperceived)."

| Example | Meaning |
|---------|---------|
| @deva[यजति स्म युधिष्ठिरः] | Yudhiṣṭhira sacrificed |
| @deva[नलेन स्म पुराधीयते] | It was studied before by Nala |

This overrides @deva[लिट्].`,

  '32119': `@deva[अपि कर्तरि स्मे लट्] — "When @deva[स्म] is present and the action was perceived by the agent (before today), @deva[लट्] is used."

| Example | Meaning |
|---------|---------|
| @deva[एवं स्म पिता ब्रवीति] | "Thus said the father" |
| @deva[इति स्मोपाध्यायः कथयति] | "Thus said the preceptor" |`,

  '32120': `@deva[ननु प्रतिवचने लट्] — "When @deva[ननु] is present and an answer is given, @deva[लट्] is used for past meaning."

**Question:** @deva[अकार्षीः कटं देवदत्त?] "Devadatta, did you make the mat?"
**Answer:** @deva[ननु करोमि भोः] "O yes, I did make it."

This overrides @deva[लुङ्].`,

  '32121': `@deva[न नु वा प्रतिवचने] — "When @deva[न] 'not' or @deva[नु] 'what of that' is present in a reply, @deva[लट्] is optionally used for past meaning."

| Response | Alternative |
|----------|-------------|
| @deva[न करोमि भोः] | @deva[नाकार्षम्] |
| @deva[अहं नु करोमि] | @deva[अहं न्वकार्षम्] |`,

  '32122': `@deva[पुरास्मे लुङ्लट्] — "When @deva[पुरा] is present (without @deva[स्म]), both @deva[लुङ्] and @deva[लट्] are optionally used for past (before today)."

| With @deva[लुङ्] | With @deva[लट्] |
|-----------------|----------------|
| @deva[पुराकार्षीत्] | @deva[पुरा करोति] |

@note[The @deva[अनद्यतन] condition "jumps" over sūtras 120-121 (@deva[मण्डूकप्लुति]).]`,

  '32123': `@deva[वर्तमाने लट्] — "@deva[लट्] (present) comes after a verb denoting present action."

@deva[वर्तमान] = action begun but not yet ended (still continuing).

| Example | Meaning |
|---------|---------|
| @deva[पचति] | he is cooking |
| @deva[तिष्ठन्ति पर्वताः] | the mountains stand |
| @deva[स्रवन्ति नद्यः] | the rivers flow |`,

  '32124': `@deva[लटः शतृशानचावप्रथमासमानाधिकरणे] — "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] when not agreeing with a nominative."

| Example | Meaning |
|---------|---------|
| @deva[पचमानं देवदत्तं पश्य] | behold Devadatta who is cooking |
| @deva[पचता कृतम्] | done by one who is cooking |

**Derivation:** @deva[पच्] + @deva[शानच्] → @deva[पच्] + @deva[शप्] + @deva[शानच्] → @deva[पचमान]`,

  '32125': `@deva[सम्बोधने च] — "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] even in nominative when it's vocative."

| Example | Meaning |
|---------|---------|
| @deva[हे पचन्] | O thou who art cooking! |
| @deva[हे पचमान] | O thou who art cooking! |`,

  '32126': `@deva[लक्षणहेत्वोः क्रियायाः] — "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] when expressing characteristic (@deva[लक्षण]) or cause (@deva[हेतु]) of an action."

| Type | Example | Meaning |
|------|---------|---------|
| @deva[लक्षण] | @deva[शयानाः भुञ्जते यवनाः] | Yavanas eat lying down |
| @deva[हेतु] | @deva[हरिं पश्यन् मुच्यते] | by seeing Hari, one is freed |`,

  '32127': `@deva[शतृशानचौ सत्] — "The affixes @deva[शतृ] and @deva[शानच्] are called @deva[सत्]."

This technical name allows these participles to replace not only present tense but also future (@ref[3.3.14]) and other tenses:

| Present | Future |
|---------|--------|
| @deva[कुर्वन्] | @deva[करिष्यन्] |
| @deva[कुर्वाणः] | @deva[करिष्यमाणः] |`,

  '32128': `@deva[पूयजोः शानन्] — "After @deva[पू] 'to purify' and @deva[यज्] 'to sacrifice', @deva[शानन्] is used."

| Form | Meaning |
|------|---------|
| @deva[पवमानः] | purifier (fire, air) |
| @deva[यजमानः] | sacrificer |

@note[These are special agent-noun forms, not regular participles.]`,

  '32129': `@deva[ताच्छील्यवयोवचनशक्तिषु चानश्] — "@deva[चानश्] comes after a verb expressing habit, age-appropriate capacity, or ability."

| Sense | Example | Meaning |
|-------|---------|---------|
| Habit | @deva[भोगं भुञ्जानः] | accustomed to enjoy |
| Age | @deva[कवचं बिभ्राणः] | of age to wear armor |
| Ability | @deva[शत्रुं निघ्नानः] | able to destroy foes |`,

  '32130': `@deva[इङ्धारयोरकृच्छ्रे शतृ] — "After @deva[इ] 'to go/study' and @deva[धारि] 'to hold/master', @deva[शतृ] is used when expressing facility (without difficulty)."

| Example | Meaning |
|---------|---------|
| @deva[अधीयन् पारायणम्] | facile reading of the Purāṇa |
| @deva[धारयन्नुपनिषदम्] | easily mastering the Upaniṣad |

With difficulty: @deva[कृच्छ्रेणाधीते] "he reads with difficulty"`,

  '32131': `@deva[द्विषोऽमित्रे] — "After @deva[द्विष्], @deva[शतृ] is used when meaning 'enemy'."

| Form | Meaning |
|------|---------|
| @deva[द्विषन्] | enemy (sg.) |
| @deva[द्विषन्तौ] | two enemies |
| @deva[द्विषन्तः] | enemies (pl.) |

Not "enemy": @deva[द्वेष्टि भार्या पतिम्] "the wife hates her husband"`,

  '32132': `@deva[यज्ञसंयोगे सोः] — "After @deva[सु] 'to extract juice', @deva[शतृ] is used when connected with sacrifice."

**Derivation:** @deva[सु] + @deva[नु] + @deva[शतृ] → @deva[सुन्वत्] → @deva[सुन्वन्] (sg.), @deva[सुन्वन्तः] (pl.)

@deva[सर्वे सुन्वन्तः] — "all are partaking in the sacrifice"`,

  '32133': `@deva[अर्हः स्तुतौ] — "After @deva[अर्ह्], @deva[शतृ] is used when expressing praise."

| Example | Meaning |
|---------|---------|
| @deva[अर्हन्निह भवान्विद्याम्] | thou art worthy of knowledge here |
| @deva[अर्हन्निह भवान्पूजाम्] | thou art worthy of honor here |

Not praise: @deva[अर्हति चौरो वधम्] "the thief deserves death"`,

  '32134': `@deva[आ क्विप् तच्छीलतद्धर्मतत्साधुकारिषु] — "From here through @ref[3.4.177], affixes express agents with such habit (@deva[तच्छील]), duty (@deva[तद्धर्म]), or skill (@deva[तत्साधुकारि])."

This is an @deva[अधिकार] (governing rule):
- @deva[तच्छील] = natural inclination, not prompted by fruit
- @deva[तद्धर्म] = acting from duty, not habit
- @deva[तत्साधुकारि] = skilled performance`,

  '32135': `@deva[तृन्] — "The affix @deva[तृन्] comes after all verbs expressing habit/duty/skill."

| Root | Form | Meaning |
|------|------|---------|
| @deva[कृ] | @deva[कर्ता] | habitual maker |

**Examples:**
- @deva[कर्ता कटान्] "accustomed to make mats" (habit)
- @deva[मुण्डयितारः श्राविष्ठायना] "the Śrāviṣṭhāyanas shave widows' heads" (nature)`,

  '32136': `@deva[अलंकृन्निराकृप्रजनोत्पचोत्पतोन्मदरुच्यपत्रपवृत्वृधसहचरः इष्णुच्] — "After @deva[अलंकृ], @deva[निराकृ], @deva[प्रजन्], @deva[उत्पच्], @deva[उत्पत्], @deva[उन्मद्], @deva[रुच्], @deva[अपत्रप्], @deva[वृत्], @deva[वृध्], @deva[सह्], @deva[चर्], @deva[इष्णुच्] is used."

| Form | Meaning |
|------|---------|
| @deva[अलङ्करिष्णुः] | decorating |
| @deva[प्रजनिष्णुः] | procreative |
| @deva[उत्पतिष्णुः] | apt to fly |
| @deva[सहिष्णुः] | enduring |`,

  '32137': `@deva[णौ च छन्दसि] — "In the Vedas, @deva[इष्णुच्] comes after causative (@deva[णि]) verbs."

| Example | Meaning |
|---------|---------|
| @deva[दृषदं धारयिष्णवः] | those who hold the stones |
| @deva[वीरुधः पारयिष्णवः] | those who complete the herbs |`,

  '32138': `@deva[भुवश्च] — "In the Vedas, @deva[इष्णुच्] comes after @deva[भू] etc."

@deva[भविष्णुः] — "becoming"

The word "also" indicates other verbs too: @deva[भ्राजिष्णुना लोहितचन्दनेन]`,

  '32139': `@deva[ग्लाजिस्थश्च क्स्नु भूञश्च] — "After @deva[ग्ला], @deva[जि], @deva[स्था], and @deva[भू], @deva[क्स्नु] is used."

| Form | Meaning |
|------|---------|
| @deva[ग्लास्नुः] | languid |
| @deva[जिष्णुः] | victorious |
| @deva[स्थास्नुः] | immovable |
| @deva[भूष्णुः] | being |

@note[Not restricted to Vedic. The indicatory letter is @deva[ग], not @deva[क].]`,

  '32140': `@deva[त्रसिगृधिधृषिक्षिपेः क्नु] — "After @deva[त्रस्], @deva[गृध्], @deva[धृष्], @deva[क्षिप्], @deva[क्नु] is used."

| Form | Meaning |
|------|---------|
| @deva[त्रस्नुः] | trembling |
| @deva[गृध्नुः] | greedy |
| @deva[धृष्णुः] | bold |
| @deva[क्षिप्णुः] | throwing |`,

  '32141': `@deva[शमादिभ्यो घिनुण्] — "After the eight verbs beginning with @deva[शम्], @deva[घिनुण्] is used."

The real affix is @deva[इन्]:
- @deva[घ] causes guttural substitution
- @deva[ण्] causes vṛddhi (@ref[7.2.116])

| Form | Meaning |
|------|---------|
| @deva[शामी] | peaceful |
| @deva[घ्राणी] | smelling |`,

  '32142': `@deva[संपृचानुरुध्...] — "After @deva[सम्पृच्], @deva[अनुरुध्], @deva[आयम्], @deva[आयस्], @deva[परिसृ], @deva[संसृज्], @deva[परिदेवि], @deva[संज्वर्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[परिदह्], @deva[परिमुह्], @deva[दुष्], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[आक्रीड्], @deva[विविच्], @deva[त्यज्], @deva[रज्], @deva[भज्], @deva[अतिचर्], @deva[अपचर्], @deva[आमुष्], @deva[अभ्याहन्], @deva[घिनुण्] is used."

| Form | Meaning |
|------|---------|
| @deva[द्वेषी] | hateful |
| @deva[द्रोही] | treacherous |
| @deva[योगी] | one who practices yoga |`,

  '32143': `@deva[विकषिलसिकत्थिस्रम्भः] — "After @deva[कष्], @deva[लस्], @deva[कत्थ्], @deva[स्रम्भ्] with @deva[वि], @deva[घिनुण्] is used."

| Form | Meaning |
|------|---------|
| @deva[विकाषी] | injuring |
| @deva[विलासी] | sportive, sensualist |
| @deva[विकत्थी] | vaunting |
| @deva[विस्रम्भी] | confiding |`,

  '32144': `@deva[अपविलषः] — "After @deva[लष्] with @deva[अप] or @deva[वि], @deva[घिनुण्] is used."

| Form | Meaning |
|------|---------|
| @deva[अपलाषी] | thirsty |
| @deva[विलाषी] | desirous |`,

  '32145': `@deva[प्रलपसृद्रुमथवदवसः] — "After @deva[लप्], @deva[सृ], @deva[द्रु], @deva[मथ्], @deva[वद्], @deva[वस्] with @deva[प्र], @deva[घिनुण्] is used."

| Form | Meaning |
|------|---------|
| @deva[प्रलापी] | prattling |
| @deva[प्रसारी] | extending |
| @deva[प्रद्रावी] | fugitive |
| @deva[प्रमाथी] | tormenting |
| @deva[प्रवादी] | reporting |
| @deva[प्रवासी] | traveller |`,

  '32146': `@deva[निन्दहिंसक्लिशखादविनाशपरिक्षिपपरिरटव्याभाष्यासूयः वुञ्] — "After @deva[निन्द्], @deva[हिंस्], @deva[क्लिश्], @deva[खाद्], @deva[विनश्], @deva[परिक्षिप्], @deva[परिरट्], @deva[व्याभाष्], @deva[असूय], @deva[वुञ्] is used."

| Form | Meaning |
|------|---------|
| @deva[निन्दकः] | blaming |
| @deva[हिंसकः] | injuring |
| @deva[क्लेशकः] | troublesome |
| @deva[खादकः] | eating |`,

  '32147': `@deva[उपसर्गे देविक्रुशोः] — "After @deva[देवि] and @deva[क्रुश्] with @deva[उपसर्ग], @deva[वुञ्] is used."

| Form | Meaning |
|------|---------|
| @deva[आदेवकः] | one who laments |
| @deva[आक्रोशकः] | reviler |
| @deva[परिदेवकः] | one who laments |

Without @deva[उपसर्ग]: @deva[देवयिता], @deva[क्रोष्टा] (with @deva[तृन्])`,

  '32148': `@deva[गत्यर्थशब्दार्थाकर्मकेभ्यो युच्] — "After intransitive verbs denoting motion or sound, @deva[युच्] is used."

| Root | Form | Meaning |
|------|------|---------|
| @deva[चल्] | @deva[चलनः] | moving |
| @deva[चुप्] | @deva[चोपनः] | creeping |
| @deva[शब्द्] | @deva[शब्दनः] | sounding |
| @deva[रु] | @deva[रवणः] | roaring |`,

  '32149': `@deva[शुभार्तियोः] — "After @deva[शुभ्] and @deva[अर्ति], @deva[युच्] is used."

| Form | Meaning |
|------|---------|
| @deva[शोभनः] | shining, beautiful |
| @deva[अर्तनः] | suffering |`,

  '32150': `@deva[तापक्लिश्यः] — "After @deva[तप्] and @deva[क्लिश्], @deva[युच्] is used."

| Form | Meaning |
|------|---------|
| @deva[तापनः] | heating |
| @deva[क्लेशनः] | tormenting |`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.2.101-150). Total: ${Object.keys(vasu).length}`);
