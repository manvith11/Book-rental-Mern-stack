const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    condition:{
        type:String,
        required:true,
    },
    rentalPrice:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    genre: {
        type: [String],
        required: true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Book = mongoose.model('book', bookSchema)
module.exports = Book