const mongoose = require("mongoose");

const donateSchema = new mongoose.Schema({
  id: {
    type: [mongoose.Types.ObjectId],
    ref: 'Donate',
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  payment: {
    ref: 'Donate',
    type: Boolean,
  },
  sum: {
    ref: 'Donate',
    type: String,
  },
  date: {
    type: Date,
    ref: 'Donate',
  },
});

module.exports = mongoose.model("Donate", donateSchema);
