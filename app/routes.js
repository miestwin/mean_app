var Car = require('./models/car.server.model'),
    Equipment = require('./models/equipment.server.model');

module.exports = function(app, dirname) {

    app.get('/api/cars', function(req, res) {
        Car.find(function(err, cars) {
            if(err) res.send(err);
            res.json(cars);
        });
    });

    app.get('/api/equipments', function(req, res) {
        Equipment.find(function(err, cars) {
            if(err) res.send(err);
            res.json(cars);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile('public/views/index.html', { root: dirname});
    });

};