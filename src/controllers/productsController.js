
const path = require('path');


const controller = {

	detail: (req, res) => {

		res.render('./products/detailProduct');
	},

	edit: (req, res) => {

		res.render('./products/editProduct');
	},

	new: (req, res) => {

		res.render('./products/newProduct');
	},

	index: (req, res) => {

		res.render('./products/products');
	}

}


module.exports = controller;