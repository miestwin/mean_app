var Car = require('./models/car.server.model'),
    Equipment = require('./models/equipment.server.model');

module.exports = function(app, dirname) {

    //list cars
    app.get('/', function(req, res) {
        Car.find(function(err, cars) {
            if(err) res.send(err);
            res.json(cars);
        });
    });

    //show car :id
    app.get('/cars/:id', function(req, res) {

    });

    //create new car
    app.post('/cars', function(req, res) {

    });

    //update car:id
    app.put('/cars/:id', function(req, res) {

    });

    //delete car:id
    app.delete('/cars/"id', function(req, res) {

    });

    //list equipments
    app.get('/equipments', function(req, res) {
        Equipment.find(function(err, cars) {
            if(err) res.send(err);
            res.json(cars);
        });
    });

    //show equipment:id
    app.get('/equipments/:id', function(req, res) {

    });

    app.post('/equipments', function(req, res) {

    });

    //update car:id
    app.put('/equipments/:id', function(req, res) {

    });

    //delete car:id
    app.delete('/equipments/"id', function(req, res) {

    });

    app.get('*', function(req, res) {
        res.sendFile('public/views/index.html', { root: dirname});
    });

};