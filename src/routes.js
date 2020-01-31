const express = require("express");
const routes = express.Router();

//Importar o ProductController
const ProductController = require("./controllers/ProductController");

// Crinando a primeira rota
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete("/products/:id", ProductController.destroy);


module.exports = routes;