#!/usr/bin/env bun
/**
 * kill-dev.ts — stop this checkout's running dev/preview server before
 * `bun run dev` starts a new one.
 *
 * A second `vite dev` does not replace the first: it quietly moves to 5174,
 * and the browser tab on 5173 keeps showing the old build. This stops, first,
 * every vite process started from THIS checkout (matched on its own path, so
 * another project's server — or a git worktree's — is left alone), then
 * anything vite still holding the dev port.
 *
 *   bun scripts/kill-dev.ts          (runs first in `bun run dev`)
 */
import { execSync } from 'child_process';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dir, '..');
const PORT = 5173; // vite.config.ts server.port
const sh = (cmd: string) => { try { return execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] }).toString(); } catch { return ''; } };

const pids = new Set<number>();

// 1. vite started from this checkout: node <ROOT>/node_modules/.bin/vite dev|preview
for (const line of sh('ps -axo pid=,command=').split('\n')) {
  const m = line.trim().match(/^(\d+)\s+(.*)$/);
  if (!m) continue;
  const [, pid, cmd] = m;
  if (Number(pid) === process.pid) continue;
  if (cmd.includes(path.join(ROOT, 'node_modules')) && /\bvite\b/.test(cmd) && /\b(dev|preview)\b|vite(\.js)?\s*$/.test(cmd)) pids.add(Number(pid));
}

// 2. whatever holds the dev port, if it is a vite/node process
for (const pid of sh(`lsof -ti tcp:${PORT} -sTCP:LISTEN`).split(/\s+/).filter(Boolean).map(Number)) {
  const cmd = sh(`ps -o command= -p ${pid}`);
  if (/\bvite\b|node/.test(cmd)) pids.add(pid);
}

if (!pids.size) process.exit(0);
for (const pid of pids) { try { process.kill(pid, 'SIGTERM'); } catch { /* already gone */ } }
// give them a moment to release the port, then make sure
await Bun.sleep(600);
for (const pid of pids) { try { process.kill(pid, 0); process.kill(pid, 'SIGKILL'); } catch { /* exited */ } }
console.log(`stopped the running dev server (pid ${[...pids].join(', ')})`);
