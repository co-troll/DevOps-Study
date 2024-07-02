const { Model, DataTypes } = require("sequelize");

class Board extends Model {
    static init(sequelize) {
        super.init({
            title: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            author: {
                type: DataTypes.STRING(20),
                allowNull: false,  
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "Board",
            tableName: "boards",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
            
        });
    }

    static associte(db) {
        db.Board.belongsTo(db.User, { foreignKey: "author_id", target: "id" });
    }
}

module.exports = Board;