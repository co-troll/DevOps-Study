const fs = require('fs');
const http = require('http');
const path = require('path'); // 파일의 경로를 지정할때 사용

let mypath = path.join(__dirname, "src", "sample.mp4");
console.log(mypath);

// 서버 객체 생성
const server = http.createServer((req, res) => {
    if (req.url === "/video") {
        // 비디오 파일의 전체의 크기를 구해보자
        const state = fs.statSync(mypath);
        // 비디오의 파일의 크기를 구한다
        const fileSize = state.size;

        // 클라이언트 측에서 요청 헤더 내용으로 Range 헤더를 가져오자
        // video태그로 요청을 하면 range가 요청해더로 포함된다.
        const headerRange = req.headers.range;
        if (headerRange) {
            // headerRange에서 시작부분과 끝부분 추출
            // headerRange == bytes=/12341-235412... 처럼 생김
            const progress = headerRange.replace("bytes=", '').split("-");
            const start = parseInt(progress[0]);
            const end = progress[1]? parseInt(progress[1]): fileSize - 1;

            // 비디오의 청크 크기르 정합시다
            const chuckSize = 3 * 1024; // 3KB

            // 비디오 스트리밍 파일을 스트림으로 읽자
            const videoStream = fs.createReadStream(mypath, { start, end });

            // 응답 헤더 내용 작성
            // 206 성공인데 리소스를 일부분 제공한다. 일부분 전달했고 성공이야
            // 클라이언트에서 range 요청 헤더 내용을 포함하여 보내면 콘텐츠 처리할때 상태코드 반환 해준다.
            res.writeHead(206, { 
                "Content-Range": `bytes ${start}-${end}/${fileSize}`, // 헤더에 데이터를 전송하는 범위를 나타낸다.
                "Accept-Ranges": "bytes", // 헤더에 서버가 클라이언트에게 요청된 범위의 데이터를 어떤걸 지원한다. 현재는 바이트 범위 지원
                "Content-Length": chuckSize, // 이 응답에서 전달하는 데이터의 길이. 현재는 청크 단위로 데이터 제공 중
                "Content-Type": "video/mp4", // 제공하는 콘텐츠의 타입
            })
            // 응답 내용으로 추가
            // 스트림 쓰는거
            videoStream.pipe(res);
        }
        // 스트리밍 하지 않고 파일을 그냥 받고 싶을때
        else {
            const videoStream = fs.createReadStream(mypath);

            res.writeHead(200, {
                "Content-Length": fileSize,
                "Content-Type": "video/mp4", 
            })
            videoStream.pipe(res);
        }
    }
    else {
        res.writeHead(404);
        res.end();
    }
})

// 서버 대기 상태로 만들자
server.listen(3000, () =>{
    console.log("서버가 대기 상태")
});  