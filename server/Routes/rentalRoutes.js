const express = require('express')
const { RentBook } = require('../Controllers/rentalCtrl')

const router = express.Router()

router.post('/rentBook',RentBook)

module.exports = router