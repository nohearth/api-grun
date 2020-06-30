const router = require('express').Router()
const cPost = require('../controllers/post')

router.post('/', cPost.createPost)
router.get('/', cPost.getAllPost)
router.get('/:id', cPost.getOnePost)
router.get('/user/:idUser', cPost.getAllPostByUser)
router.put('/:id', cPost.updatePost)
router.delete('/:id', cPost.deletePost)

module.exports = router