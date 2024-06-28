const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        }, {
             sequelize,
             timestamps: true,
             modelName: "Post",
             tableName: "posts",
             charset: "utf8mb4",
             collate: "utf8mb4_general_ci",
        });
    }

    static associte(db) {
        // 자식 테이블
        db.Posts.belongsTo(db.Users, { foreignKey: "user_name", target: "name" });
    }
}

module.exports = Post;