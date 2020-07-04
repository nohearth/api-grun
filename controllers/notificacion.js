const mNotificacion = require('../models/notificacion')
const mUser = require('../models/user')
const validate = require('../config/validate')

  async function createNotificacion(req, res) {
    try {
    const user = await mUser.findOne({
      _id: req.body.idUserSecond
    })
    const name = `${user.firstName} ${user.lastName}`
    const msg = validate.messageNotficaciton(req.body.group, name)
    
    const notificacion = mNotificacion.create({
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

  async function getUserNotificacion(req, res) {
    try {
      const notificacion = await mNotificacion.findOne({
        _id: req.params.id,
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  /*
  async function addNotificacionByUser(req, res) {
    const notificacion = new mListInsig({
      idNotificacion: req.body.idNotificacion,
      idUser: req.body.idUser,
      idPost: req.body.idPost
    })
    try {
      const saveNotificacion = await notificacion.save()
      res.json(saveNotificacion)
    } catch (e) {
      res.json({message: e})
    }
  }*/