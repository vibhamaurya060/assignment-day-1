const express=require("express");
const { addProducts, getProducts } = require("../controllers/product.controller");

const productRouter=express.Router();

productRouter.post("/add-product", addProducts);
productRouter.get("/", getProducts);

module.exports=productRouter;