const router = require('express').Router()
const cNotificacion = require('../controllers/notification')

router.post('/', cNotificacion.createNotification)
router.get('/:id', cNotificacion.getUserNotification)
router.get('/user/:idUser', cNotificacion.getAllNotification)
router.get('/unmark/:idUser', cNotificacion.getAllUnmarkedNotification)
router.put('/user/:idUser', cNotificacion.markNotificationsByUser)

module.exports = router