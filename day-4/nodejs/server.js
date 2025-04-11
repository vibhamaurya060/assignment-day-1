const express=require("express");
const connection = require("./config/db");
const todoRouter = require("./routes/todo.route");
const logger = require("./middlewares/logger.middleware");
const PORT=8080;
const app=express();
app.use(express.json());

app.use(logger);

app.get('/', (req, res)=>{
    res.send("This is an api")
})

app.use('/todos', todoRouter);

app.listen(PORT, async()=>{
    try {
        await connection;
        console.log("Mongodb database is connected")
    } catch (error) {
        console.log("Error while connecting database")
    }
    console.log(`Server is running on port http://localhost:${PORT}`);
})