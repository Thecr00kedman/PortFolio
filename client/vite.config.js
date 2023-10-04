import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"], // Add this line to include .JPG files as assets
  server: {
    host: '0.0.0.0', // Bind to all available network interfaces
    port: 5173, // or any port you prefer
  },
})
