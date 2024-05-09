class Board {
    constructor(title, content) {
        this.index;
        this.title = title;
        this.content = content;
    }
    getIndex() {
        return String(this.index + 1);
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
}
class BoardManager {
    constructor() {
        this.boards = [];
    }
    setBoard(board) {
        this.boards.push(board);
    }
    getBoard(index) {
        return this.boards[index];
    }
    getBoardLength() {
        return this.boards.length;
    }
}
const boardFrm = document.querySelector("#boardFrm");
const boardBox = document.querySelector("#boardBox");
const boardBoxTable = boardBox.innerHTML;
const title = document.querySelector('[name="title"]');
const Boards = new BoardManager();
function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const boardTitle = form.boardTitle;
    const boardContent = form.boardContent;
    const board = new Board(boardTitle.value, boardContent.value);
    Boards.setBoard(board);
    drawing();
}
function getContent(index) {
    const div = document.createElement("div");
    const num = document.createElement("span");
    const title = document.createElement("span");
    const content = document.createElement("span");
    div.classList.add("board");
    num.classList.add("index");
    title.classList.add("title");
    content.classList.add("content");
    const board = Boards.getBoard(index);
    num.innerHTML = String(index + 1);
    title.innerHTML = board.getTitle();
    content.innerHTML = board.getContent();
    div.append(num, title, content);
    return div;
}
function drawing() {
    boardBox.innerHTML = boardBoxTable;
    for (let i = 0; i < Boards.getBoardLength(); i++) {
        const row = getContent(i);
        boardBox.append(row);
    }
}
drawing();
boardFrm.onsubmit = function (event) {
    submitHandler(event);
};
