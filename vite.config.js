import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  base: '/LMSdashboard/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },

  server: {
    host: '0.0.0.0', // Allows access from the local network
    port: 5173,      // Default port
    allowedHosts: ['pd53yj-5173.csb.app']
  },

  build: {
    rollupOptions: {
      input: {
        // Externalize dependencies that should not be bundled
        main: 'src/main.jsx',
        // Add other entry points if needed
      },
      external: ['react-chartjs-2'],
    },
  },
})