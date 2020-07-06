const mComment = require('../models/comment')
const mpost = require('../models/post')

async function createComment(req, res) {
  const comment = new mComment({
    content: req.body.content,
    idUser: req.body.idUser,
    idPost: req.body.idPost
  })
  try {
    const saveComment = await comment.save()
    res.json(saveComment)
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllCommenttByPost(req, res) {
  try {
    const comment = await mComment.find({
      idPost: req.params.idPost
    }).populate({
      path: 'idUser'
    })
    res.json(comment)
  } catch (e) {
    res.json({message: e})
  }
}

async function deleteComment(req, res) {
  try {
    const comment = await mComment.deleteOne({
      _id: req.params.id
    })
    res.json(comment)
  } catch (e) {
    res.json({message: e})
  }
}

async function updateComment(req, res) {
  const comment = await mComment.findOne({_id: req.params.id})
  const data = ""
  try {
    const commentSave = await mComment.updateOne({
      _id: data.id
    }, {
      $set: data
    })
    res.json(commentSave)
  } catch (e) {
    res.json({message: e})
  }  
}

module.exports = {
  createComment,
  getAllCommenttByPost,
  updateComment,
  deleteComment
}