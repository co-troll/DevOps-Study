const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.post("/", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "main.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

router.post("/add", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "add.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

module.exports = router;