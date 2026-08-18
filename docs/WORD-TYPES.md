# Every kind of word, and what each must be annotated for

The annotation vocabulary grew one reading at a time and now has **205 distinct
`term` tags, 123 of them used once or twice** — root names, sandhi processes,
affixes and grammatical features all in one flat namespace, with no statement
of which are required. That is why 95% of nouns carry no वचन: nothing ever said
they should.

This is the inventory, decomposed to the level where a value is atomic — where
the next question down is no longer "which kind?" but "which cell?".

**It is also code.** `src/lib/usage/schema.ts` carries this document as data —
the types, their markers, every dimension with its closed value set and whether
it is authored or derived. `bun run complete` validates the corpus against it,
and `build-readings` reads the same file to know which dimensions it may fill
in. Adding a dimension there makes it checked; nothing is hardcoded in the
checker. If this prose and that file disagree, the file is what runs.

Two ideas run through it:

- **A dimension is a coordinate, not a description.** Closed set of values, the
  same question for every word of that type, and two words with the same
  coordinates are the same cell. Which sūtra applied is commentary.
- **A subtype is not a dimension.** क्त and शतृ are both कृदन्त, but knowing which
  one changes *what the word is*, not where it sits in a grid. Subtypes select
  the paradigm; dimensions locate a form inside it.

Pāṇini's own top cut is **सुबन्तं तिङन्तं च पदम्** — every word is either
सुप्-final or तिङ्-final, and everything below is how the stem got built.

```
पद
├── सुबन्त — takes सुप्
│   ├── by origin      प्रातिपदिक (underived) · कृदन्त · तद्धित · समास
│   └── by paradigm    नाम · सर्वनाम · सर्वादि · संख्या · विशेषण
└── तिङन्त — takes तिङ्
    └── by stem        धातु + गण, ± सनादि, ± उपसर्ग
अव्यय — takes neither, by 1.1.37
```

---

# 1. सुबन्त

Anything taking सुप् endings. 1,242 words. **Every सुबन्त carries the same four
dimensions no matter how its stem was built** — that is the point of the class.

| dimension | values | source |
|---|---|---|
| **प्रातिपदिक** | the stem (`lemma`) | **authored** |
| **लिङ्ग** | पुंलिङ्ग · स्त्रीलिङ्ग · नपुंसकलिङ्ग | derived (narrowed from forms) |
| **विभक्ति** | प्रथमा द्वितीया तृतीया चतुर्थी पञ्चमी षष्ठी सप्तमी सम्बोधन | **authored** |
| **वचन** | एकवचन · द्विवचन · बहुवचन | derived |
| **कारक** | कर्तृ कर्मन् करण सम्प्रदान अपादान अधिकरण सम्बन्ध | **authored**, when the sentence assigns one |

## 1a. By paradigm — which endings the stem takes

The atomic unit here is **(final sound × liṅga)**, which is what a declension
table *is*. This is the browse taxonomy in `src/lib/usage/taxonomy.ts`.

| class | atomic members | exemplar |
|---|---|---|
| **अजन्त** vowel-final | अकारान्त पुं · अकारान्त नपुं · आकारान्त स्त्री · इकारान्त पुं/स्त्री/नपुं · ईकारान्त स्त्री · उकारान्त पुं/स्त्री/नपुं · ऊकारान्त स्त्री · ऋकारान्त पुं/स्त्री · ॠ · एकारान्त · ओकारान्त | देव, फल, सेना, अग्नि, नदी, गुरु, धेनु, पितृ, मातृ |
| **हलन्त** consonant-final | न्-अन्त (राजन्) · त्-अन्त (मरुत्) · स्-अन्त (मनस्, नपुं) · इन्-अन्त (योगिन्) · वत्/मत्-अन्त (भगवत्) · अन्च्-अन्त (प्राञ्च्) · ज्/श्/ष्-अन्त (वणिज्, दिश्) | राजन्, मरुत्, मनस् |

Two cross-cutting facts that are *not* the ending:

- **वृद्ध / अवृद्ध** — whether the stem's first vowel is वृद्धि. Governs which
  तद्धित suffixes may attach.
- **नदी / घि / भ संज्ञा** — technical stem-classes (1.4.3–1.4.19) that decide
  which endings behave irregularly. Never annotated today.

## 1b. सर्वनाम — pronouns

