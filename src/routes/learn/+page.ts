import { redirect } from '@sveltejs/kit';

/*
  /learn was a second index over the same material the workbook door now holds.
  The guided path it also listed lives in Reference as ?mode=path.
*/
export function load({ url }) {
  redirect(308, `/workbook${url.search}`);
}
