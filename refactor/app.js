
// dependencies
var express = require('express')
var http = require('http')
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {res.render('index')});

app.get('/search', function(req, res) {
	var currentLocation = req.query.location;
	console.log(currentLocation)
	if(currentLocation === 'Seville') {
		results = {current:'Seville', next:'Canary Islands', description:'Seville is a Spanish city, it is the capital and largest city of the autonomous community of Andalusia and the province of Seville'};
	} else if(currentLocation === 'Canary Islands') {
		results = {current:'Canary Islands', next:'Cape Verde', description:'The Canary Islands, also known as the Canaries, are a Spanish archipelago located just off the northwest coast of mainland Africa, 100 kilometres west of the border between Morocco and the Western Sahara.'};
	} else if(currentLocation === 'Cape Verde') {
		results = {current:'Cape Verde', next:'Strait of Magellan', description:'Cape Verde, officially the Republic of Cape Verde, is an island country, spanning an archipelago of 10 islands located in the central Atlantic Ocean, 570 kilometres off the coast of Western Africa.'};
	} else if(currentLocation === 'Strait of Magellan') {
		results = {current:'Strait of Magellan', next:'Guam', description:'The Strait of Magellan is a navigable sea route immediately south of mainland South America and north of Tierra del Fuego.'};
	} else if(currentLocation === 'Guam') {
		results = {current:'Guam', next: 'The Philippines', description:'Guam is an organized, unincorporated territory of the United States in the western Pacific Ocean. It is one of five U.S. territories with an established civilian government.'};
	} else if(currentLocation === 'The Philippines') {
		results = {current:'The Philippines', next:'Seville', description:'The Philippines, officially known as the Republic of the Philippines, is a sovereign island country in Southeast Asia situated in the western Pacific Ocean.'};
	};
	res.send(results);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
