const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    book:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Review = mongoose.model('review', reviewSchema)
module.exports = Review