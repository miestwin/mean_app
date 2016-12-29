var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarSchema = new Schema({
    car_body: {
        type: String,
        default: 'No data',
        trim: true
    },
    engine: {
        type: Number,
        default: 0,
        min: 0  
    },
    color: {
        type: String,
        default: 'No data',
        trim: true
    },
    course: {
        type: Number,
        default: 0,
        min: 0
    },
    car_model: {
        type: String,
        default: 'No data',
        trim: true
    },
    car_brand: {
        type: String,
        default: 'No data',
        trim: true
    },
    data_of_production: {
        type: Date,
        default: Date.now
    },
    equipment: [{
        type: Schema.Types.ObjectId
        //ref: Equipment
    }]
});

module.exports = mongoose.model('Car', CarSchema);