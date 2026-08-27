import { clearSession } from '$lib/server/session';
import { redirect } from '@sveltejs/kit';

export function POST({ cookies, url }) {
  clearSession(cookies);
  const returnTo = url.searchParams.get('returnTo') || '/';
  redirect(302, returnTo);
}
