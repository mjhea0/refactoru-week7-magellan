// dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var request = require('request');
var app = express();

// all environments
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

var picturesArray = [
  '<div class="img"><img src=/images/seville.jpg><div>',
  '<div class="img"><img src=/images/canary.jpg><div>',
  '<div class="img"><img src=/images/verde.jpg><div>',
  '<div class="img"><img src=/images/strait.jpg><div>',
  '<div class="img"><img src=/images/guam.jpg><div>',
  '<div class="img"><img src=/images/philippines.jpg><div>'
  ];

// routes
app.get('/', function(req, res) {res.render('index')});
app.get('/search', function(req, res){
  var val = req.query.location;
  if (val === "Seville") {
  	res.send(picturesArray[0])
  } else if (val === "Canary Islands") {
  	res.send(picturesArray[1])
  } else if (val === "Cape Verde") {
  	res.send(picturesArray[2])
  } else if (val === "Strait of Magellan") {
  	res.send(picturesArray[3])
  } else if (val === "Guam") {
  	res.send(picturesArray[4])
  } else if (val === "The Philippines") {
  	res.send(picturesArray[5])
  }
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});