const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const title = "게시판";
const boardList = [
    {no: 0, title: "제목1", author: "ㅁㅁㅁ", views: "0"},
    {no: 1, title: "제목2", author: "ㄱㄱㄱ", views: "3"},
    {no: 2, title: "제목3", author: "ㅇㅇㅇ", views: "12"},
    {no: 3, title: "제목4", author: "ㅊㅊㅊ", views: "23"},
    {no: 4, title: "제목5", author: "ㅅㅅㅅ", views: "2"},
    {no: 5, title: "제목6", author: "ㅂㅂㅂ", views: "48"},
    {no: 6, title: "제목7", author: "ㅌㅌㅌ", views: "17"},
    {no: 7, title: "제목8", author: "ㅎㅎㅎ", views: "50"},
    {no: 8, title: "제목9", author: "ㄷㄷㄷ", views: "5"},
    {no: 9, title: "제목10", author: "ㄴㄴㄴ", views: "18"},
]
app.get("/", (req, res) => {
    res.render("index", { title, boardList });
})

app.listen(3000, () => {
    console.log("server on~");
})