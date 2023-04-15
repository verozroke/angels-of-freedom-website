const mongoose = require("mongoose");

const angelSchema = new mongoose.Schema({
    id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Angel',
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    typeOfAngel: {
        type: String,
        required: true,
    },
    phone: {
        ref: 'Angel',
        type: Number,
        required: true,
    },
    adress: {
        ref: 'Angel',
        type: String,
        required: true,
    },
    payment: {
        ref: 'Angel',
        type: Boolean,
    },
    sum: {
        ref: 'Angel',
        type: String,
    },
    date: {
        type: Date,
        ref: 'Angel',
    }
});

module.exports = mongoose.model("Angel", angelSchema);
