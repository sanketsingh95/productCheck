'use strict';

var express = require('express')
var multer = require('multer');
var form = multer();
var app = express();
var bodyParser = require('body-parser');


app.use(function(req, res, next) 
{
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,POST");
    next();
});

var env="prod";
var port="3052";

console.log("Port:"+port+"env:"+env);

exports.env=env;

//var db = require('./database/mongoConnect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(form.array());

var routes = require('./app/routes');
routes(app);

//listening on port
app.listen(port, function() {
   console.log('third person profile '+env+' api started on port: ' + port);
});