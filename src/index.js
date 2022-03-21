const express = require('express');

const userController = require("./controllers/user.controller");

const bookController = require("./controllers/book.controoler");

const commentController = require("./controllers/comment.controller");



const app = express();

app.use(express.json());

app.use("/user",userController);
app.use("/book",bookController);
app.use("/comment",commentController);


module.exports =app;