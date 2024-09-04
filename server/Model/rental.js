const mongoose = require('mongoose')

const rentalSchema = new mongoose.Schema({
    book:{
        type:String,
        required:true,
    },
    renter:{
        type:String,
    },
    owner:{
        type:String,
        required:true,
    },
    rentalStartDate:{
        type:Date,
        required:true,
    },
    rentalEndDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String, 
        enum: ['requested', 'approved', 'returned'], 
        default: 'requested'
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Rental = mongoose.model('rental', rentalSchema)
module.exports = Rental