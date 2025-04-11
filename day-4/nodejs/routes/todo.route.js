const express=require("express");
const todoModel = require("../models/todo.model");
const todoRouter=express.Router();

todoRouter.post=('/add-todo', async(req, res)=>{
    try {
        const {title, dice, status}=req.body;
        if(!title || !dice || !status) return res.send("all field are required");

        const newTodo=await todoModel.create({title, dice, status});
        res.status(201).json({newTodo});
    } catch (error) {
        res.status(500).json("Server error");
    }
})

todoRouter.get('/', async(req, res)=>{
    try {
        const todos=await todoModel.find();
        res.status(200).json({todos: todos})
    } catch (error) {
        res.status(500).json({msg: "server error"})
    }
})

module.exports=todoRouter;