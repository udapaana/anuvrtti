import { redirect, error } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';

export async function GET({ url, cookies }) {
  const code = url.searchParams.get('code');
  const returnTo = url.searchParams.get('state') || '/';

  if (!code) error(400, 'Missing OAuth code');

  // Exchange code for access token (read:user scope only — no write access)
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) error(400, 'GitHub OAuth failed');

  // Fetch basic user info (login + avatar only)
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      Accept: 'application/vnd.github+json',
    },
  });

  const user = await userRes.json();
  if (!user.login) error(400, 'Failed to fetch GitHub user');

  // Store only identity — no token cookie (user has no write access anyway)
  cookies.set('gh_user', JSON.stringify({ login: user.login, avatar_url: user.avatar_url }), {
    path: '/',
    httpOnly: false,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 8,
  });

  redirect(302, returnTo);
}
