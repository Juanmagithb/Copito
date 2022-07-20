const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;

function producto(){
db.Product.findByPk(1)
.then(products => {
                console.log(products)
            })};

producto();


//node src/controllers/prueba.js