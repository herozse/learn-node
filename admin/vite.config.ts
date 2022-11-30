import { defineConfig, loadEnv } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(config => {
  const { command, mode } = config;
  const root = process.cwd();

  const env = loadEnv(mode, root);
  return {
    base: "/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "*": path.resolve(""),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".d.ts"],
    },
  };
});
