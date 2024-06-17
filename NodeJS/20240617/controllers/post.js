const { posts } = require("../models");

// ViewPostAll : 내보낼 모듈에 ViewPostAll 키를 추가
exports.ViewPostAll = async () => {
    try {
        const data = await posts.getViewPostAll();
        return data;
    } 
    catch (error) {
        console.log("err: controller view post all");
    }
}

exports.ViewIndexPost = async (id) => {
    try {
        const data = await posts.getSelectIndexPost(id);
        return data;
    } 
    catch (error) {
        console.log("err: controller view index post");
    }
}

exports.SetPostContent = async (title, content) => {
    try {
        await posts.setPostContent(title, content);    
    } 
    catch (error) {
        console.log("err: controller set post content");
    }
}