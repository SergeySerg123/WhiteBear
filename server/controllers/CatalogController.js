const CatalogModel = require('../db/models/CatalogModel');

const CatalogController = {
    all: async (req, res) => {
        const categories = await CatalogModel.find();
        res.json(categories);
    },

    findById: async (req, res) => {

    },

    create: async (req, res) => {
        const newCategory = new CatalogModel(req.body);
        const savedNewCategory = await newCategory.save();
        res.json(savedNewCategory);
    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {

    }
}

module.exports = CatalogController;