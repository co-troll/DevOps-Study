const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "main.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

router.get("/list", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "list.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

router.get("/write", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "write.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

module.exports = router;