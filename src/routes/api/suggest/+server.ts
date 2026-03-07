import { json, error } from '@sveltejs/kit';

// Public repo — not a secret
const GITHUB_REPO = 'udapaana/anuvrtti';

interface PendingEdit {
  sutraId: string;
  numericId: string;
  simple?: string;
  standard?: string;
}

interface SuggestRequest {
  edits: Record<string, PendingEdit>;
  note: string;
}

const COMMENTARY_PATH = 'static/data/layered_commentary.json';
const API = 'https://api.github.com';

async function ghFetch(path: string, token: string, options: RequestInit = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API ${path} → ${res.status}: ${body}`);
  }
  return res.json();
}

export async function POST({ request, cookies }) {
  const token = cookies.get('gh_token');
  if (!token) error(401, 'Not authenticated');

  const { edits, note }: SuggestRequest = await request.json();
  if (!edits || Object.keys(edits).length === 0) error(400, 'No edits provided');

  // Get authenticated user
  const ghUser = await ghFetch('/user', token);
  const username: string = ghUser.login;

  // Get current main branch SHA
  const mainRef = await ghFetch(`/repos/${GITHUB_REPO}/git/ref/heads/main`, token);
  const mainSha: string = mainRef.object.sha;

  // Get commentary file (content + sha for update)
  const fileInfo = await ghFetch(
    `/repos/${GITHUB_REPO}/contents/${COMMENTARY_PATH}`,
    token
  );
  const fileSha: string = fileInfo.sha;
  const commentary = JSON.parse(Buffer.from(fileInfo.content, 'base64').toString('utf-8'));

  // Apply all edits
  const editedIds: string[] = [];
  for (const edit of Object.values(edits)) {
    const entry = commentary[edit.numericId];
    if (!entry) continue;
    if (edit.simple !== undefined) entry.en.simple = edit.simple;
    if (edit.standard !== undefined) entry.en.standard = edit.standard;
    editedIds.push(edit.sutraId);
  }

  if (editedIds.length === 0) error(400, 'No valid sūtra IDs found in edits');

  // Create branch
  const shortHash = Math.random().toString(36).slice(2, 7);
  const date = new Date().toISOString().slice(0, 10);
  const branch = `edit/${date}-${username}-${shortHash}`;

  await ghFetch(`/repos/${GITHUB_REPO}/git/refs`, token, {
    method: 'POST',
    body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: mainSha }),
  });

  // Commit updated file to new branch
  const updatedContent = Buffer.from(
    JSON.stringify(commentary, null, 2),
    'utf-8'
  ).toString('base64');

  const commitMessage = `Commentary edit: ${editedIds.join(', ')} — ${username}${note ? `\n\n${note}` : ''}`;

  await ghFetch(`/repos/${GITHUB_REPO}/contents/${COMMENTARY_PATH}`, token, {
    method: 'PUT',
    body: JSON.stringify({
      message: commitMessage,
      content: updatedContent,
      sha: fileSha,
      branch,
    }),
  });

  // Open PR
  const sutraList = editedIds.length <= 3
    ? editedIds.join(', ')
    : `${editedIds.slice(0, 3).join(', ')} +${editedIds.length - 3} more`;

  const prBody = [
    `**Contributor:** @${username}`,
    `**Sūtras edited:** ${editedIds.join(', ')}`,
    note ? `\n**Note from contributor:**\n${note}` : '',
    '\n---\n*Submitted via anuvrtti.vercel.app*',
  ].filter(Boolean).join('\n');

  const pr = await ghFetch(`/repos/${GITHUB_REPO}/pulls`, token, {
    method: 'POST',
    body: JSON.stringify({
      title: `Commentary edit: ${sutraList} — ${username}`,
      body: prBody,
      head: branch,
      base: 'main',
    }),
  });

  return json({ prUrl: pr.html_url });
}
