const express = require('express');
const { PostBestBook, GetBestBooks } = require('../Controllers/bestCtrl');
const router = express.Router();

// Route to post a new book
router.post('/bestbooks', PostBestBook);

// Route to get all books
router.get('/bestSellerbooks', GetBestBooks);

module.exports = router;