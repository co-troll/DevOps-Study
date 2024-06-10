const express = require('express');
const userRouter = require('./routers/user.router');
const boardRouter = require('./routers/board.router');
const cartRouter = require('./routers/cart.router');
const app = express();

app.use("/user", userRouter);
app.use("/board", boardRouter);
app.use("/cart", cartRouter);

app.listen(3000, () => {
    console.log("server on~");
})