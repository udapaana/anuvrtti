#!/usr/bin/env bun
/**
 * check-linga.ts — is the derived लिङ्ग right?
 *
 * Gender is the one सुबन्त dimension vidyut cannot produce: it is an INPUT to
 * derivation, not an output. build-quiz therefore infers it — from the cells
 * the corpus's own annotated forms can occupy, from vocabulary.json, and from
 * Monier-Williams as a bound. Inference needs a scoreboard, and the corpus
 * cannot be its own: only 19 stems carry a hand-written लिङ्ग tag, which is the
 * backlog this machinery exists to fill.
 *
 * So the scoreboard is here: the gender of the corpus's commonest stems,
 * written out by hand, in the same spirit as the dhātupāṭha fixture in
 * build-dhatu-map.ts. It answers the question that actually matters — not "did
 * the number go up" but "are the answers true" — and it is what stopped the
 * MW import from trading five right answers for one fewer wrong one without
 * anybody noticing.
 *
 * WHAT IS IN IT. Substantives whose gender is not in doubt. Deliberately absent:
 *
 *   - adjectives (बहु, श्रेष्ठ, महत्, प्रिय, दीर्घ, क्रूर, विश्व, दीन, पटु)
 *     and pronouns/सर्वादि (सर्व, एक, अन्य, अस्मद्, तद्). Their gender belongs
 *     to the occurrence, not the stem — that is what agreement means — so there
 *     is no stem-level answer to check against.
 *   - stems that really are two genders in classical use: गो (m and f), ब्रह्मन्
 *     (n. the absolute, m. the god), अर्ध, प्रेमन्. Asserting one would make the
 *     fixture wrong rather than the code.
 *
 * FAILURE IS SOFT, ON PURPOSE. A stem the corpus has not yet disambiguated is
 * blank, and blank is the honest answer — it must not fail a build. A stem
 * with the WRONG gender is a defect, and that is hard: nothing about this
 * inference is allowed to print पुंलिङ्ग on a neuter.
 */
import * as fs from 'fs';

