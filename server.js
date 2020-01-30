const express = require('express'); // importa o express
const mongoose = require('mongoose');// importa o mongoose


const app = express(); // Inicia o app

//Inicia o DB
mongoose.connect('mongodb://localhost:27017/nodepai',
 {useNewUrlParser: true});

// Crinando a primeira rota
app.get('/', (rec, res)=>{
	res.send('Hello from the other side motherfucker !!!');
});

app.listen(3001);