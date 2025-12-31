import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.4: Luk, ślu, lup (elision) - sūtras 61-85
const newEntries = {
  '24061': `After @deva[तौल्वलि] and similar words, there is NO @deva[लुक्] elision of the @deva[युवन्] affix.

This blocks the elision that @ref[2.4.58] would cause.

@deva[तौल्वल्यादि] class: @deva[तौल्वलि], @deva[धारणि], @deva[पारणि], @deva[रावणि], @deva[दैलीपि], @deva[दैवति], etc.`,

  '24062': `There is @deva[लुक्] elision of a @deva[तद्राज] affix (@ref[4.1.174]) when the word takes PLURAL — provided the plural belongs to the base itself (not as compound epithet), and the base is not feminine.

The @deva[तद्राज] affixes mark royal descendants.`,

  '24063': `After @deva[यस्क] and similar words, there is @deva[लुक्] elision of the @deva[गोत्र] affix when the word itself (not as compound epithet) takes PLURAL — but not in feminine.

**Example:**
@deva[यास्कः] (@deva[यस्क] + @deva[अण्]) = "descendant of Yaska not nearer than great-grandson"

Plural: @deva[यस्काः] (affix elided).`,

  '24064': `There is @deva[लुक्] elision of @deva[गोत्र] affixes @deva[यञ्] (@ref[4.1.105]) and @deva[अञ्] (@ref[4.1.104]) when the word itself takes PLURAL — but not in feminine.

**Example:**
@deva[गर्गाः] "the Gargas" (plural with @deva[यञ्] elided)

Singular: @deva[गार्ग्यः] (affix retained).`,

  '24065': `After @deva[अत्रि], @deva[भृगु], @deva[कुत्स], @deva[वसिष्ठ], @deva[गोतम], and @deva[अङ्गिरस्], there is @deva[लुक्] elision of the @deva[गोत्र] affix when the word takes PLURAL — not in feminine.

**Example:**
@deva[आत्रेयः] (@deva[अत्रि] + @deva[ढक्], @ref[4.1.122]) = "descendant of Atri"

Plural: @deva[अत्रयः] (affix elided).`,

  '24066': `There is @deva[लुक्] elision of @deva[गोत्र] affix @deva[इञ्] (@ref[4.1.95]) after polysyllabic words denoting @deva[प्राच्य] or @deva[भरत] @deva[गोत्र] when the word takes PLURAL.

The plural of such words shows the affix elided.`,

  '24067': `After @deva[गोपवन] and similar words, there is NO @deva[लुक्] elision of the @deva[गोत्र] affix in plural.

This prevents @ref[2.4.64] from applying.

**Example:**
@deva[गौपवनः] (@deva[गोपवन] + @deva[अञ्])
Plural: @deva[गौपवनाः] (affix retained)`,

  '24068': `After @deva[तिक], @deva[कितव], etc., when used as @deva[द्वन्द्व] compound, there is @deva[लुक्] elision of @deva[गोत्र] affixes in PLURAL.

**Example:**
@deva[तैकायनिः] (@deva[तिक] + @deva[फिञ्], @ref[4.1.154])
Plural: @deva[तैकायनयः]

@deva[द्वन्द्व]: @deva[तैकायनयः] + @deva[कैतवायनयः] → @deva[तिककितवाः] (affixes elided).`,

  '24069': `After @deva[उपक] and similar words, there is OPTIONAL @deva[लुक्] elision of the @deva[गोत्र] affix in plural — whether in @deva[द्वन्द्व] or separately.

Three words from this list already appear in @deva[तिककितवादि].

Plural may retain or elide the affix.`,

  '24070': `There is @deva[लुक्] elision of @deva[गोत्र] affixes @deva[अण्] and @deva[यञ्] of @deva[अगस्त्य] and @deva[कौण्डिन्य] in plural, with @deva[अगस्ति] and @deva[कुण्डिन] as substitute bases.

**Example:**
@deva[आगस्त्यः] = singular
Plural: @deva[अगस्तयः] (not @deva[*आगस्त्याः])

The base itself changes when affix is elided.`,

  '24071': `There is @deva[लुक्] elision of case-affixes when a word becomes a @deva[धातु] "root" or remains a crude form (@deva[प्रातिपदिक]).

A noun becomes a @deva[धातु] in denominative verbs.

**Example:**
@deva[पुत्रीयति] (@ref[3.1.8]) "he wishes for a son"

Case-affixes are elided for the denominative base.`,

  '24072': `After @deva[अद्] "eat" and similar verbs (@deva[अदादि] class), there is @deva[लुक्] elision of the @deva[विकरण] @deva[शप्] (@ref[3.1.68]).

**Examples:**
@deva[अत्ति] "he eats" (@deva[अद्] + @deva[शप्] + @deva[ति] → @deva[अत्ति])
@deva[हन्ति] "he kills"
@deva[द्वेष्टि] "he hates"

@deva[अदादि] verbs are the second conjugation.`,

  '24073': `In @deva[छन्दस्], there is VARIOUS elision of @deva[शप्] (@ref[3.1.68]).

Sometimes elision occurs in non-@deva[अदादि] verbs; sometimes it doesn't occur in @deva[अदादि] verbs.

**Example:**
@deva[वृत्रं हनति] "he kills Vṛtra" (instead of @deva[हन्ति])

@deva[बहुलम्] = irregularly/variously.`,

  '24074': `There is VARIOUS @deva[लुक्] elision of @deva[यङ्] (@ref[3.1.22]) when @deva[अच्] (@ref[3.1.134]) follows.

**With elision:**
The intensive @deva[यङ्] is dropped before @deva[अच्].

**Without elision:**
@deva[यङ्] is retained normally.

@deva[बहुलम्] indicates optionality.`,

  '24075': `After @deva[हु] "sacrifice" and similar verbs (@deva[जुहोत्यादि] class), there is @deva[श्लु] elision of @deva[शप्] (@ref[3.1.68]).

@deva[श्लु] elision causes reduplication of the root.

**Examples:**
@deva[जुहोति] "he sacrifices" (@ref[7.1.10])
@deva[ददाति] "he gives"
@deva[दधाति] "he places"`,

  '24076': `In @deva[छन्दस्], there is VARIOUS elision of @deva[शप्].

Sometimes elision doesn't occur where ordained, or occurs where not ordained.

**Examples:**
@deva[दाति प्रियाणि] (instead of @deva[ददाति]) "he gives pleasant things"
@deva[धाति] (instead of @deva[दधाति])

Also @deva[श्लु] elision varies.`,

  '24077': `There is @deva[लुक्] elision of @deva[सिच्] (@ref[3.1.44]) in @deva[परस्मैपद] after @deva[गा] "go," @deva[स्था] "stand," @deva[घु]-class verbs (@ref[1.2.20]), @deva[पा] "drink," and @deva[भू] "be."

@deva[गा] is substitute for @deva[इण्] (@ref[2.4.45]).

**Example:**
@deva[अगात्] "he went" (aorist, @deva[सिच्] elided)`,

  '24078': `After @deva[घ्रा] "smell," @deva[धे] "drink," @deva[शो] "sharpen," @deva[छो] "cut," and @deva[सो] "destroy," there is OPTIONAL @deva[लुक्] elision of @deva[सिच्] in @deva[परस्मैपद].

**Examples:**
| With elision | Without |
|--------------|---------|
| @deva[अघ्रात्] | @deva[अघ्रासीत्] | "he smelled" |`,

  '24079': `After @deva[तन्] "expand" and similar verbs, there is OPTIONAL @deva[लुक्] elision of @deva[सिच्] when @deva[आत्मनेपद] 2nd-person affixes @deva[त] and @deva[थास्] follow.

**Examples:**
| With elision | Without |
|--------------|---------|
| @deva[अतत] | @deva[अतनिष्ट] | "you expanded" |
| @deva[अतथाः] | @deva[अतनिष्ठाः] | "you expanded" |`,

  '24080': `In @deva[मन्त्र] (Vedic hymns), there is @deva[लुक्] elision of aorist (and perfect) signs after @deva[घस्] "eat," @deva[हूर्] "be crooked," @deva[णश्] "destroy," @deva[वृ] "choose/cover," @deva[दह्] "burn," and roots ending in long @deva[आ].

This is specific to mantra portions of Vedas.`,

  '24081': `There is @deva[लुक्] elision of the tense-affix (@deva[ल्]) that comes after @deva[आम्] in the periphrastic perfect (@deva[लिट्]).

**Example:**
@deva[ईहांचक्रे] "he endeavored"

After @deva[ईहाम्], all tense-affixes are elided; the periphrastic perfect of @deva[कृ]/  @deva[भू]/  @deva[अस्] supplies the ending.`,

  '24082': `There is @deva[लुक्] elision of @deva[आप्] (feminine termination) and @deva[सुप्] (case-affixes) after an @deva[अव्यय] (indeclinable).

**Example:**
@deva[तत्र शालायाम्] "in that hall"

The indeclinable @deva[तत्र] "there" doesn't take feminine or case-affixes, though equivalent to @deva[तस्याम्].`,

  '24083': `There is NO @deva[लुक्] elision of case-affixes after an @deva[अव्ययीभाव] compound ending in @deva[अ]; instead, @deva[आम्] substitutes for case-affixes — but not for the 5th case.

This blocks @ref[2.4.82]. Instead of @deva[लुक्], @deva[आम्] replaces the case-affix.

**Example:**
@deva[उपकुम्भम्] (with @deva[आम्], not elided)`,

  '24084': `The change to @deva[अम्] of 3rd (instrumental) and 7th (locative) case-affixes after @deva[अव्ययीभाव] compounds ending in @deva[अ] occurs VARIOUSLY.

**Examples:**
| With आम् | Without |
|----------|---------|
| @deva[उपकुम्भम् कृतम्] | @deva[उपकुम्भेन कृतम्] | "done by Upakumbha" |
| @deva[उपकुम्भम् निधेहि] | @deva[उपकुम्भे निधेहि] | "place near the pot" |`,

  '24085': `@deva[डा], @deva[रौ], and @deva[रस्] substitute respectively for the three 3rd-person affixes of @deva[लुट्] (first future), in both @deva[परस्मैपद] and @deva[आत्मनेपद].

**Parasmaipada:**
| Singular | Dual | Plural |
|----------|------|--------|
| @deva[कर्ता] | @deva[कर्तारौ] | @deva[कर्तारः] |

**Ātmanepada:**
| Singular | Dual | Plural |
|----------|------|--------|
| @deva[कर्ता] | @deva[कर्तारौ] | @deva[कर्तारः] |

The forms are identical in 3rd person across both padas.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.4.61-85). Total: ${Object.keys(vasu).length}`);
