const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs')

function validateSignUp(body) {
    const schema = Joi.object().keys({
        firstName: Joi.string()
            .alphanum()
            .required(),
        lastName: Joi.string()
            .alphanum()
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
    })
    const {value, error} = schema.validate(body)
    if (error && error.details) {
        return {error}    
    }
    return {value}
}

function validateUpdate(body, file, user) {
    let firstName = body.firstName
    let lastName = body.lastName
    let email = body.email
    let password = body.password
    let sex = body.sex
    let image = setUrlImg(file.path)
    return data = {
        firstName: firstName || (firstName = user.firstName),
        lastName: lastName || (lastName = user.lastName),
        email: email || (email = user.email),
        password: password || (password = user.password),
        sex: sex || (sex = user.sex),
        image: image || (image = user.image)
    }
}

function setUrlImg(img) {
    return `http://localhost:3000/${img}`
}
function comparePassword(password, encrypedPassword) {
    return bcrypt.compare(password, encrypedPassword)
}

module.exports = {
    validateSignUp,
    comparePassword,
    validateUpdate,
    setUrlImg
}