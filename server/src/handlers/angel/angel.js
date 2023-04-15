const Angel = require("../../models/angel");

const angel = async (req, res) => {
    const error = false
    if (error) {
      return res.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const ang = new Angel({
        name: req.body.name,
        surname: req.body.surname,
        typeOfAngel: req.body.typeOfAngel,
        phone: req.body.phone,
        payment: req.body.payment,
        adress: req.body.adress,
        sum: req.body.sum,
        date: req.body.date,
    });
    const saved = await ang.save();
    return res.json({
      success: true,
      angel: saved,
    });
  };

module.exports = angel;
