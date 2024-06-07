// http net 구현했던 네트워크 TCP
// 모던한 느낌으로 외장모듈 라이브러리를 구현한 것

// Restfull API : GET / POST / PUT / DELETE

// GET : 내용을 조회
// POST : 내용을 추가
// PUT : 내용을 수정
// DELETE : 내용을 삭제

// 외장 라이브러리는 노드 버전에 따라 버전이 바뀌므로 노드 버전을 맞추고 협업해야한다.
// package-lock.json 현재 설치된 버전으로 고정
const express = require('express');
// 서버 객체 생성
const app = express();

const fs = require('fs');

// 미들웨어
// 요청을 보내고 응답을 하기 전에 처리할 내용을 미들웨어로 추가
// 스트림 배우면서 대문자 변환

// app.use 미들웨어 추가
// express.json() : 파싱의 내용을 넣어주겠다. body의 내용을 객체로 해주는 메소드
app.use(express.json());

// 쿼리 스트링 파싱 form의 내용을 파싱
// 깊은 객체(객체 안에 객체)까지 사용할꺼냐?
app.use(express.urlencoded({ extended: true }));

// 라우팅을 메소드를 통한 라우팅
// GET / POST / PUT / DELETE
app.get("/", (req, res) => {
    console.log(req.query); // 쿼리 스트링
    // req.query == 쿼리스트링을 객체로 파싱
    console.log(req.body); // 전달한 본문의 내용을 body에 객체 파싱
    res.send(`
    <html>
        <title>응답 페이지</title>
        <body>
            <form method="post" action="/postContent">
                <input type="text" name="test">
                <button>확인</button>
            </form>
        </body>
    </html>
    `) // 응답메시지 -> 응답 종료
})

app.post("/postContent", (req, res) => {
    
    console.log(req.body);
    // redirect : 브라우저가 응답을 받았을때 요청을 다시 이경로로 보내
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("server on~");
})
