const express = require("express");
const uploadRouter = require("./routers/upload.router");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: "http://127.0.0.1:5500"
}))

app.use("/img", express.static(path.join(__dirname, "upload")));

app.use("/upload", uploadRouter);

app.listen(3000, () => {
    console.log("server on~");
})