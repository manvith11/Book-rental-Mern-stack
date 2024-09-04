const express = require('express')
const { submitFeedback } = require('../Controllers/contactCtrl')


const router = express.Router()

router.post('/submitFeedback', submitFeedback)

module.exports = router;

