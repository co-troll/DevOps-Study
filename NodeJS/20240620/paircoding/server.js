const userRouter = require("./routers/user.router");
const express = require("express");
const path = require("path");
const cookie = require("cookie-parser");
const jwb = require("jsonwebtoken");
const { userInfo } = require("./controllers/user.controller");

const tokenMiddleware = (req, res, next) => {
    const token = req.cookies.user;
    console.log(token);
    if (!token)
        return res.redirect("/login"); 
    req.user = token;
    next()
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", userRouter);
app.use(cookie());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pages"));

app.get("/board", tokenMiddleware, async (req, res) => {
    const token = req.cookies.user;
    const { name: id } = jwb.verify(token, "abc123");
    const user = await userInfo(id);
    console.log(user);
    
    res.render("board", {user});
})

app.listen(3000, () => {
    console.log("server on");
})