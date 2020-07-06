const mUser = require('../models/user')
const mTools = require('../models/tools')
const validate = require('../config/validate')

async function createUser(req, res) {
  
  const {value, error} = validate.validateSignUp(req.body)
  if (error) {
    res.status(400).json({message: error})
  }
  const valUser = await mUser.findOne({
    email: value.email
  })
  if (valUser) {
    return res.status(401).json({message: 'Error, ya existe el correo'})
  }

  const user = new mUser({
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    password: value.password
  })

  try {
    const saveUser = await user.save()
    //const token = await user.generateToken()
    res.status(200).json(saveUser)
  } catch (e) {
    res.status(402).json({message: e})
  }
}

async function loginUser(req, res) {
  try {
    const valUser = await mUser.findOne({
      email: req.body.email
    })
    if (!valUser) {
      return res.status(401).json({message: 'Error, el usuario no existe'})
    }
    const valPass = await validate.comparePassword(req.body.password, valUser.password)
    if(!valPass) {
      return res.status(402).json({message: 'Error, contraseña invalida'})
    }
    const token = await valUser.generateToken()
    res.status(200).json(token)
  } catch (e) {
    res.status(400).json({message: e})
  }
}

async function getUserDetails(req, res) {
  await res.status(200).json(req.userData)
}

async function getAllUser(req, res) {
  try {
      const user = await mUser.find()
      res.status(200).json(user)
  } catch (e) {
      res.status(400).json({message: e})
  }    
}
async function getOneUser(req, res) {
  try {
    const user = await mUser.findOne({_id: req.params.id})
    res.json(user)
  } catch (e) {
    res.json({message: e})
  }  
}

async function updateUser(req, res) {
  const user = await mUser.findOne({_id: req.params.id})
  const data = validate.validateUpdate(req.body, req.file, user)
  try {
    const user = await mUser.updateOne({
      email: data.email
    },{
      $set: data
    })
    res.json(user)
  } catch (e) {
    res.json({message: e})
  } 
}

async function deleteUser(req, res) {
  try {
      const user = await mUser.deleteOne({ _id: req.params.id })
      res.json(user)
  } catch (e) {
      res.json({message: e})
  }    
}
//==============Solo pruebas==========

async function dropTokens(req, res) {
  try {
    const user = await mUser.updateOne({
      _id: req.params.id
    },{
      $set: {
        tokens: []
      }
    })
    res.json(user)
  } catch (e) {
    res.json({message: e})
  }
}

async function createTool(req, res) {
  const image = Buffer.from(req.file.path)
  console.log  (req.file)

  try {
    const saveTool = await mTools.updateOne({
      _id: req.params.id
    }, {
      $set: {
        id: req.body.id,
        imageProfile: image
      }
    })
    res.json(saveTool)
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = {
  createUser,
  loginUser,
  getUserDetails,
  getAllUser,
  deleteUser,
  getOneUser,
  updateUser,
  createTool,
  dropTokens
}