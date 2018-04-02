var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/recipes");
mongoose.connect("mongodb://localhost/aboutme");

var RecipesModel = require('./recipe.js');
var AboutMeModel = require('./about.js');

module.exports = {
	Recipe: RecipesModel,
	AboutMe: AboutMeModel
}