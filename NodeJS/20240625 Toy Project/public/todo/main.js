const todoTabList = document.querySelectorAll(".todoContextMenu");

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
})

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