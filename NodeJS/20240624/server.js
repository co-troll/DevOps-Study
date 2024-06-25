// 예약 페이지 말들어보기
const express = require("express");
const path = require("path");
const socket = require("socket.io");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


const server = app.listen(3000, () => {
    console.log("server on~");
})

// 빈 좌석은 1
// 좌석의 여백은 0
let seat01 = [
    [1,1,0,1,1,0,1,1],
    [1,1,0,1,1,0,1,1],
    [0,0,0,0,0,0,0,0],
    [1,1,1,0,0,1,1,1],
    [1,1,1,0,0,1,1,1],
    [1,1,1,1,1,1,1,1],
];
let seat02 = Array.from(Array(6), () => Array(8).fill(1).map(v => v = Math.floor(Math.random() * 2)));
let seat03 = Array(6).fill(Array(8).fill(1));

let seats = [seat01, seat02, seat03];

app.get("/seats/:id", (req, res) => {
    const { id } = req.params;
    // 어떤 버스의 좌석에 앉을건지
    res.send(seats[id]);
})

app.get("/", (req, res) => {
    res.render("main");
})

/** @type {socket.Server} */
const io = socket(server);

io.on("connection", (socket) => {
    console.log("클라이언트 접속");
    socket.on("reverse", (data) => {
        console.log("예약됐어");
        const { selectIndex: { y, x }, index } = data;
        const selectSeats = seats[index];
        selectSeats[y][x] = 2;
        socket.emit("reRender", data);
    })
})
