const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		res.render('index',{
			products
		});
	},

    login: (req, res) => {
        res.render('./users/login');
    },

    register: (req, res) => {
        res.render('./users/register');
    },

    cart: (req, res) => {
        res.render('./users/cart');
    },

};

module.exports = controller;
