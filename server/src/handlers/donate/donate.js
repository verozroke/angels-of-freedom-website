const Donate = require("../../models/donate");

const donate = async (req, res) => {
    const error = false
    if (error) {
      return res.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const don = new Donate({
        name: req.body.name,
        surname: req.body.surname,
        sum: req.body.sum,
        payment: req.body.payment,
        date: req.body.date,
    });
    const saved = await don.save();
    return res.json({
      success: true,
      donate: saved,
    });
  };

module.exports = donate;