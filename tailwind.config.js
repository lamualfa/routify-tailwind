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
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) => {
        const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);
        const matchedTokens = [];
        let match = regExp.exec(content);
        while (match) {
          if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6));
          } else {
            matchedTokens.push(match[0]);
          }
          match = regExp.exec(content);
        }
        return matchedTokens;
      },
    },
  },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
