const mLike = require('../models/like')

async function createLike(req, res) {
  try {
    const like = mLike.create({
      idUser: req.body.idUser,
      idPost: req.body.idPost
    })
    const saveLike = await (await like).save()
    res.json(saveLike)
  } catch (e) {
    res.json({message: e})
  }
}

async function getUserLike(req, res) {
  try {
    const like = await mLike.findOne({
      idUser: req.params.idUser
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllLikeByPost(req, res) {
  try {
    const like = await mLike.find({
      idPost: req.params.idPost
    }).populate({
      path: 'idUser'
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
}

async function deleteLikeByUser(req, res) {
  try {
    const like = await mLike.deleteOne({
      idUser: req.params.idUser
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
  
}

module.exports = {
  createLike,
  getAllLikeByPost,
  deleteLikeByUser,
  getUserLike
}