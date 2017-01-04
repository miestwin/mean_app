var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan');

var mongoose = require('mongoose'),
    database = require('./config/database');
mongoose.Promise = global.Promise;

var port = process.env.PORT || 8080;

mongoose.connect(database.url)
    .then(() =>  console.log('Connection succesful'))
    .catch((err) => console.error(err));

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

require('./app/routes')(app, __dirname);

app.listen(port);
console.log("App listening on port " + port);