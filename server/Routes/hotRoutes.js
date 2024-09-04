const express = require('express');
const { PostHotBook, getHotDeals } = require('../Controllers/hotdealsCtrl');

const router = express.Router();

// Route for posting a new hot deal
router.post('/hotBook', PostHotBook);

// Route for fetching all hot deals
router.get('/hotDeals', getHotDeals);

module.exports = router;