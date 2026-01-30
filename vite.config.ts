import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      // JPEG/JPG optimization
      jpg: {
        quality: 80, // 80% quality - good balance
      },
      // PNG optimization
      png: {
        quality: 80,
      },
      // WebP optimization
      webp: {
        quality: 80,
        lossless: false,
      },
      // Cache optimized images
      cache: true,
      // Log optimization results
      logStats: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
