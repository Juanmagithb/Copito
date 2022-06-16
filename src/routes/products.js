// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
const isAdmin = require('../middlewares/isAdmin');

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
router.get('/create',isAdmin, productsController.create); 
router.post('/',isAdmin, upload.single("productImage"), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id',isAdmin, productsController.edit); 
router.patch('/edit/:id',isAdmin, upload.single("productImage"), productsController.update); 

 /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports = router;