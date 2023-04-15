const Angel = require('../../models/angel')

const getAngel = async(req, res) => {
    Angel.find({})
        .then(function(angels) { 
            res.send(angels)
        });
}
module.exports = getAngel;