import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    testTimeout: 100000,
    setupFiles: [
      './test/vitest-setup.ts',
    ],
  },
})
