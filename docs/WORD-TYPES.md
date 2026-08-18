# Every kind of word, and what each must be annotated for

The annotation vocabulary grew one reading at a time and now has **205 distinct
`term` tags, 123 of them used once or twice** — root names, sandhi processes,
affixes and grammatical features all in one flat namespace, with no statement
of which are required. That is why 95% of nouns carry no वचन: nothing ever said
they should.

This is the inventory. Every word in a reading is exactly one of these types,
and each type has a fixed set of **dimensions** — the features that place a
word in its paradigm. A word is *complete* when its type is named and every
dimension of that type has a value.

The rule throughout: **a dimension is a coordinate, not a description.** It has
a closed set of values, it is the same question for every word of that type,
and two words with the same coordinates are the same cell. Everything else —
which sūtra applied, what the सन्धि did, what the word means — is commentary,
valuable but not a dimension.

---

## 1. सुबन्त — inflected nominals

Anything that takes सुप् endings: nouns, adjectives, numerals, participles used
as nouns. The largest class by far, 1,242 words.

| dimension | values | source |
|---|---|---|
| **लिङ्ग** | पुंलिङ्ग · स्त्रीलिङ्ग · नपुंसकलिङ्ग | property of the stem, not the occurrence |
| **विभक्ति** | प्रथमा … सम्बोधन (8) | **must be authored** |
| **वचन** | एकवचन · द्विवचन · बहुवचन | derivable |
| **प्रातिपदिक** | the stem (`lemma`) | **must be authored** |

Plus, when the sentence assigns one:

| | values | |
|---|---|---|
| **कारक** | कर्तृ · कर्मन् · करण · सम्प्रदान · अपादान · अधिकरण · सम्बन्ध | supplies the विभक्ति when it is missing |

**Subtypes that matter for the paradigm, not for the dimensions:**

- **सर्वादि** (सर्व, एक, अन्य, विश्व, उभय…) — ordinary adjectives with a gender,
  but they take pronominal endings by 1.1.27 (सर्वस्मै, not *सर्वाय). Same
  dimensions as any सुबन्त; the class only changes which forms appear.
- **संख्या** — numerals. एक declines like सर्वादि; द्वि is dual-only; पञ्चन् and up
  lose the gender distinction and take one form for प्रथमा and द्वितीया.
- **विशेषण** — an adjective agrees with its noun in all three of लिङ्ग, विभक्ति and
  वचन. It has no dimensions of its own; the agreement is the fact worth
  recording, and there is no tag for it today.

## 2. सर्वनाम — pronouns

A closed list — तद्, एतद्, इदम्, अदस्, यद्, किम्, अस्मद्, युष्मद् — and its own
class, not a सुबन्त subtype. The endings differ (तस्मै for देवाय, तस्मिन् for देवे)
under rules that apply to pronouns alone.

| dimension | values | notes |
|---|---|---|
| **विभक्ति** | as सुबन्त | |
| **वचन** | as सुबन्त | |
| **लिङ्ग** | of the referent, not the word | अस्मद्/युष्मद् have none at all |

**A pronoun has no gender of its own.** तद् is सः, सा and तत् in one corpus.
Recording the gender of the *occurrence* is meaningful; recording it of the
*word* is a category error.

## 3. तिङन्त — finite verbs

369 words. Four dimensions, and the corpus authors one of them.

| dimension | values | source |
|---|---|---|
| **धातु** | the root (`lemma`) | **must be authored** |
| **लकार** | लट् लङ् लिट् लुट् लृट् लोट् विधिलिङ् आशीर्लिङ् लुङ् लृङ् (10) | **must be authored** |
| **पुरुष** | प्रथम · मध्यम · उत्तम | derivable |
| **वचन** | एक · द्वि · बहु | derivable |
| **पद** | परस्मैपद · आत्मनेपद | derivable |
| **प्रयोग** | कर्तरि · कर्मणि · भावे | **must be authored** — the form alone rarely settles it |

Modifying the stem, and changing what the word *is* rather than which cell it
occupies:

| | values | |
|---|---|---|
| **गण** | १ भ्वादि … १० चुरादि | a property of the root; determines the स्तम् |
| **सनादि** | णिच् (causative) · सन् (desiderative) · यङ् (intensive) · क्यच् … | a *different verb*: गमयति is not गच्छति |
| **उपसर्ग** | प्र, आ, वि, नि, अनु… | changes the meaning and sometimes the पद |

**सनादि and उपसर्ग are the gap.** The corpus tags णिच् 2× and उपसर्ग 12×, but
आगच्छति and गच्छति are filed under one root with no way to tell them apart, and
गमयति (causative) sits beside गच्छति as though it were the same verb.

**प्रयोग too**: कर्मणि is tagged 3×, भावे 1×. And पद — परस्मैपद 3×, आत्मनेपद 13× —
is authored so rarely that it is effectively absent.

## 4. कृदन्त — primary derivatives

106 words. Formed from a root by a कृत् suffix — and then **either declines or
does not**, which decides the rest of its dimensions.

| dimension | values | |
|---|---|---|
| **धातु** | the root | **must be authored** |
| **कृत्** | क्त · क्तवतु · शतृ · शानच् · तव्य · अनीयर् · ण्यत् · यत् · क्त्वा · ल्यप् · तुमुन् · ल्युट् · ण्वुल् · तृच् · घञ् · क्तिन् | **must be authored** |

**Declining कृदन्त** (participles, gerundives, action-nouns) are also सुबन्त and
carry every सुबन्त dimension on top:

