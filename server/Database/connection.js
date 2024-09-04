const mongoose = require('mongoose')

function RunServer() {
    try {
        mongoose.connect('mongodb://localhost:27017/bookRent')
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = RunServer




