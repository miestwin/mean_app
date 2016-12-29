var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan');

var mongoose = require('mongoose'),
    database = require('./config/database');
mongoose.Promise = global.Promise;

// var Car = require('./app/models/car.server.model'),
//     Equipment = require('./app/models/equipment.server.model');

var port = process.env.PORT || 8080;

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

require('./app/routes')(app, __dirname);

// var eq1 = new Equipment({
//     name: 'GPS'
// });
// var eq2 = new Equipment({
//     name: 'Szyberdach'
// });
// eq1.save(function(err, data) {
//     if(err) console.log(err);
// });
// eq2.save(function(err, data) {
//     if(err) console.log(err);
// });
// var s1 = new Car({
//     equipment: [eq1._id]
// });
// var s2 = new Car({
//     equipment: [eq2._id]
// });
// s1.save(function(err, data) {
//     if(err) console.log(err);
// });
// s2.save(function(err, data) {
//     if(err) console.log(err);
// });

app.listen(port);
console.log("App listening on port " + port);