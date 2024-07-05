# nestjs
> nodejs를 기반으로 만든 서버 어플리케이션을 개발하기 위한 프레임워크

## 프레임워크와 라이브러리의 차이
- 프레임워크 : 폴더 구조가 있는것.
- 라이브러리 : 폴더 구조가 없는것.

## nestjs의 장점
> 효율적이고 확장성이 있는 nodejs로 서버 로직를 만드는데 사용하는 프레임워크
> 자바스크립트 기반으로 타입스크립트를 지원한다.
> nestjs는 express를 어떻게 사용하면 호율적인지 생각해서 만든 프레임워크
> 아키텍처 설계의 문제를 해결하기 위해서 만들어졌다.
> nodejs로 서버로직을 구축할때 서버 아키텍처를 제공해주어 유지보수가 편한 서버를 만들 수 있다.

## 소프트웨어 아키텍처
> 모듈 및 구성요소 시스템의 부분을 정의하는 것을 설계해야하고
> 구성요소간에 상호작용
> MVC같은 디자인 패턴 확장성이 높고 성능이 좋은 효율적인 코드 작성

## express만 사용
> 개개인 마다 개발한 경험에 따라서 보일러플레이트를 만드는데 자유도가 높다.
> 결합도가 높을수 있는 코드를 작성하고 유지보수가 힘들수 있다.

## nestjs 패키지 설치
```sh
# nest 커맨드 사용하기위해서
npm i -g @nestjs/cli

nest --version

nest new [생성할 폴더명]
nest new backend
```

## main.ts
> 루트 파일 우리가 nodejs에서 루트 파일을 만듯 것 처럼 시작파일 
```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

## 빨간줄이 설치받고 떠있다거나?
> vscode 편집기에서 설정값이 맞는지 확인을 하고 에러를 표시

## eslint
> es(ecma script) + link(에러를 표시)
> 설정에 따라 문법에 맞지 않으면 에러를 알려주는것.

## app.service.ts
> 기능 구현 서비스 기능
```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

## app.module.ts
> 의존성을 관리
```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## app.controller.ts
> 요청에 따른 엔드 포인트
```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

## app.controller.spec.ts
> 유닛 테스트 코드를 실행할 파일
```ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

## pacakge.json
> "scripts": "start"
## start
> npm start === "nest start" === 터미널에 nest start를 작성한 것과 같다.
> start 이외의 것들은 run
> npm start === "nest start" === 배포환경에서 사용하는게 아니고 test환경에서 라이브서버 사용했던거 처럼 
> npm run start:dev === "nest start --watch" === 코드를 수정하면 빌드를 다시 진행하고 테스트환경에서 적용된 내용을 보여준다.
> npm run build === "nest bulid" === 빌드한 파일을 생성해서 사용한 필요한 모듈만 번들링 해서 제공 배포 환경에 업로드

## 실행
```sh
npm run start:dev
```

## 데커레이터, 데코레이터
> nestjs 데코레이터를 사용한다.
> 클래스, 메서드, 접근자, 프로퍼티, 매개변수에 사용할수 있고
> 각 요소를 선언할때 선언부 앞에 @ 기호를 사용해서 사용
> @Get을 봤고
> 데코레이터로 선언된 데코레이터 코드
> 데코레이터를 붙인 코드를 앞에 붙여주면 코드를 같이 실행한다.

## 데코레이터 동작
> 데코레이터는 함수로 정의하고 타겟에 메타데이터를 추가 type-script
> reflect-metadata 패키지가 만들어져 있고
> 메타데이터 저장, 런타입에서 호출
> 심볼의 내용이 들어간다
> typescript 기능의 ES7 데코레이터 제안 받은걸 기반으로 enstjs의 데코레이터 기법을 만들었다.
> `메타프로그래밍` 기법을 사용

## app.controller.tjs
> 사용한 데코레이터

## @Controller
> 클래스 데코레이터 : controller 클래스에 사용할수 있고 basePath르 ㄹ지정한다.
## @Get
> 메서스 데코레이터 : basePath 이후에 요청 경로를 지정한다.

## 컨트롤러를 더 만들어보자
## nestjs cli 제공
## resource

```sh
nest g resource
[뭘 만들지? 이름]
```