import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DATA_DIR = path.join(__dirname, '..', 'static', 'data');
const rewritten = require(path.join(DATA_DIR, 'vasu_rewritten.json'));

// Add rewritten entries for 1.4.81-1.4.110
const newEntries = {
  '14081': `In Vedic literature (@deva[छन्दस्]), @deva[गति] and @deva[उपसर्ग] may also be placed AFTER the verb.

**Classical Sanskrit:** Prefix position only — @deva[प्रकृत्य]
**Vedic Sanskrit:** Either position — @deva[आ यातम् उप निष्कृतम्] "come here, having prepared"

**Note:** This flexibility is a Vedic license not available in classical Sanskrit.`,

  '14082': `In Vedic literature, @deva[गति] and @deva[उपसर्ग] may be separated from the verb by intervening words.

**Example:** @deva[इन्द्र वायू इमे सुता उप प्रयोभिरागतम्]
"O Indra and Vāyu, these (soma juices) are pressed — come with your teams"

Here @deva[उप] and @deva[आगतम्] are separated by other words.

**Classical Sanskrit:** No such separation allowed — prefix must be adjacent to verb.`,

  '14083': `From here to @ref[1.4.97], the terms taught are called @deva[कर्मप्रवचनीय].

@deva[कर्मप्रवचनीय] = particles that govern a noun (in accusative) and qualify a verb.

**Difference from उपसर्ग:**
- @deva[उपसर्ग] — directly prefixed to verb, modifies its meaning
- @deva[कर्मप्रवचनीय] — governs a separate noun, relates it to the verb

**Example:** @deva[वृक्षं प्रति विद्योतते विद्युत्] "Lightning flashes towards the tree"`,

  '14084': `The word @deva[अनु] is @deva[कर्मप्रवचनीय] when denoting a "sign" or indicator.

**Example:** @deva[धूममनु अग्निः] "Fire (is inferred) from smoke"
— Smoke is the @deva[लक्षण] (sign) that indicates fire.

**Sense:** "by means of," "indicated by"`,

  '14085': `The word @deva[अनु] is @deva[कर्मप्रवचनीय] when having the sense of the instrumental case (@deva[तृतीया]).

**Example:** @deva[नदीमनु अवसिता सेना] "The army is encamped along the river"

**Sense:** "along with," "following"`,

  '14086': `The word @deva[अनु] is @deva[कर्मप्रवचनीय] when meaning "inferior/subordinate to."

**Example:** @deva[यूपमनु आदित्यः] "The sun (appears) after/below the sacrificial post"

**Sense:** Comparison, with the governed noun as the standard.`,

  '14087': `The word @deva[उप] is @deva[कर्मप्रवचनीय] when meaning "superior to" or "inferior to."

**Examples:**
- @deva[उपखार्यां द्रोणः] "A droṇa is close to (just under) a khārī" (inferior)
- @deva[उप द्रोणं खारी] "A khārī is close to (just over) a droṇa" (superior)

**Sense:** Proximity in comparison, either above or below.`,

  '14088': `The words @deva[अप] and @deva[परि] are @deva[कर्मप्रवचनीय] when meaning "exclusion."

**Examples:**
- @deva[अपत्रिगर्त्तेभ्यो वृष्टो देवः] "It rained except on the Trigarttas"
- @deva[परित्रिगर्त्तेभ्यो वृष्टो देवः] (same meaning)

**Sense:** "with the exception of," "excluding"`,

  '14089': `The word @deva[आङ्] is @deva[कर्मप्रवचनीय] when expressing a limit (@deva[मर्यादा]).

**Examples:**
- @deva[आ मुक्तेः संसारः] "Saṃsāra extends up to liberation" (exclusive)
- @deva[आ कुमारं यशः पाणिनेः] "Pāṇini's fame extends to (includes) children" (inclusive)

**Two senses:** Inclusive limit or exclusive limit — both expressed by @deva[वचन] in the sūtra.`,

  '14090': `The words @deva[प्रति], @deva[परि], and @deva[अनु] are @deva[कर्मप्रवचनीय] in five senses:

| Sense | Term | Example |
|-------|------|---------|
| Direction/sign | @deva[लक्षण] | @deva[वृक्षं प्रति विद्योतते] "flashes toward the tree" |
| Circumstance | @deva[इत्थंभूताख्यान] | @deva[मां प्रति वर्तते] "behaves regarding me" |
| Division | @deva[भाग] | @deva[यथा प्रति पुरुषं दीयताम्] "give per person" |
| Distribution | @deva[वीप्सा] | @deva[वृक्षं वृक्षं प्रति] "tree by tree" |`,

  '14091': `The word @deva[अभि] is @deva[कर्मप्रवचनीय] in the senses of direction, circumstance, and distribution — but NOT division/share.

**Examples:**
- @deva[वृक्षमभि विद्योतते] "flashes toward the tree" (direction)
- @deva[मामभि वर्तते] "behaves regarding me" (circumstance)

**Not कर्मप्रवचनीय:** @deva[अभि] doesn't express "share/portion" like @deva[प्रति] does.`,

  '14092': `The word @deva[प्रति] is @deva[कर्मप्रवचनीय] in two special senses:

1. **Representative (@deva[प्रतिनिधि]):** @deva[वृक्षं प्रति गौर्बध्यताम्] "Let a cow be bound as representative of a tree"

2. **Exchange (@deva[प्रतिदान]):** @deva[तिलान् प्रति माषान् याचते] "Asks for beans in exchange for sesame"`,

  '14093': `The words @deva[अधि] and @deva[परि] are @deva[कर्मप्रवचनीय] when used as mere expletives (meaningless particles).

**Example:** @deva[कुतः पर्यागच्छति] = @deva[कुतो अभ्यागच्छति] "From where does he come?"

**Note:** Though meaningless, they still govern the accusative as @deva[कर्मप्रवचनीय].`,

  '14094': `The word @deva[सु] is @deva[कर्मप्रवचनीय] when expressing respect/excellence.

**Examples:**
- @deva[सुसिक्तं भवता] "Excellently sprinkled by you"
- @deva[सुस्तुतं भवता] "Excellently praised by you"

**Sense:** "well," "excellently" — with honorific nuance.`,

  '14095': `The word @deva[अति] is @deva[कर्मप्रवचनीय] when meaning excess or excellence.

**Examples:**
- @deva[अतिसिक्तं भवता] "Excessively sprinkled by you"
- @deva[ब्राह्मणमति नृत्यन्ति] "They dance surpassing the Brahmin"

**Sense:** @deva[अतिक्रमण] = doing more than necessary, surpassing.`,

  '14096': `The word @deva[अपि] is @deva[कर्मप्रवचनीय] in four senses:

| Sense | Term | Example |
|-------|------|---------|
| Somewhat | @deva[पदार्थ] | @deva[उष्णमपि उदकम्] "somewhat warm water" |
| Possibility | @deva[सम्भावना] | @deva[अपि पाणिनिः] "even Pāṇini (could err)" |
| Permission | @deva[अन्ववसर्ग] | @deva[अपि स्तुहि] "go ahead and praise" |
| Censure | @deva[गर्हा] | @deva[अपि मां हन्यात्] "he might even kill me!" |`,

  '14097': `The word @deva[अधि] is @deva[कर्मप्रवचनीय] when meaning "lord/master."

**Examples:**
- @deva[अधि ब्राह्मणान् राजा] "The king is lord over the Brahmins"
- @deva[अधि राजानं ब्राह्मणाः] "The Brahmins are (spiritual) lords over the king"

**Scope:** This sūtra ends the @deva[निपात] and @deva[कर्मप्रवचनीय] section begun at @ref[1.4.56].`,

  '14098': `The word @deva[अधि] is OPTIONALLY @deva[कर्मप्रवचनीय] when @deva[कृ] follows.

**Both valid:**
- As @deva[कर्मप्रवचनीय]: @deva[मामधि करिष्यति] "will make (someone) over me"
- As @deva[गति]: @deva[अधिकरिष्यति माम्] "will rule over me"

**Note:** @deva[विभाषा] = optional application.`,

  '14099': `The substitutes of @deva[ल] (the abstract tense marker) are called @deva[परस्मैपद] ("word for another").

**The ल substitutes:** @deva[तिप्], @deva[तस्], @deva[झि], @deva[सिप्], @deva[थस्], @deva[थ], @deva[मिप्], @deva[वस्], @deva[मस्]

**Meaning:** @deva[परस्मै] = "for another" — action benefits someone other than the agent.`,

  '14100': `The @deva[तङ्] endings plus @deva[शानच्] and @deva[कानच्] are called @deva[आत्मनेपद] ("word for oneself").

**The तङ् endings:** @deva[त], @deva[आताम्], @deva[झ], @deva[थास्], @deva[आथाम्], @deva[ध्वम्], @deva[इट्], @deva[वहि], @deva[महिङ्]

**Plus:** @deva[शानच्] (present middle participle), @deva[कानच्] (perfect middle participle)

**Meaning:** @deva[आत्मने] = "for oneself" — action benefits the agent.`,

  '14101': `The @deva[तिङ्] endings form three triads, called @deva[प्रथम], @deva[मध्यम], and @deva[उत्तम].

| Name | Meaning | Person |
|------|---------|--------|
| @deva[प्रथम] | "first" | 3rd person (he/she/they) |
| @deva[मध्यम] | "middle" | 2nd person (you) |
| @deva[उत्तम] | "highest" | 1st person (I/we) |

**Note:** Sanskrit counts from 3rd person as "first" (the one spoken of).`,

  '14102': `Each triad contains three numbers: @deva[एकवचन], @deva[द्विवचन], @deva[बहुवचन].

| Term | Meaning | Number |
|------|---------|--------|
| @deva[एकवचन] | "expression for one" | singular |
| @deva[द्विवचन] | "expression for two" | dual |
| @deva[बहुवचन] | "expression for many" | plural |

**Structure:** 3 persons × 3 numbers = 9 endings per pada (18 total for both padas).`,

  '14103': `The @deva[सुप्] endings (case affixes) also have @deva[एकवचन], @deva[द्विवचन], @deva[बहुवचन] in each triad.

**The सुप् pratyāhāra:** 21 endings (7 cases × 3 numbers)
- @deva[सु], @deva[औ], @deva[जस्] (प्रथमा)
- @deva[अम्], @deva[औट्], @deva[शस्] (द्वितीया)
- ... through @deva[सप्तमी]

**Pattern:** Same singular/dual/plural structure as verb endings.`,

  '14104': `The triads of both @deva[तिङ्] (verb endings) and @deva[सुप्] (case endings) are called @deva[विभक्ति].

**Meaning:** @deva[विभक्ति] = "division, inflection" — the endings that distinguish grammatical relations.

**Usage:** @deva[सप्तमी विभक्ति] = the 7th triad (locative case endings: @deva[ङि], @deva[ओस्], @deva[सुप्]).`,

  '14105': `When @deva[युष्मद्] ("you") is the coreferent of the verb's agent — expressed or understood — use @deva[मध्यम] (2nd person).

**Examples:**
- @deva[त्वं पचसि] "You cook" (expressed)
- @deva[पचसि] "You cook" (understood)

**Note:** @deva[समानाधिकरण] = same referent as the agent (@deva[कर्तृ]).`,

  '14106': `In joking (@deva[प्रहास]), with @deva[मन्य] "think" as attendant word, use @deva[उत्तम एकवचन] (1st person singular).

**Example:** @deva[मन्ये पचामि] "I think I cook!" (said sarcastically about oneself)

**Context:** Self-deprecating humor where speaker mocks their own action.`,

  '14107': `When @deva[अस्मद्] ("I/we") is the coreferent of the verb's agent — expressed or understood — use @deva[उत्तम] (1st person).

**Examples:**
- @deva[अहं पचामि] "I cook" (expressed)
- @deva[पचामि] "I cook" (understood)

**Parallel to @ref[1.4.105]:** Just as @deva[युष्मद्] triggers 2nd person.`,

  '14108': `In all other cases (when neither "you" nor "I" is coreferent), use @deva[प्रथम] (3rd person).

**Examples:**
- @deva[पचति] "He/she cooks"
- @deva[पचतः] "They two cook"
- @deva[पचन्ति] "They cook"

**Default:** 3rd person is the "elsewhere" (@deva[शेष]) case.`,

  '14109': `The closest proximity of sounds — with no more than half a @deva[मात्रा] of pause — is called @deva[संहिता].

**Effect:** When sounds are in @deva[संहिता], sandhi rules apply.

**Example:** @deva[दधि] + @deva[अत्र] → @deva[दध्यत्र] (sandhi applies)

**Without संहिता:** Each word pronounced separately, no euphonic change.`,

  '14110': `The absence of a following sound is called @deva[अवसान] (pause/cessation).

**Application:** Rules conditioned by @deva[अवसान] apply at word-final position before silence.

**Example:** @ref[8.3.15] uses @deva[अवसान] to condition certain final consonant changes.

**Note:** @deva[विराम] = stopping, cessation — the end of an utterance.`
};

Object.assign(rewritten, newEntries);
fs.writeFileSync(path.join(DATA_DIR, 'vasu_rewritten.json'), JSON.stringify(rewritten, null, 2));
console.log('Added', Object.keys(newEntries).length, 'entries (1.4.81-110). Total:', Object.keys(rewritten).length);
