var express    = require('express')
  , http       = require('http')
  , path       = require('path')

  , viewsPath  = path.join(__dirname, 'views')
  , publicPath = path.join(__dirname, 'public')

  , app        = express()
  , listenPort = process.env.PORT || 3000
  , routes     = require('./routes');

// Server setup
app.set('port', listenPort);
app.set('views', viewsPath);
app.set('view engine', 'jade');

// Basics
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);

// LESS/CSS
app.use(require('less-middleware')({
  src: publicPath
}));

// Vendor JavaScript
app.use('/javascripts/vendor/angular', express.static(path.join(__dirname, 'bower_components/angular')))

// Static content
app.use(express.static(publicPath));

// Routes
app.get('/?', routes.home.index);
app.get('/todo/?', routes.todo.index);
app.get('/todo/list-items/?', routes.todo.listItems);

// Development Settings
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});