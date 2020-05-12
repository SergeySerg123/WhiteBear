const mongoose = require('mongoose');

const CatalogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }],
    beers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beers"
    }]
});

module.exports = CatalogSchema;