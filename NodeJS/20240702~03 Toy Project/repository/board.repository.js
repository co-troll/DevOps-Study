const BoardModel = require("../model/board.model");

class BoardRepository {
    /** @param {BoardModel} database */
    constructor(database) {
        this.database = database;
    }

    async findBoardAll() {
        return await this.database.findBoardAll();
    }

    async findBoardById(id) {
        return await this.database.findBoardById(id);
    }

    async createBoard(title, content, author, id) {
        await this.database.createBoard(title, content, author, id);
    }

    async updateBoard(id, title, content) {
        await this.database.updateBoard(id, title, content);
    }

    async deleteBoard(id) {
        await this.database.deleteBoard(id);
    }
}

module.exports = BoardRepository;