const moongose = require('mongoose')
const env = require('./config/env.js')
require('dotenv').config()


const url = `mongodb+srv://${env.db_user}:${env.db_password}@${env.db_link}.mongodb.net/${env.db_name}?retryWrites=true&w=majority`
moongose
    .connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err))