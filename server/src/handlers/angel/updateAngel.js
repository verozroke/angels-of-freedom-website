const Angel = require('../../models/angel')

const updateAngel = async(req, res) => {
    let data = await Angel.updateOne(
        {_id: req.params.id},
        {$set: req.body}  
    )
    res.send(data)
}
module.exports = updateAngel;