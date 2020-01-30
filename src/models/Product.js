const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
	title: {
		type : String,
		required : true
	},
	description: {
		type : String,
		required : true
	},
	url : {
		type : String,
		required : true
	},
	createdAt : { // sera preenchido automaticamente com a data de criação da tabela
		type : Date,
		default : Date.now
	}
});

mongoose.model("Product", ProductSchema);