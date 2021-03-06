const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");


const ProductSchema = new mongoose.Schema({
	title: {
		type : String,
		required : true
	},
	discription: {
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

ProductSchema.plugin(mongoosePaginate);

mongoose.model("Product", ProductSchema);