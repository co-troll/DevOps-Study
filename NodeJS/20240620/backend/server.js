const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: "http://192.168.0.81:3000",
    credentials: true,
}))

app.post("/login", (req, res) => {
    const { uid, upw } = req.body;
    console.log(uid, upw);
    res.send(`아이디 ${uid}, 비밀번호 ${upw}`);
})

app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    res.send(`아이디 ${uid}, 비밀번호 ${upw}`);
})

app.listen(8000, () => {
    console.log("server on~");
})