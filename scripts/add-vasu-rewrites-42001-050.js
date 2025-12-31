import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '42001': `@deva[तेन रक्तं रागात्] — @deva[अण्] comes after a color-word (in instrumental sense) meaning "dyed with that":

@deva[लाक्षा] "lac" → @deva[लाक्षारक्तम्] → @deva[लाक्षम्] "dyed with lac"
@deva[कुसुम्भ] → @deva[कौसुम्भम्] "safflower-dyed"`,

  '42002': `@deva[लाक्षारोचनाशकलकर्दमाट्ठक्] — @deva[ठक्] comes after @deva[लाक्षा], @deva[रोचना], @deva[शकल], @deva[कर्दम] in the sense of "dyed with":

@deva[लाक्षा] → @deva[लाक्षिकम्] "lac-dyed"
@deva[कर्दम] "mud" → @deva[कार्दमिकम्] "mud-colored"`,

  '42003': `@deva[तेनैकदिक् च युक्तम्] — @deva[अण्] comes after a nakṣatra (lunar mansion) name (in instrumental) meaning "time connected with it":

@deva[पुष्य] → @deva[पौष्यम्] "the time when moon is in Puṣya"
@deva[श्रवण] → @deva[श्रावणम्]`,

  '42004': `@deva[अविशेषे लुप्] — The affix is elided by @deva[लुप्] when no specific time-portion (night, muhūrta, etc.) is indicated:

@deva[अद्यः पुष्यः] "today belongs to Puṣya" (no affix visible)`,

  '42005': `@deva[श्रवणाश्वत्थयोः संज्ञायाम्] — The affix is elided by @deva[लुप्] after @deva[श्रवण] and @deva[अश्वत्थ] when the result is a name with time specification:

@deva[श्रवणा रात्रिः] "the night called Śravaṇā"
@deva[अश्वत्थो मुहूर्तः] "the muhūrta called Aśvattha"`,

  '42006': `@deva[नक्षत्रेण युक्तः कालो द्वन्द्वाच्छः] — @deva[छ] comes after a dvandva compound of nakṣatra names (with or without specification):

@deva[राधानुराधा] → @deva[राधानुराधीया रात्रिः] "night of Rādhā and Anurādhā"
@deva[तिष्यपुनर्वसु] → @deva[तिष्यपुनर्वसवीयम् अहः]`,

  '42007': `@deva[तेन दृष्टं साम] — @deva[अण्] comes after a seer's name (in instrumental) meaning "the Sāmaveda seen by him":

@deva[क्रुञ्च] → @deva[क्रौञ्चम् साम] "Sāman seen by Kruñca"`,

  '42008': `@deva[कलेर्ढक्] — @deva[ढक्] comes after @deva[कलि] in the sense of "Sāman seen by":

@deva[कलि] → @deva[कालेयम् साम]`,

  '42009': `@deva[वामदेवात्ड्यड्ड्यौ] — @deva[ड्यत्] and @deva[ड्य] come after @deva[वामदेव] for Sāman seen by him:

@deva[वामदेव्यम्] or @deva[वामदेव्यम्] (both forms)`,

  '42010': `@deva[तेन परिवृतो रथः] — @deva[अण्] comes after a covering material (in instrumental) when "chariot covered with" is meant:

@deva[वस्त्र] → @deva[वास्त्रः रथः] "cloth-covered chariot"
@deva[कम्बल] → @deva[काम्बलः] "blanket-covered chariot"`,

  '42011': `@deva[पाण्डुकम्बलादिभ्य इनिः] — @deva[इनि] comes after @deva[पाण्डुकम्बल]-class for chariot covering:

@deva[पाण्डुकम्बली रथः] "chariot covered with white woolen blanket"`,

  '42012': `@deva[द्वैपवैयाघ्राभ्याम् अञ्] — @deva[अञ्] comes after @deva[द्वैप] and @deva[वैयाघ्र] for chariot covering:

@deva[दैपः] "chariot covered with leopard skin"
@deva[वैयाघ्रः] "chariot covered with tiger skin"`,

  '42013': `@deva[कौमारापूर्ववचने] — @deva[कौमार] is irregularly formed with @deva[अण्] meaning "virginity" or "first husband":

@deva[कौमारो भर्ता] "first husband" (= @deva[अपूर्वपतिः])`,

  '42014': `@deva[तत्र भवस्तत्र जातस्तेन निर्वृत्तः] — @deva[अण्] comes after vessel-names (in locative) meaning "placed thereon":

@deva[स्थाली] "pot" → @deva[स्थालीपक्वम्] → @deva[स्थालम्] "cooked in a pot"
@deva[कुम्भ] → @deva[कौम्भम्]`,

  '42015': `@deva[स्थण्डिलाद्व्रतिनि] — @deva[अण्] comes after @deva[स्थण्डिल] (in locative) meaning "one who sleeps there as a vow":

@deva[स्थाण्डिलः] "one who sleeps on bare ground (as religious observance)"`,

  '42016': `@deva[भक्षे संस्कृतम्] — @deva[अण्] comes after a cooking-vessel name (in locative) meaning "food prepared therein":

@deva[भ्राष्ट्र] "frying pan" → @deva[भ्राष्ट्राः] "cakes fried in pan"
@deva[कुम्भ] → @deva[कौम्भाः]`,

  '42017': `@deva[शूलोखाभ्यां यत्] — @deva[यत्] comes after @deva[शूल] "spit" and @deva[उखा] "pot" for prepared food:

@deva[शूल्यम्] "roasted on a spit" (meat)
@deva[उख्यम्] "boiled in a pot"`,

  '42018': `@deva[दध्नः स्थौल्याद् ठक्] — @deva[ठक्] comes after @deva[दधि] (in locative sense, as vessel/medium) for prepared food:

@deva[दाधिकम्] "made in/with curd"

@note[Differs from @ref[4.4.3] @deva[दाधिकम्] "prepared WITH curd"—here it means prepared IN curd.]`,

  '42019': `@deva[उदश्वितो वा] — @deva[ठक्] optionally comes after @deva[उदश्वित्] for prepared food:

@deva[औदश्वित्कम्] or @deva[औदश्वितम्] (via @deva[अण्])`,

  '42020': `@deva[क्षीराद्ढञ्यवागूषु] — @deva[ढञ्] comes after @deva[क्षीर] "milk" (in locative) when the prepared food is @deva[यवागू] "barley gruel":

@deva[क्षैरेयी यवागूः] "milky gruel"`,

  '42021': `@deva[सास्मिन्पौर्णमासीति] — @deva[अण्] comes after a full-moon night's name meaning "the time-division in which it falls":

@deva[माघी] → @deva[माघः] (the month)
@deva[फाल्गुनी] → @deva[फाल्गुनः]`,

  '42022': `@deva[आग्रहायण्यश्वत्थात्ठक्] — @deva[ठक्] comes after @deva[आग्रहायणी] and @deva[अश्वत्थ] as full-moon names:

@deva[आग्रहायणिकः] (month name)`,

  '42023': `@deva[फाल्गुनीकार्त्तिकीचैत्रीभ्यो ढक् वा संज्ञायाम्] — @deva[ढक्] optionally comes after @deva[फाल्गुनी], @deva[कार्त्तिकी], @deva[चैत्री] as full-moon names:

@deva[फाल्गुनः] or @deva[फाल्गुनेयः]
@deva[कार्त्तिकः] or @deva[कार्त्तिकेयः]`,

  '42024': `@deva[साऽस्य देवता] — @deva[अण्] comes after a deity's name meaning "sacred to that deity":

@deva[इन्द्र] → @deva[ऐन्द्रं हविः] "oblation to Indra"
@deva[वरुण] → @deva[वारुणम्]`,

  '42025': `@deva[कादणोऽसिः] — Before @deva[अण्], the final @deva[अ] of @deva[क] (Prajāpati) becomes @deva[इ]:

@deva[क] → @deva[कायं हविः] "oblation to Ka (Prajāpati)"`,

  '42026': `@deva[शुक्राद्घनः] — @deva[घन्] comes after @deva[शुक्र] meaning "sacred to Śukra":

@deva[शुक्रियं हविः] "oblation to Śukra"`,

  '42027': `@deva[अपोनप्त्रपांनप्त्रोर्घः] — @deva[घ] comes after @deva[अपोनप्तृ] and @deva[अपांनप्तृ] (deity names):

@deva[अपोनप्त्रियं हविः] "oblation to Apām Napāt"`,

  '42028': `@deva[छ च] — @deva[छ] also comes after @deva[अपोनप्तृ] and @deva[अपांनप्तृ]:

@deva[अपोनपत्रीयम्] or @deva[अपांनप्त्रीयम्]`,

  '42029': `@deva[महेन्द्रात्त्रिविधम्] — @deva[घ], @deva[अण्], and @deva[छ] all come after @deva[महेन्द्र]:

@deva[महेन्द्रीयम्] (via @deva[घ])
@deva[माहेन्द्रम्] (via @deva[अण्])
@deva[महेन्द्रीयम्] (via @deva[छ])`,

  '42030': `@deva[सोमाट्ट्यण्] — @deva[ट्यण्] comes after @deva[सोम]:

@deva[सौम्यं हविः] "oblation to Soma"
@deva[सौम्यं सूक्तम्] "hymn to Soma"
f. @deva[सौमी] (via @deva[ट]-triggered @deva[ङीप्])`,

  '42031': `@deva[वायुर्त्वोषसः] — @deva[यत्] comes after @deva[वायु], @deva[ऋतु], @deva[पितृ], @deva[उषस्]:

@deva[वायव्यम्] "to Vāyu"
@deva[ऋतव्यम्] "to Ṛtu"
@deva[पित्र्यम्] "to the Fathers"
@deva[उषस्यम्] "to Dawn"`,

  '42032': `@deva[द्यावापृथिवीशुनासीरादिभ्यश्छ] — @deva[छ] comes after compound deity names @deva[द्यावापृथिवी], @deva[शुनासीर], @deva[मरुत्वद्], @deva[अग्निषोम], etc.:

@deva[द्यावापृथिवीयम्] "to Heaven and Earth"
@deva[आग्निषोमीयम्] "to Agni and Soma"`,

  '42033': `@deva[अग्नेर्ढक्] — @deva[ढक्] comes after @deva[अग्नि]:

@deva[आग्नेयः अष्टकपालः] "eight-bowl oblation to Agni"

@note[@deva[ढक्] always after @deva[अग्नि] and @deva[कलि] in all @deva[प्राग्दीव्यतीय] senses.]`,

  '42034': `@deva[कालाट्ठञ्] — Time-words take affixes for "born there" etc. (@ref[4.3.11]-@ref[4.3.53]) also in the sense of "sacred to that deity":

@deva[वासन्तः] "belonging to Spring (as deity)"`,

  '42035': `@deva[महाराजप्रोष्ठपदाभ्याम्] — @deva[ठञ्] comes after @deva[महाराज] and @deva[प्रोष्ठपद]:

@deva[महाराजिकम्] "sacred to Mahārāja"
@deva[प्रौष्ठपदिकम्]`,

  '42036': `@deva[पितृव्यमातुलमातामहपितामहाः] — These kinship terms are irregularly formed:

@deva[पितृव्य] "father's brother" (paternal uncle)
@deva[मातुल] "mother's brother" (maternal uncle)
@deva[मातामह] "mother's father" (maternal grandfather)
@deva[पितामह] "father's father" (paternal grandfather)`,

  '42037': `@deva[तस्य समूहः] — An affix is added in the sense of "collection thereof":

This @deva[अधिकार] opens the "collective" sense section.`,

  '42038': `@deva[भिक्षादिभ्योऽण्] — @deva[अण्] comes after @deva[भिक्षा]-class for "collection of":

@deva[भिक्षाणां समूहः] → @deva[भैक्षम्] "collection of alms"
@deva[माषाणाम्] → @deva[माषम्] "heap of beans"`,

  '42039': `@deva[गोत्रोक्षोष्ट्रोरभ्रराजराजन्यराजपुत्रवत्समनुष्याजाद्वुञ्] — @deva[वुञ्] comes after gotra words and @deva[उक्ष], @deva[उष्ट्र], @deva[उरभ्र], @deva[राजन्], @deva[राजन्य], @deva[राजपुत्र], @deva[वत्स], @deva[मनुष्य], @deva[अज] for "collection":

@deva[गार्ग्याणां समूहः] → @deva[गार्ग्यकम्] "assembly of Gārgyas"
@deva[उक्षणाम्] → @deva[औक्षकम्] "herd of bulls"`,

  '42040': `@deva[केदाराद्यञ्च] — @deva[यञ्] and @deva[वुञ्] come after @deva[केदार] for "collection":

@deva[कैदार्यम्] or @deva[कैदारकम्] "group of fields"`,

  '42041': `@deva[कवचिनश्च ठञ्] — @deva[ठञ्] comes after @deva[केदार] and @deva[कवचिन्]:

@deva[कैदारिकम्] "field-group"
@deva[कावचिनिकम्] "group of armored ones"`,

  '42042': `@deva[ब्राह्मणमाणववाडवेभ्यो यन्] — @deva[यन्] comes after @deva[ब्राह्मण], @deva[माणव], @deva[वाडव]:

@deva[ब्राह्मण्यम्] "assembly of Brāhmaṇas"
@deva[माणव्यम्] "group of students"
@deva[वाडव्यम्] "herd of mares"`,

  '42043': `@deva[ग्रामजनबन्धुसहायेभ्यस्तल्] — @deva[तल्] comes after @deva[ग्राम], @deva[जन], @deva[बन्धु], @deva[सहाय]:

@deva[ग्रामता] "village community" (f.)
@deva[जनता] "multitude of people"
@deva[बन्धुता] "group of relatives"
@deva[सहायता] "band of helpers"`,

  '42044': `@deva[प्रत्ययोत्तपदात्...] — @deva[अञ्] comes after words with @deva[अनुदात्त] on the first syllable:

@deva[कपोतानां समूहः] → @deva[कापोतम्] "flock of pigeons"
@deva[मयूराणाम्] → @deva[मायूरम्] "flock of peacocks"`,

  '42045': `@deva[खण्डिकादिभ्योऽञ्] — @deva[अञ्] comes after @deva[खण्डिक]-class:

@deva[खाण्डिकम्] "collection of fragments"
@deva[क्षौद्रकमालवम्] "honey collection"`,

  '42046': `@deva[चरणेभ्यो धर्मवत्] — After Vedic school names, affixes for "rule of that school" also mean "collection":

@deva[कठानाम्] → @deva[काठकम्] "the Kaṭha collection/rule"`,

  '42047': `@deva[अजातेर्हस्तिधेनोष्ठक्] — @deva[ठक्] comes after non-sentient things and @deva[हस्ति], @deva[धेनु] for "collection":

@deva[अपूपानां समूहः] → @deva[आपूपिकम्] "heap of cakes"
@deva[हस्तिनाम्] → @deva[हास्तिकम्] "herd of elephants"`,

  '42048': `@deva[केशाश्वाभ्यां यञ्छौ] — @deva[यञ्] after @deva[केश] and @deva[छ] after @deva[अश्व] optionally for "collection":

@deva[कैश्यम्] or @deva[कैशिकम्] "mass of hair"
@deva[आश्वीयम्] or @deva[आश्वम्] "herd of horses"`,

  '42049': `@deva[पाशादिभ्यो यः] — @deva[य] comes after @deva[पाश]-class for "collection" (feminine forms):

@deva[पाश्या] "collection of snares"
@deva[तृण्या] "mass of grass"`,

  '42050': `@deva[खलगोरथात्] — @deva[य] comes after @deva[खल], @deva[गो], @deva[रथ] for "collection":

@deva[खल्या] "threshing-floor area"
@deva[गव्या] "herd of cattle"
@deva[रथ्या] "collection of chariots; street"`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.2.1-50). Total: ${Object.keys(vasu).length}`);
