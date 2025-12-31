import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '41051': `@deva[स्वल्पाच्च] — @deva[ङीष्] comes after compounds ending in @deva[क्त] when the first member denotes the means and the sense is "small quantity":

@deva[शूद्रक्रीती] "bought with a small amount from a Śūdra"`,

  '41052': `@deva[क्तान्ताद् बहुव्रीहेः] — @deva[ङीष्] comes after bahuvrīhi compounds ending in a @deva[क्त]-form with final acute accent:

@deva[उद्धृतोदनी] "she from whom rice has been taken up"`,

  '41053': `@deva[अन्त्योदात्तादनङ्गवत्] — @deva[ङीष्] is optional after bahuvrīhi compounds ending in @deva[क्त] with final acute accent, when the prior word does NOT denote a body part:

@deva[प्रत्यस्तमित्री] or @deva[प्रत्यस्तमिता]`,

  '41054': `@deva[अन्तःस्थाभक्तो...] — @deva[ङीष्] is optional after:
- Body-part words that are subordinate in compound
- When the penultimate is NOT a conjunct consonant

@deva[सुमुखी] or @deva[सुमुखा] "fair-faced woman"`,

  '41055': `@deva[नासिकोदरोष्ठजङ्घादन्तकर्णशृङ्गाच्च] — @deva[ङीष्] is optional after compounds ending in:

| Word | Meaning |
|------|---------|
| @deva[नासिका] | nose |
| @deva[उदर] | belly |
| @deva[ओष्ठ] | lip |
| @deva[जङ्घा] | leg |
| @deva[दन्त] | tooth |
| @deva[कर्ण] | ear |
| @deva[शृङ्ग] | horn |

@deva[सुनासिकी] or @deva[सुनासिका]`,

  '41056': `@deva[क्रोड्यादयः बह्वचः] — @deva[ङीष्] does NOT come after:
- Body-part words in the @deva[क्रोडा]-class
- Body-part words of more than two syllables

@deva[सुक्रोडा] (not @deva[सुक्रोडी]) — @deva[क्रोडा]-class
@deva[सुपक्षतिका] (not @deva[सुपक्षतिकी]) — polysyllabic`,

  '41057': `@deva[सहनञ्विद्यमानपूर्वाच्च] — @deva[ङीष्] does NOT come after body-part compounds preceded by @deva[सह], @deva[नञ्], or @deva[विद्यमान]:

@deva[सकेशा] "with hair" (not @deva[सकेशी])
@deva[अकेशा] "without hair"
@deva[विद्यमानकेशा] "having visible hair"`,

  '41058': `@deva[न नखमुखात् संज्ञायाम्] — @deva[ङीष्] does NOT come after @deva[नख] or @deva[मुख] in proper names:

@deva[शूर्पणखा] "Śūrpaṇakhā" (Rāvaṇa's sister) — not @deva[शूर्पणखी]`,

  '41059': `@deva[दीर्घजिह्वी च छन्दसि] — The form @deva[दीर्घजिह्वी] is irregularly used in the Vedas:

@deva[दीर्घजिह्वी] "long-tongued" (Vedic, despite conjunct penultimate)`,

  '41060': `@deva[दिक्पूर्वपदान्ङीप्] — @deva[ङीप्] (overriding other rules) comes after compounds preceded by a direction word:

@deva[पूर्वमुखी] "east-facing" (always @deva[ङीप्], not @deva[ङीष्])
@deva[दक्षिणपार्श्वी] "south-sided"`,

  '41061': `@deva[वाहाच्च] — @deva[ङीष्] comes after stems ending in @deva[वाह्]:

@deva[वाह्] (from √@deva[वह्]) → @deva[द्विवाही] "drawn by two"`,

  '41062': `@deva[सख्यशिश्वीति लोके] — The forms @deva[सखी] and @deva[अशिश्वी] are irregular @deva[ङीष्] forms in classical (non-Vedic) Sanskrit:

@deva[सखी] "female friend"
@deva[अशिश्वी] "childless woman"`,

  '41063': `@deva[जातेरस्त्रीविषयादयोपधात्] — @deva[ङीष्] comes after @deva[जाति] (species) words that:
- Don't originally express feminine
- Don't have @deva[य्] as penultimate

@deva[कुक्कुटी] "hen"
@deva[मूषिकी] "female mouse"`,

  '41064': `@deva[पाककर्णपुष्पफलमूलबालेभ्यः] — @deva[ङीष्] also comes after species words followed by:

| Suffix | Meaning | Example |
|--------|---------|---------|
| @deva[पाक] | cooked | @deva[तिलपाकी] |
| @deva[कर्ण] | ear | @deva[हस्तिकर्णी] |
| @deva[पुष्प] | flower | @deva[श्वेतपुष्पी] |
| @deva[फल] | fruit | @deva[कृष्णफली] |
| @deva[मूल] | root | @deva[पीतमूली] |
| @deva[बाल] | young | @deva[शुक्लबाली] |`,

  '41065': `@deva[इतो मनुष्यजातेः] — @deva[ङीष्] comes after stems ending in short @deva[इ] denoting human classes/races:

@deva[अवन्ति] + @deva[ञ्यङ्] → @deva[आवन्ती] "woman of Avanti"
@deva[कुन्ती] → @deva[कुन्ती] "Kuntī woman"`,

  '41066': `@deva[ऊङ् उतः] — @deva[ऊङ्] comes after stems ending in short @deva[उ] that:
- Express human races
- Don't have @deva[य्] as penultimate

@deva[कुरु] → @deva[कुरूः] "Kuru woman"`,

  '41067': `@deva[बाह्वन्तात् संज्ञायाम्] — @deva[ऊङ्] comes after @deva[बाहु]-ending compounds in proper names:

@deva[भद्रबाहूः] "Bhadrabāhū" (a woman's name)
But: @deva[वृत्तबाहुः] "round-armed" (attributive, not a name)`,

  '41068': `@deva[पङ्गोश्च] — @deva[ऊङ्] comes after @deva[पङ्गु] "lame":

@deva[पङ्गूः] "lame woman"

Also @deva[श्वश्रूः] "mother-in-law" (from @deva[श्वशुर] with elision of @deva[उ] and @deva[अ])`,

  '41069': `@deva[ऊरूत्तरपदादौपम्ये] — @deva[ऊङ्] comes after @deva[ऊरु]-ending compounds when comparison is intended:

@deva[कदलास्तम्भोरूः] "thighs like plantain stems"
@deva[करभोरूः] "thighs like elephant trunks"`,

  '41070': `@deva[संहितशफलक्षणवामात् छन्दसि] — @deva[ऊङ्] comes after @deva[ऊरु] in Vedas when preceded by @deva[संहित], @deva[शफ], @deva[लक्षण], or @deva[वाम]:

@deva[संहितोरूः], @deva[शफोरूः], @deva[लक्षणोरूः], @deva[वामोरूः]`,

  '41071': `@deva[कद्रुकमण्डल्वोश्छन्दसि] — @deva[ऊङ्] comes after @deva[कद्रु] and @deva[कमण्डलु] in the Vedas:

@deva[कद्रूः] (Vedic)
@deva[कमण्डलूः] (Vedic)

Classical forms: @deva[कद्रुः], @deva[कमण्डलुः]`,

  '41072': `@deva[संज्ञायाम्] — @deva[ऊङ्] comes after @deva[कद्रु] and @deva[कमण्डलु] in proper names:

@deva[कद्रूः] "Kadrū" (wife of Kaśyapa)
@deva[कमण्डलूः] "Kamaṇḍalū"`,

  '41073': `@deva[शार्ङ्गरवाद्यञो ङीन्] — @deva[ङीन्] comes after:
- The @deva[शार्ङ्गरव]-class
- Words ending in affix @deva[अञ्]

@deva[शार्ङ्गरवी] "Śārṅgarava woman"
@deva[औपगवी] (from @deva[उपगु] + @deva[अञ्])`,

  '41074': `@deva[ञ्यङ्ष्यङोश्चाप्] — @deva[चाप्] (@deva[आ]) comes after stems formed with @deva[ञ्यङ्] or @deva[ष्यङ्]:

@deva[आम्बष्ठ्या] "Āmbaṣṭhyā woman" (from @deva[अम्बष्ठ] + @deva[ञ्यङ्])`,

  '41075': `@deva[आवट्याच्च] — @deva[चाप्] also comes after @deva[आवट्य]:

@deva[आवट्या] "female descendant of Avaṭa"
But @deva[आवट्यायनी] with @deva[फिञ्] affix`,

  '41076': `@deva[तद्धिताः] — This @deva[अधिकार] declares: hereafter through the end of adhyāya 5, all affixes taught are @deva[तद्धित] (secondary nominal affixes).

@note[This opens the massive taddhita section — patronymics, abstract nouns, possession, etc.]`,

  '41077': `@deva[युवनस्तिः] — The affix @deva[ति] (a @deva[तद्धित]) forms the feminine of @deva[युवन्]:

@deva[युवन्] → @deva[युवतिः] "young woman"

@note[This blocks @deva[ङीप्] which would otherwise apply per @ref[4.1.5].]`,

  '41078': `@deva[अणिञोरपि स्त्रियां ष्यङ्] — In narrower patronymics (from grandson onward) formed with @deva[अण्] or @deva[इञ्], the feminine substitutes @deva[ष्यङ्] (= @deva[य]) and adds @deva[आ]:

@deva[दाक्ष] (masc) → @deva[दाक्ष्या] (fem) "granddaughter of Dakṣa"
@deva[गार्गि] (masc) → @deva[गार्ग्या] (fem)`,

  '41079': `@deva[अणो गौरचन्द्रात्] — After non-principal @deva[गोत्र] words, @deva[ष्यङ्] substitutes for @deva[अण्] and @deva[इञ्] even when the prior syllable is not heavy:

@deva[गौर] + @deva[अण्] → @deva[गौर्या]
@deva[चन्द्र] + @deva[अण्] → @deva[चन्द्र्या]`,

  '41080': `@deva[क्रौड्यादिभ्यः] — @deva[ष्यङ्] comes after the @deva[क्रौडि]-class (as an augment, not substitute):

@deva[क्रौड्या] "Krauḍī woman"`,

  '41081': `@deva[दैवयज्ञ्यादिभ्यो वा] — @deva[ष्यङ्] optionally comes after @deva[दैवयज्ञि], @deva[शौचिवृक्षि], @deva[सात्यमुग्रि], @deva[काण्ठेविद्धि]:

@deva[दैवयज्ञ्या] or @deva[दैवयज्ञी]`,

  '41082': `@deva[समर्थानां प्रथमाद्वा] — @deva[तद्धित] affixes optionally attach after the first word in a connected expression:

@deva[उपगोः अपत्यम्] → @deva[औपगवः] "descendant of Upagu"

@note[This fundamental rule governs all taddhita derivation.]`,

  '41083': `@deva[प्राग्दीव्यतोऽण्] — The affix @deva[अण्] applies by default from here until @ref[4.4.2] (@deva[तेन दीव्यति...]):

This @deva[अधिकार] establishes @deva[अण्] as the default patronymic affix for this section.`,

  '41084': `@deva[अश्वपत्यादिभ्यश्च] — @deva[अण्] comes after the @deva[अश्वपति]-class in the various senses taught up to @ref[4.4.2]:

@deva[आश्वपतः] "descendant of Aśvapati"`,

  '41085': `@deva[दित्यदित्यादित्यपत्युत्तरपदाण्ण्यः] — @deva[ण्य] comes after @deva[दिति], @deva[अदिति], @deva[आदित्य], and compounds ending in @deva[पति]:

@deva[दैत्यः] "son of Diti" (demon)
@deva[आदित्यः] "son of Aditi" (god)
@deva[सेनापत्यम्] "generalship"`,

  '41086': `@deva[उत्सादिभ्योऽञ्] — @deva[अञ्] comes after the @deva[उत्स]-class:

@deva[औत्सः] "descendant of Utsa"
@deva[पौत्रः] (from @deva[पुत्र]) "grandson"`,

  '41087': `@deva[स्त्रीपुंसाभ्यां नञ्स्नञौ भवनात्] — @deva[नञ्] after @deva[स्त्री] and @deva[स्नञ्] after @deva[पुंस्] form abstract nouns (through @ref[5.2.1]):

@deva[स्त्री] + @deva[नञ्] → @deva[स्त्रैणम्] "femininity"
@deva[पुंस्] + @deva[स्नञ्] → @deva[पौंस्नम्] "masculinity"`,

  '41088': `@deva[द्विगोर्लुक्] — The @deva[तद्धित] affix after a @deva[द्विगु] is elided by @deva[लुक्] when it has the sense of affixes taught up to @ref[4.4.2]:

@deva[पञ्चगवम्] "group of five cows" (no affix visible)`,

  '41089': `@deva[गोत्रे लुप्यते च] — The @deva[लुक्]-elision of @deva[गोत्र] affixes (per @ref[2.4.63] etc.) does NOT apply when the affix begins with a vowel and has @deva[प्राग्दीव्यतीय] sense:

@deva[यास्काः] "Yāskas" (plural, affix retained)`,

  '41090': `@deva[युवाच्छा...] — The @deva[युवन्] affix is elided by @deva[लुक्] when a @deva[प्राग्दीव्यतीय] affix beginning with a vowel follows:

@deva[गार्ग्यायण] (mental elision of @deva[युवन्]) → @deva[गार्ग्यायणः]`,

  '41091': `@deva[फक्फिञोर्वा] — The @deva[युवन्] affixes @deva[फक्] and @deva[फिञ्] are optionally elided by @deva[लुक्]:

@deva[नाडायनः] or @deva[नाडायनायनः]`,

  '41092': `@deva[तस्यापत्यम्] — The affixes from @ref[4.1.83] onward denote "descendant of X":

@deva[गर्ग] + @deva[यञ्] → @deva[गार्ग्यः] "descendant of Garga"
@deva[दक्ष] + @deva[इञ्] → @deva[दाक्षिः] "descendant of Dakṣa"`,

  '41093': `@deva[एकाच उत्तरपदे] — The same affix applies for ANY level of remote descent:

@deva[गार्ग्यः] can mean grandson, great-grandson, etc. of Garga

@note[No separate affix is needed for each generation.]`,

  '41094': `@deva[गोत्रे ऽलुग् अचि] — The @deva[युवन्] affix attaches only to what already ends in a @deva[गोत्र] affix; without @deva[गोत्र], it doesn't apply:

@deva[गार्ग्य] (gotra) + @deva[फिञ्] → @deva[गार्ग्यायणिः] "young Gārgya"`,

  '41095': `@deva[अत इञ्] — @deva[इञ्] comes after stems ending in short @deva[अ] in the sense of "descendant":

@deva[दक्ष] + @deva[इञ्] → @deva[दाक्षिः] "descendant of Dakṣa"

@note[This is the default for @deva[अ]-ending stems; @deva[अण्] is the general default.]`,

  '41096': `@deva[बह्वादिभ्यश्च] — @deva[इञ्] comes after the @deva[बहु]-class:

@deva[बहु] + @deva[इञ्] → @deva[बाहविः] "descendant of Bahu"`,

  '41097': `@deva[सुधातृणामकङ्] — After @deva[सुधातृ], @deva[इञ्] comes and @deva[अकङ्] substitutes for final @deva[ऋ]:

@deva[सुधातृ] → @deva[सौधातकिः] "descendant of Sudhātṛ"`,

  '41098': `@deva[कुञ्जादिभ्यश्च्फञ्] — @deva[च्फञ्] (= @deva[आयन]) comes after the @deva[कुञ्ज]-class in gotra sense:

@deva[कुञ्ज] + @deva[च्फञ्] → @deva[कौञ्जायनः] "descendant of Kuñja"`,

  '41099': `@deva[नडादिभ्यः फक्] — @deva[फक्] (= @deva[आयन]) comes after the @deva[नड]-class:

@deva[नड] + @deva[फक्] → @deva[नाडायनः] "descendant of Naḍa"
@deva[चर] + @deva[फक्] → @deva[चारायणः]`,

  '41100': `@deva[हरितादिभ्योऽञः फक्] — @deva[फक्] comes after the @deva[हरित]-class (a subdivision of @deva[बिद]-class which takes @deva[अञ्] by @ref[4.1.104]):

@deva[हरित] + @deva[अञ्] → @deva[हारितः] (gotra)
@deva[हारित] + @deva[फक्] → @deva[हारितायनः] (yuvan)`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.1.51-100). Total: ${Object.keys(vasu).length}`);
