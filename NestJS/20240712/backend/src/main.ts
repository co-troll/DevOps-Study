import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, "../views"));
  app.setViewEngine("ejs");
  app.enableCors({
    credentials: true
  })
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
