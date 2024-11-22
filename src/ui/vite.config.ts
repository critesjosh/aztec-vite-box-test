import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // commenting out the line below causes teh build to fail because imports cannot be resolved
      // including the line belfow causes the build to fail with a JS OOM error
      // external: ['fs', 'vite-plugin-node-polyfills/shims/buffer', 'vite-plugin-node-polyfills/shims/process']
    },
  },
  plugins: [
    react(),
    nodePolyfills({
      exclude: ["fs"]
    }),
    topLevelAwait()]
})
