// mysql 연결
// 외부 모듈을 설치해서 사용할 것
// 설치하는 모듈을 mysql 자체가 아니라 드라이버라고 생각하면된다.

// mysql 모듈 설치
// mysql mysql2

// mysql 콜백방식
// mysql2 promise 기반

const mysql = require('mysql2');

// 유저 이름
// 유저 비밀번호
// db 이름
// host
// port

const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "1111",
    database: "test",
    multipleStatements: true
});


mysqlConnect.query("SELECT * FROM products;", (err, res) => {
    if (err) {
        console.log("테이블이 없어~");
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(10), number INT);"
        mysqlConnect.query(sql);
        console.log("테이블이 없어서 만들었어~");
    } 
    else {
        console.log("테이블이 있어~");
        // console.log(res);
    }
});

// 글 추가
const createSql = "INSERT INTO products(name, number) VALUES (?, ?)";
/* mysqlConnect.query(createSql, ["soon4", "123"], (err) => {
    if (err)
        console.log(err);
    console.log("글이 추가됐어");
}) */

// 글 삭제
const deleteSql = "DELETE FROM products WHERE id = ?;";
const deleteSql2 = "SET @CNT = 0; UPDATE products SET products.id = @CNT:=@CNT+1;";
const deleteSql3 = "ALTER TABLE products AUTO_INCREMENT = 1;";
const deleteSqlALL = deleteSql + deleteSql2 + deleteSql3;
/* mysqlConnect.query(deleteSqlALL, [1], (err, res) => {
    if (err)
        console.log("삭제할 로우를 못찾았어");
    console.log("정삭적으로 삭제됨~");
}) */
// SET : @CNT를 초기화 0으로 할당.

// 글 수정
const updateSql = "UPDATE products SET name = ?, number = ? WHERE id = ?;";
mysqlConnect.query(updateSql, ["soon2", 456, 3], (err, res) => {
    if (err)
        console.log(err);
    console.log("정상적으로 수정됐어");
})

// 글 조회
mysqlConnect.query("SELECT * FROM products;", (err, res) => {
    console.log(res);
});
