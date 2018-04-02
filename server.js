console.log("Hi");

var express = require('express');
var app = express();

var db = require('./models/index.js')
var controllers = require("./controllers");
var bodyParser = require("body-parser");


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, respond){

	respond.sendFile('views/index.html', {root : __dirname});

});

app.get('/api', controllers.api.index);
app.get('/api/aboutme', controllers.aboutMe.index);
app.get('/api/recipes', controllers.recipes.index);
app.post('/api/recipes', controllers.recipes.create);
app.listen(3000);