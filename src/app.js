// ************ Require's ************
const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session'); // para poder usar session

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // 
app.use(express.json()); // 
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(session({
    secret:"Es un secreto",
    resave: false,
    saveUninitialized: false
}));

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() - (don't touch) ************
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas products
const usersRouter = require('./routes/users'); // Rutas products

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor funcionando en el puerto http://localhost:3000');
});


