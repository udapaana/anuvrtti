import { readSession } from '$lib/server/session';

export function load({ cookies }) {
  return { user: readSession(cookies) };
}
