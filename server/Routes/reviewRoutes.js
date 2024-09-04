const express = require('express')
const { PostReview } = require('../Controllers/reviewCtrl')


const router = express.Router()

router.post('/review', PostReview)

module.exports = router

