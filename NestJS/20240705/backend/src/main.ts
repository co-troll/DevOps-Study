import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 모든 도메인 허용
  // app.enableCors({
  //   origin: "http://domain.com", // 허용할 도메인
  //   methods: "GET, POST, PUT, DELETE", // 허용할 메서드
  //   credentials: true // 쿠키 요청 응답간에 전달을 허용할건지?
  // })
  await app.listen(3000);
}
bootstrap();
