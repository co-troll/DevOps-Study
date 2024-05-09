# DOM, BOM

> javascript로 html을 조작하는 기능을 `브라우저` 구현한 것.

- DOM : document object model
- BOM : browser object model

```html
<span></span>
<h2 id='header'>
    DOM
    <span></span>
    <span></span>
    <span></span>
</h2>
```

```js
console.log(this); // window

# DOM
document === html 문서의 내용이 들어있다.
```

## 요소 선택
> 자바스크립트에서 dom 요소를 조작하기 위해서 사용
```js
document.getElementById("header"); === header라는 아이디를 가지고 있는 요소를 찾아서 반환
header === header라는 아이디를 가지고 있는 요소가 할당되어 있다.
// innerHTML === 태그 요소 안에 내용을 넣을 수 있다.
header.innerHTML = "";
header.innerTEXT = "";
```

### 실습 div요소를 하나 만들고 id를 주고 id로 요소를 선택해서 요소의 내용으로 ul 안에 li가 들어가고 li의 내용으로 문자열을 하나 추가해보자.
```js
agg.innerHTML += `
    <ul>
        <li>a
        <li>b
        <li>c
        <li>d
    </ul>
    `
```

### 요소 생성
```js
// 요소를 생성 노드
let el = document.createElement("div");
// 여기까지는 데이터에만 요소가 있는 상태
// append : 노드 요소 추가
header.append(el);
```