var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var passport = require('passport');
var auth = require('./server/authentication/authentication.js');
var session = require('express-session');
var db = require('./server/database/config.js');
fs = require('fs')

var app = express();
app.use(session({secret: 'superlearningsecret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
auth(app, passport);


var restrict = function(req, res, next) {
	console.log("restrict");
  //check if logged in
  if(req.isAuthenticated()) {
    next();
  } else { 
  	res.send(403);
	}
}

app.post('/api/signup', passport.authenticate('local-signup',{
  successRedirect: "/#/user",
  failureRedirect: "/#/signup",
  failureFlash: true
}));

app.post('/api/login', passport.authenticate('local-login',{
  successRedirect: "/#/user",
  failureRedirect: "/#/login",
  failureFlash: true
}));

app.post('/api/authenticated', function(req, res, next)
{
	if(req.isAuthenticated()) {
    res.send(200);
  } else { 
  	res.send(403);
	}
});

app.post('/api/book', function(req, res, next)
{
  fs.readFile('./server/content/test.txt', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.send(200, data);
  });
});

app.get('/#/readflash', restrict, function(req, res, next)
{
  console.log("continue");
  next();
});

app.use(express.static(__dirname + '/public/client'));

module.exports = app;
