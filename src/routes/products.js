// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

router.get('/detail/palito-naranja', productsController.detail); 
router.get('/new', productsController.new); 
router.get('/edit', productsController.edit); 
router.get('/', productsController.index); 

module.exports = router;