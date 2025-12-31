import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '41101': `@deva[यञिञोश्च] — @deva[फक्] comes after stems ending in @deva[यञ्] or @deva[इञ्] (functioning as @deva[युवन्] affix since added to gotra forms):

@deva[गार्ग्य] (from @deva[यञ्]) + @deva[फक्] → @deva[गार्ग्यायणः] "young Gārgya"`,

  '41102': `@deva[शरद्वत्शुनकदर्भाद्भार्गवाग्रायणयोः] — @deva[फक्] comes after @deva[शरद्वत्], @deva[शुनक], @deva[दर्भा] when denoting descendants of @deva[भृगु], @deva[वत्स], and @deva[अग्रायण]:

@deva[शारद्वतायनः] = @deva[भार्गवः]
@deva[शौनकायनः] = @deva[वात्सः]`,

  '41103': `@deva[द्रोणपर्वतजीवन्तात् वा] — @deva[फक्] optionally comes after @deva[द्रोण], @deva[पर्वत], @deva[जीवन्त]:

@deva[द्रौणायनः] or @deva[द्रौणिः]
@deva[पार्वतायनः] or @deva[पार्वतिः]
@deva[जैवन्तायनः] or @deva[जैवन्तिः]`,

  '41104': `@deva[बिदादिभ्योऽञ्] — @deva[अञ्] comes after the @deva[बिद]-class for remote (gotra) descendants; for non-ṛṣi words, @deva[अञ्] denotes immediate descendant:

@deva[बिद] + @deva[अञ्] → @deva[बैदः] "descendant of Bida"
@deva[पुत्र] + @deva[अञ्] → @deva[पौत्रः] "grandson" (immediate)`,

  '41105': `@deva[गर्गादिभ्यो यञ्] — @deva[यञ्] (= @deva[य] with vṛddhi) comes after the @deva[गर्ग]-class for gotra descendants:

@deva[गर्ग] + @deva[यञ्] → @deva[गार्ग्यः] "Gārgya"
@deva[वत्स] + @deva[यञ्] → @deva[वात्स्यः] "Vātsya"`,

  '41106': `@deva[मधुबभ्रोर्ब्राह्मणकौशिकयोः] — @deva[यञ्] comes after @deva[मधु] and @deva[बभ्रु] when meaning @deva[ब्राह्मण] and @deva[कौशिक] respectively:

@deva[माध्व्यः] = @deva[ब्राह्मणः]
@deva[बाभ्रव्यः] = @deva[कौशिकः]

Otherwise: @deva[माधवः] "son of Madhu"`,

  '41107': `@deva[कपिबोधाद्भ्याम् आङ्गिरसे] — @deva[यञ्] comes after @deva[कपि] and @deva[बोध] when the specific Āṅgirasa lineage is meant:

@deva[काप्यः] = @deva[आङ्गिरसः]
@deva[बौध्यः] = @deva[आङ्गिरसः]

Otherwise: @deva[कापिः], @deva[बौधिः]`,

  '41108': `@deva[वतण्डादाङ्गिरसे] — @deva[यञ्] comes after @deva[वतण्ड] when meaning an Āṅgirasa descendant:

@deva[वातण्ड्यः] = @deva[आङ्गिरसः]
Otherwise: @deva[वातण्डः]`,

  '41109': `@deva[स्त्रियां च] — @deva[यञ्] is elided by @deva[लुक्] in the feminine after @deva[वतण्डी]:

@deva[वातण्ड्य] + @deva[ङीन्] (@ref[4.1.73]) → @deva[वातण्डी] (with @deva[यञ्] elided)`,

  '41110': `@deva[अश्वादिभ्यः फञ्] — @deva[फञ्] (= @deva[आयन]) comes after the @deva[अश्व]-class:

@deva[अश्व] + @deva[फञ्] → @deva[आश्वायनः] "descendant of Aśva"`,

  '41111': `@deva[भर्गात् त्रैगर्ते] — @deva[फञ्] comes after @deva[भर्ग] when meaning a Traigarta:

@deva[भर्गायणः] = @deva[त्रैगर्तः]
Otherwise: @deva[भार्गिः]`,

  '41112': `@deva[शिवादिभ्योऽण्] — @deva[अण्] comes after the @deva[शिव]-class (generic patronymics, not gotra-specific):

@deva[शिव] + @deva[अण्] → @deva[शैवः] "descendant of Śiva"`,

  '41113': `@deva[नदीनां च स्त्रीतुल्यत्वात्] — @deva[अण्] comes after river names and women's names that are not @deva[वृद्ध] and are used as proper names:

@deva[गङ्गा] + @deva[अण्] → @deva[गाङ्गः] "son of Gaṅgā"
@deva[यमुना] → @deva[यामुनः] "son of Yamunā"`,

  '41114': `@deva[ऋष्यन्धकवृष्णिकुरुभ्यश्च] — @deva[अण्] comes after ṛṣi names and names from @deva[अन्धक], @deva[वृष्णि], @deva[कुरु] families:

@deva[वसिष्ठ] → @deva[वासिष्ठः]
@deva[विश्वामित्र] → @deva[वैश्वामित्रः]`,

  '41115': `@deva[संख्यापूर्वो द्वन्द्वश्च...] — @deva[अण्] comes after @deva[मातृ] preceded by a numeral or by @deva[सम्]/@deva[भद्र]; @deva[उ] substitutes for final @deva[ऋ]:

@deva[द्विमातृ] → @deva[द्वैमातुरः] "son of two mothers"
@deva[सुमातृ] → @deva[सौमातुरः]`,

  '41116': `@deva[कन्यायाः कनीनच्] — @deva[अण्] comes after @deva[कन्या] with substitute @deva[कनीन]:

@deva[कन्या] → @deva[कानीनः] "son of a virgin" (e.g., Karṇa, Vyāsa)`,

  '41117': `@deva[विकर्णशुङ्गच्छगलाद् वात्सभारद्वाजात्रेयेषु] — @deva[अण्] comes after @deva[विकर्ण], @deva[शुङ्ग], @deva[छगल] when meaning Vātsa, Bhāradvāja, Ātreya:

@deva[वैकर्णः] = @deva[वात्सः]
@deva[शौङ्गः] = @deva[भारद्वाजः]
@deva[छागलः] = @deva[आत्रेयः]`,

  '41118': `@deva[पीलाया वा] — @deva[अण्] optionally comes after @deva[पीला]:

@deva[पैलः] or @deva[पैलिः] "descendant of Pīlā"`,

  '41119': `@deva[मण्डूकाद् वा ढक्] — @deva[ढक्] optionally comes after @deva[मण्डूक]:

@deva[माण्डूकेयः] (via @deva[ढक्])
@deva[माण्डूकः] (via @deva[अण्])
@deva[माण्डूकिः] (via @deva[इञ्])`,

  '41120': `@deva[स्त्रीभ्यो ढक्] — @deva[ढक्] (= @deva[एय]) comes after feminine stems:

@deva[विनता] + @deva[ढक्] → @deva[वैनतेयः] "son of Vinatā" (Garuḍa)
@deva[कौन्ती] → @deva[कौन्तेयः] "son of Kuntī" (Arjuna)`,

  '41121': `@deva[द्व्यचः] — @deva[ढक्] comes after disyllabic feminine stems:

@deva[दत्ता] → @deva[दात्तेयः] "son of Dattā"
@deva[गोपी] → @deva[गौपेयः] "son of Gopī"`,

  '41122': `@deva[इञन्ताद्द्व्यचोऽन्यतरस्याम्] — @deva[ढक्] comes after disyllabic stems ending in short @deva[इ] (but NOT after @deva[इञ्]-ending patronymics):

@deva[मति] → @deva[मातेयः] "son of Mati"
@deva[गिरि] → @deva[गैरेयः]`,

  '41123': `@deva[शुभ्रादिभ्यश्च] — @deva[ढक्] comes after the @deva[शुभ्र]-class:

@deva[शुभ्र] + @deva[ढक्] → @deva[शौभ्रेयः]`,

  '41124': `@deva[विकर्णकुषीतयोः काश्यपे] — @deva[ढक्] comes after @deva[विकर्ण] and @deva[कुषीत] when meaning Kāśyapa:

@deva[वैकर्णेयः] = @deva[काश्यपः]
@deva[कौषीतकेयः] = @deva[काश्यपः]`,

  '41125': `@deva[भ्रुवो वुगागमश्च] — @deva[ढक्] comes after @deva[भ्रू] with augment @deva[वुक्]:

@deva[भ्रू] + @deva[वुक्] + @deva[ढक्] → @deva[भ्रौवेयः] "son of Bhrū"`,

  '41126': `@deva[कल्याण्यादेरिनङ्] — @deva[ढक्] comes after the @deva[कल्याणी]-class with substitute @deva[इनङ्] for the final:

@deva[कल्याणी] → @deva[कल्याणिन्] + @deva[ढक्] → @deva[कालयानिनेयः]`,

  '41127': `@deva[कुलटाया वा] — @deva[इनङ्] optionally substitutes before @deva[ढक्] after @deva[कुलटा] "unchaste woman":

@deva[कौलटिनेयः] or @deva[कौलटेयः]`,

  '41128': `@deva[चटकायाः ऐरक्] — @deva[ऐरक्] comes after @deva[चटका]:

@deva[चटका] + @deva[ऐरक्] → @deva[चाटकैरः] "son of Caṭakā"`,

  '41129': `@deva[गोधायाः ढ्रक्] — @deva[ढ्रक्] (= @deva[एर]) comes after @deva[गोधा]:

@deva[गोधा] + @deva[ढ्रक्] → @deva[गौधेरः] "son of Godhā"`,

  '41130': `@deva[उदीचाम् आरक्] — According to Northern grammarians, @deva[आरक्] comes after @deva[गोधा]:

@deva[गौधारः] (Northern)`,

  '41131': `@deva[क्षुद्राभ्यो ऽन्यतरस्याम्] — @deva[ढ्रक्] optionally comes after feminine words denoting mean/lowly objects:

@deva[दासी] → @deva[दासेरः] or @deva[दासेयः]`,

  '41132': `@deva[पितृष्वसुश्छण्] — @deva[छण्] (= @deva[ईय]) comes after @deva[पितृष्वसृ] "father's sister":

@deva[पितृष्वसृ] + @deva[छण्] → @deva[पैतृष्वस्रीयः] "son of paternal aunt"`,

  '41133': `@deva[ढकि लोपश्च] — The final vowel of @deva[पितृष्वसृ] is elided when @deva[ढक्] follows:

@deva[पितृष्वस्] + @deva[ढक्] → @deva[पैतृष्वसेयः]`,

  '41134': `@deva[मातृष्वसुश्च] — @deva[छण्] and final elision before @deva[ढक्] also apply to @deva[मातृष्वसृ] "mother's sister":

@deva[मातृष्वस्रीयः] or @deva[मातृष्वसेयः]`,

  '41135': `@deva[पशुपतिभ्यां ढञ्] — @deva[ढञ्] comes after words denoting quadrupeds:

@deva[कमण्डलु] + @deva[ढञ्] → @deva[कामण्डलेयः]`,

  '41136': `@deva[गृष्ट्यादिभ्यश्च] — @deva[ढञ्] comes after the @deva[गृष्टि]-class:

@deva[गृष्टि] + @deva[ढञ्] → @deva[गार्ष्टेयः]`,

  '41137': `@deva[राजश्वशुराभ्यां यत्] — @deva[यत्] comes after @deva[राजन्] and @deva[श्वशुर]:

@deva[राजन्] + @deva[यत्] → @deva[राजन्यः] "Kṣatriya" (class name, not "king's son")
@deva[श्वशुर] → @deva[श्वशुर्यः] "brother-in-law"`,

  '41138': `@deva[क्षत्राद् घः] — @deva[घ] comes after @deva[क्षत्र]:

@deva[क्षत्र] + @deva[घ] → @deva[क्षत्रियः] "Kṣatriya"

@note[This @deva[घ] (= @deva[इय]) is NOT the taddhita @deva[घ] of @ref[4.2.80].]`,

  '41139': `@deva[कुलात् खञ्] — @deva[ख] (= @deva[ईन]) comes after @deva[कुल] and compounds ending in @deva[कुल]:

@deva[कुल] + @deva[ख] → @deva[कुलीनः] "of good family"
@deva[महाकुल] → @deva[महाकुलीनः]`,

  '41140': `@deva[अपूर्वपदाद् यत् ढकञ् च वा] — @deva[यत्] and @deva[ढकञ्] optionally come after @deva[कुल] when not preceded by another stem:

@deva[कुल्यः] or @deva[कौलेयः] (= @deva[कुलीनः])`,

  '41141': `@deva[महाकुलादञ्खञौ च] — @deva[अञ्] and @deva[खञ्] optionally come after @deva[महाकुल]:

@deva[माहाकुलः] (via @deva[अञ्])
@deva[माहाकुलीनः] (via @deva[खञ्])
@deva[महाकुलीनः] (via @deva[ख])`,

  '41142': `@deva[दुष्कुलाद् वा] — @deva[ढक्] optionally comes after @deva[दुष्कुल]:

@deva[दौष्कुलेयः] or @deva[दुष्कुलीनः]`,

  '41143': `@deva[स्वसुश्छः] — @deva[छ] (= @deva[ईय]) comes after @deva[स्वसृ] "sister":

@deva[स्वसृ] + @deva[छ] → @deva[स्वस्रीयः] "sister's son"`,

  '41144': `@deva[भ्रातुर्व्यच्च] — @deva[व्यत्] (and @deva[छ]) comes after @deva[भ्रातृ]:

@deva[भ्रातृव्यः] or @deva[भ्रात्रीयः] "brother's son"`,

  '41145': `@deva[व्यन् सपत्ने] — @deva[व्यन्] (not @deva[व्यत्]) comes after @deva[भ्रातृ] when meaning "enemy":

@deva[भ्रातृव्यः] "enemy, rival"

@note[Accent differs: @deva[व्यन्] per @ref[6.1.185], @deva[व्यत्] per @ref[6.1.197].]`,

  '41146': `@deva[रेवत्यादिभ्यष्ठक्] — @deva[ठक्] (= @deva[इक]) comes after the @deva[रेवती]-class:

@deva[रेवती] + @deva[ठक्] → @deva[रैवतिकः] "son of Revatī"`,

  '41147': `@deva[गोत्रस्त्रियाः कुत्सने ण च] — @deva[ण] (and @deva[ठक्]) comes after feminine gotra words when contempt is expressed:

@deva[गार्गी] + @deva[ण] → @deva[गार्गः] (contemptuous)

@note[Used when father is unknown.]`,

  '41148': `@deva[सौवीरेषु बहुलम्] — @deva[ठक्] variously comes after @deva[वृद्ध]-words denoting Sauvīra gotras:

@deva[भागवित्तिः], @deva[तार्णबिन्दवः], @deva[आकशापेयः]`,

  '41149': `@deva[फिञन्ताच्छः] — @deva[छ] (and @deva[ठक्]) comes after @deva[फिञ्]-ending stems denoting Sauvīra gotra:

@deva[वार्ष्यायणीयः] (via @deva[छ])`,

  '41150': `@deva[फाण्टाहृतिमिमतयोश्च णः] — @deva[ण] and @deva[फिञ्] come after @deva[फाण्टाहृति] and @deva[मिमत] for Sauvīra descendants:

@deva[फाण्टाहृतः] (via @deva[ण])
@deva[मैमतायनिः] (via @deva[फिञ्])`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (4.1.101-150). Total: ${Object.keys(vasu).length}`);
