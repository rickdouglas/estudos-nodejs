const express = require("express");
const routes = express.Router();

//Importar o ProductController
const ProductController = require("./controllers/ProductController");

// Crinando a primeira rota
routes.get("/products", ProductController.index);
routes.post('/products', ProductController.store);


module.exports = routes;