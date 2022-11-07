import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "^/api": {
        target: "http://deu21727-acm-db01-dev:8090",
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
