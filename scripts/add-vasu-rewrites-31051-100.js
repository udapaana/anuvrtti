import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '31051': `@deva[न चौ ऊनध्वनेलर्दाच्छन्दसि] — "In the Vedas, @deva[चङ्] is NOT the substitute of @deva[च्लि] after the causatives of @deva[ऊन], @deva[ध्वन], @deva[इल्], and @deva[अर्द]."

| Root | Meaning | Vedic Aorist | Classical Aorist |
|------|---------|--------------|------------------|
| @deva[ऊन] | to decrease | @deva[ऊनयीः] | @deva[औनिनस्] |
| @deva[ध्वन] | to sound | @deva[ध्वनयीत्] | @deva[अदिध्वनत्] |
| @deva[इल्] | to send | @deva[ऐलयीः] | @deva[ऐलिलत्] |
| @deva[अर्द] | to go/beg | @deva[अर्दयीत्] | @deva[आर्दिदत्] |

In classical Sanskrit, causatives form their aorist with @deva[चङ्] (reduplication). But in Vedic, these four roots use the regular @deva[अङ्]-aorist instead.`,

  '31052': `@deva[अस्वदख्याभ्योऽङ्] — "After @deva[अस्], @deva[वच्], and @deva[ख्या], @deva[अङ्] replaces @deva[च्लि] when @deva[लुङ्] follows with agent meaning."

| Root | Meaning | Aorist |
|------|---------|--------|
| @deva[अस्] (4P) | to throw | @deva[पर्यास्थत] |
| @deva[वच्] | to speak | @deva[अवोचत्] |
| @deva[ख्या] | to speak | @deva[आख्यत्] |

@note[The roots @deva[वच्] and @deva[ख्या] can also be substitutes for @deva[ब्रू] and @deva[चक्ष्] per @ref[2.4.53-54]. Though @deva[अस्] would take @deva[अङ्] anyway as a @deva[पुषादि] root, its mention here extends the rule to @deva[आत्मनेपद] as well.]`,

  '31053': `@deva[लिपसिचह्वश्च] — "After @deva[लिप्], @deva[सिच्], and @deva[ह्वे], @deva[अङ्] replaces @deva[च्लि] in @deva[लुङ्] with agent meaning."

| Root | Meaning | Aorist |
|------|---------|--------|
| @deva[लिप्] | to paint/write | @deva[अलिपत्] |
| @deva[सिच्] | to sprinkle | @deva[असिचत्] |
| @deva[ह्वे] | to call | @deva[आह्वत्] |`,

  '31054': `@deva[तयोरेव कृत्यक्तखलर्थाः] — "After @deva[लिप्], @deva[सिच्], and @deva[ह्वे], @deva[अङ्] optionally replaces @deva[च्लि] in @deva[आत्मनेपद]."

| Root | With @deva[अङ्] | Without @deva[अङ्] |
|------|---------------|------------------|
| @deva[लिप्] | @deva[अलिपत] | @deva[अलिप्त] |
| @deva[सिच्] | @deva[असिचत] | @deva[असिक्त] |
| @deva[ह्वे] | @deva[आह्वत] | @deva[आह्वास्त] |`,

  '31055': `@deva[पुषादिद्युतादिभ्यश्च] — "After @deva[पुषादि] and @deva[द्युतादि] roots, and roots with indicatory @deva[ऌ], @deva[अङ्] replaces @deva[च्लि] in @deva[परस्मैपद]."

| Class | Example Root | Meaning | Aorist |
|-------|--------------|---------|--------|
| @deva[पुषादि] (4th conj.) | @deva[पुष्] | to nourish | @deva[अपुषत्] |
| @deva[द्युतादि] (1st conj.) | @deva[द्युत्] | to shine | @deva[अद्युतत्] |
| Roots with @deva[ऌ] | @deva[गम्लृ] | to go | @deva[अगमत्] |

@note[This applies only to @deva[परस्मैपद]. In @deva[आत्मनेपद], the regular @deva[सिच्] is used: @deva[व्यद्योतिष्ट], @deva[अलोतिष्ट].]`,

  '31056': `@deva[सृजिदृशोर्झल्यमकिति] — "After @deva[सृ], @deva[शास्], and @deva[ऋ], @deva[अङ्] replaces @deva[च्लि] in both @deva[परस्मैपद] and @deva[आत्मनेपद]."

| Root | Meaning | Aorist |
|------|---------|--------|
| @deva[सृ] | to go | @deva[असरत्] |
| @deva[शास्] | to order | @deva[अशिषत्] |
| @deva[ऋ] | to go | @deva[आरत्] |

The @deva[च] in the sūtra draws the @deva[परस्मैपद] restriction from the previous rule while extending the option to @deva[आत्मनेपद] as well (e.g., @deva[समरन्त] per @ref[1.3.29]).`,

  '31057': `@deva[इरितो वा] — "After roots with indicatory @deva[इर्], @deva[अङ्] optionally replaces @deva[च्लि] in @deva[परस्मैपद]."

| Root | Meaning | With @deva[अङ्] | Without @deva[अङ्] |
|------|---------|---------------|------------------|
| @deva[भिदिर्] (@deva[भिद्]) | to divide | @deva[अभिदत्] | @deva[अभैत्सीत्] |
| @deva[छिदिर्] (@deva[छिद्]) | to cut | @deva[अच्छिदत्] | @deva[अच्छैत्सीत्] |

@note[In @deva[आत्मनेपद], only the @deva[सिच्]-aorist is used: @deva[अभित्त].]`,

  '31058': `@deva[जॄस्तम्भुम्रुचुम्लुचुग्रुचुग्लुचुग्लुञ्चुश्विभ्यश्च] — "After @deva[जॄ], @deva[स्तम्भ्], @deva[म्रुच्], @deva[म्लुच्], @deva[ग्रुच्], @deva[ग्लुच्], @deva[ग्लुञ्च्], and @deva[श्वि], @deva[अङ्] optionally replaces @deva[च्लि] in @deva[परस्मैपद]."

| Root | Meaning | With @deva[अङ्] | Without @deva[अङ्] |
|------|---------|---------------|------------------|
| @deva[जॄ] | to grow old | @deva[अजरत्] | @deva[अजारीत्] |
| @deva[स्तम्भ्] | to stiffen | @deva[अस्तम्भत्] | @deva[अस्तम्भीत्] |
| @deva[म्रुच्] | to go | @deva[अम्रुचत्] | @deva[अम्रोचीत्] |
| @deva[म्लुच्] | to go | @deva[अम्लुचत्] | @deva[अम्लोचीत्] |
| @deva[श्वि] | to grow | @deva[अश्वत्] | @deva[अश्वयीत्] |`,

  '31059': `@deva[कृमृदृरुहिभ्यश्छन्दसि] — "In the Vedas, @deva[अङ्] replaces @deva[च्लि] after @deva[कृ], @deva[मृ], @deva[दॄ], and @deva[रुह्]."

| Root | Meaning | Vedic Aorist | Classical Aorist |
|------|---------|--------------|------------------|
| @deva[कृ] | to do | @deva[अकरत्] | @deva[अकार्षीत्] |
| @deva[मृ] | to die | @deva[अमरत्] | @deva[अमृत] |
| @deva[दॄ] | to tear | @deva[अदरत्] | @deva[अदारीत्] |
| @deva[रुह्] | to rise | @deva[आरुहत्] | @deva[अरुक्षत्] |`,

  '31060': `@deva[पदश्च] — "@deva[चिण्] replaces @deva[च्लि] after @deva[पद्] when @deva[त] (3rd sg. @deva[आत्मनेपद]) follows."

**Derivation:**
@deva[अट्] + @deva[पद्] + @deva[चिण्] + @deva[त] → @deva[अ] + @deva[पाद्] + @deva[त] → @deva[अपादि] (with @deva[त] elided by @ref[6.4.104])

| Number | Form |
|--------|------|
| Singular | @deva[अपादि] |
| Dual | @deva[अपत्साताम्] (no @deva[चिण्]) |
| Plural | @deva[अपत्सत] (no @deva[चिण्]) |`,

  '31061': `@deva[दीप्जनबुधपूर्तायिप्यायिभ्यो वा] — "After @deva[दीप्], @deva[जन्], @deva[बुध्], @deva[पूर्], @deva[ताय्], and @deva[प्याय्], @deva[चिण्] optionally replaces @deva[च्लि] when @deva[त] follows."

| Root | Meaning | With @deva[चिण्] | Without @deva[चिण्] |
|------|---------|----------------|-------------------|
| @deva[दीप्] | to shine | @deva[अदीपि] | @deva[अदीपिष्ट] |
| @deva[जन्] | to be born | @deva[अजनि] | @deva[अजनिष्ट] |
| @deva[बुध्] | to know | @deva[अबोधि] | @deva[अबुद्ध] |
| @deva[पूर्] | to be full | @deva[अपूरि] | @deva[अपूरिष्ट] |
| @deva[ताय्] | to extend | @deva[अतायि] | @deva[अतायिष्ट] |
| @deva[प्याय्] | to grow | @deva[अप्यायि] | @deva[अप्यायिष्ट] |`,

  '31062': `@deva[वा कर्मकर्तरि] — "After vowel-final roots, @deva[चिण्] optionally replaces @deva[च्लि] when @deva[त] follows in reflexive voice (where the object itself is the agent)."

**With @deva[चिण्]:** @deva[अकारि कटः स्वयमेव] — "The mat became made of itself."
**Without @deva[चिण्]:** @deva[अकृत कटः स्वयमेव]

@note[For consonant-final roots in reflexive voice, @deva[चिण्] is obligatory, not optional.]`,

  '31063': `@deva[दुहश्च] — "After @deva[दुह्], @deva[चिण्] optionally replaces @deva[च्लि] when @deva[त] follows in reflexive voice."

**Reflexive:** @deva[अदोहि] or @deva[अदुग्ध] @deva[गौः स्वयमेव] — "The cow milked of itself."
**Non-reflexive:** @deva[अदोहि गौर्गोपालकेन] — "The cow was milked by the cowherd." (@deva[चिण्] is compulsory)`,

  '31064': `@deva[न रुधः] — "@deva[चिण्] does NOT replace @deva[च्लि] after @deva[रुध्] in reflexive voice (3rd sg. @deva[आत्मनेपद])."

**Reflexive:** @deva[अन्ववारुद्ध गौ स्वयमेव] — "The cow was obstructed of itself." (no @deva[चिण्])
**Non-reflexive:** @deva[अन्ववारोधि गौर्गोपालकेन] — "The cow was obstructed by the cowherd." (@deva[चिण्] used)`,

  '31065': `@deva[न तपः] — "@deva[चिण्] does NOT replace @deva[च्लि] after @deva[तप्] in reflexive voice when expressing remorse."

This prohibition extends to passive and impersonal uses:
- @deva[अतप्त तपस्तापसः] — "The ascetic performed austerity."
- @deva[अन्वतप्त पापेन कर्मणा] — "He repented from evil deeds."`,

  '31066': `@deva[भावकर्मणोः] — "@deva[चिण्] replaces @deva[च्लि] when @deva[त] (3rd sg. @deva[आत्मनेपद]) follows, denoting action (@deva[भाव]) or object (@deva[कर्म])."

| Voice | Example | Translation |
|-------|---------|-------------|
| Impersonal | @deva[अशयि भवता] | "It was lain by you" (you lay) |
| Passive | @deva[अकारि कटो देवदत्तेन] | "The mat was made by Devadatta" |`,

  '31067': `@deva[सार्वधातुके यक्] — "The affix @deva[यक्] comes after a root when a @deva[सार्वधातुक] affix follows, denoting action or object."

This forms the passive and impersonal in conjugational tenses:

| Voice | Example | Translation |
|-------|---------|-------------|
| Impersonal | @deva[आस्यते भवता] | "You sit" |
| Passive | @deva[क्रियते कटः] | "The mat is being made" |
| Reflexive | @deva[क्रियते कटः स्वयमेव] | "The mat makes itself" |

@note[The @deva[क] of @deva[यक्] is @deva[इत्], preventing @deva[गुण] and @deva[वृद्धि].]`,

  '31068': `@deva[कर्तरि शप्] — "The affix @deva[शप्] comes after a root when a @deva[सार्वधातुक] affix follows, signifying the agent."

This is the default @deva[विकरण] (conjugation marker) for active voice:

**Derivation of @deva[भवति]:**
@deva[भू] + @deva[शप्] + @deva[तिप्] → @deva[भू] + @deva[अ] + @deva[ति] → @deva[भो] + @deva[अ] + @deva[ति] (by @ref[7.3.84]) → @deva[भवति]

@note[The @deva[श] makes it @deva[सार्वधातुक] (by @ref[3.4.113]). The @deva[प्] indicates @deva[अनुदात्त] accent (by @ref[3.1.4]).]`,

  '31069': `@deva[दिवादिभ्यश्श्यन्] — "The affix @deva[श्यन्] comes after @deva[दिवादि] (4th conjugation) roots when a @deva[सार्वधातुक] affix with agent meaning follows."

**Derivation of @deva[दीव्यति]:**
@deva[दिव्] + @deva[श्यन्] + @deva[तिप्] → @deva[दीव्] + @deva[य] + @deva[ति] (by @ref[7.2.77]) → @deva[दीव्यति] "he plays"

Similarly: @deva[सीव्यति] "he sews"

@note[The @deva[न] indicates @deva[उदात्त] accent on the root (by @ref[6.1.197]). The @deva[श] makes it @deva[सार्वधातुक].]`,

  '31070': `@deva[भ्राशभ्लाशभ्रमुक्रमुक्लमुत्रसित्रुटिलषः] — "@deva[श्यन्] is optionally used after @deva[भ्राश्], @deva[भ्लाश्], @deva[भ्रम्], @deva[क्रम्], @deva[क्लम्], @deva[त्रस्], @deva[त्रुट्], and @deva[लष्] in active voice."

| Root | Meaning | With @deva[श्यन्] | Without @deva[श्यन्] |
|------|---------|-----------------|-------------------|
| @deva[भ्राश्] | to shine | @deva[भ्राश्यते] | @deva[भ्राशते] |
| @deva[भ्रम्] | to whirl | @deva[भ्राम्यति] | @deva[भ्रमति] |
| @deva[क्रम्] | to walk | @deva[क्राम्यति] | @deva[क्रामति] |
| @deva[त्रस्] | to fear | @deva[त्रस्यति] | @deva[त्रसति] |`,

  '31071': `@deva[अनुपसर्गाद्यसः] — "@deva[श्यन्] is optionally used after @deva[यस्] when it has no prefix and a @deva[सार्वधातुक] affix with agent meaning follows."

**Without prefix:** @deva[यस्यति] or @deva[यसति] "he strives"
**With prefix:** @deva[आयस्यति], @deva[प्रयस्यति] (no option—@deva[श्यन्] required)`,

  '31072': `@deva[संपृक्ते च] — "@deva[श्यन्] is optionally used after @deva[यस्] when preceded by @deva[सम्]."

Both forms are valid:
- @deva[संयस्यति] (with @deva[श्यन्])
- @deva[संयसति] (without @deva[श्यन्])`,

  '31073': `@deva[स्वादिभ्यः श्नुः] — "The affix @deva[श्नु] comes after @deva[स्वादि] (5th conjugation) roots when a @deva[सार्वधातुक] affix with agent meaning follows."

**Derivation of @deva[सुनोति]:**
@deva[सु] + @deva[श्नु] + @deva[तिप्] → @deva[सु] + @deva[नु] + @deva[ति] → @deva[सुनोति] "he presses out"`,

  '31074': `@deva[श्रुवः शृ च] — "For @deva[श्रु], @deva[शृ] is the substitute, and @deva[श्नु] follows when a @deva[सार्वधातुक] affix with agent meaning follows."

**Derivation of @deva[शृणोति]:**
@deva[श्रु] + @deva[श्नु] + @deva[तिप्] → @deva[शृ] + @deva[नु] + @deva[ति] → @deva[शृणोति] "he hears"

Dual: @deva[शृणुतः] "they two hear"`,

  '31075': `@deva[अक्षोऽन्यतरस्याम्] — "@deva[श्नु] is optionally used after @deva[अक्ष्] when preceded by @deva[सम्] and a @deva[सार्वधातुक] affix with agent meaning follows."

Both forms are valid:
- @deva[अक्ष्णोति] (with @deva[श्नु])
- @deva[अक्षति] (without @deva[श्नु])

Meaning: "he pervades/obtains"`,

  '31076': `@deva[सम्परेभ्यः तक्षः] — "@deva[श्नु] is optionally used after @deva[तक्ष्] when preceded by @deva[सम्] or @deva[परि]."

| Context | Forms | Meaning |
|---------|-------|---------|
| With @deva[सम्]/परि] | @deva[तक्षति] or @deva[तक्ष्णोति काष्ठम्] | "he hews the wood" |
| With other prefixes | @deva[सन्तक्षति वाग्भिः] | "he cuts with speech" |`,

  '31077': `@deva[तुदादिभ्यः शः] — "The affix @deva[श] comes after @deva[तुदादि] (6th conjugation) roots when a @deva[सार्वधातुक] affix with agent meaning follows."

**Derivation of @deva[तुदति]:**
@deva[तुद्] + @deva[श] + @deva[ति] → @deva[तुद्] + @deva[अ] + @deva[ति] → @deva[तुदति] (by @ref[1.2.4]) "he pains/torments"`,

  '31078': `@deva[रुधादिभ्यः श्नम्] — "The affix @deva[श्नम्] comes after @deva[रुधादि] (7th conjugation) roots when a @deva[सार्वधातुक] affix with agent meaning follows."

**Derivation of @deva[रुणद्धि]:**
@deva[रुध्] + @deva[श्नम्] + @deva[ति] → @deva[रुध्] + @deva[न] + @deva[ति] → @deva[रु] + @deva[न] + @deva[ध्] + @deva[ति] → @deva[रुणद्धि] "he obstructs"

@note[The @deva[म्] of @deva[श्नम्] indicates the affix is placed after the last vowel of the root (by @ref[1.1.47]). The @deva[श] triggers @ref[6.4.23].]`,

  '31079': `@deva[तनादिकृञ्भ्य उः] — "The affix @deva[उ] comes after @deva[तनादि] (8th conjugation) roots and @deva[कृ] when a @deva[सार्वधातुक] affix with agent meaning follows."

| Root | Form | Meaning |
|------|------|---------|
| @deva[तन्] | @deva[तनोति] | he expands |
| @deva[कृ] | @deva[करोति] | he makes |

@note[Though @deva[कृ] is in the @deva[तनादि] list, its separate mention restricts it to taking @deva[उ] only—other @deva[तनादि] operations (like @ref[2.4.79]) don't apply to it.]`,

  '31080': `@deva[धिन्वीकृण्वीभ्यामातः] — "After @deva[धिन्व्] and @deva[कृण्व्], the affix @deva[उ] is used, and @deva[अ] replaces the final @deva[इ]."

**Derivation of @deva[धिनोति]:**
@deva[धिन्व्] + @deva[उ] + @deva[ति] → @deva[धिन्] + @deva[अ] + @deva[उ] + @deva[ति] → @deva[धिन्] + @deva[उ] + @deva[ति] (by @ref[6.4.48]) → @deva[धिनोति] "he pleases"

@note[No @deva[गुण] occurs because the @deva[अ]-substitute (which is deleted) is treated as the original @deva[इ] (@deva[स्थानिवत्], by @ref[1.1.57]).]`,

  '31081': `@deva[क्र्यादिभ्यः श्ना] — "The affix @deva[श्ना] comes after @deva[क्र्यादि] (9th conjugation) roots when a @deva[सार्वधातुक] affix with agent meaning follows."

| Root | Form | Meaning |
|------|------|---------|
| @deva[क्री] | @deva[क्रीणाति] | he buys |
| @deva[प्री] | @deva[प्रीणाति] | he pleases |`,

  '31082': `@deva[स्तम्भुस्तुम्भुस्कम्भुस्कुम्भुस्कुञ्भ्यः श्नुश्च] — "After @deva[स्तम्भ्], @deva[स्तुम्भ्], @deva[स्कम्भ्], @deva[स्कुम्भ्], and @deva[स्कु], both @deva[श्ना] and @deva[श्नु] are used when a @deva[सार्वधातुक] affix with agent meaning follows."

| Root | With @deva[श्ना] | With @deva[श्नु] |
|------|----------------|-----------------|
| @deva[स्तम्भ्] | @deva[स्तभ्नाति] | @deva[स्तभ्नोति] |
| @deva[स्तुम्भ्] | @deva[स्तुभ्नाति] | @deva[स्तुभ्नोति] |
| @deva[स्कम्भ्] | @deva[स्कभ्नाति] | @deva[स्कभ्नोति] |
| @deva[स्कु] | @deva[स्कुनाति] | @deva[स्कुनोति] |

@note[The first four roots are @deva[सौत्र] (found only in sūtras, not in the @deva[धातुपाठ]).]`,

  '31083': `@deva[हलः श्नः शानज्वा] — "@deva[शानच्] replaces @deva[श्ना] after consonant-final roots when @deva[हि] (2nd sg. imperative) follows."

| Root | Form | Meaning |
|------|------|---------|
| @deva[पुष्] | @deva[पुषाण] | nourish! |
| @deva[ग्रह्] | @deva[गृहाण] | take! |

But for vowel-final roots: @deva[क्रीणीहि] "buy!" (no substitution)`,

  '31084': `@deva[शायच्छन्दसि] — "In the Vedas, @deva[शायच्] also replaces @deva[श्ना] after consonant-final roots when @deva[हि] follows."

**Vedic examples:**
- @deva[गृभाय जिह्वया मधु] (Ṛg Veda VIII.17.5)
- @deva[बधान पशून्] "kill the beasts" (with @deva[शानच्] instead)`,

  '31085': `@deva[छन्दस्युभयथा] — "In the Vedas, the @deva[विकरण] affixes (@deva[शप्] etc.) are interchanged diversely."

| Classical Form | Vedic Form | Root Class |
|----------------|------------|------------|
| @deva[भिनत्ति] | @deva[भेदति] (@deva[शप्]) | @deva[रुधादि] |
| @deva[म्रियते] | @deva[मरते] (@deva[शप्]) | @deva[तुदादि] |

The word @deva[व्यत्यय] means transgression of rules or interchange—sometimes two @deva[विकरण] affixes are used at once.`,

  '31086': `@deva[आशीर्लिङि च] — "In the Vedas, @deva[अङ्] is used when @deva[आशीर्लिङ्] (benedictive) affixes follow."

This applies specifically to roots @deva[स्था], @deva[गा], @deva[गम्], @deva[वच्], @deva[वद्], @deva[शक्], and @deva[रुह्]:

| Root | Vedic Benedictive |
|------|-------------------|
| @deva[स्था] | @deva[उपस्थेयम्] |
| @deva[गम्] | @deva[गमेम जानतो गृहान्] |
| @deva[वच्] | @deva[मन्त्र वोचेमाग्नये] |
| @deva[रुह्] | @deva[स्वर्गं लोकमारुहेयम्] |`,

  '31087': `@deva[कर्मवत्कर्मणा तुल्यक्रियः] — "When the action affecting the agent is similar to what affects the object, the @deva[ल] (tense marker) denoting agent is treated as if it denoted the object."

This rule governs **reflexive verbs** (@deva[कर्मकर्तरि]):
- @deva[यक्] is added (by @ref[3.1.67])
- @deva[आत्मनेपद] endings are used (by @ref[1.3.13])
- @deva[चिण्] replaces @deva[च्लि] (by @ref[3.1.66])

**Example:** @deva[भिद्यते काष्ठं स्वयमेव] "The wood splits of itself"`,

  '31088': `@deva[तपस्तपसो'न्यतरस्याम्] — "The agent of @deva[तप्] becomes like the object only when the object is @deva[तपस्] itself."

**With @deva[तपस्]:** @deva[तप्यते तपस्तापसः] "The ascetic performs austere devotion"
**With other objects:** @deva[उत्तपति सुवर्णं सुवर्णकारः] "The goldsmith heats the gold" (not reflexive)`,

  '31089': `@deva[न दुहस्नुनमाम्] — "@deva[यक्] and @deva[चिण्] are NOT used in the reflexive voice of @deva[दुह्], @deva[स्नु], and @deva[नम्]."

| Root | Meaning | Present | Aorist |
|------|---------|---------|--------|
| @deva[दुह्] | to milk | @deva[दुग्धे] | @deva[अदुग्ध] or @deva[अदोहि] |
| @deva[स्नु] | to drip | @deva[प्रस्नुते] | @deva[प्रास्नीष्ट] |
| @deva[नम्] | to bow | — | — |

@note[For @deva[दुह्], @deva[चिण्] is optionally used per @ref[3.1.63], but @deva[यक्] is prohibited.]`,

  '31090': `@deva[कुषरञ्जोः पूर्वे] — "According to Eastern grammarians, @deva[श्यन्] is used after @deva[कुष्] and @deva[रञ्ज्] in reflexive voice, with @deva[परस्मैपद] endings."

| Root | Meaning | Form |
|------|---------|------|
| @deva[कुष्] | to pull | @deva[कुष्यति पादः स्वयमेव] |
| @deva[रञ्ज्] | to color | @deva[रज्यति वस्त्रं स्वयमेव] |

@note[The phrase "Eastern grammarians" indicates this is optional; @deva[कुष्यते] and @deva[रज्यते] are also valid.]`,

  '31091': `@deva[धातोः] — "From this sūtra to the end of Book 3, all affixes are understood to come after a verbal root."

This is an @deva[अधिकार] (governing rule). All verbal affixes in chapters 3.1-3.4 are broadly classified as:
- @deva[कृत्] affixes — primary nominal affixes
- @deva[कृत्य] affixes — verbal adjectives`,

  '31092': `@deva[तत्रोपात्तसंख्यार्थास्तृतीयायाः] — "In Book 3, a word in the locative case refers to an @deva[उपपद] (dependent word)."

**Example from @ref[3.2.1]:**
The word @deva[कर्मणि] (locative) implies a word in the accusative case.

@deva[कुम्भम्] + @deva[कृ] + @deva[अण्] → @deva[कुम्भकारः] "potter"

Here @deva[कुम्भम्] is the @deva[उपपद].`,

  '31093': `@deva[कृदतिङ्] — "In this section dealing with verbal roots, any affix except @deva[तिङ्] (tense endings) is called @deva[कृत्]."

@deva[कृत्] affixes form nominal bases (@deva[प्रातिपदिक]) from roots:

**Example:** @deva[कृ] + @deva[तव्यम्] → @deva[कर्तव्यम्] "to be done"

@note[Unlike @deva[तिङ्] affixes which form finite verbs (@deva[चीयात्] "may he collect"), @deva[कृत्] affixes form nouns and adjectives.]`,

  '31094': `@deva[आद्यन्तौ टकितौ] — "An affix meant to debar a general one (without being identical) optionally debars it—except for feminine affixes."

The affixes @deva[ण्वुल्] and @deva[तृच्] (by @ref[3.1.133]) are general agent-noun affixes.
The affix @deva[क] (by @ref[3.1.135]) is a special (@deva[अपवाद]) affix for roots with penultimate @deva[इक्] vowel.

Since they differ in form, the special rule optionally applies—both forms are valid.`,

  '31095': `@deva[कृत्याः] — "From this sūtra through @ref[3.1.133], all affixes treated are called @deva[कृत्य]."

@deva[कृत्य] affixes are a subdivision of @deva[कृत्] that form **passive potential participles** (like Latin gerundives in "-ndus"):
- @deva[तव्य] → @deva[कर्तव्य] "to be done"
- @deva[अनीय] → @deva[करणीय] "to be done"
- @deva[य] → @deva[कार्य] "to be done"

These express that an action *ought to be* or *will be* done.`,

  '31096': `@deva[तव्यत्तव्यानीयरः] — "The affixes @deva[तव्यत्], @deva[तव्य], and @deva[अनीयर्] come after verbal roots."

These form future passive participles:

| Affix | Root | Result | Meaning |
|-------|------|--------|---------|
| @deva[तव्यत्] | @deva[कृ] | @deva[कर्तव्य] | to be done |
| @deva[तव्य] | @deva[कृ] | @deva[कर्तव्य] | to be done |
| @deva[अनीयर्] | @deva[कृ] | @deva[करणीय] | to be done |

All three express the same meaning: obligation or necessity.`,

  '31097': `@deva[भव्यगेयप्रवचनीयेष्ठ्या इति च] — "The forms @deva[भव्य], @deva[गेय], and @deva[प्रवचनीय] are valid, as are forms with @deva[इष्ठ्या]."

This validates certain irregular formations:
- @deva[भव्य] from @deva[भू] (instead of expected @deva[भवितव्य])
- @deva[गेय] from @deva[गै] (instead of @deva[गातव्य])
- @deva[प्रवचनीय] from @deva[वच्] with @deva[प्र]`,

  '31098': `@deva[न यासयोः] — "@deva[तव्य] etc. are not used after @deva[या] and @deva[यस्]."

The roots @deva[या] "to go" and @deva[यस्] "to strive" do not take @deva[तव्य], @deva[तव्यत्], or @deva[अनीयर्] affixes directly.

Alternative formations are used instead.`,

  '31099': `@deva[शकि लृट्] — "After @deva[शक्], @deva[लृट्] (simple future) is used (in the sense of obligation)."

Instead of @deva[*शक्तव्य], the future tense expresses the meaning:
@deva[शक्ष्यति] "he will be able" = "he should be able"`,

  '31100': `@deva[अयं स्म च] — "@deva[लृट्] is also used with @deva[स्म] after @deva[शक्]."

@deva[शक्ष्यते स्म] expresses past obligation: "he was supposed to be able"

The particle @deva[स्म] shifts the future into past reference.`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.1.51-100). Total: ${Object.keys(vasu).length}`);
