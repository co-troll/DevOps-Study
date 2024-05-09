const commentFrm = document.querySelector("#commentFrm");
const commentList = document.querySelector("#comment_list");
const state = [];

class Comment {
    constructor(content) {
        this.uid = "soon";
        this.content = content;
        // 수정중인 게시글인지
        this.updated = false;
        this.now = new Date();
    }

    getToday(text) {
        const date = this.now;
        let m = date.getMonth() + 1;
        let d = date.getDate();
        
        return [
            date.getFullYear(), 
            (m > 9 ? "" : "0") + m, 
            (d > 9 ? "" : "0") + d,
        ].join(text);
    }
}

const setTotalRecord = () => {
    const span = document.querySelector("h4>span");
    span.innerHTML = state.length;
}

function addState(value) {
    try {
        const instance = new Comment(value);
        state.push(instance);
        setTotalRecord();
    } catch(e) {
        alert(e.message);
    }
}

function createRow(index) {
    // {uid, content, updated, now}
    const item = state[index];
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li");
    const commentContent = getContentBox(item.updated, item.content);
    const commentDate = document.createElement("li");

    commentRow.classList.add("comment-row");
    commentRow.dataset.index = index;


    commentId.classList.add("comment-id");
    commentId.innerHTML = item.uid;

    commentDate.classList.add("comment-date");
    commentDate.innerHTML = item.getToday("-");

    commentRow.append(commentId, commentContent, commentDate);
    return commentRow;
}

const getContentBox = (flag, content) => !flag ? createContentWrap(content) : createUpdateBox(content);

function createContentWrap (content) {
    const commentContent = document.createElement("li");
    const comment = document.createElement("span");
    const commentDelete = document.createElement("span");

    comment.classList.add("comment-update-btn");
    comment.innerHTML = content;

    commentDelete.classList.add("comment-delete-btn");
    commentDelete.innerHTML = "❌";

    commentContent.classList.add("comment-content");
    commentContent.append(comment, commentDelete);
    return commentContent;
}

function drawing() {
    commentList.innerHTML = "";

    for (let i = state.length - 1; i >= 0; i--) {
        const row = createRow(i);
        commentList.append(row);
    }
}

function submitHandler(e) {
    e.preventDefault();
    // 객체의 구조 분해 할당
    const { content } = e.target; // e.target 객체 안에는 content가 name으로 작성한 input
    const { value } = content; // input에 입력된 값

    addState(value);
    drawing();
}

function createUpdateBox(content) {
    const span = document.createElement("span");
    const commentUpdateInput = document.createElement("input");
    const commentDeleteBtn = document.createElement("span");

    commentUpdateInput.classList.add("comment-update-input");
    commentUpdateInput.onclick = function (e) {

    }
    // onkeyup : 키를 눌렀다가 때면 발생하는 이벤트
    commentUpdateInput.onkeyup = function (e) {
        // 엔터를 누르면 함수의 기능을 동작하게
        console.log(e.keyCode);
        if(e.keyCode !== 13) return;
        try {
            const { index } = e.target.parentNode.parentNode.parentNode.dataset;
            const { value } = e.target;
            state[index].content = value;
            state[index].updated = !state[index].updated;

            drawing();
        } catch (e) {
            alert(e.message);
        }
    }
    commentUpdateInput.value = content;

    commentDeleteBtn.classList.add("comment-delete-btn");
    commentDeleteBtn.innerHTML = "❌";
    span.append(commentUpdateInput);
    return { span, commentDeleteBtn }; // 키값 안에 변수의 값이 값으로 됨 축약형
}

function clickHandler(e) {
    const contentNode = e.target.parentNode;
    const { index } = contentNode.parentNode.dataset;
    if (e.target.className === "comment-update-btn") {
        state[index].updated = !state[index].updated;
        const content = e.target.innerHTML;
        const { span, commentDeleteBtn } = getContentBox(state[index].updated, content);
        contentNode.append(span, commentDeleteBtn);
    } 
    else if (e.target.className === "comment-delete-btn") {
        const flag = confirm("글을 삭제할거야?");
        if (!flag) return;
        state.splice(index, 1);
        setTotalRecord();
        drawing();
    }
}

commentList.onclick = function (e) {
    clickHandler(e);
}

commentFrm.onsubmit = function (e) {
    submitHandler(e);
}

