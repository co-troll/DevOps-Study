// 파일을 읽거나 쓰거나 삭제 생성 등을 할때 사용하는 내장 모듈 파일 시스템
const fs = require("fs");

// 폴더가 있는지 확인
// ~Sync 동기적 처리
// exitsSync: 폴더가 있는지 확인 반환값이 true false
let folder = fs.existsSync("./Test");
console.log(folder);

// 폴더가 없으면 생성
if (!folder) {
    // 매개변수로 폴더를 만들 경로를 전달
    // fs.mkdir("./Test", (err) => {
    //     if (err) {
    //         console.log(err);
    //         console.log("에러 발생");
    //     }   
    //     else {
    //         console.log("Test 폴더가 정상적으로 만들어짐");
    //     }
    // })
    const text = fs.mkdirSync("./Test");
    console.log("동기니?", text);
}

// 폴더 만들었으니 폴더에 파일을 추가해보자
// writeFile: 파일을 쓰기 파일에 데이터를 포함하여 파일을 만들어준다.
// writeFile("파일 생성 경로 및 파일 이름", "파일에 작성할 내용", "함수")
// fs.writeFile("./Test/text.txt", "Hello nodejs", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("파일이 잘 만들어 졌음");
//     }
// })

fs.writeFileSync("./Test/text.txt", "Hello nodejs123");
console.log("파일이 잘 만들어 졌음");

// 파일을 읽어오자
// fs.readFile("./Test/text.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// })

let data = fs.readFileSync("./Test/text.txt", "utf8");
console.log(data);

// 삭제
// recursive 삭제할때 옵섭으로 폴더 안에 있는 내용까지 삭제하겠다.
fs.rm("./Test", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("폴더가 잘 삭제 됐음");
    }
})