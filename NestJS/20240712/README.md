# nestjs. guard, interceptor, middleware

## guard
> 가드가 하는 역할은 인증 권한 부여의 로직을 처리할때
> 컨트롤러의 로직을 실행하기 위해

1. 요청의 유효성 검사
2. 사용자의 인증 정보를 확인
3. 컨트롤러의 로직의 접근 제어

```ts
class UserTokenGuard implements CanActivate {
    // ExcutionContext 요청의 대한 내요을 어떻게 받을지 메서드를 통해서 원하는 형태를 받을 수 있다. hhtp 요청의 내용을 받고싶다.

    canActivate(content: EXcutionContext) {
        // http 요청의 내용을 가지고 오고 싶어
        const req = content.switchToHttp().getRequest();

        if (!req.user) {
            throw new UnauthorizedException(
                '토큰이 없어',
            );
        }
        return true;
    }
}

```

```sh
nest new [폴더명]

nest g res
auth

npm i @nestjs/jwt
```

## interceptor
> 요청과 응답의 내용을 받아올 수 있다.
> 로깅이나 캐싱등의 작업에 사용할 수 있다.

1. 요청 메시지의 로직을 삽입할 수 있다.
2. 응답 메시지의 내용을 수정할 수 있다.
3. 메서드가 실행도니 시간을 로깅을 할 수 있다. 어떤 메서드 실행인지도.

## middleware
> 말 그대로 요청과 응답간에 처리할 로직