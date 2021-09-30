import {defineConfig} from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  root: path.resolve(process.cwd(), 'src/'),
  publicDir: path.join(__dirname, 'public'),
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/index.html')
      }
    },
  }
})