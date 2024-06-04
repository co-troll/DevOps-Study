// nodejs의 stream 내장 모듈

// Transform 스트림 데이터를 읽고 데이터를 변환한뒤 다른 스트림으로 전달하는데 사용
const { Transform } = require("stream");

// nodejs의 내장 모듈 파일을 읽거나 쓰거나 삭제하거나
const fs = require("fs");

// 청크의 크기
// 스트림에서 작업할때 데이터를 받고 처리할때 마다 각 청크를 조작한다.
const chunkSize = 64 * 1024; // 64KB

// 스트림으로 파일의 데이터를 읽어보자
// 스트림 데이터를 읽어 온다 매개변수로 파일의 경로
// highWaterMark : 청크의 크리글 설정해서 읽는 스트림을 만든다,
const test = fs.createReadStream("test.txt", { highWaterMark: chunkSize });
console.log(test);

// 파일 쓰기 스트림 생성
const test2 = fs.createWriteStream("test2.txt");

// 스트림으로 내용을 파일에서 파일로 이동
// pipe : 매서드를 호출한 객체의 내용을 매개변수로 전달한 스트림 객체에 내용을 이동시킨다.

const transformData = new Transform({
    highWaterMark: chunkSize,
    transform(chunk, en, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

test.pipe(transformData).pipe(test2);   