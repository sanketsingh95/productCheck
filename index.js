"use strict";

var express = require("express");
var app = express();
const morgan = require("morgan");
var bodyParser = require("body-parser");
const routes = require("./app/routes");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST");
    next();
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(morgan("dev"));
app.use(routes);

//listening on port
app.listen(3052, function() {
    console.log("SERVER IS UP ON ", 3052);
});
