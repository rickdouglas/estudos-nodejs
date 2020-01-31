const express = require("express"); // importa o express
const mongoose = require("mongoose");// importa o mongoose
const requireDir = require("require-dir"); // importação do require dir para fazer automaticamente o require das models
const cors = require("cors");


const app = express(); // Inicia o app
app.use(express.json());
app.use(cors());

//Inicia o DB
mongoose.connect(
	"mongodb://localhost:27017/nodeapi",
 { useNewUrlParser : true }
 );

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);