A **closed list** (सर्वादि-गण's pronominal core): तद् एतद् इदम् अदस् यद् किम्
अस्मद् युष्मद् भवत्. Own paradigm — तस्मै not *तद्+आय, तस्मिन् not *तदे.

| subtype | members |
|---|---|
| पुरुषवाचक | अस्मद् · युष्मद् — **no liṅga at all**, and no सम्बोधन |
| निर्देशवाचक | तद् (that) · एतद् (this, near) · इदम् (this) · अदस् (that, remote) |
| प्रश्नवाचक | किम् |
| सम्बन्धवाचक | यद् |
| आदरवाचक | भवत् — takes third-person verbs |

**A pronoun has no gender of its own.** Recording the gender of the *occurrence*
is meaningful; of the *word*, a category error.

## 1c. सर्वादि — pronominal adjectives

By **1.1.27 सर्वादीनि सर्वनामानि**, ~35 words take pronominal endings while
remaining ordinary adjectives with their own gender: सर्व, विश्व, उभय, अन्य,
अन्यतर, इतर, त्व, नेम, सम, सिम, पूर्व, पर, अवर, दक्षिण, उत्तर, अपर, अधर, स्व, अन्तर.

Same dimensions as any सुबन्त. The class only changes which forms appear —
सर्वस्मै beside देवाय. **Corpus has three: सर्व, एक, अन्य.**

## 1d. संख्या — numerals

| subtype | behaviour |
|---|---|
| एक | declines as सर्वादि; singular only |
| द्वि | **dual only** |
| त्रि, चतुर् | gender-distinct, plural only, irregular |
| पञ्चन्–दशन् and up | **no gender**, one form for प्रथमा and द्वितीया, plural only |
| पूरण ordinals | प्रथम, द्वितीय… — decline as ordinary adjectives |
| संख्येय / संख्यान | the counted vs the count |

## 1e. विशेषण — adjectives

**No dimensions of its own.** It copies लिङ्ग, विभक्ति and वचन from the noun it
qualifies — that agreement is the fact worth recording, and there is **no field
for the link today**, though 69 words are tagged विशेषण.

Degrees, formed by तद्धित (§3): तरप्/तमप् on nominals (श्रेष्ठतर), इष्ठन्/ईयसुन्
on the root-grade (श्रेष्ठ, गरीयस्).

## 1f. कृदन्त — stems built from a root

106 words. **The first cut is whether it declines**, because that decides
whether §1's dimensions apply at all. Not recorded today, which is why 0% of
कृदन्त carry विभक्ति.

**Declining — a सुबन्त with all of §1's dimensions on top:**

| group | suffixes | sense |
|---|---|---|
| निष्ठा | क्त · क्तवतु | past passive / past active participle |
| present participles | शतृ (परस्मै) · शानच् (आत्मने) | doing |
| future participles | स्यत् · स्यमान | about to do |
| perfect participle | क्वसु · कानच् | having done |
| **कृत्य** gerundives | तव्य · अनीयर् · ण्यत् · यत् · क्यप् | to be done |
| agent nouns | तृच् (कर्तृ) · तृन् (habitual) · ण्वुल् (कारक) · णिनि | doer |
| action nouns | घञ् (पाकः) · ल्युट् (गमनम्) · क्तिन् (गतिः, स्त्री) · अङ् · अच् | the act as a thing |

**Indeclinable — no further dimensions (these are अव्यय by 1.1.40):**

| suffix | |
|---|---|
| क्त्वा | gerund, same-subject prior action, **no उपसर्ग** |
| ल्यप् | the same **with** an उपसर्ग — आगत्य not *आगत्वा |
| तुमुन् | infinitive |

The क्त्वा/ल्यप् alternation is conditioned purely by whether a preverb is
present — a clean minimal pair the corpus can teach.

## 1g. तद्धित — stems built from a nominal

Always सुबन्त afterwards, so §1's dimensions all apply, plus:

| dimension | |
|---|---|
| **प्रकृति** | the base stem — उपगु for औपगव |
| **तद्धित** | the suffix |
| **अर्थ** | the sense it carries — the point of the whole class |

| अर्थ | suffixes | example |
|---|---|---|
| अपत्य patronymic | अण् · इञ् · ढक् · यञ् | उपगु → औपगव |
| तस्येदम् belonging | अण् · छ · यत् | शिव → शैव |
| मतुप् possession | मतुप् · विनि · इन् · वत् | धनवत्, बलिन् |
| भाव abstract | त्व · तल् (स्त्री) · ष्यञ् · इमनिच् | देवत्व, देवता |
| अतिशायन comparison | तरप् · तमप् · इष्ठन् · ईयसुन् | श्रेष्ठतम |
| तत्र भवः origin | अण् · ठक् | मथुरा → माथुर |
| संख्या-derived | डति · तसिल् · धा · कृत्वसुच् | द्विधा, पञ्चकृत्वः |
| adverbial | वति · तसिल् · त्रल् · दा · था | यथावत्, ततः, तत्र, तदा, तथा |

**अवृद्ध stems take आदिवृद्धि** (7.2.117) when a तद्धित attaches — the first vowel
is strengthened. That is what makes उपगु → औपगव rather than *उपगव.

## 1h. समास — compounds

One word, one set of endings, so all of §1 applies. Extra:

| dimension | |
|---|---|
| **समास type** | which of the four |
| **विग्रह** | the analysis — nothing derives it |
| **पूर्वपद / उत्तरपद** | the members |

| type | test | subtypes |
|---|---|---|
| **तत्पुरुष** | prior member in a case relation; **latter is head** | द्वितीया- तृतीया- चतुर्थी- पञ्चमी- षष्ठी- सप्तमी-तत्पुरुष · नञ् (negative) · प्रादि (preverb-first) · उपपद (verb-governed: कुम्भकार) · **गति** |
| **कर्मधारय** | both members same case, one qualifies the other | विशेषण-पूर्वपद (नीलोत्पल) · उपमान (घनश्याम) · अवधारण (विद्याधनम्) |
| **द्विगु** | कर्मधारय whose first member is a numeral | त्रिलोकी, पञ्चवटी |
| **बहुव्रीहि** | **neither member is the head** — refers outward | समानाधिकरण (पीताम्बरः) · व्यधिकरण · सहपूर्वपद · नञ् |
| **द्वन्द्व** | coordination, both heads | इतरेतर (plural: रामकृष्णौ) · समाहार (**neuter singular**: पाणिपादम्) |
| **अव्ययीभाव** | first member indeclinable; **whole becomes अव्यय** | यथाशक्ति, उपकुम्भम् — no dimensions at all |

कर्मधारय and द्विगु are formally sub-classes of तत्पुरुष (1.2.42); बहुव्रीहि and
द्वन्द्व are not.

---

# 2. तिङन्त

369 words. **The dimensions locate a form; the stem-modifiers change which verb
it is.**

| dimension | values | source |
|---|---|---|
| **धातु** | the root (`lemma`) | **authored** |
| **लकार** | 10, below | **authored** |
| **पुरुष** | प्रथम · मध्यम · उत्तम | derived |
| **वचन** | एक · द्वि · बहु | derived |
| **पद** | परस्मैपद · आत्मनेपद | derived |
| **प्रयोग** | कर्तरि · कर्मणि · भावे | **authored** — the form rarely settles it |

## 2a. लकार — the ten

| | | |
|---|---|---|
| लट् | present | |
| लङ् | imperfect — past, not today | takes अ-augment |
| लिट् | perfect — remote, unwitnessed | reduplicates |
| लुङ् | aorist — plain past | augment + सिच् |
| लुट् | periphrastic future | |
| लृट् | simple future | स्य |
| लृङ् | conditional | |
| लोट् | imperative | |
| विधिलिङ् | optative — should/would | |
| आशीर्लिङ् | benedictive — may it be | |

The six आर्धधातुक lakāras (लिट् लुट् लृट् लृङ् लुङ् आशीर्लिङ्) attach differently
from the four सार्वधातुक ones (लट् लोट् लङ् विधिलिङ्) — the distinction that
governs which stem-forming rules fire.

## 2b. गण — the ten root classes

The विकरण (stem-forming affix) is what distinguishes them, and **it is nearly
unannotated**: शप् 147×, यक् 13×, everything else absent.

| | गण | विकरण | example |
|---|---|---|---|
| १ | भ्वादि | शप् | भवति |
| २ | अदादि | **लुक्** (none) | अत्ति |
| ३ | जुहोत्यादि | **श्लु** + reduplication | जुहोति |
| ४ | दिवादि | श्यन् | दीव्यति |
| ५ | स्वादि | श्नु | सुनोति |
| ६ | तुदादि | श | तुदति |
| ७ | रुधादि | **श्नम्** (infix) | रुणद्धि |
| ८ | तनादि | उ | तनोति |
| ९ | क्र्यादि | श्ना | क्रीणाति |
| १० | चुरादि | णिच् + शप् | चोरयति |

## 2c. सनादि — stems that make a different verb

**गमयति is not गच्छति.** Each of these builds a new धातु which then takes the
full तिङन्त dimension set. The corpus tags णिच् twice; nothing else.

| suffix | sense | example |
|---|---|---|
| णिच् | causative | गमयति — and it **promotes the old agent to कर्मन्** (1.4.52) |
| सन् | desiderative | जिगमिषति |
| यङ् | intensive/frequentative | जङ्गम्यते |
| यङ्लुक् | intensive, यङ् dropped | जङ्गन्ति |
| क्यच् / क्यङ् / क्यष् | denominative — a verb from a noun | पुत्रीयति |
| णिङ् / आय / ईयङ् | further denominatives | |

## 2d. उपसर्ग — preverbs

22 of them (प्र परा अप सम् अनु अव निस् निर् दुस् दुर् वि आङ् नि अधि अपि अति सु उद्
अभि प्रति परि उप). They change meaning, sometimes पद, and **select ल्यप् over
क्त्वा** in a gerund.

Tagged 12× in the whole corpus, so आगच्छति and गच्छति are one root with nothing
distinguishing them.

## 2e. Non-finite verb forms

Not तिङन्त at all — they are §1f कृदन्त. Listed here because the corpus reaches
for them through the verb: participles, gerundives, gerunds, infinitives.

---

# 3. अव्यय

293 words. **No dimensions.** Naming the type is the entire annotation — which
is why this is the only class at 98% complete.

| subtype | members / examples | note |
|---|---|---|
| **निपात** particles | च वा अपि तु हि खलु एव नु स्म | च and वा are enclitic — never first |
| **उपसर्ग** | the 22 of §2d | only before a verb, never free |
| **कर्मप्रवचनीय** | अनु परि प्रति अभि अधि उप आ | a preverb *not* attached to a verb; governs a case |
| **क्रियाविशेषण** adverbs | अद्य ह्यः श्वः तत्र अत्र एवम् शीघ्रम् | many are तद्धित (§1g) or neuter accusatives |
| **कृदव्यय** | गत्वा आगत्य द्रष्टुम् | from §1f — कृदन्त that do not decline |
| **अव्ययीभाव** | यथाशक्ति उपकुम्भम् | from §1h — compounds that became indeclinable |
| **सम्बोधन** interjections | हे भोः अये धिक् | |
| **negation** | न (verbal) · मा (with लुङ्, prohibitive) · नञ् (in compound) | three distinct negators |
| **संख्यावाचक** adverbs | द्विधा पञ्चकृत्वः | तद्धित-formed |

---

# What must be authored, and what must not

**Authored — nothing can derive these:**

| | why |
|---|---|
| `lemma` (प्रातिपदिक / धातु / प्रकृति) | a word with no stem belongs to no paradigm |
| विभक्ति | the sentence decides; the form is often ambiguous |
| लकार | not recoverable from the form |
| कारक | semantic — vidyut is *given* the case, never infers it |
| प्रयोग | कर्तरि vs कर्मणि rarely shows in the form |
| समास type and विग्रह | an analysis, not a computation |
| कृत् / तद्धित suffix and its अर्थ | the sense is the point |
| सनादि, उपसर्ग | they make a different verb |
| विशेषण's agreement target | which noun it qualifies |

**Derived — authoring these is redundant work:**

वचन · पुरुष · पद · लिङ्ग · गण · विकरण · every unattested cell of any paradigm.

**A derived value must never be written into the YAML.** It goes stale
silently; the corpus already carries one round of that.

---

# Where the corpus stands

| type | words | type named | dimensions complete |
|---|---|---|---|
| सुबन्त | 1,242 | 100% | **3%** — वचन missing on 95% |
| तिङन्त | 369 | 100% | **1%** — पुरुष/वचन/पद missing on ~96% |
| कृदन्त | 106 | 100% | **21%** — no declining/indeclinable split |
| अव्यय | 293 | 100% | 98% |
| समास | 61 tags | partial | type authored, विग्रह in free text |
| तद्धित | 20 tags | partial | अर्थ recorded once or twice each |
| **untyped** | **291** | **0%** | invisible to every view |

The generic label dominates the specific one everywhere it exists: कृदन्त 62× vs
क्तवतु 1×; तद्धित 13× vs अपत्य 1×; समास 7× vs द्वितीया-तत्पुरुष 1×.

`bun run complete` reports the top-level gaps and names the readings to fix first.

# What this says to build next

1. **The 291 untyped words** — no type means no dimensions, so nothing
   downstream can place them. 101 are verbs tagged only for पुरुष.
2. **कृदन्त's declines/does-not split** — until it exists, कृदन्त's dimensions
   are undefined.
3. **सनादि and उपसर्ग** — गमयति, आगच्छति and गच्छति are one entry in प्रयोग today.
4. **विशेषण agreement** — 69 tagged words, no link to what they qualify.
5. **विग्रह as a field**, not free text.
6. **विकरण** — deriving it per गण would let the reader see *why* भवति and तुदति
   differ, which is the whole content of the गण system.
