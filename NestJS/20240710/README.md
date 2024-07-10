# nestjs 요청 주기
> 클라이언트 -> 미들웨어 -> 가드 -> 인터셉터 -> 파이프 -> 컨트롤러(서비스, 레파지토리) -> 응답

# Pipe
> class 데코레이터를 사용한 프로바이더
> 값의 변환과 검증을 처리해주는 로직을 담당
> 값이 유효한지 검증을 하고 검증이 잘 완료되면 값을 그대로 사용하고
> 그렇지 않으면 에러를 발생시킨다.
> 메서드가 호추로디기 전에 파이프를 실행학 파이프에서 처리후에 메서드 호출 전에 에러를 발생시킬수 있다.
> 쉽게 말해서 파이프는 예외 처리를 실행하고 파이프가 throw로 error의 객체르 반환하면 컨트롤러의 메서드가 호출되지 않게하고 에러메시지를 어떤에러인지 명확하게 모니터링 할수 있다.

## 컨트롤러
```ts
@Get(':index')
findNumberIndex(@Param('index') id: number) {
    // Params 값을 구조 분해 할당하면 데이터 타입 문자형
    console.log("id", id);
    return typeof id;

}
```

## nestjs에 내부 파이프 
> ParseIntPipe : 전달한 벨류가 숫자로 변환할수 있는지 변환할 수 없으면 에러메시지를 응답한다. /1 이러한 요청이 들어오면 잘 처리가 될것인데 /qwe 에러메시지를 반환

```sh
nest new [폴더명]

nest g res
User
```

## 내부 파이프 종류
ValidationPipe
ParseIntPipe
ParseFloatPipe
ParseBoolPipe
ParseArrayPipe
ParseUUIDPipe
ParseEnumPipe
DefaultValuePipe
ParseFilePipe

## 커스텀 파이프