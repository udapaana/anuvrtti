import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.1: Samāsa (compound formation) - sūtras 1-24
const newEntries = {
  '21001': `A rule concerning complete words (@deva[पदविधि]) applies only when those words are semantically connected (@deva[समर्थ]).

This is a @deva[परिभाषा] (interpretive rule). Throughout the grammar, whenever a rule operates on @deva[पद] (complete, inflected words) rather than roots or stems, the words must form a coherent semantic unit.

**What "semantically connected" means:**
- The words must relate to the same action, object, or referent
- They must be capable of forming a single conceptual unit

**Example:**
| Phrase | Connected? | Compound? |
|--------|-----------|-----------|
| @deva[राजपुरुषः] "king's man" | Yes | Yes |
| @deva[राजा पश्यति, पुरुषो गच्छति] | No | No |

The second example has @deva[राजन्] and @deva[पुरुष] in the same sentence but referring to different actions—no compound is possible.`,

  '21002': `A word ending in a case-affix, followed by a vocative (@deva[आमन्त्रित]), is treated as part of the vocative for accent purposes.

This enables the vocative's accent rule (@ref[6.1.198]) to apply across the boundary.

**Example:**
@deva[हे राजपुत्र] "O prince!" — The @deva[राज] portion receives the vocative accent pattern as if it were part of @deva[पुत्र].`,

  '21003': `From here through @ref[2.2.38], everything described receives the designation @deva[समास] (compound).

This is an @deva[अधिकार] (governing rule). The word @deva[समास] is to be supplied in all subsequent sūtras in this section.

The word @deva[प्राक्] "up to" indicates the scope extends forward to the specified limit.`,

  '21004': `The phrase @deva[सह सुपा] "with a case-inflected word" governs the following sūtras.

This @deva[अधिकार] means: in each subsequent rule, understand that a @deva[सुबन्त] (case-inflected word) combines with another element to form a compound.

Three words carry forward:
| Word | Meaning |
|------|---------|
| @deva[सुप्] | "a case-affix" |
| @deva[सह] | "together with" |
| @deva[सुपा] | "with a case-inflected word" |`,

  '21005': `From here through @ref[2.1.21], compounds receive the name @deva[अव्ययीभाव].

This is an @deva[अधिकार]. The term @deva[अव्ययीभाव] literally means "becoming indeclinable" — when a declinable word enters such a compound, the result is indeclinable (neuter singular accusative form).

Unlike arbitrary technical terms (@deva[घि], @deva[घु]), this name is self-descriptive.`,

  '21006': `An indeclinable expressing any of these meanings is compounded with a connected case-inflected word to form an @deva[अव्ययीभाव]:

| Meaning | Sanskrit term | Example |
|---------|--------------|---------|
| Case-affix sense | @deva[विभक्ति] | @deva[उपकुम्भम्] "near the pot" |
| Nearness | @deva[सामीप्य] | @deva[उपग्रामम्] "near the village" |
| Prosperity | @deva[ऐश्वर्य] | @deva[यथेष्टम्] "as desired" |
| Diversity | @deva[विविधार्थ] | @deva[प्रतिमुखम्] "face to face" |
| Absence | @deva[अभाव] | @deva[निर्मक्षिकम्] "without flies" |
| Departure | @deva[अत्यय] | @deva[अतिमात्रम्] "beyond measure" |
| Not now | @deva[असंप्रति] | @deva[अतिपर्जन्यम्] "past the rainy season" |
| Sound production | @deva[शब्दप्रादुर्भाव] | @deva[प्रतिकुक्कुटम्] "at cock-crow" |
| After | @deva[पश्चात्] | @deva[अनुभोजनम्] "after eating" |
| According to | @deva[यथा] | @deva[अनुज्येष्ठम्] "according to seniority" |
| Order | @deva[आनुपूर्व्य] | @deva[यथाक्रमम्] "in order" |
| Totality | @deva[समृद्धि] | @deva[सगणम्] "with the group" |
| Termination | @deva[अन्त] | @deva[आकुमारम्] "up to the boy" |`,

  '21007': `The indeclinable @deva[यथा], when NOT meaning "like," forms an @deva[अव्ययीभाव] compound.

**Compounding occurs:**
@deva[यथावृद्धम्] "according to seniority" — @deva[यथा] means "in accordance with"

**No compound when meaning "like":**
@deva[यथा देवदत्तः तथा यज्ञदत्तः] "As Devadatta, so Yajñadatta" — separate words`,

  '21008': `The indeclinable @deva[यावत्], when meaning "limitation" (@deva[अवधारण]), forms an @deva[अव्ययीभाव] compound.

**Examples:**
- @deva[यावदमात्रम्] "just so many" (as many as the pots, no more)
- @deva[यावज्जीवम्] "as long as life lasts"

@deva[अवधारण] = accurate restriction, precise limitation.`,

  '21009': `The indeclinable @deva[प्रति], when meaning "a little," forms an @deva[अव्ययीभाव] compound.

**Compounds:**
- @deva[शाकप्रति] "a little vegetable"
- @deva[सूपप्रति] "a little soup"

**No compound when meaning "toward":**
@deva[वृक्षं प्रति विद्योतते विद्युत्] "Lightning flashes toward the tree" — @deva[प्रति] means direction, not quantity.`,

  '21010': `@deva[अक्ष] "die," @deva[शलाका] "ivory piece," and @deva[संख्या] "numeral" compound with @deva[परि] to form @deva[अव्ययीभाव].

These are gambling terms. The game @deva[पञ्चिका] uses five dice or pieces. When all fall face-up or face-down together, the player wins.

**Example:**
@deva[अक्षपरि] — a term for this all-or-nothing throw.`,

  '21011': `The word @deva[विभाषा] "optionally" governs all subsequent sūtras.

This @deva[अधिकार] makes the following compound rules optional. The same meaning can be expressed either:
- By the compound, or
- By the uncompounded phrase

**Contrast with earlier rules:** Compounds like @deva[सुमद्रम्], @deva[यथाबद्धम्], @deva[अक्षपरि] are @deva[नित्य] (invariable) — their meaning cannot be expressed without compounding.`,

  '21012': `@deva[अप], @deva[परि], @deva[बहिस्], and indeclinables ending in @deva[अञ्चु] may optionally compound with a fifth-case word to form @deva[अव्ययीभाव].

| Compound | Uncompounded | Meaning |
|----------|-------------|---------|
| @deva[अपत्रिगर्तम्] | @deva[अप त्रिगर्तेभ्यः] | "away from Trigarta" |
| @deva[परित्रिगर्तम्] | @deva[परि त्रिगर्तेभ्यः] | "around Trigarta" |
| @deva[बहिर्ग्रामम्] | @deva[बहिर् ग्रामात्] | "outside the village" |
| @deva[प्राङ्ग्रामम्] | @deva[प्राक् ग्रामात्] | "east of the village" |`,

  '21013': `@deva[आङ्] (= @deva[आ]) optionally compounds with a fifth-case word when meaning a limit (exclusive or inclusive), forming @deva[अव्ययीभाव].

**Exclusive limit (up to but not including):**
@deva[आपाटलिपुत्रम्] or @deva[आ पाटलिपुत्रात्] — "up to Pāṭaliputra"

**Inclusive limit (even unto):**
@deva[आकुमारम्] or @deva[आ कुमारेभ्यः] — "even to the boys" (i.e., Pāṇini's fame reaches even children)`,

  '21014': `@deva[अभि] and @deva[प्रति], when meaning "direction toward," optionally compound with a word marking the goal, forming @deva[अव्ययीभाव].

**Examples:**
| Compound | Uncompounded | Meaning |
|----------|-------------|---------|
| @deva[अभ्यग्नि] | @deva[अग्निम् अभि] | "toward the fire" |
| @deva[प्रत्यग्नि] | @deva[अग्निं प्रति] | "toward the fire" |

Context: @deva[पतङ्गाः पतन्ति] "Moths fall [toward the fire]."`,

  '21015': `@deva[अनु], when expressing nearness, optionally compounds with the word denoting what is near, forming @deva[अव्ययीभाव].

**Compound:**
@deva[अनुवनम् अशनिर् गतः] "The thunderbolt fell near the forest."

**No compound when not meaning nearness:**
@deva[वृक्षम् अनु विद्योतते विद्युत्] "Lightning flashes along the tree" — @deva[अनु] here means direction, not proximity.`,

  '21016': `@deva[अनु], when expressing length (extent along), optionally compounds with the word whose length is measured, forming @deva[अव्ययीभाव].

**Examples:**
- @deva[अनुगङ्गं वाराणसी] "Vārāṇasī extends along the Gaṅgā"
- @deva[अनुयमुनं मथुरा] "Mathurā extends along the Yamunā"

The city's extent is measured by the river's length.`,

  '21017': `Words like @deva[तिष्ठद्गु] are irregularly formed @deva[अव्ययीभाव] compounds.

Most denote times related to cattle:

| Compound | Meaning |
|----------|---------|
| @deva[तिष्ठद्गु] | "when cows stand (to be milked)" |
| @deva[वहद्गु] | "when cows are being led" |
| @deva[आयतीगवम्] | "when cows are coming" |
| @deva[खलेयवम्] | "at threshing-floor barley time" |

The @deva[च] in the sūtra is restrictive: these ONLY form @deva[अव्ययीभाव], never other compound types.`,

  '21018': `@deva[पार] "across" and @deva[मध्य] "middle," taking the forms @deva[परे] and @deva[मध्ये], optionally compound with a sixth-case word to form @deva[अव्ययीभाव].

| Compound | Alternative | Meaning |
|----------|-------------|---------|
| @deva[पारेगङ्गम्] | @deva[गङ्गायाः पारे] | "across the Gaṅgā" |
| @deva[मध्येगङ्गम्] | @deva[गङ्गायाः मध्ये] | "in the middle of the Gaṅgā" |

Normally these would form genitive @deva[तत्पुरुष]; this sūtra allows @deva[अव्ययीभाव] instead.`,

  '21019': `A numeral may compound with a word meaning "one of a lineage" (@deva[वंश्य]) to form @deva[अव्ययीभाव].

@deva[वंश] = unbroken succession (of teachers-pupils, ancestors-descendants).

**Example:**
@deva[द्विमुनि व्याकरणस्य] "Grammar has had two sages [in succession]"

The compound expresses the number within the lineage.`,

  '21020': `A numeral may compound with a river name to form @deva[अव्ययीभाव] denoting an aggregate (confluence).

**Examples:**
| Compound | Meaning |
|----------|---------|
| @deva[सप्तगङ्गम्] | "where seven Gaṅgās meet" |
| @deva[द्वियमुनम्] | "where two Yamunās meet" |
| @deva[पञ्चनदम्] | "where five rivers meet" (= Punjab) |
| @deva[सप्तगोदावरम्] | "where seven Godāvarīs meet" |`,

  '21021': `A case-inflected word compounds with river names to form @deva[अव्ययीभाव] when the compound is a proper name (@deva[संज्ञा]) denoting something other than the compound's literal meaning.

Since this forms a proper name, it is a @deva[नित्यसमास] (invariable compound) — names cannot be expressed by uncompounded phrases.

@note[The @deva[संख्या] from previous sūtras does not carry forward here.]`,

  '21022': `From here through @ref[2.2.23], the word @deva[तत्पुरुष] governs.

This @deva[अधिकार] establishes the @deva[तत्पुरुष] class of compounds.

**Characteristic:** In @deva[तत्पुरुष], the final member's meaning is primary; the first member qualifies it.

| Compound | Analysis |
|----------|----------|
| @deva[राजपुरुषः] | "king's man" (a man, belonging to the king) |

The compound denotes a @deva[पुरुष], not a @deva[राजन्].`,

  '21023': `@deva[द्विगु] (numeral-first compound) is also called @deva[तत्पुरुष].

**Purpose:** This ensures @deva[समासान्त] affixes (@ref[5.4.68–160]) apply to @deva[द्विगु] compounds.

**Example:**
@deva[पञ्चराज्ञम्] "an aggregate of five kings" (fem. @deva[पञ्चराज्ञी] by @ref[4.1.15], @ref[4.1.21])

@deva[द्विगु] is properly defined in @ref[2.1.52].`,

  '21024': `A second-case (accusative) word compounds with @deva[श्रित], @deva[अतीत], @deva[पतित], @deva[गत], @deva[अत्यस्त], @deva[प्राप्त], or @deva[आपन्न] to form @deva[तत्पुरुष].

| Compound | Meaning |
|----------|---------|
| @deva[कष्टश्रितः] | "who has resorted to hardship" |
| @deva[कान्तारातीतः] | "who has passed through the forest" |
| @deva[नरकपतितः] | "who has fallen to hell" |
| @deva[स्वर्गगतः] | "who has gone to heaven" |
| @deva[सिन्धुमत्यस्तः] | "who has crossed the Sindhu" |
| @deva[सुखप्राप्तः] | "who has attained happiness" |
| @deva[दुःखापन्नः] | "who has encountered sorrow" |`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  if (!vasu[key] || vasu[key] === '') {
    vasu[key] = value;
    added++;
  } else {
    // Overwrite even if exists (these are rewrites)
    vasu[key] = value;
    added++;
  }
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.1.1-24). Total: ${Object.keys(vasu).length}`);
