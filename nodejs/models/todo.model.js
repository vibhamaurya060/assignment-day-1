const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, default: "pending"}
})


const todoModel=mongoose.model("todo", todoSchema);

module.exports=todoModel;