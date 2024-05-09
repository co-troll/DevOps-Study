const inputForm = document.querySelector("#inputForm");
const outputLine = document.querySelector("#output_line");

const today = new Date().toISOString().split("T")[0];
document.querySelector(".finish").setAttribute("min", today);

// sessionStorage.clear();
sessionStorage.removeItem(sessionStorage.key(0));
let key;
key = sessionStorage.length;
if (key == undefined) {
    key = 0;
}


let arr = [];

function DDayCal() {
    let inputDate = new Date(document.querySelector(".finish").value);
    let nowDate = new Date(today);
    return `D-${(inputDate - nowDate) / 1000 / 60 / 60 / 24}`;
}

function setSession() {
    let input = document.querySelector(".todo-input").value;
    let dday = DDayCal();
    let obj = {input, dday}
    sessionStorage.setItem(`key${key++}`, JSON.stringify(obj));
    drawing();
}

function getSession() {
    arr = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let obj = sessionStorage.getItem(key);
        arr.push(JSON.parse(obj));
        arr[i].key = key;
        console.log(arr[i]);
    }
    arr.sort((a,b) => a.input.localeCompare(b.input));
    console.log(arr);
}

function createRow(index) {
    const item = arr[index];
    const div = document.createElement("div");
    const todo = document.createElement("span");
    const dday = document.createElement("span");
    const check = document.createElement("input");

    check.setAttribute("type", "button");
    check.setAttribute("value", "삭제");
    check.setAttribute("onclick", `deleteRow(${index})`);
    check.classList.add("del-btn");

    div.dataset.index = index;

    div.classList.add("output-box");

    todo.classList.add("todo");
    todo.innerHTML = item.input;

    dday.classList.add("dday");
    dday.innerHTML = item.dday;

    div.append(todo, dday, check);
    return div;
}

function drawing() {
    outputLine.innerHTML = "";

    getSession();
    for (let i = 0; i < arr.length; i++) {
        const row = createRow(i);
        outputLine.append(row);
    }       
}

function deleteRow(index) {
    index = arr[index].key;
    sessionStorage.removeItem(index);
    drawing();
}

drawing();