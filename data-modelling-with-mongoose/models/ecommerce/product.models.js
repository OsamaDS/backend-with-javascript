import mongoose from "moongose"
import { Category } from "./category.models"

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Category",
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User"
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)