- क्त, क्तवतु, शतृ, शानच् — participles, agree with their noun
- तव्य, अनीयर्, ण्यत्, यत् — gerundives
- ल्युट्, ण्वुल्, तृच्, घञ्, क्तिन् — action- and agent-nouns

**Indeclinable कृदन्त** take nothing further: क्त्वा, ल्यप्, तुमुन्.

The distinction is not currently recorded, and 0% of कृदन्त carry विभक्ति — so a
declining participle is annotated exactly like an indeclinable one.

## 5. तद्धित — secondary derivatives

Formed from a *nominal* stem rather than a root. Always सुबन्त afterwards, so
they carry every सुबन्त dimension plus:

| dimension | values | |
|---|---|---|
| **प्रकृति** | the base stem | e.g. उपगु for औपगव |
| **तद्धित** | अण् · इञ् · ठक् · मतुप् · वति · तसिल् · तरप् · तमप् · त्व · तल् … | **must be authored** |
| **अर्थ** | अपत्य (patronymic) · तस्येदम् (belonging) · मतुप् (possession) · भाव (abstract) · अतिशायन (comparison) | the sense the suffix carries |

The अर्थ is the point of a तद्धित and the corpus records it inconsistently —
अपत्य appears once, तत्र भवः once.

## 6. अव्यय — indeclinables

293 words. **No dimensions.** Naming the type is the whole annotation, which is
why this is the only category at 98% complete.

Worth distinguishing by subtype, since they behave differently in a sentence:

| | examples | |
|---|---|---|
| निपात | च, वा, हि, एव, अपि, न | particles |
| उपसर्ग | प्र, आ, वि, नि | only before a verb — not free words |
| क्रियाविशेषण | अद्य, तत्र, एवम्, शीघ्रम् | adverbs |
| कर्मप्रवचनीय | अनु, परि, प्रति | govern a case |
| अव्ययीभाव | यथाशक्ति, उपकुम्भम् | compounds that became indeclinable |
| कृदव्यय | गत्वा, द्रष्टुम् | from §4 — a कृदन्त that does not decline |

## 7. समास — compounds

A compound is *one word* taking one set of endings, so it is a सुबन्त with all
of §1's dimensions. What is extra is its internal structure:

| dimension | values | |
|---|---|---|
| **समास type** | तत्पुरुष · कर्मधारय · द्विगु · बहुव्रीहि · द्वन्द्व · अव्ययीभाव | **must be authored** |
| **विग्रह** | the analysis — राजपुरुषः → राज्ञः पुरुषः | **must be authored** — nothing derives it |
| **पूर्वपद / उत्तरपद** | the members | |

Both the type and the विग्रह are authored today (तत्पुरुष 17×, बहुव्रीहि 11×), but
the विग्रह lives in free-text `role` notes rather than a field.

---

## What must be authored, and what must not

The division decides where effort goes.

**Authored — nothing can derive these:**

| | why |
|---|---|
| `lemma` (प्रातिपदिक / धातु / प्रकृति) | a word with no stem belongs to no paradigm |
| विभक्ति | the sentence decides; the form is often ambiguous |
| लकार | not recoverable from the form |
| कारक | semantic — vidyut is *given* the case, it never infers it |
| प्रयोग | कर्तरि vs कर्मणि rarely shows in the form |
| समास type and विग्रह | an analysis, not a computation |
| कृत् / तद्धित suffix and its अर्थ | the sense is the point |
| सनादि, उपसर्ग | they make a different verb |

**Derived — authoring these is redundant work:**

| | from |
|---|---|
| वचन | vidyut, once the stem and विभक्ति are known |
| पुरुष, वचन, पद for a तिङन्त | vidyut, from the form and लकार |
| लिङ्ग | narrowed from the attested forms |
| गण | the dhātupāṭha |
| the unattested cells of any paradigm | vidyut |

**The one exception worth stating:** a derived value should never be written
into the YAML. It goes stale silently, and the corpus already carries one round
of that — the `बहुवचन` tags added by hand to satisfy a checker.

---

## Where the corpus stands against this

| type | words | type named | dimensions complete |
|---|---|---|---|
| सुबन्त | 1,242 | 100% | **3%** — वचन missing on 95% |
| तिङन्त | 369 | 100% | **1%** — पुरुष, वचन, पद missing on ~96% |
| कृदन्त | 106 | 100% | **21%** — no declining/indeclinable split |
| अव्यय | 293 | 100% | 98% |
| समास | ~61 tags | partial | type authored, विग्रह in free text |
| तद्धित | ~20 tags | partial | अर्थ recorded inconsistently (अपत्य 1×) |
| **untyped** | **291** | **0%** | invisible to every view |

`bun run complete` reports this and names the readings to fix first.

## What this inventory says to build next

1. **The 291 untyped words** are the worst gap — a word with no type has no
   dimensions, so nothing downstream can place it. 101 are verbs tagged only
   for पुरुष; 22 are nouns tagged only for कारक.
2. **विशेषण agreement has no representation.** An adjective's three features are
   copied from its noun, and recording that link would let the reader show
   *why* सर्वे is plural.
3. **सनादि and उपसर्ग collapse distinct verbs.** गमयति, आगच्छति and गच्छति are one
   entry in प्रयोग today.
4. **कृदन्त needs the declines/does-not split** before its dimensions mean
   anything.
5. **विग्रह deserves a field**, not a free-text `role`.
