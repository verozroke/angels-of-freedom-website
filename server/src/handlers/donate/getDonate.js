const Donate = require('../../models/donate')



const getDonate = async (req, res) => {
    Donate.find({})
    .then(function(donates) { 
        res.send(donates)
    });
}
module.exports = getDonate;
