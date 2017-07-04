//server 
var express = require('express');
var app = express();
var router = require('./routes/router.js');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var session = require('express-session');
var cookiesParser = require('cookie-parser');

app.set('view engine', 'html');

app.engine('html', function(path, options, callbacks){
	fs.readFile(path, 'utf-8', callback);
});

app.use(express.static(path.join(__dirname, '../client')));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Hells');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Successfully Connected to MongoDB!");
});

app.use(function(req, res, next){
	console.log("A new connection: " + req.ip);
	next();
})

app.use(cookiesParser());
app.use(session({
    secret: "fd34s@!@dfa453f3DF#$D&W",
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use('/', router);

module.exports = app;