/*
  Hand-written, from the corpus's most frequent सुबन्त stems downward.

  A few worth spelling out because the obvious guess is wrong:
    मित्र   n. — "a friend" is neuter (मित्रम्), not masculine
    बल     n. — बलम्
    वर्ष   n. — वर्षम्, a year
    सुख / दुःख / मुख / गृह  n. — all four came out wrong at some point
    धी / वाच् / रज्जु      f. — consonant and ī-stem feminines
    यशस् / तपस् / नमस् / मनस् / शिरस् / आयुस्  n. — the स्-stems
*/
const FIXTURE: Record<string, string> = {
  // masculine
  बाल: 'm', ग्राम: 'm', राजन्: 'm', नर: 'm', गुरु: 'm', कृष्ण: 'm', धर्म: 'm',
  पुत्र: 'm', शिष्य: 'm', पितृ: 'm', देव: 'm', जन: 'm', राम: 'm', मुनि: 'm',
  अग्नि: 'm', सिंह: 'm', नृप: 'm', इन्द्र: 'm', ब्राह्मण: 'm', सुत: 'm',
  घट: 'm', कर्तृ: 'm', दूत: 'm', वीर: 'm', पशु: 'm', मन्त्रिन्: 'm', वृक्ष: 'm',
  गोप: 'm', स्वामिन्: 'm', राजपुरुष: 'm', शशक: 'm', कूप: 'm', वर: 'm',
  वायु: 'm', मार्ग: 'm', दण्डिन्: 'm', शत्रु: 'm', पण्डित: 'm', सर्प: 'm',
  यज्ञ: 'm', भ्रातृ: 'm', पाद: 'm', गिरि: 'm', हेतु: 'm', गुण: 'm',
  आचार्य: 'm', काल: 'm', नरपति: 'm', मनोरथ: 'm', मृग: 'm', कंस: 'm',
  अर्थ: 'm', लोक: 'm', वणिज्: 'm', देवदत्त: 'm', तापस: 'm', ऋषि: 'm',
  पुरुष: 'm', पाठ: 'm', अन्त: 'm', सोम: 'm', जय: 'm', कुम्भकार: 'm',
  शूर: 'm', राजपुत्र: 'm', पावक: 'm', वेद: 'm', भिक्षु: 'm', मेघ: 'm',
  अलंकार: 'm', सक्तु: 'm', भूपति: 'm', होतृ: 'm', रथ: 'm', अध्वर: 'm',
  क्षण: 'm', दम: 'm', अङ्क: 'm', वसिष्ठ: 'm', सगर: 'm', नकुल: 'm',
  देश: 'm', कुलाल: 'm', मोदक: 'm', दास: 'm', भार: 'm', वृक: 'm',
  लक्ष्मण: 'm', पर्वत: 'm', हरि: 'm', विष्णु: 'm', राक्षस: 'm', स्तन: 'm',
  दशरथ: 'm', स्नेह: 'm', सूर्य: 'm', मयूर: 'm', काक: 'm', पाषाण: 'm',
  तरु: 'm', फण: 'm', यति: 'm', व्याघ्र: 'm', हस्त: 'm', दिवस: 'm',
  पुरोहित: 'm', ऋत्विज्: 'm', जनपद: 'm', उद्यम: 'm', मातुल: 'm',
  ग्रन्थ: 'm', शोक: 'm', संस्कार: 'm', यत्न: 'm', वध: 'm', मल्ल: 'm',
  अधर्म: 'm', आहार: 'm', सूनु: 'm', भानु: 'm', विनाश: 'm', उपाय: 'm',
  विलम्ब: 'm', निषाद: 'm', द्विज: 'm', तनय: 'm', वत्स: 'm', काम: 'm',
  राशि: 'm', इन्दु: 'm', कुमार: 'm', वरुण: 'm', क्रतु: 'm', कवि: 'm',
  दक्ष: 'm', मेध: 'm', वह्नि: 'm', केतु: 'm', गोवर्धन: 'm', दामोदर: 'm',
  पीताम्बर: 'm', अक्रूर: 'm', ध्रुव: 'm', विनय: 'm',

  // feminine
  मातृ: 'f', नदी: 'f', यशोदा: 'f', विद्या: 'f', धी: 'f', सभा: 'f',
  बुद्धि: 'f', गोपी: 'f', सेना: 'f', भूमि: 'f', मथुरा: 'f', शबला: 'f',
  सरस्वती: 'f', गङ्गा: 'f', जटा: 'f', भक्ति: 'f', देवी: 'f', रज्जु: 'f',
  पूतना: 'f', मृत्तिका: 'f', राज्ञी: 'f', कथा: 'f', पूजा: 'f', नारी: 'f',
  क्षमा: 'f', रात्रि: 'f', वाच्: 'f', कन्या: 'f', लता: 'f', माला: 'f',
  अयोध्या: 'f', मिथिला: 'f', प्रजा: 'f', सेवा: 'f', भिक्षा: 'f',
  क्रिया: 'f', गति: 'f', वसुधा: 'f', स्त्री: 'f', धृति: 'f',
  प्रतिष्ठा: 'f', महिषी: 'f', दक्षिणा: 'f', श्रद्धा: 'f', सुमति: 'f',
  पत्नी: 'f', देवता: 'f',

  // neuter
  धन: 'n', वन: 'n', फल: 'n', जल: 'n', गृह: 'n', वचन: 'n', सत्य: 'n',
  सुख: 'n', नगर: 'n', अन्न: 'n', मित्र: 'n', मुख: 'n', शास्त्र: 'n',
  तीर: 'n', बल: 'n', नमस्: 'n', तपस्: 'n', गोकुल: 'n', विष: 'n',
  धर्मशास्त्र: 'n', भय: 'n', ज्ञान: 'n', कर्मन्: 'n', पुष्प: 'n',
  नीलोत्पल: 'n', असत्य: 'n', जगत्: 'n', क्षेत्र: 'n', दान: 'n',
  वर्ष: 'n', यशस्: 'n', नामन्: 'n', धान्य: 'n', ऋत: 'n', शिरस्: 'n',
  कुल: 'n', पुस्तक: 'n', नवनीत: 'n', गमन: 'n', मनस्: 'n', पद: 'n',
  नक्षत्र: 'n', द्यूत: 'n', कमल: 'n', सरस्: 'n', रामायण: 'n', चरित: 'n',
  दुःख: 'n', भोजन: 'n', काष्ठ: 'n', छत्र: 'n', लोचन: 'n', दर्शन: 'n',
  यौवन: 'n', व्याकरण: 'n', हृदय: 'n', द्रव्य: 'n', भाजन: 'n',
  शस्त्र: 'n', राष्ट्र: 'n', चन्दन: 'n', उपवन: 'n', शौच: 'n', आयुस्: 'n',
  उक्थ: 'n', वाक्य: 'n', उदर: 'n', पात्र: 'n', रत्न: 'n', रजत: 'n',
  सलिल: 'n', यान: 'n', शत: 'n', मूल्य: 'n', कार्य: 'n', भवन: 'n'
};

const DEV: Record<string, string> = { m: 'पुंलिङ्ग', f: 'स्त्रीलिङ्ग', n: 'नपुंसकलिङ्ग' };

const lingas: Record<string, string> =
  JSON.parse(fs.readFileSync('static/data/usage.json', 'utf-8')).lingas ?? {};

const wrong: string[] = [];
const blank: string[] = [];
let right = 0;
for (const [stem, g] of Object.entries(FIXTURE)) {
  const got = lingas[stem];
  if (!got) blank.push(stem);
  else if (got === DEV[g]) right++;
  else wrong.push(`${stem}: derived ${got}, is ${DEV[g]}`);
}

const known = right + wrong.length;
console.log(
  `लिङ्ग: ${right}/${known} derived answers correct, ` +
    `${blank.length}/${Object.keys(FIXTURE).length} fixture stems still unset`
);

if (wrong.length) {
  console.error(`\n${wrong.length} stem(s) derived with the WRONG gender:`);
  for (const w of wrong) console.error(`    ${w}`);
  process.exit(1);
}

// Not a failure — a blank is honest — but name a few so the backlog is visible.
if (blank.length && process.argv.includes('--verbose')) {
  console.log(`  unset: ${blank.join(' ')}`);
}
