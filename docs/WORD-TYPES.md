# Every kind of word, and what each must be annotated for

The annotation vocabulary grew one reading at a time — root names, sandhi
processes, affixes and grammatical features once sat in one flat namespace with
no statement of which were required, which is why 95% of nouns carried no वचन:
nothing ever said they should. This document is that statement, and it is now
**complete over the language a graded reader meets**: every kind of word, the
dimensions each is annotated along, and — the part that was missing — a closed,
checked value set for each.

This is the inventory, decomposed to the level where a value is atomic — where
the next question down is no longer "which kind?" but "which cell?".

**It is also code.** `src/lib/usage/schema.ts` carries this document as data —
the eight types (तिङन्त · कृदन्त · तद्धित · सर्वनाम · सर्वादि · संख्या · सुबन्त ·
अव्यय),
their markers, every dimension with its closed value set and whether it is
authored or derived, plus the two overlays (सन्धि §4, स्वर §5) that any पद may
carry. `bun run complete` validates the corpus against it — `--unknown` now
reports only root names and commentary, not grammatical gaps — and
`build-readings` reads the same file to know which dimensions it may fill in.
Adding a dimension there makes it checked; nothing is hardcoded in the checker.
If this prose and that file disagree, **the file is what runs.**

The schema is complete; the corpus's annotations against it are not — that gap,
per type, is at the end of this document, and it is now the whole of the work.

Two ideas run through it:

- **A dimension is a coordinate, not a description.** Closed set of values, the
  same question for every word of that type, and two words with the same
  coordinates are the same cell. Which sūtra applied is commentary.
- **A subtype is not a dimension.** क्त and शतृ are both कृदन्त, but knowing which
  one changes *what the word is*, not where it sits in a grid. Subtypes select
  the paradigm; dimensions locate a form inside it.
- **A taught cell admits new words for free.** Because a cell is a coordinate and
  not a word, once one word has occupied it — रामः in अकारान्त-पुं-प्रथमा-एक,
  गच्छति in लट्-प्रथम-एक-परस्मै — every other word in that same cell inflects
  identically and is *vocabulary, not grammar*. It needs no introductory sentence
  of its own: drop it into a larger passage, glossed for meaning, and let the
  reader recognize the ending they know on a stem they do not. रामः गच्छति teaches
  a cell; रामः ग्रामम् गच्छति then costs nothing extra, because ग्रामम् sits in
  अकारान्त-पुं-द्वितीया-एक, a cell देवम् / नरम् already opened. Author a fresh
  sentence only for a word that opens a **new** cell (first आकारान्त feminine,
  first इ-stem dative, first आत्मनेपद verb). This is the mechanism `AUTHORING.md`
  calls graduated introduction; the tables below are the map of which cells
  exist, and therefore which words are already free to reuse.

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
सर्वस्मै beside देवाय. **This is now its own type in `schema.ts`, not a flag on
सुबन्त and not a member of सर्वनाम** — filing सर्व under सर्वनाम put an adjective
with its own gender in a list keyed to the nine deictic/personal pronouns, and
the lint's wrong-lemma check now catches it (a word tagged सर्वनाम whose lemma is
सर्व is flagged). एक is the boundary case: it declines सर्वादि-style but its type
home is संख्या, because it is a number first.

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

## 2a. लकार — ten classical + one Vedic

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
| **लेट्** | **Vedic subjunctive** — the wish/will mood | **3.4.7 लिङर्थे लेट्; Veda only** |

The six आर्धधातुक lakāras (लिट् लुट् लृट् लृङ् लुङ् आशीर्लिङ्) attach differently
from the four सार्वधातुक ones (लट् लोट् लङ् विधिलिङ्) — the distinction that
governs which stem-forming rules fire.

**लेट् is the eleventh लकार, and it is Vedic-only.** The classical language has
ten; the Ṛgveda adds the subjunctive (गमत् "may he come", अश्नवत्, जुषन्त). It
was absent from the schema until the corpus's own "subjunctive (लेट्)" prose had
no tag to attach to — a real gap in handling Vedic, now closed. **Whether the
spec handles Vedic:** for morphology, yes — 96% of the Ṛgveda block types, the
holdouts being सन्धि-fused forms (नास्त्य्, तत्रर्षिरुवाच) that are two words in
one token. What Vedic adds beyond लेट् — the extra ल-endings (तातङ्), the
injunctive read as augmentless लुङ्/लङ्, स्वर (§5) — is either a value already
present or a documented display-only limit, not a missing structure.

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

