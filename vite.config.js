import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "/src/client/main.js",
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
