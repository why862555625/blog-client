import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { join } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
  publicDir: "./public",
  server: {
    open: true,
    port:9001
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#4377FE", //设置antd主题色
        },
      },
    },
  },
});
