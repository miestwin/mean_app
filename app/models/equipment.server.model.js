var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
    name: {
        type: String,
        required: 'Name of the equipment is required'
    },
    description: {
        type: String,
        default: '',
        trim: true
    }
});

module.exports = mongoose.model('Equipment', EquipmentSchema);