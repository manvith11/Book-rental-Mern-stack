const express = require('express');
const { PostNewBook, GetNewArrivals } = require('../Controllers/newCtrl');

const router = express.Router();

router.post('/newBook', PostNewBook);
router.get('/newArrivals', GetNewArrivals); // Add this line to handle fetching new arrivals

module.exports = router;