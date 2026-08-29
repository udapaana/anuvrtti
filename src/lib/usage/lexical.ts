/**
 * lexical.ts — the tags that follow from a lemma or an affix, not from a reading.
 *
 * The completeness report has a long tail that looks like an authoring backlog
 * and is not one. सर्वनाम was 0% complete across 393 words, entirely because
 * every one of them lacked सर्वनाम-भेद — and सर्वनाम-भेद is not a judgement
 * about an occurrence. The pronoun stems are a closed list of nine, Pāṇini's
 * own, and किम् is प्रश्नवाचक in every sentence it will ever appear in. Asking a
 * person to write that tag 393 times is asking them to transcribe a lookup
 * table, and a transcribed table is a table with typos in it.
 *
 * So these are the lookups. Each maps a closed set to a value that the set
 * determines, the same way गण is determined by a root and विकरण by a गण — both
 * of which the schema already calls `derived` for exactly this reason.
 *
 * THE RULE FOR ADDING TO THIS FILE. An entry belongs here only if the value
 * follows from the key ALONE, with no appeal to the sentence. Where it does
 * not, the entry is left out and the tag stays authored — which is why क्त and
 * the कृत्य affixes are conspicuously absent below, and why अण् is missing from
 * the तद्धित table. Half a table is fine; a table that is right most of the
 * time is not, because a derived tag is asserted with the same confidence as an
 * authored one and the reader cannot tell them apart.
 *
 * An authored tag always wins over these — see `derivedFeatures` in
 * build-readings.ts. So a genuine exception is corrected by annotating it,
 * never by weakening the table.
 */

/**
 * सर्वनाम-भेद, from the pronoun stem. 1.1.27's सर्वादीनि list is closed and the
 * nine true pronouns in it each belong to exactly one class.
 */
export const SARVANAMA_BHEDA: Record<string, string> = {
  तद्: 'निर्देशवाचक',
  एतद्: 'निर्देशवाचक',
  इदम्: 'निर्देशवाचक',
  अदस्: 'निर्देशवाचक',
  किम्: 'प्रश्नवाचक',
  यद्: 'सम्बन्धवाचक',
  अस्मद्: 'पुरुषवाचक',
  युष्मद्: 'पुरुषवाचक',
  भवत्: 'आदरवाचक'
};

/**
 * संख्या-भेद, from the numeral stem.
 *
 * पूरण is the ordinal — the one that fills a place (5.2.48 तस्य पूरणे डट्).
 * संख्येय is the plain cardinal. संख्यान, the act of counting, is not asserted
 * here: it needs the sentence, and the corpus's collectives (त्रितय, दशक) are
 * तद्धित derivatives whose own affix already says so.
 */
export const SANKHYA_BHEDA: Record<string, string> = {
  // cardinals
  एक: 'संख्येय', द्वि: 'संख्येय', त्रि: 'संख्येय', चतुर्: 'संख्येय',
  पञ्चन्: 'संख्येय', षष्: 'संख्येय', सप्तन्: 'संख्येय', सप्त: 'संख्येय',
  अष्टन्: 'संख्येय', नवन्: 'संख्येय', दशन्: 'संख्येय',
  एकादशन्: 'संख्येय', द्वादशन्: 'संख्येय', विंशति: 'संख्येय',
  त्रिंशत्: 'संख्येय', षष्टि: 'संख्येय', शत: 'संख्येय', सहस्र: 'संख्येय',
  शतसहस्र: 'संख्येय', कोटिशत: 'संख्येय',
  // ordinals
  प्रथम: 'पूरण', द्वितीय: 'पूरण', तृतीय: 'पूरण', चतुर्थ: 'पूरण',
  पञ्चम: 'पूरण', षष्ठ: 'पूरण', सप्तम: 'पूरण', अष्टम: 'पूरण',
  नवम: 'पूरण', दशम: 'पूरण', आद्य: 'पूरण'
};

/**
 * प्रयोग, from the कृत् affix.
 *
 * 3.4.67 कर्तरि कृत् is the general rule: a कृत् affix denotes the agent unless
 * a later rule overrides. The overrides are 3.4.70 तयोरेव कृत्यक्तखलर्थाः — the
 * कृत्य affixes and क्त are कर्मणि or भावे — and the भावे section from 3.3.18
 * onwards, which is where घञ्, ल्युट् and क्तिन् live.
 *
 * WHAT IS DELIBERATELY MISSING. क्त and the कृत्य affixes (तव्य, अनीयर्, ण्यत्,
 * यत्, क्यप्) are cited above as the very rule that makes them ambiguous:
 * 3.4.70 offers कर्मणि AND भावे, and 3.4.72 sends क्त back to कर्तरि for
 * गत्यर्थ and अकर्मक roots — गतः is कर्तरि, दत्तः is कर्मणि. Choosing between
 * them needs the root's transitivity, and data/dhatupatha.tsv carries only
 * (code, dhātu, artha) — no सकर्मक/अकर्मक column. So they stay authored, which
 * is honest: they are 47 of the corpus's कृदन्त and the two commonest tags in
 * it, and guessing would put a wrong voice on all of them.
 */
