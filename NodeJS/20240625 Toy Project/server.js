const express = require("express");
const path = require("path");
const todoRouter = require("./routers/todo.router");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/todo", todoRouter);

app.listen(3000, () => {
    console.log("server on~");
})