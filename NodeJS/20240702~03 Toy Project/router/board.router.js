const router = require("express").Router();
const container = require("../container/DI");
const BoardController = require("../controller/board.controller");

/** @type {BoardController} */
const boardController = container.get("BoardController");

const tokenMiddleware = (req, res, next) => {
    const token = req.cookies.user;
    console.log(token);
    if (!token || token.exp < (new Date().getTime() / 1000)) {
        res.clearCookie("user");
        return res.send(`<script>alert("로그인 유지시간 만료"); location.href = "/login"</script>`); 
    }
    req.user = token;
    next();
}

router.use(tokenMiddleware);

router.get("/", boardController.getBoardAll);

router.get("/write", (req, res) => {
    res.render("write");
})
router.post("/write", boardController.insertBoard);

router.get("/modify/:id", boardController.getBoardById);
router.post("/modify/:id", boardController.modifyBoard);

router.get("/delete/:id", boardController.deleteBoard);


module.exports = router;