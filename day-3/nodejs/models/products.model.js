const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    price: Number,
    rating: Number,
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;