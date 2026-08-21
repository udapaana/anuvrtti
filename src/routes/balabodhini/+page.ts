import { redirect } from '@sveltejs/kit';

/*
  बालबोधिनी is the workbook door now, not a route of its own. Old links keep
  working — including the ?vol= volume split, which is unchanged.
*/
export function load({ url }) {
  redirect(308, `/workbook${url.search}`);
}
