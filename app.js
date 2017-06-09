var app = require('./config/server');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var index = require('./app/routes/index');
var noticias = require('./app/routes/noticias');
var addnoticia = require('./app/routes/addnoticia');
var users = require('./app/routes/users');

app.use('/', index);
app.use('/noticias', noticias);
app.use('/addnoticia', addnoticia);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
