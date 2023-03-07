import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
//install adapters from https://kit.svelte.dev/docs/adapters
/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter()
  },
  preprocess:[
    preprocess({
      postcss: true})
  ]
};

export default config;