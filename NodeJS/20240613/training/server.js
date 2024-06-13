const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "board"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "1111",
    database: "test",
    multipleStatements: true
})

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/list", (req, res) => {
    mysqlConnect.query("SELECT no, title, views FROM board;", (err, data) => {
        console.log(data);
        res.render("list", { data });
    })
})

app.get("/write", (req, res) => {
    res.render("write");
})

app.post("/write", (req, res) => {
    const { title, content } = req.body;
    mysqlConnect.query("INSERT INTO board(title, content) VALUES(?, ?)", [ title, content ], (err, data) => {
        res.redirect("/list");
    })
})

app.get("/view/:no", (req, res) => {
    mysqlConnect.query("SELECT no, title, content FROM board WHERE no = ?;", [ req.params.no ], (err, data) => {
        console.log(data);
        if (data) 
            mysqlConnect.query("UPDATE board SET views:=views + 1 WHERE no = ?;", [ req.params.no ]);
        const { no, title, content } = data[0];
        res.render("view", { no, title, content });
    })
})

app.get("/modify/:no", (req, res) => {
    mysqlConnect.query("SELECT no, title, content FROM board WHERE no = ?;", [ req.params.no ], (err, data) => {
        console.log(data);
        const { no, title, content } = data[0];
        res.render("modify", { no, title, content });
    })
})

app.post("/modify/:no", (req, res) => {
    const { title, content } = req.body;
    mysqlConnect.query("UPDATE board SET title = ?, content = ? WHERE no = ?;", [ title, content, req.params.no ], (err, data) => {
        res.redirect("/list");
    })
})

app.get("/delete/:no", (req, res) => {
    mysqlConnect.query("DELETE FROM board WHERE no = ?; SET @CNT = 0; UPDATE board SET no = @CNT:=@CNT+1; ALTER TABLE board AUTO_INCREMENT = 1;", [ req.params.no ], (err, data) => {
        res.redirect("/list");
    })
})

app.listen(3000, () => {
    console.log("server on~");
})