const router = require('express').Router()
const cUSer = require('../controllers/user')
const upload = require('../config/multer')
const auth = require('../config/auth')

router.post('/signup', cUSer.createUser)
router.post('/login', cUSer.loginUser)
router.get('/', cUSer.getAllUser)
router.get('/:id', cUSer.getOneUser)
router.get('/me', auth, cUSer.getUserDetails)
router.delete('/:id', cUSer.deleteUser)
router.put('/:id', cUSer.updateUser)
router.put('/drop/:id', cUSer.dropTokens)

module.exports = router