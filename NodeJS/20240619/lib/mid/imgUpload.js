const multer = require("multer");
const path = require("path");

// multer 함수로 객체를 생성
exports.upload = multer({
    // 속성
    // storage: 어느 디스크(서버 컴퓨터의 하드디스크, 메모리)를 사용할거냐
    storage: multer.diskStorage({
        // diskStorage: 서버 컴퓨터의 하드 디스크에 업로드 파일을 저장하는 개체를 생성
        // destination: 파일의 저장될 폴더를 지정
        destination: (req, file, done) => {
            done(null, "upload");
        },
        // filename 업로드하는 파일의 이름을 설정
        filename: (req, file, done) => {
            // file.originalname : 사용자가 업로드한 원본 파일명
            // extname: 확장자만 추출
            const ext = path.extname(file.originalname);
            // 고유한 값으로 이미지의 이름을 만들어 줘야한다.
            // 시간을 이름을 주는것
            // 저장할 파일의 이름
            // basename: 이름의 확장자를 추가나 제거
            const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);
        }
    }),
    // 파일의 사이즈 설정 최대 5MB?
    limits: { fileSize: 5 * 1024 * 1024 }, //
})