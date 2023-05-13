import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@styles",
        replacement: path.resolve(__dirname, "src/assets/styles"),
      },
      {
        find: "@fonts",
        replacement: path.resolve(__dirname, "src/assets/fonts"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
      {
        find: "@views",
        replacement: path.resolve(__dirname, "src/views"),
      },
      {
        find: "@types",
        replacement: path.resolve(__dirname, "src/shared/interfaces"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/shared/services"),
      },
    ],
  },
})
