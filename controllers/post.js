const mPost = require('../models/post')
const mUser = require('../models/user')

async function createPost(req, res) {
  
  const post = new mPost({
    content: req.body.content,
    imagePost: req.body.imagePost,
    idUser: req.body.idUser
  })

  try {
    const savePost = await post.save()
    res.json(savePost)
  } catch (e) {
    res.json({message: e})
  }
}

async function getOnePost(req, res) {
  try {
    const post = await mPost.findOne({
      _id: req.params.id
    }).populate({path: 'idUser'})
    res.json(post)
  } catch (e) {
    res.json({message: e})
  }
}

async function getAllPostByUser(req, res) {
  try {
    const post = await mPost.find({
      idUser: req.params.idUser
    })
    res.json(post)
  } catch (e) {
    res.json({message: e})
  }
}

module.exports = {
  createPost,
  getOnePost,
  getAllPostByUser
}