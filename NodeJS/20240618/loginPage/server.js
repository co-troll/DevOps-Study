const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const mysql2 = require("mysql2/promise");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

const mysql = mysql2.createPool({
    user: "root",
    password: "1111",
    multipleStatements: true,
    database: "test"
})

const createHash = (pw) => {
    return new Promise((res, rej) => {
        bcrypt.hash(pw, 10, (err, data) => {
            if (err)
                rej("해싱 에러");
            res(data);
        })
    })
}

const compare = (pw, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(pw, hash, (err, same) => {
            if (err) 
                rej("비교 에러");
            res(same);
        })
    })
}

const KEY = "user123";
const tokenMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) 
        return res.send("유효하지 않은 유저");
    req.user = token;
    next();
}

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/join", (req, res) => {
    res.render("join");
})

app.post("/join", async (req, res) => {
    try {
        const { uid, uname, upw, upw_check } = req.body;
        const [[uid_check]] = await mysql.query("SELECT id FROM users WHERE id = ?;", [uid]);
        if (uid_check) 
            return res.send("존재하는 아이디");
        if (upw != upw_check) 
            return res.send("비밀번호가 틀립니다.");
        const pw = await createHash(upw);
        console.log(uid, pw, uname);
        await mysql.query("INSERT INTO users(id, pw, name) VALUES(?, ?, ?);", [uid, pw, uname]);
        res.redirect("/");
    }
    catch (err) {
        console.log(err);
    }
})


app.post("/login", async (req, res) => {
    const { uid, upw } = req.body;
    const [[user]] = await mysql.query("SELECT * FROM users WHERE id = ?;", [uid]);
    if (!user) 
        return res.send("아이디가 존재하지 않습니다.");
    try {
        if ((uid == user.id) && await compare(upw, user.pw)) {
            const token = jwt.sign({
                type: "JWT",
                name: user.name
            }, KEY, {
                expiresIn: "5m",
                issuer: user.name
            })

            const data = jwt.verify(token, KEY);
            res.cookie("token", data, { httpOnly: true });
            res.redirect("/board");
        }
        else {
            res.send("비밀번호가 틀립니다.");
        }
    }
    catch (err) {
        console.log(err);
        res.redirect("/");
    }
})

app.get("/board", tokenMiddleware, (req, res) => {
    const { name } = req.user;
    res.render("board", { name });
})

app.listen(3000, () => {
    console.log("server on~");
})