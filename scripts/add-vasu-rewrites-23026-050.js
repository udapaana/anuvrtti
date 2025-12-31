import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.3: Vibhakti (case usage) - sūtras 26-50
const newEntries = {
  '23026': `When the word @deva[हेतु] "cause" is explicitly used with a causal noun, that noun takes the 6th case-affix (genitive).

**Example:**
@deva[अन्नस्य हेतोर् वसति] "he dwells for the sake of food"

The presence of @deva[हेतु] itself triggers genitive.`,

  '23027': `When a @deva[सर्वनाम] (pronoun, @ref[1.1.27]) signifies cause and @deva[हेतु] is used with it, BOTH the 3rd (instrumental) AND 6th (genitive) case-affixes are allowed.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[कस्य हेतुना] | @deva[केन हेतुना] | "for what cause?" |
| @deva[यस्य हेतुना] | @deva[येन हेतुना] | "for which cause" |`,

  '23028': `In denoting @deva[अपादान] ("fixed point of departure," @ref[1.4.24]), the 5th case-affix (ablative) is used.

**Examples:**
| Expression | Rule |
|------------|------|
| @deva[ग्रामाद् आगच्छति] | "comes from the village" (@ref[1.4.24]) |
| @deva[वृकेभ्यो बिभेति] | "fears from wolves" (@ref[1.4.25]) |
| @deva[अध्ययनात् पराजयते] | "fails from study" (@ref[1.4.26]) |`,

  '23029': `The 5th case-affix (ablative) is used when joined with words meaning "other than," or with @deva[आरात्] "near/remote," @deva[इतर] "different," @deva[ऋते] "without," direction words, or @deva[अञ्चु]-ending direction compounds.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[ग्रामाद् अन्यः] | "other than the village" |
| @deva[ग्रामाद् आरात्] | "near/far from the village" |
| @deva[धर्माद् ऋते] | "without dharma" |
| @deva[ग्रामात् प्राञ्चः] | "eastward from the village" |`,

  '23030': `The 6th case-affix (genitive) is used with words ending in affixes having @deva[अतसुच्] sense (@ref[5.3.28]).

**Examples:**
@deva[ग्रामस्य दक्षिणतः] "south of the village"
@deva[ग्रामस्य उत्तरतः] "north of the village"
@deva[ग्रामस्य पुरस्तात्] "in front of the village"
@deva[ग्रामस्य उपरि] "above the village"`,

  '23031': `With words ending in @deva[एनप्] (@ref[5.3.35]), BOTH the 2nd (accusative) AND 6th (genitive) case-affixes are used.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[दक्षिणेन ग्रामम्] | @deva[दक्षिणेन ग्रामस्य] | "south of the village" |`,

  '23032': `With @deva[पृथक्], @deva[विना], and @deva[नाना] "without/separately," the 3rd case-affix (instrumental) is used — optionally along with 5th (ablative) and 2nd (accusative).

**Examples:**
| Expression | Case |
|------------|------|
| @deva[रामेण विना] | instrumental |
| @deva[रामाद् विना] | ablative |
| @deva[रामं विना] | accusative |

All three mean "without Rāma."`,

  '23033': `With @deva[स्तोक] "little," @deva[अल्प] "little," @deva[कृच्छ्र] "difficulty," and @deva[कतिपय] "some," the 5th case-affix (ablative) is optionally used (alongside instrumental) — when they denote CAUSE, not material objects.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[स्तोकात् मुक्तः] | @deva[स्तोकेन मुक्तः] | "freed with little [effort]" |
| @deva[कृच्छ्रात् मुक्तः] | @deva[कृच्छ्रेण मुक्तः] | "freed with difficulty" |`,

  '23034': `With words meaning @deva[दूर] "distant" or @deva[अन्तिक] "near," the 6th case-affix (genitive) is optionally used.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[ग्रामाद् वनं दूरम्] | "the forest is far from the village" |
| @deva[ग्रामस्य वनं दूरम्] | (same, genitive option) |
| @deva[ग्रामस्य अन्तिकम्] | "near the village" |`,

  '23035': `After @deva[दूर] "distant" and @deva[अन्तिक] "near" themselves, the 2nd, 5th, OR 3rd case-affix may be used.

**Examples:**
| Expression | Case | Meaning |
|------------|------|---------|
| @deva[दूरं ग्रामस्य] | accusative | "far from the village" |
| @deva[दूराद् ग्रामस्य] | ablative | (same) |
| @deva[दूरेण ग्रामस्य] | instrumental | (same) |

Only when @deva[दूर]/  @deva[अन्तिक] retain their original meanings.`,

  '23036': `The 7th case-affix (locative) is used for @deva[अधिकरण] (location, @ref[1.4.45]), and also after @deva[दूर] and @deva[अन्तिक].

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[कटे आस्ते] | "he sits on the mat" |
| @deva[स्थाल्यां पचति] | "he cooks in the pot" |
| @deva[अन्तिके ग्रामस्य] | "near the village" |
| @deva[दूरे ग्रामस्य] | "far from the village" |`,

  '23037': `The action (@deva[भाव]) by which another action's time is indicated takes the 7th case-affix (locative).

This is the **Locative Absolute** construction.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[गोषु दुह्यमानासु गतः] | "the cows being milked, he left" |
| @deva[दुग्धासु आगतः] | "when milked, he returned" |
| @deva[अग्निषु हूयमानेषु गतः] | "the fires being sacrificed to, he left" |`,

  '23038': `The 6th case-affix (genitive) may also be used (alongside locative) when disregard is shown — this is the **Genitive Absolute**.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[रुदतः प्राव्राजीत्] | "notwithstanding her crying, he departed" |
| @deva[रुदति प्राव्राजीत्] | (locative option, same) |

The genitive implies "in spite of."`,

  '23039': `With @deva[स्वामिन्] "master," @deva[ईश्वर] "lord," @deva[अधिपति] "ruler," @deva[दायाद] "heir," @deva[साक्षिन्] "witness," @deva[प्रतिभू] "surety," and @deva[प्रसूत] "begotten," BOTH 6th (genitive) AND 7th (locative) case-affixes are used.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[गवां स्वामी] | "master of cows" (genitive) |
| @deva[गोषु स्वामी] | (locative) |
| @deva[गवाम् ईश्वरः] | "lord of cows" |`,

  '23040': `With @deva[आयुक्त] "engaged" and @deva[कुशल] "skilled" (when meaning deep absorption), BOTH 6th (genitive) AND 7th (locative) case-affixes are used.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[कटकरणे कुशलः] | "deeply absorbed in mat-making" (locative) |
| @deva[कटकरणस्य कुशलः] | (genitive) |

When NOT meaning deep absorption: @deva[कुशलो देवदत्तः कटकरणम्] — accusative.`,

  '23041': `The 6th (genitive) and 7th (locative) case-affixes are used for the class from which an individual is specified (@deva[निर्धारण]).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[गवां कृष्णा बहुक्षीराः] | "among cows, the black one gives much milk" |
| @deva[गोषु कृष्णा बहुक्षीराः] | (locative) |
| @deva[मनुष्याणां क्षत्रियः शूरतमः] | "among men, the kṣatriya is bravest" |`,

  '23042': `The 5th case-affix (ablative) is used when what is specified is DIFFERENT from (not included in) the class.

This debars genitive and locative.

**Example:**
@deva[माथुराः पाटलिपुत्रेभ्यः सुकुमारतराः] "The Mathurāns are more delicate than the Pāṭaliputrans"

The two groups are distinct, not one within the other.`,

  '23043': `With @deva[साधु] "good" and @deva[निपुण] "skilled" (when denoting respect), the 7th case-affix (locative) is used — provided @deva[प्रति] is NOT used.

**Examples:**
| With locative | With प्रति |
|---------------|-----------|
| @deva[मातरि साधुः] "good toward mother" | @deva[साधुर् देवदत्तो मातरं प्रति] |
| @deva[मातरि निपुणः] "attentive to mother" | — |`,

  '23044': `With @deva[प्रसित] and @deva[उत्सुक] "greatly desirous," BOTH 3rd (instrumental) AND 7th (locative) case-affixes are used.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[निद्रायां उत्सुकः] | @deva[निद्रया उत्सुकः] | "longing for sleep" |
| @deva[केशेषु प्रसितः] | @deva[केशैः प्रसितः] | "absorbed in hair" |`,

  '23045': `When an asterism-time affix is elided by @deva[लुप्] (@ref[4.2.4]), the 7th (locative) and 3rd (instrumental) case-affixes are used.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[पुष्ये पायसम् अश्नीयात्] | @deva[पुष्येण पायसम् अश्नीयात्] | "when the moon is in Puṣya, let him drink milk" |

See @ref[4.2.4] and @ref[4.2.5].`,

  '23046': `When the sense is merely that of the stem (@deva[प्रातिपदिक], @ref[1.2.45]), or of gender, measure, or number alone, the 1st case-affix (nominative) is used.

**Examples:**
| Expression | Category |
|------------|----------|
| @deva[उच्चैः] | stem-sense only |
| @deva[कुमारी] | gender (feminine) |
| @deva[द्रोणः] | measure |
| @deva[वृक्षाः] | number (plural) |`,

  '23047': `When the sense is that of addressing (@deva[सम्बोधन]), the 1st case-affix is used.

**Examples:**
@deva[हे राम] "O Rāma!"
@deva[हे रामौ] "O two Rāmas!"
@deva[हे रामाः] "O Rāmas!"`,

  '23048': `A word ending in the 1st case-affix, when used for addressing, is called @deva[आमन्त्रित] (vocative).

This is a technical definition for vocative forms.`,

  '23049': `In the vocative, the singular of the 1st case-affix is called @deva[सम्बुद्धि].

This term enables rules like @ref[6.1.69], which elides a consonant after @deva[एङ्] or short vowel when @deva[सम्बुद्धि] follows.

**Example:**
@deva[हे राम] — The @deva[सु] of nominative becomes @deva[सम्बुद्धि] in vocative singular.`,

  '23050': `The 6th case-affix (genitive) is used in remaining cases — relations like owner-property, whole-part, etc., distinct from verb-related meanings.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[राज्ञः पुरुषः] | "the king's man" |
| @deva[पशोः पादः] | "beast's foot" |
| @deva[पितुः पुत्रः] | "father's son" |

This is the "default" genitive for possession and similar relations.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.3.26-50). Total: ${Object.keys(vasu).length}`);
