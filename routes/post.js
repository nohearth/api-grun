const router = require('express').Router()
const cPost = require('../controllers/post')

router.post('/', cPost.createPost)
router.get('/:id', cPost.getOnePost)
router.get('/user/:idUser', cPost.getAllPostByUser)

module.exports = router