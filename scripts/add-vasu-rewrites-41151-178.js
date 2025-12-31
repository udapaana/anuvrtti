import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '41151': `@deva[कुर्वादिभ्यो ण्यः] — @deva[ण्य] comes after the @deva[कुरु]-class:

@deva[कुरु] + @deva[ण्य] → @deva[कौरव्यः] "descendant of Kuru"

@note[Also formed via @ref[4.1.172]; both paths yield same result.]`,

  '41152': `@deva[सेनालक्षणकारिभ्यश्च] — @deva[ण्य] comes after stems ending in @deva[सेना], after @deva[लक्षण], and after artisan words:

@deva[हरिषेण] → @deva[हारिषेण्यः]
@deva[लक्षण] → @deva[लाक्षण्यः]
@deva[तन्तुवाय] "weaver" → @deva[तान्तुवाय्यः]`,

  '41153': `@deva[उदीचाम् इञ्] — According to Northern grammarians, @deva[इञ्] comes after @deva[सेना]-ending, @deva[लक्षण], and artisan words:

@deva[हारिषेणिः], @deva[लाक्षणिः], @deva[तान्तुवायिः]`,

  '41154': `@deva[तिकादिभ्यः फिञ्] — @deva[फिञ्] (= @deva[आयनि]) comes after the @deva[तिक]-class:

@deva[तिक] + @deva[फिञ्] → @deva[तैकायनिः]
@deva[कैतव] → @deva[कैतवायनिः]
@deva[कौरव्य] → @deva[कौरव्यायणिः]`,

  '41155': `@deva[कौसल्यकार्मार्ययोश्च] — @deva[फिञ्] comes after @deva[कौसल्य] and @deva[कार्मार्य]:

@deva[कौसल्यायनिः] "descendant of Kosala lineage"
@deva[कार्मार्यायणिः]

@note[Means descendant of @deva[कोसल]/@deva[कर्मार], not of @deva[कौसल्य]/@deva[कार्मार्य].]`,

  '41156': `@deva[द्व्यचोऽणः] — @deva[फिञ्] comes after disyllabic @deva[अण्]-ending stems:

@deva[कर्त्र] (from @deva[कर्तृ] + @deva[अण्]) → @deva[कार्त्रायणिः]
@deva[हर्त्र] → @deva[हार्त्रायणिः]`,

  '41157': `@deva[वृद्धे उदीचाम्] — According to Northern grammarians, @deva[फिञ्] comes after @deva[वृद्धि]-initial non-gotra words:

@deva[आम्रगुप्त] → @deva[आम्रगुप्तायनिः]
@deva[ग्रामरक्ष] → @deva[ग्रामरक्षायणिः]`,

  '41158': `@deva[वाकिनादिभ्यः कुक्] — Augment @deva[कुक्] (= @deva[क्]) is added to the @deva[वाकिन]-class before @deva[फिञ्]:

@deva[वाकिन] + @deva[कुक्] + @deva[फिञ्] → @deva[वाकिनकायनिः]`,

  '41159': `@deva[पुत्रान्ताच्च वा] — @deva[कुक्] optionally comes after @deva[पुत्र]-ending stems before @deva[फिञ्]:

@deva[देवपुत्रकायनिः] or @deva[दैवपुत्रायणिः]`,

  '41160': `@deva[अवृद्धाद् बहुलम् प्राचाम्] — According to Eastern grammarians, @deva[फिञ्] variously comes after non-vṛddhi-initial stems:

@deva[ग्लुचुक] → @deva[ग्लुचुकायनिः] or @deva[ग्लौचुकिः]
@deva[अहिचुम्बक] → @deva[अहिचुम्बकायनिः] or @deva[आहिचुम्बिः]`,

  '41161': `@deva[मनोर् अञ्यतौ च षुक् च] — @deva[अञ्] and @deva[यत्] come after @deva[मनु] with augment @deva[षुक्], when the result denotes a @deva[जाति] (class name):

@deva[मनु] + @deva[षुक्] + @deva[अञ्] → @deva[मानुषः] "human"
@deva[मनु] + @deva[षुक्] + @deva[यत्] → @deva[मनुष्यः] "human"`,

  '41162': `@deva[अपत्यं पौत्रप्रभृति गोत्रम्] — A descendant from grandson onward is called @deva[गोत्र]:

@deva[गर्ग] → @deva[गार्गिः] "son of Garga"
@deva[गार्गिः] → @deva[गार्ग्यः] "grandson+ of Garga" (gotra)

@note[The gotra affix applies at grandson level and beyond.]`,

  '41163': `@deva[जीवति तु वंश्ये युवा] — When a @deva[वंश्य] (lineal ancestor — father, grandfather, etc.) is alive, the descendant from grandson onward is called @deva[युवन्]:

@deva[गार्ग्य] + @deva[फिञ्] → @deva[गार्ग्यायणिः] "young Gārgya" (while elder lives)`,

  '41164': `@deva[ज्येष्ठे च] — When an elder brother is alive, the younger brother (being a grandson+ descendant) is also called @deva[युवन्]:

Younger brother = @deva[गार्ग्यायणिः] while elder brother @deva[गार्ग्यः] lives`,

  '41165': `@deva[सपिण्डे स्थविरतरे वा] — When a more senior @deva[सपिण्ड] (relative within 7 degrees, other than brother) is alive, @deva[युवन्] designation is optional:

@deva[गार्ग्यायणिः] or @deva[गार्ग्यः] (either acceptable)`,

  '41166': `@deva[वृद्धस्य च पूजायाम्] — @deva[गोत्र] may optionally be called @deva[युवन्] when showing respect:

@deva[तत्र भवान् गार्ग्यायणः] or @deva[गार्ग्यः] "the venerable Gārgya"`,

  '41167': `@deva[युवा च कुत्सायाम्] — @deva[युवन्] may optionally be called @deva[गोत्र] when expressing contempt:

@deva[गार्ग्यो जाल्मः] or @deva[गार्ग्यायणो जाल्मः] "that wretched Gārgya"`,

  '41168': `@deva[जनपदशब्दात् क्षत्रियादञ्] — @deva[अञ्] comes after country-names that also denote Kṣatriya tribes:

@deva[पञ्चाल] → @deva[पाञ्चालः] "Pāñcāla king/prince"
@deva[विदेह] → @deva[वैदेहः]
@deva[इक्ष्वाकु] → @deva[ऐक्ष्वाकः]`,

  '41169': `@deva[साल्वेयगान्धारिभ्यां च] — @deva[अञ्] comes after @deva[साल्वेय] and @deva[गान्धारि]:

@deva[सालवेयः] "Sālveya prince"
@deva[गान्धारिः] "Gāndhāri prince"

@note[These take @deva[अञ्] not @deva[ञ्यङ्] despite vṛddhi.]`,

  '41170': `@deva[द्व्यचो ऽतः...अण्] — @deva[अण्] comes after disyllabic country-names and after @deva[मगध], @deva[कलिङ्ग], @deva[सूरमस] (as Kṣatriya names):

@deva[अङ्ग] → @deva[आङ्गः]
@deva[वङ्ग] → @deva[वाङ्गः]
@deva[मगध] → @deva[मागधः]
@deva[कलिङ्ग] → @deva[कालिङ्गः]`,

  '41171': `@deva[वृद्धाच्छः...ञ्यङ्] — @deva[ञ्यङ्] comes after vṛddhi-initial words, @deva[इ]-final words, and @deva[कोसल]/@deva[अजाद] (as Kṣatriya country-names):

@deva[कोसल] → @deva[कौसल्यः]
@deva[अवन्ति] → @deva[आवन्त्यः]`,

  '41172': `@deva[कुरुनादिभ्यो ण्यः] — @deva[ण्य] comes after @deva[कुरु] and @deva[न]-initial words as Kṣatriya country-names:

@deva[कुरु] → @deva[कौरव्यः]
@deva[निषध] → @deva[नैषध्यः]`,

  '41173': `@deva[साल्वावयवात्...इञ्] — @deva[इञ्] comes after subdivisions of @deva[साल्व] country and after @deva[प्रत्यग्रथ], @deva[कलकूट], @deva[अश्मक]:

@deva[औदुम्बरिः], @deva[तिलखलिः] (Sālva subdivisions)
@deva[प्रात्यग्रथिः], @deva[कालकूटिः], @deva[आश्मकिः]`,

  '41174': `@deva[ते तद्राजाः] — The affixes taught in @ref[4.1.168]–@ref[4.1.173] are called @deva[तद्राज] "king thereof":

@deva[पाञ्चालः] means "king of Pañcāla" (not just descendant)

@note[These affixes carry royal/tribal meaning, not just patronymic.]`,

  '41175': `@deva[कम्बोजाल्लुक्] — The @deva[तद्राज] affix is elided by @deva[लुक्] after @deva[कम्बोज]:

@deva[कम्बोजः] "king of Kamboja" (no visible affix)`,

  '41176': `@deva[अवन्तिकुन्तिकुरुभ्यश्च] — The @deva[तद्राज] is elided in forming feminine names after @deva[अवन्ति], @deva[कुन्ति], @deva[कुरु]:

@deva[आवन्त्य] → @deva[अवन्ती] (fem)
@deva[कौन्त्य] → @deva[कुन्ती] (fem)
@deva[कौरव्य] → @deva[कुरूः] (fem, via @deva[ऊङ्])`,

  '41177': `@deva[अतः स्त्रियाम्] — In forming feminines from @deva[तद्राज] words ending in @deva[अ], the affix is elided by @deva[लुक्]:

m. @deva[शौरसेनः] → f. @deva[शूरसेनी]
m. @deva[माद्रः] → f. @deva[मद्री]`,

  '41178': `@deva[प्राच्यभर्गादियौधेयादिभ्यश्च न] — The @deva[तद्राज] affix is NOT elided in feminines for:
- Eastern Kṣatriyas
- @deva[भर्ग]-class
- @deva[यौधेय]-class

@deva[पाञ्चाली] (fem) — affix retained
@deva[यौधेयी] — affix retained`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.1.151-178). Total: ${Object.keys(vasu).length}`);
