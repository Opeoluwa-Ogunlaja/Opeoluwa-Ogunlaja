import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    minify: 'terser',
    terserOptions: {
      terserOptions: {
        compress: {
          drop_console: true, // Remove console statements in production
          drop_debugger: true, // Remove debugger statements
          passes: 2, // Multiple compression passes for better optimization
          pure_funcs: ['console.info', 'console.debug'] // Remove specific function calls
        },
        mangle: {
          toplevel: true, // Mangle top-level variable/function names
          properties: {
            regex: /^_/ // Mangle object properties starting with an underscore
          }
        },
        format: {
          comments: false // Remove comments
        }
      }
    }
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src') // Alias for cleaner imports
    }
  }
})
