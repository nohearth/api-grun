const router = require('express').Router()
const cUSer = require('../controllers/user')
const upload = require('../config/multer')
const auth = require('../config/auth')

router.post('/signup', cUSer.createUser)
router.post('/login', cUSer.loginUser)
router.get('/', cUSer.getAllUser)
router.get('/:email', cUSer.getOneUser)
router.get('/me', auth, cUSer.getUserDetails)
router.delete('/:id', cUSer.deleteUser)
router.put('/:email', upload.single('image'), cUSer.updateUser)

module.exports = router