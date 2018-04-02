var db = require('../models/index.js');

function index(req, res){
	db.Recipe.find({}, function(err, findRecipes){
	if(err){
		console.log(err);
	}

	res.json(findRecipes);

	})
}

function create(req, res) {

 var ingredients = req.body.ingredients.split(' ,');

 req.body.ingredients = ingredients;

 db.Recipe.create(req.body, function(err, createdRecipe) {
	res.json(createdRecipe);

 })

}
module.exports = {
	index: index,
	create: create
};