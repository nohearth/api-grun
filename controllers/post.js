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

async function getAllPost(req, res) {
  try {
    const post = await mPost.find().populate({path: 'idUser'})
    res.json(post)
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

async function deletePost(req, res) {
  try {
    const post = await mPost.deleteOne({
      _id: req.params.id
    })
    res.json(post)
  } catch (e) {
    res.json({message: e})
  }
}

async function updatePost(req, res) {
  const post = await mPost.findOne({_id: req.params.id})
  const data = ""
  try {
    const postSave = await mPost.updateOne({
      _id: data.id
    }, {
      $set: data
    })
    res.json(postSave)
  } catch (e) {
    res.json({message: e})
  }  
}

module.exports = {
  createPost,
  getOnePost,
  getAllPostByUser,
  deletePost,
  updatePost,
  getAllPost
}