import { angular } from '@nitedani/vite-plugin-angular/plugin';
import { resolve } from 'path';
import { ConfigEnv, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }: ConfigEnv): any => {
  return {
    root: 'src',
    server: {
      port: 4200,
      fs: {
        strict: false,
      },
    },
    build: {
      target: 'es2022',
      outDir: './dist',
      assetsDir: 'assets',
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    esbuild: false, // esbuild can not emit ts metadata
    test: {
      root: './',
      globals: true, //allows to use global variables in tests (describe, expect, it)
      environment: 'jsdom', //allows to use window, document, etc. in test
      passWithNoTests: true,
      include: ['**/*.e2e-test.ts', '**/*.spec.ts'],
      setupFiles: [resolve(__dirname, 'src/test-setup.ts')],
    },
    resolve: {
      alias: {
        '@nestjs/graphql': resolve(
          __dirname,
          '../../node_modules/@nestjs/graphql/dist/extra/graphql-model-shim'
        ),
        typeorm: resolve(
          __dirname,
          '../../node_modules/typeorm/typeorm-model-shim'
        ),
        // "@progress": resolve(__dirname, "../../node_modules/@progress"),
        '@libs': resolve(__dirname, '../../', 'libs'),
        '@apps': resolve(__dirname, '../../', 'apps'),
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },

    plugins: [
      angular(),
      // viteCommonjs(),
      tsconfigPaths(),
    ],

    // optimizeDeps: {
    // 	force: true,
    // 	exclude: [
    // 		'@progress/kendo-angular-grid'
    // 	]
    // },
    // optimizeDeps: {
    // 	force: true,
    // 	esbuildOptions: {
    // 		plugins: [
    // 			{
    // 				name: "@progress/kendo-angular-grid",
    // 				setup(build) {
    // 					build.onResolve({
    // 						filter: new RegExp("@progress/kendo-angular-grid")
    // 					}, async () => {
    // 						return {
    // 							path: path.resolve(__dirname, `node_modules/.pnpm/@progress/kendo-angular-grid`)
    // 						};
    // 					});
    // 				}
    // 			},
    // 			esbuildCommonjs(['@progress/kendo-angular-grid']),
    // 		]
    // 	}
    // }
  };
});
