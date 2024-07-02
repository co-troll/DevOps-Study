const Board = require("./board.entity");

class BoardModel {
    async findBoardAll() {
        return await Board.findAll();
    }

    async findBoardById(id) {
        return await Board.findOne({ where: { id } });
    }

    async createBoard(title, content, author, id) {
        await Board.create({ title, content, author, author_id: id });
    }
    
    async updateBoard(id, title, content ) {
        await Board.update({ title, content }, { where: { id }});
    }

    async deleteBoard(id) {
        await Board.destroy({ where: { id } });
    }
}

module.exports = BoardModel;