const express = require('express');
const fs = require('fs');
const path = require('path');

const boardRouter = require('./routers/board.router');

const app = express();

// 미들웨어 : 요청과 응답 전에 동작할 기능
app.use("/board", boardRouter);
// / 루트 경로에서 요청이 들어오는 경우

app.get("/", (req, res) => {
    // res.write("456");
    // res.end("123"); 
    // end : 응답을 종료하고 기본적인 스트림을 다룰때
    // 헤더의 내용으로 정해진 컨텐츠 타입으로 보낼때 사용하는 메서드
    // 문자열, 객체, 배열, 버퍼 등의 내용을 클라이언트에게 응답하면서 응답 종료

    // res.send("{a:1}");

    // 주요 차이
    // end : 스트리밍 응답이나 응답의 부분을 나눠서 보낼때
    // send : 간단한 응답을 보낼때 한번으로 응답 종료
    const filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        // res 응답의 헤더의 상태코드를 404로 할당
        if (err) 
            return res.status(404).send("페이지 파일을 읽는데 오류났어");
        res.send(data);
    })
})

app.get("/board", (req, res) => {

})

// 클라이언트 서버가 x 브라우저
// 서버 측에서 페이짖를 보여주는 역할까지 하고 있는것
// 클라이언트를 보여주는 서버(정적 파일을 보여주는 서버)
// 객체나 DB 등의 데이터를 응답해주는 서버

app.listen(3000, () => {
    console.log("server on~");
})