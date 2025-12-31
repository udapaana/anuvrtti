import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.3: Vibhakti (case usage) - sūtras 1-25
const newEntries = {
  '23001': `The word @deva[अनभिहिते] "when not [otherwise] expressed" governs all following sūtras.

This @deva[अधिकार] means: case-affixes for @deva[कर्म], @deva[करण], etc. are applied only when the verb's ending does not already express that meaning.

Case-affixes supply what the verb leaves unexpressed.`,

  '23002': `When the object (@deva[कर्मन्]) is not denoted by the verb's termination, the 2nd case-affix (accusative) is used.

**Example:**
@deva[कटं करोति] "he makes the mat"

The verb ending @deva[ति] expresses the agent (third person singular), not the object. So @deva[कट] takes accusative.

@note[The terms @deva[द्वितीया] etc. are pre-Pāṇinian technical terms for case-affix groups.]`,

  '23003': `In Vedic (@deva[छन्दस्]), the object of @deva[हु] "sacrifice" takes EITHER the 3rd case (instrumental) OR the 2nd case (accusative).

**Examples:**
- @deva[यवाग्वा अग्निहोत्रं जुहोति] "he sacrifices the oblation with barley-gruel" (instrumental)
- @deva[यवाग्वं जुहोति] (accusative)

The @deva[च] "and" allows both cases.`,

  '23004': `A word governed by @deva[अन्तरा] or @deva[अन्तरेण] takes the 2nd case-affix (accusative).

Both are indeclinables (@deva[निपात]).

| Word | Meaning |
|------|---------|
| @deva[अन्तरा] | "between" |
| @deva[अन्तरेण] | "without" |

**Examples:**
@deva[अन्तरा त्वां च मां च] "between you and me"
@deva[अन्तरेण धर्मं न सुखम्] "without dharma, no happiness"

This debars the genitive.`,

  '23005': `After words denoting time or length, the 2nd case-affix is used when expressing FULL duration (@deva[अत्यन्तसंयोग]).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[मासमधीते] | "he studies for a [full] month" |
| @deva[संवत्सरं पुष्पाः] | "flowers [continuously] for a year" |
| @deva[क्रोशं कुटिला नदी] | "the river winds for a krosha" |`,

  '23006': `The 3rd case-affix (instrumental) is used after time/space words when expressing accomplishment of the objective (@deva[अपवर्ग]).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[मासेन अनुवाकोऽधीतः] | "the anuvāka was learned IN a month" |
| @deva[क्रोशेन अनुवाकोऽधीतः] | "learned while covering a krosha" |

@deva[अपवर्ग] = completion/finishing of an action within that span.`,

  '23007': `A word denoting time or place takes the 7th (locative) or 5th (ablative) case-affix when expressing the interval between two actions.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[द्व्यहे भोक्ता] / @deva[द्व्यहात् भोक्ता] | "will eat in/after two days" |

Context: @deva[अद्य भुक्त्वा देवदत्तो द्व्यहे भोक्ता] "Having eaten today, Devadatta will eat [again] in two days."`,

  '23008': `The 2nd case-affix (accusative) is used after a word governed by a @deva[कर्मप्रवचनीय] (@ref[1.4.83]).

**Examples:**
- @deva[शाकल्यस्य संहिताम् अनु प्रावर्षत्] "It rained upon [hearing] Śākalya's recitation"
- @deva[आगस्त्यम् अन्व् असिञ्चत् प्रजाः] "Offspring were poured after Agastya"`,

  '23009': `When governed by a @deva[कर्मप्रवचनीय] meaning "more than" (@ref[1.4.87]) or "lord of" (@ref[1.4.97]), the 7th case-affix (locative) is used.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[उपखार्यां द्रोणः] | "a droṇa is more than a khārī" |
| @deva[अधि ब्रह्मदत्ते पञ्चालाः] | "Brahmadatta rules over the Pañcālas" |`,

  '23010': `The 5th case-affix (ablative) is used when governed by the @deva[कर्मप्रवचनीय]s @deva[अप], @deva[आङ्], or @deva[परि].

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[अप पाटलिपुत्रात् वृष्टो देवः] | "It rained away from Pāṭaliputra" |
| @deva[आ पाटलिपुत्रात्] | "up to Pāṭaliputra" |
| @deva[परि पाटलिपुत्रात्] | "excluding Pāṭaliputra" |`,

  '23011': `The 5th case-affix (ablative) is used when governed by @deva[प्रति] in the sense of "substitute" or "exchange" (@ref[1.4.92]).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[अभिमन्युर् अर्जुनतः प्रति] | "Abhimanyu is Arjuna's representative" |
| @deva[माषान् अस्मै तिलेभ्यः प्रति यच्छति] | "He gives him māṣas in exchange for sesame" |`,

  '23012': `With verbs of motion, the destination takes the 2nd (accusative) OR 4th (dative) case-affix — when physical motion is meant and the object is not "road."

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[ग्रामं गच्छति] | "he goes to the village" |
| @deva[ग्रामाय गच्छति] | "he goes to the village" |

NOT for mental motion: @deva[मनसा चन्द्रं गच्छति] "he goes mentally to the moon" (accusative only).`,

  '23013': `In denoting @deva[सम्प्रदान] ("recipient," @ref[1.4.32]), the 4th case-affix (dative) is used.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[उपाध्यायाय गां ददाति] | "He gives a cow to the teacher" |
| @deva[देवदत्ताय रोचते] | "It pleases Devadatta" (@ref[1.4.33]) |
| @deva[पुष्पेभ्यः स्पृहयति] | "He desires flowers" |`,

  '23014': `The 4th case-affix (dative) is used for the object of a suppressed verb, when an overt verb expresses action done for the sake of a future action (@ref[3.3.10]).

**Example:**
@deva[भोजनाय व्रजति] = @deva[भोक्तुं व्रजति] "he goes to eat"

The infinitive @deva[भोक्तुम्] is replaced by the dative @deva[भोजनाय].`,

  '23015': `The 4th case-affix (dative) is used after abstract nouns (@deva[भाववचन], @ref[3.3.11]) having infinitive force.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[यागाय व्रजति] | "he goes to sacrifice" (= @deva[यष्टुं व्रजति]) |
| @deva[त्यागाय व्रजति] | "he goes to renounce" |
| @deva[पानाय व्रजति] | "he goes to drink" |`,

  '23016': `The 4th case-affix (dative) is used with @deva[नमः] "salutation," @deva[स्वस्ति] "peace," @deva[स्वाहा], @deva[स्वधा] (oblation terms), @deva[अलम्] "sufficient/match for," and @deva[वषट्].

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[नमो देवेभ्यः] | "salutation to the gods" |
| @deva[स्वस्ति राज्ञे] | "peace to the king" |
| @deva[अलं मल्लाय] | "a match for the wrestler" |`,

  '23017': `With the verb @deva[मन्य] "think" (not meaning "know"), a non-animate indirect object optionally takes the 4th case-affix (dative) when expressing contempt.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[न त्वा तृणं मन्ये] | "I don't consider you worth a straw" |
| @deva[न त्वा तृणाय मन्ये] | (same, dative option) |
| @deva[न त्वा बुसं मन्ये] | "I don't consider you worth chaff" |`,

  '23018': `In denoting the agent (@deva[कर्तृ], @ref[1.4.54]) or instrument (@deva[करण], @ref[1.4.42]), the 3rd case-affix (instrumental) is used.

**Agent examples:**
| Expression | Meaning |
|------------|---------|
| @deva[देवदत्तेन कृतम्] | "done by Devadatta" |
| @deva[यज्ञदत्तेन भुक्तम्] | "eaten by Yajñadatta" |

**Instrument examples:**
| Expression | Meaning |
|------------|---------|
| @deva[दात्रेण लुनाति] | "he cuts with a sickle" |
| @deva[परशुना छिनत्ति] | "he splits with an axe" |`,

  '23019': `When @deva[सह] "with" is used, the accompanying thing takes the 3rd case-affix (instrumental), indicating it is subordinate to the principal.

**Example:**
@deva[पुत्रेण सह आगतः पिता] "The father came with his son."

Synonyms of @deva[सह] work the same way: @deva[सार्धम्], @deva[समम्], @deva[साकम्].`,

  '23020': `The defective limb by which a person's defect is indicated takes the 3rd case-affix (instrumental).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[अक्ष्णा काणः] | "blind in one eye" |
| @deva[पादेन खञ्जः] | "lame in foot" |
| @deva[पाणिना कुण्ठः] | "maimed in hand" |

The word @deva[अङ्ग] covers the whole body as a "member."`,

  '23021': `A mark or attribute indicating a particular state takes the 3rd case-affix (instrumental).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[जटाभिः तापसः] | "he is an ascetic by [having] matted hair" |
| @deva[कमण्डलुना छात्रम्] | "the student [identified] by his water-pot" |

The attribute serves as evidence of the state.`,

  '23022': `The object of @deva[सं-ज्ञा] "know/recognize" optionally takes the 3rd case-affix (instrumental).

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[पित्रा संजानीते] | @deva[पितरं संजानीते] | "he recognizes his father" |
| @deva[मात्रा संजानीते] | @deva[मातरं संजानीते] | "he recognizes his mother" |`,

  '23023': `A word denoting cause (@deva[हेतु]) takes the 3rd case-affix (instrumental).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[विद्यया यशः] | "fame through learning" |
| @deva[धनेन कुलम्] | "family [prestige] through wealth" |
| @deva[कन्यया शोकः] | "grief because of a daughter" |

@deva[हेतु] here is the popular sense (cause), not the grammatical @deva[हेतु] (@ref[1.4.55]).`,

  '23024': `A word denoting debt as a cause (but NOT as agent) takes the 5th case-affix (ablative).

**Example:**
@deva[शताद् बद्धः] "bound on account of a debt of a hundred"

**Contrast (agent sense):**
@deva[शतेन बन्धितः] "a hundred [= the debt] has bound him" — here @deva[शत] is the agent, so instrumental.`,

  '23025': `A non-feminine word expressing an attribute that is the cause of an action optionally takes the 5th case-affix (ablative).

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[जाड्येन बद्धः] | @deva[जाड्यात् बद्धः] | "bound by reason of dullness" |
| @deva[पाण्डित्येन मुक्तः] | @deva[पाण्डित्यात् मुक्तः] | "freed through learning" |

@deva[गुणवचन] = word expressing a quality (attribute).`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.3.1-25). Total: ${Object.keys(vasu).length}`);
