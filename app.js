var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons  = require('consolidate');
var bodyParser = require('body-parser');
var file = require('file-system');
var fs = require('fs');
var multer = require('multer');
var webdriver = require('selenium-webdriver');
var chromedriver = require('chromedriver');

const request = require('request-promise');
const cheerio = require('cheerio');
const session = require('express-session');
const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const csv = require('csv-parser');
const formidable = require('formidable');
const url = 'https://pastorchrisdigitallibrary.org/campaigns/gold/portal.php?username=cephzone3';

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(session({secret: 'ssshhhhh'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('storage', path.join(__dirname, 'public/storage'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
