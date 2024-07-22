import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: True
    },
    addressLine1: {
        type: String,
        required: True
    },
    addressLine2: {
        type: String,
    },
    addressLine3: {
        type: String,
        
    },
    city: {
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required: true
    },
    specializedIn: [
        {
            type: String
        }
    ]
},{timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)