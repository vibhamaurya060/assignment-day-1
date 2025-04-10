const productModel = require("../models/products.model");

const addProducts=async(req, res)=>{
 try {
    const {name, category, rating}=req.body;
    if(!name || !category || !price || !rating){
      return res.json({msg: "fill all field are required"})
    }
    const newProduct=await productModel.create({name, category, price, rating});
    res.status(201).json({msg: "product added", product: newProduct})
 } catch (error) {
    res.status(500).json({msg: "Server error", error})
 }
}

const getProducts=async(req, res)=>{
    try {
        const {category, price, rating, sort, page=1, limit=10 }=req.query;
        const query={};
        if(category){
            query.category=category
        }
        if(price){
            query.price=perseFloat(price);
        }

        if(rating){
            query.rating=parseFloat(rating);
        }

        const sortData={};
        if(sort === 'price'){
            sortData.price=1;
        }
        else if(sort=== "rating"){
            sortData.rating=-1;
        }
        const products=await productModel.find(query)
        .sort(sortData)
        .skip((page -1)*limit)
        .limit(parseInt(limit));

        const total=await productModel.countDocuments(query);

        res.status(200).json({
            total,
            page: Math.ceil(total/limit),
            data: products,
        });
    } catch (error) {
        res.status(500).json({msg: "Server error", error})    
    }
}



module.exports={addProducts, getProducts};