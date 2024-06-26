const mysql = require("./config");

const todo = {
    initTable: async () => {
        try {
            await mysql.query("SELECT * FROM todo;");
            console.log("init TABLE");
        } catch (error) {
            console.log("create TABLE");
            await mysql.query(`CREATE TABLE todo(
                id INT PRIMARY KEY AUTO_INCREMENT,
                img VARCHAR(128),
                content VARCHAR(50),
                dday DATE NOT NULL,
                checked BOOLEAN DEFAULT FALSE
            )`);
        }
    },
    getTODOAll: async () => {
        try {
            const [data] = await mysql.query("SELECT * FROM todo;");
            console.log(data);
            console.log("get TODO All")
            return data;
        } catch (error) {
            console.log("model: todo getTODOAll error");
            console.log(error);
        }
    },
    getTODO: async (id) => {
        try {
            const [[data]] = await mysql.query("SELECT * FROM todo WHERE id = ?;", [id]);
            console.log("get TODO");
            console.log(data);
            return data;
        } catch (error) {
            console.log("model: todo getTODO error");
            console.log(error);
        }
    },
    insertTODO: async (img, content, dday) => {
        try {
            await mysql.query("INSERT INTO todo(img, content, dday) VALUES(?, ?, ?);", [img, content, dday]);
            console.log("insert TODO");
        } catch (error) {
            console.log("model: todo insertTODO error");
            console.log(error);
        }
    },
    modifyTODO: async (id, img, content, dday) => {
        try {
            await mysql.query("UPDATE todo SET img = ?, content = ?, dday = ? WHERE id = ?;", [img, content, dday, id]);
            console.log("modify TODO");
        } catch (error) {
            console.log("model: todo modifyTODO error");
            console.log(error);
        }
    },
    deleteTODO: async (id) => {
        try {
            await mysql.query("DELETE FROM todo WHERE id = ?; ALTER TABLE todo AUTO_INCREMENT = 1; SET @COUNT = 0; UPDATE todo SET id = @COUNT:=@COUNT+1;", [id]);
            console.log("delte TODO");
        } catch (error) {
            console.log("model: deleteTODO error");
            console.log(error);
        }
    },
    checkTODO: async (id, check) => {
        try {
            await mysql.query("UPDATE todo SET checked = ? WHERE id = ?;", [check, id]);
            console.log("check TODO");
        } catch (error) {
            console.log("model: todo checkTODO error");
            console.log(error);
        }
    }
}

todo.initTable();

module.exports = todo;