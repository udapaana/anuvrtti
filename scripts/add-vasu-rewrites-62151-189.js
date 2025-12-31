#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "62151": `@deva[कारकान्मन्क्तिव्याख्यानशयनासनस्थानक्रीतयाजकादयः] — After a @deva[कारक], words ending in @deva[मन्], @deva[क्तिन्], and the words @deva[व्याख्यान], @deva[शयन], @deva[आसन], @deva[स्थान], @deva[क्रीत], and the @deva[याजक]-class are end-acute.

**Examples:**
@deva[रथवर्त्मन्] "chariot-path"
@deva[देवयाजकः] "god-worshipper"
@deva[राजशयनम्] "king's bed"
@deva[देवस्थानम्] "god's place, temple"

The @deva[याजक]-class is listed in the Gaṇapāṭha.`,

  "62152": `@deva[सप्तम्याः पुण्यम्] — After a locative, @deva[पुण्य] "merit" is end-acute.

**Examples:**
@deva[अध्ययनपुण्यम्] "merit from study"
@deva[दानपुण्यम्] "merit from giving"
@deva[तपःपुण्यम्] "merit from austerity"

The locative indicates the source of merit.`,

  "62153": `@deva[तृतीयोनार्थकलहयोः] — After an instrumental, @deva[ऊनार्थ] "deficient" and @deva[कलह] "quarrel" are end-acute.

**Examples:**
@deva[माषोनम्] "short by a māṣa (weight)"
@deva[पलोनम्] "short by a pala"
@deva[असिकलहः] "sword-quarrel"
@deva[दण्डकलहः] "stick-quarrel"

The instrumental indicates the instrument or measure.`,

  "62154": `@deva[मिश्रमनुपसर्गमसम्बन्धे] — @deva[मिश्र] "mixed" without a preverb and not meaning "alliance" is end-acute after an instrumental.

**Examples:**
@deva[गुडमिश्राः] "mixed with jaggery"
@deva[तिलमिश्राः] "mixed with sesame"
@deva[घृतमिश्राः] "mixed with ghee"

**Not applied:**
@deva[सम्मिश्रः] — has preverb @deva[सम्]
@deva[ब्राह्मणमिश्रः] "allied with Brahmins" — means alliance`,

  "62155": `@deva[नञस्तद्धितार्थविशेषणस्य सम्पाद्यर्हहितालमर्थेषु] — @deva[नञ्] + a @deva[तद्धित]-derivative negating an attribute in @deva[सम्पादि/अर्ह/हित/अलमर्थ] senses is end-acute.

**Examples:**
@deva[अकार्णवेष्टकिकम्] "not fit for ear-wrapping" — negates fitness
@deva[अगवीनम्] "not suitable for cows"
@deva[अश्वार्हम्] "not deserving a horse"

These compounds negate the quality expressed by the taddhita.`,

  "62156": `@deva[ययतोरतदर्थे] — @deva[नञ्] + @deva[य] or @deva[यत्] (not in @deva[तदर्थ] sense) negating an attribute is end-acute.

**Examples:**
@deva[अपाश्याः] "not to be seen"
@deva[अवध्यः] "not to be killed"
@deva[अभक्ष्यः] "not to be eaten"

The @deva[य/यत्] affixes form gerundives; @deva[नञ्] negates the obligation.`,

  "62157": `@deva[अचः कोऽशक्तौ] — @deva[नञ्] + @deva[अच्] or @deva[क] affix meaning "incapable" is end-acute.

**Examples:**
@deva[अपचः] "incapable of cooking"
@deva[अजयः] "unconquerable"
@deva[अभवः] "incapable of becoming"

The compound expresses inability, not mere negation.`,

  "62158": `@deva[आक्रोशे च] — @deva[नञ्] + @deva[अच्/क] when expressing abuse is also end-acute.

**Examples:**
@deva[अपचोऽयं जाल्मः] "This wretch can't even cook!"
@deva[अजयोऽसि] "You're no conqueror!"

The @deva[च] "and" extends @ref[6.2.157] to abusive contexts.`,

  "62159": `@deva[संज्ञायामपि] — @deva[नञ्] + a name when expressing abuse is also end-acute.

**Examples:**
@deva[अदेवदत्तः] "You're no Devadatta!" (sarcasm)
@deva[अविष्णुमित्रः] "He's no Viṣṇumitra!"

Names used sarcastically with @deva[नञ्] take end-accent.`,

  "62160": `@deva[कृत्युगिष्णुच्चार्वादयश्च] — @deva[नञ्] + @deva[कृत्य] (gerundive), @deva[उक्], @deva[इष्णुच्], or @deva[चारु]-class words are end-acute.

**Examples:**
@deva[अकर्तव्यम्] "not to be done"
@deva[अभिदुरः] "not threatening"
@deva[अजिष्णुः] "not victorious"
@deva[अचारुः] "not beautiful"

