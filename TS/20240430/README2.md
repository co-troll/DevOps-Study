# 클로저
> 자바스크립의 특이점 클로저
> 함수안에 함수가 언선된 어휘적(lexical) 환경

```js
const a = 0;

function b() {
    console.log(a);
}
b();
```
> 선언된 위치에서 상위 스코프를 참조한다 => 렉시컬 스코프
> 렉싲컬 스코프 제안 => 선언된 위치에서 사위 스코플의 변수를 참조한다.
> 자바스크립트 공식문저 클로저 `함수와 함수가 선언된 어휘적(랙시컬) 환경의 조합을 말한다. 이환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성 된다.`

> javascript의 함수가 실행될때 실행 컨택스를 만들죠
> 콜스택에 함수의 실행이 쌓이고 렉시컬 임벨리먼듵가 특별한 객체가 생성되고 환경 레코드와 외부 아우터가 존재한다.
> 함수의 내부에 함수가 선언되고 내부 함수에서 외부 함수의 변수를 참조하는 겨우
> 자바스크립트는 함수가 호출되고 외부함수의 변수를 내부 함수가 참조하과 있는 함수를 반환해서 사용하는 경우
> 내부함수가 참조하고 있는 외부 함수의 변수를 가비지 컬렉션으로 해제 한지 않는다.

## 렉기컬 환경

> Lexical Evironment
? 코드가 실행되는 컨텍스트

1. 환경 레코드
> 코드의 this의 값과 선언된 변수와 함수를 기록하는 공간
> 코드의 평가 단계 신ㄱ별자 바인딩을 기록하는 곳

2. 외부 환경 참조(아우터)
> 렉시컬 환경에서 외부 렉시ㅣ컬 환경을 참조
> 한단계 위 상위 스코프를 참조

## 렉시컬 스코프
> 식벌자의 스코프가 언결된 것을 스코프 체인이라고한다.
> 코드를 작성한 구문이 작성한 그래도 스코프를 갖는 특징을 렉시컬 스코피ㅡ
> 어휘적 스코프, 어휘적 스코프 체인

```js
//클로저 함수
// counter 제일 쉽고 다할수 있다

// 클로저가 없는 경우 반환값에 함수가 없다.
function Counter() {
    let index;
    index++;
    console.log(index);
}
debugger
const _increment = Counter();
debugger
const _increment2 = Counter;
debugger

// 클로저가 없는 경우 함수 반환과 반환된 함수가 선언한 위치에서 렉시컬 스코프에 상위스코프에서 참조된 변수나 매개 변수가 있는 경우 
let index = 0;
function Counter() {
    return function increment() {
        index++;
        console.log(index);
    }
}

debugger
const _increment = Counter();
debugger
_increment();
debugger

// 클로저 있음
function Counter(index) {
    return function increment() {
        index++;
        console.log();
    }
} 
debugger
const _increment = Counter();
debugger
_increment();
debugger   
```