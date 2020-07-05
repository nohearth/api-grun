const mNotification = require('../models/notification')
const mUser = require('../models/user')
const validate = require('../config/validate')

  async function createNotification(req, res) {
    try {
    const user = await mUser.findOne({
      _id: req.body.idUserSecond
    })
    const name = `${user.firstName} ${user.lastName}`
    const msg = validate.messageNotficaciton(req.body.group, name)
    
    const notificacion = mNotification.create({
        group: req.body.group,
        idUser: req.body.idUser,
        idUserSecond: req.body.idUserSecond,
        message: msg
      })
      const saveNotificacion = await notificacion.save()
      res.json(saveNotificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  async function getUserNotification(req, res) {
    try {
      const notificacion = await mNotification.findOne({
        _id: req.params.id,
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  async function getAllNotification(req, res) {
    try {
      const notificacion = await mNotification.find({
        idUser: req.params.idUser
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }