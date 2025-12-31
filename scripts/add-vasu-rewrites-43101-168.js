import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '43101': `@deva[तेन प्रोक्तम्] — An affix comes after an instrumental-case word meaning "enounced/promulgated by him":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[पाणिनि] | @deva[पाणिनीयम्] | Pāṇini's grammar system |
| @deva[आपिशलि] | @deva[आपिशलम्] | Āpiśali's system |
| @deva[काशकृत्स्न] | @deva[काशकृत्स्नम्] | Kāśakṛtsna's system |
| @deva[माथुर] | @deva[माथुरी वृत्तिः] | Māthura's commentary |

@note[@deva[प्रोक्त] (promulgated) ≠ @deva[कृत] (composed, @ref[4.3.16]). Works like Vedas were not "made" but "promulgated" by seers.]`,

  '43102': `@deva[तित्तिरिवरतन्तुखण्डिकोखाच्छण्] — @deva[छण्] comes after @deva[तित्तिरि], @deva[वरतन्तु], @deva[खण्डिक], @deva[उख] meaning "enounced by him" (for Vedic texts):

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[तित्तिरि] | @deva[तैत्तिरीयाः] | students of Taittirīya Veda |
| @deva[वरतन्तु] | @deva[वारतन्तवीयाः] | students of Varatantu's recension |
| @deva[खण्डिक] | @deva[खाण्डिकीयाः] | students of Khaṇḍika's recension |
| @deva[उख] | @deva[औखीयाः] | students of Ukha's recension |

@note[Confined to @deva[छन्दस्] (Vedas). Not: @deva[तित्तिरिणा प्रोक्तः श्लोकः] (secular verse by Tittiri).]`,

  '43103': `@deva[ऋषिभ्यो णिनिः काश्यपकौशिकयोः] — @deva[णिनि] comes after @deva[काश्यप] and @deva[कौशिक] (Vedic seers) meaning "enounced by them":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[काश्यप] | @deva[काश्यपिनः] | students of Kāśyapa's Kalpa |
| @deva[कौशिक] | @deva[कौशिकिनः] | students of Kauśika's Kalpa |

@note[Only for Vedic sages. Modern @deva[गोत्र]-Kāśyapa: @deva[काश्यपीयम्] (work by a modern Kāśyapa).]`,

  '43104': `@deva[कलापिवैशम्पायनान्तेवासिभ्यः] — @deva[णिनि] comes after pupils of @deva[कलापि] and @deva[वैशम्पायन] meaning "enounced by them":

**Pupils of Kalāpi (4):** @deva[हरिद्रु], @deva[छगली], @deva[तुम्बुरु], @deva[उलप]
**Pupils of Vaiśampāyana (9):** @deva[आलम्बि], @deva[पलङ्ग], @deva[कमल], @deva[ऋचाभ], @deva[आरुणि], @deva[ताण्ड्य], @deva[श्यामायन], @deva[कठ], @deva[कलापि]

@note[Debars @deva[अण्] and @deva[छ].]`,

  '43105': `@deva[पुराणप्रोक्तेषु ब्राह्मणकल्पेषु] — @deva[णिनि] comes meaning "enounced by ancient sages" when denoting @deva[ब्राह्मण] or @deva[कल्प] works:

**Brāhmaṇa:** @deva[शाट्यायनिनः], @deva[ऐतरेयिनः]
**Kalpa:** @deva[पैङ्गीकल्पः], @deva[आरुणपराजी]

@note[Only for ancient sages (@deva[पुराण]). Modern sages: @deva[याज्ञवल्कानि ब्राह्मणानि], @deva[आश्मरथः कल्पः].]`,

  '43106': `@deva[शौनकादिभ्यश्छन्दसि] — @deva[णिनि] comes after @deva[शौनक]-class words when denoting @deva[छन्दस्] (Vedas):

| Base | Derivative |
|------|------------|
| @deva[शौनक] | @deva[शौनकिनः] |
| @deva[वाजसनेय] | @deva[वाजसनेयिनः] |

@note[Not for non-Vedic: @deva[शौनकीया शिक्षा] (Śaunaka's phonetics). @deva[कठशाठ] takes this affix as compound; single @deva[कठ] is elided (@ref[4.3.107]).]`,

  '43107': `@deva[कठचरकाल्लुक्] — The "enounced by" affix is @deva[लुक्]-elided after @deva[कठ] and @deva[चरक]:

| Base | Derivative |
|------|------------|
| @deva[कठ] | @deva[कठाः] (not *@deva[कठिनः]) |
| @deva[चरक] | @deva[चरकाः] (not *@deva[चारकाः]) |

@note[Only for @deva[छन्दस्]. Secular: @deva[काठाः श्लोकाः], @deva[चारकाः श्लोकाः].]`,

  '43108': `@deva[कलापिनोऽण्] — @deva[अण्] comes after @deva[कलापिन्] meaning "enounced by him":

@deva[कलापिन्] + @deva[अण्] → @deva[कालापाः] (students of Kalāpi's recension)

@note[Debars @deva[णिनि] of @ref[4.3.104]. The @deva[इन्] of @deva[कलापिन्] is elided by vārttika (overriding @ref[6.4.164]).]`,

  '43109': `@deva[छगलिनो ढिनुक्] — @deva[ढिनुक्] comes after @deva[छगलिन्] meaning "enounced by him":

@deva[छगलिन्] + @deva[ढिनुक्] → @deva[छागलेयिनः] (students of Chagali's Vedic recension)

@note[Debars @deva[णिनि] of @ref[4.3.104].]`,

  '43110': `@deva[पाराशर्यशिलालिभ्यां भिक्षुनटसूत्रयोः] — @deva[णिनि] comes after @deva[पाराशर्य] and @deva[शिलालिन्] for @deva[भिक्षु]-sūtra and @deva[नट]-sūtra:

| Base | Derivative | Field |
|------|------------|-------|
| @deva[पाराशर्य] | @deva[पाराशरिनः] | mendicant rules |
| @deva[शिलालिन्] | @deva[शैलालिनः] | actor/dancer rules |

@note[@deva[भिक्षुसूत्र] = duties of mendicants; @deva[नटसूत्र] = duties of performers. Also means "students who study these works."]`,

  '43111': `@deva[कर्मन्दकृशाश्वाभ्यां इनिः] — @deva[इनि] comes after @deva[कर्मन्द] and @deva[कृशाश्व] for @deva[भिक्षु/नट]-sūtra:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[कर्मन्द] | @deva[कर्मन्दिनः] | mendicants studying Karmandin's rules |
| @deva[कृशाश्व] | @deva[कृशाश्विनः] | actors studying Kṛśāśvin's rules |

@note[Otherwise: @deva[कार्मन्दकम्], @deva[कार्शाश्वम्].]`,

  '43112': `@deva[तेनैकदिक्] — An affix comes after an instrumental-case word meaning "in the same direction as that":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[सुदामन्] (hill) | @deva[सौदामनी विद्युत्] | lightning in Sudāman's direction |
| @deva[हिमवत्] | @deva[हैमवती] | in Himālaya's direction |
| @deva[त्रिककुद्] | @deva[त्रैककुदी] | in Trikakud's direction |

@note[Repetition of @deva[तेन] stops @deva[छन्दस्] @deva[अनुवृत्ति] from prior sūtras — this applies to secular usage.]`,

  '43113': `@deva[तसिश्च] — @deva[तसि] also comes meaning "in the same direction as":

| Base | Derivative |
|------|------------|
| @deva[हिमवत्] | @deva[हिमवतः] |
| @deva[पीलुमूल] | @deva[पीलुमूलतः] |
| @deva[सुदामन्] | @deva[सुदामतः] |

@note[Forms indeclinables (@ref[1.1.37]). In addition to @deva[अण्] etc.]`,

  '43114': `@deva[उरसो यच्च] — @deva[यत्] and @deva[तसि] come after @deva[उरस्] meaning "in the same direction":

| Derivative |
|------------|
| @deva[उरस्यम्] (by @deva[यत्]) |
| @deva[उरस्तः] (by @deva[तसि]) |`,

  '43115': `@deva[तेनोपज्ञातम्] — An affix comes after an instrumental-case word meaning "discovered/intuited by him":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[पाणिनि] | @deva[पाणिनीयम् अकालकं व्याकरणम्] | grammar discovered by Pāṇini |
| @deva[काशकृत्स्न] | @deva[काशकृत्स्नं गुरुलाघवम्] | economics discovered by Kāśakṛtsna |
| @deva[आपिशलि] | @deva[आपिशलं दुष्करणम्] | a grammar by Āpiśali |

@note[@deva[उपज्ञात] = self-taught knowledge, intuition. @deva[अकालक] = Pāṇini's grammar (doesn't define tenses); @deva[दुष्करण] = named after its technical term @deva[दुषू].]`,

  '43116': `@deva[तेन कृतं ग्रन्थे] — An affix comes after an instrumental-case word meaning "composed by him" when referring to a book:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[वररुचि] | @deva[वाररुचाः श्लोकाः] | verses composed by Vararuci |
| @deva[हैकुपाद] | @deva[हैकुपादः ग्रन्थः] | book by Haikupāda |
| @deva[जालूक] | @deva[जालूकः] | book by Jālūka |

@note[Only for @deva[ग्रन्थ] (book). Not: @deva[तक्षकृतः प्रासादः] (palace made by Takṣa). @deva[कृत] (made) = art; @deva[उपज्ञात] (discovered) = science.]`,

  '43117': `@deva[संज्ञायाम्] — An affix comes after an instrumental-case word meaning "made by" when the result is a Name:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[मक्षिका] (bee) | @deva[माक्षिकम्] | honey (made by bees) |
| @deva[कृमुक] | @deva[कार्मुकम्] | honey |
| @deva[सरघा] (bee) | @deva[सारघम्] | honey |
| @deva[पुत्तिका] (bee) | @deva[पौत्तिकम्] | honey |

@note[@deva[ग्रन्थ] @deva[अनुवृत्ति] doesn't apply — these are proper names for honey.]`,

  '43118': `@deva[कुलालादिभ्यो वुञ् संज्ञायाम्] — @deva[वुञ्] comes after @deva[कुलाल]-class words meaning "made by" when a Name:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[कुलाल] (potter) | @deva[कौलालकम्] | porcelain |
| @deva[वरुड] | @deva[वारुडकम्] | product of Varuḍa |

The @deva[कुलालादि] class: @deva[कुलाल], @deva[वरुड], @deva[चण्डाल], @deva[निषाद], @deva[कर्मार], @deva[सेना], @deva[सिरिन्ध्र], @deva[देवराज], @deva[परिषद्], @deva[वधू], @deva[मधु], @deva[रुरु], @deva[रुद्र], @deva[अनडुह्], @deva[ब्रह्मन्], @deva[कुम्भकार], @deva[श्वपाक], @deva[ध्रुव]।`,

  '43119': `@deva[क्षुद्राभ्रमरवटरपादपाट् च] — @deva[अञ्] comes after @deva[क्षुद्रा], @deva[भ्रमर], @deva[वटर], @deva[पादप] meaning "made by" when a Name:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[क्षुद्रा] (small bee) | @deva[क्षौद्रम्] | honey |
| @deva[भ्रमर] (bee) | @deva[भ्रामरम्] | honey |
| @deva[वटर] | @deva[वाटरम्] | honey |
| @deva[पादप] | @deva[पादपम्] | honey |

@note[Debars @deva[अण्] (difference in accent between @deva[अण्] and @deva[अञ्]).]`,

  '43120': `@deva[तस्येदम्] — An affix comes after a genitive-case word meaning "this is his/belongs to him":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[उपगु] | @deva[औपगवम्] | of Upagu |
| @deva[कपट] | @deva[कापटवम्] | of Kapaṭa |
| @deva[राष्ट्र] | @deva[राष्ट्रियम्] | of the kingdom |

@note[The five universals (@ref[4.1.83]) and @deva[घ] etc. (@ref[4.2.93]) apply. Not for @deva[अनन्तर] etc.: @deva[देवदत्तस्यानन्तरम्]. The possessed must be property, village, kingdom, or people.]

**Vārttika:** @deva[वह्] + @deva[तृ] + @deva[अण्] with @deva[इट्]: @deva[सवोढुः स्वम्] → @deva[सांवहित्रम्]।`,

  '43121': `@deva[रथाद्यत्] — @deva[यत्] comes after @deva[रथ] meaning "belonging to chariot":

@deva[रथस्येदम्] → @deva[रथ्यम्] (wheel, axle — parts of chariot)

@note[Debars @deva[अण्]. Also applies to compounds: @deva[परमरथ्यम्], @deva[उत्तमरथ्यम्] (by vārttika: @deva[रथसीताहलेभ्यो यद्विधौ] — @deva[तदन्तविधि] for @deva[रथ], @deva[सीता], @deva[हल]).]`,

  '43122': `@deva[पात्रपूर्वादञ्] — @deva[अञ्] comes after @deva[रथ] preceded by a draught-animal word meaning "belongs to":

| Compound | Derivative | Meaning |
|----------|------------|---------|
| @deva[अश्वरथ] | @deva[आश्वरथं चक्रम्] | wheel of horse-cart |
| @deva[उष्ट्ररथ] | @deva[औष्ट्ररथम्] | of camel-cart |
| @deva[गर्दभरथ] | @deva[गार्दभरथम्] | of donkey-cart |

@note[Debars @deva[यत्]. @deva[पात्र] = draught-animal (formed by @deva[ष्ट्रन्], @ref[3.2.182]).]`,

  '43123': `@deva[अध्वर्युपरिषदोर्यञ्] — @deva[अञ्] comes after draught-animal words, @deva[अध्वर्यु], and @deva[परिषद्]:

**Draught-animal (load-sense):**
| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[अश्व] | @deva[आश्वम्] | horse-load |
| @deva[उष्ट्र] | @deva[औष्ट्रम्] | camel-load |
| @deva[गर्दभ] | @deva[गार्दभम्] | donkey-load |

**Others:** @deva[आध्वर्यवम्], @deva[पारिषदम्]

@note[Debars @deva[अण्]. @deva[पात्र] = @deva[वाहन] (vehicle). Applies when sense is "suitable load for."]`,

  '43124': `@deva[हलसीराट्ठक्] — @deva[ठक्] comes after @deva[हल] and @deva[सीर] meaning "belongs to":

| Base | Derivative |
|------|------------|
| @deva[हल] (plough) | @deva[हालिकम्] |
| @deva[सीर] (plough) | @deva[सैरिकम्] |`,

  '43125': `@deva[विरोधिवैवाह्याद्वुञ्] — @deva[वुञ्] comes after @deva[द्वन्द्व] compounds of mutual enemies or married couples meaning "belongs to them":

**Enmity:** @deva[बाभ्रव्यशालङ्कायनिका], @deva[काकोलूकिका]
**Marriage:** @deva[अत्रिभरद्वाजिका], @deva[कुत्सकुशिकिका]

@note[Debars @deva[अण्] and @deva[छ]. Enemy-@deva[द्वन्द्व] is singular neuter by @ref[2.4.9]; derivatives are feminine. **Vārttika:** Prohibition for @deva[देवासुर] etc.: @deva[देवासुरं वैरम्].]`,

  '43126': `@deva[चरणाद्धर्माम्नाययोर्वुञ्] — @deva[वुञ्] comes after @deva[गोत्र] (patronymic) words of Vedic schools meaning "their law/tradition":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[ग्लौचुकायन] | @deva[ग्लौचुकायनकम्] | tradition of Glaucukāyanas |
| @deva[कठ] | @deva[काठकम्] | Kaṭha dharma-sūtras |
| @deva[कालाप] | @deva[कालापकम्] | Kālāpa tradition |
| @deva[पैप्पलाद] | @deva[पैप्पलादकम्] | Paippalāda tradition |

@note[Debars @deva[अण्] and @deva[छ]. @deva[चरण] here = @deva[धर्म] (duties) and @deva[आम्नाय] (tradition).]`,

  '43127': `@deva[अञ्यञिञामण् संघलक्षणाङ्केषु] — @deva[अण्] comes after @deva[गोत्र] words ending in @deva[अञ्]/​@deva[यञ्]/​@deva[इञ्] when meaning congregation, mark, or sign:

| Sense | Explanation |
|-------|-------------|
| @deva[संघ] | congregation |
| @deva[लक्षण] | intrinsic mark (like learning for Bidas) |
| @deva[अङ्क] | property-mark (like brand on cattle) |

@note[@deva[लक्षण] belongs to the person; @deva[अङ्क] shows ownership by another.]`,

  '43128': `@deva[शाकलाद्वा] — @deva[अण्] optionally comes after @deva[शाकल]:

| By @deva[अण्] | By @deva[वुञ्] (@ref[4.3.126]) |
|----------|---------------------|
| @deva[शाकलः] | @deva[शाकलकः] |

Both mean "congregation etc. of students of Śākala's Veda."`,

  '43129': `@deva[छान्दोगौक्थिकयाज्ञिकबह्वृचनटेभ्यो ञ्यः] — @deva[ञ्य] comes after @deva[छान्दोग], @deva[औक्थिक], @deva[याज्ञिक], @deva[बह्वृच], @deva[नट] meaning "their law/tradition":

| Base | Derivative |
|------|------------|
| @deva[छान्दोग] | @deva[छान्दोग्यम्] |
| @deva[औक्थिक] | @deva[औक्थिक्यम्] |
| @deva[याज्ञिक] | @deva[याज्ञिक्यम्] |
| @deva[बह्वृच] | @deva[बाह्वृच्यम्] |
| @deva[नट] | @deva[नाट्यम्] |

@note[Debars @deva[अण्] and @deva[वुञ्]. @deva[चरणाद्धर्माम्नाययोः] applies even to @deva[नट]. Not this sense: @deva[छान्दोगं कुलम्].]`,

  '43130': `@deva[न गोत्रे दण्डमाणवान्तेवासिभ्यः] — @deva[वुञ्] is NOT used after family-names when meaning "beginner pupil" or "boarder pupil":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[दाक्षि] | @deva[दाक्षाः] | junior/senior pupils of Dākṣi |
| @deva[माहक] | @deva[माहकाः] | pupils of Māhaka |
| @deva[गौकक्ष] | @deva[गौकक्षाः] | pupils of Gaukakṣa |

@note[@deva[दण्डमाणव] = beginner (needs the rod for discipline); @deva[अन्तेवासिन्] = boarder living at teacher's house.]`,

  '43131': `@deva[रैवतिकादिभ्यश्छः] — @deva[छ] comes after @deva[रैवतिक]-class words meaning "belongs to":

| Base | Derivative |
|------|------------|
| @deva[रैवतिक] | @deva[रैवतिकीयः] |
| @deva[स्वापिशि] | @deva[स्वापिशीयः] |

The @deva[रैवतिकादि] class: @deva[रैवतिक], @deva[स्वापिशि], @deva[क्षैमवृद्धि], @deva[गौरग्रीवि], @deva[औदमेघि], @deva[औदवापि], @deva[बैजवापि]।`,

  '43132': `@deva[कौपिञ्जलहास्तिपदाभ्यामण्] — @deva[अण्] comes after @deva[कौपिञ्जल] and @deva[हास्तिपद] meaning "belongs to":

| Base | Derivative |
|------|------------|
| @deva[कौपिञ्जल] | @deva[कौपिञ्जलः] |
| @deva[हास्तिपद] | @deva[हास्तिपदः] |

@note[Debars @deva[वुञ्] (@ref[4.3.126]). This is really a vārttika.]`,

  '43133': `@deva[आथर्वणिकादण् मध्यलोपश्च] — @deva[अण्] comes after @deva[आथर्वणिक] with elision of penultimate @deva[इक्]:

@deva[आथर्वणिक] + @deva[अण्] → @deva[आथर्वणः] (Atharvaṇa law/tradition)

@note[Debars @deva[वुञ्] (@ref[4.3.126]). @deva[चरणाद्धर्माम्नाययोः] understood. This is also a vārttika.]`,

  '43134': `@deva[तस्य विकारः] — An affix comes after a genitive-case word meaning "its modification/product":

@note[Begins new semantic domain. Repetition of @deva[तस्य] shows @deva[शेषे] (@ref[4.2.92]) doesn't govern here — affixes like @deva[घ], @deva[ख] taught there don't have @deva[विकार] sense. General @deva[अण्] (@ref[4.1.83]) applies, plus subsequent specific affixes.]`,

  '43135': `@deva[प्राणिधौषधिवृक्षेभ्योऽवयवे च] — An affix comes after animal, herb, and tree words meaning "its part" as well as "modification":

| Base | Type | Derivative | Meaning |
|------|------|------------|---------|
| @deva[कपोत] | animal | @deva[कापोतम्] | product/part of pigeon (fan etc.) |
| @deva[मयूर] | animal | @deva[मायूरम्] | peacock product |
| @deva[मूर्वा] | herb | @deva[मौर्वम्] | product of Mūrvā (ashes, stalk) |
| @deva[करीर] | tree | @deva[कारीरम्] | product of Karīra tree |

@note[@deva[च] adds @deva[विकार] sense. For non-animals, only @deva[विकार] sense (not @deva[अवयव]).]`,

  '43136': `@deva[बिल्वादिभ्योऽण्] — @deva[अण्] comes after @deva[बिल्व]-class words meaning "modification/part":

| Base | Derivative |
|------|------------|
| @deva[बिल्व] | @deva[बैल्वः] |
| @deva[व्रीहि] | @deva[व्रैहः] |
| @deva[मुद्ग] | @deva[मौद्गः] |
| @deva[गोधूम] | @deva[गौधूमः] |

The @deva[बिल्वादि] class: @deva[बिल्व], @deva[व्रीहि], @deva[काण्ड], @deva[मुद्ग], @deva[मसूर], @deva[गोधूम], @deva[इक्षु], @deva[वेणु], @deva[गवेधुका], @deva[कर्पासी], @deva[पाटली], @deva[कर्कन्धू], @deva[कुटीर]।

@note[Debars @deva[अञ्] and @deva[मयट्]. @deva[गवेधुका] is included to prevent @deva[मयट्].]`,

  '43137': `@deva[ककुदादिभ्यो यथायथम्] — @deva[अण्] comes after words with @deva[क्] as penultimate meaning "modification/part" as appropriate:

| Base | Derivative |
|------|------------|
| @deva[तर्कु] | @deva[तार्कवम्] |
| @deva[तित्तिडीक] | @deva[तैत्तिडीकम्] |
| @deva[मण्डूक] | @deva[माण्डूकम्] |
| @deva[दर्दुरूक] | @deva[दार्दुरूकम्] |
| @deva[मधूक] | @deva[माधूकम्] |

@note[Debars @deva[अञ्]. "As appropriate" = @deva[विकार] or @deva[अवयव] or both.]`,

  '43138': `@deva[त्रपुजतुनोर्ढषुक्] — @deva[अण्] with augment @deva[षुक्] comes after @deva[त्रपुन्] and @deva[जतुन्] meaning "modification":

| Base | Derivative |
|------|------------|
| @deva[त्रपु] (tin) | @deva[त्रापुषम्] |
| @deva[जतु] (lac) | @deva[जातुषम्] |

@note[Debars @deva[अञ्] (@ref[4.3.139]). For non-organic things, only @deva[विकार] sense (not @deva[अवयव]).]`,

  '43139': `@deva[नादेर्वानुदात्तादेः] — @deva[अण्] comes meaning "modification/part" when the word does NOT have @deva[अनुदात्त] on first syllable:

| Base | Derivative |
|------|------------|
| @deva[देवदारु] | @deva[देवदारवम्] |
| @deva[भद्रदारु] | @deva[भद्रदारवम्] |

@note[@deva[देवदारु], @deva[भद्रदारु] are @deva[आद्युदात्त] by Phiṭ-sūtra II.14 (@deva[पीतद्रव्यर्थानाम्] — soft timber trees are initial-acute).]`,

  '43140': `@deva[आद्यनुदात्तादञ्] — @deva[अञ्] comes after words with @deva[अनुदात्त] on first syllable meaning "modification/part":

| Base | Derivative |
|------|------------|
| @deva[दधित्थ] | @deva[दाधित्थम्] |
| @deva[कपित्थ] | @deva[कापित्थम्] |
| @deva[महित्थ] | @deva[माहित्थम्] |

@note[Debars @deva[अण्]. @deva[दधित्थ] = @deva[दधि] + @deva[स्थ] (upapada-samāsa), final-acute by @deva[कृदुत्तरपदप्रकृतिस्वर].]`,

  '43141': `@deva[पलाशादिभ्यो वा] — @deva[अञ्] optionally comes after @deva[पलाश]-class words:

| Base | By @deva[अञ्] | By @deva[अण्] |
|------|----------|----------|
| @deva[पलाश] | @deva[पालाशम्] | @deva[पालाशम्] |
| @deva[खदिर] | @deva[खादिरम्] | @deva[खादिरम्] |
| @deva[यवास] | @deva[यावासम्] | @deva[यावासम्] |

The @deva[पलाशादि] class: @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन], @deva[पूलाक], @deva[करीर], @deva[शिरीष], @deva[यवास], @deva[विकङ्कत]।

@note[For @deva[पलाश] etc. (initial-grave), this is @deva[प्राप्त-विभाषा] (making obligatory optional); for others, @deva[अप्राप्त-विभाषा].]`,

  '43142': `@deva[शम्याष्ट्लञ्] — @deva[ट्लञ्] comes after @deva[शमी] meaning "modification/part":

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[शमी] | @deva[शामीलम्] | ashes of Śamī |
| @deva[शमी] | @deva[शामीली स्रुक्] | ladle of Śamī (@ref[4.1.60]) |

@note[Debars @deva[अञ्].]`,

  '43143': `@deva[भाषायामनन्नाच्छादनयोर्विभाषैतयोर्मयट्] — @deva[मयट्] optionally comes in secular language meaning "product/part" (not for food or clothing):

| Base | By @deva[मयट्] | By @deva[अण्] |
|------|------------|----------|
| @deva[अश्मन्] | @deva[आश्ममयम्] | @deva[आश्मनम्] |
| @deva[मूर्वा] | @deva[मूर्वामयम्] | @deva[मौर्वम्] |

@note[Not @deva[भाषायाम्] (secular)? → @deva[बैल्वः खादिरो वा यूपः स्यात्] (Vedic). Not for food/clothing? → @deva[मौद्गः सूपः] (soup), @deva[कार्पासम् आच्छादनम्] (clothing).]`,

  '43144': `@deva[वृद्धशरादिभ्यो नित्यम्] — @deva[मयट्] invariably comes after @deva[वृद्ध] words and @deva[शर]-class:

**After vṛddha:** @deva[आम्रमयम्], @deva[शालमयम्], @deva[शाकमयम्]
**After śarādi:** @deva[शरमयम्], @deva[हर्ममयम्], @deva[मृन्मयम्]

The @deva[शरादि] class: @deva[शर], @deva[दर्भ], @deva[मृद्], @deva[कुटी], @deva[तृण], @deva[सोम]...

@note[@deva[नित्य] indicates monosyllabic words also take @deva[मयट्] invariably: @deva[त्वङ्मयम्], @deva[स्रङ्मयम्], @deva[वाङ्मयम्].]`,

  '43145': `@deva[गोर्मयट् पुरीषे] — @deva[मयट्] comes after @deva[गो] meaning "its dung":

@deva[गो] + @deva[मयट्] → @deva[गोमयम्] (cow dung)

@note[Dung is neither @deva[विकार] nor @deva[अवयव] — hence separate sūtra. For milk: @deva[गव्यम्] (by @deva[यत्], @ref[4.3.160]) — though milk is also technically neither @deva[अवयव] nor @deva[विकार].]`,

  '43146': `@deva[पिष्टान्नित्यम्] — @deva[मयट्] invariably comes after @deva[पिष्ट] meaning "its product/part":

@deva[पिष्टमयं भस्म] (ash of flour)

@note[Debars @deva[अण्]. For @deva[तस्येदम्] sense: @deva[पैष्टी सुरा] (liquor from flour).]`,

  '43147': `@deva[संज्ञायां कन्] — @deva[कन्] comes after @deva[पिष्ट] meaning "product" when a Name:

@deva[पिष्ट] + @deva[कन्] → @deva[पिष्टकः] (a type of cake)

@note[Debars @deva[मयट्].]`,

  '43148': `@deva[व्रीहेः पुरोडाशे] — @deva[मयट्] comes after @deva[व्रीहि] when meaning @deva[पुरोडाश] (sacred cake):

@deva[व्रीहिमयः पुरोडाशः] (sacred cake made of barley)

@note[Debars @deva[अण्] (@ref[4.3.136]). Otherwise: @deva[व्रैहम्].]`,

  '43149': `@deva[तिलयवाभ्यामसंज्ञायाम्] — @deva[मयट्] comes after @deva[तिल] and @deva[यव] when NOT a Name:

| Base | Derivative |
|------|------------|
| @deva[तिल] | @deva[तिलमयम्] |
| @deva[यव] | @deva[यवमयम्] |

@note[When a Name: @deva[तैलम्] (oil), @deva[यावकः] (by @deva[कन्], @ref[5.4.29]).]`,

  '43150': `@deva[छन्दसि द्व्यचः] — In @deva[छन्दस्] (Vedas), @deva[मयट्] comes after disyllabic words meaning "product/part":

| Base | Example |
|------|---------|
| @deva[पर्ण] | @deva[यस्य पर्णमयी जुहूर्भवति] |
| @deva[दर्भ] | @deva[दर्भमयं वासो भवति] |
| @deva[शर] | @deva[शरमयं बर्हिर्भवति] |

@note[Ordains @deva[मयट्] in Vedic (secular was @ref[4.3.143]).]`,

  '43151': `@deva[नोत्वद्वर्ध्रबिल्वात्] — In @deva[छन्दस्], @deva[मयट्] does NOT come after disyllabic words with short @deva[उ], nor after @deva[वर्ध्र] and @deva[बिल्व]:

| Base | Derivative | Example |
|------|------------|---------|
| @deva[मुञ्ज] | @deva[मौञ्जं शिक्यम्] (by @deva[अण्]) | |
| @deva[कृमुक] | @deva[कार्मुकं चक्रम्] | |
| @deva[वर्ध्र] | @deva[वार्ध्री] | |
| @deva[बिल्व] | @deva[बैल्वो ब्रह्मवर्चसकामेन कार्यः] | |

@note[@deva[उत्वत्] = having short @deva[उ] (@ref[1.1.70]). Doesn't apply to long @deva[ऊ]: @deva[भूममयान्यभ्राणि]।]`,

  '43152': `@deva[तालादिभ्योऽण्] — @deva[अण्] comes after @deva[ताल]-class words meaning "product/part":

| Base | Derivative |
|------|------------|
| @deva[ताल] | @deva[तालं धनुः] |
| @deva[बार्हिण] | @deva[बार्हिणम्] |
| @deva[इन्द्रालिश] | @deva[ऐन्द्रालिशम्] |

The @deva[तालादि] class: @deva[ताल] (for bow), @deva[बार्हिण], @deva[इन्द्रालिश], @deva[इन्द्रादृश], @deva[इन्द्रायुध], @deva[चाप], @deva[श्यामाक], @deva[पीयूक्षा]।`,

  '43153': `@deva[जातरूपेभ्यो मानेऽण्] — @deva[अण्] comes after words meaning "gold" when denoting a weight/measure:

| Base | Derivative | Meaning |
|------|------------|---------|
| @deva[हाटक] | @deva[हाटको निष्कः] | a gold weight |
| @deva[हाटक] | @deva[हाटकं कार्षापणम्] | gold coin |
| @deva[जातरूप] | @deva[जातरूपम्] | gold measure |
| @deva[तापनीय] | @deva[तापनीयम्] | refined gold measure |

@note[Debars @deva[मयट्]. Plural indicates all gold-synonyms. Not for measure: @deva[यष्टिरियं हाटकमयी] (gold staff).]`,

  '43154': `@deva[प्राणितौषधिवनस्पतिभ्यो राजतादिभ्योञ्] — @deva[अञ्] comes after living beings, herbs, trees, and @deva[रजत]-class words meaning "product/part":

| Base | Derivative |
|------|------------|
| @deva[कपोत] | @deva[कापोतम्] |
| @deva[मयूर] | @deva[मायूरम्] |
| @deva[तित्तिर] | @deva[तैत्तिरम्] |
| @deva[रजत] (silver) | @deva[राजतम्] |
| @deva[सीस] (lead) | @deva[सैसम्] |
| @deva[लोह] (iron) | @deva[लौहम्] |

@note[For non-initial-grave words that would otherwise take @deva[अण्]. @deva[रजतादि] includes initial-grave words to prevent @deva[मयट्].]`,

  '43155': `@deva[ञितो विकारावयवयोः] — @deva[अञ्] comes meaning "product/part" after words already ending in a @deva[ञित्] affix with that sense:

| Primary | Secondary |
|---------|-----------|
| @deva[दैवदारव] (@ref[4.3.139]) | @deva[दैवदारवम्] |
| @deva[दाधित्थ] (@ref[4.3.140]) | @deva[दाधित्थम्] |
| @deva[पालाश] (@ref[4.3.141]) | @deva[पालाशम्] |
| @deva[शामील] (@ref[4.3.142]) | @deva[शामीलम्] |
| @deva[कापोत] (@ref[4.3.154]) | @deva[कापोतम्] |
| @deva[औष्ट्रक] (@ref[4.3.157]) | @deva[औष्ट्रकम्] |
| @deva[ऐणेय] (@ref[4.3.159]) | @deva[ऐणेयम्] |

@note[@deva[ञित्] affixes for @deva[विकार]/​@deva[अवयव]: @deva[अञ्], @deva[ट्लञ्], @deva[वुञ्], @deva[ढञ्], @deva[यञ्]. Not @deva[ञित्]? → @deva[बैल्वमयम्].]`,

  '43156': `@deva[परिमाणान्तात्क्रीतवल्लुप्] — After measure-words, the "product" affix is the same as the "purchased" affix:

| @deva[क्रीत] sense | @deva[विकार] sense |
|--------------|---------------|
| @deva[निष्केन क्रीतम्] = @deva[नैष्किकम्] | @deva[निष्कस्य विकारः] = @deva[नैष्किकः] |
| @deva[शतेन क्रीतम्] = @deva[शत्यम्]/​@deva[शतिकम्] | @deva[शतस्य विकारः] = @deva[शत्यः]/​@deva[शतिकः] |

@note[Affixes from @ref[5.1.18] ff. for @deva[क्रीत] (@ref[5.1.37]) also denote @deva[विकार] after @deva[परिमाण] words. Debars @deva[अण्].]`,

  '43157': `@deva[उष्ट्राद्वुञ्] — @deva[वुञ्] comes after @deva[उष्ट्र] meaning "product/part":

@deva[उष्ट्रस्य विकारोऽवयवो वा] → @deva[औष्ट्रकः]

@note[Debars @deva[अञ्] (@ref[4.3.154]).]`,

  '43158': `@deva[उमोर्णयोर्वा] — @deva[वुञ्] optionally comes after @deva[उमा] and @deva[ऊर्णा] meaning "product/part":

| Base | By @deva[वुञ्] | By @deva[अञ्] |
|------|------------|----------|
| @deva[उमा] (flax) | @deva[औमकम्] | @deva[औमम्] |
| @deva[ऊर्णा] (wool) | @deva[और्णकम्] | @deva[और्णम्] |`,

  '43159': `@deva[एण्याढञ्] — @deva[ढञ्] optionally comes after feminine @deva[एणी] meaning "product/part":

@deva[एण्याः विकारः] → @deva[ऐणेयं मांसम्] (flesh of female black deer)

@note[For male @deva[एण]: @deva[एणस्य मांसम्] = @deva[ऐणम्] (by @deva[अञ्]).]`,

  '43160': `@deva[गोः पयसश्च यत्] — @deva[यत्] comes after @deva[गो] and @deva[पयस्] meaning "product/part":

| Base | Derivative |
|------|------------|
| @deva[गो] | @deva[गव्यम्] (@ref[6.1.79]) |
| @deva[पयस्] | @deva[पयस्यम्] |`,

  '43161': `@deva[द्रोश्च] — @deva[यत्] comes after @deva[द्रु] meaning "product/part":

@deva[द्रु] + @deva[यत्] → @deva[द्रव्यम्] (@ref[6.1.79])

@note[Debars @deva[अञ्] (@ref[4.3.139]).]`,

  '43162': `@deva[मानेऽवयवेदरुवयः] — @deva[वय] comes after @deva[द्रु] when meaning "a measure":

@deva[द्रु] + @deva[वय] → @deva[द्रुवयम्] (a wooden measure)

@note[Debars @deva[यत्].]`,

  '43163': `@deva[फले लुक्] — The "product/part" affix is @deva[लुक्]-elided when meaning "fruit":

| Base | Process | Result |
|------|---------|--------|
| @deva[आमलकी] | + @deva[मयट्] → @deva[लुक्] | @deva[आमलकम्] (myrobalan fruit) |
| @deva[वदरी] | + affix → @deva[लुक्] | @deva[वदरम्] (jujube fruit) |

@note[Fruit is both @deva[विकार] and @deva[अवयव] of fruit-bearing tree.]`,

  '43164': `@deva[प्लक्षादिभ्योऽण्] — @deva[अण्] comes after @deva[प्लक्ष]-class words meaning "fruit":

| Base | Derivative |
|------|------------|
| @deva[प्लक्ष] | @deva[प्लाक्षम्] |
| @deva[न्यग्रोध] | @deva[नैयग्रोधम्] |

The @deva[प्लक्षादि] class: @deva[प्लक्ष], @deva[न्यग्रोध], @deva[अश्वत्थ], @deva[इङ्गुदी], @deva[शिग्रु], @deva[रुरु], @deva[कर्कन्धु], @deva[बृहती]।

@note[Debars @deva[अञ्].]`,

  '43165': `@deva[जम्ब्वा वा] — @deva[अण्] optionally comes after @deva[जम्बु] meaning "fruit":

| By @deva[अण्] | By @deva[अञ्] with @deva[लुक्] (@ref[4.3.163]) |
|----------|---------------------------|
| @deva[जाम्बवानि फलानि] | @deva[जम्बूनि फलानि] (@ref[6.4.8]) |

@note[Debars @deva[अञ्].]`,

  '43166': `@deva[जम्ब्वा लुब्वा] — The "fruit" affix is optionally @deva[लुप्]-elided after @deva[जम्बु]:

| By @deva[लुप्] | By @deva[लुक्] | By @deva[अण्] |
|-----------|-----------|----------|
| @deva[जम्बूः फलम्] | @deva[जम्बु फलम्] | @deva[जाम्बवम्] |

@note[@deva[लुप्] vs @deva[लुक्]: @deva[लुप्] has gender/number concordance (@ref[1.2.51]).]

**Vārttika:** @deva[लुप्] for deciduous plants (wither when fruit ripens): @deva[व्रीहिः], @deva[यवाः], @deva[माषाः], @deva[मुद्गाः], @deva[तिलाः]।
**Vārttika:** Diversely for flowers and roots: @deva[मल्लिकायां पुष्पम्]...`,

  '43167': `@deva[हरीतक्यादिभ्यो लुप्] — The "fruit" affix is @deva[लुप्]-elided after @deva[हरीतकी]-class words:

| Base | Result |
|------|--------|
| @deva[हरीतकी] | @deva[हरीतकी] (not *@deva[हरीतकम्]) |
| @deva[कोशातकी] | @deva[कोशातकी] |
| @deva[पिप्पली] | @deva[पिप्पली] |

The @deva[हरीतक्यादि] class: @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी], @deva[शष्कण्डी], @deva[दाडी], @deva[दोडी], @deva[श्वेतपाकी], @deva[अर्जुनपाकी], @deva[द्राक्षा], @deva[काला], @deva[ध्वाङ्क्षा], @deva[गर्भिका], @deva[कण्टकारिका], @deva[पिप्पली], @deva[चिञ्चा], @deva[शेफालिका]।

@note[Concordance is gender only (Patañjali); number follows sense: @deva[हरीतकी फलम्], @deva[हरीतक्यः फलानि].]`,

  '43168': `@deva[कंसीयपारशव्याभ्यां यञञौ लुक् च] — @deva[यञ्] and @deva[अञ्] come after @deva[कंसीय] and @deva[परशव्य] respectively meaning "product," with @deva[लुक्] of the prior affix:

| Base | Prior affix | + New affix | Result |
|------|-------------|-------------|--------|
| @deva[कंसीय] (@deva[छ], @ref[5.1.1]) | @deva[छ] elided | + @deva[यञ्] | @deva[कांस्यम्] (bronze) |
| @deva[परशव्य] (@deva[यत्], @ref[5.1.2]) | @deva[यत्] elided | + @deva[अञ्] | @deva[पारशवम्] (made with axe) |

@note[@deva[लुक्] applies to the prior affixes @deva[छ] and @deva[यत्], not to the primitive.]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.3.101-168). Total: ${Object.keys(vasu).length}`);
