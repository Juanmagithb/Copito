//antes de empezar colocar npm install

const express = require ("express");
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function (){
    console.log('Servidor funcionando en el puerto http://localhost:3000');
});


app.get('/',(req,res)=>{ 
    res.sendFile(__dirname +'/views/index.html');
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname +'/views/login.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname +'/views/register.html');
});
app.get('/product1',(req,res)=>{
    res.sendFile(__dirname +'/views/product1.html');
});
app.get('/cart',(req,res)=>{
    res.sendFile(__dirname +'/views/cart.html');
});

app.post('/', (req,res)=>{
    res.send('Registro exitoso');
});