const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get("/login", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "login.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

router.get("/signup", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "signup.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

router.get("/info", (req, res) => {
    fs.readFile(path.join(__dirname, "..", "views/user", "info.html"), "utf8", (err, data) => {
        if (err) return;
        res.send(data);
    });
});

module.exports = router;