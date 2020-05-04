const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 6
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    density: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percentOfDiscount: {
        type: Number,
        required: false
    },
    isTop: Boolean,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }
});

module.exports = BeerSchema;