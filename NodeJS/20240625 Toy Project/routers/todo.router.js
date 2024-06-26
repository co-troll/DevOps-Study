const { getTODOAll, insertTODO, modifyTODO, deleteTODO, checkTODO, upload } = require("../controllers/todo.controller");
const router = require("express").Router();

router.get("/", async (req, res) => {
    const data = await getTODOAll();
    console.log(data);
    res.render("todo/main", {data});
})

router.post("/add", upload.single("image"), async (req, res) => {
    const { content, dday } = req.body;
    const { filename } = req.file;
    await insertTODO(content, filename, dday);
    res.redirect("/todo");
})

router.post("/modify/:index", upload.single("image"), async (req, res) => {
    const { index } = req.params;
    const { content, dday } = req.body;
    const { filename } = req.file || "";
    await modifyTODO(index, content, filename, dday);
    res.redirect("/todo");
})

router.get("/delete/:index", async (req, res) => {
    const { index } = req.params;
    await deleteTODO(index);
    res.redirect("/todo");
})

router.get("/check/:index", async (req, res) => {
    const { index } = req.params;
    await checkTODO(index);
    res.redirect("/todo");
})

module.exports = router;
