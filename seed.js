var db = require("./models");

var aboutMe = [
	{
		name: 'Megha Menon',
		githubUsername: 'meghamenon',
		currentCity: 'Fremont'
	}
]
var recipeList = [

{	
	recipeName: 'Biscotti',
	type: 'biscuit',
	ingredients: [' Almond paste ', ' Butter ', ' Sugar ', ' AP Flour ', ' Baking Powder ', ' Salt ' , ' Eggs ', ' Hazelnuts ']

}, {
	recipeName: 'Blackberry sorbet',
	type: 'sorbet',
	ingredients: [' Blueberries ', ' Sugar ', ' Lemon ']
}, {
	
	recipeName: 'Pistachio cake',
	type: 'cake',
	ingredients: [' Butter ', ' Eggs ', ' Sugar ', ' Almond paste ', ' Cake flour ', ' Salt ', ' Pistachio flour' , ' Mascarpone' , ' Lemon curd']
}, {
	
	recipeName: 'Crostata',
	type: 'pastry',
	ingredients: ['Butter ', ' AP Flour ', ' Cold Water ', ' Peaches ', ' Brown Butter ']

}];

db.Recipe.remove({}, function(err, recipes){

	db.Recipe.create(recipeList, function(err, recipes){
		if(err){
			return console.log('Error', err);
				}
		console.log("all recipes:", recipes);
		console.log("created", recipes.length, "recipes");
		process.exit();
	});
});