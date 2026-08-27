import { redirect, error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { writeSession } from '$lib/server/session';

/**
 * Google's half of the handshake.
 *
 * The token is used once, here, to read the profile, and is never stored — the
 * contributor has no access to anything of ours, and we want none to theirs.
 * What survives the request is a name and a picture in a cookie.
 */
export async function GET({ url, cookies }) {
  const code = url.searchParams.get('code');
  const returnTo = url.searchParams.get('state') || '/';

  // The reader declined at Google's consent screen — not an error, just a no.
  if (url.searchParams.get('error')) redirect(302, returnTo);
  if (!code) error(400, 'Missing OAuth code');
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    error(500, 'Google sign-in is not configured on this deployment');
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: `${url.origin}/auth/google/callback`
    })
  });

  const tokenData = (await tokenRes.json()) as { access_token?: string };
  if (!tokenData.access_token) error(400, 'Google OAuth failed');

  const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });
  const profile = (await userRes.json()) as { id?: string; name?: string; picture?: string };
  if (!profile.id) error(400, 'Failed to fetch Google profile');

  /*
    `name` can be absent, and a Google account may legitimately have no display
    name at all. Falling back to the opaque id keeps attribution honest — an
    anonymous suggestion credited to nobody in particular — rather than
    inventing a name or leaking whatever else the profile happens to carry.
  */
  const name = profile.name?.trim() || `google-${profile.id.slice(-6)}`;

  writeSession(
    cookies,
    { provider: 'google', login: name, name, avatar_url: profile.picture ?? '' },
    url.hostname
  );

  redirect(302, returnTo);
}
