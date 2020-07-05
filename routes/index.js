'use strict'

module.exports = function (app) {
    app.use('/rol', require('./rol'))
    app.use('/user', require('./user'))
    app.use('/post', require('./post'))
    app.use('/comment', require('./comment'))
    app.use('/like', require('./like'))
    app.use('/insignia', require('./insignia'))
    app.use('/notification', require('./notification'))
}

