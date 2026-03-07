import { redirect } from '@sveltejs/kit';

export function POST({ cookies, url }) {
  cookies.delete('gh_user', { path: '/' });
  const returnTo = url.searchParams.get('returnTo') || '/';
  redirect(302, returnTo);
}
