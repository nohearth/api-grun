const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
//Conexion a la base de datos
require('./db.js')

const port = process.env.PORT || 3000;

const app = express()

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
//Router
require('./routes')(app)

app.get('/',(req, res) =>{
    res.send('Connectado')
})

app.listen(port)