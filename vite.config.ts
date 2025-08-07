/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'images/*.png'],
      manifest: {
        name: 'Luis Miguel Lopes - Portfolio',
        short_name: 'LML Portfolio',
        description: 'Portfolio and resume of Luis Miguel Lopes - Full Stack Developer & Data Analyst Coordinator',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          },
          {
            src: '/images/luismiguelopes.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/luismiguelopes.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
         globPatterns: ['**/*.{js,css,html,ico,svg}'],
         maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
         runtimeCaching: [
           {
             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
             handler: 'CacheFirst',
             options: {
               cacheName: 'google-fonts-cache',
               expiration: {
                 maxEntries: 10,
                 maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
               }
             }
           },
           {
             urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
             handler: 'CacheFirst',
             options: {
               cacheName: 'images-cache',
               expiration: {
                 maxEntries: 50,
                 maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
               }
             }
           }
         ]
       }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
