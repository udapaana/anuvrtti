import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '43051': `@deva[कालात्] — An affix comes after a time-word (locative) meaning "a wild beast that wanders/makes noise then":

| Base | Meaning | Derivative | Gloss |
|------|---------|------------|-------|
| @deva[निशा] (night) | wanders at night | @deva[नैशः], @deva[नैशिकः] | nocturnal beast |
| @deva[प्रादोष] (twilight) | howls at twilight | @deva[प्रादोषः], @deva[प्रादोषिकः] | twilight beast |

@note[Applies only to @deva[मृग] (wild beast). For owl at night: @deva[निशायां व्याहरति उलूकः] — no affix, since @deva[उलूक] is not @deva[मृग].]`,

  '43052': `@deva[तत्सोढं तस्य] — An affix comes after a time-word (nominative) meaning "habituated to/endured that":

| Base | Meaning | Derivative | Gloss |
|------|---------|------------|-------|
| @deva[निशा] | night study habit | @deva[नैशः], @deva[नैशिकः] | student who studies at night |
| @deva[प्रादोष] | twilight habit | @deva[प्रादोषः], @deva[प्रादोषिकः] | habituated to evening activity |

@note[@deva[सोढम्] = @deva[जितम्] or @deva[अभ्यस्तम्] (endured, habituated).]`,

  '43053': `@deva[तत्र भवः] — An affix comes after a place-word (locative) meaning "one who stays there":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[स्रुघ्न] | stays in Srughna | @deva[स्रौघ्नः] |
| @deva[मथुरा] | stays in Mathurā | @deva[माथुरः] |
| @deva[राष्ट्र] | stays in kingdom | @deva[राष्ट्रियः] |

@note[Sense here is "existence/residence," not "birth" (which is @ref[4.3.25] @deva[तत्र जातः]). The repetition of @deva[तत्र] stops @deva[तदस्य] from the prior sūtra.]`,

  '43054': `@deva[दिगादिभ्यो यत्] — @deva[यत्] comes after @deva[दिक्]-class words meaning "staying there":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[दिश्] (direction) | situated in that quarter | @deva[दिश्यम्] |
| @deva[वर्ग] (group) | belonging to that group | @deva[वर्ग्यम्] |
| @deva[सेनामुख] (van) | in army's front | @deva[सेनामुख्यम्] |
| @deva[सेनाजघन] (rear) | in army's rear | @deva[सेनाजघन्यम्] |

@note[@deva[मुख]/​@deva[जघन] here mean van/rear of army, not mouth/hip. @deva[उदक्] + @deva[यत्] → @deva[उदक्या] (= @deva[रजस्वला]) when used as a name.]`,

  '43055': `@deva[अङ्गात्] — @deva[यत्] comes after body-part words meaning "occurring there":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[दन्त] (tooth) | dental | @deva[दन्त्यम्] |
| @deva[कर्ण] (ear) | auricular | @deva[कर्ण्यम्] |
| @deva[ओष्ठ] (lip) | labial | @deva[ओष्ट्यम्] |
| @deva[पाद] (foot) | pedal | @deva[पद्यम्] (@ref[6.3.53]) |
| @deva[नासिका] (nose) | nasal | @deva[नस्यम्] |

@note[This debars @deva[अण्].]`,

  '43056': `@deva[दृत्यादिभ्यो ढञ्] — @deva[ढञ्] comes after @deva[दृति]-class words meaning "staying there":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[दृति] (leather bag) | in a bag | @deva[दार्तेयम्] |
| @deva[कुक्षि] (belly) | in the belly | @deva[कौक्षेयम्] |
| @deva[कलशि] (pot) | in a pot | @deva[कालशेयम्] |
| @deva[वस्ति] (bladder) | in bladder | @deva[वास्तेयम्] |
| @deva[अस्ति] (existence) | in existence | @deva[आस्तेयम्] |
| @deva[अहि] (snake) | in snake | @deva[आहेयम्] (a poison name) |

@note[@deva[अस्ति] here is a noun, not a verb. Cf. @deva[अस्तिक्षीरा गौः] (cow having milk), @deva[अस्तिमान्] = @deva[धनवान्].]`,

  '43057': `@deva[ग्रीवाभ्यश्चाण्] — @deva[अण्] also comes (along with @deva[ढञ्]) after @deva[ग्रीवा] meaning "staying there":

| Base | Derivative |
|------|------------|
| @deva[ग्रीवा] (neck/blood-vessels) | @deva[ग्रैवम्] (by @deva[अण्]) |
| @deva[ग्रीवा] | @deva[ग्रैवेयम्] (by @deva[ढञ्]) |

@note[@deva[ग्रीवा] meaning blood-vessels takes plural in the sūtra since they are many. Debars @deva[यत्] of @ref[4.3.55].]`,

  '43058': `@deva[गम्भीरान्ञ्यः] — @deva[ञ्य] comes after @deva[गम्भीर] meaning "staying there":

@deva[गम्भीरे भवम्] → @deva[गाम्भीर्यम्] (gravity, profundity)

**Vārttika:** @deva[ञ्य] also comes after:
| Base | Derivative |
|------|------------|
| @deva[बहिस्] | @deva[बाह्यम्] |
| @deva[देव] | @deva[दैव्यम्] |
| @deva[पञ्चजन] | @deva[पाञ्चजन्यम्] |

**Vārttika:** @deva[ञ्य] comes after @deva[चातुर्मास] for sacrifice: @deva[चातुर्मास्यानि व्रतानि], @deva[चातुर्मास्यो यज्ञः]; otherwise @deva[चातुर्मासः]।`,

  '43059': `@deva[अव्ययीभावाच्च परिमुखादीनाम्] — @deva[ञ्य] comes after @deva[अव्ययीभाव] compounds of the @deva[परिमुख]-class meaning "staying there":

| Compound | Derivative |
|----------|------------|
| @deva[परिमुख] | @deva[पारिमुख्यम्] |
| @deva[परिहनु] | @deva[पारिहनव्यम्] |

@note[Not after all @deva[अव्ययीभाव] compounds — only @deva[परिमुखादि] words. Thus @deva[उपकुल] → @deva[औपकुलम्] (not @deva[*औपकुल्यम्]) since @deva[उपकुल] is not in the class.]`,

  '43060': `@deva[अन्तरात् ठञ्] — @deva[ठञ्] comes after @deva[अव्ययीभाव] compounds with @deva[अन्तर्] as prior member meaning "staying there":

| Compound | Derivative |
|----------|------------|
| @deva[अन्तर्वेश्म] | @deva[आन्तर्वेश्मिकम्] |
| @deva[अन्तर्गेह] | @deva[आन्तर्गेहिकम्] |

**Vārttika:** @deva[ठञ्] also comes after @deva[समान]: @deva[समाने भवम्] → @deva[सामानिकम्]।
After words beginning with @deva[समान]: @deva[सामानग्रामिकम्]।`,

  '43061': `@deva[पर्यनुपरिभ्यो ग्रामः] — @deva[ठञ्] comes after @deva[परि/अनु] + @deva[ग्राम] (as @deva[अव्ययीभाव]) meaning "staying there":

| Compound | Derivative |
|----------|------------|
| @deva[परिग्राम] | @deva[पारिग्रामिकः] |
| @deva[अनुग्राम] | @deva[आनुग्रामिकः] |

@note[Debars @deva[अण्].]`,

  '43062': `@deva[जिह्वामूलाङ्गुलिभ्यश्छः] — @deva[छ] comes after @deva[जिह्वामूल] and @deva[अङ्गुलि] meaning "staying there":

| Base | Derivative |
|------|------------|
| @deva[जिह्वामूल] (tongue-root) | @deva[जिह्वामूलीयम्] |
| @deva[अङ्गुलि] (finger) | @deva[अङ्गुलीयम्] (finger-ring) |

@note[Debars @deva[यत्] of @ref[4.3.55].]`,

  '43063': `@deva[वर्गान्ताच्छः] — @deva[छ] comes after words ending in @deva[वर्ग] meaning "occurring there":

| Base | Derivative |
|------|------------|
| @deva[कवर्ग] (k-class) | @deva[कवर्गीयम्] |
| @deva[चवर्ग] (c-class) | @deva[चवर्गीयम्] |

@note[Debars @deva[अण्]. Refers to phonetic classes of consonants.]`,

  '43064': `@deva[अशब्दे यखौ] — After @deva[वर्ग]-ending words NOT meaning "letter," @deva[यत्] and @deva[ख] optionally apply:

| Base | By @deva[यत्] | By @deva[ख] | By @deva[छ] |
|------|---------|---------|---------|
| @deva[वासुदेववर्ग] | @deva[वासुदेववर्ग्यः] | @deva[वासुदेववर्गीणः] | @deva[वासुदेववर्गीयः] |
| @deva[युधिष्ठिरवर्ग] | @deva[युधिष्ठिरवर्ग्यः] | @deva[युधिष्ठिरवर्गीणः] | @deva[युधिष्ठिरवर्गीयः] |

@note[When meaning @deva[शब्द] (letter/word), only @deva[छ]: @deva[कवर्गीय वर्णः]।]`,

  '43065': `@deva[कर्णललाटाट्कन् भूषणे] — @deva[कन्] comes after @deva[कर्ण] and @deva[ललाट] when denoting an ornament:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[कर्ण] (ear) | @deva[कर्णिका] | ear-ring |
| @deva[ललाट] (forehead) | @deva[ललाटिका] | forehead ornament |

@note[Debars @deva[यत्] of @ref[4.3.55]. Not for ornaments: @deva[कर्ण्यम्], @deva[ललाट्यम्] (what is in ear/forehead).]`,

  '43066': `@deva[व्याख्यातव्यनाम्नस्तस्य च तत्र भवम्] — After the name of a subject to be explained, an affix comes meaning "its commentary" and also "occurring there":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सुप्] (case-endings) | @deva[सौपः ग्रन्थः] | commentary on @deva[सुप्] |
| @deva[तिङ्] (verb-endings) | @deva[तैङः] | commentary on @deva[तिङ्] |
| @deva[कृत्] (kṛt-affixes) | @deva[कार्तः] | commentary on @deva[कृत्] |

@note[@deva[सौप] etc. may also mean "what occurs among @deva[सुप्]s."]`,

  '43067': `@deva[बह्वचोऽन्तोदात्ताद् ढञ्] — @deva[ठञ्] comes after polysyllabic final-accented words (names of subjects) meaning "commentary" or "occurring there":

| Base | Derivative |
|------|------------|
| @deva[षत्वणत्व] (षण्-changes) | @deva[षात्वणत्विकम्] |
| @deva[नतानत] (udātta-anudātta) | @deva[नातानतिकम्] |

@note[These compounds are final-accented by @ref[6.1.169]. Monosyllabic words take @deva[अण्]; disyllabic take @deva[ठक्] (@ref[4.3.72]).]`,

  '43068': `@deva[क्रतुयज्ञाच्च] — @deva[ठञ्] comes after sacrifice-names meaning "commentary" or "occurring there":

| Base | Derivative |
|------|------------|
| @deva[अग्निष्टोम] | @deva[आग्निष्टोमिकः] |
| @deva[वाजपेय] | @deva[वाजपेयिकः] |
| @deva[राजसूय] | @deva[राजसूयिकः] |
| @deva[पाकयज्ञ] | @deva[पाकयज्ञिकः] |
| @deva[नावयज्ञ] | @deva[नावयज्ञिकः] |

@note[Applies to non-@deva[अन्तोदात्त] words. @deva[क्रतु] technically = Soma-sacrifices; @deva[यज्ञ] includes non-Soma rites.]`,

  '43069': `@deva[ऋषेरध्यायेषु] — @deva[ठञ्] comes after a Ṛṣi's name (as work-title) when meaning a chapter and its commentary:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[वसिष्ठ] | @deva[वासिष्ठिकोऽध्यायः] | chapter on Vasiṣṭha |
| @deva[विश्वामित्र] | @deva[वैश्वामित्रिकः] | chapter on Viśvāmitra |

@note[@deva[ऋषि] here means a work named after a Ṛṣi in the Pravara list. The derivative always means an @deva[अध्याय] (chapter).]`,

  '43070': `@deva[पौरोडाशात्ष्ठन्] — @deva[ष्ठन्] comes after @deva[पौरोडाश] and @deva[पुरोडाश] meaning "commentary" or "occurring there":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[पौरोडाश] (mantras on cake) | @deva[पौरोडाशिकः] | @deva[पौरोडाशिकी] |
| @deva[पुरोडाश] (sacred cake) | @deva[पुरोडाशिकः] | @deva[पुरोडाशिकी] |

@note[@deva[ष] indicates feminine by @deva[ङीष्] (@ref[4.1.41]). Commentary here relates to mantras, not the sacrifice itself.]`,

  '43071': `@deva[छन्दसो यदण्] — @deva[यत्] and @deva[अण्] come after @deva[छन्दस्] meaning "commentary" or "occurring there":

| Derivative |
|------------|
| @deva[छन्दस्यः] (by @deva[यत्]) |
| @deva[छान्दसः] (by @deva[अण्]) |

@note[Debars @deva[ठक्] of the following sūtra.]`,

  '43072': `@deva[द्व्यच ऋदन्ताद् ब्राह्मणार्क्प्रथमपुरश्चरणनामाख्यातनामाख्यातेभ्यो ठक्] — @deva[ठक्] comes after disyllabic words, words ending in short @deva[ऋ], and the listed words, meaning "commentary":

**Disyllabic:**
| Base | Derivative |
|------|------------|
| @deva[इष्टि] | @deva[ऐष्टिकः] |
| @deva[पशु] | @deva[पाशुकः] |

**Ending in @deva[ऋ]:**
| Base | Derivative |
|------|------------|
| @deva[चतुर्होतृ] | @deva[चातुर्होतृकः] |
| @deva[पञ्चहोतृ] | @deva[पाञ्चहोतृकः] |

**Listed words:** @deva[ब्राह्मणिकः], @deva[आर्चिकः], @deva[प्राथमिकः], @deva[पौरश्चरणिकः], @deva[नामिकः], @deva[आख्यातिकः], @deva[नामाख्यातिकः]।`,

  '43073': `@deva[ऋगयनादीनामण्] — @deva[अण्] comes after @deva[ऋगयन]-class words meaning "commentary":

| Base | Derivative |
|------|------------|
| @deva[ऋगयन] | @deva[आर्गयनः] |
| @deva[पदव्याख्यान] | @deva[पादव्याख्यानः] |
| @deva[वास्तुविद्या] | @deva[वास्तुविद्यः] |

The @deva[ऋगयनादि] class includes: @deva[ऋगयन], @deva[पदव्याख्यान], @deva[छन्दोमान], @deva[छन्दोभाषा], @deva[छन्दोविचिति], @deva[न्याय], @deva[पुनरुक्त], @deva[निरुक्त], @deva[व्याकरण], @deva[निगम], @deva[वास्तुविद्या], @deva[क्षत्रविद्या], @deva[अङ्गविद्या], @deva[विद्या], @deva[उत्पात], @deva[उत्पाद], @deva[उद्याव], @deva[संवत्सर]।`,

  '43074': `@deva[तत आगतः] — The affixes (from @ref[4.1.83]) come after a place-word meaning "come thence":

| Base | Meaning | Derivative |
|------|---------|------------|
| @deva[स्रुघ्न] | come from Srughna | @deva[स्रौघ्नः] |
| @deva[मथुरा] | come from Mathurā | @deva[माथुरः] |
| @deva[राष्ट्र] | come from kingdom | @deva[राष्ट्रियः] |`,

  '43075': `@deva[आयस्थानेभ्यो ठक्] — @deva[ठक्] comes after words denoting revenue-sources meaning "derived thence":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शुल्कशाला] (customs house) | @deva[शौल्कशालिकम्] | customs revenue |
| @deva[आकर] (mine) | @deva[आकरिकम्] | mining revenue |

@note[@deva[आय] = lord's share. @deva[आयस्थान] = revenue source. Debars @deva[अण्] and @deva[छ]. Plural prevents @deva[स्वरूपविधि] (@ref[1.1.68]).]`,

  '43076': `@deva[शुण्डिकादिभ्योऽण्] — @deva[अण्] comes after @deva[शुण्डिक]-class words meaning "derived thence":

| Base | Derivative |
|------|------------|
| @deva[शुण्डिक] | @deva[शौण्डिकः] (excise revenue) |
| @deva[कृकण] | @deva[कार्कणः] |
| @deva[उदपान] | @deva[औदपानः] |

The @deva[शुण्डिकादि] class: @deva[शुण्डिक], @deva[कृकण], @deva[स्थण्डिल], @deva[उदपान], @deva[उपल], @deva[तीर्थ], @deva[भूमि], @deva[तृण], @deva[पर्ण]।`,

  '43077': `@deva[विद्यायोनिसम्बन्धेभ्यो वुञ्] — @deva[वुञ्] comes after words denoting persons related by learning or blood meaning "derived from them":

**Learning-relation (@deva[विद्या]):**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[उपाध्याय] | @deva[औपाध्यायकम्] | from teacher |
| @deva[शिष्य] | @deva[शैष्यकम्] | from student |
| @deva[आचार्य] | @deva[आचार्यकम्] | from preceptor |

**Blood-relation (@deva[योनि]):**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[मातामह] | @deva[मातामहकम्] | from maternal grandfather |
| @deva[पितामह] | @deva[पितामहकम्] | from paternal grandfather |
| @deva[मातुल] | @deva[मातुलकम्] | from maternal uncle |`,

  '43078': `@deva[ऋतो ढञ्] — @deva[ठञ्] comes after @deva[ऋ]-ending words denoting learning/blood relations meaning "derived thence":

| Base | Derivative |
|------|------------|
| @deva[होतृ] | @deva[हौतृकम्] |
| @deva[पोतृ] | @deva[पौतृकम्] |
| @deva[भ्रातृ] | @deva[भ्रातृकम्] |
| @deva[स्वसृ] | @deva[स्वासृकम्] |
| @deva[मातृ] | @deva[मातृकम्] |

@note[Debars @deva[वुञ्]. The @deva[त्] in @deva[ऋत्] is for ease of pronunciation (no words end in @deva[ॠ]). Non-relational words: @deva[सावित्रम्].]`,

  '43079': `@deva[पितृष्यत्तौ] — @deva[यत्] and @deva[ठञ्] come after @deva[पितृ] meaning "derived from father":

| Derivative | Meaning |
|------------|---------|
| @deva[पित्र्यम्] (by @deva[यत्], @ref[7.4.27], @ref[6.4.148]) | paternal (inheritance) |
| @deva[पैतृकम्] (by @deva[ठञ्]) | paternal (inheritance) |`,

  '43080': `@deva[गोत्राङ्कवत्] — After patronymic-ending words, the affix rule follows that of "mark" (@deva[अङ्क]):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[औपगव] (descendants of Upagu) | @deva[औपगवकः] | their mark; or what comes from them |
| @deva[कापटव] | @deva[कापटवकः] | their mark |
| @deva[नाडायन] | @deva[नाडायनकः] | their mark |
| @deva[चारायण] | @deva[चारायणकः] | their mark |

@note[Refers to @deva[वुञ्] of @ref[4.3.126] after @deva[गोत्र] words in the sense of "his mark."]`,

  '43081': `@deva[हेतुमनुष्येभ्यो रूप्यः] — @deva[रूप्य] comes after words denoting "cause" or "man as cause" meaning "originated thence":

| Base | By @deva[रूप्य] | By @deva[छ] (@ref[4.2.138]) |
|------|------------|---------------------|
| @deva[सम] (like cause) | @deva[समरूप्यम्] | @deva[समीयम्] |
| @deva[विषम] (unlike cause) | @deva[विषमरूप्यम्] | @deva[विषमीयम्] |
| @deva[देवदत्त] | @deva[देवदत्तरूप्यम्] | @deva[दैवदत्तम्] |
| @deva[यज्ञदत्त] | @deva[यज्ञदत्तरूप्यम्] | @deva[याज्ञदत्तम्] |

@note[Plural in sūtra indicates @deva[स्वरूपविधि] doesn't apply. @deva[हेतु] takes instrumental case construction.]`,

  '43082': `@deva[तेभ्यो मयट्] — @deva[मयट्] comes after cause/man-as-cause words meaning "derived thence":

| Base | Derivative | Feminine |
|------|------------|----------|
| @deva[सम] | @deva[सममयम्] | @deva[सममयी] |
| @deva[विषम] | @deva[विषममयम्] | @deva[विषममयी] |
| @deva[देवदत्त] | @deva[देवदत्तमयम्] | @deva[देवदत्तमयी] |
| @deva[यज्ञदत्त] | @deva[यज्ञदत्तमयम्] | @deva[यज्ञदत्तमयी] |

@note[@deva[ट्] indicates feminine by @deva[ङीप्] (@ref[4.1.15]). Separate sūtra prevents mutual correspondence rule (@ref[1.3.10]).]`,

  '43083': `@deva[प्रभवति] — An affix comes after an ablative-case word meaning "what appears/manifests for the first time there":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[हिमवत्] | @deva[हैमवती] | Gaṅgā (appears first in Himalayas) |
| @deva[दरद्] | @deva[दारदी] | Indus (appears in Dardistan) |

@note[@deva[प्रभवति] = @deva[प्रकाशते], @deva[प्रथमतः उपलभ्यते] (manifests, first perceived) — not @deva[उत्पत्ति] (origin), which is @deva[तत्र जातः].]`,

  '43084': `@deva[विदूरात् यः] — @deva[य] comes after @deva[विदूर] meaning "manifests there":

@deva[विदूरात् प्रभवति] → @deva[वैदूर्यः] (a gem found at Vidūra)

@note[The gem is actually found in the Vālavāya mountain but processed at Vidūra city. Alternatively, @deva[विदूर] substitutes for @deva[वालवाय] in this affix context.]`,

  '43085': `@deva[तद्गच्छति पथिदूतयोः] — An affix comes after an accusative-case word meaning "goes thereto" when referring to a road or messenger:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[स्रुघ्न] | @deva[स्रौघ्नः] | road/messenger to Srughna |
| @deva[मथुरा] | @deva[माथुरः] | road/messenger to Mathurā |

@note[Only for @deva[पथि] (road) or @deva[दूत] (messenger). Not: @deva[स्रुघ्नं गच्छति सार्थः] (caravan goes to Srughna) — no affix.]`,

  '43086': `@deva[तदभिनिष्क्रामति द्वारम्] — An affix comes after an accusative-case word meaning "a door which looks/opens towards that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[स्रुघ्न] | @deva[स्रौघ्नम्] | gate facing Srughna |
| @deva[मथुरा] | @deva[माथुरम्] | gate facing Mathurā |

@note[Only for @deva[द्वार] (door/gate). @deva[द्वार] is treated as agent (instrument as agent: cf. @deva[साध्वसिश्छिनत्ति]).]`,

  '43087': `@deva[तदधिकृत्य कृते ग्रन्थे] — An affix comes after an accusative-case word meaning "a book made about that subject":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सुभद्रा] | @deva[सौभद्रः] | book about Subhadrā |
| @deva[गौरिमित्र] | @deva[गौरिमित्रः] | book about Gaurimitra |
| @deva[यायात] | @deva[यायातः] | book about Yayāti |
| @deva[किरातार्जुन] | @deva[किरातार्जुनीयम्] | book about Kirāta and Arjuna |

**Vārttika:** For stories (@deva[आख्यायिका]), the affix is elided: @deva[वासवदत्ता] = story about Vāsavadattā.

@note[Only for @deva[ग्रन्थ] (book). Not: @deva[सुभद्रामधिकृत्य कृतः प्रासादः] (palace built for Subhadrā).]`,

  '43088': `@deva[शिशुक्रन्दयमसभद्वन्द्वेन्द्रजननादिभ्यश्छः] — @deva[छ] comes after @deva[शिशुक्रन्द], @deva[यमसभ], @deva[द्वन्द्व] compounds, and @deva[इन्द्रजनन]-class words meaning "book about":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शिशुक्रन्द] | @deva[शिशुक्रन्दीयः] | book on infant-crying |
| @deva[यमसभा] | @deva[यमसभीयः] | book on Yama's court |
| @deva[अग्निकाश्यप] | @deva[अग्निकाश्यपीयः] | book on Agni-Kāśyapa |
| @deva[शब्दार्थसम्बन्ध] | @deva[शब्दार्थसम्बन्धीयम् प्रकरणम्] | chapter on word-meaning relation |
| @deva[वाक्यपद] | @deva[वाक्यपदीयम्] | book on sentences and words |
| @deva[इन्द्रजनन] | @deva[इन्द्रजननीयम्] | book on Indra's birth |

@note[@deva[इन्द्रजननादि] is an @deva[आकृतिगण] (open class) determined by usage.]`,

  '43089': `@deva[सोऽस्य निवासः] — An affix comes after a nominative-case word meaning "this is his dwelling-place":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[स्रुघ्न] | @deva[स्रौघ्नः] | dweller of Srughna |
| @deva[मथुरा] | @deva[माथुरः] | dweller of Mathurā |
| @deva[राष्ट्र] | @deva[राष्ट्रियः] | dweller of the kingdom |

@note[@deva[स] = nominative case of base. @deva[अस्य] = genitive sense of derivative. @deva[निवास] = where one presently lives.]`,

  '43090': `@deva[अभिजनः] — An affix comes after a nominative-case word meaning "this is his motherland/ancestral home":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[स्रुघ्न] | @deva[स्रौघ्नः] | native of Srughna |
| @deva[मथुरा] | @deva[माथुरः] | native of Mathurā |

@note[@deva[निवास] = where one lives now. @deva[अभिजन] = where ancestors (@deva[अभिजनाः]) lived. Separate sūtra for next rule's @deva[अनुवृत्ति].]`,

  '43091': `@deva[शस्त्रवृत्तेगिरेर्लुक्च] — @deva[छ] comes after "mountain" words meaning "motherland," with optional @deva[लुक्] (elision), when referring to a soldier (@deva[शस्त्रवृत्ति]):

| Base | With @deva[छ] | With @deva[लुक्] |
|------|----------|------------|
| (mountain name) | (derivative with @deva[ईय]) | (base form) |

@note[Applies to warriors whose ancestral home is a mountain region.]`,

  '43092': `@deva[पर्वतादण्] — @deva[अण्] comes after @deva[पर्वत] meaning "motherland" for a soldier:

@deva[पर्वतोऽभिजनोऽस्य] → @deva[पार्वतः] (soldier from the mountains)

@note[Debars @deva[छ] of the previous sūtra.]`,

  '43093': `@deva[खण्डिकादिभ्यश्च] — @deva[अण्] also comes after @deva[खण्डिक]-class words meaning "motherland" for a soldier:

The @deva[खण्डिकादि] class includes words denoting mountain regions.`,

  '43094': `@deva[पूगात्] — An affix comes after a word denoting a guild/corporation meaning "that is their group":

| Base | Derivative |
|------|------------|
| @deva[पूग] (guild) | derived form |

@note[@deva[पूग] = @deva[समूह], @deva[संघ] (assembly, corporation). Separate sūtra to stop prior @deva[अनुवृत्ति]s.]`,

  '43095': `@deva[सङ्घोद्घौ च] — @deva[अण्] comes after @deva[सङ्घ]-class and @deva[उद्घ]-class words meaning "that is their group":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सङ्घ] | @deva[साङ्घः] | belonging to the assembly |
| @deva[उद्घ] | @deva[औद्घः] | belonging to the guild |`,

  '43096': `@deva[व्रातात्] — An affix comes after words meaning "troop" in the sense of "that is their group":

| Base | Meaning |
|------|---------|
| @deva[व्रात] (troop, band) | belonging to the troop |`,

  '43097': `@deva[संकाशादिभ्यो ठञ्] — @deva[ठञ्] comes after @deva[सङ्काश]-class words:

The @deva[सङ्काशादि] class includes words requiring @deva[ठञ्] rather than @deva[अण्]।`,

  '43098': `@deva[ग्रामसमूहात्] — An affix comes after words meaning "collection of villages":

| Base | Meaning |
|------|---------|
| village-collection word | belonging to that collection |`,

  '43099': `@deva[तरव्यादिभ्यश्च] — @deva[अण्] also comes after @deva[तरव्य]-class words meaning "village collection":

The @deva[तरव्यादि] class includes words denoting village aggregates.`,

  '43100': `@deva[तेन प्रोक्तम्] — An affix comes after a word meaning "proclaimed/taught by him":

| Base | Derivative | Meaning |
|------|------------|---------|
| (teacher's name) | derivative | doctrine taught by him |

@note[New semantic domain: doctrines and teachings named after their proponents.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.3.51-100). Total: ${Object.keys(vasu).length}`);
