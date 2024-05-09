const boards = JSON.parse(localStorage.getItem("boards")); 
const boardContent = document.querySelector("#boardContent");

const userId = document.querySelector("#userId");
userId.innerHTML += localStorage.getItem("loginId"); 

if (boards === null) {
    localStorage.setItem("boards", JSON.stringify([]));
}

function writeBtn() {
    location.href = "../board/write.html";
}

function getContent(index) {
    const item = boards[index];
    const div = document.createElement("div");
    const num = document.createElement("span");
    const title = document.createElement("a");
    const author = document.createElement("span");
    const writeDate = document.createElement("span");
    const view = document.createElement("span");

    num.classList.add("num");
    title.classList.add("title");
    author.classList.add("author");
    writeDate.classList.add("date");
    view.classList.add("view");

    num.innerHTML = item.index + 1;
    title.innerHTML = item.title;
    author.innerHTML = item.author;
    writeDate.innerHTML = item.now;
    view.innerHTML = item.view;

    title.setAttribute("href", `../board/view.html?index=${item.index}`)

    div.append(num, title, author, writeDate, view);
    return div;
}

function drawing() {
    boardContent.innerHTML = "";

    for (let i = 0; i < boards.length; i++) {
        const row = getContent(i);
        boardContent.append(row);
    }       
}

drawing();

function logout() {
    location = "../board/login.html";
}



