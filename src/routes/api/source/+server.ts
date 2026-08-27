import { json, error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { validatePath } from '../suggest/paths';

/**
 * Read an authored file, so the editor can show what it is about to change.
 *
 * The editor used to fetch its file over plain HTTP —
 * `path.replace(/^static\//, '/')` — which works only because everything it
 * could edit happened to live under `static/` and be served as an asset. The
 * readings do not: `content/readings/…` is source, deliberately outside the
 * served tree, so the ✎ in the reader opened an editor that could never load
 * the file it was pointed at.
 *
 * Reading from disk is not an option either. On Cloudflare Pages the function
 * has no filesystem — there is no repository to open, only the assets that were
 * uploaded. So the editor reads the same way it writes: through the GitHub API,
 * with the service token, against `main`. That is also the more correct answer,
 * because it is the branch the suggestion will be based on, so what the
 * contributor edits is what the pull request will diff against.
 *
 * The path is checked by the SAME allowlist that guards writes. A read endpoint
 * with a looser rule than its write endpoint is a file-disclosure bug: this one
 * would happily have returned `.env` or any source file in the repository.
 */
const GITHUB_REPO = 'udapaana/anuvrtti';

export async function GET({ url }) {
  const path = url.searchParams.get('path');
  if (!path) error(400, 'Missing path');

  const pathErr = validatePath(path);
  if (pathErr) error(400, pathErr);

  const res = await fetch(
    `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}?ref=main`,
    {
      headers: {
        Authorization: `Bearer ${env.GITHUB_APP_TOKEN}`,
        Accept: 'application/vnd.github.raw+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  );

  // A file that does not exist yet is not an error — the editor treats empty
  // content as "you are creating this", which is how a new path is authored.
  if (res.status === 404) return json({ path, content: '', exists: false });
  if (!res.ok) error(502, `Could not read ${path} (${res.status})`);

  return json({ path, content: await res.text(), exists: true });
}
