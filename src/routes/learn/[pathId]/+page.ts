import { redirect } from '@sveltejs/kit';

/*
  Step URLs moved to /workbook/[lessonId], which serves both a path's steps and
  a primer lesson — one step, one screen, whichever it came from. `?step=` is
  carried through so a bookmarked step still lands on that step.
*/
export function load({ params, url }) {
  redirect(308, `/workbook/${params.pathId}${url.search}`);
}
