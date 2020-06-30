const router = require('express').Router()
const cRol = require('../controllers/rol')

router.post('/', cRol.createRol)
router.get('/', cRol.getAllRol)
router.delete('/:id', cRol.deleteRol)
router.put('/:id', cRol.updateRol)

module.exports = router