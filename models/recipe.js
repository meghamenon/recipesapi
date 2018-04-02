var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RecipeSchema = new Schema ({

	recipeName: String,
	type: String, 
	ingredients: [String]
	
});

var Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;