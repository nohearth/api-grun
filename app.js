const express = require('express')
const bodyParser = require('body-parser')
//Conexion a la base de datos
require('./db.js')

const app = express()

app.use(bodyParser.json())
//Router
require('./routes')(app)

app.get('/',(req, res) =>{
    res.send('Connect')
})

app.listen(3000)