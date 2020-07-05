const router = require('express').Router()
const cNotificacion = require('../controllers/notification')

router.post('/user/:id', cNotificacion.createNotification)
module.exports = router