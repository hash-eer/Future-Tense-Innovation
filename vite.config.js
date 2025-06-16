// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: true, // Enable HTTPS
//     host: true,
//     port: 3000
//   }
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { readFileSync } from 'fs'
// import { resolve } from 'path'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       // Option 1: Basic HTTPS (will show warning but works)
//       key: undefined,
//       cert: undefined,
//     },
//     host: 'localhost', // Use localhost instead of IP
//     port: 3000,
//     open: true, // Auto-open browser
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // https: true, // Simple HTTPS - no certificate files needed
    host: 'localhost',
    port: 3000,
    open: true,
  },
})