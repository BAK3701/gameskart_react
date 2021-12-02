const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        platform: { type: Array },
        price: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Game', GameSchema);
