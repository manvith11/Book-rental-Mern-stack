const mongoose = require('mongoose')
const transactionSchema = new mongoose.Schema({
    rental: {
        type:String,
        required:true,
    },
    amount: {
        type:Number,
        required:true,
    },
    status: {
        type:String, 
        enum: ['pending', 'completed', 'failed'], 
        default: 'pending',
    },
    transactionDate:{
        type:Date,
        default:Date.now,
    }
})

const Transaction = mongoose.model('transaction', transactionSchema)
module.exports = Transaction