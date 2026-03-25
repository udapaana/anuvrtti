import { json, error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { parse as parseToml } from 'smol-toml';
import { validateMarkupInObject } from '$lib/markup/validate';

const GITHUB_REPO = 'udapaana/anuvrtti';
const API = 'https://api.github.com';

// Only paths under these prefixes may be edited
const ALLOWED_PREFIXES = [
  'static/data/',
  'static/content/',
];

interface FileEdit {
  path: string;    // repo-relative e.g. "static/data/commentary/1/1/1.toml"
  content: string;
  label: string;   // human-readable e.g. "Commentary 1.1.1"
}

interface SuggestRequest {
  files: FileEdit[];
  note: string;
}

async function ghFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.GITHUB_APP_TOKEN}`,
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

function validatePath(path: string): string | null {
  if (!ALLOWED_PREFIXES.some(p => path.startsWith(p))) {
    return `path not allowed: ${path}`;
  }
  if (path.includes('..') || path.includes('//')) {
    return `invalid path: ${path}`;
  }
  if (!/\.(toml|md|json)$/.test(path)) {
    return `unsupported file type: ${path}`;
  }
  return null;
}

function validateContent(path: string, content: string): string | null {
  if (!content.trim()) return `empty content for ${path}`;

  if (path.endsWith('.toml')) {
    try {
      const parsed = parseToml(content) as Record<string, unknown>;
      const result = validateMarkupInObject(parsed);
      if (!result.valid) {
        return `markup errors in ${path}:\n${result.errors.join('\n')}`;
      }
    } catch (e) {
      return `TOML parse error in ${path}: ${e instanceof Error ? e.message : String(e)}`;
    }
  }

  return null;
}

export async function POST({ request, cookies }) {
  const rawUser = cookies.get('gh_user');
  if (!rawUser) error(401, 'Not authenticated');

  let username: string;
  try {
    username = (JSON.parse(rawUser) as { login: string }).login;
  } catch {
    error(401, 'Invalid session');
  }

  const { files, note }: SuggestRequest = await request.json();
  if (!files || files.length === 0) error(400, 'No files provided');

  // Validate all paths and content before touching GitHub
  for (const f of files) {
    const pathErr = validatePath(f.path);
    if (pathErr) error(400, pathErr);
    const contentErr = validateContent(f.path, f.content);
    if (contentErr) error(422, contentErr);
  }

  // Get main branch SHA
  const mainRef = await ghFetch(`/repos/${GITHUB_REPO}/git/ref/heads/main`);
  const mainSha: string = mainRef.object.sha;

  // Create branch
  const shortHash = Math.random().toString(36).slice(2, 7);
  const date = new Date().toISOString().slice(0, 10);
  const branch = `edit/${date}-${username}-${shortHash}`;

  await ghFetch(`/repos/${GITHUB_REPO}/git/refs`, {
    method: 'POST',
    body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: mainSha }),
  });

  // Commit each file to the branch (supports both edits and new files)
  for (const f of files) {
    const encodedContent = Buffer.from(f.content, 'utf-8').toString('base64');

    // Try to get existing file SHA; if 404, this is a new file
    let fileSha: string | undefined;
    try {
      const fileInfo = await ghFetch(
        `/repos/${GITHUB_REPO}/contents/${f.path}?ref=${branch}`
      );
      fileSha = fileInfo.sha;
    } catch (e) {
      // File doesn't exist yet — that's fine for new paths
      if (!(e instanceof Error && e.message.includes('404'))) throw e;
    }

    const commitBody: Record<string, unknown> = {
      message: `${fileSha ? 'Edit' : 'Create'}: ${f.label} — ${username}`,
      content: encodedContent,
      branch,
    };
    if (fileSha) commitBody.sha = fileSha;

    await ghFetch(`/repos/${GITHUB_REPO}/contents/${f.path}`, {
      method: 'PUT',
      body: JSON.stringify(commitBody),
    });
  }

  // Build PR
  const fileList = files.map(f => `- ${f.label} (\`${f.path}\`)`).join('\n');
  const hasNew = files.some(f => f.path.includes('/new-') || f.label.startsWith('New:'));
  const verb = hasNew ? 'Suggest' : 'Edit';
  const titleFiles = files.length === 1
    ? files[0].label
    : `${files.length} files`;

  const prBody = [
    `**Contributor:** @${username}`,
    `\n**Files edited:**\n${fileList}`,
    note ? `\n**Note from contributor:**\n${note}` : '',
    '\n---\n*Submitted via anuvrtti.udapaana.in*',
  ].filter(Boolean).join('\n');

  const pr = await ghFetch(`/repos/${GITHUB_REPO}/pulls`, {
    method: 'POST',
    body: JSON.stringify({
      title: `${verb}: ${titleFiles} — ${username}`,
      body: prBody,
      head: branch,
      base: 'main',
    }),
  });

  return json({ prUrl: pr.html_url });
}
