const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("내가 보임? 내가 안보임");
})

app.listen(3000, () => {
    console.log("server on~");
})