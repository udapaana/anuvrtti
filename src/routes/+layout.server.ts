export function load({ cookies }) {
  const raw = cookies.get('gh_user');
  if (!raw) return { user: null };

  try {
    const user = JSON.parse(raw) as { login: string; avatar_url: string };
    return { user };
  } catch {
    return { user: null };
  }
}
