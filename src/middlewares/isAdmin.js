function isAdmin (req,res,next){


    if(req.session.userLogged){

        let userLogged = req.session.userLogged;

            if(userLogged.category ==="Admin"){
                next();
            }
            else{
            return res.redirect("/products");  
            }
    }
    else{

        return res.redirect("/products");  
    }
}

module.exports = isAdmin ;