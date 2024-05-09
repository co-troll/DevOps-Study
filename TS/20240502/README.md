# Event

> 요소에 클릭이나 스크롤이나 등등을 기능을 주고 싶을때

```js
onclick = () => {

}
function clickhandler() {

}
onclick = clickhandler;

// 요소에 이벤트를 등록 콜백의 형태로 함수를 전달한다.
// 첫번째 인자값은 이벤트의 명
// 두번째가 해당 이벤트 동작시 실행시킬 기능 내용을 함수로 전달
addEventListener("이벤트 명", "함수");
// addEventListener === 이벤트 명에서 on을 빼고 작성하면 된다.
addEventListener("click", () => {
    console.log("나 클릭")
})
```