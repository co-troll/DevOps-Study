const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send("안녕");
    }, 2000)
})

app.listen(4000, () => {
    console.log("server on~");
})