import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@designcodeio/threeui/style.css",
        replacement: fileURLToPath(new URL("./src/shaders/threeui.css", import.meta.url)),
      },
      {
        find: "@designcodeio/threeui",
        replacement: fileURLToPath(new URL("./src/threeui.ts", import.meta.url)),
      },
    ],
  },
});