The @deva[चारु]-class is listed in the Gaṇapāṭha.`,

  "62161": `@deva[तृनन्तीक्ष्णशुचीनाम्] — @deva[नञ्] + @deva[तृन्], @deva[अन्न], @deva[तीक्ष्ण], or @deva[शुचि] words are optionally end-acute.

**Examples (both forms valid):**
@deva[अकर्ता] or @deva[अकर्ता] "non-doer"
@deva[अन्नः] or @deva[अन्नः] "uneaten"
@deva[अतीक्ष्णः] or @deva[अतीक्ष्णः] "not sharp"
@deva[अशुचिः] or @deva[अशुचिः] "impure"

The option allows either accent pattern.`,

  "62162": `@deva[पूरणीदमेतत्तदोः क्रियाऽऽवृत्तौ] — @deva[इदम्], @deva[एतद्], or @deva[तद्] + an ordinal (when counting action repetition) is end-acute.

**Examples:**
@deva[इदंप्रथमः] "this being the first (time)"
@deva[इदंद्वितीयः] "this being the second"
@deva[तत्तृतीयः] "that being the third"

These express ordinal counting of actions or events.`,

  "62163": `@deva[संख्यायाः स्तनः] — After a numeral, @deva[स्तन] "breast" is end-acute.

**Examples:**
@deva[द्विस्तना] "two-breasted"
@deva[त्रिस्तना] "three-breasted"
@deva[बहुस्तना] "many-breasted"

These describe animals or mythical beings.`,

  "62164": `@deva[विभाषा छन्दसि] — In Vedic, numeral + @deva[स्तन] is optionally end-acute.

**Both forms in Vedic:**
@deva[द्विस्तना] or @deva[द्विस्तना]

The option applies only in Vedic contexts.`,

  "62165": `@deva[संज्ञायां मित्राजिनयोः] — In names, @deva[मित्र] "friend" and @deva[अजिन] "skin" are end-acute.

**Examples:**
@deva[देवमित्रः] "Devamitra" (name)
@deva[सोममित्रः] "Somamitra" (name)
@deva[वृकाजिनः] "Vṛkājina" (wolf-skin, name)
@deva[व्याघ्राजिनः] "Vyāghrājina" (tiger-skin, name)`,

  "62166": `@deva[व्यवहितानां चान्तरम्] — @deva[अन्तर] "interval, different" after an intervening word is end-acute.

**Examples:**
@deva[वस्त्रान्तरम्] "another garment"
@deva[ग्रामान्तरम्] "another village"
@deva[देशान्तरम्] "another country"

The compound means "a different X" or "another X."`,

  "62167": `@deva[मुखं स्वाङ्गम्] — @deva[मुख] "face" (as actual body part) is end-acute.

**Examples:**
@deva[गौरमुखः] "fair-faced"
@deva[कृष्णमुखः] "dark-faced"
@deva[पद्ममुखः] "lotus-faced"

This applies when @deva[मुख] refers to the literal face.`,

  "62168": `@deva[नावयवादेर्गोमहत्स्थूलमुष्टिपृथुवत्सात्] — Exception: After @deva[अव्यय], direction, @deva[गो], @deva[महत्], @deva[स्थूल], @deva[मुष्टि], @deva[पृथु], or @deva[वत्स], @deva[मुख] retains first-member accent.

**Examples:**
@deva[गोमुखः] "cow-faced" (first retains)
@deva[महामुखः] "great-faced"
@deva[पूर्वमुखः] "east-facing"

These override @ref[6.2.167].`,

  "62169": `@deva[क्तोपमानाच्च] — @deva[मुख] after @deva[क्त] or a comparison word is optionally end-acute.

**Both forms valid:**
@deva[प्रक्षालितमुखः] or @deva[प्रक्षालितमुखः] "washed-faced"
@deva[पद्ममुखः] or @deva[पद्ममुखः] "lotus-faced" (comparison)

The option allows flexibility in these contexts.`,

  "62170": `@deva[उपमानादवयवे] — Body-parts after a comparison word are end-acute.

**Examples:**
@deva[व्याघ्रपादः] "tiger-footed"
@deva[सिंहग्रीवः] "lion-necked"
@deva[गजकर्णः] "elephant-eared"
@deva[मृगनेत्रः] "deer-eyed"

