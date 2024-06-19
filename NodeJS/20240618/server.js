const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
require("dotenv").config();

// process 객체에 env 키에 우리가 작성한 내용이 키와 값으로 할당된다.
console.log(process.env.KEY);
// .env 파잉은 오릴면 안되고 빌드를 해서 올리거나
// 환경변수 지정하는 페이지에서 값을 적어주면 된다.

const app = express();

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

function tokenMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) 
        return res.send("유효하지 않는 유저");
    req.user = token;
    next();
}

app.get("/login", (req, res) => {
    res.render("login");
})

const user =  {
    uid: "soon",
    password: "123"
}

app.get("/board", tokenMiddleware, (req, res) => {
    res.send(`board page ${req.user.name}`);
})

app.post("/login", (req, res) => {
    const { uid: user_id, upw: user_password } = req.body;
    if ((user_id == user.uid) && (user_password == user.password)) {
        const { KEY } = process.env;
        // json web token을 발급할 때 비밀 키를 넣어서 만들어 줄것
        // payload 값도 복원하고 검증을 하기 위해선 KEY값이 있어야 한다.
        let token = jwt.sign({ 
            type: "JWT",
            name: "soon"
        }, KEY, {
            // 토큰 유지시간
            expiresIn: "5m",
            // 토큰 발급자
            issuer: "발급자"
        });
        console.log(token);
        // verify 토큰을 검증하고 payload 값을 복호화
        const data = jwt.verify(token, KEY);
        console.log(data);
        // 단순 쿠키로 저장을 할것
        res.cookie("token", data, { httpOnly: true });
        res.redirect("/");
    }
    else {
        res.redirect("/");
    }
})

app.listen(3000, () => {
    console.log("server on~");
})