const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    sex: {
        type: String
    },
    image: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        default: "1"
    },
    id_rol: {
        type: Number,
        default: 2
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
userSchema.methods.generateToken = async function() {
    const user = this
    const token = jwt.sign({ 
        _id: user._id, 
        firstName: user.firstName,
        lastName: user.lastName, 
        email: user.email,
        image: user.image
    },"secret")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}
userSchema.pre("save", async function(next) {
    const user = this
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

module.exports = mongoose.model('User', userSchema)