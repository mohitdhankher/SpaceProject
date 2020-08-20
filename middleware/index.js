var express = require('express');
var app = express();
var cors = require('cors')
var http = require('http');
var bodyParser = require('body-parser');
app.use(cors());
app.options('*',cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET");
    next();
});
var requests = require('./requestLists.js');
//both index.js and requestlists.js should be in same directory
app.use('/', requests);
http.createServer(app).listen(4001, function() {
    console.log('Express server listening http://localhost:4001/');
});
