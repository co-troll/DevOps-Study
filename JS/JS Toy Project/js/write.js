const writeFrm = document.querySelector("#writeFrm");

const loginId = localStorage.getItem("loginId");
const userId = document.querySelector("#userId");
userId.innerHTML += loginId;

function submitHandler(e) {
    e.preventDefault();
    
    let title = e.target.title.value;
    let content = e.target.content.value;

    if (title == "" || content == "") {
        alert("제목이나 내용이 비어있어요");
        return;
    }

    try {
        const boardList = JSON.parse(localStorage.getItem("boards"));
        let index = boardList.length;

        const obj = new Board(index, title, content, loginId);
        boardList.push(obj);

        let writeValue = JSON.stringify(boardList);
        localStorage.setItem("boards", writeValue);
        location.href = "../board/view.html?index=" + index;
    }
    catch(e) {
        alert(e.message);  
    }
}

class Board {
    constructor(index, title, content, author) {
        this.index = index;
        this.title = title;
        this.content = content;
        this.author = author;
        this.now = writeDate();
        this.view = 0;
        this.reply = [];
    }
}

function writeDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = (month > 9 ? "" : "0") + month;
    day = (day > 9 ? "" : "0") + day;
    
    let arr = [year, month, day];

    return arr.join();
}

writeFrm.onsubmit = function (e) {
    submitHandler(e);
}

function back() {
    location = "../board/list.html";
}