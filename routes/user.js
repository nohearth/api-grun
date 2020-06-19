const router = require('express').Router()
const cUSer = require('../controllers/user')
const auth = require('../config/auth')

router.post('/signup', cUSer.createUser)
router.post('/login', cUSer.loginUser)
router.get('/', cUSer.getAllUser)
router.get('/me', auth, cUSer.getUserDetails)
router.delete('/:id', cUSer.deleteUser)
module.exports = router