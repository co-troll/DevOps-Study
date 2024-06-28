// 시퀄라이즈에 매핑할 유저 객체의 내용
// 객체의 형태가 정해져있다.
const Sequelize = require("sequelize");

// Sequelize.Model === class
// Sequelize.Model 상속 받아서 매핑할 객체를 생성해라

// User 클래스 생성
class User extends Sequelize.Model {
    // 초기화 함수
    // 시퀄라이즈 객체
    static init(sequelize) {
        // super 상속 받은 부모의 생성자 호출 super()
        // super.init() 상속 받은 부모의  init함수를 호출
        // Sequelize.Model,init() : 매개변수 2개
        // 첫번째 매개변수(객체) : 매핑할 테이블의 내용 entity 데이터의 내용
        // 두번째 매개변수(객체) : 매핑의 테이블의 설정(이름 등등)
        // super.init : 테이블이 없으면 만들고 있으면 매핑(entity가 다르면 에러가 발생한다)
        return super.init({
            // 컬럼의 내용
            /*
            CREATE TABLE user(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(20),
                age INT,
                msg TEXT,
                date DATE DEFAULT DATE.now()
            );
            */
            // 컬럼의 이름
            name: {
                // 컬럼의 속성 내용
                // 시퀄라이즈 타입
                type: Sequelize.STRING(20),
                unique: true
            },
            age: {
                type: Sequelize.INTEGER,
            },
            msg: {
                type: Sequelize.TEXT
            }
        }, {
            // 매핑할 테이블의 속성 내용
            // sequelize 키값으로 시퀄라이즈 객체를 추가
            sequelize,
            // 생성 시간 속성을 추가 컬럼을 추가할지 말지
            // createdAt 컬럼을 추가할지 말지
            // updatedAt 컬럼을 추가할지 말지
            timestamps: true,
            // underscored : 표기법을 바꿔주는 속성
            // 기본적으로 스네이크 표기법을 사용하는데
            // 스네이크 표기법을 카멜표기법으로 변경
            underscored: false,
            modelName: "User", // 모델의 이름을 설정 join 관계 조회 시에
            tableName: "users", // 매피할 테이블의 이름 없으면 이 이름으로 테이블 생성
            paranoid: false, // paranoid : 속성이 true면 deletedAt // 컬럼의 값이 삭제되면 시간이 표기되고 삭제를 했지만 데이터는 남겨두고 싶을때 하지만 조회는 안된다.
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
            
        })
    }
    // 테이블의 관계성을 만들어줄 함수
    // 테이블들 내용을 매개변수로 받고
    // 그 중에서 어떤 테이블과 관계를 맺을지
    static associte(db) {
        // 1:1 로 사용자와 게시글의 테이블의 관계를 설정
        // hasMany : 테이블의 관계를 정의한다.
        // 부모 테이블이 될것
        // sourceKey : foreignKey가 연결할 키

        db.Users.hasMany(db.Posts, { foreignKey: "user_name", sourceKey: "name" })

    }
}

module.exports = User;