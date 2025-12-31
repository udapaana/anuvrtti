#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, '../static/data/vasu_rewritten.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newEntries = {
  "82056": `@deva[जनसनखनां सञ्झलोः] — For roots @deva[जन्] "to be born", @deva[सन्] "to gain", and @deva[खन्] "to dig", when followed by @[sañ] or @[jhal] sounds, special rules apply.

These roots have irregular behavior in certain consonant environments.`,

  "82057": `@deva[अतो येयः] — After @deva[अ], @deva[य्] followed by @deva[अ] becomes @deva[यय्] (gemination or special treatment).`,

  "82058": `@deva[आतो यम्] — After @deva[आ], @deva[य्] becomes @[yam] (takes a special form).`,

  "82059": `@deva[ह्रस्वादन्तर्धातुकस्य] — After a short vowel, when an @[ārdhadhātuka] suffix follows, special modifications occur per this rule's context.`,

  "82060": `@deva[जासिन्यर्वहुलम्] — **Irregularities**: For @deva[जास्], @deva[इन्], and @deva[अर्], the rules apply variously (@[bahulam])—sometimes applying, sometimes not.

This acknowledges genuine variation in the tradition.`,

  "82061": `@deva[युवोरनाकौ] — The @deva[यु] and @deva[वु] are replaced by @deva[अनाक्] in certain derivative formations.`,

  "82062": `@deva[क्विन्प्रत्ययस्य कुः] — A @[kvin] suffix (zero suffix) triggers @[ku] (guttural) replacement of preceding palatals.

This interacts with @ref[8.2.30] for palatal → guttural reversion.`,

  "82063": `@deva[अतो ऽत उपदेशेऽशितः] — After @deva[अ], another @deva[अ] in the @[upadeśa] (root list) is treated specially if not marked with @deva[श्] (@[aśit]).`,

  "82064": `@deva[अदब्बाधानां लोपः] — **Deletion for Three**: For @deva[अद्] "to eat", @deva[बाध्] "to oppress", and roots like them, deletion (@[lopa]) occurs in specified contexts.`,

  "82065": `@deva[ष्टुत्वस्यासिद्धत्वम्] — **@[ṣṭutva] is @[asiddha]**: The retroflexion changes (@[ṣṭutva]) are treated as "not having taken effect" for subsequent operations.

This prevents cascading retroflex changes.`,

  "82066": `@deva[ससजुषो रुः] — **@deva[रु] Substitution**: Final @deva[स्] of @deva[सस्] "one's own" and @deva[सजुष्] "together with" becomes @deva[रु] (र् + उ) before pause or consonant.

| Word | Becomes |
|------|---------|
| @deva[सस्] | @deva[सः] (→ @deva[सर्]) |
| @deva[सजुष्] | @deva[सजुर्] |`,

  "82067": `@deva[अः सुपि स्वरात्] — After a @[svara] (vowel), @deva[अस्] (the ending स्) in @[sup] (case endings) becomes @deva[अः] (visarga with preceding अ).

This is basic visarga formation: @deva[-अस्] → @deva[-अः].`,

  "82068": `@deva[अयस्मयादीनि छन्दसि] — **Vedic Forms**: Words like @deva[अयस्मय] "made of iron" in Vedic (@[chandas]) follow special sandhi patterns.`,

  "82069": `@deva[रोऽसुपि] — **@deva[र्] for Non-@[sup]**: When @b[not] before a @[sup] (case) ending, @deva[स्] becomes @deva[र्] (not visarga).

This is @deva[रु]-substitution: @deva[पुनस् + करोति] → @deva[पुनर्करोति].`,

  "82070": `@deva[अप्येवयोः] — After @deva[अपि] and @deva[एव], the preceding rules apply with specific scope or manner.`,

  "82071": `@deva[सुप्यपित्रोः] — **Exception Pair**: For @deva[सुप्] "a good drinker" and @deva[अपित्र] "fatherless", the visarga/र् rules have special application.`,

  "82072": `@deva[विसर्जनीयस्य सः] — **Visarga → @deva[स्]**: Before certain consonants, visarga (ः) reverts to @deva[स्].

| Before | Visarga → |
|--------|-----------|
| @deva[त्], @deva[थ्] | @deva[स्] |
| @deva[च्], @deva[छ्] | @deva[श्] (next rule) |

@deva[रामः + तत्र] → @deva[रामस्तत्र].`,

  "82073": `@deva[कुप्वोः ⌀ क ⌀ पौ च] — **Visarga before Gutturals/Labials**: Before @deva[क्]-class (gutturals) and @deva[प्]-class (labials), visarga may become jihvāmūlīya (before gutturals) or upadhmānīya (before labials), or remain as visarga.

| Before | Becomes |
|--------|---------|
| @deva[क्], @deva[ख्] | Jihvāmūlīya or ः |
| @deva[प्], @deva[फ्] | Upadhmānīya or ः |`,

  "82074": `@deva[श्चुत्वोर्यादेव] — **Visarga before Palatals/Retroflexes**: Before @[ścu] (श्, च्-class) and other sibilant contexts, visarga becomes @deva[श्] or the appropriate sibilant.

@deva[रामः + चरति] → @deva[रामश्चरति].`,

  "82075": `@deva[तृष्टुप्चतुर्थतक्रचतुरः स्थौ] — For the words @deva[त्रिष्टुप्] (a Vedic meter), @deva[चतुर्थ] "fourth", @deva[तक्र] "buttermilk", and @deva[चतुर्] "four", @deva[स्थ्] (or स्थ-like behavior) applies in certain formations.`,

  "82076": `@deva[र्वोरुपधाया दीर्घ इकः] — **Lengthening before @deva[र्]/व्]**: When @deva[र्] or @deva[व्] is in the @[upadhā] (penultimate) position, a preceding @[ik] vowel (इ, उ, ऋ, ऌ) becomes long.

| Short | → Long | Example |
|-------|--------|---------|
| @deva[इ] | @deva[ई] | @deva[गिर्] → @deva[गीर्] |
| @deva[उ] | @deva[ऊ] | @deva[पुर्] → @deva[पूर्] |`,

  "82077": `@deva[हलि च] — Before @[hal] (consonant) as well, the lengthening of @ref[8.2.76] applies when @deva[र्]/व्] is penultimate.`,

  "82078": `@deva[आच्छीनद्योर् नुम्] — For @deva[आच्छि] and @deva[नद्य], the augment @deva[नुम्] is inserted in appropriate contexts.`,

  "82079": `@deva[ऊतो ऽपसर्गे] — After @deva[ऊत्] (a specific form), when no @[upasarga] (preverb) precedes, special rules apply.`,

  "82080": `@deva[अदसो मात्] — For @deva[अदस्] "that (yonder)", the substitute @deva[मात्] replaces certain case forms.

@deva[अदस्] → @deva[अमू] (nom. dual), with @deva[म्] appearing.`,

  "82081": `@deva[एत ईद् बहुवचने] — For @deva[एतद्] "this", the substitute @deva[ईत्] appears in plural forms.

@deva[एतद्] + plural → forms with @deva[ई] (like @deva[एते], @deva[एतानि]).`,

  "82082": `@deva[आद्यन्तौ टकितौ] — **Adhikāra**: Sounds marked with @deva[ट्] as @[it] apply at the beginning; those marked with @deva[क्] as @[it] apply at the end.

This governs the placement of augments and substitutes.`,

  "82083": `@deva[प्रत्यये भाषायां नित्यम्] — **Obligatory in Speech**: When an affix (@[pratyaya]) is involved, in ordinary @[bhāṣā] (spoken Sanskrit), the rules apply invariably (@[nitya]).`,

  "82084": `@deva[श्वयुवमघोनां अतद्धिते] — For @deva[श्वन्] "dog", @deva[युवन्] "young man", and @deva[मघवन्] "Indra", when @b[not] before @[taddhita] suffixes, special stem changes occur.

| Stem | Strong Form | Weak Form |
|------|-------------|-----------|
| @deva[श्वन्] | @deva[श्वान्] | @deva[शुन्] |
| @deva[युवन्] | @deva[युवान्] | @deva[यून्] |`,

  "82085": `@deva[आह्नः सप्तम्याम्] — For @deva[अहन्] "day", in the @[saptamī] (locative) case, special forms apply.

@deva[अहन्] + locative → @deva[अहनि] or @deva[अह्नि] (locative "in a day").`,

  "82086": `@deva[अहोरात्रे अपराह्णाह्नः] — For @deva[अपराह्ण] "afternoon" and similar compounds with @deva[अहन्], in the compound @deva[अहोरात्र] "day-and-night", special rules apply.`,

  "82087": `@deva[पूर्वाह्णापराह्णाह्नामहस्त्रियोग्रहणादिषु] — **Compound Forms**: In @deva[पूर्वाह्ण] "forenoon", @deva[अपराह्ण] "afternoon", and when @deva[अहन्] appears in compounds with @deva[त्रि] "three", @deva[योग] "conjunction", @deva[ग्रहण] "eclipse", special stem behavior applies.`,

  "82088": `@deva[तद्वत इति तद्धितः] — **@[taddhita] Scope**: The statement "like that" (@[tadvat]) indicates that @[taddhita] (secondary) suffixes follow the patterns described.`,

  "82089": `@deva[एकचोऽपृक्ताद्वा] — **Optional for Monosyllables**: From an @[apṛkta] (single-sound) or monosyllabic element, the operations are optional.`,

  "82090": `@deva[यस्येदम्] — **Pluta Introduction**: From here, rules for @[pluta] (protracted/lengthened vowels marked with ३) begin.

A @[pluta] vowel is held for three @[mātrā] (morae): @deva[अ३] "aaa".`,

  "82091": `@deva[आङ् इतः] — The particle @deva[आ] combined with @deva[इति] takes @[pluta] in specified contexts: @deva[आ३ इति] or similar.`,

  "82092": `@deva[आविद्वान् हि] — "Even a non-knower" — This sūtra references a specific usage example where @[pluta] appears after @deva[आ] in the context of the particle @deva[हि].`,

  "82093": `@deva[अनुदात्तस्य चार्धम्] — An @[anudātta] (unaccented) vowel receives half-@[pluta] or modified @[pluta] treatment in certain contexts.`,

  "82094": `@deva[ब्राह्मणानां च विभाषा] — **Optional for Brāhmaṇas**: In @[brāhmaṇa] texts (Vedic prose), the @[pluta] is optional.`,

  "82095": `@deva[आमन्त्रितस्य च] — **Vocative @[pluta]**: A @[āmantrya] (vocative/address) word also takes @[pluta] optionally.

@deva[हे देवदत्त३] — "O Devadatta!" with lengthened final vowel.`,

  "82096": `@deva[तिस्त्रश् चतस्त्रो ऽस्त्रियाम्] — For @deva[तिस्र्] "three" (fem.) and @deva[चतस्र्] "four" (fem.), when @b[not] feminine reference, special forms apply.`,

  "82097": `@deva[अकस्मात्] — The word @deva[अकस्मात्] "suddenly, unexpectedly" (ablative of @deva[अकस्मात्]) is treated as a fixed form.`,

  "82098": `@deva[दूरात् ध्वयोः] — From a distance (@deva[दूरात्]), when calling, @[pluta] applies with @deva[ध्] or @deva[व्] in the vocative.`,

  "82099": `@deva[उपसर्गो ऽपि सामान्यवचने] — **Preverb @[pluta]**: Even an @[upasarga] (preverb) can take @[pluta] when used in a general statement or address.`,

  "82100": `@deva[अद्भुते हसितप्रश्नक्रोधरागिणां हसितप्रश्ने क्रोधेषु च] — **Emotional @[pluta]**: @[pluta] expresses:

| Emotion | Example |
|---------|---------|
| Surprise | @deva[अहो३] "Oh!" |
| Laughter | @deva[हा३] "Ha!" |
| Question | @deva[का३] "What?!" |
| Anger | @deva[रे३] "Hey!" (angry) |

Protracted vowels convey emotional intensity.`,

  "82101": `@deva[समानाक्षरे] — When syllables are @[samānākṣara] (identical/homogeneous), @[pluta] applies per preceding context.`,

  "82102": `@deva[इञः प्राचाम्] — For the @deva[इञ्] suffix (forming patronymics), in the Eastern grammatical tradition, @[pluta] patterns differ.`,

  "82103": `@deva[रोऽलःसमाने पूर्वस्य] — When @deva[र्] and a following consonant are @[samāna] (in the same syllable), the prior element takes @[pluta] or related modification.`,

  "82104": `@deva[अपृष्टो गुरुपूर्वम्] — **Unsolicited Teaching**: When teaching without being asked, a @[guru] (heavy syllable) precedes the @[pluta].

This stylistic @[pluta] shows unsolicited emphasis.`,

  "82105": `@deva[ये चाभ्यामाम्नातास्तेषां तथात्वम्] — Those forms that are handed down through tradition (@[āmnāta]) from authoritative teachers retain their @[pluta] patterns as taught.`,

  "82106": `@deva[प्लुतप्रगृह्या अचि नित्यम्] — **@[pluta]-@[pragṛhya]**: A @[pluta] vowel that is @[pragṛhya] (exempt from sandhi) @b[always] remains unchanged before a following vowel.

@deva[का३ अपि] — no coalescence; the @[pluta] blocks sandhi.`,

  "82107": `@deva[एत ऐ च] — For @deva[एत्] "this" and @deva[ऐ] (dative singular), special @[pluta] or related rules apply.`,

  "82108": `@deva[क एकवचने च] — For interrogative @deva[क] "who/what" in the @[ekavacana] (singular), @[pluta] may apply in questions.

@deva[को३] "Whooo?" — interrogative emphasis.`
};

Object.assign(data, newEntries);
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Added ${Object.keys(newEntries).length} entries (8.2.56-108)`);
console.log(`Total entries: ${Object.keys(data).length}`);
