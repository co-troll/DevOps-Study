// 버스 좌석 예약

const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const app = express();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/chating", (req, res) => {
    res.render("main2");
})


const server = app.listen(3000, () => {
    console.log("server on~");
})
/** @type {socketio.Server} **/
const io = socketio(server);

let users = [];

io.on("connection", (socket) => {
    // console.log(socket);
    users.push(socket.id);
    console.log(users);
    console.log("클라이언트 접속");

    socket.on("serverWhisper", ({ msg, id }) => {
        io.sockets.to(id).emit("whisper", msg);
    })

    socket.on("joinRoom", (room, name) => {
        socket.join(room);
        io.to(room).emit("joinRoom", room, name);  
    })

    socket.on("disconnect", (room, name) => {
        users = users.filter((value) => value != socket.id);
        console.log(users);
    })
})