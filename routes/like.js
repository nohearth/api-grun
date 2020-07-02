const router = require('express').Router()
const cLike = require('../controllers/like')

router.post('/', cLike.createLike)
router.get('/post/:idPost', cLike.getAllLikeByPost)
router.get('/user/:idUser/:idPost', cLike.getUserLike)
router.delete('/:id', cLike.deleteLike)
router.put('/:id', cLike.updateLike)

module.exports = router