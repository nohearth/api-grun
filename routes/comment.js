const router = require('express').Router()
const cComment = require('../controllers/comment')

router.post('/', cComment.createComment)
router.get('/post/:idPost', cComment.getAllCommenttByPost)
router.put('/:id', cComment.updateComment)
router.delete('/:id', cComment.deleteComment)

module.exports = router