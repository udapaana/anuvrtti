import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '42051': `@deva[इनित्रकट्यष्यचश्च] — @deva[इनि], @deva[त्र], and @deva[कट्यष्यच्] come after @deva[खल], @deva[गो], @deva[रथ] respectively:

@deva[खलिनी] "threshing-floor area" (via @deva[इनि])
@deva[गोत्रा] "cattle-pen" (via @deva[त्र])
@deva[रथकट्या] "chariot road" (via @deva[कट्यष्यच्])`,

  '42052': `@deva[संज्ञायां देशस्याजातेः] — @deva[अण्] comes after a word (in genitive) meaning "someone's sphere" when the result denotes a country:

@deva[शिबीनां विषयः] → @deva[शैबः देशः] "Śibi country"

@note[This opens the "place-name" section of taddhita.]`,

  '42053': `@deva[राजन्यादिभ्यो वुञ्] — @deva[वुञ्] comes after @deva[राजन्य]-class for "sphere/country":

@deva[राजन्यानां विषयः] → @deva[राजन्यकः] "Rājanya country"`,

  '42054': `@deva[भौरिक्यादिभ्यो विधल्भक्तलौ] — @deva[विधल्] and @deva[भक्तल्] come after @deva[भौरिकि]-class and @deva[ऐषुकारि]-class respectively for "sphere":

@deva[भौरिकिविधः] "Bhaurikividha region"
@deva[ऐषुकारिभक्तः] "Aiṣukāribhakta region"`,

  '42055': `@deva[सोऽस्यादिः प्रगाथः] — @deva[अण्] comes after a meter name meaning "a pragātha beginning with that":

@deva[गायत्री] → @deva[गायत्रः प्रगाथः] "pragātha beginning with Gāyatrī"`,

  '42056': `@deva[तेन जितं युद्धम्] — @deva[अण्] comes meaning "battle fought by/for that":

@deva[दाशरथम्] "battle fought by Daśaratha"
@deva[यौधिष्ठिरम्] "battle for Yudhiṣṭhira"`,

  '42057': `@deva[शस्त्रेण ण द्यूतम्] — @deva[ण] comes after a weapon name meaning "game played with that":

@deva[आक्षम्] "dice game" (played with @deva[अक्ष])
@deva[शालाक्यम्] "stick game"`,

  '42058': `@deva[घञः क्रियायाम्] — @deva[ञ] comes after @deva[घञ्]-ending action nouns to form feminine abstracts meaning "action occurring in that":

@deva[पाक] "cooking" → @deva[पाकी] "cooking process/art"`,

  '42059': `@deva[तमधीष्टे तद्वेद] — @deva[अण्] comes after a subject of study meaning "one who studies or knows it":

@deva[व्याकरणं वेत्ति] → @deva[वैयाकरणः] "grammarian"
@deva[मीमांसां वेत्ति] → @deva[मीमांसकः]`,

  '42060': `@deva[यज्ञोक्थसूत्रान्तात् ठञ्] — @deva[ठञ्] comes after sacrifice names, @deva[उक्थ]-class, and @deva[सूत्र]-ending words for "one who studies":

@deva[अग्निष्टोम] → @deva[आग्निष्टोमिकः] "one who studies Agniṣṭoma"
@deva[वेदान्तसूत्र] → @deva[वैदान्तसूत्रिकः]`,

  '42061': `@deva[क्रमादिभ्यो वुन्] — @deva[वुन्] comes after @deva[क्रम]-class for "one who studies":

@deva[क्रम] → @deva[क्रमकः] "one who studies recitation sequence"
@deva[पद] → @deva[पदकः]
@deva[शिक्षा] → @deva[शिक्षकः]`,

  '42062': `@deva[अनुब्राह्मणात् इनिः] — @deva[इनि] comes after @deva[अनुब्राह्मण] for "one who studies":

@deva[अनुब्राह्मणिन्] "one who studies Anubrāhmaṇa texts"`,

  '42063': `@deva[वसन्तादिभ्यष्ठक्] — @deva[ठक्] comes after @deva[वसन्त]-class (seasons) for "one who studies":

@deva[वासन्तिकः] "one who studies Spring texts"
@deva[वार्षिकः] "one who studies monsoon texts"`,

  '42064': `@deva[प्रोक्ताल्लुक्] — The affix is elided by @deva[लुक्] after a work named for its announcer:

@deva[यास्कम्] → @deva[यास्कः] "student of Yāska's work" (no affix visible)`,

  '42065': `@deva[सूत्रादक्] — The affix is elided after @deva[सूत्र]-works with @deva[क्] as penultimate:

@deva[अष्टकम्] → @deva[अष्टकाः] "students of Pāṇini's Aṣṭaka"`,

  '42066': `@deva[छन्दोब्राह्मणानि च तद्विषयाणि] — Affixes denoting "announcer" after Vedic/Brāhmaṇa texts express only that relation:

@deva[ताण्डी] "follower of Tāṇḍin" (not "descendant")`,

  '42067': `@deva[तद् अस्मिन्न् अस्ति] — An affix is added meaning "that exists in this" (for place names):

This @deva[अधिकार] governs the quadruple place-name senses:
1. @deva[तत्र भवः] "born there"
2. @deva[तत्र जातः] "produced there"
3. @deva[तेन निर्वृत्तः] "completed by that"
4. @deva[तद् अस्य अस्ति] "that is near it"`,

  '42068': `@deva[तेन निर्वृत्तम्] — @deva[अण्] comes (in instrumental sense) meaning "completed by him" when the result is a country name:

@deva[शिबि] → @deva[शैबः] "country made by Śibi"`,

  '42069': `@deva[तस्य निवासः] — @deva[अण्] comes (in genitive sense) meaning "his dwelling place":

@deva[शिवानां निवासः] → @deva[शैवः] "dwelling of Śivas"`,

  '42070': `@deva[तस्य च समीपम्] — @deva[अण्] also comes meaning "near that":

@deva[उदुम्बरस्य समीपम्] → @deva[औदुम्बरम्] "place near Udumbara tree"`,

  '42071': `@deva[ऊर्वाद्योऽञ्] — @deva[अञ्] comes after @deva[उ]/@deva[ऊ]-ending stems in the quadruple sense:

@deva[अरडु] → @deva[आरडवम्]
@deva[कक्षतु] → @deva[काक्षतवम्]`,

  '42072': `@deva[बह्वञ्जङ्गमतुपो ऽञ्] — @deva[अञ्] comes after polysyllabic @deva[मतुप्]-ending stems:

@deva[रोमवत्] → @deva[रौमवम्] "place with much hair/grass"`,

  '42073': `@deva[कूपे बह्वचः] — @deva[अञ्] comes after polysyllabic stems when a well is designated:

@deva[दीर्घवरत्र] → @deva[दैर्घवरत्रः कूपः] "well completed by Dīrghavaratra"`,

  '42074': `@deva[विपाशोत्तरपदे बह्वचः] — @deva[अञ्] comes after any stem for wells on the north bank of Vipāś river:

@deva[दत्त] → @deva[दात्तः] "well made by Datta" (on north Vipāś)`,

  '42075': `@deva[संकलादिभ्योऽण्] — @deva[अण्] comes after @deva[संकल]-class in the quadruple sense:

@deva[सांकलम्], @deva[पौष्कलम्]`,

  '42076': `@deva[सौवीरसाल्वप्राचां स्त्रियाम्] — In Sauvīra, Sālva, or Eastern countries, the place-name is feminine:

@deva[दात्तामित्री] "the city called Dattāmitrī"`,

  '42077': `@deva[सुवास्त्वादिभ्योऽण्] — @deva[अण्] comes after @deva[सुवास्तु]-class:

@deva[सौवास्तवम्] "place near Suvāstu"
@deva[वार्णवम्]`,

  '42078': `@deva[राणः] — @deva[अण्] comes after @deva[राणी]:

@deva[राणम्] (not @deva[अञ्] despite @ref[4.2.74])`,

  '42079': `@deva[कात् प्राक्] — @deva[अण्] comes after stems with @deva[क्] penultimate:

@deva[कर्णच्छिद्रिक] → @deva[कार्णच्छिद्रिकः कूपः]`,

  '42080': `@deva[वुञ्छण्कठञ्...] — 17 affixes come after 17 respective classes in the quadruple sense:

| Class | Affix |
|-------|-------|
| @deva[कच्छादि] | @deva[वुञ्] |
| @deva[नडादि] | @deva[छ] |
| @deva[धूमादि] | @deva[क] |
| @deva[अश्मादि] | @deva[ठञ्] |
| ... | ... |`,

  '42081': `@deva[जनपदे लुप्] — In kingdom names, the affix is elided by @deva[लुप्] (number and gender unchanged):

@deva[पञ्चाल] (no affix) = "Pañcāla kingdom"`,

  '42082': `@deva[वरणादिभ्यश्च] — After @deva[वरण]-class, the affix is elided (not necessarily kingdom):

@deva[वरणाः] "those of Varaṇa"`,

  '42083': `@deva[शर्करायाः वा] — After @deva[शर्करा], the affix is optionally elided:

@deva[शर्करा] or @deva[शार्करम्] or @deva[शार्करीयम्]`,

  '42084': `@deva[ठक्छौ च] — @deva[ठक्] and @deva[छ] come after @deva[शर्करा]:

@deva[शार्करिकम्] (via @deva[ठक्])
@deva[शार्करीयम्] (via @deva[छ])`,

  '42085': `@deva[नद्याम्मतुप्] — @deva[मतुप्] comes to designate a river:

@deva[उदुम्बरावती] "river with Udumbara trees nearby"
@deva[मशकावती] "river with mosquitoes"`,

  '42086': `@deva[मध्वादिभ्यश्च] — @deva[मतुप्] comes after @deva[मधु]-class (not just rivers):

@deva[मधुमान्] "place with honey"
@deva[विसवान्] "place with lotus fibers"`,

  '42087': `@deva[कुमुदनडवेतसेभ्यो ड्मतुप्] — @deva[ड्मतुप्] (with final elision) comes after @deva[कुमुद], @deva[नड], @deva[वेतस]:

@deva[कुमुद्वान्] "having lotuses"
@deva[नड्वान्] "having reeds"
@deva[वेतस्वान्] "having cane"`,

  '42088': `@deva[नडशादाभ्यां ड्वलच्] — @deva[ड्वलच्] comes after @deva[नड] and @deva[शाद] (with final elision):

@deva[नड्वलम्] "reedy place"
@deva[शाद्वलम्] "grassy place"`,

  '42089': `@deva[शिखायाः वलच्] — @deva[वलच्] comes after @deva[शिखा]:

@deva[शिखावलम्] "crested place (like peacock)"`,

  '42090': `@deva[उत्करादिभ्यश्छः] — @deva[छ] comes after @deva[उत्कर]-class:

@deva[उत्करीयम्] "heap place"
@deva[शफरीयम्] "fish place"`,

  '42091': `@deva[नडादिभ्यः कुक्] — Augment @deva[कुक्] comes after @deva[नड]-class before @deva[छ]:

@deva[नडकीयम्] (not @deva[नडीयम्])
@deva[प्लक्षकीयम्]`,

  '42092': `@deva[इतोऽन्यत्र] — Hereafter, affixes have senses other than those already taught:

@note[This marks a transition in taddhita senses.]`,

  '42093': `@deva[राष्ट्राद्घः अवारपाराच्च खः] — @deva[घ] after @deva[राष्ट्र], @deva[ख] after @deva[अवारपार]:

@deva[राष्ट्रियः] "pertaining to a country"
@deva[अवारपारीणः] "extending to both banks"`,

  '42094': `@deva[ग्रामाद्वखञौ] — @deva[व] and @deva[खञ्] come after @deva[ग्राम]:

@deva[ग्राम्य] "rustic"
@deva[ग्रामीणः] "villager"`,

  '42095': `@deva[कत्र्यादिभ्यो ढकञ्] — @deva[ढकञ्] comes after @deva[कत्रि]-class:

@deva[कात्रेयकः], @deva[औम्भेयकः]`,

  '42096': `@deva[कुलकुक्षिग्रीवाभ्यः...] — @deva[ढकञ्] after @deva[कुल], @deva[कुक्षि], @deva[ग्रीवा] with special meanings:

@deva[कौलेयकः] "dog" (born in house)
@deva[कौक्षेयकः] "sword" (born in belly)
@deva[ग्रैवेयकः] "neck ornament"`,

  '42097': `@deva[नद्यादिभ्यो ढक्] — @deva[ढक्] comes after @deva[नदी]-class:

@deva[नादेयम्] "pertaining to a river"
@deva[माहेयम्] "earthen"`,

  '42098': `@deva[दक्षिणापश्चात्पुरसस्त्यक्] — @deva[त्यक्] comes after @deva[दक्षिणा], @deva[पश्चात्], @deva[पुरस्]:

@deva[दाक्षिणात्यः] "southern"
@deva[पाश्चात्यः] "western"
@deva[पौरस्त्यः] "eastern"`,

  '42099': `@deva[कापिश्याः ष्फक्] — @deva[ष्फक्] comes after @deva[कापिशी]:

@deva[कापिशायनं मधु] "wine from Kāpiśī"
f. @deva[कापिशायनी द्राक्षा]`,

  '42100': `@deva[रंकोरप्राणिषु] — @deva[ष्फक्] and @deva[अण्] come after @deva[रंकु] for non-human beings:

@deva[राङ्कवः गौः] or @deva[राङ्कवायणः गौः]
But: @deva[राङ्कवकः मनुष्यः] (human)`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.2.51-100). Total: ${Object.keys(vasu).length}`);
