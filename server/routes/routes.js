const express = require('express');
const router = express.Router();
const BeerController = require('../controllers/BeerController');
const CatalogController = require('../controllers/CatalogController');

//BeerController.js routes
router.get('/api/beers', BeerController.all);
router.get('/api/beers/:id', BeerController.getById);
router.post('/api/beers', BeerController.create);
router.delete('/api/beers/:id', BeerController.delete);

//CatalogController.js routes
router.get('/api/catalog', CatalogController.all);
router.get('/api/catalog/:id', CatalogController.getById);
router.put('/api/catalog/:id', CatalogController.update);
router.post('/api/catalog', CatalogController.create);
router.delete('/api/catalog/:id', CatalogController.delete);

module.exports = router;