const mysql = require("./config");

const user = {
    initTable: async () => {
        try {
            await mysql.query("SELECT * FROM users");
            console.log("init");
        } catch (error) {
            await mysql.query("CREATE TABLE users(id VARCHAR(20) PRIMARY KEY, pw VARCHAR(128) NOT NULL, name VARCHAR(20))");
            console.log("create");
        }
    },
    userInfo: async (id) => {
        try {
            const [[info]] = await mysql.query("SELECT * FROM users WHERE id = ?", [id]);
            return info;
        } catch (error) {
            console.log("userInfo error");
        }
    },
    signup: async (id, pw, name) => {
        try {
            await mysql.query("INSERT INTO users VALUES(?, ?, ?)", [id, pw, name]);
            return true;
        } catch (error) {
            console.log(error);
            console.log("signup error")
        }
    },
    login: async (id, pw) => {
        try {
            const [[data]] = await mysql.query("SELECT * FROM users WHERE id = ? AND pw = ?", [id, pw]);
            return data;
        } catch (error) {
            console.log("login error");
        }
    }
}

user.initTable();

module.exports = user;