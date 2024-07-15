# OAuth 2.0 카카오 구글
> 어플리케이션 간의 인즌을 위해 사용하는 프로토콜
> 사용자의 신상을 노출하지 않고 다른 회사의 어플리케이션이
> 사용의 정보를 접근해서 권한을 인증할수 있게 한다.

1. 사용자가 클라이언트에 접근
2. 클라이언트가 서버에 사용의 권한을 요청

## 프로세스
1. 클라이언트가 카카오 서버에 로그인하고 리다이렉트 -> 클라이언트
2. (카카오 로그인 권한이 생기고 토큰을 발급받는다.)
3. 클라이언트 -> 서버(인증코드 전달)
4. 서버 -> 카카오 서버로 요청 -> 서버로 응답
5. 서버 > 토큰을 활용

```sh
nest new backend
nest g res
auth
```

## 카카오 개발자
> 사이트 접속
> 플랫폼 탭 -> web 플랫폼 등록 (사용할 도메인 지정)
> Redirect URI를 등록 -> 어디로 요청을 보낼지? 쿼리스트링에 코드를 담아서 보내준다.
> 카카오 로그인 활성화 on -> Open Id Connect 활성화 on
> http://localhost:3000/auth/kakao/callback

```sh
npm i @nestjs/passport
npm i passport-kakao
npm i @nestjs/config
```

```sh
npm i @nestjs/swagger
npm i swagger-ui-express
```