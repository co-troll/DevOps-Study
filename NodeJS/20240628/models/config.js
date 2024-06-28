// 데이터베이스 사용자 설정 객체
const config = {
    // 개발용도
    dev: {
        username: "root",
        password: "1111",
        database: "study2",
        host: "127.0.0.1",
        // dialect 데이터베이스의 종류
        dialect: "mysql"
    }
}

module.exports = config;