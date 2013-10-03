var express = require('express'),
  http = require('http'),
  path = require('path'),

  listenPort = process.env.PORT || 3000,
  viewsPath = path.join(__dirname, 'views'),
  publicPath = path.join(__dirname, 'public'),

  app = express(),
  routes = require('./routes');

// Setup
app.set('port', listenPort);
app.set('views', viewsPath);
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({
  src: publicPath
}));
app.use(express.static(publicPath));

// Routes
app.get('/?', routes.index);
app.get('/todo/?', routes.todo);

// Development Settings
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});