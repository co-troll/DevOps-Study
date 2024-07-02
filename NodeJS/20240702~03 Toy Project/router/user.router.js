const router = require("express").Router();
const container = require("../container/DI");
const UserController = require("../controller/user.controller");
const upload = require("../model/lib/upload");

/** @type {UserController} */
const userController = container.get("UserController");

router.get("/signup", (req, res) => {
    res.render("signup");
})
router.post("/signup", userController.signUp);

router.get("/login", (req, res) => {
    res.render("login");
})
router.post("/login", userController.login);

router.get("/mypage", userController.getUserById);
router.post("/mypage", upload.single("image"), userController.modifyUser);

module.exports = router;