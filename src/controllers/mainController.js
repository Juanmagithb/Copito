const path = require('path');

const controller = {
	index: (req, res) => {
		res.render('index');
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
