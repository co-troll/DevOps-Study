const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mysqlConnect = mysql.createConnection({
    user: "root",
    password: "1111",
    database: "test",
    multipleStatements: true
});

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/list", (req, res) => {
    mysqlConnect.query("SELECT * FROM products", (err, data) => {
        console.log(data);
        res.render("list", { data });
    });
})

app.get("/insert", (req, res) => {
    res.render("insert");
})

app.get("/list/:name", (req, res) => {
    // name 키값 요청 url에 값이 value로 할당
    // list/1 ==> {name : 1}
    console.log(req.params);
})

app.post("/insert", (req, res) => {
    const { name, number } = req.body;
    const insertSql = "INSERT INTO products(name, number) VALUES(?, ?);";
    mysqlConnect.query(insertSql, [name, number], (err, data) => {
        res.redirect("/list");
    })
})


app.listen(3000, () => {
    console.log("server on~");
}) 