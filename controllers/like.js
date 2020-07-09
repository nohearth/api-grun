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
      idUser: req.params.idUser,
      idPost: req.params.idPost
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllLikeByPost(req, res) {
  try {
    const like = await mLike.find({
      idPost: req.params.idPost,
      status: 'A'
    }).populate({
      path: 'idUser'
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
}

async function deleteLike(req, res) {
  try {
    const like = await mLike.deleteOne({
      _id: req.params.id
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})
  }
  
}

async function updateLike(req, res) {
  try {
    const like = await mLike.updateOne({
      _id: req.params.id
    }, {
      $set: {
        status: req.body.status
      }
    })
    res.json(like)
  } catch (e) {
    res.json({message: e})    
  }
}

module.exports = {
  createLike,
  getAllLikeByPost,
  deleteLike,
  getUserLike,
  updateLike
}