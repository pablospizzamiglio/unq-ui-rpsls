import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: "/unq-ui-rpsls/",
  plugins: [react(), jsconfigPaths()],
  server: {
    host: true,
  },
});
