const router = require('express').Router()
const cRol = require('../controllers/rol')
const Rol = require('../models/rol')

router.post('/', cRol.createRol)

module.exports = router