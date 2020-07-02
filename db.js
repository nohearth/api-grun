const moongose = require('mongoose')
const env = require('./config/env.js')
require('dotenv').config()

const url = `mongodb://localhost:27017/apigrun`
moongose
    .connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))