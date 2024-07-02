const BoardService = require("../service/board.service");
const jwt = require("jsonwebtoken");

class BoardController {
    /** @param {BoardService} BoardService  */
    constructor(BoardService) {
        this.BoardService = BoardService;
    }

    getBoardAll = async (req, res) => {
        const boards = await this.BoardService.getBoardAll();
        res.render("board", { boards });
    }

    getBoardById = async (req, res) => {
        const { id } = req.params;
        const data = await this.BoardService.getBoardById(id);
        res.render("modify", { data });
    }

    insertBoard = async (req, res) => {
        const { title, content } = req.body;
        const { name } = req.cookies.user;
        await this.BoardService.insertBoard(title, content, name.name, name.id);
        res.send(`<script>alert("작성 완료"); location.href = "/board"</script>`); 
    }

    modifyBoard = async (req, res) => {
        const { id } = req.params;
        const { title, content } = req.body;
        await this.BoardService.modifyBoard(id, title, content);
        res.send(`<script>alert("수정 완료"); location.href = "/board"</script>`); 
    }
    
    deleteBoard = async (req, res) => {
        const { id } = req.params;
        await this.BoardService.deleteBoard(id);
        res.send(`<script>alert("삭제 완료"); location.href = "/board"</script>`); 
    }
    
}

module.exports = BoardController;