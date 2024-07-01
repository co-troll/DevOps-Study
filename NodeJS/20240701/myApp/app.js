const express = require("express");
const { sequelize } = require("./model/lib");
const container = require("./container/DI");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize.sync({ force: false })

const userController = container.get("UserController");

app.get("/users/:id", (req, res) => userController.getUser(req, res));

app.post("/createUser", (req, res) => userController.signUp(req, res));

app.listen(3000, () => {
    console.log("server on~");
})

