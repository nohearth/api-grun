const Joi = require('@hapi/joi')
const bcrypt = require('bcryptjs')
const passport = require('passport')

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

function comparePassword(password, encrypedPassword) {
    return bcrypt.compare(password, encrypedPassword)
}

module.exports = {
    validateSignUp,
    comparePassword
}