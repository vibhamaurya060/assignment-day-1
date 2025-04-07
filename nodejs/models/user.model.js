const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true, enum:["User", "Admin"], default: "User"}
})

const userModel=mongoose.model("user", userSchema);

module.exports=userModel;
