#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "82001": `@deva[पूर्वत्रासिद्धम्] — **Asiddha Principle**: Operations taught from here to the end of the Aṣṭādhyāyī are treated as "not having taken effect" (@[asiddha]) with respect to prior rules.

This means: when applying rules from 8.1 onwards, later operations in this section are invisible to earlier ones. The Tripādī (last three pādas: 8.2-8.4) forms a special domain where rules don't "see" each other's effects when looking backward.

**Example**: If rule 8.2.50 makes a change, rule 8.2.30 applies as if 8.2.50 hadn't happened yet.`,

  "82002": `@deva[नलोपः सुप्स्वरसंज्ञातुग्विधिषु कृति] — **Scope of Invisibility**: The @[asiddha] principle of @ref[8.2.1] applies specifically when these operations are involved:

| Domain | Examples |
|--------|----------|
| @[sup] (case endings) | @deva[सु], @deva[औ], @deva[जस्], etc. |
| @[svara] (accent) | Udātta, anudātta, svarita |
| @[saṃjñā] (technical terms) | @[pada], @[bha], @[ghi], etc. |
| @[tuk] (augment) | The @deva[तुक्] insertion |
| @[kṛt] (primary suffixes) | @deva[क्त], @deva[तृ], @deva[तुमुन्], etc. |

For these operations, changes made in 8.2-8.4 are invisible to prior rules.`,

  "82003": `@deva[न ऽन्यत्र] — **Exception**: The @[asiddha] principle does @b[not] apply in contexts other than those listed in @ref[8.2.2].

For operations not involving @[sup], @[svara], @[saṃjñā], @[tuk], or @[kṛt], the normal rule sequence applies—later changes are visible to earlier rules.`,

  "82004": `@deva[त्यदाद्यस्य चुत्वप्रकृतित्वे क्ये] — Before @deva[कि] (interrogative particle), pronouns like @deva[त्यद्], @deva[तद्], @deva[यद्], @deva[एतद्], @deva[इदम्], @deva[अदस्], and @deva[किम्] appear in their base form when showing @[cutva] (palatalization).

| Form | Before @deva[कि] |
|------|-----------------|
| @deva[किम्] + @deva[कि] | @deva[किंकि] (keeps base) |
| @deva[तद्] + @deva[कि] | @deva[तत्कि] (base form) |`,

  "82005": `@deva[एकादेश उत्तरपदप्रकृतिस्वरत्वं न ऽपद्यते] — A single substitute (@[ekādeśa]) replacing sounds from both members of a compound does @b[not] take the accent of the latter member as its underlying form.

The accent of such coalescence follows special rules, not the default "latter member" accent pattern.`,

  "82006": `@deva[ओदौतोर्यणि] — When @[yaṇ] (य्, व्, र्, ल्) replaces @deva[ओ] or @deva[औ] through sandhi, the @[asiddha] principle does not apply.

Thus @deva[ओ/औ] → @deva[अव्] is visible to prior rules. This ensures proper accent computation when diphthongs become semivowels.`,

  "82007": `@deva[नलोपः प्रातिपदिकान्तस्य] — **N-elision**: Final @deva[न्] of a @[prātipadika] (nominal stem) is deleted.

| Stem | Becomes | Example |
|------|---------|---------|
| @deva[राजन्] | @deva[राज] | @deva[राजा] (nom. sg.) |
| @deva[आत्मन्] | @deva[आत्म] | @deva[आत्मा] (nom. sg.) |
| @deva[युवन्] | @deva[युव] | @deva[युवा] (nom. sg.) |

This @[nalopa] applies before consonant-initial endings and at word-end.`,

  "82008": `@deva[न ङिसम्बुद्ध्योः] — **Exception**: The @[nalopa] (न्-deletion) of @ref[8.2.7] does @b[not] occur before:

| Context | Example |
|---------|---------|
| @[ṅi] endings (@deva[ङि]-marked) | @deva[राज्ञि] (loc. sg.) |
| @[sambuddhyoḥ] (vocative sg.) | @deva[हे राजन्] |

Before these, the final @deva[न्] is retained: @deva[राजन् + इ] → @deva[राज्ञि], @deva[राजन्] (voc.).`,

  "82009": `@deva[मान्बाधयोर् अनुनासिकस्य च] — **Exception to Exception**: For the roots @deva[मान्] "to honor" and @deva[बाध्] "to obstruct" (treated as @deva[बान्] with nasal), the @[nalopa] @b[does] occur even before @[ṅi] endings.

This restores the deletion that @ref[8.2.8] blocked.`,

  "82010": `@deva[वाहः] — **@deva[वाह्] Exception**: The @[nalopa] of @ref[8.2.7] applies optionally before @[ṅi] for stems in @deva[-वाह्] (from @deva[वह्] "carry").

| Option | Form |
|--------|------|
| With @[nalopa] | @deva[प्रवाहि] (loc.) |
| Without @[nalopa] | @deva[प्रवाह्नि] (loc.) |`,

  "82011": `@deva[न सयुक्तान्तात् सत्वोपधात्] — **Blocking Condition**: @[nalopa] does @b[not] occur when the stem ends in a conjunct and has @deva[स्] as its penultimate sound.

Example: @deva[दोष्न्] (from @deva[दोषन्] "arm") retains न् because of the preceding @deva[ष्].`,

  "82012": `@deva[कृत्याल्लुक्] — **@[luk] deletion**: The final @deva[न्] undergoes complete deletion (@[luk]) after @[kṛtya] suffixes (@deva[तव्य], @deva[अनीय], @deva[य] marked with @deva[ण्यत्]).

This is stronger than @[nalopa]—the nasal vanishes entirely with no trace.`,

  "82013": `@deva[न ल्यपि] — **Exception**: The @[nalopa] of @ref[8.2.7] does @b[not] apply before @deva[ल्यप्] (the @deva[य] of absolutives like @deva[-त्य]).

Thus: @deva[राजन् + य] → @deva[राज्ञ्य] (not *@deva[राज्य]).`,

  "82014": `@deva[युष्मदस्मदोर् ण्यपूर्णम्] — For @deva[युष्मद्] "you" and @deva[अस्मद्] "we/I", the final @deva[द्] is deleted before @deva[ण्य] suffixes (if the suffix is not "full"/complete).

This handles special pronominal behavior before certain affixes.`,

  "82015": `@deva[विभाषेट्] — **Optional @[iṭ]**: After pronouns @deva[युष्मद्]/अस्मद्], the augment @deva[इट्] is optionally added.

| Option | Form |
|--------|------|
| With @[iṭ] | @deva[त्वयित्व] |
| Without @[iṭ] | @deva[त्वत्व] |`,

  "82016": `@deva[अत उत्तरस्य] — After @deva[अ], the following @deva[अ] receives treatment (relevant to the preceding rules about insertion/deletion in pronominal forms).`,

  "82017": `@deva[अचश् च] — And after a vowel (@[ac]), the same provisions apply for the operations specified in the preceding sūtras.`,

  "82018": `@deva[क्रोष्टुर् यूनि लुक्] — **Deletion for Young**: For @deva[क्रोष्टृ] "jackal", when referring to a young one (@[yūni]), @[luk] (deletion) occurs.

@deva[क्रोष्टृ] → @deva[क्रोष्टु] when meaning "young jackal."`,

  "82019": `@deva[न लोकाव्यय...] — **Scope Limit**: The foregoing rules do not apply in @[loka] (ordinary usage) or to @[avyaya] (indeclinables) and similar exceptional categories.`,

  "82020": `@deva[असाववर्णे] — When followed by a vowel that is @b[not] @[savarṇa] (homogeneous), special treatment applies per the context of preceding rules.`,

  "82021": `@deva[उञः] — For the root @deva[उञ्] (sixth class, "to wet/moisten"), special stem behavior applies as specified in context.`,

  "82022": `@deva[तोसुनोः क्क्ङिति लोपः] — **Deletion before @deva[क्], @deva[ङ्]**: The final sounds of @deva[तु] and @deva[सु] are deleted when followed by affixes marked with @deva[क्] or @deva[ङ्].`,

  "82023": `@deva[संयोगान्तस्य लोपः] — **Cluster-Final Deletion**: When a word ends in a consonant cluster (@[saṃyoga]), the final consonant is deleted.

| Cluster | Becomes | Example |
|---------|---------|---------|
| @deva[-र्क्] | @deva[-र्] | @deva[अर्क्] → @deva[अर्] |
| @deva[-स्त्] | @deva[-स्] | @deva[वस्त्] → @deva[वस्] |
| @deva[-न्त्] | @deva[-न्] | @deva[भवन्त्] → @deva[भवन्] |

This simplifies word-final clusters to single consonants.`,

  "82024": `@deva[स्थादिष्वभ्यासेन ऽभ्यासस्य विकल्पः] — **Optional Reduplication Retention**: For roots like @deva[स्था] etc., when reduplicated, the @[abhyāsa] (reduplicative syllable) is optionally retained or deleted.

This gives variant forms in the perfect and other reduplicated stems.`,

  "82025": `@deva[यदपृक्तं तु स्थानिवत्] — An affix that is @[apṛkta] (consisting of a single sound) is treated as @[sthānivat] (like the original) for determining stem boundaries.`,

  "82026": `@deva[झलो झलि] — **Consonant before Consonant**: A @[jhal] consonant (stops and spirants) before another @[jhal] takes its @[jaś] form (voiced unaspirated).

| Before | Becomes | Example |
|--------|---------|---------|
| @deva[क् + ध्] | @deva[ग् + ध्] | @deva[वाक् + धा] → @deva[वाग्धा] |
| @deva[प् + भ्] | @deva[ब् + भ्] | @deva[अप् + भू] → @deva[अब्भू] |

This is voicing assimilation before voiced stops.`,

  "82027": `@deva[हलोऽनन्तराः संयोगः] — **Definition**: Consonants (@[hal]) that are @[anantara] (immediately adjacent, with no vowel between) form a @[saṃyoga] (cluster).

@deva[स् + त्] = cluster, @deva[स् + अ + त्] = not a cluster (vowel intervenes).`,

  "82028": `@deva[इह कुस्नुसृयुवां प्रगृह्य] — The words @deva[कु], @deva[स्नु], @deva[सृ], and @deva[यु] are @[pragṛhya] (exempt from sandhi) in specific usages listed in the grammatical tradition.`,

  "82029": `@deva[स्कोः संयोगाद्योरन्ते च] — **@deva[स्] and @deva[क्] Deletion**: @deva[स्] and @deva[क्] at the beginning of a cluster are deleted when the cluster is word-final.

| Cluster | At End | Example |
|---------|--------|---------|
| @deva[-त्स्क्] | @deva[-त्] | Final simplification |
| @deva[-स्क्] | @deva[∅] | Both deleted at end |

Clusters simplify by dropping initial @deva[स्]/क्].`,

  "82030": `@deva[चोः कुः] — **Palatals to Gutturals**: A palatal (@[cu]: च्, छ्, ज्, झ्, ञ्) becomes its guttural counterpart (@[ku]: क्, ख्, ग्, घ्, ङ्) in word-final position and before a stop.

| Palatal | → Guttural | Example |
|---------|-----------|---------|
| @deva[च्] | @deva[क्] | @deva[वाच्] → @deva[वाक्] |
| @deva[ज्] | @deva[ग्] | @deva[राज्] → @deva[राग्] (before त्) |

This is the standard palatal-to-guttural reversion.`,

  "82031": `@deva[हो ढः] — **@deva[ह्] → @deva[ढ्]**: Word-final @deva[ह्] becomes @deva[ढ्].

| Original | Becomes | Example |
|----------|---------|---------|
| @deva[लिह्] | @deva[लिढ्] | "lick" → @deva[लिट्] (final) |
| @deva[दुह्] | @deva[दुढ्] | "milk" → @deva[धुक्] (with further changes) |

This applies before pause or certain consonants.`,

  "82032": `@deva[दादेर् धातोर् घः] — **Exception**: A root (@[dhātu]) beginning with @deva[द्] has its final @deva[ह्] become @deva[घ्] (not @deva[ढ्]).

| Root | Final | Example |
|------|-------|---------|
| @deva[दह्] | @deva[दघ्] | @deva[दाह्] → @deva[दाघ्] → @deva[धाक्] |
| @deva[दुह्] | @deva[दुघ्] | @deva[दुह्] → @deva[दुघ्] → @deva[धुक्] |`,

  "82033": `@deva[अहन् न ऽतिदेशे] — **Exception for @deva[अहन्]**: The word @deva[अहन्] "day" does @b[not] follow the pattern by analogy (@[atideśa]) in certain derivational contexts.

It retains its stem form rather than undergoing expected modifications.`,

  "82034": `@deva[ष ईद्ढधोः] — **@deva[ष्] Rule**: After @deva[ई] and @deva[ऊ], and after @deva[ढ्] and @deva[ध्], @deva[ष्] behaves specially (retained or transformed per context).`,

  "82035": `@deva[आहोः प्रत्ययविधौ नित्यम्] — **Invariable for @deva[आह्]**: When applying affix rules to @deva[आह्] "to say", the operations are @[nitya] (obligatory), not optional.`,

  "82036": `@deva[व्रश्चादीनां षः] — **@deva[ष्] for @deva[व्रश्च्] group**: Roots like @deva[व्रश्च्] "to cut", @deva[भ्रस्ज्] "to fry", @deva[सृज्] "to create", @deva[मृज्] "to wipe", @deva[यज्] "to sacrifice", @deva[राज्] "to rule", @deva[भ्राज्] "to shine" take @deva[ष्] (or @deva[ष्]-related changes) in certain formations.

These roots have @deva[ज्] → @deva[ष्ट्] before @deva[त]-suffixes: @deva[यज् + त] → @deva[इष्ट].`,

  "82037": `@deva[एकाचो बशः भष् झषन्तस्य स्ध्वोः] — **Monosyllabic @[baś] Roots**: A monosyllabic root ending in @[baś] (voiced aspirate) and with @[jhaṣ] (झ्-series) as final becomes @[bhaṣ] before @deva[स्] or @deva[ध्].

This handles aspiration shift in specific phonetic contexts.`,

  "82038": `@deva[वोर्दृष्टेर्ड्वे च] — For the root @deva[दृश्] "to see", when followed by @deva[व्] endings, special doubling or modification occurs per the sandhi rules.`,

  "82039": `@deva[झषस् तथोर् धोऽधः] — **Voiced Aspirate Rule**: A @[jhaṣ] (झ्, भ्, घ्, ढ्, ध्) before @deva[त्] or @deva[थ्] causes those to become @deva[ध्], while the @[jhaṣ] itself becomes unaspirated.

| Cluster | Becomes | Example |
|---------|---------|---------|
| @deva[ध् + त्] | @deva[द् + ध्] | @deva[बुध् + त] → @deva[बुद्ध] |
| @deva[घ् + त्] | @deva[ग् + ध्] | @deva[दघ् + त] → @deva[दग्ध] |

The aspiration transfers rightward.`,

  "82040": `@deva[झषो हो ऽन्यतरस्याम्] — **Optional @deva[ह्] for @[jhaṣ]**: A @[jhaṣ] consonant (voiced aspirate) optionally becomes @deva[ह्] in certain positions.

| With change | Without |
|-------------|---------|
| @deva[दुह् + धुक्] → @deva[दुध्धुक्] | @deva[दुग्धुक्] |

Both forms are valid.`,

  "82041": `@deva[ष्टुना ष्टुः] — **@[ṣṭu] Assimilation**: A @[ṣṭu] consonant (ष्, ट्, ठ्, ड्, ढ्, ण्) followed by another @[ṣṭu] assimilates—both become retroflexes.

| Sequence | Result |
|----------|--------|
| @deva[ष् + त्] | @deva[ष् + ट्] → @deva[ष्ट्] |
| @deva[ण् + स्] | @deva[ण् + ष्] → @deva[ण्ष्] |

Retroflexion spreads through clusters.`,

  "82042": `@deva[र्दादेर् ड्वे] — After @deva[र्], a root beginning with @deva[द्] has @deva[द्] doubled (or treated as @deva[ड्]) in certain contexts.`,

  "82043": `@deva[दन्त्यस्य मूर्धन्य] — **Dentals to Retroflexes**: A dental sound becomes retroflex when following a retroflex in the same cluster.

| Dental | → Retroflex |
|--------|------------|
| @deva[त्] | @deva[ट्] |
| @deva[थ्] | @deva[ठ्] |
| @deva[द्] | @deva[ड्] |
| @deva[ध्] | @deva[ढ्] |
| @deva[न्] | @deva[ण्] |`,

  "82044": `@deva[ल्युट् च] — The suffix @deva[ल्युट्] (forming action nouns in @deva[-अन]) also triggers or undergoes the retroflex changes in appropriate contexts.`,

  "82045": `@deva[ओदितश् च] — Roots marked with @deva[ओ] as @[it] (indicatory marker) also follow the retroflex pattern specified in preceding rules.`,

  "82046": `@deva[निष्ठातोर् णः पूर्वपदात् संज्ञायाम्] — **@[ṇatva] in @[niṣṭhā]**: The @deva[त्] of @[niṣṭhā] suffixes (@deva[क्त], @deva[क्तवतु]) becomes @deva[ण्] after the prior member of a compound, when forming a @[saṃjñā] (proper name).

| Compound | @[niṣṭhā] | Result |
|----------|----------|--------|
| @deva[प्र + स्था + त] | @deva[-स्थित] | @deva[प्रस्थाण] (as name) |`,

  "82047": `@deva[न अयुक्तपदे] — **Exception**: The @deva[त्] → @deva[ण्] change of @ref[8.2.46] does @b[not] apply when the elements are not in a proper compound relationship (@[ayuktapada]).`,

  "82048": `@deva[णेस् तद्धित इल्लोपे] — When @deva[इ] is deleted (@[illopa]) in @[taddhita] (secondary) derivatives from causative (@[ṇi]) stems, special adjustments apply.`,

  "82049": `@deva[व्रजयजोर् णः] — For the roots @deva[व्रज्] "to go" and @deva[यज्] "to sacrifice", @deva[ण्] (retroflex nasal) appears in certain derivatives.`,

  "82050": `@deva[अपि प्रति कृञः] — With the preverbs @deva[अपि] and @deva[प्रति] before @deva[कृ] "to do", special rules apply for retroflex or other phonetic changes.`,

  "82051": `@deva[न त्वय् फाण्टाहाहाथार्वाहितेषु] — **Exception List**: The preceding retroflex rules do @b[not] apply in the words @deva[त्वय्], @deva[फाण्ट], @deva[आहा], @deva[हाथ], and @deva[आर्वाहित].

These retain their dental sounds.`,

  "82052": `@deva[क्षय्यजरामर्यमायालवणर्णभरणभृण्डाश्च] — **Additional Exceptions**: These words also do not undergo the retroflex change:

@deva[क्षय्य], @deva[अजर], @deva[अमर्य], @deva[अमाया], @deva[अलवण], @deva[अर्ण], @deva[भरण], @deva[भृण्ड] — all retain dentals.`,

  "82053": `@deva[छन्दसि सर्वत्र] — **In Vedic**: In @[chandas] (Vedic texts), these retroflex and other phonetic rules apply universally (@[sarvatra])—with fewer restrictions than in classical Sanskrit.`,

  "82054": `@deva[लोपस्यापि स्थानिवत्] — **Deletion is @[sthānivat]**: Even when a sound is deleted (@[lopa]), it is treated as if still present for subsequent rules.

This allows "ghost" sounds to trigger expected changes before fully disappearing.`,

  "82055": `@deva[नन्द्यादीनां प्राग् रिषः] — For roots in the @deva[नन्दि] class, special rules apply up to and excluding @deva[रिष्] "to harm".

This defines the scope of a particular grammatical provision.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.2.1-55)`);
console.log(`Total entries: ${Object.keys(data).length}`);
