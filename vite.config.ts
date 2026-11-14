import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { loadEnv, type Plugin } from "vite";
import { defineConfig } from "vitest/config";

const pkg = JSON.parse(
  readFileSync(
    fileURLToPath(new URL("./package.json", import.meta.url)),
    "utf-8",
  ),
) as { version: string };

const DEFAULT_API_BASE_URL = "https://super-davidyero-backend.onrender.com/api";

/**
 * La CSP de customHttp.yml escribe a mano el host de la API en `connect-src`. Si un
 * build define otro VITE_API_BASE_URL, el navegador bloquearía todas las llamadas y
 * solo se vería en producción. Este plugin hace fallar el build antes.
 */
const cspApiHostGuard = (mode: string): Plugin => ({
  name: "csp-api-host-guard",
  apply: "build",
  buildStart() {
    const base =
      loadEnv(mode, process.cwd(), "VITE_").VITE_API_BASE_URL ||
      DEFAULT_API_BASE_URL;
    const origin = new URL(base).origin;
    const yml = readFileSync(
      fileURLToPath(new URL("./customHttp.yml", import.meta.url)),
      "utf-8",
    );
    const connectSrc =
      /connect-src ([^;]+);/.exec(yml)?.[1]?.split(/\s+/) ?? [];
    if (!connectSrc.includes(origin)) {
      this.error(
        `VITE_API_BASE_URL (${origin}) no está en el connect-src de customHttp.yml: la CSP bloquearía la API. Añádelo allí.`,
      );
    }
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [react(), cspApiHostGuard(mode)],
  // La versión sale de package.json (antes la inyectaba el script de CRA).
  define: {
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(pkg.version),
  },
  server: { port: 3000 },
  preview: { port: 4173 },
  // amplify.yml publica `build/`, como hacía CRA.
  build: { outDir: "build" },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    css: false,
  },
}));
