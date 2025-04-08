const express = require("express");
const connection = require("./config/db");
const fileRouter = require("./routes/file.route");
const todoRouter = require("./routes/todo.route");
const userRouter = require("./routes/user.route");
const app = express();
const port = process.env.PORT || 9090;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is api")
})

app.use("/todos", todoRouter)
app.use("/users", userRouter)
app.use('/files', fileRouter)

app.listen(port, async () => {
    try {
        await connection
        console.log("Mongodb database is connected")
    } catch (error) {
        console.log("Error while connecting mongodb Database")
    }
    console.log(`Server is running on port ${port}`)
})

