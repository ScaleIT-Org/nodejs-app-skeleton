// Set up
var express  = require('express');
var path = require('path');
var http = require('http');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './www'));
app.use(express.static(path.join(__dirname, './www')));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models
var Review = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
});
 
// Routes
app.get('/', function (req, res)
{
	console.log("test")
    res.render('index.html');
});
 
// listen (start app with node server.js) ======================================
var server = http.createServer(app);	//HTTP SERVER
server.listen(app.get('port'), function () {
	    console.log('Express server listening on port ' + app.get('port'));
});

process.on('SIGINT', function() {
  console.log("Terminating ...")
    process.exit();
});