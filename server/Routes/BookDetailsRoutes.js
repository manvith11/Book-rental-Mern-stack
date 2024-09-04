const express = require('express');
const router = express.Router();
const bookDetailsController = require('../Controllers/bookDetailsCtrl');

// Route to get a single book by ID
router.get('/books/:id', bookDetailsController.getBookById);

module.exports = router;