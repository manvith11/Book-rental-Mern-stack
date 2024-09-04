const express = require('express');
const router = express.Router();
const paymentController = require('../Controllers/paymentCtrl');

// Route for initiating a payment
router.post('/payment', paymentController.processPayment);

module.exports = router;