# 4. सन्धि — the joins between and within words

**सन्धि is not a word-type; it is a process on a boundary.** §1–3 classify what a
word *is*; this section classifies what happens where two sounds meet — at a
word join (बाह्य/external) or inside a single word at a morpheme seam
(आभ्यन्तर/internal). Every सुबन्त, तिङन्त and अव्यय can carry a सन्धि note, so it
is annotated as an **overlay on a word**, never as the word's class.

The corpus already tags this 27× as `term: सन्धि` + free-text split + a cite.
That records *that* a join happened and *which rule*, but not *which kind* — so
सन्धि cannot be browsed or gridded the way declension can. The missing dimension
is the **type of change**, which is a closed set:

| dimension | values | source |
|---|---|---|
| **सन्धि-प्रकार** | स्वरसन्धि · व्यञ्जनसन्धि · विसर्गसन्धि | **authored** (the boundary decides) |
| **the split** | the two sounds before combination (वाक् + अत्र) | **authored** — nothing derives the pre-सन्धि form |
| **cite** | the sūtra that fired | authored, and `verify:cites` checks it |

## 4a. स्वरसन्धि — vowel meets vowel

| subtype | rule | example |
|---|---|---|
| दीर्घ (savarṇa lengthening) | 6.1.101 अकः सवर्णे दीर्घः | देव + आलय → देवालय |
| गुण | 6.1.87 आद्गुणः | देव + इन्द्र → देवेन्द्र |
| वृद्धि | 6.1.88 वृद्धिरेचि | तव + ऐश्वर्य → तवैश्वर्य |
| यण् | 6.1.77 इको यणचि | इति + आदि → इत्यादि |
| अयादि | 6.1.78 एचोऽयवायावः | ने + अन → नयन |
| पूर्वरूप / पररूप | 6.1.109, 6.1.94 | — |

## 4b. व्यञ्जनसन्धि — consonant assimilation

| subtype | rule | example |
|---|---|---|
| जश्त्व (final voices) | 8.2.39 झलां जशोऽन्ते | वाक् → वाग् |
| श्चुत्व (dental → palatal) | 8.4.40 स्तोः श्चुना श्चुः | तत् + च → तच्च |
| ष्टुत्व (dental → retroflex) | 8.4.41 ष्टुना ष्टुः | — |
| अनुस्वार (म् → ं) | 8.3.23 मोऽनुस्वारः | वनम् → वनं |
| परसवर्ण (nasal homorganic) | 8.4.58 अनुस्वारस्य ययि परसवर्णः | सम् + कृत → संस्कृत |
| चर्त्व (final devoices) | 8.4.55 खरि च | — |
| णत्व (न → ण) | 8.4.1–2 रषाभ्यां नो णः | रामेन → रामेण |

## 4c. विसर्गसन्धि — the visarga's outcomes

| subtype | rule | example |
|---|---|---|
| रु / र् before voiced | 8.3.15, 8.2.66 | मुनिः + गच्छति → मुनिर्गच्छति |
| स् before dental | 8.3.34 विसर्जनीयस्य सः | नमः + ते → नमस्ते |
| श् / ष् before palatal/retroflex | 8.3.34 | — |
| उत्व (अः + voiced → ओ) | 6.1.113–114 | देवः + अत्र → देवोऽत्र |
| लोप (अः/आः before vowel) | 6.1.114, 8.3.19 | — |

**What the annotation owes:** the split (`वाक् + अत्र`), the प्रकार, and the
cite. Never author the *output* form as if it were derived — vidyut deaccents
and can recompute the join, but it cannot recover the pre-सन्धि split, which is
the one fact the reader needs to see the rule working. The split is to सन्धि what
विग्रह is to समास: the analysis, and nothing derives it.

---

# 5. स्वर — accent