export const KRT_PRAYOGA: Record<string, string> = {
  // 3.4.67 कर्तरि कृत् — agent participles and agent nouns
  शतृ: 'कर्तरि', शानच्: 'कर्तरि', क्वसु: 'कर्तरि', कानच्: 'कर्तरि',
  क्तवतु: 'कर्तरि', तृच्: 'कर्तरि', तृन्: 'कर्तरि', ण्वुल्: 'कर्तरि',
  णिनि: 'कर्तरि',
  /*
    The कृदव्यय. They take no ending and name no participant; the action they
    carry belongs to the main verb's agent — पठित्वा गच्छति is one person doing
    both — so they are कर्तरि in the only sense the term can have here.
  */
  'क्त्वा': 'कर्तरि', 'ल्यप्': 'कर्तरि', 'तुमुन्': 'कर्तरि', 'णमुल्': 'कर्तरि',
  // 3.3.18 भावे and the section it governs — the action itself, named
  घञ्: 'भावे', ल्युट्: 'भावे', क्तिन्: 'भावे', अच्: 'भावे'
};

/**
 * तद्धित अर्थ, from the तद्धित affix.
 *
 * Each affix in 4.1–5.4 is taught under a heading that IS its sense: इञ् under
 * 4.1.95 अत इञ् in the अपत्य section, मतुप् under 5.2.94 तदस्यास्त्यस्मिन्निति
 * मतुप्, त्व and तल् under 5.1.119 तस्य भावस्त्वतलौ. The affix names the sense.
 *
 * अण् is missing on purpose: it is the general affix and is taught in the
 * अपत्य, तस्येदम् and विकार sections alike, so the affix alone does not settle
 * which. ठक्, छ and यत् are out for the same reason.
 */
export const TADDHITA_ARTHA: Record<string, string> = {
  // 4.1.92 ff. — descent
  इञ्: 'अपत्य', ढक्: 'अपत्य', यञ्: 'अपत्य',
  // 5.2.94 — possession
  मतुप्: 'मतुबर्थ', विनि: 'मतुबर्थ', इन्: 'मतुबर्थ', इनि: 'मतुबर्थ', वत्: 'मतुबर्थ',
  // 5.1.119 ff. — the abstract quality
  त्व: 'भाव', तल्: 'भाव', ष्यञ्: 'भाव', इमनिच्: 'भाव',
  // 5.3.55 ff. — degree
  तरप्: 'अतिशायन', तमप्: 'अतिशायन', इष्ठन्: 'अतिशायन', ईयसुन्: 'अतिशायन',
  // 5.2.41 — how many
  डति: 'संख्या',
  // 5.3–5.4 — affixes that make an indeclinable of manner, place or number
  तसिल्: 'अव्ययीकरण', वति: 'अव्ययीकरण', त्रल्: 'अव्ययीकरण',
  धा: 'अव्ययीकरण', कृत्वसुच्: 'अव्ययीकरण', दा: 'अव्ययीकरण', था: 'अव्ययीकरण'
};

/**
 * अव्यय-भेद, from the indeclinable itself.
 *
 * This is the one table that is a list rather than a rule, because अव्यय is
 * where Sanskrit keeps everything that does not inflect and the classes are
 * distinguished by what a word DOES. Three of them are decidable from the word
 * alone and are written out here:
 *
 *   उपसर्ग       1.4.59's closed list of twenty-two, and only when the word
 *                stands as one — प्र, वि, आ. (A उपसर्ग bound to a verb is
 *                already carried as the verb's own उपसर्ग tag.)
 *   निपात        1.4.56 प्राग्रीश्वरान्निपाताः — the particles: च, वा, हि, तु,
 *                एव, अपि, न, इति. They connect or colour; they never modify.
 *   क्रियाविशेषण  adverbs of time, place and manner, including everything the
 *                तद्धित adverbial affixes make (ततस्, सर्वत्र, शनैस्).
 *
 * कर्मप्रवचनीय is absent, and that absence is the point: 1.4.83 defines it by
 * USE, not by form. अनु and अपि are निपात in one sentence and कर्मप्रवचनीय in
 * the next, so only the sentence can say, and only an author can read it.
 */
