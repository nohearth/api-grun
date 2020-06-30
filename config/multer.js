const multer = require('multer')

const storage =  multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() +"-" + file.originalname)
  }
})

const filefilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    return cb(null, true)
  }
  return cb(null, false)
}

const upload = multer({
  storage: storage,
  fileFilter: filefilter
})

module.exports = upload