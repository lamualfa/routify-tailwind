const production = !process.env.ROLLUP_WATCH

module.exports = {
  purge: {
    enabled: production,
    whitelistPatterns: [/svelte-/],
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
      './src/**/*.css',
      './index.html',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
