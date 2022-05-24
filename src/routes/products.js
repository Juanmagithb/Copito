// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Multer config ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/products");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** GET CATEGORY PRODUCTS ***/ 
router.get('/palitos', productsController.palitos); 
router.get('/bombones', productsController.bombones); 
router.get('/tortas', productsController.tortas); 
router.get('/postres', productsController.postres); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create); 
router.post('/', upload.single("image"), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', upload.single("product-image"), productsController.update); 

 /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports = router;