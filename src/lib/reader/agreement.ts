/**
 * agreement.ts — do two words agree?
 *
 * Construing a line (construe.ts) asks this when a word is given as the
 * qualifier (कीदृशः?) of another. It answers with the one fact the endings give —
 * whether case, number and gender (or a verb's number and person) match — and
 * never with whether the two belong together: two nominatives can agree by
 * accident, and which noun an adjective qualifies is the reader's to decide.
 */

const VIBHAKTIS = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const VACANAS = ['एकवचन', 'द्विवचन', 'बहुवचन'];
const LINGAS = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'];
const PURUSHAS = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const LAKARAS = ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्', 'लेट्'];

export type Features = {
  case?: string;
  number?: string;
  gender?: string;
  /** a finite verb's person; a personal pronoun's, which a verb agrees with */
  person?: string;
  finite: boolean;
  indeclinable: boolean;
};

/** A word's features, from its tags (authored notes and derived values). */
export function featuresOf(w: { notes?: { term?: string }[]; derived?: Record<string, unknown>; lemma?: string }): Features {
  const tags = new Set<string>([
    ...(w.notes ?? []).map((n) => n.term ?? '').filter(Boolean),
    ...Object.values(w.derived ?? {}).map(String)
  ]);
  const find = (xs: string[]) => xs.find((x) => tags.has(x));
  const finite = !!find(LAKARAS) && !!find(PURUSHAS);
  let person = find(PURUSHAS);
  // अहम्, त्वम्: the pronouns a first or second person verb agrees with
  if (!finite && w.lemma === 'अस्मद्') person = 'उत्तमपुरुष';
  if (!finite && w.lemma === 'युष्मद्') person = 'मध्यमपुरुष';
  return {
    case: finite ? undefined : find(VIBHAKTIS),
    number: find(VACANAS),
    gender: finite ? undefined : find(LINGAS),
    person,
    finite,
    indeclinable: tags.has('अव्यय') && !find(VIBHAKTIS) && !finite
  };
}

export type Verdict = { agree: boolean | null; said: string; differences: [string, string, string][] };

const NAME: Record<string, string> = { case: 'case', number: 'number', gender: 'gender', person: 'person' };

/** Compare two words' endings, and say what they share and where they part. */
export function compare(a: Features, b: Features): Verdict {
  if (a.indeclinable || b.indeclinable) {
    return { agree: null, said: 'An indeclinable has no ending to agree with.', differences: [] };
  }
  if (a.finite && b.finite) {
    return { agree: null, said: 'Two verbs: each agrees with its own subject, not with the other.', differences: [] };
  }
  // a verb and a nominal: a subject of an active verb is in the प्रथमा and
  // shares its number; a noun is third person unless it is अहम् or त्वम्
  if (a.finite || b.finite) {
    const v = a.finite ? a : b, n = a.finite ? b : a;
    const diffs: [string, string, string][] = [];
    if (n.case && n.case !== 'प्रथमा') diffs.push(['case', n.case, 'प्रथमा']);
    if (n.number && v.number && n.number !== v.number) diffs.push(['number', n.number, v.number]);
    const np = n.person ?? 'प्रथमपुरुष';
    if (v.person && np !== v.person) diffs.push(['person', np, v.person]);
    if (!n.case && !n.number) return { agree: null, said: 'Not enough is known of these two to compare them.', differences: [] };
    return diffs.length
      ? { agree: false, said: 'This word cannot be the subject of that verb:', differences: diffs }
      : { agree: true, said: 'A प्रथमा in the verb’s number and person: it can be its subject.', differences: [] };
  }
  // two nominals: case, number and gender, where both have them
  const shared: string[] = [];
  const diffs: [string, string, string][] = [];
  for (const k of ['case', 'number', 'gender'] as const) {
    const x = a[k], y = b[k];
    if (!x || !y) continue;
    if (x === y) shared.push(x);
    else diffs.push([NAME[k], x, y]);
  }
  if (!shared.length && !diffs.length) return { agree: null, said: 'Not enough is known of these two to compare them.', differences: [] };
  return diffs.length
    ? { agree: false, said: 'They do not agree:', differences: diffs }
    : { agree: true, said: `They agree: ${shared.join(' · ')}.`, differences: [] };
}
