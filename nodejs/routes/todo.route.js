const express=require("express");
const { addtodo, getAlltodos, updateTodo, deleteTodo } = require("../controllers/todo.controllers");

const todoRouter=express.Router();

todoRouter.post("/", addtodo);
todoRouter.get("/", getAlltodos),
todoRouter.patch("/", updateTodo),
todoRouter.delete("/",deleteTodo)

module.exports=todoRouter;