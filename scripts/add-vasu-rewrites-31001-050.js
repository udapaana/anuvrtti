import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 3.1: Affixes (kṛt & tiṅ) - sūtras 1-50
const newEntries = {
  '31001': `@deva[प्रत्ययः] — "An affix."

This @deva[अधिकार] governs from here through the end of Book 5. Everything taught hereafter receives the designation @deva[प्रत्यय] "affix" — except bases like @deva[गुप्], @deva[तिज्], etc.`,

  '31002': `@deva[परश्च] — "And subsequent."

This @deva[अधिकार]/  @deva[परिभाषा] means: an affix is placed AFTER its base — the @deva[धातु] (root), @deva[प्रातिपदिक] (stem), or @deva[अङ्ग] (inflected stem).`,

  '31003': `An affix has @deva[उदात्त] (acute) accent on its first vowel.

If the affix has multiple vowels, only the first receives @deva[उदात्त].

**Example:**
@deva[पचति] — the @deva[ति] has acute on @deva[इ].`,

  '31004': `Case-affixes (@deva[सुप्]) and affixes with indicatory @deva[प्] (@deva[पित्]) are @deva[अनुदात्त] (grave).

This is an exception to @ref[3.1.3].

**Examples:**
@deva[दृषदौ] "two stones" — @deva[औ] is grave
@deva[पचति] — the @deva[ति] ending is grave`,

  '31005': `The affix @deva[सन्] comes after @deva[गुप्] "despise," @deva[तिज्] "endure," and @deva[कित्] "heal."

These verbs take @deva[सन्] with special meanings (not their basic meanings of "hide," "whet," "dwell").

**Examples:**
@deva[जुगुप्सते] "he despises"
@deva[तितिक्षते] "he endures"
@deva[चिकित्सति] "he heals"`,

  '31006': `@deva[सन्] comes after @deva[मान्] "honor," @deva[बध्] "bind," @deva[दान्] "cut," and @deva[शान्] "whet" — with long @deva[ई] replacing the @deva[इ] of the reduplicated syllable (@ref[7.4.79]).

**Examples:**
@deva[मीमांसते] "he investigates"
@deva[बीभत्सते] "he loathes"`,

  '31007': `The affix @deva[सन्] is OPTIONALLY attached to a root to express "wishing," when the agent of wishing is the same as the agent of the desired action.

**Example:**
@deva[चिकीर्षति] = @deva[कर्तुम् इच्छति] "he wishes to do"

This is the desiderative proper.`,

  '31008': `The affix @deva[क्यच्] is OPTIONALLY used to express "wishing" after a case-inflected word denoting the object wished, connected with the wisher.

This forms denominative verbs.

**Example:**
@deva[पुत्रीयति] = @deva[पुत्रम् इच्छति] "he wishes for a son of his own"`,

  '31009': `The affix @deva[काम्यच्] is also used to express "wishing" after a case-inflected word.

**Example:**
@deva[पुत्रकाम्यति] "he wishes for a son of his own"

The separation from the previous sūtra indicates @deva[काम्यच्] may apply where @deva[क्यच्] doesn't.`,

  '31010': `The affix @deva[क्यच्] is OPTIONALLY used after a case-inflected word denoting the object of comparison, to express "treatment as."

**Example:**
@deva[पुत्रीयति छात्रम्] = @deva[पुत्रम् इव आचरति छात्रम्] "he treats the pupil as a son"`,

  '31011': `The affix @deva[क्यङ्] is OPTIONALLY used to express "behaving like" after a word denoting the object of comparison. Final @deva[स्] of the base is elided.

**Example:**
@deva[कारीयति] = @deva[श्येन इव आचरति] "he behaves like a hawk"`,

  '31012': `The affix @deva[क्यङ्] expresses "becoming what was not before" after @deva[भृश्] etc. — when NOT taking @deva[च्वि] (@ref[5.4.50]). Final @deva[स्] is elided.

**Example:**
@deva[भृश] → @deva[भृशायते] "it becomes intense"`,

  '31013': `The affix @deva[क्यष्] expresses "becoming what was not before" after @deva[लोहित] etc. and @deva[डाच्]-ending words (@ref[5.4.57]) — when NOT taking @deva[च्वि].

**Example:**
@deva[लोहितायति] "it becomes red"`,

  '31014': `The affix @deva[क्यङ्] expresses "exerting in mischief" after @deva[कष्ट] when the latter has the 4th case-affix.

**Example:**
@deva[कष्टायते] = @deva[कष्टाय कर्मणे क्रामति] "he is assiduous for trouble"`,

  '31015': `The affix @deva[क्यङ्] comes after @deva[रोमन्थ] "ruminating" and @deva[तपस्] "austerity" as objects of repeating/performing.

**Examples:**
@deva[रोमन्थायते गौः] "the cow ruminates"
@deva[तपस्यति] "he performs austerity"`,

  '31016': `The affix @deva[क्यङ्] expresses "ejecting" after @deva[वाष्प] "vapor" and @deva[ऊष्म] "heat" as objects.

**Examples:**
@deva[वाष्पायते] "it emits vapor"
@deva[ऊष्मायते] "it sends out heat"
@deva[फेनायते] "it ejects froth"`,

  '31017': `The affix @deva[क्यङ्] expresses "making" after @deva[शब्द] "sound," @deva[वैर] "hostility," @deva[कलह] "strife," @deva[अभ्र] "cloud," @deva[कश्मल] "sin," and @deva[मेघ] "cloud."

**Examples:**
@deva[शब्दायते] = @deva[शब्दं करोति] "he makes a sound"`,

  '31018': `The affix @deva[क्यङ्] expresses "feeling" after @deva[सुख] "pleasure" etc., when the feeling belongs to the agent.

**Examples:**
@deva[सुखायते] "he feels pleasure"
@deva[दुःखायते] "he feels pain"

NOT when feeling belongs to another.`,

  '31019': `The affix @deva[यक्] (= @deva[य]) expresses "making" after @deva[नमस्] "adoration," @deva[वरिवस्] "honor," and @deva[चित्र] "wonder."

**Examples:**
@deva[नमस्यति देवान्] "he worships the gods"
@deva[वरिवस्यति गुरून्] "he honors teachers"
@deva[चित्रीयति] "he wonders"`,

  '31020': `The affix @deva[णिङ्] expresses "making" after @deva[पुच्छ] "tail," @deva[भाण्ड] "pot," and @deva[चीवर] "rag."

**Examples:**
@deva[उत्पुच्छयते] "he lifts up the tail"
@deva[संभाण्डयते] "he puts in a pot"`,

  '31021': `The affix @deva[णिच्] expresses "making" after @deva[मुण्ड] "shaved," @deva[मिश्र] "mixed," @deva[श्लक्ष्ण] "soft," @deva[लवण] "salt," @deva[व्रत] "vow," @deva[वस्त्र] "dress," @deva[हल] "plough," @deva[कल] "strife," @deva[कृत] "done," @deva[तूस्त] "pleased."

**Examples:**
@deva[मुण्डयति] "he shaves"
@deva[मिश्रयति] "he mixes"`,

  '31022': `The affix @deva[यङ्] expresses repetition or intensity after a monosyllabic root beginning with a consonant.

**Examples:**
@deva[पापच्यते] "he cooks again and again"
@deva[बोभूयते] "he becomes repeatedly"

This is the intensive/frequentative.`,

  '31023': `The affix @deva[यङ्] INVARIABLY comes after a simple verb of motion to express "crookedness."

**Example:**
@deva[चङ्क्रम्यते] "he moves crookedly"

After motion verbs, @deva[यङ्] never means intensity or repetition.`,

  '31024': `The affix @deva[यङ्] ALWAYS expresses contempt after @deva[लुप्] "cut off," @deva[सद्] "sit," @deva[चर्] "walk," @deva[जप्] "mutter," @deva[जभ्] "gape," @deva[दह्] "burn," @deva[दश्] "bite," and @deva[गॄ] "swallow."

**Examples:**
@deva[लोलुप्यते] "he cuts off contemptuously"`,

  '31025': `The affix @deva[णिच्] comes after @deva[सत्य] → @deva[सत्याप], @deva[पाश] "fetter," @deva[रूप] "form," @deva[वीणा] "lute," @deva[तूल] "cotton," @deva[श्लोक] "verse," @deva[सेना] "army," @deva[लोमन्] "hair," @deva[त्वच्] "skin," @deva[वर्मन्] "armor," @deva[वर्ण] "color," @deva[चूर्ण] "powder."

**Examples:**
@deva[सत्यापयति] "he verifies"
@deva[पाशयति] "he fetters"`,

  '31026': `The affix @deva[णिच्] comes after a root when the operation of a CAUSER (@deva[हेतु]) is to be expressed.

This forms the causative.

**Example:**
@deva[कटं कारयति] "he causes [someone] to make a mat"`,

  '31027': `The affix @deva[यक्] comes after @deva[कण्डू] "itch" etc.

**Example:**
@deva[कण्डूयति] or @deva[कण्डूयते] "he itches/scratches"

These words are both roots and nouns.`,

  '31028': `The affix @deva[आय] comes after @deva[गुपू] "protect," @deva[धूप] "heat," @deva[विच्छ] "approach," @deva[पण] "praise/contract," and @deva[पन] "praise."

**Examples:**
@deva[गोपायति] "he protects"
@deva[धूपायति] "he heats"
@deva[पणायति] "he praises"`,

  '31029': `The affix @deva[ईयङ्] comes after @deva[ऋति] "reproach."

The @deva[ङ्] indicates ātmanepada.

**Examples:**
@deva[ऋतीयते] "he pities/reproaches"`,

  '31030': `The affix @deva[णिङ्] comes after @deva[कम्] "desire."

@deva[ण्] → vṛddhi (@ref[7.2.115]); @deva[ङ्] → ātmanepada.

**Examples:**
@deva[कामयते] "he desires"`,

  '31031': `The affixes @deva[आय], @deva[ईयङ्], and @deva[णिङ्] are OPTIONALLY added when one wishes to express oneself with an @deva[आर्धधातुक] affix.

**Example with future @deva[ता]:**
@deva[गोपायिता] or @deva[गोप्ता] "he will protect"`,

  '31032': `All roots formed by affixes @deva[सन्] etc. are called @deva[धातु] "root."

This extends the definition from @ref[1.3.1]. These derivative roots have all functions of roots.

**Example:**
@deva[चिकीर्षति] — @deva[चिकीर्ष] is a derivative root.`,

  '31033': `When @deva[ऌ] (@deva[लृट्]/  @deva[लृङ्]) and @deva[लुट्] follow, @deva[स्य] and @deva[तासि] are the affixes respectively.

**Second future (लृट्):**
@deva[करिष्यति] "he will do"

**First future (लुट्):**
@deva[कर्ता] "he will do"`,

  '31034': `@deva[सिप्] is VARIOUSLY the affix when @deva[लेट्] (subjunctive) follows.

The subjunctive is Vedic only.

**Examples:**
@deva[जोषिषत्], @deva[तारिषत्], @deva[मन्दिषत्]`,

  '31035': `@deva[आम्] is the affix after @deva[कास्] "cough" and derivative verbs when @deva[लिट्] (perfect) follows, in @deva[मन्त्र].

This forms the periphrastic perfect.

**Example:**
@deva[कासांचक्रे] "he coughed"`,

  '31036': `@deva[आम्] is used when @deva[लिट्] follows after a root beginning with @deva[इ], @deva[उ], or @deva[ऋ] and having a heavy vowel — except @deva[ऋच्छ] "go."

**Examples:**
@deva[ईहांचक्रे] "he endeavored"
@deva[ऊहांचक्रे] "he reasoned"`,

  '31037': `@deva[आम्] comes after @deva[दय्] "give/go/protect," @deva[अय्] "go," and @deva[आस्] "sit" when @deva[लिट्] follows.

**Examples:**
@deva[दयांचक्रे] "he gave"
@deva[पलायांचक्रे] "he fled"
@deva[आसांचक्रे] "he sat"`,

  '31038': `@deva[आम्] is OPTIONALLY used after @deva[उष्] "burn," @deva[विद्] "know," and @deva[जागृ] "wake" when @deva[लिट्] follows.

**Examples:**
| With आम् | Without |
|----------|---------|
| @deva[ओषांचकार] | @deva[उवोष] |
| @deva[विदांचकार] | @deva[विवेद] |
| @deva[जागरांचकार] | @deva[जजागार] |`,

  '31039': `@deva[आम्] is OPTIONALLY used after @deva[भी] "fear," @deva[ह्री] "be ashamed," @deva[भृ] "nourish," @deva[हु] "sacrifice" when @deva[लिट्] follows — with @deva[श्लु] elision and optional @deva[ईट्] (@ref[7.2.44]).

When @deva[आम्] is affixed, reduplication follows as if @deva[श्लु] elision occurred.`,

  '31040': `After a verb ending with @deva[आम्], the verb @deva[कृ] "do" is annexed when @deva[लिट्] follows.

**Example:**
@deva[ईहांचक्रे] — @deva[चक्रे] is perfect of @deva[कृ].`,

  '31041': `The form @deva[विदांकुर्वन्तु] is OPTIONALLY used as an irregular form.

@deva[आम्] is added to @deva[विद्] "know" + @deva[लोट्] (imperative); then @deva[लोट्] affixes are elided, and @deva[लोट्] of @deva[कृ] is added.`,

  '31042': `These irregular forms occur in @deva[छन्दस्]: @deva[अभ्युत्सादयामकः], @deva[प्रजनयामकः], @deva[चिकयामकः], @deva[रमयामकः], @deva[पावयांक्रियाद्], @deva[विदामक्रन्].

The first two and fourth are aorists of causatives; the rest show Vedic irregularities.`,

  '31043': `When @deva[लुङ्] (aorist) follows, the affix @deva[च्लि] is added.

@deva[इ] = for articulation
@deva[च्] = for accent (@ref[6.1.162]) — @deva[चित्] affixes have @deva[उदात्त] on final.`,

  '31044': `@deva[सिच्] is the substitute of @deva[च्लि].

@deva[इ], @deva[च्] are indicatory; real affix is @deva[स्].

**Example:**
@deva[अकार्षीत्] "he did"`,

  '31045': `After a root ending in @deva[शल्] consonant with @deva[इक्] penultimate and not taking @deva[इट्] (@ref[7.2.10]), @deva[क्स] substitutes for @deva[च्लि].

**Aorist paradigm with क्स:**
@deva[अधुक्षत्], @deva[अधुक्षताम्], @deva[अधुक्षन्]`,

  '31046': `@deva[क्स] substitutes for @deva[च्लि] after @deva[श्लिष्] only when meaning "embrace."

**Example:**
@deva[आश्लिक्षत् कन्याम्] "he embraced the girl"

But: @deva[समाश्लिषज्जतुकाष्ठम्] "the glue joined the wood" (not "embrace").`,

  '31047': `@deva[क्स] does NOT substitute after @deva[दृश्] "see."

@deva[दृश्] forms aorist by @ref[3.1.57] with @deva[अङ्] and @deva[सिच्].

**Example:**
@deva[अदर्शत्] or @deva[अद्राक्षीत्] "he saw"`,

  '31048': `After causatives (roots ending in @deva[णि]), and after @deva[श्रि] "serve," @deva[द्रु] "run," @deva[स्रु] "flow," the affix @deva[चङ्] substitutes for @deva[च्लि].

**Examples:**
@deva[अचीकरत्] "he caused to do"
@deva[अशिश्रियत्] "he served"`,

  '31049': `After @deva[धे] "suck" and @deva[श्वि] "grow," @deva[चङ्] OPTIONALLY substitutes for @deva[च्लि] when @deva[लुङ्] signifies agent.

**Examples:**
@deva[अदधत्] or (with @deva[सिच्]) @deva[अधात्] / @deva[अधासीत्] "he sucked"`,

  '31050': `After @deva[गुप्] "protect," @deva[चङ्] OPTIONALLY substitutes for @deva[च्लि] in @deva[छन्दस्].

This applies when @deva[गुप्] does not take @deva[आय] (@ref[3.1.28]).

**Example:**
@deva[इमान् नो मित्रावरुणौ यत् जुगुपत] (Vedic)`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (3.1.1-50). Total: ${Object.keys(vasu).length}`);
