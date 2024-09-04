const express = require('express');
const { MostPopPostBook, GetPopularBooks } = require('../Controllers/mostpopCtrl');

const router = express.Router();

router.post('/mostpopbook', MostPopPostBook);
router.get('/mostpopbooks', GetPopularBooks); // New route for fetching popular books

module.exports = router;