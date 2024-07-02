const UserModel = require("../model/user.model");

class UserRepository {
    /** @param {UserModel} database */
    constructor(database) {
        this.database = database;
    }
    
    async findUserById(id) {
        return await this.database.findUserById(id);
    }

    async createUser(id, pw, name) {
        await this.database.createUser(id, pw, name);
    }

    async updateUser(id, name, img) {
        await this.database.updateUser(id, name, img);
    }
}

module.exports = UserRepository;