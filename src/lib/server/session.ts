/**
 * Who is signed in, and what we are willing to know about them.
 *
 * The session used to be a GitHub login in a cookie called `gh_user`, because
 * GitHub was the only way in. Requiring a GitHub account to fix a wrong विभक्ति
 * is a high bar for a Sanskrit reader, and it never had to be one: identity here
 * is used ONLY for attribution. The pull request is opened by a service account
 * (`GITHUB_APP_TOKEN`), the contributor is never granted repository access, and
 * the OAuth scopes ask for identity alone. So a second provider costs almost
 * nothing, and this is the shape both fill.
 *
 * WHAT WE DELIBERATELY DO NOT STORE: an email address. GitHub's `read:user` and
 * Google's `profile` both stop short of it, and neither provider is asked for
 * more. A suggestion becomes a public pull request, so an email in the session
 * is an email one careless template away from being published. A display name
 * and a picture are enough to say who suggested a correction.
 */
export type Provider = 'github' | 'google';

export interface SessionUser {
  provider: Provider;
  /**
   * How to credit them in a pull request. For GitHub this is the login, so it
   * can be an @mention that actually resolves; for Google it is the display
   * name, which cannot be mentioned and must not be written as though it could.
   */
  login: string;
  /** What to show in the UI — the same as `login` for GitHub. */
  name: string;
  avatar_url: string;
}

export const SESSION_COOKIE = 'anuvrtti_user';
/** The GitHub-only cookie this replaced. Read for a transition, never written. */
const LEGACY_COOKIE = 'gh_user';

/** Eight hours: long enough to finish reading, short enough not to linger. */
const MAX_AGE = 60 * 60 * 8;

type CookieJar = {
  get(name: string): string | undefined;
  set(name: string, value: string, opts: Record<string, unknown>): void;
  delete(name: string, opts: Record<string, unknown>): void;
};

export function readSession(cookies: CookieJar): SessionUser | null {
  const raw = cookies.get(SESSION_COOKIE) ?? cookies.get(LEGACY_COOKIE);
  if (!raw) return null;
  try {
    const u = JSON.parse(raw) as Partial<SessionUser>;
    if (!u.login) return null;
    // A legacy cookie has no provider — it can only have been GitHub.
    return {
      provider: u.provider === 'google' ? 'google' : 'github',
      login: u.login,
      name: u.name ?? u.login,
      avatar_url: u.avatar_url ?? ''
    };
  } catch {
    return null;
  }
}

export function writeSession(cookies: CookieJar, user: SessionUser, hostname: string): void {
  cookies.set(SESSION_COOKIE, JSON.stringify(user), {
    path: '/',
    httpOnly: false,
    secure: hostname !== 'localhost' && hostname !== '127.0.0.1',
    sameSite: 'lax',
    maxAge: MAX_AGE
  });
}

export function clearSession(cookies: CookieJar): void {
  cookies.delete(SESSION_COOKIE, { path: '/' });
  cookies.delete(LEGACY_COOKIE, { path: '/' });
}

/**
 * How a contributor is credited in the pull request body.
 *
 * `@name` is a GitHub mention and resolves to a person. A Google display name
 * written the same way would either mention a stranger who happens to hold that
 * handle, or mention nobody — so it is credited as plain text and the provider
 * is named, which is also what tells a maintainer they cannot reply with an
 * @mention.
 */
export function credit(user: SessionUser): string {
  return user.provider === 'github' ? `@${user.login}` : `${user.name} (via Google)`;
}

/**
 * A git branch name fragment.
 *
 * A GitHub login is already safe. A Google display name is arbitrary text —
 * "Śrīnivāsa Rāmānujan", "a/b", "..", a right-to-left mark — and git refuses
 * refs containing a space, `~ ^ : ? * [ \`, `..`, or a trailing `.lock`
 * (git-check-ref-format). Reduce to ASCII alphanumerics and dashes, and fall
 * back to a fixed word rather than an empty segment, since a name in a script
 * git will not take can legitimately reduce to nothing.
 */
export function branchSlug(user: SessionUser): string {
  const slug = user.login
    .normalize('NFKD')
    // NFKD splits Ś into S + a combining acute. Letting the generic rule below
    // turn that mark into a dash gave "s-ri-niva-sa-ra-ma-nujan" for
    // "Śrīnivāsa Rāmānujan" — a dash per diacritic. Drop the marks first, so
    // the decomposition does what it was for: reduce to the base letters.
    .replace(/\p{M}+/gu, '')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 24)
    .toLowerCase();
  return slug || 'reader';
}