export const AVYAYA_BHEDA: Record<string, string> = {
  // 1.4.59 उपसर्गाः क्रियायोगे — standing alone in the corpus
  प्र: 'उपसर्ग', परा: 'उपसर्ग', अप: 'उपसर्ग', सम्: 'उपसर्ग', अनु: 'उपसर्ग',
  अव: 'उपसर्ग', निस्: 'उपसर्ग', निर्: 'उपसर्ग', दुस्: 'उपसर्ग', दुर्: 'उपसर्ग',
  वि: 'उपसर्ग', आ: 'उपसर्ग', नि: 'उपसर्ग', अधि: 'उपसर्ग', अपि: 'उपसर्ग',
  अति: 'उपसर्ग', सु: 'उपसर्ग', उद्: 'उपसर्ग', अभि: 'उपसर्ग', प्रति: 'उपसर्ग',
  परि: 'उपसर्ग', उप: 'उपसर्ग',

  // 1.4.56 निपाताः — particles
  च: 'निपात', वा: 'निपात', तु: 'निपात', हि: 'निपात', एव: 'निपात',
  न: 'निपात', मा: 'निपात', इति: 'निपात', इव: 'निपात', उत: 'निपात',
  उ: 'निपात', ह: 'निपात', वै: 'निपात', स्म: 'निपात', खलु: 'निपात',
  नु: 'निपात', किल: 'निपात', अङ्ग: 'निपात', अथ: 'निपात', अहो: 'निपात',
  यदि: 'निपात', चेत्: 'निपात', किन्तु: 'निपात', परन्तु: 'निपात',
  हे: 'निपात', धिक्: 'निपात', नूनम्: 'निपात', बत: 'निपात',

  // adverbs — time
  अद्य: 'क्रियाविशेषण', श्वस्: 'क्रियाविशेषण', ह्यस्: 'क्रियाविशेषण',
  अधुना: 'क्रियाविशेषण', इदानीम्: 'क्रियाविशेषण', सदा: 'क्रियाविशेषण',
  सर्वदा: 'क्रियाविशेषण', तदा: 'क्रियाविशेषण', यदा: 'क्रियाविशेषण',
  कदा: 'क्रियाविशेषण', एकदा: 'क्रियाविशेषण', पुरा: 'क्रियाविशेषण',
  पश्चात्: 'क्रियाविशेषण', सायम्: 'क्रियाविशेषण', प्रातर्: 'क्रियाविशेषण',
  नित्यम्: 'क्रियाविशेषण', प्रतिदिनम्: 'क्रियाविशेषण', पूर्वम्: 'क्रियाविशेषण',
  पुनर्: 'क्रियाविशेषण', तर्हि: 'क्रियाविशेषण', अहर्निशम्: 'क्रियाविशेषण',

  // adverbs — place
  अत्र: 'क्रियाविशेषण', तत्र: 'क्रियाविशेषण', यत्र: 'क्रियाविशेषण',
  कुत्र: 'क्रियाविशेषण', इह: 'क्रियाविशेषण', सर्वत्र: 'क्रियाविशेषण',
  अन्यत्र: 'क्रियाविशेषण', उपरि: 'क्रियाविशेषण', अधस्: 'क्रियाविशेषण',
  बहिस्: 'क्रियाविशेषण', अन्तर्: 'क्रियाविशेषण', दूरम्: 'क्रियाविशेषण',
  समीपम्: 'क्रियाविशेषण', पुरतस्: 'क्रियाविशेषण', इतस्ततस्: 'क्रियाविशेषण',

  // adverbs — manner, cause and degree
  एवम्: 'क्रियाविशेषण', तथा: 'क्रियाविशेषण', यथा: 'क्रियाविशेषण',
  अन्यथा: 'क्रियाविशेषण', इत्था: 'क्रियाविशेषण', ततस्: 'क्रियाविशेषण',
  यतस्: 'क्रियाविशेषण', अतस्: 'क्रियाविशेषण', कुतस्: 'क्रियाविशेषण',
  विश्वतस्: 'क्रियाविशेषण', शनैस्: 'क्रियाविशेषण', उच्चैस्: 'क्रियाविशेषण',
  नीचैस्: 'क्रियाविशेषण', अतीव: 'क्रियाविशेषण', भृशम्: 'क्रियाविशेषण',
  वृथा: 'क्रियाविशेषण', तूष्णीम्: 'क्रियाविशेषण', स्वयम्: 'क्रियाविशेषण',
  बहुधा: 'क्रियाविशेषण', प्रत्यक्षम्: 'क्रियाविशेषण', मिथस्: 'क्रियाविशेषण'
};