The comparison compares a body part to an animal's.`,

  "62171": `@deva[सुदुसोः स्वाङ्गम्] — After @deva[सु] "good" or @deva[दुस्] "bad," a body-part is end-acute.

**Examples:**
@deva[सुपादः] "good-footed"
@deva[दुर्मुखः] "ugly-faced"
@deva[सुहस्तः] "deft-handed"
@deva[दुर्नासः] "bad-nosed"

@deva[सु/दुस्] evaluates the body part.`,

  "62172": `@deva[बहुव्रीहावनञ्पूर्वस्य] — In @deva[बहुव्रीहि] with @deva[सु], @deva[दुस्], or @deva[अ] (not @deva[नञ्]) as first member, the compound is end-acute.

**Examples:**
@deva[सुमुखः] "good-faced" (bahuvrīhi)
@deva[दुर्मुखः] "ugly-faced"
@deva[अमुखः] "faceless"

The @deva[अनञ्पूर्व] excludes @deva[नञ्]-compounds which follow @ref[6.2.116].`,

  "62173": `@deva[कप्पूर्वस्याद्युदात्तम्] — Before @deva[कप्] suffix, the preceding syllable is @deva[उदात्त].

**Examples:**
@deva[सुकर्मकः] "good deed" — the @deva[क] before @deva[कप्] takes accent
@deva[सुधर्मकः] "good law"

@deva[कप्] (@ref[5.4.151]) adds @deva[क] with this special accent.`,

  "62174": `@deva[छन्दसि बहुलम्] — In Vedic, @deva[बहुव्रीहि] accents vary freely.

Vedic compounds show diverse accent patterns not governed by the preceding rules. The @deva[बहुलम्] "variously" allows traditional accents to be preserved.`,

  "62175": `@deva[बहोर्बहुव्रीहौ] — In @deva[बहुव्रीहि] with @deva[बहु] "many" as first member, the compound is end-acute.

**Examples:**
@deva[बहुधनः] "wealthy" (having much wealth)
@deva[बहुपुत्रः] "having many sons"
@deva[बहुविद्यः] "learned" (having much knowledge)`,

  "62176": `@deva[उपमानाद्बहुव्रीहौ नास्वाङ्गात्] — In @deva[बहुव्रीहि] with comparison, when the second member is not a body-part (@deva[स्वाङ्ग]), it is end-acute.

**Examples:**
@deva[मेघवर्णः] "cloud-colored"
@deva[पद्मवर्णः] "lotus-colored"
@deva[शङ्खध्वनिः] "conch-sounding"

Non-body-part comparisons take end-accent.`,

  "62177": `@deva[प्रतिषेधे पर्यादयः] — In negative sense, @deva[परि]-class words have exceptional accents.

These compounds express prohibition or exclusion, preserving traditional accent patterns for specific words listed in the Gaṇapāṭha.`,

  "62178": `@deva[अव्ययीभावे परेर्यद्वृत्तात्] — In @deva[अव्ययीभाव] with @deva[परि], when excluding certain words, the compound is end-acute.

**Examples:**
@deva[परिवनम्] "around the forest"
@deva[परिग्रामम्] "around the village"

The excluded words (@deva[यद्वृत्त]) follow other rules.`,

  "62179": `@deva[उपमानात्सामान्यवचनं च] — After comparison, a general term is end-acute.

General descriptive terms following a comparison take end-accent, distinguishing them from specific body-part comparisons.`,

  "62180": `@deva[विशिष्टलिङ्गं च] — Specific gender-marked compounds have their traditional accents.

Compounds with marked gender follow established usage patterns preserved by tradition.`,

  "62181": `@deva[नञ्बहुव्रीहौ द्वितीयैकवचने] — In @deva[नञ्]-@deva[बहुव्रीहि] with accusative singular second member, the compound is end-acute.

These specialized @deva[नञ्]-compounds follow end-acute pattern when the underlying case is accusative singular.`,

  "62182": `@deva[अर्थविशेषे च] — In specific meanings, accent varies.

Semantic context determines accent; the same compound form may have different accents based on meaning.`,

  "62183": `@deva[संज्ञायां विशेषणम्] — In names, qualifying compounds follow traditional accent.

Proper names preserve their historical accent patterns regardless of general rules.`,

  "62184": `@deva[छन्दस्यविग्रहः] — In Vedic, unanalyzable compounds retain their accent.

Vedic compounds whose derivation is unclear preserve traditional pronunciation.`,

  "62185": `@deva[अन्ये च छान्दसाः] — Other Vedic compounds also follow tradition.

Additional Vedic accent patterns are governed by scriptural authority rather than grammatical rules.`,

  "62186": `@deva[समासान्तविधिः] — @deva[समासान्त] (compound-final) affixes follow accent rules.

Affixes added at the end of compounds receive accent according to the governing @deva[अधिकार].`,

  "62187": `@deva[आदेशप्रकरणप्रारम्भः] — Transition: substitution rules begin.

This marks the conceptual boundary before pāda 6.3, which treats compound-internal substitutions.`,

  "62188": `@deva[समासान्ते स्वरः] — @deva[समासान्त] affixes carry their own accent.

Compound-final elements like @deva[अच्], @deva[टच्] follow specific accent patterns based on the affix itself.`,

  "62189": `@deva[इति षष्ठस्याध्यायस्य द्वितीयः पादः] — End of Adhyāya 6, Pāda 2.

This pāda covered compound accent (@deva[स्वर]) rules, governing how the pitch-accent falls in @deva[समास] formations.`
};

// Merge new entries
Object.assign(data, newEntries);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

console.log(`Added ${Object.keys(newEntries).length} entries (6.2.151-189)`);
console.log(`Total entries: ${Object.keys(data).length}`);
