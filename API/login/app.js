//express invocation 
const express = require('express');
const app = express();

//urlencoded settings - forms data capture
app.use(express.urlencoded({
    extended:false;
}));
app.use(express.json());

//dotenv invocation
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//




app.get('/', (req, res) => {
    res.send('Hola mundo');
});


var puerto = 3000;
app.listen(puerto, (req, res) => {
    console.log('Corriendo servidor en puerto: ' + puerto);
});



