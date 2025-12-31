import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.3: Vibhakti (case usage) - sūtras 51-73
const newEntries = {
  '23051': `The instrument of @deva[ज्ञा] (when NOT meaning "to know") takes the 6th case-affix (genitive).

When @deva[ज्ञा] means "to engage in" or "to act," the instrument uses genitive.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[मधुनो जानीते] | "he engages in sacrifice with honey" |
| @deva[सर्पिषो जानीते] | "he engages with ghee" |`,

  '23052': `The object of verbs meaning "remember" (@deva[अधि] + √इ), @deva[दय] ("give/pity/protect/move"), and @deva[ईश] ("rule") takes the 6th case-affix (genitive).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[मातुर् अध्येति] | "he remembers his mother" |
| @deva[सर्पिषो दयते] | "he gives clarified butter" |
| @deva[गात्राणाम् ईष्टे] | "he rules [his] limbs" |`,

  '23053': `The object of @deva[कृ] takes the 6th case-affix (genitive) when meaning "to impart a new quality" (@ref[1.3.32]).

**Example:**
@deva[एधोदकस्य उपस्कुरुते] "the wood imparts a quality to the water"

(= he prepares wood and water for sacrifice)

By @ref[6.1.139], @deva[स] is added.`,

  '23054': `The object of verbs meaning @deva[रुज्] "afflict" (except causative @deva[ज्वरय]) takes the 6th case-affix (genitive) when the subject is abstract (a condition).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[चौरस्य रुजति रोगः] | "the disease afflicts the thief" |
| @deva[चौरस्य आमयति आमयः] | "the ailment afflicts the thief" |

The subject (@deva[रोग], @deva[आमय]) is an abstract condition.`,

  '23055': `The object of @deva[नाथ्] "bless" takes the 6th case-affix (genitive).

**Example:**
@deva[मधुनो नाथते] "he blesses the honey"

**Contrast (not "bless"):**
@deva[माणवकम् उपनाथति] "he solicits the boy" — accusative when @deva[नाथ्] means "solicit."`,

  '23056': `The object of @deva[जासि] "strike," @deva[नि-हन्]/  @deva[प्र-हन्] "strike down," @deva[नाट्] "injure," @deva[क्राथ], and @deva[पिष] (when meaning "injure") takes the 6th case-affix (genitive).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[चौरस्य उज्जासयति] | "he strikes the thief" |
| @deva[चौरस्य निहन्ति] | "he kills the thief" |
| @deva[चौरस्य प्रहन्ति] | "he strikes the thief" |
| @deva[चौरस्य उन्नाटयति] | "he injures the thief" |`,

  '23057': `The object of @deva[व्यवहृ] and @deva[पण्] (when synonymous, meaning "deal in sales" or "stake in gambling") takes the 6th case-affix (genitive).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[शतस्य व्यवहरति] | "he deals in a hundred" |
| @deva[शतस्य पणते] | "he stakes a hundred" |`,

  '23058': `The object of @deva[दिव्] "gamble/deal" (in the sense of dealing/staking) takes the 6th case-affix (genitive).

**Example:**
@deva[शतस्य दीव्यति] "he stakes/deals in a hundred"

**Contrast:**
@deva[ब्राह्मणं दीव्यति] "he jokes with the brāhmaṇa" — accusative when @deva[दिव्] means "joke."`,

  '23059': `When @deva[दिव्] (dealing/staking sense) is preceded by an @deva[उपसर्ग], the object OPTIONALLY takes the 6th case-affix (genitive).

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[शतस्य प्रति दीव्यति] | @deva[शतं प्रति दीव्यति] | "he stakes a hundred" |

Without upasarga (previous sūtra), genitive is required.`,

  '23060': `In @deva[ब्राह्मण] literature, the object of @deva[दिव्] (dealing/staking sense) takes the 2nd case-affix (accusative).

**Example:**
@deva[गाम् अस्य तद् अहः सभायां दीव्येयुः] (Maitr.S.1.6.11)

In Vedic prose, the simple verb @deva[दिव्] uses accusative; with upasargas, there's option.`,

  '23061': `The object of @deva[प्रेष्य] and @deva[ब्रूहि] (imperatives meaning "send/announce"), when denoting sacrificial food offered to a deity, takes the 6th case-affix (genitive).

**Example:**
@deva[अग्नये छागस्य हविषो वपायाः मेदसः अनुब्रूहि] "Announce to Agni [the offering of] the goat's oblation, fat, and suet"

The deity is the recipient.`,

  '23062': `In @deva[छन्दस्] (Veda), the 6th case-affix (genitive) is variously used with 4th case (dative) force.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[पुरुषमृगः चन्द्रमसः] | "a deer for the moon" (= @deva[चन्द्रमसे]) |
| @deva[वनस्पतीनाम्] | "for the lords of the forest" (= @deva[वनस्पतिभ्यः]) |`,

  '23063': `In @deva[छन्दस्], the 6th case-affix (genitive) is variously used for the instrument of @deva[यज्] "sacrifice."

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[घृतस्य यजते] | @deva[घृतेन यजते] | "he sacrifices with butter" |
| @deva[सोमस्य यजते] | @deva[सोमेन यजते] | "he sacrifices with soma" |`,

  '23064': `The 6th case-affix (genitive) is used for location (@deva[अधिकरण]) after time-words when used with @deva[कृत्वसुच्]-sense affixes (@ref[5.4.17], "so many times").

**Example:**
@deva[पञ्चकृत्वः आह्नः भुङ्क्ते] "he eats five times a day"

@deva[आह्नः] (genitive of @deva[अहन्]) expresses "during the day."`,

  '23065': `The 6th case-affix (genitive) is used to denote agent OR object with words formed by @deva[कृत्] affixes (@ref[3.1.93]).

**Examples:**
| Expression | Role | Meaning |
|------------|------|---------|
| @deva[कालिदासस्य क्रिया] | agent | "Kālidāsa's composition" |
| @deva[आहृता क्रतूनाम्] | object | "the performer of sacrifices" |
| @deva[भवतः शायिका] | agent | "your turn of lying" |`,

  '23066': `When BOTH agent and object of a @deva[कृत्]-formed word are expressed, only the OBJECT takes the 6th case-affix (genitive), not the agent.

**Example:**
@deva[आश्चर्यो गवां दोहः अगोपालकेन] "The milking of cows by a non-cowherd is wondrous"

@deva[गवाम्] (object) = genitive; @deva[अगोपालकेन] (agent) = instrumental.`,

  '23067': `A past participle in @deva[क्त] used in present-tense sense (@ref[3.2.187], @ref[3.2.188]) takes the 6th case-affix (genitive) for its agent.

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[राज्ञां पूजितः] | "honored by kings" |
| @deva[अहम् एवं मतः महीपतेः] | "I alone am regarded thus by the king" |

Only when @deva[क्त] has present meaning (respect, devotion, etc.).`,

  '23068': `A past participle in @deva[क्त] expressing location (@ref[3.4.76]) takes the 6th case-affix (genitive).

**Examples:**
| Expression | Meaning |
|------------|---------|
| @deva[इदम् एषाम् आसितम्] | "this is their seat" |
| @deva[इदम् एषां शयितम्] | "this is their bed" |

The @deva[क्त] here denotes place of sitting/lying (locative sense).`,

  '23069': `The 6th case-affix (genitive) is NOT used for agent or object when governed by:
- Active participle in @deva[ल्], @deva[उ], @deva[उक]
- Indeclinable
- @deva[क्त] / @deva[क्तवतु]
- @deva[खल्]-sense affix
- @deva[तृच्]-formed agent noun

**Example (accusative, not genitive):**
@deva[कटं कुर्वन्] "making a mat"
@deva[कटं कृत्वा] "having made a mat"`,

  '23070': `The 6th case-affix (genitive) is NOT used with:
- @deva[अक]-affixes denoting futurity
- @deva[इन्]-affixes denoting futurity or indebtedness

**Examples (accusative):**
| Expression | Meaning |
|------------|---------|
| @deva[कटं कारकः] | "one who will make a mat" |
| @deva[शतं दायी] | "one who owes a hundred" |

@deva[अक] (like @deva[ण्वुल्]) denotes futurity; @deva[णिनि] denotes both.`,

  '23071': `With @deva[कृत्य] (future passive participle) forms, the 6th case-affix (genitive) is OPTIONALLY used for the agent (but not the object).

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[मया कर्तव्यम्] | @deva[मम कर्तव्यम्] | "to be done by me" |

The object still takes accusative: @deva[कटं कर्तव्यम्] "the mat is to be made."`,

  '23072': `With words meaning "like/resemblance" (EXCEPT @deva[तुला] and @deva[उपमा]), BOTH 3rd (instrumental) AND 6th (genitive) case-affixes may optionally be used.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[तुल्यो देवदत्तेन] | @deva[तुल्यो देवदत्तस्य] | "equal to Devadatta" |
| @deva[सदृशो देवदत्तेन] | @deva[सदृशो देवदत्तस्य] | "like Devadatta" |

With @deva[तुला] and @deva[उपमा], genitive is required.`,

  '23073': `With @deva[आयुष्] "long life," @deva[मद्र] "joy," @deva[भद्र] "good fortune," @deva[कुशल] "welfare," @deva[सुख] "happiness," @deva[अर्थ] "prosperity," and @deva[हित] "good" — when blessing is intended — BOTH 4th (dative) AND 6th (genitive) case-affixes may be used.

**Examples:**
| Option 1 | Option 2 | Meaning |
|----------|----------|---------|
| @deva[आयुष्यं ते] | @deva[आयुष्यं तुभ्यम्] | "long life to you!" |
| @deva[भद्रं तव] | @deva[भद्रं तुभ्यम्] | "good fortune to you!" |

The @deva[च] in the sūtra makes dative optional.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.3.51-73). Total: ${Object.keys(vasu).length}`);
