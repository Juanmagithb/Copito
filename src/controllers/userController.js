const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/usersDataBase.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const bcryptjs = require ('bcryptjs');

const controller = {


	findByfield: function(field,text){
		let userFound = user.find(user => user[field] === text);
		return userFound;
	},

		// Render login form
    login: (req, res) => {
        res.render('./users/login');
    },
		//Login
	loginProcess: (req, res) => {

        let userToLogin = user.find(user => user.email === req.body.email);

		if(userToLogin){
			let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
			if(passwordOk){

				req.session.userLogged = userToLogin;

				return res.redirect('/users/profile');
				// delete userToLogin.password;//elimino la password por seguridad

			}
			else{
				return res.render('./users/login',{
					errors:{
						password:{
							msg: 'password incorrecta, por favor vuelva a ingresar'
						}
					}
				});
			}
		}
		
		return res.render('./users/login',{
			errors:{
				email:{
					msg: 'email incorrecto, por favor vuelva a ingresar'
				}
			}
		});
		

	

    },
		//Render profile form

	profile: (req,res) => {

		let userLog = req.session.userLogged;
		res.render('./users/profile',{
			userLog
		});

	},

		//Render editProfile form

	editProfile: (req,res) => {
		let userLog = req.session.userLogged
		res.render('./users/editProfile', {userLog})
	},

		//Render save new profile form

	editProfileUpdate: (req,res) => {

		const id = req.params.id;
		let userToEdit = user.find(user => user.id == id);

		let userToSave = {
			id: userToEdit.id,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber: req.body.phoneNumber ,
			email: req.body.email,
			password: req.body.password ? bcryptjs.hashSync(req.body.password,10) : userToEdit.password,
			category: req.body.category ? req.body.category : userToEdit.category,
			userImage: req.file ? req.file.filename : userToEdit.userImage,
		}

		let indice = user.findIndex(user => {
			return user.id == id
		})

		user[indice] = userToSave;

		fs.writeFileSync(userFilePath, JSON.stringify(user, null, " "));

		delete req.session.userLogged;
		res.redirect("/users/login")

	},
		

		// Render register form
    register: (req, res) => {

        res.render('./users/register');

    },

    	// Create a New User
	create: (req, res) => {
		let nuevoUsuario = {
			id: user[user.length - 1].id + 1,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phoneNumber:parseInt(req.body.phoneNumber),
            email: req.body.email,
            // password: req.body.password, poca seguridad
			password: bcryptjs.hashSync(req.body.password,10),//hasheo de la password
			category: req.body.category,
			userImage: req.file ? req.file.filename : "default.png",
		}

		user.push(nuevoUsuario);
		fs.writeFileSync(userFilePath, JSON.stringify(user, null, " "));

		res.redirect("/users/login");
	},


    cart: (req, res) => {

        res.render('./users/cart');

    },

	logOut: (req, res) => {

		delete req.session.userLogged;
		res.redirect("/users/login");

    },

};

module.exports = controller;
