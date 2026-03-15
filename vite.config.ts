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
      execFileSync("npx", ["tsx", scriptPath], { stdio: "inherit" });
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
  },
  optimizeDeps: {
    exclude: ["shlesha"],
  },
  build: {
    target: "esnext",
  },
});
