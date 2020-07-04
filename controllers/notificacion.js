const mNotificacion = require('../models/notificacion')

async function createNotificacion(req, res) {
    try {
      const notificacion = mNotificacion.create({
        group: req.body.group,
      })
      const saveNotificacion = await (await notificacion).save()
      res.json(saveNotificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

  async function getUserNotificacion(req, res) {
    try {
      const notificacion = await mNotificacion.findOne({
        idUser: req.params.idUser,
        idPost: req.params.idPost
      })
      res.json(notificacion)
    } catch (e) {
      res.json({message: e})
    }
  }

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
  }