const mInsignia = require('../models/insignia')
const mListInsig = require('../models/listInsignia')
const mNotification = require('../models/notification')
const validate = require('../config/validate')

async function addInsigniaByUser(req, res) {
  const insignia = new mListInsig({
    idInsignia: req.body.idInsignia,
    idUser: req.body.idUser
  })
  try {
    const saveInsignia = await insignia.save()
    res.json(saveInsignia)
  } catch (e) {
    res.json({message: e})
  }
}

async function createInsignia(req, res) {
  
  const urlIcon = validate.setUrlImg(req.file.path)
  const insignia = new mInsignia({
    title: req.body.title,
    description: req.body.description,
    icon: urlIcon,
    objective: req.body.objective,
    group: req.body.group
  })

  try {
    const saveInsignia = await insignia.save()
    res.json(saveInsignia)
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllInsignias(req, res) {
  try {
    const insignia = await mListInsig.find({
      idUser: req.params.id
    }).populate({
      path: 'idInsignia'
    })
    res.json(insignia)
  } catch (e) {
    res.json({message: e})
  }
}

async function updateInsigniaByUser(req, res) {
  try {  
    const list = await mListInsig.find({
      idUser: req.params.idUser
    }).populate({
      path: 'idInsignia'
    })
    for (let i = 0; i < list.length; i++) {
      if(list[i].idInsignia.group === req.body.group || list[i].idInsignia.group === "All") {
        
        let valProgres = list[i].progres + req.body.progres

        if(list[i].idInsignia.objective === valProgres && list[i].status === false ) {
          
          await mListInsig.updateOne({
            _id: list[i]._id
            },{
            $set: {
              progres: valProgres,
              status: true
            }
          })
          const name = ''
          const msg = validate.messageNotficaciton('Insignia', name)
          const notificacion = mNotification.create({
            group: 'Insignia',
            idUser: req.params.idUser,
            message: msg
          })
          await notificacion.save()
        } else if(list[i].idInsignia.objective > valProgres && list[i].status === false ) {
          
          await mListInsig.updateOne({
            _id: list[i]._id
          },{
            $set: {
              progres: valProgres
            }
          })
        }
      }
    }
    res.json({message: "Exito"})
  } catch (e) {
    res.json({message: e})
  }
}

//--------For tests
async function getAllInsig(req, res) {
  try {
    const insignia = await mInsignia.find()
    res.json(insignia)
  } catch (e) {
    res.json({message: e})
  }
}
async function deleteInsig(req, res) {
  try {
    const insignia = await mInsignia.deleteOne({
      _id: req.params.id
    })
    res.json(insignia)
  } catch (e) {
    res.json({message: e})
  }
}
//--------For tests

module.exports = {
  updateInsigniaByUser,
  addInsigniaByUser,
  getAllInsignias,
  createInsignia,
  deleteInsig,
  getAllInsig
}