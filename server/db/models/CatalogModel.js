const mongoose = require('mongoose');
const CatalogSchema = require('../schemas/CatalogSchema');

const CatalogModel = mongoose.model("Categories", CatalogSchema)

module.exports = CatalogModel;