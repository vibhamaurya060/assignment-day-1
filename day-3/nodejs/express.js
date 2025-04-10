const express=require("express");
const connection = require("./config/db");
const productRouter = require("./routes/product.route");
const port=process.env.PORT
const app=express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("This is API")
})

app.use("/products", productRouter);

app.listen(port, async()=>{
    try {
        await connection
        console.log("Mongodb database is connected")
    } catch (error) {
        console.log("Error while connecting databse", error)
    }
    console.log(`Server is running on port http://localhost:${port}`)
})