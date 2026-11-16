import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/* A text lives at /reader/text/<id> (saved copies and old links name it);
   /texts/<id> is a shorter way there, ?part= and all. */
export const load: PageLoad = ({ params, url }) => {
  redirect(308, `/reader/text/${params.id}${url.search}`);
};
