import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
  return {
    root: './',
    server: {
      port: 3000,
      proxy: { // Proxying websockets or socket.io: ws://localhost:3000/graphql
        '/graphql': {
          target: 'ws://localhost:3000/graphql',
          ws: true,
          secure: false
        },
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    build: {
      target: 'es2022',
      outDir: './dist/backend',
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    test: {
      root: './',
      globals: true,
      testTimeout: 600000,
      passWithNoTests: true,
      include: ['**/*.e2e-test.ts', '**/*.spec.ts'],
      setupFiles: [resolve(__dirname, './test/common/vitest-setup.ts')],
      environment: 'node',
    },
    esbuild: false,
    // ssr: { format: 'cjs' },
    optimizeDeps: {
      // Vite does not work well with optionnal dependencies,
      // you can mark them as ignored for now
      // eg: for nestjs, exlude these optional dependencies:
      exclude: [
        '@nestjs/platform-express',
        '@nestjs/microservices',
        '@nestjs/websockets',
        'cache-manager',
        // 'class-transformer',
        // 'class-validator',
        'fastify-swagger',
        '@nestjs/platform-socket.io',
        '@nestjs/websockets',
        'amqp-connection-manager',
        'amqplib',
        'nats',
        '@grpc/proto-loader',
        '@grpc/grpc-js',
        '@apollo',
        'redis',
        'ts-morph',
        'kafkajs',
        'mock-aws-s3',
        // GraphQL dependencies.
        '@apollo/subgraph',
        'ts-morph',
        'apollo-server-express',
        '@apollo/gateway',
        'fsevents',
        'point-of-view',
        'aws-sdk',
        'nock',
        'mqtt',
      ]
    },
    resolve: {
      alias: {
        '@libs': resolve(__dirname, '../..', 'libs'),
        '@apps': resolve(__dirname, '../..', 'apps')
      }
    },
    plugins: [
      tsconfigPaths({
        projects: [
          resolve('./tsconfig.json'),
        ],
      }),
      viteCommonjs(),
      ...VitePluginNode({
        adapter: 'nest',
        appPath: './src/main.ts',
        exportName: 'viteNodeApp',
        tsCompiler: 'swc'
      })
    ]
  }
});
