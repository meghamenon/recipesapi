var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AboutSchema = new Schema ({

	name: String,
	githubUsername: String, 
	currentCity: String	
});

var AboutMe = mongoose.model('AboutMe', AboutSchema);

module.exports = AboutMe;