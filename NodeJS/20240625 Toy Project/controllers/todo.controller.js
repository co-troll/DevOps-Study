const { todo, upload } = require("../models");

exports.getTODOAll = async () => {
    try {
        return await todo.getTODOAll();
    } catch (error) {
        console.log("controller: todo getTODOAll error");
    }
}

exports.insertTODO = async (content, img, dday) => {
    try {
        await todo.insertTODO(img, content, dday);
    } catch (error) {
        console.log("controller: todo insertTODO error");
    }
}

exports.modifyTODO = async (id, content, img, dday) => {
    try {
        let image = img;
        let date = dday;
        const data = await todo.getTODO(id);
        if (!img) 
            image = data.img;
        if (!dday)
            date = data.dday;
        await todo.modifyTODO(id, image, content, date);
    } catch (error) {
        console.log("controller: todo modifyTODO error");
        
    }
}

exports.deleteTODO = async (id) => {
    try {
        await todo.deleteTODO(id);
    } catch (error) {
        console.log("controller: todo deleteTODO error");
    }
}

exports.upload = upload;