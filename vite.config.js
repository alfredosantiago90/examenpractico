import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://alfredosantiago90.github.io/examen-practico/",
  plugins: [react(), eslint()],
});
