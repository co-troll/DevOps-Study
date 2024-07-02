const User = require("./user.entity");

class UserModel {
    async findUserById(id) {
        return await User.findOne({ where: { id } });
    }

    async createUser(id, pw, name) {
        await User.create({ id, pw, name });
    }
    
    async updateUser(id, name, img) {
        await User.update({ name, img }, { where: { id }});
    }
}

module.exports = UserModel;