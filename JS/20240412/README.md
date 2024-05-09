# 함수

> 중복 코드를 줄이기 위함.

## 함수 선언
```js
// [function 예약어] [이름]([매개변수]) {[실행코드 내용]} 
function name() {}
```

## 코드 실행(호출)
```js
// [함수 이름]();
name();
```

## 코드의 실행은
브라우저가 코드를 읽고
브라우저 실행

```js
console.log("hello world");
```

## 함수도 값이다.

## 함수 선언과 호출
```js
function message() {
    console.log("안녕하세요");
}

message();
log == "딸기 음료수가 생성"

message("키위");
log == "키위 음료수 생성"
```

# 함수의 매개변수와 스코프
```js
let a = "철수";
function name() {
    console.log(a);
    // 지역 스코프
    function name2() {
        console.log(a);
    }
    name2();
    // name2 -> 내 스코프에서 a를 찾아야지 -> anem에서 a를 찾고 -> 전역에서 찾는다.
}
name();

// name -> a -> console.log(a)
// 하루의 실행 컨테긋트(우테코) 앞부분
```

## 매개변수와 인자
매개변수는 함수안에서 선언하는 변수
이자는 함수 호출시 넣는값

```js
funcution name(a) {

}

name("인자");
```

## return
return은 함수 안에서 사용하는 예약어
함수의 내부에서 return을 만나게 되면
함수를 종료시킵니다.
```js
function name() {
    console.log("여기는 실행");
    return;
    console.log("여기는 실행 x");
}
```

# 함수 선언식
```js
function message() {}
```

# 함수 표현식
```js
const message = function () {}
message();
const message2 = message;
message2();
```

## 함수의 매개변수에 함수를 전달할 수 있나?
```js
// 콜백함수
function message(fn1, fn2) {
    fn1();
    fn2();
}

function name() {
    console.log("name 나는 함수야");
}

function name2() {
    return "name2 나는 함수야";
}

message(nam e, name2);
```

## 화살표 함수
함수 표현식을 조금더 간결하고 좋은 방법으로 문법을 작성
ES6에서 추가된 문법이고 `화살표 함수`이라고 한다.
this를 이해하고 쓰면 좋다.
this바인딩을 하지 않기 위해서 사용한다.
```js
const sum = (a, b) => {
    return a + b;
}

sum(10, 20);
```

## 즉시실행 함수, 익명 함수

## 익명함수
```js
function () {}
```

## 즉시실행함수
```js
(function (b) {
    let a = 1;

}(1));
let a = 1;
```
