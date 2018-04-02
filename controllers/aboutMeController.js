var db = require('../models/index.js');

function index(req, res){
	db.AboutMe.find({}, function(err, aboutMe){
	if(err){
		console.log(err);
	}

	res.json(aboutMe);

	})
}

module.exports = {
	index: index
};