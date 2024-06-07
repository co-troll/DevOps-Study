const net = require("net");
const fs= require('fs');
const getRequest = require("./lib/request");
const getResponse = require("./lib/response");
const staticFileObj = require("./lib/static");

const server = net.createServer();

server.on("connection", (socket) => {
    let buffer = Buffer.alloc(0);
    socket.on("data", (chunk) => {
        // concat 버퍼에 있는 데이터를 합쳐준다.
        // 버퍼는 처음에 할당한 길이기 변하지 않기 때문에 
        buffer = Buffer.concat([buffer, chunk])
        // 요청 객체 내용
        const req = getRequest(buffer);
        console.log(req);
        // 응답 객체 내용
        const res = getResponse(socket, req);
        // 라우팅 처리 (요청 경로의 값을 판단해서 어떤 처리를 해줄지 결정)

        let method = req.startLine.method;
        if (method.toUpperCase() === "POST") {
            fs.writeFileSync(`json/${req.body.title}.json`, req.body.content);
        }
        
        // 정적 파일 라우팅 처리
        for (let path in staticFileObj) {
            if (req.startLine.url === path) {
                res.sendStatic(path);
                return;
            }
        }

        // 페이지 라우팅
        const urlPath = req.startLine.url;
        if (urlPath === "/") {
            res.send("index");
        } 
        else if (urlPath === "/views/list") {
            res.send("list")
        }
        else if (urlPath === "/views/write") {
            res.send("write")
        }
        else if (urlPath === "/views/view") {
            res.sendJson(req.body.title);
        }
        else {
            res.notFound("요청 주소 확인");
        }

        // 메서드가 post일 경우 본문 내용으로 json파일을 만들어서 내용을 추가하기
        // console.log(req.body);
        
    })
})

server.listen(3000, () => {
    console.log("server on~");
})

/* 
net 
- server.js
- lib - 라이브러리
-- request.js
-- response.js
-- static.js
- public - 정적 파일
-- css
-- js
- views - 화면 구성 파일
-- index.html
-- board
--- list.html
--- write.html

*/