const fs = require('fs');
const path = require('path');

// public 폴더의 파일들의 루트 경로를 지정
// public 폴더의 경로가 루트 경로
const rootName = "public";
const rootDir = path.join(__dirname, "..", rootName);

let result = {};

// 폴더 안의 내용을 찾는 함수
const find = (currentPath = rootDir) => {
    // 경로의 파일과 디렉토리 목록을 읽어오자  
    const directory = fs.readdirSync(currentPath);
    // console.log(directory);
    for (const dir of directory) {
        // 폴더들의 경로를 완성
        const findPath = path.join(currentPath, dir);
        // console.log(findPath);
        // 만약 폴더인지 파일인지
        const isFile = fs.statSync(findPath).isFile(); // 파일이면 true 디렉토리 false
        if (!isFile) {
            // 폴더 안의 폴더
            find(findPath);
        }
        else {
            // 폴더 안의 파일
            // 탐색하는 경로가 public 디렉토리인지 확인
            const key = currentPath === rootDir? "/": currentPath.replaceAll(rootDir, "");
            // http 경로 생성
            const httpPath = path.join(key, dir).replaceAll("\\", "/");
            result[httpPath] = dir;
        }
    }
    // console.log(result);
    return result;
}

module.exports = find();