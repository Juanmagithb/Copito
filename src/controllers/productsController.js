const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const controller = {


	// Root - Show all products
	index: (req, res) => {

		res.render('./products/products',{
			products
		});
	},
	
	// Show all Palitos
	palitos: (req, res) => {

		res.render('./products/productsPalitos',{
			products
		});
	},
	// Show all Bombones
	bombones: (req, res) => {

		res.render('./products/productsBombones',{
			products
		});
	},
	// Show all Postres
	postres: (req, res) => {

		res.render('./products/productsPostres',{
			products
		});
	},
	// Show all Tortas
	tortas: (req, res) => {

		res.render('./products/productsTortas',{
			products
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('./products/detailProduct',{
			product
		});
	},
	// Create - Form to create
	create: (req, res) => {

		res.render('./products/newProduct');
	},
	// Create -  Method to store
	store: (req, res) => {
		let nuevoProducto = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: parseInt(req.body.price),
			pack:parseInt(req.body.pack),
			stock:parseInt(req.body.stock),
			discount: parseInt(req.body.discount),
			category: req.body.category,
			description: req.body.description,
			image: req.file ? req.file.filename : "default-image.png",
			image2: req.file ? req.file.filename : "informacion-nurtricional.png"
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

		res.redirect("/products");
	},

	// Update - Form to edit
	edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('./products/editProduct', {productToEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
		
		let productToSave = {
			id: productToEdit.id,
			name: req.body.name,
			price: req.body.price,
			stock: req.body.stock,
			pack: req.body.pack,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			/* ...req.body, */
			image: req.file ? req.file.filename : productToEdit.image,
			image2: req.file ? req.file.filename : "informacion-nurtricional.png"
		}

		let indice = products.findIndex(product => {
			return product.id == id
		})
		products[indice] = productToSave;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect("/")
	}

}


module.exports = controller;