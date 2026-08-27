import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/**
 * Sign in with Google — identity only.
 *
 * `scope: 'profile'` and nothing else. Not `email`: a suggestion becomes a
 * public pull request, and an address we never collect is one that cannot be
 * published by accident. A display name and a picture are all the attribution
 * needs. `openid` is omitted for the same reason — it returns an id_token whose
 * claims include the email when the account has one.
 *
 * Configured with GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET. Absent, the route
 * says so plainly instead of bouncing the reader to a Google error page.
 */
export function GET({ url }) {
  const returnTo = url.searchParams.get('returnTo') || '/';

  if (!env.GOOGLE_CLIENT_ID) {
    redirect(302, '/auth?error=google-unconfigured&returnTo=' + encodeURIComponent(returnTo));
  }

  const params = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    redirect_uri: `${url.origin}/auth/google/callback`,
    response_type: 'code',
    scope: 'profile',
    state: returnTo,
    // A reader signing in to fix one tag should not be silently reauthenticated
    // as whichever account Google last saw; let them choose.
    prompt: 'select_account'
  });

  redirect(302, `https://accounts.google.com/o/oauth2/v2/auth?${params}`);
}
