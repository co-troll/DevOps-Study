const UserService = require("../service/user.service");
const jwt = require("jsonwebtoken");

class UserController {
    /** @param {UserService} userService  */
    constructor(userService) {
        this.userService = userService;
    }

    login = async (req, res) => {
        const { id, pw } = req.body;
        if (!id || !pw)
            return;
        const [ name, msg ] = await this.userService.login(id, pw, res);
        if (!name) 
            return res.send(`<script>alert("${msg}"); location.href = "/login"</script>`); 
        const token = jwt.sign({
            type: "JWT",
            name: {id, name}
        }, process.env.KEY, {
            expiresIn: "30m",
            issuer: "server"
        });
        const data = jwt.verify(token, process.env.KEY);
        res.cookie("user", data, { httpOnly: true });
        res.send(`<script>alert("${msg}"); location.href = "/board"</script>`); 
    }

    signUp = async (req, res) => {
        const { id, pw, name } = req.body;
        if (!id || !pw || !name)
            return;
        const [ check, msg ] = await this.userService.signUp(id, pw, name);
        if (!check) 
            return res.send(`<script>alert("${msg}"); location.href = "/signup"</script>`); 
        res.send(`<script>alert("${msg}"); location.href = "/login"</script>`);
    }

    getUserById = async (req, res) => {
        const { name } = req.cookies.user;
        const data = await this.userService.getUserById(name.id);
        res.render("mypage", { data });
    }

    modifyUser = async (req, res) => {
        const id = req.cookies.user.name.id;
        const { name, pw } = req.body;
        const { filename } = req.file || "";
        const [ check, msg ] = await this.userService.modifyUser(id, pw, name, filename);
        if (!check) 
            return res.send(`<script>alert("${msg}"); location.href = "/board"</script>`); 
        res.send(`<script>alert("${msg}"); location.href = "/board"</script>`);
    }
}

module.exports = UserController;