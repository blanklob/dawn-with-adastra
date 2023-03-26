import { defineConfig } from 'vite'
import adastra from 'adastra-plugin'

export default defineConfig({
  plugins: [adastra()],
  build: {
    emptyOutDir: false
  }
})
