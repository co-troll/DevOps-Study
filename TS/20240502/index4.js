const contentBox = document.querySelector(".content-box");
const inputBtn = document.querySelector(".input-btn");
const contentArr = []

let no = 1;
const input = () => {
    const title = document.querySelector(".input-title").value
    const table = document.querySelector(".input-table").value

    contentArr.push({no, title, table});
    no++;
}

const content = (index) => {
    const contentItem = contentArr[index];
    const _div = document.createElement("div");
    const _no = document.createElement("span");
    const _title = document.createElement("span");
    const _table = document.createElement("span");
    const _drag = document.createElement("div");

    _div.classList.add("content");
    _no.classList.add("no");
    _title.classList.add("title");
    _table.classList.add("table");
    _drag.classList.add("drag");
    
    _drag.setAttribute("draggable", "true");

    _no.innerHTML = contentItem.no;
    _title.innerHTML = contentItem.title;
    _table.innerHTML = contentItem.table;

    _div.append(_no, _title, _table, _drag);
    return _div;
}

const init = () => {
    const _div = document.createElement("div");
    const _no = document.createElement("span");
    const _title = document.createElement("span");
    const _table = document.createElement("span");

    _div.classList.add("content");
    _no.classList.add("no", "init");
    _title.classList.add("title", "init");
    _table.classList.add("table", "init");

    _no.innerHTML = "번호";
    _title.innerHTML = "제목";
    _table.innerHTML = "내용";

    _div.append(_no, _title, _table);
    contentBox.append(_div);   
}

const render = () => {
    contentBox.innerHTML = "";
    init();
    for (let i = 0; i < contentArr.length; i++) {
        const row = content(i);
        contentBox.append(row);
    }
}

render();

inputBtn.onclick = () => {
    input();
    render();
}

let _target = null;

document.ondragstart = (e) => {
    if (e.target.classList.contains("drag")) {
        console.log(e.target.parentNode);
        _target = e.target.parentNode;
    }
}

document.ondragend = (e) => {
    if (e.target.classList.contains("drag")) {
        _target = null;
    }
}

document.ondragover = (e) => {
    if (e.target.classList.contains("drag") && _target !== null) {
        e.preventDefault();
    }
}

document.ondrop = (e) => {
    if (e.target.classList.contains("drag") && _target !== null) {
        let dropIndex, targetIndex;
        const dropNo = e.target.parentNode.firstChild.innerHTML;
        const targetNo = _target.firstChild.innerHTML;
        console.log(dropNo, targetNo);
        for (let i = 0; i < contentArr.length; i++) {
            const noValue = contentArr[i].no;
            if (noValue == dropNo)
                dropIndex = i;
            if (noValue == targetNo)
                targetIndex = i;
        }
        
        [contentArr[dropIndex], contentArr[targetIndex]] = [contentArr[targetIndex], contentArr[dropIndex]]
        render();
    }
}