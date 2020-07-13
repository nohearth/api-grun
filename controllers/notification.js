const mNotification = require('../models/notification')
const mUser = require('../models/user')
const validate = require('../config/validate')

  async function createNotification(req, res) {
    if(req.body.idUser !== req.body.idUserSecond) {
      try {
        const user = await mUser.findOne({
          _id: req.body.idUserSecond
        })
        const name = `${user.firstName} ${user.lastName}`
        const msg = validate.messageNotficaciton(req.body.group, name)
        const notificacion = mNotification.create({
          group: req.body.group,
          idUser: req.body.idUser,
          message: msg
        })
        const saveNotificacion = await notificacion.save()
        res.json(saveNotificacion)
      } catch (e) {
        res.json({message: e})
      }
    }
  }

  async function getUserNotification(req, res) {
    try {
      const notificacion = await mNotification.findOne({
        _id: req.params.id,
      }).populate({
        path: 'idUSer'
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
      }).populate({
        path: 'idUSer'
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  async function getAllUnmarkedNotification(req, res) {
    try {
      const notificacion = await mNotification.find({
        idUser: req.params.idUser,
        mark: false
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  async function markNotificationsByUser(req, res) {
    try {
      const notificacion = await mNotification.updateMany({
        idUser: req.params.idUser,
        mark: false
      }, {
        $set: {
          mark: true
        }
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  module.exports = {
    createNotification,
    getAllNotification,
    getUserNotification,
    markNotificationsByUser,
    getAllUnmarkedNotification
  }