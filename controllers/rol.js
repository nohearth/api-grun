const mRol = require('../models/rol')

async function createRol (req, res) {
    const rol = new mRol({
        name: req.body.name
    })
    try {
        const saveRol = await rol.save()
        res.json(saveRol)
    } catch (e) {
        res.json({message: e})
    }
}

module.exports = {
    createRol
}