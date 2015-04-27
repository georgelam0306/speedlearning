var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 4568;
console.log(port);
app.use(partials());
// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));
console.log(__dirname);
app.use(express.static(__dirname + '/public/client'));


app.listen(port);
