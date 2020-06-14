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

async function getAllRol(req, res) {
    try {
        const rol = await mRol.find()
        res.json(rol)
    } catch (e) {
        res.json({message: e})
    }    
}

async function deleteRol(req, res) {
    try {
        const rol = await mRol.deleteOne({ _id: req.params.id })
        res.json(rol)
    } catch (e) {
        res.json({message: e})
    }    
}

async function updateRol(req, res) {
    try {
        const rol = await mRol.updateOne({
            _id: req.params.id
        },{
            $set: {
                name: req.body.name
            }
        })
        res.json(rol)
    } catch (e) {
        res.json({message: e})   
    }
}

module.exports = {
    createRol,
    getAllRol,
    deleteRol,
    updateRol
}