**Vedic accent is a fourth dimension on any word, and it is display-only.** Three
accents by 1.2.29–31: **उदात्त** (raised), **अनुदात्त** (unraised), **स्वरित**
(circumflex, the falling glide), plus **एकश्रुति** (monotone, 1.2.39, for ritual
recitation). Marked in the source (दे॒वेषु॑), stripped on the way in.

| dimension | values | source |
|---|---|---|
| **स्वर** | उदात्त · अनुदात्त · स्वरित · एकश्रुति | **authored where the source has it; never derived** |

The hard fact, already in `AUTHORING.md`: **vidyut emits no accents and cannot
parse them.** दे॒वेषु॑ and देवेषु are one word for every lookup, and the build
deaccents on the way in. So accent:

- is **written where the source marks it** — the Ṛgveda block is accented, the
  graded prose is not;
- **never participates in a grid, a quiz, or a paradigm** — it is not a
  coordinate the way विभक्ति is, because two forms differing only in accent are
  the same cell for every downstream view;
- is **display data on the surface form**, carried through untouched, and must
  never be relied on to match anything.

This is why the corpus has exactly one `स्वर` tag: nothing consumes it yet. When
accent teaching arrives, it is a **reading-level note** ("the उदात्त on the first
syllable of अग्निम् is what the meter turns on"), not a per-word coordinate — the
same shape as a सन्धि overlay, not the shape of a declension dimension. Accent
rules (the फिट्-सूत्र, the स्वरित rules of 8.4, the नियत-स्वर of compounds) are
**leaf** targets in `_rules.yaml`: met once in a hymn, cited, looked up — not
drilled to recurrence. प्रचय (the monotone run after a स्वरित, 1.2.39) is a
स्वर value for accented texts.

---

# 6. Relations — the edges a coordinate cannot hold

A dimension is a property of ONE word. But some grammatical facts are **edges
between words**: an adjective agrees with a noun, a कर्मप्रवचनीय governs a case
on another word, a compound member belongs to the whole. A per-word coordinate
schema cannot state these — so they live in a **`rel[]` array** on the word,
beside `notes`, not as a `term` tag.

```yaml
- form: धनवान्        # index 1 in this reading's words[]
  rel:
    - kind: विशेषण    # I qualify …
      to: 0          # … the word at index 0 (राजा)
```

`to` is the 0-based index into the SAME reading's `words[]`. The relation kinds
are a closed set in `schema.ts` (`RELATIONS`):

| kind | edge | agrees on |
|---|---|---|
| **विशेषण** | adjective/participle → the noun it qualifies | लिङ्ग · विभक्ति · वचन |
| **विशेष्य** | noun → its adjective (the reverse, optional) | लिङ्ग · विभक्ति · वचन |
| **शासित** | a कर्मप्रवचनीय → the word whose case it governs | — |
| **अवयव** | a compound member → the समास it belongs to | — |

Each `RelationKind` declares which word-types may be its **source** (`from`) and
which dimensions must **agree** between the two ends (`agree`). The lint checks
every edge: an unknown `kind`, a `to` out of range or pointing at itself, a
source type that may not carry the edge, or an `agree` axis that disagrees when
both ends state it — all are `bad-relation` errors, failing the build exactly as
a conflict does. Agreement is only checked when both words state the axis; a
missing tag is a completeness gap, not an agreement error.

This is how the four "syntactic relation" gaps are captured. **विशेषण/सर्वादि
agreement** and **कर्मप्रवचनीय government** are now expressible edges. **Compound-
internal structure** gets the `अवयव` edge (each member points at its समास,
carrying its own विग्रह-case); the free-text विग्रह note remains the human parse,
and the edge is the machine-checkable one. What stays out is only what genuinely
is not an edge: सम्बोधन (a विभक्ति-value convention, documented at §2) and the
syllable-position subtleties of accent (§5).

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
| सन्धि split and प्रकार | nothing recovers वाक् + अत्र from वाग् (§4) |
| स्वर | vidyut emits no accents; write where the source has it (§5) |

**Derived — authoring these is redundant work:**

वचन · पुरुष · पद · लिङ्ग · गण · विकरण · every unattested cell of any paradigm.
The सन्धि *output* form is also derivable (vidyut recomputes the join); it is the
*split* that must be authored.

**A derived value must never be written into the YAML.** It goes stale
silently; the corpus already carries one round of that.

---

# The schema is now complete over the corpus's vocabulary

Every word-type above is a `WORD_TYPE` in `schema.ts`, and every grammatical
feature tag the corpus uses is a recognised value — `bun run complete --unknown`
reports only root names, sandhi-process names and stem-class labels, which are
`lemma`/`cite`/commentary and correctly not dimension values. What was prose here
(तद्धित as a type, सर्वनाम/संख्या as their own sections, सन्धि §4 and स्वर §5 as
overlays, the समास sub-types, विकरण) is now **encoded and checked**. The doc and
the code agree; when they drift, the code is what runs.

That means the split is now the intended one: the schema covers every word a
graded reader meets, and the open tail — nested compounds, चुरादि denominatives,
accent minimal-pairs, Vedic irregularity — is carried by the reference tier
(`/ref`, all 3,983 sūtras) by citation, not by cell. A coordinate schema was
never meant to grid that tail, and does not try to.

## Where the corpus stands — completeness, per type

`bun run complete` now measures against the full schema, so the numbers went UP
as the target grew (a तद्धित now owes लिङ्ग; a तिङन्त now owes गण). This is the
gap becoming visible, not widening.

| type | words | dimensions complete |
|---|---|---|
| सुबन्त | 1,141 | 44% |
| तिङन्त | 398 | **0%** — गण/विकरण/पुरुष/वचन/पद missing on nearly all |
| कृदन्त | 150 | 7% |
| तद्धित | 28 | **0%** — अर्थ/लिङ्ग owed now that it is a type |
| सर्वनाम | 113 | 10% |
| संख्या | 2 | 50% |
| अव्यय | 304 | 98% |
| **untyped** | **281** | no type tag — cannot be placed |

The generic label still dominates the specific one where both exist: कृदन्त vs
क्तवतु, तद्धित vs अपत्य, समास vs द्वितीया-तत्पुरुष. Naming the specific tag is now
what moves these numbers.

`bun run complete` names the top-level gaps; `--worst 20` ranks the readings to
fix first, `--reading <id>` walks one word by word, `--untyped` lists the 281.

# What this says to build next

The schema is complete; the corpus's *annotations against it* are not. The queue
is now filling cells, not extending the schema:

1. **The 281 untyped words** — no type means no dimensions. Most are verbs tagged
   only for पुरुष (गच्छामि with no लकार), invisible until the head tag is added.
2. **तिङन्त feature tags** — पुरुष/वचन/पद are derivable but the *reader's rail*
   shows only authored tags; गण/विकरण are new columns the schema now asks for.
3. **The specific tag over the generic** — क्तवतु not कृदन्त, अपत्य not तद्धित,
   षष्ठी-तत्पुरुष not समास. The schema accepts all of these now; using them is
   what fills the paradigm and the प्रयोग index.
4. **विशेषण's agreement target** — the dimension exists (सुबन्त's `विशेषण`), but
   the *link* to the विशेष्य it agrees with is still unstated per word.
