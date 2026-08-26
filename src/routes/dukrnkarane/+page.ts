import { redirect } from '@sveltejs/kit';

/*
  डुकृञ्करणे was the working name for Kāle's *A Higher Sanskrit Grammar*, and it
  named the route while the grammar was one tool among several. It is now its
  own door, under the plain word for what it is. The query survives the move —
  ?s=488 is how every sūtra page links into a rule, and how the app's own
  cross-references address one.
*/
export function load({ url }) {
  redirect(308, `/grammar${url.search}`);
}
