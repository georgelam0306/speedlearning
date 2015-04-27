var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');


var app = express();
app.use(partials());
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
console.log(__dirname);
app.use(express.static(__dirname + '/public/client'));

module.exports = app;