5. **विग्रह as a field**, not free text — the one समास fact still living in a
   `text` note (though the reader's decomposition strip now parses it).
6. **सन्धि-प्रकार in use** — a schema dimension now (§4); the corpus should start
   tagging the प्रकार on its 27 joins so that overlay carries data rather than
   just existing. (स्वर is the same shape but **frozen** — see the Vedic freeze
   in `AUTHORING.md`: no new accents until we have a verifiable accented +
   morph-tagged Ṛgveda source. The existing accents stay verbatim.)

# Checked against Kāle's grammar

The schema was cross-checked, chapter by chapter, against Kāle's *A Higher
Sanskrit Grammar* (the 988-rule reference behind `/dukrnkarane`). Every chapter
maps to a type or dimension — Declension → सुबन्त, Pronouns → सर्वनाम, Numerals →
संख्या, Compounds → समास, Secondary Nominal Bases → तद्धित, Formation of
Nouns/Participles → कृदन्त, Verbs/Conjugation → तिङन्त, Avyayas → अव्यय, Sandhi →
the §4 overlay — with three findings:

- **Feminine-base affixes are a real gap.** Kāle gives a whole chapter to the
  स्त्रीप्रत्ययs — टाप् चाप् ङीप् ङीष् ङीन् (4.1) — that form a feminine base
  (देव → देवी, अज → अजा). The schema has no home for them: नदी and सेना are plain
  सुबन्त with no record that they *are* feminine derivatives. ~worth a small
  affix set on सुबन्त/तद्धित, since the corpus has real feminine stems (गङ्गा,
  यशोदा, कन्या, गोपी, सभा).
- **Subject–verb concord is unmodeled.** Kāle's Syntax chapter (195 rules) is
  largely agreement — §782 verb agrees with subject in number and person. The
  schema has adjective–noun agreement (the विशेषण `rel`, §6) but no
  subject↔verb edge. A natural fourth relation kind.
- **Prosody is correctly out of scope.** Meter (गण of syllables, mātrā, vṛtta)
  is a verse-level property, not a per-word coordinate — it belongs at the
  reading level if anywhere, not in the word schema.

## What Kāle says about Vedic accent — and why स्वर is display-only

Kāle §3 defines the three accents — **उदात्त** (acute, from the upper vocal
organs), **अनुदात्त** (grave, from the lower), **स्वरित** (circumflex, a mixture)
— and then states the governing fact verbatim: *"these are ignored in classical
Sanskrit. They are marked only in Vedic works: the Udātta is left unmarked; the
Anudātta is marked with a horizontal line underneath; and Svarita has a
perpendicular stroke above it."* Across all 988 rules he gives **essentially no
accent-placement rules** — accent appears only to tell two homonyms apart (§149,
स्व उदात्त vs अनुदात्त).

This is direct authority for the schema's design: accent is **display data on
Vedic text, not a productive grammatical dimension**. `स्वर` is an `optional`
overlay (§5) carrying उदात्त/अनुदात्त/स्वरित/एकश्रुति/प्रचय, authored where the
source marks it, never derived, never a grid axis — exactly the status Kāle
assigns it. The marking convention the corpus uses (॒ anudātta beneath, ॑ svarita
above, udātta unmarked) is the one Kāle prescribes. Two vowel modifications Kāle
lists alongside accent — **प्लुत** (protraction, marked ३) and **अनुनासिक**
(nasalisation) — are likewise display features, present in the corpus only in
phonology examples, and not annotated dimensions.

# Known model limits — what the schema deliberately does not capture

The types and dimensions were audited against the grammar (not the corpus). The
syntactic relations the coordinate schema could not hold are now captured as
**§6 relation edges** (विशेषण/सर्वादि agreement, कर्मप्रवचनीय government, compound-
internal structure), and प्रचय is a स्वर value. What remains genuinely out of
scope is small and deliberate:

- **सम्बोधन is प्रथमा-in-address.** Listed as an 8th विभक्ति by the traditional
  teaching convention; Pāṇini (2.3.46–49) makes the vocative प्रथमा with a
  sense. Kept as a विभक्ति value for pedagogy; not a separate case grammatically.
  This is a documented convention, not a missing feature.
- **लिङ्ग is lexical, marked `derived`.** Gender follows usage
  (लिङ्गमशिष्यम्), so it is authored-in-the-lexicon, not rule-derived — but
  vidyut narrows it from the attested forms, so the build fills it and the schema
  calls it `derived`. Operationally true, grammatically a simplification.
- **Accent × syllable position.** स्वर is a word-level overlay; the syllable
  where an accent falls, and the shifts sandhi induces (एकादेश udātta 8.2.5),
  are not modeled. Matters only for a fully accented Vedic edition, which this is
  not.
- **The compound `अवयव` edge is defined but not yet authored at scale.** The
  relation exists and lints; populating it across the 53 compound members is
  authoring work, and the free-text विग्रह remains the human-facing parse until
  then.

These are documented so the boundary is a decision, not an oversight. None blocks
a graded reader; each is a known edge where the model stops.
