import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '43001': `@deva[युष्मदस्मदोर्खञ् च] — @deva[खञ्] (and @deva[छ]) optionally come after @deva[युष्मद्] and @deva[अस्मद्]:

@deva[युष्माकीनः] or @deva[युष्मदीयः] or @deva[यौष्मः] "belonging to you"
@deva[अस्माकीनः] or @deva[अस्मदीयः] or @deva[आस्मः] "belonging to us"`,

  '43002': `@deva[युष्माकास्माकौ तस्मिन्नणि च] — Before @deva[खञ्] and @deva[अण्], @deva[युष्माक] and @deva[अस्माक] substitute for @deva[युष्मद्] and @deva[अस्मद्]:

@deva[युष्मद्] → @deva[युष्माक] + @deva[खञ्] → @deva[युष्माकीनः]`,

  '43003': `@deva[एकस्य तावकममकौ] — For one person, @deva[तावक] and @deva[मामक] substitute before @deva[खञ्] and @deva[अण्]:

@deva[तावकीनः] "belonging to you (sg)"
@deva[मामकीनः] "belonging to me"
@deva[तावकः], @deva[मामकः]`,

  '43004': `@deva[अर्धाद्यत्] — @deva[यत्] comes after @deva[अर्ध]:

@deva[अर्ध्यम्] "belonging to half"

With prior term, @deva[ठञ्]: @deva[बालेयार्धिकम्]`,

  '43005': `@deva[परावराधमोत्तमपूर्वात्] — @deva[यत्] comes after @deva[अर्ध] preceded by @deva[पर], @deva[अवर], @deva[अधम], @deva[उत्तम]:

@deva[परार्ध्यम्] "belonging to the upper half"
@deva[उत्तमार्ध्यम्] "belonging to the best half"`,

  '43006': `@deva[दिक्पूर्वपदात् ठञ् च] — @deva[ठञ्] (and @deva[यत्]) come after @deva[अर्ध] when the prior word denotes direction:

@deva[पूर्वार्ध्यम्] or @deva[पौर्वार्धिकम्] "belonging to the eastern half"
@deva[दक्षिणार्ध्यम्] or @deva[दाक्षिणार्धिकम्]`,

  '43007': `@deva[ग्रामजनपदैकदेशे ऽञ्ठञौ] — @deva[अञ्] and @deva[ठञ्] come after direction + @deva[अर्ध] when denoting a portion of village or country:

@deva[इदं पौर्वार्धम्] or @deva[पौर्वार्धिकम्] "this is the eastern portion"`,

  '43008': `@deva[मध्यान्मः] — @deva[म] comes after @deva[मध्य]:

@deva[मध्यमः] "middlemost"

Also after @deva[आदि]: @deva[आदिमः] "first, primeval"`,

  '43009': `@deva[सांप्रतिके ऽः] — @deva[अ] comes after @deva[मध्य] when meaning "fit, proper":

@deva[मध्यं काष्ठम्] "the proper piece of wood" (neither too long nor too short)`,

  '43010': `@deva[समुद्रस्य द्वीपे यञ्] — @deva[यञ्] comes after @deva[द्वीप] when meaning an island near the sea:

@deva[द्वैप्यम्] "pertaining to an island"`,

  '43011': `@deva[कालाट्ठञ्] — @deva[ठञ्] comes after time-words:

@deva[मासिकः] "monthly"
@deva[आर्धमासिकः] "bimonthly"
@deva[सांवत्सरिकः] "annual"`,

  '43012': `@deva[शरदः श्राद्धे] — @deva[ठञ्] comes after @deva[शरद्] when meaning a funeral oblation:

@deva[शारदिकं श्राद्धम्] "autumnal śrāddha"`,

  '43013': `@deva[रोगातपयोर्वा] — @deva[ठञ्] optionally comes after @deva[शरद्] for illness or heat:

@deva[शारदिकः रोगः] or @deva[शारदः रोगः] "autumnal disease"
@deva[शारदिकः आतपः] or @deva[शारदः आतपः] "autumn sunshine"`,

  '43014': `@deva[निशाप्रदोषाभ्यां वा] — @deva[ठञ्] optionally comes after @deva[निशा] and @deva[प्रदोष]:

@deva[नैशम्] or @deva[नैशिकम्] "nocturnal"
@deva[प्रादोषम्] or @deva[प्रादोषिकम्]`,

  '43015': `@deva[श्वस्तुट्च] — @deva[ठञ्] optionally comes after @deva[श्वस्] with augment @deva[तुट्]:

@deva[श्वस्तनम्] (via @deva[तनप्])
@deva[श्वस्तिकम्] (via @deva[ठञ्] with @deva[तुट्])`,

  '43016': `@deva[संधिवेलाद्यृतुनक्षत्रेभ्योऽण्] — @deva[अण्] comes after @deva[संधिवेला]-class, season-words, and nakṣatra-words:

@deva[सांधिवेलम्] "pertaining to conjunction time"
@deva[हैमन्तम्] "wintry"
@deva[श्रावणम्] "of Śravaṇa"`,

  '43017': `@deva[प्रावृष एण्यः] — @deva[एण्य] comes after @deva[प्रावृष्]:

@deva[प्रावृषेण्यः बलाहकः] "cloud of the rainy season"`,

  '43018': `@deva[वर्षाट्ठक्] — @deva[ठक्] comes after @deva[वर्षा]:

@deva[वार्षिकम् अनुलेपनम्] "rainy-season ointment"`,

  '43019': `@deva[ठञ् छन्दसि] — In the Vedas, @deva[वर्षा] takes @deva[ठञ्]:

@deva[नभश्च नभस्यश्च वार्षिकावृतू] "Nabhas and Nabhasya are rainy months"`,

  '43020': `@deva[वसन्ताच्च] — In the Vedas, @deva[ठञ्] comes after @deva[वसन्त]:

@deva[मधुश्च माधवश्च वासन्तिकावृतू] "Madhu and Mādhava are spring months"`,

  '43021': `@deva[हेमन्ताच्च] — In the Vedas, @deva[ठञ्] comes after @deva[हेमन्त]:

@deva[सहश्च सहस्यश्च हैमन्तिकावृतू] "Sahas and Sahasya are winter months"`,

  '43022': `@deva[तस्य लोपश्च सर्वत्र] — @deva[अण्] comes after @deva[हेमन्त] with elision of final @deva[त]:

@deva[हैमनम् वासः] "winter residence"
@deva[हैमनम् उपलेपनम्] "winter ointment"`,

  '43023': `@deva[सायंचिरं प्राह्णे प्रगे ऽव्ययेभ्यष्ट्युट्युलौ तुट् च] — @deva[ट्यु] and @deva[ट्युल्] with augment @deva[तुट्] come after time-indeclinables @deva[सायम्], @deva[चिरम्], @deva[प्राह्णे], @deva[प्रगे]:

@deva[सायंतनम्] "of evening"
@deva[चिरंतनम्] "of long ago"`,

  '43024': `@deva[पूर्वाह्णापराह्णाभ्यां वा] — @deva[ट्यु]/@deva[ट्युल्] optionally come after @deva[पूर्वाह्ण] and @deva[अपराह्ण]:

@deva[पूर्वाह्णेतनम्] or @deva[पौर्वाह्णिकम्] "of forenoon"
@deva[अपराह्णेतनम्] or @deva[आपराह्णिकम्] "of afternoon"`,

  '43025': `@deva[तत्र जातः] — Affixes come after a locative meaning "born/produced there":

@deva[स्रुघ्ने जातः] → @deva[स्रौघ्नः] "born in Srughna"

@note[This establishes a key taddhita sense: origin/birthplace.]`,

  '43026': `@deva[प्रावृषष्ठप्] — @deva[ठप्] comes after @deva[प्रावृट्] in "born therein" sense:

@deva[प्रावृषि जातः] → @deva[प्रावृषिकः] "born in rainy season"`,

  '43027': `@deva[शरदः संज्ञायां वुञ्] — @deva[वुञ्] comes after @deva[शरद्] when the result is a name:

@deva[शारदकाः दर्भाः] "the Śāradaka grass"
@deva[शारदकाः मुद्गाः] "the Śāradaka pulse"`,

  '43028': `@deva[पूर्वाह्णापराह्णार्द्रामूलप्रदोषावस्करात् संज्ञायाम्] — @deva[वुञ्] comes after @deva[पूर्वाह्ण], @deva[अपराह्ण], @deva[आर्द्रा], @deva[मूला], @deva[प्रदोष], @deva[अवस्कर] in names:

@deva[पूर्वाह्णकः], @deva[आर्द्रकः] "ginger" (lit. "born in Ārdrā")`,

  '43029': `@deva[पथः पन्थ च] — @deva[वुञ्] comes after @deva[पथ] in "born therein" sense; @deva[पन्थ] substitutes:

@deva[पथि जातः] → @deva[पन्थकः] "born on the path"`,

  '43030': `@deva[अमावास्याया वा] — @deva[वुञ्] optionally comes after @deva[अमावास्या]:

@deva[अमावास्यकः] or @deva[आमावास्यः] "born on new-moon day"`,

  '43031': `@deva[अश्च] — @deva[अ] also comes after @deva[अमावास्या]:

@deva[अमावास्यः] (via @deva[अ])
@deva[अमावास्यकः] (via @deva[वुञ्])
@deva[आमावास्यः] (via @deva[अण्])`,

  '43032': `@deva[सिन्ध्वपकराभ्यां कन्] — @deva[कन्] comes after @deva[सिन्धु] and @deva[अपकर] in "born therein" sense:

@deva[सिन्धुकः] "born in Sindhu"
@deva[अपकरकः] "born in trash-heap"`,

  '43033': `@deva[अण् अञ् च] — @deva[अण्] and @deva[अञ्] come after @deva[सिन्धु] and @deva[अपकर] respectively:

@deva[सैन्धवः] (via @deva[अण्])
@deva[आपकरः] (via @deva[अञ्])`,

  '43034': `@deva[श्रविष्ठाफाल्गुन्यनुराधास्वातितिष्यपुनर्वसुहस्तविशाखाषाढाबहुलासु लुक्] — The "born therein" affix is elided by @deva[लुक्] after these nakṣatras:

@deva[श्रविष्ठासु जातः] → @deva[श्रविष्ठाः] (affix elided)
@deva[फाल्गुन्यां जातः] → @deva[फाल्गुनी]`,

  '43035': `@deva[स्थानान्तादगोशालखरशालात्] — The affix is elided after @deva[स्थान]-ending words, @deva[गोशाल], @deva[खरशाल]:

@deva[गोस्थाने जातः] → @deva[गोस्थानः]
@deva[गोशालः], @deva[खरशालः]`,

  '43036': `@deva[वत्सशालाभिजिदश्वयुक्छतभिषजो वा] — The affix is optionally elided after @deva[वत्सशाला], @deva[अभिजित्], @deva[अश्वयुज्], @deva[शतभिषज्]:

@deva[वत्सशालः] or @deva[वात्सशालः]
@deva[अभिजित्] or @deva[आभिजितः]`,

  '43037': `@deva[नक्षत्राद्बहुलम्] — The affix is variously elided after nakṣatra-words:

@deva[रोहिणः] or @deva[रौहिणः]
@deva[मृगशिराः] or @deva[मार्गशीर्षः]`,

  '43038': `@deva[तत्र कृतं सनं पणं क्लृप्तम्] — Affixes come meaning "done there, obtained there, bought there, skilled therein":

@deva[स्रौघ्नः] = "done in / bought in / skilled in Srughna"
@deva[माथुरः], @deva[काश्यः]`,

  '43039': `@deva[तत्र प्रायभवः] — Affixes come meaning "mostly found there":

@deva[स्रौघ्नः] = "what is mostly found in Srughna"
@deva[माथुरः] = "mostly found in Mathurā"`,

  '43040': `@deva[उपजान्वोपकर्णोपनीव्यः ठक्] — @deva[ठक्] comes after @deva[उपजानु], @deva[उपकर्ण], @deva[उपनीवि] in "mostly found" sense:

@deva[औपजानुकः] "near the knee"
@deva[औपकर्णिकः] "near the ear"
@deva[औपनीविकः] "near the girdle"`,

  '43041': `@deva[ङ्याप्प्रातिपदिकात् संभूते] — Affixes come after stems (including feminine) meaning "adapted to that":

@deva[गौ भवः] → @deva[गव्यः] "adapted to cows"`,

  '43042': `@deva[कोशादिभ्यो ढञ्] — @deva[ढञ्] comes after @deva[कोश]-class in "adapted to" sense:

@deva[कोशे संभूतम्] → @deva[कौशेयं वस्त्रम्] "silk cloth" (suited to cocoons)`,

  '43043': `@deva[साधुपुष्पफलेषु कालात्] — Affixes come after time-words meaning "good/flowering/ripening then":

@deva[हेमन्ते साधुः] → @deva[हैमन्तः] "good in winter"
@deva[ग्रैष्मम् पुष्पम्] "flower blooming in summer"`,

  '43044': `@deva[उप्ते च] — Affixes come after time-words meaning "sown then":

@deva[हेमन्ते उप्यन्ते] → @deva[हैमन्ताः यवाः] "barley sown in winter"
@deva[ग्रैष्माः व्रीहयः] "rice sown in summer"`,

  '43045': `@deva[आश्वयुज्याः वुञ्] — @deva[वुञ्] comes after @deva[आश्वयुजी] in "sown" sense:

@deva[आश्वयुज्यां उप्ताः] → @deva[आश्वयुजकाः माषाः] "pulse sown in Āśvayujī"`,

  '43046': `@deva[ग्रीष्मवसन्तयोर्वा] — @deva[वुञ्] optionally comes after @deva[ग्रीष्म] and @deva[वसन्त] in "sown" sense:

@deva[ग्रैष्मम्] or @deva[ग्रैष्मकम् सस्यम्] "summer crop"
@deva[वासन्तम्] or @deva[वासन्तकम्]`,

  '43047': `@deva[देयमृणं कालात्] — Affixes come after time-words meaning "debt due then":

@deva[मासे देयमृणम्] → @deva[मासिकम्] "monthly debt"
@deva[सांवत्सरिकम्] "annual debt"`,

  '43048': `@deva[कलाप्यश्वत्थयवबुसाद्वुञ्] — @deva[वुञ्] comes after @deva[कलापिन्], @deva[अश्वत्थ], @deva[यवबुस्] for "debt due":

@deva[कालापकम्] "debt due when peacocks mate"
@deva[आश्वत्थकम्] "debt due when Aśvattha fruits"
@deva[यावबुसकम्] "debt due when barley has chaff"`,

  '43049': `@deva[ग्रीष्मावरसमाभ्याम्] — @deva[वुञ्] comes after @deva[ग्रीष्म] and @deva[अवरसम] for "debt due":

@deva[ग्रैष्मकम्] "summer debt"
@deva[आवरसमकम्] "debt due in bad season"`,

  '43050': `@deva[संवत्सराग्रहायण्योः ठञ् च] — @deva[ठञ्] (and @deva[वुञ्]) come after @deva[संवत्सर] and @deva[आग्रहायणी] for "debt due":

@deva[सांवत्सरिकम्] or @deva[सांवत्सरकम्]
@deva[आग्रहायणिकम्] or @deva[आग्रहायणकम्]`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.3.1-50). Total: ${Object.keys(vasu).length}`);
