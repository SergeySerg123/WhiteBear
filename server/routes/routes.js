const express = require('express');
const router = express.Router();
const BeerController = require('../controllers/BeerController');

router.get('/api/beers/all', BeerController.all);
router.get('/api/beers/:id', BeerController.getById);
router.post('/api/beers/create', BeerController.create);
router.delete('/api/beers/:id', BeerController.delete);

module.exports = router;