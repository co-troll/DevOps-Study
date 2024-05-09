const boards = JSON.parse(localStorage.getItem("boards"));
const viewForm = document.querySelector("#viewFrm");

const loginId = localStorage.getItem("loginId")
const userId = document.querySelector("#userId");
userId.innerHTML += loginId;

const idx = location.search;
const index = idx.split("=")[1];
const board = boards[index];
function getContent() {
    const title = document.querySelector(".title");
    const content = document.querySelector(".content");

    title.innerHTML += board.title;
    content.innerHTML += board.content;
}

const beforeURL = document.referrer;
const beforeFile = beforeURL.split("/").pop();
function viewCount(beforeFile) {
    if (beforeFile != "list.html") return;
    board.view++;
    localStorage.setItem("boards", JSON.stringify(boards));
}

getContent();
viewCount(beforeFile);

function modifyBtn() {
    location = "../board/modify.html" + idx;
}

function deleteBtn() {
    const flag = confirm("글을 삭제할거야?");
    if (!flag) return;

    boards.splice(index, 1);

    for (let i = 0; i < boards.length; i++) {
        boards[i].index = i;
    }

    localStorage.setItem("boards", JSON.stringify(boards));
    location = "../board/list.html";

}

function submitHandler(e) {
    e.preventDefault();

    const reply = e.target.reply.value;

    if (reply == "") {
        alert("댓글은 입력해주세요");
        return;
    }

    board.reply.push({loginId, reply});
    localStorage.setItem("boards", JSON.stringify(boards));
    drawing();
}

const replyBox = document.querySelector("#replyBox");

function getReply(index) {
    const div = document.createElement("div");
    const loginId = document.createElement("span");
    const reply = document.createElement("span");

    loginId.classList.add("loginId");
    reply.classList.add("reply");

    loginId.innerHTML = board.reply[index].loginId;
    reply.innerHTML = board.reply[index].reply;

    div.append(loginId, reply);
    return div;
}

function drawing() {
    replyBox.innerHTML = "";

    for (let i = 0; i < board.reply.length; i++) {
        const row = getReply(i);
        replyBox.append(row);
    }       
}

drawing();


const replyFrm = document.querySelector("#replyFrm");
replyFrm.onsubmit = function (e) {
    submitHandler(e);
}

function back() {
    location = "../board/list.html";
}