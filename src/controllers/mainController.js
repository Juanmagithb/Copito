const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	index: (req, res) => {

		if(req.session.userLogged){
			let userLog = req.session.userLogged;
			res.render('index',{
				products, userLog
			});
		}
		else{

			let userLog = [{
				category: 'User'
			}];

			res.render('index',{
				products,userLog
			});

		}


}
}

module.exports = controller;
