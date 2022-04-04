//antes de empezar colocar npm install

const express = require ("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

const path = require("path");

app.listen (3030,()=> console.log("Servidor corriendo http://localhost:3030"));

app.get('/',(req,res)=>{ 
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});
app.get('/products',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/products.html'));
});
app.get('/cart',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/cart.html'));
});
