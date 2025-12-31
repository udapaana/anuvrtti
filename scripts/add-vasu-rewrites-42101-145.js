import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '42101': `@deva[दिवः प्राच्यपाच्युदच्प्रत्यचः] — @deva[यत्] comes after @deva[दिव्], @deva[प्राच्], @deva[अपाच्], @deva[उदच्], @deva[प्रत्यच्]:

@deva[दिव्यम्] "divine/celestial"
@deva[प्राच्यम्] "eastern"
@deva[उदीच्यम्] "northern"
@deva[प्रतीच्यम्] "western"`,

  '42102': `@deva[कन्थायाष्ठक्] — @deva[ठक्] comes after @deva[कन्था]:

@deva[कान्थिकः] "one from Kanthā"`,

  '42103': `@deva[वर्णोर्वुक्] — @deva[वुक्] comes after @deva[कन्था] when referring to @deva[वर्णु] region:

@deva[कान्थुकः] "one from Kanthā in Varṇu region"`,

  '42104': `@deva[अव्ययात्त्यप्] — @deva[त्यप्] comes after indeclinables:

@deva[इह] → @deva[इहत्यः] "of this place"
@deva[तत्र] → @deva[तत्रत्यः] "of that place"`,

  '42105': `@deva[ऐषमह्यः श्वस्त्यप् वा] — @deva[त्यप्] optionally comes after @deva[ऐषमस्], @deva[ह्यस्], @deva[श्वस्]:

@deva[ऐषमस्त्यम्] or @deva[ऐषमस्तनम्] "of this year"
@deva[ह्यस्त्यम्] or @deva[ह्यस्तनम्] "of yesterday"
@deva[श्वस्त्यम्] or @deva[श्वस्तनम्] "of tomorrow"`,

  '42106': `@deva[तीरकूप्योरञ्] — @deva[अञ्] comes after @deva[तीर]-ending and @deva[कूप्य]-ending stems:

@deva[काकतीरम्] "on Kāka bank"
@deva[वार्करूप्यम्] "of Vṛka-rūpya"`,

  '42107': `@deva[दिक्पूर्वपदाद् असंज्ञायां ञः] — @deva[ञ] comes after direction-prefixed compounds (not proper names):

@deva[पूर्वकुरु] → @deva[पौर्वकौरवम्] (f. @deva[पौर्वकौरवा])`,

  '42108': `@deva[मद्राञ्] — @deva[अञ्] comes after direction + @deva[मद्र]:

@deva[पूर्वमद्र] → @deva[पौर्वमद्रः] (f. @deva[पौर्वमद्री])

@note[Initial vṛddhi applies per @ref[7.3.13].]`,

  '42109': `@deva[बह्वचोऽन्त उदात्तो ञ्] — @deva[अञ्] comes after polysyllabic stems with final @deva[उदात्त] (Northern village names):

@deva[गोपालग्रामः] → @deva[गोपालग्रामः] (village of Northern folk)`,

  '42110': `@deva[प्रस्थादिभ्योऽण्] — @deva[अण्] comes after @deva[प्रस्थ]-ending, @deva[पलदी]-class, and @deva[क]-penultimate stems:

@deva[माद्रीप्रस्थः]
@deva[वृकाङ्कः]`,

  '42111': `@deva[कण्वादिभ्यो गोत्रे] — @deva[अण्] comes after gotra formed from @deva[कण्व]-class:

@deva[काण्वः] (gotra) → @deva[काण्वाः] "students of Kāṇva"`,

  '42112': `@deva[इञन्तादण्] — @deva[अण्] comes after @deva[इञ्]-ending gotra words:

@deva[दाक्षि] (from @deva[दक्ष]) → @deva[दाक्षाः] "students of Dākṣi"`,

  '42113': `@deva[द्व्यचो ऽतोऽन्यतरस्यां प्राचां भरतेषु] — @deva[अण्] is NOT added to disyllabic @deva[इञ्]-ending gotras among Eastern folk or Bharatas:

@deva[दाक्षिः] (no further affix) for Eastern/Bharata peoples`,

  '42114': `@deva[वृद्धाच्छः] — @deva[छ] comes after @deva[वृद्ध] words:

@deva[गार्ग्य] (vṛddha) → @deva[गार्गीयः] "pertaining to Gārgya"`,

  '42115': `@deva[भवतश्च ठक् छसौ] — @deva[ठक्] and @deva[छस्] come after @deva[भवत्]:

@deva[भावतिकः] (via @deva[ठक्])
@deva[भावतीयः] (via @deva[छस्])`,

  '42116': `@deva[काश्यादिभ्यः ठञ् ञिठ् च] — @deva[ठञ्] and @deva[ञिठ्] come after @deva[काशि]-class:

@deva[काशिकी] or @deva[काशिका] (f. differs by affix)`,

  '42117': `@deva[वाहीकग्रामात् वृद्धात् ठञ् ञिठौ] — @deva[ठञ्] and @deva[ञिठ्] come after @deva[वृद्ध]-words denoting Vāhīka villages:

@deva[शाकलिकी] or @deva[शाकलिका]
@deva[मान्थविकी] or @deva[मान्थविका]`,

  '42118': `@deva[औशीनरेषु वा] — @deva[ठञ्]/@deva[ञिठ्] optionally come for Vāhīka villages in Uśīnara:

@deva[आह्वजालिकी], @deva[आह्वजालिका], or @deva[आह्वजालीया]`,

  '42119': `@deva[ओर्देशे ठञ्] — @deva[ठञ्] comes after @deva[उ]-ending locality words:

@deva[आम्बिकः] "of Ambi"`,

  '42120': `@deva[वृद्धात् प्राचाम्] — @deva[ठञ्] comes after @deva[वृद्ध] @deva[उ]-ending Eastern locality words:

@deva[आढकजम्बुकः], @deva[शाकजम्बुकः]`,

  '42121': `@deva[वृद्धाद्योपधाद्धन्वनो वुञ्] — @deva[वुञ्] comes after @deva[वृद्ध] words with @deva[य] penultimate or @deva[धन्वन्]-ending:

@deva[पाथेयकः] "from Patheya"
@deva[मारुधन्वकः] "from Mārudhanvan"`,

  '42122': `@deva[प्रस्थपुरवहात्] — @deva[वुञ्] comes after @deva[वृद्ध] words ending in @deva[प्रस्थ], @deva[पुर], @deva[वह]:

@deva[मालाप्रस्थकः]
@deva[नान्दीपुरकः]
@deva[फाल्गुनीवहकः]`,

  '42123': `@deva[रोपधाद् ईञ्यन्ताच्च प्राचाम्] — @deva[वुञ्] comes after @deva[वृद्ध] Eastern locality words with @deva[र] penultimate or @deva[ई]-ending:

@deva[पाटलिपुत्रकः]
@deva[काकन्दिकः]`,

  '42124': `@deva[जनपदतदवधिभ्यश्च] — @deva[वुञ्] comes after @deva[वृद्ध] words denoting an inhabited country or its boundary:

@deva[आभिसारकः] "from Abhisāra"
@deva[वाहीककः] "from Vāhīka"`,

  '42125': `@deva[अवृद्धाभ्यो नित्यं बहुवचनात्] — @deva[वुञ्] comes after non-@deva[वृद्ध] plural-only words denoting country:

@deva[विदर्भेभ्यः] → @deva[वैदर्भकः]`,

  '42126': `@deva[कच्छाग्निवक्त्रगर्तोत्तरपदात्] — @deva[वुञ्] comes after compounds ending in @deva[कच्छ], @deva[अग्नि], @deva[वक्त्र], @deva[गर्त]:

@deva[दारुकच्छकः]
@deva[पैप्पलीकच्छकः]`,

  '42127': `@deva[धूमादिभ्यो वुञ्] — @deva[वुञ्] comes after @deva[धूम]-class locality words:

@deva[धौमकः], @deva[खाण्डकः]`,

  '42128': `@deva[नगराद्धनधास्यबाहुविशेषे] — @deva[वुञ्] comes after @deva[नगर] when censure or praise is meant:

@deva[नागरकः] "city-slicker" (derogatory or praising)`,

  '42129': `@deva[अरण्ये मनुष्ये] — @deva[वुञ्] comes after @deva[अरण्य] when meaning "man":

@deva[आरण्यकः मनुष्यः] "forester, forest-dweller"`,

  '42130': `@deva[कुरुयुगन्धरयोर्वा] — @deva[वुञ्] optionally comes after @deva[कुरु] and @deva[युगन्धर]:

@deva[कौरवकः] or @deva[कौरवः]
@deva[यौगन्धरकः] or @deva[यौगन्धरः]`,

  '42131': `@deva[मद्रवृजिभ्यां कन्] — @deva[कन्] comes after @deva[मद्र] and @deva[वृजि]:

@deva[मद्रकः] "one from Madra"
@deva[वृजिकः] "one from Vṛji"`,

  '42132': `@deva[कादण्] — @deva[अण्] comes after @deva[क]-penultimate locality words:

@deva[वृकाङ्कः] (no @deva[वुञ्] despite janapada sense)`,

  '42133': `@deva[कच्छादिभ्योऽण्] — @deva[अण्] comes after @deva[कच्छ]-class locality words:

@deva[काच्छः] "from Kutch"
@deva[सैन्धवः] "from Sindh"`,

  '42134': `@deva[कच्छादिभ्यो वुञ् मनुष्ये तद्गतौ च] — @deva[वुञ्] comes after @deva[कच्छ]-class for "man" or "man's quality":

@deva[काच्छकः मनुष्यः] "man from Kutch"
@deva[काच्छकं हसितम्] "Kutchi-style joke"`,

  '42135': `@deva[साल्वात् पत्तौ] — @deva[वुञ्] after @deva[साल्व] when meaning "man" but NOT "foot-soldier":

@deva[साल्वकः] "Sālva man" (but not @deva[साल्वकः] for foot-soldier)`,

  '42136': `@deva[गौयवागूषु] — @deva[वुञ्] after @deva[साल्व]-class when meaning "cow" or "barley gruel":

@deva[साल्वकः गौः] "Sālva cow"
@deva[साल्विका यवागूः] "Sālva barley gruel"`,

  '42137': `@deva[गर्तोत्तरपदात् छः] — @deva[छ] comes after @deva[गर्त]-ending locality words:

@deva[मृद्गर्तीयम्] "of mud-pit"`,

  '42138': `@deva[गहादिभ्यश्छः] — @deva[छ] comes after @deva[गह]-class:

@deva[गहीयः] "of a cave"
@deva[अन्तःस्थीयः]`,

  '42139': `@deva[कटादिभ्यः प्राक्] — @deva[छ] comes after @deva[कट]-class (Eastern places):

@deva[कटनगरीयम्]
@deva[कटघोषीयम्]`,

  '42140': `@deva[राज्ञः कः छे] — @deva[क] substitutes for final of @deva[राजन्] before @deva[छ]:

@deva[राजकीयम्] "royal" (not @deva[राजनीयम्])`,

  '42141': `@deva[अक्खोपधात् वृद्धात्] — @deva[छ] comes after @deva[वृद्ध] locality words ending in @deva[अक्]/@deva[इक्] or with @deva[ख] penultimate:

@deva[शालातुरीयम्]
@deva[माषिकीयम्]`,

  '42142': `@deva[कन्थापलदनगरग्रामहृदाद् वृद्धात्] — @deva[छ] comes after @deva[वृद्ध] compounds ending in @deva[कन्था], @deva[पलद], @deva[नगर], @deva[ग्राम], @deva[हृद]:

@deva[दाक्षिकन्थीयम्]
@deva[पैल्वग्रामीयम्]`,

  '42143': `@deva[पर्वतात् छः] — @deva[छ] comes after @deva[पर्वत]:

@deva[पर्वतीयः राजा] "hill king"
@deva[पर्वतीयः पुरुषः] "hill man"`,

  '42144': `@deva[अमनुष्ये वा] — @deva[छ] optionally comes after @deva[पर्वत] when NOT meaning "man":

@deva[पर्वतीयानि फलानि] or @deva[पार्वतानि फलानि] "hill fruits"`,

  '42145': `@deva[कृकणपर्णयोर्भारद्वाजे] — @deva[छ] comes after @deva[कृकण] and @deva[पर्ण] when denoting @deva[भारद्वाज] country:

@deva[कृकणीयम्] "of Kṛkaṇa in Bhāradvāja region"
@deva[पर्णीयम्] "of Parṇa in Bhāradvāja region"`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.2.101-145). Total: ${Object.keys(vasu).length}`);
