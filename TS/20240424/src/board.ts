interface IBoard {
    title: string;
    content: string;
}

class Board implements IBoard {
    index: number;
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.index;
        this.title = title;
        this.content = content;
    }

    getIndex(): string {
        return String(this.index + 1);
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }
}

// output
class BoardManager {
    boards: Board[];
    constructor() {
        this.boards = [];
    }

    setBoard(board: Board) {
        this.boards.push(board);
    }

    getBoard(index: number): Board {
        return this.boards[index];
    }

    getBoardLength(): number {
        return this.boards.length;
    }
}

const boardFrm: HTMLFormElement = document.querySelector("#boardFrm");
const boardBox: HTMLDivElement = document.querySelector("#boardBox");
const boardBoxTable: string = boardBox.innerHTML;
const title = document.querySelector('[name="title"]');

const Boards: BoardManager = new BoardManager();

function submitHandler(event: SubmitEvent) {
    event.preventDefault();
    const form: HTMLFormElement = event.target as HTMLFormElement;
    const boardTitle: HTMLInputElement = form.boardTitle as HTMLInputElement;
    const boardContent: HTMLInputElement = form.boardContent as HTMLInputElement;

    const board = new Board(boardTitle.value, boardContent.value);
    Boards.setBoard(board);
    drawing();
}

function getContent(index: number): HTMLDivElement {
    const div: HTMLDivElement = document.createElement("div");
    const num: HTMLSpanElement = document.createElement("span");
    const title: HTMLSpanElement = document.createElement("span");
    const content: HTMLSpanElement = document.createElement("span");

    div.classList.add("board");
    num.classList.add("index");
    title.classList.add("title");
    content.classList.add("content");

    const board: Board = Boards.getBoard(index);
    num.innerHTML = String(index + 1);
    title.innerHTML = board.getTitle();
    content.innerHTML = board.getContent();

    div.append(num, title, content);
    return div;
}

function drawing() {
    boardBox.innerHTML = boardBoxTable;
    for (let i = 0; i < Boards.getBoardLength(); i++) {

        const row: HTMLDivElement = getContent(i, );
        boardBox.append(row);
    }
}

drawing();

boardFrm.onsubmit = function(event: SubmitEvent) {
    submitHandler(event);
}