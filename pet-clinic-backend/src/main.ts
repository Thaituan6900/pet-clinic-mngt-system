import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, NestApplicationOptions, ValidationPipe } from '@nestjs/common';

export let viteNodeApp;

export async function createApp(
  options?: NestApplicationOptions,
): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, options);
  app.enableCors();
  console.log("🚀 Server ready at: http://localhost:3000");
  return app;
}


async function main() {
  const app = await createApp();
  await app.listen(3000, () => {})
}


if (process.env.NODE_ENV === 'vite') {
  viteNodeApp = createApp();
}
else {
  void main();
}
