var Car = require('./models/car.server.model'),
    Equipment = require('./models/equipment.server.model');

module.exports = function(app, dirname) {

    app.get('/cars', function(req, res) {
        Car.find({})
            .populate("equipment")
            .exec(function(err, cars) {
                if(err) res.send([]);
                res.json(cars);
        });
    });

    //show car :id
    app.get('/cars/:id', function(req, res) {
        Car.findById(req.params.id)
            .populate("equipment")
            .exec(function(err, car) {
                if(err) res.json([]);
                res.json(car);
        });
    });

    //create new car
    app.post('/cars', function(req, res) {
        Car.create(req.body, function(err, car) {
            if(err) res.json({ status: 'ERROR'});
            res.json({ status: 'OK' });
        });
    });

    //update car:id
    app.put('/cars/:id', function(req, res) {
        Car.findByIdAndUpdate(req.params.id, req.body, function(err, car) {
            if(err) res.json({ status: 'ERROR'});
            res.json({ status: 'OK' });
        });
    });

    //delete car:id
    app.delete('/cars/"id', function(req, res) {
        Car.findByIdAndRemove(req.params.id, req.body, function(err, car) {
            if(err) res.json({ status: 'ERROR'});
            res.json({ status: 'OK'});
        });
    });

    //list equipments
    app.get('/equipments', function(req, res) {
        Equipment.find(function(err, eq) {
            if(err) res.send([]);
            res.json(eq);
        });
    });

    //show equipment:id
    app.get('/equipments/:id', function(req, res) {
        Equipment.findById(req.params.id, function(err, eq) {
            if(err) return res.json([]);
            res.json(eq);
        });
    });

    //create new equipment
    app.post('/equipments', function(req, res) {
        Equipment.create(req.body, function(err, eq) {
            if(err) return res.json({ status: 'ERROR'});
            res.json({ status: 'OK'});
        });
    });

    //update equipment:id
    app.put('/equipments/:id', function(req, res) {
        Equipment.findByIdAndUpdate(req.params.id, req.body, function(err, eq) {
            if(err) res.json({ status: 'ERROR'});
            res.json({ status: 'OK'});
        });
    });

    //delete equipment:id
    app.delete('/equipments/"id', function(req, res) {
        Equipment.findByIdAndRemove(req.params.id, req.body, function(err, eq) {
            if(err) res.json({ status: 'ERROR'});
            res.json({ status: 'OK' });
        });
    });

    app.get('*', function(req, res) {
        res.sendFile('public/index.html', { root: dirname});
    });

};