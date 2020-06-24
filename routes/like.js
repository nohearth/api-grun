const router = require('express').Router()
const cLike = require('../controllers/like')

router.post('/', cLike.createLike)
router.get('/post/:idPost', cLike.getAllLikeByPost)
router.get('/user/:idUser', cLike.getUserLike)
router.delete('/user/:idUser', cLike.deleteLikeByUser)

module.exports = router