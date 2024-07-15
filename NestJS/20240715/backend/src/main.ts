import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger의 설정을 포함해서 문서를 세팅
  const config = new DocumentBuilder().setTitle("이건 제목").setDescription("이건 설명").addTag("유저").build();

  // 문서의 형태로 생성
  const document = SwaggerModule.createDocument(app, config);
  // api 요청이 들어오면 document 문서를 보여주겠다
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
