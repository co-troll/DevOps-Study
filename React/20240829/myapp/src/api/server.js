const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let count = 10;
let todoList = [{ id: 1, name: "soon" }]

app.get('/count', (req, res) => {
    res.send(count.toString());
})

app.post('/count', (req, res) => {
    const { incrementCount } = req.body;
    count += incrementCount;
    res.send(count.toString());
})

app.get('/todo', (req, res) => {
    res.send(todoList);
})

app.post('/todo', (req, res) => {
    const { id, name } = req.body;
    todoList.push({ id, name });
    res.send(todoList);
})

app.listen(4000, () => {
    console.log("server on~");
})