const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.STRING(20),
                primaryKey: true,
            },
            pw: {
                type: DataTypes.STRING(128),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            img: {
                type: DataTypes.STRING(128),
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "User",
            tableName: "users",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }

    static associte(db) {
        db.User.hasMany(db.Board, { foreignKey: "author_id", sourceKey: "id" })

    }
}

module.exports = User;