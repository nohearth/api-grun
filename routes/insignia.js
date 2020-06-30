const router = require('express').Router()
const upload = require('../config/multer')
const cInsignia = require('../controllers/insignia')

router.post('/', upload.single('icon'), cInsignia.createInsignia)
router.post('/user/', cInsignia.addInsigniaByUser)
router.get('/user/:id', cInsignia.getAllInsignias)
router.get('/', cInsignia.getAllInsig)
router.put('/user/:idUser', cInsignia.updateInsigniaByUser)
router.delete('/:id', cInsignia.deleteInsig)

module.exports = router