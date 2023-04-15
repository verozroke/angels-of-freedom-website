const Donate = require('../../models/donate')

const updateDonate = async(req, res) => {
    let data = await Donate.updateOne(
        {_id: req.params.id},
        {$set: req.body}  
    )
    res.send(data)
}
module.exports = updateDonate;