const express = require("express");
const path = require("path");
const cookie = require("cookie-parser");
const userRouter = require("./router/user.router");
const boardRouter = require("./router/board.router");
const { sequelize } = require("./model/lib");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookie());
app.use("/", userRouter);
app.use("/board", boardRouter);

sequelize.sync({ force: false })

app.listen(3000, () => {
    console.log("server on~");
})