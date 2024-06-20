// ejs 사용
const express = require("express");
const path = require("path");
const cookie = require("cookie-parser");
const { default: axios } = require("axios");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/signup", (req, res) => {
    res.render("signup");
})

app.post("/login", async (req, res) => {
    const { uid, upw } = req.body;
    const data = await axios.post("http://54.180.109.51:8000/login", { uid, upw });
    console.log(data);
    res.send(`아이디 ${uid}, 비밀번호 ${upw}`);
})

app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    res.send(`아이디 ${uid}, 비밀번호 ${upw}`);
})

app.listen(3000, () => {
    console.log("server on~");
})