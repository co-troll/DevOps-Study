const root =  ReactDOM.createRoot(document.querySelector("#root"));

// 컴포넌트를 만들진 않았고
// 컴포넌트르 직접 생성
// react 일반적인 dom과 다르고 reactDOM의 생성 방식은 다르다.
// 첫번째 매개변수 태그명
// 두번째 매개변수 자식 요소로 포함
// 세번째 매개변수 내용
root.render(React.createElement("div", null, "안녕"));