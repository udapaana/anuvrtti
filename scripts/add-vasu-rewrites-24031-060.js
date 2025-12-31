import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

// Pāda 2.4: Luk, ślu, lup (elision) - sūtras 31-60
const newEntries = {
  '24031': `@deva[अर्धर्च] and similar words are spoken of in BOTH masculine AND neuter.

**Examples:**
| Masculine | Neuter | Meaning |
|-----------|--------|---------|
| @deva[अर्धर्चः] | @deva[अर्धर्चम्] | "half a verse" |
| @deva[गोमयः] | @deva[गोमयम्] | "cow-dung" |

Sometimes the two genders convey different meanings.`,

  '24032': `In re-employment (@deva[अन्वादेश]) of @deva[इदम्] referring to the same thing, @deva[अश्] (gravely accented) substitutes when 3rd case-affix or later follows.

**Examples:**
@deva[इदम् अनेन कृतम्] "this was done by him" (→ @deva[अनेन] from @deva[इदम्])

The substitute @deva[अ] takes forms like @deva[अनेन], @deva[अस्मै], @deva[अस्मात्], etc.`,

  '24033': `In re-employment of @deva[एतद्], gravely accented @deva[अश्] substitutes when @deva[त्रल्] (@ref[5.3.10]) or @deva[तसिल्] (@ref[5.3.7]) follows.

The affixes @deva[त्र] and @deva[तस्] become @deva[अनुदात्त].

**Examples:**
@deva[एतत् अत्र] → @deva[अत्र] "here"
@deva[एतत् अतः] → @deva[अतः] "from here"`,

  '24034': `When 2nd case-affix, @deva[टा] (3rd singular), or @deva[ओस्] (7th dual) follows, @deva[एन्] (gravely accented) substitutes for @deva[इदम्] and its re-employment.

**Examples:**
| Form | Case |
|------|------|
| @deva[एनम्] | accusative singular |
| @deva[एनेन] | instrumental singular |
| @deva[एनयोः] | locative dual |`,

  '24035': `The phrase "when the affix is @deva[आर्धधातुक]" (@ref[3.4.114]) governs sūtras through @ref[2.4.58].

This @deva[अधिकार] establishes that following root-substitution rules apply only before @deva[आर्धधातुक] affixes.`,

  '24036': `@deva[जग्धि] substitutes for @deva[अद्] "eat" when @deva[ल्यप्] (@ref[7.1.37]) or an @deva[आर्धधातुक] @deva[कित्] affix beginning with @deva[त्] follows.

**Examples:**
@deva[प्रजग्ध्य] "having eaten" (@deva[प्र] + @deva[अद्] + @deva[ल्यप्])
@deva[जग्ध्वा] "having eaten"`,

  '24037': `@deva[घसॢ] substitutes for @deva[अद्] "eat" when @deva[लुङ्] (aorist) or @deva[सन्] (desiderative) follows.

**Examples:**
@deva[अघसत्], @deva[अघसताम्], @deva[अघसन्] "he/they ate"

The @deva[ॢ] indicates @deva[अङ्] substitution for aorist @deva[च्लि] (@ref[3.1.55]).`,

  '24038': `@deva[घसॢ] also substitutes for @deva[अद्] when @deva[घञ्] or @deva[अप्] follows.

**Examples:**
@deva[घासः] "food, grass" (@deva[अद्] + @deva[घञ्])
@deva[प्रघसः] "voracity" (@deva[प्र] + @deva[अद्] + @deva[अप्])`,

  '24039': `In @deva[छन्दस्], @deva[घसॢ] variously substitutes for @deva[अद्].

**Examples:**
@deva[घस्तान् नूनम्] (Yajur Veda)
@deva[सग्धिश्चने]

Sometimes no substitution: @deva[आताम् अद्य मध्यतो भेद उद्भृतम्]

@deva[बहुलम्] = "variously" (optional/irregular).`,

  '24040': `@deva[घसॢ] OPTIONALLY substitutes for @deva[अद्] when @deva[लिट्] (perfect) follows.

**Examples:**
| With घस् | Without |
|----------|---------|
| @deva[जघास] | @deva[आद] | "he ate" |
| @deva[जक्षतुः] | @deva[आदतुः] | "they two ate" |
| @deva[जक्षुः] | @deva[आदुः] | "they all ate" |`,

  '24041': `@deva[वयि] OPTIONALLY substitutes for @deva[वेञ्] "weave" when @deva[लिट्] (perfect) follows.

**Without substitution:**
@deva[वे] + @deva[लिट्] = @deva[ववौ] "he wove"

**With substitution:**
@deva[उवाय] "he wove"

Roots in @deva[ए] normally reduplicate with @deva[व].`,

  '24042': `@deva[वध्] substitutes for @deva[हन्] "kill" when @deva[आर्धधातुक] @deva[लिङ्] (benedictive) follows.

**Examples:**
@deva[वध्यात्] "may he kill"
@deva[वध्यास्ताम्] "may they two kill"
@deva[वध्यासुः] "may they all kill"

The @deva[अ] of @deva[वध्] is elided.`,

  '24043': `@deva[वध्] also substitutes for @deva[हन्] when @deva[लुङ्] (aorist) follows.

**Examples:**
@deva[अवधीत्] "he killed"
@deva[अवधीष्टाम्] "they two killed"

The sūtra division (@deva[योगविभाग]) indicates this rule is separate from benedictive.`,

  '24044': `When @deva[आत्मनेपद] affixes follow, @deva[वध्] OPTIONALLY substitutes for @deva[हन्] in @deva[लुङ्] (aorist).

**Examples:**
| With वध् | Without |
|----------|---------|
| @deva[आवधिष्ट] | @deva[आहत] |
| @deva[आवधिषाताम्] | @deva[आहसाताम्] |
| @deva[आवधिषत] | @deva[आहसत] |

@deva[हन्] becomes ātmanepadi when preceded by @deva[आ] (@ref[1.3.28]).`,

  '24045': `@deva[गा] substitutes for @deva[इण्] "go" when @deva[लुङ्] (aorist) follows.

**Examples:**
@deva[अगात्] "he went" (@ref[2.4.77])
@deva[अगाताम्] "they two went"
@deva[अगुः] "they all went"

The @deva[लुङ्] is repeated though already in @deva[अनुवृत्ति].`,

  '24046': `@deva[गामि] substitutes for @deva[इण्] when causal @deva[णि] follows — provided the sense is "going," not "informing."

**Examples:**
@deva[गमयति] "makes him go"
@deva[गमयतः], @deva[गमयन्ति]

But: @deva[प्रत्याययति] "causes to believe" (no substitution).

The @deva[इ] of @deva[गमि] is for articulation.`,

  '24047': `@deva[गमि] substitutes for @deva[इण्] when @deva[सन्] (desiderative) follows — not in "informing" sense.

**Examples:**
@deva[जिगमिषति] "wishes to go"
@deva[जिगमिषतः], @deva[जिगमिषन्ति]

But: @deva[अर्थान् प्रतीषिषति] "wishes to inform the meaning" (no substitution).`,

  '24048': `@deva[गमि] substitutes for @deva[इङ्] "study" when @deva[सन्] follows.

**Examples:**
@deva[अधिजिगांसते] "wishes to study"
@deva[अधिजिगांसेते], @deva[अधिजिगांसन्ते]

@deva[इङ्] always requires @deva[अधि] prefix. Ātmanepadi by @ref[1.3.12] and @ref[1.1.56].`,

  '24049': `@deva[गाम्] substitutes for @deva[इङ्] "study" when @deva[लिट्] (perfect) follows.

The substitute is like the original (@ref[1.1.68]), so @deva[गाङ्] would be ātmanepadi.

The indicatory @deva[ङ्] is added so that @ref[2.4.1] applies, treating following affixes as @deva[ङित्].`,

  '24050': `@deva[गाङ्] OPTIONALLY substitutes for @deva[इङ्] when @deva[लुङ्] (aorist) or @deva[लृङ्] (conditional) follows.

@deva[लुङ्] and @deva[लृङ्] affixes are @deva[ङित्] by @ref[1.2.1].

By @ref[6.4.71], @deva[ई] optionally replaces @deva[गाङ्]'s final.`,

  '24051': `@deva[गाङ्] OPTIONALLY substitutes for @deva[इङ्] in the causative (@deva[णि]) when that causative takes @deva[सन्] (desiderative) or @deva[चङ्] (aorist).

**Examples:**
| With गा | Without |
|---------|---------|
| @deva[अधिजिगापयिषति] | @deva[अध्यापिपयिषति] | "wishes to teach" |

@deva[गा] + @deva[णिच्] = @deva[गापि].`,

  '24052': `@deva[भू] substitutes for @deva[अस्] "be" when an @deva[आर्धधातुक] affix follows.

**Examples:**
@deva[भविता] "will be"
@deva[भवितुम्] "to be"
@deva[भवितव्यम्] "must be"

Perfect affixes are also @deva[आर्धधातुक] (@ref[3.4.115]). Perfect of @deva[अस्] is @deva[बभूव].`,

  '24053': `@deva[वचि] substitutes for @deva[ब्रू] "speak" when an @deva[आर्धधातुक] affix follows.

**Examples:**
@deva[वक्ता] "will speak"
@deva[वक्तुम्] "to speak"

The @deva[इ] of @deva[वचि] is for articulation. Being like principal, @deva[वच्] is ātmanepadi (@deva[ब्रू] is @deva[उ॑भयपदी]).`,

  '24054': `@deva[ख्याञ्] substitutes for @deva[चक्षिङ्] "perceive/tell" when an @deva[आर्धधातुक] affix follows.

**Examples:**
@deva[आख्याता] "will tell"
@deva[आख्यातुम्] "to tell"
@deva[आख्यातव्यम्] "must be told"

Like principal, @deva[चक्षिङ्] being ātmanepadi, so is @deva[ख्याञ्].`,

  '24055': `@deva[ख्याञ्] OPTIONALLY substitutes for @deva[चक्षिङ्] when @deva[लिट्] (perfect) follows.

**Examples:**
| With ख्या | Without |
|-----------|---------|
| @deva[चख्यौ] | @deva[चचक्षे] | "he perceived" |

@deva[लिट्] is @deva[आर्धधातुक]; this sūtra makes substitution optional.`,

  '24056': `@deva[वी] substitutes for @deva[अज्] "drive/lead" when an @deva[आर्धधातुक] affix follows — EXCEPT @deva[घञ्] (@ref[3.3.18]) and @deva[अप्] (@ref[3.3.69]).

**Examples:**
@deva[प्रवायकः] "driver"
@deva[प्रवायणीयः]

But: @deva[समाजः] "assembly" (with @deva[घञ्], no substitution).`,

  '24057': `@deva[वी] OPTIONALLY substitutes for @deva[अज्] when @deva[ल्युट्] follows.

**Examples:**
| With वी | Without |
|---------|---------|
| @deva[प्रवयणः] | @deva[प्राजनः] | "driving stick" |

@deva[यु] in the sūtra refers to @deva[ल्युट्].`,

  '24058': `After a word ending in @deva[गोत्र] affix @deva[ण्य] (@ref[4.1.151]), or a @deva[गोत्र] word of kṣatriya/ṛṣi descendant, or a @deva[गोत्र] affix with indicatory @deva[ञ्], the @deva[युवन्] affix undergoes @deva[लुक्] elision.

This ends the @deva[आर्धधातुक] section. Now @deva[लुक्] rules for nominal affixes begin.`,

  '24059': `After @deva[पैल] and similar words, there is @deva[लुक्] elision of the @deva[युवन्] affix.

**Example:**
@deva[पैलः] (@deva[पील] + @deva[अण्], @ref[4.1.118]) = "@deva[गोत्र] descendant of Paila"

The @deva[युवन्] affix @deva[फिञ्] (@ref[4.1.156]) is elided.`,

  '24060': `After a @deva[गोत्र]-affix word, @deva[लुक्] elision of @deva[युवन्] affix occurs when denoting the @deva[गोत्र] of @deva[प्राच्य] "Eastern" people.

**Example:**
@deva[पान्नागरिः] (@deva[पान्नागर] + @deva[इञ्]) = "@deva[गोत्र] descendant of Pannāgara"

The @deva[युवन्] affix is elided after this.`
};

// Add the new entries
let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

// Write back
fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));

console.log(`Added ${added} entries (2.4.31-60). Total: ${Object.keys(vasu).length}`);
