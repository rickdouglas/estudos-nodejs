const express = require('express');
const routes = express.Router();

// Crinando a primeira rota
routes.get('/', (rec, res)=>{

	// Product.create({ // teste da model product
	// 	title: "Estudos nodeJs",
	// 	description : "Testar se esta funcionando",
	// 	url: "http://github.com/facebook/react-native"
	// });

	return res.send('Hello from the other side motherfucker !!!');
});
module.exports = routes;