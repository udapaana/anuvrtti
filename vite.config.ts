import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { execFileSync } from "child_process";
import { resolve } from "path";

// Auto-regenerate paths-index.json on startup and when path files change
function pathIndexPlugin() {
  const scriptPath = resolve(process.cwd(), "scripts/build-path-index.ts");
  function rebuild() {
    try {
      execFileSync("bun", [scriptPath], { stdio: "inherit" });
    } catch (e) {
      console.error("[pathIndex] Failed to rebuild paths index:", e);
    }
  }
  return {
    name: "path-index",
    buildStart() {
      rebuild();
    },
    handleHotUpdate({ file }: { file: string }) {
      if (file.includes("static/content/paths") && file.endsWith("path.md")) {
        rebuild();
      }
    },
  };
}

export default defineConfig({
  plugins: [pathIndexPlugin(), tailwindcss(), sveltekit()],
  server: {
    port: 5173,
    strictPort: true,
    // .claude/worktrees holds whole copies of the repo (agents' git worktrees);
    // watching them doubles the work and crashes the server when one is removed
    watch: { ignored: ['**/.claude/**', '**/data/texts/**', '**/data/vidyut/**'] },
  },
  optimizeDeps: {
    exclude: ["shlesha"],
  },
  build: {
    target: "esnext",
  },
});
