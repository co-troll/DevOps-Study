// ejs 템플릿 엔진

// 템플릿 엔진 : 서버 측에서 html을 만들어서 응답해주는 것.

// 이런 기업은 서버사이드 렌더링
// express에서 ejs를 많이 사용햇었음 
// express가 업데이트 되면서 ejs를 기본적으로 제공하게 됨.

// <% js 코드 %> // 코드 실행

// <%= 변수의 내용 %> // 참조 html 수정 변수 삽입

// react next에서 도움이 된다.

const express = require('express');
const app = express();

// set : 서버 객체 안에 있는 내용을 수정하겠다.
// 뷰 엔진을 ejs를 사용하겠다.
app.set("view engine", "ejs");

// 정적 파일 미들웨어로 추가
app.use(express.static("public"));

const boardList = [
    {id: 1, name: "soon"},
    {id: 2, name: "soon2"}, 
    {id: 3, name: "soon3"}, 
    {id: 4, name: "soon4"},
];

const title = "페이지 제목";
app.get("/", (req, res) => {
    // res.send("안뇽");
    // 페이지에서 변수를 사용해서 페이지를 완성시켜서 보여주고 싶어
    // 문자열 파싱을 해서 스크립트 변수 내용을 포함한 완성된  html을 응답

    // render : view engine ejs를 사용하때 페이지를 완성시켜서 응답
    res.render("index", { title, boardList });
})

app.listen(3000, () => {
    console.log("server on~");
})