# 댓글
# Counter
# Date

0의 값을 가지고 +를 누르면 값이 증가하고 -를 누르면 값이 감소

1. 화면을 그리기
2. 기능을 작성
3. 입력값이 무언인지.

# 첫번째 방법
```js
const _display = document.querySelector("#counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

let num = 0;
_displayer.innerHTML = num;

incrementBtn.onclick = function() {
    // + 증가 버튼을 눌렸을때
    _display.innerHtml = ++num;
}

decrementBtn.onclick = function() {
    // - 감소 버튼을 눌렸을때
    _display.innerHtml = --nuam;
}
```

# 두번째 방법
# 연산자 삼항  연산자
```js
    true ? "참" : "거짓"; === 참 
    false ? "참" : "거짓"; === 거짓
    1 === 1 ? "참" : "거짓"; === 참
    if (1===1) {
        return "참"
    } else {
        rturn "거짓";
    }
    // 안됩니다. 적어도 2뎀스까지
    1 === 1 ? 2 === 2 ? 3 === 3? "참" : "거짓" : "거짓" : "거짓";


```

### try catch

> 오류가 발생하면 코드 종료되는데,
> 프로그램이 종료되지 않고 에러의 내용을 알려주고
> 코드의 실행은 그대로 진행시킨다.

```js
try {
    // 코드의 내용
} catch(e) {
    console.log(e);
}
```

### dataset
```html
<div class=""; id=""; data-index="">
```

### 구조 분해 할당
> 객체의 내용과 배열의 내용을 변수로 할당할때 자주 사용한다.
```js
let a = {name: "이순현", age: 20};

let b = a.age;

// 객체의 구조 분해 할당
// 객체의 안에 있는 키로 변수명을 선언해야한다.
let {age, name} = a;

// 배열의 구조 분해 할당
let c = [1,2,3,4,5,6,7];
let d = c[0];

let [num, num2, num3] = c;
// 순서대로
```