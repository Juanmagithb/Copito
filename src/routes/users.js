// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const userController = require('../controllers/userController');

// ************ Middlewares ************

const userLogged = require('../middlewares/userLogged');
const userLoggedChek = require('../middlewares/userLoggedChek');

// ************ Multer config ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});
//pasar esto a un middleware

/*** USER LOGIN***/

router.get('/login',userLogged, userController.login);
router.post('/login', userController.loginProcess);
router.get('/profile',userLoggedChek, userController.profile);
router.get('/editProfile', userController.editProfile);
router.patch('/editProfile/:id', upload.single("userImage"), userController.editProfileUpdate); 


/*** CREATE NEW USER ***/

router.get('/register',userLogged, userController.register);
router.post('/', upload.single("userImage"), userController.create);

/*** OPEN CART ***/

router.get('/cart',userLoggedChek, userController.cart);

/*** Destroy session ***/

router.get('/logout', userController.logOut);

module.exports = router;