const mongoose = require('mongoose');

const CatalogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    }],
    beers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Beers"
    }]
});

module.exports = CatalogSchema;