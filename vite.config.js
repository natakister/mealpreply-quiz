import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/quiz-funnel/',
  server: {
    port: 3000,
    open: true,
    // Enable SPA fallback for client-side routing
    historyApiFallback: true
  },
  // Ensure all routes serve index.html for SPA
  appType: 'spa'
})
