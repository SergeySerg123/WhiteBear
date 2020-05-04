const BeerModel = require('../db/models/BeerModel');

// routes: api/beers/
const BeerController = {
    all: async (req, res) => {
        const beers = await BeerModel.find();
        res.json(beers);
    },

    getById: async (req, res) => {
        const beer = await BeerModel.findById(req.body.id);
        res.json(beer);
    },

    create: async (req, res) => {
        const newBeer = new BeerModel(req.body);
        const savedBeer = await newBeer.save();
        res.json(savedBeer); 
    },

    delete: async (req, res) => {
        const result = await BeerModel.findByIdAndDelete({_id: req.params.id});
        res.json(result);
    }
}

module.exports = BeerController;