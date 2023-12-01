import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  splitting: false,
  minify: 'terser',
  clean: true,
  target: 'es6',
  dts: true,
  sourcemap: false,
  format: ['esm', 'cjs', 'iife'],
})
