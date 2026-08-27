#!/usr/bin/env bun
/**
 * check-session.ts — attribution and branch names, for both sign-in providers.
 *
 * The OAuth round trip needs live credentials and cannot be exercised here, but
 * the parts that can go wrong quietly do not need them. Two things matter:
 *
 *   CREDIT. `@name` is a GitHub mention that resolves to a person. Writing a
 *   Google display name the same way either mentions a stranger who happens to
 *   hold that handle or mentions nobody, in a public pull request.
 *
 *   BRANCH NAMES. A GitHub login is already a valid ref fragment. A Google
 *   display name is arbitrary text — "Śrīnivāsa Rāmānujan", "a/b", ".." — and
 *   git rejects a ref containing a space or `~ ^ : ? * [ \`, so the failure
 *   would surface as an opaque GitHub API error at branch creation.
 *
 * And one thing must never happen: an email in the session. Neither provider is
 * asked for one, and a suggestion becomes a public pull request.
 */
import { credit, branchSlug, readSession, type SessionUser } from '../src/lib/server/session';

const gh = (login: string): SessionUser => ({
  provider: 'github', login, name: login, avatar_url: ''
});
const goog = (name: string): SessionUser => ({
  provider: 'google', login: name, name, avatar_url: ''
});

let bad = 0;
const check = (label: string, got: unknown, want: unknown) => {
  if (got !== want) {
    bad++;
    console.error(`  ${label}\n      want: ${JSON.stringify(want)}\n      got:  ${JSON.stringify(got)}`);
  }
};

// ── credit ────────────────────────────────────────────────────────────────
check('a GitHub login is an @mention', credit(gh('skmnktl')), '@skmnktl');
check('a Google name is not', credit(goog('Śrīnivāsa Rāmānujan')), 'Śrīnivāsa Rāmānujan (via Google)');
check(
  'a Google name that looks like a handle is still not mentioned',
  credit(goog('torvalds')),
  'torvalds (via Google)'
);

// ── branch slugs ──────────────────────────────────────────────────────────
check('a login passes through', branchSlug(gh('skmnktl')), 'skmnktl');
check('diacritics reduce to base letters', branchSlug(goog('Śrīnivāsa Rāmānujan')), 'srinivasa-ramanujan');
check('spaces become dashes', branchSlug(goog('Ada Lovelace')), 'ada-lovelace');
check('slashes cannot survive', branchSlug(goog('a/b')), 'a-b');
check('dot-dot cannot survive', branchSlug(goog('..')), 'reader');
check('git metacharacters cannot survive', branchSlug(goog('x~y^z:w?v*u[t')), 'x-y-z-w-v-u-t');
check('a name in another script does not vanish silently', branchSlug(goog('रामानुजन्')), 'reader');
check('an empty name falls back', branchSlug(goog('   ')), 'reader');
check('long names are bounded', branchSlug(goog('a'.repeat(80))).length <= 24, true);

// nothing a slug produces may be rejected by git-check-ref-format
for (const name of ['Śrīnivāsa Rāmānujan', 'a/b', '..', 'x~y^z:w?v*u[t', 'रामानुजन्', '   ', 'Ada Lovelace']) {
  const slug = branchSlug(goog(name));
  const ok = /^[A-Za-z0-9-]+$/.test(slug) && !slug.includes('..') && !slug.endsWith('.lock');
  check(`slug for ${JSON.stringify(name)} is a legal ref fragment (${slug})`, ok, true);
}

// ── sessions ──────────────────────────────────────────────────────────────
const jar = (v: Record<string, string>) => ({
  get: (n: string) => v[n],
  set: () => {},
  delete: () => {}
});
check('no cookie, no user', readSession(jar({})), null);
check(
  'a legacy gh_user cookie still signs you in',
  readSession(jar({ gh_user: JSON.stringify({ login: 'skmnktl', avatar_url: 'x' }) }))?.provider,
  'github'
);
check(
  'and the new cookie wins over it',
  readSession(
    jar({
      gh_user: JSON.stringify({ login: 'old' }),
      anuvrtti_user: JSON.stringify({ provider: 'google', login: 'New', name: 'New' })
    })
  )?.name,
  'New'
);
check('malformed json is not a session', readSession(jar({ anuvrtti_user: '{oops' })), null);
check('a cookie with no login is not a session', readSession(jar({ anuvrtti_user: '{"name":"x"}' })), null);

// ── no email, ever ────────────────────────────────────────────────────────
const SRC = ['src/lib/server/session.ts', 'src/routes/auth/google/+server.ts',
             'src/routes/auth/google/callback/+server.ts', 'src/routes/auth/callback/+server.ts'];
for (const f of SRC) {
  const body = await Bun.file(f).text();
  /*
    Read the SCOPE, not the prose. Both files explain in comments why email and
    openid are omitted, and a naive search for those words flags the very
    sentences that promise they are absent — which is how a check ends up
    failing on its own documentation. Match the scope value and field access.
  */
  const scopes = [...body.matchAll(/scope:\s*'([^']*)'/g)].map((m) => m[1]);
  const scopeAsks = scopes.some((sc) => /\bemail\b|\bopenid\b/.test(sc));
  check(`${f} requests no email scope (${scopes.join(', ') || 'none'})`, scopeAsks, false);
  const stores = /\.email\b|['"]email['"]\s*:/.test(body.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''));
  check(`${f} stores no email field`, stores, false);
}

if (bad) {
  console.error(`\n${bad} session check(s) failed`);
  process.exit(1);
}
console.log('session: credit, branch slugs and cookie handling correct for both providers; no email requested or stored');
