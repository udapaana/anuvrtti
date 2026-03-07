import { redirect } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID } from '$env/static/private';

export function GET({ url }) {
  // Store the page the user was on so we can redirect back after auth
  const returnTo = url.searchParams.get('returnTo') || '/';

  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'public_repo',
    state: returnTo,
  });

  redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
