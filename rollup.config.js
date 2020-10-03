import { createRollupConfigs } from './scripts/base.config.js'
import autoPreprocess from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: (rollup) => rollup,
  svelteWrapper: (svelte) => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: { configFilePath: './postcss.config.js' },
        defaults: { style: 'postcss' },
      }),
    ]
  },
  swWrapper: (worker) => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
