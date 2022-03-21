// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          $components: path.resolve("./src/components"),
          $lib: path.resolve("./src/lib"),
          $api: path.resolve("./src/api"),
          $routes: path.resolve("./src/routes"),
          $stores: path.resolve("./src/stores")
      }
	}
}
}

}
export default config;
