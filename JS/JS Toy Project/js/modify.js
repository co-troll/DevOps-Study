const boards = JSON.parse(localStorage.getItem("boards"));
const modifyFrm = document.querySelector("#modifyFrm");

const userId = document.querySelector("#userId");
userId.innerHTML += localStorage.getItem("loginId");

const idx = location.search;
const index = idx.split("=")[1];
const board = boards[index];
function submitHandler(e) {
    e.preventDefault();

    let title = e.target.title.value;
    let content = e.target.content.value;

    if (title == "" || content == "") {
        alert("제목이나 내용이 비어있어요");
        return;
    }

    try {
        board.title = title;
        board.content = content;
        
        localStorage.setItem("boards", JSON.stringify(boards));
        location.href = "../board/view.html?index=" + index;
    }
    catch(e) {
        alert(e.message);  
    }
}

modifyFrm.onsubmit = function (e) {
    submitHandler(e);
}

function back() {
    location = "../board/list.html";
}