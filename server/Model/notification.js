const mongoose = require('mongoose')

const notifySchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    read:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Notify = mongoose.model('notification', notifySchema)
module.exports = Notify