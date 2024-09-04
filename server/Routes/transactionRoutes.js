const express = require('express')
const { Pay } = require('../Controllers/transactionCtrl')

const router = express.Router()

router.post('/transaction', Pay)

module.exports = router
