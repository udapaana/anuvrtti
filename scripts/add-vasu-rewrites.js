import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DATA_DIR = path.join(__dirname, "..", "static", "data");
const rewritten = require(path.join(DATA_DIR, "vasu_rewritten.json"));

// Add rewritten entries for 1.4.51-1.4.80
const newEntries = {
  14051: `That @deva[कारक] which is not covered by any special relation (ablation, etc.) is also called @deva[कर्म].

Some verbs take an "unmentioned" (@deva[अकथित]) object in addition to their direct object.

**Examples:**
- @deva[गां दोग्धि पयः] "milks the cow for milk" — @deva[गाम्] is the direct object; @deva[पयः] is akathita
- @deva[माणवकं पन्थानं याचते] "asks the boy for the way" — @deva[माणवकम्] is direct; @deva[पन्थानम्] is akathita

**The five special relations:** @deva[अपादान], @deva[सम्प्रदान], @deva[करण], @deva[अधिकरण], @deva[कर्तृ]`,

  14052: `For verbs meaning motion, knowledge, eating, having a literary work as object, or intransitive verbs — when @deva[णिच्] (causative) is added, the original agent becomes the @deva[कर्म].

**Examples:**
| Primitive | Causative | Analysis |
|-----------|-----------|----------|
| @deva[देवदत्तो ग्रामं गच्छति] | @deva[देवदत्तं ग्रामं गमयति] | Devadatta (agent) → object |
| @deva[देवदत्तो मन्त्रमधीते] | @deva[देवदत्तं मन्त्रमध्यापयति] | "causes D. to study the mantra" |
| @deva[देवदत्तो भुङ्क्ते] | @deva[देवदत्तं भोजयति] | "causes D. to eat" |

**Note:** The original @deva[कर्तृ] takes @deva[द्वितीया] in the causative.`,

  14053: `For @deva[हृ] "to take/lose" and @deva[कृ] "to make" — the primitive agent optionally becomes @deva[कर्म] in the causative.

**Examples:**
| Option 1 (agent as कर्म) | Option 2 (agent as कर्तृ) |
|-------------------------|-------------------------|
| @deva[माणवकं भारं हारयति] | @deva[माणवकेन भारं हारयति] |
| @deva[माणवकं कटं कारयति] | @deva[माणवकेन कटं कारयति] |

In Option 1, the boy (@deva[माणवक]) takes accusative. In Option 2, instrumental.`,

  14054: `That which the speaker conceives as the independent source of action is called @deva[कर्तृ] (agent).

The agent is "self-dependent" (@deva[स्वतन्त्र]) — not subordinate to another in performing the action.

**Examples:**
- @deva[देवदत्तः पचति] "Devadatta cooks" — Devadatta is @deva[कर्तृ]
- @deva[स्थाली पचति] "The pot cooks" — even the pot can be @deva[कर्तृ] if conceived as independent

**Key point:** @deva[कर्तृ] is determined by the speaker's conception, not objective reality.`,

  14055: `That which impels the independent agent is called @deva[हेतु] (cause) — and it too is called @deva[कर्तृ].

In causative constructions, the causer (@deva[प्रयोजक]) becomes the @deva[कर्तृ].

**Example:**
- @deva[देवदत्तः याज्ञदत्तेन कटं कारयति] "Devadatta causes Yājñadatta to make a mat"
  - @deva[देवदत्त] = @deva[हेतु] (causer) = @deva[कर्तृ]
  - @deva[याज्ञदत्त] = @deva[कर्म] (by @ref[1.4.52])

**Verb form:** @deva[णिच्] (causative) is used when @deva[हेतु] is the agent — @ref[3.1.26]`,

  14056: `From here up to @ref[1.4.97] (@deva[अधिरीश्वरे]), all terms taught are called @deva[निपात] (particles).

This is an @deva[अधिकार] (governing rule) that extends over the following sūtras.

**Scope:** Sūtras @ref[1.4.56] through @ref[1.4.97] define various types of @deva[निपात].`,

  14057: `The words @deva[च] "and" etc. are called @deva[निपात] when they do not denote substances.

**Common निपातs:**
| Word | Meaning |
|------|---------|
| @deva[च] | and |
| @deva[वा] | or |
| @deva[एव] | only, exactly |
| @deva[एवम्] | thus, so |
| @deva[नूनम्] | certainly |
| @deva[खलु] | indeed |
| @deva[हि] | for, because |
| @deva[मा] | don't (prohibition) |

**Key condition:** @deva[असत्त्वे] — when NOT denoting a substance.`,

  14058: `The words @deva[प्र] etc. are called @deva[निपात] when not denoting substances.

**The 22 प्रादयः (prepositions):**
@deva[प्र], @deva[परा], @deva[अप], @deva[सम्], @deva[अनु], @deva[अव], @deva[निस्], @deva[निर्], @deva[दुस्], @deva[दुर्], @deva[वि], @deva[आङ्], @deva[नि], @deva[अधि], @deva[अपि], @deva[अति], @deva[सु], @deva[उद्], @deva[अभि], @deva[प्रति], @deva[परि], @deva[उप]

These have grammatical functions when joined to verbs (see @ref[1.4.59]).`,

  14059: `The words @deva[प्र] etc. are called @deva[उपसर्ग] when joined with a verb (@deva[क्रियायोगे]).

**Effect:** When @deva[प्रादयः] become @deva[उपसर्ग], they trigger phonological rules.

**Example:**
- @deva[प्र] + @deva[नयति] → @deva[प्रणयति] (न → ण by @ref[8.4.1])

The designation @deva[उपसर्ग] is needed for rules like @ref[8.4.1] (@deva[रषाभ्यां नो णः समानपदे]).`,

  14060: `The words @deva[प्र] etc. are also called @deva[गति] when joined with a verb.

**Effect:** The @deva[गति] designation triggers @ref[2.2.18], which causes @deva[त्वा] → @deva[ल्यप्] (य) in absolutives.

**Example:**
- @deva[कृ] → @deva[कृत्वा] (simple absolutive)
- @deva[प्र] + @deva[कृ] → @deva[प्रकृत्य] (NOT *प्रकृत्वा)

**Note:** @deva[गति] and @deva[उपसर्ग] are both names for the same words in verbal composition.`,

  14061: `The words @deva[उरी] etc., words ending in @deva[च्वि] @ref[5.4.50], and words ending in @deva[डाच्] @ref[5.4.57] are called @deva[गति] when compounded with @deva[भू], @deva[कृ], or @deva[अस्].

**Examples:**
- @deva[उरीकृत्य] "having accepted"
- @deva[शुक्लीकृत्य] "having made white" (@deva[च्वि] derivative)
- @deva[ऊर्ध्वीकृत्य] "having raised" (@deva[डाच्] derivative)

**The उर्यादि list:** @deva[उरी], @deva[अन्तरा], @deva[प्रादुस्], @deva[अस्तम्], @deva[आविस्], @deva[तिरस्]`,

  14062: `An onomatopoeic word (@deva[अनुकरण]) is called @deva[गति] when NOT followed by @deva[इति].

**Examples:**
- @deva[खाट्कृत्य] "having made the sound 'khāṭ'" — @deva[गति] applies
- @deva[खाट् इति कृत्वा] "having made 'khāṭ'" — @deva[गति] does NOT apply (इति present)

**Effect:** When @deva[गति] applies, @deva[त्वा] → @deva[ल्यप्] by @ref[2.2.18].`,

  14063: `The words @deva[सत्] and @deva[असत्] are called @deva[गति] when meaning "respect" and "disrespect" respectively.

**Examples:**
- @deva[सत्कृत्य] "having honored" (सत् = respect)
- @deva[असत्कृत्य] "having dishonored" (असत् = disrespect)

**Not गति when:** @deva[सत्] means "existing" or @deva[असत्] means "non-existing."`,

  14064: `The word @deva[अलम्] is called @deva[गति] when meaning "ornament."

**Four meanings of अलम्:**
1. Prohibition — @deva[अलं गमनेन] "don't go"
2. Competence — @deva[अलं कार्याय] "capable for the task"
3. Enough — @deva[अलं भक्तेन] "enough food"
4. **Ornament** — @deva[अलंकृत्य] "having adorned" (गति applies here)`,

  14065: `The word @deva[अन्तर्] is called @deva[गति] when meaning "non-acceptance/rejection."

**Example:**
- @deva[अन्तर्कृत्य] "having rejected/set aside"

**Not गति when:** @deva[अन्तर्] means "inside" — @deva[अन्तः कृत्वा] "having placed inside."`,

  14066: `The words @deva[कणे] and @deva[मनस्] are called @deva[गति] when meaning "satisfaction of desire."

**Examples:**
- @deva[कणेहत्य पयः पिबति] "drinks milk to satisfaction"
- @deva[मनोहत्य भुङ्क्ते] "eats to heart's content"

**Note:** @deva[श्रद्धाप्रतीघात] = satisfaction, the quelling of desire.`,

  14067: `The indeclinable @deva[पुरः] "in front" is called @deva[गति] when compounded with a verb.

**Examples:**
- @deva[पुरस्कृत्य] "having placed in front, having honored"
- @deva[पुरोधाय] "having placed before"

**Formation:** @deva[पूर्व] + @deva[असि] @ref[5.3.39] → @deva[पुरस्] (indeclinable by @ref[1.1.38])`,

  14068: `The indeclinable @deva[अस्तम्] "setting, disappearance" is called @deva[गति].

**Example:**
- @deva[अस्तंगत्य सविता पुनरुदेति] "the sun, having set, rises again"

**Meaning:** @deva[अस्तम्] = "not visible, gone down" (of celestial bodies).`,

  14069: `The indeclinable @deva[अच्छ] "towards, before" is called @deva[गति] with verbs of motion or with @deva[वद्] "to speak."

**Examples:**
- @deva[अच्छगत्य] "having gone towards"
- @deva[अच्छवाद्य] "having spoken to"

**Not गति with other verbs:** @deva[अच्छ कृत्वा] (not *अच्छकृत्य).`,

  14070: `The pronoun @deva[अदस्] "that" is called @deva[गति] when NOT addressing another.

**Example:**
- @deva[अदःकृत्य] "having made that" (internal thought/action)

**Not गति:** When giving direction to another — @deva[अदः कृत्वा] "having made that" (addressing someone).`,

  14071: `The word @deva[तिरस्] is called @deva[गति] when meaning "disappearance."

**Examples:**
- @deva[तिरोभूय] "having disappeared"
- @deva[तिरोभूतम्] "disappeared"

**Not गति:** When @deva[तिरस्] means "across/beyond" — @deva[तिरो वनं गच्छति] "goes across the forest."`,

  14072: `The word @deva[तिरस्] is OPTIONALLY called @deva[गति] when followed by @deva[कृ].

**Both forms valid:**
- @deva[तिरस्कृत्य] (गति applies, त्वा → य)
- @deva[तिरः कृत्वा] (गति doesn't apply)

**Note:** This is @deva[प्राप्तविभाषा] — optional application of an otherwise obligatory rule.`,

  14073: `The words @deva[उपाजे] and @deva[अन्वाजे] "supporting the weak" are optionally @deva[गति] with @deva[कृ].

**Both valid:**
- @deva[उपाजेकृत्य] or @deva[उपाजे कृत्वा] "having given support"
- @deva[अन्वाजेकृत्य] or @deva[अन्वाजे कृत्वा] "having assisted"`,

  14074: `The words @deva[साक्षात्] "in presence of" etc. are optionally @deva[गति] with @deva[कृ].

**Examples:**
- @deva[साक्षात्कृत्य] or @deva[साक्षात् कृत्वा] "having witnessed directly"

**The साक्षात्प्रभृति list includes:** @deva[साक्षात्], @deva[अन्तः], etc.

**Implied sense:** The @deva[च्वि] force is understood — making something what it was not before.`,

  14075: `The words @deva[उरसि] "in the breast" and @deva[मनसि] "in the mind" are optionally @deva[गति] with @deva[कृ], provided the sense is NOT "placing."

**गति applies (not placing):**
- @deva[उरसिकृत्य] "having embraced" (held to chest)
- @deva[मनसिकृत्य] "having kept in mind"

**गति doesn't apply (placing):**
- @deva[उरसि कृत्वा] "having placed on the chest"`,

  14076: `The words @deva[मध्ये] "in the middle," @deva[पदे] "in the foot," and @deva[निवचने] "speechless" are optionally @deva[गति] with @deva[कृ], when NOT meaning "placing."

**Examples:**
- @deva[मध्येकृत्य] or @deva[मध्ये कृत्वा] "having interrupted"
- @deva[पदेकृत्य] "having trod upon"
- @deva[निवचनेकृत्य] "having silenced"`,

  14077: `The words @deva[हस्ते] and @deva[पाणौ] "in the hand" are ALWAYS @deva[गति] with @deva[कृ] when meaning "marriage."

**Examples:**
- @deva[पाणौकृत्य] "having married" (taking the hand)
- @deva[हस्तेकृत्य] "having married"

**Not गति:** When literally placing in hand — @deva[हस्ते कृत्वा] "having placed in hand."

**Note:** @deva[नित्यम्] = always, obligatorily (not optional here).`,

  14078: `The indeclinable @deva[प्राध्वम्] is always @deva[गति] with @deva[कृ] when meaning "binding."

**Example:**
- @deva[प्राध्वंकृत्य] "having bound/tied"

**Meaning:** @deva[प्राध्वम्] = "favorably, suitably" but here specifically "binding."`,

  14079: `The words @deva[जीविका] and @deva[उपनिषद्] are @deva[गति] with @deva[कृ] when meaning "likeness/resemblance."

**Examples:**
- @deva[जीविकाकृत्य] "having made it like a livelihood"
- @deva[उपनिषत्कृत्य] "having made it like a secret doctrine"

**Sense:** Treating something AS IF it were that thing.`,

  14080: `The @deva[गति] and @deva[उपसर्ग] words are placed BEFORE the verbal root (@deva[प्राग्धातोः]).

**Principle:** These are prefixes, not suffixes.

**Examples:**
- @deva[प्र] + @deva[कृ] → @deva[प्रकृत्य] (prefix position)
- @deva[अस्तम्] + @deva[गम्] → @deva[अस्तंगत्य] (prefix position)

**Note:** @deva[ते] in the sūtra refers back to both @deva[गति] and @deva[उपसर्ग].`,
};

Object.assign(rewritten, newEntries);
fs.writeFileSync(
  path.join(DATA_DIR, "vasu_rewritten.json"),
  JSON.stringify(rewritten, null, 2),
);
console.log(
  "Added",
  Object.keys(newEntries).length,
  "entries (1.4.51-80). Total:",
  Object.keys(rewritten).length,
);
