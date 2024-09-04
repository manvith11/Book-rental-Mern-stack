const express = require('express')
const { Notifyuser } = require('../Controllers/notificationCtrl')


const router = express.Router()

router.post('/notify', Notifyuser)

module.exports = router