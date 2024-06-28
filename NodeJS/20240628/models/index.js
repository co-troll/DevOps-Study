const Sequelize = require("sequelize");
const config = require("./config");
const User = require("./users");
const Post = require("./posts");
// Sequelize class 생성자
// Sequelize 객체 생성
// Sequelize 생성자 함수
// 매개변수를 순서대로 줘야한다.
// 데이터베이스 이름, 사용자 이름, 비밀번호, 전체 객체 내용

// 시퀄라이즈 객체 생성
const sequelize = new Sequelize(
    config.dev.database, 
    config.dev.username, 
    config.dev.password, 
    config.dev
);

const db = {};
db.sequelize = sequelize;
db.Users = User;
db.Posts = Post;

User.init(sequelize);
Post.init(sequelize);

User.associte(db);
Post.associte(db);
// 시퀄라이즈 연결
// mysql에 커넥션 요청을 보내고 
// 매핑 까지

// promise
// 테이블 전부 초기화 (force: true)
sequelize.sync({ /* force: true */ }).then(async () => {
    // 연결 성공
    console.log("연결 성공");

    
    // User 테이블 매핑 객체
    // insert into 
    /* User.create({
        name: "soon",
        age: 20,
        msg: "안녕",
    }); */
    /* await Post.create({
        content: "789"
    }) */
    // Post.findOne
    // Post.findAll
    // const datas = await Post.findAll({ where: { content: "123" } });
    // const data = datas.reduce((acc, el) => {acc.push(el.dataValues); return acc}, []);
    // const data = await Post.findOne({ where: { id: 1 } })

    // const data = await Post.update({
    //     content: "456"
    // }, { where: { id: 1 } });
    // console.log(data);
    // const data2 = await Post.findOne({ where: { id: 1 } });
    // console.log(data2.dataValues);
    // await Post.destroy({ where: { id: 1 } })

}).catch((err) => {
    // 실패
    console.log("연결 실패", err);
});

// 테이블간에 매핑할 객체를 만들어줘야한다.
// 자바스크립트로 매핑할 내용을 객체로 작성해줘야 한다.
// 사용자 객체를 만들어봅시다.


module.exports = db;

// 게시글을 추가 삭제 수정 조회
// 사용자가 글을 쓸 수 있게 설계
// 게시글이 있다는 것은 사용자가 있다는 얘기
// 사용자가 없으면 게시글을 추가 할수 없다. 제약조건 외래키
// 조회할때 사용자의 글이 맞는지 조회 join