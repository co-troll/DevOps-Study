// HTTP 프로토콜

// HTTP 요청을 보내게 되면

// TCP3-way-handshaking의 과정을 거치고

// 3-way-handshking: 클라이언트와 서버가 데이터 통신을 하기전에 통신 준비가 되었다는 것을 확인 하는 것

// 네이버 데이터베이스에 값을 넣거나 사용자 정보 같은걸 조회하거 아무나 x
// 요청을 보낼 수 있는 host인지 확인

// 클라이언트는 서버에 통신 요청을 하고
// 서버는 통신 요청을 받아서 클라이언트에게 통신 요청을 수락하고 응답 해준다.

// SYN + ACK

// 클라이언트는 SYN을 서버에 요청하고
// 서버는 SYN + ACK를 클라이언트에게 통신 요청 수락을 응답해준다.
// 클라이언트는 서버와 ACK를 보내면 나 그럼 요청 보낼게?

// 서버에 요청을 보내고 응답을 받고

// 4 way-handshaking TCP 연결을 종료
// 통신을 종료하기 위해 클라이언트와 서버가 서로의 상태 확인
// 서버 FIN메세지를 받고 클라이언트는 데이터가 없다는 것을 의미하는 
// 메세지인 ACK를 보내고 서버는 데이터가 더 자신이 보내지지 않은 데이터를 확인한 뒤에
// 전송할거 있으면 전송을 하고 클라이언트에게 FIN메세지를 전송 클라이언트는 서버가 더이상 전송할 데이터가 없다는 것을 확인하고 ACK 메세지를 보내준다

// 여기서 통신 종료

const http = require("http");

// 서버 객체만 만든것
const server = http.createServer((req, res) => {
    //createSever 서버 객체를 만들고 콜백함수로 익명 함수 전달해서
    // 요청과 요청의 처리 내용의 로직을 작성
     
    // 상태 코드  
    // 응답 해줄때 200

    // 1xx : 커의 없다
    // 2xx : 성공
    // 3xx : 리다이렉트 요청을 다시 다른곳을 보내라
    // 4xx : url 정상적이지 않거나 페이지가 없거나(404)
    // 5xx : 서버가 정상적이지 않음 서버 터지면

    // 성공 응답
    // res.statusCode = 200;
    // // 실패 응답
    // res.statusCode = 400; 

    const URL = req.url;
    console.log(URL);

    const body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div>안녕하세요</div>
        </body>
        </html>
        `
        const resMsg = `HTTP/1.1 200 ok
        Content-Type: text/html
        Content-Length: ${body.length}

        ${body}
    `
    
    res.write(body);
    switch (URL) {
        case "/":
            res.end("main page");
            break;
        case "/mypage":
            res.end("my page");
            break;
        case "/getBoard":
            res.end("board view");
            break;
    }
})

server.listen(8000, () => {
    console.log("server on");
})