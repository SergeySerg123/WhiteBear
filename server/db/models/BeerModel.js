const mongoose = require('mongoose');

const BeerSchema = require('../schemas/BeerSchema');

const BeerModel = mongoose.model('Beers', BeerSchema);

module.exports = BeerModel;