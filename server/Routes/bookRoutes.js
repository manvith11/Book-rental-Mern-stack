const express = require('express')
const { PostBook, GetBooks } = require('../Controllers/bookCtrl')

const router = express.Router()

router.post('/postBook', PostBook)
router.get('/getbooks', GetBooks); 

module.exports = router