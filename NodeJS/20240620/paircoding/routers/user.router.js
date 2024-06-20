const { signup, login } = require("../controllers/user.controller");
const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("login");
})

router.get("/signup", (req, res) => {
    res.render("signup");
})

router.post("/login", async (req, res) => {
    try {
        const { id, pw } = req.body;
        const token = await login(id, pw);
        if (token)  
            return res.send("아이디나 비밀번호가 틀립니다.")
        res.cookie("user", token, {
             httpOnly: true
        });
        res.redirect("/board"); 
    } catch (error) {
        console.log("login post error");
    }

})

router.post("/signup", async (req, res) => {
    try {
        const { id, pw, name } = req.body;
        const check = await signup(id, pw, name);
        console.log(check);
        if (!check) 
            return res.send("존재하는 아이디");
        res.redirect("/login");
    } catch (error) {
        console.log("signup post error");
    }
})

module.exports = router;