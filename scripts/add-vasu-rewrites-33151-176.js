import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const path = require('path');

const vasuPath = path.join(process.cwd(), 'static/data/vasu_rewritten.json');
const vasu = require(vasuPath);

const newEntries = {
  '33151': `@deva[अन्यत्र यदि वर्जम् लृट्] — In all other cases expressing "wonder" (without @deva[यच्च], @deva[यत्र], or @deva[यदि]), the First Future (@deva[लृट्]) is used instead of the Potential.

Examples:
- @deva[आश्चर्यम्, चित्रम्, अद्भुतम् — अन्धो नाम पर्वतम् आरोक्ष्यति] — "It is wonderful, strange, astonishing that a blind man will climb the mountain"
- @deva[बधिरो नाम व्याकरणम् अध्येष्यते] — "A deaf man will learn grammar (astonishing!)"`,

  '33152': `@deva[उताप्योः समर्थयोर्लिङ्] — The Potential (@deva[लिङ्]) is used in all tenses when @deva[उत] and @deva[अपि] are in composition, both having the same meaning.

This excludes all other tense-affixes.

The common meaning of both @deva[उत] and @deva[अपि] here is @deva[बाढम्] ("assuredly, certainly, surely").

| Example | Meaning |
|---------|---------|
| @deva[उत कुर्यात्] | certainly he does |
| @deva[अपि कुर्यात्] | assuredly he does |
| @deva[उताधीयीत] | certainly he studies |
| @deva[अप्यधीयीत] | surely he studies |

Why "same meaning"? @deva[उत दण्डः] (disjunctive "or") — not this rule.`,

  '33153': `@deva[कामप्रवेदनायां लिङ् कच्चिद्वर्जम्] — The Potential (@deva[लिङ्]) is used when expressing a wish (@deva[कामप्रवेदना]), except when @deva[कच्चित्] is in composition.

@deva[कामप्रवेदना] = expression of one's wish.

This debars all other tense-affixes.

| Example | Meaning |
|---------|---------|
| @deva[कामो मे भुञ्जीत भवान्] | It is my wish that you will eat |
| @deva[अभिलाषो मे भुञ्जीत भवान्] | — |

Why exclude @deva[कच्चित्]? @deva[कच्चिज्जीवति ते माता] — "Does your mother live?" (not wish-expression).`,

  '33154': `@deva[सम्भावनार्थेषु लिङ्ना लमां] — The Potential (@deva[लिङ्]) is used when expectation (@deva[सम्भावन]) of a person's ability to perform the action is implied, other than through expressions of "alarm" (@deva[अलम्]).

@deva[सम्भावन] = supposition/expectation of another's power or ability to perform an action.

This expectation must be complete and true — not merely an alarming warning.

The word @deva[अलम्] means "adequate."`,

  '33155': `@deva[सम्भावनवचने वा यद्वर्जम्] — The Potential (@deva[लिङ्]) is optionally used when a verb expressing expectation (@deva[सम्भावनवचन]) is in construction, but not when @deva[यत्] is used.

The conditions from the previous sūtra qualify this one.

A @deva[सम्भावनवचन] is a word expressing expectation, such as @deva[सम्भावय], @deva[अपि], or @deva[अपिनाम].

This sūtra allows an option where the previous would have been mandatory.`,

  '33156': `@deva[हेतुहेतुमतोर्लिङ्] — The Potential (@deva[लिङ्]) is optionally used after verbs expressing condition (@deva[हेतु]) and consequence (@deva[हेतुमत्]).

- @deva[हेतु] = cause, condition (protasis)
- @deva[हेतुमत्] = consequence, effect (apodosis)

This supersedes all other tense-affixes.

In conditional sentences where one statement depends on another as reason or ground, the Potential is used in both the antecedent and the consequent.`,

  '33157': `@deva[इच्छार्थेषु लिङ्लोटौ] — Both @deva[लिङ्] (Potential) and @deva[लोट्] (Imperative) are used when a verb meaning "to wish" is in construction.

This supersedes all other tense-affixes.

With verbs expressing wish (@deva[इष्], @deva[कम्], @deva[प्रार्थ्], etc.):

| Example | Meaning |
|---------|---------|
| @deva[इच्छामि भुञ्जीत भवान्] | I wish that you may eat |
| @deva[कामये भुङ्क्तां भवान्] | I desire that you eat |
| @deva[प्रार्थये भुञ्जीत भवान्] | I pray that you may eat |

@note[By vārttika, Potential/Imperative applies only when desire is expressed, not mere statement of wish.]`,

  '33158': `@deva[इच्छार्थेषु समानकर्तृकयोस्तुमुन्] — The affix @deva[तुमुन्] applies when a verb meaning "to wish" is in construction, provided the agent of both verbs is the same.

| Example | Meaning |
|---------|---------|
| @deva[इच्छति भोक्तुम्] | he desires to eat |
| @deva[वष्टि भोक्तुम्] | he wishes to eat |
| @deva[कामयते भोक्तुम्] | he wants to eat |
| @deva[पिनाकपाणिं पतिम् आप्तुम् इच्छति] | desires to obtain Śiva as husband |

Why "same agent"? Cannot say: @deva[देवदत्तं भोक्तुम् इच्छति यज्ञदत्तः] — "Yajñadatta wishes Devadatta to eat" (different agents).`,

  '33159': `@deva[समानकर्तृकेषु तुमुनीच्छार्थेषु वा लिङ्] — The Potential (@deva[लिङ्]) is used when verbs meaning "to wish" are in construction and the agent of both is the same.

Under these conditions, the Potential is used in place of the Infinitive:

| Example | Meaning |
|---------|---------|
| @deva[भुञ्जीय इति इच्छति] | he wishes that he may eat |
| @deva[अधीयीय इति इच्छति] | he wishes that he will read |

When non-completion is implied, the Conditional applies per @ref[3.3.139].`,

  '33160': `@deva[इच्छार्थेषु वा वर्तमाने] — After roots meaning "to wish," the Potential (@deva[लिङ्]) is optionally used to denote present time.

This ordains @deva[लिङ्] where otherwise @deva[लट्] would apply.

| Present | Potential | Meaning |
|---------|-----------|---------|
| @deva[इच्छति] | @deva[इच्छेत्] | he wishes |
| @deva[वष्टि] | @deva[उश्यात्] | he wishes |
| @deva[कामयते] | @deva[कामयेत] | he desires |`,

  '33161': `@deva[विधिनिमन्त्रणामन्त्रणाधीष्टसम्प्रश्नप्रार्थनेषु लिङ्] — The Potential (@deva[लिङ्]) is used when the agent:
1. Commands (@deva[विधि])
2. Invites (@deva[निमन्त्रण])
3. Permits (@deva[आमन्त्रण])
4. Politely expresses a wish (@deva[अधीष्ट])
5. Asks a question (@deva[सम्प्रश्न])
6. Prays (@deva[प्रार्थना])

This excludes all other tense-affixes.

| Sense | Example | Meaning |
|-------|---------|---------|
| Command | @deva[कटं कुर्यात्] | let him make the mat |
| Invite | @deva[अमुत्र भवान् आसीत] | please sit there |
| Permit | @deva[यथा रोचते तथा कुर्यात्] | do as you please |
| Wish | @deva[पुत्रं भवान् अध्यापयेत्] | please teach the boy |
| Question | @deva[किं करोमि?] | what should I do? |
| Prayer | @deva[जीव्यात् भवान्] | may you live |`,

  '33162': `@deva[लोट् च] — The Imperative (@deva[लोट्]) is also used in the senses of commanding, inviting, permitting, etc.

This sūtra is separated from the previous so that @deva[लोट्] alone (not @deva[लिङ्]) continues in subsequent sūtras.

| Sense | Example | Meaning |
|-------|---------|---------|
| Command | @deva[कटं तावद् भवान् करोतु] | make the mat |
| Invite/Permit | @deva[अमुत्र भवान् आस्ताम्] | you may sit there |
| Wish | @deva[पुत्रं भवान् अध्यापयतु] | please teach the boy |`,

  '33163': `@deva[प्रैषातिसर्गप्राप्तकालेषु कृत्याश्च] — The @deva[कृत्य] affixes and @deva[लोट्] (Imperative) apply after verbs in the sense of:
1. Direction (@deva[प्रैष])
2. Permission (@deva[अतिसर्ग])
3. Appropriate time (@deva[प्राप्तकाल])

The @deva[च] introduces @deva[लोट्] from the previous sūtra.

| Example | Meaning |
|---------|---------|
| @deva[भवता कटः करणीयः] / @deva[कर्तव्यः] / @deva[कार्यः] | you must/may/it's time to make the mat |
| @deva[भवान् करोतु] | you do it |`,

  '33164': `@deva[ऊर्ध्वमौहूर्तिके लिङ्च] — The Potential (@deva[लिङ्]) (as well as @deva[कृत्य] and @deva[लोट्]) is used in the sense of direction, permission, etc. when the time is future by a @deva[मुहूर्त] (48 minutes), or the Potential may be used for "this very moment."

The words @deva[प्रैष] etc. from the previous sūtra apply here. The @deva[च] draws in @deva[कृत्य] and @deva[लोट्].

Example: @deva[ऊर्ध्वं मुहूर्ताद् भवता खलु कटः कर्तव्यः] / @deva[करोतु] / @deva[कुर्यात्] — "Just now/within the hour you must make the mat."`,

  '33165': `@deva[स्मे लोट्] — The Imperative (@deva[लोट्]) is used when @deva[स्म] is in composition (in the sense of direction, permission, etc.) and referring to time by a @deva[मुहूर्त].

This supersedes the Potential (@deva[लिङ्]) and @deva[कृत्य] affixes.

Example: @deva[ऊर्ध्वं मुहूर्ताद् भवान् कटं करोतु स्म], @deva[ग्रामं गच्छतु स्म], @deva[माणवकम् अध्यापयतु स्म] — "You do make the mat just now."`,

  '33166': `@deva[अधीष्टे च] — When "wish" (@deva[अधीष्ट]) is meant, the Imperative (@deva[लोट्]) may also be used when @deva[स्म] is in composition.

The word @deva[स्म] is understood here. @deva[अधीष्ट] was explained in @ref[3.3.161].

This supersedes the Potential.

Example: @deva[अङ्ग स्म राजन् माणवकम् अध्यापय] or @deva[अङ्ग स्म राजन्नग्निहोत्रं जुहुधि] — "O King! I wish that you teach the boy / make the Agnihotra sacrifice."`,

  '33167': `@deva[कालसमयवेलासु तुमुन्] — The affix @deva[तुमुन्] applies when the words @deva[काल], @deva[समय], or @deva[वेला] (all meaning "time") are in composition.

| Example | Meaning |
|---------|---------|
| @deva[कालो भोक्तुम्] | time to eat |
| @deva[समयः खलु स्नानभोजने सेवितुम्] | it is time to bathe and eat |
| @deva[वेला भोक्तुम्] | time to eat |
| @deva[अवसरोऽयम् आत्मानं प्रकाशयितुम्] | this is the time to show myself |

Why not here? @deva[कालः पचति भूतानि] — "Time devours all creatures" (not infinitive use).`,

  '33168': `@deva[यति कालादिषु लिङ्] — The Potential (@deva[लिङ्]) is used when @deva[यत्] is in composition and @deva[काल], @deva[समय], or @deva[वेला] occurs in construction.

This ordains the Potential and supersedes the Infinitive (@deva[तुमुन्]).

Example: @deva[कालः, समयः, वेला वा यद् भवान् भुञ्जीत] — "It is time that your honor should take your meals."`,

  '33169': `@deva[कर्तर्यर्हणे कृत्यतृचश्च] — The @deva[कृत्य] affixes and @deva[तृच्] apply when fitness regarding the agent is implied (as well as @deva[लिङ्]).

The @deva[च] introduces @deva[लिङ्] from the previous sūtra.

| Affix | Example | Meaning |
|-------|---------|---------|
| @deva[कृत्य] | @deva[भवता खलु कन्या वोढव्या] / @deva[वाह्या] / @deva[वहनीया] | you are fit to marry the girl |
| @deva[तृच्] | @deva[भवान् खलु कन्यया वोढा] | — |
| @deva[लिङ्] | @deva[भवान् खलु कन्यां वहेत्] | — |

@deva[कृत्य] and @deva[तृच्] are specifically mentioned because they relate to agent fitness, not general capability.`,

  '33170': `@deva[अवश्यं कर्तारं णिनिः] — The affix @deva[णिनि] applies after a root to denote an agent when "necessity" or "obligation" is implied.

| Example | Meaning |
|---------|---------|
| @deva[अवश्यं कारी] | must be done (by @ref[2.1.72]) |
| @deva[शतं दायी] | ought to give a hundred |
| @deva[सहस्रं दायी] | ought to give a thousand |
| @deva[निष्कं दायी] | ought to give a gold coin |`,

  '33171': `@deva[अवश्यके कृत्याश्च] — The @deva[कृत्य] affixes also apply when the sense is "necessity" or "obligation" (@deva[अवश्यक]).

| Example | Meaning |
|---------|---------|
| @deva[भवता खलु अवश्यं कटः कर्तव्यः] / @deva[करणीयः] / @deva[कार्यः] / @deva[कृत्यः] | you ought to make the mat |
| @deva[भवता शतं दातव्यम्] / @deva[देयम्] | you ought to pay a hundred |

Though @deva[कृत्य] affixes are general, they are specifically mentioned here to prevent @deva[णिनि] from excluding them.`,

  '33172': `@deva[शक्यार्थेषु च] — Both @deva[लिङ्] (Potential) and @deva[कृत्य] affixes apply when the sense is "capability" (@deva[शक्ति]).

"Capability" qualifies the root — the sense of ability must be inherent in the root.

| Affix | Example | Meaning |
|-------|---------|---------|
| @deva[कृत्य] | @deva[भवता खलु भारो वोढव्यः] / @deva[वहनीयः] / @deva[वाह्यः] | you can carry the load |
| @deva[लिङ्] | @deva[भवान् खलु भारं वहेत्] | — |

Though @deva[कृत्य] affixes would apply generally, their mention guards against exclusion by the specific @deva[णिनि] rule.`,

  '33173': `@deva[आशिषि लिङ्लोटौ] — Both @deva[लिङ्] (Benedictive) and @deva[लोट्] (Imperative) are used when "benediction" (@deva[आशिस्]) is intended.

@deva[आशिस्] = wish to obtain a desired object, blessing, expression of good wishes.

The @deva[लिङ्] here is the @deva[आशीर्लिङ्] (Benedictive mood), with conjugation different from the ordinary Potential/Optative.

| Example | Meaning |
|---------|---------|
| @deva[चिरं जीव्याद् भवान्] | may you live long! |
| @deva[चिरं जीवतु भवान्] | may you live long! |

Why "benediction"? Simple statements don't trigger this rule.`,

  '33174': `@deva[आशिषि संज्ञायां क्तिच्क्तौ] — The affixes @deva[क्तिच्] and @deva[क्त] apply when benediction is intended, provided the word formed is an appellative (@deva[संज्ञा]).

These affixes give agent sense, with the action being the object of a prayer — the sense being simply appellative.

| Word | Formation | Prayer-sense | Meaning |
|------|-----------|--------------|---------|
| @deva[तन्तिः] | @deva[तनुतात्] | "may he weave" | weaver |
| @deva[सातिः] / @deva[सतिः] | @deva[सनुतात्] (by @ref[6.4.45]) | "may he give" | wealth, gift |
| @deva[भूतिः] | @deva[भवतात्] | "may he be" | success |
| @deva[मन्मिः] | @deva[मनुतात्] | "may he think" | respect |`,

  '33175': `@deva[माङि लुङ्] — The Aorist (@deva[लुङ्]) applies after a verb when @deva[माङ्] is in composition.

This sets aside all other tense-affixes.

| Example | Meaning |
|---------|---------|
| @deva[मा कार्षीत्] | let him not do |
| @deva[मा हार्षीत्] | let him not take |

@note[The Imperative and Future in @deva[मा भवतु तस्य पापम्], @deva[मा भविष्यति] are against good usage. Alternatively, there is another @deva[मा] without indicatory @deva[ङ्], with which other tenses apply.]`,

  '33176': `@deva[माङ्स्मयोर्लङ्च] — When @deva[माङ्] is followed by @deva[स्म], both @deva[लङ्] (Imperfect) and @deva[लुङ्] (Aorist) may be used.

The @deva[च] introduces @deva[लुङ्] into the sūtra.

| Example | Meaning |
|---------|---------|
| @deva[मास्म करोत्] or @deva[कार्षीत्] | let him not make |
| @deva[मास्म हरत्] or @deva[हार्षीत्] | let him not take |`
};

let added = 0;
for (const [key, value] of Object.entries(newEntries)) {
  vasu[key] = value;
  added++;
}

fs.writeFileSync(vasuPath, JSON.stringify(vasu, null, 2));
console.log(`Added ${added} entries (3.3.151-176). Total: ${Object.keys(vasu).length}`);
