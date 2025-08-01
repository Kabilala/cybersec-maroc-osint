import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/cybersecurite-maroc-osint/", // Nom de votre repository
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
