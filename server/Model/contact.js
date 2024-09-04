const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    feedback:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact