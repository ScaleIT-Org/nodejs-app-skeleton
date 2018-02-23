// Set up
var express  = require('express');
var path = require('path');
var http = require('http');
var app      = express();                               // create our app w/ express
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './www'));
app.use(express.static(path.join(__dirname, './www')));
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
 
//might fix the # problem when using locationpathstrategy
// app.get("*", (req, res, next) => {
//   if (
//     req.url.indexOf("#") > -1 ||
//     (req.url.lastIndexOf(".") === -1 ||
//       req.url.indexOf("/", req.url.lastIndexOf(".")) > -1)
//   ) {
//     req.url = `/#${req.url}`;
//   }
//   next();
// });

// Routes
app.get('/', function (req, res)
{
    res.render('index.html');
});
 
// listen (start app with node server.js) ======================================
var server = http.createServer(app);	//HTTP SERVER
server.listen(app.get('port'), function () {
	    console.log('Express server listening on port ' + app.get('port'));
});

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint () {
	console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm () {
  console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
  shutdown();
})

// shut down server
function shutdown() {
  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
		}
		console.info("Stopping Server ....");
		process.exit();
  })
}