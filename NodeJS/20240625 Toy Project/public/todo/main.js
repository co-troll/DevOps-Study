const todoTabList = document.querySelectorAll(".todoContextMenu");

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
})

let date = new Date();
let today = `${date.getFullYear()}-${((date.getMonth() + 1) < 9)? "0" + (date.getMonth() + 1): date.getMonth + 1}-${(date.getDate() < 9)? "0" + date.getDate(): date.getDate()}`
popupDate.setAttribute("min", today);

todoTabList?.forEach((todoTab) => {
    todoTab.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        const target = e.target.parentNode.dataset.index;
        contextMenu.style.display = "block";
        contextMenu.style.top = e.clientY + "px";
        contextMenu.style.left = e.clientX + "px";

        contextMenu.dataset.index = target;
    })
})

const todoCheck = (index) => {
    location.href = `/todo/check/${index}`
}

const popupClick = (type) => {
    switch (type) {
        case "add": 
            popup.action = "/todo/add"
            popup.style.display = "block";
            popupTitle.innerHTML = "리스트 작성";
            popupInput.value = "";
            popupBtn.innerHTML = "작성";
            break;
        case "modify":
            popup.action = `/todo/modify/${contextMenu.dataset.index}`
            popup.style.display = "block";
            popupTitle.innerHTML = "리스트 수정";
            popupInput.value = todoTabList[contextMenu.dataset.index - 1].previousElementSibling.previousElementSibling.innerHTML;
            popupBtn.innerHTML = "수정";
            break;
        case "delete":
            location.href = `/todo/delete/${contextMenu.dataset.index}`;
            break;
    }
}

popupExit.onclick = () => {
    popup.style.display = "none";
}