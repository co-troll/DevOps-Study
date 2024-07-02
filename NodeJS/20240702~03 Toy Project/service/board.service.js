const BoardRepository = require("../repository/board.repository");
const bcrypt = require("../model/lib/bycypt");

class BoardService {
    /** @param {BoardRepository} BoardRepository  */
    constructor (BoardRepository) {
        this.BoardRepository = BoardRepository;
    }

    async getBoardAll() {
        return await this.BoardRepository.findBoardAll();
    }

    async getBoardById(id) {
        return await this.BoardRepository.findBoardById(id);
    }

    async insertBoard(title, content, author, id) {
        await this.BoardRepository.createBoard(title, content, author, id);
    }

    async modifyBoard(id, title, content) {
        await this.BoardRepository.updateBoard(id, title, content);
    }

    async deleteBoard(id) {
        await this.BoardRepository.deleteBoard(id);
    }
}

module.exports = BoardService;