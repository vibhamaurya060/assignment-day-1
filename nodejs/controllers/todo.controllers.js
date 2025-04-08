const todoModel = require("../models/todo.model")

const addtodo = async (req, res) => {
    try {
        const todo = await todoModel.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAlltodos = async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ meg: "Internal server error" })
    }
}


const updateTodo = async (req, res) => {
    try {
        const updatedtodo = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedtodo);
    } catch (error) {
        res.status(500).json({ meg: "Internal server error" })
    }
}

const deleteTodo = async (req, res) => {
    try {
        await todoModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "Todo deleted." })
    } catch (error) {
        res.status(500).json({ meg: "Internal server error" })
    }
}

module.exports={addtodo, getAlltodos, updateTodo, deleteTodo};